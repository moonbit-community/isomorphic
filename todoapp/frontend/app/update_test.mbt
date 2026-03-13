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
  let (model, _) = empty_model().update(msg=Init, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{ todos: [], input: "", loading: true }
    ),
  )
}

// ── GotTodos ─────────────────────────────────────────────────────────

///|
test "GotTodos/Ok populates todos and clears loading" {
  let initial = { ..empty_model(), loading: true }
  let todos = sample_todos()
  let (model, _) = initial.update(
    msg=GotTodos(Ok(todos)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  todos: [
      #|    { id: 1, text: "Buy milk", done: false },
      #|    { id: 2, text: "Write tests", done: true },
      #|    { id: 3, text: "Ship feature", done: false },
      #|  ],
      #|  input: "",
      #|  loading: false,
      #|}

    ),
  )
}

///|
test "GotTodos/Err clears loading without changing todos" {
  let initial = { ..empty_model(), loading: true }
  let (model, _) = initial.update(
    msg=GotTodos(Err("network")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{ todos: [], input: "", loading: false }
    ),
  )
}

// ── InputChanged ─────────────────────────────────────────────────────

///|
test "InputChanged updates input field" {
  let (model, _) = empty_model().update(
    msg=InputChanged("hello"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{ todos: [], input: "hello", loading: false }
    ),
  )
}

///|
test "InputChanged preserves todos" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let (model, _) = initial.update(
    msg=InputChanged("x"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  todos: [
      #|    { id: 1, text: "Buy milk", done: false },
      #|    { id: 2, text: "Write tests", done: true },
      #|    { id: 3, text: "Ship feature", done: false },
      #|  ],
      #|  input: "x",
      #|  loading: false,
      #|}

    ),
  )
}

// ── AddTodo ──────────────────────────────────────────────────────────

///|
test "AddTodo with empty input does nothing" {
  let initial = { ..empty_model(), input: "" }
  let (model, _) = initial.update(msg=AddTodo, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{ todos: [], input: "", loading: false }
    ),
  )
}

///|
test "AddTodo with valid input clears input" {
  let initial = { ..empty_model(), input: "New todo" }
  let (model, _) = initial.update(msg=AddTodo, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{ todos: [], input: "", loading: false }
    ),
  )
}

///|
test "AddTodo with too-long input does nothing" {
  let long = "a".repeat(@shared.max_todo_length + 1)
  let initial = { ..empty_model(), input: long }
  let (model, _) = initial.update(msg=AddTodo, dispatch=noop_dispatch)
  inspect(model.input, content=long)
}

// ── TodoAdded ────────────────────────────────────────────────────────

///|
test "TodoAdded/Ok appends to list" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let new_todo : @shared.Todo = { id: 4, text: "New", done: false }
  let (model, _) = initial.update(
    msg=TodoAdded(Ok(new_todo)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  todos: [
      #|    { id: 1, text: "Buy milk", done: false },
      #|    { id: 2, text: "Write tests", done: true },
      #|    { id: 3, text: "Ship feature", done: false },
      #|    { id: 4, text: "New", done: false },
      #|  ],
      #|  input: "",
      #|  loading: false,
      #|}

    ),
  )
}

///|
test "TodoAdded/Err leaves model unchanged" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let (model, _) = initial.update(
    msg=TodoAdded(Err("fail")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  todos: [
      #|    { id: 1, text: "Buy milk", done: false },
      #|    { id: 2, text: "Write tests", done: true },
      #|    { id: 3, text: "Ship feature", done: false },
      #|  ],
      #|  input: "",
      #|  loading: false,
      #|}

    ),
  )
}

// ── TodoToggled ──────────────────────────────────────────────────────

///|
test "TodoToggled/Ok replaces matching todo" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let toggled : @shared.Todo = { id: 1, text: "Buy milk", done: true }
  let (model, _) = initial.update(
    msg=TodoToggled(Ok(toggled)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  todos: [
      #|    { id: 1, text: "Buy milk", done: true },
      #|    { id: 2, text: "Write tests", done: true },
      #|    { id: 3, text: "Ship feature", done: false },
      #|  ],
      #|  input: "",
      #|  loading: false,
      #|}

    ),
  )
}

///|
test "TodoToggled/Err leaves model unchanged" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let (model, _) = initial.update(
    msg=TodoToggled(Err("fail")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  todos: [
      #|    { id: 1, text: "Buy milk", done: false },
      #|    { id: 2, text: "Write tests", done: true },
      #|    { id: 3, text: "Ship feature", done: false },
      #|  ],
      #|  input: "",
      #|  loading: false,
      #|}

    ),
  )
}

// ── TodoDeleted ──────────────────────────────────────────────────────

///|
test "TodoDeleted/Ok removes the todo" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let (model, _) = initial.update(
    msg=TodoDeleted(Ok(1)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  todos: [
      #|    { id: 2, text: "Write tests", done: true },
      #|    { id: 3, text: "Ship feature", done: false },
      #|  ],
      #|  input: "",
      #|  loading: false,
      #|}

    ),
  )
}

///|
test "TodoDeleted/Ok with nonexistent id is no-op" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let (model, _) = initial.update(
    msg=TodoDeleted(Ok(999)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  todos: [
      #|    { id: 1, text: "Buy milk", done: false },
      #|    { id: 2, text: "Write tests", done: true },
      #|    { id: 3, text: "Ship feature", done: false },
      #|  ],
      #|  input: "",
      #|  loading: false,
      #|}

    ),
  )
}

///|
test "TodoDeleted/Err leaves model unchanged" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let (model, _) = initial.update(
    msg=TodoDeleted(Err("fail")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  todos: [
      #|    { id: 1, text: "Buy milk", done: false },
      #|    { id: 2, text: "Write tests", done: true },
      #|    { id: 3, text: "Ship feature", done: false },
      #|  ],
      #|  input: "",
      #|  loading: false,
      #|}

    ),
  )
}
