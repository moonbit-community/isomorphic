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

/// Fetch all todos from the backend (`GET /api/todos`).
///
/// Returns a Rabbita command that, when executed by the runtime, issues the
/// HTTP request and dispatches `GotTodos` with the decoded result.
fn fetch_todos(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    @shared.api_todos,
    expect=Json(result => dispatch(GotTodos(result)), json => {
      Ok(@json.from_json(json)) catch {
        _ => Err("Failed to decode todos")
      }
    }),
  )
}

/// Central state machine — processes each `Msg` and returns the next model
/// plus an optional side-effect command (HTTP request or `@rabbita.none`).
///
/// Pure except for constructing HTTP commands via `dispatch`. The Rabbita
/// runtime executes returned commands after the view re-renders.
fn update(
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
      let text = model.input
      let cmd = @http.post(
        @shared.api_todos,
        Json(({ "text": text } : Json)),
        expect=Json(fn(result) { dispatch(TodoAdded(result)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode todo")
          }
        }),
      )
      (cmd, { ..model, input: "" })
    }
    TodoAdded(Ok(todo)) => {
      let todos = model.todos.copy()
      todos.push(todo)
      (@rabbita.none, { ..model, todos, })
    }
    TodoAdded(Err(_)) => (@rabbita.none, model)
    ToggleTodo(id) => {
      let cmd = @http.post(
        @shared.api_todo_toggle(id),
        Json(({} : Json)),
        expect=Json(fn(result) { dispatch(TodoToggled(result)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode todo")
          }
        }),
      )
      (cmd, model)
    }
    TodoToggled(Ok(updated)) => {
      let todos = model.todos.map(fn(t) {
        if t.id == updated.id {
          updated
        } else {
          t
        }
      })
      (@rabbita.none, { ..model, todos, })
    }
    TodoToggled(Err(_)) => (@rabbita.none, model)
    DeleteTodo(id) => {
      let cmd = @http.delete(
        @shared.api_todo(id),
        expect=Text(fn(result) {
          dispatch(
            TodoDeleted(
              match result {
                Ok(_) => Ok(id)
                Err(e) => Err(e)
              },
            ),
          )
        }),
      )
      (cmd, model)
    }
    TodoDeleted(Ok(id)) => {
      let todos = model.todos.filter(fn(t) { t.id != id })
      (@rabbita.none, { ..model, todos, })
    }
    TodoDeleted(Err(_)) => (@rabbita.none, model)
  }
}

/// Render the entire UI as a virtual DOM tree from the current model.
///
/// Layout: a centered card containing a heading, an add-todo form, and either
/// a loading indicator, an empty-state message, or the todo list. Each todo
/// item has a checkbox (toggle) and a delete button, both wired to dispatch
/// the corresponding `Msg`.
fn view(dispatch : @rabbita.Dispatch[Msg], model : Model) -> @rabbita.Html {
  @html.div(
    style=[
      "max-width: 500px", "margin: 40px auto", "padding: 20px", "background: white",
      "border-radius: 8px", "box-shadow: 0 2px 8px rgba(0,0,0,0.1)",
    ],
    [
      @html.h1(
        style=["text-align: center", "margin-bottom: 20px", "color: #2c3e50"],
        "Todo List",
      ),
      @html.form(
        on_submit=dispatch(AddTodo),
        style=["display: flex", "gap: 8px", "margin-bottom: 20px"],
        [
          @html.input(
            input_type=Text,
            placeholder="What needs to be done?",
            value=model.input,
            on_input=fn(value) { dispatch(InputChanged(value)) },
            style=[
              "flex: 1", "padding: 8px 12px", "border: 1px solid #ddd", "border-radius: 4px",
              "font-size: 14px", "outline: none",
            ],
            "",
          ),
          @html.button(
            type_="submit",
            style=[
              "padding: 8px 16px", "background: #3498db", "color: white", "border: none",
              "border-radius: 4px", "cursor: pointer", "font-size: 14px",
            ],
            "Add",
          ),
        ],
      ),
      if model.loading {
        @html.p(style=["text-align: center", "color: #999"], "Loading...")
      } else if model.todos.length() == 0 {
        @html.p(
          style=["text-align: center", "color: #999", "padding: 20px"],
          "No todos yet. Add one above!",
        )
      } else {
        @html.ul(
          style=["list-style: none"],
          model.todos.map(fn(todo) {
            @html.li(
              style=[
                "display: flex", "align-items: center", "padding: 10px 0", "border-bottom: 1px solid #eee",
              ],
              [
                @html.input(
                  input_type=Checkbox,
                  checked=todo.done,
                  on_change=fn(_value) { dispatch(ToggleTodo(todo.id)) },
                  style=["margin-right: 12px", "cursor: pointer"],
                  "",
                ),
                @html.span(
                  style=if todo.done {
                    ["flex: 1", "text-decoration: line-through", "color: #999"]
                  } else {
                    ["flex: 1"]
                  },
                  todo.text,
                ),
                @html.button(
                  on_click=dispatch(DeleteTodo(todo.id)),
                  style=[
                    "padding: 4px 8px", "background: #e74c3c", "color: white", "border: none",
                    "border-radius: 4px", "cursor: pointer", "font-size: 12px",
                  ],
                  "Delete",
                ),
              ],
            )
          }),
        )
      },
    ],
  )
}

/// Entry point — wire up the Rabbita app and mount it to the `#app` DOM node.
///
/// Uses `cell_with_dispatch` (not `simple_cell`) because `update` needs the
/// dispatch function to construct async HTTP commands.
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model={ todos: [], input: "", loading: false },
    update~,
    view~,
  )
  let app = @rabbita.new(app_cell)
  app.with_init(dispatch(Init))
  app.mount("app")
}
