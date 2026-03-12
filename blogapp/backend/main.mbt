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
fn post_to_json(
  id : Int,
  title : String,
  content : String,
  created_at : String,
  updated_at : String,
) -> Json {
  {
    "id": id,
    "title": title,
    "content": content,
    "created_at": created_at,
    "updated_at": updated_at,
  }
}

///|
fn comment_to_json(
  id : Int,
  post_id : Int,
  author : String,
  content : String,
  created_at : String,
) -> Json {
  {
    "id": id,
    "post_id": post_id,
    "author": author,
    "content": content,
    "created_at": created_at,
  }
}

///|
fn get_all_posts(
  conn : @sqlite3.Connection,
) -> Array[Json] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, title, content, created_at, updated_at FROM posts ORDER BY id DESC",
  )
  let posts : Array[Json] = []
  while stmt.step() {
    let id : Int = stmt.column(index=0)
    let title : String = stmt.column_blob_as_string(index=1)
    let content : String = stmt.column_blob_as_string(index=2)
    let created_at_bytes : Bytes = stmt.column(index=3)
    let updated_at_bytes : Bytes = stmt.column(index=4)
    let created_at : String = try! @utf8.decode(created_at_bytes[:])
    let updated_at : String = try! @utf8.decode(updated_at_bytes[:])
    posts.push(post_to_json(id, title, content, created_at, updated_at))
  }
  stmt.finalize()
  posts
}

///|
fn get_post(
  conn : @sqlite3.Connection,
  id : Int,
) -> Json? raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, title, content, created_at, updated_at FROM posts WHERE id = ?",
  )
  stmt.bind(index=1, val=id)
  if stmt.step() {
    let title : String = stmt.column_blob_as_string(index=1)
    let content : String = stmt.column_blob_as_string(index=2)
    let ca_bytes : Bytes = stmt.column(index=3)
    let ua_bytes : Bytes = stmt.column(index=4)
    let created_at : String = try! @utf8.decode(ca_bytes[:])
    let updated_at : String = try! @utf8.decode(ua_bytes[:])
    stmt.finalize()
    Some(post_to_json(id, title, content, created_at, updated_at))
  } else {
    stmt.finalize()
    None
  }
}

///|
fn create_post(
  conn : @sqlite3.Connection,
  title : String,
  content : String,
) -> Json raise @sqlite3.SqliteError {
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
    None => post_to_json(id, title, content, "", "")
  }
}

///|
fn update_post(
  conn : @sqlite3.Connection,
  id : Int,
  title : String,
  content : String,
) -> Json? raise @sqlite3.SqliteError {
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
) -> Array[Json] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, post_id, author, content, created_at FROM comments WHERE post_id = ? ORDER BY id ASC",
  )
  stmt.bind(index=1, val=post_id)
  let comments : Array[Json] = []
  while stmt.step() {
    let id : Int = stmt.column(index=0)
    let pid : Int = stmt.column(index=1)
    let author : String = stmt.column_blob_as_string(index=2)
    let content : String = stmt.column_blob_as_string(index=3)
    let ca_bytes : Bytes = stmt.column(index=4)
    let created_at : String = try! @utf8.decode(ca_bytes[:])
    comments.push(comment_to_json(id, pid, author, content, created_at))
  }
  stmt.finalize()
  comments
}

///|
fn get_comment(
  conn : @sqlite3.Connection,
  id : Int,
) -> Json? raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, post_id, author, content, created_at FROM comments WHERE id = ?",
  )
  stmt.bind(index=1, val=id)
  if stmt.step() {
    let pid : Int = stmt.column(index=1)
    let author : String = stmt.column_blob_as_string(index=2)
    let content : String = stmt.column_blob_as_string(index=3)
    let ca_bytes : Bytes = stmt.column(index=4)
    let created_at : String = try! @utf8.decode(ca_bytes[:])
    stmt.finalize()
    Some(comment_to_json(id, pid, author, content, created_at))
  } else {
    stmt.finalize()
    None
  }
}

