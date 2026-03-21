///|
/// Render filter buttons for status, priority, assignee, and search.
fn view_filters(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  let theme = get_theme(model.dark_mode)
  @html.div(style=[
    "display: flex",
    "gap: 16px",
    "margin-bottom: 16px",
    "flex-wrap: wrap",
    "align-items: center",
    "padding: 12px 16px",
    "background: \{theme.filter_bg}",
    "border-radius: 10px",
    "border: 1px solid \{theme.input_border}",
  ]) <| [
    // Search input
    @html.div(style=["display: flex", "align-items: center", "gap: 6px"]) <| [
      @html.span(style=["font-size: 12px", "color: \{theme.text_muted}"]) <| @shared.t(
        model.lang,
        "search",
      ),
      @html.input(
        input_type=Text,
        placeholder=@shared.t(model.lang, "search_placeholder"),
        value=model.search_query,
        on_input=fn(v) { dispatch(SearchChanged(v)) },
        style=[
          "padding: 4px 10px",
          "border: 1px solid \{theme.input_border}",
          "border-radius: 6px",
          "font-size: 12px",
          "outline: none",
          "width: 150px",
          "background: \{theme.input_bg}",
          "color: \{theme.text}",
        ],
        "",
      ),
    ],
    // Status filter
    @html.div(style=["display: flex", "gap: 4px", "align-items: center"]) <| ({
      let items : Array[@rabbita.Html] = [
        @html.span(style=[
          "font-size: 12px",
          "color: \{theme.text_muted}",
          "margin-right: 4px",
        ]) <| @shared.t(model.lang, "status"),
        {
          let is_sel = model.filter_status == ""
          let bg = if is_sel { "#4f46e5" } else { theme.filter_inactive }
          let fg = if is_sel { "white" } else { theme.text_secondary }
          @html.button(on_click=dispatch(SetFilterStatus("")), style=[
            "padding: 3px 10px",
            "border-radius: 12px",
            "border: none",
            "cursor: pointer",
            "font-size: 11px",
            "background: \{bg}",
            "color: \{fg}",
          ]) <| @shared.t(model.lang, "all")
        },
      ]
      for s in @shared.valid_statuses {
        let is_sel = model.filter_status == s
        let bg = if is_sel {
          @shared.status_color(s)
        } else {
          theme.filter_inactive
        }
        let fg = if is_sel { "white" } else { theme.text_secondary }
        items.push(
          @html.button(on_click=dispatch(SetFilterStatus(s)), style=[
            "padding: 3px 10px",
            "border-radius: 12px",
            "border: none",
            "cursor: pointer",
            "font-size: 11px",
            "background: \{bg}",
            "color: \{fg}",
          ]) <| @shared.t_status(model.lang, s),
        )
      }
      items
    }),
    // Priority filter
    @html.div(style=["display: flex", "gap: 4px", "align-items: center"]) <| ({
      let items : Array[@rabbita.Html] = [
        @html.span(style=[
          "font-size: 12px",
          "color: \{theme.text_muted}",
          "margin-right: 4px",
        ]) <| @shared.t(model.lang, "priority_filter"),
        {
          let is_sel = model.filter_priority == ""
          let bg = if is_sel { "#4f46e5" } else { theme.filter_inactive }
          let fg = if is_sel { "white" } else { theme.text_secondary }
          @html.button(on_click=dispatch(SetFilterPriority("")), style=[
            "padding: 3px 10px",
            "border-radius: 12px",
            "border: none",
            "cursor: pointer",
            "font-size: 11px",
            "background: \{bg}",
            "color: \{fg}",
          ]) <| @shared.t(model.lang, "all")
        },
      ]
      for p in @shared.valid_priorities {
        let is_sel = model.filter_priority == p
        let bg = if is_sel {
          @shared.priority_color(p)
        } else {
          theme.filter_inactive
        }
        let fg = if is_sel { "white" } else { theme.text_secondary }
        items.push(
          @html.button(on_click=dispatch(SetFilterPriority(p)), style=[
            "padding: 3px 10px",
            "border-radius: 12px",
            "border: none",
            "cursor: pointer",
            "font-size: 11px",
            "background: \{bg}",
            "color: \{fg}",
          ]) <| @shared.t_priority(model.lang, p),
        )
      }
      items
    }),
    // Assignee filter
    @html.div(style=["display: flex", "gap: 4px", "align-items: center"]) <| ({
      let items : Array[@rabbita.Html] = [
        @html.span(style=[
          "font-size: 12px",
          "color: \{theme.text_muted}",
          "margin-right: 4px",
        ]) <| @shared.t(model.lang, "assignee_filter"),
        {
          let is_sel = model.filter_assignee == 0
          let border = if is_sel {
            "2px solid #4f46e5"
          } else {
            "2px solid transparent"
          }
          @html.div(on_click=dispatch(SetFilterAssignee(0)), style=[
            "width: 26px",
            "height: 26px",
            "border-radius: 50%",
            "background: #e2e8f0",
            "cursor: pointer",
            "display: flex",
            "align-items: center",
            "justify-content: center",
            "font-size: 10px",
            "color: #94a3b8",
            "border: \{border}",
          ]) <| [
            @html.text(@shared.t(model.lang, "all")),
          ]
        },
      ]
      for m in model.members {
        let is_sel = model.filter_assignee == m.id
        let bg = @shared.member_color(m.color)
        let border = if is_sel {
          "2px solid #4f46e5"
        } else {
          "2px solid transparent"
        }
        let initial = @shared.member_initial(m.name)
        items.push(
          @html.div(on_click=dispatch(SetFilterAssignee(m.id)), style=[
            "width: 26px",
            "height: 26px",
            "border-radius: 50%",
            "cursor: pointer",
            "display: flex",
            "align-items: center",
            "justify-content: center",
            "font-size: 11px",
            "color: white",
            "font-weight: 600",
            "background: \{bg}",
            "border: \{border}",
          ]) <| [
            @html.text(initial),
          ],
        )
      }
      items
    }),
    // Urgency filter
    @html.div(style=["display: flex", "gap: 4px", "align-items: center"]) <| ({
      let urgency_options = [
        ("", @shared.t(model.lang, "all")),
        ("overdue", @shared.t(model.lang, "overdue")),
        ("due_today", @shared.t(model.lang, "today")),
        ("has_deadline", @shared.t(model.lang, "has_due")),
        ("no_deadline", @shared.t(model.lang, "no_due")),
      ]
      let items : Array[@rabbita.Html] = [
        @html.span(style=[
          "font-size: 12px",
          "color: \{theme.text_muted}",
          "margin-right: 4px",
        ]) <| @shared.t(model.lang, "due_filter"),
      ]
      for opt in urgency_options {
        let is_sel = model.filter_urgency == opt.0
        let bg = if is_sel { "#4f46e5" } else { theme.filter_inactive }
        let fg = if is_sel { "white" } else { theme.text_secondary }
        items.push(
          @html.button(on_click=dispatch(SetFilterUrgency(opt.0)), style=[
            "padding: 3px 10px",
            "border-radius: 12px",
            "border: none",
            "cursor: pointer",
            "font-size: 11px",
            "background: \{bg}",
            "color: \{fg}",
          ]) <| opt.1,
        )
      }
      items
    }),
  ]
}
