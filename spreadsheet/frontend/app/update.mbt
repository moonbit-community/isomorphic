///|
/// Recalculate all cells in the active sheet.
/// Simple approach: iterate all cells and re-evaluate formulas.
fn recalc(sheet : Sheet) -> Sheet {
  let new_cells : Map[String, @cell.Cell] = {}
  // First pass: copy all cells
  sheet.cells.each(fn(k, v) { new_cells[k] = v })
  // Second pass: evaluate formulas
  // We do multiple passes to handle dependencies (simple convergence)
  for _pass = 0; _pass < 3; _pass = _pass + 1 {
    sheet.cells.each(fn(k, c) {
      if c.raw.length() > 0 && c.raw[0] == '=' {
        let value = @formula.evaluate(c.raw, fn(r) {
          let cell = match new_cells.get(r) {
            Some(c) => c
            None => @cell.Cell::empty()
          }
          cell.value
        })
        new_cells[k] = { ..c, value }
      }
    })
  }
  { ..sheet, cells: new_cells }
}

///|
pub fn Model::update(self : Model, msg : Msg) -> Model {
  match msg {
    SelectCell(col, row) => {
      let model = if self.editing {
        self.commit_edit()
      } else {
        self
      }
      {
        ..model,
        sel_col: clamp(col, 0, num_cols - 1),
        sel_row: clamp(row, 0, num_rows - 1),
        editing: false,
      }
    }
    MoveSelection(dc, dr) => {
      let model = if self.editing {
        self.commit_edit()
      } else {
        self
      }
      {
        ..model,
        sel_col: clamp(model.sel_col + dc, 0, num_cols - 1),
        sel_row: clamp(model.sel_row + dr, 0, num_rows - 1),
        editing: false,
      }
    }
    StartEdit => {
      let cell = self.selected_cell()
      { ..self, editing: true, edit_value: cell.raw }
    }
    StartEditWith(ch) => { ..self, editing: true, edit_value: ch }
    UpdateEdit(v) => { ..self, edit_value: v }
    CommitEdit => self.commit_edit()
    CancelEdit => { ..self, editing: false, edit_value: "" }
    SelectSheet(i) => {
      let model = if self.editing {
        self.commit_edit()
      } else {
        self
      }
      { ..model, active_sheet: i }
    }
    AddSheet => {
      let name = "Sheet \{self.sheets.length() + 1}"
      let sheets = self.sheets.copy()
      sheets.push(Sheet::new(name))
      { ..self, sheets }
    }
    DeleteSheet(i) => {
      if self.sheets.length() <= 1 {
        return self
      }
      let sheets = []
      for j = 0; j < self.sheets.length(); j = j + 1 {
        if j != i {
          sheets.push(self.sheets[j])
        }
      }
      let active = if self.active_sheet >= sheets.length() {
        sheets.length() - 1
      } else {
        self.active_sheet
      }
      { ..self, sheets, active_sheet: active }
    }
    ToggleBold => self.update_selected_cell(fn(c) { { ..c, bold: !c.bold } })
    ToggleItalic =>
      self.update_selected_cell(fn(c) { { ..c, italic: !c.italic } })
    SetAlign(a) => self.update_selected_cell(fn(c) { { ..c, align: a } })
    SetFormat(f) => self.update_selected_cell(fn(c) { { ..c, format: f } })
    SetBgColor(color) =>
      self.update_selected_cell(fn(c) { { ..c, bg_color: color } })
    SetTextColor(color) =>
      self.update_selected_cell(fn(c) { { ..c, text_color: color } })
    ToggleChart => { ..self, show_chart: !self.show_chart }
    ClearCell => {
      let key = @cell.make_key(self.sel_col, self.sel_row)
      let sheet = self.current_sheet()
      let new_cells = sheet.cells
      new_cells[key] = @cell.Cell::empty()
      let sheets = self.sheets.copy()
      sheets[self.active_sheet] = recalc({ ..sheet, cells: new_cells })
      { ..self, sheets }
    }
  }
}

///|
fn Model::update_selected_cell(
  self : Model,
  f : (@cell.Cell) -> @cell.Cell,
) -> Model {
  let key = @cell.make_key(self.sel_col, self.sel_row)
  let sheet = self.current_sheet()
  let cell = sheet.get(key)
  let new_cells = sheet.cells
  new_cells[key] = f(cell)
  let sheets = self.sheets.copy()
  sheets[self.active_sheet] = { ..sheet, cells: new_cells }
  { ..self, sheets }
}

///|
fn Model::commit_edit(self : Model) -> Model {
  let key = @cell.make_key(self.sel_col, self.sel_row)
  let sheet = self.current_sheet()
  let old_cell = sheet.get(key)
  let value = @formula.evaluate(self.edit_value, fn(r) {
    sheet.get(r).value
  })
  let new_cell = { ..old_cell, raw: self.edit_value, value }
  let new_cells = sheet.cells
  new_cells[key] = new_cell
  let new_sheet = recalc({ ..sheet, cells: new_cells })
  let sheets = self.sheets.copy()
  sheets[self.active_sheet] = new_sheet
  { ..self, sheets, editing: false, edit_value: "" }
}

///|
fn clamp(v : Int, min : Int, max : Int) -> Int {
  if v < min {
    min
  } else if v > max {
    max
  } else {
    v
  }
}
