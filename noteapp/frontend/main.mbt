///|
#warnings("-alert_unstable")
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model=@app.Model::{
      notes: [],
      title_input: "",
      content_input: "",
      selected_note_id: 0,
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
