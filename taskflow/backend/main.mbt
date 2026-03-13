///|
/// Create tables, indexes, and run migrations.
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
  // Activities table for status change history
  let s3 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS activities (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  task_id INTEGER NOT NULL,
      #|  task_title BLOB NOT NULL,
      #|  from_status BLOB NOT NULL,
      #|  to_status BLOB NOT NULL,
      #|  timestamp BLOB NOT NULL,
      #|  user_name BLOB NOT NULL DEFAULT ''
      #|)
    ),
  )
  s3.step_once()
  s3.finalize()
  // Comments table for task notes
  let s4 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS comments (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  task_id INTEGER NOT NULL,
      #|  author BLOB NOT NULL,
      #|  text BLOB NOT NULL,
      #|  created_at BLOB NOT NULL,
      #|  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
      #|)
    ),
  )
  s4.step_once()
  s4.finalize()
  // Dependencies table
  let s5 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS task_dependencies (
      #|  task_id INTEGER NOT NULL,
      #|  depends_on_id INTEGER NOT NULL,
      #|  PRIMARY KEY (task_id, depends_on_id),
      #|  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
      #|  FOREIGN KEY (depends_on_id) REFERENCES tasks(id) ON DELETE CASCADE
      #|)
    ),
  )
  s5.step_once()
  s5.finalize()
  // Labels table
  let s6 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS labels (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  name BLOB NOT NULL,
      #|  color BLOB NOT NULL
      #|)
    ),
  )
  s6.step_once()
  s6.finalize()
  // Task-label junction table
  let s7 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS task_labels (
      #|  task_id INTEGER NOT NULL,
      #|  label_id INTEGER NOT NULL,
      #|  PRIMARY KEY (task_id, label_id),
      #|  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
      #|  FOREIGN KEY (label_id) REFERENCES labels(id) ON DELETE CASCADE
      #|)
    ),
  )
  s7.step_once()
  s7.finalize()
  // Subtasks / checklist items table
  let s8 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS subtasks (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  task_id INTEGER NOT NULL,
      #|  title BLOB NOT NULL,
      #|  done INTEGER NOT NULL DEFAULT 0,
      #|  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
      #|)
    ),
  )
  s8.step_once()
  s8.finalize()
  // Time entries table
  let s9 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS time_entries (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  task_id INTEGER NOT NULL,
      #|  minutes INTEGER NOT NULL,
      #|  note BLOB NOT NULL DEFAULT '',
      #|  created_at BLOB NOT NULL,
      #|  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
      #|)
    ),
  )
  s9.step_once()
  s9.finalize()
  // Recurrence rules table
  let s10 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS recurrence_rules (
      #|  task_id INTEGER PRIMARY KEY,
      #|  interval BLOB NOT NULL,
      #|  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
      #|)
    ),
  )
  s10.step_once()
  s10.finalize()
  let s11 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS attachments (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  task_id INTEGER NOT NULL,
      #|  url BLOB NOT NULL,
      #|  label BLOB NOT NULL DEFAULT '',
      #|  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
      #|)
    ),
  )
  s11.step_once()
  s11.finalize()
  // Projects table
  let s12 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS projects (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  name BLOB NOT NULL,
      #|  color BLOB NOT NULL
      #|)
    ),
  )
  s12.step_once()
  s12.finalize()
  // Task-project junction (each task belongs to at most one project)
  let s13 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS task_projects (
      #|  task_id INTEGER PRIMARY KEY,
      #|  project_id INTEGER NOT NULL,
      #|  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
      #|  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
      #|)
    ),
  )
  s13.step_once()
  s13.finalize()
  // Indexes for common query patterns
  let idx_stmts = [
    "CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status)", "CREATE INDEX IF NOT EXISTS idx_tasks_assignee ON tasks(assignee_id)",
    "CREATE INDEX IF NOT EXISTS idx_tasks_due ON tasks(due_date)", "CREATE INDEX IF NOT EXISTS idx_comments_task ON comments(task_id)",
  ]
  for sql in idx_stmts {
    let s = conn.prepare(sql)
    s.step_once()
    s.finalize()
  }
  // Seed default labels if the table is empty
  let count_stmt = conn.prepare("SELECT COUNT(*) FROM labels")
  guard count_stmt.step()
  let label_count : Int = count_stmt.column(index=0)
  count_stmt.finalize()
  if label_count == 0 {
    let defaults = [
      ("bug", "#ef4444"), ("feature", "#3b82f6"), ("docs", "#22c55e"),
      ("urgent", "#f97316"), ("design", "#a855f7"), ("test", "#eab308"),
    ]
    for pair in defaults {
      let s = conn.prepare("INSERT INTO labels (name, color) VALUES (?, ?)")
      s.bind_string_as_blob(index=1, val=pair.0)
      s.bind_string_as_blob(index=2, val=pair.1)
      s.step_once()
      s.finalize()
    }
    println("Seeded \{defaults.length()} default labels")
  }
  // Migrate: add user_name column to activities if missing (for existing DBs).
  // Uses try/catch because column_blob_as_string cannot read PRAGMA TEXT columns.
  try {
    let alter = conn.prepare(
      "ALTER TABLE activities ADD COLUMN user_name BLOB NOT NULL DEFAULT ''",
    )
    alter.step_once()
    alter.finalize()
    println("Migrated activities table: added user_name column")
  } catch {
    @sqlite3.SqliteError((1, _)) => () // SQLITE_ERROR(1) = column already exists — expected for new databases
    e => raise e // Re-raise unexpected errors (readonly, locked, etc.)
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
/// Read an Activity from the current row of a prepared statement.
fn read_activity(stmt : @sqlite3.Statement) -> @shared.Activity {
  let id : Int = stmt.column(index=0)
  let task_id : Int = stmt.column(index=1)
  let task_title : String = stmt.column_blob_as_string(index=2)
  let from_status : String = stmt.column_blob_as_string(index=3)
  let to_status : String = stmt.column_blob_as_string(index=4)
  let timestamp : String = stmt.column_blob_as_string(index=5)
  let user_name : String = stmt.column_blob_as_string(index=6)
  { id, task_id, task_title, from_status, to_status, timestamp, user_name }
}

///|
/// Fetch recent activities (last 20) in descending order.
fn get_recent_activities(
  conn : @sqlite3.Connection,
) -> Array[@shared.Activity] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|SELECT id, task_id, task_title, from_status, to_status, timestamp, user_name
      #|FROM activities ORDER BY id DESC LIMIT 20
    ),
  )
  let activities : Array[@shared.Activity] = []
  while stmt.step() {
    activities.push(read_activity(stmt))
  }
  stmt.finalize()
  activities
}

