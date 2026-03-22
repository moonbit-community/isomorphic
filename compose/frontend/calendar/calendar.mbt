///|
/// A reusable calendar/date-picker component.
///
/// Demonstrates how to build a complex, self-contained component
/// with its own Model/Msg/update/view that can be embedded in any parent.
///
/// Usage (nested model pattern):
/// ```
///   // In parent model:
///   struct AppModel { calendar : @calendar.Model }
///   enum AppMsg { Cal(@calendar.Msg) }
///
///   // In parent view:
///   self.calendar.view((msg) => dispatch(Cal(msg)))
///
///   // In parent update:
///   Cal(msg) => { ..self, calendar: self.calendar.update(msg) }
///
///   // Read the selected date:
///   self.calendar.selected  // Option[Date]
/// ```

///|
/// A simple date representation.
pub(all) struct Date {
  year : Int
  month : Int // 1-12
  day : Int // 1-31
} derive(Eq)

///|
/// Format the date as an ISO-style "YYYY-MM-DD" string.
pub fn Date::to_string(self : Date) -> String {
  let m = if self.month < 10 {
    "0\{self.month}"
  } else {
    self.month.to_string()
  }
  let d = if self.day < 10 { "0\{self.day}" } else { self.day.to_string() }
  "\{self.year}-\{m}-\{d}"
}

///|
/// Calendar component state: the currently displayed month, selected date, and today's date.
pub struct Model {
  view_year : Int
  view_month : Int // 1-12 — the month currently displayed
  selected : Date? // the selected date, if any
  today : Date

  fn new(today~ : Date) -> Model
}

///|
/// Messages for calendar interaction: month navigation, day selection, and clearing the selection.
pub(all) enum Msg {
  PrevMonth
  NextMonth
  SelectDay(Int) // day number clicked
  Clear
}

///|
/// Create a new calendar model initialized to the given date's month with no selection.
pub fn Model::new(today~ : Date) -> Model {
  { view_year: today.year, view_month: today.month, selected: None, today }
}

///|
/// Process a calendar message and return the updated model.
pub fn Model::update(self : Model, msg : Msg) -> Model {
  match msg {
    PrevMonth => {
      let (y, m) = if self.view_month == 1 {
        (self.view_year - 1, 12)
      } else {
        (self.view_year, self.view_month - 1)
      }
      { ..self, view_year: y, view_month: m }
    }
    NextMonth => {
      let (y, m) = if self.view_month == 12 {
        (self.view_year + 1, 1)
      } else {
        (self.view_year, self.view_month + 1)
      }
      { ..self, view_year: y, view_month: m }
    }
    SelectDay(day) => {
      let date : Date = { year: self.view_year, month: self.view_month, day }
      { ..self, selected: Some(date) }
    }
    Clear => { ..self, selected: None }
  }
}

// --- Helpers ---

///|
fn days_in_month(year : Int, month : Int) -> Int {
  match month {
    2 =>
      if year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) {
        29
      } else {
        28
      }
    4 | 6 | 9 | 11 => 30
    _ => 31
  }
}

///|
/// Zeller's formula — returns 0=Sun, 1=Mon, ..., 6=Sat.
fn day_of_week(year : Int, month : Int, day : Int) -> Int {
  let (y, m) = if month < 3 { (year - 1, month + 12) } else { (year, month) }
  let q = day
  let k = y % 100
  let j = y / 100
  let h = (q + 13 * (m + 1) / 5 + k + k / 4 + j / 4 - 2 * j) % 7
  // h: 0=Sat, 1=Sun, 2=Mon, ... convert to 0=Sun
  ((h + 6) % 7 + 7) % 7
}

///|
fn month_name(m : Int) -> String {
  match m {
    1 => "January"
    2 => "February"
    3 => "March"
    4 => "April"
    5 => "May"
    6 => "June"
    7 => "July"
    8 => "August"
    9 => "September"
    10 => "October"
    11 => "November"
    12 => "December"
    _ => "?"
  }
}

// --- View ---

///|
/// Render the calendar as an interactive month grid with navigation, day selection, and a footer.
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let total_days = days_in_month(self.view_year, self.view_month)
  let first_dow = day_of_week(self.view_year, self.view_month, 1)

  // Build grid cells: blank leading cells + day cells
  let cells : Array[@rabbita.Html] = []
  for _ in 0..<first_dow {
    cells.push(@html.div(style=["padding: 8px"]) <| "")
  }
  for d in 1..<=total_days {
    let date : Date = { year: self.view_year, month: self.view_month, day: d }
    let is_selected = self.selected == Some(date)
    let is_today = self.today == date
    let bg = if is_selected {
      "#4f46e5"
    } else if is_today {
      "#e0e7ff"
    } else {
      "transparent"
    }
    let color = if is_selected { "#fff" } else { "#333" }
    let weight = if is_today || is_selected { "bold" } else { "normal" }
    let day = d
    cells.push(
      @html.div(
        style=[
          "padding: 8px",
          "text-align: center",
          "cursor: pointer",
          "border-radius: 6px",
          "background: \{bg}",
          "color: \{color}",
          "font-weight: \{weight}",
          "transition: background 0.15s",
        ],
        on_click=dispatch(SelectDay(day)),
      ) <| day.to_string(),
    )
  }

  // Selected date display
  let selected_text = match self.selected {
    Some(d) => d.to_string()
    None => "None"
  }

  @html.div(style=[
    "border: 1px solid #ccc", "border-radius: 8px", "padding: 16px", "min-width: 280px",
    "max-width: 320px", "font-family: system-ui, sans-serif",
  ]) <| [
    // Header: < Month Year >
    @html.div(style=[
      "display: flex", "justify-content: space-between", "align-items: center", "margin-bottom: 12px",
    ]) <| [
      @html.button(on_click=dispatch(PrevMonth)) <| "\u{25C0}",
      @html.span(style=["font-weight: bold"]) <| "\{month_name(self.view_month)} \{self.view_year}",
      @html.button(on_click=dispatch(NextMonth)) <| "\u{25B6}",
    ],
    // Day-of-week headers
    @html.div(style=[
      "display: grid", "grid-template-columns: repeat(7, 1fr)", "text-align: center",
      "font-size: 0.85em", "color: #888", "margin-bottom: 4px",
    ]) <| ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => {
      @html.div(style=["padding: 4px"]) <| d
    }),
    // Day grid
    @html.div(style=[
      "display: grid", "grid-template-columns: repeat(7, 1fr)", "gap: 2px",
    ]) <| cells,
    // Footer: selected date + clear
    @html.div(style=[
      "margin-top: 12px", "text-align: center", "font-size: 0.9em", "color: #555",
    ]) <| [
      @html.span() <| "Selected: \{selected_text}",
      @html.button(
        style=["margin-left: 8px", "font-size: 0.85em"],
        on_click=dispatch(Clear),
      ) <| "Clear",
    ],
  ]
}
