///|
/// Application state for the Kanban board MVU architecture.
struct Model {
  columns : Array[@shared.Column]
  cards : Array[@shared.Card]
  // Card creation
  adding_to_column : Int
  new_card_title : String
  new_card_desc : String
  new_card_color : String
  // Card editing
  editing_card : Int
  edit_title : String
  edit_desc : String
  edit_color : String
  // Column creation
  adding_column : Bool
  new_column_title : String
  // Column renaming
  renaming_column : Int
  rename_column_title : String
  // Move mode
  moving_card : Int
  loading : Bool
}

///|
/// All possible user actions and server responses.
enum Msg {
  Init
  GotBoard(Result[@shared.Board, String])
  // Column CRUD
  ShowAddColumn
  HideAddColumn
  NewColumnTitleChanged(String)
  AddColumn
  ColumnAdded(Result[@shared.Column, String])
  StartRenameColumn(Int, String)
  CancelRenameColumn
  RenameColumnTitleChanged(String)
  ConfirmRenameColumn
  ColumnRenamed
  DeleteColumn(Int)
  ColumnDeleted
  MoveColumnLeft(Int)
  MoveColumnRight(Int)
  ColumnMoved
  // Card CRUD
  ShowAddCard(Int)
  HideAddCard
  NewCardTitleChanged(String)
  NewCardDescChanged(String)
  NewCardColorChanged(String)
  AddCard
  CardAdded(Result[@shared.Card, String])
  StartEditCard(@shared.Card)
  CancelEditCard
  EditTitleChanged(String)
  EditDescChanged(String)
  EditColorChanged(String)
  SaveEditCard
  CardUpdated
  DeleteCard(Int)
  CardDeleted
  // Move mode
  SelectCardToMove(Int)
  CancelMove
  MoveCardTo(Int, Int)
  CardMoved
}

///|
/// Issue GET /api/board and dispatch GotBoard on response.
fn fetch_board(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    @shared.api_board,
    expect=Json(fn(result) { dispatch(GotBoard(result)) }, fn(json) {
      Ok(@json.from_json(json)) catch {
        _ => Err("Failed to decode board")
      }
    }),
  )
}

