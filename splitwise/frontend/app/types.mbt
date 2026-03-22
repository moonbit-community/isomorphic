///|
/// Application state holding people, expenses, computed settlements, and form inputs.
pub(all) struct Model {
  /// All group members.
  people : Array[@shared.Person]
  /// All recorded shared expenses.
  expenses : Array[@shared.Expense]
  /// Computed optimal payments to settle all debts.
  settlements : Array[@shared.Settlement]
  /// Name input for the add-person form.
  person_input : String
  /// Description input for the add-expense form.
  desc_input : String
  /// Amount input for the add-expense form.
  amount_input : String
  /// ID of the person selected as payer for the new expense.
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
