///|
/// Mixer (Level 2): 4 channels + master volume + channel link.

///|
priv struct MixerModel {
  ch1 : ChannelModel
  ch2 : ChannelModel
  ch3 : ChannelModel
  ch4 : ChannelModel
  master : KnobModel
  link : Bool
}

///|
priv enum MixerMsg {
  Ch1(ChannelMsg)
  Ch2(ChannelMsg)
  Ch3(ChannelMsg)
  Ch4(ChannelMsg)
  Master(KnobMsg)
  ToggleLink
}

///|
fn MixerModel::new() -> MixerModel {
  {
    ch1: ChannelModel::new(volume=75),
    ch2: ChannelModel::new(volume=60),
    ch3: ChannelModel::new(volume=85),
    ch4: ChannelModel::new(volume=50),
    master: KnobModel::new(value=80, max=100, step=5),
    link: false,
  }
}

///|
fn MixerModel::update(self : MixerModel, msg : MixerMsg) -> MixerModel {
  match msg {
    Ch1(m) =>
      if self.link {
        {
          ..self,
          ch1: self.ch1.update(m),
          ch2: self.ch2.update(m),
          ch3: self.ch3.update(m),
          ch4: self.ch4.update(m),
        }
      } else {
        { ..self, ch1: self.ch1.update(m) }
      }
    Ch2(m) =>
      if self.link {
        {
          ..self,
          ch1: self.ch1.update(m),
          ch2: self.ch2.update(m),
          ch3: self.ch3.update(m),
          ch4: self.ch4.update(m),
        }
      } else {
        { ..self, ch2: self.ch2.update(m) }
      }
    Ch3(m) =>
      if self.link {
        {
          ..self,
          ch1: self.ch1.update(m),
          ch2: self.ch2.update(m),
          ch3: self.ch3.update(m),
          ch4: self.ch4.update(m),
        }
      } else {
        { ..self, ch3: self.ch3.update(m) }
      }
    Ch4(m) =>
      if self.link {
        {
          ..self,
          ch1: self.ch1.update(m),
          ch2: self.ch2.update(m),
          ch3: self.ch3.update(m),
          ch4: self.ch4.update(m),
        }
      } else {
        { ..self, ch4: self.ch4.update(m) }
      }
    Master(m) => { ..self, master: self.master.update(m) }
    ToggleLink => { ..self, link: !self.link }
  }
}

///|
fn MixerModel::view(
  self : MixerModel,
  dispatch : @rabbita.Dispatch[MixerMsg],
) -> @rabbita.Html {
  @html.div(
    style=[
      "background: #121212", "padding: 16px", "border-radius: 8px",
      "border: 1px solid #333",
    ],
    [
      // Header
      @html.div(
        style=[
          "display: flex", "align-items: center", "gap: 8px",
          "margin-bottom: 12px",
        ],
        [
          @html.div(
            style=[
              "font-weight: bold", "color: #fff", "font-size: 0.95em",
              "letter-spacing: 1px",
            ],
            "MIXER",
          ),
          @html.button(
            style=[
              "padding: 3px 10px", "font-size: 0.7em", "border: none",
              "border-radius: 3px", "cursor: pointer", "letter-spacing: 0.5px",
              if self.link {
                "background: #FF5722; color: #fff"
              } else {
                "background: #333; color: #888"
              },
            ],
            on_click=dispatch(ToggleLink),
            if self.link { "LINK: ON" } else { "LINK: OFF" },
          ),
        ],
      ),
      // Channels + Master
      @html.div(
        style=[
          "display: flex", "gap: 8px", "align-items: flex-start",
          "overflow-x: auto",
        ],
        [
          self.ch1.view(
            fn(msg) { dispatch(Ch1(msg)) },
            label="CH 1",
            color="#4CAF50",
          ),
          self.ch2.view(
            fn(msg) { dispatch(Ch2(msg)) },
            label="CH 2",
            color="#2196F3",
          ),
          self.ch3.view(
            fn(msg) { dispatch(Ch3(msg)) },
            label="CH 3",
            color="#FF9800",
          ),
          self.ch4.view(
            fn(msg) { dispatch(Ch4(msg)) },
            label="CH 4",
            color="#E91E63",
          ),
          // Master section
          @html.div(
            style=[
              "border: 2px solid #FFD700", "padding: 10px", "border-radius: 6px",
              "background: #1a1a1a", "min-width: 100px",
            ],
            [
              @html.div(
                style=[
                  "text-align: center", "font-weight: bold", "color: #FFD700",
                  "font-size: 0.8em", "margin-bottom: 6px",
                  "border-bottom: 1px solid #444", "padding-bottom: 4px",
                  "letter-spacing: 1px",
                ],
                "MASTER",
              ),
              self.master.view(
                fn(msg) { dispatch(Master(msg)) },
                label="VOL",
                color="#FFD700",
              ),
            ],
          ),
        ],
      ),
    ],
  )
}
