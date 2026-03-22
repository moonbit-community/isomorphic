///|
/// Tests for the Sheet package.

///|
test "Sheet::new creates empty sheet with given name" {
  let sheet = @sheet.Sheet::new("Test")
  assert_eq(sheet.name, "Test")
  assert_eq(sheet.cells.length(), 0)
}

///|
test "Sheet::get returns empty cell for missing key" {
  let sheet = @sheet.Sheet::new("Test")
  let cell = sheet.get("A1")
  assert_eq(cell.raw, "")
  assert_eq(cell.bold, false)
}

///|
test "Sheet::set_cell stores plain text" {
  let sheet = @sheet.Sheet::new("Test")
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
  let sheet = @sheet.Sheet::new("Test")
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
  let sheet = @sheet.Sheet::new("Test")
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
  let sheet = @sheet.Sheet::new("Test")
  sheet.set_cell_bold("A1", "Bold text")
  let cell = sheet.get("A1")
  assert_eq(cell.bold, true)
  assert_eq(cell.raw, "Bold text")
}

///|
test "Sheet::set_header sets bold and center align" {
  let sheet = @sheet.Sheet::new("Test")
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
  let sheet = @sheet.Sheet::new("Test")
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
  let sheet = @sheet.Sheet::new("Test")
  sheet.set_cell("B2", "42.5")
  assert_eq(sheet.get_num(1, 1), 42.5)
}

///|
test "Sheet::get_num returns 0.0 for text cells" {
  let sheet = @sheet.Sheet::new("Test")
  sheet.set_cell("A1", "hello")
  assert_eq(sheet.get_num(0, 0), 0.0)
}

///|
test "Sheet::get_num returns 0.0 for empty cells" {
  let sheet = @sheet.Sheet::new("Test")
  assert_eq(sheet.get_num(5, 5), 0.0)
}

///|
test "Sheet::recalc evaluates simple formulas" {
  let sheet = @sheet.Sheet::new("Test")
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
  let sheet = @sheet.Sheet::new("Test")
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
  let sheet = @sheet.Sheet::new("Test")
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
  let sheet = @sheet.Sheet::new("Test")
  // Set a cell with a formula that evaluates to Error
  sheet.cells["A1"] = {
    raw: "=UNKNOWNFUNC(1)",
    value: Empty,
    bold: false,
    italic: false,
    align: Auto,
    format: General,
    bg_color: "",
    text_color: "",
  }
  let recalced = sheet.recalc()
  match recalced.get("A1").value {
    Error(_) => () // Error is preserved when original value is Empty
    _ => fail("expected Error value for unknown formula")
  }
}

///|
test "Sheet::recalc returns new sheet with same name" {
  let sheet = @sheet.Sheet::new("My Sheet")
  sheet.set_cell("A1", "10")
  let recalced = sheet.recalc()
  assert_eq(recalced.name, "My Sheet")
}

///|
test "Sheet::set_styled sets all style properties" {
  let sheet = @sheet.Sheet::new("Test")
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
