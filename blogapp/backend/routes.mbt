///|
async fn send_text(
  res : @moonback.Responder,
  body : String,
  status? : Int = 200,
) -> Unit {
  res
  .respond(status~, headers={ "Content-Type": "text/plain; charset=utf-8" })
  .write(body)
}

///|
async fn handle_get_posts(
  conn : @sqlite3.Connection,
  _req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("GET \{@shared.api_posts}")
  try {
    let posts = get_all_posts(conn)
    println("  -> 200 (\{posts.length()} posts)")
    res.send_json(posts.map(fn(p) { p.to_json() }).to_json())
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_get_post(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("GET /api/posts/\{id_str}")
  try {
    let id = @string.parse_int(id_str)
    match get_post(conn, id) {
      Some(post) => {
        println("  -> 200")
        res.send_json(post.to_json())
      }
      None => {
        println("  -> 404 Not Found")
        send_text(res, "Post not found", status=404)
      }
    }
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_get_post_comments(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("GET /api/posts/\{id_str}/comments")
  try {
    let post_id = @string.parse_int(id_str)
    let comments = get_comments(conn, post_id)
    println("  -> 200 (\{comments.length()} comments)")
    res.send_json(comments.map(fn(c) { c.to_json() }).to_json())
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_create_post(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("POST \{@shared.api_posts}")
  try {
    let json : Json = req.body.json()
    let title = match json {
      { "title": String(t), .. } => t
      _ => {
        println("  -> 400 Missing title field")
        send_text(res, "Missing title field", status=400)
        return
      }
    }
    if !@shared.validate_title(title) {
      println("  -> 400 Empty title")
      send_text(res, "Title cannot be empty", status=400)
      return
    }
    let content = match json {
      { "content": String(c), .. } => c
      _ => ""
    }
    let post = create_post(conn, title, content)
    println("  -> 201 created post: \{title}")
    res.send_json(post.to_json(), status=201)
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_update_post(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/posts/\{id_str} (update)")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let title = match json {
      { "title": String(t), .. } => t
      _ => {
        println("  -> 400 Missing title field")
        send_text(res, "Missing title field", status=400)
        return
      }
    }
    if !@shared.validate_title(title) {
      println("  -> 400 Empty title")
      send_text(res, "Title cannot be empty", status=400)
      return
    }
    let content = match json {
      { "content": String(c), .. } => c
      _ => ""
    }
    match update_post(conn, id, title, content) {
      Some(post) => {
        println("  -> 200 updated post \{id}")
        res.send_json(post.to_json())
      }
      None => {
        println("  -> 404 Not Found")
        send_text(res, "Post not found", status=404)
      }
    }
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_create_comment(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/posts/\{id_str}/comments")
  try {
    let post_id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let author = match json {
      { "author": String(a), .. } => a
      _ => ""
    }
    let content = match json {
      { "content": String(c), .. } => c
      _ => {
        println("  -> 400 Missing content field")
        send_text(res, "Missing content field", status=400)
        return
      }
    }
    let comment = create_comment(conn, post_id, author, content)
    println("  -> 201 created comment by \{comment.author}")
    res.send_json(comment.to_json(), status=201)
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_delete_post(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("DELETE /api/posts/\{id_str}")
  try {
    let id = @string.parse_int(id_str)
    delete_post(conn, id)
    println("  -> 204 deleted post \{id}")
    res.send_void(status=204)
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_delete_comment(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("DELETE /api/comments/\{id_str}")
  try {
    let id = @string.parse_int(id_str)
    delete_comment(conn, id)
    println("  -> 204 deleted comment \{id}")
    res.send_void(status=204)
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}
