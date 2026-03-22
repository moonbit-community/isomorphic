///|
/// Application state for the Kanban board MVU architecture.
pub(all) struct Model {
  /// All board columns fetched from the server.
  columns : Array[@shared.Column]
  /// All cards across all columns.
  cards : Array[@shared.Card]
  /// Column ID that is receiving a new card, or 0 if none.
  adding_to_column : Int
  /// Title input for the new card being created.
  new_card_title : String
  /// Description input for the new card being created.
  new_card_desc : String
  /// Color input for the new card being created.
  new_card_color : String
  /// ID of the card currently being edited, or 0 if none.
  editing_card : Int
  /// Title input for the card being edited.
  edit_title : String
  /// Description input for the card being edited.
  edit_desc : String
  /// Color input for the card being edited.
  edit_color : String
  /// Whether the add-column form is visible.
  adding_column : Bool
  /// Title input for the new column being created.
  new_column_title : String
  /// ID of the column currently being renamed, or 0 if none.
  renaming_column : Int
  /// Title input for the column being renamed.
  rename_column_title : String
  /// ID of the card currently being moved, or 0 if none.
  moving_card : Int
  /// Whether a network request is in progress.
  loading : Bool
} derive(Debug)

///|
/// All possible user actions and server responses.
pub(all) enum Msg {
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
} derive(Debug)
