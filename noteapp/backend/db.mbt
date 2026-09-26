///|
/// Create the `notes` table if it does not already exist. Title and content
/// keep their original BLOB declaration so existing databases stay readable;
/// values are bound and read as UTF-8 strings.
fn init_db(conn : @sqlite3.Connection) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS notes (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  title BLOB NOT NULL,
      #|  content BLOB NOT NULL,
      #|  pinned INTEGER NOT NULL DEFAULT 0
      #|)
    ),
  )
  stmt.step() |> ignore
  stmt.finalize()
}

///|
/// Retrieve all notes from the database, ordered by pinned status (descending)
/// then by id (descending).
fn get_all_notes(
  conn : @sqlite3.Connection,
) -> Array[@shared.Note] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, title, content, pinned FROM notes ORDER BY pinned DESC, id DESC",
  )
  let notes : Array[@shared.Note] = []
  while stmt.step() {
    let id = column_int(stmt, 0)
    let title : String = stmt.column(index=1)
    let content : String = stmt.column(index=2)
    let pinned_int = column_int(stmt, 3)
    let pinned = pinned_int != 0
    notes.push({ id, title, content, pinned, })
  }
  stmt.finalize()
  notes
}

///|
/// Insert a new note with the given title and content. Returns the created
/// note with its auto-generated id.
fn create_note(
  conn : @sqlite3.Connection,
  title : String,
  content : String,
) -> @shared.Note raise @sqlite3.SqliteError {
  let stmt = conn.prepare("INSERT INTO notes (title, content) VALUES (?, ?)")
  stmt.bind(index=1, title)
  stmt.bind(index=2, content)
  stmt.step() |> ignore
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id = column_int(stmt2, 0)
  stmt2.finalize()
  { id, title, content, pinned: false, }
}

///|
/// Toggle the pinned status of the note with the given id and return
/// the updated note.
fn toggle_pin(
  conn : @sqlite3.Connection,
  id : Int,
) -> @shared.Note raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "UPDATE notes SET pinned = CASE WHEN pinned = 0 THEN 1 ELSE 0 END WHERE id = ?",
  )
  stmt.bind(index=1, id)
  stmt.step() |> ignore
  stmt.finalize()
  let stmt2 = conn.prepare(
    "SELECT id, title, content, pinned FROM notes WHERE id = ?",
  )
  stmt2.bind(index=1, id)
  guard stmt2.step()
  let note_id = column_int(stmt2, 0)
  let title : String = stmt2.column(index=1)
  let content : String = stmt2.column(index=2)
  let pinned_int = column_int(stmt2, 3)
  stmt2.finalize()
  { id: note_id, title, content, pinned: pinned_int != 0, }
}

///|
/// Delete the note with the given id from the database.
fn delete_note(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM notes WHERE id = ?")
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
