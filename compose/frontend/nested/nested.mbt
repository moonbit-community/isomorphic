/// Pattern 3: Nested Model (Classic Elm Composition)
///
/// A single Cell where the parent Model contains child Models inline,
/// and parent Msg wraps child Msgs. One update function routes messages
/// to the right child.
///
/// This is how Elm's official guide recommends composition:
///   https://guide.elm-lang.org/webapps/structure
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
///     counter.view(
///       fn(msg) { dispatch(Left(msg)) },   ← map child dispatch
///       model.left,                         ← pass child model
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

priv enum PairMsg {
  Left(@counter.Msg)
  Right(@counter.Msg)
  ToggleSync
}

fn pair_update(msg : PairMsg, model : PairModel) -> PairModel {
  match msg {
    Left(child_msg) => {
      let new_left = @counter.update(child_msg, model.left)
      // When sync is on, apply the same msg to both sides
      let new_right = if model.sync_mode {
        @counter.update(child_msg, model.right)
      } else {
        model.right
      }
      { ..model, left: new_left, right: new_right }
    }
    Right(child_msg) => {
      let new_right = @counter.update(child_msg, model.right)
      let new_left = if model.sync_mode {
        @counter.update(child_msg, model.left)
      } else {
        model.left
      }
      { ..model, left: new_left, right: new_right }
    }
    ToggleSync => { ..model, sync_mode: !(model.sync_mode) }
  }
}

pub fn make() -> @rabbita.Cell {
  @rabbita.simple_cell(
    model={ left: @counter.initial(), right: @counter.initial(), sync_mode: false },
    update=fn(msg, model) { pair_update(msg, model) },
    view=fn(dispatch, model : PairModel) {
      @html.div([
        @html.div(
          style=["display: flex", "gap: 16px", "margin-bottom: 16px"],
          [
            // Map child dispatch: Counter.Msg → PairMsg via Left/Right
            @counter.view(
              fn(msg) { dispatch(Left(msg)) },
              model.left,
              label="Left",
            ),
            @counter.view(
              fn(msg) { dispatch(Right(msg)) },
              model.right,
              label="Right",
            ),
          ],
        ),
        @html.div(
          style=["text-align: center"],
          [
            @html.button(
              style=["padding: 8px 24px", "font-size: 1.1em"],
              on_click=dispatch(ToggleSync),
              if model.sync_mode {
                "Sync: ON (click to turn off)"
              } else {
                "Sync: OFF (click to turn on)"
              },
            ),
            @html.p(
              if model.sync_mode {
                "Both counters move together \u{2014} any button affects both"
              } else {
                "Counters are independent"
              },
            ),
          ],
        ),
      ])
    },
  )
}
