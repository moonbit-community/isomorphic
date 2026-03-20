///|
/// A card on the Kanban board. Belongs to a column; positioned by integer rank.
#warnings("-unnecessary_annotation")
pub(all) struct Card {
  id : Int
  column_id : Int
  title : String
  description : String
  color : String
  position : Int
} derive(ToJson, FromJson, Show, Eq, Debug)

///|
/// A column (lane) on the board. Contains cards; ordered by position.
#warnings("-unnecessary_annotation")
pub(all) struct Column {
  id : Int
  title : String
  position : Int
} derive(ToJson, FromJson, Show, Eq, Debug)

///|
/// Full board state: all columns and all cards, as returned by `GET /api/board`.
#warnings("-unnecessary_annotation")
pub(all) struct Board {
  columns : Array[Column]
  cards : Array[Card]
} derive(ToJson, FromJson, Show, Eq, Debug)

///|
/// Request body for `POST /api/cards/:id/move`.
#warnings("-unnecessary_annotation")
pub(all) struct MoveCardRequest {
  card_id : Int
  target_column_id : Int
  new_position : Int
} derive(ToJson, FromJson, Show, Eq, Debug)
