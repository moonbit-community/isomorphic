///|
/// API route for listing and creating accounts.
pub let api_accounts : String = "/api/accounts"

///|
/// API route for a single account by ID.
pub fn api_account(id : Int) -> String {
  "/api/accounts/\{id}"
}

///|
/// API route for listing categories.
pub let api_categories : String = "/api/categories"

///|
/// API route for listing and creating transactions.
pub let api_transactions : String = "/api/transactions"

///|
/// API route for a single transaction by ID.
pub fn api_transaction(id : Int) -> String {
  "/api/transactions/\{id}"
}

///|
/// API route for listing and creating budgets.
pub let api_budgets : String = "/api/budgets"

///|
/// API route for a single budget by ID.
pub fn api_budget(id : Int) -> String {
  "/api/budgets/\{id}"
}

///|
/// API route for the aggregated dashboard data.
pub let api_dashboard : String = "/api/dashboard"
