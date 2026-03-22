///|
/// Render the full spreadsheet UI: toolbar, formula bar, optional charts, cell grid, sheet tabs, and status bar.
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=[
    "font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    "height: 100vh", "display: flex", "flex-direction: column", "background: #f8f9fa",
    "user-select: none", "color: #202124",
  ]) <| [
    self.view_toolbar(dispatch),
    self.view_formula_bar(dispatch),
    if self.show_chart {
      @html.div(style=[
        "display: flex", "justify-content: center", "gap: 24px", "padding: 12px 16px",
        "align-items: flex-start", "background: #f8f9fa", "border-bottom: 1px solid #dadce0",
        "animation: chartSlideIn 0.4s ease-out",
      ]) <| [
        self.view_chart(),
        self.view_donut_chart(),
      ]
    } else {
      @html.span() <| ""
    },
    self.view_grid(dispatch),
    self.view_sheet_tabs(dispatch),
    self.view_status_bar(),
  ]
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
  @html.div(style=[
    "display: flex", "align-items: center", "gap: 2px", "padding: 6px 12px", "background: linear-gradient(180deg, #f9fbfd 0%, #eef1f5 100%)",
    "border-bottom: 1px solid #dadce0", "min-height: 44px", "flex-wrap: wrap",
  ]) <| [
    // App icon + title
    @html.div(style=[
      "display: flex", "align-items: center", "gap: 8px", "margin-right: 16px",
    ]) <| [
      @html.div(style=[
        "width: 28px", "height: 28px", "border-radius: 4px", "background: linear-gradient(135deg, #0f9d58 0%, #34a853 100%)",
        "display: flex", "align-items: center", "justify-content: center", "color: white",
        "font-weight: 600", "font-size: 14px", "box-shadow: 0 1px 3px rgba(15, 157, 88, 0.3)",
      ]) <| "\u{229E}",
      @html.span(style=[
        "font-weight: 600", "font-size: 15px", "color: #202124", "letter-spacing: -0.3px",
      ]) <| "MoonBit Sheets",
    ],
    view_separator(),
    // --- Font style group ---
    toolbar_button(
      "B",
      cell.bold,
      "font-weight:700;font-size:13px;font-family:serif",
      dispatch(ToggleBold),
    ),
    toolbar_button(
      "I",
      cell.italic,
      "font-style:italic;font-size:13px;font-family:serif",
      dispatch(ToggleItalic),
    ),
    view_separator(),
    // --- Alignment group ---
    toolbar_button(
      "\u{2261}",
      is_left,
      "font-size:14px",
      dispatch(SetAlign(Left)),
    ),
    toolbar_button(
      "\u{2263}",
      is_center,
      "font-size:14px",
      dispatch(SetAlign(Center)),
    ),
    toolbar_button(
      "\u{2262}",
      is_right,
      "font-size:14px",
      dispatch(SetAlign(Right)),
    ),
    view_separator(),
    // --- Number format group ---
    toolbar_button(
      "$",
      is_currency,
      "font-size:13px;font-weight:500",
      dispatch(SetFormat(Currency)),
    ),
    toolbar_button(
      "%",
      is_percent,
      "font-size:13px;font-weight:500",
      dispatch(SetFormat(Percent)),
    ),
    view_separator(),
    // --- Color group ---
    view_color_palette(cell.bg_color, dispatch),
    view_separator(),
    // --- Heat map toggle ---
    toolbar_button(
      "\u{2593}",
      self.heat_map,
      "font-size:14px",
      dispatch(ToggleHeatMap),
    ),
    // --- Chart toggle ---
    toolbar_button(
      "\u{2584}",
      self.show_chart,
      "font-size:14px",
      dispatch(ToggleChart),
    ),
    view_separator(),
    // --- Import / Export ---
    toolbar_button_text("Import", false, dispatch(RequestImport)),
    toolbar_button_text("Export", false, dispatch(ExportExcel)),
    // --- Clear ---
    toolbar_button_text("Clear", false, dispatch(ClearCell)),
  ]
}

