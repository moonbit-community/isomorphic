///|
/// Tests for the Sheet package.

///|
test "Sheet::new creates empty sheet with given name" {
  let sheet = @sheet.Sheet("Test")
  assert_eq(sheet.name, "Test")
  assert_eq(sheet.cells.length(), 0)
}

///|
test "Sheet::get returns empty cell for missing key" {
  let sheet = @sheet.Sheet("Test")
  let cell = sheet.get("A1")
  assert_eq(cell.raw, "")
  assert_eq(cell.bold, false)
}

///|
test "Sheet::set_cell stores plain text" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_cell("A1", "Hello")
  let cell = sheet.get("A1")
  assert_eq(cell.raw, "Hello")
  match cell.value {
    Text(s) => assert_eq(s, "Hello")
    _ => fail("expected Text value")
  }
  assert_eq(cell.bold, false)
}

///|
test "Sheet::set_cell stores number" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_cell("B2", "42")
  let cell = sheet.get("B2")
  assert_eq(cell.raw, "42")
  match cell.value {
    Num(n) => assert_eq(n, 42.0)
    _ => fail("expected Num value")
  }
}

///|
test "Sheet::set_cell stores formula" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_cell("A1", "10")
  sheet.set_cell("A2", "20")
  sheet.set_cell("A3", "=SUM(A1:A2)")
  let cell = sheet.get("A3")
  assert_eq(cell.raw, "=SUM(A1:A2)")
  // Formula evaluates using current cell values
  match cell.value {
    Num(n) => assert_eq(n, 30.0)
    _ => fail("expected Num value from formula")
  }
}

///|
test "Sheet::set_cell_bold sets bold flag" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_cell_bold("A1", "Bold text")
  let cell = sheet.get("A1")
  assert_eq(cell.bold, true)
  assert_eq(cell.raw, "Bold text")
}

///|
test "Sheet::set_header sets bold and center align" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_header("A1", "Header", "#e3f2fd")
  let cell = sheet.get("A1")
  assert_eq(cell.bold, true)
  assert_eq(cell.bg_color, "#e3f2fd")
  match cell.align {
    Center => ()
    _ => fail("expected Center alignment")
  }
}

///|
test "Sheet::set_currency sets currency format" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_currency("A1", "1000")
  let cell = sheet.get("A1")
  match cell.format {
    Currency => ()
    _ => fail("expected Currency format")
  }
  assert_eq(cell.bold, false)
}

///|
test "Sheet::get_num returns number value" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_cell("B2", "42.5")
  assert_eq(sheet.get_num(1, 1), 42.5)
}

///|
test "Sheet::get_num returns 0.0 for text cells" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_cell("A1", "hello")
  assert_eq(sheet.get_num(0, 0), 0.0)
}

///|
test "Sheet::get_num returns 0.0 for empty cells" {
  let sheet = @sheet.Sheet("Test")
  assert_eq(sheet.get_num(5, 5), 0.0)
}

///|
test "Sheet::recalc evaluates simple formulas" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_cell("A1", "10")
  sheet.set_cell("A2", "20")
  sheet.set_cell("A3", "=SUM(A1:A2)")
  let recalced = sheet.recalc()
  match recalced.get("A3").value {
    Num(n) => assert_eq(n, 30.0)
    _ => fail("expected Num value after recalc")
  }
}

///|
test "Sheet::recalc handles dependency chains" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_cell("A1", "5")
  sheet.set_cell("A2", "=A1")
  sheet.set_cell("A3", "=A2")
  let recalced = sheet.recalc()
  match recalced.get("A3").value {
    Num(n) => assert_eq(n, 5.0)
    _ => fail("expected Num value through dependency chain")
  }
}

///|
test "Sheet::recalc preserves non-formula cells" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_cell("A1", "Hello")
  sheet.set_cell("B1", "42")
  let recalced = sheet.recalc()
  match recalced.get("A1").value {
    Text(s) => assert_eq(s, "Hello")
    _ => fail("expected Text value preserved")
  }
  match recalced.get("B1").value {
    Num(n) => assert_eq(n, 42.0)
    _ => fail("expected Num value preserved")
  }
}

///|
test "Sheet::recalc preserves error for unknown formulas with empty value" {
  let sheet = @sheet.Sheet("Test")
  sheet.cells["A1"] = Cell(raw="=UNKNOWNFUNC(1)")
  let recalced = sheet.recalc()
  match recalced.get("A1").value {
    Error(_) => () // Error is preserved when original value is Empty
    _ => fail("expected Error value for unknown formula")
  }
}

