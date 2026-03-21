///|
/// Formula parser and evaluator for the spreadsheet engine.
///
/// # Architecture
///
/// The formula engine uses a three-stage pipeline:
///   1. **Tokenizer** (`tokenize`) — converts a raw expression string into a flat
///      array of `Token` values (numbers, cell refs, operators, function names).
///   2. **Parser** (recursive-descent) — consumes the token stream and evaluates
///      in a single pass (no intermediate AST). Operator precedence is encoded
///      in the call chain: `parse_comparison` > `parse_expr` > `parse_term` >
///      `parse_factor`.
///   3. **Evaluator** — evaluation is interleaved with parsing; each `parse_*`
///      function returns a `@cell.Value` directly. Cell references are resolved
///      via a caller-supplied `lookup` callback.
///
/// # Grammar (EBNF)
///
/// ```
/// comparison = expr (( '>' | '<' | '>=' | '<=' | '=' ) expr)?
/// expr       = term  (( '+' | '-' ) term)*
/// term       = factor (( '*' | '/' ) factor)*
/// factor     = NUMBER | STRING | CELL_REF | func_call | '(' comparison ')'
/// func_call  = FUNC_NAME '(' arg_list ')'
/// arg_list   = comparison (',' comparison)*
///            | CELL_REF ':' CELL_REF            -- range argument
/// ```
///
/// # Supported expressions
///
///   - **Numbers**: integer and decimal literals (`42`, `3.14`, `-7`)
///   - **Cell references**: single-letter column + row number (`A1`, `Z30`)
///   - **Cell ranges**: two refs joined by colon (`A1:B5`, `C2:C10`)
///   - **Arithmetic**: `+`, `-`, `*`, `/` with standard precedence
///   - **Parentheses**: grouping for override precedence (`(A1 + B1) * 2`)
///   - **Comparison**: `>`, `<`, `>=`, `<=`, `=` — returns 1.0 (true) or 0.0 (false)
///   - **Aggregation functions**: `SUM`, `AVG`/`AVERAGE`, `MIN`, `MAX`, `COUNT`
///   - **Math functions**: `ABS(x)`, `ROUND(x, n)`, `POWER(x, y)`, `MOD(x, y)`, `INT(x)`
///   - **Logic**: `IF(condition, true_value, false_value)`
///   - **String functions**: `CONCAT(a, b, ...)`, `LEN(s)`, `UPPER(s)`, `LOWER(s)`
///   - **String literals**: double-quoted text inside formulas (`"hello"`)

///|
/// Extract all cell references from a formula string, expanding ranges into
/// individual cell keys.
///
/// Given `"=SUM(A1:A3) + B4"`, returns `["A1", "A2", "A3", "B4"]`.
/// Ranges like `A1:B2` are expanded to every cell in the rectangular region
/// (A1, A2, B1, B2). Non-formula strings (those not starting with `=`) return
/// an empty array.
///
/// This is used by the dependency tracker to know which cells a formula
/// depends on so that recalculation can propagate changes.
pub fn extract_references(raw : String) -> Array[String] {
  let trimmed = raw.trim().to_string()
  if trimmed.is_empty() || trimmed[0] != '=' {
    return []
  }
  let expr = trimmed[1:].to_string().trim().to_string()
  let tokens = tokenize(expr)
  let refs : Array[String] = []
  let len = tokens.length()
  let mut i = 0
  while i < len {
    match tokens[i] {
      TRef(r1) =>
        // Check for range: TRef TColon TRef
        if i + 2 < len {
          match (tokens[i + 1], tokens[i + 2]) {
            (TColon, TRef(r2)) => {
              // Expand range into individual refs
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
                      refs.push(@cell.make_key(c, r))
                    }
                  }
                }
                _ => {
                  refs.push(r1)
                  refs.push(r2)
                }
              }
              i = i + 3
              continue
            }
            _ => refs.push(r1)
          }
        } else {
          refs.push(r1)
        }
      _ => ()
    }
    i = i + 1
  }
  refs
}

