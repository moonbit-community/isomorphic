///|
#warnings("-alert_unstable")
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model=@app.Model(),
    update=(dispatch, msg, model) => model.update(dispatch, msg),
    view=(dispatch, model) => model.view(dispatch),
  )
  let app = @rabbita.new(app_cell)
  app.with_init(dispatch(LoadFromBackend))
  app.mount("app")
}
