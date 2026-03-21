///|
/// Convert a string to lowercase.
pub fn to_lower(s : String) -> String {
  s.to_lower()
}

///|
/// Format a 10-digit phone number as (XXX) XXX-XXXX, pass through otherwise.
pub fn format_phone(phone : String) -> String {
  // Extract only digits
  let digits = StringBuilder::new()
  for ch in phone {
    if ch >= '0' && ch <= '9' {
      digits.write_char(ch)
    }
  }
  let d = digits.to_string()
  if d.char_length() == 10 {
    let chars : Array[Char] = d.iter().collect()
    let area = StringBuilder::new()
    for i in 0..<3 {
      area.write_char(chars[i])
    }
    let mid = StringBuilder::new()
    for i in 3..<6 {
      mid.write_char(chars[i])
    }
    let last = StringBuilder::new()
    for i in 6..<10 {
      last.write_char(chars[i])
    }
    "(\{area.to_string()}) \{mid.to_string()}-\{last.to_string()}"
  } else {
    phone
  }
}

///|
/// Check if a contact matches a search query (case-insensitive across name, email, phone).
pub fn match_search(contact : Contact, query : String) -> Bool {
  if query.is_empty() {
    return true
  }
  let q = to_lower(query)
  let name = to_lower(contact.name)
  let email = to_lower(contact.email)
  let phone = to_lower(contact.phone)
  name.contains(q) || email.contains(q) || phone.contains(q)
}

///|
/// Filter contacts by search query.
pub fn filter_contacts(
  contacts : Array[Contact],
  query : String,
) -> Array[Contact] {
  contacts.filter(fn(c) { match_search(c, query) })
}

///|
/// Sort contacts: favorites first, then alphabetical by name.
pub fn sort_contacts(contacts : Array[Contact]) -> Array[Contact] {
  let result = contacts.copy()
  result.sort_by(fn(a, b) {
    // Favorites first
    if a.favorite && !b.favorite {
      return -1
    }
    if !a.favorite && b.favorite {
      return 1
    }
    // Then alphabetical by name (case-insensitive)
    let na = to_lower(a.name)
    let nb = to_lower(b.name)
    na.compare(nb)
  })
  result
}

///|
/// Get the initials from a name (first letter of first and last name, uppercase).
pub fn get_initials(name : String) -> String {
  if name.is_empty() {
    return "?"
  }
  let chars : Array[Char] = name.iter().collect()
  let first = chars[0]
  // Find last space and get char after it
  let mut last_space_idx = -1
  for i in 0..<chars.length() {
    if chars[i] == ' ' {
      last_space_idx = i
    }
  }
  let buf = StringBuilder::new()
  buf.write_char(to_upper_char(first))
  if last_space_idx >= 0 && last_space_idx + 1 < chars.length() {
    buf.write_char(to_upper_char(chars[last_space_idx + 1]))
  }
  buf.to_string()
}

///|
/// Convert a character to its ASCII uppercase equivalent.
fn to_upper_char(ch : Char) -> Char {
  if ch >= 'a' && ch <= 'z' {
    (ch.to_int() - 32).unsafe_to_char()
  } else {
    ch
  }
}
