///|
fn Model::view_kanban(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let ks = self.kanban
  @html.div(style=["display: flex", "gap: 16px", "align-items: flex-start"]) <| ({
    let col_els : Array[@rabbita.Html] = []
    for col_idx, col in ks.columns {
      let col_name = col.0
      let cards = col.1
      let num_cols = ks.columns.length()
      col_els.push(
        @html.div(style=[
          "flex: 1",
          "min-width: 0",
          "background: \{surface_alt}",
          "border-radius: \{radius}",
          "padding: 16px",
          "border: 1px solid \{border}",
        ]) <| [
          @html.div(style=[
            "font-size: 13px",
            "font-weight: 700",
            "color: \{text_secondary}",
            "margin-bottom: 12px",
          ]) <| "\{col_name} (\{cards.length()})",
          @html.div(style=[
            "display: flex", "flex-direction: column", "gap: 10px",
          ]) <| ({
            let card_els : Array[@rabbita.Html] = []
            for card in cards {
              card_els.push(
                @html.div(style=[
                  "background: \{surface}",
                  "border-radius: \{radius}",
                  "padding: 12px",
                  "border: 1px solid \{border}",
                  "border-left: 4px solid \{card.color}",
                ]) <| [
                  @html.span(style=[
                    "font-size: 14px",
                    "font-weight: 600",
                    "color: \{text_primary}",
                    "display: block",
                    "margin-bottom: 8px",
                  ]) <| card.title,
                  @html.div(style=["display: flex", "gap: 6px"]) <| [
                    if col_idx > 0 {
                      @html.button(
                        style=btn_sm_style,
                        on_click=dispatch(
                          KanbanMoveCard(card.id, col_idx, col_idx - 1),
                        ),
                      ) <| "< Back"
                    } else {
                      @html.nothing
                    },
                    if col_idx < num_cols - 1 {
                      @html.button(
                        style=btn_sm_style,
                        on_click=dispatch(
                          KanbanMoveCard(card.id, col_idx, col_idx + 1),
                        ),
                      ) <| "Forward >"
                    } else {
                      @html.nothing
                    },
                  ],
                ],
              )
            }
            card_els
          }),
        ],
      )
    }
    col_els
  })
}

///|
fn Model::view_searchable_select(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let ss = self.searchable_select
  let filtered : Array[SelectOption] = []
  for opt in ss.options {
    if ss.query.is_empty() || opt.label.to_lower().contains(ss.query.to_lower()) {
      filtered.push(opt)
    }
  }
  let selected_label = if ss.selected.is_empty() {
    "Select an option..."
  } else {
    for opt in ss.options {
      if opt.value == ss.selected {
        break opt.label
      }
    } nobreak {
      ss.selected
    }
  }
  let open_border = if ss.open { primary } else { border }
  let arrow = if ss.open { "^" } else { "v" }
  @html.div(style=[
    "display: flex", "flex-direction: column", "gap: 8px", "max-width: 340px",
  ]) <| [
    @html.label(style=label_style) <| "Searchable Select",
    @html.div(style=["position: relative"]) <| [
      @html.button(
        style=[
          "display: flex",
          "align-items: center",
          "justify-content: space-between",
          "width: 100%",
          "padding: 9px 14px",
          "border: 1px solid \{open_border}",
          "border-radius: \{radius}",
          "background: \{surface}",
          "cursor: pointer",
          "font-size: 14px",
          "color: \{text_primary}",
        ],
        on_click=dispatch(SearchableToggleOpen),
      ) <| "\{selected_label} \{arrow}",
      if ss.open {
        @html.div(style=[
          "position: absolute",
          "top: calc(100% + 4px)",
          "left: 0",
          "right: 0",
          "background: \{surface}",
          "border: 1px solid \{border}",
          "border-radius: \{radius}",
          "box-shadow: 0 8px 24px rgba(0,0,0,0.1)",
          "z-index: 100",
          "overflow: hidden",
        ]) <| [
          @html.div(style=["padding: 8px"]) <| [
            @html.input(
              input_type=Text,
              value=ss.query,
              placeholder="Search...",
              on_input=s => dispatch(SearchableQueryChanged(s)),
              style=input_style,
            ) <| "",
          ],
          @html.div(style=["max-height: 200px", "overflow-y: auto"]) <| ({
            let opt_els : Array[@rabbita.Html] = []
            if filtered.is_empty() {
              opt_els.push(
                @html.div(style=[
                  "padding: 10px 14px",
                  "font-size: 14px",
                  "color: \{text_muted}",
                ]) <| "No results",
              )
            } else {
              for i, opt in filtered {
                let is_sel = opt.value == ss.selected
                let is_focused = i == ss.focus_index
                let opt_bg = if is_sel {
                  primary_light
                } else if is_focused {
                  surface_alt
                } else {
                  surface
                }
                let opt_fg = if is_sel { primary } else { text_primary }
                let opt_fw = if is_sel { "600" } else { "400" }
                opt_els.push(
                  @html.button(
                    style=[
                      "display: block",
                      "width: 100%",
                      "padding: 9px 14px",
                      "border: none",
                      "cursor: pointer",
                      "font-size: 14px",
                      "text-align: left",
                      "background: \{opt_bg}",
                      "color: \{opt_fg}",
                      "font-weight: \{opt_fw}",
                    ],
                    on_click=dispatch(SearchableSelect_(opt.value)),
                  ) <| opt.label,
                )
              }
            }
            opt_els
          }),
        ]
      } else {
        @html.nothing
      },
    ],
  ]
}

