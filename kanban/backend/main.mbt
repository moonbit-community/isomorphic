///|
/// Create tables and seed default columns ("To Do", "In Progress", "Done") if empty.
fn init_db(conn : @sqlite3.Connection) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS columns (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  title BLOB NOT NULL,
      #|  position INTEGER NOT NULL
      #|)
    ),
  )
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS cards (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  column_id INTEGER NOT NULL REFERENCES columns(id),
      #|  title BLOB NOT NULL,
      #|  description BLOB NOT NULL DEFAULT x'',
      #|  color BLOB NOT NULL DEFAULT x'',
      #|  position INTEGER NOT NULL
      #|)
    ),
  )
  stmt2.step_once()
  stmt2.finalize()
  // Seed default columns if table is empty
  let check = conn.prepare("SELECT COUNT(*) FROM columns")
  guard check.step()
  let count : Int = check.column(index=0)
  check.finalize()
  if count == 0 {
    let defaults = ["To Do", "In Progress", "Done"]
    for i, title in defaults {
      let s = conn.prepare(
        "INSERT INTO columns (title, position) VALUES (?, ?)",
      )
      s.bind_string_as_blob(index=1, val=title)
      s.bind(index=2, val=(i + 1) * @shared.position_gap)
      s.step_once()
      s.finalize()
    }
    println("Seeded default columns: To Do, In Progress, Done")
  }
}

///|
/// Read a Column from the current row of a prepared statement.
fn read_column(stmt : @sqlite3.Statement) -> @shared.Column {
  let id : Int = stmt.column(index=0)
  let title : String = stmt.column_blob_as_string(index=1)
  let position : Int = stmt.column(index=2)
  { id, title, position }
}

///|
/// Read a Card from the current row of a prepared statement.
fn read_card(stmt : @sqlite3.Statement) -> @shared.Card {
  let id : Int = stmt.column(index=0)
  let column_id : Int = stmt.column(index=1)
  let title : String = stmt.column_blob_as_string(index=2)
  let description : String = stmt.column_blob_as_string(index=3)
  let color : String = stmt.column_blob_as_string(index=4)
  let position : Int = stmt.column(index=5)
  { id, column_id, title, description, color, position }
}

///|
/// Fetch all columns and cards, ordered by position.
fn get_board(
  conn : @sqlite3.Connection,
) -> @shared.Board raise @sqlite3.SqliteError {
  let col_stmt = conn.prepare(
    "SELECT id, title, position FROM columns ORDER BY position ASC",
  )
  let columns : Array[@shared.Column] = []
  while col_stmt.step() {
    columns.push(read_column(col_stmt))
  }
  col_stmt.finalize()
  let card_stmt = conn.prepare(
    "SELECT id, column_id, title, description, color, position FROM cards ORDER BY position ASC",
  )
  let cards : Array[@shared.Card] = []
  while card_stmt.step() {
    cards.push(read_card(card_stmt))
  }
  card_stmt.finalize()
  { columns, cards }
}

///|
/// Insert a new column at the end (max position + gap).
fn create_column(
  conn : @sqlite3.Connection,
  title : String,
) -> @shared.Column raise @sqlite3.SqliteError {
  let pos_stmt = conn.prepare("SELECT position FROM columns")
  let positions : Array[Int] = []
  while pos_stmt.step() {
    let p : Int = pos_stmt.column(index=0)
    positions.push(p)
  }
  pos_stmt.finalize()
  let position = @shared.next_position(positions)
  let stmt = conn.prepare("INSERT INTO columns (title, position) VALUES (?, ?)")
  stmt.bind_string_as_blob(index=1, val=title)
  stmt.bind(index=2, val=position)
  stmt.step_once()
  stmt.finalize()
  let id_stmt = conn.prepare("SELECT last_insert_rowid()")
  guard id_stmt.step()
  let id : Int = id_stmt.column(index=0)
  id_stmt.finalize()
  { id, title, position }
}

///|
/// Update a column's title. Returns None if not found.
fn rename_column(
  conn : @sqlite3.Connection,
  id : Int,
  title : String,
) -> @shared.Column? raise @sqlite3.SqliteError {
  let stmt = conn.prepare("UPDATE columns SET title = ? WHERE id = ?")
  stmt.bind_string_as_blob(index=1, val=title)
  stmt.bind(index=2, val=id)
  stmt.step_once()
  stmt.finalize()
  get_column(conn, id)
}

