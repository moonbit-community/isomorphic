///|
/// Central message handler (TEA update function).
///
/// Processes a single `Msg` and returns the updated `Model` along with any
/// side-effect `Cmd` (e.g. file picker dialogs). Most messages produce
/// `@rabbita.none` (no side effects).
///
/// Key behaviors:
///   - **Navigation** (`SelectCell`, `MoveSelection`): commits any in-progress
///     edit before moving the selection, then clamps to grid bounds.
///   - **Editing** (`StartEdit`, `StartEditWith`, `UpdateEdit`, `CommitEdit`,
///     `CancelEdit`): manages the edit lifecycle. `CommitEdit` writes the
///     edited value to the cell, re-evaluates formulas, and recalculates the
///     entire sheet.
///   - **Formatting** (`ToggleBold`, `ToggleItalic`, `SetAlign`, `SetFormat`,
///     `SetBgColor`, `SetTextColor`): updates styling on the currently
///     selected cell without triggering recalculation.
///   - **Sheet management** (`SelectSheet`, `AddSheet`, `DeleteSheet`):
///     switches, creates, or removes sheets. Cannot delete the last sheet.
///   - **Import/Export** (`RequestImport`, `ImportExcel`, `ExportExcel`):
///     `RequestImport` issues an async command to open a file picker;
///     `ImportExcel` replaces the model with parsed xlsx data;
///     `ExportExcel` serializes and downloads the workbook.
#warnings("-unresolved_type_variable")
pub fn Model::update(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
  msg : Msg,
) -> (@rabbita.Cmd, Model) {
  match msg {
    SelectCell(col, row) => {
      let was_editing = self.editing
      let model = if self.editing { self.commit_edit() } else { self }
      let result = {
        ..model,
        sel_col: col.clamp(min=0, max=@sheet.num_cols - 1),
        sel_row: row.clamp(min=0, max=@sheet.num_rows - 1),
        editing: false,
        autocomplete_suggestions: [],
        autocomplete_index: -1,
      }
      // Auto-save if we committed a pending edit
      if was_editing { auto_save(dispatch, result) }
      (@rabbita.none, result)
    }
    MoveSelection(dc, dr) => {
      let was_editing = self.editing
      let model = if self.editing { self.commit_edit() } else { self }
      let result = {
        ..model,
        sel_col: (model.sel_col + dc).clamp(min=0, max=@sheet.num_cols - 1),
        sel_row: (model.sel_row + dr).clamp(min=0, max=@sheet.num_rows - 1),
        editing: false,
        autocomplete_suggestions: [],
        autocomplete_index: -1,
      }
      // Auto-save if we committed a pending edit
      if was_editing { auto_save(dispatch, result) }
      (@rabbita.none, result)
    }
    StartEdit => {
      let cell = self.selected_cell()
      (@rabbita.none, { ..self, editing: true, edit_value: cell.raw })
    }
    StartEditWith(ch) =>
      if self.editing {
        // Already editing — append character to current edit value
        (@rabbita.none, { ..self, edit_value: self.edit_value + ch })
      } else {
        (@rabbita.none, { ..self, editing: true, edit_value: ch })
      }
    UpdateEdit(v) => {
      let suggestions = compute_autocomplete(v)
      (
        @rabbita.none,
        {
          ..self,
          edit_value: v,
          autocomplete_suggestions: suggestions,
          autocomplete_index: -1,
        },
      )
    }
    CommitEdit => {
      let model = { ..self.commit_edit(), autocomplete_suggestions: [], autocomplete_index: -1, save_status: "Saving..." }
      (save_workbook(dispatch, model.sheets), model)
    }
    CancelEdit =>
      (
        @rabbita.none,
        {
          ..self,
          editing: false,
          edit_value: "",
          autocomplete_suggestions: [],
          autocomplete_index: -1,
        },
      )
    SelectSheet(i) => {
      let was_editing = self.editing
      let model = if self.editing { self.commit_edit() } else { self }
      let result = { ..model, active_sheet: i, autocomplete_suggestions: [], autocomplete_index: -1 }
      if was_editing { auto_save(dispatch, result) }
      (@rabbita.none, result)
    }
    AddSheet => {
      let name = "Sheet \{self.sheets.length() + 1}"
      let sheets = self.sheets.copy()
      sheets.push(Sheet(name))
      let model = { ..self, sheets, save_status: "Saving..." }
      (save_workbook(dispatch, model.sheets), model)
    }
    DeleteSheet(i) => {
      if self.sheets.length() <= 1 {
        return (@rabbita.none, self)
      }
      let sheets = []
      for j, s in self.sheets {
        if j != i {
          sheets.push(s)
        }
      }
      let active = if self.active_sheet >= sheets.length() {
        sheets.length() - 1
      } else {
        self.active_sheet
      }
      let model = { ..self, sheets, active_sheet: active, save_status: "Saving..." }
      (save_workbook(dispatch, model.sheets), model)
    }
    ToggleBold => {
      let model = { ..self.update_selected_cell(fn(c) { { ..c, bold: !c.bold } }), save_status: "Saving..." }
      (save_workbook(dispatch, model.sheets), model)
    }
    ToggleItalic => {
      let model = { ..self.update_selected_cell(fn(c) { { ..c, italic: !c.italic } }), save_status: "Saving..." }
      (save_workbook(dispatch, model.sheets), model)
    }
    SetAlign(a) => {
      let model = { ..self.update_selected_cell(fn(c) { { ..c, align: a } }), save_status: "Saving..." }
      (save_workbook(dispatch, model.sheets), model)
    }
    SetFormat(f) => {
      let model = { ..self.update_selected_cell(fn(c) { { ..c, format: f } }), save_status: "Saving..." }
      (save_workbook(dispatch, model.sheets), model)
    }
    SetBgColor(color) => {
      let model = { ..self.update_selected_cell(fn(c) { { ..c, bg_color: color } }), save_status: "Saving..." }
      (save_workbook(dispatch, model.sheets), model)
    }
    SetTextColor(color) => {
      let model = { ..self.update_selected_cell(fn(c) { { ..c, text_color: color } }), save_status: "Saving..." }
      (save_workbook(dispatch, model.sheets), model)
    }
    ToggleChart => (@rabbita.none, { ..self, show_chart: !self.show_chart })
    ToggleHeatMap => (@rabbita.none, { ..self, heat_map: !self.heat_map })
    ClearCell => {
      let key = @cell.make_key(self.sel_col, self.sel_row)
      let sheet = self.current_sheet()
      let new_cells = sheet.cells
      new_cells[key] = Cell()
      let sheets = self.sheets.copy()
      sheets[self.active_sheet] = { ..sheet, cells: new_cells }.recalc()
      let model = { ..self, sheets, autocomplete_suggestions: [], autocomplete_index: -1, save_status: "Saving..." }
      (save_workbook(dispatch, model.sheets), model)
    }
    RequestImport => (import_xlsx_cmd(dispatch), self)
    ImportExcel(bytes) => (@rabbita.none, load_xlsx(self, bytes))
    ExportExcel => {
      let model = if self.editing { self.commit_edit() } else { self }
      export_xlsx(model)
      (@rabbita.none, model)
    }
    AutocompleteSelect(name) => {
      let new_value = insert_autocomplete(self.edit_value, name)
      (
        @rabbita.none,
        {
          ..self,
          edit_value: new_value,
          autocomplete_suggestions: [],
          autocomplete_index: -1,
        },
      )
    }
    AutocompleteNav(delta) => {
      let len = self.autocomplete_suggestions.length()
      if len == 0 {
        return (@rabbita.none, self)
      }
      let new_idx = if self.autocomplete_index == -1 && delta < 0 {
        len - 1
      } else {
        (self.autocomplete_index + delta).clamp(min=0, max=len - 1)
      }
      (@rabbita.none, { ..self, autocomplete_index: new_idx })
    }
    LoadFromBackend => {
      // Fetch is done directly via JS FFI in init_sync/fetch_workbook_direct
      // This message is no longer the trigger — keep for compatibility
      (@rabbita.none, self)
    }
    GotBackendData(Ok(sheets)) => {
      if sheets.is_empty() {
        // No data on backend — keep demo data
        return (@rabbita.none, self)
      }
      // Replace sheets with loaded data and recalculate all formulas
      let recalced : Array[@sheet.Sheet] = []
      for s in sheets {
        recalced.push(s.recalc())
      }
      (
        @rabbita.none,
        {
          ..self,
          sheets: recalced,
          active_sheet: 0,
          sel_col: 0,
          sel_row: 0,
          editing: false,
          edit_value: "",
          save_status: "Loaded",
        },
      )
    }
    GotBackendData(Err(_)) =>
      // Backend unavailable — keep demo data as fallback
      (@rabbita.none, self)
    SavedToBackend => (@rabbita.none, { ..self, save_status: "Saved" })
  }
}

