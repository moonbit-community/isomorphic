// ── Styles ───────────────────────────────────────────────────────────

///|
let card_style : Array[String] = [
  "max-width: 500px", "margin: 40px auto", "padding: 20px", "background: white",
  "border-radius: 8px", "box-shadow: 0 2px 8px rgba(0,0,0,0.1)",
]

///|
let heading_style : Array[String] = [
  "text-align: center", "margin-bottom: 20px", "color: #2c3e50",
]

///|
let form_style : Array[String] = [
  "display: flex", "gap: 8px", "margin-bottom: 20px",
]

///|
let input_style : Array[String] = [
  "flex: 1", "padding: 8px 12px", "border: 1px solid #ddd", "border-radius: 4px",
  "font-size: 14px", "outline: none",
]

///|
let add_btn_style : Array[String] = [
  "padding: 8px 16px", "background: #3498db", "color: white", "border: none", "border-radius: 4px",
  "cursor: pointer", "font-size: 14px",
]

///|
let todo_item_style : Array[String] = [
  "display: flex", "align-items: center", "padding: 10px 0", "border-bottom: 1px solid #eee",
]

///|
let delete_btn_style : Array[String] = [
  "padding: 4px 8px", "background: #e74c3c", "color: white", "border: none", "border-radius: 4px",
  "cursor: pointer", "font-size: 12px",
]

///|
let muted_style : Array[String] = ["text-align: center", "color: #999"]

// ── View ─────────────────────────────────────────────────────────────

///|
/// Render the entire UI as a virtual DOM tree from the current model.
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=card_style, [
    @html.h1(style=heading_style, "Todo List"),
    self.view_form(dispatch),
    self.view_todos(dispatch),
  ])
}

///|
/// The add-todo form with a text input and submit button.
fn Model::view_form(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.form(on_submit=dispatch(AddTodo), style=form_style, [
    @html.input(
      input_type=Text,
      placeholder="What needs to be done?",
      value=self.input,
      on_input=value => dispatch(InputChanged(value)),
      style=input_style,
      "",
    ),
    @html.button(type_="submit", style=add_btn_style, "Add"),
  ])
}

///|
/// Loading indicator, empty state, or the todo list.
fn Model::view_todos(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  if self.loading {
    return @html.p(style=muted_style, "Loading...")
  }
  if self.todos is [] {
    return @html.p(
      style=["text-align: center", "color: #999", "padding: 20px"],
      "No todos yet. Add one above!",
    )
  }
  @html.ul(
    style=["list-style: none"],
    self.todos.map(todo => todo.view_todo_item(dispatch)),
  )
}

///|
/// A single todo item: checkbox, text label, and delete button.
fn @shared.Todo::view_todo_item(
  todo : @shared.Todo,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let text_style : Array[String] = if todo.done {
    ["flex: 1", "text-decoration: line-through", "color: #999"]
  } else {
    ["flex: 1"]
  }
  @html.li(style=todo_item_style, [
    @html.input(
      input_type=Checkbox,
      checked=todo.done,
      on_change=_ => dispatch(ToggleTodo(todo.id)),
      style=["margin-right: 12px", "cursor: pointer"],
      "",
    ),
    @html.span(style=text_style, todo.text),
    @html.button(
      on_click=dispatch(DeleteTodo(todo.id)),
      style=delete_btn_style,
      "Delete",
    ),
  ])
}
