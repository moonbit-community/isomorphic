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
  sheet.cells[key] = { raw, value, bold: false }
}

///|
fn set_cell_bold(sheet : Sheet, key : String, raw : String) -> Unit {
  let value = @formula.evaluate(raw, fn(r) { sheet.get(r).value })
  sheet.cells[key] = { raw, value, bold: true }
}

///|
fn populate_sales_dashboard(sheet : Sheet) -> Unit {
  // Headers (row 0)
  set_cell_bold(sheet, "A1", "Product")
  set_cell_bold(sheet, "B1", "Q1 Revenue")
  set_cell_bold(sheet, "C1", "Q2 Revenue")
  set_cell_bold(sheet, "D1", "Q3 Revenue")
  set_cell_bold(sheet, "E1", "Q4 Revenue")
  set_cell_bold(sheet, "F1", "Annual Total")
  set_cell_bold(sheet, "G1", "Avg Quarter")

  // Product data
  set_cell(sheet, "A2", "Widget Pro")
  set_cell(sheet, "B2", "45200")
  set_cell(sheet, "C2", "52800")
  set_cell(sheet, "D2", "61400")
  set_cell(sheet, "E2", "58900")
  set_cell(sheet, "F2", "=SUM(B2:E2)")
  set_cell(sheet, "G2", "=AVG(B2:E2)")

  set_cell(sheet, "A3", "Gadget X")
  set_cell(sheet, "B3", "32100")
  set_cell(sheet, "C3", "38500")
  set_cell(sheet, "D3", "41200")
  set_cell(sheet, "E3", "44800")
  set_cell(sheet, "F3", "=SUM(B3:E3)")
  set_cell(sheet, "G3", "=AVG(B3:E3)")

  set_cell(sheet, "A4", "Device Z")
  set_cell(sheet, "B4", "67800")
  set_cell(sheet, "C4", "72100")
  set_cell(sheet, "D4", "78500")
  set_cell(sheet, "E4", "85200")
  set_cell(sheet, "F4", "=SUM(B4:E4)")
  set_cell(sheet, "G4", "=AVG(B4:E4)")

  set_cell(sheet, "A5", "Service Plus")
  set_cell(sheet, "B5", "28900")
  set_cell(sheet, "C5", "31200")
  set_cell(sheet, "D5", "35600")
  set_cell(sheet, "E5", "39100")
  set_cell(sheet, "F5", "=SUM(B5:E5)")
  set_cell(sheet, "G5", "=AVG(B5:E5)")

  set_cell(sheet, "A6", "Cloud Suite")
  set_cell(sheet, "B6", "89500")
  set_cell(sheet, "C6", "95200")
  set_cell(sheet, "D6", "102800")
  set_cell(sheet, "E6", "115600")
  set_cell(sheet, "F6", "=SUM(B6:E6)")
  set_cell(sheet, "G6", "=AVG(B6:E6)")

  // Totals row
  set_cell_bold(sheet, "A8", "Totals")
  set_cell_bold(sheet, "B8", "=SUM(B2:B6)")
  set_cell_bold(sheet, "C8", "=SUM(C2:C6)")
  set_cell_bold(sheet, "D8", "=SUM(D2:D6)")
  set_cell_bold(sheet, "E8", "=SUM(E2:E6)")
  set_cell_bold(sheet, "F8", "=SUM(F2:F6)")
  set_cell_bold(sheet, "G8", "=AVG(G2:G6)")

  // Summary stats
  set_cell_bold(sheet, "A10", "Statistics")
  set_cell(sheet, "A11", "Best Quarter")
  set_cell(sheet, "B11", "=MAX(B8:E8)")
  set_cell(sheet, "A12", "Worst Quarter")
  set_cell(sheet, "B12", "=MIN(B8:E8)")
  set_cell(sheet, "A13", "Product Count")
  set_cell(sheet, "B13", "=COUNT(B2:B6)")
  set_cell(sheet, "A14", "Grand Total")
  set_cell_bold(sheet, "B14", "=F8")
}

///|
fn populate_team_metrics(sheet : Sheet) -> Unit {
  // Headers
  set_cell_bold(sheet, "A1", "Team Member")
  set_cell_bold(sheet, "B1", "Tasks Done")
  set_cell_bold(sheet, "C1", "Hours")
  set_cell_bold(sheet, "D1", "Efficiency")

  set_cell(sheet, "A2", "Alice Chen")
  set_cell(sheet, "B2", "47")
  set_cell(sheet, "C2", "160")
  set_cell(sheet, "D2", "=B2/C2*100")

  set_cell(sheet, "A3", "Bob Kim")
  set_cell(sheet, "B3", "52")
  set_cell(sheet, "C3", "168")
  set_cell(sheet, "D3", "=B3/C3*100")

  set_cell(sheet, "A4", "Carol Liu")
  set_cell(sheet, "B4", "39")
  set_cell(sheet, "C4", "152")
  set_cell(sheet, "D4", "=B4/C4*100")

  set_cell(sheet, "A5", "Dave Patel")
  set_cell(sheet, "B5", "61")
  set_cell(sheet, "C5", "175")
  set_cell(sheet, "D5", "=B5/C5*100")

  // Team totals
  set_cell_bold(sheet, "A7", "Team Total")
  set_cell_bold(sheet, "B7", "=SUM(B2:B5)")
  set_cell_bold(sheet, "C7", "=SUM(C2:C5)")
  set_cell_bold(sheet, "D7", "=AVG(D2:D5)")

  set_cell(sheet, "A9", "Top Performer")
  set_cell(sheet, "B9", "=MAX(B2:B5)")
  set_cell(sheet, "A10", "Avg Tasks")
  set_cell(sheet, "B10", "=AVG(B2:B5)")
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
