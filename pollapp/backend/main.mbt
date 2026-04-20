///|
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
  let port = @string.parse_int(port)

  let conn = @sqlite3.Connection::open("polls.db")
  println("Database opened: polls.db")

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
      res.send_html(html)
    })
    ctx.get(@shared.api_polls, (req, res) => handle_get_polls(conn, req, res))
    ctx.post(@shared.api_polls, (req, res) => handle_create_poll(conn, req, res))
    ctx.post("\{@shared.api_polls}/:id/vote", (req, res) => {
      handle_vote(conn, req, res)
    })
    ctx.add_route(Delete, "\{@shared.api_polls}/:id", (req, res) => {
      handle_delete_poll(conn, req, res)
    })
  })
  println("Server running at http://localhost:\{port}")
  app.serve(@moonback.listen(port=port.to_uint16()))
}
