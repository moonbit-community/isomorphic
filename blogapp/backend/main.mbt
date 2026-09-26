///|
async fn main {
  let matches = @argparse.parse(
    Command("blog-server", about="Blog App backend server", options=[
      OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
        "4001",
      ]),
    ]),
  )
  let port_str = matches.values["port"][0]
  let port = @string.parse_int(port_str) catch {
    _ => {
      println("Invalid port: \{port_str}")
      return
    }
  }

  let conn = @sqlite3.Connection::open("blog.db") catch {
    e => {
      println("Failed to open blog.db: \{error_text(e)}")
      return
    }
  }
  println("Database opened: blog.db")
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
      #|  <title>Blog</title>
      #|  <style>
      #|    * { margin: 0; padding: 0; box-sizing: border-box; }
      #|    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; background: #f4f5f7; color: #1a1a2e; line-height: 1.6; -webkit-font-smoothing: antialiased; }
      #|    ::selection { background: #c7d2fe; }
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
  ..get(@shared.api_posts, event => handle_get_posts(conn, event))
  ..get("/api/posts/:id", event => handle_get_post(conn, event))
  ..get("/api/posts/:id/comments", event => {
    handle_get_post_comments(conn, event)
  })
  ..post(@shared.api_posts, event => handle_create_post(conn, event))
  ..post("/api/posts/:id", event => handle_update_post(conn, event))
  ..post("/api/posts/:id/comments", event => handle_create_comment(conn, event))
  ..delete("/api/posts/:id", event => handle_delete_post(conn, event))
  .delete("/api/comments/:id", event => handle_delete_comment(conn, event))
  println("Server running at http://localhost:\{port}")
  app.serve(port~)
}
