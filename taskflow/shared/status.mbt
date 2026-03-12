///|
/// All valid task status values.
pub let valid_statuses : Array[String] = [
  "todo", "in_progress", "review", "done", "blocked",
]

///|
/// Get the list of statuses a task can transition to from its current status.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(
///     @shared.allowed_transitions("todo"),
///     content="[\"in_progress\", \"blocked\"]",
///   )
///   inspect(@shared.allowed_transitions("done"), content="[\"todo\"]")
/// }
/// ```
pub fn allowed_transitions(status : String) -> Array[String] {
  match status {
    "todo" => ["in_progress", "blocked"]
    "in_progress" => ["review", "blocked", "todo"]
    "review" => ["done", "in_progress"]
    "blocked" => ["todo", "in_progress"]
    "done" => ["todo"]
    _ => []
  }
}

///|
/// Check whether a status transition is valid.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.is_valid_transition("todo", "in_progress"), content="true")
///   inspect(@shared.is_valid_transition("todo", "done"), content="false")
/// }
/// ```
pub fn is_valid_transition(from : String, to : String) -> Bool {
  let transitions = allowed_transitions(from)
  for t in transitions {
    if t == to {
      return true
    }
  }
  false
}

///|
/// Check whether a status is terminal (no further progress expected).
pub fn is_terminal(status : String) -> Bool {
  status == "done"
}

///|
/// Human-readable label for a status value.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.status_label("in_progress"), content="In Progress")
///   inspect(@shared.status_label("todo"), content="To Do")
/// }
/// ```
pub fn status_label(status : String) -> String {
  match status {
    "todo" => "To Do"
    "in_progress" => "In Progress"
    "review" => "Review"
    "done" => "Done"
    "blocked" => "Blocked"
    _ => status
  }
}

///|
/// CSS hex color for a status badge.
pub fn status_color(status : String) -> String {
  match status {
    "todo" => "#94a3b8"
    "in_progress" => "#3b82f6"
    "review" => "#eab308"
    "done" => "#22c55e"
    "blocked" => "#ef4444"
    _ => "#94a3b8"
  }
}

///|
/// Human-readable label for a status transition button.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.transition_label("todo", "in_progress"), content="Start")
///   inspect(@shared.transition_label("review", "done"), content="Approve")
/// }
/// ```
pub fn transition_label(from : String, to : String) -> String {
  match (from, to) {
    ("todo", "in_progress") => "Start"
    ("todo", "blocked") => "Block"
    ("in_progress", "review") => "Review"
    ("in_progress", "blocked") => "Block"
    ("in_progress", "todo") => "Pause"
    ("review", "done") => "Approve"
    ("review", "in_progress") => "Rework"
    ("blocked", "todo") => "Unblock"
    ("blocked", "in_progress") => "Resume"
    ("done", "todo") => "Reopen"
    _ => status_label(to)
  }
}
