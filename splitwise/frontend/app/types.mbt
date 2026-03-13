///|
/// Application state holding people, expenses, computed settlements, and form inputs.
pub(all) struct Model {
  people : Array[@shared.Person]
  expenses : Array[@shared.Expense]
  settlements : Array[@shared.Settlement]
  /// Add person form
  person_input : String
  /// Add expense form
  desc_input : String
  amount_input : String
  paid_by_input : Int
} derive(Debug)

///|
/// Messages that drive the Elm-architecture update loop.
pub(all) enum Msg {
  /// Trigger initial data fetch on app startup.
  Init
  /// Handle the response from fetching full app state.
  GotState(Result[@shared.AppState, String])
  /// Update the person name input field.
  PersonInputChanged(String)
  /// Submit the add-person form.
  AddPerson
  /// Handle the response after creating a person.
  PersonAdded(Result[@shared.Person, String])
  /// Update the expense description input field.
  DescInputChanged(String)
  /// Update the expense amount input field.
  AmountInputChanged(String)
  /// Change which person is selected as the payer.
  PaidByChanged(Int)
  /// Submit the add-expense form.
  AddExpense
  /// Handle the response after creating an expense.
  ExpenseAdded(Result[@shared.Expense, String])
  /// Request deletion of an expense by id.
  DeleteExpense(Int)
  /// Handle the response after deleting an expense.
  ExpenseDeleted(Result[Int, String])
} derive(Debug)
