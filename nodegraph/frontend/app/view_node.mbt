///|
fn Model::view_nodes(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  if self.nodes.is_empty() {
    return @html.div(
      style=["text-align: center", "color: #555", "padding: 40px"],
      "No nodes yet. Open the palette to add some!",
    )
  }
  let cards : Array[@rabbita.Html] = self.nodes.map(fn(n) {
    self.view_single_node(n, dispatch)
  })
  @html.div(
    style=[
      "display: flex", "flex-wrap: wrap", "gap: 12px", "margin-bottom: 16px",
    ],
    cards,
  )
}

///|
fn Model::view_single_node(
  self : Model,
  node : @shared.Node,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let cat = @shared.node_category(node.kind)
  let cat_color = match cat {
    "math" => "#4CAF50"
    "string" => "#FF9800"
    "logic" => "#2196F3"
    "color" => "#E91E63"
    "constant" => "#9C27B0"
    _ => "#607D8B"
  }
  let in_ports = @shared.input_ports(node.kind)
  let out_ports = @shared.output_ports(node.kind)
  // Get eval output values for this node
  let node_vals = match self.eval_result {
    Some(r) => @shared.get_node_outputs(r, node.id)
    None => []
  }
  let is_const = match node.kind {
    ConstNumber | ConstString | ConstBool | ConstColor => true
    _ => false
  }
  @html.div(
    style=[
      "min-width: 180px", "max-width: 240px", "background: #16213e",
      "border: 2px solid \{cat_color}", "border-radius: 8px",
      "overflow: hidden",
    ],
    [
      // Header
      @html.div(
        style=[
          "background: \{cat_color}", "padding: 6px 10px",
          "display: flex", "justify-content: space-between", "align-items: center",
        ],
        [
          @html.span(
            style=["font-weight: 700", "font-size: 0.8em", "color: #fff"],
            node.label,
          ),
          @html.button(
            style=[
              "background: none", "border: none", "color: rgba(255,255,255,0.7)",
              "cursor: pointer", "font-size: 0.8em",
            ],
            on_click=dispatch(DeleteNode(node.id)),
            "\u{2715}",
          ),
        ],
      ),
      // Body
      @html.div(style=["padding: 8px"], [
        // Config editing for constant nodes
        if is_const {
          self.view_const_config(node, dispatch)
        } else {
          @html.text("")
        },
        // Input ports
        self.view_input_ports(node, in_ports, dispatch),
        // Output ports
        self.view_output_ports(node, out_ports, dispatch),
        // Eval result display
        self.view_node_values(node, node_vals),
      ]),
    ],
  )
}

///|
fn Model::view_const_config(
  self : Model,
  node : @shared.Node,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  if self.editing_node == node.id {
    @html.div(
      style=["display: flex", "gap: 4px", "margin-bottom: 6px"],
      [
        @html.input(
          input_type=Text,
          value=self.config_value,
          on_input=fn(v) { dispatch(SetConfigValue(v)) },
          style=[
            "flex: 1", "padding: 4px 6px", "background: #0d1b2a",
            "border: 1px solid #e94560", "border-radius: 3px",
            "color: #eee", "font-family: inherit", "font-size: 0.8em",
          ],
          "",
        ),
        @html.button(
          style=[
            "padding: 4px 8px", "background: #4CAF50", "color: #fff",
            "border: none", "border-radius: 3px", "cursor: pointer",
            "font-size: 0.7em",
          ],
          on_click=dispatch(SaveConfig),
          "\u{2713}",
        ),
        @html.button(
          style=[
            "padding: 4px 8px", "background: #555", "color: #ccc",
            "border: none", "border-radius: 3px", "cursor: pointer",
            "font-size: 0.7em",
          ],
          on_click=dispatch(CancelEditConfig),
          "\u{2715}",
        ),
      ],
    )
  } else {
    @html.div(
      style=[
        "margin-bottom: 6px", "cursor: pointer", "padding: 4px 6px",
        "background: #0d1b2a", "border-radius: 3px", "font-size: 0.8em",
        "color: #ccc", "text-align: center",
      ],
      on_click=dispatch(StartEditConfig(node.id, node.config)),
      [
        @html.span(if node.config.length() > 0 { node.config } else { "(click to set)" }),
      ],
    )
  }
}

