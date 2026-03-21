///|
/// Recalculate all formula cells in a sheet.
///
/// Uses a simple multi-pass convergence strategy: copy all cells, then iterate
/// three times, re-evaluating every formula cell on each pass. This handles
/// dependency chains up to three levels deep without needing an explicit
/// topological sort. Each pass reads the latest computed values from previous
/// iterations.
///
/// If re-evaluation of a formula produces an `Error` but the cell already holds
/// a non-`Empty` value (e.g. a cached xlsx result), the existing value is
/// preserved. This ensures imported data remains visible even when our formula
/// engine does not support every Excel function.
fn recalc(sheet : Sheet) -> Sheet {
  let new_cells : Map[String, @cell.Cell] = {}
  // First pass: copy all cells
  sheet.cells.each(fn(k, v) { new_cells[k] = v })
  // Second pass: evaluate formulas
  // We do multiple passes to handle dependencies (simple convergence)
  for _ in 0..<3 {
    sheet.cells.each(fn(k, c) {
      if !c.raw.is_empty() && c.raw[0] == '=' {
        let value = @formula.evaluate(c.raw, fn(r) {
          let cell = match new_cells.get(r) {
            Some(c) => c
            None => @cell.Cell::empty()
          }
          cell.value
        })
        // Keep existing value if re-evaluation fails (preserves cached xlsx results)
        let final_value = match value {
          Error(_) =>
            match c.value {
              Empty => value
              _ => c.value
            }
          _ => value
        }
        new_cells[k] = { ..c, value: final_value }
      }
    })
  }
  { ..sheet, cells: new_cells }
}

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
pub fn Model::update(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
  msg : Msg,
) -> (@rabbita.Cmd, Model) {
  match msg {
    SelectCell(col, row) => {
      let model = if self.editing { self.commit_edit() } else { self }
      (
        @rabbita.none,
        {
          ..model,
          sel_col: col.clamp(min=0, max=num_cols - 1),
          sel_row: row.clamp(min=0, max=num_rows - 1),
          editing: false,
        },
      )
    }
    MoveSelection(dc, dr) => {
      let model = if self.editing { self.commit_edit() } else { self }
      (
        @rabbita.none,
        {
          ..model,
          sel_col: (model.sel_col + dc).clamp(min=0, max=num_cols - 1),
          sel_row: (model.sel_row + dr).clamp(min=0, max=num_rows - 1),
          editing: false,
        },
      )
    }
    StartEdit => {
      let cell = self.selected_cell()
      (@rabbita.none, { ..self, editing: true, edit_value: cell.raw })
    }
    StartEditWith(ch) =>
      (@rabbita.none, { ..self, editing: true, edit_value: ch })
    UpdateEdit(v) => (@rabbita.none, { ..self, edit_value: v })
    CommitEdit => (@rabbita.none, self.commit_edit())
    CancelEdit => (@rabbita.none, { ..self, editing: false, edit_value: "" })
    SelectSheet(i) => {
      let model = if self.editing { self.commit_edit() } else { self }
      (@rabbita.none, { ..model, active_sheet: i })
    }
    AddSheet => {
      let name = "Sheet \{self.sheets.length() + 1}"
      let sheets = self.sheets.copy()
      sheets.push(Sheet::new(name))
      (@rabbita.none, { ..self, sheets, })
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
      (@rabbita.none, { ..self, sheets, active_sheet: active })
    }
    ToggleBold =>
      (
        @rabbita.none,
        self.update_selected_cell(fn(c) { { ..c, bold: !c.bold } }),
      )
    ToggleItalic =>
      (
        @rabbita.none,
        self.update_selected_cell(fn(c) { { ..c, italic: !c.italic } }),
      )
    SetAlign(a) =>
      (@rabbita.none, self.update_selected_cell(fn(c) { { ..c, align: a } }))
    SetFormat(f) =>
      (@rabbita.none, self.update_selected_cell(fn(c) { { ..c, format: f } }))
    SetBgColor(color) =>
      (
        @rabbita.none,
        self.update_selected_cell(fn(c) { { ..c, bg_color: color } }),
      )
    SetTextColor(color) =>
      (
        @rabbita.none,
        self.update_selected_cell(fn(c) { { ..c, text_color: color } }),
      )
    ToggleChart => (@rabbita.none, { ..self, show_chart: !self.show_chart })
    ToggleHeatMap => (@rabbita.none, { ..self, heat_map: !self.heat_map })
    ClearCell => {
      let key = @cell.make_key(self.sel_col, self.sel_row)
      let sheet = self.current_sheet()
      let new_cells = sheet.cells
      new_cells[key] = @cell.Cell::empty()
      let sheets = self.sheets.copy()
      sheets[self.active_sheet] = recalc({ ..sheet, cells: new_cells })
      (@rabbita.none, { ..self, sheets, })
    }
    RequestImport => (import_xlsx_cmd(dispatch), self)
    ImportExcel(bytes) => (@rabbita.none, load_xlsx(self, bytes))
    ExportExcel => {
      let model = if self.editing { self.commit_edit() } else { self }
      export_xlsx(model)
      (@rabbita.none, model)
    }
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
  let new_sheet = recalc({ ..sheet, cells: new_cells })
  let sheets = self.sheets.copy()
  sheets[self.active_sheet] = new_sheet
  { ..self, sheets, editing: false, edit_value: "" }
}
