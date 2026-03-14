///|
fn Model::view_avatar(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=["display: flex", "flex-direction: column", "gap: 16px"], [
    @html.label(style=label_style, "Avatars"),
    @html.div(
      style=["display: flex", "gap: 12px", "flex-wrap: wrap", "align-items: center"],
      {
        let avatars : Array[@rabbita.Html] = []
        for user in self.avatar.users {
          let name = user.0
          let color = user.1
          let online = user.2
          let initial = name.substring(end=1)
          let status_color = if online { success } else { "#9ca3af" }
          avatars.push(
            @html.div(
              style=["display: flex", "flex-direction: column", "align-items: center", "gap: 4px"],
              [
                @html.div(
                  style=["position: relative", "display: inline-block"],
                  [
                    @html.div(
                      style=[
                        "width: 48px", "height: 48px", "border-radius: 50%",
                        "background: \{color}", "display: flex",
                        "align-items: center", "justify-content: center",
                        "font-size: 18px", "font-weight: 700", "color: white",
                      ],
                      initial,
                    ),
                    @html.div(
                      style=[
                        "position: absolute", "bottom: 2px", "right: 2px",
                        "width: 12px", "height: 12px", "border-radius: 50%",
                        "background: \{status_color}", "border: 2px solid white",
                      ],
                      "",
                    ),
                  ],
                ),
                @html.span(style=["font-size: 11px", "color: \{text_muted}"], name),
              ],
            ),
          )
        }
        avatars
      },
    ),
  ])
}

///|
fn Model::view_badge(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=["display: flex", "flex-direction: column", "gap: 16px"], [
    @html.label(style=label_style, "Badges"),
    @html.div(
      style=["display: flex", "gap: 16px", "flex-wrap: wrap", "align-items: flex-start"],
      {
        let badges : Array[@rabbita.Html] = []
        for pair in self.badge.counts {
          let lbl = pair.0
          let count = pair.1
          let count_str = if count > 99 { "99+" } else { "\{count}" }
          badges.push(
            @html.div(
              style=["position: relative", "display: inline-block"],
              [
                @html.button(
                  style=[
                    "padding: 8px 16px", "border-radius: \{radius}",
                    "background: \{surface}", "border: 1px solid \{border}",
                    "font-size: 14px", "color: \{text_primary}", "cursor: pointer",
                  ],
                  lbl,
                ),
                if count > 0 {
                  @html.div(
                    style=[
                      "position: absolute", "top: -8px", "right: -8px",
                      "min-width: 20px", "height: 20px",
                      "border-radius: \{radius_full}", "background: \{danger}",
                      "color: white", "font-size: 11px", "font-weight: 700",
                      "display: flex", "align-items: center",
                      "justify-content: center", "padding: 0 4px",
                    ],
                    count_str,
                  )
                } else {
                  @html.nothing
                },
              ],
            ),
          )
        }
        badges
      },
    ),
  ])
}

///|
fn Model::view_progress(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let pct = self.progress.value
  @html.div(style=["display: flex", "flex-direction: column", "gap: 12px"], [
    @html.div(
      style=["display: flex", "justify-content: space-between", "align-items: center"],
      [
        @html.label(style=label_style, "Progress Bar"),
        @html.span(
          style=["font-size: 14px", "font-weight: 600", "color: \{primary}"],
          "\{pct}%",
        ),
      ],
    ),
    @html.div(
      style=[
        "width: 100%", "height: 10px", "border-radius: \{radius_full}",
        "background: \{surface_alt}", "overflow: hidden",
        "border: 1px solid \{border}",
      ],
      [
        @html.div(
          style=[
            "height: 100%", "width: \{pct}%",
            "border-radius: \{radius_full}", "background: \{primary}",
          ],
          "",
        ),
      ],
    ),
    @html.label(style=label_style, "Adjust:"),
    @html.input(
      input_type=Range,
      value="\{pct}",
      style=["width: 100%", "cursor: pointer"],
      on_input=(s) => dispatch(ProgressChanged(s)),
      "",
    ),
  ])
}

