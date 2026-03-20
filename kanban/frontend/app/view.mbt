///|
/// Render the top header bar with title and action buttons.
fn Model::view_header(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(
    style=[
      "background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%)", "padding: 20px 32px",
      "margin-bottom: 24px", "border-radius: 12px", "display: flex", "justify-content: space-between",
      "align-items: center",
    ],
    [
      @html.h1(
        style=[
          "color: white", "font-size: 22px", "font-weight: 700", "letter-spacing: -0.3px",
        ],
        "Kanban Board",
      ),
      @html.div(style=["display: flex", "gap: 8px"], [
        if self.moving_card != 0 {
          @html.button(
            on_click=dispatch(CancelMove),
            style=[
              "padding: 8px 16px", "background: rgba(255,255,255,0.2)", "color: white",
              "border: 1px solid rgba(255,255,255,0.3)", "border-radius: 6px", "cursor: pointer",
              "font-size: 13px",
            ],
            "Cancel Move",
          )
        } else {
          @html.text("")
        },
        if self.adding_column {
          @html.text("")
        } else {
          @html.button(
            on_click=dispatch(ShowAddColumn),
            style=[
              "padding: 8px 16px", "background: rgba(255,255,255,0.2)", "color: white",
              "border: 1px solid rgba(255,255,255,0.3)", "border-radius: 6px", "cursor: pointer",
              "font-size: 13px",
            ],
            "+ Column",
          )
        },
      ]),
    ],
  )
}

///|
/// MVU view: render the full board from current model state.
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let sorted_columns = @shared.sort_by_position(self.columns, fn(c) {
    c.position
  })
  @html.div(style=["padding: 16px 24px", "min-height: 100vh"], [
    self.view_header(dispatch),
    if self.loading {
      @html.div(
        style=[
          "text-align: center", "padding: 60px 0", "color: #94a3b8", "font-size: 15px",
        ],
        [@html.text("Loading...")],
      )
    } else {
      @html.div(
        style=[
          "display: flex", "gap: 16px", "overflow-x: auto", "padding-bottom: 16px",
          "align-items: flex-start",
        ],
        {
          let cols : Array[@rabbita.Html] = sorted_columns.mapi(fn(i, col) {
            self.view_column(dispatch, col, i, sorted_columns.length())
          })
          if self.adding_column {
            cols.push(self.view_add_column_form(dispatch))
          }
          cols
        },
      )
    },
  ])
}
