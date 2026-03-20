///|
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(
    style=[
      "font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      "height: 100vh", "display: flex", "flex-direction: column",
      "background: #f8f9fa", "user-select: none", "color: #202124",
    ],
    [
      self.view_toolbar(dispatch),
      self.view_formula_bar(dispatch),
      if self.show_chart {
        @html.div(
          style=[
            "display: flex", "justify-content: center", "gap: 24px",
            "padding: 12px 16px", "align-items: flex-start",
            "background: #f8f9fa", "border-bottom: 1px solid #dadce0",
            "animation: chartSlideIn 0.4s ease-out",
          ],
          [self.view_chart(), self.view_donut_chart()],
        )
      } else {
        @html.span("")
      },
      self.view_grid(dispatch),
      self.view_sheet_tabs(dispatch),
      self.view_status_bar(),
    ],
  )
}

// --- Toolbar ---

///|
fn Model::view_toolbar(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let cell = self.selected_cell()
  let is_left = match cell.align {
    Left => true
    _ => false
  }
  let is_center = match cell.align {
    Center => true
    _ => false
  }
  let is_right = match cell.align {
    Right => true
    _ => false
  }
  let is_currency = match cell.format {
    Currency => true
    _ => false
  }
  let is_percent = match cell.format {
    Percent => true
    _ => false
  }
  @html.div(
    style=[
      "display: flex", "align-items: center", "gap: 2px", "padding: 6px 12px",
      "background: linear-gradient(180deg, #f9fbfd 0%, #eef1f5 100%)",
      "border-bottom: 1px solid #dadce0",
      "min-height: 44px", "flex-wrap: wrap",
    ],
    [
      // App icon + title
      @html.div(
        style=[
          "display: flex", "align-items: center", "gap: 8px",
          "margin-right: 16px",
        ],
        [
          @html.div(
            style=[
              "width: 28px", "height: 28px", "border-radius: 4px",
              "background: linear-gradient(135deg, #0f9d58 0%, #34a853 100%)",
              "display: flex", "align-items: center", "justify-content: center",
              "color: white", "font-weight: 600", "font-size: 14px",
              "box-shadow: 0 1px 3px rgba(15, 157, 88, 0.3)",
            ],
            "\u{229E}",
          ),
          @html.span(
            style=[
              "font-weight: 600", "font-size: 15px", "color: #202124",
              "letter-spacing: -0.3px",
            ],
            "MoonBit Sheets",
          ),
        ],
      ),
      view_separator(),
      // --- Font style group ---
      toolbar_button("B", cell.bold, "font-weight:700;font-size:13px;font-family:serif", dispatch(ToggleBold)),
      toolbar_button("I", cell.italic, "font-style:italic;font-size:13px;font-family:serif", dispatch(ToggleItalic)),
      view_separator(),
      // --- Alignment group ---
      toolbar_button("\u{2261}", is_left, "font-size:14px", dispatch(SetAlign(@cell.Align::Left))),
      toolbar_button("\u{2263}", is_center, "font-size:14px", dispatch(SetAlign(@cell.Align::Center))),
      toolbar_button("\u{2262}", is_right, "font-size:14px", dispatch(SetAlign(@cell.Align::Right))),
      view_separator(),
      // --- Number format group ---
      toolbar_button("$", is_currency, "font-size:13px;font-weight:500", dispatch(SetFormat(@cell.NumFormat::Currency))),
      toolbar_button("%", is_percent, "font-size:13px;font-weight:500", dispatch(SetFormat(@cell.NumFormat::Percent))),
      view_separator(),
      // --- Color group ---
      view_color_palette(cell.bg_color, dispatch),
      view_separator(),
      // --- Heat map toggle ---
      toolbar_button("\u{2593}", self.heat_map, "font-size:14px", dispatch(ToggleHeatMap)),
      // --- Chart toggle ---
      toolbar_button("\u{2584}", self.show_chart, "font-size:14px", dispatch(ToggleChart)),
      view_separator(),
      // --- Import ---
      toolbar_button_text("Import", false, dispatch(RequestImport)),
      // --- Clear ---
      toolbar_button_text("Clear", false, dispatch(ClearCell)),
    ],
  )
}

///|
fn view_separator() -> @rabbita.Html {
  @html.div(
    style=[
      "width: 1px", "height: 24px", "background: #dadce0", "margin: 0 6px",
    ],
    "",
  )
}