///|
fn Model::view_tooltip(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let tips = [
    ("Copy", "Copy to clipboard"),
    ("Share", "Share this link"),
    ("Save", "Save for later"),
    ("Delete", "Remove this item"),
  ]
  @html.div(style=["display: flex", "flex-direction: column", "gap: 16px"], [
    @html.label(style=label_style, "Tooltips (hover)"),
    @html.div(
      style=["display: flex", "gap: 12px", "flex-wrap: wrap"],
      {
        let tooltip_items : Array[@rabbita.Html] = []
        for i, tip in tips {
          let lbl = tip.0
          let text = tip.1
          let active = self.tooltip.active_index == i
          let btn_bg = if active { primary } else { surface }
          let btn_color = if active { "white" } else { text_primary }
          let btn_border = if active { primary } else { border }
          tooltip_items.push(
            @html.div(
              style=["position: relative", "display: inline-block"],
              [
                @html.div(
                  attrs=@html.Attrs::build()
                    .on_mouseenter(fn(_) { dispatch(TooltipShow(i)) })
                    .on_mouseleave(fn(_) { dispatch(TooltipHide) }),
                  [
                    @html.button(
                      style=[
                        "padding: 8px 16px", "border-radius: \{radius}",
                        "background: \{btn_bg}", "color: \{btn_color}",
                        "border: 1px solid \{btn_border}",
                        "font-size: 14px", "cursor: pointer",
                      ],
                      lbl,
                    ),
                  ],
                ),
                if active {
                  @html.div(
                    style=[
                      "position: absolute", "bottom: calc(100% + 8px)", "left: 50%",
                      "transform: translateX(-50%)",
                      "background: \{text_primary}", "color: white",
                      "font-size: 12px", "padding: 6px 10px",
                      "border-radius: \{radius_sm}", "white-space: nowrap",
                      "z-index: 100",
                    ],
                    text,
                  )
                } else {
                  @html.nothing
                },
              ],
            ),
          )
        }
        tooltip_items
      },
    ),
  ])
}

///|
fn Model::view_tag(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=["display: flex", "flex-direction: column", "gap: 12px"], [
    @html.label(style=label_style, "Tags"),
    @html.div(
      style=["display: flex", "flex-wrap: wrap", "gap: 8px", "min-height: 32px"],
      {
        let tag_els : Array[@rabbita.Html] = []
        for i, t in self.tag.tags {
          tag_els.push(
            @html.div(
              style=[
                "display: inline-flex", "align-items: center", "gap: 6px",
                "padding: 4px 10px", "border-radius: \{radius_full}",
                "background: \{primary_light}", "border: 1px solid \{primary}",
                "font-size: 13px", "color: \{primary}",
              ],
              [
                @html.span(style=[], t),
                @html.button(
                  style=[
                    "background: none", "border: none", "padding: 0 2px",
                    "cursor: pointer", "color: \{primary}", "font-size: 14px",
                    "line-height: 1",
                  ],
                  on_click=dispatch(TagRemove(i)),
                  "x",
                ),
              ],
            ),
          )
        }
        tag_els
      },
    ),
    @html.form(
      on_submit=dispatch(TagAdd),
      style=["display: flex", "gap: 8px"],
      [
        @html.input(
          input_type=Text,
          value=self.tag.input,
          placeholder="New tag...",
          on_input=(s) => dispatch(TagInputChanged(s)),
          style=input_style,
          "",
        ),
        @html.button(
          type_="submit",
          style=btn_style,
          "Add",
        ),
      ],
    ),
  ])
}