///|
fn dr_days_in_month(year : Int, month : Int) -> Int {
  match month {
    1 | 3 | 5 | 7 | 8 | 10 | 12 => 31
    4 | 6 | 9 | 11 => 30
    2 =>
      if year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) {
        29
      } else {
        28
      }
    _ => 30
  }
}

///|
fn dr_day_of_week(year : Int, month : Int, day : Int) -> Int {
  let t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4]
  let y = if month < 3 { year - 1 } else { year }
  (y + y / 4 - y / 100 + y / 400 + t[month - 1] + day) % 7
}

///|
fn Model::view_date_range(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let dr = self.date_range
  let year = dr.start_year
  let month = dr.start_month
  let num_days = dr_days_in_month(year, month)
  let first_dow = dr_day_of_week(year, month, 1)
  let month_names = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December",
  ]
  let month_name = if month >= 1 && month <= 12 {
    month_names[month - 1]
  } else {
    "Month"
  }
  let day_labels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
  let start_btn_bg = if dr.picking == "start" { primary } else { surface }
  let start_btn_fg = if dr.picking == "start" { "white" } else { text_primary }
  let start_btn_border = if dr.picking == "start" { primary } else { border }
  let end_btn_bg = if dr.picking == "end" { primary } else { surface }
  let end_btn_fg = if dr.picking == "end" { "white" } else { text_primary }
  let end_btn_border = if dr.picking == "end" { primary } else { border }
  let start_label = if dr.start_day > 0 {
    "Start: \{dr.start_day}"
  } else {
    "Start: ?"
  }
  let end_label = if dr.end_day > 0 { "End: \{dr.end_day}" } else { "End: ?" }
  @html.div(style=[
    "display: flex", "flex-direction: column", "gap: 12px", "max-width: 320px",
  ]) <| [
    @html.label(style=label_style) <| "Date Range Picker",
    @html.div(style=["display: flex", "gap: 8px"]) <| [
      @html.button(
        style=[
          "padding: 6px 12px",
          "border-radius: \{radius}",
          "border: 1px solid \{start_btn_border}",
          "background: \{start_btn_bg}",
          "color: \{start_btn_fg}",
          "cursor: pointer",
          "font-size: 13px",
        ],
        on_click=dispatch(DateRangeSetPicking("start")),
      ) <| start_label,
      @html.button(
        style=[
          "padding: 6px 12px",
          "border-radius: \{radius}",
          "border: 1px solid \{end_btn_border}",
          "background: \{end_btn_bg}",
          "color: \{end_btn_fg}",
          "cursor: pointer",
          "font-size: 13px",
        ],
        on_click=dispatch(DateRangeSetPicking("end")),
      ) <| end_label,
    ],
    @html.div(style=[
      "display: flex", "align-items: center", "justify-content: space-between",
    ]) <| [
      @html.button(
        style=btn_outline_style,
        on_click=dispatch(DateRangePrevMonth),
      ) <| "<",
      @html.span(style=[
        "font-size: 14px",
        "font-weight: 600",
        "color: \{text_primary}",
      ]) <| "\{month_name} \{year}",
      @html.button(
        style=btn_outline_style,
        on_click=dispatch(DateRangeNextMonth),
      ) <| ">",
    ],
    @html.div(style=[
      "display: grid", "grid-template-columns: repeat(7, 1fr)", "gap: 2px",
    ]) <| ({
      let cells : Array[@rabbita.Html] = []
      for dl in day_labels {
        cells.push(
          @html.div(style=[
            "text-align: center",
            "font-size: 11px",
            "font-weight: 600",
            "color: \{text_muted}",
            "padding: 4px 0",
          ]) <| dl,
        )
      }
      for _ in 0..<first_dow {
        cells.push(@html.div(style=["padding: 4px"]) <| "")
      }
      for d = 1; d <= num_days; d = d + 1 {
        let lo = if dr.start_day < dr.end_day {
          dr.start_day
        } else {
          dr.end_day
        }
        let hi = if dr.start_day > dr.end_day {
          dr.start_day
        } else {
          dr.end_day
        }
        let is_start = d == dr.start_day
        let is_end = d == dr.end_day
        let in_range = d >= lo && d <= hi && lo > 0 && hi > 0
        let dd = d
        let day_bg = if is_start || is_end {
          primary
        } else if in_range {
          primary_light
        } else {
          "transparent"
        }
        let day_fg = if is_start || is_end {
          "white"
        } else if in_range {
          primary
        } else {
          text_primary
        }
        let day_fw = if is_start || is_end { "700" } else { "400" }
        cells.push(
          @html.button(
            style=[
              "text-align: center",
              "padding: 6px 0",
              "border: none",
              "cursor: pointer",
              "font-size: 13px",
              "border-radius: \{radius_sm}",
              "background: \{day_bg}",
              "color: \{day_fg}",
              "font-weight: \{day_fw}",
            ],
            on_click=dispatch(DateRangeSelectDay(dd)),
          ) <| "\{dd}",
        )
      }
      cells
    }),
  ]
}

