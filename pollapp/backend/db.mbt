///|
/// Create the `polls` and `poll_options` tables if they do not already exist.
fn init_db(conn : @sqlite3.Connection) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS polls (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  question BLOB NOT NULL
      #|)
    ),
  )
  stmt.step() |> ignore
  stmt.finalize()
  let stmt2 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS poll_options (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  poll_id INTEGER NOT NULL REFERENCES polls(id),
      #|  text BLOB NOT NULL,
      #|  votes INTEGER NOT NULL DEFAULT 0
      #|)
    ),
  )
  stmt2.step() |> ignore
  stmt2.finalize()
}

///|
/// Fetch all options for a given poll, ordered by ID.
fn get_options_for_poll(
  conn : @sqlite3.Connection,
  poll_id : Int,
) -> Array[@shared.PollOption] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, text, votes FROM poll_options WHERE poll_id = ? ORDER BY id",
  )
  stmt.bind(index=1, poll_id)
  let options : Array[@shared.PollOption] = []
  while stmt.step() {
    let id = column_int(stmt, 0)
    let text : String = stmt.column(index=1)
    let votes = column_int(stmt, 2)
    options.push({ id, text, votes, })
  }
  stmt.finalize()
  options
}

///|
/// Fetch all polls (newest first) with their options.
fn get_all_polls(
  conn : @sqlite3.Connection,
) -> Array[@shared.Poll] raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT id, question FROM polls ORDER BY id DESC")
  let polls : Array[@shared.Poll] = []
  while stmt.step() {
    let id = column_int(stmt, 0)
    let question : String = stmt.column(index=1)
    let options = get_options_for_poll(conn, id)
    polls.push({ id, question, options, })
  }
  stmt.finalize()
  polls
}

///|
/// Insert a new poll with the given question and options. Returns the created poll.
fn create_poll(
  conn : @sqlite3.Connection,
  question : String,
  option_texts : Array[String],
) -> @shared.Poll raise @sqlite3.SqliteError {
  let stmt = conn.prepare("INSERT INTO polls (question) VALUES (?)")
  stmt.bind(index=1, question)
  stmt.step() |> ignore
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let poll_id = column_int(stmt2, 0)
  stmt2.finalize()
  let options : Array[@shared.PollOption] = []
  for text in option_texts {
    let stmt3 = conn.prepare(
      "INSERT INTO poll_options (poll_id, text, votes) VALUES (?, ?, 0)",
    )
    stmt3.bind(index=1, poll_id)
    stmt3.bind(index=2, text)
    stmt3.step() |> ignore
    stmt3.finalize()
    let stmt4 = conn.prepare("SELECT last_insert_rowid()")
    guard stmt4.step()
    let opt_id = column_int(stmt4, 0)
    stmt4.finalize()
    options.push({ id: opt_id, text, votes: 0, })
  }
  { id: poll_id, question, options, }
}

///|
/// Increment the vote count for a poll option by one.
fn vote_on_option(
  conn : @sqlite3.Connection,
  option_id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "UPDATE poll_options SET votes = votes + 1 WHERE id = ?",
  )
  stmt.bind(index=1, option_id)
  stmt.step() |> ignore
  stmt.finalize()
}

///|
/// Delete a poll and all its options from the database.
fn delete_poll(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  // Delete options first (no FK cascade in this SQLite binding)
  let stmt = conn.prepare("DELETE FROM poll_options WHERE poll_id = ?")
  stmt.bind(index=1, id)
  stmt.step() |> ignore
  stmt.finalize()
  let stmt2 = conn.prepare("DELETE FROM polls WHERE id = ?")
  stmt2.bind(index=1, id)
  stmt2.step() |> ignore
  stmt2.finalize()
}

///|
/// Look up a single poll by ID, returning `None` if it does not exist.
fn get_poll_by_id(
  conn : @sqlite3.Connection,
  id : Int,
) -> @shared.Poll? raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT id, question FROM polls WHERE id = ?")
  stmt.bind(index=1, id)
  if stmt.step() {
    let poll_id = column_int(stmt, 0)
    let question : String = stmt.column(index=1)
    stmt.finalize()
    let options = get_options_for_poll(conn, poll_id)
    Some({ id: poll_id, question, options, })
  } else {
    stmt.finalize()
    None
  }
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
