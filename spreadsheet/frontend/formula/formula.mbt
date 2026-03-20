///|
/// Formula parser and evaluator.
///
/// Supports:
///   - Numbers: 42, 3.14
///   - Cell references: A1, B2, Z30
///   - Arithmetic: +, -, *, /
///   - Parentheses: (A1 + B1) * 2
///   - Aggregation: SUM, AVG/AVERAGE, MIN, MAX, COUNT
///   - Math: ABS, ROUND, POWER, MOD, INT
///   - Logic: IF(cond, true_val, false_val)
///   - Comparison: >, <, >=, <=, = (within IF conditions)
///   - String: CONCAT, LEN, UPPER, LOWER

/// Evaluate a raw cell string. If it starts with '=', parse as formula.
/// Otherwise try to parse as number, or treat as text.
pub fn evaluate(
  raw : String,
  lookup : (String) -> @cell.Value,
) -> @cell.Value {
  let trimmed = raw.trim()
  if trimmed.is_empty() {
    return @cell.Value::Empty
  }
  let trimmed_str = trimmed.to_string()
  if trimmed_str[0] == '=' {
    let expr = trimmed_str[1:].to_string().trim().to_string()
    parse_and_eval(expr, lookup)
  } else {
    // Try number
    try {
      let n = @strconv.parse_double(trimmed_str)
      @cell.Value::Num(n)
    } catch {
      _ => @cell.Value::Text(trimmed_str)
    }
  }
}

///|
/// Parse and evaluate an expression string.
fn parse_and_eval(
  expr : String,
  lookup : (String) -> @cell.Value,
) -> @cell.Value {
  let tokens = tokenize(expr)
  let state = { tokens, pos: 0 }
  try {
    let result = parse_comparison(state, lookup)
    result
  } catch {
    _ => @cell.Value::Error("PARSE")
  }
}

// --- Tokenizer ---

///|
priv enum Token {
  TNum(Double)
  TRef(String)      // cell reference like "A1"
  TFunc(String)     // function name like "SUM"
  TStr(String)      // string literal "hello"
  TPlus
  TMinus
  TMul
  TDiv
  TLParen
  TRParen
  TColon
  TComma
  TGt           // >
  TLt           // <
  TGte          // >=
  TLte          // <=
  TEq           // = (comparison, not assignment)
}

