///|
/// Renders an SVG bar chart from the active sheet's data.
/// Reads rows 2-6, columns A (label) and B-E (Q1-Q4 values).

fn Model::view_chart(self : Model) -> @rabbita.Html {
  // Find Sales Dashboard by name, fall back to current sheet
  let mut sheet = self.current_sheet()
  for s in self.sheets {
    if s.name == "Sales Dashboard" {
      sheet = s
      break
    }
  }
  // Collect product data from rows 2-6
  let products : Array[String] = []
  let q1 : Array[Double] = []
  let q2 : Array[Double] = []
  let q3 : Array[Double] = []
  let q4 : Array[Double] = []
  for r = 1; r < 6; r = r + 1 {
    let name_key = @cell.make_key(0, r)
    let name_cell = sheet.get(name_key)
    let name = match name_cell.value {
      Text(s) => s
      _ => ""
    }
    if name == "" {
      continue
    }
    products.push(name)
    q1.push(get_num(sheet, 1, r))
    q2.push(get_num(sheet, 2, r))
    q3.push(get_num(sheet, 3, r))
    q4.push(get_num(sheet, 4, r))
  }
  if products.is_empty() {
    return @html.div(
      style=[
        "padding: 20px", "text-align: center", "color: #5f6368",
        "font-size: 13px",
      ],
      "No chart data available. Add product names in column A and numbers in columns B-E.",
    )
  }
  // Chart dimensions
  let chart_w = 680
  let chart_h = 220
  let pad_left = 80
  let pad_right = 20
  let pad_top = 30
  let pad_bottom = 40
  let plot_w = chart_w - pad_left - pad_right
  let plot_h = chart_h - pad_top - pad_bottom
  // Find max value for scaling
  let mut max_val = 1.0
  for i = 0; i < products.length(); i = i + 1 {
    if q1[i] > max_val { max_val = q1[i] }
    if q2[i] > max_val { max_val = q2[i] }
    if q3[i] > max_val { max_val = q3[i] }
    if q4[i] > max_val { max_val = q4[i] }
  }
  // Round max up to nearest nice number
  max_val = max_val * 1.1
  let n = products.length()
  let group_w = plot_w / n
  let bar_w = group_w / 6 // 4 bars + 2 gaps
  let colors = ["#4285f4", "#34a853", "#fbbc04", "#ea4335"]
  let quarter_labels = ["Q1", "Q2", "Q3", "Q4"]
  let elements : Array[@svg.Svg] = []
  // Background grid lines
  for i = 0; i <= 4; i = i + 1 {
    let y = pad_top + plot_h - (plot_h * i / 4)
    elements.push(
      @svg.line(
        x1=pad_left,
        y1=y,
        x2=pad_left + plot_w,
        y2=y,
        stroke="#e0e0e0",
        stroke_width=1,
      ),
    )
    // Y-axis labels
    let label_val = max_val * i.to_double() / 4.0
    let label_k = (label_val / 1000.0 + 0.5).to_int()
    elements.push(
      @svg.svg_text(
        x=pad_left - 8,
        y=y + 4,
        text="\{label_k}k",
        fill="#5f6368",
        attrs=@svg.Attrs::build().font_size("11").text_anchor("end"),
      ),
    )
  }
  // Bars for each product
  for i = 0; i < n; i = i + 1 {
    let group_x = pad_left + group_w * i + bar_w / 2
    let vals = [q1[i], q2[i], q3[i], q4[i]]
    for j = 0; j < 4; j = j + 1 {
      let bar_h_val = vals[j] / max_val * plot_h.to_double()
      let bh = bar_h_val.to_int()
      let bx = group_x + bar_w * j
      let by = pad_top + plot_h - bh
      elements.push(
        @svg.rect(
          x=bx,
          y=by,
          width=bar_w - 2,
          height=bh,
          fill=colors[j],
          rx=2, ry=2,
        ),
      )
    }
    // Product label below bars
    let label_x = group_x + bar_w * 2
    elements.push(
      @svg.svg_text(
        x=label_x,
        y=pad_top + plot_h + 16,
        text=products[i],
        fill="#202124",
        attrs=@svg.Attrs::build().font_size("11").text_anchor("middle"),
      ),
    )
  }
  // Legend
  for j = 0; j < 4; j = j + 1 {
    let lx = pad_left + j * 70
    let ly = 10
    elements.push(
      @svg.rect(x=lx, y=ly, width=12, height=12, fill=colors[j], rx=2, ry=2),
    )
    elements.push(
      @svg.svg_text(
        x=lx + 16,
        y=ly + 10,
        text=quarter_labels[j],
        fill="#5f6368",
        attrs=@svg.Attrs::build().font_size("11"),
      ),
    )
  }
  // Title
  elements.push(
    @svg.svg_text(
      x=pad_left + plot_w / 2,
      y=16,
      text="Quarterly Revenue by Product",
      fill="#202124",
      attrs=@svg.Attrs::build().font_size("13").font_weight("600").text_anchor("middle"),
    ),
  )
  @svg.svg(
    width=chart_w,
    height=chart_h,
    view_box="0 0 \{chart_w} \{chart_h}",
    style=["background: #fff", "border-radius: 8px"],
    elements,
  )
}

///|
fn get_num(sheet : Sheet, col : Int, row : Int) -> Double {
  let key = @cell.make_key(col, row)
  match sheet.get(key).value {
    Num(n) => n
    _ => 0.0
  }
}
