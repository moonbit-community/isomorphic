///|
/// A simple counter — the reusable building block for all composition patterns.
///
/// This is a plain Model + Msg + update + view, NOT wrapped in a Cell.
/// Each pattern decides how to wire it differently.
pub struct Model {
  count : Int
}

///|
pub(all) enum Msg {
  Increment
  Decrement
  Reset
}

///|
pub fn initial() -> Model {
  { count: 0 }
}

///|
pub fn update(msg : Msg, model : Model) -> Model {
  match msg {
    Increment => { count: model.count + 1 }
    Decrement => { count: model.count - 1 }
    Reset => { count: 0 }
  }
}

///|
/// Render a counter with a label. The `dispatch` converts counter Msg to Cmd.
pub fn view(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
  label~ : String,
) -> @rabbita.Html {
  @html.div(
    style=[
      "border: 1px solid #ccc", "padding: 16px", "border-radius: 8px", "text-align: center",
      "min-width: 150px",
    ],
    [
      @html.h3(label),
      @html.div(
        style=["font-size: 2em", "margin: 8px 0"],
        model.count.to_string(),
      ),
      @html.div(
        style=["display: flex", "gap: 8px", "justify-content: center"],
        [
          @html.button(on_click=dispatch(Decrement), "\u{2212}"),
          @html.button(on_click=dispatch(Reset), "0"),
          @html.button(on_click=dispatch(Increment), "+"),
        ],
      ),
    ],
  )
}
