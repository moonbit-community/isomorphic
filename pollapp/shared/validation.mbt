///|
/// Maximum allowed length (in characters) for a poll question.
pub let max_question_length : Int = 200

///|
/// Maximum allowed length (in characters) for a single poll option.
pub let max_option_length : Int = 100

///|
/// Minimum number of options required to create a poll.
pub let min_options : Int = 2

///|
/// Maximum number of options allowed on a single poll.
pub let max_options : Int = 6

///|
/// Validate a poll question: non-empty and within length limit.
pub fn validate_question(q : String) -> Bool {
  !q.is_empty() && q.char_length() <= max_question_length
}

///|
/// Validate a poll option text: non-empty and within length limit.
pub fn validate_option(text : String) -> Bool {
  !text.is_empty() && text.char_length() <= max_option_length
}
