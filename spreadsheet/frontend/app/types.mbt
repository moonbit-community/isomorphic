///|
/// Spreadsheet model — demonstrates TEA scaling with complex nested state.
///
/// State managed here:
///   - Multiple sheets with independent cell grids
///   - Cell selection + editing state
///   - Formula evaluation across the entire sheet

pub let num_cols : Int = 26  // A-Z

pub let num_rows : Int = 30

///|
pub struct Sheet {
  name : String
  cells : Map[String, @cell.Cell]
}

///|
pub fn Sheet::new(name : String) -> Sheet {
  { name, cells: {} }
}

///|
pub fn Sheet::get(self : Sheet, key : String) -> @cell.Cell {
  match self.cells.get(key) {
    Some(c) => c
    None => @cell.Cell::empty()
  }
}

///|
pub struct Model {
  sheets : Array[Sheet]
  active_sheet : Int
  sel_col : Int
  sel_row : Int
  editing : Bool
  edit_value : String
}

///|
pub(all) enum Msg {
  // Navigation
  SelectCell(Int, Int)
  MoveSelection(Int, Int)  // delta col, delta row
  // Editing
  StartEdit
  StartEditWith(String)  // start editing with initial character
  UpdateEdit(String)
  CommitEdit
  CancelEdit
  // Sheets
  SelectSheet(Int)
  AddSheet
  DeleteSheet(Int)
  // Cell operations
  ToggleBold
  ToggleItalic
  SetAlign(@cell.Align)
  SetFormat(@cell.NumFormat)
  SetBgColor(String)
  SetTextColor(String)
  ClearCell
}

///|
pub fn Model::new() -> Model {
  let sheet1 = Sheet::new("Sales Dashboard")
  let sheet2 = Sheet::new("Team Metrics")
  let sheet3 = Sheet::new("Sheet 3")
  // Populate Sales Dashboard with demo data
  populate_sales_dashboard(sheet1)
  populate_team_metrics(sheet2)
  let model : Model = {
    sheets: [sheet1, sheet2, sheet3],
    active_sheet: 0,
    sel_col: 0,
    sel_row: 0,
    editing: false,
    edit_value: "",
  }
  // Recalculate all sheets so formulas are evaluated
  let sheets = model.sheets.copy()
  sheets[0] = recalc(sheets[0])
  sheets[1] = recalc(sheets[1])
  { ..model, sheets }
}

///|
fn set_cell(sheet : Sheet, key : String, raw : String) -> Unit {
  let value = @formula.evaluate(raw, fn(r) { sheet.get(r).value })
  sheet.cells[key] = {
    raw, value, bold: false, italic: false,
    align: Auto, format: General, bg_color: "", text_color: "",
  }
}

///|
fn set_cell_bold(sheet : Sheet, key : String, raw : String) -> Unit {
  let value = @formula.evaluate(raw, fn(r) { sheet.get(r).value })
  sheet.cells[key] = {
    raw, value, bold: true, italic: false,
    align: Auto, format: General, bg_color: "", text_color: "",
  }
}

///|
fn set_styled(
  sheet : Sheet,
  key : String,
  raw : String,
  bold : Bool,
  align : @cell.Align,
  format : @cell.NumFormat,
  bg_color : String,
  text_color : String,
) -> Unit {
  let value = @formula.evaluate(raw, fn(r) { sheet.get(r).value })
  sheet.cells[key] = {
    raw, value, bold, italic: false,
    align, format, bg_color, text_color,
  }
}

///|
fn set_header(sheet : Sheet, key : String, raw : String, bg : String) -> Unit {
  set_styled(sheet, key, raw, true, Center, General, bg, "")
}

///|
fn set_currency(sheet : Sheet, key : String, raw : String) -> Unit {
  set_styled(sheet, key, raw, false, Auto, Currency, "", "")
}

