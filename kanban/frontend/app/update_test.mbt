///|
fn noop_dispatch(_msg : Msg) -> @rabbita.Cmd {
  @rabbita.none
}

///|
fn empty_model() -> Model {
  {
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
  }
}

///|
fn sample_columns() -> Array[@shared.Column] {
  [
    { id: 1, title: "To Do", position: 1000 },
    { id: 2, title: "In Progress", position: 2000 },
    { id: 3, title: "Done", position: 3000 },
  ]
}

///|
fn sample_cards() -> Array[@shared.Card] {
  [
    {
      id: 1,
      column_id: 1,
      title: "Design UI",
      description: "Create mockups",
      color: "blue",
      position: 1000,
    },
    {
      id: 2,
      column_id: 1,
      title: "Write tests",
      description: "",
      color: "",
      position: 2000,
    },
    {
      id: 3,
      column_id: 2,
      title: "Implement API",
      description: "REST endpoints",
      color: "green",
      position: 1000,
    },
  ]
}

// ── Init ─────────────────────────────────────────────────────────────

///|
test "Init sets loading to true" {
  let (model, _) = empty_model().update(msg=Init, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  columns: [],
      #|  cards: [],
      #|  adding_to_column: 0,
      #|  new_card_title: "",
      #|  new_card_desc: "",
      #|  new_card_color: "",
      #|  editing_card: 0,
      #|  edit_title: "",
      #|  edit_desc: "",
      #|  edit_color: "",
      #|  adding_column: false,
      #|  new_column_title: "",
      #|  renaming_column: 0,
      #|  rename_column_title: "",
      #|  moving_card: 0,
      #|  loading: true,
      #|}
    ),
  )
}

// ── GotBoard ─────────────────────────────────────────────────────────

