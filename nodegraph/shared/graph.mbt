///|
/// Topological sort of graph nodes using Kahn's algorithm (BFS-based).
///
/// Computes an evaluation order such that every node is processed after all of
/// its upstream dependencies. The algorithm maintains an in-degree count for
/// each node, starts from nodes with zero in-degree (source/constant nodes),
/// and iteratively peels them off while decrementing the in-degree of their
/// downstream neighbors.
///
/// Returns `(sorted_node_ids, has_cycle)` where `has_cycle` is true when the
/// sorted output is shorter than the input (meaning some nodes are trapped in
/// a cycle and could not be reached). Even when a cycle exists, the returned
/// array contains a valid ordering for the acyclic portion of the graph.
pub fn topological_sort(
  nodes : Array[Node],
  connections : Array[Connection],
) -> (Array[Int], Bool) {
  let n = nodes.length()
  let ids : Array[Int] = nodes.map(fn(node) { node.id })
  // Compute in-degree for each node
  let in_degree : Array[Int] = Array::make(n, 0)
  for conn in connections {
    for i = 0; i < n; i = i + 1 {
      if ids[i] == conn.to_node_id {
        in_degree[i] = in_degree[i] + 1
      }
    }
  }
  // Initialize queue with zero in-degree nodes
  let queue : Array[Int] = []
  for i = 0; i < n; i = i + 1 {
    if in_degree[i] == 0 {
      queue.push(i)
    }
  }
  let sorted : Array[Int] = []
  let mut head = 0
  while head < queue.length() {
    let idx = queue[head]
    head = head + 1
    sorted.push(ids[idx])
    // For each outgoing edge from this node
    for conn in connections {
      if conn.from_node_id == ids[idx] {
        for j = 0; j < n; j = j + 1 {
          if ids[j] == conn.to_node_id {
            in_degree[j] = in_degree[j] - 1
            if in_degree[j] == 0 {
              queue.push(j)
            }
          }
        }
      }
    }
  }
  (sorted, sorted.length() != n)
}

///|
/// Check whether adding a directed edge `from_id -> to_id` would introduce a
/// cycle into the connection graph.
///
/// Performs an iterative depth-first search starting at `to_id` and following
/// existing edges forward (from_node -> to_node). If the traversal reaches
/// `from_id`, it means there is already a path from `to_id` to `from_id`, so
/// adding the proposed edge would close a loop. Uses a visited set to avoid
/// re-exploring nodes in graphs with diamond/fan-out patterns.
///
/// This is called during connection validation to enforce the DAG invariant.
pub fn would_create_cycle(
  connections : Array[Connection],
  from_id : Int,
  to_id : Int,
) -> Bool {
  let visited : Array[Int] = []
  let stack : Array[Int] = [to_id]
  while stack.length() > 0 {
    let current = stack.pop().unwrap()
    if current == from_id {
      return true
    }
    if visited.contains(current) {
      continue
    }
    visited.push(current)
    for conn in connections {
      if conn.from_node_id == current {
        stack.push(conn.to_node_id)
      }
    }
  }
  false
}

