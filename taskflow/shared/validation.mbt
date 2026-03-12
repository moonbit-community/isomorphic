///|
/// Maximum character length for a task title.
pub let max_task_title : Int = 100

///|
/// Maximum character length for a task description.
pub let max_task_description : Int = 500

///|
/// Maximum character length for a comment.
pub let max_comment_text : Int = 500

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
/// Validate comment text: non-empty and within max length.
pub fn validate_comment_text(text : String) -> Bool {
  text != "" && text.char_length() <= max_comment_text
}

///|
/// Validate a due date: empty (no deadline) or valid YYYY-MM-DD format
/// with numeric year, month (01-12), and day (01-31).
pub fn validate_due_date(date : String) -> Bool {
  if date == "" {
    return true
  }
  if date.char_length() != 10 {
    return false
  }
  // Check separators: YYYY-MM-DD
  if date.get_char(4) != Some('-') || date.get_char(7) != Some('-') {
    return false
  }
  // Check all other positions are digits
  for i, c in date {
    if i == 4 || i == 7 {
      continue
    }
    if c < '0' || c > '9' {
      return false
    }
  }
  // Validate month range 01-12
  let m1 = date[5].to_int() - '0'.to_int()
  let m2 = date[6].to_int() - '0'.to_int()
  let month = m1 * 10 + m2
  if month < 1 || month > 12 {
    return false
  }
  // Validate day range 01-31
  let d1 = date[8].to_int() - '0'.to_int()
  let d2 = date[9].to_int() - '0'.to_int()
  let day = d1 * 10 + d2
  day >= 1 && day <= 31
}
