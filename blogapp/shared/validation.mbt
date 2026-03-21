///|
/// The fallback author name used when none is provided.
pub let default_author : String = "Anonymous"

///|
/// Returns `default_author` when the given author string is empty, otherwise returns it unchanged.
pub fn normalize_author(author : String) -> String {
  if author.is_empty() {
    default_author
  } else {
    author
  }
}

///|
/// Returns true if the title is non-empty.
pub fn validate_title(title : String) -> Bool {
  !title.is_empty()
}

///|
/// Truncate a string by character count, safe for unicode (emoji, CJK).
pub fn truncate(s : String, max_chars : Int) -> String {
  let buf = StringBuilder::new()
  for i = 0, count = 0 {
    guard count < max_chars else { break buf.to_string() + "..." }
    match s.get_char(i) {
      None => break buf.to_string()
      Some(c) => {
        buf.write_char(c)
        let advance = if c.to_int() > 0xFFFF { 2 } else { 1 }
        continue i + advance, count + 1
      }
    }
  }
}
