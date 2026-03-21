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
  page : Page
  // Data
  accounts : Array[@shared.Account]
  transactions : Array[@shared.Transaction]
  categories : Array[@shared.Category]
  budgets : Array[@shared.Budget]
  dashboard : @shared.DashboardData?
  // Transaction form
  form_amount : String
  form_desc : String
  form_date : String
  form_account_id : Int
  form_category_id : Int
  form_type : @shared.TransactionType
  // Account form
  acct_name : String
  acct_type : @shared.AccountType
  // Budget form
  budget_cat_id : Int
  budget_amount : String
  budget_month : String
  // Filters
  filter_account : Int
  filter_type : String
  // UI
  current_month : String
  show_form : Bool
  error : String
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