///|
/// Log a status change activity.
fn log_activity(
  conn : @sqlite3.Connection,
  task_id : Int,
  task_title : String,
  from_status : String,
  to_status : String,
  user_name? : String = "",
) -> Unit raise @sqlite3.SqliteError {
  let today = get_today(conn)
  let stmt = conn.prepare(
    (
      #|INSERT INTO activities (task_id, task_title, from_status, to_status, timestamp, user_name)
      #|VALUES (?, ?, ?, ?, ?, ?)
    ),
  )
  stmt.bind(index=1, val=task_id)
  stmt.bind_string_as_blob(index=2, val=task_title)
  stmt.bind_string_as_blob(index=3, val=from_status)
  stmt.bind_string_as_blob(index=4, val=to_status)
  stmt.bind_string_as_blob(index=5, val=today)
  stmt.bind_string_as_blob(index=6, val=user_name)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Read a Comment from the current row of a prepared statement.
fn read_comment(stmt : @sqlite3.Statement) -> @shared.Comment {
  let id : Int = stmt.column(index=0)
  let task_id : Int = stmt.column(index=1)
  let author : String = stmt.column_blob_as_string(index=2)
  let text : String = stmt.column_blob_as_string(index=3)
  let created_at : String = stmt.column_blob_as_string(index=4)
  { id, task_id, author, text, created_at }
}

///|
/// Fetch all comments for a task, newest first.
fn get_task_comments(
  conn : @sqlite3.Connection,
  task_id : Int,
) -> Array[@shared.Comment] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|SELECT id, task_id, author, text, created_at
      #|FROM comments WHERE task_id = ? ORDER BY id DESC
    ),
  )
  stmt.bind(index=1, val=task_id)
  let comments : Array[@shared.Comment] = []
  while stmt.step() {
    comments.push(read_comment(stmt))
  }
  stmt.finalize()
  comments
}

///|
/// Add a comment to a task.
fn add_comment(
  conn : @sqlite3.Connection,
  task_id : Int,
  author : String,
  text : String,
) -> @shared.Comment raise @sqlite3.SqliteError {
  let today = get_today(conn)
  let stmt = conn.prepare(
    (
      #|INSERT INTO comments (task_id, author, text, created_at)
      #|VALUES (?, ?, ?, ?)
    ),
  )
  stmt.bind(index=1, val=task_id)
  stmt.bind_string_as_blob(index=2, val=author)
  stmt.bind_string_as_blob(index=3, val=text)
  stmt.bind_string_as_blob(index=4, val=today)
  stmt.step_once()
  stmt.finalize()
  let id_stmt = conn.prepare("SELECT last_insert_rowid()")
  guard id_stmt.step()
  let id : Int = id_stmt.column(index=0)
  id_stmt.finalize()
  { id, task_id, author, text, created_at: today }
}

///|
/// Fetch dependencies for a task.
fn get_task_deps(
  conn : @sqlite3.Connection,
  task_id : Int,
) -> Array[@shared.Dependency] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT task_id, depends_on_id FROM task_dependencies WHERE task_id = ?",
  )
  stmt.bind(index=1, val=task_id)
  let deps : Array[@shared.Dependency] = []
  while stmt.step() {
    let tid : Int = stmt.column(index=0)
    let did : Int = stmt.column(index=1)
    deps.push({ task_id: tid, depends_on_id: did })
  }
  stmt.finalize()
  deps
}

///|
/// Fetch all dependencies.
fn get_all_deps(
  conn : @sqlite3.Connection,
) -> Array[@shared.Dependency] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT task_id, depends_on_id FROM task_dependencies",
  )
  let deps : Array[@shared.Dependency] = []
  while stmt.step() {
    let tid : Int = stmt.column(index=0)
    let did : Int = stmt.column(index=1)
    deps.push({ task_id: tid, depends_on_id: did })
  }
  stmt.finalize()
  deps
}

