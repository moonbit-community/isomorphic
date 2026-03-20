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
      ("bug", "#ef4444"),
      ("feature", "#3b82f6"),
      ("docs", "#22c55e"),
      ("urgent", "#f97316"),
      ("design", "#a855f7"),
      ("test", "#eab308"),
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
  let stmt = conn.prepare("INSERT INTO labels (name, color) VALUES (?, ?)")
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
  let stmt = conn.prepare("DELETE FROM recurrence_rules WHERE task_id = ?")
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
      println(
        "  Recurring task: created new task \{new_task.id} from \{task_id}",
      )
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
  let stmt = conn.prepare(
    "SELECT id, name, color FROM projects ORDER BY id ASC",
  )
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
  {
    tasks,
    members,
    activities,
    dependencies,
    labels,
    task_labels,
    subtasks,
    time_entries,
    recurrence_rules,
    attachments,
    projects,
    task_projects,
    today,
  }
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
