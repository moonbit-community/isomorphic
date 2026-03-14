///|
fn noop_dispatch(_msg : Msg) -> @rabbita.Cmd {
  @rabbita.none
}

///|
fn empty_model() -> Model {
  {
    current_user: None,
    auth_screen: "",
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
    today: "2026-03-14",
    new_attach_url: "",
    new_attach_label: "",
    filter_status: "",
    filter_assignee: 0,
    filter_priority: "",
    search_query: "",
    filter_urgency: "",
    filter_label: 0,
    filter_project: 0,
    view_mode: "kanban",
    sort_by: "priority",
    sort_asc: true,
    dark_mode: false,
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
    viewing_comments: 0,
    comments: [],
    new_comment: "",
    new_subtask: "",
    new_time_minutes: "",
    new_time_note: "",
    confirm_delete: 0,
    error_msg: "",
    loading: false,
    lang: En,
    selected_tasks: [],
    dragging_task_id: 0,
    drag_over_status: "",
    undo_msg: "",
    undo_task_id: 0,
    undo_old_status: "",
  }
}

///|
fn sample_user() -> @shared.User {
  { id: 1, username: "alice", color: "blue", role: "member" }
}

///|
fn sample_members() -> Array[@shared.Member] {
  [
    { id: 1, name: "Alice", color: "blue" },
    { id: 2, name: "Bob", color: "green" },
  ]
}

///|
fn sample_tasks() -> Array[@shared.Task] {
  [
    {
      id: 1,
      title: "Fix login bug",
      description: "OAuth flow broken",
      status: "todo",
      priority: "high",
      assignee_id: 1,
      due_date: "2026-03-15",
      created_at: "2026-03-10",
    },
    {
      id: 2,
      title: "Write tests",
      description: "",
      status: "in_progress",
      priority: "medium",
      assignee_id: 2,
      due_date: "",
      created_at: "2026-03-11",
    },
    {
      id: 3,
      title: "Deploy v2",
      description: "Production release",
      status: "done",
      priority: "urgent",
      assignee_id: 1,
      due_date: "2026-03-12",
      created_at: "2026-03-09",
    },
  ]
}

///|
fn sample_activities() -> Array[@shared.Activity] {
  [
    {
      id: 1,
      task_id: 1,
      task_title: "Fix login bug",
      from_status: "todo",
      to_status: "in_progress",
      timestamp: "2026-03-12 10:30",
      user_name: "Alice",
    },
  ]
}

///|
fn sample_dependencies() -> Array[@shared.Dependency] {
  [{ task_id: 2, depends_on_id: 1 }]
}

///|
fn sample_board() -> @shared.Board {
  {
    tasks: sample_tasks(),
    members: sample_members(),
    activities: sample_activities(),
    dependencies: sample_dependencies(),
    labels: [],
    task_labels: [],
    subtasks: [],
    time_entries: [],
    recurrence_rules: [],
    attachments: [],
    projects: [],
    task_projects: [],
    today: "2026-03-14",
  }
}

///|
fn logged_in_model() -> Model {
  { ..empty_model(), current_user: Some(sample_user()), auth_screen: "" }
}

// ── Init ─────────────────────────────────────────────────────────────

///|
test "Init sets loading to true" {
  let (model, _) = empty_model().update(msg=Init, dispatch=noop_dispatch)
  inspect(model.loading, content="true")
}

// ── GotMe ────────────────────────────────────────────────────────────

///|
test "GotMe/Ok sets current_user and clears auth_screen" {
  let initial = { ..empty_model(), auth_screen: "login", auth_loading: true }
  let (model, _) = initial.update(
    msg=GotMe(Ok(sample_user())),
    dispatch=noop_dispatch,
  )
  inspect(model.current_user, content=(
    #|Some({id: 1, username: "alice", color: "blue", role: "member"})
  ))
  inspect(model.auth_screen, content="")
  inspect(model.auth_loading, content="false")
}

///|
test "GotMe/Err shows login screen" {
  let initial = { ..empty_model(), auth_loading: true }
  let (model, _) = initial.update(
    msg=GotMe(Err("not logged in")),
    dispatch=noop_dispatch,
  )
  inspect(model.auth_screen, content="login")
  inspect(model.loading, content="false")
  inspect(model.auth_loading, content="false")
}

