///|
fn noop_dispatch(_msg : Msg) -> @rabbita.Cmd {
  @rabbita.none
}

// ── Helper: minimal model with empty sheets for fast, deterministic tests ────

///|
fn empty_model() -> Model {
  let sheet1 = @sheet.Sheet("Sheet 1")
  let sheet2 = @sheet.Sheet("Sheet 2")
  let sheet3 = @sheet.Sheet("Sheet 3")
  {
    sheets: [sheet1, sheet2, sheet3],
    active_sheet: 0,
    sel_col: 0,
    sel_row: 0,
    editing: false,
    edit_value: "",
    show_chart: false,
    heat_map: false,
    autocomplete_suggestions: [],
    autocomplete_index: -1,
    save_status: "",
  }
}

// ── Model::new() initialization ─────────────────────────────────────

///|
test "Model::new() creates 3 sheets" {
  let model = Model::new()
  assert_eq(model.sheets.length(), 3)
}

///|
test "Model::new() sheet names" {
  let model = Model::new()
  assert_eq(model.sheets[0].name, "Sales Dashboard")
  assert_eq(model.sheets[1].name, "Team Metrics")
  assert_eq(model.sheets[2].name, "Sheet 3")
}

///|
test "Model::new() default selection and flags" {
  let model = Model::new()
  assert_eq(model.active_sheet, 0)
  assert_eq(model.sel_col, 0)
  assert_eq(model.sel_row, 0)
  assert_eq(model.editing, false)
  assert_eq(model.show_chart, true)
  assert_eq(model.heat_map, true)
}

// ── Navigation: SelectCell ──────────────────────────────────────────

///|
test "SelectCell updates sel_col and sel_row" {
  let (_, model) = empty_model().update(noop_dispatch, SelectCell(5, 10))
  assert_eq(model.sel_col, 5)
  assert_eq(model.sel_row, 10)
}

///|
test "SelectCell clamps negative values to 0" {
  let (_, model) = empty_model().update(noop_dispatch, SelectCell(-1, -5))
  assert_eq(model.sel_col, 0)
  assert_eq(model.sel_row, 0)
}

///|
test "SelectCell clamps values beyond grid bounds" {
  let (_, model) = empty_model().update(noop_dispatch, SelectCell(100, 200))
  assert_eq(model.sel_col, @sheet.num_cols - 1)
  assert_eq(model.sel_row, @sheet.num_rows - 1)
}

///|
test "SelectCell sets editing to false" {
  let m = { ..empty_model(), editing: true, edit_value: "hello" }
  let (_, model) = m.update(noop_dispatch, SelectCell(2, 3))
  assert_eq(model.editing, false)
}

// ── Navigation: MoveSelection ───────────────────────────────────────

///|
test "MoveSelection(1, 0) moves right" {
  let (_, model) = empty_model().update(noop_dispatch, MoveSelection(1, 0))
  assert_eq(model.sel_col, 1)
  assert_eq(model.sel_row, 0)
}

///|
test "MoveSelection(0, 1) moves down" {
  let (_, model) = empty_model().update(noop_dispatch, MoveSelection(0, 1))
  assert_eq(model.sel_col, 0)
  assert_eq(model.sel_row, 1)
}

///|
test "MoveSelection(-1, 0) at col=0 stays at 0" {
  let (_, model) = empty_model().update(noop_dispatch, MoveSelection(-1, 0))
  assert_eq(model.sel_col, 0)
}

///|
test "MoveSelection(0, -1) at row=0 stays at 0" {
  let (_, model) = empty_model().update(noop_dispatch, MoveSelection(0, -1))
  assert_eq(model.sel_row, 0)
}

///|
test "MoveSelection clamps at upper grid bounds" {
  let m = {
    ..empty_model(),
    sel_col: @sheet.num_cols - 1,
    sel_row: @sheet.num_rows - 1,
  }
  let (_, model) = m.update(noop_dispatch, MoveSelection(1, 1))
  assert_eq(model.sel_col, @sheet.num_cols - 1)
  assert_eq(model.sel_row, @sheet.num_rows - 1)
}

///|
test "MoveSelection from middle moves correctly" {
  let m = { ..empty_model(), sel_col: 5, sel_row: 10 }
  let (_, model) = m.update(noop_dispatch, MoveSelection(-2, 3))
  assert_eq(model.sel_col, 3)
  assert_eq(model.sel_row, 13)
}

