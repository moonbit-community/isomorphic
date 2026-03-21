///|
fn Model::view_toast(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=["display: flex", "flex-direction: column", "gap: 12px"]) <| [
    @html.label(style=label_style) <| "Toast Notifications",
    @html.div(style=["display: flex", "flex-wrap: wrap", "gap: 8px"]) <| [
      @html.button(
        style=[
          "padding: 8px 16px",
          "background: \{success}",
          "color: white",
          "border: none",
          "border-radius: \{radius}",
          "cursor: pointer",
          "font-size: 14px",
        ],
        on_click=dispatch(
          ShowToast("Success", "Operation completed.", "success"),
        ),
      ) <| "Success",
      @html.button(
        style=[
          "padding: 8px 16px",
          "background: \{warning}",
          "color: white",
          "border: none",
          "border-radius: \{radius}",
          "cursor: pointer",
          "font-size: 14px",
        ],
        on_click=dispatch(ShowToast("Warning", "Please review.", "warning")),
      ) <| "Warning",
      @html.button(
        style=[
          "padding: 8px 16px",
          "background: \{danger}",
          "color: white",
          "border: none",
          "border-radius: \{radius}",
          "cursor: pointer",
          "font-size: 14px",
        ],
        on_click=dispatch(ShowToast("Error", "Something went wrong.", "error")),
      ) <| "Error",
      @html.button(
        style=btn_style,
        on_click=dispatch(ShowToast("Info", "Here is some info.", "info")),
      ) <| "Info",
    ],
    if self.toast.items.length() > 0 {
      let n = self.toast.items.length()
      @html.span(style=["font-size: 13px", "color: \{text_muted}"]) <| "\{n} toast(s) active"
    } else {
      @html.span(style=["font-size: 13px", "color: \{text_muted}"]) <| "Click a button to show a toast"
    },
  ]
}

///|
fn Model::view_toast_container(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  if self.toast.items.length() == 0 {
    return @html.nothing
  }
  @html.div(style=[
    "position: fixed", "top: 20px", "right: 20px", "z-index: 9999", "display: flex",
    "flex-direction: column", "gap: 10px",
  ]) <| ({
    let toast_els : Array[@rabbita.Html] = []
    for item in self.toast.items {
      let border_color = match item.kind {
        "success" => success
        "warning" => warning
        "error" => danger
        _ => primary
      }
      toast_els.push(
        @html.div(style=[
          "background: \{surface}",
          "border-radius: \{radius}",
          "box-shadow: 0 4px 20px rgba(0,0,0,0.12)",
          "border-left: 4px solid \{border_color}",
          "padding: 12px 16px",
          "min-width: 260px",
          "display: flex",
          "align-items: flex-start",
          "gap: 10px",
        ]) <| [
          @html.div(style=["flex: 1"]) <| [
            @html.p(style=[
              "margin: 0 0 2px",
              "font-weight: 600",
              "font-size: 14px",
              "color: \{text_primary}",
            ]) <| item.title,
            @html.p(style=[
              "margin: 0",
              "font-size: 13px",
              "color: \{text_secondary}",
            ]) <| item.message,
          ],
          @html.button(
            style=[
              "background: none",
              "border: none",
              "cursor: pointer",
              "color: \{text_muted}",
              "font-size: 16px",
              "padding: 0",
            ],
            on_click=dispatch(DismissToast(item.id)),
          ) <| "x",
        ],
      )
    }
    toast_els
  })
}

///|
fn Model::view_modal(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=["display: flex", "flex-direction: column", "gap: 12px"]) <| [
    @html.label(style=label_style) <| "Modal Dialog",
    @html.button(style=btn_style, on_click=dispatch(ModalOpen)) <| "Open Modal",
    if self.modal.confirmed {
      @html.span(style=[
        "font-size: 14px",
        "color: \{success}",
        "font-weight: 600",
      ]) <| "Action confirmed!"
    } else {
      @html.nothing
    },
  ]
}