// ── GotBoard ─────────────────────────────────────────────────────────

///|
test "GotBoard/Ok populates board data and clears loading" {
  let initial = { ..logged_in_model(), loading: true }
  let (model, _) = initial.update(
    msg=GotBoard(Ok(sample_board())),
    dispatch=noop_dispatch,
  )
  inspect(model.tasks.length(), content="3")
  inspect(model.members.length(), content="2")
  inspect(model.activities.length(), content="1")
  inspect(model.dependencies.length(), content="1")
  inspect(model.today, content="2026-03-14")
  inspect(model.loading, content="false")
}

///|
test "GotBoard/Err sets error_msg and clears loading" {
  let initial = { ..logged_in_model(), loading: true }
  let (model, _) = initial.update(
    msg=GotBoard(Err("network error")),
    dispatch=noop_dispatch,
  )
  inspect(model.loading, content="false")
  inspect(model.error_msg, content="network error")
}

// ── Auth: ShowLogin / ShowRegister ───────────────────────────────────

///|
test "ShowLogin sets auth_screen and clears fields" {
  let initial = { ..empty_model(), auth_username: "old", auth_password: "pw" }
  let (model, _) = initial.update(msg=ShowLogin, dispatch=noop_dispatch)
  inspect(model.auth_screen, content="login")
  inspect(model.auth_username, content="")
  inspect(model.auth_password, content="")
  inspect(model.auth_error, content="")
}

///|
test "ShowRegister sets auth_screen and clears fields" {
  let (model, _) = empty_model().update(msg=ShowRegister, dispatch=noop_dispatch)
  inspect(model.auth_screen, content="register")
  inspect(model.auth_username, content="")
  inspect(model.auth_password, content="")
  inspect(model.auth_error, content="")
}

// ── Auth: field changes ──────────────────────────────────────────────

///|
test "AuthUsernameChanged updates auth_username" {
  let (model, _) = empty_model().update(
    msg=AuthUsernameChanged("bob"),
    dispatch=noop_dispatch,
  )
  inspect(model.auth_username, content="bob")
}

///|
test "AuthPasswordChanged updates auth_password" {
  let (model, _) = empty_model().update(
    msg=AuthPasswordChanged("secret"),
    dispatch=noop_dispatch,
  )
  inspect(model.auth_password, content="secret")
}

// ── Auth: SubmitLogin ────────────────────────────────────────────────

///|
test "SubmitLogin with empty fields sets error" {
  let initial = { ..empty_model(), auth_username: "", auth_password: "" }
  let (model, _) = initial.update(msg=SubmitLogin, dispatch=noop_dispatch)
  inspect(model.auth_error, content="Please fill in all fields")
  inspect(model.auth_loading, content="false")
}

///|
test "SubmitLogin with valid credentials sets auth_loading" {
  let initial = {
    ..empty_model(),
    auth_username: "alice",
    auth_password: "pass1234",
  }
  let (model, _) = initial.update(msg=SubmitLogin, dispatch=noop_dispatch)
  inspect(model.auth_loading, content="true")
  inspect(model.auth_error, content="")
}

// ── Auth: SubmitRegister ─────────────────────────────────────────────

///|
test "SubmitRegister with invalid username sets error" {
  let initial = { ..empty_model(), auth_username: "ab", auth_password: "pass" }
  let (model, _) = initial.update(msg=SubmitRegister, dispatch=noop_dispatch)
  inspect(
    model.auth_error,
    content="Username: 3-30 alphanumeric or underscore characters",
  )
}

///|
test "SubmitRegister with invalid password sets error" {
  let initial = {
    ..empty_model(),
    auth_username: "alice",
    auth_password: "ab",
  }
  let (model, _) = initial.update(msg=SubmitRegister, dispatch=noop_dispatch)
  inspect(model.auth_error, content="Password: 4-100 characters")
}

