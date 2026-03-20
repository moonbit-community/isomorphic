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
  stmt.step_once()
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
  stmt2.step_once()
  stmt2.finalize()
}

///|
fn read_post_from_stmt(stmt : @sqlite3.Statement) -> @shared.Post {
  let id : Int = stmt.column(index=0)
  let title : String = stmt.column_blob_as_string(index=1)
  let content : String = stmt.column_blob_as_string(index=2)
  let ca_bytes : Bytes = stmt.column(index=3)
  let ua_bytes : Bytes = stmt.column(index=4)
  let created_at : String = try! @utf8.decode(ca_bytes[:])
  let updated_at : String = try! @utf8.decode(ua_bytes[:])
  { id, title, content, created_at, updated_at }
}

///|
fn read_comment_from_stmt(stmt : @sqlite3.Statement) -> @shared.Comment {
  let id : Int = stmt.column(index=0)
  let post_id : Int = stmt.column(index=1)
  let author : String = stmt.column_blob_as_string(index=2)
  let content : String = stmt.column_blob_as_string(index=3)
  let ca_bytes : Bytes = stmt.column(index=4)
  let created_at : String = try! @utf8.decode(ca_bytes[:])
  { id, post_id, author, content, created_at }
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
  stmt.bind(index=1, val=id)
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
  stmt.bind_string_as_blob(index=1, val=title)
  stmt.bind_string_as_blob(index=2, val=content)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id : Int = stmt2.column(index=0)
  stmt2.finalize()
  match get_post(conn, id) {
    Some(post) => post
    None => { id, title, content, created_at: "", updated_at: "" }
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
  stmt.bind_string_as_blob(index=1, val=title)
  stmt.bind_string_as_blob(index=2, val=content)
  stmt.bind(index=3, val=id)
  stmt.step_once()
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
  stmt0.bind(index=1, val=id)
  stmt0.step_once()
  stmt0.finalize()
  let stmt = conn.prepare("DELETE FROM posts WHERE id = ?")
  stmt.bind(index=1, val=id)
  stmt.step_once()
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
  stmt.bind(index=1, val=post_id)
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
  stmt.bind(index=1, val=id)
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
  stmt.bind(index=1, val=post_id)
  stmt.bind_string_as_blob(index=2, val=author)
  stmt.bind_string_as_blob(index=3, val=content)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id : Int = stmt2.column(index=0)
  stmt2.finalize()
  match get_comment(conn, id) {
    Some(comment) => comment
    None => { id, post_id, author, content, created_at: "" }
  }
}

///|
fn delete_comment(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM comments WHERE id = ?")
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
}
