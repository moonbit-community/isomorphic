///|
fn handle_get_posts(
  conn : @sqlite3.Connection,
  _event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  println("GET \{@shared.api_posts}")
  try {
    let posts = get_all_posts(conn)
    println("  -> 200 (\{posts.length()} posts)")
    @mocket.HttpResponse::new(OK).json(posts.map(fn(p) { p.to_json() }))
  } catch {
    e => {
      println("  -> 500 \{e}")
      @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  }
}

///|
fn handle_get_post(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("GET /api/posts/\{id_str}")
  try {
    let id = @strconv.parse_int(id_str)
    match get_post(conn, id) {
      Some(post) => {
        println("  -> 200")
        @mocket.HttpResponse::new(OK).json(post.to_json())
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
}

///|
fn handle_get_post_comments(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("GET /api/posts/\{id_str}/comments")
  try {
    let post_id = @strconv.parse_int(id_str)
    let comments = get_comments(conn, post_id)
    println("  -> 200 (\{comments.length()} comments)")
    @mocket.HttpResponse::new(OK).json(comments.map(fn(c) { c.to_json() }))
  } catch {
    e => {
      println("  -> 500 \{e}")
      @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  }
}

///|
fn handle_create_post(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  println("POST \{@shared.api_posts}")
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
    if !(@shared.validate_title(title)) {
      println("  -> 400 Empty title")
      return @mocket.HttpResponse::new(BadRequest).body(
        "Title cannot be empty",
      )
    }
    let content = match json {
      { "content": String(c), .. } => c
      _ => ""
    }
    let post = create_post(conn, title, content)
    println("  -> 201 created post: \{title}")
    @mocket.HttpResponse::new(Created).json(post.to_json())
  } catch {
    e => {
      println("  -> 500 \{e}")
      @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  }
}

///|
fn handle_update_post(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
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
    if !(@shared.validate_title(title)) {
      println("  -> 400 Empty title")
      return @mocket.HttpResponse::new(BadRequest).body(
        "Title cannot be empty",
      )
    }
    let content = match json {
      { "content": String(c), .. } => c
      _ => ""
    }
    match update_post(conn, id, title, content) {
      Some(post) => {
        println("  -> 200 updated post \{id}")
        @mocket.HttpResponse::new(OK).json(post.to_json())
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
}

///|
fn handle_create_comment(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/posts/\{id_str}/comments")
  try {
    let post_id = @strconv.parse_int(id_str)
    let json : Json = event.req.body()
    let author = match json {
      { "author": String(a), .. } => a
      _ => ""
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
    println("  -> 201 created comment by \{comment.author}")
    @mocket.HttpResponse::new(Created).json(comment.to_json())
  } catch {
    e => {
      println("  -> 500 \{e}")
      @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  }
}

///|
fn handle_delete_post(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
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
}

///|
fn handle_delete_comment(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
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
}
