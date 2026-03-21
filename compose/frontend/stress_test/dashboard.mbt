///|
/// Dashboard (Level 1): top-level model composing Mixer + ColorMixer + dark mode.
///
/// Nesting hierarchy (6 levels max):
///   Dashboard -> Mixer -> Channel -> EffectRack -> Effect -> Knob
///
/// Deepest message path (7 wrapping layers):
///   DashboardMsg::Mixer(MixerMsg::Ch1(ChannelMsg::Effects(
///     EffectRackMsg::Fx1(EffectMsg::Intensity(KnobMsg::Increment)))))
///
/// Total independent state values: ~78
///   4 channels x (volume + pan + mute + solo + 8 steps + 3 effects x 2) = 72
///   + master + link + 3 RGB + dark_mode = 78

///|
priv struct DashboardModel {
  mixer : MixerModel
  color : ColorModel
  dark_mode : Bool
}

///|
priv enum DashboardMsg {
  Mixer(MixerMsg)
  Color(ColorMsg)
  ToggleDarkMode
}

///|
fn DashboardModel::update(
  self : DashboardModel,
  msg : DashboardMsg,
) -> DashboardModel {
  match msg {
    Mixer(m) => { ..self, mixer: self.mixer.update(m) }
    Color(m) => { ..self, color: self.color.update(m) }
    ToggleDarkMode => { ..self, dark_mode: !self.dark_mode }
  }
}

///|
fn DashboardModel::view(
  self : DashboardModel,
  dispatch : @rabbita.Dispatch[DashboardMsg],
) -> @rabbita.Html {
  let bg = if self.dark_mode { "#0a0a0a" } else { "#f0f0f0" }
  let fg = if self.dark_mode { "#eee" } else { "#111" }
  @html.div(
    style=[
      "background: " + bg,
      "color: " + fg,
      "padding: 20px",
      "border-radius: 12px",
      "font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace",
    ],
    [
      // Header
      @html.div(
        style=[
          "display: flex", "justify-content: space-between", "align-items: center",
          "margin-bottom: 16px", "border-bottom: 1px solid #333", "padding-bottom: 10px",
        ],
        [
          @html.div(
            style=[
              "font-size: 1.2em", "font-weight: bold", "letter-spacing: 3px",
            ],
            "STUDIO CONTROL",
          ),
          @html.button(
            style=[
              "padding: 5px 14px",
              "border: 1px solid #555",
              "border-radius: 4px",
              "cursor: pointer",
              "font-size: 0.75em",
              "letter-spacing: 0.5px",
              if self.dark_mode {
                "background: #333; color: #fff"
              } else {
                "background: #ddd; color: #000"
              },
            ],
            on_click=dispatch(ToggleDarkMode),
            if self.dark_mode {
              "LIGHT MODE"
            } else {
              "DARK MODE"
            },
          ),
        ],
      ),
      // Mixer panel
      self.mixer.view(fn(msg) { dispatch(Mixer(msg)) }),
      // Color mixer panel
      @html.div(style=["margin-top: 12px"], [
        self.color.view(fn(msg) { dispatch(Color(msg)) }),
      ]),
      // Stats footer
      @html.div(
        style=[
          "margin-top: 12px", "padding-top: 10px", "border-top: 1px solid #333",
          "font-size: 0.65em", "color: #666", "text-align: center", "letter-spacing: 0.5px",
        ],
        "6 nesting levels \u{00B7} 7 message layers \u{00B7} ~78 state values \u{00B7} TEA all the way down",
      ),
    ],
  )
}

///|
/// Create the studio dashboard cell with a mixer panel, color mixer, and dark mode toggle.
pub fn make() -> @rabbita.Cell {
  @rabbita.simple_cell(
    model=(
      { mixer: MixerModel::new(), color: ColorModel::new(), dark_mode: true } :
      DashboardModel),
    update=fn(msg, model) { model.update(msg) },
    view=fn(dispatch, model) { model.view(dispatch) },
  )
}
