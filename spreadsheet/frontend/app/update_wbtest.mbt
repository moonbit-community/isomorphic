// Whitebox tests for package-private helper functions and view-relevant state.
// These test the exact state the view layer reads to decide what to render.

// ── extract_partial: the core of autocomplete matching ──────────────

///|
test "extract_partial: simple function prefix" {
  assert_eq(extract_partial("=SU"), "SU")
}

///|
test "extract_partial: after operator" {
  assert_eq(extract_partial("=A1+SU"), "SU")
}

///|
test "extract_partial: after open paren" {
  assert_eq(extract_partial("=IF(SU"), "SU")
}

///|
test "extract_partial: after comma" {
  assert_eq(extract_partial("=IF(A1,SU"), "SU")
}

///|
test "extract_partial: complete function name (no trailing partial)" {
  assert_eq(extract_partial("=SUM("), "")
}

///|
test "extract_partial: just equals sign" {
  assert_eq(extract_partial("="), "")
}

///|
test "extract_partial: not a formula" {
  assert_eq(extract_partial("hello"), "")
}

///|
test "extract_partial: empty string" {
  assert_eq(extract_partial(""), "")
}

///|
test "extract_partial: cell ref is not a function prefix (has digits)" {
  assert_eq(extract_partial("=A1"), "")
}

///|
test "extract_partial: mixed case ignored (lowercase not matched)" {
  assert_eq(extract_partial("=sum"), "")
}

///|
test "extract_partial: nested function" {
  assert_eq(extract_partial("=IF(A1>5,SU"), "SU")
}

///|
test "extract_partial: after closing paren" {
  assert_eq(extract_partial("=SUM(A1)+AV"), "AV")
}

// ── compute_autocomplete ────────────────────────────────────────────

///|
test "compute_autocomplete: SU matches SUM" {
  let result = compute_autocomplete("=SU")
  assert_true(result.contains("SUM"))
}

///|
test "compute_autocomplete: AV matches AVG and AVERAGE" {
  let result = compute_autocomplete("=AV")
  assert_true(result.contains("AVG"))
  assert_true(result.contains("AVERAGE"))
}

///|
test "compute_autocomplete: exact match excluded" {
  // If user typed the full name, don't suggest it
  let result = compute_autocomplete("=SUM")
  assert_true(!result.contains("SUM"))
}

///|
test "compute_autocomplete: no match" {
  let result = compute_autocomplete("=XY")
  assert_eq(result.length(), 0)
}

///|
test "compute_autocomplete: non-formula returns empty" {
  let result = compute_autocomplete("hello")
  assert_eq(result.length(), 0)
}

///|
test "compute_autocomplete: M matches MIN, MAX, MOD, MID" {
  let result = compute_autocomplete("=M")
  assert_true(result.contains("MIN"))
  assert_true(result.contains("MAX"))
  assert_true(result.contains("MOD"))
}

///|
test "compute_autocomplete: after operator" {
  let result = compute_autocomplete("=A1+SU")
  assert_true(result.contains("SUM"))
}

///|
test "compute_autocomplete: inside IF" {
  let result = compute_autocomplete("=IF(A1>5,SU")
  assert_true(result.contains("SUM"))
}

// ── insert_autocomplete ─────────────────────────────────────────────

///|
test "insert_autocomplete: replaces partial with function(" {
  assert_eq(insert_autocomplete("=SU", "SUM"), "=SUM(")
}

///|
test "insert_autocomplete: after operator" {
  assert_eq(insert_autocomplete("=A1+SU", "SUM"), "=A1+SUM(")
}

///|
test "insert_autocomplete: nested context" {
  assert_eq(insert_autocomplete("=IF(A1,AV", "AVG"), "=IF(A1,AVG(")
}

///|
test "insert_autocomplete: empty partial appends" {
  assert_eq(insert_autocomplete("=", "SUM"), "=SUM(")
}

// ── View-relevant model state assertions ────────────────────────────
// These verify the exact model fields the view reads for rendering decisions.

