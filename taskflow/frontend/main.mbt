///|
/// Application state for the TaskFlow MVU architecture.
struct Model {
  // Auth
  current_user : @shared.User?
  auth_screen : String // "" = none (logged in), "login", "register"
  auth_username : String
  auth_password : String
  auth_error : String
  auth_loading : Bool
  // Board data
  tasks : Array[@shared.Task]
  members : Array[@shared.Member]
  activities : Array[@shared.Activity]
  dependencies : Array[@shared.Dependency]
  today : String
  // Filters
  filter_status : String
  filter_assignee : Int
  filter_priority : String
  search_query : String
  filter_urgency : String
  view_mode : String
  sort_by : String
  sort_asc : Bool
  dark_mode : Bool
  // Task creation
  adding_task : Bool
  new_title : String
  new_desc : String
  new_priority : String
  new_assignee : Int
  new_due_date : String
  // Task editing
  editing_task : Int
  edit_title : String
  edit_desc : String
  edit_priority : String
  edit_assignee : Int
  edit_due_date : String
  // Comments
  viewing_comments : Int
  comments : Array[@shared.Comment]
  new_comment : String
  // Delete confirmation
  confirm_delete : Int
  // Error notification
  error_msg : String
  // Loading
  loading : Bool
  // Language
  lang : @shared.Lang
  // Drag-and-drop
  dragging_task_id : Int
  drag_over_status : String
}

///|
/// All possible user actions and server responses.
enum Msg {
  Init
  GotMe(Result[@shared.User, String])
  GotBoard(Result[@shared.Board, String])
  // Auth
  ShowLogin
  ShowRegister
  AuthUsernameChanged(String)
  AuthPasswordChanged(String)
  SubmitLogin
  SubmitRegister
  AuthResult(Result[@shared.AuthResponse, String])
  Logout
  LoggedOut
  // Filters
  SetFilterStatus(String)
  SetFilterAssignee(Int)
  SetFilterPriority(String)
  SearchChanged(String)
  SetFilterUrgency(String)
  SetViewMode(String)
  SetSortBy(String)
  ToggleSortOrder
  ToggleDarkMode
  // Task creation
  ShowAddTask
  HideAddTask
  NewTitleChanged(String)
  NewDescChanged(String)
  NewPriorityChanged(String)
  NewAssigneeChanged(Int)
  NewDueDateChanged(String)
  AddTask
  TaskAdded(Result[@shared.Task, String])
  // Task editing
  StartEditTask(@shared.Task)
  CancelEditTask
  EditTitleChanged(String)
  EditDescChanged(String)
  EditPriorityChanged(String)
  EditAssigneeChanged(Int)
  EditDueDateChanged(String)
  SaveEditTask
  TaskUpdated
  // Status change
  ChangeStatus(Int, String)
  StatusChanged
  // Delete
  RequestDelete(Int)
  CancelDelete
  ConfirmDelete
  TaskDeleted
  // Dependencies
  AddDep(Int, Int) // task_id, depends_on_id
  RemoveDep(Int, Int)
  DepChanged
  // Comments
  ShowComments(Int)
  HideComments
  GotComments(Result[Array[@shared.Comment], String])
  NewCommentChanged(String)
  AddComment
  CommentAdded(Result[@shared.Comment, String])
  // Keyboard
  KeyPressed(String)
  // Errors
  DismissError
  // Language
  SetLang(@shared.Lang)
  // Drag-and-drop
  DragStartTask(Int)
  DragOverColumn(String)
  DropOnColumn(String)
  DragEnd
}

///|
/// Theme colors based on dark/light mode.
struct Theme {
  bg : String
  card_bg : String
  card_border : String
  text : String
  text_secondary : String
  text_muted : String
  input_bg : String
  input_border : String
  filter_bg : String
  filter_inactive : String
  column_bg : String
}

///|
/// Get theme colors for current mode.
fn get_theme(dark : Bool) -> Theme {
  if dark {
    {
      bg: "#0f172a",
      card_bg: "#1e293b",
      card_border: "#334155",
      text: "#f1f5f9",
      text_secondary: "#94a3b8",
      text_muted: "#64748b",
      input_bg: "#1e293b",
      input_border: "#475569",
      filter_bg: "#1e293b",
      filter_inactive: "#334155",
      column_bg: "#1e293b",
    }
  } else {
    {
      bg: "#f8fafc",
      card_bg: "white",
      card_border: "#f0f0f5",
      text: "#1e293b",
      text_secondary: "#64748b",
      text_muted: "#94a3b8",
      input_bg: "white",
      input_border: "#e2e8f0",
      filter_bg: "white",
      filter_inactive: "#f1f5f9",
      column_bg: "#f8fafc",
    }
  }
}

///|
/// Find a member's ID by their name. Returns 0 if not found.
fn find_member_id_by_name(
  members : Array[@shared.Member],
  name : String,
) -> Int {
  for m in members {
    if m.name == name {
      return m.id
    }
  }
  0
}

///|
/// Issue GET /api/auth/me to check for existing session.
fn fetch_me(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    @shared.api_me,
    expect=Json(fn(result) { dispatch(GotMe(result)) }, fn(json) {
      Ok(@json.from_json(json)) catch {
        _ => Err("Not logged in")
      }
    }),
  )
}

///|
/// Issue GET /api/board and dispatch GotBoard on response.
fn fetch_board(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    @shared.api_board,
    expect=Json(fn(result) { dispatch(GotBoard(result)) }, fn(json) {
      Ok(@json.from_json(json)) catch {
        _ => Err("Failed to decode board")
      }
    }),
  )
}