///|
/// Look up a single column by ID. Returns None if not found.
fn get_column(
  conn : @sqlite3.Connection,
  id : Int,
) -> @shared.Column? raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, title, position FROM columns WHERE id = ?",
  )
  stmt.bind(index=1, val=id)
  let result = if stmt.step() { Some(read_column(stmt)) } else { None }
  stmt.finalize()
  result
}

///|
/// Update a column's position. Returns None if not found.
fn move_column(
  conn : @sqlite3.Connection,
  id : Int,
  new_position : Int,
) -> @shared.Column? raise @sqlite3.SqliteError {
  let stmt = conn.prepare("UPDATE columns SET position = ? WHERE id = ?")
  stmt.bind(index=1, val=new_position)
  stmt.bind(index=2, val=id)
  stmt.step_once()
  stmt.finalize()
  get_column(conn, id)
}

///|
/// Delete a column and all its cards.
fn delete_column(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let s1 = conn.prepare("DELETE FROM cards WHERE column_id = ?")
  s1.bind(index=1, val=id)
  s1.step_once()
  s1.finalize()
  let s2 = conn.prepare("DELETE FROM columns WHERE id = ?")
  s2.bind(index=1, val=id)
  s2.step_once()
  s2.finalize()
}

///|
/// Insert a new card at the end of a column (max position + gap).
fn create_card(
  conn : @sqlite3.Connection,
  column_id : Int,
  title : String,
  description : String,
  color : String,
) -> @shared.Card raise @sqlite3.SqliteError {
  let pos_stmt = conn.prepare("SELECT position FROM cards WHERE column_id = ?")
  pos_stmt.bind(index=1, val=column_id)
  let positions : Array[Int] = []
  while pos_stmt.step() {
    let p : Int = pos_stmt.column(index=0)
    positions.push(p)
  }
  pos_stmt.finalize()
  let position = @shared.next_position(positions)
  let stmt = conn.prepare(
    "INSERT INTO cards (column_id, title, description, color, position) VALUES (?, ?, ?, ?, ?)",
  )
  stmt.bind(index=1, val=column_id)
  stmt.bind_string_as_blob(index=2, val=title)
  stmt.bind_string_as_blob(index=3, val=description)
  stmt.bind_string_as_blob(index=4, val=color)
  stmt.bind(index=5, val=position)
  stmt.step_once()
  stmt.finalize()
  let id_stmt = conn.prepare("SELECT last_insert_rowid()")
  guard id_stmt.step()
  let id : Int = id_stmt.column(index=0)
  id_stmt.finalize()
  { id, column_id, title, description, color, position }
}

///|
/// Look up a single card by ID. Returns None if not found.
fn get_card(
  conn : @sqlite3.Connection,
  id : Int,
) -> @shared.Card? raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, column_id, title, description, color, position FROM cards WHERE id = ?",
  )
  stmt.bind(index=1, val=id)
  let result = if stmt.step() { Some(read_card(stmt)) } else { None }
  stmt.finalize()
  result
}

///|
/// Update a card's title, description, and color. Returns None if not found.
fn update_card(
  conn : @sqlite3.Connection,
  id : Int,
  title : String,
  description : String,
  color : String,
) -> @shared.Card? raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "UPDATE cards SET title = ?, description = ?, color = ? WHERE id = ?",
  )
  stmt.bind_string_as_blob(index=1, val=title)
  stmt.bind_string_as_blob(index=2, val=description)
  stmt.bind_string_as_blob(index=3, val=color)
  stmt.bind(index=4, val=id)
  stmt.step_once()
  stmt.finalize()
  get_card(conn, id)
}

///|
/// Move a card to a target column at the given position. Returns None if not found.
fn move_card(
  conn : @sqlite3.Connection,
  id : Int,
  target_column_id : Int,
  new_position : Int,
) -> @shared.Card? raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "UPDATE cards SET column_id = ?, position = ? WHERE id = ?",
  )
  stmt.bind(index=1, val=target_column_id)
  stmt.bind(index=2, val=new_position)
  stmt.bind(index=3, val=id)
  stmt.step_once()
  stmt.finalize()
  get_card(conn, id)
}

