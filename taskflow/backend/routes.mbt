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
async fn send_text_with_headers(
  res : @moonback.Responder,
  body : String,
  headers : @moonback.Headers,
  status? : Int = 200,
) -> Unit {
  res
  .respond(
    status~,
    headers=[("Content-Type", "text/plain; charset=utf-8"), ..headers.iter()],
  )
  .write(body)
}

///|
async fn send_json(
  res : @moonback.Responder,
  json : Json,
  status? : Int = 200,
) -> Unit {
  res.send_json(json, status~)
}

///|
async fn send_json_with_headers(
  res : @moonback.Responder,
  json : Json,
  headers : @moonback.Headers,
  status? : Int = 200,
) -> Unit {
  res.send_json(json, status~, headers=[..headers.iter()])
}

///|
fn session_cookie(token : String, max_age : Int64) -> @http.Cookie {
  Cookie("session", token, path="/", max_age~, http_only=true, extensions=[
    "SameSite=Lax",
  ])
}

///|
fn clear_session_cookie() -> @http.Cookie {
  Cookie("session", "", path="/", max_age=0, http_only=true, extensions=[
    "SameSite=Lax",
  ])
}

///|
/// Handler for POST /api/auth/register
async fn handle_register(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("POST \{@shared.api_register}")
  try {
    let json : Json = req.body.json()
    let username = match json {
      { "username": String(u), .. } => u
      _ => {
        send_json(res, ({ "error": "Missing username" } : Json), status=400)
        return
      }
    }
    let password = match json {
      { "password": String(p), .. } => p
      _ => {
        send_json(res, ({ "error": "Missing password" } : Json), status=400)
        return
      }
    }
    if !@shared.validate_username(username) {
      send_json(
        res,
        (
          {
            "error": "Username must be 3-30 alphanumeric characters or underscores",
          } : Json),
        status=400,
      )
      return
    }
    if !@shared.validate_password(password) {
      send_json(
        res,
        ({ "error": "Password must be 4-100 characters" } : Json),
        status=400,
      )
      return
    }
    let user = register_user(conn, username, password)
    let token = create_session(conn, user.id, user.username)
    let resp : @shared.AuthResponse = {
      user,
      message: "Registration successful",
    }
    let headers = @moonback.Headers::new()
    headers.add_set_cookie(session_cookie(token, (86400 * 7).to_int64()))
    send_json_with_headers(res, resp.to_json(), headers, status=201)
    println("  -> 201 registered user: \{username}")
  } catch {
    e => {
      let msg = "\{e}"
      if msg.contains("UNIQUE") || msg.contains("(19,") {
        println("  -> 409 username taken")
        send_json(
          res,
          ({ "error": "Username already taken" } : Json),
          status=409,
        )
      } else {
        println("  -> 500 \{e}")
        send_json(res, ({ "error": "\{e}" } : Json), status=500)
      }
    }
  }
}

///|
/// Handler for POST /api/auth/login
async fn handle_login(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("POST \{@shared.api_login}")
  try {
    let json : Json = req.body.json()
    let username = match json {
      { "username": String(u), .. } => u
      _ => {
        send_json(res, ({ "error": "Missing username" } : Json), status=400)
        return
      }
    }
    let password = match json {
      { "password": String(p), .. } => p
      _ => {
        send_json(res, ({ "error": "Missing password" } : Json), status=400)
        return
      }
    }
    match login_user(conn, username, password) {
      Some(user) => {
        let token = create_session(conn, user.id, user.username)
        let resp : @shared.AuthResponse = { user, message: "Login successful" }
        let headers = @moonback.Headers::new()
        headers.add_set_cookie(session_cookie(token, (86400 * 7).to_int64()))
        send_json_with_headers(res, resp.to_json(), headers, status=200)
        println("  -> 200 logged in: \{username}")
      }
      None => {
        println("  -> 401 invalid credentials")
        send_json(
          res,
          ({ "error": "Invalid username or password" } : Json),
          status=401,
        )
      }
    }
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_json(res, ({ "error": "\{e}" } : Json), status=500)
    }
  }
}

