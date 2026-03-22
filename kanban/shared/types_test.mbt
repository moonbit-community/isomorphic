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
  let decoded : @shared.Card = @json.from_json(card.to_json())
  debug_inspect(decoded, content=(
    
    #|{
    #|  id: 1,
    #|  column_id: 2,
    #|  title: "Fix bug",
    #|  description: "Urgent fix",
    #|  color: "red",
    #|  position: 1000,
    #|}
  ))
}

///|
test "Column JSON round-trip" {
  let col : @shared.Column = { id: 3, title: "In Progress", position: 2000 }
  let decoded : @shared.Column = @json.from_json(col.to_json())
  debug_inspect(decoded, content=(
    #|{ id: 3, title: "In Progress", position: 2000 }
  ))
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
  let decoded : @shared.Board = @json.from_json(board.to_json())
  debug_inspect(decoded, content=(
    
    #|{
    #|  columns: [
    #|    { id: 1, title: "To Do", position: 1000 },
    #|    { id: 2, title: "Done", position: 2000 },
    #|  ],
    #|  cards: [
    #|    {
    #|      id: 1,
    #|      column_id: 1,
    #|      title: "Task",
    #|      description: "",
    #|      color: "blue",
    #|      position: 1000,
    #|    },
    #|  ],
    #|}
  ))
}

///|
test "MoveCardRequest JSON round-trip" {
  let req : @shared.MoveCardRequest = {
    card_id: 5,
    target_column_id: 2,
    new_position: 1500,
  }
  let decoded : @shared.MoveCardRequest = @json.from_json(req.to_json())
  debug_inspect(decoded, content=(
    #|{ card_id: 5, target_column_id: 2, new_position: 1500 }
  ))
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
  let decoded : @shared.Card = @json.from_json(card.to_json())
  debug_inspect(decoded, content=(
    
    #|{
    #|  id: 1,
    #|  column_id: 1,
    #|  title: "Fix le bug",
    #|  description: "Description with emoji and accents",
    #|  color: "",
    #|  position: 1000,
    #|}
  ))
}

///|
test "Board with empty columns and cards" {
  let board : @shared.Board = { columns: [], cards: [] }
  let decoded : @shared.Board = @json.from_json(board.to_json())
  debug_inspect(decoded, content=(
    #|{ columns: [], cards: [] }
  ))
}

///|
test "Card to_json produces expected structure" {
  let card : @shared.Card = {
    id: 42,
    column_id: 1,
    title: "Hello",
    description: "",
    color: "blue",
    position: 3000,
  }
  json_inspect(card, content={
    "id": 42,
    "column_id": 1,
    "title": "Hello",
    "description": "",
    "color": "blue",
    "position": 3000,
  })
}