///|
/// Evaluate the entire dataflow graph in topological order.
///
/// Steps:
/// 1. Run `topological_sort` to obtain a dependency-safe processing order.
/// 2. For each node in that order, gather input values from upstream
///    connections by looking up the already-computed outputs of predecessor
///    nodes and mapping them by port index.
/// 3. Call `evaluate_node` with the gathered inputs and the node's config.
/// 4. On success, store the output values keyed by node ID. On failure,
///    record the error and propagate `VError` values to all output ports so
///    downstream nodes receive an explicit error rather than a silent default.
///
/// Returns an `EvalResult` containing per-node outputs, per-node errors, the
/// evaluation order, and a flag indicating whether the graph contains a cycle.
/// Nodes trapped in a cycle are simply excluded from evaluation (they will have
/// no entry in `node_outputs`).
pub fn evaluate_graph(
  nodes : Array[Node],
  connections : Array[Connection],
) -> EvalResult {
  let (order, has_cycle) = topological_sort(nodes, connections)
  // Even with cycles, evaluate the acyclic nodes that topo-sort resolved
  // node_id → output values
  let outputs : Array[(Int, Array[Value])] = []
  let errors : Array[(Int, String)] = []
  for node_id in order {
    // Find the node
    let n = match nodes.iter().find_first(fn(n) { n.id == node_id }) {
      Some(n) => n
      None => continue
    }
    // Gather input values from upstream connections
    let in_defs = input_ports(n.kind)
    let inputs : Array[Value] = Array::make(in_defs.length(), VNone)
    for conn in connections {
      if conn.to_node_id == node_id {
        // Find the upstream node's output value
        for out in outputs {
          let (oid, vals) = out
          if oid == conn.from_node_id && conn.from_port < vals.length() {
            if conn.to_port < inputs.length() {
              inputs[conn.to_port] = vals[conn.from_port]
            }
          }
        }
      }
    }
    // Evaluate this node
    let result = evaluate_node(n.kind, inputs, n.config)
    match result {
      Ok(vals) => outputs.push((node_id, vals))
      Err(msg) => {
        errors.push((node_id, msg))
        // Propagate error downstream so failures don't silently become defaults
        let out_count = output_ports(n.kind).length()
        outputs.push((node_id, Array::make(out_count, VError(msg))))
      }
    }
  }
  { node_outputs: outputs, errors, eval_order: order, has_cycle }
}

///|
/// Evaluate a single node given its resolved input values and config string.
///
/// Dispatches on `NodeKind` to perform the appropriate operation:
/// - **Math nodes**: binary or unary arithmetic on `VNumber` inputs. Division
///   returns an error on divide-by-zero rather than panicking.
/// - **String nodes**: concatenation, length, case conversion on `VString`.
/// - **Logic nodes**: boolean operators and numeric comparisons.
/// - **Color nodes**: RGB composition (clamped 0-255), 50/50 channel mixing,
///   and perceived-brightness calculation (BT.601 luminance formula).
/// - **Constant nodes**: produce a single output parsed from `config`.
///   `ConstNumber` defaults to 0 on parse failure; `ConstColor` defaults to
///   black (`#000000`) when config is empty.
/// - **Display nodes**: pass-through sinks that forward their input unchanged,
///   returning `VNone` when disconnected.
///
/// Returns `Ok(outputs)` on success or `Err(message)` on type mismatch /
/// invalid input.
fn evaluate_node(
  kind : NodeKind,
  inputs : Array[Value],
  config : String,
) -> Result[Array[Value], String] {
  match kind {
    MathAdd => math_binop(inputs, fn(a, b) { a + b })
    MathSubtract => math_binop(inputs, fn(a, b) { a - b })
    MathMultiply => math_binop(inputs, fn(a, b) { a * b })
    MathDivide =>
      match (get_num(inputs, 0), get_num(inputs, 1)) {
        (Ok(a), Ok(b)) =>
          if b == 0 {
            Err("Division by zero")
          } else {
            Ok([VNumber(a / b)])
          }
        _ => Err("Expected two Numbers")
      }
    MathAbs =>
      match get_num(inputs, 0) {
        Ok(v) => Ok([VNumber(if v < 0 { -v } else { v })])
        Err(e) => Err(e)
      }
    StringConcat =>
      match (get_str(inputs, 0), get_str(inputs, 1)) {
        (Ok(a), Ok(b)) => Ok([VString(a + b)])
        _ => Err("Expected two Strings")
      }
    StringLength =>
      match get_str(inputs, 0) {
        Ok(s) => Ok([VNumber(s.length())])
        Err(e) => Err(e)
      }
    StringUpper =>
      match get_str(inputs, 0) {
        Ok(s) => Ok([VString(s.to_upper())])
        Err(e) => Err(e)
      }
    StringLower =>
      match get_str(inputs, 0) {
        Ok(s) => Ok([VString(s.to_lower())])
        Err(e) => Err(e)
      }
    LogicAnd =>
      match (get_bool(inputs, 0), get_bool(inputs, 1)) {
        (Ok(a), Ok(b)) => Ok([VBool(a && b)])
        _ => Err("Expected two Bools")
      }
    LogicOr =>
      match (get_bool(inputs, 0), get_bool(inputs, 1)) {
        (Ok(a), Ok(b)) => Ok([VBool(a || b)])
        _ => Err("Expected two Bools")
      }
    LogicNot =>
      match get_bool(inputs, 0) {
        Ok(v) => Ok([VBool(!v)])
        Err(e) => Err(e)
      }
    LogicGreaterThan =>
      match (get_num(inputs, 0), get_num(inputs, 1)) {
        (Ok(a), Ok(b)) => Ok([VBool(a > b)])
        _ => Err("Expected two Numbers")
      }
    LogicEquals =>
      match (get_num(inputs, 0), get_num(inputs, 1)) {
        (Ok(a), Ok(b)) => Ok([VBool(a == b)])
        _ => Err("Expected two Numbers")
      }
    ColorRGB =>
      match (get_num(inputs, 0), get_num(inputs, 1), get_num(inputs, 2)) {
        (Ok(r), Ok(g), Ok(b)) => {
          let rc = clamp(r, 0, 255)
          let gc = clamp(g, 0, 255)
          let bc = clamp(b, 0, 255)
          Ok([VColor("#\{int_to_hex2(rc)}\{int_to_hex2(gc)}\{int_to_hex2(bc)}")])
        }
        _ => Err("Expected three Numbers (R, G, B)")
      }
    ColorMix =>
      match (get_color(inputs, 0), get_color(inputs, 1)) {
        (Ok(a), Ok(b)) => Ok([VColor(mix_colors(a, b))])
        _ => Err("Expected two Colors")
      }
    ColorBrightness =>
      match get_color(inputs, 0) {
        Ok(hex) => {
          let (r, g, b) = parse_color(hex)
          let brightness = (r * 299 + g * 587 + b * 114) / 1000
          Ok([VNumber(brightness)])
        }
        Err(e) => Err(e)
      }
    ConstNumber => {
      let v = @strconv.parse_int(config) catch { _ => 0 }
      Ok([VNumber(v)])
    }
    ConstString => Ok([VString(config)])
    ConstBool => Ok([VBool(config == "true")])
    ConstColor =>
      Ok([VColor(if config.length() > 0 { config } else { "#000000" })])
    DisplayNumber =>
      // Pass-through: display nodes just forward their input
      if inputs.length() > 0 {
        Ok([inputs[0]])
      } else {
        Ok([VNone])
      }
    DisplayText =>
      if inputs.length() > 0 {
        Ok([inputs[0]])
      } else {
        Ok([VNone])
      }
  }
}

