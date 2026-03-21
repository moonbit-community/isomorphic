///|
/// Initialize the database schema, creating the accounts, categories, transactions,
/// and budgets tables if they do not already exist. Text columns use BLOB storage
/// for UTF-8 safety. The budgets table enforces a UNIQUE constraint on (category_id, month)
/// to support upsert semantics.
fn init_db(conn : @sqlite3.Connection) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS accounts (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  name BLOB NOT NULL,
      #|  account_type BLOB NOT NULL DEFAULT 'checking'
      #|)
    ),
  )
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS categories (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  name BLOB NOT NULL,
      #|  icon BLOB NOT NULL DEFAULT '',
      #|  color BLOB NOT NULL DEFAULT '#888888',
      #|  cat_type BLOB NOT NULL DEFAULT 'expense'
      #|)
    ),
  )
  stmt2.step_once()
  stmt2.finalize()
  let stmt3 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS transactions (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  account_id INTEGER NOT NULL,
      #|  category_id INTEGER NOT NULL,
      #|  amount INTEGER NOT NULL,
      #|  txn_type BLOB NOT NULL,
      #|  description BLOB NOT NULL,
      #|  date BLOB NOT NULL,
      #|  FOREIGN KEY (account_id) REFERENCES accounts(id),
      #|  FOREIGN KEY (category_id) REFERENCES categories(id)
      #|)
    ),
  )
  stmt3.step_once()
  stmt3.finalize()
  let stmt4 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS budgets (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  category_id INTEGER NOT NULL,
      #|  amount_limit INTEGER NOT NULL,
      #|  month BLOB NOT NULL,
      #|  UNIQUE(category_id, month),
      #|  FOREIGN KEY (category_id) REFERENCES categories(id)
      #|)
    ),
  )
  stmt4.step_once()
  stmt4.finalize()
}

///|
/// Populate the categories table with a default set of income and expense categories
/// (e.g. Salary, Groceries, Transport). Skips seeding if any categories already exist,
/// so it is safe to call on every startup.
fn seed_categories(
  conn : @sqlite3.Connection,
) -> Unit raise @sqlite3.SqliteError {
  let check = conn.prepare("SELECT COUNT(*) FROM categories")
  guard check.step()
  let count : Int = check.column(index=0)
  check.finalize()
  if count > 0 {
    return
  }
  let cats : Array[(String, String, String, String)] = [
    ("Salary", "💰", "#4CAF50", "income"),
    ("Freelance", "💻", "#8BC34A", "income"),
    ("Investment", "📈", "#009688", "income"),
    ("Groceries", "🛒", "#FF9800", "expense"),
    ("Dining", "🍽️", "#F44336", "expense"),
    ("Transport", "🚗", "#2196F3", "expense"),
    ("Housing", "🏠", "#9C27B0", "expense"),
    ("Utilities", "💡", "#FF5722", "expense"),
    ("Entertainment", "🎬", "#E91E63", "expense"),
    ("Healthcare", "🏥", "#00BCD4", "expense"),
    ("Shopping", "🛍️", "#795548", "expense"),
    ("Education", "📚", "#607D8B", "expense"),
  ]
  for cat in cats {
    let (name, icon, color, cat_type) = cat
    let s = conn.prepare(
      "INSERT INTO categories (name, icon, color, cat_type) VALUES (?, ?, ?, ?)",
    )
    s.bind_string_as_blob(index=1, val=name)
    s.bind_string_as_blob(index=2, val=icon)
    s.bind_string_as_blob(index=3, val=color)
    s.bind_string_as_blob(index=4, val=cat_type)
    s.step_once()
    s.finalize()
  }
}

// ── Account CRUD ──────────────────────────────────────────────────

///|
/// Extract an Account from the current row of a prepared statement.
/// Expects columns in order: id, name (BLOB), account_type (BLOB).
fn read_account(stmt : @sqlite3.Statement) -> @shared.Account {
  let id : Int = stmt.column(index=0)
  let name : String = stmt.column_blob_as_string(index=1)
  let account_type = @shared.AccountType::from_string(
    stmt.column_blob_as_string(index=2),
  )
  { id, name, account_type }
}

///|
/// Retrieve all accounts ordered by ID.
/// Used by both the accounts list endpoint and the dashboard aggregation.
fn get_all_accounts(
  conn : @sqlite3.Connection,
) -> Array[@shared.Account] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, name, account_type FROM accounts ORDER BY id",
  )
  let result : Array[@shared.Account] = []
  while stmt.step() {
    result.push(read_account(stmt))
  }
  stmt.finalize()
  result
}

