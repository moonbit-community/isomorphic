///|
/// Import Excel (.xlsx) files using mbtexcel library.
/// JS FFI handles file picking; parsing runs synchronously in the browser.

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
      @js.suspend(
        fn(resolve : (Bytes) -> Unit, _reject : (@js.Error_) -> Unit) {
          pick_xlsx_file(resolve, fn(_err) {})
        },
      )
    },
  )
}

///|
/// Parse an XLSX file and replace the current model's sheets with imported data.
fn load_xlsx(model : Model, bytes : Bytes) -> Model {
  // Try parsing — on failure, return model unchanged
  let wb = try {
    @xlsx.read(bytes[:])
  } catch {
    _ => return model
  }
  let sheet_names = wb.get_sheet_list()
  if sheet_names.is_empty() {
    return model
  }
  let sheets : Array[Sheet] = []
  for name in sheet_names {
    let sheet = Sheet::new(name)
    // Get the used range dimension (e.g. "A1:H14")
    let dim = try {
      wb.get_sheet_dimension(name)
    } catch {
      _ => ""
    }
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
  let parts = split_colon(dim)
  let (min_col, min_row, max_col, max_row) = match parts {
    Some((start, end)) => {
      let s = @cell.parse_ref(start)
      let e = @cell.parse_ref(end)
      match (s, e) {
        (Some((c1, r1)), Some((c2, r2))) => (c1, r1, c2, r2)
        _ => return
      }
    }
    None => {
      // Single cell dimension
      match @cell.parse_ref(dim) {
        Some((c, r)) => (c, r, c, r)
        None => return
      }
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
      let formula = try {
        wb.get_cell_formula(sheet_name, key)
      } catch {
        _ => None
      }
      // Get raw cell value
      let raw_value = try {
        wb.get_cell_value_raw_rc(sheet_name, xlsx_row, xlsx_col)
      } catch {
        _ => None
      }
      // Determine raw string (formula takes priority)
      let raw = match formula {
        Some(f) => if f != "" { "=\{f}" } else { cell_value_to_raw(raw_value) }
        None => cell_value_to_raw(raw_value)
      }
      if raw == "" {
        continue
      }
      // Evaluate the value
      let value = @formula.evaluate(raw, fn(ref) { sheet.get(ref).value })
      // Get style info
      let (bold, italic, align, bg_color) = get_xlsx_style(wb, sheet_name, key)
      sheet.cells[key] = {
        raw, value, bold, italic, align,
        format: General, bg_color, text_color: "",
      }
    }
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
  let style_id = try {
    wb.get_cell_style(sheet_name, cell_ref)
  } catch {
    _ => None
  }
  match style_id {
    None => (false, false, Auto, "")
    Some(sid) => {
      let style = try {
        wb.get_style(sid)
      } catch {
        _ => return (false, false, Auto, "")
      }
      // Font: bold, italic
      let bold = match style.font {
        Some(f) => match f.bold { Some(b) => b; None => false }
        None => false
      }
      let italic = match style.font {
        Some(f) => match f.italic { Some(i) => i; None => false }
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
