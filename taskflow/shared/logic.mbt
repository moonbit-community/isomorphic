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
/// All available sort criteria.
pub let sort_options : Array[String] = [
  "priority", "due_date", "title", "created_at",
]

///|
/// Human-readable label for a sort option.
pub fn sort_label(sort_by : String) -> String {
  match sort_by {
    "priority" => "Priority"
    "due_date" => "Due Date"
    "title" => "Title"
    "created_at" => "Created"
    _ => sort_by
  }
}

///|
/// Sort tasks by the given criterion and direction. Falls back to ID for stability.
///
/// # Example
///
/// ```mbt check
/// test {
///   let tasks : Array[@shared.Task] = [
///     {
///       id: 1, title: "B", description: "", status: "todo",
///       priority: "low", assignee_id: 0, due_date: "", created_at: "2026-03-01",
///     },
///     {
///       id: 2, title: "A", description: "", status: "todo",
///       priority: "high", assignee_id: 0, due_date: "", created_at: "2026-03-02",
///     },
///   ]
///   let by_title = @shared.sort_tasks_by(tasks, "title", true)
///   inspect(by_title[0].title, content="A")
///   let by_title_desc = @shared.sort_tasks_by(tasks, "title", false)
///   inspect(by_title_desc[0].title, content="B")
///   let by_created = @shared.sort_tasks_by(tasks, "created_at", false)
///   inspect(by_created[0].id, content="2")
/// }
/// ```
pub fn sort_tasks_by(
  tasks : Array[Task],
  sort_by : String,
  ascending : Bool,
) -> Array[Task] {
  let result = tasks.copy()
  result.sort_by(fn(a, b) {
    let cmp = match sort_by {
      "title" => a.title.to_lower().compare(b.title.to_lower())
      "due_date" => {
        if a.due_date == "" && b.due_date == "" {
          0
        } else if a.due_date == "" {
          1
        } else if b.due_date == "" {
          -1
        } else {
          a.due_date.compare(b.due_date)
        }
      }
      "created_at" => a.created_at.compare(b.created_at)
      _ => {
        // Default: priority
        let pa = priority_weight(a.priority)
        let pb = priority_weight(b.priority)
        if pa != pb {
          pa - pb
        } else if a.due_date == "" && b.due_date == "" {
          0
        } else if a.due_date == "" {
          1
        } else if b.due_date == "" {
          -1
        } else {
          a.due_date.compare(b.due_date)
        }
      }
    }
    let directed = if ascending { cmp } else { -cmp }
    if directed != 0 { directed } else { a.id - b.id }
  })
  result
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
/// Format an activity entry as a human-readable string.
///
/// # Example
///
/// ```mbt check
/// test {
///   let act : @shared.Activity = {
///     id: 1,
///     task_id: 1,
///     task_title: "Fix bug",
///     from_status: "todo",
///     to_status: "in_progress",
///     timestamp: "2026-03-12 10:30",
///     user_name: "Alice",
///   }
///   inspect(
///     @shared.format_activity(act),
///     content="Alice: Fix bug: To Do → In Progress",
///   )
/// }
/// ```
pub fn format_activity(act : Activity) -> String {
  let from = status_label(act.from_status)
  let to = status_label(act.to_status)
  if act.user_name != "" {
    "\{act.user_name}: \{act.task_title}: \{from} → \{to}"
  } else {
    "\{act.task_title}: \{from} → \{to}"
  }
}

///|
/// Get the N most recent activities (assumes activities are in descending order).
pub fn recent_activities(
  activities : Array[Activity],
  limit : Int,
) -> Array[Activity] {
  let result : Array[Activity] = []
  for i, act in activities {
    if i >= limit {
      break
    }
    result.push(act)
  }
  result
}

///|
/// Filter activities for a specific task.
///
/// # Example
///
/// ```mbt check
/// test {
///   let acts : Array[@shared.Activity] = [
///     {
///       id: 1, task_id: 1, task_title: "A", from_status: "todo",
///       to_status: "in_progress", timestamp: "2026-03-12", user_name: "Alice",
///     },
///     {
///       id: 2, task_id: 2, task_title: "B", from_status: "todo",
///       to_status: "done", timestamp: "2026-03-12", user_name: "Bob",
///     },
///     {
///       id: 3, task_id: 1, task_title: "A", from_status: "in_progress",
///       to_status: "review", timestamp: "2026-03-13", user_name: "Alice",
///     },
///   ]
///   let result = @shared.activities_for_task(acts, 1)
///   inspect(result.length(), content="2")
///   inspect(result[0].to_status, content="in_progress")
///   inspect(result[1].to_status, content="review")
/// }
/// ```
pub fn activities_for_task(
  activities : Array[Activity],
  task_id : Int,
) -> Array[Activity] {
  activities.filter(fn(a) { a.task_id == task_id })
}

///|
/// Check if a task matches an urgency filter.
/// Values: "" (all), "overdue", "due_today", "has_deadline", "no_deadline".
///
/// # Example
///
/// ```mbt check
/// test {
///   let task : @shared.Task = {
///     id: 1,
///     title: "A",
///     description: "",
///     status: "todo",
///     priority: "low",
///     assignee_id: 0,
///     due_date: "2026-03-10",
///     created_at: "",
///   }
///   inspect(@shared.matches_urgency(task, "", "2026-03-12"), content="true")
///   inspect(
///     @shared.matches_urgency(task, "overdue", "2026-03-12"),
///     content="true",
///   )
///   inspect(
///     @shared.matches_urgency(task, "due_today", "2026-03-12"),
///     content="false",
///   )
/// }
/// ```
pub fn matches_urgency(task : Task, urgency : String, today : String) -> Bool {
  match urgency {
    "" => true
    "overdue" => is_overdue(task.due_date, today)
    "due_today" => task.due_date == today
    "has_deadline" => task.due_date != ""
    "no_deadline" => task.due_date == ""
    _ => true
  }
}

///|
/// Check if a task matches a search query (case-insensitive, matches title
/// or description). Empty query matches everything.
///
/// # Example
///
/// ```mbt check
/// test {
///   let task : @shared.Task = {
///     id: 1,
///     title: "Fix Login Bug",
///     description: "OAuth2 flow broken",
///     status: "todo",
///     priority: "high",
///     assignee_id: 1,
///     due_date: "",
///     created_at: "",
///   }
///   inspect(@shared.search_matches(task, ""), content="true")
///   inspect(@shared.search_matches(task, "login"), content="true")
///   inspect(@shared.search_matches(task, "LOGIN"), content="true")
///   inspect(@shared.search_matches(task, "oauth"), content="true")
///   inspect(@shared.search_matches(task, "missing"), content="false")
/// }
/// ```
pub fn search_matches(task : Task, query : String) -> Bool {
  if query == "" {
    return true
  }
  let q = query.to_lower()
  task.title.to_lower().contains(q) || task.description.to_lower().contains(q)
}

///|
/// Get the dependency IDs (tasks that a given task depends on).
pub fn get_dependencies(deps : Array[Dependency], task_id : Int) -> Array[Int] {
  let result : Array[Int] = []
  for d in deps {
    if d.task_id == task_id {
      result.push(d.depends_on_id)
    }
  }
  result
}

///|
/// Check if a task has unresolved dependencies (depends on non-done tasks).
pub fn has_unresolved_deps(
  deps : Array[Dependency],
  tasks : Array[Task],
  task_id : Int,
) -> Bool {
  let dep_ids = get_dependencies(deps, task_id)
  for id in dep_ids {
    for t in tasks {
      if t.id == id && t.status != "done" {
        return true
      }
    }
  }
  false
}

///|
/// Filter tasks by status, assignee, priority, and text search query.
/// Empty string or 0 means "all" (no filter).
pub fn filter_tasks(
  tasks : Array[Task],
  status : String,
  assignee_id : Int,
  priority : String,
  query? : String = "",
  urgency? : String = "",
  today? : String = "",
) -> Array[Task] {
  tasks.filter(fn(t) {
    (status == "" || t.status == status) &&
    (assignee_id == 0 || t.assignee_id == assignee_id) &&
    (priority == "" || t.priority == priority) &&
    search_matches(t, query) &&
    matches_urgency(t, urgency, today)
  })
}
