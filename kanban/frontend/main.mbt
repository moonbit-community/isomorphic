///|
#warnings("-alert_unstable")
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model=@app.Model::{
      columns: [],
      cards: [],
      adding_to_column: 0,
      new_card_title: "",
      new_card_desc: "",
      new_card_color: "",
      editing_card: 0,
      edit_title: "",
      edit_desc: "",
      edit_color: "",
      adding_column: false,
      new_column_title: "",
      renaming_column: 0,
      rename_column_title: "",
      moving_card: 0,
      loading: false,
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
