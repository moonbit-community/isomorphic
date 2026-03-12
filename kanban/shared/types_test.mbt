///|
test "Card JSON round-trip" {
  let card : @shared.Card = {
    id: 1,
    column_id: 2,
    title: "Fix bug",
    description: "Urgent fix",
    color: "red",
    position: 1000,
  }
  let json = card.to_json()
  let decoded : @shared.Card = @json.from_json(json)
  inspect(decoded.id, content="1")
  inspect(decoded.column_id, content="2")
  inspect(decoded.title, content="Fix bug")
  inspect(decoded.description, content="Urgent fix")
  inspect(decoded.color, content="red")
  inspect(decoded.position, content="1000")
}

///|
test "Column JSON round-trip" {
  let col : @shared.Column = { id: 3, title: "In Progress", position: 2000 }
  let json = col.to_json()
  let decoded : @shared.Column = @json.from_json(json)
  inspect(decoded.id, content="3")
  inspect(decoded.title, content="In Progress")
  inspect(decoded.position, content="2000")
}

///|
test "Board JSON round-trip" {
  let board : @shared.Board = {
    columns: [
      { id: 1, title: "To Do", position: 1000 },
      { id: 2, title: "Done", position: 2000 },
    ],
    cards: [
      {
        id: 1,
        column_id: 1,
        title: "Task",
        description: "",
        color: "blue",
        position: 1000,
      },
    ],
  }
  let json = board.to_json()
  let decoded : @shared.Board = @json.from_json(json)
  inspect(decoded.columns.length(), content="2")
  inspect(decoded.cards.length(), content="1")
  inspect(decoded.columns[0].title, content="To Do")
  inspect(decoded.cards[0].title, content="Task")
  inspect(decoded.cards[0].color, content="blue")
}

///|
test "MoveCardRequest JSON round-trip" {
  let req : @shared.MoveCardRequest = {
    card_id: 5,
    target_column_id: 2,
    new_position: 1500,
  }
  let json = req.to_json()
  let decoded : @shared.MoveCardRequest = @json.from_json(json)
  inspect(decoded.card_id, content="5")
  inspect(decoded.target_column_id, content="2")
  inspect(decoded.new_position, content="1500")
}

///|
test "Card with unicode title JSON round-trip" {
  let card : @shared.Card = {
    id: 1,
    column_id: 1,
    title: "Fix le bug",
    description: "Description with emoji and accents",
    color: "",
    position: 1000,
  }
  let json = card.to_json()
  let decoded : @shared.Card = @json.from_json(json)
  inspect(decoded.title, content="Fix le bug")
}

///|
test "Board with empty columns and cards" {
  let board : @shared.Board = { columns: [], cards: [] }
  let json = board.to_json()
  let decoded : @shared.Board = @json.from_json(json)
  inspect(decoded.columns.length(), content="0")
  inspect(decoded.cards.length(), content="0")
}
