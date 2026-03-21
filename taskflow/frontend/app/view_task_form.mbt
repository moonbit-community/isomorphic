///|
/// Render the form for creating a new task.
fn view_add_task_form(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  let theme = get_theme(model.dark_mode)
  @html.div(style=[
    "background: \{theme.card_bg}",
    "border-radius: 10px",
    "padding: 16px",
    "border: 2px dashed #c7d2fe",
    "margin-bottom: 16px",
  ]) <| [
    @html.div(style=[
      "font-size: 14px",
      "font-weight: 600",
      "color: \{theme.text}",
      "margin-bottom: 12px",
    ]) <| [
      @html.text(@shared.t(model.lang, "new_task_title")),
    ],
    @html.input(
      input_type=Text,
      placeholder=@shared.t(model.lang, "task_title_placeholder"),
      value=model.new_title,
      on_input=fn(v) { dispatch(NewTitleChanged(v)) },
      style=[
        "width: 100%",
        "padding: 8px 10px",
        "border: 1px solid \{theme.input_border}",
        "border-radius: 6px",
        "font-size: 14px",
        "outline: none",
        "margin-bottom: 8px",
        "background: \{theme.input_bg}",
        "color: \{theme.text}",
      ],
    ) <| "",
    @html.textarea(
      placeholder=@shared.t(model.lang, "desc_placeholder"),
      value=model.new_desc,
      on_input=fn(v) { dispatch(NewDescChanged(v)) },
      rows=2,
      style=[
        "width: 100%",
        "padding: 8px 10px",
        "border: 1px solid \{theme.input_border}",
        "border-radius: 6px",
        "font-size: 13px",
        "outline: none",
        "resize: vertical",
        "font-family: inherit",
        "margin-bottom: 8px",
        "background: \{theme.input_bg}",
        "color: \{theme.text}",
      ],
    ) <| "",
    @html.div(style=[
      "display: flex", "gap: 16px", "margin-bottom: 8px", "flex-wrap: wrap",
    ]) <| [
      @html.div(style=[]) <| [
        @html.div(style=[
          "font-size: 12px",
          "color: \{theme.text_muted}",
          "margin-bottom: 4px",
        ]) <| [
          @html.text(@shared.t(model.lang, "priority")),
        ],
        view_priority_picker(dispatch, model.new_priority, lang=model.lang) <| fn(
          p,
        ) {
          NewPriorityChanged(p)
        },
      ],
      @html.div(style=[]) <| [
        @html.div(style=[
          "font-size: 12px",
          "color: \{theme.text_muted}",
          "margin-bottom: 4px",
        ]) <| [
          @html.text(@shared.t(model.lang, "assignee")),
        ],
        view_assignee_picker(dispatch, model.members, model.new_assignee) <| fn(
          id,
        ) {
          NewAssigneeChanged(id)
        },
      ],
      @html.div(style=[]) <| [
        @html.div(style=[
          "font-size: 12px",
          "color: \{theme.text_muted}",
          "margin-bottom: 4px",
        ]) <| [
          @html.text(@shared.t(model.lang, "due_date")),
        ],
        @html.input(
          input_type=Text,
          placeholder="YYYY-MM-DD",
          value=model.new_due_date,
          on_input=fn(v) { dispatch(NewDueDateChanged(v)) },
          style=[
            "padding: 6px 10px",
            "border: 1px solid \{theme.input_border}",
            "border-radius: 6px",
            "font-size: 13px",
            "outline: none",
            "width: 130px",
            "background: \{theme.input_bg}",
            "color: \{theme.text}",
          ],
        ) <| "",
      ],
    ],
    @html.div(style=["display: flex", "gap: 6px"]) <| [
      @html.button(on_click=dispatch(AddTask), style=[
        "padding: 6px 14px", "background: #4f46e5", "color: white", "border: none",
        "border-radius: 6px", "cursor: pointer", "font-size: 13px",
      ]) <| @shared.t(model.lang, "create_task"),
      @html.button(on_click=dispatch(HideAddTask), style=[
        "padding: 6px 14px",
        "background: \{theme.filter_inactive}",
        "color: \{theme.text_secondary}",
        "border: none",
        "border-radius: 6px",
        "cursor: pointer",
        "font-size: 13px",
      ]) <| @shared.t(model.lang, "cancel"),
    ],
  ]
}