///|
/// Delete a card by ID.
fn delete_card(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM cards WHERE id = ?")
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Reassign evenly-spaced positions to all cards in a column.
fn renumber_cards_in_column(
  conn : @sqlite3.Connection,
  column_id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let sel = conn.prepare(
    "SELECT id FROM cards WHERE column_id = ? ORDER BY position ASC",
  )
  sel.bind(index=1, val=column_id)
  let ids : Array[Int] = []
  while sel.step() {
    let id : Int = sel.column(index=0)
    ids.push(id)
  }
  sel.finalize()
  let new_positions = @shared.renumber_positions(ids.length())
  for i, id in ids {
    let upd = conn.prepare("UPDATE cards SET position = ? WHERE id = ?")
    upd.bind(index=1, val=new_positions[i])
    upd.bind(index=2, val=id)
    upd.step_once()
    upd.finalize()
  }
}

///|
/// Reassign evenly-spaced positions to all columns.
fn renumber_columns(
  conn : @sqlite3.Connection,
) -> Unit raise @sqlite3.SqliteError {
  let sel = conn.prepare("SELECT id FROM columns ORDER BY position ASC")
  let ids : Array[Int] = []
  while sel.step() {
    let id : Int = sel.column(index=0)
    ids.push(id)
  }
  sel.finalize()
  let new_positions = @shared.renumber_positions(ids.length())
  for i, id in ids {
    let upd = conn.prepare("UPDATE columns SET position = ? WHERE id = ?")
    upd.bind(index=1, val=new_positions[i])
    upd.bind(index=2, val=id)
    upd.step_once()
    upd.finalize()
  }
}

///|
/// Count total columns on the board.
fn column_count(conn : @sqlite3.Connection) -> Int raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT COUNT(*) FROM columns")
  guard stmt.step()
  let count : Int = stmt.column(index=0)
  stmt.finalize()
  count
}

