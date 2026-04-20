///|
async fn main {
  let matches = @argparse.parse(
    Command("kanban-server", about="Kanban Board backend server", options=[
      OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
        "4005",
      ]),
    ]),
  )
  let port = @string.parse_int(matches.values["port"][0])
  let conn = @sqlite3.Connection::open("kanban.db")
  println("Database opened: kanban.db")
  init_db(conn)
  println("Database initialized")
  let app = @moonback.App(ctx => {
    ctx.add_middleware(@unstable_cors.new())
    ctx.add_middleware(@unstable_static.new(root="./public"))
    ctx.get("/", (_req, res) => {
      println("GET /")
      res.send_html(board_html())
    })
    ctx.get(@shared.api_board, (req, res) => handle_get_board(conn, req, res))
    ctx.post(@shared.api_columns, (req, res) => {
      handle_create_column(conn, req, res)
    })
    ctx.post("/api/columns/:id", (req, res) => {
      handle_rename_column(conn, req, res)
    })
    ctx.post("/api/columns/:id/move", (req, res) => {
      handle_move_column(conn, req, res)
    })
    ctx.add_route(Delete, "/api/columns/:id", (req, res) => {
      handle_delete_column(conn, req, res)
    })
    ctx.post(@shared.api_cards, (req, res) => handle_create_card(conn, req, res))
    ctx.post("/api/cards/:id", (req, res) => handle_update_card(conn, req, res))
    ctx.post("/api/cards/:id/move", (req, res) => {
      handle_move_card(conn, req, res)
    })
    ctx.add_route(Delete, "/api/cards/:id", (req, res) => {
      handle_delete_card(conn, req, res)
    })
    ctx.get("/api/columns/:id", (req, res) => handle_get_column(conn, req, res))
  })
  println("Server running at http://localhost:\{port}")
  app.serve(@moonback.listen(port=port.to_uint16()))
}
