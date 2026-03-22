///|
/// Import/Export Excel (.xlsx) files using the mbtexcel library.
///
/// Provides pure-logic functions for converting between xlsx bytes and
/// the internal Sheet model, without any browser/JS FFI dependencies.

///|
/// Parse an XLSX file from raw bytes and return the imported sheets.
///
/// Each sheet in the workbook becomes a `Sheet`. Cell values,
/// formulas, and styles (bold, italic, alignment, background color) are
/// imported. After importing, all sheets are recalculated so that formula
/// dependencies are resolved.
///
/// If parsing fails or the workbook is empty, returns an empty array.
pub fn load_sheets(bytes : Bytes) -> Array[@sheet.Sheet] {
  let wb = @mbtexcel_xlsx.read(bytes[:]) catch { _ => return [] }
  let sheet_names = wb.get_sheet_list()
  if sheet_names.is_empty() {
    return []
  }
  let sheets : Array[@sheet.Sheet] = []
  for name in sheet_names {
    let sheet = @sheet.Sheet(name)
    // Get the used range dimension (e.g. "A1:H14")
    let dim = wb.get_sheet_dimension(name) catch { _ => "" }
    if !dim.is_empty() {
      import_sheet_cells(wb, name, sheet, dim)
    }
    sheets.push(sheet)
  }
  // Recalculate all sheets
  for i in 0..<sheets.length() {
    sheets[i] = sheets[i].recalc()
  }
  sheets
}

///|
/// Export sheets as xlsx bytes.
///
/// Creates a new `@mbtexcel_xlsx.Workbook`, populates it with all sheets (cell values,
/// formulas, and styles), and serializes to bytes. Returns `None` on failure.
pub fn write_sheets(sheets : Array[@sheet.Sheet], _filename : String) -> Bytes? {
  let wb = @mbtexcel_xlsx.Workbook::new()
  for sheet in sheets {
    let ws = wb.new_sheet(sheet.name) catch { _ => continue }
    export_sheet_cells(wb, ws, sheet)
  }
  let bytes = @mbtexcel_xlsx.write(wb) catch { _ => return None }
  Some(bytes)
}

///|
/// Import cells from a single xlsx worksheet into the corresponding Sheet model.
///
/// The `dim` parameter is the used-range dimension string (e.g. `"A1:H14"`)
/// from the xlsx file. The function iterates over every cell in that range,
/// clamped to the grid size (`@sheet.num_cols` x `@sheet.num_rows`):
///
///   1. Reads the cell formula (if any) and raw value from the workbook.
///   2. Reads style properties (bold, italic, alignment, background color).
///   3. Formulas take priority over raw values for the `raw` field.
///   4. Evaluates the cell; if a formula fails to evaluate, falls back to
///      the cached xlsx value so that imported data is still visible.
fn import_sheet_cells(
  wb : @mbtexcel_xlsx.Workbook,
  sheet_name : String,
  sheet : @sheet.Sheet,
  dim : String,
) -> Unit {
  // Parse dimension like "A1:H14" to get bounds
  // Falls back to full grid (0,0 to Z,29) if parse fails (e.g. multi-letter cols like AA)
  let parts = split_colon(dim)
  let (min_col, min_row, max_col, max_row) = match parts {
    Some((start, end)) => {
      let s = @cell.parse_ref(start)
      let e = @cell.parse_ref(end)
      match (s, e) {
        (Some((c1, r1)), Some((c2, r2))) => (c1, r1, c2, r2)
        _ => (0, 0, @sheet.num_cols - 1, @sheet.num_rows - 1)
      }
    }
    None =>
      match @cell.parse_ref(dim) {
        Some((c, r)) => (c, r, c, r)
        None => (0, 0, @sheet.num_cols - 1, @sheet.num_rows - 1)
      }
  }
  // Clamp to our grid size
  let end_col = if max_col < @sheet.num_cols {
    max_col
  } else {
    @sheet.num_cols - 1
  }
  let end_row = if max_row < @sheet.num_rows {
    max_row
  } else {
    @sheet.num_rows - 1
  }
  for r = min_row; r <= end_row; r = r + 1 {
    for c = min_col; c <= end_col; c = c + 1 {
      let key = @cell.make_key(c, r)
      // xlsx uses 1-indexed (row, col)
      let xlsx_row = r + 1
      let xlsx_col = c + 1
      // Get formula first
      let formula = wb.get_cell_formula(sheet_name, key) catch { _ => None }
      // Get raw cell value
      let raw_value = wb.get_cell_value_raw_rc(sheet_name, xlsx_row, xlsx_col) catch {
        _ => None
      }
      // Get style info (even for empty cells that may have formatting)
      let (bold, italic, align, bg_color) = get_xlsx_style(wb, sheet_name, key)
      // Determine raw string (formula takes priority)
      let raw = match formula {
        Some(f) =>
          if !f.is_empty() {
            "=\{f}"
          } else {
            cell_value_to_raw(raw_value)
          }
        None => cell_value_to_raw(raw_value)
      }
      let has_align = match align {
        Auto => false
        _ => true
      }
      let has_style = bold || italic || !bg_color.is_empty() || has_align
      if raw.is_empty() && !has_style {
        continue
      }
      // Evaluate the value; for formulas that fail, use cached xlsx value
      let value = if !raw.is_empty() && raw[0] == '=' {
        let evaluated = @formula.evaluate(raw, fn(r) { sheet.get(r).value })
        match evaluated {
          Error(_) => cell_value_to_value(raw_value) // fall back to cached result
          _ => evaluated
        }
      } else {
        @formula.evaluate(raw, fn(r) { sheet.get(r).value })
      }
      sheet.cells[key] = {
        raw,
        value,
        bold,
        italic,
        align,
        format: General,
        bg_color,
        text_color: "",
      }
    }
  }
}