///|
fn toolbar_button(
  label : String,
  active : Bool,
  extra_style : String,
  action : @rabbita.Cmd,
) -> @rabbita.Html {
  let bg = if active {
    "background: #d2e3fc; border-color: #a8c7fa"
  } else {
    "background: transparent; border-color: transparent"
  }
  @html.button(
    style=[
      "width: 32px", "height: 32px", "display: flex", "align-items: center",
      "justify-content: center", "border-radius: 4px", "cursor: pointer",
      "border: 1px solid transparent", "transition: all 0.15s ease",
      bg, extra_style,
    ],
    on_click=action,
    label,
  )
}

///|
fn toolbar_button_text(
  label : String,
  _active : Bool,
  action : @rabbita.Cmd,
) -> @rabbita.Html {
  @html.button(
    style=[
      "height: 32px", "padding: 0 12px", "display: flex", "align-items: center",
      "justify-content: center", "border-radius: 4px", "cursor: pointer",
      "border: 1px solid transparent", "transition: all 0.15s ease",
      "background: transparent", "font-size: 12px", "color: #444746",
      "font-weight: 500",
    ],
    on_click=action,
    label,
  )
}

///|
fn view_color_palette(
  current_bg : String,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let colors = [
    "",        // default (no color)
    "#fce4ec", // pink
    "#fff3e0", // orange
    "#fffde7", // yellow
    "#e8f5e9", // green
    "#e3f2fd", // blue
    "#ede7f6", // purple
    "#f3e5f5", // magenta
    "#efebe9", // brown
    "#e0e0e0", // gray
  ]
  let swatches : Array[@rabbita.Html] = []
  for c in colors {
    let swatch_bg = if c == "" { "#fff" } else { c }
    let is_active = c == current_bg
    let border = if is_active {
      "2px solid #1a73e8"
    } else {
      "1px solid #dadce0"
    }
    let color = c
    swatches.push(
      @html.div(
        style=[
          "width: 18px", "height: 18px", "border-radius: 3px",
          "background: \{swatch_bg}", "border: \{border}", "cursor: pointer",
          "transition: transform 0.1s ease",
        ],
        on_click=dispatch(SetBgColor(color)),
        "",
      ),
    )
  }
  @html.div(
    style=[
      "display: flex", "align-items: center", "gap: 3px",
    ],
    swatches,
  )
}

// --- Formula Bar ---

///|
fn Model::view_formula_bar(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let cell_name = @cell.make_key(self.sel_col, self.sel_row)
  let cell = self.selected_cell()
  let display_value = if self.editing { self.edit_value } else { cell.raw }
  @html.div(
    style=[
      "display: flex", "align-items: center", "padding: 4px 8px",
      "background: #fff", "border-bottom: 1px solid #e0e0e0",
      "min-height: 36px",
    ],
    [
      // Cell name box
      @html.div(
        style=[
          "min-width: 64px", "height: 28px", "text-align: center",
          "font-weight: 500", "font-size: 13px", "color: #202124",
          "border: 1px solid #dadce0", "border-radius: 4px",
          "display: flex", "align-items: center", "justify-content: center",
          "margin-right: 8px", "background: #f8f9fa",
          "padding: 0 8px",
        ],
        cell_name,
      ),
      // fx icon
      @html.span(
        style=[
          "font-size: 13px", "color: #70757a", "margin-right: 8px",
          "font-style: italic", "font-weight: 500",
        ],
        "fx",
      ),
      // Formula input
      @html.input(
        input_type=Text,
        style=[
          "flex: 1", "border: 1px solid #dadce0", "padding: 4px 10px",
          "font-size: 13px", "font-family: 'Google Sans Mono', 'Roboto Mono', monospace",
          "border-radius: 4px", "height: 28px", "color: #202124",
          "transition: border-color 0.15s ease",
        ],
        value=display_value,
        on_input=(value) => dispatch(UpdateEdit(value)),
        on_change=(_value) => dispatch(CommitEdit),
        "",
      ),
    ],
  )
}

// --- Heat Map ---

