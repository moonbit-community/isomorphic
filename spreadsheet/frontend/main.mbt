///|
#warnings("-alert_unstable")
fn main {
  let (_, app_cell) = @rabbita.cell_with_dispatch(
    model=@app.Model(),
    update=(dispatch, msg, model) => model.update(dispatch, msg),
    view=(dispatch, model) => model.view(dispatch),
  )
  @rabbita.new(app_cell).mount("app")
}
