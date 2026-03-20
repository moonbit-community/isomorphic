///|
fn Model::view_confirm_button(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let s = self.confirm_button
  let content = if s.executed {
    @html.div(
      style=[
        "display:flex",
        "align-items:center",
        "gap:8px",
        "padding:12px 16px",
        "background:\{success}22",
        "border:1.5px solid \{success}",
        "border-radius:\{radius}",
        "color:\{success}",
        "font-weight:600",
      ],
      [
        @html.span(style=["font-size:18px"], "✓"),
        @html.span("Account deleted"),
      ],
    )
  } else if s.confirming {
    @html.div(
      style=[
        "display:flex",
        "flex-direction:column",
        "gap:12px",
        "padding:16px",
        "background:\{danger}11",
        "border:1.5px solid \{danger}",
        "border-radius:\{radius}",
      ],
      [
        @html.p(
          style=["margin:0", "font-weight:600", "color:\{danger}"],
          "Are you sure? This action cannot be undone.",
        ),
        @html.div(style=["display:flex", "gap:8px"], [
          @html.button(
            style=btn_danger_style,
            on_click=dispatch(ConfirmButtonConfirm),
            "Confirm",
          ),
          @html.button(
            style=btn_outline_style,
            on_click=dispatch(ConfirmButtonCancel),
            "Cancel",
          ),
        ]),
      ],
    )
  } else {
    @html.button(
      style=btn_danger_style,
      on_click=dispatch(ConfirmButtonClick),
      "Delete Account",
    )
  }
  @html.div(
    style=[
      "padding:24px",
      "background:\{surface}",
      "border-radius:\{radius}",
      "border:1px solid \{border}",
    ],
    [
      @html.h3(
        style=[
          "margin:0 0 16px",
          "font-size:16px",
          "font-weight:600",
          "color:\{text_primary}",
        ],
        "Confirm Button",
      ),
      content,
    ],
  )
}

///|
fn Model::view_copy_clipboard(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let s = self.copy_clipboard
  let btn_label = if s.copied { "Copied!" } else { "Copy" }
  let btn_color = if s.copied { success } else { primary }
  @html.div(
    style=[
      "padding:24px",
      "background:\{surface}",
      "border-radius:\{radius}",
      "border:1px solid \{border}",
    ],
    [
      @html.h3(
        style=[
          "margin:0 0 16px",
          "font-size:16px",
          "font-weight:600",
          "color:\{text_primary}",
        ],
        "Copy to Clipboard",
      ),
      @html.div(
        style=[
          "display:flex",
          "align-items:stretch",
          "gap:0",
          "border:1.5px solid \{border}",
          "border-radius:\{radius}",
          "overflow:hidden",
        ],
        [
          @html.div(
            style=[
              "flex:1",
              "padding:10px 14px",
              "background:\{surface_alt}",
              "font-family:monospace",
              "font-size:14px",
              "color:\{text_primary}",
              "word-break:break-all",
            ],
            s.text,
          ),
          @html.button(
            style=[
              "padding:10px 18px",
              "background:\{btn_color}",
              "color:#fff",
              "border:none",
              "border-left:1.5px solid \{border}",
              "cursor:pointer",
              "font-weight:600",
              "font-size:14px",
              "transition:background 0.2s",
              "white-space:nowrap",
            ],
            on_click=dispatch(CopyClick),
            btn_label,
          ),
        ],
      ),
      @html.p(
        style=["margin:10px 0 0", "font-size:12px", "color:\{text_muted}"],
        "Click the button to copy the text. Resets after 2 seconds.",
      ),
    ],
  )
}

