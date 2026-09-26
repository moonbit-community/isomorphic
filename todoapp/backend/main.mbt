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
async fn main {
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
  let port = @string.parse_int(port) catch {
    _ => {
      println("Invalid port: \{port}")
      return
    }
  }

  let conn = @sqlite3.Connection::open("todos.db") catch {
    e => {
      println("Failed to open todos.db: \{error_text(e)}")
      return
    }
  }
  println("Database opened: todos.db")
  init_db(conn) catch {
    e => {
      println("Failed to initialize database: \{error_text(e)}")
      return
    }
  }
  println("Database initialized")

  let app = @mocket.App()
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
    @mocket.HttpResponse(
      OK,
      headers={ "Content-Type": "text/html; charset=utf-8" },
      body=@utf8.encode(html),
    )
  })
  ..get("/frontend.js", _ => {
    println("GET /frontend.js")
    try {
      let bytes = @fs.read_file_to_bytes("./public/frontend.js")
      @mocket.HttpResponse(
        OK,
        headers={ "Content-Type": "application/javascript; charset=utf-8" },
        body=bytes,
      )
    } catch {
      _ => {
        println("  -> 404 Not Found")
        @mocket.HttpResponse(NotFound).body("Not Found")
      }
    }
  })
  ..get(@shared.api_todos, _ => {
    println("GET \{@shared.api_todos}")
    try {
      let todos = get_all_todos(conn)
      println("  -> 200 (\{todos.length()} todos)")
      @mocket.HttpResponse(OK).json(todos)
    } catch {
      e => {
        println("  -> 500 \{error_text(e)}")
        @mocket.HttpResponse(InternalServerError).body(error_text(e))
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
          return @mocket.HttpResponse(BadRequest).body("Missing text field")
        }
      }
      if !@shared.validate_text(text) {
        println("  -> 400 Invalid todo text")
        return @mocket.HttpResponse(BadRequest).body(
          "Todo text must be between 1 and \{@shared.max_todo_length} characters",
        )
      }
      let todo = create_todo(conn, text)
      println("  -> 201 created todo: \{text}")
      @mocket.HttpResponse(Created).json(todo)
    } catch {
      e => {
        println("  -> 500 \{error_text(e)}")
        @mocket.HttpResponse(InternalServerError).body(error_text(e))
      }
    }
  })
  ..post("\{@shared.api_todos}/:id/toggle", event => {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/todos/\{id_str}/toggle")
    try {
      let id = @string.parse_int(id_str)
      let todo = toggle_todo(conn, id)
      println("  -> 200 toggled todo \{id}")
      @mocket.HttpResponse(OK).json(todo)
    } catch {
      e => {
        println("  -> 500 \{error_text(e)}")
        @mocket.HttpResponse(InternalServerError).body(error_text(e))
      }
    }
  })
  .delete("\{@shared.api_todos}/:id", event => {
    let id_str = event.params.get("id").unwrap().to_string()
    println("DELETE /api/todos/\{id_str}")
    try {
      let id = @string.parse_int(id_str)
      delete_todo(conn, id)
      println("  -> 204 deleted todo \{id}")
      @mocket.HttpResponse(NoContent)
    } catch {
      e => {
        println("  -> 500 \{error_text(e)}")
        @mocket.HttpResponse(InternalServerError).body(error_text(e))
      }
    }
  })
  println("Server running at http://localhost:\{port}")
  app.serve(port~)
}
