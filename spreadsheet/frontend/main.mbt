///|
#warnings("-alert_unstable")
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model=@app.Model(),
    update=(dispatch, msg, model) => model.update(dispatch, msg),
    view=(dispatch, model) => model.view(dispatch),
  )
  let app = @rabbita.new(app_cell)
  // On init: load data from backend + start WebSocket listener
  // Both use @rabbita.attempt to properly enqueue into Rabbita's scheduler
  app.with_init(
    @rabbita.batch([dispatch(LoadFromBackend), @app.ws_listen_cmd(dispatch)]),
  )
  app.mount("app")
  // Set up the global WebSocket connection (JS side)
  @app.init_sync(dispatch)
}
