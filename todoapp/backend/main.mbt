///|
/// Create the `todos` table if it doesn't already exist.
///
/// The `text` column is stored as `BLOB` so that SQLite round-trips
/// arbitrary UTF-8 without re-encoding. See `bind_string_as_blob` /
/// `column_blob_as_string` in the read/write helpers.
fn init_db(conn : @sqlite3.Connection) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS todos (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  text BLOB NOT NULL,
      #|  done INTEGER NOT NULL DEFAULT 0
      #|)
    ),
  )
  stmt.step_once()
  stmt.finalize()
}

///|
/// Extract a `Todo` from the current row of a prepared statement.
///
/// Expects columns in `SELECT id, text, done` order. Uses
/// `column_blob_as_string` for the text column to match the BLOB storage.
fn read_todo_from_stmt(stmt : @sqlite3.Statement) -> @shared.Todo {
  let id : Int = stmt.column(index=0)
  let text : String = stmt.column_blob_as_string(index=1)
  let done : Int = stmt.column(index=2)
  { id, text, done: done != 0 }
}

///|
/// Return every todo, ordered by id (insertion order).
fn get_all_todos(
  conn : @sqlite3.Connection,
) -> Array[@shared.Todo] raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT id, text, done FROM todos ORDER BY id")
  let todos : Array[@shared.Todo] = []
  while stmt.step() {
    todos.push(read_todo_from_stmt(stmt))
  }
  stmt.finalize()
  todos
}

///|
/// Insert a new todo and return it with the auto-generated id.
///
/// Uses `bind_string_as_blob` for UTF-8 safety, then queries
/// `last_insert_rowid()` to populate the returned `Todo.id`.
fn create_todo(
  conn : @sqlite3.Connection,
  text : String,
) -> @shared.Todo raise @sqlite3.SqliteError {
  let stmt = conn.prepare("INSERT INTO todos (text, done) VALUES (?, 0)")
  stmt.bind_string_as_blob(index=1, val=text)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id : Int = stmt2.column(index=0)
  stmt2.finalize()
  { id, text, done: false }
}

///|
/// Flip a todo's `done` status and return the updated row.
///
/// Performs the toggle in a single UPDATE (no read-modify-write race),
/// then re-selects the row to return the full `Todo` to the caller.
fn toggle_todo(
  conn : @sqlite3.Connection,
  id : Int,
) -> @shared.Todo raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "UPDATE todos SET done = CASE WHEN done = 0 THEN 1 ELSE 0 END WHERE id = ?",
  )
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT id, text, done FROM todos WHERE id = ?")
  stmt2.bind(index=1, val=id)
  guard stmt2.step()
  let todo = read_todo_from_stmt(stmt2)
  stmt2.finalize()
  todo
}

///|
/// Delete a todo by id. No-op if the id doesn't exist.
fn delete_todo(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM todos WHERE id = ?")
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Entry point — parse CLI args, open the database, register routes, and
/// start the Mocket HTTP server.
///
/// Routes:
/// - `GET /`                — serves the HTML shell (inlined) that loads the frontend
/// - `GET /frontend.js`     — serves the compiled frontend bundle from `public/`
/// - `GET /api/todos`       — list all todos (JSON)
/// - `POST /api/todos`      — create a todo (`{"text": "..."}`)
/// - `POST /api/todos/:id/toggle` — toggle done status, returns updated todo
/// - `DELETE /api/todos/:id` — delete a todo (204 No Content)
fn main raise {
  // FIXME: error only highlight `appfn`
  guard @argparse.parse(
      Command("todo-server", about="Todo List backend server", options=[
        OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
          "4000",
        ]),
      ]),
    )
    is { values: { "port": [port], .. }, .. } else {
    println("Failed to parse arguments")
    return
  }
  let port = @strconv.parse_int(port)

  let conn = @sqlite3.Connection::open("todos.db")
  println("Database opened: todos.db")

  init_db(conn)
  println("Database initialized")

  let app = @mocket.new()
  app
  ..use_middleware(@cors.handle_cors())
  ..get("/", _ => {
    println("GET /")
    let html =
      #|<!DOCTYPE html>
      #|<html>
      #|<head>
      #|  <meta charset="UTF-8">
      #|  <meta name="viewport" content="width=device-width, initial-scale=1.0">
      #|  <title>Todo List</title>
      #|  <style>
      #|    * { margin: 0; padding: 0; box-sizing: border-box; }
      #|    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; color: #333; }
      #|  </style>
      #|</head>
      #|<body>
      #|  <div id="app"></div>
      #|  <script src="/frontend.js"></script>
      #|</body>
      #|</html>
    @mocket.HttpResponse::new(
      OK,
      headers={ "Content-Type": "text/html; charset=utf-8" },
      raw_body=@utf8.encode(html),
    )
  })
  ..get("/frontend.js", _ => {
    println("GET /frontend.js")
    try {
      let bytes = @fs.read_file_to_bytes("./public/frontend.js")
      @mocket.HttpResponse::new(
        OK,
        headers={ "Content-Type": "application/javascript; charset=utf-8" },
        raw_body=bytes,
      )
    } catch {
      _ => {
        println("  -> 404 Not Found")
        @mocket.HttpResponse::new(NotFound).body("Not Found")
      }
    }
  })
  ..get(@shared.api_todos, _ => {
    println("GET \{@shared.api_todos}")
    try {
      let todos = get_all_todos(conn)
      println("  -> 200 (\{todos.length()} todos)")
      @mocket.HttpResponse::new(OK).json(todos)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post(@shared.api_todos, event => {
    println("POST \{@shared.api_todos}")
    try {
      let json : Json = event.req.body()
      let text = match json {
        { "text": String(t), .. } => t
        _ => {
          println("  -> 400 Missing text field")
          return @mocket.HttpResponse::new(BadRequest).body(
            "Missing text field",
          )
        }
      }
      if !@shared.validate_text(text) {
        println("  -> 400 Invalid todo text")
        return @mocket.HttpResponse::new(BadRequest).body(
          "Todo text must be between 1 and \{@shared.max_todo_length} characters",
        )
      }
      let todo = create_todo(conn, text)
      println("  -> 201 created todo: \{text}")
      @mocket.HttpResponse::new(Created).json(todo)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("\{@shared.api_todos}/:id/toggle", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/todos/\{id_str}/toggle")
    try {
      let id = @strconv.parse_int(id_str)
      let todo = toggle_todo(conn, id)
      println("  -> 200 toggled todo \{id}")
      @mocket.HttpResponse::new(OK).json(todo)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  .delete("\{@shared.api_todos}/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("DELETE /api/todos/\{id_str}")
    try {
      let id = @strconv.parse_int(id_str)
      delete_todo(conn, id)
      println("  -> 204 deleted todo \{id}")
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  println("Server running at http://localhost:\{port}")
  app.serve(port~)
}