///|
fn Model::view_skeleton(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let btn_label = if self.skeleton.loading { "Show Content" } else { "Show Skeleton" }
  @html.div(style=["display: flex", "flex-direction: column", "gap: 16px"], [
    @html.div(
      style=["display: flex", "align-items: center", "justify-content: space-between"],
      [
        @html.label(style=label_style, "Skeleton Loading"),
        @html.button(
          style=btn_sm_style,
          on_click=dispatch(SkeletonToggle),
          btn_label,
        ),
      ],
    ),
    if self.skeleton.loading {
      @html.div(
        style=["display: flex", "flex-direction: column", "gap: 12px", "padding: 16px", "border: 1px solid \{border}", "border-radius: \{radius}"],
        [
          @html.div(
            style=["display: flex", "gap: 12px", "align-items: center"],
            [
              @html.div(
                style=[
                  "width: 48px", "height: 48px", "border-radius: 50%",
                  "background: \{border}", "flex-shrink: 0",
                ],
                "",
              ),
              @html.div(
                style=["flex: 1", "display: flex", "flex-direction: column", "gap: 8px"],
                [
                  @html.div(style=["height: 14px", "width: 60%", "background: \{border}", "border-radius: \{radius_sm}"], ""),
                  @html.div(style=["height: 12px", "width: 40%", "background: \{border}", "border-radius: \{radius_sm}"], ""),
                ],
              ),
            ],
          ),
          @html.div(style=["height: 14px", "background: \{border}", "border-radius: \{radius_sm}"], ""),
          @html.div(style=["height: 14px", "width: 85%", "background: \{border}", "border-radius: \{radius_sm}"], ""),
          @html.div(style=["height: 14px", "width: 70%", "background: \{border}", "border-radius: \{radius_sm}"], ""),
        ],
      )
    } else {
      @html.div(
        style=["padding: 16px", "border: 1px solid \{border}", "border-radius: \{radius}"],
        [
          @html.div(
            style=["display: flex", "gap: 12px", "align-items: center", "margin-bottom: 12px"],
            [
              @html.div(
                style=[
                  "width: 48px", "height: 48px", "border-radius: 50%",
                  "background: \{primary}", "display: flex",
                  "align-items: center", "justify-content: center",
                  "color: white", "font-weight: 700", "font-size: 18px",
                  "flex-shrink: 0",
                ],
                "A",
              ),
              @html.div(
                style=["flex: 1"],
                [
                  @html.p(style=["margin: 0 0 4px", "font-weight: 600", "color: \{text_primary}"], "Alice Johnson"),
                  @html.p(style=["margin: 0", "font-size: 13px", "color: \{text_muted}"], "Software Engineer"),
                ],
              ),
            ],
          ),
          @html.p(
            style=["margin: 0", "font-size: 14px", "color: \{text_secondary}", "line-height: 1.6"],
            "Building great user experiences with MoonBit and Rabbita.",
          ),
        ],
      )
    },
  ])
}

///|
fn Model::view_empty_state(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let btn_label = if self.empty_state.has_data { "Clear Data" } else { "Load Data" }
  @html.div(style=["display: flex", "flex-direction: column", "gap: 16px"], [
    @html.div(
      style=["display: flex", "align-items: center", "justify-content: space-between"],
      [
        @html.label(style=label_style, "Empty State"),
        @html.button(
          style=btn_sm_style,
          on_click=dispatch(EmptyStateToggle),
          btn_label,
        ),
      ],
    ),
    if !self.empty_state.has_data {
      @html.div(
        style=[
          "display: flex", "flex-direction: column", "align-items: center",
          "padding: 40px 24px", "border: 2px dashed \{border}",
          "border-radius: \{radius}", "text-align: center", "gap: 12px",
        ],
        [
          @html.div(style=["font-size: 48px"], "📭"),
          @html.h3(style=["margin: 0", "font-size: 18px", "color: \{text_primary}"], "Nothing here yet"),
          @html.p(style=["margin: 0", "font-size: 14px", "color: \{text_muted}"], "Add items to get started."),
          @html.button(style=btn_style, on_click=dispatch(EmptyStateToggle), "Add Item"),
        ],
      )
    } else {
      @html.div(
        style=["display: flex", "flex-direction: column", "gap: 8px"],
        [
          @html.div(style=["padding: 12px", "border: 1px solid \{border}", "border-radius: \{radius}", "font-size: 14px", "color: \{text_primary}"], "Item 1"),
          @html.div(style=["padding: 12px", "border: 1px solid \{border}", "border-radius: \{radius}", "font-size: 14px", "color: \{text_primary}"], "Item 2"),
          @html.div(style=["padding: 12px", "border: 1px solid \{border}", "border-radius: \{radius}", "font-size: 14px", "color: \{text_primary}"], "Item 3"),
        ],
      )
    },
  ])
}
