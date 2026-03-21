///|
/// Render a single task card.
fn view_task_item(
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
  let status_bg = @shared.status_color(task.status)
  let transitions = @shared.allowed_transitions(task.status)
  // Assignee info
  let assignee_html = match
    @shared.find_member(model.members, task.assignee_id) {
    Some(m) => {
      let bg = @shared.member_color(m.color)
      let initial = @shared.member_initial(m.name)
      @html.div(style=[
        "width: 24px",
        "height: 24px",
        "border-radius: 50%",
        "display: flex",
        "align-items: center",
        "justify-content: center",
        "font-size: 10px",
        "color: white",
        "font-weight: 600",
        "background: \{bg}",
      ]) <| [
        @html.text(initial),
      ]
    }
    None =>
      @html.div(style=[
        "width: 24px", "height: 24px", "border-radius: 50%", "background: #e2e8f0",
        "display: flex", "align-items: center", "justify-content: center", "font-size: 10px",
        "color: #94a3b8",
      ]) <| [
        @html.text("—"),
      ]
  }
  // Due date display
  let due_html = if !task.due_date.is_empty() {
    let urgency = @shared.urgency_label(task.due_date, model.today)
    let due_color = match urgency {
      "Overdue" => "#ef4444"
      "Due today" => "#f97316"
      _ => theme.text_secondary
    }
    @html.div(style=["font-size: 11px", "color: \{due_color}"]) <| [
      @html.text(task.due_date),
    ]
  } else {
    @html.text("")
  }
  // Dependency indicator
  let dep_ids = @shared.get_dependencies(model.dependencies, task.id)
  let has_blocked = @shared.has_unresolved_deps(
    model.dependencies,
    model.tasks,
    task.id,
  )
  let dep_html = if !dep_ids.is_empty() {
    let dep_names : Array[String] = []
    for did in dep_ids {
      for t in model.tasks {
        if t.id == did {
          dep_names.push(t.title)
          break
        }
      }
    }
    let color = if has_blocked { "#ef4444" } else { "#22c55e" }
    let label = if has_blocked {
      @shared.t(model.lang, "blocked_by")
    } else {
      @shared.t(model.lang, "depends_done")
    }
    let names = dep_names.join(", ")
    @html.div(style=["font-size: 10px", "color: \{color}", "margin-top: 2px"]) <| [
      @html.text("\{label}: \{names}"),
    ]
  } else {
    @html.text("")
  }
  @html.div(style=[
    "background: \{theme.card_bg}",
    "border-radius: 8px",
    "padding: 12px 16px",
    "margin-bottom: 8px",
    "border: 1px solid \{theme.card_border}",
    "border-left: 4px solid \{border_color}",
    "transition: all 0.15s",
  ]) <| [
    // Top row: title + info
    @html.div(style=[
      "display: flex", "justify-content: space-between", "align-items: flex-start",
      "margin-bottom: 6px",
    ]) <| [
      @html.div(style=["flex: 1"]) <| [
        @html.div(style=[
          "font-size: 14px",
          "font-weight: 500",
          "color: \{title_color}",
          "text-decoration: \{title_decoration}",
        ]) <| [
          @html.text(task.title),
        ],
        if !task.description.is_empty() {
          @html.div(style=[
            "font-size: 12px",
            "color: \{theme.text_secondary}",
            "margin-top: 2px",
            "line-height: 1.4",
          ]) <| [
            @html.text(task.description),
          ]
        } else {
          @html.text("")
        },
        dep_html,
      ],
      @html.div(style=[
        "display: flex", "gap: 8px", "align-items: center", "margin-left: 12px",
      ]) <| [
        assignee_html,
        // Status badge
        @html.span(style=[
          "padding: 2px 8px",
          "border-radius: 10px",
          "font-size: 11px",
          "color: white",
          "background: \{status_bg}",
        ]) <| @shared.t_status(model.lang, task.status),
        due_html,
      ],
    ],
    // Bottom row: transition buttons + actions
    @html.div(style=[
      "display: flex", "gap: 4px", "justify-content: space-between", "align-items: center",
    ]) <| [
      // Status transition buttons
      @html.div(style=["display: flex", "gap: 3px"]) <| transitions.map(fn(
        target,
      ) {
        let label = @shared.t_transition(model.lang, task.status, target)
        let bg = @shared.status_color(target)
        @html.button(on_click=dispatch(ChangeStatus(task.id, target)), style=[
          "padding: 2px 8px",
          "border-radius: 4px",
          "border: none",
          "cursor: pointer",
          "font-size: 10px",
          "color: white",
          "background: \{bg}",
        ]) <| label
      }),
      // Notes / Edit / Delete
      @html.div(style=["display: flex", "gap: 3px"]) <| [
        @html.button(on_click=dispatch(ShowComments(task.id)), style=[
          "padding: 2px 8px",
          "font-size: 11px",
          "cursor: pointer",
          "border-radius: 4px",
          "border: 1px solid \{theme.input_border}",
          "background: \{theme.filter_inactive}",
          "color: \{theme.text_secondary}",
        ]) <| @shared.t(model.lang, "notes"),
        @html.button(on_click=dispatch(StartEditTask(task)), style=[
          "padding: 2px 8px",
          "font-size: 11px",
          "cursor: pointer",
          "border-radius: 4px",
          "border: 1px solid \{theme.input_border}",
          "background: \{theme.filter_inactive}",
          "color: \{theme.text_secondary}",
        ]) <| @shared.t(model.lang, "edit"),
        @html.button(on_click=dispatch(RequestDelete(task.id)), style=[
          "padding: 2px 8px", "font-size: 11px", "cursor: pointer", "border-radius: 4px",
          "border: 1px solid #fecaca", "background: #fef2f2", "color: #dc2626",
        ]) <| @shared.t(model.lang, "del"),
      ],
    ],
  ]
}
