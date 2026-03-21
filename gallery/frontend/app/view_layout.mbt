///|
fn Model::view_stepper(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let stepper = self.stepper
  @html.div(style=[
    "display:flex", "flex-direction:column", "gap:16px", "align-items:center",
  ]) <| [
    @html.div(style=[
      "font-size:14px",
      "font-weight:600",
      "color:\{text_secondary}",
      "text-transform:uppercase",
      "letter-spacing:0.05em",
    ]) <| "Stepper",
    @html.div(style=["display:flex", "align-items:center", "gap:16px"]) <| [
      @html.button(
        style=[
          "width:40px",
          "height:40px",
          "border-radius:\{radius_sm}",
          "border:1px solid \{border}",
          "background:\{surface}",
          "color:\{text_primary}",
          "font-size:20px",
          "cursor:pointer",
          "display:flex",
          "align-items:center",
          "justify-content:center",
        ],
        on_click=dispatch(StepperDecrement),
        disabled=stepper.value <= stepper.min,
      ) <| "-",
      @html.div(style=[
        "min-width:80px",
        "text-align:center",
        "font-size:32px",
        "font-weight:700",
        "color:\{primary}",
      ]) <| "\{stepper.value}",
      @html.button(
        style=[
          "width:40px",
          "height:40px",
          "border-radius:\{radius_sm}",
          "border:1px solid \{border}",
          "background:\{surface}",
          "color:\{text_primary}",
          "font-size:20px",
          "cursor:pointer",
          "display:flex",
          "align-items:center",
          "justify-content:center",
        ],
        on_click=dispatch(StepperIncrement),
        disabled=stepper.value >= stepper.max,
      ) <| "+",
    ],
    @html.div(style=["font-size:13px", "color:\{text_muted}"]) <| "Range: \{stepper.min} - \{stepper.max}, Step: \{stepper.step}",
  ]
}

///|
fn Model::view_split_pane(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let sp = self.split_pane
  let right_percent = 100 - sp.left_percent
  @html.div(style=["display:flex", "flex-direction:column", "gap:16px"]) <| [
    @html.div(style=[
      "font-size:14px",
      "font-weight:600",
      "color:\{text_secondary}",
      "text-transform:uppercase",
      "letter-spacing:0.05em",
    ]) <| "Split Pane",
    @html.div(style=["display:flex", "align-items:center", "gap:8px"]) <| [
      @html.span(style=["font-size:13px", "color:\{text_muted}"]) <| "Split:",
      @html.input(
        input_type=Range,
        min=10,
        max=90,
        value="\{sp.left_percent}",
        style=["flex:1", "accent-color:\{primary}"],
        on_input=s => dispatch(SplitPaneResize(s)),
        "",
      ),
      @html.span(style=[
        "font-size:13px",
        "color:\{text_muted}",
        "min-width:40px",
      ]) <| "\{sp.left_percent}%",
    ],
    @html.div(style=[
      "display:flex",
      "height:160px",
      "border:1px solid \{border}",
      "border-radius:\{radius}",
      "overflow:hidden",
    ]) <| [
      @html.div(style=[
        "width:\{sp.left_percent}%",
        "background:\{primary_light}",
        "padding:12px",
        "display:flex",
        "flex-direction:column",
        "gap:8px",
        "overflow:hidden",
      ]) <| [
        @html.div(style=[
          "font-size:13px",
          "font-weight:600",
          "color:\{text_primary}",
        ]) <| "Left Panel",
        @html.div(style=["font-size:12px", "color:\{text_secondary}"]) <| "Width: \{sp.left_percent}%",
        @html.div(style=["font-size:12px", "color:\{text_muted}"]) <| "Sample content for the left pane.",
      ],
      @html.div(style=["width:1px", "background:\{border}", "flex-shrink:0"]) <| "",
      @html.div(style=[
        "flex:1",
        "background:\{surface_alt}",
        "padding:12px",
        "display:flex",
        "flex-direction:column",
        "gap:8px",
        "overflow:hidden",
      ]) <| [
        @html.div(style=[
          "font-size:13px",
          "font-weight:600",
          "color:\{text_primary}",
        ]) <| "Right Panel",
        @html.div(style=["font-size:12px", "color:\{text_secondary}"]) <| "Width: \{right_percent}%",
        @html.div(style=["font-size:12px", "color:\{text_muted}"]) <| "Sample content for the right pane.",
      ],
    ],
  ]
}

