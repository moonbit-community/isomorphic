///|
test "next_position with empty array" {
  inspect(@shared.next_position([]), content="1000")
}

///|
test "next_position finds max and adds gap" {
  inspect(@shared.next_position([1000, 3000, 2000]), content="4000")
}

///|
test "compute_insert_position between two items" {
  inspect(@shared.compute_insert_position(1000, 2000), content="1500")
}

///|
test "compute_insert_position at top" {
  inspect(@shared.compute_insert_position(0, 2000), content="1000")
}

///|
test "compute_insert_position at bottom" {
  inspect(@shared.compute_insert_position(3000, 0), content="4000")
}

///|
test "compute_insert_position with empty board" {
  inspect(@shared.compute_insert_position(0, 0), content="1000")
}

///|
test "compute_insert_position returns 0 when gap too small" {
  // Adjacent integers with no room between
  inspect(@shared.compute_insert_position(0, 1), content="0")
  inspect(@shared.compute_insert_position(100, 101), content="0")
}

///|
test "renumber_positions generates evenly spaced" {
  inspect(@shared.renumber_positions(3), content="[1000, 2000, 3000]")
  inspect(@shared.renumber_positions(0), content="[]")
  inspect(@shared.renumber_positions(1), content="[1000]")
}

///|
test "sort_by_position sorts ascending" {
  let items = [3, 1, 2]
  let sorted = @shared.sort_by_position(items, fn(x) { x * 1000 })
  inspect(sorted, content="[1, 2, 3]")
}

///|
test "cards_in_column filters and sorts" {
  let cards : Array[@shared.Card] = [
    {
      id: 1,
      column_id: 1,
      title: "A",
      description: "",
      color: "",
      position: 2000,
    },
    {
      id: 2,
      column_id: 2,
      title: "B",
      description: "",
      color: "",
      position: 1000,
    },
    {
      id: 3,
      column_id: 1,
      title: "C",
      description: "",
      color: "",
      position: 1000,
    },
  ]
  let col1 = @shared.cards_in_column(cards, 1)
  inspect(col1.length(), content="2")
  inspect(col1[0].title, content="C")
  inspect(col1[1].title, content="A")
}

///|
test "compute_move_position to empty column" {
  let empty : Array[@shared.Card] = []
  inspect(@shared.compute_move_position(empty, 0), content="1000")
}

///|
test "compute_move_position to top" {
  let cards : Array[@shared.Card] = [
    {
      id: 1,
      column_id: 1,
      title: "A",
      description: "",
      color: "",
      position: 2000,
    },
  ]
  inspect(@shared.compute_move_position(cards, 0), content="1000")
}

///|
test "compute_move_position to bottom" {
  let cards : Array[@shared.Card] = [
    {
      id: 1,
      column_id: 1,
      title: "A",
      description: "",
      color: "",
      position: 2000,
    },
  ]
  inspect(@shared.compute_move_position(cards, 1), content="3000")
}

///|
test "compute_move_position between cards" {
  let cards : Array[@shared.Card] = [
    {
      id: 1,
      column_id: 1,
      title: "A",
      description: "",
      color: "",
      position: 1000,
    },
    {
      id: 2,
      column_id: 1,
      title: "B",
      description: "",
      color: "",
      position: 3000,
    },
  ]
  inspect(@shared.compute_move_position(cards, 1), content="2000")
}

///|
test "color_to_css known colors" {
  inspect(@shared.color_to_css("red"), content="#ef4444")
  inspect(@shared.color_to_css("blue"), content="#3b82f6")
  inspect(@shared.color_to_css("green"), content="#22c55e")
  inspect(@shared.color_to_css("purple"), content="#a855f7")
  inspect(@shared.color_to_css("orange"), content="#f97316")
  inspect(@shared.color_to_css("yellow"), content="#eab308")
}

///|
test "color_to_css unknown returns empty" {
  inspect(@shared.color_to_css("pink"), content="")
  inspect(@shared.color_to_css(""), content="")
}

///|
test "repeated insertions narrow gap until renumber needed" {
  // Simulate repeated top-insertions: 1000, 500, 250, 125, 62, 31, 15, 7, 3, 1, 0
  let mut pos = 1000
  let mut steps = 0
  while pos > 0 {
    pos = @shared.compute_insert_position(0, pos)
    steps += 1
  }
  // Should exhaust after ~10 halvings
  inspect(steps, content="10")
}

///|
test "compute_insert_position symmetric midpoint" {
  // Midpoint of 2000 and 4000 is 3000
  inspect(@shared.compute_insert_position(2000, 4000), content="3000")
  // Midpoint of 1000 and 5000 is 3000
  inspect(@shared.compute_insert_position(1000, 5000), content="3000")
}

///|
test "next_position with single item" {
  inspect(@shared.next_position([5000]), content="6000")
}

///|
test "sort_by_position preserves equal positions" {
  let items = [10, 20, 30]
  // All same position — order preserved (stable sort)
  let sorted = @shared.sort_by_position(items, fn(_) { 1000 })
  inspect(sorted, content="[10, 20, 30]")
}

///|
test "sort_by_position does not mutate original" {
  let items = [3, 1, 2]
  let _ = @shared.sort_by_position(items, fn(x) { x })
  // Original unchanged
  inspect(items, content="[3, 1, 2]")
}

///|
test "cards_in_column returns empty for nonexistent column" {
  let cards : Array[@shared.Card] = [
    {
      id: 1,
      column_id: 1,
      title: "A",
      description: "",
      color: "",
      position: 1000,
    },
  ]
  let result = @shared.cards_in_column(cards, 999)
  inspect(result.length(), content="0")
}

///|
test "compute_move_position with negative target_index goes to top" {
  let cards : Array[@shared.Card] = [
    {
      id: 1,
      column_id: 1,
      title: "A",
      description: "",
      color: "",
      position: 2000,
    },
  ]
  inspect(@shared.compute_move_position(cards, -1), content="1000")
}

///|
test "compute_move_position with large target_index goes to bottom" {
  let cards : Array[@shared.Card] = [
    {
      id: 1,
      column_id: 1,
      title: "A",
      description: "",
      color: "",
      position: 1000,
    },
    {
      id: 2,
      column_id: 1,
      title: "B",
      description: "",
      color: "",
      position: 2000,
    },
  ]
  inspect(@shared.compute_move_position(cards, 100), content="3000")
}

///|
test "renumber_positions large count" {
  let positions = @shared.renumber_positions(5)
  inspect(positions, content="[1000, 2000, 3000, 4000, 5000]")
}
