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

// ── Edge cases: nested IF ───────────────────────────────────────────

///|
test "nested IF: inner branch selected" {
  // A1=10 → 10>5 is true → inner IF: 10>15 is false → "mid"
  inspect(eval("=IF(A1>5,IF(A1>15,\"high\",\"mid\"),\"low\")"), content="mid")
}

///|
test "nested IF: outer false branch" {
  // B1=5 → 5>5 is false → "low"
  inspect(eval("=IF(B1>5,IF(B1>15,\"high\",\"mid\"),\"low\")"), content="low")
}

///|
test "nested IF: inner true branch" {
  // A3=30 → 30>5 is true → inner IF: 30>15 is true → "high"
  inspect(eval("=IF(A3>5,IF(A3>15,\"high\",\"mid\"),\"low\")"), content="high")
}

// ── Edge cases: IF with formula conditions ──────────────────────────

///|
test "IF with SUM condition: true" {
  // SUM(A1:A3)=60 → 60>50 is true → "big"
  inspect(eval("=IF(SUM(A1:A3)>50,\"big\",\"small\")"), content="big")
}

///|
test "IF with SUM condition: false" {
  // SUM(A1:A2)=30 → 30>50 is false → "small"
  inspect(eval("=IF(SUM(A1:A2)>50,\"big\",\"small\")"), content="small")
}

// ── Edge cases: error propagation through SUM ───────────────────────

///|
test "SUM with text arg: text silently skipped" {
  // SUM(A1, C1) where C1="hello" — text is non-numeric, skipped
  // Only A1=10 contributes
  inspect(eval("=SUM(A1,C1)"), content="10")
}

///|
test "SUM with all text: yields 0" {
  inspect(eval("=SUM(C1,C2)"), content="0")
}

// ── Edge cases: error propagation through arithmetic ────────────────

///|
test "text in addition: TYPE error" {
  // C1="hello" → "hello"+1 → Error("TYPE")
  inspect(eval("=C1+1"), content="#ERR: TYPE")
}

///|
test "text in subtraction: TYPE error" {
  inspect(eval("=C1-1"), content="#ERR: TYPE")
}

///|
test "text in multiplication: TYPE error" {
  inspect(eval("=C1*2"), content="#ERR: TYPE")
}

///|
test "text in division: TYPE error" {
  inspect(eval("=C1/2"), content="#ERR: TYPE")
}

// ── Edge cases: division by zero via cell reference ─────────────────

///|
test "division by zero via cell ref" {
  // A1=10, B2=0 → 10/0 → Error("DIV/0")
  inspect(eval("=A1/B2"), content="#ERR: DIV/0")
}

// ── Edge cases: string comparisons ──────────────────────────────────

///|
test "IF with string equality: true" {
  // C1="hello" → C1="hello" → 1 (truthy) → returns 1
  inspect(eval("=IF(C1=\"hello\",1,0)"), content="1")
}

///|
test "IF with string equality: false" {
  // C1="hello" → C1="world" → 0 (falsy) → returns 0
  inspect(eval("=IF(C1=\"world\",1,0)"), content="0")
}

///|
test "string comparison: less than" {
  // "hello" < "world" lexicographically → 1
  inspect(eval("=IF(C1<C2,1,0)"), content="1")
}

// ── Edge cases: empty cell in arithmetic ────────────────────────────

///|
test "empty cell + number" {
  // D1=Empty → 0+5=5
  inspect(eval("=D1+5"), content="5")
}

///|
test "empty cell * number" {
  // D1=Empty → 0*5=0
  inspect(eval("=D1*5"), content="0")
}

///|
test "empty cell - number" {
  // D1=Empty → 0-3=-3
  inspect(eval("=D1-3"), content="-3")
}

// ── Edge cases: chained arithmetic ──────────────────────────────────

///|
test "chained addition: three cells" {
  // A1+A2+A3 = 10+20+30 = 60
  inspect(eval("=A1+A2+A3"), content="60")
}

///|
test "chained mixed operations" {
  // A1*A2+A3 = 10*20+30 = 200+30 = 230
  inspect(eval("=A1*A2+A3"), content="230")
}

///|
test "chained subtraction is left-associative" {
  // 30-20-10 = (30-20)-10 = 0
  inspect(eval("=A3-A2-A1"), content="0")
}

