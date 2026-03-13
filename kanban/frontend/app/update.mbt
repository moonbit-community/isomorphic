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
// TODO (upstream): @http.Expecting is not well designed?
#warnings("-unresolved_type_variable")
pub fn Model::update(
  self : Model,
  msg~ : Msg,
  dispatch~ : @rabbita.Dispatch[Msg],
) -> (Model, @rabbita.Cmd) {
  match msg {
    Init => ({ ..self, loading: true }, fetch_board(dispatch))
    GotBoard(Ok(board)) =>
      (
        { ..self, columns: board.columns, cards: board.cards, loading: false },
        @rabbita.none,
      )
    GotBoard(Err(_)) => ({ ..self, loading: false }, @rabbita.none)
    // ---- Column CRUD ----
    ShowAddColumn =>
      ({ ..self, adding_column: true, new_column_title: "" }, @rabbita.none)
    HideAddColumn => ({ ..self, adding_column: false }, @rabbita.none)
    NewColumnTitleChanged(v) =>
      ({ ..self, new_column_title: v }, @rabbita.none)
    AddColumn => {
      if !@shared.validate_column_title(self.new_column_title) {
        return (self, @rabbita.none)
      }
      let title = self.new_column_title
      let cmd = @http.post(
        @shared.api_columns,
        Json({ "title": title }),
        expect=Json(fn(result) { dispatch(ColumnAdded(result)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode column")
          }
        }),
      )
      ({ ..self, adding_column: false }, cmd)
    }
    ColumnAdded(Ok(col)) => {
      let columns = self.columns.copy()
      columns.push(col)
      ({ ..self, columns, }, @rabbita.none)
    }
    ColumnAdded(Err(_)) => (self, @rabbita.none)
    StartRenameColumn(id, title) =>
      (
        { ..self, renaming_column: id, rename_column_title: title },
        @rabbita.none,
      )
    CancelRenameColumn => ({ ..self, renaming_column: 0 }, @rabbita.none)
    RenameColumnTitleChanged(v) =>
      ({ ..self, rename_column_title: v }, @rabbita.none)
    ConfirmRenameColumn => {
      let id = self.renaming_column
      if id == 0 ||
        !@shared.validate_column_title(self.rename_column_title) {
        return (self, @rabbita.none)
      }
      let title = self.rename_column_title
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(ColumnRenamed)
      })
      let cmd = @http.post(
        @shared.api_column(id),
        Json({ "title": title }),
        expect~,
      )
      // Optimistically update
      let columns = self.columns.map(fn(c) {
        if c.id == id {
          { ..c, title, }
        } else {
          c
        }
      })
      ({ ..self, columns, renaming_column: 0 }, cmd)
    }
    ColumnRenamed => (self, fetch_board(dispatch))
    DeleteColumn(id) => {
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(ColumnDeleted)
      })
      let cmd = @http.delete(@shared.api_column(id), expect~)
      let columns = self.columns.filter(fn(c) { c.id != id })
      let cards = self.cards.filter(fn(c) { c.column_id != id })
      ({ ..self, columns, cards }, cmd)
    }
    ColumnDeleted => (self, fetch_board(dispatch))
    MoveColumnLeft(id) | MoveColumnRight(id) => {
      let sorted = @shared.sort_by_position(self.columns, fn(c) { c.position })
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
        return (self, @rabbita.none)
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
        Json({ "new_position": new_pos.to_double() }),
        expect~,
      )
      // Optimistic swap
      let columns = self.columns.map(fn(c) {
        if c.id == id {
          { ..c, position: other.position }
        } else if c.id == other.id {
          { ..c, position: this_col.position }
        } else {
          c
        }
      })
      ({ ..self, columns, }, cmd)
    }
    ColumnMoved => (self, fetch_board(dispatch))
    // ---- Card CRUD ----
    ShowAddCard(column_id) =>
      (
        {
          ..self,
          adding_to_column: column_id,
          new_card_title: "",
          new_card_desc: "",
          new_card_color: "",
        },
        @rabbita.none,
      )
    HideAddCard => ({ ..self, adding_to_column: 0 }, @rabbita.none)
    NewCardTitleChanged(v) => ({ ..self, new_card_title: v }, @rabbita.none)
    NewCardDescChanged(v) => ({ ..self, new_card_desc: v }, @rabbita.none)
    NewCardColorChanged(v) => ({ ..self, new_card_color: v }, @rabbita.none)
    AddCard => {
      let col_id = self.adding_to_column
      if col_id == 0 || !@shared.validate_card_title(self.new_card_title) {
        return (self, @rabbita.none)
      }
      let title = self.new_card_title
      let desc = self.new_card_desc
      let color = self.new_card_color
      let cmd = @http.post(
        @shared.api_cards,
        Json(
          {
            "column_id": col_id.to_double(),
            "title": title,
            "description": desc,
            "color": color,
          },
        ),
        expect=Json(fn(result) { dispatch(CardAdded(result)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode card")
          }
        }),
      )
      ({ ..self, adding_to_column: 0 }, cmd)
    }
    CardAdded(Ok(card)) => {
      let cards = self.cards.copy()
      cards.push(card)
      ({ ..self, cards, }, @rabbita.none)
    }
    CardAdded(Err(_)) => (self, @rabbita.none)
    StartEditCard(card) =>
      (
        {
          ..self,
          editing_card: card.id,
          edit_title: card.title,
          edit_desc: card.description,
          edit_color: card.color,
        },
        @rabbita.none,
      )
    CancelEditCard => ({ ..self, editing_card: 0 }, @rabbita.none)
    EditTitleChanged(v) => ({ ..self, edit_title: v }, @rabbita.none)
    EditDescChanged(v) => ({ ..self, edit_desc: v }, @rabbita.none)
    EditColorChanged(v) => ({ ..self, edit_color: v }, @rabbita.none)
    SaveEditCard => {
      let id = self.editing_card
      if id == 0 || !@shared.validate_card_title(self.edit_title) {
        return (self, @rabbita.none)
      }
      let title = self.edit_title
      let desc = self.edit_desc
      let color = self.edit_color
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(CardUpdated)
      })
      let cmd = @http.post(
        @shared.api_card(id),
        Json({ "title": title, "description": desc, "color": color }),
        expect~,
      )
      // Optimistic update
      let cards = self.cards.map(fn(c) {
        if c.id == id {
          { ..c, title, description: desc, color }
        } else {
          c
        }
      })
      ({ ..self, cards, editing_card: 0 }, cmd)
    }
    CardUpdated => (self, fetch_board(dispatch))
    DeleteCard(id) => {
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(CardDeleted)
      })
      let cmd = @http.delete(@shared.api_card(id), expect~)
      let cards = self.cards.filter(fn(c) { c.id != id })
      ({ ..self, cards, }, cmd)
    }
    CardDeleted => (self, fetch_board(dispatch))
    // ---- Move mode ----
    SelectCardToMove(id) =>
      if self.moving_card == id {
        ({ ..self, moving_card: 0 }, @rabbita.none)
      } else {
        ({ ..self, moving_card: id }, @rabbita.none)
      }
    CancelMove => ({ ..self, moving_card: 0 }, @rabbita.none)
    MoveCardTo(target_col, target_idx) => {
      let card_id = self.moving_card
      if card_id == 0 {
        return (self, @rabbita.none)
      }
      // Get cards in target column, excluding the card being moved
      let col_cards = @shared.cards_in_column(self.cards, target_col).filter(fn(
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
          {
            "target_column_id": target_col.to_double(),
            "new_position": new_position.to_double(),
          },
        ),
        expect~,
      )
      // Optimistic move
      let pos = if new_position == 0 {
        @shared.position_gap
      } else {
        new_position
      }
      let cards = self.cards.map(fn(c) {
        if c.id == card_id {
          { ..c, column_id: target_col, position: pos }
        } else {
          c
        }
      })
      ({ ..self, cards, moving_card: 0 }, cmd)
    }
    CardMoved => (self, fetch_board(dispatch))
  }
}
