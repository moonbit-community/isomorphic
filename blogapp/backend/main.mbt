///|
async fn main {
  let matches = @argparse.parse(
    Command("blog-server", about="Blog App backend server", options=[
      OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
        "4001",
      ]),
    ]),
  )
  let port = @string.parse_int(matches.values["port"][0])

  let conn = @sqlite3.Connection::open("blog.db")
  println("Database opened: blog.db")

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
      res.send_html(html)
    })
    ctx.get(@shared.api_posts, (req, res) => handle_get_posts(conn, req, res))
    ctx.get("/api/posts/:id", (req, res) => handle_get_post(conn, req, res))
    ctx.get("/api/posts/:id/comments", (req, res) => {
      handle_get_post_comments(conn, req, res)
    })
    ctx.post(@shared.api_posts, (req, res) => handle_create_post(conn, req, res))
    ctx.post("/api/posts/:id", (req, res) => handle_update_post(conn, req, res))
    ctx.post("/api/posts/:id/comments", (req, res) => {
      handle_create_comment(conn, req, res)
    })
    ctx.add_route(Delete, "/api/posts/:id", (req, res) => {
      handle_delete_post(conn, req, res)
    })
    ctx.add_route(Delete, "/api/comments/:id", (req, res) => {
      handle_delete_comment(conn, req, res)
    })
  })
  println("Server running at http://localhost:\{port}")
  app.serve(@moonback.listen(port=port.to_uint16()))
}
