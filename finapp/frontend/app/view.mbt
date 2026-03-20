///|
/// Main view — navigation bar + routed page content.
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(
    style=[
      "max-width: 960px", "margin: 0 auto", "padding: 16px",
      "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    ],
    [
      self.view_nav(dispatch),
      self.view_error(dispatch),
      match self.page {
        Dashboard => self.view_dashboard(dispatch)
        Transactions => self.view_transactions(dispatch)
        Accounts => self.view_accounts(dispatch)
        Budgets => self.view_budgets(dispatch)
      },
    ],
  )
}

///|
fn Model::view_nav(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let tabs : Array[(Page, String)] = [
    (Dashboard, "Dashboard"),
    (Transactions, "Transactions"),
    (Accounts, "Accounts"),
    (Budgets, "Budgets"),
  ]
  let items : Array[@rabbita.Html] = []
  for tab in tabs {
    let (page, label) = tab
    let active = match (self.page, page) {
      (Dashboard, Dashboard) => true
      (Transactions, Transactions) => true
      (Accounts, Accounts) => true
      (Budgets, Budgets) => true
      _ => false
    }
    items.push(
      @html.button(
        style=[
          "padding: 10px 20px", "border: none", "cursor: pointer",
          "font-size: 0.9em", "font-weight: 600", "border-radius: 6px 6px 0 0",
          "transition: background 0.2s",
          if active {
            "background: #fff; color: #1a73e8"
          } else {
            "background: transparent; color: #666"
          },
        ],
        on_click=dispatch(GoTo(page)),
        label,
      ),
    )
  }
  @html.div(
    style=[
      "display: flex", "gap: 4px", "background: #e8eaed",
      "padding: 4px 4px 0", "border-radius: 8px 8px 0 0",
      "margin-bottom: 0",
    ],
    items,
  )
}

///|
fn Model::view_error(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  if self.error.length() == 0 {
    return @html.text("")
  }
  @html.div(
    style=[
      "background: #fce4ec", "color: #c62828", "padding: 10px 16px",
      "border-radius: 0 0 6px 6px", "margin-bottom: 12px",
      "display: flex", "justify-content: space-between", "align-items: center",
    ],
    [
      @html.span(self.error),
      @html.button(
        style=[
          "background: none", "border: none", "color: #c62828",
          "cursor: pointer", "font-size: 1.1em",
        ],
        on_click=dispatch(ClearError),
        "\u{2715}",
      ),
    ],
  )
}

///|
fn find_category(
  categories : Array[@shared.Category],
  id : Int,
) -> @shared.Category? {
  for c in categories {
    if c.id == id {
      return Some(c)
    }
  }
  None
}

///|
fn find_account(
  accounts : Array[@shared.Account],
  id : Int,
) -> @shared.Account? {
  for a in accounts {
    if a.id == id {
      return Some(a)
    }
  }
  None
}