///|
/// Add a dependency: task_id depends on depends_on_id.
fn add_dep(
  conn : @sqlite3.Connection,
  task_id : Int,
  depends_on_id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|INSERT OR IGNORE INTO task_dependencies (task_id, depends_on_id)
      #|VALUES (?, ?)
    ),
  )
  stmt.bind(index=1, val=task_id)
  stmt.bind(index=2, val=depends_on_id)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Remove a dependency.
fn remove_dep(
  conn : @sqlite3.Connection,
  task_id : Int,
  depends_on_id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "DELETE FROM task_dependencies WHERE task_id = ? AND depends_on_id = ?",
  )
  stmt.bind(index=1, val=task_id)
  stmt.bind(index=2, val=depends_on_id)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Fetch all labels.
fn get_all_labels(
  conn : @sqlite3.Connection,
) -> Array[@shared.Label] raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT id, name, color FROM labels ORDER BY id ASC")
  let labels : Array[@shared.Label] = []
  while stmt.step() {
    let id : Int = stmt.column(index=0)
    let name : String = stmt.column_blob_as_string(index=1)
    let color : String = stmt.column_blob_as_string(index=2)
    labels.push({ id, name, color })
  }
  stmt.finalize()
  labels
}

///|
/// Fetch all task-label associations.
fn get_all_task_labels(
  conn : @sqlite3.Connection,
) -> Array[@shared.TaskLabel] raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT task_id, label_id FROM task_labels")
  let tls : Array[@shared.TaskLabel] = []
  while stmt.step() {
    let task_id : Int = stmt.column(index=0)
    let label_id : Int = stmt.column(index=1)
    tls.push({ task_id, label_id })
  }
  stmt.finalize()
  tls
}

///|
/// Create a new label.
fn create_label(
  conn : @sqlite3.Connection,
  name : String,
  color : String,
) -> @shared.Label raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "INSERT INTO labels (name, color) VALUES (?, ?)",
  )
  stmt.bind_string_as_blob(index=1, val=name)
  stmt.bind_string_as_blob(index=2, val=color)
  stmt.step_once()
  stmt.finalize()
  let id_stmt = conn.prepare("SELECT last_insert_rowid()")
  guard id_stmt.step()
  let id : Int = id_stmt.column(index=0)
  id_stmt.finalize()
  { id, name, color }
}

///|
/// Add a label to a task.
fn add_task_label(
  conn : @sqlite3.Connection,
  task_id : Int,
  label_id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "INSERT OR IGNORE INTO task_labels (task_id, label_id) VALUES (?, ?)",
  )
  stmt.bind(index=1, val=task_id)
  stmt.bind(index=2, val=label_id)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Remove a label from a task.
fn remove_task_label(
  conn : @sqlite3.Connection,
  task_id : Int,
  label_id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "DELETE FROM task_labels WHERE task_id = ? AND label_id = ?",
  )
  stmt.bind(index=1, val=task_id)
  stmt.bind(index=2, val=label_id)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Fetch all subtasks.
fn get_all_subtasks(
  conn : @sqlite3.Connection,
) -> Array[@shared.Subtask] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, task_id, title, done FROM subtasks ORDER BY id ASC",
  )
  let subs : Array[@shared.Subtask] = []
  while stmt.step() {
    let id : Int = stmt.column(index=0)
    let task_id : Int = stmt.column(index=1)
    let title : String = stmt.column_blob_as_string(index=2)
    let done_int : Int = stmt.column(index=3)
    subs.push({ id, task_id, title, done: done_int != 0 })
  }
  stmt.finalize()
  subs
}

///|
/// Create a subtask for a task.
fn create_subtask(
  conn : @sqlite3.Connection,
  task_id : Int,
  title : String,
) -> @shared.Subtask raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "INSERT INTO subtasks (task_id, title, done) VALUES (?, ?, 0)",
  )
  stmt.bind(index=1, val=task_id)
  stmt.bind_string_as_blob(index=2, val=title)
  stmt.step_once()
  stmt.finalize()
  let id_stmt = conn.prepare("SELECT last_insert_rowid()")
  guard id_stmt.step()
  let id : Int = id_stmt.column(index=0)
  id_stmt.finalize()
  { id, task_id, title, done: false }
}

///|
/// Toggle a subtask's done state.
fn toggle_subtask(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "UPDATE subtasks SET done = CASE WHEN done = 0 THEN 1 ELSE 0 END WHERE id = ?",
  )
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Delete a subtask.
fn delete_subtask(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM subtasks WHERE id = ?")
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Fetch all recurrence rules.
fn get_all_recurrence_rules(
  conn : @sqlite3.Connection,
) -> Array[@shared.RecurrenceRule] raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT task_id, interval FROM recurrence_rules")
  let rules : Array[@shared.RecurrenceRule] = []
  while stmt.step() {
    let task_id : Int = stmt.column(index=0)
    let interval : String = stmt.column_blob_as_string(index=1)
    rules.push({ task_id, interval })
  }
  stmt.finalize()
  rules
}

