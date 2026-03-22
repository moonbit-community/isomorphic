///|
/// Spreadsheet model — demonstrates TEA scaling with complex nested state.
///
/// State managed here:
///   - Multiple sheets with independent cell grids
///   - Cell selection + editing state
///   - Formula evaluation across the entire sheet
pub let num_cols : Int = 26 // A-Z

///|
/// Number of rows in each sheet grid.
pub let num_rows : Int = 30

///|
/// A single worksheet containing a named grid of cells.
pub(all) struct Sheet {
  name : String
  cells : Map[String, @cell.Cell]

  fn new(name : String) -> Sheet
}

///|
/// Create an empty sheet with the given name and no cells.
pub fn Sheet::new(name : String) -> Sheet {
  { name, cells: {} }
}

///|
/// Look up a cell by its key (e.g. "A1"), returning an empty cell if not found.
pub fn Sheet::get(self : Sheet, key : String) -> @cell.Cell {
  match self.cells.get(key) {
    Some(c) => c
    None => Cell()
  }
}

///|
/// Store a plain cell with the given raw text, evaluating formulas if present.
pub fn Sheet::set_cell(self : Sheet, key : String, raw : String) -> Unit {
  let value = @formula.evaluate(raw, r => self.get(r).value)
  self.cells[key] = Cell(raw~, value~)
}

///|
/// Store a bold cell with the given raw text, evaluating formulas if present.
pub fn Sheet::set_cell_bold(self : Sheet, key : String, raw : String) -> Unit {
  let value = @formula.evaluate(raw, fn(r) { self.get(r).value })
  self.cells[key] = Cell(raw~, value~, bold=true)
}

///|
/// Store a cell with full style control: bold, alignment, number format, and colors.
pub fn Sheet::set_styled(
  self : Sheet,
  key : String,
  raw : String,
  bold : Bool,
  align : @cell.Align,
  format : @cell.NumFormat,
  bg_color : String,
  text_color : String,
) -> Unit {
  let value = @formula.evaluate(raw, fn(r) { self.get(r).value })
  self.cells[key] = Cell(
    raw~,
    value~,
    bold~,
    align~,
    format~,
    bg_color~,
    text_color~,
  )
}

///|
/// Store a bold, centered header cell with a background color.
pub fn Sheet::set_header(
  self : Sheet,
  key : String,
  raw : String,
  bg : String,
) -> Unit {
  self.set_styled(key, raw, true, Center, General, bg, "")
}

///|
/// Store a cell with currency number format.
pub fn Sheet::set_currency(self : Sheet, key : String, raw : String) -> Unit {
  self.set_styled(key, raw, false, Auto, Currency, "", "")
}

///|
/// Store a bold cell with currency format and optional background color.
pub fn Sheet::set_currency_bold(
  self : Sheet,
  key : String,
  raw : String,
  bg : String,
) -> Unit {
  self.set_styled(key, raw, true, Auto, Currency, bg, "")
}

///|
/// Get the numeric value at (col, row), returning 0.0 for non-numeric or empty cells.
pub fn Sheet::get_num(self : Sheet, col : Int, row : Int) -> Double {
  let key = @cell.make_key(col, row)
  match self.get(key).value {
    Num(n) => n
    _ => 0.0
  }
}