///|
fn tokenize(s : String) -> Array[Token] {
  let tokens : Array[Token] = []
  let chars = s.to_array()
  let len = chars.length()
  let mut i = 0
  while i < len {
    let c = chars[i]
    if c == ' ' || c == '\t' {
      i = i + 1
      continue
    }
    if c == '"' {
      // String literal
      i = i + 1
      let sb = StringBuilder::new()
      while i < len && chars[i] != '"' {
        sb.write_char(chars[i])
        i = i + 1
      }
      if i < len {
        i = i + 1 // skip closing quote
      }
      tokens.push(TStr(sb.to_string()))
    } else if c == '+' {
      tokens.push(TPlus)
      i = i + 1
    } else if c == '-' {
      // Handle negative numbers at start or after operator/lparen
      let prev_is_op = if tokens.is_empty() {
        true
      } else {
        match tokens[tokens.length() - 1] {
          TPlus | TMinus | TMul | TDiv | TLParen | TComma | TGt | TLt |
          TGte | TLte | TEq =>
            true
          _ => false
        }
      }
      if prev_is_op && i + 1 < len && (chars[i + 1] >= '0' && chars[i + 1] <= '9') {
        let start = i
        i = i + 1
        while i < len && ((chars[i] >= '0' && chars[i] <= '9') || chars[i] == '.') {
          i = i + 1
        }
        let num_str = chars[start:i].iter().fold(init=StringBuilder::new(), fn(sb, c) {
          sb.write_char(c)
          sb
        }).to_string()
        try {
          tokens.push(TNum(@strconv.parse_double(num_str)))
        } catch {
          _ => ()
        }
      } else {
        tokens.push(TMinus)
        i = i + 1
      }
    } else if c == '*' {
      tokens.push(TMul)
      i = i + 1
    } else if c == '/' {
      tokens.push(TDiv)
      i = i + 1
    } else if c == '(' {
      tokens.push(TLParen)
      i = i + 1
    } else if c == ')' {
      tokens.push(TRParen)
      i = i + 1
    } else if c == ':' {
      tokens.push(TColon)
      i = i + 1
    } else if c == ',' {
      tokens.push(TComma)
      i = i + 1
    } else if c == '>' {
      if i + 1 < len && chars[i + 1] == '=' {
        tokens.push(TGte)
        i = i + 2
      } else {
        tokens.push(TGt)
        i = i + 1
      }
    } else if c == '<' {
      if i + 1 < len && chars[i + 1] == '=' {
        tokens.push(TLte)
        i = i + 2
      } else {
        tokens.push(TLt)
        i = i + 1
      }
    } else if c == '=' {
      tokens.push(TEq)
      i = i + 1
    } else if c >= '0' && c <= '9' {
      let start = i
      while i < len && ((chars[i] >= '0' && chars[i] <= '9') || chars[i] == '.') {
        i = i + 1
      }
      let num_str = chars[start:i].iter().fold(init=StringBuilder::new(), fn(sb, c) {
        sb.write_char(c)
        sb
      }).to_string()
      try {
        tokens.push(TNum(@strconv.parse_double(num_str)))
      } catch {
        _ => ()
      }
    } else if c >= 'A' && c <= 'Z' {
      let start = i
      // Read uppercase letters
      while i < len && chars[i] >= 'A' && chars[i] <= 'Z' {
        i = i + 1
      }
      // Check if followed by digit -> cell reference
      if i < len && chars[i] >= '0' && chars[i] <= '9' {
        // It's a cell ref like A1, AB12
        while i < len && chars[i] >= '0' && chars[i] <= '9' {
          i = i + 1
        }
        let ref_str = chars[start:i].iter().fold(init=StringBuilder::new(), fn(sb, c) {
          sb.write_char(c)
          sb
        }).to_string()
        tokens.push(TRef(ref_str))
      } else {
        // It's a function name like SUM, AVG
        let func_str = chars[start:i].iter().fold(init=StringBuilder::new(), fn(sb, c) {
          sb.write_char(c)
          sb
        }).to_string()
        tokens.push(TFunc(func_str))
      }
    } else {
      i = i + 1 // skip unknown
    }
  }
  tokens
}

// --- Parser (recursive descent) ---

///|
priv struct ParseState {
  tokens : Array[Token]
  mut pos : Int
}

///|
fn ParseState::peek(self : ParseState) -> Token? {
  if self.pos < self.tokens.length() {
    Some(self.tokens[self.pos])
  } else {
    None
  }
}

///|
fn ParseState::advance(self : ParseState) -> Unit {
  self.pos = self.pos + 1
}

///|
/// comparison = expr (('>' | '<' | '>=' | '<=' | '=') expr)?
fn parse_comparison(
  state : ParseState,
  lookup : (String) -> @cell.Value,
) -> @cell.Value raise Error {
  let left = parse_expr(state, lookup)
  match state.peek() {
    Some(TGt) => {
      state.advance()
      let right = parse_expr(state, lookup)
      compare_values(left, right, fn(a, b) { a > b })
    }
    Some(TLt) => {
      state.advance()
      let right = parse_expr(state, lookup)
      compare_values(left, right, fn(a, b) { a < b })
    }
    Some(TGte) => {
      state.advance()
      let right = parse_expr(state, lookup)
      compare_values(left, right, fn(a, b) { a >= b })
    }
    Some(TLte) => {
      state.advance()
      let right = parse_expr(state, lookup)
      compare_values(left, right, fn(a, b) { a <= b })
    }
    Some(TEq) => {
      state.advance()
      let right = parse_expr(state, lookup)
      compare_values(left, right, fn(a, b) { a == b })
    }
    _ => left
  }
}

///|
/// expr = term (('+' | '-') term)*
fn parse_expr(
  state : ParseState,
  lookup : (String) -> @cell.Value,
) -> @cell.Value raise Error {
  let mut left = parse_term(state, lookup)
  while true {
    match state.peek() {
      Some(TPlus) => {
        state.advance()
        let right = parse_term(state, lookup)
        left = add_values(left, right)
      }
      Some(TMinus) => {
        state.advance()
        let right = parse_term(state, lookup)
        left = sub_values(left, right)
      }
      _ => break
    }
  }
  left
}