// ── Editing lifecycle ───────────────────────────────────────────────

///|
test "StartEdit sets editing=true and edit_value to cell raw" {
  let m = empty_model()
  m.sheets[0].set_cell("A1", "hello")
  let (_, model) = m.update(noop_dispatch, StartEdit)
  assert_eq(model.editing, true)
  assert_eq(model.edit_value, "hello")
}

///|
test "StartEdit on empty cell gives empty edit_value" {
  let (_, model) = empty_model().update(noop_dispatch, StartEdit)
  assert_eq(model.editing, true)
  assert_eq(model.edit_value, "")
}

///|
test "StartEditWith sets editing=true with given character" {
  let (_, model) = empty_model().update(noop_dispatch, StartEditWith("="))
  assert_eq(model.editing, true)
  assert_eq(model.edit_value, "=")
}

///|
test "UpdateEdit changes edit_value" {
  let m = { ..empty_model(), editing: true, edit_value: "old" }
  let (_, model) = m.update(noop_dispatch, UpdateEdit("new value"))
  assert_eq(model.edit_value, "new value")
}

///|
test "CommitEdit writes value to cell and exits editing" {
  let m = { ..empty_model(), editing: true, edit_value: "42" }
  let (_, model) = m.update(noop_dispatch, CommitEdit)
  assert_eq(model.editing, false)
  assert_eq(model.edit_value, "")
  let cell = model.selected_cell()
  assert_eq(cell.raw, "42")
  assert_eq(cell.value, Num(42.0))
}

///|
test "CommitEdit preserves cell styling" {
  let m = empty_model()
  let key = @cell.make_key(0, 0)
  m.sheets[0].cells[key] = Cell(raw="10", value=Num(10.0), bold=true)
  let m2 = { ..m, editing: true, edit_value: "20" }
  let (_, model) = m2.update(noop_dispatch, CommitEdit)
  let cell = model.selected_cell()
  assert_eq(cell.raw, "20")
  assert_eq(cell.bold, true)
}

///|
test "CommitEdit with formula evaluates correctly" {
  let m = empty_model()
  m.sheets[0].set_cell("B1", "100")
  let m2 = { ..m, sel_col: 0, sel_row: 0, editing: true, edit_value: "=B1" }
  let (_, model) = m2.update(noop_dispatch, CommitEdit)
  let cell = model.selected_cell()
  assert_eq(cell.raw, "=B1")
  assert_eq(cell.value, Num(100.0))
}

///|
test "CancelEdit restores editing=false without changing cell" {
  let m = empty_model()
  m.sheets[0].set_cell("A1", "original")
  let m2 = { ..m, editing: true, edit_value: "modified" }
  let (_, model) = m2.update(noop_dispatch, CancelEdit)
  assert_eq(model.editing, false)
  assert_eq(model.edit_value, "")
  let cell = model.selected_cell()
  assert_eq(cell.raw, "original")
}

// ── Editing committed on navigation ─────────────────────────────────

///|
test "SelectCell commits pending edit before moving" {
  let m = { ..empty_model(), editing: true, edit_value: "99" }
  let (_, model) = m.update(noop_dispatch, SelectCell(3, 5))
  assert_eq(model.sel_col, 3)
  assert_eq(model.sel_row, 5)
  assert_eq(model.editing, false)
  let cell = model.sheets[0].get("A1")
  assert_eq(cell.raw, "99")
}

///|
test "MoveSelection commits pending edit before moving" {
  let m = { ..empty_model(), editing: true, edit_value: "77" }
  let (_, model) = m.update(noop_dispatch, MoveSelection(1, 0))
  assert_eq(model.editing, false)
  assert_eq(model.sel_col, 1)
  let cell = model.sheets[0].get("A1")
  assert_eq(cell.raw, "77")
}

// ── Formatting ──────────────────────────────────────────────────────

///|
test "ToggleBold toggles bold on selected cell" {
  let (_, model) = empty_model().update(noop_dispatch, ToggleBold)
  assert_eq(model.selected_cell().bold, true)
  let (_, model2) = model.update(noop_dispatch, ToggleBold)
  assert_eq(model2.selected_cell().bold, false)
}

///|
test "ToggleItalic toggles italic on selected cell" {
  let (_, model) = empty_model().update(noop_dispatch, ToggleItalic)
  assert_eq(model.selected_cell().italic, true)
  let (_, model2) = model.update(noop_dispatch, ToggleItalic)
  assert_eq(model2.selected_cell().italic, false)
}