///|
fn Model::view_form_wizard(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let fw = self.form_wizard
  let total = fw.steps.length()
  if fw.completed {
    return @html.div(style=[
        "display: flex", "flex-direction: column", "align-items: center", "padding: 40px 24px",
        "text-align: center", "gap: 12px",
      ]) <| [
        @html.div(style=["font-size: 48px"]) <| "",
        @html.h3(style=[
          "margin: 0",
          "font-size: 20px",
          "font-weight: 700",
          "color: \{text_primary}",
        ]) <| "All Done!",
        @html.p(style=["margin: 0", "color: \{text_secondary}"]) <| "Form submitted successfully.",
      ]
  }
  let current_step = fw.steps[fw.current]
  let next_label = if fw.current == total - 1 { "Submit" } else { "Next" }
  @html.div(style=[
    "display: flex", "flex-direction: column", "gap: 20px", "max-width: 480px",
  ]) <| [
    @html.div(style=["display: flex", "align-items: center", "gap: 8px"]) <| ({
      let indicators : Array[@rabbita.Html] = []
      for idx, step in fw.steps {
        let is_done = idx < fw.current
        let is_cur = idx == fw.current
        let circle_bg = if is_done {
          success
        } else if is_cur {
          primary
        } else {
          border
        }
        let circle_fg = if is_done || is_cur { "white" } else { text_muted }
        let step_label = if is_done { "" } else { "\{idx + 1}" }
        let title_color = if is_cur { primary } else { text_muted }
        indicators.push(
          @html.div(style=["display: flex", "align-items: center", "gap: 4px"]) <| [
            @html.div(style=[
              "width: 28px",
              "height: 28px",
              "border-radius: 50%",
              "display: flex",
              "align-items: center",
              "justify-content: center",
              "font-size: 13px",
              "font-weight: 700",
              "background: \{circle_bg}",
              "color: \{circle_fg}",
            ]) <| step_label,
            @html.span(style=["font-size: 12px", "color: \{title_color}"]) <| step.title,
          ],
        )
        if idx < total - 1 {
          indicators.push(
            @html.div(style=["flex: 1", "height: 1px", "background: \{border}"]) <| "",
          )
        }
      }
      indicators
    }),
    @html.h4(style=[
      "margin: 0",
      "font-size: 16px",
      "font-weight: 700",
      "color: \{text_primary}",
    ]) <| current_step.title,
    @html.div(style=["display: flex", "flex-direction: column", "gap: 12px"]) <| ({
      let field_els : Array[@rabbita.Html] = []
      for fidx, field in current_step.fields {
        let inp_border = if !field.error.is_empty() { danger } else { border }
        field_els.push(
          @html.div(style=[
            "display: flex", "flex-direction: column", "gap: 4px",
          ]) <| [
            @html.label(style=label_style) <| field.label,
            @html.input(
              input_type=Text,
              value=field.value,
              placeholder=field.label,
              on_input=v => dispatch(WizardFieldChanged(fidx, v)),
              style=[
                "width: 100%",
                "padding: 8px 12px",
                "border: 1px solid \{inp_border}",
                "border-radius: \{radius}",
                "font-size: 14px",
                "outline: none",
                "color: \{text_primary}",
                "background: white",
                "box-sizing: border-box",
              ],
            ) <| "",
            if !field.error.is_empty() {
              @html.span(style=["font-size: 12px", "color: \{danger}"]) <| field.error
            } else {
              @html.nothing
            },
          ],
        )
      }
      field_els
    }),
    @html.div(style=[
      "display: flex", "justify-content: space-between", "align-items: center",
    ]) <| [
      if fw.current > 0 {
        @html.button(style=btn_outline_style, on_click=dispatch(WizardPrev)) <| "Previous"
      } else {
        @html.nothing
      },
      @html.div(style=["display: flex", "align-items: center", "gap: 12px"]) <| [
        @html.span(style=["font-size: 13px", "color: \{text_muted}"]) <| "Step \{fw.current + 1} of \{total}",
        @html.button(style=btn_style, on_click=dispatch(WizardNext)) <| next_label,
      ],
    ],
  ]
}
