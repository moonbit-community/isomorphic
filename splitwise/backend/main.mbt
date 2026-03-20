///|
/// Start the HTTP server with routes for the HTML shell, frontend JS, and REST API.
fn main raise {
  guard @argparse.parse(
      Command("splitwise", about="Expense Splitter backend", options=[
        OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
          "4001",
        ]),
      ]),
    )
    is { values: { "port": [port], .. }, .. } else {
    println("Failed to parse arguments")
    return
  }
  let port = @strconv.parse_int(port)

  let conn = @sqlite3.Connection::open("splitwise.db")
  println("Database opened: splitwise.db")

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
      #|  <title>Splitwise</title>
      #|  <style>
      #|    * { margin: 0; padding: 0; box-sizing: border-box; }
      #|    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); background-attachment: fixed; min-height: 100vh; color: #333; }
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
  ..get(@shared.api_state, fn(event) { handle_get_state(conn, event) })
  ..post(@shared.api_people, fn(event) { handle_post_people(conn, event) })
  ..post(@shared.api_expenses, fn(event) { handle_post_expenses(conn, event) })
  .delete("\{@shared.api_expenses}/:id", fn(event) noraise {
    handle_delete_expense(conn, event)
  })
  println("Server running at http://localhost:\{port}")
  app.serve(port~)
}
