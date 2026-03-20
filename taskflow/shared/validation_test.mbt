///|
test "validate_task_title" {
  inspect(@shared.validate_task_title("Fix bug"), content="true")
  inspect(@shared.validate_task_title(""), content="false")
  inspect(@shared.validate_task_title("x"), content="true")
}

///|
test "validate_task_title max length" {
  let long = "a".repeat(100)
  inspect(@shared.validate_task_title(long), content="true")
  let too_long = "a".repeat(101)
  inspect(@shared.validate_task_title(too_long), content="false")
}

///|
test "validate_task_description" {
  inspect(@shared.validate_task_description(""), content="true")
  inspect(@shared.validate_task_description("Some description"), content="true")
  let too_long = "a".repeat(501)
  inspect(@shared.validate_task_description(too_long), content="false")
}

///|
test "validate_status" {
  inspect(@shared.validate_status("todo"), content="true")
  inspect(@shared.validate_status("in_progress"), content="true")
  inspect(@shared.validate_status("review"), content="true")
  inspect(@shared.validate_status("done"), content="true")
  inspect(@shared.validate_status("blocked"), content="true")
  inspect(@shared.validate_status("invalid"), content="false")
  inspect(@shared.validate_status(""), content="false")
}

///|
test "validate_priority" {
  inspect(@shared.validate_priority("low"), content="true")
  inspect(@shared.validate_priority("medium"), content="true")
  inspect(@shared.validate_priority("high"), content="true")
  inspect(@shared.validate_priority("urgent"), content="true")
  inspect(@shared.validate_priority("critical"), content="false")
  inspect(@shared.validate_priority(""), content="false")
}

///|
test "validate_due_date" {
  inspect(@shared.validate_due_date(""), content="true")
  inspect(@shared.validate_due_date("2026-03-12"), content="true")
  inspect(@shared.validate_due_date("2026-3-12"), content="false")
  inspect(@shared.validate_due_date("March 12"), content="false")
  // Malformed dates
  inspect(@shared.validate_due_date("2026-99-99"), content="false")
  inspect(@shared.validate_due_date("2026-00-15"), content="false")
  inspect(@shared.validate_due_date("2026-13-01"), content="false")
  inspect(@shared.validate_due_date("2026-03-00"), content="false")
  inspect(@shared.validate_due_date("2026-03-32"), content="false")
  inspect(@shared.validate_due_date("abcd-ef-gh"), content="false")
  inspect(@shared.validate_due_date("2026/03/12"), content="false")
  // Edge cases
  inspect(@shared.validate_due_date("2026-01-01"), content="true")
  inspect(@shared.validate_due_date("2026-12-31"), content="true")
}

///|
test "validate_task_title edge cases" {
  // Single character is valid
  inspect(@shared.validate_task_title("x"), content="true")
  // Exactly at limit
  inspect(@shared.validate_task_title("a".repeat(100)), content="true")
  // One over limit
  inspect(@shared.validate_task_title("a".repeat(101)), content="false")
  // Whitespace-only title is technically valid (non-empty)
  inspect(@shared.validate_task_title(" "), content="true")
}

///|
test "validate_due_date edge dates" {
  // Leap day
  inspect(@shared.validate_due_date("2024-02-29"), content="true")
  // Month boundaries
  inspect(@shared.validate_due_date("2026-01-31"), content="true")
  inspect(@shared.validate_due_date("2026-06-30"), content="true")
  // Very far future
  inspect(@shared.validate_due_date("9999-12-31"), content="true")
  // Zero-padded correctly
  inspect(@shared.validate_due_date("2026-01-01"), content="true")
}

///|
test "validate_comment_text" {
  inspect(@shared.validate_comment_text("Looking good"), content="true")
  inspect(@shared.validate_comment_text(""), content="false")
  let long = "a".repeat(500)
  inspect(@shared.validate_comment_text(long), content="true")
  let too_long = "a".repeat(501)
  inspect(@shared.validate_comment_text(too_long), content="false")
}