///|
/// Render the inline edit form for a task.
fn view_edit_task_form(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  let theme = get_theme(model.dark_mode)
  @html.div(style=[
    "background: \{theme.card_bg}",
    "border-radius: 8px",
    "padding: 14px",
    "border: 1px solid #4f46e5",
    "margin-bottom: 8px",
  ]) <| [
    @html.input(
      input_type=Text,
      placeholder=@shared.t(model.lang, "task_title_placeholder"),
      value=model.edit_title,
      on_input=fn(v) { dispatch(EditTitleChanged(v)) },
      style=[
        "width: 100%",
        "padding: 6px 8px",
        "border: 1px solid \{theme.input_border}",
        "border-radius: 4px",
        "font-size: 13px",
        "outline: none",
        "margin-bottom: 6px",
        "background: \{theme.input_bg}",
        "color: \{theme.text}",
      ],
    ) <| "",
    @html.textarea(
      placeholder=@shared.t(model.lang, "desc_placeholder"),
      value=model.edit_desc,
      on_input=fn(v) { dispatch(EditDescChanged(v)) },
      rows=2,
      style=[
        "width: 100%",
        "padding: 6px 8px",
        "border: 1px solid \{theme.input_border}",
        "border-radius: 4px",
        "font-size: 12px",
        "outline: none",
        "resize: vertical",
        "font-family: inherit",
        "margin-bottom: 6px",
        "background: \{theme.input_bg}",
        "color: \{theme.text}",
      ],
    ) <| "",
    @html.div(style=[
      "display: flex", "gap: 12px", "margin-bottom: 6px", "flex-wrap: wrap",
    ]) <| [
      @html.div(style=[]) <| [
        @html.div(style=[
          "font-size: 11px",
          "color: \{theme.text_muted}",
          "margin-bottom: 2px",
        ]) <| [
          @html.text(@shared.t(model.lang, "priority")),
        ],
        view_priority_picker(dispatch, model.edit_priority, lang=model.lang) <| fn(
          p,
        ) {
          EditPriorityChanged(p)
        },
      ],
      @html.div(style=[]) <| [
        @html.div(style=[
          "font-size: 11px",
          "color: \{theme.text_muted}",
          "margin-bottom: 2px",
        ]) <| [
          @html.text(@shared.t(model.lang, "assignee")),
        ],
        view_assignee_picker(dispatch, model.members, model.edit_assignee) <| fn(
          id,
        ) {
          EditAssigneeChanged(id)
        },
      ],
      @html.div(style=[]) <| [
        @html.div(style=[
          "font-size: 11px",
          "color: \{theme.text_muted}",
          "margin-bottom: 2px",
        ]) <| [
          @html.text(@shared.t(model.lang, "due_date")),
        ],
        @html.input(
          input_type=Text,
          placeholder="YYYY-MM-DD",
          value=model.edit_due_date,
          on_input=fn(v) { dispatch(EditDueDateChanged(v)) },
          style=[
            "padding: 4px 8px",
            "border: 1px solid \{theme.input_border}",
            "border-radius: 4px",
            "font-size: 12px",
            "outline: none",
            "width: 120px",
            "background: \{theme.input_bg}",
            "color: \{theme.text}",
          ],
        ) <| "",
      ],
    ],
    @html.div(style=["display: flex", "gap: 6px"]) <| [
      @html.button(on_click=dispatch(SaveEditTask), style=[
        "padding: 5px 12px", "background: #4f46e5", "color: white", "border: none",
        "border-radius: 4px", "cursor: pointer", "font-size: 12px",
      ]) <| @shared.t(model.lang, "save"),
      @html.button(on_click=dispatch(CancelEditTask), style=[
        "padding: 5px 12px",
        "background: \{theme.filter_inactive}",
        "color: \{theme.text_secondary}",
        "border: none",
        "border-radius: 4px",
        "cursor: pointer",
        "font-size: 12px",
      ]) <| @shared.t(model.lang, "cancel"),
    ],
  ]
}