///|
fn Model::view_virtual_list(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let vl = self.virtual_list
  let max_scroll = vl.total_items - vl.visible_count
  let start_index = vl.scroll_top
  let end_index = start_index + vl.visible_count - 1
  let items : Array[@rabbita.Html] = []
  for i = 0; i < vl.visible_count; i = i + 1 {
    let item_index = start_index + i
    let is_even = item_index % 2 == 0
    let bg = if is_even { surface } else { surface_alt }
    items.push(
      @html.div(style=[
        "padding:10px 14px",
        "background:\{bg}",
        "border-bottom:1px solid \{border}",
        "font-size:14px",
        "color:\{text_primary}",
        "height:\{vl.item_height}px",
        "display:flex",
        "align-items:center",
        "box-sizing:border-box",
      ]) <| "Item #\{item_index + 1}",
    )
  }
  @html.div(style=["display:flex", "flex-direction:column", "gap:16px"]) <| [
    @html.div(style=[
      "font-size:14px",
      "font-weight:600",
      "color:\{text_secondary}",
      "text-transform:uppercase",
      "letter-spacing:0.05em",
    ]) <| "Virtual List",
    @html.div(style=["display:flex", "align-items:center", "gap:8px"]) <| [
      @html.span(style=["font-size:13px", "color:\{text_muted}"]) <| "Scroll:",
      @html.input(
        input_type=Range,
        min=0,
        max=max_scroll,
        value="\{vl.scroll_top}",
        style=["flex:1", "accent-color:\{primary}"],
        on_input=s => dispatch(VirtualScroll(s)),
        "",
      ),
    ],
    @html.div(style=["font-size:13px", "color:\{text_muted}"]) <| "Showing \{start_index + 1}-\{end_index + 1} of \{vl.total_items} items",
    @html.div(style=[
      "border:1px solid \{border}",
      "border-radius:\{radius}",
      "overflow:hidden",
    ]) <| items,
  ]
}

///|
fn Model::view_masonry(
  self : Model,
  _dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let ms = self.masonry
  let columns : Array[Array[@rabbita.Html]] = []
  for i = 0; i < ms.columns; i = i + 1 {
    columns.push([])
  }
  for i, item in ms.items {
    let col = i % ms.columns
    columns[col].push(
      @html.div(style=[
        "background:\{item.color}",
        "height:\{item.height}px",
        "border-radius:\{radius_sm}",
        "padding:12px",
        "display:flex",
        "align-items:flex-start",
        "margin-bottom:12px",
        "box-sizing:border-box",
      ]) <| [
        @html.span(style=[
          "font-size:13px",
          "font-weight:600",
          "color:\{text_primary}",
          "word-break:break-word",
        ]) <| item.title,
      ],
    )
  }
  let column_divs : Array[@rabbita.Html] = []
  for col_items in columns {
    column_divs.push(
      @html.div(style=["flex:1", "min-width:0", "padding:0 6px"]) <| col_items,
    )
  }
  @html.div(style=["display:flex", "flex-direction:column", "gap:16px"]) <| [
    @html.div(style=[
      "font-size:14px",
      "font-weight:600",
      "color:\{text_secondary}",
      "text-transform:uppercase",
      "letter-spacing:0.05em",
    ]) <| "Masonry Layout",
    @html.div(style=["font-size:13px", "color:\{text_muted}"]) <| "\{ms.items.length()} items across \{ms.columns} columns",
    @html.div(style=["display:flex", "align-items:flex-start", "margin:0 -6px"]) <| column_divs,
  ]
}
