///|
/// Create the contacts table if it does not already exist.
/// Text columns are stored as BLOB for UTF-8 safety.
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
  stmt.step_once()
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
    let id : Int = stmt.column(index=0)
    let name : String = stmt.column_blob_as_string(index=1)
    let email : String = stmt.column_blob_as_string(index=2)
    let phone : String = stmt.column_blob_as_string(index=3)
    let fav : Int = stmt.column(index=4)
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
  stmt.bind_string_as_blob(index=1, val=name)
  stmt.bind_string_as_blob(index=2, val=email)
  stmt.bind_string_as_blob(index=3, val=phone)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id : Int = stmt2.column(index=0)
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
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
  // Fetch the updated contact
  let stmt2 = conn.prepare(
    "SELECT id, name, email, phone, favorite FROM contacts WHERE id = ?",
  )
  stmt2.bind(index=1, val=id)
  guard stmt2.step()
  let name : String = stmt2.column_blob_as_string(index=1)
  let email : String = stmt2.column_blob_as_string(index=2)
  let phone : String = stmt2.column_blob_as_string(index=3)
  let fav : Int = stmt2.column(index=4)
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
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
}