///|
/// Insert a new account and return it with its auto-generated ID.
/// The `account_type` should be one of "checking", "savings", or "credit_card".
fn create_account(
  conn : @sqlite3.Connection,
  name : String,
  account_type : String,
) -> @shared.Account raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "INSERT INTO accounts (name, account_type) VALUES (?, ?)",
  )
  stmt.bind_string_as_blob(index=1, val=name)
  stmt.bind_string_as_blob(index=2, val=account_type)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id : Int = stmt2.column(index=0)
  stmt2.finalize()
  { id, name, account_type: @shared.AccountType::from_string(account_type) }
}

///|
/// Delete an account by ID, cascading to remove all associated transactions first
/// to avoid foreign key violations.
fn delete_account(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM transactions WHERE account_id = ?")
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("DELETE FROM accounts WHERE id = ?")
  stmt2.bind(index=1, val=id)
  stmt2.step_once()
  stmt2.finalize()
}

// ── Category CRUD ─────────────────────────────────────────────────

///|
/// Extract a Category from the current row of a prepared statement.
/// Expects columns in order: id, name (BLOB), icon (BLOB), color (BLOB), cat_type (BLOB).
fn read_category(stmt : @sqlite3.Statement) -> @shared.Category {
  let id : Int = stmt.column(index=0)
  let name : String = stmt.column_blob_as_string(index=1)
  let icon : String = stmt.column_blob_as_string(index=2)
  let color : String = stmt.column_blob_as_string(index=3)
  let cat_type = @shared.TransactionType::from_string(
    stmt.column_blob_as_string(index=4),
  )
  { id, name, icon, color, cat_type }
}

///|
/// Retrieve all categories ordered by type (income/expense) then name.
/// Categories are seeded at startup and currently cannot be created via the API.
fn get_all_categories(
  conn : @sqlite3.Connection,
) -> Array[@shared.Category] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, name, icon, color, cat_type FROM categories ORDER BY cat_type, name",
  )
  let result : Array[@shared.Category] = []
  while stmt.step() {
    result.push(read_category(stmt))
  }
  stmt.finalize()
  result
}

// ── Transaction CRUD ──────────────────────────────────────────────

///|
/// Extract a Transaction from the current row of a prepared statement.
/// Expects columns in order: id, account_id, category_id, amount, txn_type (BLOB),
/// description (BLOB), date (BLOB).
fn read_transaction(stmt : @sqlite3.Statement) -> @shared.Transaction {
  let id : Int = stmt.column(index=0)
  let account_id : Int = stmt.column(index=1)
  let category_id : Int = stmt.column(index=2)
  let amount : Int = stmt.column(index=3)
  let txn_type = @shared.TransactionType::from_string(
    stmt.column_blob_as_string(index=4),
  )
  let description : String = stmt.column_blob_as_string(index=5)
  let date : String = stmt.column_blob_as_string(index=6)
  { id, account_id, category_id, amount, txn_type, description, date }
}

///|
/// Retrieve all transactions ordered by date descending (newest first),
/// with ties broken by ID descending.
fn get_all_transactions(
  conn : @sqlite3.Connection,
) -> Array[@shared.Transaction] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, account_id, category_id, amount, txn_type, description, date FROM transactions ORDER BY date DESC, id DESC",
  )
  let result : Array[@shared.Transaction] = []
  while stmt.step() {
    result.push(read_transaction(stmt))
  }
  stmt.finalize()
  result
}

///|
/// Insert a new transaction and return it with its auto-generated ID.
/// Amount is stored in cents. The `txn_type` should be "income" or "expense",
/// and `date` should be in "YYYY-MM-DD" format.
fn create_transaction(
  conn : @sqlite3.Connection,
  account_id : Int,
  category_id : Int,
  amount : Int,
  txn_type : String,
  description : String,
  date : String,
) -> @shared.Transaction raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "INSERT INTO transactions (account_id, category_id, amount, txn_type, description, date) VALUES (?, ?, ?, ?, ?, ?)",
  )
  stmt.bind(index=1, val=account_id)
  stmt.bind(index=2, val=category_id)
  stmt.bind(index=3, val=amount)
  stmt.bind_string_as_blob(index=4, val=txn_type)
  stmt.bind_string_as_blob(index=5, val=description)
  stmt.bind_string_as_blob(index=6, val=date)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id : Int = stmt2.column(index=0)
  stmt2.finalize()
  {
    id,
    account_id,
    category_id,
    amount,
    txn_type: @shared.TransactionType::from_string(txn_type),
    description,
    date,
  }
}

