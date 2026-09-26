///|
/// Create the contacts table if it does not already exist.
/// Text columns keep their original BLOB declaration so existing databases
/// stay readable; values are bound and read as UTF-8 strings.
fn init_db(conn : @sqlite3.Connection) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS contacts (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  name BLOB NOT NULL,
      #|  email BLOB NOT NULL,
      #|  phone BLOB NOT NULL,
      #|  favorite INTEGER NOT NULL DEFAULT 0
      #|)
    ),
  )
  stmt.step() |> ignore
  stmt.finalize()
}

///|
/// Retrieve all contacts from the database, ordered by id.
fn get_all_contacts(
  conn : @sqlite3.Connection,
) -> Array[@shared.Contact] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, name, email, phone, favorite FROM contacts ORDER BY id",
  )
  let contacts : Array[@shared.Contact] = []
  while stmt.step() {
    let id = column_int(stmt, 0)
    let name : String = stmt.column(index=1)
    let email : String = stmt.column(index=2)
    let phone : String = stmt.column(index=3)
    let fav = column_int(stmt, 4)
    contacts.push({ id, name, email, phone, favorite: fav != 0, })
  }
  stmt.finalize()
  contacts
}

///|
/// Insert a new contact and return the created record with its assigned id.
fn create_contact(
  conn : @sqlite3.Connection,
  name : String,
  email : String,
  phone : String,
) -> @shared.Contact raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)",
  )
  stmt.bind(index=1, name)
  stmt.bind(index=2, email)
  stmt.bind(index=3, phone)
  stmt.step() |> ignore
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id = column_int(stmt2, 0)
  stmt2.finalize()
  { id, name, email, phone, favorite: false, }
}

///|
/// Flip the favorite flag for the given contact and return the updated record.
fn toggle_favorite(
  conn : @sqlite3.Connection,
  id : Int,
) -> @shared.Contact raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "UPDATE contacts SET favorite = CASE WHEN favorite = 0 THEN 1 ELSE 0 END WHERE id = ?",
  )
  stmt.bind(index=1, id)
  stmt.step() |> ignore
  stmt.finalize()
  // Fetch the updated contact
  let stmt2 = conn.prepare(
    "SELECT id, name, email, phone, favorite FROM contacts WHERE id = ?",
  )
  stmt2.bind(index=1, id)
  guard stmt2.step()
  let name : String = stmt2.column(index=1)
  let email : String = stmt2.column(index=2)
  let phone : String = stmt2.column(index=3)
  let fav = column_int(stmt2, 4)
  stmt2.finalize()
  { id, name, email, phone, favorite: fav != 0, }
}

///|
/// Delete a contact by id.
fn delete_contact(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM contacts WHERE id = ?")
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
