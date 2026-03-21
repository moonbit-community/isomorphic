///|
#warnings("-alert_unstable")
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model=@app.Model::{
      page: Dashboard,
      accounts: [],
      transactions: [],
      categories: [],
      budgets: [],
      dashboard: None,
      form_amount: "",
      form_desc: "",
      form_date: "2026-03-20",
      form_account_id: 0,
      form_category_id: 0,
      form_type: Expense,
      acct_name: "",
      acct_type: Checking,
      budget_cat_id: 0,
      budget_amount: "",
      budget_month: "2026-03",
      filter_account: 0,
      filter_type: "all",
      current_month: "2026-03",
      show_form: false,
      error: "",
      loading: false,
    },
    update=fn(dispatch, msg, model : @app.Model) {
      let (model, cmd) = model.update(msg~, dispatch~)
      (cmd, model)
    },
    view=fn(dispatch, model) { model.view(dispatch) },
  )
  let app = @rabbita.new(app_cell)
  app.with_init(dispatch(Init))
  app.mount("app")
}
