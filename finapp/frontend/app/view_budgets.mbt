///|
fn Model::view_budgets(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=[
    "background: #fff", "border-radius: 0 0 8px 8px", "padding: 20px", "box-shadow: 0 1px 3px rgba(0,0,0,0.1)",
  ]) <| [
    // Header
    @html.div(style=[
      "display: flex", "justify-content: space-between", "align-items: center", "margin-bottom: 16px",
    ]) <| [
      @html.h2(style=["font-size: 1.1em", "color: #333"]) <| "Budgets (\{self.current_month})",
      @html.button(
        style=[
          "padding: 8px 16px",
          "border: none",
          "border-radius: 6px",
          "cursor: pointer",
          "font-weight: 600",
          "font-size: 0.85em",
          if self.show_form {
            "background: #e0e0e0; color: #666"
          } else {
            "background: #1a73e8; color: #fff"
          },
        ],
        on_click=dispatch(ToggleForm),
      ) <| (if self.show_form { "Cancel" } else { "+ Set Budget" }),
    ],
    // Form
    if self.show_form {
      self.view_budget_form(dispatch)
    } else {
      @html.text() <| ""
    },
    // Budget list
    self.view_budget_list(dispatch),
  ]
}

///|
fn Model::view_budget_form(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let expense_cats : Array[@rabbita.Html] = [
    @html.option(value="0") <| "Select expense category...",
  ]
  for c in self.categories {
    if c.cat_type == Expense {
      expense_cats.push(
        @html.option(value=c.id.to_string()) <| "\{c.icon} \{c.name}",
      )
    }
  }
  @html.form(on_submit=dispatch(SubmitBudget), style=[
    "background: #f8f9fa", "padding: 16px", "border-radius: 8px", "margin-bottom: 16px",
    "display: flex", "gap: 8px", "align-items: flex-end",
  ]) <| [
    @html.div(style=["flex: 2"]) <| [
      @html.div(style=["font-size: 0.75em", "color: #666", "margin-bottom: 4px"]) <| "Category",
      @html.select(on_change=fn(v) { dispatch(SetBudgetCatId(v)) }, style=[
        "width: 100%", "padding: 8px", "border: 1px solid #ddd", "border-radius: 4px",
      ]) <| expense_cats,
    ],
    @html.div(style=["flex: 1"]) <| [
      @html.div(style=["font-size: 0.75em", "color: #666", "margin-bottom: 4px"]) <| "Monthly Limit",
      @html.input(
        input_type=Text,
        placeholder="e.g. 500.00",
        value=self.budget_amount,
        on_input=fn(v) { dispatch(SetBudgetAmount(v)) },
        style=[
          "width: 100%", "padding: 8px", "border: 1px solid #ddd", "border-radius: 4px",
        ],
      ) <| "",
    ],
    @html.button(type_="submit", style=[
      "padding: 8px 20px", "background: #1a73e8", "color: #fff", "border: none",
      "border-radius: 6px", "cursor: pointer", "font-weight: 600", "height: 38px",
    ]) <| "Set",
  ]
}

///|
fn Model::view_budget_list(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  if self.budgets.is_empty() {
    return @html.p(style=[
        "text-align: center", "color: #999", "padding: 20px", "font-style: italic",
      ]) <| "No budgets set for this month. Set one to start tracking!"
  }
  let items : Array[@rabbita.Html] = self.budgets.map(fn(b) {
    let cat = find_category(self.categories, b.category_id)
    let (name, icon, color) = match cat {
      Some(c) => (c.name, c.icon, c.color)
      None => ("Unknown", "", "#888")
    }
    let spent = @shared.spent_in_category(
      self.transactions,
      b.category_id,
      self.current_month,
    )
    let (pct, over) = @shared.budget_progress(spent, b.amount_limit)
    let bar_pct = if pct > 100 { 100 } else { pct }
    let bar_color = if over { "#c62828" } else { color }
    let remaining = b.amount_limit - spent
    @html.div(style=[
      "padding: 14px", "background: #f8f9fa", "border-radius: 8px", "margin-bottom: 8px",
    ]) <| [
      @html.div(style=[
        "display: flex", "justify-content: space-between", "align-items: center",
        "margin-bottom: 8px",
      ]) <| [
        @html.div(style=["font-weight: 600", "font-size: 0.95em"]) <| "\{icon} \{name}",
        @html.div(style=["display: flex", "gap: 8px", "align-items: center"]) <| [
          @html.div(style=[
            "font-size: 0.85em",
            if over {
              "color: #c62828; font-weight: 700"
            } else {
              "color: #666"
            },
          ]) <| "\{@shared.format_amount(spent)} / \{@shared.format_amount(b.amount_limit)}",
          @html.button(
            style=[
              "padding: 3px 8px", "background: #ffebee", "color: #c62828", "border: none",
              "border-radius: 4px", "cursor: pointer", "font-size: 0.7em",
            ],
            on_click=dispatch(DeleteBudget(b.id)),
          ) <| "\u{2715}",
        ],
      ],
      // Progress bar
      @html.div(style=[
        "height: 10px", "background: #e0e0e0", "border-radius: 5px", "overflow: hidden",
        "margin-bottom: 6px",
      ]) <| [
        @html.div(style=[
          "height: 100%",
          "width: \{bar_pct}%",
          "background: \{bar_color}",
          "border-radius: 5px",
          "transition: width 0.3s",
        ]) <| "",
      ],
      // Status text
      @html.div(style=[
        "font-size: 0.75em",
        if over {
          "color: #c62828"
        } else {
          "color: #666"
        },
      ]) <| (if over {
        "Over budget by \{@shared.format_amount(-remaining)}"
      } else {
        "\{@shared.format_amount(remaining)} remaining (\{pct}% used)"
      }),
    ]
  })
  @html.div() <| items
}
