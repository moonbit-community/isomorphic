///|
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
fn todo_to_json(id : Int, text : String, done : Int) -> Json {
  { "id": id, "text": text, "done": done != 0 }
}

///|
fn get_all_todos(
  conn : @sqlite3.Connection,
) -> Array[Json] raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT id, text, done FROM todos ORDER BY id")
  let todos : Array[Json] = []
  while stmt.step() {
    let id : Int = stmt.column(index=0)
    let text : String = stmt.column_blob_as_string(index=1)
    let done : Int = stmt.column(index=2)
    todos.push(todo_to_json(id, text, done))
  }
  stmt.finalize()
  todos
}

///|
fn create_todo(
  conn : @sqlite3.Connection,
  text : String,
) -> Json raise @sqlite3.SqliteError {
  let stmt = conn.prepare("INSERT INTO todos (text, done) VALUES (?, 0)")
  stmt.bind_string_as_blob(index=1, val=text)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id : Int = stmt2.column(index=0)
  stmt2.finalize()
  todo_to_json(id, text, 0)
}

///|
fn toggle_todo(
  conn : @sqlite3.Connection,
  id : Int,
) -> Json raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "UPDATE todos SET done = CASE WHEN done = 0 THEN 1 ELSE 0 END WHERE id = ?",
  )
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT id, text, done FROM todos WHERE id = ?")
  stmt2.bind(index=1, val=id)
  guard stmt2.step()
  let text : String = stmt2.column_blob_as_string(index=1)
  let done_val : Int = stmt2.column(index=2)
  stmt2.finalize()
  todo_to_json(id, text, done_val)
}

///|
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
fn main raise {
  // FIXME: error only highlight `appfn`
  let matches = @argparse.parse(
    Command("todo-server", about="Todo List backend server", options=[
      OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
        "4000",
      ]),
    ]),
  )
  let port = @strconv.parse_int(matches.values["port"][0])

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
  ..get("/api/todos", _ => {
    println("GET /api/todos")
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
  ..post("/api/todos", event => {
    println("POST /api/todos")
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
  ..post("/api/todos/:id/toggle", fn(event) noraise {
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
  .delete("/api/todos/:id", fn(event) noraise {
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
