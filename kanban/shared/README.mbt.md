# Kanban Shared Package

Isomorphic types, validation, routing, and positioning logic shared between
the Kanban board frontend (JS) and backend (native).

## Types

All domain types derive `ToJson`, `FromJson`, and `Eq` for seamless
serialization and comparison:

```mbt check
///|
test {
  let card : @shared.Card = {
    id: 1,
    column_id: 1,
    title: "Implement login",
    description: "OAuth2 flow",
    color: "blue",
    position: 1000,
  }
  let decoded : @shared.Card = @json.from_json(card.to_json())
  debug_inspect(decoded, content=(
    
    #|{
    #|  id: 1,
    #|  column_id: 1,
    #|  title: "Implement login",
    #|  description: "OAuth2 flow",
    #|  color: "blue",
    #|  position: 1000,
    #|}
  ))
}
```

`MoveCardRequest` carries the payload for card-move API calls:

```mbt check
///|
test {
  let req : @shared.MoveCardRequest = {
    card_id: 1,
    target_column_id: 2,
    new_position: 1500,
  }
  let decoded : @shared.MoveCardRequest = @json.from_json(req.to_json())
  debug_inspect(decoded, content=(
    #|{ card_id: 1, target_column_id: 2, new_position: 1500 }
  ))
}
```

## Positioning Algorithm

Items use integer positions with a gap of `position_gap` (1000). New items
append at `max_position + 1000`. Inserting between two items takes the
midpoint. When the gap is exhausted, `compute_insert_position` returns 0 to
signal that the caller should renumber.

```mbt check
///|
test {
  // Gap constant
  inspect(@shared.position_gap, content="1000")

  // Append after existing items
  inspect(@shared.next_position([1000, 2000]), content="3000")

  // Insert between two positions
  inspect(@shared.compute_insert_position(1000, 3000), content="2000")

  // Insert at top (before = 0)
  inspect(@shared.compute_insert_position(0, 2000), content="1000")

  // Gap exhausted — returns 0 to signal renumbering
  inspect(@shared.compute_insert_position(100, 101), content="0")

  // Renumber evenly
  inspect(@shared.renumber_positions(3), content="[1000, 2000, 3000]")
}
```

## Validation

Shared rules enforced on both client and server. Limits are exported as
constants (`max_card_title`, `max_card_description`, `max_column_title`,
`max_columns`, `max_cards_per_column`):

```mbt check
///|
test {
  inspect(@shared.max_card_title, content="100")
  inspect(@shared.max_columns, content="10")
  inspect(@shared.validate_card_title("Fix bug"), content="true")
  inspect(@shared.validate_card_title(""), content="false")
  inspect(@shared.validate_card_description(""), content="true")
  inspect(@shared.validate_color("red"), content="true")
  inspect(@shared.validate_color("pink"), content="false")
  inspect(@shared.validate_column_title("To Do"), content="true")
}
```

## Routes

API paths defined once, used by both HTTP client and server:

```mbt check
///|
test {
  inspect(@shared.api_board, content="/api/board")
  inspect(@shared.api_columns, content="/api/columns")
  inspect(@shared.api_column(1), content="/api/columns/1")
  inspect(@shared.api_column_move(3), content="/api/columns/3/move")
  inspect(@shared.api_cards, content="/api/cards")
  inspect(@shared.api_card(42), content="/api/cards/42")
  inspect(@shared.api_card_move(7), content="/api/cards/7/move")
}
```

## Card Helpers

Filter and sort cards by column, compute positions for drag-and-drop:

```mbt check
///|
test {
  let cards : Array[@shared.Card] = [
    {
      id: 1,
      column_id: 1,
      title: "First",
      description: "",
      color: "",
      position: 2000,
    },
    {
      id: 2,
      column_id: 2,
      title: "Other",
      description: "",
      color: "",
      position: 1000,
    },
    {
      id: 3,
      column_id: 1,
      title: "Second",
      description: "",
      color: "",
      position: 1000,
    },
  ]
  let col1 = @shared.cards_in_column(cards, 1)
  inspect(col1.length(), content="2")
  inspect(col1[0].title, content="Second")
  inspect(col1[1].title, content="First")
}
```

## Color Labels

Map color names to CSS hex values for consistent rendering.
`valid_colors` lists all accepted labels:

```mbt check
///|
test {
  inspect(@shared.valid_colors.length(), content="7")
  inspect(@shared.color_to_css("blue"), content="#3b82f6")
  inspect(@shared.color_to_css("red"), content="#ef4444")
  inspect(@shared.color_to_css("unknown"), content="")
}
```
