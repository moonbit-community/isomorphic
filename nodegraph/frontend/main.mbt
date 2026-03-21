///|
#warnings("-alert_unstable")
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model=@app.Model::{
      page: GraphList,
      graphs: [],
      current_graph_id: 0,
      nodes: [],
      connections: [],
      eval_result: None,
      auto_eval: true,
      dragging_node: 0,
      drag_offset_x: 0,
      drag_offset_y: 0,
      connecting_from_node: 0,
      connecting_from_port: 0,
      wire_mouse_x: 0,
      wire_mouse_y: 0,
      wire_start_cx: 0,
      wire_start_cy: 0,
      wire_origin_x: 0,
      wire_origin_y: 0,
      editing_node: 0,
      config_value: "",
      new_graph_name: "",
      show_palette: false,
      palette_cat: "",
      first_load: true,
      loading: false,
      error: "",
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