///|
/// MVU update: handle a message, return new model and optional command.
fn update(
  dispatch : @rabbita.Dispatch[Msg],
  msg : Msg,
  model : Model,
) -> (@rabbita.Cmd, Model) {
  match msg {
    Init => (fetch_me(dispatch), { ..model, loading: true })
    GotMe(Ok(user)) =>
      (
        fetch_board(dispatch),
        {
          ..model,
          current_user: Some(user),
          auth_screen: "",
          auth_loading: false,
        },
      )
    GotMe(Err(_)) =>
      (
        @rabbita.none,
        { ..model, auth_screen: "login", loading: false, auth_loading: false },
      )
    GotBoard(Ok(board)) =>
      (
        @rabbita.none,
        {
          ..model,
          tasks: board.tasks,
          members: board.members,
          activities: board.activities,
          dependencies: board.dependencies,
          today: board.today,
          loading: false,
        },
      )
    GotBoard(Err(e)) =>
      (@rabbita.none, { ..model, loading: false, error_msg: e })
    // ---- Auth ----
    ShowLogin =>
      (
        @rabbita.none,
        {
          ..model,
          auth_screen: "login",
          auth_username: "",
          auth_password: "",
          auth_error: "",
        },
      )
    ShowRegister =>
      (
        @rabbita.none,
        {
          ..model,
          auth_screen: "register",
          auth_username: "",
          auth_password: "",
          auth_error: "",
        },
      )
    AuthUsernameChanged(v) => (@rabbita.none, { ..model, auth_username: v })
    AuthPasswordChanged(v) => (@rabbita.none, { ..model, auth_password: v })
    SubmitLogin => {
      if model.auth_username == "" || model.auth_password == "" {
        return (
          @rabbita.none,
          { ..model, auth_error: @shared.t(model.lang, "fill_all_fields") },
        )
      }
      let username = model.auth_username
      let password = model.auth_password
      let cmd = @http.post(
        @shared.api_login,
        Json(({ "username": username, "password": password } : Json)),
        expect=Json(fn(result) { dispatch(AuthResult(result)) }, fn(json) {
          match json {
            { "error": String(msg), .. } => Err(msg)
            _ =>
              Ok(@json.from_json(json)) catch {
                _ => Err("invalid_credentials")
              }
          }
        }),
      )
      (cmd, { ..model, auth_loading: true, auth_error: "" })
    }
    SubmitRegister => {
      if not(@shared.validate_username(model.auth_username)) {
        return (
          @rabbita.none,
          {
            ..model,
            auth_error: @shared.t(model.lang, "username_hint"),
          },
        )
      }
      if not(@shared.validate_password(model.auth_password)) {
        return (
          @rabbita.none,
          { ..model, auth_error: @shared.t(model.lang, "password_hint") },
        )
      }
      let username = model.auth_username
      let password = model.auth_password
      let cmd = @http.post(
        @shared.api_register,
        Json(({ "username": username, "password": password } : Json)),
        expect=Json(fn(result) { dispatch(AuthResult(result)) }, fn(json) {
          match json {
            { "error": String(msg), .. } => Err(msg)
            _ =>
              Ok(@json.from_json(json)) catch {
                _ => Err("registration_failed")
              }
          }
        }),
      )
      (cmd, { ..model, auth_loading: true, auth_error: "" })
    }
    AuthResult(Ok(resp)) =>
      (
        fetch_board(dispatch),
        {
          ..model,
          current_user: Some(resp.user),
          auth_screen: "",
          auth_loading: false,
          auth_error: "",
          auth_username: "",
          auth_password: "",
        },
      )
    AuthResult(Err(e)) => {
      // Translate at response time so lang switch during request is respected
      let msg = @shared.t_server_error(model.lang, e)
      (@rabbita.none, { ..model, auth_loading: false, auth_error: msg })
    }
    Logout => {
      let cmd = @http.post(
        @shared.api_logout,
        Json(({} : Json)),
        expect=Json(fn(_result) { dispatch(LoggedOut) }, fn(_json) { Ok("") }),
      )
      (cmd, model)
    }
    LoggedOut =>
      (
        @rabbita.none,
        {
          ..model,
          current_user: None,
          auth_screen: "login",
          tasks: [],
          members: [],
          activities: [],
          dependencies: [],
        },
      )
    // ---- Filters ----
    SetFilterStatus(s) => (@rabbita.none, { ..model, filter_status: s })
    SetFilterAssignee(id) => (@rabbita.none, { ..model, filter_assignee: id })
    SetFilterPriority(p) => (@rabbita.none, { ..model, filter_priority: p })
    SearchChanged(q) => (@rabbita.none, { ..model, search_query: q })
    SetFilterUrgency(u) => (@rabbita.none, { ..model, filter_urgency: u })
    SetViewMode(m) => (@rabbita.none, { ..model, view_mode: m })
    SetSortBy(s) => (@rabbita.none, { ..model, sort_by: s })
    ToggleSortOrder => (@rabbita.none, { ..model, sort_asc: not(model.sort_asc) })
    ToggleDarkMode =>
      (@rabbita.none, { ..model, dark_mode: not(model.dark_mode) })
    // ---- Task creation ----
    ShowAddTask =>
      (
        @rabbita.none,
        {
          ..model,
          adding_task: true,
          new_title: "",
          new_desc: "",
          new_priority: "medium",
          new_assignee: 0,
          new_due_date: "",
        },
      )
    HideAddTask => (@rabbita.none, { ..model, adding_task: false })
    NewTitleChanged(v) => (@rabbita.none, { ..model, new_title: v })
    NewDescChanged(v) => (@rabbita.none, { ..model, new_desc: v })
    NewPriorityChanged(v) => (@rabbita.none, { ..model, new_priority: v })
    NewAssigneeChanged(id) => (@rabbita.none, { ..model, new_assignee: id })
    NewDueDateChanged(v) => (@rabbita.none, { ..model, new_due_date: v })
    AddTask => {
      if not(@shared.validate_task_title(model.new_title)) {
        return (@rabbita.none, model)
      }
      let title = model.new_title
      let desc = model.new_desc
      let priority = model.new_priority
      let assignee = model.new_assignee
      let due = model.new_due_date
      let cmd = @http.post(
        @shared.api_tasks,
        Json(
          (
            {
              "title": title,
              "description": desc,
              "priority": priority,
              "assignee_id": assignee.to_double(),
              "due_date": due,
            } : Json),
        ),
        expect=Json(fn(result) { dispatch(TaskAdded(result)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode task")
          }
        }),
      )
      (cmd, { ..model, adding_task: false })
    }
    TaskAdded(Ok(task)) => {
      let tasks = model.tasks.copy()
      tasks.push(task)
      (@rabbita.none, { ..model, tasks, })
    }
    TaskAdded(Err(e)) => (@rabbita.none, { ..model, error_msg: e })
    // ---- Task editing ----
    StartEditTask(task) =>
      (
        @rabbita.none,
        {
          ..model,
          editing_task: task.id,
          edit_title: task.title,
          edit_desc: task.description,
          edit_priority: task.priority,
          edit_assignee: task.assignee_id,
          edit_due_date: task.due_date,
        },
      )
    CancelEditTask => (@rabbita.none, { ..model, editing_task: 0 })
    EditTitleChanged(v) => (@rabbita.none, { ..model, edit_title: v })
    EditDescChanged(v) => (@rabbita.none, { ..model, edit_desc: v })
    EditPriorityChanged(v) => (@rabbita.none, { ..model, edit_priority: v })
    EditAssigneeChanged(id) => (@rabbita.none, { ..model, edit_assignee: id })
    EditDueDateChanged(v) => (@rabbita.none, { ..model, edit_due_date: v })
    SaveEditTask => {
      let id = model.editing_task
      if id == 0 || not(@shared.validate_task_title(model.edit_title)) {
        return (@rabbita.none, model)
      }
      let title = model.edit_title
      let desc = model.edit_desc
      let priority = model.edit_priority
      let assignee = model.edit_assignee
      let due = model.edit_due_date
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(TaskUpdated)
      })
      let cmd = @http.post(
        @shared.api_task(id),
        Json(
          (
            {
              "title": title,
              "description": desc,
              "priority": priority,
              "assignee_id": assignee.to_double(),
              "due_date": due,
            } : Json),
        ),
        expect~,
      )
      // Optimistic update
      let tasks = model.tasks.map(fn(t) {
        if t.id == id {
          {
            ..t,
            title,
            description: desc,
            priority,
            assignee_id: assignee,
            due_date: due,
          }
        } else {
          t
        }
      })
      (cmd, { ..model, tasks, editing_task: 0 })
    }
    TaskUpdated => (fetch_board(dispatch), model)
    // ---- Status change ----
    ChangeStatus(id, new_status) => {
      let mut current_status = ""
      for t in model.tasks {
        if t.id == id {
          current_status = t.status
          break
        }
      }
      if not(@shared.is_valid_transition(current_status, new_status)) {
        return (@rabbita.none, model)
      }
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(StatusChanged)
      })
      let cmd = @http.post(
        @shared.api_task_status(id),
        Json(({ "status": new_status } : Json)),
        expect~,
      )
      // Optimistic update
      let tasks = model.tasks.map(fn(t) {
        if t.id == id {
          { ..t, status: new_status }
        } else {
          t
        }
      })
      (cmd, { ..model, tasks, })
    }
    StatusChanged => (fetch_board(dispatch), model)
    // ---- Delete ----
    RequestDelete(id) => (@rabbita.none, { ..model, confirm_delete: id })
    CancelDelete => (@rabbita.none, { ..model, confirm_delete: 0 })
    ConfirmDelete => {
      let id = model.confirm_delete
      if id == 0 {
        return (@rabbita.none, model)
      }
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(TaskDeleted)
      })
      let cmd = @http.delete(@shared.api_task(id), expect~)
      let tasks = model.tasks.filter(fn(t) { t.id != id })
      (cmd, { ..model, tasks, confirm_delete: 0 })
    }
    TaskDeleted => (fetch_board(dispatch), model)
    // ---- Dependencies ----
    AddDep(task_id, depends_on_id) => {
      let url = @shared.api_task_deps(task_id)
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(DepChanged)
      })
      let cmd = @http.post(
        url,
        Json(({ "depends_on_id": depends_on_id.to_double() } : Json)),
        expect~,
      )
      // Optimistic update
      let deps = model.dependencies.copy()
      deps.push({ task_id, depends_on_id })
      (cmd, { ..model, dependencies: deps })
    }
    RemoveDep(task_id, depends_on_id) => {
      let url = @shared.api_task_deps_remove(task_id)
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(DepChanged)
      })
      let cmd = @http.post(
        url,
        Json(({ "depends_on_id": depends_on_id.to_double() } : Json)),
        expect~,
      )
      // Optimistic update
      let deps = model.dependencies.filter(fn(d) {
        not(d.task_id == task_id && d.depends_on_id == depends_on_id)
      })
      (cmd, { ..model, dependencies: deps })
    }
    DepChanged => (fetch_board(dispatch), model)
    // ---- Comments ----
    ShowComments(task_id) => {
      let url = @shared.api_task_comments(task_id)
      let cmd = @http.get(
        url,
        expect=Json(fn(result) { dispatch(GotComments(result)) }, fn(json) {
          Ok((@json.from_json(json) : Array[@shared.Comment])) catch {
            _ => Err("Failed to decode comments")
          }
        }),
      )
      (
        cmd,
        { ..model, viewing_comments: task_id, comments: [], new_comment: "" },
      )
    }
    HideComments =>
      (@rabbita.none, { ..model, viewing_comments: 0, comments: [] })
    GotComments(Ok(comments)) => (@rabbita.none, { ..model, comments, })
    GotComments(Err(e)) => (@rabbita.none, { ..model, error_msg: e })
    NewCommentChanged(v) => (@rabbita.none, { ..model, new_comment: v })
    AddComment => {
      let task_id = model.viewing_comments
      if task_id == 0 || not(@shared.validate_comment_text(model.new_comment)) {
        return (@rabbita.none, model)
      }
      let text = model.new_comment
      let url = @shared.api_task_comments(task_id)
      let cmd = @http.post(
        url,
        Json(({ "text": text } : Json)),
        expect=Json(fn(result) { dispatch(CommentAdded(result)) }, fn(json) {
          Ok((@json.from_json(json) : @shared.Comment)) catch {
            _ => Err("Failed to decode comment")
          }
        }),
      )
      (cmd, { ..model, new_comment: "" })
    }
    CommentAdded(Ok(comment)) => {
      let comments = [comment, ..model.comments]
      (@rabbita.none, { ..model, comments, })
    }
    CommentAdded(Err(e)) => (@rabbita.none, { ..model, error_msg: e })
    // ---- Keyboard shortcuts ----
    KeyPressed(key) => {
      // Skip shortcuts when typing in forms
      if model.adding_task ||
        model.editing_task != 0 ||
        model.viewing_comments != 0 {
        if key == "Escape" {
          if model.adding_task {
            return (@rabbita.none, { ..model, adding_task: false })
          }
          return (@rabbita.none, { ..model, editing_task: 0 })
        }
        return (@rabbita.none, model)
      }
      // Dismiss dialogs/errors with Escape
      if key == "Escape" {
        if model.viewing_comments != 0 {
          return (@rabbita.none, { ..model, viewing_comments: 0, comments: [] })
        }
        if model.confirm_delete != 0 {
          return (@rabbita.none, { ..model, confirm_delete: 0 })
        }
        if model.error_msg != "" {
          return (@rabbita.none, { ..model, error_msg: "" })
        }
        return (@rabbita.none, model)
      }
      match key {
        "n" =>
          (
            @rabbita.none,
            {
              ..model,
              adding_task: true,
              new_title: "",
              new_desc: "",
              new_priority: "medium",
              new_assignee: 0,
              new_due_date: "",
            },
          )
        "l" => (@rabbita.none, { ..model, view_mode: "list" })
        "b" => (@rabbita.none, { ..model, view_mode: "kanban" })
        "d" => (@rabbita.none, { ..model, dark_mode: not(model.dark_mode) })
        "/" => (@rabbita.none, model) // Search focus handled by browser
        _ => (@rabbita.none, model)
      }
    }
    // ---- Errors ----
    DismissError => (@rabbita.none, { ..model, error_msg: "" })
    // ---- Language ----
    SetLang(l) => (@rabbita.none, { ..model, lang: l, auth_error: "" })
    // ---- Drag-and-drop ----
    DragStartTask(id) =>
      (@rabbita.none, { ..model, dragging_task_id: id })
    DragOverColumn(status) =>
      (@rabbita.none, { ..model, drag_over_status: status })
    DropOnColumn(new_status) => {
      let id = model.dragging_task_id
      if id == 0 {
        return (
          @rabbita.none,
          { ..model, dragging_task_id: 0, drag_over_status: "" },
        )
      }
      let model = { ..model, dragging_task_id: 0, drag_over_status: "" }
      let mut current_status = ""
      for t in model.tasks {
        if t.id == id {
          current_status = t.status
          break
        }
      }
      if current_status == new_status ||
        not(@shared.is_valid_transition(current_status, new_status)) {
        return (@rabbita.none, model)
      }
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(StatusChanged)
      })
      let cmd = @http.post(
        @shared.api_task_status(id),
        Json(({ "status": new_status } : Json)),
        expect~,
      )
      let tasks = model.tasks.map(fn(t) {
        if t.id == id { { ..t, status: new_status } } else { t }
      })
      (cmd, { ..model, tasks })
    }
    DragEnd =>
      (@rabbita.none, { ..model, dragging_task_id: 0, drag_over_status: "" })
  }
}

