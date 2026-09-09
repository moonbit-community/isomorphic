///|
/// Create the `todos` table if it doesn't already exist.
///
/// The `text` column is stored as `BLOB` so that SQLite round-trips
/// arbitrary UTF-8 without re-encoding. See `bind_string_as_blob` /
/// `column_blob_as_string` in the read/write helpers.
fn init_db(conn : @sqlite3.Connection) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS todos (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  text BLOB NOT NULL,
      #|  done INTEGER NOT NULL DEFAULT 0
      #|)
    ),
  )
  stmt.step_once()
  stmt.finalize()
}

///|
/// Extract a `Todo` from the current row of a prepared statement.
///
/// Expects columns in `SELECT id, text, done` order. Uses
/// `column_blob_as_string` for the text column to match the BLOB storage.
fn read_todo_from_stmt(stmt : @sqlite3.Statement) -> @shared.Todo {
  let id : Int = stmt.column(index=0)
  let text : String = stmt.column_blob_as_string(index=1)
  let done : Int = stmt.column(index=2)
  { id, text, done: done != 0, }
}

///|
/// Return every todo, ordered by id (insertion order).
fn get_all_todos(
  conn : @sqlite3.Connection,
) -> Array[@shared.Todo] raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT id, text, done FROM todos ORDER BY id")
  let todos : Array[@shared.Todo] = []
  while stmt.step() {
    todos.push(read_todo_from_stmt(stmt))
  }
  stmt.finalize()
  todos
}

///|
/// Insert a new todo and return it with the auto-generated id.
///
/// Uses `bind_string_as_blob` for UTF-8 safety, then queries
/// `last_insert_rowid()` to populate the returned `Todo.id`.
fn create_todo(
  conn : @sqlite3.Connection,
  text : String,
) -> @shared.Todo raise @sqlite3.SqliteError {
  let stmt = conn.prepare("INSERT INTO todos (text, done) VALUES (?, 0)")
  stmt.bind_string_as_blob(index=1, val=text)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id : Int = stmt2.column(index=0)
  stmt2.finalize()
  { id, text, done: false, }
}

///|
/// Flip a todo's `done` status and return the updated row.
///
/// Performs the toggle in a single UPDATE (no read-modify-write race),
/// then re-selects the row to return the full `Todo` to the caller.
fn toggle_todo(
  conn : @sqlite3.Connection,
  id : Int,
) -> @shared.Todo raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "UPDATE todos SET done = CASE WHEN done = 0 THEN 1 ELSE 0 END WHERE id = ?",
  )
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT id, text, done FROM todos WHERE id = ?")
  stmt2.bind(index=1, val=id)
  guard stmt2.step()
  let todo = read_todo_from_stmt(stmt2)
  stmt2.finalize()
  todo
}

///|
/// Delete a todo by id. No-op if the id doesn't exist.
fn delete_todo(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM todos WHERE id = ?")
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
}
