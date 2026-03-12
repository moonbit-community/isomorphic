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
/// `GET` — list all team members.
pub let api_members : String = "/api/members"
