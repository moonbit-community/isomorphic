///|
/// Maximum allowed character length for a note title.
pub let max_title_length : Int = 100

///|
/// Maximum allowed character length for note body content.
pub let max_content_length : Int = 5000

///|
/// Validate a note title: non-empty and within length limit.
pub fn validate_title(title : String) -> Bool {
  !title.is_empty() && title.char_length() <= max_title_length
}

///|
/// Validate note content: non-empty and within length limit.
pub fn validate_content(content : String) -> Bool {
  !content.is_empty() && content.char_length() <= max_content_length
}