///|
/// Evaluate a raw cell input string and return the computed value.
///
/// The evaluation strategy depends on the input:
///   - Strings starting with `=` are parsed as formulas (the `=` prefix is
///     stripped, then the remainder is tokenized, parsed, and evaluated).
///   - Numeric strings are parsed to `Num(Double)`.
///   - Everything else becomes `Text(String)`.
///   - Empty/whitespace-only input becomes `Empty`.
///
/// The `lookup` callback resolves cell references (e.g. `"A1"`) to their
/// current computed value, enabling formulas to read other cells.
pub fn evaluate(raw : String, lookup : (String) -> @cell.Value) -> @cell.Value {
  let trimmed = raw.trim()
  if trimmed.is_empty() {
    return Empty
  }
  let trimmed_str = trimmed.to_string()
  match trimmed_str.strip_prefix("=") {
    Some(rest) => {
      let expr = rest.to_string().trim().to_string()
      parse_and_eval(expr, lookup)
    }
    None =>
      // Try number
      try {
        let n = @strconv.parse_double(trimmed_str)
        Num(n)
      } catch {
        _ => Text(trimmed_str)
      }
  }
}

///|
/// Parse and evaluate an expression string (without the leading `=`).
///
/// Creates a `ParseState` from the tokenized input and invokes the top-level
/// grammar rule (`parse_comparison`). Returns `Error("PARSE")` if any
/// parsing step raises an error.
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
    _ => Error("PARSE")
  }
}

// --- Tokenizer ---
//
// Converts a raw expression string into a flat `Array[Token]`.
// Whitespace is skipped. The tokenizer distinguishes cell references from
// function names by look-ahead: an uppercase sequence followed by a digit is
// a cell reference (e.g. `A1`, `AB12`); otherwise it is a function name
// (e.g. `SUM`, `IF`). Negative number literals are recognized when a `-`
// appears at the start of the token stream or immediately after an operator,
// open parenthesis, or comma.

///|
/// Token variants produced by the tokenizer.
///
/// - `TNum` — numeric literal (including negative numbers)
/// - `TRef` — cell reference like `"A1"` or `"Z30"`
/// - `TFunc` — function name like `"SUM"` or `"IF"`
/// - `TStr` — double-quoted string literal
/// - Operator and punctuation tokens for arithmetic, comparison, grouping,
///   range (`:`) and argument separation (`,`)
priv enum Token {
  TNum(Double)
  TRef(String) // cell reference like "A1"
  TFunc(String) // function name like "SUM"
  TStr(String) // string literal "hello"
  TPlus
  TMinus
  TMul
  TDiv
  TLParen
  TRParen
  TColon
  TComma
  TGt // >
  TLt // <
  TGte // >=
  TLte // <=
  TEq // = (comparison, not assignment)
}

///|
/// Tokenize a formula expression string into an array of tokens.
///
/// Scans left-to-right, consuming one token per iteration:
///   - Whitespace is skipped.
///   - `"..."` produces `TStr`.
///   - `-` is treated as a negative-number prefix when it appears at the start
///     or after an operator/`(`/`,`; otherwise it produces `TMinus`.
///   - `>=` and `<=` are two-character tokens (`TGte`, `TLte`).
///   - Uppercase letter sequences followed by digits become `TRef`; those not
///     followed by digits become `TFunc`.
///   - Unrecognized characters are silently skipped.
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
          TPlus
          | TMinus
          | TMul
          | TDiv
          | TLParen
          | TComma
          | TGt
          | TLt
          | TGte
          | TLte
          | TEq => true
          _ => false
        }
      }
      if prev_is_op && i + 1 < len && chars[i + 1] >= '0' && chars[i + 1] <= '9' {
        let start = i
        i = i + 1
        while i < len &&
              ((chars[i] >= '0' && chars[i] <= '9') || chars[i] == '.') {
          i = i + 1
        }
        let num_str = chars[start:i]
          .iter()
          .fold(init=StringBuilder::new(), fn(sb, c) {
            sb.write_char(c)
            sb
          })
          .to_string()
        tokens.push(TNum(@strconv.parse_double(num_str))) catch {
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
      let num_str = chars[start:i]
        .iter()
        .fold(init=StringBuilder::new(), fn(sb, c) {
          sb.write_char(c)
          sb
        })
        .to_string()
      tokens.push(TNum(@strconv.parse_double(num_str))) catch {
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
        let ref_str = chars[start:i]
          .iter()
          .fold(init=StringBuilder::new(), fn(sb, c) {
            sb.write_char(c)
            sb
          })
          .to_string()
        tokens.push(TRef(ref_str))
      } else {
        // It's a function name like SUM, AVG
        let func_str = chars[start:i]
          .iter()
          .fold(init=StringBuilder::new(), fn(sb, c) {
            sb.write_char(c)
            sb
          })
          .to_string()
        tokens.push(TFunc(func_str))
      }
    } else {
      i = i + 1 // skip unknown
    }
  }
  tokens
}

