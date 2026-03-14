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
  stmt.step_once()
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
  stmt2.step_once()
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
  stmt.bind(index=1, val=poll_id)
  let options : Array[@shared.PollOption] = []
  while stmt.step() {
    let id : Int = stmt.column(index=0)
    let text : String = stmt.column_blob_as_string(index=1)
    let votes : Int = stmt.column(index=2)
    options.push({ id, text, votes })
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
    let id : Int = stmt.column(index=0)
    let question : String = stmt.column_blob_as_string(index=1)
    let options = get_options_for_poll(conn, id)
    polls.push({ id, question, options })
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
  stmt.bind_string_as_blob(index=1, val=question)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let poll_id : Int = stmt2.column(index=0)
  stmt2.finalize()
  let options : Array[@shared.PollOption] = []
  for text in option_texts {
    let stmt3 = conn.prepare(
      "INSERT INTO poll_options (poll_id, text, votes) VALUES (?, ?, 0)",
    )
    stmt3.bind(index=1, val=poll_id)
    stmt3.bind_string_as_blob(index=2, val=text)
    stmt3.step_once()
    stmt3.finalize()
    let stmt4 = conn.prepare("SELECT last_insert_rowid()")
    guard stmt4.step()
    let opt_id : Int = stmt4.column(index=0)
    stmt4.finalize()
    options.push({ id: opt_id, text, votes: 0 })
  }
  { id: poll_id, question, options }
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
  stmt.bind(index=1, val=option_id)
  stmt.step_once()
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
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("DELETE FROM polls WHERE id = ?")
  stmt2.bind(index=1, val=id)
  stmt2.step_once()
  stmt2.finalize()
}

///|
/// Look up a single poll by ID, returning `None` if it does not exist.
fn get_poll_by_id(
  conn : @sqlite3.Connection,
  id : Int,
) -> @shared.Poll? raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT id, question FROM polls WHERE id = ?")
  stmt.bind(index=1, val=id)
  if stmt.step() {
    let poll_id : Int = stmt.column(index=0)
    let question : String = stmt.column_blob_as_string(index=1)
    stmt.finalize()
    let options = get_options_for_poll(conn, poll_id)
    Some({ id: poll_id, question, options })
  } else {
    stmt.finalize()
    None
  }
}