// ========== View ==========

///|
/// Render the login/register screen.
fn view_auth(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
  theme : Theme,
) -> @rabbita.Html {
  let lang = model.lang
  let is_login = model.auth_screen == "login"
  let title = if is_login {
    @shared.t(lang, "sign_in")
  } else {
    @shared.t(lang, "create_account")
  }
  let submit_label = if is_login {
    @shared.t(lang, "sign_in")
  } else {
    @shared.t(lang, "register")
  }
  let switch_label = if is_login {
    @shared.t(lang, "need_account")
  } else {
    @shared.t(lang, "have_account")
  }
  let on_submit = if is_login {
    dispatch(SubmitLogin)
  } else {
    dispatch(SubmitRegister)
  }
  let on_switch = if is_login {
    dispatch(ShowRegister)
  } else {
    dispatch(ShowLogin)
  }
  @html.div(
    style=[
      "min-height: 100vh", "display: flex", "align-items: center", "justify-content: center",
      "background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
    ],
    [
      @html.div(
        style=[
          "background: \{theme.card_bg}",
          "border-radius: 16px",
          "padding: 40px",
          "width: 380px",
          "box-shadow: 0 20px 60px rgba(0,0,0,0.3)",
        ],
        [
          @html.h1(
            style=[
              "color: \{theme.text}",
              "font-size: 24px",
              "font-weight: 700",
              "text-align: center",
              "margin-bottom: 8px",
            ],
            @shared.t(lang, "app_title"),
          ),
          @html.p(
            style=[
              "color: \{theme.text_secondary}",
              "font-size: 14px",
              "text-align: center",
              "margin-bottom: 24px",
            ],
            [@html.text(title)],
          ),
          // Error message
          if model.auth_error != "" {
            @html.div(
              style=[
                "background: #fef2f2", "color: #dc2626", "padding: 10px 14px", "border-radius: 8px",
                "font-size: 13px", "margin-bottom: 16px", "border: 1px solid #fecaca",
              ],
              [@html.text(model.auth_error)],
            )
          } else {
            @html.text("")
          },
          // Username
          @html.div(style=["margin-bottom: 14px"], [
            @html.label(
              style=[
                "display: block",
                "font-size: 13px",
                "font-weight: 500",
                "color: \{theme.text_secondary}",
                "margin-bottom: 4px",
              ],
              [@html.text(@shared.t(lang, "username"))],
            ),
            @html.input(
              input_type=Text,
              value=model.auth_username,
              placeholder=@shared.t(lang, "enter_username"),
              on_input=fn(v) { dispatch(AuthUsernameChanged(v)) },
              style=[
                "width: 100%",
                "padding: 10px 12px",
                "border-radius: 8px",
                "border: 1px solid \{theme.input_border}",
                "background: \{theme.input_bg}",
                "color: \{theme.text}",
                "font-size: 14px",
                "box-sizing: border-box",
                "outline: none",
              ],
              "",
            ),
          ]),
          // Password
          @html.div(style=["margin-bottom: 20px"], [
            @html.label(
              style=[
                "display: block",
                "font-size: 13px",
                "font-weight: 500",
                "color: \{theme.text_secondary}",
                "margin-bottom: 4px",
              ],
              [@html.text(@shared.t(lang, "password"))],
            ),
            @html.input(
              input_type=Password,
              value=model.auth_password,
              placeholder=@shared.t(lang, "enter_password"),
              on_input=fn(v) { dispatch(AuthPasswordChanged(v)) },
              style=[
                "width: 100%",
                "padding: 10px 12px",
                "border-radius: 8px",
                "border: 1px solid \{theme.input_border}",
                "background: \{theme.input_bg}",
                "color: \{theme.text}",
                "font-size: 14px",
                "box-sizing: border-box",
                "outline: none",
              ],
              "",
            ),
          ]),
          // Submit button
          @html.button(
            on_click=on_submit,
            style=[
              "width: 100%",
              "padding: 12px",
              "border: none",
              "border-radius: 8px",
              "cursor: pointer",
              "font-size: 14px",
              "font-weight: 600",
              "color: white",
              "background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              "margin-bottom: 12px",
              if model.auth_loading {
                "opacity: 0.7"
              } else {
                "opacity: 1"
              },
            ],
            if model.auth_loading {
              "..."
            } else {
              submit_label
            },
          ),
          // Switch link
          @html.div(style=["text-align: center"], [
            @html.button(
              on_click=on_switch,
              style=[
                "background: none", "border: none", "color: #6366f1", "cursor: pointer",
                "font-size: 13px", "padding: 0",
              ],
              switch_label,
            ),
          ]),
          // Language toggle
          @html.div(style=["text-align: center", "margin-top: 16px"], [
            @html.button(
              on_click=dispatch(
                SetLang(
                  if lang == @shared.Lang::En {
                    @shared.Lang::Zh
                  } else {
                    @shared.Lang::En
                  },
                ),
              ),
              style=[
                "background: none", "border: 1px solid #6366f1", "color: #6366f1", "cursor: pointer",
                "font-size: 12px", "padding: 4px 12px", "border-radius: 12px",
              ],
              if lang == @shared.Lang::En { "中文" } else { "EN" },
            ),
          ]),
        ],
      ),
    ],
  )
}

///|
/// Render the header with app title and stats.
fn view_header(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  let pct = @shared.completion_percent(model.tasks)
  let total = model.tasks.length()
  let done = @shared.count_by_status(model.tasks, "done")
  @html.div(
    style=[
      "background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)", "padding: 20px 32px",
      "margin-bottom: 16px", "border-radius: 12px", "display: flex", "justify-content: space-between",
      "align-items: center",
    ],
    [
      @html.div(style=[], [
        @html.h1(
          style=[
            "color: white", "font-size: 22px", "font-weight: 700", "letter-spacing: -0.3px",
            "margin-bottom: 4px",
          ],
          @shared.t(model.lang, "app_title"),
        ),
        @html.div(style=["color: rgba(255,255,255,0.8)", "font-size: 13px"], [
          @html.text(@shared.t_complete(model.lang, pct)),
          @html.span(
            style=["margin-left: 12px", "color: rgba(255,255,255,0.6)"],
            @shared.t_tasks_done(model.lang, done, total),
          ),
        ]),
      ]),
      // Progress bar + controls
      @html.div(style=["display: flex", "align-items: center", "gap: 12px"], [
        @html.div(
          style=[
            "width: 120px", "height: 6px", "background: rgba(255,255,255,0.2)", "border-radius: 3px",
            "overflow: hidden",
          ],
          [
            @html.div(
              style=[
                "width: \{pct}%",
                "height: 100%",
                "background: #a5f3fc",
                "border-radius: 3px",
                "transition: width 0.3s",
              ],
              [@html.text("")],
            ),
          ],
        ),
        // View mode toggle
        @html.div(style=["display: flex", "gap: 2px"], [
          {
            let is_list = model.view_mode == "list"
            let bg = if is_list {
              "rgba(255,255,255,0.3)"
            } else {
              "rgba(255,255,255,0.1)"
            }
            @html.button(
              on_click=dispatch(SetViewMode("list")),
              style=[
                "padding: 6px 10px",
                "border: none",
                "cursor: pointer",
                "font-size: 12px",
                "color: white",
                "border-radius: 4px 0 0 4px",
                "background: \{bg}",
              ],
              @shared.t(model.lang, "list"),
            )
          },
          {
            let is_board = model.view_mode == "kanban"
            let bg = if is_board {
              "rgba(255,255,255,0.3)"
            } else {
              "rgba(255,255,255,0.1)"
            }
            @html.button(
              on_click=dispatch(SetViewMode("kanban")),
              style=[
                "padding: 6px 10px",
                "border: none",
                "cursor: pointer",
                "font-size: 12px",
                "color: white",
                "border-radius: 0 4px 4px 0",
                "background: \{bg}",
              ],
              @shared.t(model.lang, "board"),
            )
          },
        ]),
        // My Tasks toggle
        match model.current_user {
          Some(user) => {
            let my_member_id = find_member_id_by_name(
              model.members,
              user.username,
            )
            let is_active = model.filter_assignee == my_member_id &&
              my_member_id != 0
            let bg = if is_active {
              "rgba(255,255,255,0.35)"
            } else {
              "rgba(255,255,255,0.1)"
            }
            let target = if is_active { 0 } else { my_member_id }
            @html.button(
              on_click=dispatch(SetFilterAssignee(target)),
              style=[
                "padding: 6px 10px",
                "border: none",
                "cursor: pointer",
                "font-size: 12px",
                "color: white",
                "border-radius: 4px",
                "background: \{bg}",
                "font-weight: 500",
              ],
              @shared.t(model.lang, "my_tasks"),
            )
          }
          None => @html.text("")
        },
        // Dark mode toggle
        {
          let icon = if model.dark_mode {
            @shared.t(model.lang, "light")
          } else {
            @shared.t(model.lang, "dark")
          }
          @html.button(
            on_click=dispatch(ToggleDarkMode),
            style=[
              "padding: 6px 10px", "border: none", "cursor: pointer", "font-size: 12px",
              "color: white", "border-radius: 4px", "background: rgba(255,255,255,0.15)",
            ],
            icon,
          )
        },
        // Language toggle
        {
          let (label, target_lang) : (String, @shared.Lang) = match model.lang {
            En => ("中文", @shared.Lang::Zh)
            Zh => ("EN", @shared.Lang::En)
          }
          @html.button(
            on_click=dispatch(SetLang(target_lang)),
            style=[
              "padding: 6px 10px", "border: none", "cursor: pointer", "font-size: 12px",
              "color: white", "border-radius: 4px", "background: rgba(255,255,255,0.15)",
            ],
            label,
          )
        },
        if model.adding_task {
          @html.text("")
        } else {
          @html.button(
            on_click=dispatch(ShowAddTask),
            style=[
              "padding: 8px 16px", "background: rgba(255,255,255,0.2)", "color: white",
              "border: 1px solid rgba(255,255,255,0.3)", "border-radius: 6px", "cursor: pointer",
              "font-size: 13px",
            ],
            @shared.t(model.lang, "new_task"),
          )
        },
        // User info + logout
        match model.current_user {
          Some(user) => {
            let color = @shared.member_color(user.color)
            let initial = @shared.member_initial(user.username)
            @html.div(
              style=[
                "display: flex", "align-items: center", "gap: 8px", "margin-left: 8px",
              ],
              [
                @html.div(
                  style=[
                    "width: 28px",
                    "height: 28px",
                    "border-radius: 50%",
                    "display: flex",
                    "align-items: center",
                    "justify-content: center",
                    "font-size: 12px",
                    "font-weight: 600",
                    "color: white",
                    "background: \{color}",
                  ],
                  [@html.text(initial)],
                ),
                @html.span(
                  style=[
                    "color: rgba(255,255,255,0.9)", "font-size: 13px", "font-weight: 500",
                  ],
                  user.username,
                ),
                @html.button(
                  on_click=dispatch(Logout),
                  style=[
                    "padding: 4px 10px", "border: none", "cursor: pointer", "font-size: 11px",
                    "color: rgba(255,255,255,0.8)", "border-radius: 4px", "background: rgba(255,255,255,0.1)",
                  ],
                  @shared.t(model.lang, "logout"),
                ),
              ],
            )
          }
          None => @html.text("")
        },
      ]),
    ],
  )
}