///|
fn Model::view_input_ports(
  self : Model,
  node : @shared.Node,
  ports : Array[@shared.PortDef],
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  if ports.is_empty() {
    return @html.text("")
  }
  let items : Array[@rabbita.Html] = []
  for i = 0; i < ports.length(); i = i + 1 {
    let p = ports[i]
    let color = @shared.port_type_color(p.port_type)
    // Check if already connected
    let mut connected = false
    for c in self.connections {
      if c.to_node_id == node.id && c.to_port == i {
        connected = true
      }
    }
    // In connection mode, show clickable targets
    let in_connect_mode = self.connecting_from_node != 0 &&
      self.connecting_from_node != node.id
    let compatible = if in_connect_mode && !connected {
      // Check type compatibility
      let mut compat = false
      for n in self.nodes {
        if n.id == self.connecting_from_node {
          let out_ports = @shared.output_ports(n.kind)
          if self.connecting_from_port < out_ports.length() {
            compat = @shared.types_compatible(
              out_ports[self.connecting_from_port].port_type,
              p.port_type,
            )
          }
        }
      }
      compat
    } else {
      false
    }
    items.push(
      @html.div(
        style=[
          "display: flex", "align-items: center", "gap: 4px",
          "margin-bottom: 3px",
        ],
        [
          @html.div(
            style=[
              "width: 8px", "height: 8px", "border-radius: 50%",
              "background: \{color}",
              if connected { "box-shadow: 0 0 4px \{color}" } else { "" },
            ],
            "",
          ),
          @html.span(
            style=["font-size: 0.7em", "color: #aaa", "flex: 1"],
            p.name,
          ),
          if compatible {
            @html.button(
              style=[
                "padding: 2px 6px", "background: \{color}", "color: #fff",
                "border: none", "border-radius: 3px", "cursor: pointer",
                "font-size: 0.6em", "font-weight: 700",
              ],
              on_click=dispatch(CompleteConnect(node.id, i)),
              "\u{2192} Connect",
            )
          } else {
            @html.text("")
          },
        ],
      ),
    )
  }
  let children : Array[@rabbita.Html] = [
    @html.div(
      style=["font-size: 0.6em", "color: #666", "margin-bottom: 2px"],
      "INPUTS",
    ),
  ]
  for item in items {
    children.push(item)
  }
  @html.div(style=["margin-bottom: 4px"], children)
}

///|
fn Model::view_output_ports(
  self : Model,
  node : @shared.Node,
  ports : Array[@shared.PortDef],
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let _ = self
  if ports.is_empty() {
    return @html.text("")
  }
  let items : Array[@rabbita.Html] = []
  for i = 0; i < ports.length(); i = i + 1 {
    let p = ports[i]
    let color = @shared.port_type_color(p.port_type)
    items.push(
      @html.div(
        style=[
          "display: flex", "align-items: center", "gap: 4px",
          "margin-bottom: 3px", "justify-content: flex-end",
        ],
        [
          @html.button(
            style=[
              "padding: 2px 6px", "background: \{color}30",
              "color: \{color}", "border: 1px solid \{color}",
              "border-radius: 3px", "cursor: pointer",
              "font-size: 0.6em", "font-weight: 700",
            ],
            on_click=dispatch(StartConnect(node.id, i)),
            "Connect \u{2192}",
          ),
          @html.span(
            style=["font-size: 0.7em", "color: #aaa"],
            p.name,
          ),
          @html.div(
            style=[
              "width: 8px", "height: 8px", "border-radius: 50%",
              "background: \{color}",
            ],
            "",
          ),
        ],
      ),
    )
  }
  let children2 : Array[@rabbita.Html] = [
    @html.div(
      style=[
        "font-size: 0.6em", "color: #666", "margin-bottom: 2px",
        "text-align: right",
      ],
      "OUTPUTS",
    ),
  ]
  for item in items {
    children2.push(item)
  }
  @html.div(children2)
}

///|
fn Model::view_node_values(
  self : Model,
  _node : @shared.Node,
  vals : Array[@shared.Value],
) -> @rabbita.Html {
  let _ = self
  if vals.is_empty() {
    return @html.text("")
  }
  let items : Array[@rabbita.Html] = vals.map(fn(v) {
    match v {
      VColor(hex) =>
        @html.div(
          style=[
            "display: flex", "align-items: center", "gap: 6px",
          ],
          [
            @html.div(
              style=[
                "width: 24px", "height: 24px", "border-radius: 4px",
                "background: \{hex}", "border: 1px solid #555",
              ],
              "",
            ),
            @html.span(
              style=["font-size: 0.75em", "color: #ccc", "font-family: monospace"],
              hex,
            ),
          ],
        )
      _ =>
        @html.div(
          style=[
            "font-size: 0.8em", "color: #76FF03", "font-family: monospace",
            "font-weight: 700",
          ],
          @shared.format_value(v),
        )
    }
  })
  @html.div(
    style=[
      "margin-top: 6px", "padding-top: 6px", "border-top: 1px solid #333",
    ],
    items,
  )
}
