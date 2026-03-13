///|
/// Application state for the todo list UI.
///
/// Follows the Elm architecture (Model-Update-View) via Rabbita.
/// The model is immutable from the framework's perspective — each `update`
/// returns a new copy with the relevant fields changed.
struct Model {
  todos : Array[@shared.Todo]
  input : String
  loading : Bool
}

///|
/// Messages that drive state transitions in the update loop.
///
/// Each user action or async HTTP response is represented as a `Msg` variant.
/// Naming convention: imperative verbs (`AddTodo`, `ToggleTodo`) are user-initiated
/// actions that fire HTTP requests; past-tense variants (`TodoAdded`, `TodoToggled`)
/// carry the async result back from the server.
enum Msg {
  /// Fired once on app startup to kick off the initial fetch.
  Init
  /// Response from `GET /api/todos`.
  GotTodos(Result[Array[@shared.Todo], String])
  /// Text input value changed.
  InputChanged(String)
  /// User submitted the add-todo form.
  AddTodo
  /// Response from `POST /api/todos`.
  TodoAdded(Result[@shared.Todo, String])
  /// User clicked a todo's checkbox.
  ToggleTodo(Int)
  /// Response from `POST /api/todos/:id/toggle`.
  TodoToggled(Result[@shared.Todo, String])
  /// User clicked a todo's delete button.
  DeleteTodo(Int)
  /// Response from `DELETE /api/todos/:id`.
  TodoDeleted(Result[Int, String])
}
