///|
fn Model::view_stopwatch(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let elapsed = self.stopwatch.elapsed_ms
  let total_tenths = elapsed / 100
  let tenths = total_tenths % 10
  let total_seconds = total_tenths / 10
  let seconds = total_seconds % 60
  let minutes = total_seconds / 60
  let running = self.stopwatch.running
  let time_str = "\{minutes / 10}\{minutes % 10}:\{seconds / 10}\{seconds % 10}.\{tenths}"
  @html.div(style=[
    "display:flex",
    "flex-direction:column",
    "align-items:center",
    "gap:24px",
    "padding:32px",
    "background:\{surface}",
    "border-radius:\{radius}",
    "border:1px solid \{border}",
  ]) <| [
    @html.div(style=[
      "font-size:64px",
      "font-weight:700",
      "font-variant-numeric:tabular-nums",
      "color:\{primary}",
      "letter-spacing:2px",
    ]) <| time_str,
    @html.div(style=["display:flex", "gap:12px"]) <| [
      @html.button(style=btn_style, on_click=dispatch(StopwatchToggle)) <| (if running {
        "Stop"
      } else {
        "Start"
      }),
      @html.button(style=btn_outline_style, on_click=dispatch(StopwatchReset)) <| "Reset",
    ],
  ]
}

///|
fn Model::view_countdown(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let remaining = self.countdown.remaining
  let seconds = remaining % 60
  let minutes = remaining / 60
  let running = self.countdown.running
  let finished = self.countdown.finished
  let target = self.countdown.target_seconds
  let time_str = "\{minutes / 10}\{minutes % 10}:\{seconds / 10}\{seconds % 10}"
  let countdown_color = if finished { "#ef4444" } else { primary }
  @html.div(style=[
    "display:flex",
    "flex-direction:column",
    "align-items:center",
    "gap:24px",
    "padding:32px",
    "background:\{surface}",
    "border-radius:\{radius}",
    "border:1px solid \{border}",
  ]) <| [
    @html.div(style=[
      "display:flex", "flex-direction:column", "align-items:center", "gap:8px", "width:100%",
    ]) <| [
      @html.label(style=label_style) <| "Set duration (seconds): \{target}",
      @html.input(
        input_type=Range,
        min=1,
        max=60,
        value="\{target}",
        style=["width:200px", "accent-color:\{primary}"],
        on_input=fn(v) { dispatch(CountdownSet(v)) },
      ) <| "",
    ],
    @html.div(style=[
      "font-size:64px",
      "font-weight:700",
      "font-variant-numeric:tabular-nums",
      "color:\{countdown_color}",
      "letter-spacing:2px",
    ]) <| (if finished { "Time's up!" } else { time_str }),
    @html.div(style=["display:flex", "gap:12px"]) <| [
      @html.button(style=btn_style, on_click=dispatch(CountdownToggle)) <| (if running {
        "Stop"
      } else {
        "Start"
      }),
      @html.button(style=btn_outline_style, on_click=dispatch(CountdownReset)) <| "Reset",
    ],
  ]
}

///|
fn Model::view_typewriter(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let full = self.typewriter.full_text
  let visible = self.typewriter.visible_chars
  let running = self.typewriter.running
  let shown = full[:visible].to_string()
  let cursor = if running { "\u{258B}" } else { "" }
  @html.div(style=[
    "display:flex",
    "flex-direction:column",
    "align-items:center",
    "gap:24px",
    "padding:32px",
    "background:\{surface}",
    "border-radius:\{radius}",
    "border:1px solid \{border}",
  ]) <| [
    @html.div(style=[
      "width:100%", "min-height:80px", "padding:16px", "background:#0f172a", "border-radius:8px",
      "font-family:monospace", "font-size:18px", "color:#e2e8f0", "line-height:1.6",
      "word-break:break-word",
    ]) <| "\{shown}\{cursor}",
    @html.div(style=["display:flex", "align-items:center", "gap:8px"]) <| [
      @html.span(style=["font-size:13px", "color:\{text_muted}"]) <| "\{visible}/\{full.length()} chars",
    ],
    @html.div(style=["display:flex", "gap:12px"]) <| [
      @html.button(
        style=btn_style,
        on_click=if running {
          dispatch(TypewriterPause)
        } else {
          dispatch(TypewriterStart)
        },
      ) <| (if running { "Pause" } else { "Start" }),
      @html.button(style=btn_outline_style, on_click=dispatch(TypewriterReset)) <| "Reset",
    ],
  ]
}

