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
  let mut dollars = 0
  let mut cents = 0
  let mut found_dot = false
  let mut after_dot = ""
  let chars = s.to_array()
  let mut dollar_str = ""
  for c in chars {
    if c == '.' {
      found_dot = true
    } else if found_dot {
      after_dot = after_dot + c.to_string()
    } else if c >= '0' && c <= '9' {
      dollar_str = dollar_str + c.to_string()
    }
  }
  if dollar_str.length() > 0 {
    dollars = @strconv.parse_int(dollar_str) catch { _ => 0 }
  }
  if after_dot.length() == 1 {
    let v = @strconv.parse_int(after_dot) catch { _ => 0 }
    cents = v * 10
  } else if after_dot.length() >= 2 {
    let two = after_dot[0:2].to_string()
    cents = @strconv.parse_int(two) catch { _ => 0 }
  }
  dollars * 100 + cents
}

///|
/// Compute account balance from a list of transactions.
pub fn compute_balance(
  transactions : Array[Transaction],
  account_id : Int,
) -> Int {
  let mut balance = 0
  for t in transactions {
    if t.account_id == account_id {
      match t.txn_type {
        Income => balance = balance + t.amount
        Expense => balance = balance - t.amount
      }
    }
  }
  balance
}

///|
/// Compute monthly income and expenses.
pub fn monthly_totals(
  transactions : Array[Transaction],
  month : String,
) -> MonthSummary {
  let mut income = 0
  let mut expenses = 0
  for t in transactions {
    if t.date.length() >= 7 && t.date[0:7].to_string() == month {
      match t.txn_type {
        Income => income = income + t.amount
        Expense => expenses = expenses + t.amount
      }
    }
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
      let mut total = 0
      for t in transactions {
        if t.category_id == cat.id &&
          t.txn_type == Expense &&
          t.date.length() >= 7 &&
          t.date[0:7].to_string() == month {
          total = total + t.amount
        }
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
  let mut total = 0
  for t in transactions {
    if t.category_id == category_id &&
      t.txn_type == Expense &&
      t.date.length() >= 7 &&
      t.date[0:7].to_string() == month {
      total = total + t.amount
    }
  }
  total
}

///|
pub fn validate_transaction(
  amount : Int,
  description : String,
  date : String,
) -> String? {
  if amount <= 0 {
    return Some("Amount must be positive")
  }
  if description.length() == 0 {
    return Some("Description is required")
  }
  if date.length() != 10 {
    return Some("Date must be YYYY-MM-DD format")
  }
  None
}

///|
pub fn validate_account_name(name : String) -> String? {
  if name.length() == 0 {
    return Some("Account name is required")
  }
  if name.length() > 50 {
    return Some("Name too long (max 50 chars)")
  }
  None
}