///|
test "SetAlign changes alignment to Center" {
  let (_, model) = empty_model().update(noop_dispatch, SetAlign(Center))
  guard model.selected_cell().align is Center

}

///|
test "SetAlign changes alignment to Right" {
  let (_, model) = empty_model().update(noop_dispatch, SetAlign(Right))
  guard model.selected_cell().align is Right

}

///|
test "SetAlign changes alignment to Left" {
  let (_, model) = empty_model().update(noop_dispatch, SetAlign(Left))
  guard model.selected_cell().align is Left

}

///|
test "SetFormat changes number format to Currency" {
  let (_, model) = empty_model().update(noop_dispatch, SetFormat(Currency))
  guard model.selected_cell().format is Currency

}

///|
test "SetFormat changes number format to Percent" {
  let (_, model) = empty_model().update(noop_dispatch, SetFormat(Percent))
  guard model.selected_cell().format is Percent

}

///|
test "SetFormat changes number format to Fixed" {
  let (_, model) = empty_model().update(noop_dispatch, SetFormat(Fixed))
  guard model.selected_cell().format is Fixed

}

///|
test "SetBgColor changes background color" {
  let (_, model) = empty_model().update(noop_dispatch, SetBgColor("#ff0000"))
  assert_eq(model.selected_cell().bg_color, "#ff0000")
}

///|
test "SetTextColor changes text color" {
  let (_, model) = empty_model().update(noop_dispatch, SetTextColor("#0000ff"))
  assert_eq(model.selected_cell().text_color, "#0000ff")
}

// ── Sheet management ────────────────────────────────────────────────

///|
test "AddSheet adds a new sheet" {
  let (_, model) = empty_model().update(noop_dispatch, AddSheet)
  assert_eq(model.sheets.length(), 4)
  assert_eq(model.sheets[3].name, "Sheet 4")
}

///|
test "AddSheet increments name based on count" {
  let (_, model) = empty_model().update(noop_dispatch, AddSheet)
  let (_, model2) = model.update(noop_dispatch, AddSheet)
  assert_eq(model2.sheets.length(), 5)
  assert_eq(model2.sheets[4].name, "Sheet 5")
}

///|
test "SelectSheet changes active_sheet" {
  let (_, model) = empty_model().update(noop_dispatch, SelectSheet(2))
  assert_eq(model.active_sheet, 2)
}

///|
test "SelectSheet commits pending edit" {
  let m = { ..empty_model(), editing: true, edit_value: "55" }
  let (_, model) = m.update(noop_dispatch, SelectSheet(1))
  assert_eq(model.active_sheet, 1)
  assert_eq(model.editing, false)
  let cell = model.sheets[0].get("A1")
  assert_eq(cell.raw, "55")
}

///|
test "DeleteSheet removes a sheet" {
  let (_, model) = empty_model().update(noop_dispatch, DeleteSheet(1))
  assert_eq(model.sheets.length(), 2)
  assert_eq(model.sheets[0].name, "Sheet 1")
  assert_eq(model.sheets[1].name, "Sheet 3")
}

///|
test "DeleteSheet cannot delete last sheet" {
  let single_sheet : Model = {
    sheets: [Sheet("Only")],
    active_sheet: 0,
    sel_col: 0,
    sel_row: 0,
    editing: false,
    edit_value: "",
    show_chart: false,
    heat_map: false,
    autocomplete_suggestions: [],
    autocomplete_index: -1,
    save_status: "",
  }
  let (_, model) = single_sheet.update(noop_dispatch, DeleteSheet(0))
  assert_eq(model.sheets.length(), 1)
  assert_eq(model.sheets[0].name, "Only")
}

///|
test "DeleteSheet adjusts active_sheet when needed" {
  let m = { ..empty_model(), active_sheet: 2 }
  let (_, model) = m.update(noop_dispatch, DeleteSheet(2))
  assert_eq(model.sheets.length(), 2)
  assert_eq(model.active_sheet, 1)
}

///|
test "DeleteSheet keeps active_sheet when deleting before it" {
  let m = { ..empty_model(), active_sheet: 1 }
  let (_, model) = m.update(noop_dispatch, DeleteSheet(0))
  assert_eq(model.sheets.length(), 2)
  assert_eq(model.active_sheet, 1)
}

// ── ClearCell ───────────────────────────────────────────────────────

