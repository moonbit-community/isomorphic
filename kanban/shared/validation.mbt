///|
/// Maximum character length for a card title.
pub let max_card_title : Int = 100

///|
/// Maximum character length for a card description.
pub let max_card_description : Int = 500

///|
/// Maximum character length for a column title.
pub let max_column_title : Int = 30

///|
/// Maximum number of columns allowed on a board.
pub let max_columns : Int = 10

///|
/// Maximum number of cards allowed in a single column.
pub let max_cards_per_column : Int = 50

///|
/// Allowed color labels. Empty string means "no color".
pub let valid_colors : Array[String] = [
  "", "red", "orange", "yellow", "green", "blue", "purple",
]

///|
/// Validate a card title: non-empty and at most `max_card_title` characters.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.validate_card_title("Fix bug"), content="true")
///   inspect(@shared.validate_card_title(""), content="false")
/// }
/// ```
pub fn validate_card_title(title : String) -> Bool {
  title != "" && title.char_length() <= max_card_title
}

///|
/// Validate a card description: at most `max_card_description` characters.
/// Empty descriptions are valid.
pub fn validate_card_description(desc : String) -> Bool {
  desc.char_length() <= max_card_description
}

///|
/// Validate a column title: non-empty and at most `max_column_title` characters.
pub fn validate_column_title(title : String) -> Bool {
  title != "" && title.char_length() <= max_column_title
}

///|
/// Check whether a color label is in the allowed set.
/// Empty string means "no color" and is valid.
///
/// # Example
///
/// ```mbt check
/// test {
///   inspect(@shared.validate_color("red"), content="true")
///   inspect(@shared.validate_color(""), content="true")
///   inspect(@shared.validate_color("pink"), content="false")
/// }
/// ```
pub fn validate_color(color : String) -> Bool {
  for c in valid_colors {
    if c == color {
      return true
    }
  }
  false
}
