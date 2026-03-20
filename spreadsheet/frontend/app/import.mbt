///|
/// Import/Export Excel (.xlsx) files using mbtexcel library.
/// JS FFI handles file picking and downloads; parsing runs in the browser.

///|
/// JavaScript FFI: opens a file picker dialog and reads the selected .xlsx file
/// as a Uint8Array (which maps to MoonBit Bytes on the JS target).
extern "js" fn pick_xlsx_file(
  on_success : (Bytes) -> Unit,
  on_error : (String) -> Unit,
) =
  #| (s, e) => {
  #|   const input = document.createElement('input');
  #|   input.type = 'file';
  #|   input.accept = '.xlsx,.xls';
  #|   input.onchange = (ev) => {
  #|     const file = ev.target.files[0];
  #|     if (!file) { e('No file selected'); return; }
  #|     const reader = new FileReader();
  #|     reader.onload = () => s(new Uint8Array(reader.result));
  #|     reader.onerror = () => e('Failed to read file');
  #|     reader.readAsArrayBuffer(file);
  #|   };
  #|   input.click();
  #| }

///|
/// Creates a Cmd that opens a file picker and dispatches ImportExcel(bytes)
/// when a file is selected and read.
fn import_xlsx_cmd(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @rabbita.attempt(
    fn(result) {
      match result {
        Ok(bytes) => dispatch(ImportExcel(bytes))
        Err(_) => @rabbita.none
      }
    },
    async fn() {
      @js.suspend(fn(
        resolve : (Bytes) -> Unit,
        _reject : (@js.Error_) -> Unit,
      ) {
        pick_xlsx_file(resolve, fn(_err) {  })
      })
    },
  )
}

///|
/// Parse an XLSX file and replace the current model's sheets with imported data.
fn load_xlsx(model : Model, bytes : Bytes) -> Model {
  // Try parsing — on failure, return model unchanged
  let wb = @xlsx.read(bytes[:]) catch { _ => return model }
  let sheet_names = wb.get_sheet_list()
  if sheet_names.is_empty() {
    return model
  }
  let sheets : Array[Sheet] = []
  for name in sheet_names {
    let sheet = Sheet::new(name)
    // Get the used range dimension (e.g. "A1:H14")
    let dim = wb.get_sheet_dimension(name) catch { _ => "" }
    if dim != "" {
      import_sheet_cells(wb, name, sheet, dim)
    }
    sheets.push(sheet)
  }
  // Recalculate all sheets
  for i = 0; i < sheets.length(); i = i + 1 {
    sheets[i] = recalc(sheets[i])
  }
  {
    ..model,
    sheets,
    active_sheet: 0,
    sel_col: 0,
    sel_row: 0,
    editing: false,
    edit_value: "",
    show_chart: true,
    heat_map: false,
  }
}

