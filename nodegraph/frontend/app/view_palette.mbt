///|
fn Model::view_palette(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let categories = ["math", "string", "logic", "color", "constant", "display"]
  let cat_labels = ["Math", "String", "Logic", "Color", "Const", "Display"]
  let cat_colors = [
    "#4CAF50", "#FF9800", "#2196F3", "#E91E63", "#9C27B0", "#607D8B",
  ]
  // Tab buttons
  let tabs : Array[@rabbita.Html] = []
  for i = 0; i < categories.length(); i = i + 1 {
    let cat = categories[i]
    let active = self.palette_cat == cat || (self.palette_cat == "" && i == 0)
    tabs.push(
      @html.button(
        style=[
          "padding: 5px 12px",
          "border: none",
          "border-radius: 4px",
          "cursor: pointer",
          "font-size: 0.75em",
          "font-weight: 600",
          if active {
            "background: \{cat_colors[i]}; color: #fff"
          } else {
            "background: #222; color: #888"
          },
        ],
        on_click=dispatch(SetPaletteCat(cat)),
      ) <| cat_labels[i],
    )
  }
  // Node buttons for selected category
  let active_cat = if self.palette_cat == "" {
    "math"
  } else {
    self.palette_cat
  }
  let node_buttons : Array[@rabbita.Html] = []
  for kind in @shared.all_kinds {
    if @shared.node_category(kind) == active_cat {
      let ins = @shared.input_ports(kind)
      let outs = @shared.output_ports(kind)
      // Build port type badges
      let port_info : Array[@rabbita.Html] = []
      for p in ins {
        port_info.push(
          @html.span(style=[
            "font-size: 0.6em",
            "padding: 1px 4px",
            "border-radius: 3px",
            "background: \{@shared.port_type_color(p.port_type)}30",
            "color: \{@shared.port_type_color(p.port_type)}",
          ]) <| "\u{2192}\{@shared.port_type_label(p.port_type)}",
        )
      }
      for p in outs {
        port_info.push(
          @html.span(style=[
            "font-size: 0.6em",
            "padding: 1px 4px",
            "border-radius: 3px",
            "background: \{@shared.port_type_color(p.port_type)}30",
            "color: \{@shared.port_type_color(p.port_type)}",
          ]) <| "\{@shared.port_type_label(p.port_type)}\u{2192}",
        )
      }
      node_buttons.push(
        @html.button(
          style=[
            "display: flex", "flex-direction: column", "align-items: flex-start",
            "padding: 8px 12px", "background: #16213e", "border: 1px solid #0f3460",
            "border-radius: 6px", "cursor: pointer", "color: #eee", "font-family: inherit",
            "gap: 3px",
          ],
          on_click=dispatch(AddNode(kind)),
        ) <| [
          @html.span(style=["font-weight: 600", "font-size: 0.85em"]) <| @shared.node_label(
            kind,
          ),
          @html.div(style=["display: flex", "gap: 3px", "flex-wrap: wrap"]) <| port_info,
        ],
      )
    }
  }
  @html.div(style=[
    "background: #0d1b2a", "padding: 12px", "border-radius: 8px", "margin-bottom: 12px",
    "border: 1px solid #1b2838",
  ]) <| [
    @html.div(style=[
      "display: flex", "gap: 4px", "margin-bottom: 8px", "flex-wrap: wrap",
    ]) <| tabs,
    @html.div(style=["display: flex", "gap: 6px", "flex-wrap: wrap"]) <| node_buttons,
  ]
}
