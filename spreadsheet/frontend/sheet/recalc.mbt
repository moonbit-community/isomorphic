///|
/// Recalculate all formula cells in a sheet.
///
/// Uses a simple multi-pass convergence strategy: copy all cells, then iterate
/// three times, re-evaluating every formula cell on each pass. This handles
/// dependency chains up to three levels deep without needing an explicit
/// topological sort. Each pass reads the latest computed values from previous
/// iterations.
///
/// If re-evaluation of a formula produces an `Error` but the cell already holds
/// a non-`Empty` value (e.g. a cached xlsx result), the existing value is
/// preserved. This ensures imported data remains visible even when our formula
/// engine does not support every Excel function.
pub fn Sheet::recalc(self : Sheet) -> Sheet {
  let new_cells : Map[String, @cell.Cell] = self.cells.copy() // shallow copy of cell references

  // Second pass: evaluate formulas
  // We do multiple passes to handle dependencies (simple convergence)
  for _ in 0..<3 {
    self.cells.each(fn(k, c) {
      if c.raw is ['=', ..] { // formula cell
        let value = @formula.evaluate(c.raw, fn(r) {
          let cell = match new_cells.get(r) {
            Some(c) => c
            None => Cell()
          }
          cell.value
        })
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
    })
  }
  { ..self, cells: new_cells }
}
