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

///|
/// `GET` — list subtasks for a task. `POST` — add a subtask.
pub fn api_task_subtasks(id : Int) -> String {
  "/api/tasks/\{id}/subtasks"
}

///|
/// `POST` — toggle a subtask's done state.
pub fn api_subtask_toggle(id : Int) -> String {
  "/api/subtasks/\{id}/toggle"
}

///|
/// `DELETE` — remove a subtask.
pub fn api_subtask(id : Int) -> String {
  "/api/subtasks/\{id}"
}

///|
/// `GET` — list time entries for a task. `POST` — log time.
pub fn api_task_time(id : Int) -> String {
  "/api/tasks/\{id}/time"
}

///|
/// `DELETE` — remove a time entry.
pub fn api_time_entry(id : Int) -> String {
  "/api/time/\{id}"
}

///|
/// `POST` — set recurrence for a task. `DELETE` — remove recurrence.
pub fn api_task_recurrence(id : Int) -> String {
  "/api/tasks/\{id}/recurrence"
}

///|
/// `POST` — add attachment to a task. `GET` — list attachments.
pub fn api_task_attachments(id : Int) -> String {
  "/api/tasks/\{id}/attachments"
}

///|
/// `DELETE` — remove an attachment.
pub fn api_attachment(id : Int) -> String {
  "/api/attachments/\{id}"
}

///|
/// `GET` — list all projects. `POST` — create a project.
pub let api_projects : String = "/api/projects"

///|
/// `DELETE` — remove a project.
pub fn api_project(id : Int) -> String {
  "/api/projects/\{id}"
}

///|
/// `POST` — assign a task to a project. `DELETE` — remove from project.
pub fn api_task_project(id : Int) -> String {
  "/api/tasks/\{id}/project"
}

///|
/// `POST` — change a user's role (admin only).
pub fn api_user_role(id : Int) -> String {
  "/api/users/\{id}/role"
}
