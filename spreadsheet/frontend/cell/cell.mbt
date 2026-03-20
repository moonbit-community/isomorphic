///|
/// Cell types for the spreadsheet.
pub(all) enum Value {
  Empty
  Num(Double)
  Text(String)
  Error(String)
}

///|
pub fn Value::to_display(self : Value) -> String {
  match self {
    Empty => ""
    Num(n) => {
      let i = n.to_int()
      if i.to_double() == n {
        i.to_string()
      } else {
        n.to_string()
      }
    }
    Text(s) => s
    Error(e) => "#ERR: \{e}"
  }
}

///|
pub(all) struct Cell {
  raw : String   // what the user typed
  value : Value  // computed result
  bold : Bool
}

///|
pub fn Cell::empty() -> Cell {
  { raw: "", value: Empty, bold: false }
}

///|
/// Convert column index (0-25) to letter (A-Z).
pub fn col_to_letter(col : Int) -> String {
  let c = (65 + col).unsafe_to_char() // 'A' = 65
  c.to_string()
}

///|
/// Convert a cell reference string like "A1" to (col, row).
/// Returns None if invalid.
pub fn parse_ref(s : String) -> (Int, Int)? {
  if s.length() < 2 {
    return None
  }
  let first = s[0]
  if first < 'A' || first > 'Z' {
    return None
  }
  let col = first.to_int() - 65
  // Parse the rest as row number
  let rest = s[1:].to_string()
  try {
    let row = @strconv.parse_int(rest) - 1 // 1-indexed to 0-indexed
    if row >= 0 {
      Some((col, row))
    } else {
      None
    }
  } catch {
    _ => None
  }
}

///|
/// Make a cell key string from (col, row): "A1", "B2", etc.
pub fn make_key(col : Int, row : Int) -> String {
  "\{col_to_letter(col)}\{row + 1}"
}
