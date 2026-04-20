///|
async fn send_text(
  res : @moonback.Responder,
  body : String,
  status? : Int = 200,
) -> Unit {
  res
  .respond(status~, headers={ "Content-Type": "text/plain; charset=utf-8" })
  .write(body)
}

///|
fn board_html() -> String {
  (
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
  )
}

///|
async fn handle_get_board(
  conn : @sqlite3.Connection,
  _req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("GET \{@shared.api_board}")
  try {
    let board = get_board(conn)
    println(
      "  -> 200 (\{board.columns.length()} columns, \{board.cards.length()} cards)",
    )
    res.send_json(board.to_json())
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_create_column(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("POST \{@shared.api_columns}")
  try {
    let json : Json = req.body.json()
    let title = match json {
      { "title": String(t), .. } => t
      _ => {
        send_text(res, "Missing title", status=400)
        return
      }
    }
    if !@shared.validate_column_title(title) {
      send_text(res, "Invalid title", status=400)
      return
    }
    if column_count(conn) >= @shared.max_columns {
      send_text(res, "Too many columns", status=400)
      return
    }
    let col = create_column(conn, title)
    println("  -> 201 created column: \{title}")
    res.send_json(col.to_json(), status=201)
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_rename_column(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/columns/\{id_str} (rename)")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let title = match json {
      { "title": String(t), .. } => t
      _ => {
        send_text(res, "Missing title", status=400)
        return
      }
    }
    if !@shared.validate_column_title(title) {
      send_text(res, "Invalid title", status=400)
      return
    }
    match rename_column(conn, id, title) {
      Some(col) => {
        println("  -> 200 renamed column \{id}")
        res.send_json(col.to_json())
      }
      None => send_text(res, "Column not found", status=404)
    }
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_move_column(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/columns/\{id_str}/move")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let new_position = match json {
      { "new_position": Number(n, ..), .. } => n.to_int()
      _ => {
        send_text(res, "Missing new_position", status=400)
        return
      }
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
        res.send_json(col.to_json())
      }
      None => send_text(res, "Column not found", status=404)
    }
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_delete_column(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("DELETE /api/columns/\{id_str}")
  try {
    let id = @string.parse_int(id_str)
    delete_column(conn, id)
    println("  -> 204 deleted column \{id}")
    res.send_void(status=204)
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_create_card(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("POST \{@shared.api_cards}")
  try {
    let json : Json = req.body.json()
    let column_id = match json {
      { "column_id": Number(n, ..), .. } => n.to_int()
      _ => {
        send_text(res, "Missing column_id", status=400)
        return
      }
    }
    let title = match json {
      { "title": String(t), .. } => t
      _ => {
        send_text(res, "Missing title", status=400)
        return
      }
    }
    if !@shared.validate_card_title(title) {
      send_text(res, "Invalid title", status=400)
      return
    }
    let description = match json {
      { "description": String(d), .. } => d
      _ => ""
    }
    if !@shared.validate_card_description(description) {
      send_text(res, "Description too long", status=400)
      return
    }
    let color = match json {
      { "color": String(c), .. } => c
      _ => ""
    }
    if !@shared.validate_color(color) {
      send_text(res, "Invalid color", status=400)
      return
    }
    if card_count_in_column(conn, column_id) >= @shared.max_cards_per_column {
      send_text(res, "Too many cards in column", status=400)
      return
    }
    let card = create_card(conn, column_id, title, description, color)
    println("  -> 201 created card: \{title}")
    res.send_json(card.to_json(), status=201)
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_update_card(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/cards/\{id_str} (update)")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let title = match json {
      { "title": String(t), .. } => t
      _ => {
        send_text(res, "Missing title", status=400)
        return
      }
    }
    if !@shared.validate_card_title(title) {
      send_text(res, "Invalid title", status=400)
      return
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
        res.send_json(card.to_json())
      }
      None => send_text(res, "Card not found", status=404)
    }
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_move_card(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/cards/\{id_str}/move")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let target_column_id = match json {
      { "target_column_id": Number(n, ..), .. } => n.to_int()
      _ => {
        send_text(res, "Missing target_column_id", status=400)
        return
      }
    }
    let new_position = match json {
      { "new_position": Number(n, ..), .. } => n.to_int()
      _ => {
        send_text(res, "Missing new_position", status=400)
        return
      }
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
        res.send_json(card.to_json())
      }
      None => send_text(res, "Card not found", status=404)
    }
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_delete_card(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("DELETE /api/cards/\{id_str}")
  try {
    let id = @string.parse_int(id_str)
    delete_card(conn, id)
    println("  -> 204 deleted card \{id}")
    res.send_void(status=204)
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_get_column(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  try {
    let id = @string.parse_int(id_str)
    match get_column(conn, id) {
      Some(col) => res.send_json(col.to_json())
      None => send_text(res, "Column not found", status=404)
    }
  } catch {
    e => send_text(res, "\{e}", status=500)
  }
}
