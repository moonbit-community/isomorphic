///|
/// Width of a rendered node card in pixels. Used by `canvas_size` to compute
/// the right-edge boundary.
let node_w : Int = 220

///|
/// Horizontal distance between layer columns in pixels (node width + gap).
let node_stride_x : Int = 280

///|
/// Vertical distance between nodes within the same layer column in pixels.
let node_stride_y : Int = 210

///|
/// Horizontal padding from the left edge of the canvas to the first column.
let pad_x : Int = 20

///|
/// Vertical padding from the top edge of the canvas to the first row.
let pad_y : Int = 20

///|
/// Height of the node header area in pixels (used for port Y offset calculation).
let header_h : Int = 35

///|
/// Vertical spacing between consecutive ports within a node, in pixels.
let port_stride : Int = 28

///|
/// Compute auto-layout positions for nodes using topological layering.
///
/// Algorithm:
/// 1. **Layer assignment via iterative relaxation.** Every node starts at
///    layer 0. For each connection `A -> B`, set `layer[B] = max(layer[B],
///    layer[A] + 1)`. Repeat N passes (where N is the node count) to
///    propagate layers through the longest path -- this is equivalent to the
///    Bellman-Ford longest-path approach and converges in O(N * E).
/// 2. **Position computation.** Nodes are grouped by layer. Within each layer
///    they are stacked vertically in array order. X is determined by the layer
///    index times `node_stride_x`, Y by the row index within that layer times
///    `node_stride_y`, both offset by the canvas padding.
///
/// Returns an array of `(node_id, x_px, y_px)` tuples. Returns an empty
/// array when the node list is empty.
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
  for _ in 0..<n {
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
  let max_layer = for l in layers; max_layer = 0 {
    continue if l > max_layer { l } else { max_layer }
  } nobreak {
    max_layer
  }
  let positions : Array[(Int, Int, Int)] = []
  for layer in 0..<=max_layer {
    for i in 0..<n; row = 0 {
      if layers[i] == layer {
        let x = pad_x + layer * node_stride_x
        let y = pad_y + row * node_stride_y
        positions.push((ids[i], x, y))
        continue row + 1
      } else {
        continue row
      }
    }
  }
  positions
}

///|
/// Linear search for `id` in the `ids` array. Returns the index if found, or
/// -1 if absent. The -1 sentinel is checked by callers before array access.
fn find_idx(ids : Array[Int], id : Int) -> Int {
  for i in 0..<ids.length() {
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
  for entry in layout; max_x = 600, max_y = 400 {
    let (_, x, y) = entry
    let new_x = if x + node_w + pad_x > max_x { x + node_w + pad_x } else { max_x }
    let new_y = if y + node_stride_y > max_y { y + node_stride_y } else { max_y }
    continue new_x, new_y
  } nobreak {
    (max_x, max_y)
  }
}
