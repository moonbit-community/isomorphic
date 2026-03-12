///|
/// Create tables and seed default team members if empty.
fn init_db(conn : @sqlite3.Connection) -> Unit raise @sqlite3.SqliteError {
  let s1 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS members (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  name BLOB NOT NULL,
      #|  color BLOB NOT NULL
      #|)
    ),
  )
  s1.step_once()
  s1.finalize()
  let s2 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS tasks (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  title BLOB NOT NULL,
      #|  description BLOB NOT NULL,
      #|  status BLOB NOT NULL,
      #|  priority BLOB NOT NULL,
      #|  assignee_id INTEGER NOT NULL,
      #|  due_date BLOB NOT NULL,
      #|  created_at BLOB NOT NULL
      #|)
    ),
  )
  s2.step_once()
  s2.finalize()
  // Seed default members if table is empty
  let check = conn.prepare("SELECT COUNT(*) FROM members")
  guard check.step()
  let count : Int = check.column(index=0)
  check.finalize()
  if count == 0 {
    let defaults = [
      ("Alice", "blue"),
      ("Bob", "green"),
      ("Charlie", "orange"),
      ("Diana", "purple"),
      ("Eve", "red"),
    ]
    for d in defaults {
      let s = conn.prepare("INSERT INTO members (name, color) VALUES (?, ?)")
      s.bind_string_as_blob(index=1, val=d.0)
      s.bind_string_as_blob(index=2, val=d.1)
      s.step_once()
      s.finalize()
    }
    println("Seeded team members: Alice, Bob, Charlie, Diana, Eve")
  }
}

///|
/// Read a Member from the current row of a prepared statement.
fn read_member(stmt : @sqlite3.Statement) -> @shared.Member {
  let id : Int = stmt.column(index=0)
  let name : String = stmt.column_blob_as_string(index=1)
  let color : String = stmt.column_blob_as_string(index=2)
  { id, name, color }
}

///|
/// Read a Task from the current row of a prepared statement.
fn read_task(stmt : @sqlite3.Statement) -> @shared.Task {
  let id : Int = stmt.column(index=0)
  let title : String = stmt.column_blob_as_string(index=1)
  let description : String = stmt.column_blob_as_string(index=2)
  let status : String = stmt.column_blob_as_string(index=3)
  let priority : String = stmt.column_blob_as_string(index=4)
  let assignee_id : Int = stmt.column(index=5)
  let due_date : String = stmt.column_blob_as_string(index=6)
  let created_at : String = stmt.column_blob_as_string(index=7)
  {
    id,
    title,
    description,
    status,
    priority,
    assignee_id,
    due_date,
    created_at,
  }
}

///|
/// Get today's date as YYYY-MM-DD from SQLite.
fn get_today(conn : @sqlite3.Connection) -> String raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT CAST(strftime('%Y%m%d', 'now', 'localtime') AS INTEGER)",
  )
  guard stmt.step()
  let date_int : Int = stmt.column(index=0)
  stmt.finalize()
  let year = date_int / 10000
  let month = date_int % 10000 / 100
  let day = date_int % 100
  let m = if month < 10 { "0\{month}" } else { "\{month}" }
  let d = if day < 10 { "0\{day}" } else { "\{day}" }
  "\{year}-\{m}-\{d}"
}

///|
/// Fetch all members ordered by ID.
fn get_all_members(
  conn : @sqlite3.Connection,
) -> Array[@shared.Member] raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT id, name, color FROM members ORDER BY id ASC")
  let members : Array[@shared.Member] = []
  while stmt.step() {
    members.push(read_member(stmt))
  }
  stmt.finalize()
  members
}

///|
/// Fetch all tasks ordered by ID.
fn get_all_tasks(
  conn : @sqlite3.Connection,
) -> Array[@shared.Task] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|SELECT id, title, description, status, priority,
      #|       assignee_id, due_date, created_at
      #|FROM tasks ORDER BY id ASC
    ),
  )
  let tasks : Array[@shared.Task] = []
  while stmt.step() {
    tasks.push(read_task(stmt))
  }
  stmt.finalize()
  tasks
}