///|
/// MVU update: handle a message, return new model and optional command.
fn update(
  dispatch : @rabbita.Dispatch[Msg],
  msg : Msg,
  model : Model,
) -> (@rabbita.Cmd, Model) {
  match msg {
    Init => (fetch_board(dispatch), { ..model, loading: true })
    GotBoard(Ok(board)) =>
      (
        @rabbita.none,
        { ..model, columns: board.columns, cards: board.cards, loading: false },
      )
    GotBoard(Err(_)) => (@rabbita.none, { ..model, loading: false })
    // ---- Column CRUD ----
    ShowAddColumn =>
      (@rabbita.none, { ..model, adding_column: true, new_column_title: "" })
    HideAddColumn => (@rabbita.none, { ..model, adding_column: false })
    NewColumnTitleChanged(v) =>
      (@rabbita.none, { ..model, new_column_title: v })
    AddColumn => {
      if not(@shared.validate_column_title(model.new_column_title)) {
        return (@rabbita.none, model)
      }
      let title = model.new_column_title
      let cmd = @http.post(
        @shared.api_columns,
        Json(({ "title": title } : Json)),
        expect=Json(fn(result) { dispatch(ColumnAdded(result)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode column")
          }
        }),
      )
      (cmd, { ..model, adding_column: false })
    }
    ColumnAdded(Ok(col)) => {
      let columns = model.columns.copy()
      columns.push(col)
      (@rabbita.none, { ..model, columns, })
    }
    ColumnAdded(Err(_)) => (@rabbita.none, model)
    StartRenameColumn(id, title) =>
      (
        @rabbita.none,
        { ..model, renaming_column: id, rename_column_title: title },
      )
    CancelRenameColumn => (@rabbita.none, { ..model, renaming_column: 0 })
    RenameColumnTitleChanged(v) =>
      (@rabbita.none, { ..model, rename_column_title: v })
    ConfirmRenameColumn => {
      let id = model.renaming_column
      if id == 0 ||
        not(@shared.validate_column_title(model.rename_column_title)) {
        return (@rabbita.none, model)
      }
      let title = model.rename_column_title
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(ColumnRenamed)
      })
      let cmd = @http.post(
        @shared.api_column(id),
        Json(({ "title": title } : Json)),
        expect~,
      )
      // Optimistically update
      let columns = model.columns.map(fn(c) {
        if c.id == id {
          { ..c, title, }
        } else {
          c
        }
      })
      (cmd, { ..model, columns, renaming_column: 0 })
    }
    ColumnRenamed => (fetch_board(dispatch), model)
    DeleteColumn(id) => {
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(ColumnDeleted)
      })
      let cmd = @http.delete(@shared.api_column(id), expect~)
      let columns = model.columns.filter(fn(c) { c.id != id })
      let cards = model.cards.filter(fn(c) { c.column_id != id })
      (cmd, { ..model, columns, cards })
    }
    ColumnDeleted => (fetch_board(dispatch), model)
    MoveColumnLeft(id) | MoveColumnRight(id) => {
      let sorted = @shared.sort_by_position(model.columns, fn(c) { c.position })
      let mut idx = -1
      for i, c in sorted {
        if c.id == id {
          idx = i
          break
        }
      }
      let target_idx = match msg {
        MoveColumnLeft(_) => idx - 1
        _ => idx + 1
      }
      if idx < 0 || target_idx < 0 || target_idx >= sorted.length() {
        return (@rabbita.none, model)
      }
      // Swap positions
      let other = sorted[target_idx]
      let this_col = sorted[idx]
      let new_pos = other.position
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(ColumnMoved)
      })
      let cmd = @http.post(
        @shared.api_column_move(id),
        Json(({ "new_position": new_pos.to_double() } : Json)),
        expect~,
      )
      // Optimistic swap
      let columns = model.columns.map(fn(c) {
        if c.id == id {
          { ..c, position: other.position }
        } else if c.id == other.id {
          { ..c, position: this_col.position }
        } else {
          c
        }
      })
      (cmd, { ..model, columns, })
    }
    ColumnMoved => (fetch_board(dispatch), model)
    // ---- Card CRUD ----
    ShowAddCard(column_id) =>
      (
        @rabbita.none,
        {
          ..model,
          adding_to_column: column_id,
          new_card_title: "",
          new_card_desc: "",
          new_card_color: "",
        },
      )
    HideAddCard => (@rabbita.none, { ..model, adding_to_column: 0 })
    NewCardTitleChanged(v) => (@rabbita.none, { ..model, new_card_title: v })
    NewCardDescChanged(v) => (@rabbita.none, { ..model, new_card_desc: v })
    NewCardColorChanged(v) => (@rabbita.none, { ..model, new_card_color: v })
    AddCard => {
      let col_id = model.adding_to_column
      if col_id == 0 || not(@shared.validate_card_title(model.new_card_title)) {
        return (@rabbita.none, model)
      }
      let title = model.new_card_title
      let desc = model.new_card_desc
      let color = model.new_card_color
      let cmd = @http.post(
        @shared.api_cards,
        Json(
          (
            {
              "column_id": col_id.to_double(),
              "title": title,
              "description": desc,
              "color": color,
            } : Json),
        ),
        expect=Json(fn(result) { dispatch(CardAdded(result)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode card")
          }
        }),
      )
      (cmd, { ..model, adding_to_column: 0 })
    }
    CardAdded(Ok(card)) => {
      let cards = model.cards.copy()
      cards.push(card)
      (@rabbita.none, { ..model, cards, })
    }
    CardAdded(Err(_)) => (@rabbita.none, model)
    StartEditCard(card) =>
      (
        @rabbita.none,
        {
          ..model,
          editing_card: card.id,
          edit_title: card.title,
          edit_desc: card.description,
          edit_color: card.color,
        },
      )
    CancelEditCard => (@rabbita.none, { ..model, editing_card: 0 })
    EditTitleChanged(v) => (@rabbita.none, { ..model, edit_title: v })
    EditDescChanged(v) => (@rabbita.none, { ..model, edit_desc: v })
    EditColorChanged(v) => (@rabbita.none, { ..model, edit_color: v })
    SaveEditCard => {
      let id = model.editing_card
      if id == 0 || not(@shared.validate_card_title(model.edit_title)) {
        return (@rabbita.none, model)
      }
      let title = model.edit_title
      let desc = model.edit_desc
      let color = model.edit_color
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(CardUpdated)
      })
      let cmd = @http.post(
        @shared.api_card(id),
        Json(({ "title": title, "description": desc, "color": color } : Json)),
        expect~,
      )
      // Optimistic update
      let cards = model.cards.map(fn(c) {
        if c.id == id {
          { ..c, title, description: desc, color }
        } else {
          c
        }
      })
      (cmd, { ..model, cards, editing_card: 0 })
    }
    CardUpdated => (fetch_board(dispatch), model)
    DeleteCard(id) => {
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(CardDeleted)
      })
      let cmd = @http.delete(@shared.api_card(id), expect~)
      let cards = model.cards.filter(fn(c) { c.id != id })
      (cmd, { ..model, cards, })
    }
    CardDeleted => (fetch_board(dispatch), model)
    // ---- Move mode ----
    SelectCardToMove(id) =>
      if model.moving_card == id {
        (@rabbita.none, { ..model, moving_card: 0 })
      } else {
        (@rabbita.none, { ..model, moving_card: id })
      }
    CancelMove => (@rabbita.none, { ..model, moving_card: 0 })
    MoveCardTo(target_col, target_idx) => {
      let card_id = model.moving_card
      if card_id == 0 {
        return (@rabbita.none, model)
      }
      // Get cards in target column, excluding the card being moved
      let col_cards = @shared.cards_in_column(model.cards, target_col).filter(fn(
        c,
      ) {
        c.id != card_id
      })
      let new_position = @shared.compute_move_position(col_cards, target_idx)
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(CardMoved)
      })
      let cmd = @http.post(
        @shared.api_card_move(card_id),
        Json(
          (
            {
              "target_column_id": target_col.to_double(),
              "new_position": new_position.to_double(),
            } : Json),
        ),
        expect~,
      )
      // Optimistic move
      let pos = if new_position == 0 {
        @shared.position_gap
      } else {
        new_position
      }
      let cards = model.cards.map(fn(c) {
        if c.id == card_id {
          { ..c, column_id: target_col, position: pos }
        } else {
          c
        }
      })
      (cmd, { ..model, cards, moving_card: 0 })
    }
    CardMoved => (fetch_board(dispatch), model)
  }
}