///|
test "Sheet::recalc returns new sheet with same name" {
  let sheet = @sheet.Sheet("My Sheet")
  sheet.set_cell("A1", "10")
  let recalced = sheet.recalc()
  assert_eq(recalced.name, "My Sheet")
}

///|
test "Sheet::set_styled sets all style properties" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_styled("A1", "value", true, Right, Percent, "#fff", "#000")
  let cell = sheet.get("A1")
  assert_eq(cell.bold, true)
  assert_eq(cell.bg_color, "#fff")
  assert_eq(cell.text_color, "#000")
  match cell.align {
    Right => ()
    _ => fail("expected Right alignment")
  }
  match cell.format {
    Percent => ()
    _ => fail("expected Percent format")
  }
}

// --- Helper to set a formula cell without evaluating ---

///|
fn set_formula(sheet : @sheet.Sheet, key : String, raw : String) -> Unit {
  sheet.cells[key] = Cell(raw~)
}

// --- Recalc: deep chains ---

///|
test "recalc: 6-level dependency chain propagates correctly" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_cell("A1", "1")
  set_formula(sheet, "A2", "=A1")
  set_formula(sheet, "A3", "=A2")
  set_formula(sheet, "A4", "=A3")
  set_formula(sheet, "A5", "=A4")
  set_formula(sheet, "A6", "=A5")
  set_formula(sheet, "A7", "=A6")
  let r = sheet.recalc()
  // Every cell in the chain should see 1.0
  for key in ["A2", "A3", "A4", "A5", "A6", "A7"] {
    match r.get(key).value {
      Num(n) => assert_eq(n, 1.0)
      _ => fail("expected Num(1.0) at \{key}")
    }
  }
}

///|
test "recalc: deep chain with arithmetic (A1=2, A2=A1*3, ..., A5=A4+A1)" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_cell("A1", "2")
  set_formula(sheet, "A2", "=A1*3")
  set_formula(sheet, "A3", "=A2+1")
  set_formula(sheet, "A4", "=A3*2")
  set_formula(sheet, "A5", "=A4+A1")
  let r = sheet.recalc()
  // A1=2, A2=6, A3=7, A4=14, A5=16
  let expected = [("A2", 6.0), ("A3", 7.0), ("A4", 14.0), ("A5", 16.0)]
  for pair in expected {
    let (key, exp) = pair
    match r.get(key).value {
      Num(n) => assert_eq(n, exp)
      _ => fail("expected Num(\{exp}) at \{key}")
    }
  }
}

// --- Recalc: circular references ---

///|
test "recalc: two-cell circular reference (A1=B1, B1=A1)" {
  let sheet = @sheet.Sheet("Test")
  set_formula(sheet, "A1", "=B1")
  set_formula(sheet, "B1", "=A1")
  let r = sheet.recalc()
  match r.get("A1").value {
    Error(msg) => assert_eq(msg, "CIRCULAR")
    _ => fail("A1: expected CIRCULAR")
  }
  match r.get("B1").value {
    Error(msg) => assert_eq(msg, "CIRCULAR")
    _ => fail("B1: expected CIRCULAR")
  }
}

///|
test "recalc: self-referencing cell (A1=A1)" {
  let sheet = @sheet.Sheet("Test")
  set_formula(sheet, "A1", "=A1")
  let r = sheet.recalc()
  match r.get("A1").value {
    Error(msg) => assert_eq(msg, "CIRCULAR")
    _ => fail("A1: expected CIRCULAR")
  }
}

///|
test "recalc: 3-way circular reference (A1=B1, B1=C1, C1=A1)" {
  let sheet = @sheet.Sheet("Test")
  set_formula(sheet, "A1", "=B1")
  set_formula(sheet, "B1", "=C1")
  set_formula(sheet, "C1", "=A1")
  let r = sheet.recalc()
  for key in ["A1", "B1", "C1"] {
    match r.get(key).value {
      Error(msg) => assert_eq(msg, "CIRCULAR")
      _ => fail("\{key}: expected CIRCULAR")
    }
  }
}

