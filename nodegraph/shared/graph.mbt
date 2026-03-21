///|
/// Topological sort using Kahn's algorithm.
/// Returns (sorted_node_ids, has_cycle).
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
/// DFS from `to_id` following existing connections. If we reach `from_id`,
/// adding an edge from_id → to_id would create a cycle.
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
/// Evaluate the entire graph. Returns output values for each node.
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
/// Evaluate a single node given its input values and config.
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
fn int_to_hex2(n : Int) -> String {
  hex_digit(n / 16) + hex_digit(n % 16)
}

///|
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
fn parse_hex2(s : String, offset : Int) -> Int {
  let chars = s.to_array()
  if offset + 1 >= chars.length() {
    return 0
  }
  hex_char_val(chars[offset]) * 16 + hex_char_val(chars[offset + 1])
}

///|
fn parse_color(hex : String) -> (Int, Int, Int) {
  if hex.length() < 7 {
    return (0, 0, 0)
  }
  (parse_hex2(hex, 1), parse_hex2(hex, 3), parse_hex2(hex, 5))
}

///|
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
