///|
/// A person in the group who can pay or owe expenses.
#warnings("-unnecessary_annotation")
pub(all) struct Person {
  id : Int
  name : String
} derive(ToJson, FromJson, Debug)

///|
/// An expense paid by one person, split among participants.
#warnings("-unnecessary_annotation")
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

///|
/// A settlement: one person pays another to resolve debts.
#warnings("-unnecessary_annotation")
pub(all) struct Settlement {
  from_id : Int
  from_name : String
  to_id : Int
  to_name : String
  /// Amount in cents.
  amount : Int
} derive(ToJson, FromJson, Debug)

///|
/// Full state returned by GET /api/state.
#warnings("-unnecessary_annotation")
pub(all) struct AppState {
  people : Array[Person]
  expenses : Array[Expense]
  settlements : Array[Settlement]
} derive(ToJson, FromJson, Debug)

///|
pub extend AppState with Debug::{to_repr}

///|
pub extend AppState with @json.FromJson::{from_json}

///|
pub extend AppState with ToJson::{to_json}

///|
pub extend Expense with Debug::{to_repr}

///|
pub extend Expense with @json.FromJson::{from_json}

///|
pub extend Expense with ToJson::{to_json}

///|
pub extend Person with Debug::{to_repr}

///|
pub extend Person with @json.FromJson::{from_json}

///|
pub extend Person with ToJson::{to_json}

///|
pub extend Settlement with Debug::{to_repr}

///|
pub extend Settlement with @json.FromJson::{from_json}

///|
pub extend Settlement with ToJson::{to_json}
