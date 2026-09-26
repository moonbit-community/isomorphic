///|
/// Handler for POST /api/auth/register
async fn handle_register(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  println("POST \{@shared.api_register}")
  try {
    let json : Json = event.req.body()
    let username = match json {
      { "username": String(u), .. } => u
      _ =>
        return @mocket.HttpResponse(BadRequest).json(
          ({ "error": "Missing username" } : Json),
        )
    }
    let password = match json {
      { "password": String(p), .. } => p
      _ =>
        return @mocket.HttpResponse(BadRequest).json(
          ({ "error": "Missing password" } : Json),
        )
    }
    if !@shared.validate_username(username) {
      return @mocket.HttpResponse(BadRequest).json(
        (
          {
            "error": "Username must be 3-30 alphanumeric characters or underscores",
          } : Json),
      )
    }
    if !@shared.validate_password(password) {
      return @mocket.HttpResponse(BadRequest).json(
        ({ "error": "Password must be 4-100 characters" } : Json),
      )
    }
    let user = register_user(conn, username, password)
    let token = create_session(conn, user.id, user.username)
    let resp : @shared.AuthResponse = {
      user,
      message: "Registration successful",
    }
    let http_resp = @mocket.HttpResponse(Created).json(resp.to_json())
    event.res.set_cookie(
      Cookie(
        "session",
        token,
        path="/",
        http_only=true,
        max_age=(86400 * 7).to_int64(),
        extensions=["SameSite=Lax"],
      ),
    )
    println("  -> 201 registered user: \{username}")
    http_resp
  } catch {
    e => {
      let msg = error_text(e)
      if msg.contains("UNIQUE") || msg.contains("(19,") {
        println("  -> 409 username taken")
        @mocket.HttpResponse(Conflict).json(
          ({ "error": "Username already taken" } : Json),
        )
      } else {
        println("  -> 500 \{error_text(e)}")
        @mocket.HttpResponse(InternalServerError).json(
          ({ "error": error_text(e) } : Json),
        )
      }
    }
  }
}

///|
/// Handler for POST /api/auth/login
async fn handle_login(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  println("POST \{@shared.api_login}")
  try {
    let json : Json = event.req.body()
    let username = match json {
      { "username": String(u), .. } => u
      _ =>
        return @mocket.HttpResponse(BadRequest).json(
          ({ "error": "Missing username" } : Json),
        )
    }
    let password = match json {
      { "password": String(p), .. } => p
      _ =>
        return @mocket.HttpResponse(BadRequest).json(
          ({ "error": "Missing password" } : Json),
        )
    }
    match login_user(conn, username, password) {
      Some(user) => {
        let token = create_session(conn, user.id, user.username)
        let resp : @shared.AuthResponse = { user, message: "Login successful", }
        let http_resp = @mocket.HttpResponse(OK).json(resp.to_json())
        event.res.set_cookie(
          Cookie(
            "session",
            token,
            path="/",
            http_only=true,
            max_age=(86400 * 7).to_int64(),
            extensions=["SameSite=Lax"],
          ),
        )
        println("  -> 200 logged in: \{username}")
        http_resp
      }
      None => {
        println("  -> 401 invalid credentials")
        @mocket.HttpResponse(Unauthorized).json(
          ({ "error": "Invalid username or password" } : Json),
        )
      }
    }
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).json(
        ({ "error": error_text(e) } : Json),
      )
    }
  }
}