// ========== View ==========

///|
/// Render the top header bar with title and action buttons.
fn view_header(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
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
        if model.moving_card != 0 {
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
        if model.adding_column {
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
/// Render the inline form for adding a new column.
fn view_add_column_form(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  @html.div(
    style=[
      "min-width: 272px", "max-width: 272px", "background: white", "border-radius: 10px",
      "padding: 16px", "border: 2px dashed #cbd5e1",
    ],
    [
      @html.input(
        input_type=Text,
        placeholder="Column title",
        value=model.new_column_title,
        on_input=fn(v) { dispatch(NewColumnTitleChanged(v)) },
        style=[
          "width: 100%", "padding: 8px 10px", "border: 1px solid #e2e8f0", "border-radius: 6px",
          "font-size: 14px", "outline: none", "margin-bottom: 8px",
        ],
        "",
      ),
      @html.div(style=["display: flex", "gap: 6px"], [
        @html.button(
          on_click=dispatch(AddColumn),
          style=[
            "padding: 6px 14px", "background: #0d9488", "color: white", "border: none",
            "border-radius: 6px", "cursor: pointer", "font-size: 13px",
          ],
          "Add",
        ),
        @html.button(
          on_click=dispatch(HideAddColumn),
          style=[
            "padding: 6px 14px", "background: #f1f5f9", "color: #64748b", "border: none",
            "border-radius: 6px", "cursor: pointer", "font-size: 13px",
          ],
          "Cancel",
        ),
      ]),
    ],
  )
}

///|
/// Render a clickable drop zone for card placement during move mode.
fn view_drop_zone(
  dispatch : @rabbita.Dispatch[Msg],
  column_id : Int,
  index : Int,
) -> @rabbita.Html {
  @html.div(
    on_click=dispatch(MoveCardTo(column_id, index)),
    style=[
      "height: 6px", "margin: 4px 0", "border-radius: 3px", "background: #99f6e4",
      "border: 2px dashed #14b8a6", "cursor: pointer", "transition: all 0.15s",
    ],
    [@html.text("")],
  )
}

///|
/// Render a row of color swatches for card label selection.
fn view_color_picker(
  dispatch : @rabbita.Dispatch[Msg],
  current : String,
  on_change : (String) -> Msg,
) -> @rabbita.Html {
  @html.div(
    style=["display: flex", "gap: 4px", "margin-bottom: 8px", "flex-wrap: wrap"],
    @shared.valid_colors.map(fn(c) {
      let bg = if c == "" { "#f1f5f9" } else { @shared.color_to_css(c) }
      let is_selected = c == current
      let border = if is_selected {
        "2px solid #1a1a2e"
      } else {
        "2px solid transparent"
      }
      @html.div(
        on_click=dispatch(on_change(c)),
        style=[
          "width: 24px",
          "height: 24px",
          "border-radius: 50%",
          "background: \{bg}",
          "cursor: pointer",
          "border: \{border}",
        ],
        [@html.text("")],
      )
    }),
  )
}

///|
/// Render a single card; shows inline edit form when editing this card.
fn view_card_item(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
  card : @shared.Card,
) -> @rabbita.Html {
  let is_moving = model.moving_card == card.id
  let border_left = match @shared.color_to_css(card.color) {
    "" => "3px solid #e2e8f0"
    css => "3px solid \{css}"
  }
  let bg = if is_moving { "#f0fdfa" } else { "white" }
  if model.editing_card == card.id {
    // Inline edit form
    @html.div(
      style=[
        "background: white", "border-radius: 8px", "padding: 12px", "border: 1px solid #0d9488",
        "margin-bottom: 6px",
      ],
      [
        @html.input(
          input_type=Text,
          placeholder="Card title",
          value=model.edit_title,
          on_input=fn(v) { dispatch(EditTitleChanged(v)) },
          style=[
            "width: 100%", "padding: 6px 8px", "border: 1px solid #e2e8f0", "border-radius: 4px",
            "font-size: 13px", "outline: none", "margin-bottom: 6px",
          ],
          "",
        ),
        @html.textarea(
          placeholder="Description (optional)",
          value=model.edit_desc,
          on_input=fn(v) { dispatch(EditDescChanged(v)) },
          rows=2,
          style=[
            "width: 100%", "padding: 6px 8px", "border: 1px solid #e2e8f0", "border-radius: 4px",
            "font-size: 12px", "outline: none", "resize: vertical", "font-family: inherit",
            "margin-bottom: 6px",
          ],
          "",
        ),
        view_color_picker(dispatch, model.edit_color, fn(c) {
          EditColorChanged(c)
        }),
        @html.div(style=["display: flex", "gap: 6px"], [
          @html.button(
            on_click=dispatch(SaveEditCard),
            style=[
              "padding: 5px 12px", "background: #0d9488", "color: white", "border: none",
              "border-radius: 4px", "cursor: pointer", "font-size: 12px",
            ],
            "Save",
          ),
          @html.button(
            on_click=dispatch(CancelEditCard),
            style=[
              "padding: 5px 12px", "background: #f1f5f9", "color: #64748b", "border: none",
              "border-radius: 4px", "cursor: pointer", "font-size: 12px",
            ],
            "Cancel",
          ),
        ]),
      ],
    )
  } else {
    @html.div(
      style=[
        "background: \{bg}",
        "border-radius: 8px",
        "padding: 10px 12px",
        "border-left: \{border_left}",
        "margin-bottom: 6px",
        "border: 1px solid #f0f0f5",
        "transition: all 0.15s",
      ],
      [
        @html.div(
          style=[
            "font-size: 14px", "font-weight: 500", "color: #1e293b", "margin-bottom: 4px",
          ],
          [@html.text(card.title)],
        ),
        if card.description != "" {
          @html.div(
            style=[
              "font-size: 12px", "color: #64748b", "margin-bottom: 6px", "line-height: 1.4",
            ],
            [@html.text(card.description)],
          )
        } else {
          @html.text("")
        },
        @html.div(
          style=["display: flex", "gap: 4px", "justify-content: flex-end"],
          [
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
            @html.button(
              on_click=dispatch(StartEditCard(card)),
              style=[
                "padding: 3px 8px", "font-size: 11px", "cursor: pointer", "border-radius: 4px",
                "border: 1px solid #e2e8f0", "background: #f8fafc", "color: #64748b",
              ],
              "Edit",
            ),
            @html.button(
              on_click=dispatch(DeleteCard(card.id)),
              style=[
                "padding: 3px 8px", "font-size: 11px", "cursor: pointer", "border-radius: 4px",
                "border: 1px solid #fecaca", "background: #fef2f2", "color: #dc2626",
              ],
              "Del",
            ),
          ],
        ),
      ],
    )
  }
}

///|
/// Render the inline form for creating a new card in a column.
fn view_add_card_form(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  @html.div(
    style=[
      "padding: 10px", "background: #f8fafc", "border-radius: 8px", "border: 1px solid #e2e8f0",
      "margin-top: 6px",
    ],
    [
      @html.input(
        input_type=Text,
        placeholder="Card title",
        value=model.new_card_title,
        on_input=fn(v) { dispatch(NewCardTitleChanged(v)) },
        style=[
          "width: 100%", "padding: 6px 8px", "border: 1px solid #e2e8f0", "border-radius: 4px",
          "font-size: 13px", "outline: none", "margin-bottom: 6px",
        ],
        "",
      ),
      @html.textarea(
        placeholder="Description (optional)",
        value=model.new_card_desc,
        on_input=fn(v) { dispatch(NewCardDescChanged(v)) },
        rows=2,
        style=[
          "width: 100%", "padding: 6px 8px", "border: 1px solid #e2e8f0", "border-radius: 4px",
          "font-size: 12px", "outline: none", "resize: vertical", "font-family: inherit",
          "margin-bottom: 6px",
        ],
        "",
      ),
      view_color_picker(dispatch, model.new_card_color, fn(c) {
        NewCardColorChanged(c)
      }),
      @html.div(style=["display: flex", "gap: 6px"], [
        @html.button(
          on_click=dispatch(AddCard),
          style=[
            "padding: 5px 12px", "background: #0d9488", "color: white", "border: none",
            "border-radius: 4px", "cursor: pointer", "font-size: 12px",
          ],
          "Add Card",
        ),
        @html.button(
          on_click=dispatch(HideAddCard),
          style=[
            "padding: 5px 12px", "background: #f1f5f9", "color: #64748b", "border: none",
            "border-radius: 4px", "cursor: pointer", "font-size: 12px",
          ],
          "Cancel",
        ),
      ]),
    ],
  )
}

///|
/// Render a single column with its header, card list, and add-card button.
fn view_column(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
  column : @shared.Column,
  col_index : Int,
  total_cols : Int,
) -> @rabbita.Html {
  let col_cards = @shared.cards_in_column(model.cards, column.id)
  let is_moving = model.moving_card != 0
  @html.div(
    style=[
      "min-width: 272px", "max-width: 272px", "background: #f1f5f9", "border-radius: 10px",
      "padding: 12px", "display: flex", "flex-direction: column", "max-height: calc(100vh - 140px)",
    ],
    [
      // Column header
      if model.renaming_column == column.id {
        @html.div(style=["margin-bottom: 10px"], [
          @html.input(
            input_type=Text,
            value=model.rename_column_title,
            on_input=fn(v) { dispatch(RenameColumnTitleChanged(v)) },
            style=[
              "width: 100%", "padding: 6px 8px", "border: 1px solid #0d9488", "border-radius: 4px",
              "font-size: 14px", "outline: none", "font-weight: 600",
            ],
            "",
          ),
          @html.div(style=["display: flex", "gap: 4px", "margin-top: 4px"], [
            @html.button(
              on_click=dispatch(ConfirmRenameColumn),
              style=[
                "padding: 3px 10px", "background: #0d9488", "color: white", "border: none",
                "border-radius: 4px", "cursor: pointer", "font-size: 11px",
              ],
              "Save",
            ),
            @html.button(
              on_click=dispatch(CancelRenameColumn),
              style=[
                "padding: 3px 10px", "background: #e2e8f0", "color: #64748b", "border: none",
                "border-radius: 4px", "cursor: pointer", "font-size: 11px",
              ],
              "Cancel",
            ),
          ]),
        ])
      } else {
        @html.div(
          style=[
            "display: flex", "justify-content: space-between", "align-items: center",
            "margin-bottom: 10px", "padding: 0 2px",
          ],
          [
            @html.div(
              on_click=dispatch(StartRenameColumn(column.id, column.title)),
              style=[
                "font-size: 14px", "font-weight: 600", "color: #334155", "cursor: pointer",
              ],
              [
                @html.text(column.title),
                @html.span(
                  style=[
                    "color: #94a3b8", "font-weight: 400", "margin-left: 6px",
                  ],
                  "\{col_cards.length()}",
                ),
              ],
            ),
            @html.div(style=["display: flex", "gap: 2px"], [
              if col_index > 0 {
                @html.button(
                  on_click=dispatch(MoveColumnLeft(column.id)),
                  style=[
                    "padding: 2px 6px", "background: transparent", "color: #94a3b8",
                    "border: none", "cursor: pointer", "font-size: 12px",
                  ],
                  "\u{25C0}",
                )
              } else {
                @html.text("")
              },
              if col_index < total_cols - 1 {
                @html.button(
                  on_click=dispatch(MoveColumnRight(column.id)),
                  style=[
                    "padding: 2px 6px", "background: transparent", "color: #94a3b8",
                    "border: none", "cursor: pointer", "font-size: 12px",
                  ],
                  "\u{25B6}",
                )
              } else {
                @html.text("")
              },
              @html.button(
                on_click=dispatch(DeleteColumn(column.id)),
                style=[
                  "padding: 2px 6px", "background: transparent", "color: #dc2626",
                  "border: none", "cursor: pointer", "font-size: 12px",
                ],
                "\u{2715}",
              ),
            ]),
          ],
        )
      },
      // Cards list with optional drop zones
      @html.div(
        style=["flex: 1", "overflow-y: auto"],
        {
          let items : Array[@rabbita.Html] = []
          for i, card in col_cards {
            if is_moving {
              items.push(view_drop_zone(dispatch, column.id, i))
            }
            items.push(view_card_item(dispatch, model, card))
          }
          // Bottom drop zone
          if is_moving {
            items.push(view_drop_zone(dispatch, column.id, col_cards.length()))
          }
          items
        },
      ),
      // Add card button/form
      if model.adding_to_column == column.id {
        view_add_card_form(dispatch, model)
      } else {
        @html.button(
          on_click=dispatch(ShowAddCard(column.id)),
          style=[
            "width: 100%", "padding: 8px", "background: transparent", "color: #94a3b8",
            "border: 1px dashed #cbd5e1", "border-radius: 6px", "cursor: pointer",
            "font-size: 13px", "margin-top: 6px",
          ],
          "+ Add Card",
        )
      },
    ],
  )
}

///|
/// MVU view: render the full board from current model state.
fn view(dispatch : @rabbita.Dispatch[Msg], model : Model) -> @rabbita.Html {
  let sorted_columns = @shared.sort_by_position(model.columns, fn(c) {
    c.position
  })
  @html.div(style=["padding: 16px 24px", "min-height: 100vh"], [
    view_header(dispatch, model),
    if model.loading {
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
            view_column(dispatch, model, col, i, sorted_columns.length())
          })
          if model.adding_column {
            cols.push(view_add_column_form(dispatch, model))
          }
          cols
        },
      )
    },
  ])
}

///|
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model={
      columns: [],
      cards: [],
      adding_to_column: 0,
      new_card_title: "",
      new_card_desc: "",
      new_card_color: "",
      editing_card: 0,
      edit_title: "",
      edit_desc: "",
      edit_color: "",
      adding_column: false,
      new_column_title: "",
      renaming_column: 0,
      rename_column_title: "",
      moving_card: 0,
      loading: false,
    },
    update~,
    view~,
  )
  let app = @rabbita.new(app_cell)
  app.with_init(dispatch(Init))
  app.mount("app")
}