///|
/// Import cells from an xlsx sheet into our Sheet model.
fn import_sheet_cells(
  wb : @xlsx.Workbook,
  sheet_name : String,
  sheet : Sheet,
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
        _ => (0, 0, num_cols - 1, num_rows - 1)
      }
    }
    None =>
      match @cell.parse_ref(dim) {
        Some((c, r)) => (c, r, c, r)
        None => (0, 0, num_cols - 1, num_rows - 1)
      }
  }
  // Clamp to our grid size
  let end_col = if max_col < num_cols { max_col } else { num_cols - 1 }
  let end_row = if max_row < num_rows { max_row } else { num_rows - 1 }
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
        Some(f) => if f != "" { "=\{f}" } else { cell_value_to_raw(raw_value) }
        None => cell_value_to_raw(raw_value)
      }
      let has_align = match align {
        Auto => false
        _ => true
      }
      let has_style = bold || italic || bg_color != "" || has_align
      if raw == "" && !has_style {
        continue
      }
      // Evaluate the value; for formulas that fail, use cached xlsx value
      let value = if raw.length() > 0 && raw[0] == '=' {
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
/// Convert xlsx CellValue to our Value type (for cached formula results).
fn cell_value_to_value(cv : @xlsx.CellValue?) -> @cell.Value {
  match cv {
    None => Empty
    Some(String(s)) => Text(s)
    Some(Numeric(n)) => Num(n)
    Some(Bool(b)) => Text(if b { "TRUE" } else { "FALSE" })
    Some(Error(e)) => Error(e)
  }
}

///|
/// Convert xlsx CellValue to a raw string for our cell model.
fn cell_value_to_raw(cv : @xlsx.CellValue?) -> String {
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
/// Extract basic style info from xlsx cell.
fn get_xlsx_style(
  wb : @xlsx.Workbook,
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
              if colors.length() > 0 && colors[0] != "" {
                let c = colors[0]
                // Excel colors may be "FFRRGGBB" (8-char ARGB) — convert to #RRGGBB
                if c.length() == 8 {
                  "#\{c.substring(start=2)}"
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

// --- Export ---

///|
/// JavaScript FFI: trigger a file download in the browser.
extern "js" fn download_bytes(bytes : Bytes, filename : String) =
  #| (bytes, filename) => {
  #|   const blob = new Blob([bytes], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  #|   const url = URL.createObjectURL(blob);
  #|   const a = document.createElement('a');
  #|   a.href = url;
  #|   a.download = filename;
  #|   a.click();
  #|   URL.revokeObjectURL(url);
  #| }

///|
/// Export the current spreadsheet as an .xlsx file download.
fn export_xlsx(model : Model) -> Unit {
  let wb = @xlsx.Workbook::new()
  // Create all sheets
  for i = 0; i < model.sheets.length(); i = i + 1 {
    let sheet = model.sheets[i]
    let ws = wb.new_sheet(sheet.name) catch { _ => continue }
    export_sheet_cells(wb, ws, sheet)
  }
  // Workbook::new() creates no default sheets, so no cleanup needed
  // Write to bytes and trigger download
  let bytes = @xlsx.write(wb) catch { _ => return }
  download_bytes(bytes, "spreadsheet.xlsx")
}

///|
/// Populate an xlsx worksheet from our Sheet model.
fn export_sheet_cells(
  wb : @xlsx.Workbook,
  ws : @xlsx.Worksheet,
  sheet : Sheet,
) -> Unit {
  sheet.cells.each(fn(key, cell) {
    let has_align = match cell.align {
      Auto => false
      _ => true
    }
    let has_any = cell.raw != "" ||
      cell.bold ||
      cell.italic ||
      cell.bg_color != "" ||
      has_align
    if !has_any {
      return
    }
    // Set cell value
    let value : @xlsx.CellValue = match cell.value {
      Num(n) => Numeric(n)
      Text(s) => String(s)
      Error(e) => Error(e)
      Empty => String(cell.raw)
    }
    ws.set_cell_value(key, value) catch {
      _ => ()
    }
    // Set formula (strip leading '=', normalize AVG→AVERAGE for Excel)
    if cell.raw.length() > 0 && cell.raw[0] == '=' {
      let formula = normalize_formula(cell.raw.substring(start=1))
      ws.set_cell_formula(key, formula) catch {
        _ => ()
      }
    }
    // Apply style
    let has_align = match cell.align {
      Auto => false
      _ => true
    }
    let has_style = cell.bold || cell.italic || cell.bg_color != "" || has_align
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
/// Build an xlsx Style from our Cell formatting.
fn build_xlsx_style(cell : @cell.Cell) -> @xlsx.Style {
  let mut style = @xlsx.Style::new()
  // Font
  if cell.bold || cell.italic {
    let font = @xlsx.Font::with_values(bold=cell.bold, italic=cell.italic)
    style = style.with_font(font)
  }
  // Alignment
  match cell.align {
    Left =>
      style = style.with_alignment(
        @xlsx.Alignment::with_values(horizontal="left"),
      )
    Center =>
      style = style.with_alignment(
        @xlsx.Alignment::with_values(horizontal="center"),
      )
    Right =>
      style = style.with_alignment(
        @xlsx.Alignment::with_values(horizontal="right"),
      )
    Auto => ()
  }
  // Fill color
  if cell.bg_color != "" {
    // Convert "#RRGGBB" to "FFRRGGBB"
    let color = if cell.bg_color.length() == 7 && cell.bg_color[0] == '#' {
      "FF\{cell.bg_color.substring(start=1)}"
    } else {
      cell.bg_color
    }
    style = style.with_fill(@xlsx.Fill::pattern(color~))
  }
  style
}

///|
/// Normalize formula aliases for Excel compatibility (e.g. AVG→AVERAGE).
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
/// Split a string on ':' into two parts.
fn split_colon(s : String) -> (String, String)? {
  let chars = s.to_array()
  for i = 0; i < chars.length(); i = i + 1 {
    if chars[i] == ':' {
      let left = s.substring(end=i)
      let right = s.substring(start=i + 1)
      return Some((left, right))
    }
  }
  None
}