///|
fn Model::view_modal_overlay(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=[
    "position: fixed", "inset: 0", "background: rgba(0,0,0,0.5)", "z-index: 8000",
    "display: flex", "align-items: center", "justify-content: center",
  ]) <| [
    @html.div(style=[
      "background: \{surface}",
      "border-radius: 12px",
      "box-shadow: 0 8px 40px rgba(0,0,0,0.2)",
      "padding: 28px 32px",
      "max-width: 400px",
      "width: 90%",
      "display: flex",
      "flex-direction: column",
      "gap: 16px",
    ]) <| [
      @html.h2(style=[
        "margin: 0",
        "font-size: 18px",
        "font-weight: 700",
        "color: \{text_primary}",
      ]) <| self.modal.title,
      @html.p(style=[
        "margin: 0",
        "font-size: 14px",
        "color: \{text_secondary}",
        "line-height: 1.6",
      ]) <| self.modal.message,
      @html.div(style=[
        "display: flex", "justify-content: flex-end", "gap: 10px",
      ]) <| [
        @html.button(style=btn_outline_style, on_click=dispatch(ModalClose)) <| "Cancel",
        @html.button(
          style=[
            "padding: 8px 16px",
            "background: \{danger}",
            "color: white",
            "border: none",
            "border-radius: \{radius}",
            "cursor: pointer",
            "font-size: 14px",
          ],
          on_click=dispatch(ModalConfirm),
        ) <| "Confirm",
      ],
    ],
  ]
}

///|
fn Model::view_command_palette(
  _self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=["display: flex", "flex-direction: column", "gap: 12px"]) <| [
    @html.label(style=label_style) <| "Command Palette",
    @html.button(
      style=btn_outline_style,
      on_click=dispatch(CommandPaletteToggle),
    ) <| "Open Command Palette",
    @html.span(style=["font-size: 12px", "color: \{text_muted}"]) <| "Click to open, type to search actions",
  ]
}

///|
fn Model::view_command_palette_overlay(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let cp = self.command_palette
  let filtered : Array[CommandAction] = []
  for action in cp.actions {
    let q = cp.query.to_lower()
    if q == "" ||
      action.label.to_lower().contains(q) ||
      action.category.to_lower().contains(q) {
      filtered.push(action)
    }
  }
  @html.div(style=[
    "position: fixed", "inset: 0", "background: rgba(0,0,0,0.5)", "z-index: 8500",
    "display: flex", "align-items: flex-start", "justify-content: center", "padding-top: 80px",
  ]) <| [
    @html.div(style=[
      "background: \{surface}",
      "border-radius: 12px",
      "box-shadow: 0 12px 48px rgba(0,0,0,0.2)",
      "width: 90%",
      "max-width: 520px",
      "overflow: hidden",
    ]) <| [
      @html.div(style=[
        "padding: 12px 16px",
        "border-bottom: 1px solid \{border}",
        "display: flex",
        "align-items: center",
        "gap: 8px",
      ]) <| [
        @html.span(style=["color: \{text_muted}", "font-size: 14px"]) <| "Search",
        @html.input(
          input_type=Text,
          value=cp.query,
          placeholder="Search actions...",
          on_input=s => dispatch(CommandPaletteSearch(s)),
          style=[
            "flex: 1",
            "border: none",
            "outline: none",
            "font-size: 15px",
            "color: \{text_primary}",
            "background: transparent",
          ],
        ) <| "",
        @html.button(
          style=[
            "background: none",
            "border: none",
            "cursor: pointer",
            "color: \{text_muted}",
            "font-size: 14px",
          ],
          on_click=dispatch(CommandPaletteToggle),
        ) <| "Close",
      ],
      @html.div(style=["max-height: 320px", "overflow-y: auto"]) <| ({
        let action_els : Array[@rabbita.Html] = []
        if filtered.length() == 0 {
          action_els.push(
            @html.div(style=[
              "padding: 20px",
              "text-align: center",
              "color: \{text_muted}",
              "font-size: 14px",
            ]) <| "No actions found",
          )
        } else {
          for i, action in filtered {
            let is_focused = i == cp.focus_index
            let item_bg = if is_focused { primary_light } else { surface }
            let item_fg = if is_focused { primary } else { text_primary }
            action_els.push(
              @html.button(
                style=[
                  "display: flex",
                  "align-items: center",
                  "justify-content: space-between",
                  "width: 100%",
                  "padding: 10px 16px",
                  "border: none",
                  "background: \{item_bg}",
                  "color: \{item_fg}",
                  "font-size: 14px",
                  "cursor: pointer",
                  "text-align: left",
                ],
                on_click=dispatch(CommandPaletteSelect(action.id)),
              ) <| action.label,
            )
          }
        }
        action_els
      }),
    ],
  ]
}
