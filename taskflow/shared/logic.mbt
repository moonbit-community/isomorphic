///|
/// All valid priority values, in order from lowest to highest.
pub let valid_priorities : Array[String] = ["low", "medium", "high", "urgent"]

///|
/// Numeric weight for sorting: lower number = higher priority.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.priority_weight("urgent"), content="0")
///   inspect(@shared.priority_weight("low"), content="3")
/// }
/// ```
pub fn priority_weight(priority : String) -> Int {
  match priority {
    "urgent" => 0
    "high" => 1
    "medium" => 2
    "low" => 3
    _ => 4
  }
}

///|
/// Human-readable label for a priority value.
pub fn priority_label(priority : String) -> String {
  match priority {
    "low" => "Low"
    "medium" => "Medium"
    "high" => "High"
    "urgent" => "Urgent"
    _ => priority
  }
}

///|
/// CSS hex color for a priority badge.
pub fn priority_color(priority : String) -> String {
  match priority {
    "low" => "#94a3b8"
    "medium" => "#3b82f6"
    "high" => "#f97316"
    "urgent" => "#ef4444"
    _ => "#94a3b8"
  }
}

///|
/// CSS hex color for a member avatar.
pub fn member_color(color : String) -> String {
  match color {
    "red" => "#ef4444"
    "orange" => "#f97316"
    "yellow" => "#eab308"
    "green" => "#22c55e"
    "blue" => "#3b82f6"
    "purple" => "#a855f7"
    _ => "#94a3b8"
  }
}

///|
/// First character of a member name, for avatar display.
pub fn member_initial(name : String) -> String {
  match name.get_char(0) {
    Some(ch) => "\{ch}"
    None => "?"
  }
}

///|
/// Check if a task is overdue: has a due date before today.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.is_overdue("2026-03-01", "2026-03-12"), content="true")
///   inspect(@shared.is_overdue("2026-03-15", "2026-03-12"), content="false")
///   inspect(@shared.is_overdue("", "2026-03-12"), content="false")
/// }
/// ```
pub fn is_overdue(due_date : String, today : String) -> Bool {
  due_date != "" && due_date < today
}

///|
/// Human-readable urgency label based on due date relative to today.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.urgency_label("2026-03-01", "2026-03-12"), content="Overdue")
///   inspect(
///     @shared.urgency_label("2026-03-12", "2026-03-12"),
///     content="Due today",
///   )
///   inspect(@shared.urgency_label("2026-03-15", "2026-03-12"), content="Upcoming")
///   inspect(@shared.urgency_label("", "2026-03-12"), content="No deadline")
/// }
/// ```
pub fn urgency_label(due_date : String, today : String) -> String {
  if due_date == "" {
    return "No deadline"
  }
  if due_date < today {
    return "Overdue"
  }
  if due_date == today {
    return "Due today"
  }
  "Upcoming"
}

///|
/// Percentage of tasks in "done" status. Returns 0 for an empty list.
///
/// # Example
///
/// ```mbt check
/// test {
///   let tasks : Array[@shared.Task] = [
///     {
///       id: 1,
///       title: "A",
///       description: "",
///       status: "done",
///       priority: "low",
///       assignee_id: 0,
///       due_date: "",
///       created_at: "",
///     },
///     {
///       id: 2,
///       title: "B",
///       description: "",
///       status: "todo",
///       priority: "low",
///       assignee_id: 0,
///       due_date: "",
///       created_at: "",
///     },
///   ]
///   inspect(@shared.completion_percent(tasks), content="50")
/// }
/// ```
pub fn completion_percent(tasks : Array[Task]) -> Int {
  let total = tasks.length()
  if total == 0 {
    return 0
  }
  count_by_status(tasks, "done") * 100 / total
}

///|
/// Count tasks matching a given status.
pub fn count_by_status(tasks : Array[Task], status : String) -> Int {
  let mut count = 0
  for t in tasks {
    if t.status == status {
      count += 1
    }
  }
  count
}

///|
/// Filter tasks assigned to a specific member.
pub fn tasks_for_member(tasks : Array[Task], member_id : Int) -> Array[Task] {
  tasks.filter(fn(t) { t.assignee_id == member_id })
}

///|
/// Find a member by ID. Returns None if not found.
pub fn find_member(members : Array[Member], id : Int) -> Member? {
  for m in members {
    if m.id == id {
      return Some(m)
    }
  }
  None
}

///|
/// Sort tasks by priority (urgent first), then due date (earliest first,
/// no-deadline last), then by ID for stability.
pub fn sort_tasks(tasks : Array[Task]) -> Array[Task] {
  let result = tasks.copy()
  result.sort_by(fn(a, b) {
    let pa = priority_weight(a.priority)
    let pb = priority_weight(b.priority)
    if pa != pb {
      return pa - pb
    }
    let da = a.due_date
    let db = b.due_date
    if da == "" && db == "" {
      return a.id - b.id
    }
    if da == "" {
      return 1
    }
    if db == "" {
      return -1
    }
    let dc = da.compare(db)
    if dc != 0 {
      return dc
    }
    a.id - b.id
  })
  result
}

///|
/// Filter tasks by status, assignee, and priority.
/// Empty string or 0 means "all" (no filter).
pub fn filter_tasks(
  tasks : Array[Task],
  status : String,
  assignee_id : Int,
  priority : String,
) -> Array[Task] {
  tasks.filter(fn(t) {
    (status == "" || t.status == status) &&
    (assignee_id == 0 || t.assignee_id == assignee_id) &&
    (priority == "" || t.priority == priority)
  })
}
