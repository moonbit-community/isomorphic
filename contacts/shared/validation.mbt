///|
/// Maximum allowed character length for a contact's name.
pub let max_name_length : Int = 50

///|
/// Maximum allowed character length for a contact's email address.
pub let max_email_length : Int = 100

///|
/// Maximum allowed character length for a contact's phone number.
pub let max_phone_length : Int = 20

///|
/// Validate a contact's name: non-empty and within length limit.
pub fn validate_name(name : String) -> Bool {
  !name.is_empty() && name.char_length() <= max_name_length
}

///|
/// Validate an email: non-empty, within limit, must contain '@' and '.' after '@'.
pub fn validate_email(email : String) -> Bool {
  if email.is_empty() || email.char_length() > max_email_length {
    return false
  }
  let (found_at, dot_after_at) = for ch in email
    ; found_at = false, dot_after_at = false {
    if ch == '@' {
      if found_at {
        return false
      }
      continue true, dot_after_at
    } else if ch == '.' && found_at {
      continue found_at, true
    } else {
      continue found_at, dot_after_at
    }
  } nobreak {
    (found_at, dot_after_at)
  }
  found_at && dot_after_at
}

///|
/// Validate a phone number: non-empty, within limit, only digits/spaces/hyphens/parens/plus.
pub fn validate_phone(phone : String) -> Bool {
  if phone.is_empty() || phone.char_length() > max_phone_length {
    return false
  }
  for ch in phone {
    if ch >= '0' && ch <= '9' {
      continue
    }
    if ch == ' ' || ch == '-' || ch == '(' || ch == ')' || ch == '+' {
      continue
    }
    return false
  }
  true
}