///|
/// Set recurrence for a task (upsert).
fn set_recurrence(
  conn : @sqlite3.Connection,
  task_id : Int,
  interval : String,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "INSERT OR REPLACE INTO recurrence_rules (task_id, interval) VALUES (?, ?)",
  )
  stmt.bind(index=1, val=task_id)
  stmt.bind_string_as_blob(index=2, val=interval)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Remove recurrence from a task.
fn remove_recurrence(
  conn : @sqlite3.Connection,
  task_id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "DELETE FROM recurrence_rules WHERE task_id = ?",
  )
  stmt.bind(index=1, val=task_id)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Check if a task has recurrence, and if so, create a copy in "todo" status.
fn handle_recurrence_on_done(
  conn : @sqlite3.Connection,
  task_id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let interval = @shared.get_recurrence(get_all_recurrence_rules(conn), task_id)
  if interval == "" {
    return
  }
  // Get the completed task
  match get_task(conn, task_id) {
    Some(task) => {
      // Create a new copy with "todo" status
      let new_task = create_task(
        conn,
        task.title,
        task.description,
        task.priority,
        task.assignee_id,
        task.due_date,
      )
      // Copy the recurrence rule to the new task
      set_recurrence(conn, new_task.id, interval)
      // Remove recurrence from the completed task
      remove_recurrence(conn, task_id)
      println("  Recurring task: created new task \{new_task.id} from \{task_id}")
    }
    None => ()
  }
}

///|
/// Fetch all attachments.
fn get_all_attachments(
  conn : @sqlite3.Connection,
) -> Array[@shared.Attachment] raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT id, task_id, url, label FROM attachments")
  let result : Array[@shared.Attachment] = []
  while stmt.step() {
    let id : Int = stmt.column(index=0)
    let task_id : Int = stmt.column(index=1)
    let url : String = stmt.column_blob_as_string(index=2)
    let label : String = stmt.column_blob_as_string(index=3)
    result.push({ id, task_id, url, label })
  }
  stmt.finalize()
  result
}

///|
/// Add an attachment to a task.
fn create_attachment(
  conn : @sqlite3.Connection,
  task_id : Int,
  url : String,
  label : String,
) -> @shared.Attachment raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "INSERT INTO attachments (task_id, url, label) VALUES (?, ?, ?)",
  )
  stmt.bind(index=1, val=task_id)
  stmt.bind_string_as_blob(index=2, val=url)
  stmt.bind_string_as_blob(index=3, val=label)
  stmt.step_once()
  stmt.finalize()
  let id_stmt = conn.prepare("SELECT last_insert_rowid()")
  guard id_stmt.step()
  let id : Int = id_stmt.column(index=0)
  id_stmt.finalize()
  { id, task_id, url, label }
}

///|
/// Delete an attachment.
fn delete_attachment(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM attachments WHERE id = ?")
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Fetch all time entries.
fn get_all_time_entries(
  conn : @sqlite3.Connection,
) -> Array[@shared.TimeEntry] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, task_id, minutes, note, created_at FROM time_entries ORDER BY id DESC",
  )
  let entries : Array[@shared.TimeEntry] = []
  while stmt.step() {
    let id : Int = stmt.column(index=0)
    let task_id : Int = stmt.column(index=1)
    let minutes : Int = stmt.column(index=2)
    let note : String = stmt.column_blob_as_string(index=3)
    let created_at : String = stmt.column_blob_as_string(index=4)
    entries.push({ id, task_id, minutes, note, created_at })
  }
  stmt.finalize()
  entries
}

///|
/// Log time for a task.
fn log_time(
  conn : @sqlite3.Connection,
  task_id : Int,
  minutes : Int,
  note : String,
) -> @shared.TimeEntry raise @sqlite3.SqliteError {
  let today = get_today(conn)
  let stmt = conn.prepare(
    "INSERT INTO time_entries (task_id, minutes, note, created_at) VALUES (?, ?, ?, ?)",
  )
  stmt.bind(index=1, val=task_id)
  stmt.bind(index=2, val=minutes)
  stmt.bind_string_as_blob(index=3, val=note)
  stmt.bind_string_as_blob(index=4, val=today)
  stmt.step_once()
  stmt.finalize()
  let id_stmt = conn.prepare("SELECT last_insert_rowid()")
  guard id_stmt.step()
  let id : Int = id_stmt.column(index=0)
  id_stmt.finalize()
  { id, task_id, minutes, note, created_at: today }
}

///|
/// Delete a time entry.
fn delete_time_entry(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM time_entries WHERE id = ?")
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Fetch all projects.
fn get_all_projects(
  conn : @sqlite3.Connection,
) -> Array[@shared.Project] raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT id, name, color FROM projects ORDER BY id ASC")
  let result : Array[@shared.Project] = []
  while stmt.step() {
    let id : Int = stmt.column(index=0)
    let name : String = stmt.column_blob_as_string(index=1)
    let color : String = stmt.column_blob_as_string(index=2)
    result.push({ id, name, color })
  }
  stmt.finalize()
  result
}