///|
/// Helper: replay messages and return final Model.
fn replay(model : Model, msgs : Array[Msg]) -> Model {
  fn noop(_msg : Msg) -> @rabbita.Cmd { @rabbita.none }
  let mut m = model
  for msg in msgs {
    let (_, next) = m.update(noop, msg)
    m = next
  }
  m
}

///|
/// Helper: minimal empty model.
fn test_model() -> Model {
  {
    sheets: [@sheet.Sheet("S1"), @sheet.Sheet("S2")],
    active_sheet: 0,
    sel_col: 0,
    sel_row: 0,
    editing: false,
    edit_value: "",
    show_chart: false,
    heat_map: false,
    autocomplete_suggestions: [],
    autocomplete_index: -1,
  }
}

// ── State: editing indicator (controls inline editor visibility) ─────

///|
test "view state: editing=false hides inline editor" {
  let m = test_model()
  assert_eq(m.editing, false)
  // View should show display cell, not input
}

///|
test "view state: StartEditWith sets editing=true" {
  let m = replay(test_model(), [StartEditWith("x")])
  assert_eq(m.editing, true)
  assert_eq(m.edit_value, "x")
  // View should show inline editor with "x"
}

///|
test "view state: StartEdit loads existing cell raw" {
  let m = test_model()
  m.sheets[0].set_cell("A1", "existing")
  let result = replay(m, [StartEdit])
  assert_eq(result.editing, true)
  assert_eq(result.edit_value, "existing")
}

///|
test "view state: CommitEdit resets editing state" {
  let m = replay(test_model(), [StartEditWith("5"), CommitEdit])
  assert_eq(m.editing, false)
  assert_eq(m.edit_value, "")
}

// ── State: formula bar display value ────────────────────────────────

///|
test "view state: formula bar shows edit_value when editing" {
  let m = replay(test_model(), [StartEditWith("=SUM(")])
  // View formula bar: if editing, display = edit_value
  assert_eq(m.editing, true)
  assert_eq(m.edit_value, "=SUM(")
}

///|
test "view state: formula bar shows cell raw when not editing" {
  let m = test_model()
  m.sheets[0].set_cell("A1", "=A2+1")
  // View formula bar: if !editing, display = selected_cell().raw
  assert_eq(m.editing, false)
  assert_eq(m.selected_cell().raw, "=A2+1")
}

// ── State: autocomplete dropdown visibility ─────────────────────────

///|
test "view state: dropdown hidden when no suggestions" {
  let m = replay(test_model(), [StartEditWith("5")])
  assert_eq(m.autocomplete_suggestions.length(), 0)
  // View: dropdown should not be rendered
}

///|
test "view state: dropdown visible when suggestions exist" {
  let m = replay(test_model(), [StartEditWith("="), UpdateEdit("=SU")])
  assert_true(m.autocomplete_suggestions.length() > 0)
  // View: dropdown should be rendered with suggestions
}

///|
test "view state: dropdown item highlighted by autocomplete_index" {
  let m = replay(test_model(), [
    StartEditWith("="),
    UpdateEdit("=SU"),
    AutocompleteNav(1),  // Move to first suggestion
  ])
  assert_eq(m.autocomplete_index, 0)
  // View: first dropdown item should have blue background
}

///|
test "view state: dropdown hidden after AutocompleteSelect" {
  let m = replay(test_model(), [
    StartEditWith("="),
    UpdateEdit("=SU"),
    AutocompleteSelect("SUM"),
  ])
  assert_eq(m.autocomplete_suggestions.length(), 0)
  assert_eq(m.autocomplete_index, -1)
  assert_eq(m.edit_value, "=SUM(")
}

// ── State: cell selection and highlighting ───────────────────────────

///|
test "view state: selected cell position determines blue border" {
  let m = replay(test_model(), [SelectCell(3, 7)])
  assert_eq(m.sel_col, 3)
  assert_eq(m.sel_row, 7)
  // View: cell D8 should have "2px solid #1a73e8" border
}