// ── Helpers ───────────────────────────────────────────────────────

///|
/// Extract a numeric value from the inputs array at `idx`.
/// Returns `Ok(0)` for `VNone` (unconnected port default), or an error if
/// the index is out of range or the value is not a number.
fn get_num(inputs : Array[Value], idx : Int) -> Result[Int, String] {
  if idx >= inputs.length() {
    return Err("Missing input")
  }
  match inputs[idx] {
    VNumber(n) => Ok(n)
    VNone => Ok(0)
    _ => Err("Expected Number")
  }
}

///|
/// Extract a string value from the inputs array at `idx`.
/// Returns `Ok("")` for `VNone` (unconnected port default), or an error if
/// the index is out of range or the value is not a string.
fn get_str(inputs : Array[Value], idx : Int) -> Result[String, String] {
  if idx >= inputs.length() {
    return Err("Missing input")
  }
  match inputs[idx] {
    VString(s) => Ok(s)
    VNone => Ok("")
    _ => Err("Expected String")
  }
}

///|
/// Extract a boolean value from the inputs array at `idx`.
/// Returns `Ok(false)` for `VNone` (unconnected port default), or an error if
/// the index is out of range or the value is not a boolean.
fn get_bool(inputs : Array[Value], idx : Int) -> Result[Bool, String] {
  if idx >= inputs.length() {
    return Err("Missing input")
  }
  match inputs[idx] {
    VBool(b) => Ok(b)
    VNone => Ok(false)
    _ => Err("Expected Bool")
  }
}

///|
/// Extract a color hex string from the inputs array at `idx`.
/// Returns `Ok("#000000")` (black) for `VNone` (unconnected port default), or
/// an error if the index is out of range or the value is not a color.
fn get_color(inputs : Array[Value], idx : Int) -> Result[String, String] {
  if idx >= inputs.length() {
    return Err("Missing input")
  }
  match inputs[idx] {
    VColor(c) => Ok(c)
    VNone => Ok("#000000")
    _ => Err("Expected Color")
  }
}