///|
test "ClearCell clears the selected cell" {
  let m = empty_model()
  m.sheets[0].set_cell("A1", "data")
  let (_, model) = m.update(noop_dispatch, ClearCell)
  let cell = model.selected_cell()
  assert_eq(cell.raw, "")
  assert_eq(cell.value, Empty)
}

///|
test "ClearCell on already empty cell is a no-op" {
  let (_, model) = empty_model().update(noop_dispatch, ClearCell)
  let cell = model.selected_cell()
  assert_eq(cell.raw, "")
  assert_eq(cell.value, Empty)
}

///|
test "ClearCell removes formatting too" {
  let m = empty_model()
  let key = @cell.make_key(0, 0)
  m.sheets[0].cells[key] = Cell(
    raw="100",
    value=Num(100.0),
    bold=true,
    align=Center,
    format=Currency,
  )
  let (_, model) = m.update(noop_dispatch, ClearCell)
  let cell = model.selected_cell()
  assert_eq(cell.bold, false)
  guard cell.align is Auto
  guard cell.format is General
}

// ── Toggle flags ────────────────────────────────────────────────────

///|
test "ToggleChart flips show_chart" {
  let m = { ..empty_model(), show_chart: true }
  let (_, model) = m.update(noop_dispatch, ToggleChart)
  assert_eq(model.show_chart, false)
  let (_, model2) = model.update(noop_dispatch, ToggleChart)
  assert_eq(model2.show_chart, true)
}

///|
test "ToggleHeatMap flips heat_map" {
  let m = { ..empty_model(), heat_map: true }
  let (_, model) = m.update(noop_dispatch, ToggleHeatMap)
  assert_eq(model.heat_map, false)
  let (_, model2) = model.update(noop_dispatch, ToggleHeatMap)
  assert_eq(model2.heat_map, true)
}

// ── Formatting does not affect other cells ──────────────────────────

///|
test "ToggleBold only affects selected cell" {
  let m = empty_model()
  m.sheets[0].set_cell("A1", "cell1")
  m.sheets[0].set_cell("B1", "cell2")
  let (_, model) = m.update(noop_dispatch, ToggleBold)
  assert_eq(model.sheets[0].get("A1").bold, true)
  assert_eq(model.sheets[0].get("B1").bold, false)
}

// ── current_sheet and selected_cell helpers ─────────────────────────

///|
test "current_sheet returns the active sheet" {
  let m = { ..empty_model(), active_sheet: 1 }
  assert_eq(m.current_sheet().name, "Sheet 2")
}

///|
test "selected_cell returns cell at selection position" {
  let m = { ..empty_model(), sel_col: 2, sel_row: 3 }
  m.sheets[0].set_cell("C4", "found")
  assert_eq(m.selected_cell().raw, "found")
}

// ── Integration: edit + navigate round-trip ─────────────────────────

///|
test "full edit-navigate-edit cycle" {
  let m = empty_model()
  // Start editing A1
  let (_, m1) = m.update(noop_dispatch, StartEditWith("100"))
  assert_eq(m1.editing, true)
  // Commit
  let (_, m2) = m1.update(noop_dispatch, CommitEdit)
  assert_eq(m2.editing, false)
  assert_eq(m2.selected_cell().value, Num(100.0))
  // Move to B1
  let (_, m3) = m2.update(noop_dispatch, MoveSelection(1, 0))
  assert_eq(m3.sel_col, 1)
  // Edit B1 with formula
  let (_, m4) = m3.update(noop_dispatch, StartEditWith("=A1*2"))
  let (_, m5) = m4.update(noop_dispatch, CommitEdit)
  assert_eq(m5.selected_cell().value, Num(200.0))
}

// ── Event replay: simulating keyboard input sequences ───────────────
// These tests simulate the exact message sequences that the grid's
// on_keydown handler would dispatch for keyboard interactions.

///|
/// Helper: replay a sequence of Msgs and return the final Model.
fn replay(model : Model, msgs : Array[Msg]) -> Model {
  let mut m = model
  for msg in msgs {
    let (_, next) = m.update(noop_dispatch, msg)
    m = next
  }
  m
}

