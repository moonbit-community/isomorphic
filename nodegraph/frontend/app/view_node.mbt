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
  // Use auto-layout for nodes that haven't been positioned (x=0, y=0)
  let auto = compute_layout(self.nodes, self.connections)
  // Build position map: use node's stored x/y if set, else auto-layout
  let layout : Array[(Int, Int, Int)] = self.nodes.map(fn(n) {
    if n.x != 0 || n.y != 0 {
      (n.id, n.x, n.y)
    } else {
      let (ax, ay) = get_pos(auto, n.id)
      (n.id, ax, ay)
    }
  })
  let (cw, ch) = canvas_size(layout)
  // Build node cards with absolute positions
  let cards : Array[@rabbita.Html] = self.nodes.map(fn(n) {
    let (x, y) = get_pos(layout, n.id)
    @html.div(
      style=[
        "position: absolute",
        "left: \{x}px",
        "top: \{y}px",
        "width: \{node_w}px",
        if self.dragging_node == n.id { "z-index: 100; opacity: 0.9" } else { "z-index: 1" },
      ],
      [self.view_single_node(n, dispatch)],
    )
  })
  // Build SVG wires (established connections + temporary drag wire)
  let wires = self.view_svg_wires(layout, cw, ch)
  let temp_wire = self.view_temp_wire(layout, cw, ch)
  // Canvas container
  let children : Array[@rabbita.Html] = [wires, temp_wire]
  for card in cards {
    children.push(card)
  }
  // Outer scroller with mouse events for dragging
  @html.div(
    style=[
      "overflow: auto", "margin-bottom: 16px",
      "border-radius: 8px", "border: 1px solid #1b2838",
      "max-height: 600px",
      if self.dragging_node != 0 { "cursor: grabbing" } else { "" },
    ],
    [
      @html.div(
        style=[
          "position: relative",
          "min-height: \{ch}px",
          "min-width: \{cw}px",
          "background: #0a0a1a",
        ],
        on_mouseup=fn(_m) {
          if self.dragging_node != 0 {
            dispatch(EndDrag)
          } else if self.connecting_from_node != 0 {
            dispatch(CancelConnect)
          } else {
            @rabbita.none
          }
        },
        on_mousedown=fn(_m) { @rabbita.none },
        attrs=@html.Attrs::build().on_mousemove(fn(ev) {
          let mx = ev.get_offset_x()
          let my = ev.get_offset_y()
          if self.dragging_node != 0 {
            dispatch(Drag(mx, my))
          } else if self.connecting_from_node != 0 {
            dispatch(WireMove(mx, my))
          } else {
            @rabbita.none
          }
        }),
        children,
      ),
    ],
  )
}

///|
/// Draw a temporary SVG wire from the source port to the mouse cursor
/// during connection creation.
fn Model::view_temp_wire(
  self : Model,
  layout : Array[(Int, Int, Int)],
  w : Int,
  h : Int,
) -> @rabbita.Html {
  if self.connecting_from_node == 0 || (self.wire_mouse_x == 0 && self.wire_mouse_y == 0) {
    return @html.text("")
  }
  let (from_x, from_y) = get_pos(layout, self.connecting_from_node)
  let mut from_kind : @shared.NodeKind = ConstNumber
  for n in self.nodes {
    if n.id == self.connecting_from_node {
      from_kind = n.kind
    }
  }
  let from_in_count = @shared.input_ports(from_kind).length()
  let from_has_config = match from_kind {
    ConstNumber | ConstString | ConstBool | ConstColor => true
    _ => false
  }
  let from_config_h = if from_has_config { 32 } else { 0 }
  let from_inputs_h = if from_in_count > 0 {
    16 + from_in_count * port_stride
  } else {
    0
  }
  let x1 = from_x + node_w
  let y1 = from_y + header_h + from_config_h + from_inputs_h + 16 + self.connecting_from_port * port_stride + 8
  let x2 = self.wire_mouse_x
  let y2 = self.wire_mouse_y
  let diff = x2 - x1
  let abs_diff = if diff < 0 { -diff } else { diff }
  let dx = if abs_diff < 80 { 50 } else { abs_diff / 2 }
  let path_d = "M \{x1} \{y1} C \{x1 + dx} \{y1}, \{x2 - dx} \{y2}, \{x2} \{y2}"
  @svg.svg(
    width=w,
    height=h,
    style=["position: absolute", "top: 0", "left: 0", "pointer-events: none"],
    [
      @svg.path(
        d=path_d,
        fill="none",
        stroke="#e94560",
        stroke_width=2,
        attrs=@svg.Attrs::build().stroke_dasharray("8 4"),
        style=["animation: flowDash 0.5s linear infinite"],
      ),
    ],
  )
}