///|
/// Fetch the full board: tasks + members + today's date.
fn get_board(
  conn : @sqlite3.Connection,
) -> @shared.Board raise @sqlite3.SqliteError {
  let tasks = get_all_tasks(conn)
  let members = get_all_members(conn)
  let today = get_today(conn)
  { tasks, members, today }
}

///|
/// Look up a single task by ID.
fn get_task(
  conn : @sqlite3.Connection,
  id : Int,
) -> @shared.Task? raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|SELECT id, title, description, status, priority,
      #|       assignee_id, due_date, created_at
      #|FROM tasks WHERE id = ?
    ),
  )
  stmt.bind(index=1, val=id)
  let result = if stmt.step() { Some(read_task(stmt)) } else { None }
  stmt.finalize()
  result
}

///|
/// Insert a new task with status "todo" and today's created_at.
fn create_task(
  conn : @sqlite3.Connection,
  title : String,
  description : String,
  priority : String,
  assignee_id : Int,
  due_date : String,
) -> @shared.Task raise @sqlite3.SqliteError {
  let today = get_today(conn)
  let stmt = conn.prepare(
    (
      #|INSERT INTO tasks (title, description, status, priority,
      #|                   assignee_id, due_date, created_at)
      #|VALUES (?, ?, ?, ?, ?, ?, ?)
    ),
  )
  stmt.bind_string_as_blob(index=1, val=title)
  stmt.bind_string_as_blob(index=2, val=description)
  stmt.bind_string_as_blob(index=3, val="todo")
  stmt.bind_string_as_blob(index=4, val=priority)
  stmt.bind(index=5, val=assignee_id)
  stmt.bind_string_as_blob(index=6, val=due_date)
  stmt.bind_string_as_blob(index=7, val=today)
  stmt.step_once()
  stmt.finalize()
  let id_stmt = conn.prepare("SELECT last_insert_rowid()")
  guard id_stmt.step()
  let id : Int = id_stmt.column(index=0)
  id_stmt.finalize()
  {
    id,
    title,
    description,
    status: "todo",
    priority,
    assignee_id,
    due_date,
    created_at: today,
  }
}

///|
/// Update a task's title, description, priority, assignee, and due date.
fn update_task(
  conn : @sqlite3.Connection,
  id : Int,
  title : String,
  description : String,
  priority : String,
  assignee_id : Int,
  due_date : String,
) -> @shared.Task? raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|UPDATE tasks SET title = ?, description = ?, priority = ?,
      #|               assignee_id = ?, due_date = ?
      #|WHERE id = ?
    ),
  )
  stmt.bind_string_as_blob(index=1, val=title)
  stmt.bind_string_as_blob(index=2, val=description)
  stmt.bind_string_as_blob(index=3, val=priority)
  stmt.bind(index=4, val=assignee_id)
  stmt.bind_string_as_blob(index=5, val=due_date)
  stmt.bind(index=6, val=id)
  stmt.step_once()
  stmt.finalize()
  get_task(conn, id)
}

///|
/// Delete a task by ID.
fn delete_task(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM tasks WHERE id = ?")
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Count total tasks.
fn task_count(conn : @sqlite3.Connection) -> Int raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT COUNT(*) FROM tasks")
  guard stmt.step()
  let count : Int = stmt.column(index=0)
  stmt.finalize()
  count
}

