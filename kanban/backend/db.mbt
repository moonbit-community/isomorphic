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
  stmt.step() |> ignore
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
  stmt2.step() |> ignore
  stmt2.finalize()
  // Seed default columns if table is empty
  let check = conn.prepare("SELECT COUNT(*) FROM columns")
  guard check.step()
  let count = column_int(check, 0)
  check.finalize()
  if count == 0 {
    let defaults = ["To Do", "In Progress", "Done"]
    for i, title in defaults {
      let s = conn.prepare(
        "INSERT INTO columns (title, position) VALUES (?, ?)",
      )
      s.bind(index=1, title)
      s.bind(index=2, (i + 1) * @shared.position_gap)
      s.step() |> ignore
      s.finalize()
    }
    println("Seeded default columns: To Do, In Progress, Done")
  }
}

///|
/// Read a Column from the current row of a prepared statement.
fn read_column(
  stmt : @sqlite3.Statement,
) -> @shared.Column raise @sqlite3.SqliteError {
  let id = column_int(stmt, 0)
  let title : String = stmt.column(index=1)
  let position = column_int(stmt, 2)
  { id, title, position, }
}

///|
/// Read a Card from the current row of a prepared statement.
fn read_card(
  stmt : @sqlite3.Statement,
) -> @shared.Card raise @sqlite3.SqliteError {
  let id = column_int(stmt, 0)
  let column_id = column_int(stmt, 1)
  let title : String = stmt.column(index=2)
  let description : String = stmt.column(index=3)
  let color : String = stmt.column(index=4)
  let position = column_int(stmt, 5)
  { id, column_id, title, description, color, position, }
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
  { columns, cards, }
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
    let p = column_int(pos_stmt, 0)
    positions.push(p)
  }
  pos_stmt.finalize()
  let position = @shared.next_position(positions)
  let stmt = conn.prepare("INSERT INTO columns (title, position) VALUES (?, ?)")
  stmt.bind(index=1, title)
  stmt.bind(index=2, position)
  stmt.step() |> ignore
  stmt.finalize()
  let id_stmt = conn.prepare("SELECT last_insert_rowid()")
  guard id_stmt.step()
  let id = column_int(id_stmt, 0)
  id_stmt.finalize()
  { id, title, position, }
}

///|
/// Update a column's title. Returns None if not found.
fn rename_column(
  conn : @sqlite3.Connection,
  id : Int,
  title : String,
) -> @shared.Column? raise @sqlite3.SqliteError {
  let stmt = conn.prepare("UPDATE columns SET title = ? WHERE id = ?")
  stmt.bind(index=1, title)
  stmt.bind(index=2, id)
  stmt.step() |> ignore
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
  stmt.bind(index=1, id)
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
  stmt.bind(index=1, new_position)
  stmt.bind(index=2, id)
  stmt.step() |> ignore
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
  s1.bind(index=1, id)
  s1.step() |> ignore
  s1.finalize()
  let s2 = conn.prepare("DELETE FROM columns WHERE id = ?")
  s2.bind(index=1, id)
  s2.step() |> ignore
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
  pos_stmt.bind(index=1, column_id)
  let positions : Array[Int] = []
  while pos_stmt.step() {
    let p = column_int(pos_stmt, 0)
    positions.push(p)
  }
  pos_stmt.finalize()
  let position = @shared.next_position(positions)
  let stmt = conn.prepare(
    "INSERT INTO cards (column_id, title, description, color, position) VALUES (?, ?, ?, ?, ?)",
  )
  stmt.bind(index=1, column_id)
  stmt.bind(index=2, title)
  stmt.bind(index=3, description)
  stmt.bind(index=4, color)
  stmt.bind(index=5, position)
  stmt.step() |> ignore
  stmt.finalize()
  let id_stmt = conn.prepare("SELECT last_insert_rowid()")
  guard id_stmt.step()
  let id = column_int(id_stmt, 0)
  id_stmt.finalize()
  { id, column_id, title, description, color, position, }
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
  stmt.bind(index=1, id)
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
  stmt.bind(index=1, title)
  stmt.bind(index=2, description)
  stmt.bind(index=3, color)
  stmt.bind(index=4, id)
  stmt.step() |> ignore
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
  stmt.bind(index=1, target_column_id)
  stmt.bind(index=2, new_position)
  stmt.bind(index=3, id)
  stmt.step() |> ignore
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
  stmt.bind(index=1, id)
  stmt.step() |> ignore
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
  sel.bind(index=1, column_id)
  let ids : Array[Int] = []
  while sel.step() {
    let id = column_int(sel, 0)
    ids.push(id)
  }
  sel.finalize()
  let new_positions = @shared.renumber_positions(ids.length())
  for i, id in ids {
    let upd = conn.prepare("UPDATE cards SET position = ? WHERE id = ?")
    upd.bind(index=1, new_positions[i])
    upd.bind(index=2, id)
    upd.step() |> ignore
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
    let id = column_int(sel, 0)
    ids.push(id)
  }
  sel.finalize()
  let new_positions = @shared.renumber_positions(ids.length())
  for i, id in ids {
    let upd = conn.prepare("UPDATE columns SET position = ? WHERE id = ?")
    upd.bind(index=1, new_positions[i])
    upd.bind(index=2, id)
    upd.step() |> ignore
    upd.finalize()
  }
}

///|
/// Count total columns on the board.
fn column_count(conn : @sqlite3.Connection) -> Int raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT COUNT(*) FROM columns")
  guard stmt.step()
  let count = column_int(stmt, 0)
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
  stmt.bind(index=1, column_id)
  guard stmt.step()
  let count = column_int(stmt, 0)
  stmt.finalize()
  count
}

///|
/// Read an INTEGER column as `Int`; the binding only exposes `Int64`.
fn column_int(
  stmt : @sqlite3.Statement,
  index : Int,
) -> Int raise @sqlite3.SqliteError {
  let value : Int64 = stmt.column(index~)
  value.to_int()
}

///|
/// Human-readable text for an error, for logs and 500 responses.
/// SQLite errors carry their message in a field and have no `Show`.
fn error_text(e : Error) -> String {
  match e {
    @sqlite3.SqliteError(msg~, ..) => msg
    _ => e.to_string()
  }
}
