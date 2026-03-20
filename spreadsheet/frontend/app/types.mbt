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
  let sheet1 = Sheet::new("Sheet 1")
  let sheet2 = Sheet::new("Sheet 2")
  let sheet3 = Sheet::new("Sheet 3")
  {
    sheets: [sheet1, sheet2, sheet3],
    active_sheet: 0,
    sel_col: 0,
    sel_row: 0,
    editing: false,
    edit_value: "",
  }
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
