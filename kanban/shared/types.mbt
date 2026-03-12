///|
/// A card on the Kanban board. Belongs to a column; positioned by integer rank.
pub(all) struct Card {
  id : Int
  column_id : Int
  title : String
  description : String
  color : String
  position : Int
} derive(ToJson, FromJson, Show, Eq)

///|
/// A column (lane) on the board. Contains cards; ordered by position.
pub(all) struct Column {
  id : Int
  title : String
  position : Int
} derive(ToJson, FromJson, Show, Eq)

///|
/// Full board state: all columns and all cards, as returned by `GET /api/board`.
pub(all) struct Board {
  columns : Array[Column]
  cards : Array[Card]
} derive(ToJson, FromJson, Show, Eq)

///|
/// Request body for `POST /api/cards/:id/move`.
pub(all) struct MoveCardRequest {
  card_id : Int
  target_column_id : Int
  new_position : Int
} derive(ToJson, FromJson, Show, Eq)
