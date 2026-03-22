///|
test "normalize_formula: AVG( becomes AVERAGE(" {
  assert_eq(normalize_formula("AVG(A1:A5)"), "AVERAGE(A1:A5)")
}

///|
test "normalize_formula: NAVG( is unchanged" {
  assert_eq(normalize_formula("NAVG(A1)"), "NAVG(A1)")
}

///|
test "normalize_formula: AVG inside string literal is unchanged" {
  assert_eq(normalize_formula("\"AVG(\" & A1"), "\"AVG(\" & A1")
}

///|
test "split_colon: A1:B2 returns Some" {
  assert_eq(split_colon("A1:B2"), Some(("A1", "B2")))
}

///|
test "split_colon: A1 returns None" {
  assert_eq(split_colon("A1"), None)
}