///|
fn Model::view_undo_snackbar(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let s = self.undo_snackbar
  let item_views : Array[@rabbita.Html] = []
  for i, item in s.items {
    item_views.push(
      @html.div(
        style=[
          "display:flex",
          "align-items:center",
          "justify-content:space-between",
          "padding:10px 14px",
          "background:\{surface_alt}",
          "border:1px solid \{border}",
          "border-radius:\{radius_sm}",
          "margin-bottom:8px",
        ],
        [
          @html.span(style=["color:\{text_primary}", "font-size:14px"], item),
          @html.button(
            style=[
              "background:none",
              "border:none",
              "cursor:pointer",
              "color:\{text_muted}",
              "font-size:18px",
              "line-height:1",
              "padding:0 4px",
              "border-radius:\{radius_sm}",
            ],
            on_click=dispatch(UndoRemoveItem(i)),
            "×",
          ),
        ],
      ),
    )
  }
  let snackbar = if s.visible {
    @html.div(
      style=[
        "position:fixed",
        "bottom:24px",
        "left:50%",
        "transform:translateX(-50%)",
        "background:#323232",
        "color:#fff",
        "padding:12px 20px",
        "border-radius:\{radius}",
        "display:flex",
        "align-items:center",
        "gap:16px",
        "box-shadow:0 4px 16px rgba(0,0,0,0.18)",
        "z-index:1000",
        "font-size:14px",
      ],
      [
        @html.span(s.message),
        @html.button(
          style=[
            "background:none",
            "border:none",
            "color:\{primary_light}",
            "cursor:pointer",
            "font-weight:700",
            "font-size:14px",
            "padding:0",
          ],
          on_click=dispatch(UndoUndo),
          "UNDO",
        ),
        @html.button(
          style=[
            "background:none", "border:none", "color:#aaa", "cursor:pointer", "font-size:18px",
            "padding:0", "line-height:1",
          ],
          on_click=dispatch(UndoDismiss),
          "×",
        ),
      ],
    )
  } else {
    @html.nothing
  }
  @html.div(
    style=[
      "padding:24px",
      "background:\{surface}",
      "border-radius:\{radius}",
      "border:1px solid \{border}",
      "position:relative",
    ],
    [
      @html.h3(
        style=[
          "margin:0 0 16px",
          "font-size:16px",
          "font-weight:600",
          "color:\{text_primary}",
        ],
        "Undo Snackbar",
      ),
      if s.items.length() == 0 {
        @html.p(
          style=["color:\{text_muted}", "font-size:14px", "text-align:center"],
          "All items removed.",
        )
      } else {
        @html.div(style=[], item_views)
      },
      snackbar,
    ],
  )
}

// TODO(P2): parse_markdown only handles block-level syntax (headings, lists,
// blockquotes, paragraphs). Inline markdown (**bold**, *italic*, `code`,
// [links](url)) is rendered as literal text. To fix:
//   1. Add an inline parser that scans each text line for patterns
//   2. Split text into segments: plain, Bold(text), Italic(text), Code(text), Link(text, url)
//   3. Render segments as @html.strong, @html.em, @html.code, @html.a respectively
//   4. Handle nested inline patterns (e.g. **bold *and italic***)

///|
fn parse_markdown(source : String) -> @rabbita.Html {
  let lines = source.split("\n")
  let nodes : Array[@rabbita.Html] = []
  let list_items : Array[@rabbita.Html] = []
  fn flush_list() {
    if list_items.length() > 0 {
      let items = list_items.copy()
      nodes.push(@html.ul(style=["margin:8px 0", "padding-left:24px"], items))
      list_items.clear()
    }
  }

  for sv in lines {
    let line = "\{sv}"
    if line.has_prefix("# ") {
      flush_list()
      let text = line.substring(start=2)
      nodes.push(
        @html.h1(
          style=[
            "font-size:22px", "font-weight:700", "margin:12px 0 6px", "color:#1a1a2e",
          ],
          text,
        ),
      )
    } else if line.has_prefix("## ") {
      flush_list()
      let text = line.substring(start=3)
      nodes.push(
        @html.h2(
          style=[
            "font-size:18px", "font-weight:600", "margin:10px 0 4px", "color:#1a1a2e",
          ],
          text,
        ),
      )
    } else if line.has_prefix("> ") {
      flush_list()
      let text = line.substring(start=2)
      nodes.push(
        @html.blockquote(
          style=[
            "border-left:4px solid #aaa", "margin:8px 0", "padding:6px 12px", "color:#555",
            "background:#f7f7f7", "border-radius:0 4px 4px 0",
          ],
          text,
        ),
      )
    } else if line.has_prefix("- ") {
      let text = line.substring(start=2)
      list_items.push(@html.li(style=["margin:2px 0"], text))
    } else if line == "" {
      flush_list()
      nodes.push(@html.br())
    } else {
      flush_list()
      nodes.push(
        @html.p(style=["margin:6px 0", "line-height:1.6", "color:#333"], line),
      )
    }
  }
  flush_list()
  @html.div(style=[], nodes)
}

