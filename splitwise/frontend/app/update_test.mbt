///|
fn noop_dispatch(_msg : Msg) -> @rabbita.Cmd {
  @rabbita.none
}

///|
fn empty_model() -> Model {
  {
    people: [],
    expenses: [],
    settlements: [],
    person_input: "",
    desc_input: "",
    amount_input: "",
    paid_by_input: 0,
  }
}

///|
fn sample_people() -> Array[@shared.Person] {
  [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Carol" }]
}

///|
fn sample_expenses() -> Array[@shared.Expense] {
  [
    {
      id: 1,
      description: "Dinner",
      amount: 3000,
      paid_by: 1,
      split_among: [1, 2, 3],
    },
    {
      id: 2,
      description: "Taxi",
      amount: 1500,
      paid_by: 2,
      split_among: [1, 2],
    },
  ]
}

// ── Init ─────────────────────────────────────────────────────────────

///|
test "Init leaves model unchanged (issues fetch command)" {
  let (model, _) = empty_model().update(msg=Init, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  people: [],
      #|  expenses: [],
      #|  settlements: [],
      #|  person_input: "",
      #|  desc_input: "",
      #|  amount_input: "",
      #|  paid_by_input: 0,
      #|}
    ),
  )
}

// ── GotState ─────────────────────────────────────────────────────────

///|
test "GotState/Ok populates people, expenses, and settlements" {
  let people = sample_people()
  let expenses = sample_expenses()
  let settlements = @shared.compute_settlements(people, expenses)
  let state : @shared.AppState = { people, expenses, settlements }
  let (model, _) = empty_model().update(
    msg=GotState(Ok(state)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  people: [
      #|    { id: 1, name: "Alice" },
      #|    { id: 2, name: "Bob" },
      #|    { id: 3, name: "Carol" },
      #|  ],
      #|  expenses: [
      #|    {
      #|      id: 1,
      #|      description: "Dinner",
      #|      amount: 3000,
      #|      paid_by: 1,
      #|      split_among: [1, 2, 3],
      #|    },
      #|    {
      #|      id: 2,
      #|      description: "Taxi",
      #|      amount: 1500,
      #|      paid_by: 2,
      #|      split_among: [1, 2],
      #|    },
      #|  ],
      #|  settlements: [
      #|    {
      #|      from_id: 2,
      #|      from_name: "Bob",
      #|      to_id: 1,
      #|      to_name: "Alice",
      #|      amount: 250,
      #|    },
      #|    {
      #|      from_id: 3,
      #|      from_name: "Carol",
      #|      to_id: 1,
      #|      to_name: "Alice",
      #|      amount: 1000,
      #|    },
      #|  ],
      #|  person_input: "",
      #|  desc_input: "",
      #|  amount_input: "",
      #|  paid_by_input: 0,
      #|}
    ),
  )
}

///|
test "GotState/Err leaves model unchanged" {
  let (model, _) = empty_model().update(
    msg=GotState(Err("network")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  people: [],
      #|  expenses: [],
      #|  settlements: [],
      #|  person_input: "",
      #|  desc_input: "",
      #|  amount_input: "",
      #|  paid_by_input: 0,
      #|}
    ),
  )
}

// ── PersonInputChanged ──────────────────────────────────────────────

///|
test "PersonInputChanged updates person_input" {
  let (model, _) = empty_model().update(
    msg=PersonInputChanged("Alice"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  people: [],
      #|  expenses: [],
      #|  settlements: [],
      #|  person_input: "Alice",
      #|  desc_input: "",
      #|  amount_input: "",
      #|  paid_by_input: 0,
      #|}
    ),
  )
}

// ── AddPerson ───────────────────────────────────────────────────────

///|
test "AddPerson with empty input does nothing" {
  let initial = { ..empty_model(), person_input: "" }
  let (model, _) = initial.update(msg=AddPerson, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  people: [],
      #|  expenses: [],
      #|  settlements: [],
      #|  person_input: "",
      #|  desc_input: "",
      #|  amount_input: "",
      #|  paid_by_input: 0,
      #|}
    ),
  )
}

///|
test "AddPerson with valid input clears person_input" {
  let initial = { ..empty_model(), person_input: "Alice" }
  let (model, _) = initial.update(msg=AddPerson, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  people: [],
      #|  expenses: [],
      #|  settlements: [],
      #|  person_input: "",
      #|  desc_input: "",
      #|  amount_input: "",
      #|  paid_by_input: 0,
      #|}
    ),
  )
}

