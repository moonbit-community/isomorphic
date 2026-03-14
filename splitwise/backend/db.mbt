///|
/// Create the people, expenses, and expense_splits tables if they don't already exist.
fn init_db(conn : @sqlite3.Connection) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS people (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  name BLOB NOT NULL
      #|)
    ),
  )
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS expenses (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  description BLOB NOT NULL,
      #|  amount INTEGER NOT NULL,
      #|  paid_by INTEGER NOT NULL REFERENCES people(id)
      #|)
    ),
  )
  stmt2.step_once()
  stmt2.finalize()
  let stmt3 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS expense_splits (
      #|  expense_id INTEGER NOT NULL REFERENCES expenses(id) ON DELETE CASCADE,
      #|  person_id INTEGER NOT NULL REFERENCES people(id),
      #|  PRIMARY KEY (expense_id, person_id)
      #|)
    ),
  )
  stmt3.step_once()
  stmt3.finalize()
}

///|
/// Fetch all people from the database, ordered by id.
fn get_all_people(
  conn : @sqlite3.Connection,
) -> Array[@shared.Person] raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT id, name FROM people ORDER BY id")
  let people : Array[@shared.Person] = []
  while stmt.step() {
    let id : Int = stmt.column(index=0)
    let name : String = stmt.column_blob_as_string(index=1)
    people.push({ id, name })
  }
  stmt.finalize()
  people
}

///|
/// Insert a new person and return the created record with its assigned id.
fn create_person(
  conn : @sqlite3.Connection,
  name : String,
) -> @shared.Person raise @sqlite3.SqliteError {
  let stmt = conn.prepare("INSERT INTO people (name) VALUES (?)")
  stmt.bind_string_as_blob(index=1, val=name)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id : Int = stmt2.column(index=0)
  stmt2.finalize()
  { id, name }
}

///|
/// Return the list of person ids that a given expense is split among.
fn get_splits_for_expense(
  conn : @sqlite3.Connection,
  expense_id : Int,
) -> Array[Int] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT person_id FROM expense_splits WHERE expense_id = ?",
  )
  stmt.bind(index=1, val=expense_id)
  let ids : Array[Int] = []
  while stmt.step() {
    let pid : Int = stmt.column(index=0)
    ids.push(pid)
  }
  stmt.finalize()
  ids
}

///|
/// Fetch all expenses with their split participant lists, ordered by id.
fn get_all_expenses(
  conn : @sqlite3.Connection,
) -> Array[@shared.Expense] raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "SELECT id, description, amount, paid_by FROM expenses ORDER BY id",
  )
  let expenses : Array[@shared.Expense] = []
  while stmt.step() {
    let id : Int = stmt.column(index=0)
    let description : String = stmt.column_blob_as_string(index=1)
    let amount : Int = stmt.column(index=2)
    let paid_by : Int = stmt.column(index=3)
    let split_among = get_splits_for_expense(conn, id)
    expenses.push({ id, description, amount, paid_by, split_among })
  }
  stmt.finalize()
  expenses
}

///|
/// Insert a new expense and its split records, returning the created expense.
fn create_expense(
  conn : @sqlite3.Connection,
  description : String,
  amount : Int,
  paid_by : Int,
  split_among : Array[Int],
) -> @shared.Expense raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "INSERT INTO expenses (description, amount, paid_by) VALUES (?, ?, ?)",
  )
  stmt.bind_string_as_blob(index=1, val=description)
  stmt.bind(index=2, val=amount)
  stmt.bind(index=3, val=paid_by)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("SELECT last_insert_rowid()")
  guard stmt2.step()
  let id : Int = stmt2.column(index=0)
  stmt2.finalize()
  for person_id in split_among {
    let stmt3 = conn.prepare(
      "INSERT INTO expense_splits (expense_id, person_id) VALUES (?, ?)",
    )
    stmt3.bind(index=1, val=id)
    stmt3.bind(index=2, val=person_id)
    stmt3.step_once()
    stmt3.finalize()
  }
  { id, description, amount, paid_by, split_among }
}

///|
/// Delete an expense and its associated split records from the database.
fn delete_expense(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  // Delete splits first (no FK cascade in this SQLite binding)
  let stmt = conn.prepare("DELETE FROM expense_splits WHERE expense_id = ?")
  stmt.bind(index=1, val=id)
  stmt.step_once()
  stmt.finalize()
  let stmt2 = conn.prepare("DELETE FROM expenses WHERE id = ?")
  stmt2.bind(index=1, val=id)
  stmt2.step_once()
  stmt2.finalize()
}

///|
/// Build the full application state: all people, all expenses, and computed settlements.
fn get_state(conn : @sqlite3.Connection) -> @shared.AppState raise @sqlite3.SqliteError {
  let people = get_all_people(conn)
  let expenses = get_all_expenses(conn)
  let settlements = @shared.compute_settlements(people, expenses)
  { people, expenses, settlements }
}
