///|
/// Maximum allowed character length for a to-do text.
pub let max_todo_length : Int = 256

///|
/// Return true when the text is non-empty and within the length limit.
pub fn validate_text(text : String) -> Bool {
  !text.is_empty() && text.char_length() <= max_todo_length
}
