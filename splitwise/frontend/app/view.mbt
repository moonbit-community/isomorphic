///|
/// Render the entire UI: header, total banner, people card, expense form, expense list, and settlements.
pub fn Model::view(self : Model, dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Html {
  @html.div(
    style=[
      "max-width: 520px", "margin: 0 auto", "padding: 24px 16px",
      "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    ],
    {
      let sections : Array[@rabbita.Html] = []
      // Header
      sections.push(
        @html.div(
          style=["text-align: center", "margin-bottom: 24px", "padding-top: 12px"],
          [
            @html.h1(
              style=[
                "color: white", "font-size: 26px", "font-weight: 800",
                "margin-bottom: 4px", "letter-spacing: -0.5px",
              ],
              "Splitwise",
            ),
            @html.p(
              style=["color: rgba(255,255,255,0.75)", "font-size: 13px"],
              "Split expenses with friends",
            ),
          ],
        ),
      )
      // Total banner (only when there are expenses)
      if self.expenses.length() > 0 {
        let total = compute_total(self.expenses)
        sections.push(
          @html.div(
            style=[
              "background: rgba(255,255,255,0.15)", "border-radius: 12px",
              "padding: 16px 20px", "margin-bottom: 16px", "text-align: center",
              "backdrop-filter: blur(10px)",
            ],
            [
              @html.div(
                style=["color: rgba(255,255,255,0.7)", "font-size: 12px", "margin-bottom: 4px", "text-transform: uppercase", "letter-spacing: 1px"],
                "Total Expenses",
              ),
              @html.div(
                style=["color: white", "font-size: 32px", "font-weight: 800"],
                "$\{@shared.format_amount(total)}",
              ),
            ],
          ),
        )
      }
      // People card
      sections.push(self.view_people_card(dispatch))
      // Add expense card (only when >= 2 people)
      if self.people.length() >= 2 {
        sections.push(self.view_expense_form(dispatch))
      }
      // Expenses list
      if self.expenses.length() > 0 {
        sections.push(self.view_expenses_list(dispatch))
      }
      // Settlements
      if self.settlements.length() > 0 {
        sections.push(self.view_settlements())
      } else if self.expenses.length() > 0 {
        sections.push(
          view_card(
            "Settlements",
            [
              @html.p(
                style=["text-align: center", "color: #43a047", "padding: 20px 0", "font-weight: 600", "font-size: 15px"],
                "All settled up!",
              ),
            ],
          ),
        )
      }
      sections
    },
  )
}

///|
/// Render the people card with add-person form and people list.
fn Model::view_people_card(self : Model, dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Html {
  view_card(
    "People",
    [
      @html.form(
        on_submit=dispatch(AddPerson),
        style=["display: flex", "gap: 8px", "margin-bottom: 12px"],
        [
          @html.input(
            input_type=Text,
            placeholder="Enter a name...",
            value=self.person_input,
            on_input=fn(v) { dispatch(PersonInputChanged(v)) },
            style=[
              "flex: 1", "padding: 10px 14px", "border: 2px solid #eee", "border-radius: 10px",
              "font-size: 14px", "outline: none",
            ],
            "",
          ),
          @html.button(
            type_="submit",
            style=[
              "padding: 10px 20px", "background: #667eea", "color: white", "border: none",
              "border-radius: 10px", "cursor: pointer", "font-size: 14px", "font-weight: 600",
            ],
            "Add",
          ),
        ],
      ),
      if self.people.length() > 0 {
        @html.div(
          style=["display: flex", "flex-wrap: wrap", "gap: 8px"],
          self.people.map(fn(p) {
            let initial = p.name.iter().collect()[0].to_string().to_upper()
            let color = person_color(p.id)
            @html.div(
              style=[
                "display: inline-flex", "align-items: center", "gap: 8px",
                "padding: 6px 14px 6px 6px", "background: #f8f8ff",
                "border-radius: 24px", "font-size: 13px", "color: #333",
              ],
              [
                @html.div(
                  style=[
                    "width: 26px", "height: 26px", "border-radius: 50%",
                    "background: \{color}", "color: white", "font-size: 12px",
                    "font-weight: 700", "display: flex", "align-items: center",
                    "justify-content: center",
                  ],
                  initial,
                ),
                @html.span(style=["font-weight: 500"], p.name),
              ],
            )
          }),
        )
      } else {
        @html.p(
          style=["color: #aaa", "font-size: 13px", "text-align: center", "padding: 12px 0"],
          "Add at least 2 people to get started",
        )
      },
    ],
  )
}

///|
/// Render the add expense form card.
fn Model::view_expense_form(self : Model, dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Html {
  view_card(
    "Add Expense",
    [
      @html.form(
        on_submit=dispatch(AddExpense),
        style=["display: flex", "flex-direction: column", "gap: 10px"],
        [
          @html.input(
            input_type=Text,
            placeholder="What was it for?",
            value=self.desc_input,
            on_input=fn(v) { dispatch(DescInputChanged(v)) },
            style=[
              "padding: 10px 14px", "border: 2px solid #eee", "border-radius: 10px",
              "font-size: 14px", "outline: none",
            ],
            "",
          ),
          @html.div(
            style=["display: flex", "gap: 10px"],
            [
              @html.input(
                input_type=Text,
                placeholder="0.00",
                value=self.amount_input,
                on_input=fn(v) { dispatch(AmountInputChanged(v)) },
                style=[
                  "flex: 1", "padding: 10px 14px", "border: 2px solid #eee", "border-radius: 10px",
                  "font-size: 14px", "outline: none",
                ],
                "",
              ),
              @html.select(
                on_change=fn(v) { dispatch(PaidByChanged(parse_int(v))) },
                style=[
                  "flex: 1", "padding: 10px 14px", "border: 2px solid #eee", "border-radius: 10px",
                  "font-size: 14px", "outline: none", "background: white", "color: #333",
                ],
                self.people.map(fn(p) {
                  @html.option(
                    value=p.id.to_string(),
                    selected=p.id == self.paid_by_input || (self.paid_by_input == 0 && p.id == self.people[0].id),
                    "\{p.name} paid",
                  )
                }),
              ),
            ],
          ),
          @html.div(
            style=["font-size: 12px", "color: #999", "padding: 0 2px"],
            "Split equally among all \{self.people.length()} people",
          ),
          @html.button(
            type_="submit",
            style=[
              "padding: 12px", "background: linear-gradient(135deg, #667eea, #764ba2)", "color: white",
              "border: none", "border-radius: 10px", "cursor: pointer", "font-size: 15px",
              "font-weight: 600", "margin-top: 2px",
            ],
            "Add Expense",
          ),
        ],
      ),
    ],
  )
}

///|
/// Render the expenses list card.
fn Model::view_expenses_list(self : Model, dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Html {
  view_card(
    "Expenses",
    self.expenses.map(fn(expense) {
      let payer_color = person_color(expense.paid_by)
      let payer_initial = {
        let name = find_person_name(self.people, expense.paid_by)
        name.iter().collect()[0].to_string().to_upper()
      }
      @html.div(
        style=[
          "display: flex", "align-items: center", "gap: 12px",
          "padding: 10px 0", "border-bottom: 1px solid #f5f5f5",
        ],
        [
          // Payer avatar
          @html.div(
            style=[
              "width: 36px", "height: 36px", "border-radius: 50%", "flex-shrink: 0",
              "background: \{payer_color}", "color: white", "font-size: 14px",
              "font-weight: 700", "display: flex", "align-items: center",
              "justify-content: center",
            ],
            payer_initial,
          ),
          // Description + subtitle
          @html.div(
            style=["flex: 1", "min-width: 0"],
            [
              @html.div(
                style=["font-weight: 600", "font-size: 14px", "margin-bottom: 1px"],
                expense.description,
              ),
              @html.div(
                style=["font-size: 12px", "color: #999"],
                "\{find_person_name(self.people, expense.paid_by)} paid · \{expense.split_among.length()} way split",
              ),
            ],
          ),
          // Amount
          @html.span(
            style=["font-weight: 700", "font-size: 15px", "color: #333", "white-space: nowrap"],
            "$\{@shared.format_amount(expense.amount)}",
          ),
          // Delete
          @html.button(
            on_click=dispatch(DeleteExpense(expense.id)),
            style=[
              "width: 28px", "height: 28px", "background: #fee", "color: #e53935",
              "border: none", "border-radius: 8px", "cursor: pointer",
              "font-size: 13px", "font-weight: 700", "flex-shrink: 0",
              "display: flex", "align-items: center", "justify-content: center",
            ],
            "X",
          ),
        ],
      )
    }),
  )
}

///|
/// Render the settlements card.
fn Model::view_settlements(self : Model) -> @rabbita.Html {
  view_card(
    "Who Owes Who",
    self.settlements.map(fn(s) {
      @html.div(
        style=[
          "display: flex", "align-items: center", "gap: 10px",
          "padding: 12px 0", "border-bottom: 1px solid #f5f5f5",
        ],
        [
          // From person
          @html.div(
            style=[
              "display: flex", "align-items: center", "gap: 6px", "flex: 1",
            ],
            [
              @html.div(
                style=[
                  "width: 30px", "height: 30px", "border-radius: 50%",
                  "background: \{person_color(s.from_id)}", "color: white",
                  "font-size: 12px", "font-weight: 700", "display: flex",
                  "align-items: center", "justify-content: center",
                ],
                s.from_name.iter().collect()[0].to_string().to_upper(),
              ),
              @html.span(style=["font-weight: 600", "font-size: 14px"], s.from_name),
            ],
          ),
          // Arrow
          @html.div(
            style=[
              "color: #ccc", "font-size: 18px", "padding: 0 4px",
            ],
            "->",
          ),
          // To person
          @html.div(
            style=[
              "display: flex", "align-items: center", "gap: 6px", "flex: 1",
            ],
            [
              @html.div(
                style=[
                  "width: 30px", "height: 30px", "border-radius: 50%",
                  "background: \{person_color(s.to_id)}", "color: white",
                  "font-size: 12px", "font-weight: 700", "display: flex",
                  "align-items: center", "justify-content: center",
                ],
                s.to_name.iter().collect()[0].to_string().to_upper(),
              ),
              @html.span(style=["font-weight: 600", "font-size: 14px"], s.to_name),
            ],
          ),
          // Amount
          @html.span(
            style=[
              "font-weight: 700", "font-size: 15px", "color: #43a047",
              "background: #e8f5e9", "padding: 4px 10px", "border-radius: 8px",
            ],
            "$\{@shared.format_amount(s.amount)}",
          ),
        ],
      )
    }),
  )
}

/// Render a white card with a section title.
fn view_card(
  title : String,
  children : Array[@rabbita.Html],
) -> @rabbita.Html {
  @html.div(
    style=[
      "background: white", "border-radius: 14px", "padding: 18px 20px", "margin-bottom: 14px",
      "box-shadow: 0 1px 8px rgba(0,0,0,0.06)",
    ],
    {
      let all : Array[@rabbita.Html] = [
        @html.h2(
          style=[
            "font-size: 13px", "font-weight: 700", "color: #999", "margin-bottom: 14px",
            "text-transform: uppercase", "letter-spacing: 0.5px",
          ],
          title,
        ),
      ]
      for child in children {
        all.push(child)
      }
      all
    },
  )
}

/// Pick a consistent color for a person based on their id.
fn person_color(id : Int) -> String {
  let colors = [
    "#667eea", "#e91e63", "#00bcd4", "#ff9800", "#8bc34a",
    "#9c27b0", "#009688", "#f44336", "#3f51b5", "#795548",
  ]
  colors[(id - 1) % colors.length()]
}

/// Sum all expense amounts.
fn compute_total(expenses : Array[@shared.Expense]) -> Int {
  let mut total = 0
  for e in expenses {
    total += e.amount
  }
  total
}

///|
/// Look up a person's name by their id, returning "Unknown" if not found.
fn find_person_name(people : Array[@shared.Person], id : Int) -> String {
  for p in people {
    if p.id == id {
      return p.name
    }
  }
  "Unknown"
}