///|
fn Model::view_svg_wires(
  self : Model,
  layout : Array[(Int, Int, Int)],
  w : Int,
  h : Int,
) -> @rabbita.Html {
  let paths : Array[@svg.Svg] = []
  for c in self.connections {
    // Compute start/end positions
    let (from_x, from_y) = get_pos(layout, c.from_node_id)
    let (to_x, to_y) = get_pos(layout, c.to_node_id)
    // Look up node kinds
    let mut from_kind : @shared.NodeKind = ConstNumber
    let mut to_kind : @shared.NodeKind = ConstNumber
    for n in self.nodes {
      if n.id == c.from_node_id {
        from_kind = n.kind
      }
      if n.id == c.to_node_id {
        to_kind = n.kind
      }
    }
    // Compute Y offsets accounting for variable card content
    // Source node: output ports come after header + config + inputs section
    let from_in_count = @shared.input_ports(from_kind).length()
    let from_has_config = match from_kind {
      ConstNumber | ConstString | ConstBool | ConstColor => true
      _ => false
    }
    let from_config_h = if from_has_config { 32 } else { 0 }
    let from_inputs_h = if from_in_count > 0 {
      16 + from_in_count * port_stride
    } else {
      0
    }
    let x1 = from_x + node_w
    let y1 = from_y + header_h + from_config_h + from_inputs_h + 16 + c.from_port * port_stride + 8
    // Target node: input ports come after header + config
    let to_has_config = match to_kind {
      ConstNumber | ConstString | ConstBool | ConstColor => true
      _ => false
    }
    let to_config_h = if to_has_config { 32 } else { 0 }
    let x2 = to_x
    let y2 = to_y + header_h + to_config_h + 16 + c.to_port * port_stride + 8
    // Determine color from output port type
    let mut color = "#888"
    for n in self.nodes {
      if n.id == c.from_node_id {
        let ports = @shared.output_ports(n.kind)
        if c.from_port < ports.length() {
          color = @shared.port_type_color(ports[c.from_port].port_type)
        }
      }
    }
    // Bezier control offset
    let diff = x2 - x1
    let abs_diff = if diff < 0 { -diff } else { diff }
    let dx = if abs_diff < 100 { 60 } else { abs_diff / 2 }
    let path_d = "M \{x1} \{y1} C \{x1 + dx} \{y1}, \{x2 - dx} \{y2}, \{x2} \{y2}"
    // Shadow path
    paths.push(
      @svg.path(d=path_d, fill="none", stroke="\{color}30", stroke_width=6),
    )
    // Main path with animated dash
    paths.push(
      @svg.path(
        d=path_d,
        fill="none",
        stroke=color,
        stroke_width=2,
        attrs=@svg.Attrs::build().stroke_dasharray("6 4"),
        style=["animation: flowDash 1s linear infinite"],
      ),
    )
  }
  @svg.svg(
    width=w,
    height=h,
    style=["position: absolute", "top: 0", "left: 0", "pointer-events: none"],
    paths,
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
  let has_output = node_vals.length() > 0
  @html.div(
    style=[
      "min-width: 190px", "max-width: 250px", "background: #16213e",
      "border: 2px solid \{cat_color}", "border-radius: 10px",
      "overflow: hidden", "animation: fadeIn 0.3s ease",
      if has_output {
        "box-shadow: 0 0 12px \{cat_color}40"
      } else {
        "box-shadow: 0 2px 8px rgba(0,0,0,0.4)"
      },
    ],
    [
      // Header with gradient — draggable
      @html.div(
        style=[
          "background: linear-gradient(135deg, \{cat_color}, \{cat_color}bb)",
          "padding: 7px 12px",
          "display: flex", "justify-content: space-between", "align-items: center",
          "cursor: grab", "user-select: none",
        ],
        on_mousedown=fn(m) {
          let pos = m.offset_pos()
          dispatch(StartDrag(node.id, pos.x, pos.y))
        },
        [
          @html.span(
            style=["font-weight: 700", "font-size: 0.85em", "color: #fff", "text-shadow: 0 1px 2px rgba(0,0,0,0.3)", "pointer-events: none"],
            node.label,
          ),
          @html.button(
            style=[
              "background: rgba(0,0,0,0.2)", "border: none", "color: rgba(255,255,255,0.8)",
              "cursor: pointer", "font-size: 0.75em", "width: 20px", "height: 20px",
              "border-radius: 50%", "display: flex", "align-items: center", "justify-content: center",
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
    let mut compatible = false
    let mut incompatible = false
    if in_connect_mode && !connected {
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
      compatible = compat
      incompatible = !compat
    }
    // Port dot style changes based on connection mode
    let dot_style = if compatible {
      "width: 14px; height: 14px; border-radius: 50%; background: \{color}; flex-shrink: 0; box-shadow: 0 0 10px \{color}; border: 2px solid #fff; animation: pulseGlow 1s infinite"
    } else if incompatible {
      "width: 10px; height: 10px; border-radius: 50%; background: #333; flex-shrink: 0; border: 2px solid #f44336; opacity: 0.4"
    } else if connected {
      "width: 10px; height: 10px; border-radius: 50%; background: \{color}; flex-shrink: 0; box-shadow: 0 0 8px \{color}; border: 1px solid \{color}"
    } else {
      "width: 10px; height: 10px; border-radius: 50%; background: \{color}; flex-shrink: 0; opacity: 0.6; border: 1px solid \{color}50"
    }
    let name_style = if incompatible {
      "font-size: 0.7em; color: #555; flex: 1; text-decoration: line-through"
    } else {
      "font-size: 0.7em; color: #aaa; flex: 1"
    }
    items.push(
      @html.div(
        style=[
          "display: flex", "align-items: center", "gap: 4px",
          "margin-bottom: 3px",
          if incompatible { "opacity: 0.5" } else { "" },
        ],
        [
          @html.div(style=[dot_style], ""),
          @html.span(style=[name_style], p.name),
          if compatible {
            @html.div(
              style=[
                "padding: 3px 8px", "background: \{color}", "color: #fff",
                "border: none", "border-radius: 4px", "cursor: crosshair",
                "font-size: 0.65em", "font-weight: 700",
                "animation: breathe 1.5s infinite",
              ],
              on_mouseup=fn(_m) { dispatch(CompleteConnect(node.id, i)) },
              "\u{2192} drop here",
            )
          } else if incompatible {
            @html.span(
              style=["font-size: 0.6em", "color: #f44336"],
              "\u{2715}",
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
          @html.div(
            style=[
              "padding: 2px 6px", "background: \{color}30",
              "color: \{color}", "border: 1px solid \{color}",
              "border-radius: 3px", "cursor: crosshair",
              "font-size: 0.6em", "font-weight: 700",
              "user-select: none",
            ],
            on_mousedown=fn(m) {
              let _ = m
              dispatch(StartConnect(node.id, i))
            },
            "\u{25CF} drag \u{2192}",
          ),
          @html.span(
            style=["font-size: 0.7em", "color: #aaa"],
            p.name,
          ),
          @html.div(
            style=[
              "width: 10px", "height: 10px", "border-radius: 50%",
              "background: \{color}", "flex-shrink: 0",
              "border: 1px solid \{color}50",
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
            "display: flex", "align-items: center", "gap: 8px",
            "padding: 4px",
          ],
          [
            @html.div(
              style=[
                "width: 40px", "height: 40px", "border-radius: 6px",
                "background: \{hex}", "border: 2px solid #555",
                "box-shadow: 0 0 12px \{hex}60",
              ],
              "",
            ),
            @html.span(
              style=["font-size: 0.75em", "color: #ccc", "font-family: monospace"],
              hex,
            ),
          ],
        )
      VBool(b) =>
        @html.div(
          style=[
            "display: inline-block", "padding: 3px 10px", "border-radius: 12px",
            "font-size: 0.75em", "font-weight: 700",
            if b {
              "background: #4CAF5030; color: #76FF03; border: 1px solid #4CAF50"
            } else {
              "background: #f4433630; color: #ff5252; border: 1px solid #f44336"
            },
          ],
          if b { "true" } else { "false" },
        )
      VNumber(n) =>
        @html.div(
          style=[
            "font-size: 1.1em", "color: #76FF03", "font-family: monospace",
            "font-weight: 700", "text-shadow: 0 0 8px #76FF0340",
          ],
          n.to_string(),
        )
      VString(s) =>
        @html.div(
          style=[
            "font-size: 0.8em", "color: #FF9800", "font-family: monospace",
            "padding: 2px 6px", "background: #FF980010", "border-radius: 3px",
            "border: 1px solid #FF980030",
          ],
          "\"\{s}\"",
        )
      VError(e) =>
        @html.div(
          style=[
            "font-size: 0.7em", "color: #ff5252", "padding: 2px 6px",
            "background: #ff525210", "border-radius: 3px",
          ],
          "\u{26A0} \{e}",
        )
      VNone =>
        @html.div(
          style=["font-size: 0.7em", "color: #555"],
          "(none)",
        )
    }
  })
  let result_children : Array[@rabbita.Html] = [
    @html.div(
      style=["font-size: 0.55em", "color: #555", "margin-bottom: 3px", "letter-spacing: 1px"],
      "RESULT",
    ),
  ]
  for item in items {
    result_children.push(item)
  }
  @html.div(
    style=[
      "margin-top: 6px", "padding-top: 6px", "border-top: 1px solid #ffffff10",
    ],
    result_children,
  )
}
