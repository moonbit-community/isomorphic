///|
/// Minimum character length for a username.
pub let min_username : Int = 3

///|
/// Maximum character length for a username.
pub let max_username : Int = 30

///|
/// Minimum character length for a password.
pub let min_password : Int = 4

///|
/// Maximum character length for a password.
pub let max_password : Int = 100

///|
/// Validate a username: alphanumeric and underscore only, within length limits.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.validate_username("alice"), content="true")
///   inspect(@shared.validate_username("ab"), content="false")
///   inspect(@shared.validate_username(""), content="false")
///   inspect(@shared.validate_username("valid_user_1"), content="true")
/// }
/// ```
pub fn validate_username(name : String) -> Bool {
  let len = name.char_length()
  if len < min_username || len > max_username {
    return false
  }
  for c in name {
    if !((c >= 'a' && c <= 'z') ||
      (c >= 'A' && c <= 'Z') ||
      (c >= '0' && c <= '9') ||
      c == '_') {
      return false
    }
  }
  true
}

///|
/// Validate a password: within length limits, non-empty.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.validate_password("pass"), content="true")
///   inspect(@shared.validate_password("ab"), content="false")
///   inspect(@shared.validate_password(""), content="false")
/// }
/// ```
pub fn validate_password(pass : String) -> Bool {
  let len = pass.char_length()
  len >= min_password && len <= max_password
}

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
///
/// # Example
///
/// ```
/// assert_true(@shared.validate_status("todo"))
/// assert_true(@shared.validate_status("done"))
/// assert_false(@shared.validate_status("invalid"))
/// ```
pub fn validate_status(status : String) -> Bool {
  valid_statuses.contains(status)
}

///|
/// Check whether a priority string is in the valid set.
///
/// # Example
///
/// ```
/// assert_true(@shared.validate_priority("high"))
/// assert_false(@shared.validate_priority("critical"))
/// ```
pub fn validate_priority(priority : String) -> Bool {
  valid_priorities.contains(priority)
}

///|
/// Validate comment text: non-empty and within max length.
///
/// # Example
///
/// ```
/// assert_true(@shared.validate_comment_text("Looking good"))
/// assert_false(@shared.validate_comment_text(""))
/// ```
pub fn validate_comment_text(text : String) -> Bool {
  text != "" && text.char_length() <= max_comment_text
}

///|
/// Validate a due date: empty (no deadline) or valid YYYY-MM-DD format
/// with numeric year, month (01-12), and day (01-31).
///
/// # Example
///
/// ```
/// assert_true(@shared.validate_due_date(""))
/// assert_true(@shared.validate_due_date("2026-03-12"))
/// assert_false(@shared.validate_due_date("March 12"))
/// ```
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

///|
/// Validate a recurrence interval: must be one of the valid intervals.
///
/// # Example
///
/// ```
/// assert_true(@shared.validate_recurrence("daily"))
/// assert_true(@shared.validate_recurrence("weekly"))
/// assert_true(@shared.validate_recurrence("monthly"))
/// assert_false(@shared.validate_recurrence("yearly"))
/// assert_false(@shared.validate_recurrence(""))
/// ```
pub fn validate_recurrence(interval : String) -> Bool {
  for r in recurrence_intervals {
    if r == interval {
      return true
    }
  }
  false
}

///|
/// Validate time entry minutes: must be a positive integer (1–1440).
///
/// # Example
///
/// ```
/// assert_true(@shared.validate_time_minutes(30))
/// assert_true(@shared.validate_time_minutes(1))
/// assert_false(@shared.validate_time_minutes(0))
/// assert_false(@shared.validate_time_minutes(-5))
/// assert_false(@shared.validate_time_minutes(1441))
/// ```
pub fn validate_time_minutes(minutes : Int) -> Bool {
  minutes >= 1 && minutes <= 1440
}

///|
/// Validate an attachment URL: non-empty, starts with http:// or https://.
///
/// # Example
///
/// ```
/// assert_true(@shared.validate_attachment_url("https://example.com"))
/// assert_true(@shared.validate_attachment_url("http://localhost:4000"))
/// assert_false(@shared.validate_attachment_url(""))
/// assert_false(@shared.validate_attachment_url("ftp://bad.com"))
/// assert_false(@shared.validate_attachment_url("not-a-url"))
/// ```
pub fn validate_attachment_url(url : String) -> Bool {
  url.has_prefix("https://") || url.has_prefix("http://")
}

///|
/// Maximum character length for a project name.
pub let max_project_name : Int = 50

///|
/// Validate a project name: non-empty and within max length.
///
/// # Example
///
/// ```
/// assert_true(@shared.validate_project_name("My Project"))
/// assert_false(@shared.validate_project_name(""))
/// ```
pub fn validate_project_name(name : String) -> Bool {
  name != "" && name.char_length() <= max_project_name
}
