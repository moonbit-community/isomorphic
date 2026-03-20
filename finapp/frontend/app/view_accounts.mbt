///|
fn Model::view_accounts(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(
    style=[
      "background: #fff", "border-radius: 0 0 8px 8px", "padding: 20px",
      "box-shadow: 0 1px 3px rgba(0,0,0,0.1)",
    ],
    [
      // Header
      @html.div(
        style=[
          "display: flex", "justify-content: space-between",
          "align-items: center", "margin-bottom: 16px",
        ],
        [
          @html.h2(style=["font-size: 1.1em", "color: #333"], "Accounts"),
          @html.button(
            style=[
              "padding: 8px 16px", "border: none", "border-radius: 6px",
              "cursor: pointer", "font-weight: 600", "font-size: 0.85em",
              if self.show_form {
                "background: #e0e0e0; color: #666"
              } else {
                "background: #1a73e8; color: #fff"
              },
            ],
            on_click=dispatch(ToggleForm),
            if self.show_form { "Cancel" } else { "+ Add Account" },
          ),
        ],
      ),
      // Form
      if self.show_form {
        self.view_account_form(dispatch)
      } else {
        @html.text("")
      },
      // Account list
      self.view_account_list(dispatch),
    ],
  )
}

///|
fn Model::view_account_form(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.form(
    on_submit=dispatch(SubmitAccount),
    style=[
      "background: #f8f9fa", "padding: 16px", "border-radius: 8px",
      "margin-bottom: 16px", "display: flex", "gap: 8px",
      "align-items: flex-end",
    ],
    [
      @html.div(style=["flex: 2"], [
        @html.div(
          style=["font-size: 0.75em", "color: #666", "margin-bottom: 4px"],
          "Account Name",
        ),
        @html.input(
          input_type=Text,
          placeholder="e.g. Chase Checking",
          value=self.acct_name,
          on_input=fn(v) { dispatch(SetAcctName(v)) },
          style=[
            "width: 100%", "padding: 8px", "border: 1px solid #ddd",
            "border-radius: 4px",
          ],
          "",
        ),
      ]),
      @html.div(style=["flex: 1"], [
        @html.div(
          style=["font-size: 0.75em", "color: #666", "margin-bottom: 4px"],
          "Type",
        ),
        @html.select(
          on_change=fn(v) { dispatch(SetAcctType(v)) },
          style=[
            "width: 100%", "padding: 8px", "border: 1px solid #ddd",
            "border-radius: 4px",
          ],
          [
            @html.option(value="checking", "Checking"),
            @html.option(value="savings", "Savings"),
            @html.option(value="credit_card", "Credit Card"),
          ],
        ),
      ]),
      @html.button(
        type_="submit",
        style=[
          "padding: 8px 20px", "background: #1a73e8", "color: #fff",
          "border: none", "border-radius: 6px", "cursor: pointer",
          "font-weight: 600", "height: 38px",
        ],
        "Create",
      ),
    ],
  )
}

///|
fn Model::view_account_list(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  if self.accounts.is_empty() {
    return @html.p(
      style=[
        "text-align: center", "color: #999", "padding: 20px",
        "font-style: italic",
      ],
      "No accounts yet. Create one to get started!",
    )
  }
  let cards : Array[@rabbita.Html] = self.accounts.map(fn(a) {
    let balance = @shared.compute_balance(self.transactions, a.id)
    let color = if balance >= 0 { "#2e7d32" } else { "#c62828" }
    let type_icon = match a.account_type {
      Checking => "\u{1F3E6}"
      Savings => "\u{1F4B0}"
      CreditCard => "\u{1F4B3}"
    }
    // Count transactions for this account
    let mut txn_count = 0
    for t in self.transactions {
      if t.account_id == a.id {
        txn_count = txn_count + 1
      }
    }
    @html.div(
      style=[
        "display: flex", "align-items: center", "padding: 14px",
        "background: #f8f9fa", "border-radius: 8px", "gap: 12px",
        "margin-bottom: 8px",
      ],
      [
        @html.div(style=["font-size: 1.5em"], type_icon),
        @html.div(style=["flex: 1"], [
          @html.div(
            style=["font-weight: 600", "font-size: 0.95em"],
            a.name,
          ),
          @html.div(
            style=["font-size: 0.75em", "color: #999"],
            "\{a.account_type.to_label()} \u{00B7} \{txn_count} transactions",
          ),
        ]),
        @html.div(
          style=[
            "font-size: 1.2em", "font-weight: 700", "color: \{color}",
            "min-width: 100px", "text-align: right",
          ],
          @shared.format_amount(balance),
        ),
        @html.button(
          style=[
            "padding: 6px 10px", "background: #ffebee", "color: #c62828",
            "border: none", "border-radius: 4px", "cursor: pointer",
            "font-size: 0.8em",
          ],
          on_click=dispatch(DeleteAccount(a.id)),
          "Delete",
        ),
      ],
    )
  })
  @html.div(cards)
}
