///|
pub(all) enum AccountType {
  Checking
  Savings
  CreditCard
} derive(ToJson, FromJson, Debug, Eq)

///|
pub fn AccountType::to_label(self : AccountType) -> String {
  match self {
    Checking => "Checking"
    Savings => "Savings"
    CreditCard => "Credit Card"
  }
}

///|
pub fn AccountType::from_string(s : String) -> AccountType {
  match s {
    "savings" => Savings
    "credit_card" => CreditCard
    _ => Checking
  }
}

///|
pub fn AccountType::to_db_string(self : AccountType) -> String {
  match self {
    Checking => "checking"
    Savings => "savings"
    CreditCard => "credit_card"
  }
}

///|
pub(all) struct Account {
  id : Int
  name : String
  account_type : AccountType
} derive(ToJson, FromJson, Debug)

///|
pub(all) enum TransactionType {
  Income
  Expense
} derive(ToJson, FromJson, Debug, Eq)

///|
pub fn TransactionType::to_label(self : TransactionType) -> String {
  match self {
    Income => "Income"
    Expense => "Expense"
  }
}

///|
pub fn TransactionType::from_string(s : String) -> TransactionType {
  match s {
    "income" => Income
    _ => Expense
  }
}

///|
pub fn TransactionType::to_db_string(self : TransactionType) -> String {
  match self {
    Income => "income"
    Expense => "expense"
  }
}

///|
pub(all) struct Category {
  id : Int
  name : String
  icon : String
  color : String
  cat_type : TransactionType
} derive(ToJson, FromJson, Debug)

///|
pub(all) struct Transaction {
  id : Int
  account_id : Int
  category_id : Int
  amount : Int
  txn_type : TransactionType
  description : String
  date : String
} derive(ToJson, FromJson, Debug)

///|
pub(all) struct Budget {
  id : Int
  category_id : Int
  amount_limit : Int
  month : String
} derive(ToJson, FromJson, Debug)

///|
pub(all) struct BudgetStatus {
  budget : Budget
  category_name : String
  category_color : String
  category_icon : String
  spent : Int
} derive(ToJson, FromJson, Debug)

///|
pub(all) struct AccountBalance {
  account : Account
  balance : Int
} derive(ToJson, FromJson, Debug)

///|
pub(all) struct MonthSummary {
  month : String
  income : Int
  expenses : Int
} derive(ToJson, FromJson, Debug)

///|
pub(all) struct DashboardData {
  account_balances : Array[AccountBalance]
  month_summary : MonthSummary
  budget_statuses : Array[BudgetStatus]
  recent_transactions : Array[Transaction]
  category_totals : Array[(String, String, Int)]
} derive(ToJson, FromJson, Debug)