///|
test "view state: formula refs available for colored highlighting" {
  let m = test_model()
  m.sheets[0].set_cell("A1", "10")
  m.sheets[0].set_cell("B1", "20")
  m.sheets[0].set_cell("C1", "=A1+B1")
  let m2 = replay(m, [SelectCell(2, 0)])  // Select C1
  // View reads: selected_cell().raw = "=A1+B1"
  // extract_reference_groups("=A1+B1") returns refs with group indices
  // View should highlight A1 and B1 with distinct colors
  let refs = @formula.extract_reference_groups(m2.selected_cell().raw)
  assert_true(refs.length() >= 2)
  // A1 and B1 should have different group indices
  let a1_group = refs.iter().find_first(fn(pair) { pair.0 == "A1" })
  let b1_group = refs.iter().find_first(fn(pair) { pair.0 == "B1" })
  assert_true(a1_group is Some(_))
  assert_true(b1_group is Some(_))
}

///|
test "view state: editing formula shows live ref highlighting" {
  let m = test_model()
  m.sheets[0].set_cell("A1", "10")
  let m2 = replay(m, [StartEditWith("="), UpdateEdit("=A1+1")])
  // View reads edit_value for highlighting when editing
  let refs = @formula.extract_reference_groups(m2.edit_value)
  let has_a1 = refs.iter().find_first(fn(pair) { pair.0 == "A1" })
  assert_true(has_a1 is Some(_))
}

// ── State: live formula preview ─────────────────────────────────────

///|
test "view state: formula preview evaluates during editing" {
  let m = test_model()
  m.sheets[0].set_cell("A1", "10")
  m.sheets[0].set_cell("A2", "20")
  let m2 = replay(m, [
    SelectCell(0, 2),  // Select A3
    StartEditWith("="),
    UpdateEdit("=SUM(A1:A2)"),
  ])
  // View computes preview: evaluate(edit_value, sheet lookup)
  let sheet = m2.current_sheet()
  let preview = @formula.evaluate(m2.edit_value, fn(r) { sheet.get(r).value })
  assert_eq(preview, Num(30.0))
}

///|
test "view state: incomplete formula has no preview" {
  let m = replay(test_model(), [StartEditWith("="), UpdateEdit("=SUM(")])
  let sheet = m.current_sheet()
  let preview = @formula.evaluate(m.edit_value, fn(r) { sheet.get(r).value })
  // Incomplete formula → Error, view should NOT show preview
  assert_true(preview is Error(_))
}

///|
test "view state: non-formula has no preview" {
  let m = replay(test_model(), [StartEditWith("hello")])
  // View only shows preview when edit_value starts with "="
  assert_true(m.edit_value[0] != '=')
}

// ── State: sheet tabs ───────────────────────────────────────────────

///|
test "view state: active_sheet determines which tab is highlighted" {
  let m = replay(test_model(), [SelectSheet(1)])
  assert_eq(m.active_sheet, 1)
  // View: Sheet tab 1 should have blue bottom border, tab 0 should not
}

///|
test "view state: AddSheet increases tab count" {
  let m = replay(test_model(), [AddSheet])
  assert_eq(m.sheets.length(), 3)
  assert_eq(m.sheets[2].name, "Sheet 3")
  // View: should render 3 tab buttons
}

// ── State: toggle flags ─────────────────────────────────────────────

///|
test "view state: show_chart controls chart panel visibility" {
  let m = replay(test_model(), [ToggleChart])
  assert_eq(m.show_chart, true)
  // View: chart panel should be rendered
  let m2 = replay(m, [ToggleChart])
  assert_eq(m2.show_chart, false)
  // View: chart panel should be hidden
}

///|
test "view state: heat_map controls heat overlay" {
  let m = replay(test_model(), [ToggleHeatMap])
  assert_eq(m.heat_map, true)
  // View: cells should have heat color overlays
}
