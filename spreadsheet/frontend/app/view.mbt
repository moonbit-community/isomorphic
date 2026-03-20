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
            "display: flex", "justify-content: center", "padding: 12px 16px",
            "background: #f8f9fa", "border-bottom: 1px solid #dadce0",
            "animation: chartSlideIn 0.4s ease-out",
          ],
          [self.view_chart()],
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
      // --- Chart toggle ---
      toolbar_button("\u{2584}", self.show_chart, "font-size:14px", dispatch(ToggleChart)),
      view_separator(),
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
        let cell_bg = if cell.bg_color != "" {
          cell.bg_color
        } else if is_selected {
          "#e8f0fe"
        } else {
          "#fff"
        }
        let border = if is_selected {
          "2px solid #1a73e8"
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
        row_cells.push(
          @html.div(
            style=[
              "background: \{cell_bg}", "border: \{border}", "padding: 0 6px",
              "display: flex", "align-items: center", "font-size: 13px",
              "overflow: hidden", "white-space: nowrap", "cursor: cell",
              "font-weight: \{weight}", "color: \{color}", "box-sizing: border-box",
              "justify-content: \{justify}", "font-style: \{font_style}",
              "transition: background 0.1s ease",
              shadow,
            ],
            on_click=dispatch(SelectCell(col, row)),
            display,
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
