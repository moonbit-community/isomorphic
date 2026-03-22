///|
/// The computed result of a spreadsheet cell.
///
/// Every cell holds one of four value kinds:
///   - `Empty` — the cell has no content (displays as blank).
///   - `Num(Double)` — a numeric value, either entered directly or computed
///     by a formula. Displayed as an integer when the fractional part is zero.
///   - `Text(String)` — a string value, either literal text or the result of
///     a string function like `CONCAT`.
///   - `Error(String)` — a formula evaluation error. The payload is a short
///     error code such as `"DIV/0"`, `"TYPE"`, `"PARSE"`, or `"FUNC?name"`.
///     Displayed as `"#ERR: <code>"`.
pub(all) enum Value {
  Empty
  Num(Double)
  Text(String)
  Error(String)
}

///|
/// Convert a cell value to its plain display string without applying any
/// number format (currency, percent, etc.). Integers are displayed without
/// a decimal point; doubles use their default string representation.
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
/// Horizontal alignment of cell content.
///
/// `Auto` follows the spreadsheet convention: text is left-aligned and numbers
/// are right-aligned. Explicit values (`Left`, `Center`, `Right`) override
/// the automatic behavior.
pub(all) enum Align {
  Auto // left for text, right for numbers
  Left
  Center
  Right
}

///|
/// Display format applied when rendering numeric cell values.
///
/// The format only affects how `Num` values are displayed; `Text`, `Empty`,
/// and `Error` values pass through unchanged.
///
///   - `General` — integers get comma-separated thousands; decimals use default
///     representation.
///   - `Currency` — formatted as `$1,234.56` with two decimal places and
///     thousands separators. Negative values get a leading `-`.
///   - `Percent` — the value is multiplied by 100 and suffixed with `%`,
///     displayed to one decimal place.
///   - `Fixed` — always shows exactly two decimal places (e.g. `1234.56`).
pub(all) enum NumFormat {
  General // auto display
  Currency // $1,234.56
  Percent // 45.2%
  Fixed // 1234.56 (2 decimal places)
}

///|
/// A single spreadsheet cell combining raw input, computed value, and visual styling.
///
/// The `raw` field stores the original user input (e.g. `"=SUM(A1:A5)"` or
/// `"hello"`). The `value` field holds the result of evaluating `raw` through
/// the formula engine. Styling fields (`bold`, `italic`, `align`, `format`,
/// `bg_color`, `text_color`) are orthogonal to the cell's data and are
/// preserved across recalculations.
pub(all) struct Cell {
  raw : String // what the user typed (formula strings start with '=')
  value : Value // computed result from formula evaluation
  bold : Bool
  italic : Bool
  align : Align
  format : NumFormat
  bg_color : String // "" = default, otherwise CSS hex like "#fce4ec"
  text_color : String // "" = default, otherwise CSS hex

  fn new(
    raw? : String,
    value? : Value,
    bold? : Bool,
    italic? : Bool,
    align? : Align,
    format? : NumFormat,
    bg_color? : String,
    text_color? : String,
  ) -> Cell
}

///|
/// Create a blank cell with no content and default styling.
fn Cell::new(
  raw? : String = "",
  value? : Value = Empty,
  bold? : Bool = false,
  italic? : Bool = false,
  align? : Align = Auto,
  format? : NumFormat = General,
  bg_color? : String = "",
  text_color? : String = "",
) -> Cell {
  { raw, value, bold, italic, align, format, bg_color, text_color }
}

///|
/// Format a cell value for display using the specified number format.
///
/// Only `Num` values are affected by the format; `Text`, `Empty`, and `Error`
/// are rendered the same regardless of the format. Rounding uses
/// `floor(x + 0.5)` for correct behavior with negative numbers.
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
          let frac_str = if frac < 10 { "0\{frac}" } else { frac.to_string() }
          let sign = if is_neg { "-" } else { "" }
          "\{sign}\{whole}.\{frac_str}"
        }
      }
    Text(s) => s
    Error(e) => "#ERR: \{e}"
  }
}

///|
/// Format an integer with thousands-separator commas (e.g. `1234567` becomes
/// `"1,234,567"`). Handles negative numbers by prepending a `-` sign.
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
  for i, ch in chars {
    if i > 0 && (i - start_offset) % 3 == 0 {
      sb.write_char(',')
    }
    sb.write_char(ch)
  }
  sb.to_string()
}

///|
/// Convert a zero-based column index (0-25) to its letter representation (A-Z).
/// Column 0 is `"A"`, column 25 is `"Z"`. Only single-letter columns are supported.
pub fn col_to_letter(col : Int) -> String {
  let c = (65 + col).unsafe_to_char() // 'A' = 65
  c.to_string()
}

///|
/// Parse a cell reference string like `"A1"` into a zero-based `(col, row)` tuple.
///
/// The column letter (A-Z) is converted to 0-25 and the row number (1-based
/// in the reference) is converted to 0-based. Returns `None` for strings that
/// are too short, start with a non-uppercase letter, or have an invalid row
/// number. Only single-letter columns (A-Z) are supported.
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
  let rest = s[1:]
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
/// Construct a cell key string from zero-based `(col, row)` coordinates.
///
/// Examples: `make_key(0, 0)` returns `"A1"`, `make_key(2, 9)` returns `"C10"`.
/// This is the inverse of `parse_ref`.
pub fn make_key(col : Int, row : Int) -> String {
  "\{col_to_letter(col)}\{row + 1}"
}
