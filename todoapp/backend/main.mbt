///|
async fn send_text(
  res : @moonback.Responder,
  body : String,
  status? : Int = 200,
) -> Unit {
  res
  .respond(status~, headers={ "Content-Type": "text/plain; charset=utf-8" })
  .write(body)
}

///|
async fn main {
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
  let port = @string.parse_int(port)

  let conn = @sqlite3.Connection::open("todos.db")
  println("Database opened: todos.db")

  init_db(conn)
  println("Database initialized")

  let app = @moonback.App(ctx => {
    ctx.add_middleware(@unstable_cors.new())
    ctx.add_middleware(@unstable_static.new(root="./public"))
    ctx.get("/", (_req, res) => {
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
      res.send_html(html)
    })
    ctx.get(@shared.api_todos, (_req, res) => {
      println("GET \{@shared.api_todos}")
      try {
        let todos = get_all_todos(conn)
        println("  -> 200 (\{todos.length()} todos)")
        res.send_json(todos.to_json())
      } catch {
        e => {
          println("  -> 500 \{e}")
          send_text(res, "\{e}", status=500)
        }
      }
    })
    ctx.post(@shared.api_todos, (req, res) => {
      println("POST \{@shared.api_todos}")
      try {
        let json : Json = req.body.json()
        let text = match json {
          { "text": String(t), .. } => t
          _ => {
            println("  -> 400 Missing text field")
            send_text(res, "Missing text field", status=400)
            return
          }
        }
        if !@shared.validate_text(text) {
          println("  -> 400 Invalid todo text")
          send_text(
            res,
            "Todo text must be between 1 and \{@shared.max_todo_length} characters",
            status=400,
          )
          return
        }
        let todo = create_todo(conn, text)
        println("  -> 201 created todo: \{text}")
        res.send_json(todo.to_json(), status=201)
      } catch {
        e => {
          println("  -> 500 \{e}")
          send_text(res, "\{e}", status=500)
        }
      }
    })
    ctx.post("\{@shared.api_todos}/:id/toggle", (req, res) => {
      let id_str = req.params["id"].to_string()
      println("POST /api/todos/\{id_str}/toggle")
      try {
        let id = @string.parse_int(id_str)
        let todo = toggle_todo(conn, id)
        println("  -> 200 toggled todo \{id}")
        res.send_json(todo.to_json())
      } catch {
        e => {
          println("  -> 500 \{e}")
          send_text(res, "\{e}", status=500)
        }
      }
    })
    ctx.add_route(Delete, "\{@shared.api_todos}/:id", (req, res) => {
      let id_str = req.params["id"].to_string()
      println("DELETE /api/todos/\{id_str}")
      try {
        let id = @string.parse_int(id_str)
        delete_todo(conn, id)
        println("  -> 204 deleted todo \{id}")
        res.send_void(status=204)
      } catch {
        e => {
          println("  -> 500 \{e}")
          send_text(res, "\{e}", status=500)
        }
      }
    })
  })
  println("Server running at http://localhost:\{port}")
  app.serve(@moonback.listen(port=port.to_uint16()))
}