///|
/// Apply a transformation function to the currently selected cell and return
/// the updated model. The transformation receives the current cell and returns
/// a modified copy. Does not trigger recalculation (suitable for style-only
/// changes like bold, italic, alignment, and colors).
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
  { ..self, sheets, }
}

///|
/// Commit the current edit: write `edit_value` into the selected cell, evaluate
/// it through the formula engine, recalculate the entire sheet to propagate
/// dependent formula updates, and exit editing mode.
///
/// The cell's existing styling (bold, italic, align, format, colors) is
/// preserved; only `raw` and `value` are updated.
fn Model::commit_edit(self : Model) -> Model {
  let key = @cell.make_key(self.sel_col, self.sel_row)
  let sheet = self.current_sheet()
  let old_cell = sheet.get(key)
  let value = @formula.evaluate(self.edit_value, fn(r) { sheet.get(r).value })
  let new_cell = { ..old_cell, raw: self.edit_value, value }
  let new_cells = sheet.cells
  new_cells[key] = new_cell
  let new_sheet = { ..sheet, cells: new_cells }.recalc()
  let sheets = self.sheets.copy()
  sheets[self.active_sheet] = new_sheet
  { ..self, sheets, editing: false, edit_value: "" }
}

///|
/// Known formula function names for auto-completion.
let formula_functions : Array[String] = [
  "SUM", "AVG", "AVERAGE", "MIN", "MAX", "COUNT", "IF", "ABS", "ROUND",
  "POWER", "MOD", "INT", "CONCAT", "LEN", "UPPER", "LOWER",
]