///|
fn Model::view_markdown(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let s = self.markdown
  @html.div(
    style=[
      "padding:24px",
      "background:\{surface}",
      "border-radius:\{radius}",
      "border:1px solid \{border}",
    ],
    [
      @html.h3(
        style=[
          "margin:0 0 16px",
          "font-size:16px",
          "font-weight:600",
          "color:\{text_primary}",
        ],
        "Markdown Preview",
      ),
      @html.div(
        style=[
          "display:grid", "grid-template-columns:1fr 1fr", "gap:16px", "min-height:280px",
        ],
        [
          @html.div(
            style=["display:flex", "flex-direction:column", "gap:6px"],
            [
              @html.label(style=label_style, "Source"),
              @html.textarea(
                style=[
                  "flex:1",
                  "min-height:240px",
                  "padding:12px",
                  "border:1.5px solid \{border}",
                  "border-radius:\{radius_sm}",
                  "font-family:monospace",
                  "font-size:13px",
                  "resize:vertical",
                  "color:\{text_primary}",
                  "background:\{surface_alt}",
                  "line-height:1.5",
                ],
                value=s.source,
                rows=12,
                on_input=src => dispatch(MarkdownChanged(src)),
                "",
              ),
            ],
          ),
          @html.div(
            style=["display:flex", "flex-direction:column", "gap:6px"],
            [
              @html.label(style=label_style, "Preview"),
              @html.div(
                style=[
                  "flex:1",
                  "min-height:240px",
                  "padding:12px",
                  "border:1.5px solid \{border}",
                  "border-radius:\{radius_sm}",
                  "background:#fff",
                  "overflow-y:auto",
                  "font-size:14px",
                  "line-height:1.6",
                ],
                [parse_markdown(s.source)],
              ),
            ],
          ),
        ],
      ),
    ],
  )
}

///|
fn Model::view_spreadsheet(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let s = self.spreadsheet
  let col_headers = ["A", "B", "C"]
  let header_cells : Array[@rabbita.Html] = [
    @html.th(
      style=[
        "padding:8px 12px",
        "background:\{surface_alt}",
        "border:1px solid \{border}",
        "font-size:12px",
        "color:\{text_muted}",
        "font-weight:600",
        "width:40px",
        "text-align:center",
      ],
      "",
    ),
  ]
  for col_label in col_headers {
    header_cells.push(
      @html.th(
        style=[
          "padding:8px 16px",
          "background:\{surface_alt}",
          "border:1px solid \{border}",
          "font-size:12px",
          "color:\{text_muted}",
          "font-weight:700",
          "text-align:center",
          "min-width:80px",
        ],
        col_label,
      ),
    )
  }
  let body_rows : Array[@rabbita.Html] = []
  for r, row in s.cells {
    let tds : Array[@rabbita.Html] = [
      @html.td(
        style=[
          "padding:6px 10px",
          "background:\{surface_alt}",
          "border:1px solid \{border}",
          "font-size:12px",
          "color:\{text_muted}",
          "font-weight:600",
          "text-align:center",
        ],
        "\{r + 1}",
      ),
    ]
    for c, cell in row {
      let is_selected = s.selected_row == r && s.selected_col == c
      let is_editing = is_selected && s.editing
      let cell_bg = if is_selected { "\{primary_light}22" } else { "#fff" }
      let cell_border = if is_selected {
        "2px solid \{primary}"
      } else {
        "1px solid \{border}"
      }
      let cell_content = if is_editing {
        @html.input(
          input_type=Text,
          value=s.edit_value,
          style=[
            "width:100%",
            "border:none",
            "outline:none",
            "background:transparent",
            "font-size:13px",
            "color:\{text_primary}",
            "padding:0",
          ],
          on_input=v => dispatch(SpreadsheetEditChanged(v)),
          "",
        )
      } else {
        @html.span(
          style=["font-size:13px", "color:\{text_primary}"],
          cell.value,
        )
      }
      let rc = (r, c)
      tds.push(
        @html.td(
          style=[
            "padding:6px 10px",
            "background:\{cell_bg}",
            "border:\{cell_border}",
            "cursor:pointer",
            "position:relative",
          ],
          attrs=if s.editing && rc.0 == s.selected_row && rc.1 == s.selected_col {
            @html.Attrs::build()
          } else {
            @html.Attrs::build().on_click(fn(_) {
              dispatch(SpreadsheetSelectCell(rc.0, rc.1))
            })
          },
          [cell_content],
        ),
      )
    }
    body_rows.push(@html.tr(style=[], tds))
  }
  let edit_controls = if s.editing {
    @html.div(style=["display:flex", "gap:8px", "margin-top:12px"], [
      @html.button(
        style=btn_sm_style,
        on_click=dispatch(SpreadsheetSaveEdit),
        "Save",
      ),
      @html.button(
        style=btn_outline_style,
        on_click=dispatch(SpreadsheetCancelEdit),
        "Cancel",
      ),
    ])
  } else {
    @html.div(style=["display:flex", "gap:8px", "margin-top:12px"], [
      @html.button(
        style=btn_sm_style,
        on_click=dispatch(SpreadsheetStartEdit),
        disabled=s.selected_row < 0,
        "Edit Cell",
      ),
      @html.span(
        style=["font-size:12px", "color:\{text_muted}", "align-self:center"],
        if s.selected_row >= 0 {
          "Selected: \{col_headers[s.selected_col]}\{s.selected_row + 1}"
        } else {
          "Click a cell to select"
        },
      ),
    ])
  }
  @html.div(
    style=[
      "padding:24px",
      "background:\{surface}",
      "border-radius:\{radius}",
      "border:1px solid \{border}",
    ],
    [
      @html.h3(
        style=[
          "margin:0 0 16px",
          "font-size:16px",
          "font-weight:600",
          "color:\{text_primary}",
        ],
        "Spreadsheet",
      ),
      @html.div(style=["overflow-x:auto"], [
        @html.table(
          style=[
            "border-collapse:collapse", "width:100%", "font-family:monospace",
          ],
          [
            @html.thead(style=[], [@html.tr(style=[], header_cells)]),
            @html.tbody(style=[], body_rows),
          ],
        ),
      ]),
      edit_controls,
    ],
  )
}

