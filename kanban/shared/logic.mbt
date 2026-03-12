///|
/// Gap between consecutive item positions. Used for initial spacing.
pub let position_gap : Int = 1000

///|
/// Compute position for appending after all existing items.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.next_position([1000, 2000, 3000]), content="4000")
///   inspect(@shared.next_position([]), content="1000")
/// }
/// ```
pub fn next_position(existing_positions : Array[Int]) -> Int {
  let mut max = 0
  for p in existing_positions {
    if p > max {
      max = p
    }
  }
  max + position_gap
}

///|
/// Compute position for inserting between two adjacent items.
/// Pass 0 for `before` to insert at top, 0 for `after` to insert at bottom.
/// Returns 0 if gap is too small (caller should renumber).
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.compute_insert_position(1000, 3000), content="2000")
///   inspect(@shared.compute_insert_position(0, 2000), content="1000")
///   inspect(@shared.compute_insert_position(3000, 0), content="4000")
///   // Returns 0 when no room between adjacent positions
///   inspect(@shared.compute_insert_position(100, 101), content="0")
/// }
/// ```
pub fn compute_insert_position(before : Int, after : Int) -> Int {
  if before == 0 && after == 0 {
    return position_gap
  }
  if before == 0 {
    let pos = after / 2
    if pos == 0 || pos == after {
      return 0
    }
    return pos
  }
  if after == 0 {
    return before + position_gap
  }
  let mid = (before + after) / 2
  if mid == before || mid == after {
    return 0
  }
  mid
}

///|
/// Generate evenly-spaced positions for `count` items.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.renumber_positions(3), content="[1000, 2000, 3000]")
/// }
/// ```
pub fn renumber_positions(count : Int) -> Array[Int] {
  let result : Array[Int] = []
  for i in 0..<count {
    result.push((i + 1) * position_gap)
  }
  result
}

///|
/// Sort items by position ascending.
pub fn[T] sort_by_position(items : Array[T], get_pos : (T) -> Int) -> Array[T] {
  let result = items.copy()
  result.sort_by(fn(a, b) { get_pos(a).compare(get_pos(b)) })
  result
}

///|
/// Get cards in a specific column, sorted by position.
pub fn cards_in_column(cards : Array[Card], column_id : Int) -> Array[Card] {
  let filtered = cards.filter(fn(c) { c.column_id == column_id })
  sort_by_position(filtered, fn(c) { c.position })
}

///|
/// Compute position for moving a card to a target index within a column.
/// `sorted_cards` should exclude the card being moved.
/// Returns 0 if renumbering is needed.
pub fn compute_move_position(
  sorted_cards : Array[Card],
  target_index : Int,
) -> Int {
  let count = sorted_cards.length()
  if count == 0 {
    return position_gap
  }
  if target_index <= 0 {
    return compute_insert_position(0, sorted_cards[0].position)
  }
  if target_index >= count {
    return compute_insert_position(sorted_cards[count - 1].position, 0)
  }
  compute_insert_position(
    sorted_cards[target_index - 1].position,
    sorted_cards[target_index].position,
  )
}

///|
/// Map color label to CSS hex value. Empty string for no color.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.color_to_css("blue"), content="#3b82f6")
///   inspect(@shared.color_to_css("unknown"), content="")
/// }
/// ```
pub fn color_to_css(color : String) -> String {
  match color {
    "red" => "#ef4444"
    "orange" => "#f97316"
    "yellow" => "#eab308"
    "green" => "#22c55e"
    "blue" => "#3b82f6"
    "purple" => "#a855f7"
    _ => ""
  }
}
