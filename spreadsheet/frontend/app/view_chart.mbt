///|
/// Renders an SVG bar chart from the active sheet's data.
/// Reads rows 2-6, columns A (label) and B-E (Q1-Q4 values).
fn Model::view_chart(self : Model) -> @rabbita.Html {
  // Find Sales Dashboard by name, fall back to current sheet
  let sheet = for s in self.sheets {
    if s.name == "Sales Dashboard" {
      break s
    }
  } nobreak {
    self.current_sheet()
  }
  // Collect product data from rows 2-6
  let products : Array[String] = []
  let q1 : Array[Double] = []
  let q2 : Array[Double] = []
  let q3 : Array[Double] = []
  let q4 : Array[Double] = []
  for r in 1..<6 {
    let name_key = @cell.make_key(0, r)
    let name_cell = sheet.get(name_key)
    let name = match name_cell.value {
      Text(s) => s
      _ => ""
    }
    if name.is_empty() {
      continue
    }
    products.push(name)
    q1.push(get_num(sheet, 1, r))
    q2.push(get_num(sheet, 2, r))
    q3.push(get_num(sheet, 3, r))
    q4.push(get_num(sheet, 4, r))
  }
  if products.is_empty() {
    return @html.div(style=[
        "padding: 20px", "text-align: center", "color: #5f6368", "font-size: 13px",
      ]) <| "No chart data available. Add product names in column A and numbers in columns B-E."
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
  let max_val = for i in 0..<products.length(); max_val = 1.0 {
    let m = max_val
    let m = if q1[i] > m { q1[i] } else { m }
    let m = if q2[i] > m { q2[i] } else { m }
    let m = if q3[i] > m { q3[i] } else { m }
    continue if q4[i] > m { q4[i] } else { m }
  } nobreak {
    // Round max up to nearest nice number
    max_val * 1.1
  }
  let n = products.length()
  let group_w = plot_w / n
  let bar_w = group_w / 6 // 4 bars + 2 gaps
  let colors = ["#4285f4", "#34a853", "#fbbc04", "#ea4335"]
  let quarter_labels = ["Q1", "Q2", "Q3", "Q4"]
  let elements : Array[@svg.Svg] = []
  // Background grid lines
  for i in 0..<=4 {
    let y = pad_top + plot_h - plot_h * i / 4
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
  for i in 0..<n {
    let group_x = pad_left + group_w * i + bar_w / 2
    let vals = [q1[i], q2[i], q3[i], q4[i]]
    for j in 0..<4 {
      let bar_h_val = vals[j] / max_val * plot_h.to_double()
      let bh = bar_h_val.to_int()
      let bx = group_x + bar_w * j
      let by = pad_top + plot_h - bh
      let delay = (i * 4 + j) * 40
      elements.push(
        @svg.rect(
          x=bx,
          y=by,
          width=bar_w - 2,
          height=bh,
          fill=colors[j],
          rx=2,
          ry=2,
          style=[
            "transform-box: fill-box",
            "transform-origin: bottom center",
            "animation: barGrow 0.6s ease-out \{delay}ms both",
          ],
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
  for j in 0..<4 {
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
      attrs=@svg.Attrs::build()
        .font_size("13")
        .font_weight("600")
        .text_anchor("middle"),
    ),
  )
  @svg.svg(
    width=chart_w,
    height=chart_h,
    view_box="0 0 \{chart_w} \{chart_h}",
    style=["background: #fff", "border-radius: 8px"],
  ) <| elements
}

///|
/// Renders an animated donut chart showing revenue share by product.
fn Model::view_donut_chart(self : Model) -> @rabbita.Html {
  // Find Sales Dashboard sheet
  let sheet = for s in self.sheets {
    if s.name == "Sales Dashboard" {
      break s
    }
  } nobreak {
    self.current_sheet()
  }
  // Collect annual totals per product from B-E (same source as bar chart)
  let products : Array[String] = []
  let totals : Array[Double] = []
  for r in 1..<6 {
    let name_cell = sheet.get(@cell.make_key(0, r))
    let name = match name_cell.value {
      Text(s) => s
      _ => ""
    }
    if name.is_empty() {
      continue
    }
    products.push(name)
    let row_total = get_num(sheet, 1, r) +
      get_num(sheet, 2, r) +
      get_num(sheet, 3, r) +
      get_num(sheet, 4, r)
    totals.push(row_total)
  }
  if products.is_empty() {
    return @html.span() <| ""
  }
  // Chart dimensions
  let size = 220
  let cx = size / 2
  let cy = size / 2
  let radius = 70
  let stroke_w = 32
  let colors = ["#4285f4", "#34a853", "#fbbc04", "#ea4335", "#9c27b0"]
  // Compute total
  let grand_total = for t in totals; grand_total = 0.0 {
    continue grand_total + t
  } nobreak {
    grand_total
  }
  if grand_total == 0.0 {
    return @html.span() <| ""
  }
  let circumference = 2.0 * 3.14159265 * radius.to_double()
  let circ_int = circumference.to_int()
  let elements : Array[@svg.Svg] = []
  // Background ring
  elements.push(
    @svg.circle(
      cx~,
      cy~,
      r=radius,
      fill="none",
      stroke="#f0f0f0",
      stroke_width=stroke_w,
    ),
  )
  // Donut segments — each circle uses dasharray to show only its arc
  for i in 0..<products.length(); offset_angle = -90.0 {
    // start from top
    let fraction = totals[i] / grand_total
    let arc_len = (circumference * fraction).to_int()
    let gap_len = circ_int + 1 // oversized gap avoids sub-pixel seam from rounding
    let rotation = offset_angle
    let delay = i * 150
    let color_idx = i % colors.length()
    // dasharray: "arc gap", dashoffset: arc→0 draws the segment
    elements.push(
      @svg.circle(
        cx~,
        cy~,
        r=radius,
        fill="none",
        stroke=colors[color_idx],
        stroke_width=stroke_w,
        style=[
          "transform-origin: center",
          "transform: rotate(\{rotation}deg)",
          "--circumference: \{arc_len}",
          "--dash-offset: 0",
          "animation: donutDraw 0.8s ease-out \{delay}ms both",
        ],
        attrs=@svg.Attrs::build()
          .stroke_dasharray("\{arc_len} \{gap_len}")
          .stroke_dashoffset("\{arc_len}"),
      ),
    )
    continue offset_angle + fraction * 360.0
  }
  // Center text: grand total
  let total_k = (grand_total / 1000.0 + 0.5).to_int()
  elements.push(
    @svg.svg_text(
      x=cx,
      y=cy - 6,
      text="$\{total_k}k",
      fill="#202124",
      attrs=@svg.Attrs::build()
        .font_size("16")
        .font_weight("700")
        .text_anchor("middle"),
    ),
  )
  elements.push(
    @svg.svg_text(
      x=cx,
      y=cy + 12,
      text="Total",
      fill="#5f6368",
      attrs=@svg.Attrs::build().font_size("11").text_anchor("middle"),
    ),
  )
  // Legend below chart
  for i in 0..<products.length() {
    let lx = 10
    let ly = size - 2 + i * 16
    let color_idx = i % colors.length()
    let pct = (totals[i] / grand_total * 100.0 + 0.5).to_int()
    elements.push(
      @svg.rect(
        x=lx,
        y=ly,
        width=10,
        height=10,
        fill=colors[color_idx],
        rx=2,
        ry=2,
      ),
    )
    elements.push(
      @svg.svg_text(
        x=lx + 14,
        y=ly + 9,
        text="\{products[i]} \{pct}%",
        fill="#5f6368",
        attrs=@svg.Attrs::build().font_size("10"),
      ),
    )
  }
  let total_h = size + products.length() * 16
  @svg.svg(width=size, height=total_h, view_box="0 0 \{size} \{total_h}", style=[
    "background: #fff", "border-radius: 8px",
  ]) <| elements
}

///|
/// Renders a tiny sparkline SVG for a single row's Q1-Q4 data.
fn view_sparkline(sheet : Sheet, row : Int) -> @rabbita.Html {
  let vals : Array[Double] = []
  for c in 1..<=4 {
    vals.push(get_num(sheet, c, row))
  }
  let w = 80
  let h = 22
  let pad = 3
  let pw = w - pad * 2
  let ph = h - pad * 2
  let (min_v, max_v) = for v in vals; min_v = vals[0], max_v = vals[0] {
    continue if v < min_v { v } else { min_v }, if v > max_v { v } else { max_v }
  } nobreak {
    (min_v, max_v)
  }
  let range = if max_v > min_v { max_v - min_v } else { 1.0 }
  // Compute polyline points
  let points : Array[(Int, Int)] = []
  let (min_idx, max_idx) = for i, v in vals; min_idx = 0, max_idx = 0 {
    let x = pad + pw * i / 3
    let y = pad + ph - ((v - min_v) / range * ph.to_double()).to_int()
    points.push((x, y))
    continue if v <= vals[min_idx] { i } else { min_idx }, if v >= vals[max_idx] {
      i
    } else {
      max_idx
    }
  } nobreak {
    (min_idx, max_idx)
  }
  // Build area fill path (polygon under the line)
  let area_points : Array[(Int, Int)] = []
  area_points.push((points[0].0, h - pad))
  for p in points {
    area_points.push(p)
  }
  area_points.push((points[points.length() - 1].0, h - pad))
  let elements : Array[@svg.Svg] = []
  // Gradient definition
  elements.push(
    @svg.defs([
      @svg.linear_gradient(
        id="sparkGrad",
        attrs=@svg.Attrs::build().x1("0").y1("0").x2("0").y2("1"),
        [
          @svg.stop(
            attrs=@svg.Attrs::build()
              .offset("0%")
              .stop_color("#34a853")
              .stop_opacity("0.3"),
          ),
          @svg.stop(
            attrs=@svg.Attrs::build()
              .offset("100%")
              .stop_color("#34a853")
              .stop_opacity("0.05"),
          ),
        ],
      ),
    ]),
  )
  // Area fill
  elements.push(@svg.polyline(points=area_points, fill="url(#sparkGrad)"))
  // Line
  elements.push(
    @svg.polyline(
      points~,
      fill="none",
      stroke="#34a853",
      stroke_width=2,
      attrs=@svg.Attrs::build().stroke_linejoin("round"),
    ),
  )
  // Min dot (red)
  let (min_x, min_y) = points[min_idx]
  elements.push(@svg.circle(cx=min_x, cy=min_y, r=2, fill="#ea4335"))
  // Max dot (green)
  let (max_x, max_y) = points[max_idx]
  elements.push(@svg.circle(cx=max_x, cy=max_y, r=2, fill="#34a853"))
  @svg.svg(width=w, height=h, view_box="0 0 \{w} \{h}", style=["display: block"]) <| elements
}

///|
fn get_num(sheet : Sheet, col : Int, row : Int) -> Double {
  let key = @cell.make_key(col, row)
  match sheet.get(key).value {
    Num(n) => n
    _ => 0.0
  }
}