///|
test "recalc: circular cells coexist with valid cells" {
  let sheet = @sheet.Sheet("Test")
  // Valid: A1=10, B1=A1+5
  // Circular: C1=D1, D1=C1
  sheet.set_cell("A1", "10")
  set_formula(sheet, "B1", "=A1+5")
  set_formula(sheet, "C1", "=D1")
  set_formula(sheet, "D1", "=C1")
  let r = sheet.recalc()
  match r.get("B1").value {
    Num(n) => assert_eq(n, 15.0)
    _ => fail("B1: expected 15.0")
  }
  match r.get("C1").value {
    Error(msg) => assert_eq(msg, "CIRCULAR")
    _ => fail("C1: expected CIRCULAR")
  }
  match r.get("D1").value {
    Error(msg) => assert_eq(msg, "CIRCULAR")
    _ => fail("D1: expected CIRCULAR")
  }
}

// --- Recalc: diamond dependency ---

///|
test "recalc: diamond dependency (D depends on B and C, both depend on A)" {
  let sheet = @sheet.Sheet("Test")
  // A1=10, B1=A1*2, C1=A1+3, D1=B1+C1
  sheet.set_cell("A1", "10")
  set_formula(sheet, "B1", "=A1*2")
  set_formula(sheet, "C1", "=A1+3")
  set_formula(sheet, "D1", "=B1+C1")
  let r = sheet.recalc()
  // B1=20, C1=13, D1=33
  match r.get("B1").value {
    Num(n) => assert_eq(n, 20.0)
    _ => fail("B1: expected 20.0")
  }
  match r.get("C1").value {
    Num(n) => assert_eq(n, 13.0)
    _ => fail("C1: expected 13.0")
  }
  match r.get("D1").value {
    Num(n) => assert_eq(n, 33.0)
    _ => fail("D1: expected 33.0")
  }
}

// --- Recalc: edge cases ---

///|
test "recalc: formula referencing non-existent cell treats it as Empty" {
  let sheet = @sheet.Sheet("Test")
  set_formula(sheet, "A1", "=Z9+1")
  let r = sheet.recalc()
  // Z9 doesn't exist, treated as 0 by the formula engine, so A1 = 0+1 = 1
  match r.get("A1").value {
    Num(n) => assert_eq(n, 1.0)
    _ => fail("A1: expected 1.0")
  }
}

///|
test "recalc: preserves styling through evaluation" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_cell("A1", "10")
  // B1 is a bold, centered currency formula
  sheet.cells["B1"] = Cell(raw="=A1*2", bold=true, align=Center, format=Currency)
  let r = sheet.recalc()
  let cell = r.get("B1")
  match cell.value {
    Num(n) => assert_eq(n, 20.0)
    _ => fail("B1: expected 20.0")
  }
  assert_eq(cell.bold, true)
  assert_eq(cell.format is Currency, true)
  assert_eq(cell.align is Center, true)
}

///|
test "recalc: multiple independent subgraphs" {
  let sheet = @sheet.Sheet("Test")
  // Subgraph 1: A1=5, A2=A1+1
  sheet.set_cell("A1", "5")
  set_formula(sheet, "A2", "=A1+1")
  // Subgraph 2: B1=100, B2=B1*2
  sheet.set_cell("B1", "100")
  set_formula(sheet, "B2", "=B1*2")
  let r = sheet.recalc()
  match r.get("A2").value {
    Num(n) => assert_eq(n, 6.0)
    _ => fail("A2: expected 6.0")
  }
  match r.get("B2").value {
    Num(n) => assert_eq(n, 200.0)
    _ => fail("B2: expected 200.0")
  }
}

///|
test "recalc: idempotent (recalc twice gives same result)" {
  let sheet = @sheet.Sheet("Test")
  sheet.set_cell("A1", "7")
  set_formula(sheet, "A2", "=A1*3")
  set_formula(sheet, "A3", "=A2+A1")
  let r1 = sheet.recalc()
  let r2 = r1.recalc()
  // A2=21, A3=28
  match r2.get("A2").value {
    Num(n) => assert_eq(n, 21.0)
    _ => fail("A2: expected 21.0 after double recalc")
  }
  match r2.get("A3").value {
    Num(n) => assert_eq(n, 28.0)
    _ => fail("A3: expected 28.0 after double recalc")
  }
}

