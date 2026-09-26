///|
fn init_db(conn : @sqlite3.Connection) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS posts (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  title BLOB NOT NULL,
      #|  content BLOB NOT NULL,
      #|  created_at TEXT NOT NULL DEFAULT (datetime('now')),
      #|  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
      #|)
    ),
  )
  stmt.step() |> ignore
  stmt.finalize()
  let stmt2 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS comments (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  post_id INTEGER NOT NULL,
      #|  author BLOB NOT NULL,
      #|  content BLOB NOT NULL,
      #|  created_at TEXT NOT NULL DEFAULT (datetime('now')),
      #|  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
      #|)
    ),
  )
  stmt2.step() |> ignore
  stmt2.finalize()
}

///|
fn read_post_from_stmt(
  stmt : @sqlite3.Statement,
) -> @shared.Post raise @sqlite3.SqliteError {
  let id = column_int(stmt, 0)
  let title : String = stmt.column(index=1)
  let content : String = stmt.column(index=2)
  let ca_bytes : Bytes = stmt.column(index=3)
  let ua_bytes : Bytes = stmt.column(index=4)
  let created_at : String = try! @utf8.decode(ca_bytes[:])
  let updated_at : String = try! @utf8.decode(ua_bytes[:])
  { id, title, content, created_at, updated_at, }
}

///|
fn read_comment_from_stmt(
  stmt : @sqlite3.Statement,
) -> @shared.Comment raise @sqlite3.SqliteError {
  let id = column_int(stmt, 0)
  let post_id = column_int(stmt, 1)
  let author : String = stmt.column(index=2)
  let content : String = stmt.column(index=3)
  let ca_bytes : Bytes = stmt.column(index=4)
  let created_at : String = try! @utf8.decode(ca_bytes[:])
  { id, post_id, author, content, created_at, }
}

///|
fn get_all_posts(
  conn : @sqlite3.Connection,
) -> Array[@shared.Post] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, title, content, created_at, updated_at FROM posts ORDER BY id DESC",
  )
  let posts : Array[@shared.Post] = []
  while stmt.step() {
    posts.push(read_post_from_stmt(stmt))
  }
  stmt.finalize()
  posts
}

///|
fn get_post(
  conn : @sqlite3.Connection,
  id : Int,
) -> @shared.Post? raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, title, content, created_at, updated_at FROM posts WHERE id = ?",
  )
  stmt.bind(index=1, id)
  let result = if stmt.step() { Some(read_post_from_stmt(stmt)) } else { None }
  stmt.finalize()
  result
}

///|
fn create_post(
  conn : @sqlite3.Connection,
  title : String,
  content : String,
) -> @shared.Post raise @sqlite3.SqliteError {
  let stmt = conn.prepare("INSERT INTO posts (title, content) VALUES (?, ?)")
  stmt.bind(index=1, title)
  stmt.bind(index=2, content)
  stmt.step() |> ignore
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id = column_int(stmt2, 0)
  stmt2.finalize()
  match get_post(conn, id) {
    Some(post) => post
    None => { id, title, content, created_at: "", updated_at: "", }
  }
}

///|
fn update_post(
  conn : @sqlite3.Connection,
  id : Int,
  title : String,
  content : String,
) -> @shared.Post? raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "UPDATE posts SET title = ?, content = ?, updated_at = datetime('now') WHERE id = ?",
  )
  stmt.bind(index=1, title)
  stmt.bind(index=2, content)
  stmt.bind(index=3, id)
  stmt.step() |> ignore
  stmt.finalize()
  get_post(conn, id)
}

///|
fn delete_post(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  // Delete comments first (in case FK not enforced)
  let stmt0 = conn.prepare("DELETE FROM comments WHERE post_id = ?")
  stmt0.bind(index=1, id)
  stmt0.step() |> ignore
  stmt0.finalize()
  let stmt = conn.prepare("DELETE FROM posts WHERE id = ?")
  stmt.bind(index=1, id)
  stmt.step() |> ignore
  stmt.finalize()
}

///|
fn get_comments(
  conn : @sqlite3.Connection,
  post_id : Int,
) -> Array[@shared.Comment] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, post_id, author, content, created_at FROM comments WHERE post_id = ? ORDER BY id ASC",
  )
  stmt.bind(index=1, post_id)
  let comments : Array[@shared.Comment] = []
  while stmt.step() {
    comments.push(read_comment_from_stmt(stmt))
  }
  stmt.finalize()
  comments
}

///|
fn get_comment(
  conn : @sqlite3.Connection,
  id : Int,
) -> @shared.Comment? raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, post_id, author, content, created_at FROM comments WHERE id = ?",
  )
  stmt.bind(index=1, id)
  let result = if stmt.step() {
    Some(read_comment_from_stmt(stmt))
  } else {
    None
  }
  stmt.finalize()
  result
}

///|
fn create_comment(
  conn : @sqlite3.Connection,
  post_id : Int,
  author : String,
  content : String,
) -> @shared.Comment raise @sqlite3.SqliteError {
  let author = @shared.normalize_author(author)
  let stmt = conn.prepare(
    "INSERT INTO comments (post_id, author, content) VALUES (?, ?, ?)",
  )
  stmt.bind(index=1, post_id)
  stmt.bind(index=2, author)
  stmt.bind(index=3, content)
  stmt.step() |> ignore
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id = column_int(stmt2, 0)
  stmt2.finalize()
  match get_comment(conn, id) {
    Some(comment) => comment
    None => { id, post_id, author, content, created_at: "", }
  }
}

///|
fn delete_comment(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM comments WHERE id = ?")
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
