///|
/// Render the dashboard page showing account balances, monthly summary,
/// budget progress bars, spending breakdown by category, and recent transactions.
/// Shows a loading/empty state when dashboard data is not yet available.
fn Model::view_dashboard(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let data = match self.dashboard {
    Some(d) => d
    None =>
      return @html.div(style=[
          "padding: 40px", "text-align: center", "color: #999",
        ]) <| (if self.loading { "Loading..." } else { "No data yet" })
  }
  @html.div(style=[
    "background: #fff", "border-radius: 0 0 8px 8px", "padding: 20px", "box-shadow: 0 1px 3px rgba(0,0,0,0.1)",
  ]) <| [
    // ── Account balances ────────────────────────────────────────
    @html.h2(style=["font-size: 1.1em", "color: #333", "margin-bottom: 12px"]) <| "Accounts",
    self.view_balance_cards(data),
    // ── Monthly summary ─────────────────────────────────────────
    @html.h2(style=["font-size: 1.1em", "color: #333", "margin: 20px 0 12px"]) <| "This Month (\{self.current_month})",
    self.view_month_summary(data),
    // ── Budget progress ─────────────────────────────────────────
    self.view_budget_progress(data),
    // ── Spending by category ────────────────────────────────────
    self.view_spending_breakdown(data),
    // ── Recent transactions ─────────────────────────────────────
    self.view_recent_transactions(data, dispatch),
  ]
}

///|
/// Render a row of account balance cards, each color-coded green for positive
/// and red for negative balances.
fn Model::view_balance_cards(
  self : Model,
  data : @shared.DashboardData,
) -> @rabbita.Html {
  let _ = self
  if data.account_balances.is_empty() {
    return @html.p(style=[
        "color: #999", "font-style: italic", "margin-bottom: 12px",
      ]) <| "No accounts yet. Create one in the Accounts tab."
  }
  let cards : Array[@rabbita.Html] = data.account_balances.map(fn(ab) {
    let color = if ab.balance >= 0 { "#2e7d32" } else { "#c62828" }
    @html.div(style=[
      "flex: 1",
      "min-width: 150px",
      "background: #f8f9fa",
      "padding: 14px",
      "border-radius: 8px",
      "border-left: 4px solid \{color}",
    ]) <| [
      @html.div(style=["font-size: 0.8em", "color: #666", "margin-bottom: 4px"]) <| ab.account.name,
      @html.div(style=[
        "font-size: 1.3em",
        "font-weight: 700",
        "color: \{color}",
      ]) <| @shared.format_amount(ab.balance),
      @html.div(style=["font-size: 0.7em", "color: #999", "margin-top: 2px"]) <| ab.account.account_type.to_label(),
    ]
  })
  @html.div(style=["display: flex", "gap: 12px", "flex-wrap: wrap"]) <| cards
}

///|
/// Render the monthly summary showing income, expenses, and net amount
/// in three side-by-side cards.
fn Model::view_month_summary(
  self : Model,
  data : @shared.DashboardData,
) -> @rabbita.Html {
  let _ = self
  let s = data.month_summary
  let net = s.income - s.expenses
  let net_color = if net >= 0 { "#2e7d32" } else { "#c62828" }
  @html.div(style=[
    "display: flex", "gap: 12px", "flex-wrap: wrap", "margin-bottom: 16px",
  ]) <| [
    @html.div(style=[
      "flex: 1", "min-width: 120px", "text-align: center", "padding: 12px", "background: #e8f5e9",
      "border-radius: 8px",
    ]) <| [
      @html.div(style=["font-size: 0.75em", "color: #2e7d32"]) <| "INCOME",
      @html.div(style=["font-size: 1.2em", "font-weight: 700", "color: #2e7d32"]) <| @shared.format_amount(
        s.income,
      ),
    ],
    @html.div(style=[
      "flex: 1", "min-width: 120px", "text-align: center", "padding: 12px", "background: #fce4ec",
      "border-radius: 8px",
    ]) <| [
      @html.div(style=["font-size: 0.75em", "color: #c62828"]) <| "EXPENSES",
      @html.div(style=["font-size: 1.2em", "font-weight: 700", "color: #c62828"]) <| @shared.format_amount(
        s.expenses,
      ),
    ],
    @html.div(style=[
      "flex: 1", "min-width: 120px", "text-align: center", "padding: 12px", "background: #f5f5f5",
      "border-radius: 8px",
    ]) <| [
      @html.div(style=["font-size: 0.75em", "color: #666"]) <| "NET",
      @html.div(style=[
        "font-size: 1.2em",
        "font-weight: 700",
        "color: \{net_color}",
      ]) <| @shared.format_amount(net),
    ],
  ]
}