///|
test "recalc: cell downstream of cycle is not mislabeled CIRCULAR" {
  let sheet = @sheet.Sheet("Test")
  // A1 and B1 are circular, C1 depends on A1 but is NOT in the cycle
  set_formula(sheet, "A1", "=B1")
  set_formula(sheet, "B1", "=A1")
  set_formula(sheet, "C1", "=A1+1")
  let r = sheet.recalc()
  // A1, B1 are CIRCULAR
  match r.get("A1").value {
    Error(msg) => assert_eq(msg, "CIRCULAR")
    _ => fail("A1: expected CIRCULAR")
  }
  match r.get("B1").value {
    Error(msg) => assert_eq(msg, "CIRCULAR")
    _ => fail("B1: expected CIRCULAR")
  }
  // C1 should NOT be CIRCULAR — it evaluates with A1's error
  // Since A1 is Error("CIRCULAR"), C1 = Error("CIRCULAR") + 1 which is an Error
  // But it should be an evaluation error, not mislabeled as a cycle member
  match r.get("C1").value {
    Error("CIRCULAR") => fail("C1 should not be marked CIRCULAR — it's downstream, not in the cycle")
    Error(_) => () // Some error from trying to add CIRCULAR + 1, that's fine
    Num(_) => () // If the engine somehow produces a number, also acceptable
    _ => ()
  }
}

///|
test "recalc: chained downstream of cycle evaluates in correct order" {
  let sheet = @sheet.Sheet("Test")
  // A1 <-> B1 are circular
  // C1=A1+1 depends on circular A1
  // D1=C1+1 depends on C1 (downstream of downstream)
  set_formula(sheet, "A1", "=B1")
  set_formula(sheet, "B1", "=A1")
  set_formula(sheet, "C1", "=A1+1")
  set_formula(sheet, "D1", "=C1+1")
  let r = sheet.recalc()
  // A1, B1 are CIRCULAR
  match r.get("A1").value {
    Error(msg) => assert_eq(msg, "CIRCULAR")
    _ => fail("A1: expected CIRCULAR")
  }
  // C1 tries A1+1 where A1=Error("CIRCULAR"), so C1 gets an error too
  // But it should NOT be labeled "CIRCULAR" itself
  match r.get("C1").value {
    Error("CIRCULAR") =>
      fail("C1 should not be CIRCULAR — it's downstream, not in cycle")
    _ => () // any non-CIRCULAR result is acceptable
  }
  // D1 depends on C1, must evaluate AFTER C1 regardless of iteration order
  match r.get("D1").value {
    Error("CIRCULAR") =>
      fail("D1 should not be CIRCULAR — it's downstream, not in cycle")
    _ => () // any non-CIRCULAR result is acceptable
  }
}

///|
test "recalc: empty sheet returns empty sheet" {
  let sheet = @sheet.Sheet("Empty")
  let r = sheet.recalc()
  assert_eq(r.name, "Empty")
  assert_eq(r.cells.length(), 0)
}

///|
test "recalc: SUM over range with dependency chain" {
  let sheet = @sheet.Sheet("Test")
  // A1=1, A2=2, A3=3, B1=SUM(A1:A3), C1=B1*10
  sheet.set_cell("A1", "1")
  sheet.set_cell("A2", "2")
  sheet.set_cell("A3", "3")
  set_formula(sheet, "B1", "=SUM(A1:A3)")
  set_formula(sheet, "C1", "=B1*10")
  let r = sheet.recalc()
  match r.get("B1").value {
    Num(n) => assert_eq(n, 6.0)
    _ => fail("B1: expected 6.0")
  }
  match r.get("C1").value {
    Num(n) => assert_eq(n, 60.0)
    _ => fail("C1: expected 60.0")
  }
}

///|
test "recalc: preserves cached xlsx value when formula engine fails" {
  let sheet = @sheet.Sheet("Test")
  // Simulate an imported cell with a cached value but unsupported formula
  sheet.cells["A1"] = Cell(raw="=XLOOKUP(1,2,3)", value=Num(42.0))
  let r = sheet.recalc()
  // Formula engine can't evaluate XLOOKUP, but the cached 42.0 is preserved
  match r.get("A1").value {
    Num(n) => assert_eq(n, 42.0)
    _ => fail("A1: expected preserved Num(42.0)")
  }
}

///|
test "recalc: error propagated when original value is Empty" {
  let sheet = @sheet.Sheet("Test")
  sheet.cells["A1"] = Cell(raw="=UNKNOWNFUNC(1)")
  let r = sheet.recalc()
  match r.get("A1").value {
    Error(_) => () // Error preserved since original was Empty
    _ => fail("A1: expected Error")
  }
}
