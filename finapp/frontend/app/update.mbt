///|
fn fetch_dashboard(
  dispatch : @rabbita.Dispatch[Msg],
  month : String,
) -> @rabbita.Cmd {
  @http.get(
    "\{@shared.api_dashboard}/\{month}",
    expect=Json(
      fn(result) { dispatch(GotDashboard(result)) },
      fn(json) {
        Ok(@json.from_json(json)) catch {
          _ => Err("Failed to decode dashboard")
        }
      },
    ),
  )
}

///|
fn fetch_accounts(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    @shared.api_accounts,
    expect=Json(
      fn(result) { dispatch(GotAccounts(result)) },
      fn(json) {
        Ok(@json.from_json(json)) catch {
          _ => Err("Failed to decode accounts")
        }
      },
    ),
  )
}

///|
fn fetch_transactions(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    @shared.api_transactions,
    expect=Json(
      fn(result) { dispatch(GotTransactions(result)) },
      fn(json) {
        Ok(@json.from_json(json)) catch {
          _ => Err("Failed to decode transactions")
        }
      },
    ),
  )
}

///|
fn fetch_categories(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    @shared.api_categories,
    expect=Json(
      fn(result) { dispatch(GotCategories(result)) },
      fn(json) {
        Ok(@json.from_json(json)) catch {
          _ => Err("Failed to decode categories")
        }
      },
    ),
  )
}

///|
fn fetch_budgets(
  dispatch : @rabbita.Dispatch[Msg],
  month : String,
) -> @rabbita.Cmd {
  @http.get(
    "\{@shared.api_budgets}/\{month}",
    expect=Json(
      fn(result) { dispatch(GotBudgets(result)) },
      fn(json) {
        Ok(@json.from_json(json)) catch {
          _ => Err("Failed to decode budgets")
        }
      },
    ),
  )
}

///|
fn fetch_all(
  dispatch : @rabbita.Dispatch[Msg],
  month : String,
) -> @rabbita.Cmd {
  @rabbita.batch([
    fetch_dashboard(dispatch, month),
    fetch_accounts(dispatch),
    fetch_transactions(dispatch),
    fetch_categories(dispatch),
    fetch_budgets(dispatch, month),
  ])
}

///|
fn parse_int_or(s : String, default : Int) -> Int {
  try {
    @strconv.parse_int(s)
  } catch {
    _ => default
  }
}

