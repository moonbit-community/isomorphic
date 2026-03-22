///|
/// Pattern 3: Nested Model (Classic Elm Composition)
///
/// A single Cell where the parent Model contains child Models inline,
/// and parent Msg wraps child Msgs. One update function routes messages
/// to the right child.
///
/// ```
///   PairModel
///     ├── left  : Counter.Model
///     ├── right : Counter.Model
///     └── sync  : Bool
///
///   PairMsg
///     ├── Left(Counter.Msg)    ← wraps child msg
///     ├── Right(Counter.Msg)   ← wraps child msg
///     └── ToggleSync
///
///   view:
///     model.left.view(
///       fn(msg) { dispatch(Left(msg)) },   ← map child dispatch
///     )
/// ```
///
/// Key technique: the parent view creates a "mapped dispatch" that wraps
/// child messages into parent messages:
///   `fn(msg) { dispatch(Left(msg)) }`
priv struct PairModel {
  left : @counter.Model
  right : @counter.Model
  sync_mode : Bool
}

///|
priv enum PairMsg {
  Left(@counter.Msg)
  Right(@counter.Msg)
  ToggleSync
}

///|
fn PairModel::update(self : PairModel, msg : PairMsg) -> PairModel {
  match msg {
    Left(child_msg) => {
      let new_left = self.left.update(child_msg)
      let new_right = if self.sync_mode {
        self.right.update(child_msg)
      } else {
        self.right
      }
      { ..self, left: new_left, right: new_right }
    }
    Right(child_msg) => {
      let new_right = self.right.update(child_msg)
      let new_left = if self.sync_mode {
        self.left.update(child_msg)
      } else {
        self.left
      }
      { ..self, left: new_left, right: new_right }
    }
    ToggleSync => { ..self, sync_mode: !self.sync_mode }
  }
}

///|
fn PairModel::view(
  self : PairModel,
  dispatch : @rabbita.Dispatch[PairMsg],
) -> @rabbita.Html {
  @html.div() <| [
    @html.div(style=["display: flex", "gap: 16px", "margin-bottom: 16px"]) <| [
      // Map child dispatch: Counter.Msg → PairMsg via Left/Right
      self.left.view(msg => dispatch(Left(msg)), label="Left"),
      self.right.view(msg => dispatch(Right(msg)), label="Right"),
    ],
    @html.div(style=["text-align: center"]) <| [
      @html.button(
        style=["padding: 8px 24px", "font-size: 1.1em"],
        on_click=dispatch(ToggleSync),
      ) <| (if self.sync_mode {
        "Sync: ON (click to turn off)"
      } else {
        "Sync: OFF (click to turn on)"
      }),
      @html.p() <| (if self.sync_mode {
        "Both counters move together \u{2014} any button affects both"
      } else {
        "Counters are independent"
      }),
    ],
  ]
}

///|
/// Create a cell with two nested counters that can optionally sync their actions.
pub fn make() -> @rabbita.Cell {
  @rabbita.simple_cell(
    model={
      left: @counter.Model(),
      right: @counter.Model(),
      sync_mode: false,
    },
    update=(msg, model) => model.update(msg),
    view=(dispatch, model) => model.view(dispatch),
  )
}