///|
/// Render the budget progress section with a colored progress bar per budget.
/// Hidden when no budgets are set. Bars turn red when spending exceeds the limit.
fn Model::view_budget_progress(
  self : Model,
  data : @shared.DashboardData,
) -> @rabbita.Html {
  let _ = self
  if data.budget_statuses.is_empty() {
    return @html.text() <| ""
  }
  let items : Array[@rabbita.Html] = data.budget_statuses.map(fn(bs) {
    let (pct, over) = @shared.budget_progress(bs.spent, bs.budget.amount_limit)
    let bar_pct = if pct > 100 { 100 } else { pct }
    let bar_color = if over { "#c62828" } else { bs.category_color }
    @html.div(style=["margin-bottom: 8px"]) <| [
      @html.div(style=[
        "display: flex", "justify-content: space-between", "font-size: 0.8em", "margin-bottom: 2px",
      ]) <| [
        @html.span() <| "\{bs.category_icon} \{bs.category_name}",
        @html.span(style=[
          if over {
            "color: #c62828; font-weight: 700"
          } else {
            "color: #666"
          },
        ]) <| "\{@shared.format_amount(bs.spent)} / \{@shared.format_amount(bs.budget.amount_limit)}",
      ],
      @html.div(style=[
        "height: 8px", "background: #e0e0e0", "border-radius: 4px", "overflow: hidden",
      ]) <| [
        @html.div(style=[
          "height: 100%",
          "width: \{bar_pct}%",
          "background: \{bar_color}",
          "border-radius: 4px",
          "transition: width 0.3s",
        ]) <| "",
      ],
    ]
  })
  let children : Array[@rabbita.Html] = [
    @html.h2(style=["font-size: 1.1em", "color: #333", "margin-bottom: 12px"]) <| "Budget Progress",
  ]
  for item in items {
    children.push(item)
  }
  @html.div(style=["margin-bottom: 16px"]) <| children
}

///|
/// Render the spending-by-category horizontal bar chart. Each bar is scaled
/// relative to the highest-spending category. Hidden when there is no spending data.
fn Model::view_spending_breakdown(
  self : Model,
  data : @shared.DashboardData,
) -> @rabbita.Html {
  let _ = self
  if data.category_totals.is_empty() {
    return @html.text() <| ""
  }
  let max_amount = data.category_totals.fold(init=0, fn(max, ct) {
    let (_, _, amount) = ct
    if amount > max {
      amount
    } else {
      max
    }
  })
  let bars : Array[@rabbita.Html] = data.category_totals.map(fn(ct) {
    let (name, color, amount) = ct
    let pct = if max_amount > 0 { amount * 100 / max_amount } else { 0 }
    @html.div(style=[
      "display: flex", "align-items: center", "gap: 8px", "margin-bottom: 6px",
    ]) <| [
      @html.div(style=[
        "width: 90px", "font-size: 0.8em", "color: #555", "text-align: right",
      ]) <| name,
      @html.div(style=[
        "flex: 1", "height: 12px", "background: #f0f0f0", "border-radius: 6px", "overflow: hidden",
      ]) <| [
        @html.div(style=[
          "height: 100%",
          "width: \{pct}%",
          "background: \{color}",
          "border-radius: 6px",
        ]) <| "",
      ],
      @html.div(style=[
        "width: 70px", "font-size: 0.8em", "color: #333", "font-weight: 600",
      ]) <| @shared.format_amount(amount),
    ]
  })
  let children2 : Array[@rabbita.Html] = [
    @html.h2(style=["font-size: 1.1em", "color: #333", "margin-bottom: 12px"]) <| "Spending by Category",
  ]
  for bar in bars {
    children2.push(bar)
  }
  @html.div(style=["margin-bottom: 16px"]) <| children2
}

///|
/// Render the recent transactions section on the dashboard, showing up to 10
/// of the most recent transactions with category icons and signed amounts.
fn Model::view_recent_transactions(
  self : Model,
  data : @shared.DashboardData,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  if data.recent_transactions.is_empty() {
    return @html.div(style=["margin-top: 16px"]) <| [
        @html.h2(style=["font-size: 1.1em", "color: #333", "margin-bottom: 8px"]) <| "Recent Transactions",
        @html.p(style=["color: #999", "font-style: italic"]) <| "No transactions yet.",
      ]
  }
  let rows : Array[@rabbita.Html] = data.recent_transactions.map(fn(t) {
    let cat = find_category(self.categories, t.category_id)
    let (icon, color) = match cat {
      Some(c) => (c.icon, c.color)
      None => ("", "#888")
    }
    let amount_color = match t.txn_type {
      Income => "#2e7d32"
      Expense => "#c62828"
    }
    let sign = match t.txn_type {
      Income => "+"
      Expense => "-"
    }
    @html.div(style=[
      "display: flex", "align-items: center", "padding: 8px 0", "border-bottom: 1px solid #f0f0f0",
      "gap: 10px",
    ]) <| [
      @html.div(style=[
        "width: 32px",
        "height: 32px",
        "border-radius: 50%",
        "background: \{color}20",
        "display: flex",
        "align-items: center",
        "justify-content: center",
        "font-size: 0.9em",
      ]) <| icon,
      @html.div(style=["flex: 1"]) <| [
        @html.div(style=["font-size: 0.85em", "font-weight: 500"]) <| t.description,
        @html.div(style=["font-size: 0.7em", "color: #999"]) <| t.date,
      ],
      @html.div(style=[
        "font-weight: 700",
        "font-size: 0.9em",
        "color: \{amount_color}",
      ]) <| "\{sign}\{@shared.format_amount(t.amount)}",
    ]
  })
  let _ = dispatch
  let children3 : Array[@rabbita.Html] = [
    @html.h2(style=["font-size: 1.1em", "color: #333", "margin-bottom: 8px"]) <| "Recent Transactions",
  ]
  for row in rows {
    children3.push(row)
  }
  @html.div(style=["margin-top: 16px"]) <| children3
}
