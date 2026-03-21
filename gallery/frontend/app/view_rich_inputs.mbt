///|
fn Model::view_star_rating(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let rating = self.star_rating.rating
  let hover = self.star_rating.hover
  let star_buttons : Array[@rabbita.Html] = []
  for i = 1; i <= 5; i = i + 1 {
    let index = i
    let is_filled = if hover > 0 { index <= hover } else { index <= rating }
    let color = if is_filled { "#f59e0b" } else { text_muted }
    star_buttons.push(
      @html.button(
        style=[
          "background:none",
          "border:none",
          "cursor:pointer",
          "font-size:28px",
          "padding:2px",
          "line-height:1",
          "color:\{color}",
          "transition:color 0.15s",
        ],
        on_click=dispatch(StarClick(index)),
        attrs=@html.Attrs::build()
          .on_mouseenter(fn(_) { dispatch(StarHover(index)) })
          .on_mouseleave(fn(_) { dispatch(StarLeave) }),
      ) <| (if is_filled { "\u{2605}" } else { "\u{2606}" }),
    )
  }
  let stars = @html.div(style=["display:flex", "gap:4px", "align-items:center"]) <| star_buttons
  let label_text = if rating == 0 { "No rating" } else { "\{rating}/5 stars" }
  let label = @html.div(style=[
      "font-size:13px",
      "color:\{text_secondary}",
      "margin-top:8px",
    ]) <| label_text
  @html.div(style=[
    "display:flex", "flex-direction:column", "align-items:flex-start", "gap:4px",
  ]) <| [
    stars, label,
  ]
}

///|
fn Model::view_pin_input(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let digits = self.pin_input.digits
  let verified = self.pin_input.verified
  let hint = @html.div(style=[
      "font-size:12px",
      "color:\{text_muted}",
      "margin-bottom:10px",
    ]) <| "Enter PIN: 1234"
  let pin_inputs : Array[@rabbita.Html] = []
  for i, _d in digits {
    let index = i
    pin_inputs.push(
      @html.input(
        input_type=Text,
        id="pin-\{index}",
        value=digits[index],
        maxlength=1,
        style=[
          "width:48px",
          "height:52px",
          "text-align:center",
          "font-size:22px",
          "font-weight:700",
          "border:2px solid \{border}",
          "border-radius:\{radius}",
          "background:\{surface}",
          "color:\{text_primary}",
          "outline:none",
          "transition:border-color 0.15s",
        ],
        on_input=s => dispatch(PinDigitChanged(index, s)),
      ) <| "",
    )
  }
  let inputs = @html.div(style=[
      "display:flex", "gap:10px", "align-items:center",
    ]) <| pin_inputs
  let status = if verified {
    @html.div(style=[
      "display:flex",
      "align-items:center",
      "gap:6px",
      "margin-top:10px",
      "color:\{success}",
      "font-size:14px",
      "font-weight:600",
    ]) <| [
      @html.span(style=["font-size:18px"]) <| "\u{2713}",
      @html.span() <| "PIN verified!",
    ]
  } else {
    @html.div(style=["height:30px"]) <| ""
  }
  let clear_btn = @html.button(
      style=[..btn_outline_style, ..btn_sm_style, "margin-top:12px"],
      on_click=dispatch(PinClear),
    ) <| "Clear"
  @html.div(style=[
    "display:flex", "flex-direction:column", "align-items:flex-start",
  ]) <| [
    hint, inputs, status, clear_btn,
  ]
}

///|
fn Model::view_password_strength(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let password = self.password_strength.password
  let visible = self.password_strength.visible
  let len = password.length()
  let strength_level = if len == 0 {
    0
  } else if len < 4 {
    1
  } else if len < 8 {
    2
  } else {
    3
  }
  let strength_color = if strength_level == 1 {
    danger
  } else if strength_level == 2 {
    warning
  } else if strength_level == 3 {
    success
  } else {
    border
  }
  let strength_label = if strength_level == 0 {
    ""
  } else if strength_level == 1 {
    "Weak"
  } else if strength_level == 2 {
    "Medium"
  } else {
    "Strong"
  }
  let bar_width = if strength_level == 0 {
    "0%"
  } else if strength_level == 1 {
    "33%"
  } else if strength_level == 2 {
    "66%"
  } else {
    "100%"
  }
  let input_row = @html.div(style=[
      "display:flex", "gap:8px", "align-items:center",
    ]) <| [
      @html.input(
        input_type=if visible { Text } else { Password },
        value=password,
        style=[..input_style, "flex:1", "font-size:15px"],
        on_input=s => dispatch(PasswordChanged(s)),
      ) <| "",
      @html.button(
        style=[
          ..btn_outline_style, "padding:8px 12px", "font-size:16px", "flex-shrink:0",
        ],
        on_click=dispatch(PasswordToggleVisible),
      ) <| (if visible { "\u{1F648}" } else { "\u{1F441}" }),
    ]
  let bar_bg = @html.div(style=[
      "height:6px",
      "border-radius:\{radius_full}",
      "background:\{border}",
      "margin-top:10px",
      "overflow:hidden",
    ]) <| [
      @html.div(style=[
        "height:100%",
        "width:\{bar_width}",
        "background:\{strength_color}",
        "border-radius:\{radius_full}",
        "transition:width 0.3s, background 0.3s",
      ]) <| "",
    ]
  let bar_label = @html.div(style=[
      "font-size:12px",
      "color:\{strength_color}",
      "margin-top:4px",
      "font-weight:600",
      "min-height:18px",
    ]) <| strength_label
  @html.div(style=["display:flex", "flex-direction:column", "width:100%"]) <| [
    input_row, bar_bg, bar_label,
  ]
}