///|
test "replay: type '33' in J6 then Enter commits the value" {
  let m = empty_model()
  let result = replay(m, [
    SelectCell(9, 5),         // Click J6
    StartEditWith("3"),       // Type first "3" → starts editing
    UpdateEdit("33"),         // Type second "3" → appends
    CommitEdit,               // Press Enter
  ])
  assert_eq(result.editing, false)
  assert_eq(result.sheets[0].get("J6").raw, "33")
  assert_eq(result.sheets[0].get("J6").value, Num(33.0))
}

///|
test "replay: type '33' char by char via grid keydown simulation" {
  // Simulates: click J6, type "3", type "3", press Enter
  // Grid keydown dispatches StartEditWith for first char, UpdateEdit for rest
  let m = empty_model()
  let result = replay(m, [
    SelectCell(9, 5),
    StartEditWith("3"),                     // First char starts editing
    UpdateEdit("3" + "3"),                  // Second char appends (grid keydown: edit_value + key)
    CommitEdit,
  ])
  assert_eq(result.sheets[0].get("J6").raw, "33")
  assert_eq(result.sheets[0].get("J6").value, Num(33.0))
}

///|
test "replay: type 'hello' and verify each keystroke" {
  let m = { ..empty_model(), sel_col: 0, sel_row: 0 }
  let m1 = replay(m, [StartEditWith("h")])
  assert_eq(m1.editing, true)
  assert_eq(m1.edit_value, "h")

  let m2 = replay(m1, [UpdateEdit("he")])
  assert_eq(m2.edit_value, "he")

  let m3 = replay(m2, [UpdateEdit("hel")])
  assert_eq(m3.edit_value, "hel")

  let m4 = replay(m3, [UpdateEdit("hell")])
  assert_eq(m4.edit_value, "hell")

  let m5 = replay(m4, [UpdateEdit("hello")])
  assert_eq(m5.edit_value, "hello")

  let m6 = replay(m5, [CommitEdit])
  assert_eq(m6.editing, false)
  assert_eq(m6.sheets[0].get("A1").raw, "hello")
  assert_eq(m6.sheets[0].get("A1").value, Text("hello"))
}

///|
test "replay: backspace removes last character" {
  let m = empty_model()
  let result = replay(m, [
    StartEditWith("a"),
    UpdateEdit("ab"),
    UpdateEdit("abc"),
    UpdateEdit("ab"),  // Backspace → remove last char
    CommitEdit,
  ])
  assert_eq(result.sheets[0].get("A1").raw, "ab")
}

///|
test "replay: Escape cancels editing without committing" {
  let m = empty_model()
  let result = replay(m, [
    StartEditWith("x"),
    UpdateEdit("xyz"),
    CancelEdit,
  ])
  assert_eq(result.editing, false)
  assert_eq(result.edit_value, "")
  // Cell should still be empty
  assert_eq(result.sheets[0].get("A1").raw, "")
}

///|
test "replay: Tab commits and moves right (via MoveSelection)" {
  let m = empty_model()
  let result = replay(m, [
    StartEditWith("5"),
    MoveSelection(1, 0),  // Tab → MoveSelection commits pending edit
  ])
  assert_eq(result.editing, false)
  assert_eq(result.sel_col, 1)  // Moved to B1
  assert_eq(result.sheets[0].get("A1").raw, "5")
  assert_eq(result.sheets[0].get("A1").value, Num(5.0))
}

///|
test "replay: formula =SUM(A1:A3) evaluates correctly" {
  let m = empty_model()
  let result = replay(m, [
    // Enter data in A1, A2, A3
    SelectCell(0, 0), StartEditWith("10"), CommitEdit,
    SelectCell(0, 1), StartEditWith("20"), CommitEdit,
    SelectCell(0, 2), StartEditWith("30"), CommitEdit,
    // Enter formula in A4
    SelectCell(0, 3), StartEditWith("=SUM(A1:A3)"), CommitEdit,
  ])
  assert_eq(result.sheets[0].get("A4").raw, "=SUM(A1:A3)")
  assert_eq(result.sheets[0].get("A4").value, Num(60.0))
}

///|
test "replay: editing then clicking another cell commits first" {
  let m = empty_model()
  let result = replay(m, [
    StartEditWith("42"),
    SelectCell(2, 3),  // Click C4 → commits "42" to A1
  ])
  assert_eq(result.editing, false)
  assert_eq(result.sel_col, 2)
  assert_eq(result.sel_row, 3)
  assert_eq(result.sheets[0].get("A1").raw, "42")
}

