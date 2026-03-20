///|
fn Model::view_connections(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  if self.connections.is_empty() {
    return @html.div(
      style=[
        "text-align: center", "color: #444", "padding: 12px",
        "font-size: 0.8em",
      ],
      "No connections. Click \"Connect \u{2192}\" on an output port to start wiring.",
    )
  }
  let rows : Array[@rabbita.Html] = self.connections.map(fn(c) {
    // Find source and target node info
    let mut from_label = "#\{c.from_node_id}"
    let mut from_port_name = "[\{c.from_port}]"
    let mut from_color = "#888"
    let mut to_label = "#\{c.to_node_id}"
    let mut to_port_name = "[\{c.to_port}]"
    let mut to_color = "#888"
    for n in self.nodes {
      if n.id == c.from_node_id {
        from_label = n.label
        let ports = @shared.output_ports(n.kind)
        if c.from_port < ports.length() {
          from_port_name = ports[c.from_port].name
          from_color = @shared.port_type_color(ports[c.from_port].port_type)
        }
      }
      if n.id == c.to_node_id {
        to_label = n.label
        let ports = @shared.input_ports(n.kind)
        if c.to_port < ports.length() {
          to_port_name = ports[c.to_port].name
          to_color = @shared.port_type_color(ports[c.to_port].port_type)
        }
      }
    }
    @html.div(
      style=[
        "display: flex", "align-items: center", "gap: 6px",
        "padding: 6px 10px", "background: #16213e", "border-radius: 4px",
        "margin-bottom: 4px", "font-size: 0.8em",
      ],
      [
        // Source
        @html.span(
          style=["color: \{from_color}", "font-weight: 600"],
          from_label,
        ),
        @html.span(style=["color: #666"], ".\{from_port_name}"),
        @html.span(style=["color: #e94560"], "\u{2192}"),
        // Target
        @html.span(
          style=["color: \{to_color}", "font-weight: 600"],
          to_label,
        ),
        @html.span(style=["color: #666"], ".\{to_port_name}"),
        // Spacer
        @html.div(style=["flex: 1"], ""),
        // Delete
        @html.button(
          style=[
            "padding: 2px 8px", "background: #333", "color: #888",
            "border: none", "border-radius: 3px", "cursor: pointer",
            "font-size: 0.75em",
          ],
          on_click=dispatch(DeleteConnection(c.id)),
          "\u{2715}",
        ),
      ],
    )
  })
  let children : Array[@rabbita.Html] = [
    @html.div(
      style=[
        "font-size: 0.75em", "color: #666", "margin-bottom: 6px",
        "letter-spacing: 1px",
      ],
      "CONNECTIONS (\{self.connections.length()})",
    ),
  ]
  for row in rows {
    children.push(row)
  }
  @html.div(
    style=["border-top: 1px solid #333", "padding-top: 12px"],
    children,
  )
}
