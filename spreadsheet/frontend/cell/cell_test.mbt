// ── Value::to_display ────────────────────────────────────────────────

///|
test "to_display: empty" {
  inspect(@cell.Empty.to_display(), content="")
}

///|
test "to_display: integer" {
  inspect(@cell.Num(42.0).to_display(), content="42")
}

///|
test "to_display: float" {
  inspect(@cell.Num(3.14).to_display(), content="3.14")
}

///|
test "to_display: text" {
  inspect(@cell.Text("hello").to_display(), content="hello")
}

///|
test "to_display: error" {
  inspect(@cell.Error("DIV/0").to_display(), content="#ERR: DIV/0")
}

// ── Value::format_with ───────────────────────────────────────────────

///|
test "format_with General: integer with commas" {
  inspect(@cell.Num(1234567.0).format_with(General), content="1,234,567")
}

///|
test "format_with General: small integer no commas" {
  inspect(@cell.Num(42.0).format_with(General), content="42")
}

///|
test "format_with General: decimal" {
  inspect(@cell.Num(3.14).format_with(General), content="3.14")
}

///|
test "format_with Currency: positive" {
  inspect(@cell.Num(1234.56).format_with(Currency), content="$1,234.56")
}

///|
test "format_with Currency: negative" {
  inspect(@cell.Num(-99.5).format_with(Currency), content="-$99.50")
}

///|
test "format_with Currency: zero" {
  inspect(@cell.Num(0.0).format_with(Currency), content="$0.00")
}

///|
test "format_with Percent: whole" {
  inspect(@cell.Num(0.5).format_with(Percent), content="50%")
}

///|
test "format_with Percent: fractional" {
  inspect(@cell.Num(0.123).format_with(Percent), content="12.3%")
}

///|
test "format_with Fixed: positive" {
  inspect(@cell.Num(42.0).format_with(Fixed), content="42.00")
}

///|
test "format_with Fixed: with decimals" {
  inspect(@cell.Num(3.14159).format_with(Fixed), content="3.14")
}

///|
test "format_with: empty/text/error pass through" {
  inspect(@cell.Empty.format_with(Currency), content="")
  inspect(@cell.Text("hi").format_with(Currency), content="hi")
  inspect(@cell.Error("TYPE").format_with(Currency), content="#ERR: TYPE")
}

// ── Cell::empty ──────────────────────────────────────────────────────

///|
test "Cell::empty defaults" {
  let c = @cell.Cell::empty()
  inspect(c.raw, content="")
  inspect(c.value.to_display(), content="")
  inspect(c.bold, content="false")
  inspect(c.italic, content="false")
  inspect(c.bg_color, content="")
}

// ── col_to_letter / parse_ref / make_key ─────────────────────────────

///|
test "col_to_letter: A and Z" {
  inspect(@cell.col_to_letter(0), content="A")
  inspect(@cell.col_to_letter(25), content="Z")
}

///|
test "parse_ref: valid" {
  inspect(@cell.parse_ref("A1"), content="Some((0, 0))")
  inspect(@cell.parse_ref("C10"), content="Some((2, 9))")
  inspect(@cell.parse_ref("Z1"), content="Some((25, 0))")
}

///|
test "parse_ref: invalid" {
  inspect(@cell.parse_ref(""), content="None")
  inspect(@cell.parse_ref("a1"), content="None")
  inspect(@cell.parse_ref("A"), content="None")
  inspect(@cell.parse_ref("A0"), content="None")
}

///|
test "make_key round-trips with parse_ref" {
  inspect(@cell.make_key(0, 0), content="A1")
  inspect(@cell.make_key(2, 9), content="C10")
  // Round-trip
  inspect(@cell.parse_ref(@cell.make_key(5, 14)), content="Some((5, 14))")
}