///|
/// Populate the sheet with demo sales dashboard data including revenue, formulas, and styling.
pub fn Sheet::populate_sales_dashboard(self : Sheet) -> Unit {
  // Headers (row 0) — styled with blue background
  let hdr = "#e3f2fd"
  self.set_header("A1", "Product", hdr)
  self.set_header("B1", "Q1 Revenue", hdr)
  self.set_header("C1", "Q2 Revenue", hdr)
  self.set_header("D1", "Q3 Revenue", hdr)
  self.set_header("E1", "Q4 Revenue", hdr)
  self.set_header("F1", "Annual Total", hdr)
  self.set_header("G1", "Avg Quarter", hdr)
  self.set_header("H1", "Growth", hdr)
  self.set_header("I1", "Trend", hdr)

  // Product data — revenue in currency format
  self.set_cell("A2", "Widget Pro")
  self.set_currency("B2", "45200")
  self.set_currency("C2", "52800")
  self.set_currency("D2", "61400")
  self.set_currency("E2", "58900")
  self.set_currency_bold("F2", "=SUM(B2:E2)", "")
  self.set_currency("G2", "=AVG(B2:E2)")
  self.set_styled(
    "H2",
    "=IF(E2>B2, \"Up\", \"Down\")",
    false,
    Center,
    General,
    "",
    "",
  )

  self.set_cell("A3", "Gadget X")
  self.set_currency("B3", "32100")
  self.set_currency("C3", "38500")
  self.set_currency("D3", "41200")
  self.set_currency("E3", "44800")
  self.set_currency_bold("F3", "=SUM(B3:E3)", "")
  self.set_currency("G3", "=AVG(B3:E3)")
  self.set_styled(
    "H3",
    "=IF(E3>B3, \"Up\", \"Down\")",
    false,
    Center,
    General,
    "",
    "",
  )

  self.set_cell("A4", "Device Z")
  self.set_currency("B4", "67800")
  self.set_currency("C4", "72100")
  self.set_currency("D4", "78500")
  self.set_currency("E4", "85200")
  self.set_currency_bold("F4", "=SUM(B4:E4)", "")
  self.set_currency("G4", "=AVG(B4:E4)")
  self.set_styled(
    "H4",
    "=IF(E4>B4, \"Up\", \"Down\")",
    false,
    Center,
    General,
    "",
    "",
  )

  self.set_cell("A5", "Service Plus")
  self.set_currency("B5", "28900")
  self.set_currency("C5", "31200")
  self.set_currency("D5", "35600")
  self.set_currency("E5", "39100")
  self.set_currency_bold("F5", "=SUM(B5:E5)", "")
  self.set_currency("G5", "=AVG(B5:E5)")
  self.set_styled(
    "H5",
    "=IF(E5>B5, \"Up\", \"Down\")",
    false,
    Center,
    General,
    "",
    "",
  )

  self.set_cell("A6", "Cloud Suite")
  self.set_currency("B6", "89500")
  self.set_currency("C6", "95200")
  self.set_currency("D6", "102800")
  self.set_currency("E6", "115600")
  self.set_currency_bold("F6", "=SUM(B6:E6)", "")
  self.set_currency("G6", "=AVG(B6:E6)")
  self.set_styled(
    "H6",
    "=IF(E6>B6, \"Up\", \"Down\")",
    false,
    Center,
    General,
    "",
    "",
  )

  // Totals row — highlighted with green background
  let tot = "#e8f5e9"
  self.set_styled("A8", "Totals", true, Auto, General, tot, "")
  self.set_currency_bold("B8", "=SUM(B2:B6)", tot)
  self.set_currency_bold("C8", "=SUM(C2:C6)", tot)
  self.set_currency_bold("D8", "=SUM(D2:D6)", tot)
  self.set_currency_bold("E8", "=SUM(E2:E6)", tot)
  self.set_currency_bold("F8", "=SUM(F2:F6)", tot)
  self.set_currency_bold("G8", "=AVG(G2:G6)", tot)

  // Summary stats — highlighted with yellow background
  let stat = "#fffde7"
  self.set_styled("A10", "Statistics", true, Auto, General, stat, "")
  self.set_styled("B10", "", false, Auto, General, stat, "")
  self.set_cell("A11", "Best Quarter")
  self.set_currency("B11", "=MAX(B8:E8)")
  self.set_cell("A12", "Worst Quarter")
  self.set_currency("B12", "=MIN(B8:E8)")
  self.set_cell("A13", "Product Count")
  self.set_cell("B13", "=COUNT(B2:B6)")
  self.set_cell("A14", "Grand Total")
  self.set_currency_bold("B14", "=F8", "")
}

///|
/// Populate the sheet with demo team metrics data including tasks, hours, and efficiency formulas.
pub fn Sheet::populate_team_metrics(self : Sheet) -> Unit {
  // Headers — styled with purple background
  let hdr = "#ede7f6"
  self.set_header("A1", "Team Member", hdr)
  self.set_header("B1", "Tasks Done", hdr)
  self.set_header("C1", "Hours", hdr)
  self.set_header("D1", "Efficiency", hdr)
  self.set_header("E1", "Rating", hdr)

  self.set_cell("A2", "Alice Chen")
  self.set_cell("B2", "47")
  self.set_cell("C2", "160")
  self.set_cell("D2", "=ROUND(B2/C2*100, 1)")
  self.set_cell("E2", "=IF(D2>30, \"Star\", \"OK\")")

  self.set_cell("A3", "Bob Kim")
  self.set_cell("B3", "52")
  self.set_cell("C3", "168")
  self.set_cell("D3", "=ROUND(B3/C3*100, 1)")
  self.set_cell("E3", "=IF(D3>30, \"Star\", \"OK\")")

  self.set_cell("A4", "Carol Liu")
  self.set_cell("B4", "39")
  self.set_cell("C4", "152")
  self.set_cell("D4", "=ROUND(B4/C4*100, 1)")
  self.set_cell("E4", "=IF(D4>30, \"Star\", \"OK\")")

  self.set_cell("A5", "Dave Patel")
  self.set_cell("B5", "61")
  self.set_cell("C5", "175")
  self.set_cell("D5", "=ROUND(B5/C5*100, 1)")
  self.set_cell("E5", "=IF(D5>30, \"Star\", \"OK\")")

  // Team totals
  self.set_cell_bold("A7", "Team Total")
  self.set_cell_bold("B7", "=SUM(B2:B5)")
  self.set_cell_bold("C7", "=SUM(C2:C5)")
  self.set_cell_bold("D7", "=ROUND(AVG(D2:D5), 1)")

  self.set_cell("A9", "Top Performer")
  self.set_cell("B9", "=MAX(B2:B5)")
  self.set_cell("A10", "Avg Tasks")
  self.set_cell("B10", "=ROUND(AVG(B2:B5), 1)")
  self.set_cell("A11", "Power Check")
  self.set_cell("B11", "=POWER(2, 10)")
}
