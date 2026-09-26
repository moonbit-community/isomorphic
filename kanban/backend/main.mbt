///|
/// Entry point: parse args, open DB, register routes, start HTTP server.
async fn main {
  let matches = @argparse.parse(
    Command("kanban-server", about="Kanban Board backend server", options=[
      OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
        "4005",
      ]),
    ]),
  )
  let port = @string.parse_int(matches.values["port"][0]) catch {
    _ => {
      println("Invalid port: \{matches.values["port"][0]}")
      return
    }
  }
  let conn = @sqlite3.Connection::open("kanban.db") catch {
    e => {
      println("Failed to open kanban.db: \{error_text(e)}")
      return
    }
  }
  println("Database opened: kanban.db")
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
  ..get("/", event => handle_index(event))
  ..get("/frontend.js", event => handle_frontend_js(event))
  // ---- Board ----
  ..get(@shared.api_board, event => handle_get_board(conn, event))
  // ---- Columns ----
  ..post(@shared.api_columns, event => handle_create_column(conn, event))
  ..post("/api/columns/:id", event => handle_rename_column(conn, event))
  ..post("/api/columns/:id/move", event => handle_move_column(conn, event))
  ..delete("/api/columns/:id", event => handle_delete_column(conn, event))
  // ---- Cards ----
  ..post(@shared.api_cards, event => handle_create_card(conn, event))
  ..post("/api/cards/:id", event => handle_update_card(conn, event))
  ..post("/api/cards/:id/move", event => handle_move_card(conn, event))
  ..delete("/api/cards/:id", event => handle_delete_card(conn, event))
  .get("/api/columns/:id", event => handle_get_column(conn, event))
  println("Server running at http://localhost:\{port}")
  app.serve(port~)
}
