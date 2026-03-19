///|
/// Render the comments/notes panel as a modal overlay.
fn view_comments_panel(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  if model.viewing_comments == 0 {
    return @html.text("")
  }
  let theme = get_theme(model.dark_mode)
  let mut task_title = "Task"
  for t in model.tasks {
    if t.id == model.viewing_comments {
      task_title = t.title
      break
    }
  }
  @html.div(
    style=[
      "position: fixed", "top: 0", "left: 0", "right: 0", "bottom: 0", "background: rgba(0,0,0,0.4)",
      "display: flex", "align-items: center", "justify-content: center", "z-index: 1000",
    ],
    [
      @html.div(
        style=[
          "background: \{theme.card_bg}",
          "border-radius: 12px",
          "padding: 20px",
          "max-width: 500px",
          "width: 90%",
          "max-height: 80vh",
          "overflow-y: auto",
          "box-shadow: 0 20px 60px rgba(0,0,0,0.2)",
        ],
        {
          let items : Array[@rabbita.Html] = [
            // Header
            @html.div(
              style=[
                "display: flex", "justify-content: space-between", "align-items: center",
                "margin-bottom: 16px",
              ],
              [
                @html.div(style=[], [
                  @html.div(
                    style=[
                      "font-size: 15px",
                      "font-weight: 600",
                      "color: \{theme.text}",
                    ],
                    [@html.text(@shared.t(model.lang, "notes"))],
                  ),
                  @html.div(
                    style=[
                      "font-size: 12px",
                      "color: \{theme.text_muted}",
                      "margin-top: 2px",
                    ],
                    [@html.text(task_title)],
                  ),
                ]),
                @html.button(
                  on_click=dispatch(HideComments),
                  style=[
                    "background: none",
                    "border: none",
                    "color: \{theme.text_muted}",
                    "cursor: pointer",
                    "font-size: 18px",
                    "padding: 0 4px",
                  ],
                  "\u{00d7}",
                ),
              ],
            ),
            // Add comment form
            @html.div(
              style=["display: flex", "gap: 8px", "margin-bottom: 16px"],
              [
                @html.input(
                  input_type=Text,
                  placeholder=@shared.t(model.lang, "add_note_placeholder"),
                  value=model.new_comment,
                  on_input=fn(v) { dispatch(NewCommentChanged(v)) },
                  style=[
                    "flex: 1",
                    "padding: 8px 10px",
                    "border: 1px solid \{theme.input_border}",
                    "border-radius: 6px",
                    "font-size: 13px",
                    "outline: none",
                    "background: \{theme.input_bg}",
                    "color: \{theme.text}",
                  ],
                  "",
                ),
                @html.button(
                  on_click=dispatch(AddComment),
                  style=[
                    "padding: 8px 14px", "background: #4f46e5", "color: white", "border: none",
                    "border-radius: 6px", "cursor: pointer", "font-size: 13px",
                  ],
                  @shared.t(model.lang, "add"),
                ),
              ],
            ),
          ]
          // Comment list
          if model.comments.length() == 0 {
            items.push(
              @html.div(
                style=[
                  "text-align: center",
                  "padding: 20px 0",
                  "color: \{theme.text_muted}",
                  "font-size: 13px",
                ],
                [@html.text(@shared.t(model.lang, "no_notes"))],
              ),
            )
          }
          for c in model.comments {
            items.push(
              @html.div(
                style=[
                  "padding: 10px 0",
                  "border-bottom: 1px solid \{theme.card_border}",
                ],
                [
                  @html.div(
                    style=[
                      "display: flex", "justify-content: space-between", "margin-bottom: 4px",
                    ],
                    [
                      @html.span(
                        style=[
                          "font-size: 12px",
                          "font-weight: 600",
                          "color: \{theme.text_secondary}",
                        ],
                        c.author,
                      ),
                      @html.span(
                        style=["font-size: 11px", "color: \{theme.text_muted}"],
                        c.created_at,
                      ),
                    ],
                  ),
                  @html.div(
                    style=[
                      "font-size: 13px",
                      "color: \{theme.text}",
                      "line-height: 1.5",
                    ],
                    [@html.text(c.text)],
                  ),
                ],
              ),
            )
          }
          // Dependencies section
          let task_id = model.viewing_comments
          let dep_ids = @shared.get_dependencies(model.dependencies, task_id)
          items.push(
            @html.div(
              style=[
                "margin-top: 16px",
                "padding-top: 12px",
                "border-top: 1px solid \{theme.card_border}",
              ],
              {
                let dep_items : Array[@rabbita.Html] = [
                  @html.div(
                    style=[
                      "font-size: 13px",
                      "font-weight: 600",
                      "color: \{theme.text}",
                      "margin-bottom: 8px",
                    ],
                    [@html.text(@shared.t(model.lang, "dependencies"))],
                  ),
                ]
                // Show current deps with remove button
                for did in dep_ids {
                  let mut dep_name = ""
                  let mut dep_done = false
                  for t in model.tasks {
                    if t.id == did {
                      dep_name = t.title
                      dep_done = t.status == "done"
                      break
                    }
                  }
                  let color = if dep_done { "#22c55e" } else { "#ef4444" }
                  let status_text = if dep_done { " (done)" } else { "" }
                  let dep_id = did
                  dep_items.push(
                    @html.div(
                      style=[
                        "display: flex", "align-items: center", "gap: 6px", "padding: 3px 0",
                      ],
                      [
                        @html.span(
                          style=[
                            "width: 6px",
                            "height: 6px",
                            "border-radius: 50%",
                            "background: \{color}",
                          ],
                          "",
                        ),
                        @html.span(
                          style=[
                            "font-size: 12px",
                            "color: \{theme.text_secondary}",
                            "flex: 1",
                          ],
                          "\{dep_name}\{status_text}",
                        ),
                        @html.button(
                          on_click=dispatch(RemoveDep(task_id, dep_id)),
                          style=[
                            "background: none",
                            "border: none",
                            "color: \{theme.text_muted}",
                            "cursor: pointer",
                            "font-size: 14px",
                            "padding: 0 2px",
                          ],
                          "\u{00d7}",
                        ),
                      ],
                    ),
                  )
                }
                if dep_ids.length() == 0 {
                  dep_items.push(
                    @html.div(
                      style=[
                        "font-size: 12px",
                        "color: \{theme.text_muted}",
                        "padding: 4px 0",
                      ],
                      [@html.text(@shared.t(model.lang, "no_dependencies"))],
                    ),
                  )
                }
                // Add dependency: show other tasks as clickable items
                let other_tasks = model.tasks.filter(fn(t) {
                  t.id != task_id && !(dep_ids.contains(t.id))
                })
                if other_tasks.length() > 0 {
                  dep_items.push(
                    @html.div(
                      style=[
                        "font-size: 11px",
                        "color: \{theme.text_muted}",
                        "margin-top: 8px",
                        "margin-bottom: 4px",
                      ],
                      [@html.text(@shared.t(model.lang, "add_dependency"))],
                    ),
                  )
                  dep_items.push(
                    @html.div(
                      style=["display: flex", "flex-wrap: wrap", "gap: 4px"],
                      other_tasks.map(fn(t) {
                        @html.button(
                          on_click=dispatch(AddDep(task_id, t.id)),
                          style=[
                            "padding: 2px 8px",
                            "font-size: 11px",
                            "cursor: pointer",
                            "border-radius: 4px",
                            "border: 1px solid \{theme.input_border}",
                            "background: \{theme.filter_inactive}",
                            "color: \{theme.text_secondary}",
                          ],
                          t.title,
                        )
                      }),
                    ),
                  )
                }
                dep_items
              },
            ),
          )
          items
        },
      ),
    ],
  )
}
