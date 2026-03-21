///|
/// Maximum allowed character length for a person's name.
pub let max_name_length : Int = 50

///|
/// Maximum allowed character length for an expense description.
pub let max_description_length : Int = 100

///|
/// Validate a person's name: non-empty and within length limit.
pub fn validate_name(name : String) -> Bool {
  !name.is_empty() && name.char_length() <= max_name_length
}

///|
/// Validate an expense description.
pub fn validate_description(desc : String) -> Bool {
  !desc.is_empty() && desc.char_length() <= max_description_length
}

///|
/// Validate an expense amount (must be positive, in cents).
pub fn validate_amount(amount : Int) -> Bool {
  amount > 0
}