///|
/// Render filter buttons for status, priority, assignee, and search.
fn view_filters(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  let theme = get_theme(model.dark_mode)
  @html.div(
    style=[
      "display: flex",
      "gap: 16px",
      "margin-bottom: 16px",
      "flex-wrap: wrap",
      "align-items: center",
      "padding: 12px 16px",
      "background: \{theme.filter_bg}",
      "border-radius: 10px",
      "border: 1px solid \{theme.input_border}",
    ],
    [
      // Search input
      @html.div(style=["display: flex", "align-items: center", "gap: 6px"], [
        @html.span(
          style=["font-size: 12px", "color: \{theme.text_muted}"],
          @shared.t(model.lang, "search"),
        ),
        @html.input(
          input_type=Text,
          placeholder=@shared.t(model.lang, "search_placeholder"),
          value=model.search_query,
          on_input=fn(v) { dispatch(SearchChanged(v)) },
          style=[
            "padding: 4px 10px",
            "border: 1px solid \{theme.input_border}",
            "border-radius: 6px",
            "font-size: 12px",
            "outline: none",
            "width: 150px",
            "background: \{theme.input_bg}",
            "color: \{theme.text}",
          ],
          "",
        ),
      ]),
      // Status filter
      @html.div(
        style=["display: flex", "gap: 4px", "align-items: center"],
        {
          let items : Array[@rabbita.Html] = [
            @html.span(
              style=[
                "font-size: 12px",
                "color: \{theme.text_muted}",
                "margin-right: 4px",
              ],
              @shared.t(model.lang, "status"),
            ),
            {
              let is_sel = model.filter_status == ""
              let bg = if is_sel { "#4f46e5" } else { theme.filter_inactive }
              let fg = if is_sel { "white" } else { theme.text_secondary }
              @html.button(
                on_click=dispatch(SetFilterStatus("")),
                style=[
                  "padding: 3px 10px",
                  "border-radius: 12px",
                  "border: none",
                  "cursor: pointer",
                  "font-size: 11px",
                  "background: \{bg}",
                  "color: \{fg}",
                ],
                @shared.t(model.lang, "all"),
              )
            },
          ]
          for s in @shared.valid_statuses {
            let is_sel = model.filter_status == s
            let bg = if is_sel {
              @shared.status_color(s)
            } else {
              theme.filter_inactive
            }
            let fg = if is_sel { "white" } else { theme.text_secondary }
            items.push(
              @html.button(
                on_click=dispatch(SetFilterStatus(s)),
                style=[
                  "padding: 3px 10px",
                  "border-radius: 12px",
                  "border: none",
                  "cursor: pointer",
                  "font-size: 11px",
                  "background: \{bg}",
                  "color: \{fg}",
                ],
                @shared.t_status(model.lang, s),
              ),
            )
          }
          items
        },
      ),
      // Priority filter
      @html.div(
        style=["display: flex", "gap: 4px", "align-items: center"],
        {
          let items : Array[@rabbita.Html] = [
            @html.span(
              style=[
                "font-size: 12px",
                "color: \{theme.text_muted}",
                "margin-right: 4px",
              ],
              @shared.t(model.lang, "priority_filter"),
            ),
            {
              let is_sel = model.filter_priority == ""
              let bg = if is_sel { "#4f46e5" } else { theme.filter_inactive }
              let fg = if is_sel { "white" } else { theme.text_secondary }
              @html.button(
                on_click=dispatch(SetFilterPriority("")),
                style=[
                  "padding: 3px 10px",
                  "border-radius: 12px",
                  "border: none",
                  "cursor: pointer",
                  "font-size: 11px",
                  "background: \{bg}",
                  "color: \{fg}",
                ],
                @shared.t(model.lang, "all"),
              )
            },
          ]
          for p in @shared.valid_priorities {
            let is_sel = model.filter_priority == p
            let bg = if is_sel {
              @shared.priority_color(p)
            } else {
              theme.filter_inactive
            }
            let fg = if is_sel { "white" } else { theme.text_secondary }
            items.push(
              @html.button(
                on_click=dispatch(SetFilterPriority(p)),
                style=[
                  "padding: 3px 10px",
                  "border-radius: 12px",
                  "border: none",
                  "cursor: pointer",
                  "font-size: 11px",
                  "background: \{bg}",
                  "color: \{fg}",
                ],
                @shared.t_priority(model.lang, p),
              ),
            )
          }
          items
        },
      ),
      // Assignee filter
      @html.div(
        style=["display: flex", "gap: 4px", "align-items: center"],
        {
          let items : Array[@rabbita.Html] = [
            @html.span(
              style=[
                "font-size: 12px",
                "color: \{theme.text_muted}",
                "margin-right: 4px",
              ],
              @shared.t(model.lang, "assignee_filter"),
            ),
            {
              let is_sel = model.filter_assignee == 0
              let border = if is_sel {
                "2px solid #4f46e5"
              } else {
                "2px solid transparent"
              }
              @html.div(
                on_click=dispatch(SetFilterAssignee(0)),
                style=[
                  "width: 26px",
                  "height: 26px",
                  "border-radius: 50%",
                  "background: #e2e8f0",
                  "cursor: pointer",
                  "display: flex",
                  "align-items: center",
                  "justify-content: center",
                  "font-size: 10px",
                  "color: #94a3b8",
                  "border: \{border}",
                ],
                [@html.text(@shared.t(model.lang, "all"))],
              )
            },
          ]
          for m in model.members {
            let is_sel = model.filter_assignee == m.id
            let bg = @shared.member_color(m.color)
            let border = if is_sel {
              "2px solid #4f46e5"
            } else {
              "2px solid transparent"
            }
            let initial = @shared.member_initial(m.name)
            items.push(
              @html.div(
                on_click=dispatch(SetFilterAssignee(m.id)),
                style=[
                  "width: 26px",
                  "height: 26px",
                  "border-radius: 50%",
                  "cursor: pointer",
                  "display: flex",
                  "align-items: center",
                  "justify-content: center",
                  "font-size: 11px",
                  "color: white",
                  "font-weight: 600",
                  "background: \{bg}",
                  "border: \{border}",
                ],
                [@html.text(initial)],
              ),
            )
          }
          items
        },
      ),
      // Urgency filter
      @html.div(
        style=["display: flex", "gap: 4px", "align-items: center"],
        {
          let urgency_options = [
            ("", @shared.t(model.lang, "all")),
            ("overdue", @shared.t(model.lang, "overdue")),
            ("due_today", @shared.t(model.lang, "today")),
            ("has_deadline", @shared.t(model.lang, "has_due")),
            ("no_deadline", @shared.t(model.lang, "no_due")),
          ]
          let items : Array[@rabbita.Html] = [
            @html.span(
              style=[
                "font-size: 12px",
                "color: \{theme.text_muted}",
                "margin-right: 4px",
              ],
              @shared.t(model.lang, "due_filter"),
            ),
          ]
          for opt in urgency_options {
            let is_sel = model.filter_urgency == opt.0
            let bg = if is_sel { "#4f46e5" } else { theme.filter_inactive }
            let fg = if is_sel { "white" } else { theme.text_secondary }
            items.push(
              @html.button(
                on_click=dispatch(SetFilterUrgency(opt.0)),
                style=[
                  "padding: 3px 10px",
                  "border-radius: 12px",
                  "border: none",
                  "cursor: pointer",
                  "font-size: 11px",
                  "background: \{bg}",
                  "color: \{fg}",
                ],
                opt.1,
              ),
            )
          }
          items
        },
      ),
      // Sort controls
      @html.div(
        style=["display: flex", "gap: 4px", "align-items: center"],
        {
          let items : Array[@rabbita.Html] = [
            @html.span(
              style=[
                "font-size: 12px",
                "color: \{theme.text_muted}",
                "margin-right: 4px",
              ],
              @shared.t(model.lang, "sort"),
            ),
          ]
          for opt in @shared.sort_options {
            let is_sel = model.sort_by == opt
            let bg = if is_sel { "#4f46e5" } else { theme.filter_inactive }
            let fg = if is_sel { "white" } else { theme.text_secondary }
            items.push(
              @html.button(
                on_click=dispatch(SetSortBy(opt)),
                style=[
                  "padding: 3px 10px",
                  "border-radius: 12px",
                  "border: none",
                  "cursor: pointer",
                  "font-size: 11px",
                  "background: \{bg}",
                  "color: \{fg}",
                ],
                @shared.t(model.lang, "sort_\{opt}"),
              ),
            )
          }
          // Ascending/Descending toggle
          items.push(
            @html.button(
              on_click=dispatch(ToggleSortOrder),
              style=[
                "padding: 3px 8px",
                "border-radius: 12px",
                "border: 1px solid \{theme.input_border}",
                "cursor: pointer",
                "font-size: 11px",
                "background: \{theme.filter_inactive}",
                "color: \{theme.text_secondary}",
              ],
              if model.sort_asc { "↑" } else { "↓" },
            ),
          )
          items
        },
      ),
    ],
  )
}

