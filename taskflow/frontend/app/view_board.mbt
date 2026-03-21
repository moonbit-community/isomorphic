///|
/// Render a compact task card for the kanban board column.
fn view_kanban_card(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
  task : @shared.Task,
) -> @rabbita.Html {
  if model.editing_task == task.id {
    return view_edit_task_form(dispatch, model)
  }
  let theme = get_theme(model.dark_mode)
  let border_color = @shared.priority_color(task.priority)
  let is_done = task.status == "done"
  let title_color = if is_done { theme.text_muted } else { theme.text }
  let title_decoration = if is_done { "line-through" } else { "none" }
  let transitions = @shared.allowed_transitions(task.status)
  // Assignee avatar
  let assignee_html = match
    @shared.find_member(model.members, task.assignee_id) {
    Some(m) => {
      let bg = @shared.member_color(m.color)
      let initial = @shared.member_initial(m.name)
      @html.div(style=[
        "width: 20px",
        "height: 20px",
        "border-radius: 50%",
        "display: flex",
        "align-items: center",
        "justify-content: center",
        "font-size: 9px",
        "color: white",
        "font-weight: 600",
        "background: \{bg}",
      ]) <| [
        @html.text(initial),
      ]
    }
    None => @html.text("")
  }
  @html.div(style=[
    "background: \{theme.card_bg}",
    "border-radius: 6px",
    "padding: 10px",
    "margin-bottom: 6px",
    "border-left: 3px solid \{border_color}",
    "box-shadow: 0 1px 2px rgba(0,0,0,0.05)",
  ]) <| [
    // Title + assignee
    @html.div(style=[
      "display: flex", "justify-content: space-between", "align-items: flex-start",
      "gap: 6px",
    ]) <| [
      @html.div(style=[
        "font-size: 12px",
        "font-weight: 500",
        "color: \{title_color}",
        "text-decoration: \{title_decoration}",
        "flex: 1",
        "line-height: 1.4",
      ]) <| [
        @html.text(task.title),
      ],
      assignee_html,
    ],
    // Due date
    if !task.due_date.is_empty() {
      let urgency = @shared.urgency_label(task.due_date, model.today)
      let due_color = match urgency {
        "Overdue" => "#ef4444"
        "Due today" => "#f97316"
        _ => "#94a3b8"
      }
      @html.div(style=[
        "font-size: 10px",
        "color: \{due_color}",
        "margin-top: 4px",
      ]) <| [
        @html.text(task.due_date),
      ]
    } else {
      @html.text("")
    },
    // Action buttons
    @html.div(style=[
      "display: flex", "gap: 2px", "margin-top: 6px", "flex-wrap: wrap",
    ]) <| ({
      let buttons : Array[@rabbita.Html] = transitions.map(fn(target) {
        let label = @shared.t_transition(model.lang, task.status, target)
        let bg = @shared.status_color(target)
        @html.button(on_click=dispatch(ChangeStatus(task.id, target)), style=[
          "padding: 1px 6px",
          "border-radius: 3px",
          "border: none",
          "cursor: pointer",
          "font-size: 9px",
          "color: white",
          "background: \{bg}",
        ]) <| label
      })
      buttons.push(
        @html.button(on_click=dispatch(ShowComments(task.id)), style=[
          "padding: 1px 6px",
          "font-size: 9px",
          "cursor: pointer",
          "border-radius: 3px",
          "border: 1px solid \{theme.input_border}",
          "background: \{theme.filter_inactive}",
          "color: \{theme.text_muted}",
        ]) <| @shared.t(model.lang, "notes"),
      )
      buttons.push(
        @html.button(on_click=dispatch(StartEditTask(task)), style=[
          "padding: 1px 6px",
          "font-size: 9px",
          "cursor: pointer",
          "border-radius: 3px",
          "border: 1px solid \{theme.input_border}",
          "background: \{theme.filter_inactive}",
          "color: \{theme.text_muted}",
        ]) <| @shared.t(model.lang, "edit"),
      )
      buttons.push(
        @html.button(on_click=dispatch(RequestDelete(task.id)), style=[
          "padding: 1px 6px", "font-size: 9px", "cursor: pointer", "border-radius: 3px",
          "border: 1px solid #fecaca", "background: #fef2f2", "color: #dc2626",
        ]) <| @shared.t(model.lang, "del"),
      )
      buttons
    }),
  ]
}

///|
/// Render the kanban board with tasks grouped by status columns.
fn view_kanban(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
  tasks : Array[@shared.Task],
) -> @rabbita.Html {
  let theme = get_theme(model.dark_mode)
  let column_statuses = ["todo", "in_progress", "review", "done", "blocked"]
  @html.div(style=[
    "display: flex", "gap: 12px", "overflow-x: auto", "padding-bottom: 8px", "min-height: 400px",
  ]) <| column_statuses.map(fn(status) {
    let col_tasks = tasks.filter(fn(t) { t.status == status })
    let col_color = @shared.status_color(status)
    let count = col_tasks.length()
    @html.div(style=[
      "min-width: 200px",
      "flex: 1",
      "background: \{theme.column_bg}",
      "border-radius: 8px",
      "padding: 10px",
      "border: 1px solid \{theme.input_border}",
    ]) <| ({
      let items : Array[@rabbita.Html] = [
        @html.div(style=[
          "display: flex",
          "align-items: center",
          "gap: 6px",
          "margin-bottom: 10px",
          "padding-bottom: 8px",
          "border-bottom: 2px solid \{col_color}",
        ]) <| [
          @html.span(style=[
            "font-size: 12px",
            "font-weight: 600",
            "color: \{theme.text}",
          ]) <| @shared.t_status(model.lang, status),
          @html.span(style=[
            "font-size: 10px",
            "color: \{theme.text_muted}",
            "background: \{theme.filter_inactive}",
            "padding: 1px 6px",
            "border-radius: 8px",
          ]) <| "\{count}",
        ],
      ]
      for t in @shared.sort_tasks(col_tasks) {
        items.push(view_kanban_card(dispatch, model, t))
      }
      if count == 0 {
        items.push(
          @html.div(style=[
            "text-align: center", "padding: 20px 0", "color: #cbd5e1", "font-size: 11px",
          ]) <| [
            @html.text(@shared.t(model.lang, "no_tasks")),
          ],
        )
      }
      items
    })
  })
}
