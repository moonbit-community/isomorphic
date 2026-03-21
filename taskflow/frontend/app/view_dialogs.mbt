///|
/// Render the delete confirmation dialog overlay.
fn view_delete_confirm(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  if model.confirm_delete == 0 {
    return @html.text("")
  }
  let theme = get_theme(model.dark_mode)
  let mut task_title = "this task"
  for t in model.tasks {
    if t.id == model.confirm_delete {
      task_title = t.title
      break
    }
  }
  @html.div(style=[
    "position: fixed", "top: 0", "left: 0", "right: 0", "bottom: 0", "background: rgba(0,0,0,0.4)",
    "display: flex", "align-items: center", "justify-content: center", "z-index: 1000",
  ]) <| [
    @html.div(style=[
      "background: \{theme.card_bg}",
      "border-radius: 12px",
      "padding: 24px",
      "max-width: 400px",
      "width: 90%",
      "box-shadow: 0 20px 60px rgba(0,0,0,0.2)",
    ]) <| [
      @html.div(style=[
        "font-size: 16px",
        "font-weight: 600",
        "color: \{theme.text}",
        "margin-bottom: 8px",
      ]) <| [
        @html.text(@shared.t(model.lang, "delete_task")),
      ],
      @html.div(style=[
        "font-size: 13px",
        "color: \{theme.text_secondary}",
        "margin-bottom: 20px",
        "line-height: 1.5",
      ]) <| [
        @html.text(task_title),
      ],
      @html.div(style=["display: flex", "gap: 8px", "justify-content: flex-end"]) <| [
        @html.button(on_click=dispatch(CancelDelete), style=[
          "padding: 8px 16px",
          "background: \{theme.filter_inactive}",
          "color: \{theme.text_secondary}",
          "border: none",
          "border-radius: 6px",
          "cursor: pointer",
          "font-size: 13px",
        ]) <| @shared.t(model.lang, "cancel"),
        @html.button(on_click=dispatch(ConfirmDelete), style=[
          "padding: 8px 16px", "background: #dc2626", "color: white", "border: none",
          "border-radius: 6px", "cursor: pointer", "font-size: 13px",
        ]) <| @shared.t(model.lang, "delete"),
      ],
    ],
  ]
}

///|
/// Render the error toast notification.
fn view_error_toast(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  if model.error_msg == "" {
    return @html.text("")
  }
  @html.div(style=[
    "position: fixed", "top: 16px", "right: 16px", "z-index: 1001", "background: #fef2f2",
    "border: 1px solid #fecaca", "border-radius: 8px", "padding: 12px 16px", "display: flex",
    "align-items: center", "gap: 10px", "box-shadow: 0 4px 12px rgba(0,0,0,0.1)",
    "max-width: 400px",
  ]) <| [
    @html.div(style=["font-size: 13px", "color: #dc2626", "flex: 1"]) <| [
      @html.text(model.error_msg),
    ],
    @html.button(on_click=dispatch(DismissError), style=[
      "background: none", "border: none", "color: #94a3b8", "cursor: pointer", "font-size: 16px",
      "padding: 0 4px",
    ]) <| "\u{00d7}",
  ]
}