///|
test "constants" {
  inspect(@shared.max_task_title, content="100")
  inspect(@shared.max_task_description, content="500")
  inspect(@shared.max_comment_text, content="500")
  inspect(@shared.max_tasks, content="100")
  inspect(@shared.min_username, content="3")
  inspect(@shared.max_username, content="30")
  inspect(@shared.min_password, content="4")
  inspect(@shared.max_password, content="100")
}

///|
test "validate_username" {
  // Valid usernames
  inspect(@shared.validate_username("alice"), content="true")
  inspect(@shared.validate_username("Bob"), content="true")
  inspect(@shared.validate_username("user_1"), content="true")
  inspect(@shared.validate_username("ABC"), content="true")
  inspect(@shared.validate_username("valid_user_1"), content="true")
  // Too short
  inspect(@shared.validate_username("ab"), content="false")
  inspect(@shared.validate_username(""), content="false")
  inspect(@shared.validate_username("x"), content="false")
  // Invalid characters
  inspect(@shared.validate_username("alice!"), content="false")
  inspect(@shared.validate_username("bob@work"), content="false")
  inspect(@shared.validate_username("has space"), content="false")
  inspect(@shared.validate_username("dot.name"), content="false")
  inspect(@shared.validate_username("dash-name"), content="false")
}

///|
test "validate_username max length" {
  let at_limit = "a".repeat(30)
  inspect(@shared.validate_username(at_limit), content="true")
  let over_limit = "a".repeat(31)
  inspect(@shared.validate_username(over_limit), content="false")
}

///|
test "validate_password" {
  // Valid passwords
  inspect(@shared.validate_password("pass"), content="true")
  inspect(@shared.validate_password("longpassword123"), content="true")
  inspect(@shared.validate_password("p@ss!"), content="true")
  // Too short
  inspect(@shared.validate_password("abc"), content="false")
  inspect(@shared.validate_password(""), content="false")
  inspect(@shared.validate_password("ab"), content="false")
}

///|
test "validate_password max length" {
  let at_limit = "a".repeat(100)
  inspect(@shared.validate_password(at_limit), content="true")
  let over_limit = "a".repeat(101)
  inspect(@shared.validate_password(over_limit), content="false")
}

///|
test "validate_username exact boundary" {
  // Exactly 3 chars (minimum)
  inspect(@shared.validate_username("abc"), content="true")
  inspect(@shared.validate_username("a_1"), content="true")
  // Exactly 2 chars (under minimum)
  inspect(@shared.validate_username("ab"), content="false")
}

///|
test "validate_username numeric and underscore" {
  // All digits
  inspect(@shared.validate_username("123"), content="true")
  // All underscores
  inspect(@shared.validate_username("___"), content="true")
  // Mixed case with underscore and digits
  inspect(@shared.validate_username("User_Name_42"), content="true")
}

///|
test "validate_username unicode rejected" {
  // Unicode characters are not alphanumeric ASCII
  inspect(@shared.validate_username("alice中文"), content="false")
  inspect(@shared.validate_username("böb"), content="false")
}

///|
test "validate_password exact boundary" {
  // Exactly 4 chars (minimum)
  inspect(@shared.validate_password("abcd"), content="true")
  // Exactly 3 chars (under minimum)
  inspect(@shared.validate_password("abc"), content="false")
}

///|
test "validate_password special characters" {
  // Passwords allow any characters
  inspect(@shared.validate_password("p@$$"), content="true")
  inspect(@shared.validate_password("中文密码"), content="true")
  inspect(@shared.validate_password("    "), content="true")
}

///|
test "validate_due_date month-day limits" {
  // Validator checks format (YYYY-MM-DD) and ranges (month 01-12, day 01-31).
  // It does NOT enforce per-month day limits (e.g., Feb 30 passes).
  // This documents the current behavior as a known simplification.
  inspect(@shared.validate_due_date("2026-02-30"), content="true") // Feb 30 accepted
  inspect(@shared.validate_due_date("2026-04-31"), content="true") // Apr 31 accepted
  inspect(@shared.validate_due_date("2025-02-29"), content="true") // Non-leap Feb 29 accepted
  // But day 32+ and day 00 are rejected
  inspect(@shared.validate_due_date("2026-02-32"), content="false")
  inspect(@shared.validate_due_date("2026-02-00"), content="false")
}