///|
/// Compute heat map color for a numeric value in range [min_val, max_val].
/// Gradient: blue (#4285f4) → yellow (#fbbc04) → red (#ea4335)
fn heat_color(value : Double, min_val : Double, max_val : Double) -> String {
  if max_val <= min_val {
    return ""
  }
  let t = (value - min_val) / (max_val - min_val) // 0.0 to 1.0
  // Blue (#4285f4) → Yellow (#fbbc04) → Red (#ea4335)
  let rgb : (Int, Int, Int) = if t < 0.5 {
    let s = t * 2.0
    (
      (66.0 + (251.0 - 66.0) * s + 0.5).to_int(),
      (133.0 + (188.0 - 133.0) * s + 0.5).to_int(),
      (244.0 + (4.0 - 244.0) * s + 0.5).to_int(),
    )
  } else {
    let s = (t - 0.5) * 2.0
    (
      (251.0 + (234.0 - 251.0) * s + 0.5).to_int(),
      (188.0 + (67.0 - 188.0) * s + 0.5).to_int(),
      (4.0 + (53.0 - 4.0) * s + 0.5).to_int(),
    )
  }
  let (r, g, b) = rgb
  fn to_hex(n : Int) -> String {
    let clamped = if n < 0 { 0 } else if n > 255 { 255 } else { n }
    let hi = clamped / 16
    let lo = clamped % 16
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
        _ => "f"
      }
    }
    "\{hex_digit(hi)}\{hex_digit(lo)}"
  }
  "#\{to_hex(r)}\{to_hex(g)}\{to_hex(b)}30" // 30 = ~19% alpha for subtle overlay
}

///|
/// Collect min/max values from revenue cells (B2:E6, B8:E8) for heat map scaling.
fn collect_heat_range(sheet : Sheet) -> (Double, Double) {
  let mut min_val = 1.0e18
  let mut max_val = -1.0e18
  // Revenue data: rows 1-5 (B2:E6), totals row 7 (B8:E8)
  let rows = [1, 2, 3, 4, 5, 7]
  for r in rows {
    for c = 1; c <= 4; c = c + 1 {
      let key = @cell.make_key(c, r)
      let cell = sheet.get(key)
      match cell.value {
        Num(n) => {
          if n < min_val { min_val = n }
          if n > max_val { max_val = n }
        }
        _ => ()
      }
    }
  }
  (min_val, max_val)
}

///|
/// Check if a cell position is in the heat map region (B2:E6 or B8:E8).
fn is_heat_cell(col : Int, row : Int) -> Bool {
  col >= 1 && col <= 4 && ((row >= 1 && row <= 5) || row == 7)
}

// --- Grid ---

///|
fn resolve_align(cell : @cell.Cell) -> String {
  match cell.align {
    Auto =>
      match cell.value {
        Num(_) => "flex-end"
        _ => "flex-start"
      }
    Left => "flex-start"
    Center => "center"
    Right => "flex-end"
  }
}