///|
/// Handler for POST /api/auth/logout
fn handle_logout(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  println("POST \{@shared.api_logout}")
  try {
    match event.req.get_cookie("session") {
      Some(cookie) => delete_session(conn, cookie.value)
      None => ()
    }
    let resp = @mocket.HttpResponse(OK).body("Logged out")
    event.res.delete_cookie("session")
    println("  -> 200 logged out")
    resp
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for GET /api/auth/me
fn handle_me(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  println("GET \{@shared.api_me}")
  try {
    match get_request_user(conn, event.req) {
      Some(user) => {
        println("  -> 200 \{user.username}")
        @mocket.HttpResponse(OK).json(user.to_json())
      }
      None => {
        println("  -> 401 not logged in")
        @mocket.HttpResponse(Unauthorized).body("Not logged in")
      }
    }
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for GET /api/board
fn handle_get_board(conn : @sqlite3.Connection) -> @mocket.HttpResponse {
  println("GET \{@shared.api_board}")
  try {
    let board = get_board(conn)
    println(
      "  -> 200 (\{board.tasks.length()} tasks, \{board.members.length()} members)",
    )
    @mocket.HttpResponse(OK).json(board.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for GET /api/export
async fn handle_export(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  println("GET \{@shared.api_export}")
  try {
    let tasks = get_all_tasks(conn)
    let members = get_all_members(conn)
    // A GET usually has no body; an empty or non-JSON body means the default.
    let body : Json = event.req.body() catch { _ => Json::null() }
    let format = match body {
      { "format": String(f), .. } => f
      _ =>
        // Check query-string style: just default to csv
        "csv"
    }
    if format == "json" {
      println("  -> 200 JSON export (\{tasks.length()} tasks)")
      @mocket.HttpResponse(
        OK,
        headers={
          "Content-Type": "application/json; charset=utf-8",
          "Content-Disposition": "attachment; filename=\"tasks.json\"",
        },
        body=@utf8.encode(tasks.to_json().stringify()),
      )
    } else {
      let csv = @shared.tasks_to_csv(tasks, members)
      println("  -> 200 CSV export (\{tasks.length()} tasks)")
      @mocket.HttpResponse(
        OK,
        headers={
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": "attachment; filename=\"tasks.csv\"",
        },
        body=@utf8.encode(csv),
      )
    }
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for GET /api/members
fn handle_get_members(conn : @sqlite3.Connection) -> @mocket.HttpResponse {
  println("GET \{@shared.api_members}")
  try {
    let members = get_all_members(conn)
    @mocket.HttpResponse(OK).json(members.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/tasks (create task)
async fn handle_create_task(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  println("POST \{@shared.api_tasks}")
  try {
    if !require_editor(conn, event.req) {
      return @mocket.HttpResponse(Forbidden).body("Viewers cannot create tasks")
    }
    let user_name = match get_request_user(conn, event.req) {
      Some(u) => u.username
      None => ""
    }
    let json : Json = event.req.body()
    let title = match json {
      { "title": String(t), .. } => t
      _ => return @mocket.HttpResponse(BadRequest).body("Missing title")
    }
    if !@shared.validate_task_title(title) {
      return @mocket.HttpResponse(BadRequest).body("Invalid title")
    }
    let description = match json {
      { "description": String(d), .. } => d
      _ => ""
    }
    if !@shared.validate_task_description(description) {
      return @mocket.HttpResponse(BadRequest).body("Description too long")
    }
    let priority = match json {
      { "priority": String(p), .. } => p
      _ => "medium"
    }
    if !@shared.validate_priority(priority) {
      return @mocket.HttpResponse(BadRequest).body("Invalid priority")
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
      return @mocket.HttpResponse(BadRequest).body("Invalid due date")
    }
    if task_count(conn) >= @shared.max_tasks {
      return @mocket.HttpResponse(BadRequest).body("Too many tasks")
    }
    let task = create_task(
      conn, title, description, priority, assignee_id, due_date,
    )
    log_activity(conn, task.id, title, "", "todo", user_name~)
    println("  -> 201 created task: \{title}")
    @mocket.HttpResponse(Created).json(task.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/tasks/:id (update task)
async fn handle_update_task(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/tasks/\{id_str} (update)")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = event.req.body()
    let title = match json {
      { "title": String(t), .. } => t
      _ => return @mocket.HttpResponse(BadRequest).body("Missing title")
    }
    if !@shared.validate_task_title(title) {
      return @mocket.HttpResponse(BadRequest).body("Invalid title")
    }
    let description = match json {
      { "description": String(d), .. } => d
      _ => ""
    }
    if !@shared.validate_task_description(description) {
      return @mocket.HttpResponse(BadRequest).body("Description too long")
    }
    let priority = match json {
      { "priority": String(p), .. } => p
      _ => "medium"
    }
    if !@shared.validate_priority(priority) {
      return @mocket.HttpResponse(BadRequest).body("Invalid priority")
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
        @mocket.HttpResponse(OK).json(task.to_json())
      }
      None => @mocket.HttpResponse(NotFound).body("Task not found")
    }
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/status
async fn handle_update_task_status(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/tasks/\{id_str}/status")
  try {
    let user_name = match get_request_user(conn, event.req) {
      Some(u) => u.username
      None => ""
    }
    let id = @string.parse_int(id_str)
    let json : Json = event.req.body()
    let new_status = match json {
      { "status": String(s), .. } => s
      _ => return @mocket.HttpResponse(BadRequest).body("Missing status")
    }
    if !@shared.validate_status(new_status) {
      return @mocket.HttpResponse(BadRequest).body("Invalid status")
    }
    // Get current task to validate transition
    match get_task(conn, id) {
      None => @mocket.HttpResponse(NotFound).body("Task not found")
      Some(task) => {
        if !@shared.is_valid_transition(task.status, new_status) {
          let current = @shared.status_label(task.status)
          let target = @shared.status_label(new_status)
          return @mocket.HttpResponse(BadRequest).body(
            "Invalid transition from \{current} to \{target}",
          )
        }
        let stmt = conn.prepare("UPDATE tasks SET status = ? WHERE id = ?")
        stmt.bind(index=1, new_status)
        stmt.bind(index=2, id)
        stmt.step() |> ignore
        stmt.finalize()
        log_activity(conn, id, task.title, task.status, new_status, user_name~)
        // If moved to "done" and has recurrence, create a copy
        if new_status == "done" {
          handle_recurrence_on_done(conn, id)
        }
        let updated = { ..task, status: new_status, }
        println("  -> 200 status changed to \{new_status}")
        @mocket.HttpResponse(OK).json(updated.to_json())
      }
    }
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for GET /api/tasks/:id/deps
fn handle_get_deps(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("GET /api/tasks/\{id_str}/deps")
  try {
    let id = @string.parse_int(id_str)
    let deps = get_task_deps(conn, id)
    @mocket.HttpResponse(OK).json(deps.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/deps
async fn handle_add_dep(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/tasks/\{id_str}/deps")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = event.req.body()
    let depends_on = match json {
      { "depends_on_id": Number(n, ..), .. } => n.to_int()
      _ => return @mocket.HttpResponse(BadRequest).body("Missing depends_on_id")
    }
    if depends_on == id {
      return @mocket.HttpResponse(BadRequest).body("Cannot depend on self")
    }
    add_dep(conn, id, depends_on)
    println("  -> 201 dependency added: \{id} -> \{depends_on}")
    let dep : @shared.Dependency = { task_id: id, depends_on_id: depends_on, }
    @mocket.HttpResponse(Created).json(dep.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/deps/remove
async fn handle_remove_dep(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/tasks/\{id_str}/deps/remove")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = event.req.body()
    let depends_on = match json {
      { "depends_on_id": Number(n, ..), .. } => n.to_int()
      _ => return @mocket.HttpResponse(BadRequest).body("Missing depends_on_id")
    }
    remove_dep(conn, id, depends_on)
    println("  -> 200 dependency removed: \{id} -> \{depends_on}")
    @mocket.HttpResponse(OK).body("ok")
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for GET /api/tasks/:id/comments
fn handle_get_comments(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("GET /api/tasks/\{id_str}/comments")
  try {
    let id = @string.parse_int(id_str)
    let comments = get_task_comments(conn, id)
    println("  -> 200 (\{comments.length()} comments)")
    @mocket.HttpResponse(OK).json(comments.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/comments
async fn handle_add_comment(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/tasks/\{id_str}/comments")
  try {
    // The request body is a stream and can only be read once.
    let json : Json = event.req.body()
    let author = match get_request_user(conn, event.req) {
      Some(u) => u.username
      None =>
        match json {
          { "author": String(a), .. } => a
          _ => "Anonymous"
        }
    }
    let id = @string.parse_int(id_str)
    let text = match json {
      { "text": String(t), .. } => t
      _ => return @mocket.HttpResponse(BadRequest).body("Missing text")
    }
    if !@shared.validate_comment_text(text) {
      return @mocket.HttpResponse(BadRequest).body("Invalid comment")
    }
    let comment = add_comment(conn, id, author, text)
    println("  -> 201 comment added to task \{id}")
    @mocket.HttpResponse(Created).json(comment.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for GET /api/labels
fn handle_get_labels(conn : @sqlite3.Connection) -> @mocket.HttpResponse {
  println("GET \{@shared.api_labels}")
  try {
    let labels = get_all_labels(conn)
    println("  -> 200 (\{labels.length()} labels)")
    @mocket.HttpResponse(OK).json(labels.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/labels (create label)
async fn handle_create_label(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  println("POST \{@shared.api_labels}")
  try {
    let json : Json = event.req.body()
    let name = match json {
      { "name": String(n), .. } => n
      _ => return @mocket.HttpResponse(BadRequest).body("Missing name")
    }
    if name.is_empty() {
      return @mocket.HttpResponse(BadRequest).body("Label name is empty")
    }
    let color = match json {
      { "color": String(c), .. } => c
      _ => "#94a3b8"
    }
    let label = create_label(conn, name, color)
    println("  -> 201 label \{label.id} created")
    @mocket.HttpResponse(Created).json(label.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for GET /api/tasks/:id/labels
fn handle_get_task_labels(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("GET /api/tasks/\{id_str}/labels")
  try {
    let id = @string.parse_int(id_str)
    let labels = get_all_labels(conn)
    let tls = get_all_task_labels(conn)
    let task_labels = @shared.labels_for_task(labels, tls, id)
    @mocket.HttpResponse(OK).json(task_labels.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/labels (add label to task)
async fn handle_add_task_label(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/tasks/\{id_str}/labels")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = event.req.body()
    let label_id = match json {
      { "label_id": Number(n, ..), .. } => n.to_int()
      _ => return @mocket.HttpResponse(BadRequest).body("Missing label_id")
    }
    add_task_label(conn, id, label_id)
    println("  -> 201 label \{label_id} added to task \{id}")
    @mocket.HttpResponse(Created).json(({ "ok": true } : Json))
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/labels/remove
async fn handle_remove_task_label(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/tasks/\{id_str}/labels/remove")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = event.req.body()
    let label_id = match json {
      { "label_id": Number(n, ..), .. } => n.to_int()
      _ => return @mocket.HttpResponse(BadRequest).body("Missing label_id")
    }
    remove_task_label(conn, id, label_id)
    println("  -> 200 label \{label_id} removed from task \{id}")
    @mocket.HttpResponse(OK).json(({ "ok": true } : Json))
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for GET /api/tasks/:id/subtasks
fn handle_get_subtasks(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("GET /api/tasks/\{id_str}/subtasks")
  try {
    let id = @string.parse_int(id_str)
    let subs = get_all_subtasks(conn).filter(fn(s) { s.task_id == id })
    @mocket.HttpResponse(OK).json(subs.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/subtasks (create subtask)
async fn handle_create_subtask(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/tasks/\{id_str}/subtasks")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = event.req.body()
    let title = match json {
      { "title": String(s), .. } => s
      _ => return @mocket.HttpResponse(BadRequest).body("Missing title")
    }
    let sub = create_subtask(conn, id, title)
    println("  -> 201 subtask \{sub.id} for task \{id}")
    @mocket.HttpResponse(Created).json(sub.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/subtasks/:id/toggle
fn handle_toggle_subtask(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/subtasks/\{id_str}/toggle")
  try {
    let id = @string.parse_int(id_str)
    toggle_subtask(conn, id)
    println("  -> 200 toggled subtask \{id}")
    @mocket.HttpResponse(OK).json(({ "ok": true } : Json))
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for DELETE /api/subtasks/:id
fn handle_delete_subtask(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("DELETE /api/subtasks/\{id_str}")
  try {
    let id = @string.parse_int(id_str)
    delete_subtask(conn, id)
    println("  -> 204 deleted subtask \{id}")
    @mocket.HttpResponse(NoContent)
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/time (log time entry)
async fn handle_log_time(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/tasks/\{id_str}/time")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = event.req.body()
    let minutes = match json {
      { "minutes": Number(n, ..), .. } => n.to_int()
      _ => return @mocket.HttpResponse(BadRequest).body("Missing minutes")
    }
    if !@shared.validate_time_minutes(minutes) {
      return @mocket.HttpResponse(BadRequest).body("Minutes must be 1-1440")
    }
    let note = match json {
      { "note": String(s), .. } => s
      _ => ""
    }
    let entry = log_time(conn, id, minutes, note)
    println("  -> 201 logged \{minutes}m for task \{id}")
    @mocket.HttpResponse(Created).json(entry.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for DELETE /api/time/:id
fn handle_delete_time_entry(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("DELETE /api/time/\{id_str}")
  try {
    let id = @string.parse_int(id_str)
    delete_time_entry(conn, id)
    println("  -> 204 deleted time entry \{id}")
    @mocket.HttpResponse(NoContent)
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/recurrence (set recurrence)
async fn handle_set_recurrence(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/tasks/\{id_str}/recurrence")
  try {
    let id = @string.parse_int(id_str)
    let json : Json = event.req.body()
    let interval = match json {
      { "interval": String(s), .. } => s
      _ => return @mocket.HttpResponse(BadRequest).body("Missing interval")
    }
    if !@shared.validate_recurrence(interval) {
      return @mocket.HttpResponse(BadRequest).body("Invalid interval")
    }
    set_recurrence(conn, id, interval)
    println("  -> 200 set recurrence \{interval} for task \{id}")
    @mocket.HttpResponse(OK).json(({ "ok": true } : Json))
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for DELETE /api/tasks/:id/recurrence (remove recurrence)
fn handle_remove_recurrence(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("DELETE /api/tasks/\{id_str}/recurrence")
  try {
    let id = @string.parse_int(id_str)
    remove_recurrence(conn, id)
    println("  -> 204 removed recurrence for task \{id}")
    @mocket.HttpResponse(NoContent)
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for DELETE /api/tasks/:id
fn handle_delete_task(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("DELETE /api/tasks/\{id_str}")
  try {
    if !require_editor(conn, event.req) {
      return @mocket.HttpResponse(Forbidden).body("Viewers cannot delete tasks")
    }
    let id = @string.parse_int(id_str)
    delete_task(conn, id)
    println("  -> 204 deleted task \{id}")
    @mocket.HttpResponse(NoContent)
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for GET /api/tasks/:id
fn handle_get_task(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  try {
    let id = @string.parse_int(id_str)
    match get_task(conn, id) {
      Some(task) => @mocket.HttpResponse(OK).json(task.to_json())
      None => @mocket.HttpResponse(NotFound).body("Task not found")
    }
  } catch {
    e => @mocket.HttpResponse(InternalServerError).body(error_text(e))
  }
}

///|
/// Handler for POST /api/tasks/:id/attachments
async fn handle_create_attachment(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/tasks/\{id_str}/attachments")
  try {
    if !require_editor(conn, event.req) {
      return @mocket.HttpResponse(Forbidden).body(
        "Viewers cannot add attachments",
      )
    }
    let task_id = @string.parse_int(id_str)
    let json : Json = event.req.body()
    let url = match json {
      { "url": String(u), .. } => u
      _ => return @mocket.HttpResponse(BadRequest).body("Missing url")
    }
    let label = match json {
      { "label": String(l), .. } => l
      _ => ""
    }
    if !@shared.validate_attachment_url(url) {
      return @mocket.HttpResponse(BadRequest).body(
        "Invalid URL (must start with http:// or https://)",
      )
    }
    let att = create_attachment(conn, task_id, url, label)
    println("  -> 201 attachment \{att.id}")
    @mocket.HttpResponse(Created).json(att.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for DELETE /api/attachments/:id
fn handle_delete_attachment(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("DELETE /api/attachments/\{id_str}")
  try {
    if !require_editor(conn, event.req) {
      return @mocket.HttpResponse(Forbidden).body(
        "Viewers cannot delete attachments",
      )
    }
    let id = @string.parse_int(id_str)
    delete_attachment(conn, id)
    println("  -> 204 deleted attachment \{id}")
    @mocket.HttpResponse(NoContent)
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for GET /api/projects
fn handle_get_projects(conn : @sqlite3.Connection) -> @mocket.HttpResponse {
  println("GET \{@shared.api_projects}")
  try {
    let projects = get_all_projects(conn)
    println("  -> 200 (\{projects.length()} projects)")
    @mocket.HttpResponse(OK).json(projects.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/projects (create project)
async fn handle_create_project(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  println("POST \{@shared.api_projects}")
  try {
    if !require_editor(conn, event.req) {
      return @mocket.HttpResponse(Forbidden).body(
        "Viewers cannot create projects",
      )
    }
    let json : Json = event.req.body()
    let name = match json {
      { "name": String(n), .. } => n
      _ => return @mocket.HttpResponse(BadRequest).body("Missing name")
    }
    if !@shared.validate_project_name(name) {
      return @mocket.HttpResponse(BadRequest).body("Invalid project name")
    }
    let color = match json {
      { "color": String(c), .. } => c
      _ => "#6366f1"
    }
    let project = create_project(conn, name, color)
    println("  -> 201 project \{project.id}: \{name}")
    @mocket.HttpResponse(Created).json(project.to_json())
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for DELETE /api/projects/:id
fn handle_delete_project(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("DELETE /api/projects/\{id_str}")
  try {
    if !require_editor(conn, event.req) {
      return @mocket.HttpResponse(Forbidden).body(
        "Viewers cannot delete projects",
      )
    }
    let id = @string.parse_int(id_str)
    delete_project(conn, id)
    println("  -> 204 deleted project \{id}")
    @mocket.HttpResponse(NoContent)
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/tasks/:id/project (assign task to project)
async fn handle_set_task_project(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/tasks/\{id_str}/project")
  try {
    let task_id = @string.parse_int(id_str)
    let json : Json = event.req.body()
    let project_id = match json {
      { "project_id": Number(n, ..), .. } => n.to_int()
      _ => return @mocket.HttpResponse(BadRequest).body("Missing project_id")
    }
    if project_id == 0 {
      remove_task_project(conn, task_id)
      println("  -> 200 removed task \{task_id} from project")
    } else {
      set_task_project(conn, task_id, project_id)
      println("  -> 200 assigned task \{task_id} to project \{project_id}")
    }
    @mocket.HttpResponse(OK).json(({ "ok": true } : Json))
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}

///|
/// Handler for POST /api/users/:id/role (admin only)
async fn handle_set_user_role(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/users/\{id_str}/role")
  try {
    let admin = match get_request_user(conn, event.req) {
      Some(u) => u
      None => return @mocket.HttpResponse(Unauthorized).body("Not logged in")
    }
    if !@shared.is_admin(admin.role) {
      return @mocket.HttpResponse(Forbidden).body(
        "Only admins can change roles",
      )
    }
    let target_id = @string.parse_int(id_str)
    let json : Json = event.req.body()
    let role = match json {
      { "role": String(r), .. } =>
        if r == "admin" || r == "member" || r == "viewer" {
          r
        } else {
          return @mocket.HttpResponse(BadRequest).body("Invalid role")
        }
      _ => return @mocket.HttpResponse(BadRequest).body("Missing role")
    }
    set_user_role(conn, target_id, role)
    println("  -> 200 set user \{target_id} role to \{role}")
    @mocket.HttpResponse(OK).json(({ "ok": true } : Json))
  } catch {
    e => {
      println("  -> 500 \{error_text(e)}")
      @mocket.HttpResponse(InternalServerError).body(error_text(e))
    }
  }
}
