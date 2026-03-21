///|
/// Compute auto-layout positions from topological structure.
/// Returns Array[(node_id, x_px, y_px)].
let node_w : Int = 220

///|
let node_stride_x : Int = 280

///|
let node_stride_y : Int = 210

///|
let pad_x : Int = 20

///|
let pad_y : Int = 20

///|
let header_h : Int = 35

///|
let port_stride : Int = 28

///|
/// Compute auto-layout positions for nodes using topological layering. Returns an array of (node_id, x, y) tuples.
pub fn compute_layout(
  nodes : Array[@shared.Node],
  connections : Array[@shared.Connection],
) -> Array[(Int, Int, Int)] {
  if nodes.is_empty() {
    return []
  }
  // Compute layers: source nodes at layer 0, each node's layer = max(predecessor layers) + 1
  let n = nodes.length()
  let ids : Array[Int] = nodes.map(fn(nd) { nd.id })
  let layers : Array[Int] = Array::make(n, 0)
  // Iterative relaxation (simple BFS-like)
  for _pass = 0; _pass < n; _pass = _pass + 1 {
    for c in connections {
      let from_idx = find_idx(ids, c.from_node_id)
      let to_idx = find_idx(ids, c.to_node_id)
      if from_idx >= 0 && to_idx >= 0 {
        let new_layer = layers[from_idx] + 1
        if new_layer > layers[to_idx] {
          layers[to_idx] = new_layer
        }
      }
    }
  }
  // Group by layer, compute y positions within each layer
  let mut max_layer = 0
  for l in layers {
    if l > max_layer {
      max_layer = l
    }
  }
  let positions : Array[(Int, Int, Int)] = []
  for layer = 0; layer <= max_layer; layer = layer + 1 {
    let mut row = 0
    for i = 0; i < n; i = i + 1 {
      if layers[i] == layer {
        let x = pad_x + layer * node_stride_x
        let y = pad_y + row * node_stride_y
        positions.push((ids[i], x, y))
        row = row + 1
      }
    }
  }
  positions
}

///|
fn find_idx(ids : Array[Int], id : Int) -> Int {
  for i = 0; i < ids.length(); i = i + 1 {
    if ids[i] == id {
      return i
    }
  }
  -1
}

///|
/// Look up a node's (x, y) position in the layout by its ID, defaulting to (0, 0) if not found.
pub fn get_pos(layout : Array[(Int, Int, Int)], node_id : Int) -> (Int, Int) {
  for entry in layout {
    let (id, x, y) = entry
    if id == node_id {
      return (x, y)
    }
  }
  (0, 0)
}

///|
/// Compute the minimum canvas dimensions needed to contain all laid-out nodes.
pub fn canvas_size(layout : Array[(Int, Int, Int)]) -> (Int, Int) {
  let mut max_x = 600
  let mut max_y = 400
  for entry in layout {
    let (_, x, y) = entry
    if x + node_w + pad_x > max_x {
      max_x = x + node_w + pad_x
    }
    if y + node_stride_y > max_y {
      max_y = y + node_stride_y
    }
  }
  (max_x, max_y)
}
