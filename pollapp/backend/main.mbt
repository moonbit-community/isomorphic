///|
/// Start the Mocket HTTP server: open SQLite, register routes, and listen on the configured port.
async fn main {
  guard @argparse.parse(
      Command("pollapp", about="Poll/Voting App backend", options=[
        OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
          "4002",
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

  let conn = @sqlite3.Connection::open("polls.db") catch {
    e => {
      println("Failed to open polls.db: \{error_text(e)}")
      return
    }
  }
  println("Database opened: polls.db")

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
      #|  <title>Poll App</title>
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
  ..get(@shared.api_polls, event => handle_get_polls(conn, event))
  ..post(@shared.api_polls, event => handle_create_poll(conn, event))
  ..post("\{@shared.api_polls}/:id/vote", event => handle_vote(conn, event))
  .delete("\{@shared.api_polls}/:id", event => handle_delete_poll(conn, event))
  println("Server running at http://localhost:\{port}")
  app.serve(port~)
}