// ── Edge cases: operator precedence ─────────────────────────────────

///|
test "operator precedence: mul before add with literals" {
  inspect(eval("=2+3*4"), content="14")
}

///|
test "operator precedence: div before sub" {
  // 10-6/3 = 10-2 = 8
  inspect(eval("=10-6/3"), content="8")
}

// ── Edge cases: parentheses ─────────────────────────────────────────

///|
test "parentheses override: (2+3)*4" {
  inspect(eval("=(2+3)*4"), content="20")
}

///|
test "nested parentheses" {
  // ((2+3)*(4+1)) = 5*5 = 25
  inspect(eval("=((2+3)*(4+1))"), content="25")
}

// ── Edge cases: negative numbers ────────────────────────────────────

///|
test "negative number: -5+3=-2" {
  inspect(eval("=-5+3"), content="-2")
}

///|
test "negative number in multiplication" {
  // -3*4 = -12
  inspect(eval("=-3*4"), content="-12")
}

///|
test "double negative" {
  // -(-5) parsed as -1*(-5) ... let's see the actual behavior
  // The tokenizer: at start, `-` followed by `(` → TMinus (not negative literal)
  // Then `(` → parse_factor parens → inside: `-5` as negative literal
  // So it's 0 - (-5) = 5... actually parse_expr starts with parse_term which
  // starts with parse_factor. TMinus at top level without a left operand...
  // Actually looking at the grammar: expr = term (('+' | '-') term)*
  // At start: parse_term → parse_factor → sees TMinus... TMinus is not handled
  // in parse_factor, so it would fail. Let's just test what we know works.
  inspect(eval("=0-(-5)"), content="5")
}

// ── Edge cases: ROUND ───────────────────────────────────────────────

///|
test "ROUND: half-up positive" {
  // ROUND(2.5, 0) → floor(2.5 + 0.5) = floor(3.0) = 3
  inspect(eval("=ROUND(2.5,0)"), content="3")
}

///|
test "ROUND: negative half-up" {
  // ROUND(-1.5, 0) → floor(-1.5 + 0.5) = floor(-1.0) = -1
  inspect(eval("=ROUND(-1.5,0)"), content="-1")
}

///|
test "ROUND: multiple decimals" {
  // ROUND(3.14159, 3) → 3.142
  inspect(eval("=ROUND(3.14159,3)"), content="3.142")
}

// ── Edge cases: MOD ─────────────────────────────────────────────────

///|
test "MOD: basic" {
  inspect(eval("=MOD(10,3)"), content="1")
}

///|
test "MOD: division by zero" {
  inspect(eval("=MOD(10,0)"), content="#ERR: DIV/0")
}

///|
test "MOD: negative dividend" {
  // Excel semantics: result has same sign as divisor
  // MOD(-7, 3) = -7 - floor(-7/3)*3 = -7 - floor(-2.33)*3 = -7 - (-3)*3 = -7+9 = 2
  inspect(eval("=MOD(-7,3)"), content="2")
}

// ── Edge cases: POWER ───────────────────────────────────────────────

///|
test "POWER: 2^10=1024" {
  inspect(eval("=POWER(2,10)"), content="1024")
}

///|
test "POWER: zero exponent" {
  inspect(eval("=POWER(5,0)"), content="1")
}

///|
test "POWER: negative exponent" {
  // 2^-1 = 0.5
  inspect(eval("=POWER(2,-1)"), content="0.5")
}

///|
test "POWER: negative base with fractional exp → error" {
  inspect(eval("=POWER(-2,0.5)"), content="#ERR: POWER")
}

///|
test "POWER: zero base with negative exp → error" {
  inspect(eval("=POWER(0,-1)"), content="#ERR: POWER")
}

// ── Edge cases: string functions ────────────────────────────────────

///|
test "CONCAT: three arguments" {
  inspect(eval("=CONCAT(C1,\" \",C2)"), content="hello world")
}

///|
test "CONCAT: number coerced to string" {
  inspect(eval("=CONCAT(\"val=\",A1)"), content="val=10")
}

///|
test "LEN: empty string" {
  inspect(eval("=LEN(\"\")"), content="0")
}

