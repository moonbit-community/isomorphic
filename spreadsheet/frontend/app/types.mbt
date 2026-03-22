///|
/// Top-level application state: all sheets, the active sheet index, selection, and editing state.
pub(all) struct Model {
  /// All worksheet tabs in the workbook.
  sheets : Array[@sheet.Sheet]
  /// Index of the currently visible sheet (0-based).
  active_sheet : Int
  /// Currently selected column (0-based, A=0).
  sel_col : Int
  /// Currently selected row (0-based).
  sel_row : Int
  /// Whether a cell is currently in edit mode.
  editing : Bool
  /// Text content of the cell being edited.
  edit_value : String
  /// Whether the bar chart visualization is displayed.
  show_chart : Bool
  /// Whether the heat map overlay is active.
  heat_map : Bool

  fn new() -> Model
}

///|
/// All user actions the spreadsheet can handle: navigation, editing, formatting, sheet management, and import/export.
pub(all) enum Msg {
  // Navigation
  SelectCell(Int, Int)
  MoveSelection(Int, Int) // delta col, delta row
  // Editing
  StartEdit
  StartEditWith(String) // start editing with initial character
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
  ToggleChart
  ToggleHeatMap
  // Import / Export
  RequestImport
  ImportExcel(Bytes)
  ExportExcel
}

///|
/// Initialize the spreadsheet with demo sheets pre-populated with sample data and evaluated formulas.
pub fn Model::new() -> Model {
  let sheet1 = @sheet.Sheet("Sales Dashboard")
  let sheet2 = @sheet.Sheet("Team Metrics")
  let sheet3 = @sheet.Sheet("Sheet 3")
  // Populate Sales Dashboard with demo data
  sheet1.populate_sales_dashboard()
  sheet2.populate_team_metrics()
  let model : Model = {
    sheets: [sheet1, sheet2, sheet3],
    active_sheet: 0,
    sel_col: 0,
    sel_row: 0,
    editing: false,
    edit_value: "",
    show_chart: true,
    heat_map: true,
  }
  // Recalculate all sheets so formulas are evaluated
  let sheets = model.sheets.copy()
  sheets[0] = sheets[0].recalc()
  sheets[1] = sheets[1].recalc()
  { ..model, sheets, }
}

///|
/// Return the currently active sheet.
pub fn Model::current_sheet(self : Model) -> @sheet.Sheet {
  self.sheets[self.active_sheet]
}

///|
/// Return the cell at the current selection position.
pub fn Model::selected_cell(self : Model) -> @cell.Cell {
  let key = @cell.make_key(self.sel_col, self.sel_row)
  self.current_sheet().get(key)
}
