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
