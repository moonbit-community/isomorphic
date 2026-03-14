///|
/// Create the `notes` table if it does not already exist. Title and content
/// are stored as BLOB columns to preserve UTF-8 encoding.
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
  stmt.step_once()
  stmt.finalize()
}

///|
/// Retrieve all notes from the database, ordered by pinned status (descending)
/// then by id (descending). Uses `column_blob_as_string` for UTF-8 safety.
fn get_all_notes(
  conn : @sqlite3.Connection,
) -> Array[@shared.Note] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, title, content, pinned FROM notes ORDER BY pinned DESC, id DESC",
  )
  let notes : Array[@shared.Note] = []
  while stmt.step() {
    let id : Int = stmt.column(index=0)
    let title : String = stmt.column_blob_as_string(index=1)
    let content : String = stmt.column_blob_as_string(index=2)
    let pinned_int : Int = stmt.column(index=3)
    let pinned = pinned_int != 0
    notes.push({ id, title, content, pinned })
  }
  stmt.finalize()
  notes
}

///|
/// Insert a new note with the given title and content. Returns the created
/// note with its auto-generated id. Uses `bind_string_as_blob` for UTF-8 safety.
fn create_note(
  conn : @sqlite3.Connection,
  title : String,
  content : String,
) -> @shared.Note raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "INSERT INTO notes (title, content) VALUES (?, ?)",
  )
  stmt.bind_string_as_blob(index=1, val=title)
  stmt.bind_string_as_blob(index=2, val=content)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id : Int = stmt2.column(index=0)
  stmt2.finalize()
  { id, title, content, pinned: false }
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
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare(
    "SELECT id, title, content, pinned FROM notes WHERE id = ?",
  )
  stmt2.bind(index=1, val=id)
  guard stmt2.step()
  let note_id : Int = stmt2.column(index=0)
  let title : String = stmt2.column_blob_as_string(index=1)
  let content : String = stmt2.column_blob_as_string(index=2)
  let pinned_int : Int = stmt2.column(index=3)
  stmt2.finalize()
  { id: note_id, title, content, pinned: pinned_int != 0 }
}

///|
/// Delete the note with the given id from the database.
fn delete_note(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM notes WHERE id = ?")
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
}