///|
fn Model::view_grid(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let sheet = self.current_sheet()
  let is_sales = sheet.name == "Sales Dashboard"
  let heat_range = if self.heat_map && is_sales {
    Some(collect_heat_range(sheet))
  } else {
    None
  }
  // Formula highlighting: use edit_value when editing, raw otherwise
  let sel_cell = self.selected_cell()
  let formula_src = if self.editing { self.edit_value } else { sel_cell.raw }
  let highlighted_refs : Map[String, Bool] = {}
  if formula_src.length() > 0 && formula_src[0] == '=' {
    let refs = @formula.extract_references(formula_src)
    for cell_ref in refs {
      highlighted_refs[cell_ref] = true
    }
  }
  let col_w = "100px"
  let row_h = "28px"
  let header_w = "46px"
  let cols_template = "\{header_w} " + Array::make(num_cols, col_w).join(" ")
  let rows : Array[@rabbita.Html] = []

  // Column headers row
  let header_cells : Array[@rabbita.Html] = []
  header_cells.push(
    @html.div(
      style=[
        "background: #f8f9fa", "border-bottom: 1px solid #c7c7c7",
        "border-right: 1px solid #c7c7c7", "display: flex",
        "align-items: center", "justify-content: center",
        "position: sticky", "left: 0", "z-index: 3",
      ],
      "",
    ),
  )
  for c = 0; c < num_cols; c = c + 1 {
    let is_sel_col = c == self.sel_col
    let bg = if is_sel_col {
      "#d3e3fd"
    } else {
      "#f8f9fa"
    }
    let fw = if is_sel_col { "600" } else { "500" }
    let color = if is_sel_col { "#1a73e8" } else { "#444746" }
    header_cells.push(
      @html.div(
        style=[
          "background: \{bg}", "border-bottom: 1px solid #c7c7c7",
          "border-right: 1px solid #e0e0e0", "display: flex",
          "align-items: center", "justify-content: center",
          "font-size: 12px", "font-weight: \{fw}", "color: \{color}",
          "transition: background 0.1s ease",
        ],
        @cell.col_to_letter(c),
      ),
    )
  }
  rows.push(
    @html.div(
      style=[
        "display: grid", "grid-template-columns: \{cols_template}",
        "height: \{row_h}", "position: sticky", "top: 0", "z-index: 2",
      ],
      header_cells,
    ),
  )

  // Data rows
  for r = 0; r < num_rows; r = r + 1 {
    let row_cells : Array[@rabbita.Html] = []
    let is_sel_row = r == self.sel_row
    let row_bg = if is_sel_row { "#d3e3fd" } else { "#f8f9fa" }
    let row_fw = if is_sel_row { "600" } else { "400" }
    let row_color = if is_sel_row { "#1a73e8" } else { "#444746" }
    // Row header
    row_cells.push(
      @html.div(
        style=[
          "background: \{row_bg}", "border-right: 1px solid #c7c7c7",
          "border-bottom: 1px solid #e0e0e0", "display: flex",
          "align-items: center", "justify-content: center",
          "font-size: 12px", "color: \{row_color}", "font-weight: \{row_fw}",
          "position: sticky", "left: 0", "z-index: 1",
          "transition: background 0.1s ease",
        ],
        (r + 1).to_string(),
      ),
    )
    // Data cells
    for c = 0; c < num_cols; c = c + 1 {
      let key = @cell.make_key(c, r)
      let cell = sheet.get(key)
      let is_selected = c == self.sel_col && r == self.sel_row
      let is_editing = is_selected && self.editing
      let col = c
      let row = r
      if is_editing {
        row_cells.push(
          @html.input(
            input_type=Text,
            style=[
              "border: 2px solid #1a73e8", "outline: none", "padding: 0 6px",
              "font-size: 13px", "font-family: 'Inter', sans-serif",
              "box-sizing: border-box", "width: 100%", "height: 100%",
              "background: #fff",
              "box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.15)",
            ],
            value=self.edit_value,
            on_input=(value) => dispatch(UpdateEdit(value)),
            autofocus=true,
            "",
          ),
        )
      } else {
        let display = cell.value.format_with(cell.format)
        let heat_bg = match heat_range {
          Some((min_v, max_v)) =>
            if is_heat_cell(c, r) {
              match cell.value {
                Num(n) => heat_color(n, min_v, max_v)
                _ => ""
              }
            } else {
              ""
            }
          None => ""
        }
        let is_ref_highlighted = match highlighted_refs.get(key) {
          Some(_) => true
          None => false
        }
        let cell_bg = if cell.bg_color != "" {
          cell.bg_color
        } else if is_selected {
          "#e8f0fe"
        } else {
          "#fff"
        }
        // Overlays: heat map and/or formula ref highlighting via inset box-shadow
        let ref_shadow = if is_ref_highlighted { "inset 0 0 0 100px #34a85320" } else { "" }
        let heat_shadow = if heat_bg != "" { "inset 0 0 0 100px \{heat_bg}" } else { "" }
        let heat_overlay = if ref_shadow != "" && heat_shadow != "" {
          "box-shadow: \{ref_shadow}, \{heat_shadow}"
        } else if ref_shadow != "" {
          "box-shadow: \{ref_shadow}"
        } else if heat_shadow != "" {
          "box-shadow: \{heat_shadow}"
        } else {
          ""
        }
        let border = if is_selected {
          "2px solid #1a73e8"
        } else if is_ref_highlighted {
          "2px solid #34a853"
        } else {
          "1px solid #e0e0e0"
        }
        let weight = if cell.bold { "600" } else { "400" }
        let font_style = if cell.italic { "italic" } else { "normal" }
        let is_error = match cell.value {
          Error(_) => true
          _ => false
        }
        let color = if cell.text_color != "" {
          cell.text_color
        } else if is_error {
          "#d93025"
        } else {
          "#202124"
        }
        let justify = resolve_align(cell)
        let shadow = if is_selected {
          "animation: cellPulse 2s ease-in-out infinite"
        } else {
          ""
        }
        // Check if this cell should render a sparkline (column I, rows 2-6 on Sales Dashboard, only if empty)
        let is_sparkline = is_sales && c == 8 && r >= 1 && r <= 5 && cell.raw == ""
        let cell_content : @rabbita.Html = if is_sparkline {
          view_sparkline(sheet, r)
        } else {
          @html.span(display)
        }
        row_cells.push(
          @html.div(
            style=[
              "background: \{cell_bg}", "border: \{border}", "padding: 0 6px",
              "display: flex", "align-items: center", "font-size: 13px",
              "overflow: hidden", "white-space: nowrap", "cursor: cell",
              "font-weight: \{weight}", "color: \{color}", "box-sizing: border-box",
              "justify-content: \{justify}", "font-style: \{font_style}",
              "transition: background 0.1s ease",
              shadow, heat_overlay,
            ],
            on_click=dispatch(SelectCell(col, row)),
            [cell_content],
          ),
        )
      }
    }
    rows.push(
      @html.div(
        style=[
          "display: grid", "grid-template-columns: \{cols_template}",
          "height: \{row_h}",
        ],
        row_cells,
      ),
    )
  }

  @html.div(
    style=[
      "flex: 1", "overflow: auto", "background: #fff", "outline: none",
    ],
    on_keydown=(kb) => {
      let key = kb.key()
      if key == "ArrowUp" {
        dispatch(MoveSelection(0, -1))
      } else if key == "ArrowDown" {
        dispatch(MoveSelection(0, 1))
      } else if key == "ArrowLeft" {
        dispatch(MoveSelection(-1, 0))
      } else if key == "ArrowRight" {
        dispatch(MoveSelection(1, 0))
      } else if key == "Enter" {
        dispatch(StartEdit)
      } else if key == "Delete" || key == "Backspace" {
        dispatch(ClearCell)
      } else if key == "Tab" {
        dispatch(MoveSelection(1, 0))
      } else if key == "Escape" {
        dispatch(CancelEdit)
      } else if key.length() == 1 {
        dispatch(StartEditWith(key))
      } else {
        @rabbita.none
      }
    },
    attrs=@html.Attrs::build().tabindex(0),
    rows,
  )
}

