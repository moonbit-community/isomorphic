///|
test "normalize_formula: AVG( becomes AVERAGE(" {
  assert_eq(@xlsx.normalize_formula("AVG(A1:A5)"), "AVERAGE(A1:A5)")
}

///|
test "normalize_formula: NAVG( is unchanged" {
  assert_eq(@xlsx.normalize_formula("NAVG(A1)"), "NAVG(A1)")
}

///|
test "normalize_formula: AVG inside string literal is unchanged" {
  assert_eq(
    @xlsx.normalize_formula("\"AVG(\" & A1"),
    "\"AVG(\" & A1",
  )
}

///|
test "load_sheets with empty bytes returns empty array" {
  let result = @xlsx.load_sheets(Bytes::new(0))
  assert_eq(result.length(), 0)
}

///|
test "load_sheets with invalid bytes returns empty array" {
  let result = @xlsx.load_sheets(b"\x00\x01\x02\x03")
  assert_eq(result.length(), 0)
}

///|
test "split_colon: A1:B2 returns Some" {
  let result = @xlsx.split_colon("A1:B2")
  assert_eq(result, Some(("A1", "B2")))
}

///|
test "split_colon: A1 returns None" {
  let result = @xlsx.split_colon("A1")
  assert_eq(result, None)
}