///|
/// Apply a binary integer operation to the first two inputs.
/// Extracts both values as numbers and returns a single-element `VNumber`
/// array, or an error if either input is missing or has the wrong type.
fn math_binop(
  inputs : Array[Value],
  op : (Int, Int) -> Int,
) -> Result[Array[Value], String] {
  match (get_num(inputs, 0), get_num(inputs, 1)) {
    (Ok(a), Ok(b)) => Ok([VNumber(op(a, b))])
    _ => Err("Expected two Numbers")
  }
}

///|
/// Clamp an integer to the inclusive range `[lo, hi]`.
fn clamp(v : Int, lo : Int, hi : Int) -> Int {
  if v < lo {
    lo
  } else if v > hi {
    hi
  } else {
    v
  }
}

///|
/// Convert a single integer (0-15) to its lowercase hexadecimal character.
/// Values outside 0-15 default to "0".
fn hex_digit(d : Int) -> String {
  match d {
    0 => "0"
    1 => "1"
    2 => "2"
    3 => "3"
    4 => "4"
    5 => "5"
    6 => "6"
    7 => "7"
    8 => "8"
    9 => "9"
    10 => "a"
    11 => "b"
    12 => "c"
    13 => "d"
    14 => "e"
    15 => "f"
    _ => "0"
  }
}

///|
/// Convert an integer (0-255) to a two-character lowercase hex string
/// (e.g. 255 -> "ff", 10 -> "0a"). Used to build CSS hex color codes.
fn int_to_hex2(n : Int) -> String {
  hex_digit(n / 16) + hex_digit(n % 16)
}

///|
/// Parse a single hexadecimal character ('0'-'9', 'a'-'f', 'A'-'F') to its
/// integer value 0-15. Returns 0 for any unrecognized character.
fn hex_char_val(c : Char) -> Int {
  if c >= '0' && c <= '9' {
    c.to_int() - '0'.to_int()
  } else if c >= 'a' && c <= 'f' {
    c.to_int() - 'a'.to_int() + 10
  } else if c >= 'A' && c <= 'F' {
    c.to_int() - 'A'.to_int() + 10
  } else {
    0
  }
}

///|
/// Parse two consecutive hex characters from `s` starting at `offset` into an
/// integer 0-255. Returns 0 if the string is too short.
fn parse_hex2(s : String, offset : Int) -> Int {
  let chars = s.to_array()
  if offset + 1 >= chars.length() {
    return 0
  }
  hex_char_val(chars[offset]) * 16 + hex_char_val(chars[offset + 1])
}

///|
/// Parse a CSS hex color string (e.g. "#ff8000") into its (R, G, B) integer
/// components (each 0-255). Returns (0, 0, 0) for malformed/short strings.
fn parse_color(hex : String) -> (Int, Int, Int) {
  if hex.length() < 7 {
    return (0, 0, 0)
  }
  (parse_hex2(hex, 1), parse_hex2(hex, 3), parse_hex2(hex, 5))
}

///|
/// Mix two CSS hex colors by averaging their R, G, B channels independently.
/// Returns a new hex color string (e.g. mixing "#ff0000" and "#0000ff" yields
/// "#7f007f").
fn mix_colors(a : String, b : String) -> String {
  let (r1, g1, b1) = parse_color(a)
  let (r2, g2, b2) = parse_color(b)
  let r = (r1 + r2) / 2
  let g = (g1 + g2) / 2
  let bl = (b1 + b2) / 2
  "#\{int_to_hex2(r)}\{int_to_hex2(g)}\{int_to_hex2(bl)}"
}

///|
/// Format a Value for display.
pub fn format_value(v : Value) -> String {
  match v {
    VNumber(n) => n.to_string()
    VString(s) => "\"\{s}\""
    VBool(b) => if b { "true" } else { "false" }
    VColor(c) => c
    VError(e) => "Error: \{e}"
    VNone => "(none)"
  }
}

///|
/// Get output values for a node from eval result.
pub fn get_node_outputs(result : EvalResult, node_id : Int) -> Array[Value] {
  match result.node_outputs.iter().find_first(fn(out) { out.0 == node_id }) {
    Some(out) => out.1
    None => []
  }
}
