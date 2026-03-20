///|
/// Initialize drag-and-drop at the document level so that drops anywhere on
/// the page don't trigger the browser's default file-open behavior. Cards can
/// be dragged from one status column to another; when a card is released over
/// a column marked with `data-drop-zone`, the corresponding Rabbita event
/// handler fires. Drops outside recognized zones are silently ignored.
///
/// Without this global listener the browser would navigate away from the app
/// when a dragged card is accidentally dropped outside a column.
extern "js" fn enable_drag_drop() = "() => { const h = e => e.preventDefault(); document.addEventListener('dragover', h); document.addEventListener('drop', h); }"

///|
/// Save a preference to localStorage.
extern "js" fn _save_pref(key : String, value : String) = "(k, v) => { try { localStorage.setItem(k, v); } catch(e) {} }"

///|
/// Load a preference from localStorage. Returns empty string if not found.
extern "js" fn load_pref(key : String) -> String = "(k) => { try { return localStorage.getItem(k) || ''; } catch(e) { return ''; } }"

///|
#warnings("-alert_unstable")
fn main {
  enable_drag_drop()
  let saved_dark = load_pref("taskflow_dark") == "1"
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model=@app.Model::{
      current_user: None,
      auth_screen: "login",
      auth_username: "",
      auth_password: "",
      auth_error: "",
      auth_loading: false,
      tasks: [],
      members: [],
      activities: [],
      dependencies: [],
      labels: [],
      task_labels: [],
      subtasks: [],
      time_entries: [],
      recurrence_rules: [],
      attachments: [],
      projects: [],
      task_projects: [],
      today: "",
      new_attach_url: "",
      new_attach_label: "",
      filter_status: "",
      filter_assignee: 0,
      filter_priority: "",
      search_query: "",
      filter_urgency: "",
      filter_label: 0,
      filter_project: 0,
      view_mode: "list",
      sort_by: "priority",
      sort_asc: true,
      adding_task: false,
      new_title: "",
      new_desc: "",
      new_priority: "medium",
      new_assignee: 0,
      new_due_date: "",
      editing_task: 0,
      edit_title: "",
      edit_desc: "",
      edit_priority: "",
      edit_assignee: 0,
      edit_due_date: "",
      dark_mode: saved_dark,
      viewing_comments: 0,
      comments: [],
      new_comment: "",
      new_subtask: "",
      new_time_minutes: "",
      new_time_note: "",
      confirm_delete: 0,
      error_msg: "",
      loading: false,
      lang: @shared.Lang::En,
      selected_tasks: [],
      dragging_task_id: 0,
      drag_over_status: "",
      undo_msg: "",
      undo_task_id: 0,
      undo_old_status: "",
    },
    update=fn(dispatch, msg, model : @app.Model) {
      let (model, cmd) = model.update(msg~, dispatch~)
      (cmd, model)
    },
    view=fn(dispatch, model) { model.view(dispatch) },
  )
  let app = @rabbita.new(app_cell)
  app.with_init(dispatch(@app.Init))
  app.mount("app")
}
