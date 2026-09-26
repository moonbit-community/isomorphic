///|
/// Create the `todos` table if it doesn't already exist.
///
/// The `text` column keeps its original `BLOB` declaration so existing
/// databases stay readable; values are bound and read as UTF-8 strings.
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
  stmt.step() |> ignore
  stmt.finalize()
}

///|
/// Extract a `Todo` from the current row of a prepared statement.
///
/// Expects columns in `SELECT id, text, done` order.
fn read_todo_from_stmt(
  stmt : @sqlite3.Statement,
) -> @shared.Todo raise @sqlite3.SqliteError {
  let id = column_int(stmt, 0)
  let text : String = stmt.column(index=1)
  let done = column_int(stmt, 2)
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
/// Queries `last_insert_rowid()` to populate the returned `Todo.id`.
fn create_todo(
  conn : @sqlite3.Connection,
  text : String,
) -> @shared.Todo raise @sqlite3.SqliteError {
  let stmt = conn.prepare("INSERT INTO todos (text, done) VALUES (?, 0)")
  stmt.bind(index=1, text)
  stmt.step() |> ignore
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id = column_int(stmt2, 0)
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
  stmt.bind(index=1, id)
  stmt.step() |> ignore
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT id, text, done FROM todos WHERE id = ?")
  stmt2.bind(index=1, id)
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
  stmt.bind(index=1, id)
  stmt.step() |> ignore
  stmt.finalize()
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
