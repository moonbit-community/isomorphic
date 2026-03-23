///|
#warnings("-alert_unstable")
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model=@app.Model(),
    update=(dispatch, msg, model) => model.update(dispatch, msg),
    view=(dispatch, model) => model.view(dispatch),
  )
  let app = @rabbita.new(app_cell)
  app.mount("app")
  // Init sync AFTER mount so dispatch works
  @app.init_sync(dispatch)
}
