///|
fn noop_dispatch(_msg : Msg) -> @rabbita.Cmd {
  @rabbita.none
}

///|
fn empty_model() -> Model {
  { todos: [], input: "", loading: false }
}

///|
fn sample_todos() -> Array[@shared.Todo] {
  [
    { id: 1, text: "Buy milk", done: false },
    { id: 2, text: "Write tests", done: true },
    { id: 3, text: "Ship feature", done: false },
  ]
}

// ── Init ─────────────────────────────────────────────────────────────

///|
test "Init sets loading to true" {
  let (_, model) = update(noop_dispatch, Init, empty_model())
  inspect(model.loading, content="true")
}

// ── GotTodos ─────────────────────────────────────────────────────────

///|
test "GotTodos/Ok populates todos and clears loading" {
  let initial = { ..empty_model(), loading: true }
  let todos = sample_todos()
  let (_, model) = update(noop_dispatch, GotTodos(Ok(todos)), initial)
  inspect(model.todos.length(), content="3")
  inspect(model.loading, content="false")
}

///|
test "GotTodos/Err clears loading without changing todos" {
  let initial = { ..empty_model(), loading: true }
  let (_, model) = update(noop_dispatch, GotTodos(Err("network")), initial)
  inspect(model.todos.length(), content="0")
  inspect(model.loading, content="false")
}

// ── InputChanged ─────────────────────────────────────────────────────

///|
test "InputChanged updates input field" {
  let (_, model) = update(noop_dispatch, InputChanged("hello"), empty_model())
  inspect(model.input, content="hello")
}

///|
test "InputChanged preserves todos" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let (_, model) = update(noop_dispatch, InputChanged("x"), initial)
  inspect(model.todos.length(), content="3")
}

// ── AddTodo ──────────────────────────────────────────────────────────

///|
test "AddTodo with empty input does nothing" {
  let initial = { ..empty_model(), input: "" }
  let (_, model) = update(noop_dispatch, AddTodo, initial)
  inspect(model.input, content="")
  inspect(model.todos.length(), content="0")
}

///|
test "AddTodo with valid input clears input" {
  let initial = { ..empty_model(), input: "New todo" }
  let (_, model) = update(noop_dispatch, AddTodo, initial)
  inspect(model.input, content="")
}

///|
test "AddTodo with too-long input does nothing" {
  let long = "a".repeat(@shared.max_todo_length + 1)
  let initial = { ..empty_model(), input: long }
  let (_, model) = update(noop_dispatch, AddTodo, initial)
  inspect(model.input, content=long)
}

// ── TodoAdded ────────────────────────────────────────────────────────

///|
test "TodoAdded/Ok appends to list" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let new_todo : @shared.Todo = { id: 4, text: "New", done: false }
  let (_, model) = update(noop_dispatch, TodoAdded(Ok(new_todo)), initial)
  inspect(model.todos.length(), content="4")
  inspect(model.todos[3].text, content="New")
}

///|
test "TodoAdded/Err leaves model unchanged" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let (_, model) = update(noop_dispatch, TodoAdded(Err("fail")), initial)
  inspect(model.todos.length(), content="3")
}

// ── TodoToggled ──────────────────────────────────────────────────────

///|
test "TodoToggled/Ok replaces matching todo" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let toggled : @shared.Todo = { id: 1, text: "Buy milk", done: true }
  let (_, model) = update(noop_dispatch, TodoToggled(Ok(toggled)), initial)
  inspect(model.todos[0].done, content="true")
  // Others unchanged
  inspect(model.todos[1].done, content="true")
  inspect(model.todos[2].done, content="false")
}

///|
test "TodoToggled/Err leaves model unchanged" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let (_, model) = update(noop_dispatch, TodoToggled(Err("fail")), initial)
  inspect(model.todos[0].done, content="false")
}

// ── TodoDeleted ──────────────────────────────────────────────────────

///|
test "TodoDeleted/Ok removes the todo" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let (_, model) = update(noop_dispatch, TodoDeleted(Ok(1)), initial)
  inspect(model.todos.length(), content="2")
  inspect(model.todos[0].id, content="2")
}

///|
test "TodoDeleted/Ok with nonexistent id is no-op" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let (_, model) = update(noop_dispatch, TodoDeleted(Ok(999)), initial)
  inspect(model.todos.length(), content="3")
}

///|
test "TodoDeleted/Err leaves model unchanged" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let (_, model) = update(noop_dispatch, TodoDeleted(Err("fail")), initial)
  inspect(model.todos.length(), content="3")
}
