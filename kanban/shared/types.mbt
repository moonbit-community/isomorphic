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
pub impl Show for Card with output(self, logger) {
  logger.write_string("Card(#\{self.id} \"\{self.title}\" col=\{self.column_id})")
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
pub impl Show for Column with output(self, logger) {
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
pub impl Show for Board with output(self, logger) {
  logger.write_string("Board(\{self.columns.length()} columns, \{self.cards.length()} cards)")
}

///|
/// Request body for `POST /api/cards/:id/move`.
#warnings("-unnecessary_annotation")
pub(all) struct MoveCardRequest {
  card_id : Int
  target_column_id : Int
  new_position : Int
} derive(ToJson, FromJson, Eq, Debug)
