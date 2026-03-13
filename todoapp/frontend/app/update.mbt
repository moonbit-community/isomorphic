///|
/// Build a JSON expectation that decodes a `Todo` and dispatches the result.
fn expect_todo(
  dispatch : @rabbita.Dispatch[Msg],
  on_result : (Result[@shared.Todo, String]) -> Msg,
) -> @http.Expecting[@rabbita.Cmd, @shared.Todo] {
  Json(
    fn(result) { dispatch(on_result(result)) },
    fn(json) {
      Ok(@json.from_json(json)) catch { _ => Err("Failed to decode todo") }
    },
  )
}

///|
/// Fetch all todos from the backend (`GET /api/todos`).
fn fetch_todos(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    @shared.api_todos,
    expect=Json(
      fn(result) { dispatch(GotTodos(result)) },
      fn(json) {
        Ok(@json.from_json(json)) catch { _ => Err("Failed to decode todos") }
      },
    ),
  )
}

///|
/// Central state machine — processes each `Msg` and returns the next model
/// plus an optional side-effect command (HTTP request or `@rabbita.none`).
pub fn update(
  dispatch : @rabbita.Dispatch[Msg],
  msg : Msg,
  model : Model,
) -> (@rabbita.Cmd, Model) {
  match msg {
    Init => (fetch_todos(dispatch), { ..model, loading: true })
    GotTodos(Ok(todos)) => (@rabbita.none, { ..model, todos, loading: false })
    GotTodos(Err(_)) => (@rabbita.none, { ..model, loading: false })
    InputChanged(value) => (@rabbita.none, { ..model, input: value })
    AddTodo => {
      if not(@shared.validate_text(model.input)) {
        return (@rabbita.none, model)
      }
      let cmd = @http.post(
        @shared.api_todos,
        Json(({ "text": model.input } : Json)),
        expect=expect_todo(dispatch, fn(r) { TodoAdded(r) }),
      )
      (cmd, { ..model, input: "" })
    }
    TodoAdded(Ok(todo)) => {
      let todos = model.todos.copy()
      todos.push(todo)
      (@rabbita.none, { ..model, todos })
    }
    TodoAdded(Err(_)) => (@rabbita.none, model)
    ToggleTodo(id) => {
      let cmd = @http.post(
        @shared.api_todo_toggle(id),
        Json(({} : Json)),
        expect=expect_todo(dispatch, fn(r) { TodoToggled(r) }),
      )
      (cmd, model)
    }
    TodoToggled(Ok(updated)) => {
      let todos = model.todos.map(
        fn(t) { if t.id == updated.id { updated } else { t } },
      )
      (@rabbita.none, { ..model, todos })
    }
    TodoToggled(Err(_)) => (@rabbita.none, model)
    DeleteTodo(id) => {
      let cmd = @http.delete(
        @shared.api_todo(id),
        expect=Text(fn(result) {
          let mapped = result.map(fn(_) { id })
          dispatch(TodoDeleted(mapped))
        }),
      )
      (cmd, model)
    }
    TodoDeleted(Ok(id)) => {
      let todos = model.todos.filter(fn(t) { t.id != id })
      (@rabbita.none, { ..model, todos })
    }
    TodoDeleted(Err(_)) => (@rabbita.none, model)
  }
}