///|
test "SubmitRegister with valid fields sets auth_loading" {
  let initial = {
    ..empty_model(),
    auth_username: "alice",
    auth_password: "pass1234",
  }
  let (model, _) = initial.update(msg=SubmitRegister, dispatch=noop_dispatch)
  inspect(model.auth_loading, content="true")
  inspect(model.auth_error, content="")
}

// ── Auth: AuthResult ─────────────────────────────────────────────────

///|
test "AuthResult/Ok logs in user" {
  let resp : @shared.AuthResponse = {
    user: sample_user(),
    message: "Welcome",
  }
  let initial = { ..empty_model(), auth_loading: true }
  let (model, _) = initial.update(
    msg=AuthResult(Ok(resp)),
    dispatch=noop_dispatch,
  )
  inspect(model.current_user, content=(
    #|Some({id: 1, username: "alice", color: "blue", role: "member"})
  ))
  inspect(model.auth_screen, content="")
  inspect(model.auth_loading, content="false")
  inspect(model.auth_error, content="")
}

///|
test "AuthResult/Err sets auth_error" {
  let initial = { ..empty_model(), auth_loading: true }
  let (model, _) = initial.update(
    msg=AuthResult(Err("Invalid username or password")),
    dispatch=noop_dispatch,
  )
  inspect(model.auth_loading, content="false")
  inspect(model.auth_error, content="Invalid username or password")
}

// ── Logout ───────────────────────────────────────────────────────────

///|
test "LoggedOut clears user and board data" {
  let initial = {
    ..logged_in_model(),
    tasks: sample_tasks(),
    members: sample_members(),
    activities: sample_activities(),
    dependencies: sample_dependencies(),
  }
  let (model, _) = initial.update(msg=LoggedOut, dispatch=noop_dispatch)
  inspect(model.current_user, content="None")
  inspect(model.auth_screen, content="login")
  inspect(model.tasks.length(), content="0")
  inspect(model.members.length(), content="0")
  inspect(model.activities.length(), content="0")
  inspect(model.dependencies.length(), content="0")
}

// ── Filters ──────────────────────────────────────────────────────────

///|
test "SetFilterStatus updates filter_status" {
  let (model, _) = empty_model().update(
    msg=SetFilterStatus("todo"),
    dispatch=noop_dispatch,
  )
  inspect(model.filter_status, content="todo")
}

///|
test "SetFilterAssignee updates filter_assignee" {
  let (model, _) = empty_model().update(
    msg=SetFilterAssignee(2),
    dispatch=noop_dispatch,
  )
  inspect(model.filter_assignee, content="2")
}

///|
test "SetFilterPriority updates filter_priority" {
  let (model, _) = empty_model().update(
    msg=SetFilterPriority("high"),
    dispatch=noop_dispatch,
  )
  inspect(model.filter_priority, content="high")
}

///|
test "SearchChanged updates search_query" {
  let (model, _) = empty_model().update(
    msg=SearchChanged("login"),
    dispatch=noop_dispatch,
  )
  inspect(model.search_query, content="login")
}

///|
test "SetFilterUrgency updates filter_urgency" {
  let (model, _) = empty_model().update(
    msg=SetFilterUrgency("overdue"),
    dispatch=noop_dispatch,
  )
  inspect(model.filter_urgency, content="overdue")
}

///|
test "SetViewMode updates view_mode" {
  let (model, _) = empty_model().update(
    msg=SetViewMode("list"),
    dispatch=noop_dispatch,
  )
  inspect(model.view_mode, content="list")
}

///|
test "ToggleDarkMode toggles dark_mode" {
  let (model, _) = empty_model().update(msg=ToggleDarkMode, dispatch=noop_dispatch)
  inspect(model.dark_mode, content="true")
  let (model2, _) = model.update(msg=ToggleDarkMode, dispatch=noop_dispatch)
  inspect(model2.dark_mode, content="false")
}

// ── Task creation ────────────────────────────────────────────────────

///|
test "ShowAddTask opens form with defaults" {
  let (model, _) = empty_model().update(msg=ShowAddTask, dispatch=noop_dispatch)
  inspect(model.adding_task, content="true")
  inspect(model.new_title, content="")
  inspect(model.new_priority, content="medium")
  inspect(model.new_assignee, content="0")
  inspect(model.new_due_date, content="")
}