///|
fn set_currency_bold(
  sheet : Sheet,
  key : String,
  raw : String,
  bg : String,
) -> Unit {
  set_styled(sheet, key, raw, true, Auto, Currency, bg, "")
}

///|
fn populate_sales_dashboard(sheet : Sheet) -> Unit {
  // Headers (row 0) — styled with blue background
  let hdr = "#e3f2fd"
  set_header(sheet, "A1", "Product", hdr)
  set_header(sheet, "B1", "Q1 Revenue", hdr)
  set_header(sheet, "C1", "Q2 Revenue", hdr)
  set_header(sheet, "D1", "Q3 Revenue", hdr)
  set_header(sheet, "E1", "Q4 Revenue", hdr)
  set_header(sheet, "F1", "Annual Total", hdr)
  set_header(sheet, "G1", "Avg Quarter", hdr)
  set_header(sheet, "H1", "Growth", hdr)

  // Product data — revenue in currency format
  set_cell(sheet, "A2", "Widget Pro")
  set_currency(sheet, "B2", "45200")
  set_currency(sheet, "C2", "52800")
  set_currency(sheet, "D2", "61400")
  set_currency(sheet, "E2", "58900")
  set_currency_bold(sheet, "F2", "=SUM(B2:E2)", "")
  set_currency(sheet, "G2", "=AVG(B2:E2)")
  set_styled(sheet, "H2", "=IF(E2>B2, \"Up\", \"Down\")", false, Center, General, "", "#0f9d58")

  set_cell(sheet, "A3", "Gadget X")
  set_currency(sheet, "B3", "32100")
  set_currency(sheet, "C3", "38500")
  set_currency(sheet, "D3", "41200")
  set_currency(sheet, "E3", "44800")
  set_currency_bold(sheet, "F3", "=SUM(B3:E3)", "")
  set_currency(sheet, "G3", "=AVG(B3:E3)")
  set_styled(sheet, "H3", "=IF(E3>B3, \"Up\", \"Down\")", false, Center, General, "", "#0f9d58")

  set_cell(sheet, "A4", "Device Z")
  set_currency(sheet, "B4", "67800")
  set_currency(sheet, "C4", "72100")
  set_currency(sheet, "D4", "78500")
  set_currency(sheet, "E4", "85200")
  set_currency_bold(sheet, "F4", "=SUM(B4:E4)", "")
  set_currency(sheet, "G4", "=AVG(B4:E4)")
  set_styled(sheet, "H4", "=IF(E4>B4, \"Up\", \"Down\")", false, Center, General, "", "#0f9d58")

  set_cell(sheet, "A5", "Service Plus")
  set_currency(sheet, "B5", "28900")
  set_currency(sheet, "C5", "31200")
  set_currency(sheet, "D5", "35600")
  set_currency(sheet, "E5", "39100")
  set_currency_bold(sheet, "F5", "=SUM(B5:E5)", "")
  set_currency(sheet, "G5", "=AVG(B5:E5)")
  set_styled(sheet, "H5", "=IF(E5>B5, \"Up\", \"Down\")", false, Center, General, "", "#0f9d58")

  set_cell(sheet, "A6", "Cloud Suite")
  set_currency(sheet, "B6", "89500")
  set_currency(sheet, "C6", "95200")
  set_currency(sheet, "D6", "102800")
  set_currency(sheet, "E6", "115600")
  set_currency_bold(sheet, "F6", "=SUM(B6:E6)", "")
  set_currency(sheet, "G6", "=AVG(B6:E6)")
  set_styled(sheet, "H6", "=IF(E6>B6, \"Up\", \"Down\")", false, Center, General, "", "#0f9d58")

  // Totals row — highlighted with green background
  let tot = "#e8f5e9"
  set_styled(sheet, "A8", "Totals", true, Auto, General, tot, "")
  set_currency_bold(sheet, "B8", "=SUM(B2:B6)", tot)
  set_currency_bold(sheet, "C8", "=SUM(C2:C6)", tot)
  set_currency_bold(sheet, "D8", "=SUM(D2:D6)", tot)
  set_currency_bold(sheet, "E8", "=SUM(E2:E6)", tot)
  set_currency_bold(sheet, "F8", "=SUM(F2:F6)", tot)
  set_currency_bold(sheet, "G8", "=AVG(G2:G6)", tot)

  // Summary stats — highlighted with yellow background
  let stat = "#fffde7"
  set_styled(sheet, "A10", "Statistics", true, Auto, General, stat, "")
  set_styled(sheet, "B10", "", false, Auto, General, stat, "")
  set_cell(sheet, "A11", "Best Quarter")
  set_currency(sheet, "B11", "=MAX(B8:E8)")
  set_cell(sheet, "A12", "Worst Quarter")
  set_currency(sheet, "B12", "=MIN(B8:E8)")
  set_cell(sheet, "A13", "Product Count")
  set_cell(sheet, "B13", "=COUNT(B2:B6)")
  set_cell(sheet, "A14", "Grand Total")
  set_currency_bold(sheet, "B14", "=F8", "")
}

