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
  labels : Array[@shared.Label]
  task_labels : Array[@shared.TaskLabel]
  subtasks : Array[@shared.Subtask]
  time_entries : Array[@shared.TimeEntry]
  recurrence_rules : Array[@shared.RecurrenceRule]
  attachments : Array[@shared.Attachment]
  today : String
  // Attachment input
  new_attach_url : String
  new_attach_label : String
  // Filters
  filter_status : String
  filter_assignee : Int
  filter_priority : String
  search_query : String
  filter_urgency : String
  filter_label : Int // 0 = all, >0 = label ID
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
  // Subtask input
  new_subtask : String
  // Time tracking input
  new_time_minutes : String
  new_time_note : String
  // Delete confirmation
  confirm_delete : Int
  // Error notification
  error_msg : String
  // Loading
  loading : Bool
  // Language
  lang : @shared.Lang
  // Bulk selection
  selected_tasks : Array[Int]
  // Drag-and-drop
  dragging_task_id : Int
  drag_over_status : String
  // Undo
  undo_msg : String
  undo_task_id : Int
  undo_old_status : String
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
  SetFilterLabel(Int)
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
  KeyPressed(String, Bool) // key, ctrl_or_meta
  // Errors
  DismissError
  // Language
  SetLang(@shared.Lang)
  // Export
  ExportTasks
  // Labels
  AddTaskLabel(Int, Int) // task_id, label_id
  RemoveTaskLabel(Int, Int)
  LabelChanged
  // Subtasks
  NewSubtaskChanged(String)
  AddSubtask(Int) // task_id
  SubtaskAdded
  ToggleSubtask(Int) // subtask_id
  DeleteSubtask(Int) // subtask_id
  SubtaskChanged
  // Recurrence
  SetRecurrence(Int, String) // task_id, interval
  RemoveRecurrence(Int) // task_id
  RecurrenceChanged
  // Time tracking
  NewTimeMinutesChanged(String)
  NewTimeNoteChanged(String)
  LogTime(Int) // task_id
  TimeLogged
  DeleteTimeEntry(Int) // entry_id
  TimeEntryDeleted
  // Bulk selection
  ToggleSelectTask(Int)
  SelectAllVisible(Array[Int])
  ClearSelection
  BulkChangeStatus(String) // target status
  BulkDelete
  BulkDone
  // Attachments
  NewAttachUrlChanged(String)
  NewAttachLabelChanged(String)
  AddAttachment(Int) // task_id
  AttachmentAdded
  DeleteAttachment(Int) // attachment_id
  AttachmentDeleted
  // Drag-and-drop
  DragStartTask(Int)
  DragOverColumn(String)
  DropOnColumn(String)
  DragEnd
  // Undo
  Undo
  DismissUndo
  UndoComplete
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
          labels: board.labels,
          task_labels: board.task_labels,
          subtasks: board.subtasks,
          time_entries: board.time_entries,
          recurrence_rules: board.recurrence_rules,
          attachments: board.attachments,
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
          labels: [],
          task_labels: [],
        },
      )
    // ---- Filters ----
    SetFilterStatus(s) => (@rabbita.none, { ..model, filter_status: s })
    SetFilterAssignee(id) => (@rabbita.none, { ..model, filter_assignee: id })
    SetFilterPriority(p) => (@rabbita.none, { ..model, filter_priority: p })
    SearchChanged(q) => (@rabbita.none, { ..model, search_query: q })
    SetFilterUrgency(u) => (@rabbita.none, { ..model, filter_urgency: u })
    SetFilterLabel(id) => (@rabbita.none, { ..model, filter_label: id })
    SetViewMode(m) => (@rabbita.none, { ..model, view_mode: m })
    SetSortBy(s) => (@rabbita.none, { ..model, sort_by: s })
    ToggleSortOrder => (@rabbita.none, { ..model, sort_asc: not(model.sort_asc) })
    ToggleDarkMode => {
      let new_dark = not(model.dark_mode)
      save_pref("taskflow_dark", if new_dark { "1" } else { "0" })
      (@rabbita.none, { ..model, dark_mode: new_dark })
    }
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
      let undo_msg = @shared.t_undo_status(
        model.lang,
        current_status,
        new_status,
      )
      (
        cmd,
        {
          ..model,
          tasks,
          undo_msg,
          undo_task_id: id,
          undo_old_status: current_status,
        },
      )
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
    // ---- Export ----
    ExportTasks => {
      let csv = @shared.tasks_to_csv(model.tasks, model.members)
      download_file(csv, "tasks.csv", "text/csv")
      (@rabbita.none, model)
    }
    // ---- Labels ----
    AddTaskLabel(task_id, label_id) => {
      let url = @shared.api_task_labels(task_id)
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(LabelChanged)
      })
      let cmd = @http.post(
        url,
        Json(({ "label_id": label_id.to_double() } : Json)),
        expect~,
      )
      let tls = model.task_labels.copy()
      tls.push({ task_id, label_id })
      (cmd, { ..model, task_labels: tls })
    }
    RemoveTaskLabel(task_id, label_id) => {
      let url = @shared.api_task_labels_remove(task_id)
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(LabelChanged)
      })
      let cmd = @http.post(
        url,
        Json(({ "label_id": label_id.to_double() } : Json)),
        expect~,
      )
      let tls = model.task_labels.filter(fn(tl) {
        not(tl.task_id == task_id && tl.label_id == label_id)
      })
      (cmd, { ..model, task_labels: tls })
    }
    LabelChanged => (fetch_board(dispatch), model)
    // ---- Subtasks ----
    NewSubtaskChanged(v) => (@rabbita.none, { ..model, new_subtask: v })
    AddSubtask(task_id) => {
      if model.new_subtask == "" {
        return (@rabbita.none, model)
      }
      let url = @shared.api_task_subtasks(task_id)
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(SubtaskAdded)
      })
      let cmd = @http.post(
        url,
        Json(({ "title": model.new_subtask } : Json)),
        expect~,
      )
      (cmd, { ..model, new_subtask: "" })
    }
    SubtaskAdded => (fetch_board(dispatch), model)
    ToggleSubtask(sub_id) => {
      let url = @shared.api_subtask_toggle(sub_id)
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(SubtaskChanged)
      })
      let cmd = @http.post(url, Empty, expect~)
      // Optimistic toggle
      let subs = model.subtasks.map(fn(s) {
        if s.id == sub_id {
          { ..s, done: not(s.done) }
        } else {
          s
        }
      })
      (cmd, { ..model, subtasks: subs })
    }
    DeleteSubtask(sub_id) => {
      let url = @shared.api_subtask(sub_id)
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(SubtaskChanged)
      })
      let cmd = @http.delete(url, expect~)
      let subs = model.subtasks.filter(fn(s) { s.id != sub_id })
      (cmd, { ..model, subtasks: subs })
    }
    SubtaskChanged => (fetch_board(dispatch), model)
    // ---- Recurrence ----
    SetRecurrence(task_id, interval) => {
      let url = @shared.api_task_recurrence(task_id)
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(RecurrenceChanged)
      })
      let cmd = @http.post(
        url,
        Json(({ "interval": interval } : Json)),
        expect~,
      )
      // Optimistic update
      let rules = model.recurrence_rules.filter(fn(r) {
        r.task_id != task_id
      })
      let rules = {
        let r = rules.copy()
        r.push({ task_id, interval })
        r
      }
      (cmd, { ..model, recurrence_rules: rules })
    }
    RemoveRecurrence(task_id) => {
      let url = @shared.api_task_recurrence(task_id)
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(RecurrenceChanged)
      })
      let cmd = @http.delete(url, expect~)
      let rules = model.recurrence_rules.filter(fn(r) {
        r.task_id != task_id
      })
      (cmd, { ..model, recurrence_rules: rules })
    }
    RecurrenceChanged => (fetch_board(dispatch), model)
    // ---- Time tracking ----
    NewTimeMinutesChanged(v) =>
      (@rabbita.none, { ..model, new_time_minutes: v })
    NewTimeNoteChanged(v) =>
      (@rabbita.none, { ..model, new_time_note: v })
    LogTime(task_id) => {
      let minutes = try {
        @strconv.parse_int(model.new_time_minutes)
      } catch {
        _ => 0
      }
      if minutes <= 0 {
        return (@rabbita.none, model)
      }
      let url = @shared.api_task_time(task_id)
      let body : Json = { "minutes": minutes.to_double(), "note": model.new_time_note }
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(TimeLogged)
      })
      let cmd = @http.post(url, Json(body), expect~)
      (cmd, { ..model, new_time_minutes: "", new_time_note: "" })
    }
    TimeLogged => (fetch_board(dispatch), model)
    DeleteTimeEntry(entry_id) => {
      let url = @shared.api_time_entry(entry_id)
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(TimeEntryDeleted)
      })
      let cmd = @http.delete(url, expect~)
      let entries = model.time_entries.filter(fn(e) { e.id != entry_id })
      (cmd, { ..model, time_entries: entries })
    }
    TimeEntryDeleted => (fetch_board(dispatch), model)
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
        { ..model, viewing_comments: task_id, comments: [], new_comment: "", new_subtask: "", new_time_minutes: "", new_time_note: "" },
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
    KeyPressed(key, ctrl) => {
      // Ctrl+Z / Cmd+Z for undo (works even in forms)
      if ctrl && key == "z" && model.undo_msg != "" {
        return update(dispatch, Undo, model)
      }
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
        "d" => {
          let new_dark = not(model.dark_mode)
          save_pref("taskflow_dark", if new_dark { "1" } else { "0" })
          (@rabbita.none, { ..model, dark_mode: new_dark })
        }
        "/" => (@rabbita.none, model) // Search focus handled by browser
        _ => (@rabbita.none, model)
      }
    }
    // ---- Errors ----
    DismissError => (@rabbita.none, { ..model, error_msg: "" })
    // ---- Language ----
    SetLang(l) => (@rabbita.none, { ..model, lang: l, auth_error: "" })
    // ---- Bulk selection ----
    ToggleSelectTask(id) => {
      let sel = model.selected_tasks.copy()
      if sel.contains(id) {
        (
          @rabbita.none,
          { ..model, selected_tasks: sel.filter(fn(x) { x != id }) },
        )
      } else {
        sel.push(id)
        (@rabbita.none, { ..model, selected_tasks: sel })
      }
    }
    SelectAllVisible(ids) =>
      (@rabbita.none, { ..model, selected_tasks: ids })
    ClearSelection =>
      (@rabbita.none, { ..model, selected_tasks: [] })
    BulkChangeStatus(target) => {
      // Issue a status change for each selected task that supports the transition
      let mut cmd = @rabbita.none
      let tasks = model.tasks.map(fn(t) {
        if model.selected_tasks.contains(t.id) &&
          @shared.is_valid_transition(t.status, target) {
          let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
            dispatch(BulkDone)
          })
          cmd = @http.post(
            @shared.api_task_status(t.id),
            Json(({ "status": target } : Json)),
            expect~,
          )
          { ..t, status: target }
        } else {
          t
        }
      })
      (cmd, { ..model, tasks, selected_tasks: [] })
    }
    BulkDelete => {
      let mut cmd = @rabbita.none
      for id in model.selected_tasks {
        let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
          dispatch(BulkDone)
        })
        cmd = @http.delete(@shared.api_task(id), expect~)
      }
      let sel = model.selected_tasks
      let tasks = model.tasks.filter(fn(t) { not(sel.contains(t.id)) })
      (cmd, { ..model, tasks, selected_tasks: [] })
    }
    BulkDone => (fetch_board(dispatch), { ..model, selected_tasks: [] })
    // ---- Attachments ----
    NewAttachUrlChanged(v) => (@rabbita.none, { ..model, new_attach_url: v })
    NewAttachLabelChanged(v) =>
      (@rabbita.none, { ..model, new_attach_label: v })
    AddAttachment(task_id) => {
      if model.new_attach_url == "" {
        return (@rabbita.none, model)
      }
      let url_val = model.new_attach_url
      let label_val = model.new_attach_label
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(AttachmentAdded)
      })
      let cmd = @http.post(
        @shared.api_task_attachments(task_id),
        Json(({ "url": url_val, "label": label_val } : Json)),
        expect~,
      )
      (cmd, { ..model, new_attach_url: "", new_attach_label: "" })
    }
    AttachmentAdded => (fetch_board(dispatch), model)
    DeleteAttachment(att_id) => {
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(AttachmentDeleted)
      })
      let cmd = @http.delete(@shared.api_attachment(att_id), expect~)
      (cmd, model)
    }
    AttachmentDeleted => (fetch_board(dispatch), model)
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
      let undo_msg = @shared.t_undo_status(
        model.lang,
        current_status,
        new_status,
      )
      (
        cmd,
        {
          ..model,
          tasks,
          undo_msg,
          undo_task_id: id,
          undo_old_status: current_status,
        },
      )
    }
    DragEnd =>
      (@rabbita.none, { ..model, dragging_task_id: 0, drag_over_status: "" })
    // ---- Undo ----
    Undo => {
      if model.undo_task_id > 0 && model.undo_old_status != "" {
        let id = model.undo_task_id
        let old_status = model.undo_old_status
        let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
          dispatch(UndoComplete)
        })
        let cmd = @http.post(
          @shared.api_task_status(id),
          Json(({ "status": old_status } : Json)),
          expect~,
        )
        // Optimistic revert
        let tasks = model.tasks.map(fn(t) {
          if t.id == id {
            { ..t, status: old_status }
          } else {
            t
          }
        })
        (
          cmd,
          {
            ..model,
            tasks,
            undo_msg: "",
            undo_task_id: 0,
            undo_old_status: "",
          },
        )
      } else {
        (
          @rabbita.none,
          { ..model, undo_msg: "", undo_task_id: 0, undo_old_status: "" },
        )
      }
    }
    DismissUndo =>
      (
        @rabbita.none,
        { ..model, undo_msg: "", undo_task_id: 0, undo_old_status: "" },
      )
    UndoComplete => (fetch_board(dispatch), model)
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
  let mobile = is_mobile_viewport()
  let header_padding = if mobile { "padding: 12px 16px" } else { "padding: 20px 32px" }
  let header_direction = if mobile { "flex-direction: column" } else { "flex-direction: row" }
  let header_gap = if mobile { "gap: 12px" } else { "gap: 0" }
  @html.div(
    style=[
      "background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)", header_padding,
      "margin-bottom: 16px", "border-radius: 12px", "display: flex", "justify-content: space-between",
      "align-items: center", header_direction, header_gap,
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
      @html.div(style=["display: flex", "align-items: center", "gap: 8px", "flex-wrap: wrap", "justify-content: center"], [
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
        // Due date notification badges
        {
          let overdue = @shared.count_overdue(model.tasks, model.today)
          let due_today = @shared.count_due_today(model.tasks, model.today)
          let badges : Array[@rabbita.Html] = []
          if overdue > 0 {
            let label = @shared.t(model.lang, "overdue_tasks")
            badges.push(
              @html.span(
                style=[
                  "font-size: 11px", "padding: 2px 8px", "border-radius: 10px",
                  "background: #ef4444", "color: white", "font-weight: 600",
                ],
                "\{overdue} \{label}",
              ),
            )
          }
          if due_today > 0 {
            let label = @shared.t(model.lang, "due_today_tasks")
            badges.push(
              @html.span(
                style=[
                  "font-size: 11px", "padding: 2px 8px", "border-radius: 10px",
                  "background: #f59e0b", "color: white", "font-weight: 600",
                ],
                "\{due_today} \{label}",
              ),
            )
          }
          if badges.length() > 0 {
            @html.div(
              style=["display: flex", "gap: 4px", "align-items: center"],
              badges,
            )
          } else {
            @html.text("")
          }
        },
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
        // Export button
        @html.button(
          on_click=dispatch(ExportTasks),
          style=[
            "padding: 6px 10px", "border: none", "cursor: pointer", "font-size: 12px",
            "color: white", "border-radius: 4px", "background: rgba(255,255,255,0.15)",
          ],
          @shared.t(model.lang, "export"),
        ),
        {
          let user_role = match model.current_user {
            Some(u) => u.role
            None => "viewer"
          }
          if model.adding_task || not(@shared.can_edit(user_role)) {
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
          }
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
                {
                  let role_key = "role_" + user.role
                  @html.span(
                    style=[
                      "font-size: 10px", "padding: 1px 6px", "border-radius: 3px",
                      "background: rgba(255,255,255,0.15)", "color: rgba(255,255,255,0.7)",
                    ],
                    @shared.t(model.lang, role_key),
                  )
                },
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
  let mobile = is_mobile_viewport()
  let gap = if mobile { "gap: 8px" } else { "gap: 16px" }
  let pad = if mobile { "padding: 8px 10px" } else { "padding: 12px 16px" }
  @html.div(
    style=[
      "display: flex",
      gap,
      "margin-bottom: 16px",
      "flex-wrap: wrap",
      "align-items: center",
      pad,
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
      // Label filter
      if model.labels.length() > 0 {
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
                @shared.t(model.lang, "label_filter"),
              ),
              {
                let is_sel = model.filter_label == 0
                let bg = if is_sel { "#4f46e5" } else { theme.filter_inactive }
                let fg = if is_sel { "white" } else { theme.text_secondary }
                @html.button(
                  on_click=dispatch(SetFilterLabel(0)),
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
            for l in model.labels {
              let is_sel = model.filter_label == l.id
              let bg = if is_sel { l.color } else { theme.filter_inactive }
              let fg = if is_sel { "white" } else { theme.text_secondary }
              let lid = l.id
              items.push(
                @html.button(
                  on_click=dispatch(SetFilterLabel(lid)),
                  style=[
                    "padding: 3px 10px",
                    "border-radius: 12px",
                    "border: none",
                    "cursor: pointer",
                    "font-size: 11px",
                    "background: \{bg}",
                    "color: \{fg}",
                  ],
                  l.name,
                ),
              )
            }
            items
          },
        )
      } else {
        @html.text("")
      },
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
  let is_selected = model.selected_tasks.contains(task.id)
  let sel_border = if is_selected { "border: 1px solid #4f46e5" } else { "border: 1px solid \{theme.card_border}" }
  @html.div(
    style=[
      "background: \{theme.card_bg}",
      "border-radius: 8px",
      "padding: 12px 16px",
      "margin-bottom: 8px",
      sel_border,
      "border-left: 4px solid \{border_color}",
      "transition: all 0.15s",
    ],
    [
      // Top row: checkbox + title + info
      @html.div(
        style=[
          "display: flex", "justify-content: space-between", "align-items: flex-start",
          "margin-bottom: 6px",
        ],
        [
          @html.div(style=["display: flex", "align-items: flex-start", "gap: 8px", "flex: 1"], [
            {
              let tid = task.id
              let check_bg = if is_selected { "#4f46e5" } else { "transparent" }
              let check_border = if is_selected { "border: 1px solid #4f46e5" } else { "border: 1px solid \{theme.input_border}" }
              let check_color = if is_selected { "white" } else { "transparent" }
              @html.button(
                on_click=dispatch(ToggleSelectTask(tid)),
                style=[
                  "width: 16px", "height: 16px", "min-width: 16px",
                  "border-radius: 3px", check_border,
                  "background: \{check_bg}", "cursor: pointer",
                  "display: flex", "align-items: center", "justify-content: center",
                  "font-size: 10px", "color: \{check_color}", "padding: 0",
                  "margin-top: 2px",
                ],
                "✓",
              )
            },
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
                render_rich_text(task.description),
              )
            } else {
              @html.text("")
            },
            dep_html,
            {
              let task_labels = @shared.labels_for_task(
                model.labels, model.task_labels, task.id,
              )
              if task_labels.length() > 0 {
                @html.div(
                  style=[
                    "display: flex", "gap: 4px", "flex-wrap: wrap", "margin-top: 4px",
                  ],
                  task_labels.map(fn(l) {
                    @html.span(
                      style=[
                        "font-size: 10px",
                        "padding: 1px 6px",
                        "border-radius: 8px",
                        "color: white",
                        "background: \{l.color}",
                        "white-space: nowrap",
                      ],
                      l.name,
                    )
                  }),
                )
              } else {
                @html.text("")
              }
            },
            {
              let (sub_done, sub_total) = @shared.subtask_progress(
                model.subtasks, task.id,
              )
              if sub_total > 0 {
                let pct = if sub_total > 0 { sub_done * 100 / sub_total } else { 0 }
                @html.div(
                  style=[
                    "font-size: 10px",
                    "color: \{theme.text_muted}",
                    "margin-top: 3px",
                  ],
                  [
                    @html.text("☑ \{sub_done}/\{sub_total}"),
                    @html.div(
                      style=[
                        "display: inline-block",
                        "width: 40px",
                        "height: 3px",
                        "background: \{theme.input_border}",
                        "border-radius: 2px",
                        "margin-left: 6px",
                        "vertical-align: middle",
                      ],
                      [
                        @html.div(
                          style=[
                            "width: \{pct}%",
                            "height: 100%",
                            "background: #22c55e",
                            "border-radius: 2px",
                          ],
                          [@html.text("")],
                        ),
                      ],
                    ),
                  ],
                )
              } else {
                @html.text("")
              }
            },
            {
              let total_mins = @shared.total_time(model.time_entries, task.id)
              if total_mins > 0 {
                @html.div(
                  style=[
                    "font-size: 10px",
                    "color: \{theme.text_muted}",
                    "margin-top: 3px",
                  ],
                  [@html.text("⏱ \{@shared.format_duration(total_mins)}")],
                )
              } else {
                @html.text("")
              }
            },
            {
              let rec = @shared.get_recurrence(model.recurrence_rules, task.id)
              if rec != "" {
                let label = @shared.recurrence_label(rec)
                @html.span(
                  style=[
                    "font-size: 9px",
                    "color: #6366f1",
                    "margin-top: 3px",
                  ],
                  "🔄 \{label}",
                )
              } else {
                @html.text("")
              }
            },
            {
              let att_count = @shared.attachment_count(model.attachments, task.id)
              if att_count > 0 {
                @html.span(
                  style=[
                    "font-size: 9px",
                    "color: \{theme.text_muted}",
                    "margin-top: 3px",
                  ],
                  "📎 \{att_count}",
                )
              } else {
                @html.text("")
              }
            },
          ]),
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
            {
              let user_role = match model.current_user {
                Some(u) => u.role
                None => "viewer"
              }
              if @shared.can_edit(user_role) {
                @html.span(style=["display: contents"], [
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
                ])
              } else {
                @html.text("")
              }
            },
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
      // Labels
      {
        let task_labels = @shared.labels_for_task(
          model.labels, model.task_labels, task.id,
        )
        if task_labels.length() > 0 {
          @html.div(
            style=[
              "display: flex", "gap: 3px", "flex-wrap: wrap", "margin-top: 4px",
            ],
            task_labels.map(fn(l) {
              @html.span(
                style=[
                  "font-size: 9px",
                  "padding: 0px 5px",
                  "border-radius: 6px",
                  "color: white",
                  "background: \{l.color}",
                ],
                l.name,
              )
            }),
          )
        } else {
          @html.text("")
        }
      },
      // Subtask progress
      {
        let (sub_done, sub_total) = @shared.subtask_progress(
          model.subtasks, task.id,
        )
        if sub_total > 0 {
          @html.div(
            style=[
              "font-size: 9px",
              "color: \{theme.text_muted}",
              "margin-top: 3px",
            ],
            [@html.text("☑ \{sub_done}/\{sub_total}")],
          )
        } else {
          @html.text("")
        }
      },
      // Time indicator
      {
        let total_mins = @shared.total_time(model.time_entries, task.id)
        if total_mins > 0 {
          @html.div(
            style=[
              "font-size: 9px",
              "color: \{theme.text_muted}",
              "margin-top: 2px",
            ],
            [@html.text("⏱ \{@shared.format_duration(total_mins)}")],
          )
        } else {
          @html.text("")
        }
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
          let user_role = match model.current_user {
            Some(u) => u.role
            None => "viewer"
          }
          if @shared.can_edit(user_role) {
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
          }
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
  let mobile = is_mobile_viewport()
  let column_statuses = ["todo", "in_progress", "review", "done", "blocked"]
  let direction = if mobile { "flex-direction: column" } else { "flex-direction: row" }
  let min_h = if mobile { "min-height: auto" } else { "min-height: 400px" }
  @html.div(
    style=[
      "display: flex", "gap: 12px", "overflow-x: auto", "padding-bottom: 8px", min_h, direction,
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
      let col_min_w = if mobile { "min-width: auto" } else { "min-width: 200px" }
      @html.div(
        attrs=@html.Attrs::build()
          .data_set("drop-zone", "true")
          .on_dragover(fn(_e) { dispatch(DragOverColumn(status)) })
          .on_drop(fn(_e) { dispatch(DropOnColumn(status)) }),
        style=[
          col_min_w,
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
/// Check if a character is a valid username character (alphanumeric or underscore).
fn is_username_char(c : Char) -> Bool {
  (c.to_int() >= 'a'.to_int() && c.to_int() <= 'z'.to_int()) ||
  (c.to_int() >= 'A'.to_int() && c.to_int() <= 'Z'.to_int()) ||
  (c.to_int() >= '0'.to_int() && c.to_int() <= '9'.to_int()) ||
  c == '_'
}

///|
/// Render text with @mentions, `code`, and **bold** formatting.
fn render_rich_text(text : String) -> Array[@rabbita.Html] {
  let nodes : Array[@rabbita.Html] = []
  let chars = text.to_array()
  let len = chars.length()
  let mut i = 0
  let mut seg_start = 0
  while i < len {
    if chars[i] == '@' && (i == 0 || chars[i - 1] == ' ' || chars[i - 1] == '\n') {
      // @mention
      if i > seg_start {
        nodes.push(@html.text(text[seg_start:i].to_string()))
      }
      let name_start = i + 1
      let mut end = name_start
      while end < len && is_username_char(chars[end]) {
        end += 1
      }
      if end > name_start {
        let mention = text[i:end].to_string()
        nodes.push(
          @html.span(
            style=["color: #6366f1", "font-weight: 600"],
            mention,
          ),
        )
        i = end
        seg_start = end
      } else {
        i += 1
      }
    } else if chars[i] == '`' {
      // Inline code
      let close = find_char(chars, '`', i + 1)
      if close > i + 1 {
        if i > seg_start {
          nodes.push(@html.text(text[seg_start:i].to_string()))
        }
        let code = text[i + 1:close].to_string()
        nodes.push(
          @html.span(
            style=[
              "font-family: monospace", "background: rgba(99,102,241,0.1)",
              "padding: 1px 4px", "border-radius: 3px", "font-size: 12px",
            ],
            code,
          ),
        )
        i = close + 1
        seg_start = i
      } else {
        i += 1
      }
    } else if chars[i] == '*' && i + 1 < len && chars[i + 1] == '*' {
      // **bold**
      let content_start = i + 2
      let close = find_double_char(chars, '*', content_start)
      if close > content_start {
        if i > seg_start {
          nodes.push(@html.text(text[seg_start:i].to_string()))
        }
        let bold = text[content_start:close].to_string()
        nodes.push(
          @html.span(style=["font-weight: 700"], bold),
        )
        i = close + 2
        seg_start = i
      } else {
        i += 1
      }
    } else {
      i += 1
    }
  }
  if seg_start < len {
    nodes.push(@html.text(text[seg_start:len].to_string()))
  }
  nodes
}

///|
/// Find the index of a character starting from a position.
fn find_char(chars : Array[Char], target : Char, from : Int) -> Int {
  let mut i = from
  while i < chars.length() {
    if chars[i] == target {
      return i
    }
    i += 1
  }
  -1
}

///|
/// Find the index of a double character (e.g. **) starting from a position.
fn find_double_char(chars : Array[Char], target : Char, from : Int) -> Int {
  let mut i = from
  while i + 1 < chars.length() {
    if chars[i] == target && chars[i + 1] == target {
      return i
    }
    i += 1
  }
  -1
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
  let mobile = is_mobile_viewport()
  let panel_radius = if mobile { "border-radius: 0" } else { "border-radius: 12px" }
  let panel_padding = if mobile { "padding: 16px" } else { "padding: 20px" }
  let panel_width = if mobile { "width: 100%" } else { "width: 90%" }
  let panel_max_w = if mobile { "max-width: 100%" } else { "max-width: 500px" }
  let panel_max_h = if mobile { "max-height: 100vh" } else { "max-height: 80vh" }
  @html.div(
    style=[
      "position: fixed", "top: 0", "left: 0", "right: 0", "bottom: 0", "background: rgba(0,0,0,0.4)",
      "display: flex", "align-items: center", "justify-content: center", "z-index: 1000",
    ],
    [
      @html.div(
        style=[
          "background: \{theme.card_bg}",
          panel_radius,
          panel_padding,
          panel_max_w,
          panel_width,
          panel_max_h,
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
                    render_rich_text(c.text),
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
          // Labels section
          let current_labels = @shared.labels_for_task(
            model.labels, model.task_labels, task_id,
          )
          let current_label_ids = current_labels.map(fn(l) { l.id })
          items.push(
            @html.div(
              style=[
                "margin-top: 16px",
                "padding-top: 12px",
                "border-top: 1px solid \{theme.card_border}",
              ],
              {
                let label_items : Array[@rabbita.Html] = [
                  @html.div(
                    style=[
                      "font-size: 13px",
                      "font-weight: 600",
                      "color: \{theme.text}",
                      "margin-bottom: 8px",
                    ],
                    [@html.text(@shared.t(model.lang, "labels"))],
                  ),
                ]
                // Show current labels with remove button
                if current_labels.length() == 0 {
                  label_items.push(
                    @html.div(
                      style=[
                        "font-size: 12px",
                        "color: \{theme.text_muted}",
                        "padding: 4px 0",
                      ],
                      [@html.text(@shared.t(model.lang, "no_labels"))],
                    ),
                  )
                }
                for l in current_labels {
                  let lid = l.id
                  label_items.push(
                    @html.div(
                      style=[
                        "display: inline-flex",
                        "align-items: center",
                        "gap: 4px",
                        "margin: 0 4px 4px 0",
                        "padding: 2px 8px",
                        "border-radius: 10px",
                        "font-size: 11px",
                        "color: white",
                        "background: \{l.color}",
                      ],
                      [
                        @html.span(style=[], l.name),
                        @html.button(
                          on_click=dispatch(RemoveTaskLabel(task_id, lid)),
                          style=[
                            "background: none",
                            "border: none",
                            "color: rgba(255,255,255,0.7)",
                            "cursor: pointer",
                            "font-size: 12px",
                            "padding: 0 1px",
                          ],
                          "×",
                        ),
                      ],
                    ),
                  )
                }
                // Show available labels to add
                let avail = model.labels.filter(fn(l) {
                  not(current_label_ids.contains(l.id))
                })
                if avail.length() > 0 {
                  label_items.push(
                    @html.div(
                      style=[
                        "font-size: 11px",
                        "color: \{theme.text_muted}",
                        "margin-top: 8px",
                        "margin-bottom: 4px",
                      ],
                      [@html.text(@shared.t(model.lang, "add_label"))],
                    ),
                  )
                  label_items.push(
                    @html.div(
                      style=["display: flex", "flex-wrap: wrap", "gap: 4px"],
                      avail.map(fn(l) {
                        let lid = l.id
                        @html.button(
                          on_click=dispatch(AddTaskLabel(task_id, lid)),
                          style=[
                            "padding: 2px 8px",
                            "font-size: 11px",
                            "cursor: pointer",
                            "border-radius: 10px",
                            "border: 1px solid \{l.color}",
                            "background: transparent",
                            "color: \{l.color}",
                          ],
                          l.name,
                        )
                      }),
                    ),
                  )
                }
                label_items
              },
            ),
          )
          // Subtasks / checklist section
          let task_subs = @shared.subtasks_for_task(model.subtasks, task_id)
          items.push(
            @html.div(
              style=[
                "margin-top: 16px",
                "padding-top: 12px",
                "border-top: 1px solid \{theme.card_border}",
              ],
              {
                let sub_items : Array[@rabbita.Html] = [
                  @html.div(
                    style=[
                      "font-size: 13px",
                      "font-weight: 600",
                      "color: \{theme.text}",
                      "margin-bottom: 8px",
                    ],
                    {
                      let header_parts : Array[@rabbita.Html] = [
                        @html.text(@shared.t(model.lang, "subtasks")),
                      ]
                      if task_subs.length() > 0 {
                        let (sub_done, sub_total) = @shared.subtask_progress(
                          model.subtasks, task_id,
                        )
                        header_parts.push(
                          @html.span(
                            style=[
                              "font-weight: 400",
                              "color: \{theme.text_muted}",
                              "margin-left: 6px",
                            ],
                            "(\{sub_done}/\{sub_total})",
                          ),
                        )
                      }
                      header_parts
                    },
                  ),
                ]
                if task_subs.length() == 0 {
                  sub_items.push(
                    @html.div(
                      style=[
                        "font-size: 12px",
                        "color: \{theme.text_muted}",
                        "padding: 4px 0",
                      ],
                      [@html.text(@shared.t(model.lang, "no_subtasks"))],
                    ),
                  )
                }
                for sub in task_subs {
                  let sid = sub.id
                  let check = if sub.done { "☑" } else { "☐" }
                  let text_style = if sub.done {
                    "text-decoration: line-through"
                  } else {
                    "text-decoration: none"
                  }
                  let text_color = if sub.done {
                    theme.text_muted
                  } else {
                    theme.text
                  }
                  sub_items.push(
                    @html.div(
                      style=[
                        "display: flex",
                        "align-items: center",
                        "gap: 6px",
                        "padding: 3px 0",
                      ],
                      [
                        @html.button(
                          on_click=dispatch(ToggleSubtask(sid)),
                          style=[
                            "background: none",
                            "border: none",
                            "cursor: pointer",
                            "font-size: 14px",
                            "padding: 0",
                            "color: \{theme.text}",
                          ],
                          check,
                        ),
                        @html.span(
                          style=[
                            "font-size: 12px",
                            "color: \{text_color}",
                            text_style,
                            "flex: 1",
                          ],
                          sub.title,
                        ),
                        @html.button(
                          on_click=dispatch(DeleteSubtask(sid)),
                          style=[
                            "background: none",
                            "border: none",
                            "color: \{theme.text_muted}",
                            "cursor: pointer",
                            "font-size: 11px",
                            "padding: 0 2px",
                          ],
                          "×",
                        ),
                      ],
                    ),
                  )
                }
                // Add subtask input
                sub_items.push(
                  @html.div(
                    style=[
                      "display: flex",
                      "gap: 6px",
                      "margin-top: 6px",
                    ],
                    [
                      @html.input(
                        input_type=Text,
                        placeholder=@shared.t(model.lang, "subtask_placeholder"),
                        value=model.new_subtask,
                        on_input=fn(v) { dispatch(NewSubtaskChanged(v)) },
                        style=[
                          "flex: 1",
                          "padding: 4px 8px",
                          "border: 1px solid \{theme.input_border}",
                          "border-radius: 6px",
                          "font-size: 12px",
                          "background: \{theme.input_bg}",
                          "color: \{theme.text}",
                          "outline: none",
                        ],
                        "",
                      ),
                      @html.button(
                        on_click=dispatch(AddSubtask(task_id)),
                        style=[
                          "padding: 4px 10px",
                          "background: #4f46e5",
                          "color: white",
                          "border: none",
                          "border-radius: 6px",
                          "cursor: pointer",
                          "font-size: 12px",
                        ],
                        @shared.t(model.lang, "add"),
                      ),
                    ],
                  ),
                )
                sub_items
              },
            ),
          )
          // Time tracking section
          let task_entries = model.time_entries.filter(fn(e) {
            e.task_id == task_id
          })
          let total_mins = @shared.total_time(model.time_entries, task_id)
          items.push(
            @html.div(
              style=[
                "margin-top: 16px",
                "padding-top: 12px",
                "border-top: 1px solid \{theme.card_border}",
              ],
              {
                let time_items : Array[@rabbita.Html] = [
                  @html.div(
                    style=[
                      "font-size: 13px",
                      "font-weight: 600",
                      "color: \{theme.text}",
                      "margin-bottom: 8px",
                    ],
                    {
                      let parts : Array[@rabbita.Html] = [
                        @html.text(@shared.t(model.lang, "time_tracking")),
                      ]
                      if total_mins > 0 {
                        parts.push(
                          @html.span(
                            style=[
                              "font-weight: 400",
                              "color: \{theme.text_muted}",
                              "margin-left: 6px",
                            ],
                            @shared.format_duration(total_mins),
                          ),
                        )
                      }
                      parts
                    },
                  ),
                ]
                if task_entries.length() == 0 {
                  time_items.push(
                    @html.div(
                      style=[
                        "font-size: 12px",
                        "color: \{theme.text_muted}",
                        "padding: 4px 0",
                      ],
                      [@html.text(@shared.t(model.lang, "no_time"))],
                    ),
                  )
                }
                for entry in task_entries {
                  let eid = entry.id
                  let dur = @shared.format_duration(entry.minutes)
                  let note_text = if entry.note != "" {
                    " — \{entry.note}"
                  } else {
                    ""
                  }
                  time_items.push(
                    @html.div(
                      style=[
                        "display: flex",
                        "align-items: center",
                        "gap: 6px",
                        "padding: 2px 0",
                      ],
                      [
                        @html.span(
                          style=[
                            "font-size: 12px",
                            "color: \{theme.text}",
                            "font-weight: 500",
                          ],
                          dur,
                        ),
                        @html.span(
                          style=[
                            "font-size: 11px",
                            "color: \{theme.text_muted}",
                            "flex: 1",
                          ],
                          {
                            let date_note = "\{entry.created_at}\{note_text}"
                            date_note
                          },
                        ),
                        @html.button(
                          on_click=dispatch(DeleteTimeEntry(eid)),
                          style=[
                            "background: none",
                            "border: none",
                            "color: \{theme.text_muted}",
                            "cursor: pointer",
                            "font-size: 11px",
                            "padding: 0 2px",
                          ],
                          "×",
                        ),
                      ],
                    ),
                  )
                }
                // Log time input
                time_items.push(
                  @html.div(
                    style=[
                      "display: flex",
                      "gap: 6px",
                      "margin-top: 6px",
                      "align-items: center",
                    ],
                    [
                      @html.input(
                        input_type=Number,
                        placeholder=@shared.t(model.lang, "minutes"),
                        value=model.new_time_minutes,
                        on_input=fn(v) { dispatch(NewTimeMinutesChanged(v)) },
                        style=[
                          "width: 60px",
                          "padding: 4px 6px",
                          "border: 1px solid \{theme.input_border}",
                          "border-radius: 6px",
                          "font-size: 12px",
                          "background: \{theme.input_bg}",
                          "color: \{theme.text}",
                          "outline: none",
                        ],
                        "",
                      ),
                      @html.input(
                        input_type=Text,
                        placeholder=@shared.t(model.lang, "time_note_placeholder"),
                        value=model.new_time_note,
                        on_input=fn(v) { dispatch(NewTimeNoteChanged(v)) },
                        style=[
                          "flex: 1",
                          "padding: 4px 8px",
                          "border: 1px solid \{theme.input_border}",
                          "border-radius: 6px",
                          "font-size: 12px",
                          "background: \{theme.input_bg}",
                          "color: \{theme.text}",
                          "outline: none",
                        ],
                        "",
                      ),
                      @html.button(
                        on_click=dispatch(LogTime(task_id)),
                        style=[
                          "padding: 4px 10px",
                          "background: #4f46e5",
                          "color: white",
                          "border: none",
                          "border-radius: 6px",
                          "cursor: pointer",
                          "font-size: 12px",
                        ],
                        @shared.t(model.lang, "add"),
                      ),
                    ],
                  ),
                )
                time_items
              },
            ),
          )
          // Recurrence section
          let current_interval = @shared.get_recurrence(
            model.recurrence_rules, task_id,
          )
          items.push(
            @html.div(
              style=[
                "margin-top: 16px",
                "padding-top: 12px",
                "border-top: 1px solid \{theme.card_border}",
              ],
              [
                @html.div(
                  style=[
                    "font-size: 13px",
                    "font-weight: 600",
                    "color: \{theme.text}",
                    "margin-bottom: 8px",
                  ],
                  [@html.text(@shared.t(model.lang, "recurrence"))],
                ),
                @html.div(
                  style=[
                    "display: flex", "gap: 4px", "flex-wrap: wrap",
                  ],
                  {
                    let btns : Array[@rabbita.Html] = []
                    // "None" button
                    let is_none = current_interval == ""
                    let none_bg = if is_none { "#4f46e5" } else { theme.filter_inactive }
                    let none_fg = if is_none { "white" } else { theme.text_secondary }
                    btns.push(
                      @html.button(
                        on_click=dispatch(RemoveRecurrence(task_id)),
                        style=[
                          "padding: 3px 10px", "border-radius: 12px",
                          "border: none", "cursor: pointer", "font-size: 11px",
                          "background: \{none_bg}", "color: \{none_fg}",
                        ],
                        @shared.t(model.lang, "no_recurrence"),
                      ),
                    )
                    // Interval buttons
                    for interval in @shared.recurrence_intervals {
                      let is_sel = current_interval == interval
                      let bg = if is_sel { "#4f46e5" } else { theme.filter_inactive }
                      let fg = if is_sel { "white" } else { theme.text_secondary }
                      let iv = interval
                      btns.push(
                        @html.button(
                          on_click=dispatch(SetRecurrence(task_id, iv)),
                          style=[
                            "padding: 3px 10px", "border-radius: 12px",
                            "border: none", "cursor: pointer", "font-size: 11px",
                            "background: \{bg}", "color: \{fg}",
                          ],
                          @shared.t(model.lang, interval),
                        ),
                      )
                    }
                    btns
                  },
                ),
              ],
            ),
          )
          // Attachments section
          let task_attachments = @shared.attachments_for_task(
            model.attachments, task_id,
          )
          items.push(
            @html.div(
              style=[
                "margin-top: 16px",
                "padding-top: 12px",
                "border-top: 1px solid \{theme.card_border}",
              ],
              {
                let att_items : Array[@rabbita.Html] = [
                  @html.div(
                    style=[
                      "font-size: 13px",
                      "font-weight: 600",
                      "color: \{theme.text}",
                      "margin-bottom: 8px",
                    ],
                    [@html.text(@shared.t(model.lang, "attachments"))],
                  ),
                ]
                if task_attachments.is_empty() {
                  att_items.push(
                    @html.div(
                      style=[
                        "font-size: 12px",
                        "color: \{theme.text_muted}",
                        "padding: 4px 0",
                      ],
                      [@html.text(@shared.t(model.lang, "no_attachments"))],
                    ),
                  )
                }
                for a in task_attachments {
                  let display = if a.label != "" { a.label } else { a.url }
                  let att_id = a.id
                  att_items.push(
                    @html.div(
                      style=[
                        "display: flex", "align-items: center", "gap: 6px",
                        "padding: 3px 0",
                      ],
                      [
                        @html.span(
                          style=["font-size: 12px"],
                          "📎",
                        ),
                        @html.div(
                          style=[
                            "font-size: 12px",
                            "color: #6366f1",
                            "text-decoration: underline",
                            "cursor: pointer",
                            "flex: 1",
                            "overflow: hidden",
                            "text-overflow: ellipsis",
                            "white-space: nowrap",
                          ],
                          [@html.text(display)],
                        ),
                        @html.button(
                          on_click=dispatch(DeleteAttachment(att_id)),
                          style=[
                            "background: none", "border: none", "color: #dc2626",
                            "cursor: pointer", "font-size: 12px", "padding: 0 2px",
                          ],
                          "×",
                        ),
                      ],
                    ),
                  )
                }
                // Add attachment form
                att_items.push(
                  @html.div(
                    style=[
                      "display: flex", "gap: 4px", "margin-top: 6px",
                      "align-items: center",
                    ],
                    [
                      @html.input(
                        input_type=Text,
                        on_input=fn(v) { dispatch(NewAttachUrlChanged(v)) },
                        value=model.new_attach_url,
                        placeholder=@shared.t(model.lang, "url_placeholder"),
                        style=[
                          "flex: 2", "padding: 4px 8px", "font-size: 12px",
                          "border: 1px solid \{theme.input_border}",
                          "border-radius: 4px",
                          "background: \{theme.input_bg}",
                          "color: \{theme.text}",
                        ],
                        "",
                      ),
                      @html.input(
                        input_type=Text,
                        on_input=fn(v) { dispatch(NewAttachLabelChanged(v)) },
                        value=model.new_attach_label,
                        placeholder=@shared.t(model.lang, "link_label_placeholder"),
                        style=[
                          "flex: 1", "padding: 4px 8px", "font-size: 12px",
                          "border: 1px solid \{theme.input_border}",
                          "border-radius: 4px",
                          "background: \{theme.input_bg}",
                          "color: \{theme.text}",
                        ],
                        "",
                      ),
                      @html.button(
                        on_click=dispatch(AddAttachment(task_id)),
                        style=[
                          "padding: 4px 10px", "background: #4f46e5", "color: white",
                          "border: none", "border-radius: 4px", "cursor: pointer",
                          "font-size: 11px",
                        ],
                        @shared.t(model.lang, "add"),
                      ),
                    ],
                  ),
                )
                att_items
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
/// Render the undo toast/snackbar at the bottom of the screen.
fn view_undo_toast(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  if model.undo_msg == "" {
    return @html.text("")
  }
  let lang = model.lang
  @html.div(
    style=[
      "position: fixed", "bottom: 24px", "left: 50%", "transform: translateX(-50%)",
      "z-index: 1002", "background: #1e293b", "color: white", "border-radius: 8px",
      "padding: 10px 16px", "display: flex", "align-items: center", "gap: 12px",
      "box-shadow: 0 4px 16px rgba(0,0,0,0.25)", "max-width: 420px",
      "font-size: 13px",
    ],
    [
      @html.div(style=["flex: 1"], [@html.text(model.undo_msg)]),
      @html.button(
        on_click=dispatch(Undo),
        style=[
          "background: #6366f1", "color: white", "border: none", "border-radius: 4px",
          "padding: 4px 12px", "cursor: pointer", "font-weight: 600", "font-size: 13px",
        ],
        @shared.t(lang, "undo"),
      ),
      @html.button(
        on_click=dispatch(DismissUndo),
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
  let filtered = if model.filter_label > 0 {
    filtered.filter(fn(t) {
      model.task_labels.iter().any(fn(tl) {
        tl.task_id == t.id && tl.label_id == model.filter_label
      })
    })
  } else {
    filtered
  }
  let sorted = @shared.sort_tasks_by(filtered, model.sort_by, model.sort_asc)
  let mobile = is_mobile_viewport()
  let padding = if mobile { "padding: 8px 12px" } else { "padding: 16px 24px" }
  @html.div(
    style=[
      padding,
      "min-height: 100vh",
      "max-width: 900px",
      "margin: 0 auto",
      "outline: none",
      "background: \{theme.bg}",
      "color: \{theme.text}",
    ],
    on_keydown=fn(kb) { dispatch(KeyPressed(kb.key(), kb.ctrl_key() || kb.meta_key())) },
    attrs=@html.Attrs::build().tabindex(0),
    [
      view_error_toast(dispatch, model),
      view_undo_toast(dispatch, model),
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
          // Bulk action bar
          if model.selected_tasks.length() > 0 {
            let count = model.selected_tasks.length()
            let btn_style = [
              "padding: 4px 12px", "border-radius: 6px", "border: none",
              "cursor: pointer", "font-size: 12px", "color: white",
            ]
            @html.div(
              style=[
                "display: flex", "gap: 8px", "align-items: center", "flex-wrap: wrap",
                "padding: 8px 12px", "margin-bottom: 8px",
                "background: \{theme.filter_bg}", "border-radius: 8px",
                "border: 1px solid #4f46e5",
              ],
              [
                @html.span(
                  style=["font-size: 12px", "color: \{theme.text}", "font-weight: 500"],
                  {
                    let label = @shared.t(model.lang, "selected_count")
                    "\{count} \{label}"
                  },
                ),
                @html.button(
                  on_click=dispatch(
                    SelectAllVisible(sorted.map(fn(t) { t.id })),
                  ),
                  style=[
                    "padding: 4px 10px", "border-radius: 6px",
                    "border: 1px solid \{theme.input_border}",
                    "cursor: pointer", "font-size: 11px",
                    "background: \{theme.filter_inactive}",
                    "color: \{theme.text_secondary}",
                  ],
                  @shared.t(model.lang, "select_all"),
                ),
                @html.button(
                  on_click=dispatch(BulkChangeStatus("done")),
                  style={
                    let s = btn_style.copy()
                    s.push("background: #22c55e")
                    s
                  },
                  @shared.t(model.lang, "bulk_done"),
                ),
                @html.button(
                  on_click=dispatch(BulkDelete),
                  style={
                    let s = btn_style.copy()
                    s.push("background: #ef4444")
                    s
                  },
                  @shared.t(model.lang, "bulk_delete"),
                ),
                @html.button(
                  on_click=dispatch(ClearSelection),
                  style=[
                    "padding: 4px 10px", "border-radius: 6px",
                    "border: 1px solid \{theme.input_border}",
                    "cursor: pointer", "font-size: 11px",
                    "background: \{theme.filter_inactive}",
                    "color: \{theme.text_secondary}",
                  ],
                  @shared.t(model.lang, "clear_selection"),
                ),
              ],
            )
          } else {
            @html.text("")
          },
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
          // Keyboard shortcuts hint (hidden on mobile — no keyboard)
          if mobile {
            @html.text("")
          } else {
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
          )
          },
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
/// Check if viewport width is <= 768px (mobile breakpoint).
extern "js" fn is_mobile_viewport() -> Bool = "() => window.innerWidth <= 768"

///|
/// Trigger a file download in the browser with the given content and filename.
extern "js" fn download_file(content : String, filename : String, mime : String) = "(content, filename, mime) => { const blob = new Blob([content], { type: mime }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url); }"

///|
/// Save a preference to localStorage.
extern "js" fn save_pref(key : String, value : String) = "(k, v) => { try { localStorage.setItem(k, v); } catch(e) {} }"

///|
/// Load a preference from localStorage. Returns empty string if not found.
extern "js" fn load_pref(key : String) -> String = "(k) => { try { return localStorage.getItem(k) || ''; } catch(e) { return ''; } }"

///|
fn main {
  enable_drag_drop()
  let saved_dark = load_pref("taskflow_dark") == "1"
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
      labels: [],
      task_labels: [],
      subtasks: [],
      time_entries: [],
      recurrence_rules: [],
      attachments: [],
      today: "",
      new_attach_url: "",
      new_attach_label: "",
      filter_status: "",
      filter_assignee: 0,
      filter_priority: "",
      search_query: "",
      filter_urgency: "",
      filter_label: 0,
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
    update~,
    view~,
  )
  let app = @rabbita.new(app_cell)
  app.with_init(dispatch(Init))
  app.mount("app")
}
