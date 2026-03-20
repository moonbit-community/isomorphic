///|
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(
    style=[
      "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      "height: 100vh", "display: flex", "flex-direction: column",
      "background: #f0f0f0", "user-select: none",
    ],
    [
      self.view_toolbar(dispatch),
      self.view_formula_bar(dispatch),
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
  let bold_bg = if cell.bold { "#d0d0d0" } else { "#fff" }
  @html.div(
    style=[
      "display: flex", "align-items: center", "gap: 8px", "padding: 4px 8px",
      "background: #e8e8e8", "border-bottom: 1px solid #ccc",
    ],
    [
      @html.span(
        style=["font-weight: bold", "font-size: 1.1em", "margin-right: 12px"],
        "Spreadsheet",
      ),
      @html.button(
        style=[
          "font-weight: bold", "width: 28px", "height: 28px",
          "background: \{bold_bg}", "border: 1px solid #aaa",
          "border-radius: 3px", "cursor: pointer",
        ],
        on_click=dispatch(ToggleBold),
        "B",
      ),
      @html.button(
        style=[
          "height: 28px", "padding: 0 10px", "border: 1px solid #aaa",
          "border-radius: 3px", "cursor: pointer", "background: #fff",
        ],
        on_click=dispatch(ClearCell),
        "Clear",
      ),
    ],
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
      "background: #fff", "border-bottom: 1px solid #ccc",
    ],
    [
      @html.span(
        style=[
          "display: inline-block", "width: 50px", "text-align: center",
          "font-weight: bold", "font-size: 0.9em", "color: #555",
          "border-right: 1px solid #ccc", "margin-right: 8px", "padding-right: 8px",
        ],
        cell_name,
      ),
      @html.span(
        style=[
          "font-style: italic", "font-size: 0.85em", "color: #888",
          "margin-right: 8px",
        ],
        "fx",
      ),
      @html.input(
        input_type=Text,
        style=[
          "flex: 1", "border: 1px solid #ddd", "padding: 4px 8px",
          "font-size: 0.9em", "font-family: monospace", "outline: none",
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
fn Model::view_grid(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let sheet = self.current_sheet()
  let col_w = "80px"
  let row_h = "26px"
  let header_w = "40px"
  let cols_template = "\{header_w} " + Array::make(num_cols, col_w).join(" ")
  let rows : Array[@rabbita.Html] = []

  // Column headers row
  let header_cells : Array[@rabbita.Html] = []
  header_cells.push(
    @html.div(
      style=[
        "background: #e8e8e8", "border-bottom: 1px solid #bbb",
        "border-right: 1px solid #bbb", "display: flex",
        "align-items: center", "justify-content: center",
      ],
      "",
    ),
  )
  for c = 0; c < num_cols; c = c + 1 {
    let is_sel_col = c == self.sel_col
    let bg = if is_sel_col { "#d0e0ff" } else { "#e8e8e8" }
    header_cells.push(
      @html.div(
        style=[
          "background: \{bg}", "border-bottom: 1px solid #bbb",
          "border-right: 1px solid #ddd", "display: flex",
          "align-items: center", "justify-content: center",
          "font-size: 0.8em", "font-weight: bold", "color: #555",
        ],
        @cell.col_to_letter(c),
      ),
    )
  }
  rows.push(
    @html.div(
      style=[
        "display: grid", "grid-template-columns: \{cols_template}",
        "height: \{row_h}",
      ],
      header_cells,
    ),
  )

  // Data rows
  for r = 0; r < num_rows; r = r + 1 {
    let row_cells : Array[@rabbita.Html] = []
    let is_sel_row = r == self.sel_row
    let row_bg = if is_sel_row { "#d0e0ff" } else { "#e8e8e8" }
    // Row header
    row_cells.push(
      @html.div(
        style=[
          "background: \{row_bg}", "border-right: 1px solid #bbb",
          "border-bottom: 1px solid #ddd", "display: flex",
          "align-items: center", "justify-content: center",
          "font-size: 0.8em", "color: #555",
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
              "border: 2px solid #4f46e5", "outline: none", "padding: 0 4px",
              "font-size: 0.85em", "font-family: monospace",
              "box-sizing: border-box", "width: 100%", "height: 100%",
            ],
            value=self.edit_value,
            on_input=(value) => dispatch(UpdateEdit(value)),
            autofocus=true,
            "",
          ),
        )
      } else {
        let display = cell.value.to_display()
        let bg = if is_selected { "#e8f0ff" } else { "#fff" }
        let border = if is_selected {
          "2px solid #4f46e5"
        } else {
          "1px solid #e0e0e0"
        }
        let weight = if cell.bold { "bold" } else { "normal" }
        let is_error = match cell.value {
          Error(_) => true
          _ => false
        }
        let color = if is_error { "#d00" } else { "#333" }
        row_cells.push(
          @html.div(
            style=[
              "background: \{bg}", "border: \{border}", "padding: 0 4px",
              "display: flex", "align-items: center", "font-size: 0.85em",
              "overflow: hidden", "white-space: nowrap", "cursor: cell",
              "font-weight: \{weight}", "color: \{color}", "box-sizing: border-box",
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
    style=["flex: 1", "overflow: auto", "background: #fff", "outline: none"],
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
    let bg = if is_active { "#fff" } else { "#ddd" }
    let border_top = if is_active {
      "2px solid #4f46e5"
    } else {
      "2px solid transparent"
    }
    let idx = i
    tabs.push(
      @html.div(
        style=[
          "padding: 6px 16px", "cursor: pointer", "background: \{bg}",
          "border-top: \{border_top}", "border-right: 1px solid #ccc",
          "font-size: 0.85em", "display: flex", "align-items: center", "gap: 6px",
        ],
        on_click=dispatch(SelectSheet(idx)),
        [
          @html.span(sheet.name),
          if self.sheets.length() > 1 {
            @html.button(
              style=[
                "color: #999", "font-size: 0.8em", "cursor: pointer",
                "background: none", "border: none", "padding: 0",
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
        "padding: 6px 12px", "cursor: pointer", "color: #666",
        "font-size: 1.1em", "display: flex", "align-items: center",
      ],
      on_click=dispatch(AddSheet),
      "+",
    ),
  )
  @html.div(
    style=[
      "display: flex", "background: #e0e0e0", "border-top: 1px solid #ccc",
    ],
    tabs,
  )
}

// --- Status Bar ---

///|
fn Model::view_status_bar(self : Model) -> @rabbita.Html {
  let cell = self.selected_cell()
  let cell_name = @cell.make_key(self.sel_col, self.sel_row)
  let val_str = cell.value.to_display()
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
      "background: #e8e8e8", "border-top: 1px solid #ccc", "font-size: 0.8em",
      "color: #666",
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