///|
test "AddPerson with too-long name does nothing" {
  let long = "a".repeat(@shared.max_name_length + 1)
  let initial = { ..empty_model(), person_input: long }
  let (model, _) = initial.update(msg=AddPerson, dispatch=noop_dispatch)
  inspect(model.person_input, content=long)
}

// ── PersonAdded ─────────────────────────────────────────────────────

///|
test "PersonAdded/Ok appends to people list" {
  let initial = { ..empty_model(), people: [{ id: 1, name: "Alice" }] }
  let new_person : @shared.Person = { id: 2, name: "Bob" }
  let (model, _) = initial.update(
    msg=PersonAdded(Ok(new_person)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  people: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }],
      #|  expenses: [],
      #|  settlements: [],
      #|  person_input: "",
      #|  desc_input: "",
      #|  amount_input: "",
      #|  paid_by_input: 0,
      #|}
    ),
  )
}

///|
test "PersonAdded/Err leaves model unchanged" {
  let (model, _) = empty_model().update(
    msg=PersonAdded(Err("fail")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  people: [],
      #|  expenses: [],
      #|  settlements: [],
      #|  person_input: "",
      #|  desc_input: "",
      #|  amount_input: "",
      #|  paid_by_input: 0,
      #|}
    ),
  )
}

// ── DescInputChanged ────────────────────────────────────────────────

///|
test "DescInputChanged updates desc_input" {
  let (model, _) = empty_model().update(
    msg=DescInputChanged("Dinner"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  people: [],
      #|  expenses: [],
      #|  settlements: [],
      #|  person_input: "",
      #|  desc_input: "Dinner",
      #|  amount_input: "",
      #|  paid_by_input: 0,
      #|}
    ),
  )
}

// ── AmountInputChanged ──────────────────────────────────────────────

///|
test "AmountInputChanged updates amount_input" {
  let (model, _) = empty_model().update(
    msg=AmountInputChanged("25.50"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  people: [],
      #|  expenses: [],
      #|  settlements: [],
      #|  person_input: "",
      #|  desc_input: "",
      #|  amount_input: "25.50",
      #|  paid_by_input: 0,
      #|}
    ),
  )
}

// ── PaidByChanged ───────────────────────────────────────────────────

///|
test "PaidByChanged updates paid_by_input" {
  let (model, _) = empty_model().update(
    msg=PaidByChanged(2),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  people: [],
      #|  expenses: [],
      #|  settlements: [],
      #|  person_input: "",
      #|  desc_input: "",
      #|  amount_input: "",
      #|  paid_by_input: 2,
      #|}
    ),
  )
}

// ── AddExpense ──────────────────────────────────────────────────────

///|
test "AddExpense with empty description does nothing" {
  let initial = {
    ..empty_model(),
    people: sample_people(),
    desc_input: "",
    amount_input: "10.00",
  }
  let (model, _) = initial.update(msg=AddExpense, dispatch=noop_dispatch)
  inspect(model.desc_input, content="")
  inspect(model.amount_input, content="10.00")
}

///|
test "AddExpense with zero amount does nothing" {
  let initial = {
    ..empty_model(),
    people: sample_people(),
    desc_input: "Lunch",
    amount_input: "0",
  }
  let (model, _) = initial.update(msg=AddExpense, dispatch=noop_dispatch)
  inspect(model.desc_input, content="Lunch")
  inspect(model.amount_input, content="0")
}

///|
test "AddExpense with no people does nothing" {
  let initial = { ..empty_model(), desc_input: "Lunch", amount_input: "10.00" }
  let (model, _) = initial.update(msg=AddExpense, dispatch=noop_dispatch)
  inspect(model.desc_input, content="Lunch")
}

///|
test "AddExpense with valid inputs clears desc and amount" {
  let initial = {
    ..empty_model(),
    people: sample_people(),
    desc_input: "Lunch",
    amount_input: "15.00",
  }
  let (model, _) = initial.update(msg=AddExpense, dispatch=noop_dispatch)
  inspect(model.desc_input, content="")
  inspect(model.amount_input, content="")
}

///|
test "AddExpense with too-long description does nothing" {
  let long = "a".repeat(@shared.max_description_length + 1)
  let initial = {
    ..empty_model(),
    people: sample_people(),
    desc_input: long,
    amount_input: "10.00",
  }
  let (model, _) = initial.update(msg=AddExpense, dispatch=noop_dispatch)
  inspect(model.desc_input, content=long)
}