///|
fn Model::view_carousel(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let items = self.carousel.items
  let current = self.carousel.current
  let auto_playing = self.carousel.auto_playing
  let current_item = if items.length() > 0 { items[current] } else { "" }
  let dots = Array::make(items.length(), 0)
  let dot_nodes = dots.mapi(fn(i, _) {
    let dot_width = if i == current { "24px" } else { "8px" }
    let dot_bg = if i == current { primary } else { border }
    @html.div(style=[
      "width:\{dot_width}",
      "height:8px",
      "border-radius:4px",
      "background:\{dot_bg}",
      "transition:all 0.3s ease",
      "cursor:pointer",
    ]) <| ""
  })
  @html.div(style=[
    "display:flex",
    "flex-direction:column",
    "align-items:center",
    "gap:20px",
    "padding:32px",
    "background:\{surface}",
    "border-radius:\{radius}",
    "border:1px solid \{border}",
  ]) <| [
    @html.div(style=[
      "display:flex", "align-items:center", "gap:16px", "width:100%",
    ]) <| [
      @html.button(
        style=[
          "width:40px",
          "height:40px",
          "border-radius:50%",
          "border:1px solid \{border}",
          "background:white",
          "color:\{text_primary}",
          "font-size:18px",
          "cursor:pointer",
          "display:flex",
          "align-items:center",
          "justify-content:center",
          "flex-shrink:0",
        ],
        on_click=dispatch(CarouselPrev),
      ) <| "\u{2039}",
      @html.div(style=[
        "flex:1", "min-height:120px", "padding:24px", "background:linear-gradient(135deg, #4f46e5, #7c3aed)",
        "border-radius:12px", "display:flex", "align-items:center", "justify-content:center",
        "font-size:22px", "font-weight:600", "color:white", "text-align:center",
      ]) <| current_item,
      @html.button(
        style=[
          "width:40px",
          "height:40px",
          "border-radius:50%",
          "border:1px solid \{border}",
          "background:white",
          "color:\{text_primary}",
          "font-size:18px",
          "cursor:pointer",
          "display:flex",
          "align-items:center",
          "justify-content:center",
          "flex-shrink:0",
        ],
        on_click=dispatch(CarouselNext),
      ) <| "\u{203A}",
    ],
    @html.div(style=["display:flex", "gap:6px", "align-items:center"]) <| dot_nodes,
    @html.div(style=["display:flex", "align-items:center", "gap:8px"]) <| [
      @html.span(style=["font-size:13px", "color:\{text_muted}"]) <| "\{current + 1} / \{items.length()}",
      @html.button(
        style=btn_outline_style,
        on_click=dispatch(CarouselAutoToggle),
      ) <| (if auto_playing { "Pause Auto" } else { "Auto Play" }),
    ],
  ]
}

///|
fn Model::view_animated_counter(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let value = self.animated_counter.value
  let display_value = self.animated_counter.display_value
  let is_animating = value != display_value
  let counter_color = if is_animating { "#7c3aed" } else { primary }
  @html.div(style=[
    "display:flex",
    "flex-direction:column",
    "align-items:center",
    "gap:24px",
    "padding:32px",
    "background:\{surface}",
    "border-radius:\{radius}",
    "border:1px solid \{border}",
  ]) <| [
    @html.div(style=[
      "font-size:96px",
      "font-weight:800",
      "font-variant-numeric:tabular-nums",
      "color:\{counter_color}",
      "min-width:160px",
      "text-align:center",
      "line-height:1",
      "transition:color 0.2s ease",
    ]) <| "\{display_value}",
    @html.div(style=["display:flex", "gap:16px", "align-items:center"]) <| [
      @html.button(
        style=[
          "width:52px",
          "height:52px",
          "border-radius:50%",
          "background:\{primary}",
          "color:white",
          "border:none",
          "font-size:28px",
          "cursor:pointer",
          "display:flex",
          "align-items:center",
          "justify-content:center",
          "font-weight:300",
        ],
        on_click=dispatch(CounterDecrement),
      ) <| "\u{2212}",
      @html.div(style=[
        "display:flex", "flex-direction:column", "align-items:center", "gap:2px",
      ]) <| [
        @html.span(style=["font-size:12px", "color:\{text_muted}"]) <| "target",
        @html.span(style=[
          "font-size:20px",
          "font-weight:600",
          "color:\{text_secondary}",
        ]) <| "\{value}",
      ],
      @html.button(
        style=[
          "width:52px",
          "height:52px",
          "border-radius:50%",
          "background:\{primary}",
          "color:white",
          "border:none",
          "font-size:28px",
          "cursor:pointer",
          "display:flex",
          "align-items:center",
          "justify-content:center",
          "font-weight:300",
        ],
        on_click=dispatch(CounterIncrement),
      ) <| "+",
    ],
    if is_animating {
      @html.div(style=["font-size:12px", "color:\{text_muted}"]) <| "animating..."
    } else {
      @html.div(style=[]) <| ""
    },
  ]
}
