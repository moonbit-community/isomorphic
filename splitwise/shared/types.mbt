/// A person in the group who can pay or owe expenses.
pub(all) struct Person {
  id : Int
  name : String
} derive(ToJson, FromJson, Debug)

/// An expense paid by one person, split among participants.
pub(all) struct Expense {
  id : Int
  description : String
  /// Amount in cents to avoid floating-point issues.
  amount : Int
  /// The person who paid.
  paid_by : Int
  /// IDs of people who share this expense (including the payer).
  split_among : Array[Int]
} derive(ToJson, FromJson, Debug)

/// A settlement: one person pays another to resolve debts.
pub(all) struct Settlement {
  from_id : Int
  from_name : String
  to_id : Int
  to_name : String
  /// Amount in cents.
  amount : Int
} derive(ToJson, FromJson, Debug)

/// Full state returned by GET /api/state.
pub(all) struct AppState {
  people : Array[Person]
  expenses : Array[Expense]
  settlements : Array[Settlement]
} derive(ToJson, FromJson, Debug)
