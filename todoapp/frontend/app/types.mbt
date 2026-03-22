///|
/// Application state for the todo list UI.
pub(all) struct Model {
  /// All todo items fetched from the server.
  todos : Array[@shared.Todo]
  /// Current text in the new-todo input field.
  input : String
  /// Whether a network request is in progress.
  loading : Bool
} derive(Debug)

///|
/// Messages that drive state transitions in the update loop.
pub(all) enum Msg {
  Init
  GotTodos(Result[Array[@shared.Todo], String])
  InputChanged(String)
  AddTodo
  TodoAdded(Result[@shared.Todo, String])
  ToggleTodo(Int)
  TodoToggled(Result[@shared.Todo, String])
  DeleteTodo(Int)
  TodoDeleted(Result[Int, String])
} derive(Debug)