///|
/// Create a new project.
fn create_project(
  conn : @sqlite3.Connection,
  name : String,
  color : String,
) -> @shared.Project raise @sqlite3.SqliteError {
  let stmt = conn.prepare("INSERT INTO projects (name, color) VALUES (?, ?)")
  stmt.bind_string_as_blob(index=1, val=name)
  stmt.bind_string_as_blob(index=2, val=color)
  stmt.step_once()
  stmt.finalize()
  let id_stmt = conn.prepare("SELECT last_insert_rowid()")
  guard id_stmt.step()
  let id : Int = id_stmt.column(index=0)
  id_stmt.finalize()
  { id, name, color }
}

///|
/// Delete a project and all its task associations.
fn delete_project(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt1 = conn.prepare("DELETE FROM task_projects WHERE project_id = ?")
  stmt1.bind(index=1, val=id)
  stmt1.step_once()
  stmt1.finalize()
  let stmt2 = conn.prepare("DELETE FROM projects WHERE id = ?")
  stmt2.bind(index=1, val=id)
  stmt2.step_once()
  stmt2.finalize()
}

///|
/// Fetch all task-project associations.
fn get_all_task_projects(
  conn : @sqlite3.Connection,
) -> Array[@shared.TaskProject] raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT task_id, project_id FROM task_projects")
  let result : Array[@shared.TaskProject] = []
  while stmt.step() {
    let task_id : Int = stmt.column(index=0)
    let project_id : Int = stmt.column(index=1)
    result.push({ task_id, project_id })
  }
  stmt.finalize()
  result
}

///|
/// Assign a task to a project (upsert).
fn set_task_project(
  conn : @sqlite3.Connection,
  task_id : Int,
  project_id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "INSERT OR REPLACE INTO task_projects (task_id, project_id) VALUES (?, ?)",
  )
  stmt.bind(index=1, val=task_id)
  stmt.bind(index=2, val=project_id)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Remove a task from its project.
fn remove_task_project(
  conn : @sqlite3.Connection,
  task_id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM task_projects WHERE task_id = ?")
  stmt.bind(index=1, val=task_id)
  stmt.step_once()
  stmt.finalize()
}

