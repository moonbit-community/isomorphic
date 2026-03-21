///|
#warnings("-alert_unstable")
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model=@app.Model::{
      polls: [],
      question_input: "",
      option_inputs: ["", ""],
      voted: [],
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
