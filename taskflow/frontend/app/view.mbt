///|
/// MVU view: render the full task management interface.
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let model = self
  let theme = get_theme(model.dark_mode)
  if model.auth_screen != "" {
    return view_auth(dispatch, model, theme)
  }
  let filtered = @shared.filter_tasks(
    model.tasks,
    model.filter_status,
    model.filter_assignee,
    model.filter_priority,
    query=model.search_query,
    urgency=model.filter_urgency,
    today=model.today,
  )
  let sorted = @shared.sort_tasks(filtered)
  @html.div(
    style=[
      "padding: 16px 24px",
      "min-height: 100vh",
      "max-width: 900px",
      "margin: 0 auto",
      "outline: none",
      "background: \{theme.bg}",
      "color: \{theme.text}",
    ],
    on_keydown=fn(kb) { dispatch(KeyPressed(kb.key())) },
    attrs=@html.Attrs::build().tabindex(0),
  ) <| [
    view_error_toast(dispatch, model),
    view_comments_panel(dispatch, model),
    view_delete_confirm(dispatch, model),
    view_header(dispatch, model),
    if model.loading {
      @html.div(style=[
        "text-align: center",
        "padding: 60px 0",
        "color: \{theme.text_muted}",
        "font-size: 15px",
      ]) <| [
        @html.text(@shared.t(model.lang, "loading")),
      ]
    } else {
      @html.div(style=[]) <| [
        view_filters(dispatch, model),
        if model.adding_task {
          view_add_task_form(dispatch, model)
        } else {
          @html.text("")
        },
        if model.view_mode == "kanban" {
          view_kanban(dispatch, model, sorted)
        } else if sorted.length() == 0 {
          @html.div(style=[
            "text-align: center",
            "padding: 40px 0",
            "color: \{theme.text_muted}",
            "font-size: 14px",
          ]) <| [
            @html.text(@shared.t(model.lang, "no_matches")),
          ]
        } else {
          @html.div(style=["display: flex", "flex-direction: column"]) <| sorted.map(fn(
              task,
            ) {
              view_task_item(dispatch, model, task)
            },
          )
        },
        view_activity_feed(model),
        // Keyboard shortcuts hint
        @html.div(style=[
          "text-align: center",
          "padding: 12px 0",
          "color: \{theme.text_muted}",
          "font-size: 11px",
          "margin-top: 8px",
        ]) <| [
          @html.text(@shared.t(model.lang, "keyboard_hints")),
        ],
      ]
    },
  ]
}
