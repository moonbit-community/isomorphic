// ── Helpers ──────────────────────────────────────────────────────────

///|
/// A lookup function that resolves cell references for testing.
/// Cells: A1=10, A2=20, A3=30, B1=5, B2=0, C1="hello"
fn test_lookup(key : String) -> @cell.Value {
  match key {
    "A1" => Num(10.0)
    "A2" => Num(20.0)
    "A3" => Num(30.0)
    "B1" => Num(5.0)
    "B2" => Num(0.0)
    "C1" => Text("hello")
    "C2" => Text("world")
    _ => Empty
  }
}

///|
fn eval(raw : String) -> String {
  @formula.evaluate(raw, test_lookup).to_display()
}

// ── Non-formula input ────────────────────────────────────────────────

///|
test "plain text passes through" {
  inspect(eval("hello"), content="hello")
}

///|
test "plain number becomes Num" {
  inspect(eval("42"), content="42")
}

///|
test "empty string becomes empty" {
  inspect(eval(""), content="")
}

// ── Basic arithmetic ─────────────────────────────────────────────────

///|
test "addition" {
  inspect(eval("=1+2"), content="3")
}

///|
test "subtraction" {
  inspect(eval("=10-3"), content="7")
}

///|
test "multiplication" {
  inspect(eval("=4*5"), content="20")
}

///|
test "division" {
  inspect(eval("=20/4"), content="5")
}

///|
test "division by zero" {
  inspect(eval("=1/0"), content="#ERR: DIV/0")
}

///|
test "operator precedence: * before +" {
  inspect(eval("=2+3*4"), content="14")
}

///|
test "parentheses override precedence" {
  inspect(eval("=(2+3)*4"), content="20")
}

///|
test "negative number" {
  inspect(eval("=-5"), content="-5")
}

// ── Cell references ──────────────────────────────────────────────────

///|
test "single cell reference" {
  inspect(eval("=A1"), content="10")
}

///|
test "cell arithmetic" {
  inspect(eval("=A1+A2"), content="30")
}

///|
test "empty cell reference is 0 in arithmetic" {
  inspect(eval("=D1+1"), content="1")
}

// ── Comparison operators ─────────────────────────────────────────────

///|
test "greater than: true" {
  inspect(eval("=A1>B1"), content="1")
}

///|
test "greater than: false" {
  inspect(eval("=B1>A1"), content="0")
}

///|
test "less than or equal" {
  inspect(eval("=5<=5"), content="1")
}

///|
test "equality" {
  inspect(eval("=10=10"), content="1")
}

// ── Aggregation functions ────────────────────────────────────────────

///|
test "SUM range" {
  inspect(eval("=SUM(A1:A3)"), content="60")
}

///|
test "SUM individual args" {
  inspect(eval("=SUM(A1,A2,A3)"), content="60")
}

///|
test "AVERAGE range" {
  inspect(eval("=AVERAGE(A1:A3)"), content="20")
}

///|
test "AVG alias" {
  inspect(eval("=AVG(A1:A3)"), content="20")
}

///|
test "MIN" {
  inspect(eval("=MIN(A1:A3)"), content="10")
}

///|
test "MAX" {
  inspect(eval("=MAX(A1:A3)"), content="30")
}

///|
test "COUNT range" {
  inspect(eval("=COUNT(A1:A3)"), content="3")
}

///|
test "COUNT includes all args" {
  inspect(eval("=COUNT(A1,D1,A2)"), content="3")
}

// ── Math functions ───────────────────────────────────────────────────

///|
test "ABS positive" {
  inspect(eval("=ABS(5)"), content="5")
}

///|
test "ABS negative" {
  inspect(eval("=ABS(-7)"), content="7")
}

///|
test "ROUND" {
  inspect(eval("=ROUND(3.456,2)"), content="3.46")
}

///|
test "ROUND to integer" {
  inspect(eval("=ROUND(3.7,0)"), content="4")
}

///|
test "POWER" {
  inspect(eval("=POWER(2,10)"), content="1024")
}

///|
test "MOD" {
  inspect(eval("=MOD(10,3)"), content="1")
}

///|
test "INT truncates" {
  inspect(eval("=INT(3.9)"), content="3")
}

// ── Logic function ───────────────────────────────────────────────────

///|
test "IF true branch" {
  inspect(eval("=IF(1,A1,A2)"), content="10")
}

///|
test "IF false branch" {
  inspect(eval("=IF(0,A1,A2)"), content="20")
}

///|
test "IF with comparison" {
  inspect(eval("=IF(A1>A2,A1,A2)"), content="20")
}

// ── String functions ─────────────────────────────────────────────────

///|
test "CONCAT" {
  inspect(eval("=CONCAT(C1,C2)"), content="helloworld")
}

///|
test "LEN" {
  inspect(eval("=LEN(C1)"), content="5")
}

///|
test "UPPER" {
  inspect(eval("=UPPER(C1)"), content="HELLO")
}

///|
test "LOWER" {
  inspect(eval("=LOWER(\"ABC\")"), content="abc")
}

// ── String literals in formulas ──────────────────────────────────────

///|
test "string literal" {
  inspect(eval("=\"hello\""), content="hello")
}

///|
test "CONCAT with literal" {
  inspect(eval("=CONCAT(C1,\" \",C2)"), content="hello world")
}

// ── Nested expressions ───────────────────────────────────────────────

///|
test "nested SUM in arithmetic" {
  inspect(eval("=SUM(A1:A3)*2"), content="120")
}

///|
test "IF with nested arithmetic" {
  inspect(eval("=IF(A1+A2>25,1,0)"), content="1")
}

// ── extract_references ───────────────────────────────────────────────

///|
test "extract_references: single cell" {
  inspect(@formula.extract_references("=A1+1"), content="[\"A1\"]")
}

///|
test "extract_references: range expands" {
  let refs = @formula.extract_references("=SUM(A1:A3)")
  inspect(refs.length(), content="3")
  inspect(
    refs.contains("A1") && refs.contains("A2") && refs.contains("A3"),
    content="true",
  )
}

///|
test "extract_references: non-formula" {
  inspect(@formula.extract_references("hello"), content="[]")
}

///|
test "extract_references: mixed" {
  let refs = @formula.extract_references("=A1+B1")
  inspect(refs.contains("A1") && refs.contains("B1"), content="true")
}