///|
fn view_separator() -> @rabbita.Html {
  @html.div(style=[
    "width: 1px", "height: 24px", "background: #dadce0", "margin: 0 6px",
  ]) <| ""
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
      "width: 32px", "height: 32px", "display: flex", "align-items: center", "justify-content: center",
      "border-radius: 4px", "cursor: pointer", "border: 1px solid transparent", "transition: all 0.15s ease",
      bg, extra_style,
    ],
    on_click=action,
  ) <| label
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
      "justify-content: center", "border-radius: 4px", "cursor: pointer", "border: 1px solid transparent",
      "transition: all 0.15s ease", "background: transparent", "font-size: 12px",
      "color: #444746", "font-weight: 500",
    ],
    on_click=action,
  ) <| label
}

///|
fn view_color_palette(
  current_bg : String,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let colors = [
    "", // default (no color)
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
    let swatch_bg = if c.is_empty() { "#fff" } else { c }
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
          "width: 18px",
          "height: 18px",
          "border-radius: 3px",
          "background: \{swatch_bg}",
          "border: \{border}",
          "cursor: pointer",
          "transition: transform 0.1s ease",
        ],
        on_click=dispatch(SetBgColor(color)),
      ) <| "",
    )
  }
  @html.div(style=["display: flex", "align-items: center", "gap: 3px"]) <| swatches
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
  let has_suggestions = self.autocomplete_suggestions.length() > 0
  // Build autocomplete dropdown items
  let dropdown_items : Array[@rabbita.Html] = []
  for i, suggestion in self.autocomplete_suggestions {
    let is_active = i == self.autocomplete_index
    let item_bg = if is_active { "#d2e3fc" } else { "#fff" }
    let item_fw = if is_active { "600" } else { "400" }
    let name = suggestion
    dropdown_items.push(
      @html.div(
        style=[
          "padding: 6px 12px", "cursor: pointer", "font-size: 13px",
          "font-family: 'Google Sans Mono', 'Roboto Mono', monospace",
          "background: \{item_bg}", "font-weight: \{item_fw}",
          "color: #202124", "transition: background 0.1s ease",
          "border-bottom: 1px solid #f0f0f0",
        ],
        // mousedown fires before the input's blur/on_change, preventing
        // the commit-before-select race condition
        on_mousedown=fn(_) { dispatch(AutocompleteSelect(name)) },
      ) <| "\{suggestion}()",
    )
  }
  // Autocomplete dropdown (positioned absolutely below the formula input)
  let dropdown : @rabbita.Html = if has_suggestions {
    @html.div(style=[
      "position: absolute", "top: 100%", "left: 0", "right: 0", "z-index: 10",
      "background: #fff", "border: 1px solid #dadce0", "border-top: none",
      "border-radius: 0 0 4px 4px",
      "box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15)",
      "max-height: 200px", "overflow-y: auto",
    ]) <| dropdown_items
  } else {
    @html.span() <| ""
  }
  // Live formula preview: evaluate the formula as the user types
  let preview_text = if self.editing &&
    !self.edit_value.is_empty() &&
    self.edit_value[0] == '=' {
    let sheet = self.current_sheet()
    let result = @formula.evaluate(self.edit_value, fn(r) {
      sheet.get(r).value
    })
    match result {
      Num(_) => {
        let formatted = result.format_with(self.selected_cell().format)
        Some("= \{formatted}")
      }
      Text(s) => Some("= \{s}")
      Error(_) => None // Don't show errors mid-typing
      Empty => None
    }
  } else {
    None
  }
  let preview_badge : @rabbita.Html = match preview_text {
    Some(text) =>
      @html.div(style=[
        "margin-left: 8px", "padding: 2px 10px", "background: #e8f5e9",
        "border: 1px solid #a5d6a7", "border-radius: 12px", "font-size: 12px",
        "color: #2e7d32", "font-weight: 500", "white-space: nowrap",
        "font-family: 'Google Sans Mono', 'Roboto Mono', monospace",
        "animation: fadeIn 0.15s ease-out",
      ]) <| text
    None => @html.span() <| ""
  }
  @html.div(style=[
    "display: flex", "align-items: center", "padding: 4px 8px", "background: #fff",
    "border-bottom: 1px solid #e0e0e0", "min-height: 36px", "position: relative",
  ]) <| [
    // Cell name box
    @html.div(style=[
      "min-width: 64px", "height: 28px", "text-align: center", "font-weight: 500",
      "font-size: 13px", "color: #202124", "border: 1px solid #dadce0", "border-radius: 4px",
      "display: flex", "align-items: center", "justify-content: center", "margin-right: 8px",
      "background: #f8f9fa", "padding: 0 8px",
    ]) <| cell_name,
    // fx icon
    @html.span(style=[
      "font-size: 13px", "color: #70757a", "margin-right: 8px", "font-style: italic",
      "font-weight: 500",
    ]) <| "fx",
    // Formula input wrapper with keyboard handling for autocomplete
    // on_keydown is on the wrapper div; keystrokes from the focused input bubble up
    @html.div(
      style=["flex: 1", "position: relative"],
      on_keydown=kb => {
        let key = kb.key()
        if has_suggestions {
          if key == "ArrowDown" {
            dispatch(AutocompleteNav(1))
          } else if key == "ArrowUp" {
            dispatch(AutocompleteNav(-1))
          } else if key == "Escape" {
            dispatch(CancelEdit)
          } else if (key == "Tab" || key == "Enter") &&
                    self.autocomplete_index >= 0 {
            dispatch(
              AutocompleteSelect(
                self.autocomplete_suggestions[self.autocomplete_index],
              ),
            )
          } else if key == "Enter" {
            dispatch(CommitEdit)
          } else {
            @rabbita.none
          }
        } else if key == "Enter" {
          dispatch(CommitEdit)
        } else if key == "Escape" {
          dispatch(CancelEdit)
        } else {
          @rabbita.none
        }
      },
    ) <| [
      @html.input(
        input_type=Text,
        style=[
          "width: 100%", "border: 1px solid #dadce0", "padding: 4px 10px", "font-size: 13px",
          "font-family: 'Google Sans Mono', 'Roboto Mono', monospace", "border-radius: 4px",
          "height: 28px", "color: #202124", "transition: border-color 0.15s ease",
          "box-sizing: border-box",
        ],
        value=display_value,
        on_input=value => dispatch(UpdateEdit(value)),
        on_change=_value => dispatch(CommitEdit),
      ) <| "",
      dropdown,
    ],
    // Live formula preview badge
    preview_badge,
  ]
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
    let clamped = n.clamp(min=0, max=255)
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
fn collect_heat_range(sheet : @sheet.Sheet) -> (Double, Double) {
  // Revenue data: rows 1-5 (B2:E6), totals row 7 (B8:E8)
  let rows = [1, 2, 3, 4, 5, 7]
  for r in rows; min_val = 1.0e18, max_val = -1.0e18 {
    let (min_val, max_val) = for
      c in 1..<=4
      min_val = min_val, max_val = max_val {
      let key = @cell.make_key(c, r)
      let cell = sheet.get(key)
      match cell.value {
        Num(n) =>
          continue if n < min_val {
              n
            } else {
              min_val
            },
            if n > max_val {
              n
            } else {
              max_val
            }
        _ => continue min_val, max_val
      }
    } nobreak {
      (min_val, max_val)
    }
    continue min_val, max_val
  } nobreak {
    (min_val, max_val)
  }
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
  // Formula highlighting: use edit_value when editing, raw otherwise.
  // Each referenced cell gets a color index so different refs/ranges have distinct colors.
  let sel_cell = self.selected_cell()
  let formula_src = if self.editing { self.edit_value } else { sel_cell.raw }
  let highlighted_refs : Map[String, Int] = {}
  if !formula_src.is_empty() && formula_src[0] == '=' {
    let groups = @formula.extract_reference_groups(formula_src)
    for pair in groups {
      let (cell_ref, group_idx) = pair
      // First occurrence wins — avoids overwriting with a later group
      match highlighted_refs.get(cell_ref) {
        Some(_) => ()
        None => highlighted_refs[cell_ref] = group_idx
      }
    }
  }
  // Color palette for multi-color reference highlighting (Google Sheets style)
  let ref_colors : Array[String] = [
    "#4285f4", "#ea4335", "#fbbc04", "#34a853", "#ff6d01", "#46bdc6", "#9334e6",
    "#e52592",
  ]
  let col_w = "100px"
  let row_h = "28px"
  let header_w = "46px"
  let cols_template = "\{header_w} " +
    Array::make(@sheet.num_cols, col_w).join(" ")
  let rows : Array[@rabbita.Html] = []

  // Column headers row
  let header_cells : Array[@rabbita.Html] = []
  header_cells.push(
    @html.div(style=[
      "background: #f8f9fa", "border-bottom: 1px solid #c7c7c7", "border-right: 1px solid #c7c7c7",
      "display: flex", "align-items: center", "justify-content: center", "position: sticky",
      "left: 0", "z-index: 3",
    ]) <| "",
  )
  for c in 0..<@sheet.num_cols {
    let is_sel_col = c == self.sel_col
    let bg = if is_sel_col { "#d3e3fd" } else { "#f8f9fa" }
    let fw = if is_sel_col { "600" } else { "500" }
    let color = if is_sel_col { "#1a73e8" } else { "#444746" }
    header_cells.push(
      @html.div(style=[
        "background: \{bg}",
        "border-bottom: 1px solid #c7c7c7",
        "border-right: 1px solid #e0e0e0",
        "display: flex",
        "align-items: center",
        "justify-content: center",
        "font-size: 12px",
        "font-weight: \{fw}",
        "color: \{color}",
        "transition: background 0.1s ease",
      ]) <| @cell.col_to_letter(c),
    )
  }
  rows.push(
    @html.div(style=[
      "display: grid",
      "grid-template-columns: \{cols_template}",
      "height: \{row_h}",
      "position: sticky",
      "top: 0",
      "z-index: 2",
    ]) <| header_cells,
  )

  // Data rows
  for r in 0..<@sheet.num_rows {
    let row_cells : Array[@rabbita.Html] = []
    let is_sel_row = r == self.sel_row
    let row_bg = if is_sel_row { "#d3e3fd" } else { "#f8f9fa" }
    let row_fw = if is_sel_row { "600" } else { "400" }
    let row_color = if is_sel_row { "#1a73e8" } else { "#444746" }
    // Row header
    row_cells.push(
      @html.div(style=[
        "background: \{row_bg}",
        "border-right: 1px solid #c7c7c7",
        "border-bottom: 1px solid #e0e0e0",
        "display: flex",
        "align-items: center",
        "justify-content: center",
        "font-size: 12px",
        "color: \{row_color}",
        "font-weight: \{row_fw}",
        "position: sticky",
        "left: 0",
        "z-index: 1",
        "transition: background 0.1s ease",
      ]) <| (r + 1).to_string(),
    )
    // Data cells
    for c in 0..<@sheet.num_cols {
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
              "border: 2px solid #1a73e8", "outline: none", "padding: 0 6px", "font-size: 13px",
              "font-family: 'Inter', sans-serif", "box-sizing: border-box", "width: 100%",
              "height: 100%", "background: #fff", "box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.15)",
            ],
            value=self.edit_value,
            on_input=value => dispatch(UpdateEdit(value)),
            on_change=_value => dispatch(CommitEdit),
            autofocus=true,
          ) <| "",
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
        // Look up reference color index for multi-color highlighting
        let ref_color_idx = highlighted_refs.get(key)
        let is_ref_highlighted = match ref_color_idx {
          Some(_) => true
          None => false
        }
        let ref_color = match ref_color_idx {
          Some(idx) => ref_colors[idx % ref_colors.length()]
          None => ""
        }
        let cell_bg = if !cell.bg_color.is_empty() {
          cell.bg_color
        } else if is_selected {
          "#e8f0fe"
        } else {
          "#fff"
        }
        // Overlays: heat map and/or formula ref highlighting via inset box-shadow
        let ref_shadow = if is_ref_highlighted {
          "inset 0 0 0 100px \{ref_color}20"
        } else {
          ""
        }
        let heat_shadow = if !heat_bg.is_empty() {
          "inset 0 0 0 100px \{heat_bg}"
        } else {
          ""
        }
        let heat_overlay = if !ref_shadow.is_empty() && !heat_shadow.is_empty() {
          "box-shadow: \{ref_shadow}, \{heat_shadow}"
        } else if !ref_shadow.is_empty() {
          "box-shadow: \{ref_shadow}"
        } else if !heat_shadow.is_empty() {
          "box-shadow: \{heat_shadow}"
        } else {
          ""
        }
        let border = if is_selected {
          "2px solid #1a73e8"
        } else if is_ref_highlighted {
          "2px solid \{ref_color}"
        } else {
          "1px solid #e0e0e0"
        }
        let weight = if cell.bold { "600" } else { "400" }
        let font_style = if cell.italic { "italic" } else { "normal" }
        let is_error = match cell.value {
          Error(_) => true
          _ => false
        }
        let color = if !cell.text_color.is_empty() {
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
        let is_sparkline = is_sales &&
          c == 8 &&
          r >= 1 &&
          r <= 5 &&
          cell.raw.is_empty()
        let cell_content : @rabbita.Html = if is_sparkline {
          view_sparkline(sheet, r)
        } else {
          @html.span() <| display
        }
        row_cells.push(
          @html.div(
            style=[
              "background: \{cell_bg}",
              "border: \{border}",
              "padding: 0 6px",
              "display: flex",
              "align-items: center",
              "font-size: 13px",
              "overflow: hidden",
              "white-space: nowrap",
              "cursor: cell",
              "font-weight: \{weight}",
              "color: \{color}",
              "box-sizing: border-box",
              "justify-content: \{justify}",
              "font-style: \{font_style}",
              "transition: background 0.1s ease",
              shadow,
              heat_overlay,
            ],
            on_click=dispatch(SelectCell(col, row)),
          ) <| [
            cell_content,
          ],
        )
      }
    }
    rows.push(
      @html.div(style=[
        "display: grid",
        "grid-template-columns: \{cols_template}",
        "height: \{row_h}",
      ]) <| row_cells,
    )
  }

  @html.div(
    style=["flex: 1", "overflow: auto", "background: #fff", "outline: none"],
    on_keydown=kb => {
      let key = kb.key()
      // When editing, handle keystrokes directly from the grid since
      // the inline editor may not have received focus (autofocus is
      // unreliable in virtual DOM re-renders).
      if self.editing {
        if key == "Escape" {
          dispatch(CancelEdit)
        } else if key == "Enter" {
          dispatch(CommitEdit)
        } else if key == "Tab" {
          // Commit then move — MoveSelection already commits pending edits
          dispatch(MoveSelection(1, 0))
        } else if key == "Backspace" {
          let v = self.edit_value
          let new_v = if v.length() > 0 {
            v[:v.length() - 1].to_string()
          } else {
            ""
          }
          dispatch(UpdateEdit(new_v))
        } else if key.length() == 1 {
          dispatch(UpdateEdit(self.edit_value + key))
        } else {
          @rabbita.none
        }
      } else if key == "ArrowUp" {
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
  ) <| rows
}

// --- Sheet Tabs ---

///|
fn Model::view_sheet_tabs(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let tabs : Array[@rabbita.Html] = []
  for i, sheet in self.sheets {
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
          "padding: 8px 16px",
          "cursor: pointer",
          "background: \{bg}",
          "border-bottom: \{border_bottom}",
          "border-right: 1px solid #dadce0",
          "font-size: 13px",
          "display: flex",
          "align-items: center",
          "gap: 8px",
          "font-weight: \{fw}",
          "color: \{color}",
          "transition: all 0.15s ease",
        ],
        on_click=dispatch(SelectSheet(idx)),
      ) <| [
        @html.span() <| sheet.name,
        if self.sheets.length() > 1 {
          @html.button(
            style=[
              "color: #9aa0a6", "font-size: 11px", "cursor: pointer", "background: none",
              "border: none", "padding: 2px 4px", "border-radius: 50%", "line-height: 1",
              "transition: all 0.15s ease",
            ],
            on_click=dispatch(DeleteSheet(idx)),
          ) <| "\u{2715}"
        } else {
          @html.span() <| ""
        },
      ],
    )
  }
  tabs.push(
    @html.div(
      style=[
        "padding: 8px 14px", "cursor: pointer", "color: #5f6368", "font-size: 18px",
        "display: flex", "align-items: center", "transition: color 0.15s ease", "font-weight: 300",
      ],
      on_click=dispatch(AddSheet),
    ) <| "+",
  )
  @html.div(style=[
    "display: flex", "background: #f0f0f0", "border-top: 1px solid #dadce0", "min-height: 38px",
  ]) <| tabs
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
    if !c.raw.is_empty() {
      cell_count = cell_count + 1
    }
  })
  @html.div(style=[
    "display: flex", "justify-content: space-between", "padding: 4px 12px", "background: #f8f9fa",
    "border-top: 1px solid #dadce0", "font-size: 12px", "color: #5f6368", "min-height: 28px",
    "align-items: center",
  ]) <| [
    @html.span() <| "\{sheet_name} \u{2022} \{cell_name}: \{val_str}",
    @html.span() <| "\{cell_count} cells \u{2022} \{self.sheets.length()} sheets \u{2022} \{@sheet.num_cols}\u{00D7}\{@sheet.num_rows} grid",
  ]
}