///|
test "HideAddTask closes form" {
  let initial = { ..empty_model(), adding_task: true }
  let (model, _) = initial.update(msg=HideAddTask, dispatch=noop_dispatch)
  inspect(model.adding_task, content="false")
}

///|
test "NewTitleChanged updates new_title" {
  let (model, _) = empty_model().update(
    msg=NewTitleChanged("New task"),
    dispatch=noop_dispatch,
  )
  inspect(model.new_title, content="New task")
}

///|
test "NewDescChanged updates new_desc" {
  let (model, _) = empty_model().update(
    msg=NewDescChanged("Some desc"),
    dispatch=noop_dispatch,
  )
  inspect(model.new_desc, content="Some desc")
}

///|
test "NewPriorityChanged updates new_priority" {
  let (model, _) = empty_model().update(
    msg=NewPriorityChanged("high"),
    dispatch=noop_dispatch,
  )
  inspect(model.new_priority, content="high")
}

///|
test "NewAssigneeChanged updates new_assignee" {
  let (model, _) = empty_model().update(
    msg=NewAssigneeChanged(2),
    dispatch=noop_dispatch,
  )
  inspect(model.new_assignee, content="2")
}

///|
test "NewDueDateChanged updates new_due_date" {
  let (model, _) = empty_model().update(
    msg=NewDueDateChanged("2026-04-01"),
    dispatch=noop_dispatch,
  )
  inspect(model.new_due_date, content="2026-04-01")
}

///|
test "AddTask with empty title does nothing" {
  let initial = { ..empty_model(), new_title: "" }
  let (model, _) = initial.update(msg=AddTask, dispatch=noop_dispatch)
  inspect(model.adding_task, content="false")
  inspect(model.new_title, content="")
}

///|
test "AddTask with valid title closes form" {
  let initial = {
    ..empty_model(),
    adding_task: true,
    new_title: "Build feature",
    new_priority: "high",
  }
  let (model, _) = initial.update(msg=AddTask, dispatch=noop_dispatch)
  inspect(model.adding_task, content="false")
}

///|
test "AddTask with too-long title does nothing" {
  let long = "a".repeat(@shared.max_task_title + 1)
  let initial = { ..empty_model(), adding_task: true, new_title: long }
  let (model, _) = initial.update(msg=AddTask, dispatch=noop_dispatch)
  // validate_task_title fails, returns self unchanged
  inspect(model.adding_task, content="true")
}

// ── TaskAdded ────────────────────────────────────────────────────────

///|
test "TaskAdded/Ok appends to list" {
  let initial = { ..logged_in_model(), tasks: sample_tasks() }
  let new_task : @shared.Task = {
    id: 4,
    title: "New task",
    description: "",
    status: "todo",
    priority: "low",
    assignee_id: 0,
    due_date: "",
    created_at: "2026-03-14",
  }
  let (model, _) = initial.update(
    msg=TaskAdded(Ok(new_task)),
    dispatch=noop_dispatch,
  )
  inspect(model.tasks.length(), content="4")
  inspect(model.tasks[3].title, content="New task")
}

///|
test "TaskAdded/Err sets error_msg" {
  let initial = { ..logged_in_model(), tasks: sample_tasks() }
  let (model, _) = initial.update(
    msg=TaskAdded(Err("server error")),
    dispatch=noop_dispatch,
  )
  inspect(model.tasks.length(), content="3")
  inspect(model.error_msg, content="server error")
}

// ── Task editing ─────────────────────────────────────────────────────

///|
test "StartEditTask populates edit fields" {
  let task = sample_tasks()[0]
  let (model, _) = empty_model().update(
    msg=StartEditTask(task),
    dispatch=noop_dispatch,
  )
  inspect(model.editing_task, content="1")
  inspect(model.edit_title, content="Fix login bug")
  inspect(model.edit_desc, content="OAuth flow broken")
  inspect(model.edit_priority, content="high")
  inspect(model.edit_assignee, content="1")
  inspect(model.edit_due_date, content="2026-03-15")
}

