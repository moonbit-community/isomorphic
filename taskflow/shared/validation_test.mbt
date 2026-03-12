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
}

///|
test "constants" {
  inspect(@shared.max_task_title, content="100")
  inspect(@shared.max_task_description, content="500")
  inspect(@shared.max_tasks, content="100")
}