///|
/// Convert an xlsx `CellValue` to our internal `Value` type.
///
/// Used as a fallback when a formula cannot be re-evaluated: the cached
/// result from the xlsx file is used instead. Boolean values are converted
/// to the text strings `"TRUE"` / `"FALSE"`.
fn cell_value_to_value(cv : @mbtexcel_xlsx.CellValue?) -> @cell.Value {
  match cv {
    None => Empty
    Some(String(s)) => Text(s)
    Some(Numeric(n)) => Num(n)
    Some(Bool(b)) => Text(if b { "TRUE" } else { "FALSE" })
    Some(Error(e)) => Error(e)
  }
}

///|
/// Convert an xlsx `CellValue` to a raw input string suitable for the `Cell.raw`
/// field. Numeric values are formatted as integers when possible to avoid
/// unnecessary decimals. `None` maps to the empty string.
fn cell_value_to_raw(cv : @mbtexcel_xlsx.CellValue?) -> String {
  match cv {
    None => ""
    Some(String(s)) => s
    Some(Numeric(n)) => {
      let i = n.to_int()
      if i.to_double() == n {
        i.to_string()
      } else {
        n.to_string()
      }
    }
    Some(Bool(b)) => if b { "TRUE" } else { "FALSE" }
    Some(Error(e)) => e
  }
}

///|
/// Extract basic style properties from an xlsx cell's style definition.
///
/// Returns a tuple of `(bold, italic, align, bg_color)`. The function
/// navigates the xlsx style hierarchy: cell -> style ID -> Style object,
/// extracting font properties, horizontal alignment, and fill pattern color.
///
/// Excel uses 8-character ARGB color strings (`"FFRRGGBB"`); these are
/// converted to CSS-compatible 7-character hex (`"#RRGGBB"`) by stripping
/// the alpha channel prefix.
fn get_xlsx_style(
  wb : @mbtexcel_xlsx.Workbook,
  sheet_name : String,
  cell_ref : String,
) -> (Bool, Bool, @cell.Align, String) {
  let style_id = wb.get_cell_style(sheet_name, cell_ref) catch { _ => None }
  match style_id {
    None => (false, false, Auto, "")
    Some(sid) => {
      let style = wb.get_style(sid) catch {
        _ => return (false, false, Auto, "")
      }
      // Font: bold, italic
      let bold = match style.font {
        Some(f) =>
          match f.bold {
            Some(b) => b
            None => false
          }
        None => false
      }
      let italic = match style.font {
        Some(f) =>
          match f.italic {
            Some(i) => i
            None => false
          }
        None => false
      }
      // Alignment
      let align : @cell.Align = match style.alignment {
        Some(a) =>
          match a.horizontal {
            Some("left") => Left
            Some("center") => Center
            Some("right") => Right
            _ => Auto
          }
        None => Auto
      }
      // Fill color
      let bg_color = match style.fill {
        Some(f) =>
          match f.colors {
            Some(colors) =>
              if !colors.is_empty() && !colors[0].is_empty() {
                let c = colors[0]
                // Excel colors may be "FFRRGGBB" (8-char ARGB) — convert to #RRGGBB
                if c.length() == 8 {
                  "#\{c[2:].to_string()}"
                } else if c.length() == 6 {
                  "#\{c}"
                } else {
                  ""
                }
              } else {
                ""
              }
            None => ""
          }
        None => ""
      }
      (bold, italic, align, bg_color)
    }
  }
}