///|
/// Entry point: parse args, open DB, register routes, start HTTP server.
fn main raise {
  let matches = @argparse.parse(
    Command("taskflow-server", about="TaskFlow backend server", options=[
      OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
        "4006",
      ]),
    ]),
  )
  let port = @strconv.parse_int(matches.values["port"][0])
  let conn = @sqlite3.Connection::open("taskflow.db")
  println("Database opened: taskflow.db")
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
      #|  <title>TaskFlow</title>
      #|  <style>
      #|    * { margin: 0; padding: 0; box-sizing: border-box; }
      #|    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; background: #f8fafc; color: #1e293b; line-height: 1.6; -webkit-font-smoothing: antialiased; }
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
  // ---- Board ----
  ..get(@shared.api_board, _ => {
    println("GET \{@shared.api_board}")
    try {
      let board = get_board(conn)
      println(
        "  -> 200 (\{board.tasks.length()} tasks, \{board.members.length()} members)",
      )
      @mocket.HttpResponse::new(OK).json(board.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  // ---- Members ----
  ..get(@shared.api_members, _ => {
    println("GET \{@shared.api_members}")
    try {
      let members = get_all_members(conn)
      @mocket.HttpResponse::new(OK).json(members.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  // ---- Tasks ----
  ..post(@shared.api_tasks, event => {
    println("POST \{@shared.api_tasks}")
    try {
      let json : Json = event.req.body()
      let title = match json {
        { "title": String(t), .. } => t
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing title")
      }
      if not(@shared.validate_task_title(title)) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid title")
      }
      let description = match json {
        { "description": String(d), .. } => d
        _ => ""
      }
      if not(@shared.validate_task_description(description)) {
        return @mocket.HttpResponse::new(BadRequest).body(
          "Description too long",
        )
      }
      let priority = match json {
        { "priority": String(p), .. } => p
        _ => "medium"
      }
      if not(@shared.validate_priority(priority)) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid priority")
      }
      let assignee_id = match json {
        { "assignee_id": Number(n, ..), .. } => n.to_int()
        _ => 0
      }
      let due_date = match json {
        { "due_date": String(d), .. } => d
        _ => ""
      }
      if not(@shared.validate_due_date(due_date)) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid due date")
      }
      if task_count(conn) >= @shared.max_tasks {
        return @mocket.HttpResponse::new(BadRequest).body("Too many tasks")
      }
      let task = create_task(
        conn, title, description, priority, assignee_id, due_date,
      )
      println("  -> 201 created task: \{title}")
      @mocket.HttpResponse::new(Created).json(task.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/tasks/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/tasks/\{id_str} (update)")
    try {
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let title = match json {
        { "title": String(t), .. } => t
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing title")
      }
      if not(@shared.validate_task_title(title)) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid title")
      }
      let description = match json {
        { "description": String(d), .. } => d
        _ => ""
      }
      if not(@shared.validate_task_description(description)) {
        return @mocket.HttpResponse::new(BadRequest).body(
          "Description too long",
        )
      }
      let priority = match json {
        { "priority": String(p), .. } => p
        _ => "medium"
      }
      if not(@shared.validate_priority(priority)) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid priority")
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
        update_task(
          conn, id, title, description, priority, assignee_id, due_date,
        ) {
        Some(task) => {
          println("  -> 200 updated task \{id}")
          @mocket.HttpResponse::new(OK).json(task.to_json())
        }
        None => @mocket.HttpResponse::new(NotFound).body("Task not found")
      }
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/tasks/:id/status", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/tasks/\{id_str}/status")
    try {
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let new_status = match json {
        { "status": String(s), .. } => s
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing status")
      }
      if not(@shared.validate_status(new_status)) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid status")
      }
      // Get current task to validate transition
      match get_task(conn, id) {
        None => @mocket.HttpResponse::new(NotFound).body("Task not found")
        Some(task) => {
          if not(@shared.is_valid_transition(task.status, new_status)) {
            let current = @shared.status_label(task.status)
            let target = @shared.status_label(new_status)
            return @mocket.HttpResponse::new(BadRequest).body(
              "Invalid transition from \{current} to \{target}",
            )
          }
          let stmt = conn.prepare("UPDATE tasks SET status = ? WHERE id = ?")
          stmt.bind_string_as_blob(index=1, val=new_status)
          stmt.bind(index=2, val=id)
          stmt.step_once()
          stmt.finalize()
          let updated = { ..task, status: new_status }
          println("  -> 200 status changed to \{new_status}")
          @mocket.HttpResponse::new(OK).json(updated.to_json())
        }
      }
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..delete("/api/tasks/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("DELETE /api/tasks/\{id_str}")
    try {
      let id = @strconv.parse_int(id_str)
      delete_task(conn, id)
      println("  -> 204 deleted task \{id}")
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  .get("/api/tasks/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    try {
      let id = @strconv.parse_int(id_str)
      match get_task(conn, id) {
        Some(task) => @mocket.HttpResponse::new(OK).json(task.to_json())
        None => @mocket.HttpResponse::new(NotFound).body("Task not found")
      }
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  println("Server running at http://localhost:\{port}")
  app.serve(port~)
}