// ── ExpenseAdded ────────────────────────────────────────────────────

///|
test "ExpenseAdded/Ok appends expense and recomputes settlements" {
  let initial = { ..empty_model(), people: sample_people() }
  let expense : @shared.Expense = {
    id: 1,
    description: "Dinner",
    amount: 3000,
    paid_by: 1,
    split_among: [1, 2, 3],
  }
  let (model, _) = initial.update(
    msg=ExpenseAdded(Ok(expense)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  people: [
      #|    { id: 1, name: "Alice" },
      #|    { id: 2, name: "Bob" },
      #|    { id: 3, name: "Carol" },
      #|  ],
      #|  expenses: [
      #|    {
      #|      id: 1,
      #|      description: "Dinner",
      #|      amount: 3000,
      #|      paid_by: 1,
      #|      split_among: [1, 2, 3],
      #|    },
      #|  ],
      #|  settlements: [
      #|    {
      #|      from_id: 2,
      #|      from_name: "Bob",
      #|      to_id: 1,
      #|      to_name: "Alice",
      #|      amount: 1000,
      #|    },
      #|    {
      #|      from_id: 3,
      #|      from_name: "Carol",
      #|      to_id: 1,
      #|      to_name: "Alice",
      #|      amount: 1000,
      #|    },
      #|  ],
      #|  person_input: "",
      #|  desc_input: "",
      #|  amount_input: "",
      #|  paid_by_input: 0,
      #|}
    ),
  )
}

///|
test "ExpenseAdded/Err leaves model unchanged" {
  let (model, _) = empty_model().update(
    msg=ExpenseAdded(Err("fail")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  people: [],
      #|  expenses: [],
      #|  settlements: [],
      #|  person_input: "",
      #|  desc_input: "",
      #|  amount_input: "",
      #|  paid_by_input: 0,
      #|}
    ),
  )
}

// ── DeleteExpense ───────────────────────────────────────────────────

///|
test "DeleteExpense leaves model unchanged (issues command)" {
  let initial = {
    ..empty_model(),
    people: sample_people(),
    expenses: sample_expenses(),
  }
  let (model, _) = initial.update(msg=DeleteExpense(1), dispatch=noop_dispatch)
  // Model is unchanged; only a command is issued
  inspect(model.expenses.length(), content="2")
}

// ── ExpenseDeleted ──────────────────────────────────────────────────

///|
test "ExpenseDeleted/Ok removes expense and recomputes settlements" {
  let people = sample_people()
  let expenses = sample_expenses()
  let settlements = @shared.compute_settlements(people, expenses)
  let initial = { ..empty_model(), people, expenses, settlements }
  let (model, _) = initial.update(
    msg=ExpenseDeleted(Ok(1)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  people: [
      #|    { id: 1, name: "Alice" },
      #|    { id: 2, name: "Bob" },
      #|    { id: 3, name: "Carol" },
      #|  ],
      #|  expenses: [
      #|    {
      #|      id: 2,
      #|      description: "Taxi",
      #|      amount: 1500,
      #|      paid_by: 2,
      #|      split_among: [1, 2],
      #|    },
      #|  ],
      #|  settlements: [
      #|    {
      #|      from_id: 1,
      #|      from_name: "Alice",
      #|      to_id: 2,
      #|      to_name: "Bob",
      #|      amount: 750,
      #|    },
      #|  ],
      #|  person_input: "",
      #|  desc_input: "",
      #|  amount_input: "",
      #|  paid_by_input: 0,
      #|}
    ),
  )
}

///|
test "ExpenseDeleted/Ok with nonexistent id is no-op" {
  let people = sample_people()
  let expenses = sample_expenses()
  let settlements = @shared.compute_settlements(people, expenses)
  let initial = { ..empty_model(), people, expenses, settlements }
  let (model, _) = initial.update(
    msg=ExpenseDeleted(Ok(999)),
    dispatch=noop_dispatch,
  )
  inspect(model.expenses.length(), content="2")
}

///|
test "ExpenseDeleted/Err leaves model unchanged" {
  let initial = {
    ..empty_model(),
    people: sample_people(),
    expenses: sample_expenses(),
  }
  let (model, _) = initial.update(
    msg=ExpenseDeleted(Err("fail")),
    dispatch=noop_dispatch,
  )
  inspect(model.expenses.length(), content="2")
}