///|
#warnings("-unresolved_type_variable")
pub fn Model::update(
  self : Model,
  msg~ : Msg,
  dispatch~ : @rabbita.Dispatch[Msg],
) -> (Model, @rabbita.Cmd) {
  match msg {
    Init => ({ ..self, loading: true }, fetch_all(dispatch, self.current_month))
    GoTo(page) => {
      let cmd = match page {
        Dashboard => fetch_dashboard(dispatch, self.current_month)
        Transactions => fetch_transactions(dispatch)
        Accounts => fetch_accounts(dispatch)
        Budgets => fetch_budgets(dispatch, self.current_month)
      }
      ({ ..self, page, show_form: false, error: "" }, cmd)
    }
    // ── Data loaded ───────────────────────────────────────────────
    GotDashboard(Ok(data)) =>
      ({ ..self, dashboard: Some(data), loading: false }, @rabbita.none)
    GotDashboard(Err(e)) =>
      ({ ..self, error: e, loading: false }, @rabbita.none)
    GotAccounts(Ok(accounts)) =>
      ({ ..self, accounts, loading: false }, @rabbita.none)
    GotAccounts(Err(e)) =>
      ({ ..self, error: e, loading: false }, @rabbita.none)
    GotTransactions(Ok(transactions)) =>
      ({ ..self, transactions, loading: false }, @rabbita.none)
    GotTransactions(Err(e)) =>
      ({ ..self, error: e, loading: false }, @rabbita.none)
    GotCategories(Ok(categories)) =>
      ({ ..self, categories, loading: false }, @rabbita.none)
    GotCategories(Err(_)) => ({ ..self, loading: false }, @rabbita.none)
    GotBudgets(Ok(budgets)) =>
      ({ ..self, budgets, loading: false }, @rabbita.none)
    GotBudgets(Err(_)) => ({ ..self, loading: false }, @rabbita.none)
    // ── Transaction form ──────────────────────────────────────────
    SetFormAmount(v) => ({ ..self, form_amount: v }, @rabbita.none)
    SetFormDesc(v) => ({ ..self, form_desc: v }, @rabbita.none)
    SetFormDate(v) => ({ ..self, form_date: v }, @rabbita.none)
    SetFormAccountId(v) =>
      ({ ..self, form_account_id: parse_int_or(v, 0) }, @rabbita.none)
    SetFormCategoryId(v) =>
      ({ ..self, form_category_id: parse_int_or(v, 0) }, @rabbita.none)
    SetFormType(v) =>
      (
        { ..self, form_type: @shared.TransactionType::from_string(v) },
        @rabbita.none,
      )
    SubmitTransaction => {
      let amount = @shared.parse_amount(self.form_amount)
      if @shared.validate_transaction(amount, self.form_desc, self.form_date)
        is Some(err) {
        return ({ ..self, error: err }, @rabbita.none)
      }
      if self.form_account_id == 0 {
        return ({ ..self, error: "Select an account" }, @rabbita.none)
      }
      if self.form_category_id == 0 {
        return ({ ..self, error: "Select a category" }, @rabbita.none)
      }
      let cmd = @http.post(
        @shared.api_transactions,
        Json(
          {
            "account_id": self.form_account_id.to_json(),
            "category_id": self.form_category_id.to_json(),
            "amount": amount.to_json(),
            "txn_type": self.form_type.to_db_string().to_json(),
            "description": self.form_desc.to_json(),
            "date": self.form_date.to_json(),
          },
        ),
        expect=Json(
          fn(result) { dispatch(TransactionCreated(result)) },
          fn(json) {
            Ok(@json.from_json(json)) catch {
              _ => Err("Failed to decode transaction")
            }
          },
        ),
      )
      ({ ..self, error: "" }, cmd)
    }
    TransactionCreated(Ok(txn)) => {
      let transactions = self.transactions.copy()
      transactions.push(txn)
      (
        {
          ..self,
          transactions,
          form_amount: "",
          form_desc: "",
          show_form: false,
        },
        fetch_dashboard(dispatch, self.current_month),
      )
    }
    TransactionCreated(Err(e)) =>
      ({ ..self, error: e }, @rabbita.none)
    DeleteTransaction(id) => {
      let cmd = @http.delete(
        @shared.api_transaction(id),
        expect=Text(fn(result) {
          dispatch(TransactionDeleted(result.map(fn(_) { id })))
        }),
      )
      (self, cmd)
    }
    TransactionDeleted(Ok(id)) => {
      let transactions = self.transactions.filter(fn(t) { t.id != id })
      (
        { ..self, transactions },
        fetch_dashboard(dispatch, self.current_month),
      )
    }
    TransactionDeleted(Err(_)) => (self, @rabbita.none)
    // ── Account form ──────────────────────────────────────────────
    SetAcctName(v) => ({ ..self, acct_name: v }, @rabbita.none)
    SetAcctType(v) =>
      (
        { ..self, acct_type: @shared.AccountType::from_string(v) },
        @rabbita.none,
      )
    SubmitAccount => {
      if @shared.validate_account_name(self.acct_name) is Some(err) {
        return ({ ..self, error: err }, @rabbita.none)
      }
      let cmd = @http.post(
        @shared.api_accounts,
        Json(
          {
            "name": self.acct_name.to_json(),
            "account_type": self.acct_type.to_db_string().to_json(),
          },
        ),
        expect=Json(
          fn(result) { dispatch(AccountCreated(result)) },
          fn(json) {
            Ok(@json.from_json(json)) catch {
              _ => Err("Failed to decode account")
            }
          },
        ),
      )
      ({ ..self, error: "" }, cmd)
    }
    AccountCreated(Ok(account)) => {
      let accounts = self.accounts.copy()
      accounts.push(account)
      ({ ..self, accounts, acct_name: "", show_form: false }, @rabbita.none)
    }
    AccountCreated(Err(e)) => ({ ..self, error: e }, @rabbita.none)
    DeleteAccount(id) => {
      let cmd = @http.delete(
        @shared.api_account(id),
        expect=Text(fn(result) {
          dispatch(AccountDeleted(result.map(fn(_) { id })))
        }),
      )
      (self, cmd)
    }
    AccountDeleted(Ok(id)) => {
      let accounts = self.accounts.filter(fn(a) { a.id != id })
      let transactions = self.transactions.filter(fn(t) {
        t.account_id != id
      })
      (
        { ..self, accounts, transactions },
        fetch_dashboard(dispatch, self.current_month),
      )
    }
    AccountDeleted(Err(_)) => (self, @rabbita.none)
    // ── Budget form ───────────────────────────────────────────────
    SetBudgetCatId(v) =>
      ({ ..self, budget_cat_id: parse_int_or(v, 0) }, @rabbita.none)
    SetBudgetAmount(v) => ({ ..self, budget_amount: v }, @rabbita.none)
    SetBudgetMonth(v) => ({ ..self, budget_month: v }, @rabbita.none)
    SubmitBudget => {
      let amount = @shared.parse_amount(self.budget_amount)
      if amount <= 0 {
        return (
          { ..self, error: "Budget amount must be positive" },
          @rabbita.none,
        )
      }
      if self.budget_cat_id == 0 {
        return ({ ..self, error: "Select a category" }, @rabbita.none)
      }
      let month = if self.budget_month.length() > 0 {
        self.budget_month
      } else {
        self.current_month
      }
      let cmd = @http.post(
        @shared.api_budgets,
        Json(
          {
            "category_id": self.budget_cat_id.to_json(),
            "amount_limit": amount.to_json(),
            "month": month.to_json(),
          },
        ),
        expect=Json(
          fn(result) { dispatch(BudgetCreated(result)) },
          fn(json) {
            Ok(@json.from_json(json)) catch {
              _ => Err("Failed to decode budget")
            }
          },
        ),
      )
      ({ ..self, error: "" }, cmd)
    }
    BudgetCreated(Ok(budget)) => {
      let budgets = self.budgets.filter(fn(b) {
        !(b.category_id == budget.category_id && b.month == budget.month)
      })
      budgets.push(budget)
      (
        { ..self, budgets, budget_amount: "", show_form: false },
        fetch_dashboard(dispatch, self.current_month),
      )
    }
    BudgetCreated(Err(e)) => ({ ..self, error: e }, @rabbita.none)
    DeleteBudget(id) => {
      let cmd = @http.delete(
        @shared.api_budget(id),
        expect=Text(fn(result) {
          dispatch(BudgetDeleted(result.map(fn(_) { id })))
        }),
      )
      (self, cmd)
    }
    BudgetDeleted(Ok(id)) => {
      let budgets = self.budgets.filter(fn(b) { b.id != id })
      (
        { ..self, budgets },
        fetch_dashboard(dispatch, self.current_month),
      )
    }
    BudgetDeleted(Err(_)) => (self, @rabbita.none)
    // ── Filters ───────────────────────────────────────────────────
    SetFilterAccount(v) =>
      ({ ..self, filter_account: parse_int_or(v, 0) }, @rabbita.none)
    SetFilterType(v) => ({ ..self, filter_type: v }, @rabbita.none)
    // ── UI ────────────────────────────────────────────────────────
    ToggleForm => ({ ..self, show_form: !self.show_form, error: "" }, @rabbita.none)
    ClearError => ({ ..self, error: "" }, @rabbita.none)
  }
}
