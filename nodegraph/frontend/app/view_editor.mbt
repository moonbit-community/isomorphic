///|
fn Model::view_editor(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div() <| [
    // Header bar
    @html.div(style=[
      "display: flex", "align-items: center", "gap: 10px", "margin-bottom: 12px",
      "padding: 10px 14px", "background: linear-gradient(135deg, #16213e, #0f3460)",
      "border-radius: 8px", "border: 1px solid #1b2838",
    ]) <| [
      @html.button(
        style=[
          "padding: 6px 14px", "background: rgba(255,255,255,0.08)", "color: #ccc",
          "border: 1px solid #ffffff15", "border-radius: 6px", "cursor: pointer",
        ],
        on_click=dispatch(GoToList),
      ) <| "\u{2190} Back",
      @html.div(style=[
        "flex: 1", "font-weight: 700", "font-size: 1.1em", "letter-spacing: 2px",
        "color: #e94560",
      ]) <| "EDITOR",
      @html.button(
        style=[
          "padding: 6px 14px",
          "border: none",
          "border-radius: 4px",
          "cursor: pointer",
          "font-weight: 600",
          if self.auto_eval {
            "background: #4CAF50; color: #fff"
          } else {
            "background: #333; color: #888"
          },
        ],
        on_click=dispatch(ToggleAutoEval),
      ) <| (if self.auto_eval { "Auto: ON" } else { "Auto: OFF" }),
      @html.button(
        style=[
          "padding: 6px 14px", "background: #e94560", "color: #fff", "border: none",
          "border-radius: 4px", "cursor: pointer", "font-weight: 600",
        ],
        on_click=dispatch(Evaluate),
      ) <| "\u{25B6} Evaluate",
      @html.button(
        style=[
          "padding: 6px 14px",
          "border: none",
          "border-radius: 4px",
          "cursor: pointer",
          if self.show_palette {
            "background: #0f3460; color: #e94560"
          } else {
            "background: #e94560; color: #fff"
          },
        ],
        on_click=dispatch(TogglePalette),
      ) <| (if self.show_palette { "Close Palette" } else { "+ Add Node" }),
    ],
    // Connection mode banner
    if self.connecting_from_node != 0 {
      self.view_connect_banner(dispatch)
    } else {
      @html.text("")
    },
    // Palette (conditional)
    if self.show_palette {
      self.view_palette(dispatch)
    } else {
      @html.text("")
    },
    // Eval status
    self.view_eval_status(),
    // Nodes grid
    self.view_nodes(dispatch),
    // Connections list
    self.view_connections(dispatch),
    // Branding footer
    @html.div(style=[
      "text-align: center", "padding: 12px", "margin-top: 8px", "font-size: 0.65em",
      "color: #444", "letter-spacing: 1px", "border-top: 1px solid #1b2838",
    ]) <| "Built with MoonBit + TEA \u{00B7} Type-safe visual dataflow \u{00B7} Same validation runs on frontend & backend",
  ]
}

///|
fn Model::view_connect_banner(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  // Find the source node info
  let mut from_label = "?"
  let mut port_label = "?"
  let mut port_color = "#888"
  let mut type_label = "?"
  for n in self.nodes {
    if n.id == self.connecting_from_node {
      from_label = n.label
      let ports = @shared.output_ports(n.kind)
      if self.connecting_from_port < ports.length() {
        port_label = ports[self.connecting_from_port].name
        port_color = @shared.port_type_color(
          ports[self.connecting_from_port].port_type,
        )
        type_label = @shared.port_type_label(
          ports[self.connecting_from_port].port_type,
        )
      }
    }
  }
  @html.div(style=[
    "background: #0f3460",
    "padding: 10px 16px",
    "border-radius: 6px",
    "margin-bottom: 10px",
    "display: flex",
    "justify-content: space-between",
    "align-items: center",
    "border: 2px solid \{port_color}",
    "animation: fadeIn 0.2s ease",
  ]) <| [
    @html.div(style=["display: flex", "align-items: center", "gap: 8px"]) <| [
      @html.div(style=[
        "width: 12px",
        "height: 12px",
        "border-radius: 50%",
        "background: \{port_color}",
        "animation: pulseGlow 1s infinite",
      ]) <| "",
      @html.span() <| "Connecting \{type_label} from \{from_label}.\{port_label} \u{2192} click a compatible input port",
    ],
    @html.button(
      style=[
        "padding: 4px 12px", "background: #e94560", "color: #fff", "border: none",
        "border-radius: 4px", "cursor: pointer",
      ],
      on_click=dispatch(CancelConnect),
    ) <| "Cancel",
  ]
}

///|
fn Model::view_eval_status(self : Model) -> @rabbita.Html {
  match self.eval_result {
    None => @html.text("")
    Some(result) =>
      if result.has_cycle {
        @html.div(style=[
          "background: #ff5252", "color: #fff", "padding: 8px 14px", "border-radius: 6px",
          "margin-bottom: 10px", "font-size: 0.85em",
        ]) <| "\u{26A0} Cycle detected! Acyclic nodes evaluated, but cyclic nodes are skipped."
      } else if result.errors.length() > 0 {
        let msg = result.errors.map(fn(e) {
          let (id, err) = e
          "Node #\{id}: \{err}"
        })
        @html.div(style=[
          "background: #ff9800", "color: #000", "padding: 8px 14px", "border-radius: 6px",
          "margin-bottom: 10px", "font-size: 0.85em",
        ]) <| "\u{26A0} \{msg.length()} error(s) during evaluation"
      } else {
        @html.text("")
      }
  }
}