///|
/// Count cards in a specific column (for limit enforcement).
fn card_count_in_column(
  conn : @sqlite3.Connection,
  column_id : Int,
) -> Int raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT COUNT(*) FROM cards WHERE column_id = ?")
  stmt.bind(index=1, val=column_id)
  guard stmt.step()
  let count : Int = stmt.column(index=0)
  stmt.finalize()
  count
}

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
  ..get("/", _ => {
    println("GET /")
    let html =
      #|<!DOCTYPE html>
      #|<html>
      #|<head>
      #|  <meta charset="UTF-8">
      #|  <meta name="viewport" content="width=device-width, initial-scale=1.0">
      #|  <title>Kanban Board</title>
      #|  <style>
      #|    * { margin: 0; padding: 0; box-sizing: border-box; }
      #|    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; background: #f0f4f8; color: #1a1a2e; line-height: 1.6; -webkit-font-smoothing: antialiased; }
      #|    ::selection { background: #99f6e4; }
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
  // ---- Board ----
  ..get(@shared.api_board, _ => {
    println("GET \{@shared.api_board}")
    try {
      let board = get_board(conn)
      println(
        "  -> 200 (\{board.columns.length()} columns, \{board.cards.length()} cards)",
      )
      @mocket.HttpResponse::new(OK).json(board.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  // ---- Columns ----
  ..post(@shared.api_columns, event => {
    println("POST \{@shared.api_columns}")
    try {
      let json : Json = event.req.body()
      let title = match json {
        { "title": String(t), .. } => t
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing title")
      }
      if not(@shared.validate_column_title(title)) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid title")
      }
      if column_count(conn) >= @shared.max_columns {
        return @mocket.HttpResponse::new(BadRequest).body("Too many columns")
      }
      let col = create_column(conn, title)
      println("  -> 201 created column: \{title}")
      @mocket.HttpResponse::new(Created).json(col.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/columns/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/columns/\{id_str} (rename)")
    try {
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let title = match json {
        { "title": String(t), .. } => t
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing title")
      }
      if not(@shared.validate_column_title(title)) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid title")
      }
      match rename_column(conn, id, title) {
        Some(col) => {
          println("  -> 200 renamed column \{id}")
          @mocket.HttpResponse::new(OK).json(col.to_json())
        }
        None => @mocket.HttpResponse::new(NotFound).body("Column not found")
      }
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/columns/:id/move", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/columns/\{id_str}/move")
    try {
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let new_position = match json {
        { "new_position": Number(n, ..), .. } => n.to_int()
        _ =>
          return @mocket.HttpResponse::new(BadRequest).body(
            "Missing new_position",
          )
      }
      if new_position == 0 {
        renumber_columns(conn)
      }
      let pos = if new_position == 0 {
        @shared.position_gap
      } else {
        new_position
      }
      match move_column(conn, id, pos) {
        Some(col) => {
          println("  -> 200 moved column \{id} to position \{pos}")
          @mocket.HttpResponse::new(OK).json(col.to_json())
        }
        None => @mocket.HttpResponse::new(NotFound).body("Column not found")
      }
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..delete("/api/columns/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("DELETE /api/columns/\{id_str}")
    try {
      let id = @strconv.parse_int(id_str)
      delete_column(conn, id)
      println("  -> 204 deleted column \{id}")
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  // ---- Cards ----
  ..post(@shared.api_cards, event => {
    println("POST \{@shared.api_cards}")
    try {
      let json : Json = event.req.body()
      let column_id = match json {
        { "column_id": Number(n, ..), .. } => n.to_int()
        _ =>
          return @mocket.HttpResponse::new(BadRequest).body("Missing column_id")
      }
      let title = match json {
        { "title": String(t), .. } => t
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing title")
      }
      if not(@shared.validate_card_title(title)) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid title")
      }
      let description = match json {
        { "description": String(d), .. } => d
        _ => ""
      }
      if not(@shared.validate_card_description(description)) {
        return @mocket.HttpResponse::new(BadRequest).body(
          "Description too long",
        )
      }
      let color = match json {
        { "color": String(c), .. } => c
        _ => ""
      }
      if not(@shared.validate_color(color)) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid color")
      }
      if card_count_in_column(conn, column_id) >= @shared.max_cards_per_column {
        return @mocket.HttpResponse::new(BadRequest).body(
          "Too many cards in column",
        )
      }
      let card = create_card(conn, column_id, title, description, color)
      println("  -> 201 created card: \{title}")
      @mocket.HttpResponse::new(Created).json(card.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/cards/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/cards/\{id_str} (update)")
    try {
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let title = match json {
        { "title": String(t), .. } => t
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing title")
      }
      if not(@shared.validate_card_title(title)) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid title")
      }
      let description = match json {
        { "description": String(d), .. } => d
        _ => ""
      }
      let color = match json {
        { "color": String(c), .. } => c
        _ => ""
      }
      match update_card(conn, id, title, description, color) {
        Some(card) => {
          println("  -> 200 updated card \{id}")
          @mocket.HttpResponse::new(OK).json(card.to_json())
        }
        None => @mocket.HttpResponse::new(NotFound).body("Card not found")
      }
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/cards/:id/move", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/cards/\{id_str}/move")
    try {
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let target_column_id = match json {
        { "target_column_id": Number(n, ..), .. } => n.to_int()
        _ =>
          return @mocket.HttpResponse::new(BadRequest).body(
            "Missing target_column_id",
          )
      }
      let new_position = match json {
        { "new_position": Number(n, ..), .. } => n.to_int()
        _ =>
          return @mocket.HttpResponse::new(BadRequest).body(
            "Missing new_position",
          )
      }
      if new_position == 0 {
        renumber_cards_in_column(conn, target_column_id)
      }
      let pos = if new_position == 0 {
        @shared.position_gap
      } else {
        new_position
      }
      match move_card(conn, id, target_column_id, pos) {
        Some(card) => {
          println(
            "  -> 200 moved card \{id} to column \{target_column_id} pos \{pos}",
          )
          @mocket.HttpResponse::new(OK).json(card.to_json())
        }
        None => @mocket.HttpResponse::new(NotFound).body("Card not found")
      }
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..delete("/api/cards/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("DELETE /api/cards/\{id_str}")
    try {
      let id = @strconv.parse_int(id_str)
      delete_card(conn, id)
      println("  -> 204 deleted card \{id}")
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  .get("/api/columns/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    try {
      let id = @strconv.parse_int(id_str)
      match get_column(conn, id) {
        Some(col) => @mocket.HttpResponse::new(OK).json(col.to_json())
        None => @mocket.HttpResponse::new(NotFound).body("Column not found")
      }
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  println("Server running at http://localhost:\{port}")
  app.serve(port~)
}
