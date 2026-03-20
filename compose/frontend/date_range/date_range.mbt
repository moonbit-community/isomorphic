///|
/// Pattern 4: Reusable Complex Component
///
/// Two calendar instances composed into a date-range picker.
/// Demonstrates how a complex component (calendar) with its own
/// Model/Msg/update/view can be reused multiple times in a parent,
/// using the nested model pattern for composition.
///
/// ```
///   RangeModel
///     ├── start_cal : @calendar.Model   ← reused component
///     ├── end_cal   : @calendar.Model   ← same component, second instance
///
///   RangeMsg
///     ├── Start(@calendar.Msg)   ← route to start calendar
///     ├── End(@calendar.Msg)     ← route to end calendar
/// ```
priv struct RangeModel {
  start_cal : @calendar.Model
  end_cal : @calendar.Model
}

///|
priv enum RangeMsg {
  Start(@calendar.Msg)
  End(@calendar.Msg)
}

///|
fn RangeModel::update(self : RangeModel, msg : RangeMsg) -> RangeModel {
  match msg {
    Start(cal_msg) => { ..self, start_cal: self.start_cal.update(cal_msg) }
    End(cal_msg) => { ..self, end_cal: self.end_cal.update(cal_msg) }
  }
}

///|
fn RangeModel::view(
  self : RangeModel,
  dispatch : @rabbita.Dispatch[RangeMsg],
) -> @rabbita.Html {
  // Format the range summary
  let start_str = match self.start_cal.selected {
    Some(d) => d.to_string()
    None => "..."
  }
  let end_str = match self.end_cal.selected {
    Some(d) => d.to_string()
    None => "..."
  }

  @html.div([
    @html.div(style=["display: flex", "gap: 24px", "flex-wrap: wrap"], [
      @html.div([
        @html.h4("Start Date"),
        // Reuse calendar component — just map dispatch
        self.start_cal.view(msg => dispatch(Start(msg))),
      ]),
      @html.div([
        @html.h4("End Date"),
        // Same component, second instance
        self.end_cal.view(msg => dispatch(End(msg))),
      ]),
    ]),
    @html.div(
      style=[
        "margin-top: 16px", "padding: 12px", "background: #f0f0f0", "border-radius: 8px",
        "text-align: center", "font-size: 1.1em",
      ],
      "Range: \{start_str} \u{2192} \{end_str}",
    ),
  ])
}

///|
pub fn make() -> @rabbita.Cell {
  let today : @calendar.Date = { year: 2026, month: 3, day: 20 }
  @rabbita.simple_cell(
    model={
      start_cal: @calendar.Model::new(today~),
      end_cal: @calendar.Model::new(today~),
    },
    update=(msg, model) => model.update(msg),
    view=(dispatch, model) => model.view(dispatch),
  )
}
