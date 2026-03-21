///|
/// Render a row of color swatches for card label selection.
fn view_color_picker(
  dispatch : @rabbita.Dispatch[Msg],
  current : String,
  on_change : (String) -> Msg,
) -> @rabbita.Html {
  @html.div(style=[
    "display: flex", "gap: 4px", "margin-bottom: 8px", "flex-wrap: wrap",
  ]) <| @shared.valid_colors.map(fn(c) {
    let bg = if c == "" { "#f1f5f9" } else { @shared.color_to_css(c) }
    let is_selected = c == current
    let border = if is_selected {
      "2px solid #1a1a2e"
    } else {
      "2px solid transparent"
    }
    @html.div(on_click=dispatch(on_change(c)), style=[
      "width: 24px",
      "height: 24px",
      "border-radius: 50%",
      "background: \{bg}",
      "cursor: pointer",
      "border: \{border}",
    ]) <| [
      @html.text(""),
    ]
  })
}

///|
/// Render a single card; shows inline edit form when editing this card.
fn Model::view_card_item(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
  card : @shared.Card,
) -> @rabbita.Html {
  let is_moving = self.moving_card == card.id
  let border_left = match @shared.color_to_css(card.color) {
    "" => "3px solid #e2e8f0"
    css => "3px solid \{css}"
  }
  let bg = if is_moving { "#f0fdfa" } else { "white" }
  if self.editing_card == card.id {
    // Inline edit form
    @html.div(style=[
      "background: white", "border-radius: 8px", "padding: 12px", "border: 1px solid #0d9488",
      "margin-bottom: 6px",
    ]) <| [
      @html.input(
        input_type=Text,
        placeholder="Card title",
        value=self.edit_title,
        on_input=fn(v) { dispatch(EditTitleChanged(v)) },
        style=[
          "width: 100%", "padding: 6px 8px", "border: 1px solid #e2e8f0", "border-radius: 4px",
          "font-size: 13px", "outline: none", "margin-bottom: 6px",
        ],
        "",
      ),
      @html.textarea(
        placeholder="Description (optional)",
        value=self.edit_desc,
        on_input=fn(v) { dispatch(EditDescChanged(v)) },
        rows=2,
        style=[
          "width: 100%", "padding: 6px 8px", "border: 1px solid #e2e8f0", "border-radius: 4px",
          "font-size: 12px", "outline: none", "resize: vertical", "font-family: inherit",
          "margin-bottom: 6px",
        ],
        "",
      ),
      view_color_picker(dispatch, self.edit_color, fn(c) { EditColorChanged(c) }),
      @html.div(style=["display: flex", "gap: 6px"]) <| [
        @html.button(on_click=dispatch(SaveEditCard), style=[
          "padding: 5px 12px", "background: #0d9488", "color: white", "border: none",
          "border-radius: 4px", "cursor: pointer", "font-size: 12px",
        ]) <| "Save",
        @html.button(on_click=dispatch(CancelEditCard), style=[
          "padding: 5px 12px", "background: #f1f5f9", "color: #64748b", "border: none",
          "border-radius: 4px", "cursor: pointer", "font-size: 12px",
        ]) <| "Cancel",
      ],
    ]
  } else {
    @html.div(style=[
      "background: \{bg}",
      "border-radius: 8px",
      "padding: 10px 12px",
      "border-left: \{border_left}",
      "margin-bottom: 6px",
      "border: 1px solid #f0f0f5",
      "transition: all 0.15s",
    ]) <| [
      @html.div(style=[
        "font-size: 14px", "font-weight: 500", "color: #1e293b", "margin-bottom: 4px",
      ]) <| [
        @html.text(card.title),
      ],
      if card.description != "" {
        @html.div(style=[
          "font-size: 12px", "color: #64748b", "margin-bottom: 6px", "line-height: 1.4",
        ]) <| [
          @html.text(card.description),
        ]
      } else {
        @html.text("")
      },
      @html.div(style=["display: flex", "gap: 4px", "justify-content: flex-end"]) <| [
        {
          let move_bg = if is_moving { "#0d9488" } else { "#f8fafc" }
          let move_fg = if is_moving { "white" } else { "#64748b" }
          @html.button(
            on_click=dispatch(SelectCardToMove(card.id)),
            style=[
              "padding: 3px 8px",
              "font-size: 11px",
              "cursor: pointer",
              "border-radius: 4px",
              "border: 1px solid #e2e8f0",
              "background: \{move_bg}",
              "color: \{move_fg}",
            ],
            if is_moving {
              "Moving..."
            } else {
              "Move"
            },
          )
        },
        @html.button(on_click=dispatch(StartEditCard(card)), style=[
          "padding: 3px 8px", "font-size: 11px", "cursor: pointer", "border-radius: 4px",
          "border: 1px solid #e2e8f0", "background: #f8fafc", "color: #64748b",
        ]) <| "Edit",
        @html.button(on_click=dispatch(DeleteCard(card.id)), style=[
          "padding: 3px 8px", "font-size: 11px", "cursor: pointer", "border-radius: 4px",
          "border: 1px solid #fecaca", "background: #fef2f2", "color: #dc2626",
        ]) <| "Del",
      ],
    ]
  }
}
