///|
/// Account type classification for financial accounts.
#warnings("-unnecessary_annotation")
pub(all) enum AccountType {
  Checking
  Savings
  CreditCard
} derive(ToJson, FromJson, Debug, Eq)

///|
/// Return a human-readable label for the account type.
pub fn AccountType::to_label(self : AccountType) -> String {
  match self {
    Checking => "Checking"
    Savings => "Savings"
    CreditCard => "Credit Card"
  }
}

///|
/// Parse an account type from its database string representation.
pub fn AccountType::from_string(s : String) -> AccountType {
  match s {
    "savings" => Savings
    "credit_card" => CreditCard
    _ => Checking
  }
}

///|
/// Convert the account type to its database string representation.
pub fn AccountType::to_db_string(self : AccountType) -> String {
  match self {
    Checking => "checking"
    Savings => "savings"
    CreditCard => "credit_card"
  }
}

///|
/// A financial account (checking, savings, or credit card).
#warnings("-unnecessary_annotation")
pub(all) struct Account {
  id : Int
  name : String
  account_type : AccountType
} derive(ToJson, FromJson, Debug)

///|
/// Direction of a financial transaction.
#warnings("-unnecessary_annotation")
pub(all) enum TransactionType {
  Income
  Expense
} derive(ToJson, FromJson, Debug, Eq)

///|
/// Return a human-readable label for the transaction type.
pub fn TransactionType::to_label(self : TransactionType) -> String {
  match self {
    Income => "Income"
    Expense => "Expense"
  }
}

///|
/// Parse a transaction type from its database string representation.
pub fn TransactionType::from_string(s : String) -> TransactionType {
  match s {
    "income" => Income
    _ => Expense
  }
}

///|
/// Convert the transaction type to its database string representation.
pub fn TransactionType::to_db_string(self : TransactionType) -> String {
  match self {
    Income => "income"
    Expense => "expense"
  }
}

///|
/// A spending or income category with display metadata.
#warnings("-unnecessary_annotation")
pub(all) struct Category {
  id : Int
  name : String
  icon : String
  color : String
  cat_type : TransactionType
} derive(ToJson, FromJson, Debug)

///|
/// A single financial transaction tied to an account and category.
#warnings("-unnecessary_annotation")
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
/// A monthly spending limit for a particular category.
#warnings("-unnecessary_annotation")
pub(all) struct Budget {
  id : Int
  category_id : Int
  amount_limit : Int
  month : String
} derive(ToJson, FromJson, Debug)

///|
/// A budget combined with its category info and current spending.
#warnings("-unnecessary_annotation")
pub(all) struct BudgetStatus {
  budget : Budget
  category_name : String
  category_color : String
  category_icon : String
  spent : Int
} derive(ToJson, FromJson, Debug)

///|
/// An account paired with its computed balance in cents.
#warnings("-unnecessary_annotation")
pub(all) struct AccountBalance {
  account : Account
  balance : Int
} derive(ToJson, FromJson, Debug)

///|
/// Aggregated income and expense totals for a single month.
#warnings("-unnecessary_annotation")
pub(all) struct MonthSummary {
  month : String
  income : Int
  expenses : Int
} derive(ToJson, FromJson, Debug)

///|
/// All data needed to render the financial dashboard view.
#warnings("-unnecessary_annotation")
pub(all) struct DashboardData {
  account_balances : Array[AccountBalance]
  month_summary : MonthSummary
  budget_statuses : Array[BudgetStatus]
  recent_transactions : Array[Transaction]
  category_totals : Array[(String, String, Int)]
} derive(ToJson, FromJson, Debug)