///|
/// term = factor (('*' | '/') factor)*
fn parse_term(
  state : ParseState,
  lookup : (String) -> @cell.Value,
) -> @cell.Value raise Error {
  let mut left = parse_factor(state, lookup)
  while true {
    match state.peek() {
      Some(TMul) => {
        state.advance()
        let right = parse_factor(state, lookup)
        left = mul_values(left, right)
      }
      Some(TDiv) => {
        state.advance()
        let right = parse_factor(state, lookup)
        left = div_values(left, right)
      }
      _ => break
    }
  }
  left
}

///|
/// factor = number | string | cell_ref | func_call | '(' expr ')'
fn parse_factor(
  state : ParseState,
  lookup : (String) -> @cell.Value,
) -> @cell.Value raise Error {
  match state.peek() {
    Some(TNum(n)) => {
      state.advance()
      @cell.Value::Num(n)
    }
    Some(TStr(s)) => {
      state.advance()
      @cell.Value::Text(s)
    }
    Some(TRef(r)) => {
      state.advance()
      // Check for range: A1:A10
      match state.peek() {
        Some(TColon) => {
          state.advance()
          match state.peek() {
            Some(TRef(r2)) => {
              state.advance()
              // Shouldn't happen in factor context, treat as error
              let _ = r2
              @cell.Value::Error("RANGE")
            }
            _ => @cell.Value::Error("RANGE")
          }
        }
        _ => lookup(r)
      }
    }
    Some(TFunc(name)) => {
      state.advance()
      parse_func_call(state, name, lookup)
    }
    Some(TLParen) => {
      state.advance()
      let result = parse_comparison(state, lookup)
      match state.peek() {
        Some(TRParen) => state.advance()
        _ => ()
      }
      result
    }
    _ => fail("unexpected token")
  }
}

///|
/// Parse function call — dispatches to specialized parsers for IF/string funcs
fn parse_func_call(
  state : ParseState,
  name : String,
  lookup : (String) -> @cell.Value,
) -> @cell.Value raise Error {
  // Expect '('
  match state.peek() {
    Some(TLParen) => state.advance()
    _ => return @cell.Value::Error("FUNC")
  }
  // Dispatch by function name
  match name {
    "IF" => parse_if(state, lookup)
    "CONCAT" => parse_string_func(state, name, lookup)
    "LEN" => parse_string_func(state, name, lookup)
    "UPPER" => parse_string_func(state, name, lookup)
    "LOWER" => parse_string_func(state, name, lookup)
    "ABS" => parse_math_func(state, name, lookup)
    "ROUND" => parse_math_func(state, name, lookup)
    "POWER" => parse_math_func(state, name, lookup)
    "MOD" => parse_math_func(state, name, lookup)
    "INT" => parse_math_func(state, name, lookup)
    _ => parse_aggregate_func(state, name, lookup)
  }
}

///|
/// Parse IF(condition, true_value, false_value)
fn parse_if(
  state : ParseState,
  lookup : (String) -> @cell.Value,
) -> @cell.Value raise Error {
  let condition = parse_comparison(state, lookup)
  // Expect comma
  match state.peek() {
    Some(TComma) => state.advance()
    _ => return @cell.Value::Error("IF:ARGS")
  }
  let true_val = parse_comparison(state, lookup)
  // Expect comma
  match state.peek() {
    Some(TComma) => state.advance()
    _ => return @cell.Value::Error("IF:ARGS")
  }
  let false_val = parse_comparison(state, lookup)
  // Expect ')'
  match state.peek() {
    Some(TRParen) => state.advance()
    _ => ()
  }
  // Evaluate condition: truthy if Num != 0
  let is_true = match condition {
    Num(n) => n != 0.0
    Text(s) => s.length() > 0
    _ => false
  }
  if is_true { true_val } else { false_val }
}

