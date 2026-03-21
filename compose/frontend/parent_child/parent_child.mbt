///|
/// Pattern 2: Parent-Child with Dispatch
///
/// Parent creates child cells using `simple_cell_with_dispatch`,
/// which returns a `Dispatch` handle for each child. The parent
/// can send messages to children through these handles.
///
/// ```
///   Parent Cell
///     ├── dispatch_a : Dispatch[Counter.Msg]   ← handle to child A
///     ├── dispatch_b : Dispatch[Counter.Msg]   ← handle to child B
///     │
///     │  on ResetAll:
///     │    dispatch_a(Reset)   ← parent pushes msg into child A
///     │    dispatch_b(Reset)   ← parent pushes msg into child B
///     │
///     └── view:
///           [ child_a.view() | child_b.view() ]
///           [ Reset Both button ]
/// ```
priv struct ParentModel {
  total_resets : Int
}

///|
priv enum ParentMsg {
  ResetAll
}

///|
/// Create a parent cell with two child counter cells, connected via dispatch handles for cross-cell reset.
pub fn make() -> @rabbita.Cell {
  // Create children — get back Dispatch handles
  let (dispatch_a, cell_a) = @rabbita.simple_cell_with_dispatch(
    model=@counter.Model::new(),
    update=(msg, model) => model.update(msg),
    view=(dispatch, model) => model.view(dispatch, label="Child A"),
  )
  let (dispatch_b, cell_b) = @rabbita.simple_cell_with_dispatch(
    model=@counter.Model::new(),
    update=(msg, model) => model.update(msg),
    view=(dispatch, model) => model.view(dispatch, label="Child B"),
  )

  // Parent cell — owns the "Reset Both" logic
  @rabbita.cell(
    model={ total_resets: 0 },
    update=(_dispatch, msg : ParentMsg, model : ParentModel) => {
      match msg {
        ResetAll => {
          // Send Reset to both children via their dispatch handles
          let cmd = @rabbita.batch([dispatch_a(Reset), dispatch_b(Reset)])
          (cmd, { total_resets: model.total_resets + 1 })
        }
      }
    },
    view=(dispatch, model) => {
      @html.div([
        @html.div(style=["display: flex", "gap: 16px", "margin-bottom: 16px"], [
          cell_a.view(),
          cell_b.view(),
        ]),
        @html.div(style=["text-align: center"], [
          @html.button(
            style=["padding: 8px 24px", "font-size: 1.1em"],
            on_click=dispatch(ResetAll),
            "Reset Both (parent \u{2192} children)",
          ),
          @html.p("Parent tracked \{model.total_resets} resets"),
        ]),
      ])
    },
  )
}
