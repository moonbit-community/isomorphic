///|
fn days_in_month(year : Int, month : Int) -> Int {
  match month {
    1 | 3 | 5 | 7 | 8 | 10 | 12 => 31
    4 | 6 | 9 | 11 => 30
    2 =>
      if year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) {
        29
      } else {
        28
      }
    _ => 30
  }
}

///|
fn day_of_week(year : Int, month : Int, day : Int) -> Int {
  let m = if month < 3 { month + 12 } else { month }
  let y = if month < 3 { year - 1 } else { year }
  let k = y % 100
  let j = y / 100
  let h = (day + (13 * (m + 1)) / 5 + k + k / 4 + j / 4 - 2 * j) % 7
  (h + 5) % 7
}

///|
fn compare_row_by_col(a : TableRow, b : TableRow, col : String) -> Int {
  if col == "name" {
    if a.name < b.name { -1 } else if a.name > b.name { 1 } else { 0 }
  } else if col == "email" {
    if a.email < b.email { -1 } else if a.email > b.email { 1 } else { 0 }
  } else if col == "role" {
    if a.role < b.role { -1 } else if a.role > b.role { 1 } else { 0 }
  } else if col == "status" {
    if a.status < b.status { -1 } else if a.status > b.status { 1 } else { 0 }
  } else {
    0
  }
}

///|
fn Model::view_data_table(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let dt = self.data_table
  let sorted = dt.rows.copy()
  sorted.sort_by(fn(a, b) {
    let cmp = compare_row_by_col(a, b, dt.sort_col)
    if dt.sort_asc { cmp } else { -cmp }
  })
  let total = sorted.length()
  let total_pages = (total + dt.page_size - 1) / dt.page_size
  let page_start = dt.page * dt.page_size
  let page_end = if page_start + dt.page_size < total {
    page_start + dt.page_size
  } else {
    total
  }
  let page_rows = sorted[page_start:page_end]
  let cols = [("name", "Name"), ("email", "Email"), ("role", "Role"), ("status", "Status")]
  let th_style = [
    "padding: 10px 14px", "text-align: left", "font-size: 12px",
    "font-weight: 600", "color: \{text_secondary}", "background: \{surface_alt}",
    "border-bottom: 1px solid \{border}",
  ]
  let th_btn_style = [
    "background: none", "border: none", "cursor: pointer", "font-size: 12px",
    "font-weight: 600", "color: \{text_secondary}", "padding: 0", "width: 100%",
    "text-align: left",
  ]
  let td_style = [
    "padding: 10px 14px", "font-size: 14px", "color: \{text_primary}",
    "border-bottom: 1px solid \{border}",
  ]
  @html.div(
    style=["display: flex", "flex-direction: column", "gap: 12px"],
    [
      @html.div(
        style=["border: 1px solid \{border}", "border-radius: \{radius}", "overflow: hidden"],
        [
          @html.table(
            style=["width: 100%", "border-collapse: collapse"],
            [
              @html.thead(
                style=[],
                [
                  @html.tr(
                    style=[],
                    {
                      let headers : Array[@rabbita.Html] = []
                      for col in cols {
                        let key = col.0
                        let lbl = col.1
                        let arrow = if dt.sort_col == key {
                          if dt.sort_asc { " ^" } else { " v" }
                        } else {
                          ""
                        }
                        headers.push(
                          @html.th(
                            style=th_style,
                            [
                              @html.button(
                                style=th_btn_style,
                                on_click=dispatch(TableSort(key)),
                                "\{lbl}\{arrow}",
                              ),
                            ],
                          ),
                        )
                      }
                      headers
                    },
                  ),
                ],
              ),
              @html.tbody(
                style=[],
                {
                  let rows_el : Array[@rabbita.Html] = []
                  for i, row in page_rows {
                    let idx = page_start + i
                    let is_sel = dt.selected.contains(idx)
                    let row_bg = if is_sel { primary_light } else { surface }
                    let status_color = if row.status == "Active" { success } else { danger }
                    rows_el.push(
                      @html.tr(
                        style=["background: \{row_bg}"],
                        [
                          @html.td(
                            style=td_style,
                            [
                              @html.button(
                                style=["background: none", "border: none", "cursor: pointer", "font-size: 14px", "color: \{text_primary}", "padding: 0", "text-align: left"],
                                on_click=dispatch(TableToggleRow(idx)),
                                row.name,
                              ),
                            ],
                          ),
                          @html.td(style=td_style, row.email),
                          @html.td(style=td_style, row.role),
                          @html.td(
                            style=td_style,
                            [
                              @html.span(
                                style=[
                                  "padding: 2px 8px", "border-radius: \{radius_full}",
                                  "font-size: 12px", "font-weight: 600",
                                  "color: \{status_color}",
                                ],
                                row.status,
                              ),
                            ],
                          ),
                        ],
                      ),
                    )
                  }
                  rows_el
                },
              ),
            ],
          ),
        ],
      ),
      @html.div(
        style=["display: flex", "align-items: center", "justify-content: space-between", "font-size: 13px", "color: \{text_secondary}"],
        [
          @html.span(style=[], "Showing \{page_start + 1}-\{page_end} of \{total}"),
          @html.div(
            style=["display: flex", "gap: 8px"],
            [
              @html.button(
                style=btn_outline_style,
                on_click=dispatch(TablePage(dt.page - 1)),
                "Prev",
              ),
              @html.span(style=["padding: 6px 12px"], "Page \{dt.page + 1} / \{total_pages}"),
              @html.button(
                style=btn_outline_style,
                on_click=dispatch(TablePage(dt.page + 1)),
                "Next",
              ),
            ],
          ),
        ],
      ),
    ],
  )
}