///|
/// Render a row of member avatars for assignee selection in forms.
fn view_assignee_picker(
  dispatch : @rabbita.Dispatch[Msg],
  members : Array[@shared.Member],
  current : Int,
  on_change : (Int) -> Msg,
) -> @rabbita.Html {
  @html.div(
    style=[
      "display: flex", "gap: 4px", "margin-bottom: 8px", "flex-wrap: wrap", "align-items: center",
    ],
    {
      let items : Array[@rabbita.Html] = [
        {
          let is_sel = current == 0
          let border = if is_sel {
            "2px solid #1e293b"
          } else {
            "2px solid transparent"
          }
          @html.div(
            on_click=dispatch(on_change(0)),
            style=[
              "width: 28px",
              "height: 28px",
              "border-radius: 50%",
              "background: #e2e8f0",
              "cursor: pointer",
              "display: flex",
              "align-items: center",
              "justify-content: center",
              "font-size: 11px",
              "color: #94a3b8",
              "border: \{border}",
            ],
            [@html.text("—")],
          )
        },
      ]
      for m in members {
        let bg = @shared.member_color(m.color)
        let is_sel = current == m.id
        let border = if is_sel {
          "2px solid #1e293b"
        } else {
          "2px solid transparent"
        }
        let initial = @shared.member_initial(m.name)
        items.push(
          @html.div(
            on_click=dispatch(on_change(m.id)),
            style=[
              "width: 28px",
              "height: 28px",
              "border-radius: 50%",
              "cursor: pointer",
              "display: flex",
              "align-items: center",
              "justify-content: center",
              "font-size: 11px",
              "color: white",
              "font-weight: 600",
              "background: \{bg}",
              "border: \{border}",
            ],
            [@html.text(initial)],
          ),
        )
      }
      items
    },
  )
}

///|
/// Render a row of priority buttons for selection in forms.
fn view_priority_picker(
  dispatch : @rabbita.Dispatch[Msg],
  current : String,
  on_change : (String) -> Msg,
  lang~ : @shared.Lang = @shared.Lang::En,
) -> @rabbita.Html {
  @html.div(
    style=["display: flex", "gap: 4px", "margin-bottom: 8px"],
    @shared.valid_priorities.map(fn(p) {
      let is_sel = p == current
      let bg = if is_sel { @shared.priority_color(p) } else { "#f1f5f9" }
      let fg = if is_sel { "white" } else { "#64748b" }
      @html.button(
        on_click=dispatch(on_change(p)),
        style=[
          "padding: 4px 12px",
          "border-radius: 12px",
          "border: none",
          "cursor: pointer",
          "font-size: 12px",
          "background: \{bg}",
          "color: \{fg}",
        ],
        @shared.t_priority(lang, p),
      )
    }),
  )
}

///|
/// Render the form for creating a new task.
fn view_add_task_form(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  let theme = get_theme(model.dark_mode)
  @html.div(
    style=[
      "background: \{theme.card_bg}",
      "border-radius: 10px",
      "padding: 16px",
      "border: 2px dashed #c7d2fe",
      "margin-bottom: 16px",
    ],
    [
      @html.div(
        style=[
          "font-size: 14px",
          "font-weight: 600",
          "color: \{theme.text}",
          "margin-bottom: 12px",
        ],
        [@html.text(@shared.t(model.lang, "new_task_title"))],
      ),
      @html.input(
        input_type=Text,
        placeholder=@shared.t(model.lang, "task_title_placeholder"),
        value=model.new_title,
        on_input=fn(v) { dispatch(NewTitleChanged(v)) },
        style=[
          "width: 100%",
          "padding: 8px 10px",
          "border: 1px solid \{theme.input_border}",
          "border-radius: 6px",
          "font-size: 14px",
          "outline: none",
          "margin-bottom: 8px",
          "background: \{theme.input_bg}",
          "color: \{theme.text}",
        ],
        "",
      ),
      @html.textarea(
        placeholder=@shared.t(model.lang, "desc_placeholder"),
        value=model.new_desc,
        on_input=fn(v) { dispatch(NewDescChanged(v)) },
        rows=2,
        style=[
          "width: 100%",
          "padding: 8px 10px",
          "border: 1px solid \{theme.input_border}",
          "border-radius: 6px",
          "font-size: 13px",
          "outline: none",
          "resize: vertical",
          "font-family: inherit",
          "margin-bottom: 8px",
          "background: \{theme.input_bg}",
          "color: \{theme.text}",
        ],
        "",
      ),
      @html.div(
        style=[
          "display: flex", "gap: 16px", "margin-bottom: 8px", "flex-wrap: wrap",
        ],
        [
          @html.div(style=[], [
            @html.div(
              style=[
                "font-size: 12px",
                "color: \{theme.text_muted}",
                "margin-bottom: 4px",
              ],
              [@html.text(@shared.t(model.lang, "priority"))],
            ),
            view_priority_picker(dispatch, model.new_priority, fn(p) {
              NewPriorityChanged(p)
            }, lang=model.lang),
          ]),
          @html.div(style=[], [
            @html.div(
              style=[
                "font-size: 12px",
                "color: \{theme.text_muted}",
                "margin-bottom: 4px",
              ],
              [@html.text(@shared.t(model.lang, "assignee"))],
            ),
            view_assignee_picker(dispatch, model.members, model.new_assignee, fn(
              id,
            ) {
              NewAssigneeChanged(id)
            }),
          ]),
          @html.div(style=[], [
            @html.div(
              style=[
                "font-size: 12px",
                "color: \{theme.text_muted}",
                "margin-bottom: 4px",
              ],
              [@html.text(@shared.t(model.lang, "due_date"))],
            ),
            @html.input(
              input_type=Text,
              placeholder="YYYY-MM-DD",
              value=model.new_due_date,
              on_input=fn(v) { dispatch(NewDueDateChanged(v)) },
              style=[
                "padding: 6px 10px",
                "border: 1px solid \{theme.input_border}",
                "border-radius: 6px",
                "font-size: 13px",
                "outline: none",
                "width: 130px",
                "background: \{theme.input_bg}",
                "color: \{theme.text}",
              ],
              "",
            ),
          ]),
        ],
      ),
      @html.div(style=["display: flex", "gap: 6px"], [
        @html.button(
          on_click=dispatch(AddTask),
          style=[
            "padding: 6px 14px", "background: #4f46e5", "color: white", "border: none",
            "border-radius: 6px", "cursor: pointer", "font-size: 13px",
          ],
          @shared.t(model.lang, "create_task"),
        ),
        @html.button(
          on_click=dispatch(HideAddTask),
          style=[
            "padding: 6px 14px",
            "background: \{theme.filter_inactive}",
            "color: \{theme.text_secondary}",
            "border: none",
            "border-radius: 6px",
            "cursor: pointer",
            "font-size: 13px",
          ],
          @shared.t(model.lang, "cancel"),
        ),
      ]),
    ],
  )
}

///|
/// Render the inline edit form for a task.
fn view_edit_task_form(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  let theme = get_theme(model.dark_mode)
  @html.div(
    style=[
      "background: \{theme.card_bg}",
      "border-radius: 8px",
      "padding: 14px",
      "border: 1px solid #4f46e5",
      "margin-bottom: 8px",
    ],
    [
      @html.input(
        input_type=Text,
        placeholder=@shared.t(model.lang, "task_title_placeholder"),
        value=model.edit_title,
        on_input=fn(v) { dispatch(EditTitleChanged(v)) },
        style=[
          "width: 100%",
          "padding: 6px 8px",
          "border: 1px solid \{theme.input_border}",
          "border-radius: 4px",
          "font-size: 13px",
          "outline: none",
          "margin-bottom: 6px",
          "background: \{theme.input_bg}",
          "color: \{theme.text}",
        ],
        "",
      ),
      @html.textarea(
        placeholder=@shared.t(model.lang, "desc_placeholder"),
        value=model.edit_desc,
        on_input=fn(v) { dispatch(EditDescChanged(v)) },
        rows=2,
        style=[
          "width: 100%",
          "padding: 6px 8px",
          "border: 1px solid \{theme.input_border}",
          "border-radius: 4px",
          "font-size: 12px",
          "outline: none",
          "resize: vertical",
          "font-family: inherit",
          "margin-bottom: 6px",
          "background: \{theme.input_bg}",
          "color: \{theme.text}",
        ],
        "",
      ),
      @html.div(
        style=[
          "display: flex", "gap: 12px", "margin-bottom: 6px", "flex-wrap: wrap",
        ],
        [
          @html.div(style=[], [
            @html.div(
              style=[
                "font-size: 11px",
                "color: \{theme.text_muted}",
                "margin-bottom: 2px",
              ],
              [@html.text(@shared.t(model.lang, "priority"))],
            ),
            view_priority_picker(dispatch, model.edit_priority, fn(p) {
              EditPriorityChanged(p)
            }, lang=model.lang),
          ]),
          @html.div(style=[], [
            @html.div(
              style=[
                "font-size: 11px",
                "color: \{theme.text_muted}",
                "margin-bottom: 2px",
              ],
              [@html.text(@shared.t(model.lang, "assignee"))],
            ),
            view_assignee_picker(dispatch, model.members, model.edit_assignee, fn(
              id,
            ) {
              EditAssigneeChanged(id)
            }),
          ]),
          @html.div(style=[], [
            @html.div(
              style=[
                "font-size: 11px",
                "color: \{theme.text_muted}",
                "margin-bottom: 2px",
              ],
              [@html.text(@shared.t(model.lang, "due_date"))],
            ),
            @html.input(
              input_type=Text,
              placeholder="YYYY-MM-DD",
              value=model.edit_due_date,
              on_input=fn(v) { dispatch(EditDueDateChanged(v)) },
              style=[
                "padding: 4px 8px",
                "border: 1px solid \{theme.input_border}",
                "border-radius: 4px",
                "font-size: 12px",
                "outline: none",
                "width: 120px",
                "background: \{theme.input_bg}",
                "color: \{theme.text}",
              ],
              "",
            ),
          ]),
        ],
      ),
      @html.div(style=["display: flex", "gap: 6px"], [
        @html.button(
          on_click=dispatch(SaveEditTask),
          style=[
            "padding: 5px 12px", "background: #4f46e5", "color: white", "border: none",
            "border-radius: 4px", "cursor: pointer", "font-size: 12px",
          ],
          @shared.t(model.lang, "save"),
        ),
        @html.button(
          on_click=dispatch(CancelEditTask),
          style=[
            "padding: 5px 12px",
            "background: \{theme.filter_inactive}",
            "color: \{theme.text_secondary}",
            "border: none",
            "border-radius: 4px",
            "cursor: pointer",
            "font-size: 12px",
          ],
          @shared.t(model.lang, "cancel"),
        ),
      ]),
    ],
  )
}