///|
fn Model::view_drag_sort(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let s = self.drag_sort
  let n = s.items.length()
  let cards : Array[@rabbita.Html] = []
  for i, item in s.items {
    let up_btn = if i == 0 {
      @html.div(style=["width:32px"], "")
    } else {
      @html.button(
        style=[
          "width:32px",
          "height:32px",
          "display:flex",
          "align-items:center",
          "justify-content:center",
          "background:\{surface_alt}",
          "border:1px solid \{border}",
          "border-radius:\{radius_sm}",
          "cursor:pointer",
          "color:\{text_secondary}",
          "font-size:16px",
          "transition:background 0.15s",
          "padding:0",
        ],
        on_click=dispatch(DragSortMoveUp(i)),
        "↑",
      )
    }
    let down_btn = if i == n - 1 {
      @html.div(style=["width:32px"], "")
    } else {
      @html.button(
        style=[
          "width:32px",
          "height:32px",
          "display:flex",
          "align-items:center",
          "justify-content:center",
          "background:\{surface_alt}",
          "border:1px solid \{border}",
          "border-radius:\{radius_sm}",
          "cursor:pointer",
          "color:\{text_secondary}",
          "font-size:16px",
          "transition:background 0.15s",
          "padding:0",
        ],
        on_click=dispatch(DragSortMoveDown(i)),
        "↓",
      )
    }
    cards.push(
      @html.div(
        style=[
          "display:flex",
          "align-items:center",
          "gap:12px",
          "padding:12px 16px",
          "background:#fff",
          "border:1.5px solid \{border}",
          "border-radius:\{radius}",
          "margin-bottom:8px",
          "box-shadow:0 1px 4px rgba(0,0,0,0.05)",
          "transition:box-shadow 0.15s",
        ],
        [
          @html.span(
            style=[
              "font-size:12px",
              "font-weight:700",
              "color:\{text_muted}",
              "width:24px",
              "text-align:center",
              "flex-shrink:0",
            ],
            "\{i + 1}",
          ),
          @html.div(
            style=[
              "width:4px",
              "height:24px",
              "background:\{primary}",
              "border-radius:2px",
              "flex-shrink:0",
            ],
            "",
          ),
          @html.span(
            style=[
              "flex:1",
              "font-size:14px",
              "color:\{text_primary}",
              "font-weight:500",
            ],
            item,
          ),
          @html.div(style=["display:flex", "gap:6px", "flex-shrink:0"], [
            up_btn, down_btn,
          ]),
        ],
      ),
    )
  }
  @html.div(
    style=[
      "padding:24px",
      "background:\{surface}",
      "border-radius:\{radius}",
      "border:1px solid \{border}",
    ],
    [
      @html.h3(
        style=[
          "margin:0 0 4px",
          "font-size:16px",
          "font-weight:600",
          "color:\{text_primary}",
        ],
        "Drag Sort",
      ),
      @html.p(
        style=["margin:0 0 16px", "font-size:13px", "color:\{text_muted}"],
        "Use the arrows to reorder items.",
      ),
      @html.div(style=[], cards),
    ],
  )
}
