///|
/// Strict type compatibility — no implicit coercion.
pub fn types_compatible(from : PortType, to : PortType) -> Bool {
  from == to
}

///|
/// Validate a proposed connection. Returns None if valid, Some(error) if invalid.
pub fn validate_connection(
  graph : Graph,
  from_node_id : Int,
  from_port : Int,
  to_node_id : Int,
  to_port : Int,
) -> String? {
  // No self-loops
  if from_node_id == to_node_id {
    return Some("Cannot connect a node to itself")
  }
  // Find source and target nodes
  let mut from_node : Node? = None
  let mut to_node : Node? = None
  for n in graph.nodes {
    if n.id == from_node_id {
      from_node = Some(n)
    }
    if n.id == to_node_id {
      to_node = Some(n)
    }
  }
  let from_n = match from_node {
    Some(n) => n
    None => return Some("Source node not found")
  }
  let to_n = match to_node {
    Some(n) => n
    None => return Some("Target node not found")
  }
  // Check port indices are valid
  let out_ports = output_ports(from_n.kind)
  if from_port < 0 || from_port >= out_ports.length() {
    return Some("Invalid output port index")
  }
  let in_ports = input_ports(to_n.kind)
  if to_port < 0 || to_port >= in_ports.length() {
    return Some("Invalid input port index")
  }
  // Type compatibility
  let from_type = out_ports[from_port].port_type
  let to_type = in_ports[to_port].port_type
  if !types_compatible(from_type, to_type) {
    return Some(
      "Type mismatch: \{port_type_label(from_type)} \u{2192} \{port_type_label(to_type)}",
    )
  }
  // Each input port accepts exactly one connection
  for c in graph.connections {
    if c.to_node_id == to_node_id && c.to_port == to_port {
      return Some("Input port already connected")
    }
  }
  // Cycle detection
  if would_create_cycle(graph.connections, from_node_id, to_node_id) {
    return Some("Connection would create a cycle")
  }
  None
}

///|
/// Check that a graph name is non-empty and within the 100-character limit.
pub fn validate_graph_name(name : String) -> Bool {
  name.length() > 0 && name.length() <= 100
}

///|
/// Maximum number of nodes allowed in a single graph.
pub let max_nodes : Int = 50

///|
/// Maximum number of connections allowed in a single graph.
pub let max_connections : Int = 100