///|
/// Fetch the full board: tasks + members + activities + today's date.
fn get_board(
  conn : @sqlite3.Connection,
) -> @shared.Board raise @sqlite3.SqliteError {
  let tasks = get_all_tasks(conn)
  let members = get_all_members(conn)
  let activities = get_recent_activities(conn)
  let dependencies = get_all_deps(conn)
  let labels = get_all_labels(conn)
  let task_labels = get_all_task_labels(conn)
  let subtasks = get_all_subtasks(conn)
  let time_entries = get_all_time_entries(conn)
  let recurrence_rules = get_all_recurrence_rules(conn)
  let attachments = get_all_attachments(conn)
  let projects = get_all_projects(conn)
  let task_projects = get_all_task_projects(conn)
  let today = get_today(conn)
  { tasks, members, activities, dependencies, labels, task_labels, subtasks, time_entries, recurrence_rules, attachments, projects, task_projects, today }
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
  init_auth_db(conn)
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
      #|    @media (max-width: 768px) {
      #|      body { font-size: 14px; }
      #|      input, select, button { font-size: 16px !important; }
      #|    }
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
  // ---- Auth ----
  ..post(@shared.api_register, event => {
    println("POST \{@shared.api_register}")
    try {
      let json : Json = event.req.body()
      let username = match json {
        { "username": String(u), .. } => u
        _ =>
          return @mocket.HttpResponse::new(BadRequest).json(
            ({ "error": "Missing username" } : Json),
          )
      }
      let password = match json {
        { "password": String(p), .. } => p
        _ =>
          return @mocket.HttpResponse::new(BadRequest).json(
            ({ "error": "Missing password" } : Json),
          )
      }
      if not(@shared.validate_username(username)) {
        return @mocket.HttpResponse::new(BadRequest).json(
          ({
            "error": "Username must be 3-30 alphanumeric characters or underscores",
          } : Json),
        )
      }
      if not(@shared.validate_password(password)) {
        return @mocket.HttpResponse::new(BadRequest).json(
          ({ "error": "Password must be 4-100 characters" } : Json),
        )
      }
      let user = register_user(conn, username, password)
      let token = create_session(conn, user.id, user.username)
      let resp : @shared.AuthResponse = {
        user,
        message: "Registration successful",
      }
      let http_resp = @mocket.HttpResponse::new(Created).json(resp.to_json())
      http_resp.set_cookie(
        "session",
        token,
        path="/",
        http_only=true,
        same_site=Lax,
        max_age=86400 * 7,
      )
      println("  -> 201 registered user: \{username}")
      http_resp
    } catch {
      e => {
        let msg = "\{e}"
        if msg.contains("UNIQUE") || msg.contains("(19,") {
          println("  -> 409 username taken")
          @mocket.HttpResponse::new(Conflict).json(
            ({ "error": "Username already taken" } : Json),
          )
        } else {
          println("  -> 500 \{e}")
          @mocket.HttpResponse::new(InternalServerError).json(
            ({ "error": "\{e}" } : Json),
          )
        }
      }
    }
  })
  ..post(@shared.api_login, event => {
    println("POST \{@shared.api_login}")
    try {
      let json : Json = event.req.body()
      let username = match json {
        { "username": String(u), .. } => u
        _ =>
          return @mocket.HttpResponse::new(BadRequest).json(
            ({ "error": "Missing username" } : Json),
          )
      }
      let password = match json {
        { "password": String(p), .. } => p
        _ =>
          return @mocket.HttpResponse::new(BadRequest).json(
            ({ "error": "Missing password" } : Json),
          )
      }
      match login_user(conn, username, password) {
        Some(user) => {
          let token = create_session(conn, user.id, user.username)
          let resp : @shared.AuthResponse = {
            user,
            message: "Login successful",
          }
          let http_resp = @mocket.HttpResponse::new(OK).json(resp.to_json())
          http_resp.set_cookie(
            "session",
            token,
            path="/",
            http_only=true,
            same_site=Lax,
            max_age=86400 * 7,
          )
          println("  -> 200 logged in: \{username}")
          http_resp
        }
        None => {
          println("  -> 401 invalid credentials")
          @mocket.HttpResponse::new(Unauthorized).json(
            ({ "error": "Invalid username or password" } : Json),
          )
        }
      }
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).json(
          ({ "error": "\{e}" } : Json),
        )
      }
    }
  })
  ..post(@shared.api_logout, event => {
    println("POST \{@shared.api_logout}")
    try {
      match event.req.get_cookie("session") {
        Some(cookie) => delete_session(conn, cookie.value)
        None => ()
      }
      let resp = @mocket.HttpResponse::new(OK).body("Logged out")
      resp.delete_cookie("session")
      println("  -> 200 logged out")
      resp
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..get(@shared.api_me, event => {
    println("GET \{@shared.api_me}")
    try {
      match get_request_user(conn, event.req) {
        Some(user) => {
          println("  -> 200 \{user.username}")
          @mocket.HttpResponse::new(OK).json(user.to_json())
        }
        None => {
          println("  -> 401 not logged in")
          @mocket.HttpResponse::new(Unauthorized).body("Not logged in")
        }
      }
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
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
  // ---- Export ----
  ..get(@shared.api_export, event => {
    println("GET \{@shared.api_export}")
    try {
      let tasks = get_all_tasks(conn)
      let members = get_all_members(conn)
      let format = match (event.req.body() : Json) {
        { "format": String(f), .. } => f
        _ => {
          // Check query-string style: just default to csv
          "csv"
        }
      }
      if format == "json" {
        println("  -> 200 JSON export (\{tasks.length()} tasks)")
        @mocket.HttpResponse::new(
          OK,
          headers={
            "Content-Type": "application/json; charset=utf-8",
            "Content-Disposition": "attachment; filename=\"tasks.json\"",
          },
          raw_body=@utf8.encode(tasks.to_json().stringify()),
        )
      } else {
        let csv = @shared.tasks_to_csv(tasks, members)
        println("  -> 200 CSV export (\{tasks.length()} tasks)")
        @mocket.HttpResponse::new(
          OK,
          headers={
            "Content-Type": "text/csv; charset=utf-8",
            "Content-Disposition": "attachment; filename=\"tasks.csv\"",
          },
          raw_body=@utf8.encode(csv),
        )
      }
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
      if not(require_editor(conn, event.req)) {
        return @mocket.HttpResponse::new(Forbidden).body("Viewers cannot create tasks")
      }
      let user_name = match get_request_user(conn, event.req) {
        Some(u) => u.username
        None => ""
      }
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
      log_activity(conn, task.id, title, "", "todo", user_name~)
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
      let user_name = match get_request_user(conn, event.req) {
        Some(u) => u.username
        None => ""
      }
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
          log_activity(
            conn,
            id,
            task.title,
            task.status,
            new_status,
            user_name~,
          )
          // If moved to "done" and has recurrence, create a copy
          if new_status == "done" {
            handle_recurrence_on_done(conn, id)
          }
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
  // ---- Dependencies ----
  ..get("/api/tasks/:id/deps", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("GET /api/tasks/\{id_str}/deps")
    try {
      let id = @strconv.parse_int(id_str)
      let deps = get_task_deps(conn, id)
      @mocket.HttpResponse::new(OK).json(deps.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/tasks/:id/deps", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/tasks/\{id_str}/deps")
    try {
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let depends_on = match json {
        { "depends_on_id": Number(n, ..), .. } => n.to_int()
        _ =>
          return @mocket.HttpResponse::new(BadRequest).body(
            "Missing depends_on_id",
          )
      }
      if depends_on == id {
        return @mocket.HttpResponse::new(BadRequest).body(
          "Cannot depend on self",
        )
      }
      add_dep(conn, id, depends_on)
      println("  -> 201 dependency added: \{id} -> \{depends_on}")
      let dep : @shared.Dependency = { task_id: id, depends_on_id: depends_on }
      @mocket.HttpResponse::new(Created).json(dep.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/tasks/:id/deps/remove", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/tasks/\{id_str}/deps/remove")
    try {
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let depends_on = match json {
        { "depends_on_id": Number(n, ..), .. } => n.to_int()
        _ =>
          return @mocket.HttpResponse::new(BadRequest).body(
            "Missing depends_on_id",
          )
      }
      remove_dep(conn, id, depends_on)
      println("  -> 200 dependency removed: \{id} -> \{depends_on}")
      @mocket.HttpResponse::new(OK).body("ok")
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  // ---- Comments ----
  ..get("/api/tasks/:id/comments", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("GET /api/tasks/\{id_str}/comments")
    try {
      let id = @strconv.parse_int(id_str)
      let comments = get_task_comments(conn, id)
      println("  -> 200 (\{comments.length()} comments)")
      @mocket.HttpResponse::new(OK).json(comments.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/tasks/:id/comments", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/tasks/\{id_str}/comments")
    try {
      let author = match get_request_user(conn, event.req) {
        Some(u) => u.username
        None =>
          match (event.req.body() : Json) {
            { "author": String(a), .. } => a
            _ => "Anonymous"
          }
      }
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let text = match json {
        { "text": String(t), .. } => t
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing text")
      }
      if not(@shared.validate_comment_text(text)) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid comment")
      }
      let comment = add_comment(conn, id, author, text)
      println("  -> 201 comment added to task \{id}")
      @mocket.HttpResponse::new(Created).json(comment.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  // ---- Labels ----
  ..get(@shared.api_labels, _ => {
    println("GET \{@shared.api_labels}")
    try {
      let labels = get_all_labels(conn)
      println("  -> 200 (\{labels.length()} labels)")
      @mocket.HttpResponse::new(OK).json(labels.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post(@shared.api_labels, fn(event) noraise {
    println("POST \{@shared.api_labels}")
    try {
      let json : Json = event.req.body()
      let name = match json {
        { "name": String(n), .. } => n
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing name")
      }
      if name == "" {
        return @mocket.HttpResponse::new(BadRequest).body("Label name is empty")
      }
      let color = match json {
        { "color": String(c), .. } => c
        _ => "#94a3b8"
      }
      let label = create_label(conn, name, color)
      println("  -> 201 label \{label.id} created")
      @mocket.HttpResponse::new(Created).json(label.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..get("/api/tasks/:id/labels", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("GET /api/tasks/\{id_str}/labels")
    try {
      let id = @strconv.parse_int(id_str)
      let labels = get_all_labels(conn)
      let tls = get_all_task_labels(conn)
      let task_labels = @shared.labels_for_task(labels, tls, id)
      @mocket.HttpResponse::new(OK).json(task_labels.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/tasks/:id/labels", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/tasks/\{id_str}/labels")
    try {
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let label_id = match json {
        { "label_id": Number(n, ..), .. } => n.to_int()
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing label_id")
      }
      add_task_label(conn, id, label_id)
      println("  -> 201 label \{label_id} added to task \{id}")
      @mocket.HttpResponse::new(Created).json(({ "ok": true } : Json))
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/tasks/:id/labels/remove", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/tasks/\{id_str}/labels/remove")
    try {
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let label_id = match json {
        { "label_id": Number(n, ..), .. } => n.to_int()
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing label_id")
      }
      remove_task_label(conn, id, label_id)
      println("  -> 200 label \{label_id} removed from task \{id}")
      @mocket.HttpResponse::new(OK).json(({ "ok": true } : Json))
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  // Subtask endpoints
  ..get("/api/tasks/:id/subtasks", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("GET /api/tasks/\{id_str}/subtasks")
    try {
      let id = @strconv.parse_int(id_str)
      let subs = get_all_subtasks(conn).filter(fn(s) { s.task_id == id })
      @mocket.HttpResponse::new(OK).json(subs.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/tasks/:id/subtasks", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/tasks/\{id_str}/subtasks")
    try {
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let title = match json {
        { "title": String(s), .. } => s
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing title")
      }
      let sub = create_subtask(conn, id, title)
      println("  -> 201 subtask \{sub.id} for task \{id}")
      @mocket.HttpResponse::new(Created).json(sub.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/subtasks/:id/toggle", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/subtasks/\{id_str}/toggle")
    try {
      let id = @strconv.parse_int(id_str)
      toggle_subtask(conn, id)
      println("  -> 200 toggled subtask \{id}")
      @mocket.HttpResponse::new(OK).json(({ "ok": true } : Json))
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..delete("/api/subtasks/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("DELETE /api/subtasks/\{id_str}")
    try {
      let id = @strconv.parse_int(id_str)
      delete_subtask(conn, id)
      println("  -> 204 deleted subtask \{id}")
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  // Time tracking endpoints
  ..post("/api/tasks/:id/time", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/tasks/\{id_str}/time")
    try {
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let minutes = match json {
        { "minutes": Number(n, ..), .. } => n.to_int()
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing minutes")
      }
      if not(@shared.validate_time_minutes(minutes)) {
        return @mocket.HttpResponse::new(BadRequest).body("Minutes must be 1-1440")
      }
      let note = match json {
        { "note": String(s), .. } => s
        _ => ""
      }
      let entry = log_time(conn, id, minutes, note)
      println("  -> 201 logged \{minutes}m for task \{id}")
      @mocket.HttpResponse::new(Created).json(entry.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..delete("/api/time/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("DELETE /api/time/\{id_str}")
    try {
      let id = @strconv.parse_int(id_str)
      delete_time_entry(conn, id)
      println("  -> 204 deleted time entry \{id}")
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  // Recurrence endpoints
  ..post("/api/tasks/:id/recurrence", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/tasks/\{id_str}/recurrence")
    try {
      let id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let interval = match json {
        { "interval": String(s), .. } => s
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing interval")
      }
      if not(@shared.validate_recurrence(interval)) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid interval")
      }
      set_recurrence(conn, id, interval)
      println("  -> 200 set recurrence \{interval} for task \{id}")
      @mocket.HttpResponse::new(OK).json(({ "ok": true } : Json))
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..delete("/api/tasks/:id/recurrence", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("DELETE /api/tasks/\{id_str}/recurrence")
    try {
      let id = @strconv.parse_int(id_str)
      remove_recurrence(conn, id)
      println("  -> 204 removed recurrence for task \{id}")
      @mocket.HttpResponse::new(NoContent)
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
      if not(require_editor(conn, event.req)) {
        return @mocket.HttpResponse::new(Forbidden).body("Viewers cannot delete tasks")
      }
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
  ..get("/api/tasks/:id", fn(event) noraise {
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
  // ---- Attachments ----
  ..post("/api/tasks/:id/attachments", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/tasks/\{id_str}/attachments")
    try {
      if not(require_editor(conn, event.req)) {
        return @mocket.HttpResponse::new(Forbidden).body("Viewers cannot add attachments")
      }
      let task_id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let url = match json {
        { "url": String(u), .. } => u
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing url")
      }
      let label = match json {
        { "label": String(l), .. } => l
        _ => ""
      }
      if not(@shared.validate_attachment_url(url)) {
        return @mocket.HttpResponse::new(BadRequest).body(
          "Invalid URL (must start with http:// or https://)",
        )
      }
      let att = create_attachment(conn, task_id, url, label)
      println("  -> 201 attachment \{att.id}")
      @mocket.HttpResponse::new(Created).json(att.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..delete("/api/attachments/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("DELETE /api/attachments/\{id_str}")
    try {
      if not(require_editor(conn, event.req)) {
        return @mocket.HttpResponse::new(Forbidden).body("Viewers cannot delete attachments")
      }
      let id = @strconv.parse_int(id_str)
      delete_attachment(conn, id)
      println("  -> 204 deleted attachment \{id}")
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  // ---- Projects ----
  ..get(@shared.api_projects, _ => {
    println("GET \{@shared.api_projects}")
    try {
      let projects = get_all_projects(conn)
      println("  -> 200 (\{projects.length()} projects)")
      @mocket.HttpResponse::new(OK).json(projects.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post(@shared.api_projects, fn(event) noraise {
    println("POST \{@shared.api_projects}")
    try {
      if not(require_editor(conn, event.req)) {
        return @mocket.HttpResponse::new(Forbidden).body("Viewers cannot create projects")
      }
      let json : Json = event.req.body()
      let name = match json {
        { "name": String(n), .. } => n
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing name")
      }
      if not(@shared.validate_project_name(name)) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid project name")
      }
      let color = match json {
        { "color": String(c), .. } => c
        _ => "#6366f1"
      }
      let project = create_project(conn, name, color)
      println("  -> 201 project \{project.id}: \{name}")
      @mocket.HttpResponse::new(Created).json(project.to_json())
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..delete("/api/projects/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("DELETE /api/projects/\{id_str}")
    try {
      if not(require_editor(conn, event.req)) {
        return @mocket.HttpResponse::new(Forbidden).body("Viewers cannot delete projects")
      }
      let id = @strconv.parse_int(id_str)
      delete_project(conn, id)
      println("  -> 204 deleted project \{id}")
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("/api/tasks/:id/project", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/tasks/\{id_str}/project")
    try {
      let task_id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let project_id = match json {
        { "project_id": Number(n, ..), .. } => n.to_int()
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing project_id")
      }
      if project_id == 0 {
        remove_task_project(conn, task_id)
        println("  -> 200 removed task \{task_id} from project")
      } else {
        set_task_project(conn, task_id, project_id)
        println("  -> 200 assigned task \{task_id} to project \{project_id}")
      }
      @mocket.HttpResponse::new(OK).json(({ "ok": true } : Json))
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  // ---- Role management (admin only) ----
  .post("/api/users/:id/role", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/users/\{id_str}/role")
    try {
      let admin = match get_request_user(conn, event.req) {
        Some(u) => u
        None =>
          return @mocket.HttpResponse::new(Unauthorized).body(
            "Not logged in",
          )
      }
      if not(@shared.is_admin(admin.role)) {
        return @mocket.HttpResponse::new(Forbidden).body(
          "Only admins can change roles",
        )
      }
      let target_id = @strconv.parse_int(id_str)
      let json : Json = event.req.body()
      let role = match json {
        { "role": String(r), .. } =>
          if r == "admin" || r == "member" || r == "viewer" {
            r
          } else {
            return @mocket.HttpResponse::new(BadRequest).body("Invalid role")
          }
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing role")
      }
      set_user_role(conn, target_id, role)
      println("  -> 200 set user \{target_id} role to \{role}")
      @mocket.HttpResponse::new(OK).json(({ "ok": true } : Json))
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
