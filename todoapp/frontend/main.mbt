///|
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model=@app.Model::{ todos: [], input: "", loading: false },
    update=@app.update,
    view=@app.view,
  )
  let app = @rabbita.new(app_cell)
  app.with_init(dispatch(@app.Init))
  app.mount("app")
}