///|
/// Delete a single transaction by ID.
fn delete_transaction(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM transactions WHERE id = ?")
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
}

// ── Budget CRUD ───────────────────────────────────────────────────

///|
/// Retrieve all budgets for a given month (format "YYYY-MM"), ordered by ID.
fn get_budgets_for_month(
  conn : @sqlite3.Connection,
  month : String,
) -> Array[@shared.Budget] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, category_id, amount_limit, month FROM budgets WHERE month = ? ORDER BY id",
  )
  stmt.bind_string_as_blob(index=1, val=month)
  let result : Array[@shared.Budget] = []
  while stmt.step() {
    let id : Int = stmt.column(index=0)
    let category_id : Int = stmt.column(index=1)
    let amount_limit : Int = stmt.column(index=2)
    let m : String = stmt.column_blob_as_string(index=3)
    result.push({ id, category_id, amount_limit, month: m })
  }
  stmt.finalize()
  result
}

///|
/// Insert or update a budget for a given category and month. If a budget already
/// exists for the same (category_id, month) pair, its amount_limit is updated
/// instead of creating a duplicate. Re-selects the row after upsert because
/// `last_insert_rowid()` is unreliable after ON CONFLICT updates.
fn upsert_budget(
  conn : @sqlite3.Connection,
  category_id : Int,
  amount_limit : Int,
  month : String,
) -> @shared.Budget raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "INSERT INTO budgets (category_id, amount_limit, month) VALUES (?, ?, ?) ON CONFLICT(category_id, month) DO UPDATE SET amount_limit = excluded.amount_limit",
  )
  stmt.bind(index=1, val=category_id)
  stmt.bind(index=2, val=amount_limit)
  stmt.bind_string_as_blob(index=3, val=month)
  stmt.step_once()
  stmt.finalize()
  // Re-select to get the correct id (last_insert_rowid is unreliable after upsert)
  let stmt2 = conn.prepare(
    "SELECT id, category_id, amount_limit, month FROM budgets WHERE category_id = ? AND month = ?",
  )
  stmt2.bind(index=1, val=category_id)
  stmt2.bind_string_as_blob(index=2, val=month)
  guard stmt2.step()
  let id : Int = stmt2.column(index=0)
  stmt2.finalize()
  { id, category_id, amount_limit, month }
}

///|
/// Delete a single budget by ID.
fn delete_budget(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare("DELETE FROM budgets WHERE id = ?")
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
}

// ── Dashboard aggregate ───────────────────────────────────────────

///|
/// Assemble the full dashboard payload for a given month. Fetches all accounts,
/// categories, transactions, and budgets, then computes derived data: account
/// balances, monthly income/expense summary, budget statuses with spending,
/// the 10 most recent transactions, and per-category spending breakdown.
fn get_dashboard(
  conn : @sqlite3.Connection,
  month : String,
) -> @shared.DashboardData raise @sqlite3.SqliteError {
  let accounts = get_all_accounts(conn)
  let categories = get_all_categories(conn)
  let transactions = get_all_transactions(conn)
  let budgets = get_budgets_for_month(conn, month)
  // Account balances
  let account_balances : Array[@shared.AccountBalance] = accounts.map(fn(a) {
    { account: a, balance: @shared.compute_balance(transactions, a.id) }
  })
  // Monthly summary
  let month_summary = @shared.monthly_totals(transactions, month)
  // Budget statuses
  let budget_statuses : Array[@shared.BudgetStatus] = []
  for b in budgets {
    let spent = @shared.spent_in_category(transactions, b.category_id, month)
    let mut cat_name = ""
    let mut cat_color = "#888"
    let mut cat_icon = ""
    for c in categories {
      if c.id == b.category_id {
        cat_name = c.name
        cat_color = c.color
        cat_icon = c.icon
      }
    }
    budget_statuses.push({
      budget: b,
      category_name: cat_name,
      category_color: cat_color,
      category_icon: cat_icon,
      spent,
    })
  }
  // Recent transactions (first 10)
  let recent : Array[@shared.Transaction] = []
  let limit = if transactions.length() < 10 {
    transactions.length()
  } else {
    10
  }
  for i in 0..<limit {
    recent.push(transactions[i])
  }
  // Category spending breakdown
  let category_totals = @shared.category_spending(
    transactions, categories, month,
  )
  {
    account_balances,
    month_summary,
    budget_statuses,
    recent_transactions: recent,
    category_totals,
  }
}
