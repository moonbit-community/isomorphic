///|
/// Maximum character length for a task title.
pub let max_task_title : Int = 100

///|
/// Maximum character length for a task description.
pub let max_task_description : Int = 500

///|
/// Maximum number of tasks allowed.
pub let max_tasks : Int = 100

///|
/// Validate a task title: non-empty and at most `max_task_title` characters.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.validate_task_title("Fix bug"), content="true")
///   inspect(@shared.validate_task_title(""), content="false")
/// }
/// ```
pub fn validate_task_title(title : String) -> Bool {
  title != "" && title.char_length() <= max_task_title
}

///|
/// Validate a task description: at most `max_task_description` characters.
pub fn validate_task_description(desc : String) -> Bool {
  desc.char_length() <= max_task_description
}

///|
/// Check whether a status string is in the valid set.
pub fn validate_status(status : String) -> Bool {
  for s in valid_statuses {
    if s == status {
      return true
    }
  }
  false
}

///|
/// Check whether a priority string is in the valid set.
pub fn validate_priority(priority : String) -> Bool {
  for p in valid_priorities {
    if p == priority {
      return true
    }
  }
  false
}

///|
/// Validate a due date: empty (no deadline) or 10-character YYYY-MM-DD format.
pub fn validate_due_date(date : String) -> Bool {
  date == "" || date.char_length() == 10
}
