///|
#warnings("-alert_unstable")
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model=@app.Model(),
    update=(dispatch, msg, model) => model.update(dispatch, msg),
    view=(dispatch, model) => model.view(dispatch),
  )
  let app = @rabbita.new(app_cell)
  // Load data from backend on init (uses @rabbita.attempt for proper enqueue)
  app.with_init(dispatch(LoadFromBackend))
  app.mount("app")
  // Set up WS + polling for real-time sync
  @app.init_sync(dispatch)
}