// --- Parser (recursive descent) ---
//
// The parser is a hand-written recursive-descent evaluator. Rather than
// building an AST, it evaluates eagerly: each `parse_*` function returns a
// `@cell.Value` directly. Operator precedence is encoded in the call depth:
//
//   parse_comparison  (lowest precedence:  >, <, >=, <=, =)
//       -> parse_expr      (addition / subtraction)
//           -> parse_term      (multiplication / division)
//               -> parse_factor     (atoms: numbers, refs, strings, parens, calls)
//
// Function calls are dispatched by name in `parse_func_call` into specialized
// sub-parsers for IF, aggregate, math, and string functions.

///|
/// Mutable parser state: holds the token array and the current read position.
priv struct ParseState {
  tokens : Array[Token]
  mut pos : Int
}

///|
/// Return the current token without consuming it, or `None` if at end-of-input.
fn ParseState::peek(self : ParseState) -> Token? {
  if self.pos < self.tokens.length() {
    Some(self.tokens[self.pos])
  } else {
    None
  }
}

///|
/// Consume the current token and advance the position by one.
fn ParseState::advance(self : ParseState) -> Unit {
  self.pos = self.pos + 1
}

///|
/// Parse the lowest-precedence rule: an expression optionally followed by a
/// single comparison operator and a second expression.
///
/// Grammar: `comparison = expr (('>' | '<' | '>=' | '<=' | '=') expr)?`
///
/// Comparisons yield `Num(1.0)` for true and `Num(0.0)` for false, which is
/// consistent with how `IF` interprets its condition argument.
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
/// Parse addition and subtraction (left-associative).
///
/// Grammar: `expr = term (('+' | '-') term)*`
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
/// Parse multiplication and division (left-associative, higher precedence
/// than addition/subtraction).
///
/// Grammar: `term = factor (('*' | '/') factor)*`
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
/// Parse an atomic value — the highest-precedence rule.
///
/// Grammar: `factor = NUMBER | STRING | CELL_REF | func_call | '(' comparison ')'`
///
/// - `TNum` and `TStr` are returned directly as `Num` / `Text`.
/// - `TRef` is resolved via the `lookup` callback. A bare range (`A1:B2`)
///   appearing outside an aggregate function context returns `Error("RANGE")`.
/// - `TFunc` delegates to `parse_func_call`.
/// - `TLParen` recurses into `parse_comparison` for grouped sub-expressions.
fn parse_factor(
  state : ParseState,
  lookup : (String) -> @cell.Value,
) -> @cell.Value raise Error {
  match state.peek() {
    Some(TNum(n)) => {
      state.advance()
      Num(n)
    }
    Some(TStr(s)) => {
      state.advance()
      Text(s)
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
              Error("RANGE")
            }
            _ => Error("RANGE")
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
/// Parse a function call: consume the opening `(`, dispatch to the appropriate
/// sub-parser based on function name, which will consume arguments and the
/// closing `)`.
///
/// Dispatch rules:
///   - `"IF"` -> `parse_if` (ternary conditional)
///   - `"CONCAT"`, `"LEN"`, `"UPPER"`, `"LOWER"` -> `parse_string_func`
///   - `"ABS"`, `"ROUND"`, `"POWER"`, `"MOD"`, `"INT"` -> `parse_math_func`
///   - Everything else -> `parse_aggregate_func` (SUM, AVG, MIN, MAX, COUNT)
fn parse_func_call(
  state : ParseState,
  name : String,
  lookup : (String) -> @cell.Value,
) -> @cell.Value raise Error {
  // Expect '('
  match state.peek() {
    Some(TLParen) => state.advance()
    _ => return Error("FUNC")
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
/// Parse `IF(condition, true_value, false_value)`.
///
/// All three arguments are eagerly evaluated (no short-circuit). The condition
/// is considered truthy if it is a non-zero number or a non-empty string;
/// `Empty` and `Error` are falsy.
fn parse_if(
  state : ParseState,
  lookup : (String) -> @cell.Value,
) -> @cell.Value raise Error {
  let condition = parse_comparison(state, lookup)
  // Expect comma
  match state.peek() {
    Some(TComma) => state.advance()
    _ => return Error("IF:ARGS")
  }
  let true_val = parse_comparison(state, lookup)
  // Expect comma
  match state.peek() {
    Some(TComma) => state.advance()
    _ => return Error("IF:ARGS")
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
  if is_true {
    true_val
  } else {
    false_val
  }
}

///|
/// Parse math functions that take 1-2 numeric arguments.
///
/// Supported functions:
///   - `ABS(x)` — absolute value
///   - `ROUND(x, n)` — round `x` to `n` decimal places (default 0)
///   - `POWER(x, y)` — exponentiation; uses integer fast-path when possible
///   - `MOD(x, y)` — modulo with Excel semantics (result sign matches divisor)
///   - `INT(x)` — floor toward negative infinity (Excel behavior)
fn parse_math_func(
  state : ParseState,
  name : String,
  lookup : (String) -> @cell.Value,
) -> @cell.Value raise Error {
  let args : Array[@cell.Value] = []
  // Parse first arg
  args.push(parse_comparison(state, lookup))
  // Parse optional additional args
  while (match state.peek() {
          Some(TComma) => true
          _ => false
        }) {
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
/// Parse string functions that take one or more arguments.
///
/// Supported functions:
///   - `CONCAT(a, b, ...)` — concatenate all arguments as strings
///   - `LEN(s)` — character count of the string representation
///   - `UPPER(s)` — convert ASCII lowercase to uppercase
///   - `LOWER(s)` — convert ASCII uppercase to lowercase
///
/// Non-string values are coerced to their display representation before the
/// string operation is applied.
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
  while (match state.peek() {
          Some(TComma) => true
          _ => false
        }) {
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
/// Parse aggregate functions that operate over a collection of numeric values.
///
/// Supported functions: `SUM`, `AVG`/`AVERAGE`, `MIN`, `MAX`, `COUNT`.
///
/// Arguments can be:
///   - A cell range (`A1:A10`) which is expanded to all cells in the rectangle
///   - A comma-separated list of expressions (`SUM(A1, B1, 42)`)
///   - A single expression
///
/// Non-numeric values in the range are silently skipped (not counted).
/// An empty argument list yields `Num(0.0)`.
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
            _ =>
              // Single ref
              match to_num(lookup(r1)) {
                Some(n) => values.push(n)
                None => ()
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
          while (match state.peek() {
                  Some(TComma) => true
                  _ => false
                }) {
            state.advance()
            let v = parse_expr(state, lookup)
            match to_num(v) {
              Some(n) => values.push(n)
              None => ()
            }
          }
        }
        _ =>
          match to_num(lookup(r1)) {
            Some(n) => values.push(n)
            None => ()
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
      while (match state.peek() {
              Some(TComma) => true
              _ => false
            }) {
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
/// Expand a cell range (e.g. `"A1"` to `"C3"`) into individual numeric values.
///
/// Iterates over every cell in the rectangular region defined by the two corner
/// references, looks up each cell via the `lookup` callback, and appends its
/// numeric value to `values`. Non-numeric cells are silently skipped.
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
/// Apply an aggregate function to a pre-collected array of numeric values.
///
/// Returns `Num(0.0)` for an empty input array.
/// Returns `Error("FUNC?<name>")` for unrecognized function names.
fn apply_aggregate_func(name : String, values : Array[Double]) -> @cell.Value {
  if values.is_empty() {
    return Num(0.0)
  }
  match name {
    "SUM" => {
      let mut sum = 0.0
      for v in values {
        sum = sum + v
      }
      Num(sum)
    }
    "AVG" | "AVERAGE" => {
      let mut sum = 0.0
      for v in values {
        sum = sum + v
      }
      Num(sum / values.length().to_double())
    }
    "MIN" => {
      let mut min = values[0]
      for v in values {
        if v < min {
          min = v
        }
      }
      Num(min)
    }
    "MAX" => {
      let mut max = values[0]
      for v in values {
        if v > max {
          max = v
        }
      }
      Num(max)
    }
    "COUNT" => Num(values.length().to_double())
    _ => Error("FUNC?\{name}")
  }
}

///|
/// Apply a math function to its evaluated argument values.
///
/// Returns typed errors for missing arguments (`"ABS:ARGS"`), type mismatches
/// (`"TYPE"`), division by zero in MOD (`"DIV/0"`), or invalid POWER domains
/// (negative base with fractional exponent).
fn apply_math_func(name : String, args : Array[@cell.Value]) -> @cell.Value {
  match name {
    "ABS" => {
      if args.length() < 1 {
        return Error("ABS:ARGS")
      }
      match to_num(args[0]) {
        Some(n) => Num(if n < 0.0 { 0.0 - n } else { n })
        None => Error("TYPE")
      }
    }
    "ROUND" => {
      if args.length() < 1 {
        return Error("ROUND:ARGS")
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
          Num(rounded)
        }
        None => Error("TYPE")
      }
    }
    "POWER" => {
      if args.length() < 2 {
        return Error("POWER:ARGS")
      }
      match (to_num(args[0]), to_num(args[1])) {
        (Some(base), Some(exponent)) => {
          // Guard: negative base with fractional exp, or zero base with negative exp
          if (base < 0.0 && exponent.to_int().to_double() != exponent) ||
            (base == 0.0 && exponent < 0.0) {
            return Error("POWER")
          }
          // Check if exponent is an integer for exact calculation
          let exp_int = exponent.to_int()
          if exp_int.to_double() == exponent {
            Num(pow(base, exp_int))
          } else {
            Num(@math.pow(base, exponent))
          }
        }
        _ => Error("TYPE")
      }
    }
    "MOD" => {
      if args.length() < 2 {
        return Error("MOD:ARGS")
      }
      match (to_num(args[0]), to_num(args[1])) {
        (Some(_), Some(0.0)) => Error("DIV/0")
        (Some(a), Some(b)) => {
          // Excel MOD: result has same sign as divisor
          let result = a - (a / b).floor() * b
          Num(result)
        }
        _ => Error("TYPE")
      }
    }
    "INT" => {
      if args.length() < 1 {
        return Error("INT:ARGS")
      }
      match to_num(args[0]) {
        // INT floors toward negative infinity (Excel behavior)
        Some(n) => Num(n.floor())
        None => Error("TYPE")
      }
    }
    _ => Error("FUNC?\{name}")
  }
}

///|
/// Convert a cell value to its string representation for use in string functions.
///
/// - `Empty` becomes `""`.
/// - `Num` is formatted as an integer if it has no fractional part, otherwise
///   as a decimal.
/// - `Text` is returned as-is.
/// - `Error` is formatted as `"#ERR: <code>"`.
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
/// Apply a string function to its evaluated argument values.
///
/// All arguments are first coerced to strings via `value_to_string`.
/// Returns `Text` for all string functions, except `LEN` which returns `Num`.
fn apply_string_func(name : String, args : Array[@cell.Value]) -> @cell.Value {
  match name {
    "CONCAT" => {
      let sb = StringBuilder::new()
      for arg in args {
        sb.write_string(value_to_string(arg))
      }
      Text(sb.to_string())
    }
    "LEN" => {
      if args.length() < 1 {
        return Num(0.0)
      }
      let s = value_to_string(args[0])
      Num(s.length().to_double())
    }
    "UPPER" => {
      if args.length() < 1 {
        return Text("")
      }
      let s = value_to_string(args[0])
      Text(to_upper(s))
    }
    "LOWER" => {
      if args.length() < 1 {
        return Text("")
      }
      let s = value_to_string(args[0])
      Text(to_lower(s))
    }
    _ => Error("FUNC?\{name}")
  }
}

// --- Arithmetic helpers ---
//
// Binary arithmetic on `@cell.Value`. Both operands are coerced to `Double`
// via `to_num`; if either operand is non-numeric (text or error), the result
// is `Error("TYPE")`. Division by zero yields `Error("DIV/0")`.

///|
/// Coerce a cell value to a number. `Num` returns its payload, `Empty` is
/// treated as zero (spreadsheet convention), and everything else yields `None`.
fn to_num(v : @cell.Value) -> Double? {
  match v {
    Num(n) => Some(n)
    Empty => Some(0.0)
    _ => None
  }
}

///|
/// Add two cell values. Returns `Error("TYPE")` if either is non-numeric.
fn add_values(a : @cell.Value, b : @cell.Value) -> @cell.Value {
  match (to_num(a), to_num(b)) {
    (Some(x), Some(y)) => Num(x + y)
    _ => Error("TYPE")
  }
}

///|
/// Subtract two cell values. Returns `Error("TYPE")` if either is non-numeric.
fn sub_values(a : @cell.Value, b : @cell.Value) -> @cell.Value {
  match (to_num(a), to_num(b)) {
    (Some(x), Some(y)) => Num(x - y)
    _ => Error("TYPE")
  }
}

///|
/// Multiply two cell values. Returns `Error("TYPE")` if either is non-numeric.
fn mul_values(a : @cell.Value, b : @cell.Value) -> @cell.Value {
  match (to_num(a), to_num(b)) {
    (Some(x), Some(y)) => Num(x * y)
    _ => Error("TYPE")
  }
}

///|
/// Divide two cell values. Returns `Error("DIV/0")` for division by zero,
/// or `Error("TYPE")` if either operand is non-numeric.
fn div_values(a : @cell.Value, b : @cell.Value) -> @cell.Value {
  match (to_num(a), to_num(b)) {
    (Some(_), Some(0.0)) => Error("DIV/0")
    (Some(x), Some(y)) => Num(x / y)
    _ => Error("TYPE")
  }
}

///|
/// Compare two cell values using the given comparison function.
///
/// Tries numeric comparison first (via `to_num`). Falls back to lexicographic
/// string comparison for two `Text` values. Returns `Num(1.0)` for true,
/// `Num(0.0)` for false, or `Error("TYPE")` on type mismatch.
fn compare_values(
  a : @cell.Value,
  b : @cell.Value,
  cmp : (Double, Double) -> Bool,
) -> @cell.Value {
  // Try numeric comparison first
  match (to_num(a), to_num(b)) {
    (Some(x), Some(y)) => return Num(if cmp(x, y) { 1.0 } else { 0.0 })
    _ => ()
  }
  // Try text equality comparison (for IF conditions with strings)
  match (a, b) {
    (Text(s1), Text(s2)) => {
      // For text, = is equality, other comparisons use lexicographic order
      let result = if s1 == s2 {
        cmp(0.0, 0.0)
      } else if s1 < s2 {
        cmp(-1.0, 0.0)
      } else {
        cmp(1.0, 0.0)
      }
      Num(if result { 1.0 } else { 0.0 })
    }
    _ => Error("TYPE")
  }
}

// --- Math helpers ---

///|
/// Compute 10 raised to the power `n` by repeated multiplication.
/// Used by `ROUND` to scale values before and after rounding.
fn pow10(n : Int) -> Double {
  let mut result = 1.0
  for _ in 0..<n {
    result = result * 10.0
  }
  result
}

///|
/// Integer exponentiation by repeated multiplication.
/// Handles negative exponents by computing the reciprocal of the positive result.
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
  if exp < 0 {
    1.0 / result
  } else {
    result
  }
}

///|
/// Convert ASCII lowercase letters (a-z) to uppercase. Non-ASCII characters
/// are passed through unchanged.
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
/// Convert ASCII uppercase letters (A-Z) to lowercase. Non-ASCII characters
/// are passed through unchanged.
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
