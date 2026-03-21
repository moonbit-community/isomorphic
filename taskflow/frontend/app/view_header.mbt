///|
/// Render the header with app title and stats.
fn view_header(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  let pct = @shared.completion_percent(model.tasks)
  let total = model.tasks.length()
  let done = @shared.count_by_status(model.tasks, "done")
  @html.div(style=[
    "background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)", "padding: 20px 32px",
    "margin-bottom: 16px", "border-radius: 12px", "display: flex", "justify-content: space-between",
    "align-items: center",
  ]) <| [
    @html.div(style=[]) <| [
      @html.h1(style=[
        "color: white", "font-size: 22px", "font-weight: 700", "letter-spacing: -0.3px",
        "margin-bottom: 4px",
      ]) <| @shared.t(model.lang, "app_title"),
      @html.div(style=["color: rgba(255,255,255,0.8)", "font-size: 13px"]) <| [
        @html.text(@shared.t_complete(model.lang, pct)),
        @html.span(style=["margin-left: 12px", "color: rgba(255,255,255,0.6)"]) <| @shared.t_tasks_done(
          model.lang,
          done,
          total,
        ),
      ],
    ],
    // Progress bar + controls
    @html.div(style=["display: flex", "align-items: center", "gap: 12px"]) <| [
      @html.div(style=[
        "width: 120px", "height: 6px", "background: rgba(255,255,255,0.2)", "border-radius: 3px",
        "overflow: hidden",
      ]) <| [
        @html.div(style=[
          "width: \{pct}%",
          "height: 100%",
          "background: #a5f3fc",
          "border-radius: 3px",
          "transition: width 0.3s",
        ]) <| [
          @html.text(""),
        ],
      ],
      // View mode toggle
      @html.div(style=["display: flex", "gap: 2px"]) <| [
        {
          let is_list = model.view_mode == "list"
          let bg = if is_list {
            "rgba(255,255,255,0.3)"
          } else {
            "rgba(255,255,255,0.1)"
          }
          @html.button(on_click=dispatch(SetViewMode("list")), style=[
            "padding: 6px 10px",
            "border: none",
            "cursor: pointer",
            "font-size: 12px",
            "color: white",
            "border-radius: 4px 0 0 4px",
            "background: \{bg}",
          ]) <| @shared.t(model.lang, "list")
        },
        {
          let is_board = model.view_mode == "kanban"
          let bg = if is_board {
            "rgba(255,255,255,0.3)"
          } else {
            "rgba(255,255,255,0.1)"
          }
          @html.button(on_click=dispatch(SetViewMode("kanban")), style=[
            "padding: 6px 10px",
            "border: none",
            "cursor: pointer",
            "font-size: 12px",
            "color: white",
            "border-radius: 0 4px 4px 0",
            "background: \{bg}",
          ]) <| @shared.t(model.lang, "board")
        },
      ],
      // My Tasks toggle
      match model.current_user {
        Some(user) => {
          let my_member_id = find_member_id_by_name(
            model.members,
            user.username,
          )
          let is_active = model.filter_assignee == my_member_id &&
            my_member_id != 0
          let bg = if is_active {
            "rgba(255,255,255,0.35)"
          } else {
            "rgba(255,255,255,0.1)"
          }
          let target = if is_active { 0 } else { my_member_id }
          @html.button(on_click=dispatch(SetFilterAssignee(target)), style=[
            "padding: 6px 10px",
            "border: none",
            "cursor: pointer",
            "font-size: 12px",
            "color: white",
            "border-radius: 4px",
            "background: \{bg}",
            "font-weight: 500",
          ]) <| @shared.t(model.lang, "my_tasks")
        }
        None => @html.text("")
      },
      // Dark mode toggle
      {
        let icon = if model.dark_mode {
          @shared.t(model.lang, "light")
        } else {
          @shared.t(model.lang, "dark")
        }
        @html.button(on_click=dispatch(ToggleDarkMode), style=[
          "padding: 6px 10px", "border: none", "cursor: pointer", "font-size: 12px",
          "color: white", "border-radius: 4px", "background: rgba(255,255,255,0.15)",
        ]) <| icon
      },
      // Language toggle
      {
        let (label, target_lang) : (String, @shared.Lang) = match model.lang {
          En => ("中文", Zh)
          Zh => ("EN", En)
        }
        @html.button(on_click=dispatch(SetLang(target_lang)), style=[
          "padding: 6px 10px", "border: none", "cursor: pointer", "font-size: 12px",
          "color: white", "border-radius: 4px", "background: rgba(255,255,255,0.15)",
        ]) <| label
      },
      if model.adding_task {
        @html.text("")
      } else {
        @html.button(on_click=dispatch(ShowAddTask), style=[
          "padding: 8px 16px", "background: rgba(255,255,255,0.2)", "color: white",
          "border: 1px solid rgba(255,255,255,0.3)", "border-radius: 6px", "cursor: pointer",
          "font-size: 13px",
        ]) <| @shared.t(model.lang, "new_task")
      },
      // User info + logout
      match model.current_user {
        Some(user) => {
          let color = @shared.member_color(user.color)
          let initial = @shared.member_initial(user.username)
          @html.div(style=[
            "display: flex", "align-items: center", "gap: 8px", "margin-left: 8px",
          ]) <| [
            @html.div(style=[
              "width: 28px",
              "height: 28px",
              "border-radius: 50%",
              "display: flex",
              "align-items: center",
              "justify-content: center",
              "font-size: 12px",
              "font-weight: 600",
              "color: white",
              "background: \{color}",
            ]) <| [
              @html.text(initial),
            ],
            @html.span(style=[
              "color: rgba(255,255,255,0.9)", "font-size: 13px", "font-weight: 500",
            ]) <| user.username,
            @html.button(on_click=dispatch(Logout), style=[
              "padding: 4px 10px", "border: none", "cursor: pointer", "font-size: 11px",
              "color: rgba(255,255,255,0.8)", "border-radius: 4px", "background: rgba(255,255,255,0.1)",
            ]) <| @shared.t(model.lang, "logout"),
          ]
        }
        None => @html.text("")
      },
    ],
  ]
}
