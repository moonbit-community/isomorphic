///|
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(
    style=[
      "max-width: 1100px", "margin: 0 auto", "padding: 16px", "font-family: 'SF Mono', 'Fira Code', monospace",
      "color: #e0e0e0",
    ],
    [
      self.view_error(dispatch),
      match self.page {
        GraphList => self.view_graph_list(dispatch)
        Editor => self.view_editor(dispatch)
      },
    ],
  )
}

///|
fn Model::view_error(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  if self.error.length() == 0 {
    return @html.text("")
  }
  @html.div(
    style=[
      "background: #ff5252", "color: #fff", "padding: 10px 16px", "border-radius: 6px",
      "margin-bottom: 12px", "display: flex", "justify-content: space-between", "align-items: center",
    ],
    [
      @html.span(self.error),
      @html.button(
        style=[
          "background: none", "border: none", "color: #fff", "cursor: pointer", "font-size: 1.1em",
        ],
        on_click=dispatch(ClearError),
        "\u{2715}",
      ),
    ],
  )
}

///|
fn Model::view_graph_list(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let cards : Array[@rabbita.Html] = self.graphs.map(fn(g) {
    @html.div(
      style=[
        "display: flex", "align-items: center", "padding: 14px", "background: #16213e",
        "border-radius: 8px", "gap: 12px", "margin-bottom: 8px", "border: 1px solid #0f3460",
      ],
      [
        @html.div(style=["font-size: 1.3em"], "\u{1F4CA}"),
        @html.div(style=["flex: 1"], [
          @html.div(style=["font-weight: 600", "font-size: 0.95em"], g.name),
          @html.div(style=["font-size: 0.7em", "color: #888"], "Graph #\{g.id}"),
        ]),
        @html.button(
          style=[
            "padding: 8px 16px", "background: #e94560", "color: #fff", "border: none",
            "border-radius: 6px", "cursor: pointer", "font-weight: 600",
          ],
          on_click=dispatch(GoToEditor(g.id)),
          "Open",
        ),
        @html.button(
          style=[
            "padding: 8px 12px", "background: #333", "color: #999", "border: none",
            "border-radius: 6px", "cursor: pointer",
          ],
          on_click=dispatch(DeleteGraph(g.id)),
          "\u{2715}",
        ),
      ],
    )
  })
  @html.div([
    // Hero header
    @html.div(
      style=[
        "text-align: center", "padding: 32px 20px 24px",
        "background: linear-gradient(135deg, #16213e, #0f3460, #1a1a2e)",
        "border-radius: 12px", "margin-bottom: 20px",
        "border: 1px solid #e9456030",
      ],
      [
        @html.h1(
          style=[
            "font-size: 1.8em", "letter-spacing: 4px", "color: #e94560",
            "margin-bottom: 6px",
          ],
          "NODE GRAPH",
        ),
        @html.p(
          style=["color: #888", "font-size: 0.85em", "letter-spacing: 1px"],
          "Type-safe visual dataflow \u{00B7} Powered by MoonBit",
        ),
        // Port type legend
        @html.div(
          style=[
            "display: flex", "gap: 16px", "justify-content: center",
            "margin-top: 14px",
          ],
          [
            port_legend_dot("#4CAF50", "Number"),
            port_legend_dot("#FF9800", "String"),
            port_legend_dot("#2196F3", "Bool"),
            port_legend_dot("#E91E63", "Color"),
          ],
        ),
      ],
    ),
    // Create form
    @html.form(
      on_submit=dispatch(CreateGraph),
      style=["display: flex", "gap: 8px", "margin-bottom: 20px"],
      [
        @html.input(
          input_type=Text,
          placeholder="New graph name...",
          value=self.new_graph_name,
          on_input=fn(v) { dispatch(SetGraphName(v)) },
          style=[
            "flex: 1", "padding: 10px", "background: #16213e", "border: 1px solid #0f3460",
            "border-radius: 6px", "color: #eee", "font-family: inherit",
          ],
          "",
        ),
        @html.button(
          type_="submit",
          style=[
            "padding: 10px 20px", "background: #e94560", "color: #fff", "border: none",
            "border-radius: 6px", "cursor: pointer", "font-weight: 600",
          ],
          "+ Create",
        ),
      ],
    ),
    if self.graphs.is_empty() {
      @html.p(
        style=["color: #666", "text-align: center", "padding: 40px"],
        "No graphs yet. Create one to start building!",
      )
    } else {
      @html.div(cards)
    },
  ])
}

///|
fn port_legend_dot(color : String, label : String) -> @rabbita.Html {
  @html.div(
    style=["display: flex", "align-items: center", "gap: 4px"],
    [
      @html.div(
        style=[
          "width: 8px", "height: 8px", "border-radius: 50%",
          "background: \{color}", "box-shadow: 0 0 6px \{color}60",
        ],
        "",
      ),
      @html.span(
        style=["font-size: 0.7em", "color: \{color}"],
        label,
      ),
    ],
  )
}
