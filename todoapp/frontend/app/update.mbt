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
/// Central state machine for the todo-list UI (Elm / MVU architecture).
///
/// Given the current model and an incoming message, returns the next model
/// together with a side-effect command (`@rabbita.Cmd`).
///
/// Parameters
///
/// - `self`     – the current application state.
/// - `msg`      – the message that triggers a state transition.
/// - `dispatch` – a callback provided by the Rabbita runtime that turns a
///   `Msg` into a `Cmd`.  It is the *only* way an asynchronous side-effect
///   (e.g. an HTTP response handler) can feed a new message back into the
///   update loop.  Pure branches that don't issue side-effects never touch
///   `dispatch`; only branches that build HTTP requests pass it into the
///   request's `expect` callback so the runtime knows which `Msg` to
///   deliver when the response arrives.
// TODO (upstream): @http.Excpeting is not well designed? 
#warnings("-unresolved_type_variable")
pub fn Model::update(
  self : Model,
  msg~ : Msg,
  dispatch~ : @rabbita.Dispatch[Msg],
) -> (@rabbita.Cmd, Model) {
  match msg {
    Init => (fetch_todos(dispatch), { ..self, loading: true })
    GotTodos(Ok(todos)) => (@rabbita.none, { ..self, todos, loading: false })
    GotTodos(Err(_)) => (@rabbita.none, { ..self, loading: false })
    InputChanged(value) => (@rabbita.none, { ..self, input: value })
    AddTodo => {
      if not(@shared.validate_text(self.input)) {
        return (@rabbita.none, self)
      }
      let cmd = @http.post(
        @shared.api_todos,
        Json(({ "text": self.input } : Json)),
        expect=expect_todo(dispatch, fn(r) { TodoAdded(r) }),
      )
      (cmd, { ..self, input: "" })
    }
    TodoAdded(Ok(todo)) => {
      let todos = self.todos.copy()
      todos.push(todo)
      (@rabbita.none, { ..self, todos })
    }
    TodoAdded(Err(_)) => (@rabbita.none, self)
    ToggleTodo(id) => {
      let cmd = @http.post(
        @shared.api_todo_toggle(id),
        Json(({} : Json)),
        expect=expect_todo(dispatch, fn(r) { TodoToggled(r) }),
      )
      (cmd, self)
    }
    TodoToggled(Ok(updated)) => {
      let todos = self.todos.map(
        fn(t) { if t.id == updated.id { updated } else { t } },
      )
      (@rabbita.none, { ..self, todos })
    }
    TodoToggled(Err(_)) => (@rabbita.none, self)
    DeleteTodo(id) => {
      let cmd = @http.delete(
        @shared.api_todo(id),
        expect=Text(fn(result) {
          let mapped = result.map(fn(_) { id })
          dispatch(TodoDeleted(mapped))
        }),
      )
      (cmd, self)
    }
    TodoDeleted(Ok(id)) => {
      let todos = self.todos.filter(fn(t) { t.id != id })
      (@rabbita.none, { ..self, todos })
    }
    TodoDeleted(Err(_)) => (@rabbita.none, self)
  }
}