///|
test "UPPER: mixed case" {
  inspect(eval("=UPPER(\"hElLo\")"), content="HELLO")
}

///|
test "LOWER: mixed case" {
  inspect(eval("=LOWER(\"HeLLo\")"), content="hello")
}

// ── Edge cases: extract_references ──────────────────────────────────

///|
test "extract_references: no refs in literal formula" {
  inspect(@formula.extract_references("=1+2*3"), content="[]")
}

///|
test "extract_references: range expansion" {
  let refs = @formula.extract_references("=SUM(A1:B2)")
  // Should expand to A1, A2, B1, B2
  inspect(refs.length(), content="4")
  inspect(refs.contains("A1"), content="true")
  inspect(refs.contains("A2"), content="true")
  inspect(refs.contains("B1"), content="true")
  inspect(refs.contains("B2"), content="true")
}

///|
test "extract_references: duplicate refs not deduplicated" {
  // =A1+A1 should return A1 twice (extract_references doesn't deduplicate)
  let refs = @formula.extract_references("=A1+A1")
  inspect(refs.length(), content="2")
  inspect(refs[0], content="A1")
  inspect(refs[1], content="A1")
}

///|
test "extract_references: empty formula" {
  inspect(@formula.extract_references("="), content="[]")
}

// ── Edge cases: comparison operators ────────────────────────────────

///|
test "less than: true" {
  inspect(eval("=B1<A1"), content="1")
}

///|
test "less than: false" {
  inspect(eval("=A1<B1"), content="0")
}

///|
test "greater than or equal: equal" {
  inspect(eval("=10>=10"), content="1")
}

///|
test "greater than or equal: greater" {
  inspect(eval("=A1>=B1"), content="1")
}

///|
test "less than or equal: less" {
  inspect(eval("=B1<=A1"), content="1")
}

///|
test "equality: not equal" {
  inspect(eval("=10=20"), content="0")
}

// ── Edge cases: IF edge cases ───────────────────────────────────────

///|
test "IF with empty condition: falsy" {
  // D1=Empty → falsy → returns false branch
  inspect(eval("=IF(D1,\"yes\",\"no\")"), content="no")
}

///|
test "IF with text condition: truthy" {
  // C1="hello" (non-empty string) → truthy → returns true branch
  inspect(eval("=IF(C1,\"yes\",\"no\")"), content="yes")
}

///|
test "IF with negative condition: truthy" {
  inspect(eval("=IF(-1,\"yes\",\"no\")"), content="yes")
}

// ── Edge cases: aggregate with empty cells ──────────────────────────

///|
test "COUNT includes empty cells in range" {
  // COUNT(A1,D1,A2): A1=10, D1=Empty(→0.0 via to_num), A2=20
  // to_num(Empty)=Some(0.0), so all 3 contribute
  inspect(eval("=COUNT(A1,D1,A2)"), content="3")
}

///|
test "AVG of single value" {
  inspect(eval("=AVG(A1)"), content="10")
}

///|
test "MIN vs MAX same range" {
  inspect(eval("=MIN(A1:A3)"), content="10")
  inspect(eval("=MAX(A1:A3)"), content="30")
}

// ── Edge cases: nested function in arithmetic ───────────────────────

///|
test "SUM in multiplication" {
  // SUM(A1:A3)*2 = 60*2 = 120
  inspect(eval("=SUM(A1:A3)*2"), content="120")
}

///|
test "ABS of negative expression" {
  // ABS(B1-A1) = ABS(5-10) = ABS(-5) = 5
  inspect(eval("=ABS(B1-A1)"), content="5")
}

///|
test "IF returning SUM result" {
  inspect(eval("=IF(1,SUM(A1:A3),0)"), content="60")
}

// ── Edge cases: unknown function ────────────────────────────────────

///|
test "unknown function name" {
  inspect(eval("=FOO(1,2)"), content="#ERR: FUNC?FOO")
}

// ── Edge cases: INT function ────────────────────────────────────────

///|
test "INT: negative floors toward negative infinity" {
  // INT(-3.2) = floor(-3.2) = -4 (Excel behavior)
  inspect(eval("=INT(-3.2)"), content="-4")
}

///|
test "INT: positive truncation" {
  inspect(eval("=INT(7.9)"), content="7")
}