///|
/// Extract the partial function name being typed at the end of a formula.
/// The partial is the text after the last operator or delimiter character.
/// Returns an empty string if no partial is being typed.
fn extract_partial(value : String) -> String {
  if value.is_empty() || value[0] != '=' {
    return ""
  }
  let chars = value.to_array()
  let len = chars.length()
  // Scan backwards to find the start of the current token
  let end = len
  let mut i = len - 1
  while i >= 0 {
    let c = chars[i]
    if c == '=' || c == '(' || c == '+' || c == '-' || c == '*' || c == '/' ||
       c == ',' || c == '>' || c == '<' || c == ')' || c == ':' || c == ' ' {
      break
    }
    i = i - 1
  }
  let start = i + 1
  if start >= end {
    return ""
  }
  // Build the partial string
  let sb = StringBuilder::new()
  for j = start; j < end; j = j + 1 {
    sb.write_char(chars[j])
  }
  let partial = sb.to_string()
  // Only return if it looks like a function name prefix (all uppercase letters)
  for ch in partial {
    if ch < 'A' || ch > 'Z' {
      return ""
    }
  }
  partial
}

///|
/// Compute autocomplete suggestions based on the current edit value.
/// Returns matching function names if a partial name is being typed.
fn compute_autocomplete(value : String) -> Array[String] {
  let partial = extract_partial(value)
  if partial.is_empty() {
    return []
  }
  let suggestions : Array[String] = []
  for func in formula_functions {
    if func.has_prefix(partial) && func != partial {
      suggestions.push(func)
    }
  }
  suggestions
}

///|
/// Insert the selected autocomplete function name into the edit value.
/// Replaces the partial text at the end with the full function name and
/// appends an opening parenthesis.
fn insert_autocomplete(value : String, name : String) -> String {
  let partial = extract_partial(value)
  if partial.is_empty() {
    return value + name + "("
  }
  // Remove the partial from the end and append the full name
  let prefix_len = value.length() - partial.length()
  let chars = value.to_array()
  let sb = StringBuilder::new()
  for i = 0; i < prefix_len; i = i + 1 {
    sb.write_char(chars[i])
  }
  sb.write_string(name)
  sb.write_char('(')
  sb.to_string()
}
