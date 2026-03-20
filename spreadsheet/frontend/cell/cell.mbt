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
pub(all) enum Align {
  Auto   // left for text, right for numbers
  Left
  Center
  Right
}

///|
pub(all) enum NumFormat {
  General    // auto display
  Currency   // $1,234.56
  Percent    // 45.2%
  Fixed      // 1234.56 (2 decimal places)
}

///|
pub(all) struct Cell {
  raw : String   // what the user typed
  value : Value  // computed result
  bold : Bool
  italic : Bool
  align : Align
  format : NumFormat
  bg_color : String  // "" = default, otherwise hex like "#fce4ec"
  text_color : String // "" = default, otherwise hex
}

///|
pub fn Cell::empty() -> Cell {
  {
    raw: "",
    value: Empty,
    bold: false,
    italic: false,
    align: Auto,
    format: General,
    bg_color: "",
    text_color: "",
  }
}

///|
pub fn Value::format_with(self : Value, fmt : NumFormat) -> String {
  match self {
    Empty => ""
    Num(n) =>
      match fmt {
        General => {
          let i = n.to_int()
          if i.to_double() == n {
            format_with_commas(i)
          } else {
            n.to_string()
          }
        }
        Currency => {
          // Use floor(x + 0.5) for correct rounding of negatives
          let i = (n * 100.0 + 0.5).floor().to_int()
          let is_neg = i < 0
          let abs_i = if is_neg { 0 - i } else { i }
          let dollars = abs_i / 100
          let cents = abs_i % 100
          let cents_str = if cents < 10 {
            "0\{cents}"
          } else {
            cents.to_string()
          }
          let sign = if is_neg { "-" } else { "" }
          "\{sign}$\{format_with_commas(dollars)}.\{cents_str}"
        }
        Percent => {
          let scaled = (n * 1000.0 + 0.5).floor().to_int()
          let pct = scaled.to_double() / 10.0
          let i = pct.to_int()
          if i.to_double() == pct {
            "\{i}%"
          } else {
            "\{pct}%"
          }
        }
        Fixed => {
          let i = (n * 100.0 + 0.5).floor().to_int()
          let is_neg = i < 0
          let abs_i = if is_neg { 0 - i } else { i }
          let whole = abs_i / 100
          let frac = abs_i % 100
          let frac_str = if frac < 10 {
            "0\{frac}"
          } else {
            frac.to_string()
          }
          let sign = if is_neg { "-" } else { "" }
          "\{sign}\{whole}.\{frac_str}"
        }
      }
    Text(s) => s
    Error(e) => "#ERR: \{e}"
  }
}

///|
fn format_with_commas(n : Int) -> String {
  let is_neg = n < 0
  let abs_n = if is_neg { 0 - n } else { n }
  let s = abs_n.to_string()
  let chars = s.to_array()
  if chars.length() <= 3 {
    return if is_neg { "-\{s}" } else { s }
  }
  let sb = StringBuilder::new()
  if is_neg {
    sb.write_char('-')
  }
  let start_offset = chars.length() % 3
  for i = 0; i < chars.length(); i = i + 1 {
    if i > 0 && (i - start_offset) % 3 == 0 {
      sb.write_char(',')
    }
    sb.write_char(chars[i])
  }
  sb.to_string()
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
