///|
/// Render the entire UI: header, total banner, people card, expense form, expense list, and settlements.
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=container_style) <| ({
    let sections : Array[@rabbita.Html] = []
    // Header
    sections.push(
      @html.div(style=header_style) <| [
        @html.h1(style=header_title_style) <| "Splitwise",
        @html.p(style=header_subtitle_style) <| "Split expenses with friends",
      ],
    )
    // Total banner (only when there are expenses)
    if self.expenses.length() > 0 {
      let total = compute_total(self.expenses)
      sections.push(
        @html.div(style=total_banner_style) <| [
          @html.div(style=total_label_style) <| "Total Expenses",
          @html.div(style=total_amount_style) <| "$\{@shared.format_amount(total)}",
        ],
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
        view_card("Settlements") <| [
          @html.p(style=settled_up_style) <| "All settled up!",
        ],
      )
    }
    sections
  })
}

///|
/// Render the people card with add-person form and people list.
fn Model::view_people_card(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  view_card("People") <| [
    @html.form(on_submit=dispatch(AddPerson), style=people_form_style) <| [
      @html.input(
        input_type=Text,
        placeholder="Enter a name...",
        value=self.person_input,
        on_input=fn(v) { dispatch(PersonInputChanged(v)) },
        style=text_input_style,
      ) <| "",
      @html.button(type_="submit", style=add_btn_style) <| "Add",
    ],
    if self.people.length() > 0 {
      @html.div(style=people_chips_style) <| self.people.map(fn(p) {
        let initial = p.name.iter().collect()[0].to_string().to_upper()
        let color = person_color(p.id)
        @html.div(style=person_chip_style) <| [
          @html.div(style=[
            "width: 26px",
            "height: 26px",
            "border-radius: 50%",
            "background: \{color}",
            "color: white",
            "font-size: 12px",
            "font-weight: 700",
            "display: flex",
            "align-items: center",
            "justify-content: center",
          ]) <| initial,
          @html.span(style=person_name_style) <| p.name,
        ]
      })
    } else {
      @html.p(style=empty_people_style) <| "Add at least 2 people to get started"
    },
  ]
}

///|
/// Render the add expense form card.
fn Model::view_expense_form(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  view_card("Add Expense") <| [
    @html.form(on_submit=dispatch(AddExpense), style=expense_form_style) <| [
      @html.input(
        input_type=Text,
        placeholder="What was it for?",
        value=self.desc_input,
        on_input=fn(v) { dispatch(DescInputChanged(v)) },
        style=input_style,
      ) <| "",
      @html.div(style=amount_row_style) <| [
        @html.input(
          input_type=Text,
          placeholder="0.00",
          value=self.amount_input,
          on_input=fn(v) { dispatch(AmountInputChanged(v)) },
          style=amount_input_style,
        ) <| "",
        @html.select(
          on_change=fn(v) { dispatch(PaidByChanged(parse_int(v))) },
          style=select_style,
        ) <| self.people.map(fn(p) {
          @html.option(
            value=p.id.to_string(),
            selected=p.id == self.paid_by_input ||
              (self.paid_by_input == 0 && p.id == self.people[0].id),
          ) <| "\{p.name} paid"
        }),
      ],
      @html.div(style=split_hint_style) <| "Split equally among all \{self.people.length()} people",
      @html.button(type_="submit", style=submit_btn_style) <| "Add Expense",
    ],
  ]
}

///|
/// Render the expenses list card.
fn Model::view_expenses_list(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  view_card("Expenses") <| self.expenses.map(fn(expense) {
    let payer_color = person_color(expense.paid_by)
    let payer_initial = {
      let name = find_person_name(self.people, expense.paid_by)
      name.iter().collect()[0].to_string().to_upper()
    }
    @html.div(style=expense_row_style) <| [
      // Payer avatar
      @html.div(style=[
        "width: 36px",
        "height: 36px",
        "border-radius: 50%",
        "flex-shrink: 0",
        "background: \{payer_color}",
        "color: white",
        "font-size: 14px",
        "font-weight: 700",
        "display: flex",
        "align-items: center",
        "justify-content: center",
      ]) <| payer_initial,
      // Description + subtitle
      @html.div(style=expense_info_style) <| [
        @html.div(style=expense_desc_style) <| expense.description,
        @html.div(style=expense_sub_style) <| "\{find_person_name(self.people, expense.paid_by)} paid · \{expense.split_among.length()} way split",
      ],
      // Amount
      @html.span(style=expense_amount_style) <| "$\{@shared.format_amount(expense.amount)}",
      // Delete
      @html.button(
        on_click=dispatch(DeleteExpense(expense.id)),
        style=delete_btn_style,
      ) <| "X",
    ]
  })
}

///|
/// Render the settlements card.
fn Model::view_settlements(self : Model) -> @rabbita.Html {
  view_card("Who Owes Who") <| self.settlements.map(fn(s) {
    @html.div(style=settlement_row_style) <| [
      // From person
      @html.div(style=settlement_person_style) <| [
        @html.div(style=[
          "width: 30px",
          "height: 30px",
          "border-radius: 50%",
          "background: \{person_color(s.from_id)}",
          "color: white",
          "font-size: 12px",
          "font-weight: 700",
          "display: flex",
          "align-items: center",
          "justify-content: center",
        ]) <| s.from_name.iter().collect()[0].to_string().to_upper(),
        @html.span(style=settlement_name_style) <| s.from_name,
      ],
      // Arrow
      @html.div(style=settlement_arrow_style) <| "->",
      // To person
      @html.div(style=settlement_person_style) <| [
        @html.div(style=[
          "width: 30px",
          "height: 30px",
          "border-radius: 50%",
          "background: \{person_color(s.to_id)}",
          "color: white",
          "font-size: 12px",
          "font-weight: 700",
          "display: flex",
          "align-items: center",
          "justify-content: center",
        ]) <| s.to_name.iter().collect()[0].to_string().to_upper(),
        @html.span(style=settlement_name_style) <| s.to_name,
      ],
      // Amount
      @html.span(style=settlement_amount_style) <| "$\{@shared.format_amount(s.amount)}",
    ]
  })
}

///|
/// Render a white card with a section title.
fn view_card(title : String, children : Array[@rabbita.Html]) -> @rabbita.Html {
  @html.div(style=card_style) <| ({
    let all : Array[@rabbita.Html] = [@html.h2(style=card_title_style) <| title]
    for child in children {
      all.push(child)
    }
    all
  })
}

///|
/// Pick a consistent color for a person based on their id.
fn person_color(id : Int) -> String {
  let colors = [
    "#667eea", "#e91e63", "#00bcd4", "#ff9800", "#8bc34a", "#9c27b0", "#009688",
    "#f44336", "#3f51b5", "#795548",
  ]
  colors[(id - 1) % colors.length()]
}

///|
/// Sum all expense amounts.
fn compute_total(expenses : Array[@shared.Expense]) -> Int {
  expenses.fold(init=0, fn(acc, e) { acc + e.amount })
}

///|
/// Look up a person's name by their id, returning "Unknown" if not found.
fn find_person_name(people : Array[@shared.Person], id : Int) -> String {
  match people.iter().find_first(fn(p) { p.id == id }) {
    Some(p) => p.name
    None => "Unknown"
  }
}
