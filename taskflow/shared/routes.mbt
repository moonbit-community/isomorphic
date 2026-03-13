///|
/// `POST` — register a new user.
pub let api_register : String = "/api/auth/register"

///|
/// `POST` — log in with username and password.
pub let api_login : String = "/api/auth/login"

///|
/// `POST` — log out (clear session cookie).
pub let api_logout : String = "/api/auth/logout"

///|
/// `GET` — get the current logged-in user from session cookie.
pub let api_me : String = "/api/auth/me"

///|
/// `GET` — fetch the full board (tasks + members + today).
pub let api_board : String = "/api/board"

///|
/// `POST` — create a new task.
pub let api_tasks : String = "/api/tasks"

///|
/// `POST` to update, `DELETE` to remove a task.
pub fn api_task(id : Int) -> String {
  "/api/tasks/\{id}"
}

///|
/// `POST` — change a task's status.
pub fn api_task_status(id : Int) -> String {
  "/api/tasks/\{id}/status"
}

///|
/// `GET` — list comments for a task. `POST` — add a comment.
pub fn api_task_comments(id : Int) -> String {
  "/api/tasks/\{id}/comments"
}

///|
/// `GET` — list dependencies for a task. `POST` — add a dependency.
pub fn api_task_deps(id : Int) -> String {
  "/api/tasks/\{id}/deps"
}

///|
/// `POST` — remove a dependency.
pub fn api_task_deps_remove(id : Int) -> String {
  "/api/tasks/\{id}/deps/remove"
}

///|
/// `GET` — list all team members.
pub let api_members : String = "/api/members"

///|
/// `GET` — export all tasks as JSON.
pub let api_export : String = "/api/export"

///|
/// `GET` — list all labels. `POST` — create a label.
pub let api_labels : String = "/api/labels"

///|
/// `GET` — list labels for a task. `POST` — add a label to a task.
pub fn api_task_labels(id : Int) -> String {
  "/api/tasks/\{id}/labels"
}

///|
/// `POST` — remove a label from a task.
pub fn api_task_labels_remove(id : Int) -> String {
  "/api/tasks/\{id}/labels/remove"
}
