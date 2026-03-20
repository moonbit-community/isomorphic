///|
/// Render a row of member avatars for assignee selection in forms.
fn view_assignee_picker(
  dispatch : @rabbita.Dispatch[Msg],
  members : Array[@shared.Member],
  current : Int,
  on_change : (Int) -> Msg,
) -> @rabbita.Html {
  @html.div(
    style=[
      "display: flex", "gap: 4px", "margin-bottom: 8px", "flex-wrap: wrap", "align-items: center",
    ],
    {
      let items : Array[@rabbita.Html] = [
        {
          let is_sel = current == 0
          let border = if is_sel {
            "2px solid #1e293b"
          } else {
            "2px solid transparent"
          }
          @html.div(
            on_click=dispatch(on_change(0)),
            style=[
              "width: 28px",
              "height: 28px",
              "border-radius: 50%",
              "background: #e2e8f0",
              "cursor: pointer",
              "display: flex",
              "align-items: center",
              "justify-content: center",
              "font-size: 11px",
              "color: #94a3b8",
              "border: \{border}",
            ],
            [@html.text("—")],
          )
        },
      ]
      for m in members {
        let bg = @shared.member_color(m.color)
        let is_sel = current == m.id
        let border = if is_sel {
          "2px solid #1e293b"
        } else {
          "2px solid transparent"
        }
        let initial = @shared.member_initial(m.name)
        items.push(
          @html.div(
            on_click=dispatch(on_change(m.id)),
            style=[
              "width: 28px",
              "height: 28px",
              "border-radius: 50%",
              "cursor: pointer",
              "display: flex",
              "align-items: center",
              "justify-content: center",
              "font-size: 11px",
              "color: white",
              "font-weight: 600",
              "background: \{bg}",
              "border: \{border}",
            ],
            [@html.text(initial)],
          ),
        )
      }
      items
    },
  )
}

///|
/// Render a row of priority buttons for selection in forms.
fn view_priority_picker(
  dispatch : @rabbita.Dispatch[Msg],
  current : String,
  on_change : (String) -> Msg,
  lang? : @shared.Lang = En,
) -> @rabbita.Html {
  @html.div(
    style=["display: flex", "gap: 4px", "margin-bottom: 8px"],
    @shared.valid_priorities.map(fn(p) {
      let is_sel = p == current
      let bg = if is_sel { @shared.priority_color(p) } else { "#f1f5f9" }
      let fg = if is_sel { "white" } else { "#64748b" }
      @html.button(
        on_click=dispatch(on_change(p)),
        style=[
          "padding: 4px 12px",
          "border-radius: 12px",
          "border: none",
          "cursor: pointer",
          "font-size: 12px",
          "background: \{bg}",
          "color: \{fg}",
        ],
        @shared.t_priority(lang, p),
      )
    }),
  )
}