///|
/// Parse math functions with 1-2 numeric args: ABS(x), ROUND(x, n), POWER(x, y), MOD(x, y), INT(x)
fn parse_math_func(
  state : ParseState,
  name : String,
  lookup : (String) -> @cell.Value,
) -> @cell.Value raise Error {
  let args : Array[@cell.Value] = []
  // Parse first arg
  args.push(parse_comparison(state, lookup))
  // Parse optional additional args
  while {
    match state.peek() {
      Some(TComma) => true
      _ => false
    }
  } {
    state.advance()
    args.push(parse_comparison(state, lookup))
  }
  // Expect ')'
  match state.peek() {
    Some(TRParen) => state.advance()
    _ => ()
  }
  apply_math_func(name, args)
}

///|
/// Parse string functions: CONCAT(a, b, ...), LEN(s), UPPER(s), LOWER(s)
fn parse_string_func(
  state : ParseState,
  name : String,
  lookup : (String) -> @cell.Value,
) -> @cell.Value raise Error {
  let args : Array[@cell.Value] = []
  // Handle empty args
  match state.peek() {
    Some(TRParen) => {
      state.advance()
      return apply_string_func(name, args)
    }
    _ => ()
  }
  // Parse first arg
  args.push(parse_comparison(state, lookup))
  // Parse remaining
  while {
    match state.peek() {
      Some(TComma) => true
      _ => false
    }
  } {
    state.advance()
    args.push(parse_comparison(state, lookup))
  }
  // Expect ')'
  match state.peek() {
    Some(TRParen) => state.advance()
    _ => ()
  }
  apply_string_func(name, args)
}

///|
/// Parse aggregate functions: SUM, AVG, MIN, MAX, COUNT with range support
fn parse_aggregate_func(
  state : ParseState,
  name : String,
  lookup : (String) -> @cell.Value,
) -> @cell.Value raise Error {
  let values : Array[Double] = []
  // Check for range syntax: REF:REF
  match state.peek() {
    Some(TRef(r1)) => {
      state.advance()
      match state.peek() {
        Some(TColon) => {
          state.advance()
          match state.peek() {
            Some(TRef(r2)) => {
              state.advance()
              // Expand range
              expand_range(r1, r2, lookup, values)
            }
            _ => {
              // Single ref
              match to_num(lookup(r1)) {
                Some(n) => values.push(n)
                None => ()
              }
            }
          }
        }
        Some(TComma) | Some(TRParen) => {
          // Single ref as first arg
          match to_num(lookup(r1)) {
            Some(n) => values.push(n)
            None => ()
          }
          // Parse remaining comma-separated args
          while {
            match state.peek() {
              Some(TComma) => true
              _ => false
            }
          } {
            state.advance()
            let v = parse_expr(state, lookup)
            match to_num(v) {
              Some(n) => values.push(n)
              None => ()
            }
          }
        }
        _ => {
          match to_num(lookup(r1)) {
            Some(n) => values.push(n)
            None => ()
          }
        }
      }
    }
    Some(TRParen) => () // empty args
    _ => {
      // Parse as expression
      let v = parse_expr(state, lookup)
      match to_num(v) {
        Some(n) => values.push(n)
        None => ()
      }
      while {
        match state.peek() {
          Some(TComma) => true
          _ => false
        }
      } {
        state.advance()
        let v = parse_expr(state, lookup)
        match to_num(v) {
          Some(n) => values.push(n)
          None => ()
        }
      }
    }
  }
  // Expect ')'
  match state.peek() {
    Some(TRParen) => state.advance()
    _ => ()
  }
  // Apply function
  apply_aggregate_func(name, values)
}

///|
fn expand_range(
  r1 : String,
  r2 : String,
  lookup : (String) -> @cell.Value,
  values : Array[Double],
) -> Unit {
  let ref1 = @cell.parse_ref(r1)
  let ref2 = @cell.parse_ref(r2)
  match (ref1, ref2) {
    (Some((c1, row1)), Some((c2, row2))) => {
      let min_c = if c1 < c2 { c1 } else { c2 }
      let max_c = if c1 > c2 { c1 } else { c2 }
      let min_r = if row1 < row2 { row1 } else { row2 }
      let max_r = if row1 > row2 { row1 } else { row2 }
      for c = min_c; c <= max_c; c = c + 1 {
        for r = min_r; r <= max_r; r = r + 1 {
          let key = @cell.make_key(c, r)
          match to_num(lookup(key)) {
            Some(n) => values.push(n)
            None => ()
          }
        }
      }
    }
    _ => ()
  }
}

