///|
/// Channel (Level 3): volume + pan Knobs, mute/solo toggles, StepGrid, EffectRack.

///|
priv struct ChannelModel {
  volume : KnobModel
  pan : KnobModel
  mute : Bool
  solo : Bool
  steps : StepModel
  effects : EffectRackModel
}

///|
priv enum ChannelMsg {
  Volume(KnobMsg)
  Pan(KnobMsg)
  ToggleMute
  ToggleSolo
  Steps(StepMsg)
  Effects(EffectRackMsg)
}

///|
fn ChannelModel::new(volume? : Int = 75) -> ChannelModel {
  {
    volume: KnobModel::new(value=volume, max=100, step=5),
    pan: KnobModel::new(value=0, min=-50, max=50, step=5),
    mute: false,
    solo: false,
    steps: StepModel::new(),
    effects: EffectRackModel::new(),
  }
}

///|
fn ChannelModel::update(self : ChannelModel, msg : ChannelMsg) -> ChannelModel {
  match msg {
    Volume(m) => { ..self, volume: self.volume.update(m) }
    Pan(m) => { ..self, pan: self.pan.update(m) }
    ToggleMute => { ..self, mute: !self.mute }
    ToggleSolo => { ..self, solo: !self.solo }
    Steps(m) => { ..self, steps: self.steps.update(m) }
    Effects(m) => { ..self, effects: self.effects.update(m) }
  }
}

///|
fn ChannelModel::view(
  self : ChannelModel,
  dispatch : @rabbita.Dispatch[ChannelMsg],
  label~ : String,
  color? : String = "#4CAF50",
) -> @rabbita.Html {
  let dim = if self.mute { "0.3" } else { "1" }
  @html.div(
    style=[
      "border: 1px solid #444",
      "padding: 10px",
      "border-radius: 6px",
      "background: #1e1e1e",
      "min-width: 130px",
      "opacity: " + dim,
    ],
    [
      // Channel label
      @html.div(
        style=[
          "text-align: center",
          "font-weight: bold",
          "font-size: 0.8em",
          "color: " + color,
          "margin-bottom: 6px",
          "border-bottom: 1px solid #333",
          "padding-bottom: 4px",
        ],
        label,
      ),
      // Volume
      self.volume.view(fn(msg) { dispatch(Volume(msg)) }, label="VOL", color~),
      // Pan
      @html.div(style=["margin-top: 4px"], [
        self.pan.view(
          fn(msg) { dispatch(Pan(msg)) },
          label="PAN",
          color="#2196F3",
        ),
      ]),
      // Mute / Solo
      @html.div(
        style=[
          "display: flex", "gap: 4px", "margin-top: 6px", "justify-content: center",
        ],
        [
          @html.button(
            style=[
              "flex: 1",
              "padding: 2px",
              "font-size: 0.65em",
              "font-weight: bold",
              "border: none",
              "border-radius: 3px",
              "cursor: pointer",
              if self.mute {
                "background: #F44336; color: #fff"
              } else {
                "background: #333; color: #888"
              },
            ],
            on_click=dispatch(ToggleMute),
            "M",
          ),
          @html.button(
            style=[
              "flex: 1",
              "padding: 2px",
              "font-size: 0.65em",
              "font-weight: bold",
              "border: none",
              "border-radius: 3px",
              "cursor: pointer",
              if self.solo {
                "background: #FFEB3B; color: #000"
              } else {
                "background: #333; color: #888"
              },
            ],
            on_click=dispatch(ToggleSolo),
            "S",
          ),
        ],
      ),
      // Step sequencer
      @html.div(style=["margin-top: 6px"], [
        @html.div(
          style=["font-size: 0.6em", "color: #666", "margin-bottom: 2px"],
          "PATTERN",
        ),
        self.steps.view(fn(msg) { dispatch(Steps(msg)) }, color~),
      ]),
      // Effects
      @html.div(
        style=[
          "margin-top: 6px", "border-top: 1px solid #333", "padding-top: 4px",
        ],
        [
          @html.div(
            style=["font-size: 0.6em", "color: #666", "margin-bottom: 3px"],
            "FX",
          ),
          self.effects.view(fn(msg) { dispatch(Effects(msg)) }),
        ],
      ),
    ],
  )
}
