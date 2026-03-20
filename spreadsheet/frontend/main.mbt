///|
#warnings("-alert_unstable")
fn main {
  let app_cell = @rabbita.simple_cell(
    model=@app.Model::new(),
    update=(msg, model) => model.update(msg),
    view=(dispatch, model) => model.view(dispatch),
  )
  @rabbita.new(app_cell).mount("app")
}
