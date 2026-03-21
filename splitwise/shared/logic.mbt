///|
/// Format cents as a dollar string (e.g., 1050 -> "10.50").
pub fn format_amount(cents : Int) -> String {
  let negative = cents < 0
  let abs_cents = if negative { -cents } else { cents }
  let dollars = abs_cents / 100
  let remainder = abs_cents % 100
  let sign = if negative { "-" } else { "" }
  if remainder < 10 {
    "\{sign}\{dollars}.0\{remainder}"
  } else {
    "\{sign}\{dollars}.\{remainder}"
  }
}

///|
/// Compute the net balance for each person across all expenses.
///
/// Positive = owed money (paid more than their share).
/// Negative = owes money (paid less than their share).
/// Returns array of (person_id, net_balance_in_cents).
pub fn compute_balances(
  people : Array[Person],
  expenses : Array[Expense],
) -> Array[(Int, Int)] {
  // Map person id -> net balance
  let balances : Array[(Int, Int)] = []
  // Initialize all to zero
  for p in people {
    balances.push((p.id, 0))
  }
  for expense in expenses {
    let share = expense.amount / expense.split_among.length()
    // The payer gets credited the full amount
    for i in 0..<balances.length() {
      let (pid, bal) = balances[i]
      if pid == expense.paid_by {
        balances[i] = (pid, bal + expense.amount)
      }
    }
    // Each participant (including payer) owes their share
    for participant_id in expense.split_among {
      for i in 0..<balances.length() {
        let (pid, bal) = balances[i]
        if pid == participant_id {
          balances[i] = (pid, bal - share)
        }
      }
    }
  }
  balances
}

///|
/// Compute minimal settlements to resolve all debts.
///
/// Uses a greedy algorithm: repeatedly match the largest debtor
/// with the largest creditor until all balances are zero.
pub fn compute_settlements(
  people : Array[Person],
  expenses : Array[Expense],
) -> Array[Settlement] {
  let balances = compute_balances(people, expenses)
  // Separate into debtors (negative balance) and creditors (positive balance)
  let debtors = balances.filter(fn(b) { b.1 < 0 }).map(fn(b) { (b.0, -b.1) })
  let creditors = balances.filter(fn(b) { b.1 > 0 })
  let settlements : Array[Settlement] = []
  // Greedy: settle largest debts first
  let mut di = 0
  let mut ci = 0
  while di < debtors.length() && ci < creditors.length() {
    let (from_id, debt) = debtors[di]
    let (to_id, credit) = creditors[ci]
    let amount = if debt < credit { debt } else { credit }
    if amount > 0 {
      // Look up names
      let from_name = find_name(people, from_id)
      let to_name = find_name(people, to_id)
      settlements.push({ from_id, from_name, to_id, to_name, amount })
    }
    if debt < credit {
      creditors[ci] = (to_id, credit - debt)
      di += 1
    } else if debt > credit {
      debtors[di] = (from_id, debt - credit)
      ci += 1
    } else {
      di += 1
      ci += 1
    }
  }
  settlements
}

///|
fn find_name(people : Array[Person], id : Int) -> String {
  match people.iter().find_first(fn(p) { p.id == id }) {
    Some(p) => p.name
    None => "Unknown"
  }
}