///|
test "CancelEditTask clears editing_task" {
  let initial = { ..empty_model(), editing_task: 1 }
  let (model, _) = initial.update(msg=CancelEditTask, dispatch=noop_dispatch)
  inspect(model.editing_task, content="0")
}

///|
test "EditTitleChanged updates edit_title" {
  let (model, _) = empty_model().update(
    msg=EditTitleChanged("Updated"),
    dispatch=noop_dispatch,
  )
  inspect(model.edit_title, content="Updated")
}

///|
test "EditDescChanged updates edit_desc" {
  let (model, _) = empty_model().update(
    msg=EditDescChanged("New desc"),
    dispatch=noop_dispatch,
  )
  inspect(model.edit_desc, content="New desc")
}

///|
test "EditPriorityChanged updates edit_priority" {
  let (model, _) = empty_model().update(
    msg=EditPriorityChanged("urgent"),
    dispatch=noop_dispatch,
  )
  inspect(model.edit_priority, content="urgent")
}

///|
test "EditAssigneeChanged updates edit_assignee" {
  let (model, _) = empty_model().update(
    msg=EditAssigneeChanged(3),
    dispatch=noop_dispatch,
  )
  inspect(model.edit_assignee, content="3")
}

///|
test "EditDueDateChanged updates edit_due_date" {
  let (model, _) = empty_model().update(
    msg=EditDueDateChanged("2026-05-01"),
    dispatch=noop_dispatch,
  )
  inspect(model.edit_due_date, content="2026-05-01")
}

///|
test "SaveEditTask with editing_task=0 does nothing" {
  let initial = { ..empty_model(), editing_task: 0, edit_title: "x" }
  let (model, _) = initial.update(msg=SaveEditTask, dispatch=noop_dispatch)
  inspect(model.editing_task, content="0")
}

///|
test "SaveEditTask with empty title does nothing" {
  let initial = { ..empty_model(), editing_task: 1, edit_title: "" }
  let (model, _) = initial.update(msg=SaveEditTask, dispatch=noop_dispatch)
  inspect(model.editing_task, content="1")
}

///|
test "SaveEditTask with valid data optimistically updates task" {
  let initial = {
    ..logged_in_model(),
    tasks: sample_tasks(),
    editing_task: 1,
    edit_title: "Updated title",
    edit_desc: "Updated desc",
    edit_priority: "low",
    edit_assignee: 2,
    edit_due_date: "2026-04-01",
  }
  let (model, _) = initial.update(msg=SaveEditTask, dispatch=noop_dispatch)
  inspect(model.editing_task, content="0")
  inspect(model.tasks[0].title, content="Updated title")
  inspect(model.tasks[0].description, content="Updated desc")
  inspect(model.tasks[0].priority, content="low")
  inspect(model.tasks[0].assignee_id, content="2")
  inspect(model.tasks[0].due_date, content="2026-04-01")
}

// ── Status change ────────────────────────────────────────────────────

///|
test "ChangeStatus with valid transition optimistically updates" {
  let initial = { ..logged_in_model(), tasks: sample_tasks() }
  // Task 1 is "todo", transition to "in_progress" is valid
  let (model, _) = initial.update(
    msg=ChangeStatus(1, "in_progress"),
    dispatch=noop_dispatch,
  )
  inspect(model.tasks[0].status, content="in_progress")
}

///|
test "ChangeStatus with invalid transition does nothing" {
  let initial = { ..logged_in_model(), tasks: sample_tasks() }
  // Task 1 is "todo", transition to "done" is invalid
  let (model, _) = initial.update(
    msg=ChangeStatus(1, "done"),
    dispatch=noop_dispatch,
  )
  inspect(model.tasks[0].status, content="todo")
}

// ── Delete ───────────────────────────────────────────────────────────

///|
test "RequestDelete sets confirm_delete" {
  let (model, _) = empty_model().update(
    msg=RequestDelete(5),
    dispatch=noop_dispatch,
  )
  inspect(model.confirm_delete, content="5")
}

///|
test "CancelDelete clears confirm_delete" {
  let initial = { ..empty_model(), confirm_delete: 5 }
  let (model, _) = initial.update(msg=CancelDelete, dispatch=noop_dispatch)
  inspect(model.confirm_delete, content="0")
}

