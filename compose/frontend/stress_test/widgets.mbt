///|
/// Leaf widgets: Knob (bounded counter with progress bar) and StepGrid (8-step toggle pattern).

// ── Knob: bounded integer with visual progress bar ────────────────

///|
priv struct KnobModel {
  value : Int
  min_val : Int
  max_val : Int
  step : Int

  fn new(value? : Int, min? : Int, max? : Int, step? : Int) -> KnobModel
}

///|
#warnings("-unused_constructor")
priv enum KnobMsg {
  Increment
  Decrement
  Reset
}

///|
fn KnobModel::new(
  value? : Int = 0,
  min? : Int = 0,
  max? : Int = 100,
  step? : Int = 1,
) -> KnobModel {
  { value, min_val: min, max_val: max, step }
}

///|
fn KnobModel::update(self : KnobModel, msg : KnobMsg) -> KnobModel {
  match msg {
    Increment => {
      let v = self.value + self.step
      { ..self, value: if v > self.max_val { self.max_val } else { v } }
    }
    Decrement => {
      let v = self.value - self.step
      { ..self, value: if v < self.min_val { self.min_val } else { v } }
    }
    Reset => { ..self, value: self.min_val }
  }
}

///|
fn KnobModel::view(
  self : KnobModel,
  dispatch : @rabbita.Dispatch[KnobMsg],
  label~ : String,
  color? : String = "#4CAF50",
) -> @rabbita.Html {
  let range = self.max_val - self.min_val
  let pct = if range > 0 {
    (self.value - self.min_val) * 100 / range
  } else {
    0
  }
  @html.div(style=["min-width: 80px"]) <| [
    @html.div(style=["font-size: 0.7em", "color: #999", "margin-bottom: 2px"]) <| label,
    @html.div(style=["display: flex", "align-items: center", "gap: 2px"]) <| [
      @html.button(
        style=[
          "width: 22px", "height: 22px", "font-size: 0.75em", "border: 1px solid #555",
          "background: #2a2a2a", "color: #fff", "cursor: pointer", "border-radius: 3px",
        ],
        on_click=dispatch(Decrement),
      ) <| "\u{2212}",
      @html.div(style=[
        "flex: 1", "height: 8px", "background: #333", "border-radius: 4px", "overflow: hidden",
      ]) <| [
        @html.div(style=[
          "height: 100%",
          "width: " + pct.to_string() + "%",
          "background: " + color,
          "border-radius: 4px",
          "transition: width 0.1s",
        ]) <| "",
      ],
      @html.button(
        style=[
          "width: 22px", "height: 22px", "font-size: 0.75em", "border: 1px solid #555",
          "background: #2a2a2a", "color: #fff", "cursor: pointer", "border-radius: 3px",
        ],
        on_click=dispatch(Increment),
      ) <| "+",
    ],
    @html.div(style=[
      "text-align: center", "font-size: 0.8em", "font-weight: bold", "color: #ccc",
    ]) <| self.value.to_string(),
  ]
}

// ── StepGrid: 8-step toggle pattern (drum machine) ───────────────

///|
priv struct StepModel {
  steps : FixedArray[Bool]

  fn new() -> StepModel
}

///|
priv enum StepMsg {
  Toggle(Int)
}

///|
fn StepModel::new() -> StepModel {
  { steps: FixedArray::make(8, false) }
}

///|
fn StepModel::update(self : StepModel, msg : StepMsg) -> StepModel {
  match msg {
    Toggle(i) => {
      let new_steps = FixedArray::make(8, false)
      for j = 0; j < 8; j = j + 1 {
        new_steps[j] = if j == i { !self.steps[j] } else { self.steps[j] }
      }
      { steps: new_steps }
    }
  }
}

///|
fn StepModel::view(
  self : StepModel,
  dispatch : @rabbita.Dispatch[StepMsg],
  color? : String = "#76FF03",
) -> @rabbita.Html {
  let buttons : Array[@rabbita.Html] = []
  for i = 0; i < 8; i = i + 1 {
    let active = self.steps[i]
    // Alternate inactive shade every 4 steps for beat grouping
    let inactive_bg = if i < 4 { "#3a3a3a" } else { "#444" }
    buttons.push(
      @html.div(
        style=[
          "width: 18px",
          "height: 18px",
          "border-radius: 2px",
          "cursor: pointer",
          if active {
            "background: " + color
          } else {
            "background: " + inactive_bg
          },
        ],
        on_click=dispatch(Toggle(i)),
      ) <| "",
    )
  }
  @html.div(style=["display: flex", "gap: 2px"]) <| buttons
}