// --- Sheet Tabs ---

///|
fn Model::view_sheet_tabs(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let tabs : Array[@rabbita.Html] = []
  for i = 0; i < self.sheets.length(); i = i + 1 {
    let sheet = self.sheets[i]
    let is_active = i == self.active_sheet
    let bg = if is_active { "#fff" } else { "#f0f0f0" }
    let border_bottom = if is_active {
      "3px solid #1a73e8"
    } else {
      "3px solid transparent"
    }
    let fw = if is_active { "500" } else { "400" }
    let color = if is_active { "#1a73e8" } else { "#5f6368" }
    let idx = i
    tabs.push(
      @html.div(
        style=[
          "padding: 8px 16px", "cursor: pointer", "background: \{bg}",
          "border-bottom: \{border_bottom}", "border-right: 1px solid #dadce0",
          "font-size: 13px", "display: flex", "align-items: center", "gap: 8px",
          "font-weight: \{fw}", "color: \{color}",
          "transition: all 0.15s ease",
        ],
        on_click=dispatch(SelectSheet(idx)),
        [
          @html.span(sheet.name),
          if self.sheets.length() > 1 {
            @html.button(
              style=[
                "color: #9aa0a6", "font-size: 11px", "cursor: pointer",
                "background: none", "border: none", "padding: 2px 4px",
                "border-radius: 50%", "line-height: 1",
                "transition: all 0.15s ease",
              ],
              on_click=dispatch(DeleteSheet(idx)),
              "\u{2715}",
            )
          } else {
            @html.span("")
          },
        ],
      ),
    )
  }
  tabs.push(
    @html.div(
      style=[
        "padding: 8px 14px", "cursor: pointer", "color: #5f6368",
        "font-size: 18px", "display: flex", "align-items: center",
        "transition: color 0.15s ease", "font-weight: 300",
      ],
      on_click=dispatch(AddSheet),
      "+",
    ),
  )
  @html.div(
    style=[
      "display: flex", "background: #f0f0f0", "border-top: 1px solid #dadce0",
      "min-height: 38px",
    ],
    tabs,
  )
}

// --- Status Bar ---

///|
fn Model::view_status_bar(self : Model) -> @rabbita.Html {
  let cell = self.selected_cell()
  let cell_name = @cell.make_key(self.sel_col, self.sel_row)
  let val_str = cell.value.format_with(cell.format)
  let sheet_name = self.current_sheet().name
  let mut cell_count = 0
  self.current_sheet().cells.each(fn(_k, c) {
    if c.raw != "" {
      cell_count = cell_count + 1
    }
  })
  @html.div(
    style=[
      "display: flex", "justify-content: space-between", "padding: 4px 12px",
      "background: #f8f9fa", "border-top: 1px solid #dadce0", "font-size: 12px",
      "color: #5f6368", "min-height: 28px", "align-items: center",
    ],
    [
      @html.span(
        "\{sheet_name} \u{2022} \{cell_name}: \{val_str}",
      ),
      @html.span(
        "\{cell_count} cells \u{2022} \{self.sheets.length()} sheets \u{2022} \{num_cols}\u{00D7}\{num_rows} grid",
      ),
    ],
  )
}
