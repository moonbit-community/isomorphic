///|
/// GET / — Serve the HTML shell.
fn handle_index(_event : @mocket.MocketEvent) -> @mocket.HttpResponse noraise {
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
}

///|
/// GET /frontend.js — Serve the compiled frontend JavaScript.
fn handle_frontend_js(
  _event : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
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
}

///|
/// GET /api/board — Return the full board (columns + cards).
fn handle_get_board(
  conn : @sqlite3.Connection,
  _event : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
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
}

///|
/// POST /api/columns — Create a new column.
fn handle_create_column(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
  println("POST \{@shared.api_columns}")
  try {
    let json : Json = event.req.body()
    let title = match json {
      { "title": String(t), .. } => t
      _ => return @mocket.HttpResponse::new(BadRequest).body("Missing title")
    }
    if !@shared.validate_column_title(title) {
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
}

///|
/// POST /api/columns/:id — Rename a column.
fn handle_rename_column(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/columns/\{id_str} (rename)")
  try {
    let id = @strconv.parse_int(id_str)
    let json : Json = event.req.body()
    let title = match json {
      { "title": String(t), .. } => t
      _ => return @mocket.HttpResponse::new(BadRequest).body("Missing title")
    }
    if !@shared.validate_column_title(title) {
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
}

///|
/// POST /api/columns/:id/move — Move a column to a new position.
fn handle_move_column(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
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
}

///|
/// DELETE /api/columns/:id — Delete a column and its cards.
fn handle_delete_column(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
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
}

///|
/// POST /api/cards — Create a new card.
fn handle_create_card(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
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
    if !@shared.validate_card_title(title) {
      return @mocket.HttpResponse::new(BadRequest).body("Invalid title")
    }
    let description = match json {
      { "description": String(d), .. } => d
      _ => ""
    }
    if !@shared.validate_card_description(description) {
      return @mocket.HttpResponse::new(BadRequest).body("Description too long")
    }
    let color = match json {
      { "color": String(c), .. } => c
      _ => ""
    }
    if !@shared.validate_color(color) {
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
}

///|
/// POST /api/cards/:id — Update a card's title, description, and color.
fn handle_update_card(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/cards/\{id_str} (update)")
  try {
    let id = @strconv.parse_int(id_str)
    let json : Json = event.req.body()
    let title = match json {
      { "title": String(t), .. } => t
      _ => return @mocket.HttpResponse::new(BadRequest).body("Missing title")
    }
    if !@shared.validate_card_title(title) {
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
}

///|
/// POST /api/cards/:id/move — Move a card to a target column at a given position.
fn handle_move_card(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
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
}

///|
/// DELETE /api/cards/:id — Delete a card.
fn handle_delete_card(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
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
}

///|
/// GET /api/columns/:id — Get a single column by ID.
fn handle_get_column(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
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
}