///|
fn apply_aggregate_func(name : String, values : Array[Double]) -> @cell.Value {
  if values.is_empty() {
    return @cell.Value::Num(0.0)
  }
  match name {
    "SUM" => {
      let mut sum = 0.0
      for v in values {
        sum = sum + v
      }
      @cell.Value::Num(sum)
    }
    "AVG" | "AVERAGE" => {
      let mut sum = 0.0
      for v in values {
        sum = sum + v
      }
      @cell.Value::Num(sum / values.length().to_double())
    }
    "MIN" => {
      let mut min = values[0]
      for v in values {
        if v < min {
          min = v
        }
      }
      @cell.Value::Num(min)
    }
    "MAX" => {
      let mut max = values[0]
      for v in values {
        if v > max {
          max = v
        }
      }
      @cell.Value::Num(max)
    }
    "COUNT" => @cell.Value::Num(values.length().to_double())
    _ => @cell.Value::Error("FUNC?\{name}")
  }
}

///|
fn apply_math_func(name : String, args : Array[@cell.Value]) -> @cell.Value {
  match name {
    "ABS" => {
      if args.length() < 1 {
        return @cell.Value::Error("ABS:ARGS")
      }
      match to_num(args[0]) {
        Some(n) => @cell.Value::Num(if n < 0.0 { 0.0 - n } else { n })
        None => @cell.Value::Error("TYPE")
      }
    }
    "ROUND" => {
      if args.length() < 1 {
        return @cell.Value::Error("ROUND:ARGS")
      }
      let decimals = if args.length() >= 2 {
        match to_num(args[1]) {
          Some(d) => d.to_int()
          None => 0
        }
      } else {
        0
      }
      match to_num(args[0]) {
        Some(n) => {
          let factor = pow10(if decimals < 0 { 0 } else { decimals })
          // Use floor(x + 0.5) for correct rounding of negatives
          let scaled = n * factor
          let rounded = (scaled + 0.5).floor() / factor
          @cell.Value::Num(rounded)
        }
        None => @cell.Value::Error("TYPE")
      }
    }
    "POWER" => {
      if args.length() < 2 {
        return @cell.Value::Error("POWER:ARGS")
      }
      match (to_num(args[0]), to_num(args[1])) {
        (Some(base), Some(exponent)) => {
          // Check if exponent is an integer for exact calculation
          let exp_int = exponent.to_int()
          if exp_int.to_double() == exponent {
            @cell.Value::Num(pow(base, exp_int))
          } else {
            // Fractional exponent: use exp(ln(base) * exponent)
            if base < 0.0 || (base == 0.0 && exponent < 0.0) {
              @cell.Value::Error("POWER")
            } else {
              @cell.Value::Num(@math.pow(base, exponent))
            }
          }
        }
        _ => @cell.Value::Error("TYPE")
      }
    }
    "MOD" => {
      if args.length() < 2 {
        return @cell.Value::Error("MOD:ARGS")
      }
      match (to_num(args[0]), to_num(args[1])) {
        (Some(_), Some(0.0)) => @cell.Value::Error("DIV/0")
        (Some(a), Some(b)) => {
          // Excel MOD: result has same sign as divisor
          let result = a - (a / b).floor() * b
          @cell.Value::Num(result)
        }
        _ => @cell.Value::Error("TYPE")
      }
    }
    "INT" => {
      if args.length() < 1 {
        return @cell.Value::Error("INT:ARGS")
      }
      match to_num(args[0]) {
        // INT floors toward negative infinity (Excel behavior)
        Some(n) => @cell.Value::Num(n.floor())
        None => @cell.Value::Error("TYPE")
      }
    }
    _ => @cell.Value::Error("FUNC?\{name}")
  }
}

///|
fn value_to_string(v : @cell.Value) -> String {
  match v {
    Empty => ""
    Num(n) => {
      let i = n.to_int()
      if i.to_double() == n {
        i.to_string()
      } else {
        n.to_string()
      }
    }
    Text(s) => s
    Error(e) => "#ERR: \{e}"
  }
}

