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
// TODO (upstream): @http.Expecting is not well designed?
#warnings("-unresolved_type_variable")
pub fn Model::update(
  self : Model,
  msg~ : Msg,
  dispatch~ : @rabbita.Dispatch[Msg],
) -> (Model, @rabbita.Cmd) {
  match msg {
    Init => ({ ..self, loading: true }, fetch_me(dispatch))
    GotMe(Ok(user)) =>
      (
        {
          ..self,
          current_user: Some(user),
          auth_screen: "",
          auth_loading: false,
        },
        fetch_board(dispatch),
      )
    GotMe(Err(_)) =>
      (
        { ..self, auth_screen: "login", loading: false, auth_loading: false },
        @rabbita.none,
      )
    GotBoard(Ok(board)) =>
      (
        {
          ..self,
          tasks: board.tasks,
          members: board.members,
          activities: board.activities,
          dependencies: board.dependencies,
          today: board.today,
          loading: false,
        },
        @rabbita.none,
      )
    GotBoard(Err(e)) =>
      ({ ..self, loading: false, error_msg: e }, @rabbita.none)
    // ---- Auth ----
    ShowLogin =>
      (
        {
          ..self,
          auth_screen: "login",
          auth_username: "",
          auth_password: "",
          auth_error: "",
        },
        @rabbita.none,
      )
    ShowRegister =>
      (
        {
          ..self,
          auth_screen: "register",
          auth_username: "",
          auth_password: "",
          auth_error: "",
        },
        @rabbita.none,
      )
    AuthUsernameChanged(v) => ({ ..self, auth_username: v }, @rabbita.none)
    AuthPasswordChanged(v) => ({ ..self, auth_password: v }, @rabbita.none)
    SubmitLogin => {
      if self.auth_username == "" || self.auth_password == "" {
        return (
          { ..self, auth_error: @shared.t(self.lang, "fill_all_fields") },
          @rabbita.none,
        )
      }
      let username = self.auth_username
      let password = self.auth_password
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
      ({ ..self, auth_loading: true, auth_error: "" }, cmd)
    }
    SubmitRegister => {
      if not(@shared.validate_username(self.auth_username)) {
        return (
          {
            ..self,
            auth_error: @shared.t(self.lang, "username_hint"),
          },
          @rabbita.none,
        )
      }
      if not(@shared.validate_password(self.auth_password)) {
        return (
          { ..self, auth_error: @shared.t(self.lang, "password_hint") },
          @rabbita.none,
        )
      }
      let username = self.auth_username
      let password = self.auth_password
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
      ({ ..self, auth_loading: true, auth_error: "" }, cmd)
    }
    AuthResult(Ok(resp)) =>
      (
        {
          ..self,
          current_user: Some(resp.user),
          auth_screen: "",
          auth_loading: false,
          auth_error: "",
          auth_username: "",
          auth_password: "",
        },
        fetch_board(dispatch),
      )
    AuthResult(Err(e)) => {
      // Translate at response time so lang switch during request is respected
      let msg = @shared.t_server_error(self.lang, e)
      ({ ..self, auth_loading: false, auth_error: msg }, @rabbita.none)
    }
    Logout => {
      let cmd = @http.post(
        @shared.api_logout,
        Json(({} : Json)),
        expect=Json(fn(_result) { dispatch(LoggedOut) }, fn(_json) { Ok("") }),
      )
      (self, cmd)
    }
    LoggedOut =>
      (
        {
          ..self,
          current_user: None,
          auth_screen: "login",
          tasks: [],
          members: [],
          activities: [],
          dependencies: [],
        },
        @rabbita.none,
      )
    // ---- Filters ----
    SetFilterStatus(s) => ({ ..self, filter_status: s }, @rabbita.none)
    SetFilterAssignee(id) => ({ ..self, filter_assignee: id }, @rabbita.none)
    SetFilterPriority(p) => ({ ..self, filter_priority: p }, @rabbita.none)
    SearchChanged(q) => ({ ..self, search_query: q }, @rabbita.none)
    SetFilterUrgency(u) => ({ ..self, filter_urgency: u }, @rabbita.none)
    SetViewMode(m) => ({ ..self, view_mode: m }, @rabbita.none)
    ToggleDarkMode =>
      ({ ..self, dark_mode: not(self.dark_mode) }, @rabbita.none)
    // ---- Task creation ----
    ShowAddTask =>
      (
        {
          ..self,
          adding_task: true,
          new_title: "",
          new_desc: "",
          new_priority: "medium",
          new_assignee: 0,
          new_due_date: "",
        },
        @rabbita.none,
      )
    HideAddTask => ({ ..self, adding_task: false }, @rabbita.none)
    NewTitleChanged(v) => ({ ..self, new_title: v }, @rabbita.none)
    NewDescChanged(v) => ({ ..self, new_desc: v }, @rabbita.none)
    NewPriorityChanged(v) => ({ ..self, new_priority: v }, @rabbita.none)
    NewAssigneeChanged(id) => ({ ..self, new_assignee: id }, @rabbita.none)
    NewDueDateChanged(v) => ({ ..self, new_due_date: v }, @rabbita.none)
    AddTask => {
      if not(@shared.validate_task_title(self.new_title)) {
        return (self, @rabbita.none)
      }
      let title = self.new_title
      let desc = self.new_desc
      let priority = self.new_priority
      let assignee = self.new_assignee
      let due = self.new_due_date
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
      ({ ..self, adding_task: false }, cmd)
    }
    TaskAdded(Ok(task)) => {
      let tasks = self.tasks.copy()
      tasks.push(task)
      ({ ..self, tasks, }, @rabbita.none)
    }
    TaskAdded(Err(e)) => ({ ..self, error_msg: e }, @rabbita.none)
    // ---- Task editing ----
    StartEditTask(task) =>
      (
        {
          ..self,
          editing_task: task.id,
          edit_title: task.title,
          edit_desc: task.description,
          edit_priority: task.priority,
          edit_assignee: task.assignee_id,
          edit_due_date: task.due_date,
        },
        @rabbita.none,
      )
    CancelEditTask => ({ ..self, editing_task: 0 }, @rabbita.none)
    EditTitleChanged(v) => ({ ..self, edit_title: v }, @rabbita.none)
    EditDescChanged(v) => ({ ..self, edit_desc: v }, @rabbita.none)
    EditPriorityChanged(v) => ({ ..self, edit_priority: v }, @rabbita.none)
    EditAssigneeChanged(id) => ({ ..self, edit_assignee: id }, @rabbita.none)
    EditDueDateChanged(v) => ({ ..self, edit_due_date: v }, @rabbita.none)
    SaveEditTask => {
      let id = self.editing_task
      if id == 0 || not(@shared.validate_task_title(self.edit_title)) {
        return (self, @rabbita.none)
      }
      let title = self.edit_title
      let desc = self.edit_desc
      let priority = self.edit_priority
      let assignee = self.edit_assignee
      let due = self.edit_due_date
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
      let tasks = self.tasks.map(fn(t) {
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
      ({ ..self, tasks, editing_task: 0 }, cmd)
    }
    TaskUpdated => (self, fetch_board(dispatch))
    // ---- Status change ----
    ChangeStatus(id, new_status) => {
      let mut current_status = ""
      for t in self.tasks {
        if t.id == id {
          current_status = t.status
          break
        }
      }
      if not(@shared.is_valid_transition(current_status, new_status)) {
        return (self, @rabbita.none)
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
      let tasks = self.tasks.map(fn(t) {
        if t.id == id {
          { ..t, status: new_status }
        } else {
          t
        }
      })
      ({ ..self, tasks, }, cmd)
    }
    StatusChanged => (self, fetch_board(dispatch))
    // ---- Delete ----
    RequestDelete(id) => ({ ..self, confirm_delete: id }, @rabbita.none)
    CancelDelete => ({ ..self, confirm_delete: 0 }, @rabbita.none)
    ConfirmDelete => {
      let id = self.confirm_delete
      if id == 0 {
        return (self, @rabbita.none)
      }
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(TaskDeleted)
      })
      let cmd = @http.delete(@shared.api_task(id), expect~)
      let tasks = self.tasks.filter(fn(t) { t.id != id })
      ({ ..self, tasks, confirm_delete: 0 }, cmd)
    }
    TaskDeleted => (self, fetch_board(dispatch))
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
      let deps = self.dependencies.copy()
      deps.push({ task_id, depends_on_id })
      ({ ..self, dependencies: deps }, cmd)
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
      let deps = self.dependencies.filter(fn(d) {
        not(d.task_id == task_id && d.depends_on_id == depends_on_id)
      })
      ({ ..self, dependencies: deps }, cmd)
    }
    DepChanged => (self, fetch_board(dispatch))
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
        { ..self, viewing_comments: task_id, comments: [], new_comment: "" },
        cmd,
      )
    }
    HideComments =>
      ({ ..self, viewing_comments: 0, comments: [] }, @rabbita.none)
    GotComments(Ok(comments)) => ({ ..self, comments, }, @rabbita.none)
    GotComments(Err(e)) => ({ ..self, error_msg: e }, @rabbita.none)
    NewCommentChanged(v) => ({ ..self, new_comment: v }, @rabbita.none)
    AddComment => {
      let task_id = self.viewing_comments
      if task_id == 0 || not(@shared.validate_comment_text(self.new_comment)) {
        return (self, @rabbita.none)
      }
      let text = self.new_comment
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
      ({ ..self, new_comment: "" }, cmd)
    }
    CommentAdded(Ok(comment)) => {
      let comments = [comment, ..self.comments]
      ({ ..self, comments, }, @rabbita.none)
    }
    CommentAdded(Err(e)) => ({ ..self, error_msg: e }, @rabbita.none)
    // ---- Keyboard shortcuts ----
    KeyPressed(key) => {
      // Skip shortcuts when typing in forms
      if self.adding_task ||
        self.editing_task != 0 ||
        self.viewing_comments != 0 {
        if key == "Escape" {
          if self.adding_task {
            return ({ ..self, adding_task: false }, @rabbita.none)
          }
          return ({ ..self, editing_task: 0 }, @rabbita.none)
        }
        return (self, @rabbita.none)
      }
      // Dismiss dialogs/errors with Escape
      if key == "Escape" {
        if self.viewing_comments != 0 {
          return (
            { ..self, viewing_comments: 0, comments: [] },
            @rabbita.none,
          )
        }
        if self.confirm_delete != 0 {
          return ({ ..self, confirm_delete: 0 }, @rabbita.none)
        }
        if self.error_msg != "" {
          return ({ ..self, error_msg: "" }, @rabbita.none)
        }
        return (self, @rabbita.none)
      }
      match key {
        "n" =>
          (
            {
              ..self,
              adding_task: true,
              new_title: "",
              new_desc: "",
              new_priority: "medium",
              new_assignee: 0,
              new_due_date: "",
            },
            @rabbita.none,
          )
        "l" => ({ ..self, view_mode: "list" }, @rabbita.none)
        "b" => ({ ..self, view_mode: "kanban" }, @rabbita.none)
        "d" => ({ ..self, dark_mode: not(self.dark_mode) }, @rabbita.none)
        "/" => (self, @rabbita.none) // Search focus handled by browser
        _ => (self, @rabbita.none)
      }
    }
    // ---- Errors ----
    DismissError => ({ ..self, error_msg: "" }, @rabbita.none)
    // ---- Language ----
    SetLang(l) => ({ ..self, lang: l, auth_error: "" }, @rabbita.none)
  }
}