///|
test "validate_due_date short and long strings" {
  inspect(@shared.validate_due_date("2026-03"), content="false") // too short
  inspect(@shared.validate_due_date("2026-03-12X"), content="false") // too long
  inspect(@shared.validate_due_date("20260312"), content="false") // no separators
  inspect(@shared.validate_due_date("26-03-12"), content="false") // 2-digit year
}

///|
test "validate_comment_text unicode" {
  // Comments support any characters (like passwords)
  inspect(@shared.validate_comment_text("中文评论"), content="true")
  inspect(@shared.validate_comment_text("Ñoño"), content="true")
  inspect(@shared.validate_comment_text("emoji 🎉"), content="true")
}

///|
test "validate_comment_text boundary" {
  inspect(@shared.validate_comment_text("x"), content="true") // min: 1 char
  inspect(@shared.validate_comment_text("a".repeat(500)), content="true") // at limit
  inspect(@shared.validate_comment_text("a".repeat(501)), content="false") // over limit
}

///|
test "validate_task_description boundary" {
  inspect(@shared.validate_task_description("a".repeat(500)), content="true")
  inspect(@shared.validate_task_description("a".repeat(501)), content="false")
}

///|
test "validate_task_title unicode" {
  inspect(@shared.validate_task_title("修复登录错误"), content="true")
  inspect(@shared.validate_task_title("タスク"), content="true")
}

///|
test "validate_status case sensitive" {
  // Status values are exact strings, case-sensitive
  inspect(@shared.validate_status("Todo"), content="false")
  inspect(@shared.validate_status("IN_PROGRESS"), content="false")
  inspect(@shared.validate_status("Done"), content="false")
}

///|
test "validate_priority case sensitive" {
  inspect(@shared.validate_priority("Low"), content="false")
  inspect(@shared.validate_priority("HIGH"), content="false")
  inspect(@shared.validate_priority("Urgent"), content="false")
}

///|
test "validate_username leading trailing underscore" {
  inspect(@shared.validate_username("_abc"), content="true")
  inspect(@shared.validate_username("abc_"), content="true")
  inspect(@shared.validate_username("__a"), content="true")
}

///|
test "validate_recurrence" {
  inspect(@shared.validate_recurrence("daily"), content="true")
  inspect(@shared.validate_recurrence("weekly"), content="true")
  inspect(@shared.validate_recurrence("monthly"), content="true")
  inspect(@shared.validate_recurrence("yearly"), content="false")
  inspect(@shared.validate_recurrence(""), content="false")
}

///|
test "validate_time_minutes" {
  inspect(@shared.validate_time_minutes(1), content="true")
  inspect(@shared.validate_time_minutes(30), content="true")
  inspect(@shared.validate_time_minutes(1440), content="true")
  inspect(@shared.validate_time_minutes(0), content="false")
  inspect(@shared.validate_time_minutes(-1), content="false")
  inspect(@shared.validate_time_minutes(1441), content="false")
}

///|
test "validate_attachment_url" {
  inspect(
    @shared.validate_attachment_url("https://example.com"),
    content="true",
  )
  inspect(
    @shared.validate_attachment_url("http://localhost:4000"),
    content="true",
  )
  inspect(
    @shared.validate_attachment_url("https://a.com/path?q=1"),
    content="true",
  )
  inspect(@shared.validate_attachment_url(""), content="false")
  inspect(@shared.validate_attachment_url("ftp://bad.com"), content="false")
  inspect(@shared.validate_attachment_url("not-a-url"), content="false")
  inspect(
    @shared.validate_attachment_url("javascript:alert(1)"),
    content="false",
  )
}

///|
test "validate_project_name" {
  inspect(@shared.validate_project_name("My Project"), content="true")
  inspect(@shared.validate_project_name("X"), content="true")
  inspect(@shared.validate_project_name(""), content="false")
  let at_limit = "a".repeat(50)
  inspect(@shared.validate_project_name(at_limit), content="true")
  let over_limit = "a".repeat(51)
  inspect(@shared.validate_project_name(over_limit), content="false")
}

///|
test "constants include project" {
  inspect(@shared.max_project_name, content="50")
}
