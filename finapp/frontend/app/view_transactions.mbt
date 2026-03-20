///|
fn Model::view_transactions(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(
    style=[
      "background: #fff", "border-radius: 0 0 8px 8px", "padding: 20px", "box-shadow: 0 1px 3px rgba(0,0,0,0.1)",
    ],
    [
      // Header + add button
      @html.div(
        style=[
          "display: flex", "justify-content: space-between", "align-items: center",
          "margin-bottom: 16px",
        ],
        [
          @html.h2(style=["font-size: 1.1em", "color: #333"], "Transactions"),
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
            if self.show_form {
              "Cancel"
            } else {
              "+ Add Transaction"
            },
          ),
        ],
      ),
      // Form (conditional)
      if self.show_form {
        self.view_transaction_form(dispatch)
      } else {
        @html.text("")
      },
      // Filters
      self.view_transaction_filters(dispatch),
      // List
      self.view_transaction_list(dispatch),
    ],
  )
}

///|
fn Model::view_transaction_form(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let type_options : Array[@rabbita.Html] = [
    @html.option(value="expense", "Expense"),
    @html.option(value="income", "Income"),
  ]
  let account_options : Array[@rabbita.Html] = [
    @html.option(value="0", "Select account..."),
  ]
  for a in self.accounts {
    account_options.push(@html.option(value=a.id.to_string(), a.name))
  }
  let category_options : Array[@rabbita.Html] = [
    @html.option(value="0", "Select category..."),
  ]
  for c in self.categories {
    let show = match (self.form_type, c.cat_type) {
      (Income, Income) => true
      (Expense, Expense) => true
      _ => false
    }
    if show {
      category_options.push(
        @html.option(value=c.id.to_string(), "\{c.icon} \{c.name}"),
      )
    }
  }
  @html.form(
    on_submit=dispatch(SubmitTransaction),
    style=[
      "background: #f8f9fa", "padding: 16px", "border-radius: 8px", "margin-bottom: 16px",
      "display: flex", "flex-direction: column", "gap: 10px",
    ],
    [
      // Type selector
      @html.div(style=["display: flex", "gap: 8px"], [
        @html.select(
          on_change=fn(v) { dispatch(SetFormType(v)) },
          style=[
            "flex: 1", "padding: 8px", "border: 1px solid #ddd", "border-radius: 4px",
          ],
          type_options,
        ),
        @html.select(
          on_change=fn(v) { dispatch(SetFormAccountId(v)) },
          style=[
            "flex: 1", "padding: 8px", "border: 1px solid #ddd", "border-radius: 4px",
          ],
          account_options,
        ),
      ]),
      // Category + amount
      @html.div(style=["display: flex", "gap: 8px"], [
        @html.select(
          on_change=fn(v) { dispatch(SetFormCategoryId(v)) },
          style=[
            "flex: 1", "padding: 8px", "border: 1px solid #ddd", "border-radius: 4px",
          ],
          category_options,
        ),
        @html.input(
          input_type=Text,
          placeholder="Amount (e.g. 42.50)",
          value=self.form_amount,
          on_input=fn(v) { dispatch(SetFormAmount(v)) },
          style=[
            "flex: 1", "padding: 8px", "border: 1px solid #ddd", "border-radius: 4px",
          ],
          "",
        ),
      ]),
      // Description + date
      @html.div(style=["display: flex", "gap: 8px"], [
        @html.input(
          input_type=Text,
          placeholder="Description",
          value=self.form_desc,
          on_input=fn(v) { dispatch(SetFormDesc(v)) },
          style=[
            "flex: 2", "padding: 8px", "border: 1px solid #ddd", "border-radius: 4px",
          ],
          "",
        ),
        @html.input(
          input_type=Date,
          value=self.form_date,
          on_input=fn(v) { dispatch(SetFormDate(v)) },
          style=[
            "flex: 1", "padding: 8px", "border: 1px solid #ddd", "border-radius: 4px",
          ],
          "",
        ),
      ]),
      @html.button(
        type_="submit",
        style=[
          "padding: 10px", "background: #1a73e8", "color: #fff", "border: none",
          "border-radius: 6px", "cursor: pointer", "font-weight: 600",
        ],
        "Save Transaction",
      ),
    ],
  )
}

