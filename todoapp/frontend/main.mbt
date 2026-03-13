///|
/// Entry point — wire up the Rabbita app and mount it to the `#app` DOM node.
///
/// Uses `cell_with_dispatch` (not `simple_cell`) because `update` needs the
/// dispatch function to construct async HTTP commands.
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model={ todos: [], input: "", loading: false },
    update~,
    view~,
  )
  let app = @rabbita.new(app_cell)
  app.with_init(dispatch(Init))
  app.mount("app")
}
