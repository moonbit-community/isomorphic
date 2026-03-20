///|
/// ColorMixer (Level 2): RGB color picker with 3 Knobs and a live preview swatch.

///|
priv struct ColorModel {
  red : KnobModel
  green : KnobModel
  blue : KnobModel
}

///|
priv enum ColorMsg {
  Red(KnobMsg)
  Green(KnobMsg)
  Blue(KnobMsg)
}

///|
fn ColorModel::new() -> ColorModel {
  {
    red: KnobModel::new(value=100, max=255, step=5),
    green: KnobModel::new(value=150, max=255, step=5),
    blue: KnobModel::new(value=200, max=255, step=5),
  }
}

///|
fn ColorModel::update(self : ColorModel, msg : ColorMsg) -> ColorModel {
  match msg {
    Red(m) => { ..self, red: self.red.update(m) }
    Green(m) => { ..self, green: self.green.update(m) }
    Blue(m) => { ..self, blue: self.blue.update(m) }
  }
}

///|
fn ColorModel::view(
  self : ColorModel,
  dispatch : @rabbita.Dispatch[ColorMsg],
) -> @rabbita.Html {
  let r = self.red.value.to_string()
  let g = self.green.value.to_string()
  let b = self.blue.value.to_string()
  let rgb_str = "rgb(" + r + "," + g + "," + b + ")"
  @html.div(
    style=[
      "background: #121212", "padding: 16px", "border-radius: 8px",
      "border: 1px solid #333",
    ],
    [
      @html.div(
        style=[
          "font-weight: bold", "color: #fff", "font-size: 0.95em",
          "margin-bottom: 12px", "letter-spacing: 1px",
        ],
        "COLOR MIXER",
      ),
      @html.div(
        style=["display: flex", "gap: 16px", "align-items: center"],
        [
          // RGB sliders
          @html.div(
            style=[
              "display: flex", "flex-direction: column", "gap: 6px", "flex: 1",
            ],
            [
              self.red.view(
                fn(msg) { dispatch(Red(msg)) },
                label="RED",
                color="#F44336",
              ),
              self.green.view(
                fn(msg) { dispatch(Green(msg)) },
                label="GREEN",
                color="#4CAF50",
              ),
              self.blue.view(
                fn(msg) { dispatch(Blue(msg)) },
                label="BLUE",
                color="#2196F3",
              ),
            ],
          ),
          // Preview swatch
          @html.div(style=["text-align: center"], [
            @html.div(
              style=[
                "width: 80px", "height: 80px", "border-radius: 8px",
                "border: 2px solid #555", "background: " + rgb_str,
                "margin-bottom: 4px",
              ],
              "",
            ),
            @html.div(
              style=[
                "font-size: 0.7em", "color: #999", "font-family: monospace",
              ],
              rgb_str,
            ),
          ]),
        ],
      ),
    ],
  )
}