///|
test "replay: multiple cells filled in sequence" {
  let m = empty_model()
  let result = replay(m, [
    // A1 = 10
    StartEditWith("10"), CommitEdit,
    // Move to B1, enter 20
    MoveSelection(1, 0), StartEditWith("20"), CommitEdit,
    // Move to C1, enter formula
    MoveSelection(1, 0), StartEditWith("=A1+B1"), CommitEdit,
  ])
  assert_eq(result.sheets[0].get("A1").value, Num(10.0))
  assert_eq(result.sheets[0].get("B1").value, Num(20.0))
  assert_eq(result.sheets[0].get("C1").value, Num(30.0))
}

///|
test "replay: StartEditWith while already editing appends" {
  // Safety net: if StartEditWith fires while editing, append don't replace
  let m = empty_model()
  let m1 = replay(m, [StartEditWith("a")])
  assert_eq(m1.editing, true)
  assert_eq(m1.edit_value, "a")

  let m2 = replay(m1, [StartEditWith("b")])
  assert_eq(m2.edit_value, "ab")  // Appended, not replaced
}

///|
test "replay: autocomplete appears when typing function prefix" {
  let m = empty_model()
  let result = replay(m, [
    StartEditWith("="),
    UpdateEdit("=SU"),
  ])
  assert_eq(result.editing, true)
  assert_eq(result.edit_value, "=SU")
  // Should have SUM in suggestions
  assert_true(result.autocomplete_suggestions.length() > 0)
  assert_true(result.autocomplete_suggestions.contains("SUM"))
}

///|
test "replay: autocomplete select inserts function name" {
  let m = empty_model()
  let result = replay(m, [
    StartEditWith("="),
    UpdateEdit("=SU"),
    AutocompleteSelect("SUM"),
  ])
  assert_eq(result.edit_value, "=SUM(")
  assert_eq(result.autocomplete_suggestions.length(), 0)
}

///|
test "replay: autocomplete clears on CommitEdit" {
  let m = empty_model()
  let result = replay(m, [
    StartEditWith("="),
    UpdateEdit("=SUM(A1)"),
    CommitEdit,
  ])
  assert_eq(result.autocomplete_suggestions.length(), 0)
  assert_eq(result.autocomplete_index, -1)
}

///|
test "replay: autocomplete clears on SelectCell" {
  let m = empty_model()
  let result = replay(m, [
    StartEditWith("="),
    UpdateEdit("=SU"),
    SelectCell(5, 5),
  ])
  assert_eq(result.autocomplete_suggestions.length(), 0)
}

///|
test "replay: full formula editing flow with autocomplete" {
  let m = empty_model()
  // Enter data first
  let m1 = replay(m, [
    SelectCell(0, 0), StartEditWith("100"), CommitEdit,
    SelectCell(0, 1), StartEditWith("200"), CommitEdit,
  ])
  // Now enter formula with autocomplete in A3
  let result = replay(m1, [
    SelectCell(0, 2),
    StartEditWith("="),
    UpdateEdit("=SU"),                // Shows autocomplete
    AutocompleteSelect("SUM"),        // Inserts "=SUM("
    UpdateEdit("=SUM(A1:A2)"),        // User types the range
    CommitEdit,
  ])
  assert_eq(result.sheets[0].get("A3").raw, "=SUM(A1:A2)")
  assert_eq(result.sheets[0].get("A3").value, Num(300.0))
}

///|
test "replay: edit, cancel, edit again preserves independence" {
  let m = empty_model()
  let result = replay(m, [
    StartEditWith("wrong"), CancelEdit,  // Cancel first attempt
    StartEditWith("right"), CommitEdit,   // Commit second attempt
  ])
  assert_eq(result.sheets[0].get("A1").raw, "right")
}

///|
test "replay: ClearCell removes value and formatting" {
  let m = empty_model()
  m.sheets[0].set_cell("A1", "42")
  let result = replay(m, [ClearCell])
  assert_eq(result.sheets[0].get("A1").raw, "")
  assert_eq(result.sheets[0].get("A1").value, Empty)
}

///|
test "replay: formatting preserved through edit cycle" {
  let m = empty_model()
  // Set bold, then edit value — bold should survive
  let result = replay(m, [
    StartEditWith("10"), CommitEdit,
    ToggleBold,
    StartEdit, UpdateEdit("20"), CommitEdit,
  ])
  assert_eq(result.sheets[0].get("A1").raw, "20")
  assert_eq(result.sheets[0].get("A1").bold, true)
}
