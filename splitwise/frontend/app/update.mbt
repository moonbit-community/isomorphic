///|
/// Fetch the full application state (people, expenses, settlements) from the backend.
fn fetch_state(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    @shared.api_state,
    expect=Json(result => dispatch(GotState(result)), json => {
      Ok(@json.from_json(json)) catch {
        _ => Err("Failed to decode state")
      }
    }),
  )
}

/// Parse a string of digits into an integer.
fn parse_int(input : String) -> Int {
  let mut result = 0
  for ch in input {
    if ch >= '0' && ch <= '9' {
      result = result * 10 + (ch.to_int() - '0'.to_int())
    }
  }
  result
}

/// Parse a dollar string like "12.50" or "7" into cents.
fn parse_dollars_to_cents(input : String) -> Int {
  // Split on '.'
  let mut dollars = 0
  let mut cents = 0
  let mut after_dot = false
  let mut cent_digits = 0
  for ch in input {
    if ch == '.' {
      after_dot = true
    } else if ch >= '0' && ch <= '9' {
      let digit = ch.to_int() - '0'.to_int()
      if after_dot {
        if cent_digits < 2 {
          cents = cents * 10 + digit
          cent_digits += 1
        }
      } else {
        dollars = dollars * 10 + digit
      }
    }
  }
  // If user typed "12.5", treat as "12.50"
  if cent_digits == 1 {
    cents = cents * 10
  }
  dollars * 100 + cents
}

///|
/// Handle each message: issue HTTP commands and return the updated model.
// TODO (upstream): @http.Expecting is not well designed?
#warnings("-unresolved_type_variable")
pub fn Model::update(
  self : Model,
  msg~ : Msg,
  dispatch~ : @rabbita.Dispatch[Msg],
) -> (Model, @rabbita.Cmd) {
  match msg {
    Init => (self, fetch_state(dispatch))
    GotState(Ok(state)) => {
      let settlements = @shared.compute_settlements(state.people, state.expenses)
      (
        {
          ..self,
          people: state.people,
          expenses: state.expenses,
          settlements,
        },
        @rabbita.none,
      )
    }
    GotState(Err(_)) => (self, @rabbita.none)
    PersonInputChanged(v) => ({ ..self, person_input: v, }, @rabbita.none)
    AddPerson => {
      if !@shared.validate_name(self.person_input) {
        return (self, @rabbita.none)
      }
      let name = self.person_input
      let cmd = @http.post(
        @shared.api_people,
        Json({ "name": name }),
        expect=Json(fn(r) { dispatch(PersonAdded(r)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode person")
          }
        }),
      )
      ({ ..self, person_input: "", }, cmd)
    }
    PersonAdded(Ok(person)) => {
      let people = self.people.copy()
      people.push(person)
      ({ ..self, people, }, @rabbita.none)
    }
    PersonAdded(Err(_)) => (self, @rabbita.none)
    DescInputChanged(v) => ({ ..self, desc_input: v, }, @rabbita.none)
    AmountInputChanged(v) => ({ ..self, amount_input: v, }, @rabbita.none)
    PaidByChanged(id) => ({ ..self, paid_by_input: id, }, @rabbita.none)
    AddExpense => {
      if !@shared.validate_description(self.desc_input) {
        return (self, @rabbita.none)
      }
      // Parse amount: accept "12.50" format, convert to cents
      let cents = parse_dollars_to_cents(self.amount_input)
      if !@shared.validate_amount(cents) {
        return (self, @rabbita.none)
      }
      if self.people.length() == 0 {
        return (self, @rabbita.none)
      }
      let paid_by = if self.paid_by_input == 0 {
        self.people[0].id
      } else {
        self.paid_by_input
      }
      let split_among = self.people.map(fn(p) { p.id.to_json() })
      let body : Json = {
        "description": self.desc_input,
        "amount": cents.to_double(),
        "paid_by": paid_by.to_double(),
        "split_among": split_among,
      }
      let cmd = @http.post(
        @shared.api_expenses,
        Json(body),
        expect=Json(fn(r) { dispatch(ExpenseAdded(r)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode expense")
          }
        }),
      )
      ({ ..self, desc_input: "", amount_input: "", }, cmd)
    }
    ExpenseAdded(Ok(expense)) => {
      let expenses = self.expenses.copy()
      expenses.push(expense)
      let settlements = @shared.compute_settlements(self.people, expenses)
      ({ ..self, expenses, settlements, }, @rabbita.none)
    }
    ExpenseAdded(Err(_)) => (self, @rabbita.none)
    DeleteExpense(id) => {
      let cmd = @http.delete(
        @shared.api_expense(id),
        expect=Text(fn(result) {
          dispatch(
            ExpenseDeleted(
              match result {
                Ok(_) => Ok(id)
                Err(e) => Err(e)
              },
            ),
          )
        }),
      )
      (self, cmd)
    }
    ExpenseDeleted(Ok(id)) => {
      let expenses = self.expenses.filter(fn(e) { e.id != id })
      let settlements = @shared.compute_settlements(self.people, expenses)
      ({ ..self, expenses, settlements, }, @rabbita.none)
    }
    ExpenseDeleted(Err(_)) => (self, @rabbita.none)
  }
}
