///|
/// Render the inline form for adding a new column.
fn Model::view_add_column_form(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=[
    "min-width: 272px", "max-width: 272px", "background: white", "border-radius: 10px",
    "padding: 16px", "border: 2px dashed #cbd5e1",
  ]) <| [
    @html.input(
      input_type=Text,
      placeholder="Column title",
      value=self.new_column_title,
      on_input=fn(v) { dispatch(NewColumnTitleChanged(v)) },
      style=[
        "width: 100%", "padding: 8px 10px", "border: 1px solid #e2e8f0", "border-radius: 6px",
        "font-size: 14px", "outline: none", "margin-bottom: 8px",
      ],
      "",
    ),
    @html.div(style=["display: flex", "gap: 6px"]) <| [
      @html.button(on_click=dispatch(AddColumn), style=[
        "padding: 6px 14px", "background: #0d9488", "color: white", "border: none",
        "border-radius: 6px", "cursor: pointer", "font-size: 13px",
      ]) <| "Add",
      @html.button(on_click=dispatch(HideAddColumn), style=[
        "padding: 6px 14px", "background: #f1f5f9", "color: #64748b", "border: none",
        "border-radius: 6px", "cursor: pointer", "font-size: 13px",
      ]) <| "Cancel",
    ],
  ]
}

///|
/// Render the inline form for creating a new card in a column.
fn Model::view_add_card_form(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=[
    "padding: 10px", "background: #f8fafc", "border-radius: 8px", "border: 1px solid #e2e8f0",
    "margin-top: 6px",
  ]) <| [
    @html.input(
      input_type=Text,
      placeholder="Card title",
      value=self.new_card_title,
      on_input=fn(v) { dispatch(NewCardTitleChanged(v)) },
      style=[
        "width: 100%", "padding: 6px 8px", "border: 1px solid #e2e8f0", "border-radius: 4px",
        "font-size: 13px", "outline: none", "margin-bottom: 6px",
      ],
      "",
    ),
    @html.textarea(
      placeholder="Description (optional)",
      value=self.new_card_desc,
      on_input=fn(v) { dispatch(NewCardDescChanged(v)) },
      rows=2,
      style=[
        "width: 100%", "padding: 6px 8px", "border: 1px solid #e2e8f0", "border-radius: 4px",
        "font-size: 12px", "outline: none", "resize: vertical", "font-family: inherit",
        "margin-bottom: 6px",
      ],
      "",
    ),
    view_color_picker(dispatch, self.new_card_color, fn(c) {
      NewCardColorChanged(c)
    }),
    @html.div(style=["display: flex", "gap: 6px"]) <| [
      @html.button(on_click=dispatch(AddCard), style=[
        "padding: 5px 12px", "background: #0d9488", "color: white", "border: none",
        "border-radius: 4px", "cursor: pointer", "font-size: 12px",
      ]) <| "Add Card",
      @html.button(on_click=dispatch(HideAddCard), style=[
        "padding: 5px 12px", "background: #f1f5f9", "color: #64748b", "border: none",
        "border-radius: 4px", "cursor: pointer", "font-size: 12px",
      ]) <| "Cancel",
    ],
  ]
}
