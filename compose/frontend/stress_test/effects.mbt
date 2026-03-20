///|
/// Effect (Level 5): intensity Knob + enabled toggle.
/// EffectRack (Level 4): 3 chained Effects.

// ── Effect ────────────────────────────────────────────────────────

///|
priv struct EffectModel {
  intensity : KnobModel
  enabled : Bool
  name : String
}

///|
priv enum EffectMsg {
  Intensity(KnobMsg)
  ToggleEnabled
}

///|
fn EffectModel::new(name~ : String, intensity~ : Int = 50) -> EffectModel {
  {
    intensity: KnobModel::new(value=intensity, max=100, step=5),
    enabled: false,
    name: name,
  }
}

///|
fn EffectModel::update(self : EffectModel, msg : EffectMsg) -> EffectModel {
  match msg {
    Intensity(m) => { ..self, intensity: self.intensity.update(m) }
    ToggleEnabled => { ..self, enabled: !self.enabled }
  }
}

///|
fn EffectModel::view(
  self : EffectModel,
  dispatch : @rabbita.Dispatch[EffectMsg],
) -> @rabbita.Html {
  let opacity = if self.enabled { "1" } else { "0.4" }
  @html.div(
    style=[
      "display: flex", "align-items: center", "gap: 4px",
      "opacity: " + opacity,
    ],
    [
      @html.button(
        style=[
          "width: 16px", "height: 16px", "border-radius: 50%", "border: none",
          "cursor: pointer", "font-size: 0.55em", "line-height: 1",
          if self.enabled {
            "background: #FF9800"
          } else {
            "background: #555"
          },
        ],
        on_click=dispatch(ToggleEnabled),
        if self.enabled { "\u{25CF}" } else { "\u{25CB}" },
      ),
      self.intensity.view(
        fn(msg) { dispatch(Intensity(msg)) },
        label=self.name,
        color="#FF9800",
      ),
    ],
  )
}

// ── EffectRack: 3 chained effects ─────────────────────────────────

///|
priv struct EffectRackModel {
  fx1 : EffectModel
  fx2 : EffectModel
  fx3 : EffectModel
}

///|
priv enum EffectRackMsg {
  Fx1(EffectMsg)
  Fx2(EffectMsg)
  Fx3(EffectMsg)
}

///|
fn EffectRackModel::new() -> EffectRackModel {
  {
    fx1: EffectModel::new(name="REV"),
    fx2: EffectModel::new(name="DLY", intensity=30),
    fx3: EffectModel::new(name="CHR", intensity=60),
  }
}

///|
fn EffectRackModel::update(
  self : EffectRackModel,
  msg : EffectRackMsg,
) -> EffectRackModel {
  match msg {
    Fx1(m) => { ..self, fx1: self.fx1.update(m) }
    Fx2(m) => { ..self, fx2: self.fx2.update(m) }
    Fx3(m) => { ..self, fx3: self.fx3.update(m) }
  }
}

///|
fn EffectRackModel::view(
  self : EffectRackModel,
  dispatch : @rabbita.Dispatch[EffectRackMsg],
) -> @rabbita.Html {
  @html.div(
    style=["display: flex", "flex-direction: column", "gap: 3px"],
    [
      self.fx1.view(fn(msg) { dispatch(Fx1(msg)) }),
      self.fx2.view(fn(msg) { dispatch(Fx2(msg)) }),
      self.fx3.view(fn(msg) { dispatch(Fx3(msg)) }),
    ],
  )
}
