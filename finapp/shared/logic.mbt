///|
/// Format cents as a dollar string (e.g., 1050 -> "$10.50", -500 -> "-$5.00").
pub fn format_amount(cents : Int) -> String {
  let negative = cents < 0
  let abs_cents = if negative { -cents } else { cents }
  let dollars = abs_cents / 100
  let remainder = abs_cents % 100
  let sign = if negative { "-" } else { "" }
  if remainder < 10 {
    "\{sign}$\{dollars}.0\{remainder}"
  } else {
    "\{sign}$\{dollars}.\{remainder}"
  }
}

///|
/// Parse a dollar amount string to cents (e.g., "10.50" -> 1050, "5" -> 500).
pub fn parse_amount(s : String) -> Int {
  // Split on '.'
  let chars = s.to_array()
  let (dollar_str, after_dot) = for c in chars
    ; found_dot = false, dollar_str = "", after_dot = "" {
    if c == '.' {
      continue true, dollar_str, after_dot
    } else if found_dot {
      continue found_dot, dollar_str, after_dot + c.to_string()
    } else if c >= '0' && c <= '9' {
      continue found_dot, dollar_str + c.to_string(), after_dot
    } else {
      continue found_dot, dollar_str, after_dot
    }
  } nobreak {
    (dollar_str, after_dot)
  }
  let dollars = if !dollar_str.is_empty() {
    @strconv.parse_int(dollar_str) catch { _ => 0 }
  } else {
    0
  }
  let cents = if after_dot.length() == 1 {
    let v = @strconv.parse_int(after_dot) catch { _ => 0 }
    v * 10
  } else if after_dot.length() >= 2 {
    let two = after_dot[0:2].to_string()
    @strconv.parse_int(two) catch { _ => 0 }
  } else {
    0
  }
  dollars * 100 + cents
}

///|
/// Compute account balance from a list of transactions.
pub fn compute_balance(
  transactions : Array[Transaction],
  account_id : Int,
) -> Int {
  transactions
  .filter(fn(t) { t.account_id == account_id })
  .fold(init=0, fn(acc, t) {
    match t.txn_type {
      Income => acc + t.amount
      Expense => acc - t.amount
    }
  })
}

///|
/// Compute monthly income and expenses.
pub fn monthly_totals(
  transactions : Array[Transaction],
  month : String,
) -> MonthSummary {
  let (income, expenses) = for t in transactions; income = 0, expenses = 0 {
    if t.date.length() >= 7 && t.date[0:7].to_string() == month {
      match t.txn_type {
        Income => continue income + t.amount, expenses
        Expense => continue income, expenses + t.amount
      }
    } else {
      continue income, expenses
    }
  } nobreak {
    (income, expenses)
  }
  { month, income, expenses }
}

///|
/// Compute spending by category for a given month (expense categories only).
pub fn category_spending(
  transactions : Array[Transaction],
  categories : Array[Category],
  month : String,
) -> Array[(String, String, Int)] {
  let result : Array[(String, String, Int)] = []
  for cat in categories {
    if cat.cat_type == Expense {
      let total = for t in transactions; total = 0 {
        if t.category_id == cat.id &&
          t.txn_type == Expense &&
          t.date.length() >= 7 &&
          t.date[0:7].to_string() == month {
          continue total + t.amount
        } else {
          continue total
        }
      } nobreak {
        total
      }
      if total > 0 {
        result.push((cat.name, cat.color, total))
      }
    }
  }
  result
}

///|
/// Compute budget progress percentage. Returns (percentage, over_budget).
pub fn budget_progress(spent : Int, limit : Int) -> (Int, Bool) {
  if limit <= 0 {
    return (0, false)
  }
  let pct = spent * 100 / limit
  (pct, spent > limit)
}

///|
/// Compute how much was spent in a category for a given month.
pub fn spent_in_category(
  transactions : Array[Transaction],
  category_id : Int,
  month : String,
) -> Int {
  transactions
  .filter(fn(t) {
    t.category_id == category_id &&
    t.txn_type == Expense &&
    t.date.length() >= 7 &&
    t.date[0:7].to_string() == month
  })
  .fold(init=0, fn(acc, t) { acc + t.amount })
}

///|
/// Validate transaction fields, returning an error message if invalid.
pub fn validate_transaction(
  amount : Int,
  description : String,
  date : String,
) -> String? {
  if amount <= 0 {
    return Some("Amount must be positive")
  }
  if description.is_empty() {
    return Some("Description is required")
  }
  if date.length() != 10 {
    return Some("Date must be YYYY-MM-DD format")
  }
  None
}

///|
/// Validate an account name, returning an error message if invalid.
pub fn validate_account_name(name : String) -> String? {
  if name.is_empty() {
    return Some("Account name is required")
  }
  if name.length() > 50 {
    return Some("Name too long (max 50 chars)")
  }
  None
}
