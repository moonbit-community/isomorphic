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
} derive(ToJson, FromJson, Eq, Debug)

///|
/// Display a Card as `Card(#id "title" col=column_id)`.
pub impl Show for Card with fn output(self, logger) {
  logger.write_string(
    "Card(#\{self.id} \"\{self.title}\" col=\{self.column_id})",
  )
}

///|
/// A column (lane) on the board. Contains cards; ordered by position.
#warnings("-unnecessary_annotation")
pub(all) struct Column {
  id : Int
  title : String
  position : Int
} derive(ToJson, FromJson, Eq, Debug)

///|
/// Display a Column as `Column(#id "title")`.
pub impl Show for Column with fn output(self, logger) {
  logger.write_string("Column(#\{self.id} \"\{self.title}\")")
}

///|
/// Full board state: all columns and all cards, as returned by `GET /api/board`.
#warnings("-unnecessary_annotation")
pub(all) struct Board {
  columns : Array[Column]
  cards : Array[Card]
} derive(ToJson, FromJson, Eq, Debug)

///|
/// Display a Board as `Board(N columns, M cards)`.
pub impl Show for Board with fn output(self, logger) {
  logger.write_string(
    "Board(\{self.columns.length()} columns, \{self.cards.length()} cards)",
  )
}

///|
/// Request body for `POST /api/cards/:id/move`.
#warnings("-unnecessary_annotation")
pub(all) struct MoveCardRequest {
  card_id : Int
  target_column_id : Int
  new_position : Int
} derive(ToJson, FromJson, Eq, Debug)

///|
pub extend Board with Debug::{to_repr}

///|
pub extend Board with @json.FromJson::{from_json}

///|
pub extend Board with Eq::{not_equal, equal}

///|
pub extend Board with Show::{to_string, output}

///|
pub extend Board with ToJson::{to_json}

///|
pub extend Card with Debug::{to_repr}

///|
pub extend Card with @json.FromJson::{from_json}

///|
pub extend Card with Eq::{not_equal, equal}

///|
pub extend Card with Show::{to_string, output}

///|
pub extend Card with ToJson::{to_json}

///|
pub extend Column with Debug::{to_repr}

///|
pub extend Column with @json.FromJson::{from_json}

///|
pub extend Column with Eq::{not_equal, equal}

///|
pub extend Column with Show::{to_string, output}

///|
pub extend Column with ToJson::{to_json}

///|
pub extend MoveCardRequest with Debug::{to_repr}

///|
pub extend MoveCardRequest with @json.FromJson::{from_json}

///|
pub extend MoveCardRequest with Eq::{not_equal, equal}

///|
pub extend MoveCardRequest with ToJson::{to_json}