///|
/// Render a single task card.
fn view_task_item(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
  task : @shared.Task,
) -> @rabbita.Html {
  if model.editing_task == task.id {
    return view_edit_task_form(dispatch, model)
  }
  let theme = get_theme(model.dark_mode)
  let border_color = @shared.priority_color(task.priority)
  let is_done = task.status == "done"
  let title_color = if is_done { theme.text_muted } else { theme.text }
  let title_decoration = if is_done { "line-through" } else { "none" }
  let status_bg = @shared.status_color(task.status)
  let transitions = @shared.allowed_transitions(task.status)
  // Assignee info
  let assignee_html = match
    @shared.find_member(model.members, task.assignee_id) {
    Some(m) => {
      let bg = @shared.member_color(m.color)
      let initial = @shared.member_initial(m.name)
      @html.div(
        style=[
          "width: 24px",
          "height: 24px",
          "border-radius: 50%",
          "display: flex",
          "align-items: center",
          "justify-content: center",
          "font-size: 10px",
          "color: white",
          "font-weight: 600",
          "background: \{bg}",
        ],
        [@html.text(initial)],
      )
    }
    None =>
      @html.div(
        style=[
          "width: 24px", "height: 24px", "border-radius: 50%", "background: #e2e8f0",
          "display: flex", "align-items: center", "justify-content: center", "font-size: 10px",
          "color: #94a3b8",
        ],
        [@html.text("—")],
      )
  }
  // Due date display
  let due_html = if task.due_date != "" {
    let urgency = @shared.urgency_label(task.due_date, model.today)
    let due_color = match urgency {
      "Overdue" => "#ef4444"
      "Due today" => "#f97316"
      _ => theme.text_secondary
    }
    @html.div(style=["font-size: 11px", "color: \{due_color}"], [
      @html.text(task.due_date),
    ])
  } else {
    @html.text("")
  }
  // Dependency indicator
  let dep_ids = @shared.get_dependencies(model.dependencies, task.id)
  let has_blocked = @shared.has_unresolved_deps(
    model.dependencies,
    model.tasks,
    task.id,
  )
  let dep_html = if dep_ids.length() > 0 {
    let dep_names : Array[String] = []
    for did in dep_ids {
      for t in model.tasks {
        if t.id == did {
          dep_names.push(t.title)
          break
        }
      }
    }
    let color = if has_blocked { "#ef4444" } else { "#22c55e" }
    let label = if has_blocked {
      @shared.t(model.lang, "blocked_by")
    } else {
      @shared.t(model.lang, "depends_done")
    }
    let names = dep_names.join(", ")
    @html.div(style=["font-size: 10px", "color: \{color}", "margin-top: 2px"], [
      @html.text("\{label}: \{names}"),
    ])
  } else {
    @html.text("")
  }
  @html.div(
    style=[
      "background: \{theme.card_bg}",
      "border-radius: 8px",
      "padding: 12px 16px",
      "margin-bottom: 8px",
      "border: 1px solid \{theme.card_border}",
      "border-left: 4px solid \{border_color}",
      "transition: all 0.15s",
    ],
    [
      // Top row: title + info
      @html.div(
        style=[
          "display: flex", "justify-content: space-between", "align-items: flex-start",
          "margin-bottom: 6px",
        ],
        [
          @html.div(style=["flex: 1"], [
            @html.div(
              style=[
                "font-size: 14px",
                "font-weight: 500",
                "color: \{title_color}",
                "text-decoration: \{title_decoration}",
              ],
              [@html.text(task.title)],
            ),
            if task.description != "" {
              @html.div(
                style=[
                  "font-size: 12px",
                  "color: \{theme.text_secondary}",
                  "margin-top: 2px",
                  "line-height: 1.4",
                ],
                [@html.text(task.description)],
              )
            } else {
              @html.text("")
            },
            dep_html,
          ]),
          @html.div(
            style=[
              "display: flex", "gap: 8px", "align-items: center", "margin-left: 12px",
            ],
            [
              assignee_html,
              // Status badge
              @html.span(
                style=[
                  "padding: 2px 8px",
                  "border-radius: 10px",
                  "font-size: 11px",
                  "color: white",
                  "background: \{status_bg}",
                ],
                @shared.t_status(model.lang, task.status),
              ),
              due_html,
            ],
          ),
        ],
      ),
      // Bottom row: transition buttons + actions
      @html.div(
        style=[
          "display: flex", "gap: 4px", "justify-content: space-between", "align-items: center",
        ],
        [
          // Status transition buttons
          @html.div(
            style=["display: flex", "gap: 3px"],
            transitions.map(fn(target) {
              let label = @shared.t_transition(model.lang, task.status, target)
              let bg = @shared.status_color(target)
              @html.button(
                on_click=dispatch(ChangeStatus(task.id, target)),
                style=[
                  "padding: 2px 8px",
                  "border-radius: 4px",
                  "border: none",
                  "cursor: pointer",
                  "font-size: 10px",
                  "color: white",
                  "background: \{bg}",
                ],
                label,
              )
            }),
          ),
          // Notes / Edit / Delete
          @html.div(style=["display: flex", "gap: 3px"], [
            @html.button(
              on_click=dispatch(ShowComments(task.id)),
              style=[
                "padding: 2px 8px",
                "font-size: 11px",
                "cursor: pointer",
                "border-radius: 4px",
                "border: 1px solid \{theme.input_border}",
                "background: \{theme.filter_inactive}",
                "color: \{theme.text_secondary}",
              ],
              @shared.t(model.lang, "notes"),
            ),
            @html.button(
              on_click=dispatch(StartEditTask(task)),
              style=[
                "padding: 2px 8px",
                "font-size: 11px",
                "cursor: pointer",
                "border-radius: 4px",
                "border: 1px solid \{theme.input_border}",
                "background: \{theme.filter_inactive}",
                "color: \{theme.text_secondary}",
              ],
              @shared.t(model.lang, "edit"),
            ),
            @html.button(
              on_click=dispatch(RequestDelete(task.id)),
              style=[
                "padding: 2px 8px", "font-size: 11px", "cursor: pointer", "border-radius: 4px",
                "border: 1px solid #fecaca", "background: #fef2f2", "color: #dc2626",
              ],
              @shared.t(model.lang, "del"),
            ),
          ]),
        ],
      ),
    ],
  )
}

///|
/// Render a compact task card for the kanban board column.
fn view_kanban_card(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
  task : @shared.Task,
) -> @rabbita.Html {
  if model.editing_task == task.id {
    return view_edit_task_form(dispatch, model)
  }
  let theme = get_theme(model.dark_mode)
  let border_color = @shared.priority_color(task.priority)
  let is_done = task.status == "done"
  let title_color = if is_done { theme.text_muted } else { theme.text }
  let title_decoration = if is_done { "line-through" } else { "none" }
  let transitions = @shared.allowed_transitions(task.status)
  // Assignee avatar
  let assignee_html = match
    @shared.find_member(model.members, task.assignee_id) {
    Some(m) => {
      let bg = @shared.member_color(m.color)
      let initial = @shared.member_initial(m.name)
      @html.div(
        style=[
          "width: 20px",
          "height: 20px",
          "border-radius: 50%",
          "display: flex",
          "align-items: center",
          "justify-content: center",
          "font-size: 9px",
          "color: white",
          "font-weight: 600",
          "background: \{bg}",
        ],
        [@html.text(initial)],
      )
    }
    None => @html.text("")
  }
  let dragging = model.dragging_task_id == task.id
  let task_id = task.id
  @html.div(
    attrs=@html.Attrs::build()
      .draggable("true")
      .on_dragstart(fn(e) {
        // Set dataTransfer data so Firefox can start the drag session
        e.get_data_transfer().items().add("\{task_id}", "text/plain")
        dispatch(DragStartTask(task_id))
      })
      .on_dragend(fn(_e) { dispatch(DragEnd) }),
    style=[
      "background: \{theme.card_bg}",
      "border-radius: 6px",
      "padding: 10px",
      "margin-bottom: 6px",
      "border-left: 3px solid \{border_color}",
      "box-shadow: 0 1px 2px rgba(0,0,0,0.05)",
      "cursor: grab",
      if dragging { "opacity: 0.4" } else { "opacity: 1" },
      "transition: opacity 0.15s ease",
    ],
    [
      // Title + assignee
      @html.div(
        style=[
          "display: flex", "justify-content: space-between", "align-items: flex-start",
          "gap: 6px",
        ],
        [
          @html.div(
            style=[
              "font-size: 12px",
              "font-weight: 500",
              "color: \{title_color}",
              "text-decoration: \{title_decoration}",
              "flex: 1",
              "line-height: 1.4",
            ],
            [@html.text(task.title)],
          ),
          assignee_html,
        ],
      ),
      // Due date
      if task.due_date != "" {
        let urgency = @shared.urgency_label(task.due_date, model.today)
        let due_color = match urgency {
          "Overdue" => "#ef4444"
          "Due today" => "#f97316"
          _ => "#94a3b8"
        }
        @html.div(
          style=["font-size: 10px", "color: \{due_color}", "margin-top: 4px"],
          [@html.text(task.due_date)],
        )
      } else {
        @html.text("")
      },
      // Action buttons
      @html.div(
        style=[
          "display: flex", "gap: 2px", "margin-top: 6px", "flex-wrap: wrap",
        ],
        {
          let buttons : Array[@rabbita.Html] = transitions.map(fn(target) {
            let label = @shared.t_transition(model.lang, task.status, target)
            let bg = @shared.status_color(target)
            @html.button(
              on_click=dispatch(ChangeStatus(task.id, target)),
              style=[
                "padding: 1px 6px",
                "border-radius: 3px",
                "border: none",
                "cursor: pointer",
                "font-size: 9px",
                "color: white",
                "background: \{bg}",
              ],
              label,
            )
          })
          buttons.push(
            @html.button(
              on_click=dispatch(ShowComments(task.id)),
              style=[
                "padding: 1px 6px",
                "font-size: 9px",
                "cursor: pointer",
                "border-radius: 3px",
                "border: 1px solid \{theme.input_border}",
                "background: \{theme.filter_inactive}",
                "color: \{theme.text_muted}",
              ],
              @shared.t(model.lang, "notes"),
            ),
          )
          buttons.push(
            @html.button(
              on_click=dispatch(StartEditTask(task)),
              style=[
                "padding: 1px 6px",
                "font-size: 9px",
                "cursor: pointer",
                "border-radius: 3px",
                "border: 1px solid \{theme.input_border}",
                "background: \{theme.filter_inactive}",
                "color: \{theme.text_muted}",
              ],
              @shared.t(model.lang, "edit"),
            ),
          )
          buttons.push(
            @html.button(
              on_click=dispatch(RequestDelete(task.id)),
              style=[
                "padding: 1px 6px", "font-size: 9px", "cursor: pointer", "border-radius: 3px",
                "border: 1px solid #fecaca", "background: #fef2f2", "color: #dc2626",
              ],
              @shared.t(model.lang, "del"),
            ),
          )
          buttons
        },
      ),
    ],
  )
}