///|
fn create_comment(
  conn : @sqlite3.Connection,
  post_id : Int,
  author : String,
  content : String,
) -> Json raise @sqlite3.SqliteError {
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
    None => comment_to_json(id, post_id, author, content, "")
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

///|
fn main raise {
  let matches = @argparse.parse(
    Command("blog-server", about="Blog App backend server", options=[
      OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
        "4001",
      ]),
    ]),
  )
  let port = @strconv.parse_int(matches.values["port"][0])

  let conn = @sqlite3.Connection::open("blog.db")
  println("Database opened: blog.db")

  init_db(conn)
  println("Database initialized")

  let app = @mocket.new()
  app
  ..use_middleware(@cors.handle_cors())
  ..get("/", _ => {
    println("GET /")
    let html =
      #|<!DOCTYPE html>
      #|<html>
      #|<head>
      #|  <meta charset="UTF-8">
      #|  <meta name="viewport" content="width=device-width, initial-scale=1.0">
      #|  <title>Blog</title>
      #|  <style>
      #|    * { margin: 0; padding: 0; box-sizing: border-box; }
      #|    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; background: #f4f5f7; color: #1a1a2e; line-height: 1.6; -webkit-font-smoothing: antialiased; }
      #|    ::selection { background: #c7d2fe; }
      #|  </style>
      #|</head>
      #|<body>
      #|  <div id="app"></div>
      #|  <script src="/frontend.js"></script>
      #|</body>
      #|</html>
    @mocket.HttpResponse::new(
      OK,
      headers={ "Content-Type": "text/html; charset=utf-8" },
      raw_body=@utf8.encode(html),
    )
  })
  ..get("/frontend.js", _ => {
    println("GET /frontend.js")
    try {
      let bytes = @fs.read_file_to_bytes("./public/frontend.js")
      @mocket.HttpResponse::new(
        OK,
        headers={ "Content-Type": "application/javascript; charset=utf-8" },
        raw_body=bytes,
      )
    } catch {
      _ => {
        println("  -> 404 Not Found")
        @mocket.HttpResponse::new(NotFound).body("Not Found")
      }
    }
  })
  ..get("/api/posts", _ => {
    println("GET /api/posts")
    try {
      let posts = get_all_posts(conn)
      println("  -> 200 (\{posts.length()} posts)")
      @mocket.HttpResponse::new(OK).json(posts)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..get("/api/posts/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("GET /api/posts/\{id_str}")
    try {
      let id = @strconv.parse_int(id_str)
      match get_post(conn, id) {
        Some(post) => {
          println("  -> 200")
          @mocket.HttpResponse::new(OK).json(post)
        }
        None => {
          println("  -> 404 Not Found")
          @mocket.HttpResponse::new(NotFound).body("Post not found")
        }
      }
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..get("/api/posts/:id/comments", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("GET /api/posts/\{id_str}/comments")
    try {
      let post_id = @strconv.parse_int(id_str)
      let comments = get_comments(conn, post_id)
      println("  -> 200 (\{comments.length()} comments)")
      @mocket.HttpResponse::new(OK).json(comments)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/posts", event => {
    println("POST /api/posts")
    try {
      let json : Json = event.req.body()
      let title = match json {
        { "title": String(t), .. } => t
        _ => {
          println("  -> 400 Missing title field")
          return @mocket.HttpResponse::new(BadRequest).body(
            "Missing title field",
          )
        }
      }
      let content = match json {
        { "content": String(c), .. } => c
        _ => ""
      }
      let post = create_post(conn, title, content)
      println("  -> 201 created post: \{title}")
      @mocket.HttpResponse::new(Created).json(post)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/posts/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/posts/\{id_str} (update)")
    try {
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let title = match json {
        { "title": String(t), .. } => t
        _ => {
          println("  -> 400 Missing title field")
          return @mocket.HttpResponse::new(BadRequest).body(
            "Missing title field",
          )
        }
      }
      let content = match json {
        { "content": String(c), .. } => c
        _ => ""
      }
      match update_post(conn, id, title, content) {
        Some(post) => {
          println("  -> 200 updated post \{id}")
          @mocket.HttpResponse::new(OK).json(post)
        }
        None => {
          println("  -> 404 Not Found")
          @mocket.HttpResponse::new(NotFound).body("Post not found")
        }
      }
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/posts/:id/comments", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/posts/\{id_str}/comments")
    try {
      let post_id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let author = match json {
        { "author": String(a), .. } => a
        _ => "Anonymous"
      }
      let content = match json {
        { "content": String(c), .. } => c
        _ => {
          println("  -> 400 Missing content field")
          return @mocket.HttpResponse::new(BadRequest).body(
            "Missing content field",
          )
        }
      }
      let comment = create_comment(conn, post_id, author, content)
      println("  -> 201 created comment by \{author}")
      @mocket.HttpResponse::new(Created).json(comment)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..delete("/api/posts/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("DELETE /api/posts/\{id_str}")
    try {
      let id = @strconv.parse_int(id_str)
      delete_post(conn, id)
      println("  -> 204 deleted post \{id}")
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  .delete("/api/comments/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("DELETE /api/comments/\{id_str}")
    try {
      let id = @strconv.parse_int(id_str)
      delete_comment(conn, id)
      println("  -> 204 deleted comment \{id}")
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  println("Server running at http://localhost:\{port}")
  app.serve(port~)
}