///|
test "GotBoard/Ok populates columns and cards, clears loading" {
  let initial = { ..empty_model(), loading: true }
  let board : @shared.Board = {
    columns: sample_columns(),
    cards: sample_cards(),
  }
  let (model, _) = initial.update(
    msg=GotBoard(Ok(board)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  columns: [
      #|    { id: 1, title: "To Do", position: 1000 },
      #|    { id: 2, title: "In Progress", position: 2000 },
      #|    { id: 3, title: "Done", position: 3000 },
      #|  ],
      #|  cards: [
      #|    {
      #|      id: 1,
      #|      column_id: 1,
      #|      title: "Design UI",
      #|      description: "Create mockups",
      #|      color: "blue",
      #|      position: 1000,
      #|    },
      #|    {
      #|      id: 2,
      #|      column_id: 1,
      #|      title: "Write tests",
      #|      description: "",
      #|      color: "",
      #|      position: 2000,
      #|    },
      #|    {
      #|      id: 3,
      #|      column_id: 2,
      #|      title: "Implement API",
      #|      description: "REST endpoints",
      #|      color: "green",
      #|      position: 1000,
      #|    },
      #|  ],
      #|  adding_to_column: 0,
      #|  new_card_title: "",
      #|  new_card_desc: "",
      #|  new_card_color: "",
      #|  editing_card: 0,
      #|  edit_title: "",
      #|  edit_desc: "",
      #|  edit_color: "",
      #|  adding_column: false,
      #|  new_column_title: "",
      #|  renaming_column: 0,
      #|  rename_column_title: "",
      #|  moving_card: 0,
      #|  loading: false,
      #|}
    ),
  )
}

///|
test "GotBoard/Err clears loading without changing data" {
  let initial = { ..empty_model(), loading: true }
  let (model, _) = initial.update(
    msg=GotBoard(Err("network")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.loading,
    content=(
      #|false
    ),
  )
}

// ── Column CRUD ──────────────────────────────────────────────────────

///|
test "ShowAddColumn enables adding_column and clears title" {
  let (model, _) = empty_model().update(
    msg=ShowAddColumn,
    dispatch=noop_dispatch,
  )
  debug_inspect(
    (model.adding_column, model.new_column_title),
    content=(
      #|(true, "")
    ),
  )
}

///|
test "HideAddColumn disables adding_column" {
  let initial = { ..empty_model(), adding_column: true }
  let (model, _) = initial.update(msg=HideAddColumn, dispatch=noop_dispatch)
  debug_inspect(
    model.adding_column,
    content=(
      #|false
    ),
  )
}

///|
test "NewColumnTitleChanged updates new_column_title" {
  let (model, _) = empty_model().update(
    msg=NewColumnTitleChanged("Backlog"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.new_column_title,
    content=(
      #|"Backlog"
    ),
  )
}

///|
test "AddColumn with empty title does nothing" {
  let initial = { ..empty_model(), adding_column: true, new_column_title: "" }
  let (model, _) = initial.update(msg=AddColumn, dispatch=noop_dispatch)
  debug_inspect(
    model.adding_column,
    content=(
      #|true
    ),
  )
}

///|
test "AddColumn with valid title clears adding_column" {
  let initial = {
    ..empty_model(),
    adding_column: true,
    new_column_title: "Backlog",
  }
  let (model, _) = initial.update(msg=AddColumn, dispatch=noop_dispatch)
  debug_inspect(
    model.adding_column,
    content=(
      #|false
    ),
  )
}

///|
test "AddColumn with too-long title does nothing" {
  let long = "a".repeat(@shared.max_column_title + 1)
  let initial = { ..empty_model(), adding_column: true, new_column_title: long }
  let (model, _) = initial.update(msg=AddColumn, dispatch=noop_dispatch)
  inspect(model.adding_column, content="true")
}

///|
test "ColumnAdded/Ok appends column" {
  let initial = { ..empty_model(), columns: sample_columns() }
  let new_col : @shared.Column = { id: 4, title: "Review", position: 4000 }
  let (model, _) = initial.update(
    msg=ColumnAdded(Ok(new_col)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.columns.length(),
    content=(
      #|4
    ),
  )
  debug_inspect(
    model.columns[3],
    content=(
      #|{ id: 4, title: "Review", position: 4000 }
    ),
  )
}

///|
test "ColumnAdded/Err leaves model unchanged" {
  let initial = { ..empty_model(), columns: sample_columns() }
  let (model, _) = initial.update(
    msg=ColumnAdded(Err("fail")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.columns.length(),
    content=(
      #|3
    ),
  )
}

// ── Column Rename ────────────────────────────────────────────────────

///|
test "StartRenameColumn sets renaming state" {
  let (model, _) = empty_model().update(
    msg=StartRenameColumn(1, "To Do"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    (model.renaming_column, model.rename_column_title),
    content=(
      #|(1, "To Do")
    ),
  )
}

///|
test "CancelRenameColumn clears renaming_column" {
  let initial = { ..empty_model(), renaming_column: 1 }
  let (model, _) = initial.update(
    msg=CancelRenameColumn,
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.renaming_column,
    content=(
      #|0
    ),
  )
}

///|
test "RenameColumnTitleChanged updates rename_column_title" {
  let (model, _) = empty_model().update(
    msg=RenameColumnTitleChanged("Doing"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.rename_column_title,
    content=(
      #|"Doing"
    ),
  )
}

///|
test "ConfirmRenameColumn with id 0 does nothing" {
  let initial = {
    ..empty_model(),
    renaming_column: 0,
    rename_column_title: "New",
  }
  let (model, _) = initial.update(
    msg=ConfirmRenameColumn,
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.renaming_column,
    content=(
      #|0
    ),
  )
}

///|
test "ConfirmRenameColumn with empty title does nothing" {
  let initial = {
    ..empty_model(),
    renaming_column: 1,
    rename_column_title: "",
    columns: sample_columns(),
  }
  let (model, _) = initial.update(
    msg=ConfirmRenameColumn,
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.renaming_column,
    content=(
      #|1
    ),
  )
}

///|
test "ConfirmRenameColumn optimistically updates column title" {
  let initial = {
    ..empty_model(),
    renaming_column: 1,
    rename_column_title: "Backlog",
    columns: sample_columns(),
  }
  let (model, _) = initial.update(
    msg=ConfirmRenameColumn,
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.renaming_column,
    content=(
      #|0
    ),
  )
  debug_inspect(
    model.columns[0].title,
    content=(
      #|"Backlog"
    ),
  )
}

///|
test "ColumnRenamed is passthrough" {
  let initial = { ..empty_model(), columns: sample_columns() }
  let (model, _) = initial.update(msg=ColumnRenamed, dispatch=noop_dispatch)
  debug_inspect(
    model.columns.length(),
    content=(
      #|3
    ),
  )
}

// ── Column Delete ────────────────────────────────────────────────────

///|
test "DeleteColumn removes column and its cards" {
  let initial = {
    ..empty_model(),
    columns: sample_columns(),
    cards: sample_cards(),
  }
  let (model, _) = initial.update(msg=DeleteColumn(1), dispatch=noop_dispatch)
  debug_inspect(
    model.columns.length(),
    content=(
      #|2
    ),
  )
  // Cards in column 1 (ids 1 and 2) should be removed
  debug_inspect(
    model.cards.length(),
    content=(
      #|1
    ),
  )
  debug_inspect(
    model.cards[0].id,
    content=(
      #|3
    ),
  )
}

///|
test "ColumnDeleted is passthrough" {
  let (model, _) = empty_model().update(
    msg=ColumnDeleted,
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.loading,
    content=(
      #|false
    ),
  )
}

// ── Column Move ──────────────────────────────────────────────────────

///|
test "MoveColumnLeft at first position does nothing" {
  let initial = { ..empty_model(), columns: sample_columns() }
  let (model, _) = initial.update(msg=MoveColumnLeft(1), dispatch=noop_dispatch)
  // Positions unchanged since column 1 is already first
  debug_inspect(
    model.columns[0].position,
    content=(
      #|1000
    ),
  )
}

///|
test "MoveColumnRight at last position does nothing" {
  let initial = { ..empty_model(), columns: sample_columns() }
  let (model, _) = initial.update(
    msg=MoveColumnRight(3),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.columns[2].position,
    content=(
      #|3000
    ),
  )
}

///|
test "MoveColumnRight swaps positions" {
  let initial = { ..empty_model(), columns: sample_columns() }
  let (model, _) = initial.update(
    msg=MoveColumnRight(1),
    dispatch=noop_dispatch,
  )
  // Column 1 should get position of column 2, and vice versa
  let col1 = model.columns.iter().find_first(fn(c) { c.id == 1 })
  let col2 = model.columns.iter().find_first(fn(c) { c.id == 2 })
  debug_inspect(
    col1.unwrap().position,
    content=(
      #|2000
    ),
  )
  debug_inspect(
    col2.unwrap().position,
    content=(
      #|1000
    ),
  )
}

///|
test "ColumnMoved is passthrough" {
  let (model, _) = empty_model().update(msg=ColumnMoved, dispatch=noop_dispatch)
  debug_inspect(
    model.loading,
    content=(
      #|false
    ),
  )
}

// ── Card CRUD ────────────────────────────────────────────────────────

///|
test "ShowAddCard sets adding_to_column and clears card fields" {
  let (model, _) = empty_model().update(
    msg=ShowAddCard(2),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    (
      model.adding_to_column,
      model.new_card_title,
      model.new_card_desc,
      model.new_card_color,
    ),
    content=(
      #|(2, "", "", "")
    ),
  )
}

///|
test "HideAddCard clears adding_to_column" {
  let initial = { ..empty_model(), adding_to_column: 2 }
  let (model, _) = initial.update(msg=HideAddCard, dispatch=noop_dispatch)
  debug_inspect(
    model.adding_to_column,
    content=(
      #|0
    ),
  )
}

///|
test "NewCardTitleChanged updates new_card_title" {
  let (model, _) = empty_model().update(
    msg=NewCardTitleChanged("New task"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.new_card_title,
    content=(
      #|"New task"
    ),
  )
}

///|
test "NewCardDescChanged updates new_card_desc" {
  let (model, _) = empty_model().update(
    msg=NewCardDescChanged("Details here"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.new_card_desc,
    content=(
      #|"Details here"
    ),
  )
}

///|
test "NewCardColorChanged updates new_card_color" {
  let (model, _) = empty_model().update(
    msg=NewCardColorChanged("red"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.new_card_color,
    content=(
      #|"red"
    ),
  )
}

///|
test "AddCard with empty title does nothing" {
  let initial = { ..empty_model(), adding_to_column: 1, new_card_title: "" }
  let (model, _) = initial.update(msg=AddCard, dispatch=noop_dispatch)
  debug_inspect(
    model.adding_to_column,
    content=(
      #|1
    ),
  )
}

///|
test "AddCard with no column does nothing" {
  let initial = { ..empty_model(), adding_to_column: 0, new_card_title: "Task" }
  let (model, _) = initial.update(msg=AddCard, dispatch=noop_dispatch)
  debug_inspect(
    model.adding_to_column,
    content=(
      #|0
    ),
  )
}

///|
test "AddCard with valid input clears adding_to_column" {
  let initial = {
    ..empty_model(),
    adding_to_column: 1,
    new_card_title: "New task",
    new_card_desc: "Details",
    new_card_color: "blue",
  }
  let (model, _) = initial.update(msg=AddCard, dispatch=noop_dispatch)
  debug_inspect(
    model.adding_to_column,
    content=(
      #|0
    ),
  )
}

///|
test "AddCard with too-long title does nothing" {
  let long = "a".repeat(@shared.max_card_title + 1)
  let initial = { ..empty_model(), adding_to_column: 1, new_card_title: long }
  let (model, _) = initial.update(msg=AddCard, dispatch=noop_dispatch)
  inspect(model.adding_to_column, content="1")
}

///|
test "CardAdded/Ok appends card" {
  let initial = { ..empty_model(), cards: sample_cards() }
  let new_card : @shared.Card = {
    id: 4,
    column_id: 2,
    title: "Deploy",
    description: "",
    color: "orange",
    position: 2000,
  }
  let (model, _) = initial.update(
    msg=CardAdded(Ok(new_card)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.cards.length(),
    content=(
      #|4
    ),
  )
  debug_inspect(
    model.cards[3].title,
    content=(
      #|"Deploy"
    ),
  )
}

///|
test "CardAdded/Err leaves model unchanged" {
  let initial = { ..empty_model(), cards: sample_cards() }
  let (model, _) = initial.update(
    msg=CardAdded(Err("fail")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.cards.length(),
    content=(
      #|3
    ),
  )
}

// ── Card Edit ────────────────────────────────────────────────────────

///|
test "StartEditCard sets editing state from card" {
  let card : @shared.Card = {
    id: 1,
    column_id: 1,
    title: "Design UI",
    description: "Create mockups",
    color: "blue",
    position: 1000,
  }
  let (model, _) = empty_model().update(
    msg=StartEditCard(card),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    (model.editing_card, model.edit_title, model.edit_desc, model.edit_color),
    content=(
      #|(1, "Design UI", "Create mockups", "blue")
    ),
  )
}

///|
test "CancelEditCard clears editing_card" {
  let initial = { ..empty_model(), editing_card: 1 }
  let (model, _) = initial.update(msg=CancelEditCard, dispatch=noop_dispatch)
  debug_inspect(
    model.editing_card,
    content=(
      #|0
    ),
  )
}

///|
test "EditTitleChanged updates edit_title" {
  let (model, _) = empty_model().update(
    msg=EditTitleChanged("Updated"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.edit_title,
    content=(
      #|"Updated"
    ),
  )
}

///|
test "EditDescChanged updates edit_desc" {
  let (model, _) = empty_model().update(
    msg=EditDescChanged("New desc"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.edit_desc,
    content=(
      #|"New desc"
    ),
  )
}

///|
test "EditColorChanged updates edit_color" {
  let (model, _) = empty_model().update(
    msg=EditColorChanged("green"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.edit_color,
    content=(
      #|"green"
    ),
  )
}

///|
test "SaveEditCard with id 0 does nothing" {
  let initial = { ..empty_model(), editing_card: 0, edit_title: "Title" }
  let (model, _) = initial.update(msg=SaveEditCard, dispatch=noop_dispatch)
  debug_inspect(
    model.editing_card,
    content=(
      #|0
    ),
  )
}

///|
test "SaveEditCard with empty title does nothing" {
  let initial = {
    ..empty_model(),
    editing_card: 1,
    edit_title: "",
    cards: sample_cards(),
  }
  let (model, _) = initial.update(msg=SaveEditCard, dispatch=noop_dispatch)
  debug_inspect(
    model.editing_card,
    content=(
      #|1
    ),
  )
}

///|
test "SaveEditCard optimistically updates card" {
  let initial = {
    ..empty_model(),
    editing_card: 1,
    edit_title: "Updated Title",
    edit_desc: "Updated Desc",
    edit_color: "red",
    cards: sample_cards(),
  }
  let (model, _) = initial.update(msg=SaveEditCard, dispatch=noop_dispatch)
  debug_inspect(
    model.editing_card,
    content=(
      #|0
    ),
  )
  let card = model.cards.iter().find_first(fn(c) { c.id == 1 })
  debug_inspect(
    (card.unwrap().title, card.unwrap().description, card.unwrap().color),
    content=(
      #|("Updated Title", "Updated Desc", "red")
    ),
  )
}

///|
test "CardUpdated is passthrough" {
  let (model, _) = empty_model().update(msg=CardUpdated, dispatch=noop_dispatch)
  debug_inspect(
    model.loading,
    content=(
      #|false
    ),
  )
}

// ── Card Delete ──────────────────────────────────────────────────────

///|
test "DeleteCard removes the card" {
  let initial = { ..empty_model(), cards: sample_cards() }
  let (model, _) = initial.update(msg=DeleteCard(1), dispatch=noop_dispatch)
  debug_inspect(
    model.cards.length(),
    content=(
      #|2
    ),
  )
  debug_inspect(
    model.cards[0].id,
    content=(
      #|2
    ),
  )
}

///|
test "CardDeleted is passthrough" {
  let (model, _) = empty_model().update(msg=CardDeleted, dispatch=noop_dispatch)
  debug_inspect(
    model.loading,
    content=(
      #|false
    ),
  )
}

// ── Move Mode ────────────────────────────────────────────────────────

///|
test "SelectCardToMove sets moving_card" {
  let (model, _) = empty_model().update(
    msg=SelectCardToMove(5),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.moving_card,
    content=(
      #|5
    ),
  )
}

///|
test "SelectCardToMove toggles off if same card" {
  let initial = { ..empty_model(), moving_card: 5 }
  let (model, _) = initial.update(
    msg=SelectCardToMove(5),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.moving_card,
    content=(
      #|0
    ),
  )
}

///|
test "CancelMove clears moving_card" {
  let initial = { ..empty_model(), moving_card: 3 }
  let (model, _) = initial.update(msg=CancelMove, dispatch=noop_dispatch)
  debug_inspect(
    model.moving_card,
    content=(
      #|0
    ),
  )
}

///|
test "MoveCardTo with no moving card does nothing" {
  let initial = { ..empty_model(), moving_card: 0 }
  let (model, _) = initial.update(msg=MoveCardTo(2, 0), dispatch=noop_dispatch)
  debug_inspect(
    model.moving_card,
    content=(
      #|0
    ),
  )
}

///|
test "MoveCardTo moves card to target column" {
  let initial = {
    ..empty_model(),
    moving_card: 1,
    cards: sample_cards(),
    columns: sample_columns(),
  }
  let (model, _) = initial.update(msg=MoveCardTo(2, 0), dispatch=noop_dispatch)
  debug_inspect(
    model.moving_card,
    content=(
      #|0
    ),
  )
  let card = model.cards.iter().find_first(fn(c) { c.id == 1 })
  debug_inspect(
    card.unwrap().column_id,
    content=(
      #|2
    ),
  )
}

///|
test "CardMoved is passthrough" {
  let (model, _) = empty_model().update(msg=CardMoved, dispatch=noop_dispatch)
  debug_inspect(
    model.loading,
    content=(
      #|false
    ),
  )
}
