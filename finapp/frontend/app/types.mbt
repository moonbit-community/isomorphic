///|
/// Navigation pages for the personal finance application.
pub(all) enum Page {
  Dashboard
  Transactions
  Accounts
  Budgets
} derive(Debug)

///|
/// Frontend state for the finance app, including accounts, transactions, budgets, form inputs, and filters.
pub(all) struct Model {
  /// The active navigation page.
  page : Page
  /// All financial accounts.
  accounts : Array[@shared.Account]
  /// All transactions across all accounts.
  transactions : Array[@shared.Transaction]
  /// Available spending categories.
  categories : Array[@shared.Category]
  /// Monthly budget limits per category.
  budgets : Array[@shared.Budget]
  /// Aggregated dashboard summary data, if loaded.
  dashboard : @shared.DashboardData?
  /// Amount input for the new transaction form.
  form_amount : String
  /// Description input for the new transaction form.
  form_desc : String
  /// Date input for the new transaction form.
  form_date : String
  /// Selected account ID for the new transaction.
  form_account_id : Int
  /// Selected category ID for the new transaction.
  form_category_id : Int
  /// Income or expense type for the new transaction.
  form_type : @shared.TransactionType
  /// Name input for the new account form.
  acct_name : String
  /// Type selection for the new account form.
  acct_type : @shared.AccountType
  /// Selected category ID for the new budget entry.
  budget_cat_id : Int
  /// Amount input for the new budget entry.
  budget_amount : String
  /// Month input for the new budget entry (e.g. "2026-03").
  budget_month : String
  /// Account ID filter for the transaction list, or 0 for all.
  filter_account : Int
  /// Transaction type filter ("income", "expense", or "" for all).
  filter_type : String
  /// Month string used for budget display (e.g. "2026-03").
  current_month : String
  /// Whether the add-transaction form is visible.
  show_form : Bool
  /// Error message to display, or empty if none.
  error : String
  /// Whether a network request is in progress.
  loading : Bool
} derive(Debug)

///|
/// Messages that drive finance app state transitions, covering navigation, CRUD operations, form input, and filters.
pub(all) enum Msg {
  // Init
  Init
  // Navigation
  GoTo(Page)
  // Data loaded
  GotDashboard(Result[@shared.DashboardData, String])
  GotAccounts(Result[Array[@shared.Account], String])
  GotTransactions(Result[Array[@shared.Transaction], String])
  GotCategories(Result[Array[@shared.Category], String])
  GotBudgets(Result[Array[@shared.Budget], String])
  // Transaction form
  SetFormAmount(String)
  SetFormDesc(String)
  SetFormDate(String)
  SetFormAccountId(String)
  SetFormCategoryId(String)
  SetFormType(String)
  SubmitTransaction
  TransactionCreated(Result[@shared.Transaction, String])
  DeleteTransaction(Int)
  TransactionDeleted(Result[Int, String])
  // Account form
  SetAcctName(String)
  SetAcctType(String)
  SubmitAccount
  AccountCreated(Result[@shared.Account, String])
  DeleteAccount(Int)
  AccountDeleted(Result[Int, String])
  // Budget form
  SetBudgetCatId(String)
  SetBudgetAmount(String)
  SetBudgetMonth(String)
  SubmitBudget
  BudgetCreated(Result[@shared.Budget, String])
  DeleteBudget(Int)
  BudgetDeleted(Result[Int, String])
  // Filters
  SetFilterAccount(String)
  SetFilterType(String)
  // UI
  ToggleForm
  ClearError
} derive(Debug)