///|
fn populate_team_metrics(sheet : Sheet) -> Unit {
  // Headers — styled with purple background
  let hdr = "#ede7f6"
  set_header(sheet, "A1", "Team Member", hdr)
  set_header(sheet, "B1", "Tasks Done", hdr)
  set_header(sheet, "C1", "Hours", hdr)
  set_header(sheet, "D1", "Efficiency", hdr)
  set_header(sheet, "E1", "Rating", hdr)

  set_cell(sheet, "A2", "Alice Chen")
  set_cell(sheet, "B2", "47")
  set_cell(sheet, "C2", "160")
  set_cell(sheet, "D2", "=ROUND(B2/C2*100, 1)")
  set_cell(sheet, "E2", "=IF(D2>30, \"Star\", \"OK\")")

  set_cell(sheet, "A3", "Bob Kim")
  set_cell(sheet, "B3", "52")
  set_cell(sheet, "C3", "168")
  set_cell(sheet, "D3", "=ROUND(B3/C3*100, 1)")
  set_cell(sheet, "E3", "=IF(D3>30, \"Star\", \"OK\")")

  set_cell(sheet, "A4", "Carol Liu")
  set_cell(sheet, "B4", "39")
  set_cell(sheet, "C4", "152")
  set_cell(sheet, "D4", "=ROUND(B4/C4*100, 1)")
  set_cell(sheet, "E4", "=IF(D4>30, \"Star\", \"OK\")")

  set_cell(sheet, "A5", "Dave Patel")
  set_cell(sheet, "B5", "61")
  set_cell(sheet, "C5", "175")
  set_cell(sheet, "D5", "=ROUND(B5/C5*100, 1)")
  set_cell(sheet, "E5", "=IF(D5>30, \"Star\", \"OK\")")

  // Team totals
  set_cell_bold(sheet, "A7", "Team Total")
  set_cell_bold(sheet, "B7", "=SUM(B2:B5)")
  set_cell_bold(sheet, "C7", "=SUM(C2:C5)")
  set_cell_bold(sheet, "D7", "=ROUND(AVG(D2:D5), 1)")

  set_cell(sheet, "A9", "Top Performer")
  set_cell(sheet, "B9", "=MAX(B2:B5)")
  set_cell(sheet, "A10", "Avg Tasks")
  set_cell(sheet, "B10", "=ROUND(AVG(B2:B5), 1)")
  set_cell(sheet, "A11", "Power Check")
  set_cell(sheet, "B11", "=POWER(2, 10)")
}

///|
pub fn Model::current_sheet(self : Model) -> Sheet {
  self.sheets[self.active_sheet]
}

///|
pub fn Model::selected_cell(self : Model) -> @cell.Cell {
  let key = @cell.make_key(self.sel_col, self.sel_row)
  self.current_sheet().get(key)
}