///|
test "ConfirmDelete with id=0 does nothing" {
  let initial = { ..empty_model(), confirm_delete: 0 }
  let (model, _) = initial.update(msg=ConfirmDelete, dispatch=noop_dispatch)
  inspect(model.confirm_delete, content="0")
}

///|
test "ConfirmDelete removes task optimistically" {
  let initial = {
    ..logged_in_model(),
    tasks: sample_tasks(),
    confirm_delete: 1,
  }
  let (model, _) = initial.update(msg=ConfirmDelete, dispatch=noop_dispatch)
  inspect(model.tasks.length(), content="2")
  inspect(model.confirm_delete, content="0")
  // Task 1 should be gone
  inspect(model.tasks[0].id, content="2")
}

// ── Dependencies ─────────────────────────────────────────────────────

///|
test "AddDep optimistically adds dependency" {
  let initial = { ..logged_in_model(), dependencies: [] }
  let (model, _) = initial.update(
    msg=AddDep(3, 1),
    dispatch=noop_dispatch,
  )
  inspect(model.dependencies.length(), content="1")
  inspect(model.dependencies[0].task_id, content="3")
  inspect(model.dependencies[0].depends_on_id, content="1")
}

///|
test "RemoveDep optimistically removes dependency" {
  let initial = {
    ..logged_in_model(),
    dependencies: sample_dependencies(),
  }
  let (model, _) = initial.update(
    msg=RemoveDep(2, 1),
    dispatch=noop_dispatch,
  )
  inspect(model.dependencies.length(), content="0")
}

// ── Comments ─────────────────────────────────────────────────────────

///|
test "ShowComments sets viewing_comments and clears comments" {
  let initial = {
    ..logged_in_model(),
    comments: [
      {
        id: 99,
        task_id: 5,
        author: "x",
        text: "old",
        created_at: "2026-03-10",
      },
    ],
  }
  let (model, _) = initial.update(
    msg=ShowComments(1),
    dispatch=noop_dispatch,
  )
  inspect(model.viewing_comments, content="1")
  inspect(model.comments.length(), content="0")
  inspect(model.new_comment, content="")
}

///|
test "HideComments clears viewing_comments and comments" {
  let initial = { ..logged_in_model(), viewing_comments: 1 }
  let (model, _) = initial.update(msg=HideComments, dispatch=noop_dispatch)
  inspect(model.viewing_comments, content="0")
  inspect(model.comments.length(), content="0")
}

///|
test "GotComments/Ok sets comments" {
  let comments : Array[@shared.Comment] = [
    { id: 1, task_id: 1, author: "alice", text: "Done!", created_at: "2026-03-14" },
  ]
  let (model, _) = empty_model().update(
    msg=GotComments(Ok(comments)),
    dispatch=noop_dispatch,
  )
  inspect(model.comments.length(), content="1")
  inspect(model.comments[0].text, content="Done!")
}

///|
test "GotComments/Err sets error_msg" {
  let (model, _) = empty_model().update(
    msg=GotComments(Err("fetch failed")),
    dispatch=noop_dispatch,
  )
  inspect(model.error_msg, content="fetch failed")
}

///|
test "NewCommentChanged updates new_comment" {
  let (model, _) = empty_model().update(
    msg=NewCommentChanged("Great work"),
    dispatch=noop_dispatch,
  )
  inspect(model.new_comment, content="Great work")
}

///|
test "AddComment with empty text does nothing" {
  let initial = { ..empty_model(), viewing_comments: 1, new_comment: "" }
  let (model, _) = initial.update(msg=AddComment, dispatch=noop_dispatch)
  inspect(model.new_comment, content="")
}

///|
test "AddComment with viewing_comments=0 does nothing" {
  let initial = { ..empty_model(), viewing_comments: 0, new_comment: "hi" }
  let (model, _) = initial.update(msg=AddComment, dispatch=noop_dispatch)
  inspect(model.new_comment, content="hi")
}