///|
fn Model::view_transaction_filters(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let account_options : Array[@rabbita.Html] = [
    @html.option(value="0", "All Accounts"),
  ]
  for a in self.accounts {
    account_options.push(@html.option(value=a.id.to_string(), a.name))
  }
  let type_options : Array[@rabbita.Html] = [
    @html.option(value="all", "All Types"),
    @html.option(value="income", "Income"),
    @html.option(value="expense", "Expense"),
  ]
  @html.div(
    style=[
      "display: flex", "gap: 8px", "margin-bottom: 12px", "padding-bottom: 12px",
      "border-bottom: 1px solid #eee",
    ],
    [
      @html.select(
        on_change=fn(v) { dispatch(SetFilterAccount(v)) },
        style=[
          "padding: 6px 10px", "border: 1px solid #ddd", "border-radius: 4px", "font-size: 0.85em",
        ],
        account_options,
      ),
      @html.select(
        on_change=fn(v) { dispatch(SetFilterType(v)) },
        style=[
          "padding: 6px 10px", "border: 1px solid #ddd", "border-radius: 4px", "font-size: 0.85em",
        ],
        type_options,
      ),
    ],
  )
}

///|
fn Model::view_transaction_list(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let filtered = self.transactions.filter(fn(t) {
    let acct_ok = self.filter_account == 0 ||
      t.account_id == self.filter_account
    let type_ok = self.filter_type == "all" ||
      self.filter_type == "" ||
      t.txn_type.to_db_string() == self.filter_type
    acct_ok && type_ok
  })
  if filtered.is_empty() {
    return @html.p(
      style=[
        "text-align: center", "color: #999", "padding: 20px", "font-style: italic",
      ],
      "No transactions found.",
    )
  }
  let rows : Array[@rabbita.Html] = filtered.map(fn(t) {
    let cat = find_category(self.categories, t.category_id)
    let acct = find_account(self.accounts, t.account_id)
    let (icon, color) = match cat {
      Some(c) => (c.icon, c.color)
      None => ("", "#888")
    }
    let acct_name = match acct {
      Some(a) => a.name
      None => "?"
    }
    let amount_color = match t.txn_type {
      Income => "#2e7d32"
      Expense => "#c62828"
    }
    let sign = match t.txn_type {
      Income => "+"
      Expense => "-"
    }
    @html.div(
      style=[
        "display: flex", "align-items: center", "padding: 10px 0", "border-bottom: 1px solid #f0f0f0",
        "gap: 10px",
      ],
      [
        // Category icon
        @html.div(
          style=[
            "width: 36px",
            "height: 36px",
            "border-radius: 50%",
            "background: \{color}20",
            "display: flex",
            "align-items: center",
            "justify-content: center",
          ],
          icon,
        ),
        // Description + meta
        @html.div(style=["flex: 1"], [
          @html.div(
            style=["font-size: 0.9em", "font-weight: 500"],
            t.description,
          ),
          @html.div(
            style=["font-size: 0.75em", "color: #999"],
            "\{t.date} \u{00B7} \{acct_name}",
          ),
        ]),
        // Amount
        @html.div(
          style=[
            "font-weight: 700",
            "font-size: 0.95em",
            "color: \{amount_color}",
            "min-width: 80px",
            "text-align: right",
          ],
          "\{sign}\{@shared.format_amount(t.amount)}",
        ),
        // Delete
        @html.button(
          style=[
            "padding: 4px 8px", "background: #ffebee", "color: #c62828", "border: none",
            "border-radius: 4px", "cursor: pointer", "font-size: 0.75em",
          ],
          on_click=dispatch(DeleteTransaction(t.id)),
          "\u{2715}",
        ),
      ],
    )
  })
  @html.div(rows)
}
