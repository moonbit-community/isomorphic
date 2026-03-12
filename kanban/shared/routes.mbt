///|
/// `GET` — fetch the full board (columns + cards).
pub let api_board : String = "/api/board"

///|
/// `POST` — create a new column.
pub let api_columns : String = "/api/columns"

///|
/// `POST` to rename, `DELETE` to remove a column.
pub fn api_column(id : Int) -> String {
  "/api/columns/\{id}"
}

///|
/// `POST` — reposition a column.
pub fn api_column_move(id : Int) -> String {
  "/api/columns/\{id}/move"
}

///|
/// `POST` — create a new card.
pub let api_cards : String = "/api/cards"

///|
/// `POST` to update, `DELETE` to remove a card.
pub fn api_card(id : Int) -> String {
  "/api/cards/\{id}"
}

///|
/// `POST` — move a card to a different column/position.
pub fn api_card_move(id : Int) -> String {
  "/api/cards/\{id}/move"
}
