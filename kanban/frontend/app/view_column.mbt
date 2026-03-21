///|
/// Render a clickable drop zone for card placement during move mode.
fn view_drop_zone(
  dispatch : @rabbita.Dispatch[Msg],
  column_id : Int,
  index : Int,
) -> @rabbita.Html {
  @html.div(on_click=dispatch(MoveCardTo(column_id, index)), style=[
    "height: 6px", "margin: 4px 0", "border-radius: 3px", "background: #99f6e4",
    "border: 2px dashed #14b8a6", "cursor: pointer", "transition: all 0.15s",
  ]) <| [
    @html.text(""),
  ]
}

///|
/// Render a single column with its header, card list, and add-card button.
fn Model::view_column(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
  column : @shared.Column,
  col_index : Int,
  total_cols : Int,
) -> @rabbita.Html {
  let col_cards = @shared.cards_in_column(self.cards, column.id)
  let is_moving = self.moving_card != 0
  @html.div(style=[
    "min-width: 272px", "max-width: 272px", "background: #f1f5f9", "border-radius: 10px",
    "padding: 12px", "display: flex", "flex-direction: column", "max-height: calc(100vh - 140px)",
  ]) <| [
    // Column header
    if self.renaming_column == column.id {
      @html.div(style=["margin-bottom: 10px"]) <| [
        @html.input(
          input_type=Text,
          value=self.rename_column_title,
          on_input=fn(v) { dispatch(RenameColumnTitleChanged(v)) },
          style=[
            "width: 100%", "padding: 6px 8px", "border: 1px solid #0d9488", "border-radius: 4px",
            "font-size: 14px", "outline: none", "font-weight: 600",
          ],
        ) <| "",
        @html.div(style=["display: flex", "gap: 4px", "margin-top: 4px"]) <| [
          @html.button(on_click=dispatch(ConfirmRenameColumn), style=[
            "padding: 3px 10px", "background: #0d9488", "color: white", "border: none",
            "border-radius: 4px", "cursor: pointer", "font-size: 11px",
          ]) <| "Save",
          @html.button(on_click=dispatch(CancelRenameColumn), style=[
            "padding: 3px 10px", "background: #e2e8f0", "color: #64748b", "border: none",
            "border-radius: 4px", "cursor: pointer", "font-size: 11px",
          ]) <| "Cancel",
        ],
      ]
    } else {
      @html.div(style=[
        "display: flex", "justify-content: space-between", "align-items: center",
        "margin-bottom: 10px", "padding: 0 2px",
      ]) <| [
        @html.div(
          on_click=dispatch(StartRenameColumn(column.id, column.title)),
          style=[
            "font-size: 14px", "font-weight: 600", "color: #334155", "cursor: pointer",
          ],
        ) <| [
          @html.text(column.title),
          @html.span(style=[
            "color: #94a3b8", "font-weight: 400", "margin-left: 6px",
          ]) <| "\{col_cards.length()}",
        ],
        @html.div(style=["display: flex", "gap: 2px"]) <| [
          if col_index > 0 {
            @html.button(on_click=dispatch(MoveColumnLeft(column.id)), style=[
              "padding: 2px 6px", "background: transparent", "color: #94a3b8", "border: none",
              "cursor: pointer", "font-size: 12px",
            ]) <| "\u{25C0}"
          } else {
            @html.text("")
          },
          if col_index < total_cols - 1 {
            @html.button(on_click=dispatch(MoveColumnRight(column.id)), style=[
              "padding: 2px 6px", "background: transparent", "color: #94a3b8", "border: none",
              "cursor: pointer", "font-size: 12px",
            ]) <| "\u{25B6}"
          } else {
            @html.text("")
          },
          @html.button(on_click=dispatch(DeleteColumn(column.id)), style=[
            "padding: 2px 6px", "background: transparent", "color: #dc2626", "border: none",
            "cursor: pointer", "font-size: 12px",
          ]) <| "\u{2715}",
        ],
      ]
    },
    // Cards list with optional drop zones
    @html.div(style=["flex: 1", "overflow-y: auto"]) <| ({
      let items : Array[@rabbita.Html] = []
      for i, card in col_cards {
        if is_moving {
          items.push(view_drop_zone(dispatch, column.id, i))
        }
        items.push(self.view_card_item(dispatch, card))
      }
      // Bottom drop zone
      if is_moving {
        items.push(view_drop_zone(dispatch, column.id, col_cards.length()))
      }
      items
    }),
    // Add card button/form
    if self.adding_to_column == column.id {
      self.view_add_card_form(dispatch)
    } else {
      @html.button(on_click=dispatch(ShowAddCard(column.id)), style=[
        "width: 100%", "padding: 8px", "background: transparent", "color: #94a3b8",
        "border: 1px dashed #cbd5e1", "border-radius: 6px", "cursor: pointer", "font-size: 13px",
        "margin-top: 6px",
      ]) <| "+ Add Card"
    },
  ]
}
