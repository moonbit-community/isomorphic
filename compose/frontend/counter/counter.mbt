///|
/// A simple counter — the reusable building block for all composition patterns.
///
/// This is a plain Model + Msg + update + view, NOT wrapped in a Cell.
/// Each pattern decides how to wire it differently.
pub struct Model {
  count : Int

  fn new() -> Model
}

///|
/// Messages for counter actions: increment, decrement, or reset to zero.
pub(all) enum Msg {
  Increment
  Decrement
  Reset
}

///|
/// Create a new counter initialized to zero.
pub fn Model::new() -> Model {
  { count: 0 }
}

///|
/// Process a counter message and return the updated model.
pub fn Model::update(self : Model, msg : Msg) -> Model {
  match msg {
    Increment => { count: self.count + 1 }
    Decrement => { count: self.count - 1 }
    Reset => { count: 0 }
  }
}

///|
/// Render a counter with a label. The `dispatch` converts counter Msg to Cmd.
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
  label~ : String,
) -> @rabbita.Html {
  @html.div(style=[
    "border: 1px solid #ccc", "padding: 16px", "border-radius: 8px", "text-align: center",
    "min-width: 150px",
  ]) <| [
    @html.h3() <| label,
    @html.div(style=["font-size: 2em", "margin: 8px 0"]) <| self.count.to_string(),
    @html.div(style=["display: flex", "gap: 8px", "justify-content: center"]) <| [
      @html.button(on_click=dispatch(Decrement)) <| "\u{2212}",
      @html.button(on_click=dispatch(Reset)) <| "0",
      @html.button(on_click=dispatch(Increment)) <| "+",
    ],
  ]
}