///|
/// Render the kanban board with tasks grouped by status columns.
fn view_kanban(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
  tasks : Array[@shared.Task],
) -> @rabbita.Html {
  let theme = get_theme(model.dark_mode)
  let column_statuses = ["todo", "in_progress", "review", "done", "blocked"]
  @html.div(
    style=[
      "display: flex", "gap: 12px", "overflow-x: auto", "padding-bottom: 8px", "min-height: 400px",
    ],
    column_statuses.map(fn(status) {
      let col_tasks = tasks.filter(fn(t) { t.status == status })
      let col_color = @shared.status_color(status)
      let count = col_tasks.length()
      // Drag-and-drop: compute visual feedback for drop target
      let is_hover = model.drag_over_status == status
      let drop_valid = if model.dragging_task_id > 0 && is_hover {
        let mut from = ""
        for t in model.tasks {
          if t.id == model.dragging_task_id {
            from = t.status
            break
          }
        }
        from != status && @shared.is_valid_transition(from, status)
      } else {
        false
      }
      let outline = if is_hover && drop_valid {
        "outline: 2px dashed \{col_color}"
      } else if is_hover && model.dragging_task_id > 0 {
        "outline: 2px dashed #ef4444"
      } else {
        "outline: 2px dashed transparent"
      }
      @html.div(
        attrs=@html.Attrs::build()
          .data_set("drop-zone", "true")
          .on_dragover(fn(_e) { dispatch(DragOverColumn(status)) })
          .on_drop(fn(_e) { dispatch(DropOnColumn(status)) }),
        style=[
          "min-width: 200px",
          "flex: 1",
          "background: \{theme.column_bg}",
          "border-radius: 8px",
          "padding: 10px",
          "border: 1px solid \{theme.input_border}",
          outline,
          "transition: outline 0.15s ease",
        ],
        {
          let items : Array[@rabbita.Html] = [
            @html.div(
              style=[
                "display: flex",
                "align-items: center",
                "gap: 6px",
                "margin-bottom: 10px",
                "padding-bottom: 8px",
                "border-bottom: 2px solid \{col_color}",
              ],
              [
                @html.span(
                  style=[
                    "font-size: 12px",
                    "font-weight: 600",
                    "color: \{theme.text}",
                  ],
                  @shared.t_status(model.lang, status),
                ),
                @html.span(
                  style=[
                    "font-size: 10px",
                    "color: \{theme.text_muted}",
                    "background: \{theme.filter_inactive}",
                    "padding: 1px 6px",
                    "border-radius: 8px",
                  ],
                  "\{count}",
                ),
              ],
            ),
          ]
          for t in @shared.sort_tasks_by(col_tasks, model.sort_by, model.sort_asc) {
            items.push(view_kanban_card(dispatch, model, t))
          }
          if count == 0 {
            items.push(
              @html.div(
                style=[
                  "text-align: center", "padding: 20px 0", "color: #cbd5e1", "font-size: 11px",
                ],
                [@html.text(@shared.t(model.lang, "no_tasks"))],
              ),
            )
          }
          items
        },
      )
    }),
  )
}

///|
/// Render the activity feed showing recent status changes.
fn view_activity_feed(model : Model) -> @rabbita.Html {
  let theme = get_theme(model.dark_mode)
  let activities = @shared.recent_activities(model.activities, 10)
  if activities.length() == 0 {
    return @html.text("")
  }
  @html.div(
    style=[
      "background: \{theme.card_bg}",
      "border-radius: 10px",
      "padding: 14px 16px",
      "border: 1px solid \{theme.input_border}",
      "margin-top: 16px",
    ],
    {
      let items : Array[@rabbita.Html] = [
        @html.div(
          style=[
            "font-size: 13px",
            "font-weight: 600",
            "color: \{theme.text}",
            "margin-bottom: 10px",
          ],
          [@html.text(@shared.t(model.lang, "recent_activity"))],
        ),
      ]
      for act in activities {
        let desc = @shared.t_activity(model.lang, act)
        let to_color = @shared.status_color(act.to_status)
        let label = if act.from_status == "" {
          @shared.t(model.lang, "created")
        } else {
          @shared.t_transition(model.lang, act.from_status, act.to_status)
        }
        items.push(
          @html.div(
            style=[
              "display: flex",
              "align-items: center",
              "gap: 8px",
              "padding: 4px 0",
              "border-bottom: 1px solid \{theme.card_border}",
            ],
            [
              @html.span(
                style=[
                  "padding: 1px 6px",
                  "border-radius: 4px",
                  "font-size: 10px",
                  "color: white",
                  "background: \{to_color}",
                  "white-space: nowrap",
                ],
                label,
              ),
              @html.span(
                style=[
                  "font-size: 12px",
                  "color: \{theme.text_secondary}",
                  "flex: 1",
                ],
                desc,
              ),
              @html.span(
                style=[
                  "font-size: 10px",
                  "color: \{theme.text_muted}",
                  "white-space: nowrap",
                ],
                act.timestamp,
              ),
            ],
          ),
        )
      }
      items
    },
  )
}

///|
/// Render the delete confirmation dialog overlay.
fn view_delete_confirm(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  if model.confirm_delete == 0 {
    return @html.text("")
  }
  let theme = get_theme(model.dark_mode)
  let mut task_title = "this task"
  for t in model.tasks {
    if t.id == model.confirm_delete {
      task_title = t.title
      break
    }
  }
  @html.div(
    style=[
      "position: fixed", "top: 0", "left: 0", "right: 0", "bottom: 0", "background: rgba(0,0,0,0.4)",
      "display: flex", "align-items: center", "justify-content: center", "z-index: 1000",
    ],
    [
      @html.div(
        style=[
          "background: \{theme.card_bg}",
          "border-radius: 12px",
          "padding: 24px",
          "max-width: 400px",
          "width: 90%",
          "box-shadow: 0 20px 60px rgba(0,0,0,0.2)",
        ],
        [
          @html.div(
            style=[
              "font-size: 16px",
              "font-weight: 600",
              "color: \{theme.text}",
              "margin-bottom: 8px",
            ],
            [@html.text(@shared.t(model.lang, "delete_task"))],
          ),
          @html.div(
            style=[
              "font-size: 13px",
              "color: \{theme.text_secondary}",
              "margin-bottom: 20px",
              "line-height: 1.5",
            ],
            [@html.text(task_title)],
          ),
          @html.div(
            style=["display: flex", "gap: 8px", "justify-content: flex-end"],
            [
              @html.button(
                on_click=dispatch(CancelDelete),
                style=[
                  "padding: 8px 16px",
                  "background: \{theme.filter_inactive}",
                  "color: \{theme.text_secondary}",
                  "border: none",
                  "border-radius: 6px",
                  "cursor: pointer",
                  "font-size: 13px",
                ],
                @shared.t(model.lang, "cancel"),
              ),
              @html.button(
                on_click=dispatch(ConfirmDelete),
                style=[
                  "padding: 8px 16px", "background: #dc2626", "color: white", "border: none",
                  "border-radius: 6px", "cursor: pointer", "font-size: 13px",
                ],
                @shared.t(model.lang, "delete"),
              ),
            ],
          ),
        ],
      ),
    ],
  )
}

