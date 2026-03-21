///|
fn Model::view_text_input(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=["display: flex", "flex-direction: column", "gap: 8px"]) <| [
    @html.label(style=label_style) <| "Text Input",
    @html.input(
      input_type=Text,
      placeholder="Type something...",
      value=self.text_input.value,
      on_input=s => dispatch(TextInputChanged(s)),
      style=input_style,
    ) <| "",
    if !self.text_input.error.is_empty() {
      @html.span(style=["color: \{danger}", "font-size: 12px"]) <| self.text_input.error
    } else {
      let n = self.text_input.value.char_length()
      @html.span(style=["color: \{text_muted}", "font-size: 12px"]) <| "\{n} chars"
    },
  ]
}

///|
fn Model::view_text_area(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let remaining = self.text_area.max_chars - self.text_area.value.char_length()
  @html.div(style=["display: flex", "flex-direction: column", "gap: 8px"]) <| [
    @html.label(style=label_style) <| "Text Area",
    @html.textarea(style=input_style, value=self.text_area.value, rows=4, on_input=s => {
      dispatch(TextAreaChanged(s))
    }) <| "",
    @html.span(style=[
      "color: \{text_muted}",
      "font-size: 12px",
      "text-align: right",
    ]) <| "\{remaining} characters remaining",
  ]
}

///|
fn Model::view_checkbox(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=["display: flex", "flex-direction: column", "gap: 12px"]) <| ({
    let items : Array[@rabbita.Html] = [
      @html.label(style=label_style) <| "Checkboxes",
    ]
    for i, pair in self.checkbox.items {
      items.push(
        @html.label(style=[
          "display: flex",
          "align-items: center",
          "gap: 8px",
          "cursor: pointer",
          "font-size: 14px",
          "color: \{text_primary}",
        ]) <| [
          @html.input(
            input_type=Checkbox,
            checked=pair.1,
            on_change=_ => dispatch(CheckboxToggled(i)),
            style=["cursor: pointer"],
          ) <| "",
          @html.span(style=[]) <| pair.0,
        ],
      )
    }
    items
  })
}

///|
fn Model::view_radio(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=["display: flex", "flex-direction: column", "gap: 12px"]) <| ({
    let items : Array[@rabbita.Html] = [
      @html.label(style=label_style) <| "Radio Group",
    ]
    for opt in self.radio.options {
      let is_sel = opt == self.radio.selected
      items.push(
        @html.label(style=[
          "display: flex",
          "align-items: center",
          "gap: 8px",
          "cursor: pointer",
          "font-size: 14px",
          "color: \{text_primary}",
        ]) <| [
          @html.input(
            input_type=Radio,
            checked=is_sel,
            on_change=_ => dispatch(RadioSelected(opt)),
            style=["cursor: pointer"],
          ) <| "",
          @html.span(style=[]) <| opt,
        ],
      )
    }
    items
  })
}

///|
fn Model::view_select(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=["display: flex", "flex-direction: column", "gap: 8px"]) <| [
    @html.label(style=label_style) <| "Select",
    @html.select(style=input_style, on_change=v => dispatch(SelectChanged(v))) <| ({
      let opts : Array[@rabbita.Html] = [
        @html.option(value="", selected=self.select.selected.is_empty()) <| "-- Choose --",
      ]
      for opt in self.select.options {
        opts.push(
          @html.option(value=opt, selected=opt == self.select.selected) <| opt,
        )
      }
      opts
    }),
    if !self.select.selected.is_empty() {
      @html.span(style=["color: \{text_secondary}", "font-size: 13px"]) <| "Selected: \{self.select.selected}"
    } else {
      @html.nothing
    },
  ]
}

///|
fn Model::view_toggle(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=["display: flex", "flex-direction: column", "gap: 12px"]) <| ({
    let items : Array[@rabbita.Html] = [
      @html.label(style=label_style) <| "Toggle Switches",
    ]
    for i, pair in self.toggle.items {
      let on = pair.1
      let track_color = if on { primary } else { border }
      let label = if on { "ON" } else { "OFF" }
      items.push(
        @html.div(style=[
          "display: flex", "align-items: center", "justify-content: space-between",
          "padding: 8px 0",
        ]) <| [
          @html.span(style=["font-size: 14px", "color: \{text_primary}"]) <| pair.0,
          @html.button(
            style=[
              "width: 44px",
              "height: 24px",
              "border-radius: 12px",
              "border: none",
              "cursor: pointer",
              "font-size: 10px",
              "color: white",
              "background: \{track_color}",
            ],
            on_click=dispatch(ToggleSwitched(i)),
          ) <| label,
        ],
      )
    }
    items
  })
}

///|
fn Model::view_slider(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let v = self.slider.value
  let lo = self.slider.min
  let hi = self.slider.max
  @html.div(style=["display: flex", "flex-direction: column", "gap: 12px"]) <| [
    @html.label(style=label_style) <| "Slider",
    @html.input(
      input_type=Range,
      value="\{v}",
      on_input=s => dispatch(SliderChanged(s)),
      style=["width: 100%", "cursor: pointer"],
    ) <| "",
    @html.div(style=[
      "display: flex",
      "justify-content: space-between",
      "font-size: 12px",
      "color: \{text_muted}",
    ]) <| [
      @html.span(style=[]) <| "\{lo}",
      @html.span(style=["font-weight: 600", "color: \{primary}"]) <| "\{v}",
      @html.span(style=[]) <| "\{hi}",
    ],
  ]
}

///|
fn Model::view_color_picker(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=["display: flex", "flex-direction: column", "gap: 12px"]) <| [
    @html.label(style=label_style) <| "Color Picker",
    @html.div(style=["display: flex", "flex-wrap: wrap", "gap: 8px"]) <| ({
      let swatches : Array[@rabbita.Html] = []
      for c in self.color_picker.swatches {
        let bw = if c == self.color_picker.selected { "3" } else { "1" }
        let bc = if c == self.color_picker.selected {
          text_primary
        } else {
          "transparent"
        }
        swatches.push(
          @html.button(
            style=[
              "width: 32px",
              "height: 32px",
              "border-radius: 50%",
              "cursor: pointer",
              "border: \{bw}px solid \{bc}",
              "background: \{c}",
            ],
            on_click=dispatch(ColorSwatchClicked(c)),
          ) <| "",
        )
      }
      swatches
    }),
    @html.div(style=["display: flex", "align-items: center", "gap: 8px"]) <| [
      @html.div(style=[
        "width: 32px",
        "height: 32px",
        "border-radius: \{radius_sm}",
        "border: 1px solid \{border}",
        "background: \{self.color_picker.selected}",
      ]) <| "",
      @html.input(
        input_type=Text,
        value=self.color_picker.hex_input,
        on_input=s => dispatch(ColorHexChanged(s)),
        style=[
          "width: 120px",
          "padding: 6px 10px",
          "border: 1px solid \{border}",
          "border-radius: \{radius_sm}",
          "font-size: 13px",
          "font-family: monospace",
        ],
      ) <| "",
    ],
  ]
}