///|
fn Model::view_tag_auto(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let tags = self.tag_auto.tags
  let input_val = self.tag_auto.input
  let suggestions = self.tag_auto.suggestions
  let show_suggestions = self.tag_auto.show_suggestions
  let tag_pill_nodes : Array[@rabbita.Html] = []
  for i, tag in tags {
    let idx = i
    tag_pill_nodes.push(
      @html.div(style=[
        "display:inline-flex",
        "align-items:center",
        "gap:4px",
        "padding:4px 10px",
        "background:\{primary_light}",
        "color:\{primary}",
        "border-radius:\{radius_full}",
        "font-size:13px",
        "font-weight:500",
      ]) <| [
        @html.span(style=[]) <| tag,
        @html.button(
          style=[
            "background:none",
            "border:none",
            "cursor:pointer",
            "color:\{primary}",
            "font-size:14px",
            "line-height:1",
            "padding:0 0 0 2px",
            "display:flex",
            "align-items:center",
          ],
          on_click=dispatch(TagAutoRemove(idx)),
        ) <| "\u{00D7}",
      ],
    )
  }
  let tag_pills = @html.div(style=[
      "display:flex", "flex-wrap:wrap", "gap:6px", "margin-bottom:10px", "min-height:32px",
    ]) <| tag_pill_nodes
  let filtered = suggestions.filter(fn(s) {
    !tags.contains(s) &&
    (input_val.is_empty() || s.to_lower().contains(input_val.to_lower()))
  })
  let dropdown = if show_suggestions &&
    !input_val.is_empty() &&
    !filtered.is_empty() {
    let suggestion_nodes : Array[@rabbita.Html] = []
    for i, s in filtered {
      let idx = i
      let suggestion = s
      suggestion_nodes.push(
        @html.div(
          style=[
            "padding:8px 12px",
            "cursor:pointer",
            "font-size:14px",
            "color:\{text_primary}",
            "transition:background 0.1s",
            if self.tag_auto.focus_index == idx {
              "background:\{primary_light}"
            } else {
              ""
            },
          ],
          on_click=dispatch(TagAutoAdd(suggestion)),
          attrs=@html.Attrs::build().on_mouseenter(fn(_) {
            dispatch(TagAutoFocus(idx))
          }),
        ) <| suggestion,
      )
    }
    @html.div(style=[
      "position:absolute",
      "top:100%",
      "left:0",
      "right:0",
      "background:\{surface}",
      "border:1px solid \{border}",
      "border-radius:\{radius}",
      "margin-top:4px",
      "z-index:10",
      "box-shadow:0 4px 16px rgba(0,0,0,0.1)",
      "overflow:hidden",
    ]) <| suggestion_nodes
  } else {
    @html.div(style=["display:none"]) <| ""
  }
  let input_wrapper = @html.div(style=["position:relative", "width:100%"]) <| [
      @html.input(
        input_type=Text,
        value=input_val,
        style=[..input_style, "width:100%", "box-sizing:border-box"],
        on_input=s => dispatch(TagAutoInputChanged(s)),
      ) <| "",
      dropdown,
    ]
  @html.div(style=["display:flex", "flex-direction:column", "width:100%"]) <| [
    tag_pills, input_wrapper,
  ]
}

///|
fn Model::view_inline_edit(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let items = self.inline_edit.items
  let edit_value = self.inline_edit.edit_value
  let item_nodes : Array[@rabbita.Html] = []
  for i, pair in items {
    let idx = i
    let text = pair.0
    let editing = pair.1
    if editing {
      item_nodes.push(
        @html.div(style=[
          "display:flex", "gap:8px", "align-items:center", "padding:6px 0",
        ]) <| [
          @html.input(
            input_type=Text,
            value=edit_value,
            style=[..input_style, "flex:1", "font-size:14px"],
            on_input=s => dispatch(InlineEditChanged(s)),
          ) <| "",
          @html.button(
            style=[..btn_style, ..btn_sm_style],
            on_click=dispatch(InlineSaveEdit(idx)),
          ) <| "Save",
          @html.button(
            style=[..btn_outline_style, ..btn_sm_style],
            on_click=dispatch(InlineCancelEdit(idx)),
          ) <| "Cancel",
        ],
      )
    } else {
      item_nodes.push(
        @html.div(
          style=[
            "display:flex",
            "align-items:center",
            "justify-content:space-between",
            "padding:8px 12px",
            "border:1px solid \{border}",
            "border-radius:\{radius}",
            "background:\{surface}",
            "cursor:pointer",
            "transition:border-color 0.15s",
          ],
          on_click=dispatch(InlineStartEdit(idx)),
        ) <| [
          @html.span(style=["font-size:14px", "color:\{text_primary}", "flex:1"]) <| text,
          @html.span(style=[
            "font-size:12px",
            "color:\{text_muted}",
            "margin-left:8px",
          ]) <| "\u{270E} edit",
        ],
      )
    }
  }
  @html.div(style=[
    "display:flex", "flex-direction:column", "gap:8px", "width:100%",
  ]) <| item_nodes
}
