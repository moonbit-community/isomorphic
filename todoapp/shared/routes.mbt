///|
/// API endpoint for the to-do list.
pub let api_todos : String = "/api/todos"

///|
/// Build API path for a single to-do by id.
pub fn api_todo(id : Int) -> String {
  "/api/todos/\{id}"
}

///|
/// Build API path to toggle a to-do's done status.
pub fn api_todo_toggle(id : Int) -> String {
  "/api/todos/\{id}/toggle"
}
