///|
/// Render the activity feed showing recent status changes.
fn view_activity_feed(model : Model) -> @rabbita.Html {
  let theme = get_theme(model.dark_mode)
  let activities = @shared.recent_activities(model.activities, 10)
  if activities.is_empty() {
    return @html.text("")
  }
  @html.div(style=[
    "background: \{theme.card_bg}",
    "border-radius: 10px",
    "padding: 14px 16px",
    "border: 1px solid \{theme.input_border}",
    "margin-top: 16px",
  ]) <| ({
    let items : Array[@rabbita.Html] = [
      @html.div(style=[
        "font-size: 13px",
        "font-weight: 600",
        "color: \{theme.text}",
        "margin-bottom: 10px",
      ]) <| [
        @html.text(@shared.t(model.lang, "recent_activity")),
      ],
    ]
    for act in activities {
      let desc = @shared.t_activity(model.lang, act)
      let to_color = @shared.status_color(act.to_status)
      let label = if act.from_status.is_empty() {
        @shared.t(model.lang, "created")
      } else {
        @shared.t_transition(model.lang, act.from_status, act.to_status)
      }
      items.push(
        @html.div(style=[
          "display: flex",
          "align-items: center",
          "gap: 8px",
          "padding: 4px 0",
          "border-bottom: 1px solid \{theme.card_border}",
        ]) <| [
          @html.span(style=[
            "padding: 1px 6px",
            "border-radius: 4px",
            "font-size: 10px",
            "color: white",
            "background: \{to_color}",
            "white-space: nowrap",
          ]) <| label,
          @html.span(style=[
            "font-size: 12px",
            "color: \{theme.text_secondary}",
            "flex: 1",
          ]) <| desc,
          @html.span(style=[
            "font-size: 10px",
            "color: \{theme.text_muted}",
            "white-space: nowrap",
          ]) <| act.timestamp,
        ],
      )
    }
    items
  })
}