///|
test "AddComment with valid text clears new_comment" {
  let initial = { ..empty_model(), viewing_comments: 1, new_comment: "Looks good" }
  let (model, _) = initial.update(msg=AddComment, dispatch=noop_dispatch)
  inspect(model.new_comment, content="")
}

///|
test "CommentAdded/Ok prepends comment" {
  let existing : Array[@shared.Comment] = [
    { id: 1, task_id: 1, author: "bob", text: "First", created_at: "2026-03-13" },
  ]
  let new_comment : @shared.Comment = {
    id: 2,
    task_id: 1,
    author: "alice",
    text: "Second",
    created_at: "2026-03-14",
  }
  let initial = { ..empty_model(), comments: existing }
  let (model, _) = initial.update(
    msg=CommentAdded(Ok(new_comment)),
    dispatch=noop_dispatch,
  )
  inspect(model.comments.length(), content="2")
  inspect(model.comments[0].text, content="Second")
  inspect(model.comments[1].text, content="First")
}

///|
test "CommentAdded/Err sets error_msg" {
  let (model, _) = empty_model().update(
    msg=CommentAdded(Err("save failed")),
    dispatch=noop_dispatch,
  )
  inspect(model.error_msg, content="save failed")
}

// ── Keyboard shortcuts ───────────────────────────────────────────────

///|
test "KeyPressed 'n' opens add task form" {
  let (model, _) = empty_model().update(
    msg=KeyPressed("n"),
    dispatch=noop_dispatch,
  )
  inspect(model.adding_task, content="true")
  inspect(model.new_priority, content="medium")
}

///|
test "KeyPressed 'l' switches to list view" {
  let (model, _) = empty_model().update(
    msg=KeyPressed("l"),
    dispatch=noop_dispatch,
  )
  inspect(model.view_mode, content="list")
}

///|
test "KeyPressed 'b' switches to kanban view" {
  let initial = { ..empty_model(), view_mode: "list" }
  let (model, _) = initial.update(msg=KeyPressed("b"), dispatch=noop_dispatch)
  inspect(model.view_mode, content="kanban")
}

///|
test "KeyPressed 'd' toggles dark mode" {
  let (model, _) = empty_model().update(
    msg=KeyPressed("d"),
    dispatch=noop_dispatch,
  )
  inspect(model.dark_mode, content="true")
}

///|
test "KeyPressed Escape while adding_task closes form" {
  let initial = { ..empty_model(), adding_task: true }
  let (model, _) = initial.update(
    msg=KeyPressed("Escape"),
    dispatch=noop_dispatch,
  )
  inspect(model.adding_task, content="false")
}

///|
test "KeyPressed Escape while editing clears editing_task" {
  let initial = { ..empty_model(), editing_task: 5 }
  let (model, _) = initial.update(
    msg=KeyPressed("Escape"),
    dispatch=noop_dispatch,
  )
  inspect(model.editing_task, content="0")
}

///|
test "KeyPressed Escape dismisses error_msg" {
  let initial = { ..empty_model(), error_msg: "oops" }
  let (model, _) = initial.update(
    msg=KeyPressed("Escape"),
    dispatch=noop_dispatch,
  )
  inspect(model.error_msg, content="")
}

///|
test "KeyPressed Escape dismisses confirm_delete" {
  let initial = { ..empty_model(), confirm_delete: 3 }
  let (model, _) = initial.update(
    msg=KeyPressed("Escape"),
    dispatch=noop_dispatch,
  )
  inspect(model.confirm_delete, content="0")
}

// ── Errors ───────────────────────────────────────────────────────────

///|
test "DismissError clears error_msg" {
  let initial = { ..empty_model(), error_msg: "something broke" }
  let (model, _) = initial.update(msg=DismissError, dispatch=noop_dispatch)
  inspect(model.error_msg, content="")
}

// ── Language ─────────────────────────────────────────────────────────

///|
test "SetLang updates language and clears auth_error" {
  let initial = { ..empty_model(), lang: En, auth_error: "old error" }
  let (model, _) = initial.update(msg=SetLang(Zh), dispatch=noop_dispatch)
  inspect(model.lang, content="Zh")
  inspect(model.auth_error, content="")
}