///|
fn apply_string_func(name : String, args : Array[@cell.Value]) -> @cell.Value {
  match name {
    "CONCAT" => {
      let sb = StringBuilder::new()
      for arg in args {
        sb.write_string(value_to_string(arg))
      }
      @cell.Value::Text(sb.to_string())
    }
    "LEN" => {
      if args.length() < 1 {
        return @cell.Value::Num(0.0)
      }
      let s = value_to_string(args[0])
      @cell.Value::Num(s.length().to_double())
    }
    "UPPER" => {
      if args.length() < 1 {
        return @cell.Value::Text("")
      }
      let s = value_to_string(args[0])
      @cell.Value::Text(to_upper(s))
    }
    "LOWER" => {
      if args.length() < 1 {
        return @cell.Value::Text("")
      }
      let s = value_to_string(args[0])
      @cell.Value::Text(to_lower(s))
    }
    _ => @cell.Value::Error("FUNC?\{name}")
  }
}

// --- Arithmetic helpers ---

///|
fn to_num(v : @cell.Value) -> Double? {
  match v {
    Num(n) => Some(n)
    Empty => Some(0.0)
    _ => None
  }
}

///|
fn add_values(a : @cell.Value, b : @cell.Value) -> @cell.Value {
  match (to_num(a), to_num(b)) {
    (Some(x), Some(y)) => @cell.Value::Num(x + y)
    _ => @cell.Value::Error("TYPE")
  }
}

///|
fn sub_values(a : @cell.Value, b : @cell.Value) -> @cell.Value {
  match (to_num(a), to_num(b)) {
    (Some(x), Some(y)) => @cell.Value::Num(x - y)
    _ => @cell.Value::Error("TYPE")
  }
}

///|
fn mul_values(a : @cell.Value, b : @cell.Value) -> @cell.Value {
  match (to_num(a), to_num(b)) {
    (Some(x), Some(y)) => @cell.Value::Num(x * y)
    _ => @cell.Value::Error("TYPE")
  }
}

///|
fn div_values(a : @cell.Value, b : @cell.Value) -> @cell.Value {
  match (to_num(a), to_num(b)) {
    (Some(_), Some(0.0)) => @cell.Value::Error("DIV/0")
    (Some(x), Some(y)) => @cell.Value::Num(x / y)
    _ => @cell.Value::Error("TYPE")
  }
}

///|
fn compare_values(
  a : @cell.Value,
  b : @cell.Value,
  cmp : (Double, Double) -> Bool,
) -> @cell.Value {
  // Try numeric comparison first
  match (to_num(a), to_num(b)) {
    (Some(x), Some(y)) =>
      return @cell.Value::Num(if cmp(x, y) { 1.0 } else { 0.0 })
    _ => ()
  }
  // Try text equality comparison (for IF conditions with strings)
  match (a, b) {
    (Text(s1), Text(s2)) => {
      // For text, = is equality, other comparisons use lexicographic order
      let result = if s1 == s2 { cmp(0.0, 0.0) } else if s1 < s2 {
        cmp(-1.0, 0.0)
      } else {
        cmp(1.0, 0.0)
      }
      @cell.Value::Num(if result { 1.0 } else { 0.0 })
    }
    _ => @cell.Value::Error("TYPE")
  }
}

// --- Math helpers ---

///|
fn pow10(n : Int) -> Double {
  let mut result = 1.0
  for _i = 0; _i < n; _i = _i + 1 {
    result = result * 10.0
  }
  result
}

///|
fn pow(base : Double, exp : Int) -> Double {
  if exp == 0 {
    return 1.0
  }
  let mut result = 1.0
  let mut e = if exp < 0 { 0 - exp } else { exp }
  while e > 0 {
    result = result * base
    e = e - 1
  }
  if exp < 0 { 1.0 / result } else { result }
}

///|
fn to_upper(s : String) -> String {
  let sb = StringBuilder::new()
  for c in s {
    if c >= 'a' && c <= 'z' {
      sb.write_char((c.to_int() - 32).unsafe_to_char())
    } else {
      sb.write_char(c)
    }
  }
  sb.to_string()
}

///|
fn to_lower(s : String) -> String {
  let sb = StringBuilder::new()
  for c in s {
    if c >= 'A' && c <= 'Z' {
      sb.write_char((c.to_int() + 32).unsafe_to_char())
    } else {
      sb.write_char(c)
    }
  }
  sb.to_string()
}