///|
/// Handler for POST /api/auth/logout
async fn handle_logout(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("POST \{@shared.api_logout}")
  try {
    match req.cookie().get("session") {
      Some(token) => delete_session(conn, token)
      None => ()
    }
    let headers = @moonback.Headers::new()
    headers.add_set_cookie(clear_session_cookie())
    send_text_with_headers(res, "Logged out", headers, status=200)
    println("  -> 200 logged out")
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for GET /api/auth/me
async fn handle_me(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("GET \{@shared.api_me}")
  try {
    match get_request_user(conn, req) {
      Some(user) => {
        println("  -> 200 \{user.username}")
        send_json(res, user.to_json(), status=200)
        return
      }
      None => {
        println("  -> 401 not logged in")
        send_text(res, "Not logged in", status=401)
        return
      }
    }
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for GET /api/board
async fn handle_get_board(
  conn : @sqlite3.Connection,
  _req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("GET \{@shared.api_board}")
  try {
    let board = get_board(conn)
    println(
      "  -> 200 (\{board.tasks.length()} tasks, \{board.members.length()} members)",
    )
    send_json(res, board.to_json(), status=200)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for GET /api/export
async fn handle_export(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("GET \{@shared.api_export}")
  try {
    let tasks = get_all_tasks(conn)
    let members = get_all_members(conn)
    let format = match (req.body.json() : Json) {
      { "format": String(f), .. } => f
      _ =>
        // Check query-string style: just default to csv
        "csv"
    }
    if format == "json" {
      println("  -> 200 JSON export (\{tasks.length()} tasks)")
      res
      .respond(status=200, headers={
        "Content-Type": "application/json; charset=utf-8",
        "Content-Disposition": "attachment; filename=\"tasks.json\"",
      })
      .write(tasks.to_json().stringify())
    } else {
      let csv = @shared.tasks_to_csv(tasks, members)
      println("  -> 200 CSV export (\{tasks.length()} tasks)")
      res
      .respond(status=200, headers={
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": "attachment; filename=\"tasks.csv\"",
      })
      .write(csv)
    }
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for GET /api/members
async fn handle_get_members(
  conn : @sqlite3.Connection,
  _req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("GET \{@shared.api_members}")
  try {
    let members = get_all_members(conn)
    send_json(res, members.to_json(), status=200)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/tasks (create task)
async fn handle_create_task(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("POST \{@shared.api_tasks}")
  try {
    if !require_editor(conn, req) {
      send_text(res, "Viewers cannot create tasks", status=403)
      return
    }
    let user_name = match get_request_user(conn, req) {
      Some(u) => u.username
      None => ""
    }
    let json : Json = req.body.json()
    let title = match json {
      { "title": String(t), .. } => t
      _ => {
        send_text(res, "Missing title", status=400)
        return
      }
    }
    if !@shared.validate_task_title(title) {
      send_text(res, "Invalid title", status=400)
      return
    }
    let description = match json {
      { "description": String(d), .. } => d
      _ => ""
    }
    if !@shared.validate_task_description(description) {
      send_text(res, "Description too long", status=400)
      return
    }
    let priority = match json {
      { "priority": String(p), .. } => p
      _ => "medium"
    }
    if !@shared.validate_priority(priority) {
      send_text(res, "Invalid priority", status=400)
      return
    }
    let assignee_id = match json {
      { "assignee_id": Number(n, ..), .. } => n.to_int()
      _ => 0
    }
    let due_date = match json {
      { "due_date": String(d), .. } => d
      _ => ""
    }
    if !@shared.validate_due_date(due_date) {
      send_text(res, "Invalid due date", status=400)
      return
    }
    if task_count(conn) >= @shared.max_tasks {
      send_text(res, "Too many tasks", status=400)
      return
    }
    let task = create_task(
      conn, title, description, priority, assignee_id, due_date,
    )
    log_activity(conn, task.id, title, "", "todo", user_name~)
    println("  -> 201 created task: \{title}")
    send_json(res, task.to_json(), status=201)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/tasks/:id (update task)
async fn handle_update_task(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/tasks/\{id_str} (update)")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let title = match json {
      { "title": String(t), .. } => t
      _ => {
        send_text(res, "Missing title", status=400)
        return
      }
    }
    if !@shared.validate_task_title(title) {
      send_text(res, "Invalid title", status=400)
      return
    }
    let description = match json {
      { "description": String(d), .. } => d
      _ => ""
    }
    if !@shared.validate_task_description(description) {
      send_text(res, "Description too long", status=400)
      return
    }
    let priority = match json {
      { "priority": String(p), .. } => p
      _ => "medium"
    }
    if !@shared.validate_priority(priority) {
      send_text(res, "Invalid priority", status=400)
      return
    }
    let assignee_id = match json {
      { "assignee_id": Number(n, ..), .. } => n.to_int()
      _ => 0
    }
    let due_date = match json {
      { "due_date": String(d), .. } => d
      _ => ""
    }
    match
      update_task(conn, id, title, description, priority, assignee_id, due_date) {
      Some(task) => {
        println("  -> 200 updated task \{id}")
        send_json(res, task.to_json(), status=200)
        return
      }
      None => {
        send_text(res, "Task not found", status=404)
        return
      }
    }
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/status
async fn handle_update_task_status(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/tasks/\{id_str}/status")
  try {
    let user_name = match get_request_user(conn, req) {
      Some(u) => u.username
      None => ""
    }
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let new_status = match json {
      { "status": String(s), .. } => s
      _ => {
        send_text(res, "Missing status", status=400)
        return
      }
    }
    if !@shared.validate_status(new_status) {
      send_text(res, "Invalid status", status=400)
      return
    }
    // Get current task to validate transition
    match get_task(conn, id) {
      None => {
        send_text(res, "Task not found", status=404)
        return
      }
      Some(task) => {
        if !@shared.is_valid_transition(task.status, new_status) {
          let current = @shared.status_label(task.status)
          let target = @shared.status_label(new_status)
          send_text(
            res,
            "Invalid transition from \{current} to \{target}",
            status=400,
          )
          return
        }
        let stmt = conn.prepare("UPDATE tasks SET status = ? WHERE id = ?")
        stmt.bind_string_as_blob(index=1, val=new_status)
        stmt.bind(index=2, val=id)
        stmt.step_once()
        stmt.finalize()
        log_activity(conn, id, task.title, task.status, new_status, user_name~)
        // If moved to "done" and has recurrence, create a copy
        if new_status == "done" {
          handle_recurrence_on_done(conn, id)
        }
        let updated = { ..task, status: new_status }
        println("  -> 200 status changed to \{new_status}")
        send_json(res, updated.to_json(), status=200)
        return
      }
    }
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for GET /api/tasks/:id/deps
async fn handle_get_deps(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("GET /api/tasks/\{id_str}/deps")
  try {
    let id = @string.parse_int(id_str)
    let deps = get_task_deps(conn, id)
    send_json(res, deps.to_json(), status=200)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/deps
async fn handle_add_dep(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/tasks/\{id_str}/deps")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let depends_on = match json {
      { "depends_on_id": Number(n, ..), .. } => n.to_int()
      _ => {
        send_text(res, "Missing depends_on_id", status=400)
        return
      }
    }
    if depends_on == id {
      send_text(res, "Cannot depend on self", status=400)
      return
    }
    add_dep(conn, id, depends_on)
    println("  -> 201 dependency added: \{id} -> \{depends_on}")
    let dep : @shared.Dependency = { task_id: id, depends_on_id: depends_on }
    send_json(res, dep.to_json(), status=201)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/deps/remove
async fn handle_remove_dep(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/tasks/\{id_str}/deps/remove")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let depends_on = match json {
      { "depends_on_id": Number(n, ..), .. } => n.to_int()
      _ => {
        send_text(res, "Missing depends_on_id", status=400)
        return
      }
    }
    remove_dep(conn, id, depends_on)
    println("  -> 200 dependency removed: \{id} -> \{depends_on}")
    send_text(res, "ok", status=200)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for GET /api/tasks/:id/comments
async fn handle_get_comments(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("GET /api/tasks/\{id_str}/comments")
  try {
    let id = @string.parse_int(id_str)
    let comments = get_task_comments(conn, id)
    println("  -> 200 (\{comments.length()} comments)")
    send_json(res, comments.to_json(), status=200)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/comments
async fn handle_add_comment(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/tasks/\{id_str}/comments")
  try {
    let author = match get_request_user(conn, req) {
      Some(u) => u.username
      None =>
        match (req.body.json() : Json) {
          { "author": String(a), .. } => a
          _ => "Anonymous"
        }
    }
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let text = match json {
      { "text": String(t), .. } => t
      _ => {
        send_text(res, "Missing text", status=400)
        return
      }
    }
    if !@shared.validate_comment_text(text) {
      send_text(res, "Invalid comment", status=400)
      return
    }
    let comment = add_comment(conn, id, author, text)
    println("  -> 201 comment added to task \{id}")
    send_json(res, comment.to_json(), status=201)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for GET /api/labels
async fn handle_get_labels(
  conn : @sqlite3.Connection,
  _req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("GET \{@shared.api_labels}")
  try {
    let labels = get_all_labels(conn)
    println("  -> 200 (\{labels.length()} labels)")
    send_json(res, labels.to_json(), status=200)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/labels (create label)
async fn handle_create_label(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("POST \{@shared.api_labels}")
  try {
    let json : Json = req.body.json()
    let name = match json {
      { "name": String(n), .. } => n
      _ => {
        send_text(res, "Missing name", status=400)
        return
      }
    }
    if name.is_empty() {
      send_text(res, "Label name is empty", status=400)
      return
    }
    let color = match json {
      { "color": String(c), .. } => c
      _ => "#94a3b8"
    }
    let label = create_label(conn, name, color)
    println("  -> 201 label \{label.id} created")
    send_json(res, label.to_json(), status=201)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for GET /api/tasks/:id/labels
async fn handle_get_task_labels(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("GET /api/tasks/\{id_str}/labels")
  try {
    let id = @string.parse_int(id_str)
    let labels = get_all_labels(conn)
    let tls = get_all_task_labels(conn)
    let task_labels = @shared.labels_for_task(labels, tls, id)
    send_json(res, task_labels.to_json(), status=200)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/labels (add label to task)
async fn handle_add_task_label(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/tasks/\{id_str}/labels")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let label_id = match json {
      { "label_id": Number(n, ..), .. } => n.to_int()
      _ => {
        send_text(res, "Missing label_id", status=400)
        return
      }
    }
    add_task_label(conn, id, label_id)
    println("  -> 201 label \{label_id} added to task \{id}")
    send_json(res, ({ "ok": true } : Json), status=201)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/labels/remove
async fn handle_remove_task_label(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/tasks/\{id_str}/labels/remove")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let label_id = match json {
      { "label_id": Number(n, ..), .. } => n.to_int()
      _ => {
        send_text(res, "Missing label_id", status=400)
        return
      }
    }
    remove_task_label(conn, id, label_id)
    println("  -> 200 label \{label_id} removed from task \{id}")
    send_json(res, ({ "ok": true } : Json), status=200)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for GET /api/tasks/:id/subtasks
async fn handle_get_subtasks(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("GET /api/tasks/\{id_str}/subtasks")
  try {
    let id = @string.parse_int(id_str)
    let subs = get_all_subtasks(conn).filter(fn(s) { s.task_id == id })
    send_json(res, subs.to_json(), status=200)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/subtasks (create subtask)
async fn handle_create_subtask(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/tasks/\{id_str}/subtasks")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let title = match json {
      { "title": String(s), .. } => s
      _ => {
        send_text(res, "Missing title", status=400)
        return
      }
    }
    let sub = create_subtask(conn, id, title)
    println("  -> 201 subtask \{sub.id} for task \{id}")
    send_json(res, sub.to_json(), status=201)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/subtasks/:id/toggle
async fn handle_toggle_subtask(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/subtasks/\{id_str}/toggle")
  try {
    let id = @string.parse_int(id_str)
    toggle_subtask(conn, id)
    println("  -> 200 toggled subtask \{id}")
    send_json(res, ({ "ok": true } : Json), status=200)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for DELETE /api/subtasks/:id
async fn handle_delete_subtask(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("DELETE /api/subtasks/\{id_str}")
  try {
    let id = @string.parse_int(id_str)
    delete_subtask(conn, id)
    println("  -> 204 deleted subtask \{id}")
    res.send_void(status=204)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/time (log time entry)
async fn handle_log_time(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/tasks/\{id_str}/time")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let minutes = match json {
      { "minutes": Number(n, ..), .. } => n.to_int()
      _ => {
        send_text(res, "Missing minutes", status=400)
        return
      }
    }
    if !@shared.validate_time_minutes(minutes) {
      send_text(res, "Minutes must be 1-1440", status=400)
      return
    }
    let note = match json {
      { "note": String(s), .. } => s
      _ => ""
    }
    let entry = log_time(conn, id, minutes, note)
    println("  -> 201 logged \{minutes}m for task \{id}")
    send_json(res, entry.to_json(), status=201)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for DELETE /api/time/:id
async fn handle_delete_time_entry(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("DELETE /api/time/\{id_str}")
  try {
    let id = @string.parse_int(id_str)
    delete_time_entry(conn, id)
    println("  -> 204 deleted time entry \{id}")
    res.send_void(status=204)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/recurrence (set recurrence)
async fn handle_set_recurrence(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/tasks/\{id_str}/recurrence")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let interval = match json {
      { "interval": String(s), .. } => s
      _ => {
        send_text(res, "Missing interval", status=400)
        return
      }
    }
    if !@shared.validate_recurrence(interval) {
      send_text(res, "Invalid interval", status=400)
      return
    }
    set_recurrence(conn, id, interval)
    println("  -> 200 set recurrence \{interval} for task \{id}")
    send_json(res, ({ "ok": true } : Json), status=200)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for DELETE /api/tasks/:id/recurrence (remove recurrence)
async fn handle_remove_recurrence(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("DELETE /api/tasks/\{id_str}/recurrence")
  try {
    let id = @string.parse_int(id_str)
    remove_recurrence(conn, id)
    println("  -> 204 removed recurrence for task \{id}")
    res.send_void(status=204)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for DELETE /api/tasks/:id
async fn handle_delete_task(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("DELETE /api/tasks/\{id_str}")
  try {
    if !require_editor(conn, req) {
      send_text(res, "Viewers cannot delete tasks", status=403)
      return
    }
    let id = @string.parse_int(id_str)
    delete_task(conn, id)
    println("  -> 204 deleted task \{id}")
    res.send_void(status=204)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for GET /api/tasks/:id
async fn handle_get_task(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  try {
    let id = @string.parse_int(id_str)
    match get_task(conn, id) {
      Some(task) => {
        send_json(res, task.to_json(), status=200)
        return
      }
      None => {
        send_text(res, "Task not found", status=404)
        return
      }
    }
  } catch {
    e => {
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/attachments
async fn handle_create_attachment(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/tasks/\{id_str}/attachments")
  try {
    if !require_editor(conn, req) {
      send_text(res, "Viewers cannot add attachments", status=403)
      return
    }
    let task_id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let url = match json {
      { "url": String(u), .. } => u
      _ => {
        send_text(res, "Missing url", status=400)
        return
      }
    }
    let label = match json {
      { "label": String(l), .. } => l
      _ => ""
    }
    if !@shared.validate_attachment_url(url) {
      send_text(
        res,
        "Invalid URL (must start with http:// or https://)",
        status=400,
      )
      return
    }
    let att = create_attachment(conn, task_id, url, label)
    println("  -> 201 attachment \{att.id}")
    send_json(res, att.to_json(), status=201)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for DELETE /api/attachments/:id
async fn handle_delete_attachment(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("DELETE /api/attachments/\{id_str}")
  try {
    if !require_editor(conn, req) {
      send_text(res, "Viewers cannot delete attachments", status=403)
      return
    }
    let id = @string.parse_int(id_str)
    delete_attachment(conn, id)
    println("  -> 204 deleted attachment \{id}")
    res.send_void(status=204)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for GET /api/projects
async fn handle_get_projects(
  conn : @sqlite3.Connection,
  _req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("GET \{@shared.api_projects}")
  try {
    let projects = get_all_projects(conn)
    println("  -> 200 (\{projects.length()} projects)")
    send_json(res, projects.to_json(), status=200)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/projects (create project)
async fn handle_create_project(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("POST \{@shared.api_projects}")
  try {
    if !require_editor(conn, req) {
      send_text(res, "Viewers cannot create projects", status=403)
      return
    }
    let json : Json = req.body.json()
    let name = match json {
      { "name": String(n), .. } => n
      _ => {
        send_text(res, "Missing name", status=400)
        return
      }
    }
    if !@shared.validate_project_name(name) {
      send_text(res, "Invalid project name", status=400)
      return
    }
    let color = match json {
      { "color": String(c), .. } => c
      _ => "#6366f1"
    }
    let project = create_project(conn, name, color)
    println("  -> 201 project \{project.id}: \{name}")
    send_json(res, project.to_json(), status=201)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for DELETE /api/projects/:id
async fn handle_delete_project(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("DELETE /api/projects/\{id_str}")
  try {
    if !require_editor(conn, req) {
      send_text(res, "Viewers cannot delete projects", status=403)
      return
    }
    let id = @string.parse_int(id_str)
    delete_project(conn, id)
    println("  -> 204 deleted project \{id}")
    res.send_void(status=204)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/project (assign task to project)
async fn handle_set_task_project(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/tasks/\{id_str}/project")
  try {
    let task_id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let project_id = match json {
      { "project_id": Number(n, ..), .. } => n.to_int()
      _ => {
        send_text(res, "Missing project_id", status=400)
        return
      }
    }
    if project_id == 0 {
      remove_task_project(conn, task_id)
      println("  -> 200 removed task \{task_id} from project")
    } else {
      set_task_project(conn, task_id, project_id)
      println("  -> 200 assigned task \{task_id} to project \{project_id}")
    }
    send_json(res, ({ "ok": true } : Json), status=200)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}

///|
/// Handler for POST /api/users/:id/role (admin only)
async fn handle_set_user_role(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/users/\{id_str}/role")
  try {
    let admin = match get_request_user(conn, req) {
      Some(u) => u
      None => {
        send_text(res, "Not logged in", status=401)
        return
      }
    }
    if !@shared.is_admin(admin.role) {
      send_text(res, "Only admins can change roles", status=403)
      return
    }
    let target_id = @string.parse_int(id_str)
    let json : Json = req.body.json()
    let role = match json {
      { "role": String(r), .. } =>
        if r == "admin" || r == "member" || r == "viewer" {
          r
        } else {
          send_text(res, "Invalid role", status=400)
          return
        }
      _ => {
        send_text(res, "Missing role", status=400)
        return
      }
    }
    set_user_role(conn, target_id, role)
    println("  -> 200 set user \{target_id} role to \{role}")
    send_json(res, ({ "ok": true } : Json), status=200)
    return
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
      return
    }
  }
}
