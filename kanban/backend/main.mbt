///|
/// Entry point: parse args, open DB, register routes, start HTTP server.
fn main raise {
  let matches = @argparse.parse(
    Command("kanban-server", about="Kanban Board backend server", options=[
      OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
        "4005",
      ]),
    ]),
  )
  let port = @strconv.parse_int(matches.values["port"][0])
  let conn = @sqlite3.Connection::open("kanban.db")
  println("Database opened: kanban.db")
  init_db(conn)
  println("Database initialized")
  let app = @mocket.new()
  app
  ..use_middleware(@cors.handle_cors())
  ..get("/", fn(event) noraise { handle_index(event) })
  ..get("/frontend.js", fn(event) noraise { handle_frontend_js(event) })
  // ---- Board ----
  ..get(@shared.api_board, fn(event) noraise { handle_get_board(conn, event) })
  // ---- Columns ----
  ..post(@shared.api_columns, fn(event) noraise {
    handle_create_column(conn, event)
  })
  ..post("/api/columns/:id", fn(event) noraise {
    handle_rename_column(conn, event)
  })
  ..post("/api/columns/:id/move", fn(event) noraise {
    handle_move_column(conn, event)
  })
  ..delete("/api/columns/:id", fn(event) noraise {
    handle_delete_column(conn, event)
  })
  // ---- Cards ----
  ..post(@shared.api_cards, fn(event) noraise {
    handle_create_card(conn, event)
  })
  ..post("/api/cards/:id", fn(event) noraise { handle_update_card(conn, event) })
  ..post("/api/cards/:id/move", fn(event) noraise {
    handle_move_card(conn, event)
  })
  ..delete("/api/cards/:id", fn(event) noraise {
    handle_delete_card(conn, event)
  })
  .get("/api/columns/:id", fn(event) noraise { handle_get_column(conn, event) })
  println("Server running at http://localhost:\{port}")
  app.serve(port~)
}