///|
fn Model::view_calendar(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let cal = self.calendar
  let month_names = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ]
  let month_name = month_names[cal.month - 1]
  let first_dow = day_of_week(cal.year, cal.month, 1)
  let num_days = days_in_month(cal.year, cal.month)
  let day_labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  @html.div(
    style=["display: flex", "flex-direction: column", "gap: 12px", "max-width: 320px"],
    [
      @html.div(
        style=["display: flex", "align-items: center", "justify-content: space-between"],
        [
          @html.button(style=btn_outline_style, on_click=dispatch(CalendarPrevMonth), "<"),
          @html.span(
            style=["font-size: 16px", "font-weight: 600", "color: \{text_primary}"],
            "\{month_name} \{cal.year}",
          ),
          @html.button(style=btn_outline_style, on_click=dispatch(CalendarNextMonth), ">"),
        ],
      ),
      @html.div(
        style=["display: grid", "grid-template-columns: repeat(7, 1fr)", "gap: 2px"],
        {
          let cells : Array[@rabbita.Html] = []
          for dl in day_labels {
            cells.push(
              @html.div(
                style=["text-align: center", "font-size: 11px", "font-weight: 600", "color: \{text_muted}", "padding: 4px 0"],
                dl,
              ),
            )
          }
          for _ in 0..<first_dow {
            cells.push(@html.div(style=["padding: 4px"], ""))
          }
          for day = 1; day <= num_days; day = day + 1 {
            let is_today = cal.year == cal.today_year && cal.month == cal.today_month && day == cal.today_day
            let is_sel = day == cal.selected_day
            let d = day
            let btn_bg = if is_sel { primary } else if is_today { primary_light } else { "transparent" }
            let btn_fg = if is_sel { "white" } else if is_today { primary } else { text_primary }
            let btn_fw = if is_sel || is_today { "700" } else { "400" }
            cells.push(
              @html.button(
                style=[
                  "text-align: center", "padding: 6px 0", "border: none",
                  "border-radius: \{radius_sm}", "cursor: pointer", "font-size: 14px",
                  "background: \{btn_bg}", "color: \{btn_fg}", "font-weight: \{btn_fw}",
                ],
                on_click=dispatch(CalendarSelectDay(d)),
                "\{d}",
              ),
            )
          }
          cells
        },
      ),
      @html.span(
        style=["font-size: 13px", "color: \{text_secondary}"],
        "Selected: \{month_name} \{cal.selected_day}, \{cal.year}",
      ),
    ],
  )
}

///|
fn Model::view_timeline(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(
    style=["display: flex", "flex-direction: column", "gap: 0"],
    {
      let event_els : Array[@rabbita.Html] = []
      for i, evt in self.timeline.events {
        let is_last = i == self.timeline.events.length() - 1
        let pb = if is_last { "0" } else { "24" }
        event_els.push(
          @html.div(
            style=["display: flex", "gap: 16px", "padding-bottom: \{pb}px"],
            [
              @html.div(
                style=["display: flex", "flex-direction: column", "align-items: center"],
                [
                  @html.div(
                    style=[
                      "width: 14px", "height: 14px", "border-radius: 50%",
                      "background: \{evt.color}", "flex-shrink: 0",
                    ],
                    "",
                  ),
                  if !is_last {
                    @html.div(
                      style=["width: 2px", "flex: 1", "background: \{border}", "margin-top: 4px"],
                      "",
                    )
                  } else {
                    @html.nothing
                  },
                ],
              ),
              @html.div(
                style=["flex: 1", "padding-bottom: 4px"],
                [
                  @html.div(
                    style=["display: flex", "align-items: baseline", "gap: 8px", "margin-bottom: 4px"],
                    [
                      @html.span(
                        style=["font-size: 15px", "font-weight: 600", "color: \{text_primary}"],
                        evt.title,
                      ),
                      @html.span(
                        style=["font-size: 12px", "color: \{text_muted}"],
                        evt.time,
                      ),
                    ],
                  ),
                  @html.p(
                    style=["margin: 0", "font-size: 14px", "color: \{text_secondary}", "line-height: 1.5"],
                    evt.description,
                  ),
                ],
              ),
            ],
          ),
        )
      }
      event_els
    },
  )
}

///|
fn Model::view_chart(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let chart = self.chart
  let w = 400
  let h = 200
  let pad_left = 10
  let pad_bottom = 30
  let pad_top = 10
  let pad_right = 10
  let chart_w = w - pad_left - pad_right
  let chart_h = h - pad_top - pad_bottom
  let n = chart.bars.length()
  let bar_group = if n > 0 { chart_w / n } else { 1 }
  let bar_w = bar_group * 6 / 10
  let svg_children : Array[@svg.Svg] = []
  for i, bar in chart.bars {
    let bar_h = if chart.max_value > 0 {
      chart_h * bar.value / chart.max_value
    } else {
      0
    }
    let bx = pad_left + i * bar_group + (bar_group - bar_w) / 2
    let by = pad_top + chart_h - bar_h
    let lx = bx + bar_w / 2
    let ly = h - pad_bottom + 14
    svg_children.push(
      @svg.rect(x=bx, y=by, width=bar_w, height=bar_h, fill=bar.color),
    )
    svg_children.push(
      @svg.svg_text(x=lx, y=ly, text=bar.label, fill=text_secondary),
    )
  }
  @html.div(
    style=["display: flex", "flex-direction: column", "gap: 8px"],
    [
      @html.label(style=label_style, "Bar Chart"),
      @svg.svg(
        width=w,
        height=h,
        view_box="0 0 \{w} \{h}",
        svg_children,
      ),
    ],
  )
}
