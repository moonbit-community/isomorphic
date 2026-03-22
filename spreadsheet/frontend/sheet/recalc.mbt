///|
/// Recalculate all formula cells in a sheet using topological sort.
///
/// Builds a dependency graph from all formula cells using
/// `@formula.extract_references`, then performs a topological sort (Kahn's
/// algorithm) to determine the correct evaluation order. Cells are evaluated
/// in a single pass in dependency order, which correctly handles chains of
/// any depth.
///
/// Circular references are detected and marked as `Error("CIRCULAR")`.
///
/// If re-evaluation of a formula produces an `Error` but the cell already holds
/// a non-`Empty` value (e.g. a cached xlsx result), the existing value is
/// preserved. This ensures imported data remains visible even when our formula
/// engine does not support every Excel function.
pub fn Sheet::recalc(self : Sheet) -> Sheet {
  let new_cells : Map[String, @cell.Cell] = self.cells.copy()

  // Phase 1: Identify all formula cells and build dependency graph
  // deps[k] = array of cell keys that cell k depends on
  let deps : Map[String, Array[String]] = {}
  // in_degree[k] = number of unresolved dependencies for formula cell k
  let in_degree : Map[String, Int] = {}
  // reverse_deps[k] = array of formula cells that depend on k
  let reverse_deps : Map[String, Array[String]] = {}
  // Track which cells are formula cells
  let is_formula : Map[String, Bool] = {}

  for k, c in self.cells {
    if c.raw is ['=', ..] {
      is_formula[k] = true
      let refs = @formula.extract_references(c.raw)
      deps[k] = refs
      in_degree[k] = refs.length()
      // Build reverse dependency map
      for r in refs {
        match reverse_deps.get(r) {
          Some(arr) => arr.push(k)
          None => reverse_deps[r] = [k]
        }
      }
    }
  }

  // Phase 2: Kahn's algorithm — topological sort
  // Initialize queue with formula cells that have no dependencies (in_degree == 0)
  // and also consider non-formula cells as already "resolved"
  let queue : Array[String] = []

  // First, enqueue all non-formula cells that have dependents.
  // These are already resolved (their values are in new_cells).
  // We need to process them to decrement in_degree of their dependents.
  let resolved : Map[String, Bool] = {}

  // Seed: all non-formula cells that appear as dependencies
  for k, _ in reverse_deps {
    if !(is_formula.get(k).unwrap_or(false)) {
      queue.push(k)
      resolved[k] = true
    }
  }

  // Also enqueue formula cells with in_degree == 0
  for k, deg in in_degree {
    if deg == 0 {
      queue.push(k)
    }
  }

  // Evaluation order for formula cells
  let eval_order : Array[String] = []

  while queue.length() > 0 {
    let node = queue.remove(0)
    // If this is a formula cell, add it to eval order
    if is_formula.get(node).unwrap_or(false) {
      eval_order.push(node)
    }
    // Process all dependents
    match reverse_deps.get(node) {
      Some(dependents) =>
        for dep in dependents {
          match in_degree.get(dep) {
            Some(d) => {
              let new_d = d - 1
              in_degree[dep] = new_d
              if new_d == 0 {
                queue.push(dep)
              }
            }
            None => ()
          }
        }
      None => ()
    }
  }

  // Phase 3: Evaluate formula cells in topological order
  for k in eval_order {
    match self.cells.get(k) {
      Some(c) => {
        let value = @formula.evaluate(c.raw) <| fn(r) {
          new_cells.get_or_default(r, Cell()).value
        }
        // Keep existing value if re-evaluation fails (preserves cached xlsx results)
        let final_value = match value {
          Error(_) =>
            match c.value {
              Empty => value
              _ => c.value
            }
          _ => value
        }
        new_cells[k] = { ..c, value: final_value }
      }
      None => ()
    }
  }

  // Phase 4: Handle unresolved formula cells (in_degree > 0)
  // These are either part of a cycle or downstream of one.
  // First, identify actual cycle members by checking if they transitively
  // depend on themselves. Then mark cycle members as CIRCULAR and evaluate
  // downstream cells normally (they'll see Error values from circular deps).
  let unresolved : Array[String] = []
  for k, _ in is_formula {
    match in_degree.get(k) {
      Some(d) => if d > 0 { unresolved.push(k) }
      None => ()
    }
  }

  // Find actual cycle members: a cell is in a cycle if following its
  // dependencies (restricted to unresolved cells) leads back to itself
  let unresolved_set : Map[String, Bool] = {}
  for k in unresolved {
    unresolved_set[k] = true
  }

  // Mark cycle members: cells whose dependencies are all within the unresolved
  // set AND form a cycle. Use iterative reachability from each unresolved cell.
  let is_cycle_member : Map[String, Bool] = {}
  for start in unresolved {
    // BFS/DFS from start, following only unresolved deps
    let visited : Map[String, Bool] = {}
    let stack : Array[String] = [start]
    let mut found_cycle = false
    while stack.length() > 0 {
      let node = stack.unsafe_pop()
      match deps.get(node) {
        Some(node_deps) =>
          for dep in node_deps {
            if dep == start {
              found_cycle = true
              break
            }
            if unresolved_set.get(dep).unwrap_or(false) &&
              !(visited.get(dep).unwrap_or(false)) {
              visited[dep] = true
              stack.push(dep)
            }
          }
        None => ()
      }
    }
    if found_cycle {
      is_cycle_member[start] = true
    }
  }

  // Mark cycle members as CIRCULAR
  for k, _ in is_cycle_member {
    match self.cells.get(k) {
      Some(c) => new_cells[k] = { ..c, value: Error("CIRCULAR") }
      None => ()
    }
  }

  // Evaluate non-cycle unresolved cells (downstream of cycles)
  // They'll see CIRCULAR errors from their dependencies via lookup
  for k in unresolved {
    if !(is_cycle_member.get(k).unwrap_or(false)) {
      match self.cells.get(k) {
        Some(c) => {
          let value = @formula.evaluate(c.raw) <| fn(r) {
            new_cells.get_or_default(r, Cell()).value
          }
          let final_value = match value {
            Error(_) =>
              match c.value {
                Empty => value
                _ => c.value
              }
            _ => value
          }
          new_cells[k] = { ..c, value: final_value }
        }
        None => ()
      }
    }
  }

  self.clone(cells=new_cells)
}