///|
/// Render the comments/notes panel as a modal overlay.
fn view_comments_panel(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  if model.viewing_comments == 0 {
    return @html.text("")
  }
  let theme = get_theme(model.dark_mode)
  let mut task_title = "Task"
  for t in model.tasks {
    if t.id == model.viewing_comments {
      task_title = t.title
      break
    }
  }
  @html.div(
    style=[
      "position: fixed", "top: 0", "left: 0", "right: 0", "bottom: 0", "background: rgba(0,0,0,0.4)",
      "display: flex", "align-items: center", "justify-content: center", "z-index: 1000",
    ],
    [
      @html.div(
        style=[
          "background: \{theme.card_bg}",
          "border-radius: 12px",
          "padding: 20px",
          "max-width: 500px",
          "width: 90%",
          "max-height: 80vh",
          "overflow-y: auto",
          "box-shadow: 0 20px 60px rgba(0,0,0,0.2)",
        ],
        {
          let items : Array[@rabbita.Html] = [
            // Header
            @html.div(
              style=[
                "display: flex", "justify-content: space-between", "align-items: center",
                "margin-bottom: 16px",
              ],
              [
                @html.div(style=[], [
                  @html.div(
                    style=[
                      "font-size: 15px",
                      "font-weight: 600",
                      "color: \{theme.text}",
                    ],
                    [@html.text(@shared.t(model.lang, "notes"))],
                  ),
                  @html.div(
                    style=[
                      "font-size: 12px",
                      "color: \{theme.text_muted}",
                      "margin-top: 2px",
                    ],
                    [@html.text(task_title)],
                  ),
                ]),
                @html.button(
                  on_click=dispatch(HideComments),
                  style=[
                    "background: none",
                    "border: none",
                    "color: \{theme.text_muted}",
                    "cursor: pointer",
                    "font-size: 18px",
                    "padding: 0 4px",
                  ],
                  "×",
                ),
              ],
            ),
            // Add comment form
            @html.div(
              style=["display: flex", "gap: 8px", "margin-bottom: 16px"],
              [
                @html.input(
                  input_type=Text,
                  placeholder=@shared.t(model.lang, "add_note_placeholder"),
                  value=model.new_comment,
                  on_input=fn(v) { dispatch(NewCommentChanged(v)) },
                  style=[
                    "flex: 1",
                    "padding: 8px 10px",
                    "border: 1px solid \{theme.input_border}",
                    "border-radius: 6px",
                    "font-size: 13px",
                    "outline: none",
                    "background: \{theme.input_bg}",
                    "color: \{theme.text}",
                  ],
                  "",
                ),
                @html.button(
                  on_click=dispatch(AddComment),
                  style=[
                    "padding: 8px 14px", "background: #4f46e5", "color: white", "border: none",
                    "border-radius: 6px", "cursor: pointer", "font-size: 13px",
                  ],
                  @shared.t(model.lang, "add"),
                ),
              ],
            ),
          ]
          // Comment list
          if model.comments.length() == 0 {
            items.push(
              @html.div(
                style=[
                  "text-align: center",
                  "padding: 20px 0",
                  "color: \{theme.text_muted}",
                  "font-size: 13px",
                ],
                [@html.text(@shared.t(model.lang, "no_notes"))],
              ),
            )
          }
          for c in model.comments {
            items.push(
              @html.div(
                style=[
                  "padding: 10px 0",
                  "border-bottom: 1px solid \{theme.card_border}",
                ],
                [
                  @html.div(
                    style=[
                      "display: flex", "justify-content: space-between", "margin-bottom: 4px",
                    ],
                    [
                      @html.span(
                        style=[
                          "font-size: 12px",
                          "font-weight: 600",
                          "color: \{theme.text_secondary}",
                        ],
                        c.author,
                      ),
                      @html.span(
                        style=["font-size: 11px", "color: \{theme.text_muted}"],
                        c.created_at,
                      ),
                    ],
                  ),
                  @html.div(
                    style=[
                      "font-size: 13px",
                      "color: \{theme.text}",
                      "line-height: 1.5",
                    ],
                    [@html.text(c.text)],
                  ),
                ],
              ),
            )
          }
          // Dependencies section
          let task_id = model.viewing_comments
          let dep_ids = @shared.get_dependencies(model.dependencies, task_id)
          items.push(
            @html.div(
              style=[
                "margin-top: 16px",
                "padding-top: 12px",
                "border-top: 1px solid \{theme.card_border}",
              ],
              {
                let dep_items : Array[@rabbita.Html] = [
                  @html.div(
                    style=[
                      "font-size: 13px",
                      "font-weight: 600",
                      "color: \{theme.text}",
                      "margin-bottom: 8px",
                    ],
                    [@html.text(@shared.t(model.lang, "dependencies"))],
                  ),
                ]
                // Show current deps with remove button
                for did in dep_ids {
                  let mut dep_name = ""
                  let mut dep_done = false
                  for t in model.tasks {
                    if t.id == did {
                      dep_name = t.title
                      dep_done = t.status == "done"
                      break
                    }
                  }
                  let color = if dep_done { "#22c55e" } else { "#ef4444" }
                  let status_text = if dep_done { " (done)" } else { "" }
                  let dep_id = did
                  dep_items.push(
                    @html.div(
                      style=[
                        "display: flex", "align-items: center", "gap: 6px", "padding: 3px 0",
                      ],
                      [
                        @html.span(
                          style=[
                            "width: 6px",
                            "height: 6px",
                            "border-radius: 50%",
                            "background: \{color}",
                          ],
                          "",
                        ),
                        @html.span(
                          style=[
                            "font-size: 12px",
                            "color: \{theme.text_secondary}",
                            "flex: 1",
                          ],
                          "\{dep_name}\{status_text}",
                        ),
                        @html.button(
                          on_click=dispatch(RemoveDep(task_id, dep_id)),
                          style=[
                            "background: none",
                            "border: none",
                            "color: \{theme.text_muted}",
                            "cursor: pointer",
                            "font-size: 14px",
                            "padding: 0 2px",
                          ],
                          "×",
                        ),
                      ],
                    ),
                  )
                }
                if dep_ids.length() == 0 {
                  dep_items.push(
                    @html.div(
                      style=[
                        "font-size: 12px",
                        "color: \{theme.text_muted}",
                        "padding: 4px 0",
                      ],
                      [@html.text(@shared.t(model.lang, "no_dependencies"))],
                    ),
                  )
                }
                // Add dependency: show other tasks as clickable items
                let other_tasks = model.tasks.filter(fn(t) {
                  t.id != task_id && not(dep_ids.contains(t.id))
                })
                if other_tasks.length() > 0 {
                  dep_items.push(
                    @html.div(
                      style=[
                        "font-size: 11px",
                        "color: \{theme.text_muted}",
                        "margin-top: 8px",
                        "margin-bottom: 4px",
                      ],
                      [@html.text(@shared.t(model.lang, "add_dependency"))],
                    ),
                  )
                  dep_items.push(
                    @html.div(
                      style=["display: flex", "flex-wrap: wrap", "gap: 4px"],
                      other_tasks.map(fn(t) {
                        @html.button(
                          on_click=dispatch(AddDep(task_id, t.id)),
                          style=[
                            "padding: 2px 8px",
                            "font-size: 11px",
                            "cursor: pointer",
                            "border-radius: 4px",
                            "border: 1px solid \{theme.input_border}",
                            "background: \{theme.filter_inactive}",
                            "color: \{theme.text_secondary}",
                          ],
                          t.title,
                        )
                      }),
                    ),
                  )
                }
                dep_items
              },
            ),
          )
          // Task activity history section
          let task_acts = @shared.activities_for_task(
            model.activities, task_id,
          )
          items.push(
            @html.div(
              style=[
                "margin-top: 16px",
                "padding-top: 12px",
                "border-top: 1px solid \{theme.card_border}",
              ],
              {
                let hist_items : Array[@rabbita.Html] = [
                  @html.div(
                    style=[
                      "font-size: 13px",
                      "font-weight: 600",
                      "color: \{theme.text}",
                      "margin-bottom: 8px",
                    ],
                    [@html.text(@shared.t(model.lang, "history"))],
                  ),
                ]
                if task_acts.length() == 0 {
                  hist_items.push(
                    @html.div(
                      style=[
                        "font-size: 12px",
                        "color: \{theme.text_muted}",
                        "padding: 4px 0",
                      ],
                      [@html.text(@shared.t(model.lang, "no_history"))],
                    ),
                  )
                }
                for act in task_acts {
                  let to_color = @shared.status_color(act.to_status)
                  let label = if act.from_status == "" {
                    @shared.t(model.lang, "created")
                  } else {
                    @shared.t_transition(
                      model.lang, act.from_status, act.to_status,
                    )
                  }
                  hist_items.push(
                    @html.div(
                      style=[
                        "display: flex",
                        "align-items: center",
                        "gap: 8px",
                        "padding: 3px 0",
                      ],
                      [
                        @html.span(
                          style=[
                            "padding: 1px 6px",
                            "border-radius: 4px",
                            "font-size: 10px",
                            "color: white",
                            "background: \{to_color}",
                            "white-space: nowrap",
                          ],
                          label,
                        ),
                        @html.span(
                          style=[
                            "font-size: 11px",
                            "color: \{theme.text_muted}",
                            "flex: 1",
                          ],
                          {
                            let name = if act.user_name != "" {
                              act.user_name + " · "
                            } else {
                              ""
                            }
                            "\{name}\{act.timestamp}"
                          },
                        ),
                      ],
                    ),
                  )
                }
                hist_items
              },
            ),
          )
          items
        },
      ),
    ],
  )
}

///|
/// Render the error toast notification.
fn view_error_toast(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  if model.error_msg == "" {
    return @html.text("")
  }
  @html.div(
    style=[
      "position: fixed", "top: 16px", "right: 16px", "z-index: 1001", "background: #fef2f2",
      "border: 1px solid #fecaca", "border-radius: 8px", "padding: 12px 16px", "display: flex",
      "align-items: center", "gap: 10px", "box-shadow: 0 4px 12px rgba(0,0,0,0.1)",
      "max-width: 400px",
    ],
    [
      @html.div(style=["font-size: 13px", "color: #dc2626", "flex: 1"], [
        @html.text(model.error_msg),
      ]),
      @html.button(
        on_click=dispatch(DismissError),
        style=[
          "background: none", "border: none", "color: #94a3b8", "cursor: pointer",
          "font-size: 16px", "padding: 0 4px",
        ],
        "×",
      ),
    ],
  )
}

///|
/// MVU view: render the full task management interface.
fn view(dispatch : @rabbita.Dispatch[Msg], model : Model) -> @rabbita.Html {
  let theme = get_theme(model.dark_mode)
  if model.auth_screen != "" {
    return view_auth(dispatch, model, theme)
  }
  let filtered = @shared.filter_tasks(
    model.tasks,
    model.filter_status,
    model.filter_assignee,
    model.filter_priority,
    query=model.search_query,
    urgency=model.filter_urgency,
    today=model.today,
  )
  let sorted = @shared.sort_tasks_by(filtered, model.sort_by, model.sort_asc)
  @html.div(
    style=[
      "padding: 16px 24px",
      "min-height: 100vh",
      "max-width: 900px",
      "margin: 0 auto",
      "outline: none",
      "background: \{theme.bg}",
      "color: \{theme.text}",
    ],
    on_keydown=fn(kb) { dispatch(KeyPressed(kb.key())) },
    attrs=@html.Attrs::build().tabindex(0),
    [
      view_error_toast(dispatch, model),
      view_comments_panel(dispatch, model),
      view_delete_confirm(dispatch, model),
      view_header(dispatch, model),
      if model.loading {
        @html.div(
          style=[
            "text-align: center",
            "padding: 60px 0",
            "color: \{theme.text_muted}",
            "font-size: 15px",
          ],
          [@html.text(@shared.t(model.lang, "loading"))],
        )
      } else {
        @html.div(style=[], [
          view_filters(dispatch, model),
          if model.adding_task {
            view_add_task_form(dispatch, model)
          } else {
            @html.text("")
          },
          if model.view_mode == "kanban" {
            view_kanban(dispatch, model, sorted)
          } else if sorted.length() == 0 {
            @html.div(
              style=[
                "text-align: center",
                "padding: 40px 0",
                "color: \{theme.text_muted}",
                "font-size: 14px",
              ],
              [@html.text(@shared.t(model.lang, "no_matches"))],
            )
          } else {
            @html.div(
              style=["display: flex", "flex-direction: column"],
              sorted.map(fn(task) { view_task_item(dispatch, model, task) }),
            )
          },
          view_activity_feed(model),
          // Keyboard shortcuts hint
          @html.div(
            style=[
              "text-align: center",
              "padding: 12px 0",
              "color: \{theme.text_muted}",
              "font-size: 11px",
              "margin-top: 8px",
            ],
            [
              @html.text(
                @shared.t(model.lang, "keyboard_hints"),
              ),
            ],
          ),
        ])
      },
    ],
  )
}

///|
/// Enable HTML5 drag-and-drop by preventing default on dragover and drop
/// globally. This stops the browser from navigating away when something is
/// dropped on the page. Kanban columns use data-drop-zone to accept drops
/// via Rabbita event handlers; everywhere else the drop is silently ignored.
extern "js" fn enable_drag_drop() = "() => { const h = e => e.preventDefault(); document.addEventListener('dragover', h); document.addEventListener('drop', h); }"

///|
fn main {
  enable_drag_drop()
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model={
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
      today: "",
      filter_status: "",
      filter_assignee: 0,
      filter_priority: "",
      search_query: "",
      filter_urgency: "",
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
      dark_mode: false,
      viewing_comments: 0,
      comments: [],
      new_comment: "",
      confirm_delete: 0,
      error_msg: "",
      loading: false,
      lang: @shared.Lang::En,
      dragging_task_id: 0,
      drag_over_status: "",
    },
    update~,
    view~,
  )
  let app = @rabbita.new(app_cell)
  app.with_init(dispatch(Init))
  app.mount("app")
}