///|
/// Populate an xlsx worksheet from a Sheet model.
///
/// For each non-empty cell:
///   1. Sets the cell value (numeric, string, or error).
///   2. If the cell's `raw` starts with `=`, writes the formula (with the
///      leading `=` stripped and `AVG` normalized to `AVERAGE` for Excel
///      compatibility).
///   3. If the cell has any styling (bold, italic, alignment, or background
///      color), creates an xlsx `Style` and applies it.
fn export_sheet_cells(
  wb : @mbtexcel_xlsx.Workbook,
  ws : @mbtexcel_xlsx.Worksheet,
  sheet : @sheet.Sheet,
) -> Unit {
  sheet.cells.each(fn(key, cell) {
    let has_align = match cell.align {
      Auto => false
      _ => true
    }
    let has_any = !cell.raw.is_empty() ||
      cell.bold ||
      cell.italic ||
      !cell.bg_color.is_empty() ||
      has_align
    if !has_any {
      return
    }
    // Set cell value
    let value : @mbtexcel_xlsx.CellValue = match cell.value {
      Num(n) => Numeric(n)
      Text(s) => String(s)
      Error(e) => Error(e)
      Empty => String(cell.raw)
    }
    ws.set_cell_value(key, value) catch {
      _ => ()
    }
    // Set formula (strip leading '=', normalize AVG->AVERAGE for Excel)
    match cell.raw.strip_prefix("=") {
      Some(rest) => {
        let formula = normalize_formula(rest.to_string())
        ws.set_cell_formula(key, formula) catch {
          _ => ()
        }
      }
      None => ()
    }
    // Apply style
    let has_align = match cell.align {
      Auto => false
      _ => true
    }
    let has_style = cell.bold ||
      cell.italic ||
      !cell.bg_color.is_empty() ||
      has_align
    if has_style {
      let style = build_xlsx_style(cell)
      let style_id = wb.new_style(style)
      ws.set_cell_style(key, style_id) catch {
        _ => ()
      }
    }
  })
}

///|
/// Build an xlsx `Style` object from a cell's formatting properties.
///
/// Maps our internal styling model to the xlsx library's style representation:
///   - `bold` / `italic` -> `@mbtexcel_xlsx.Font`
///   - `align` (Left/Center/Right) -> `@mbtexcel_xlsx.Alignment`
///   - `bg_color` (`"#RRGGBB"`) -> `@mbtexcel_xlsx.Fill` with `"FFRRGGBB"` ARGB color
fn build_xlsx_style(cell : @cell.Cell) -> @mbtexcel_xlsx.Style {
  let style = @mbtexcel_xlsx.Style::new()
  // Font
  let style = if cell.bold || cell.italic {
    let font = @mbtexcel_xlsx.Font::with_values(bold=cell.bold, italic=cell.italic)
    style.with_font(font)
  } else {
    style
  }
  // Alignment
  let style = match cell.align {
    Left =>
      style.with_alignment(@mbtexcel_xlsx.Alignment::with_values(horizontal="left"))
    Center =>
      style.with_alignment(@mbtexcel_xlsx.Alignment::with_values(horizontal="center"))
    Right =>
      style.with_alignment(@mbtexcel_xlsx.Alignment::with_values(horizontal="right"))
    Auto => style
  }
  // Fill color
  if !cell.bg_color.is_empty() {
    // Convert "#RRGGBB" to "FFRRGGBB"
    let color = if cell.bg_color.length() == 7 && cell.bg_color[0] == '#' {
      "FF\{cell.bg_color[1:].to_string()}"
    } else {
      cell.bg_color
    }
    style.with_fill(@mbtexcel_xlsx.Fill::pattern(color~))
  } else {
    style
  }
}

///|
/// Normalize formula text for Excel compatibility before export.
///
/// Currently handles one transformation: standalone `AVG(` is replaced with
/// `AVERAGE(` (the standard Excel function name). The replacement is only
/// performed outside double-quoted string literals and only when `AVG` is
/// not preceded by another uppercase letter (to avoid mangling names like
/// `NAVG`).
fn normalize_formula(formula : String) -> String {
  let sb = StringBuilder::new()
  let chars = formula.to_array()
  let len = chars.length()
  let mut i = 0
  let mut in_string = false
  while i < len {
    // Track string literal state
    if chars[i] == '"' {
      in_string = !in_string
    }
    // Only replace AVG( outside string literals
    if !in_string &&
      i + 4 <= len &&
      chars[i] == 'A' &&
      chars[i + 1] == 'V' &&
      chars[i + 2] == 'G' &&
      chars[i + 3] == '(' {
      let preceded_by_letter = i > 0 &&
        chars[i - 1] >= 'A' &&
        chars[i - 1] <= 'Z'
      if !preceded_by_letter {
        sb.write_string("AVERAGE(")
        i = i + 4
        continue
      }
    }
    sb.write_char(chars[i])
    i = i + 1
  }
  sb.to_string()
}

///|
/// Split a string on the first `:` into two parts. Returns `None` if no colon
/// is present. Used to parse dimension strings like `"A1:H14"`.
fn split_colon(s : String) -> (String, String)? {
  match s.split_once(":") {
    Some((left, right)) => Some((left.to_string(), right.to_string()))
    None => None
  }
}
