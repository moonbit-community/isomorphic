///|
/// Application state for the TaskFlow MVU architecture.
pub(all) struct Model {
  /// The currently logged-in user, or None if not authenticated.
  current_user : @shared.User?
  /// Active auth screen: "" (logged in), "login", or "register".
  auth_screen : String
  /// Username input on the auth form.
  auth_username : String
  /// Password input on the auth form.
  auth_password : String
  /// Error message from the last auth attempt.
  auth_error : String
  /// Whether an auth request is in progress.
  auth_loading : Bool
  /// All tasks on the board.
  tasks : Array[@shared.Task]
  /// All team members who can be assigned tasks.
  members : Array[@shared.Member]
  /// Recent activity log entries.
  activities : Array[@shared.Activity]
  /// Task-to-task dependency relationships.
  dependencies : Array[@shared.Dependency]
  /// Available labels for categorizing tasks.
  labels : Array[@shared.Label]
  /// Associations between tasks and labels.
  task_labels : Array[@shared.TaskLabel]
  /// Subtasks nested under parent tasks.
  subtasks : Array[@shared.Subtask]
  /// Logged time entries for tasks.
  time_entries : Array[@shared.TimeEntry]
  /// Recurring task schedule rules.
  recurrence_rules : Array[@shared.RecurrenceRule]
  /// File attachments linked to tasks.
  attachments : Array[@shared.Attachment]
  /// All projects that tasks can belong to.
  projects : Array[@shared.Project]
  /// Associations between tasks and projects.
  task_projects : Array[@shared.TaskProject]
  /// Today's date as a string (e.g. "2026-03-22").
  today : String
  /// URL input for adding a new attachment.
  new_attach_url : String
  /// Label input for adding a new attachment.
  new_attach_label : String
  /// Status filter for the task list.
  filter_status : String
  /// Assignee filter by member ID, or 0 for all.
  filter_assignee : Int
  /// Priority filter for the task list.
  filter_priority : String
  /// Free-text search query for filtering tasks.
  search_query : String
  /// Urgency filter (e.g. "overdue", "due_soon").
  filter_urgency : String
  /// Label ID filter, or 0 for all.
  filter_label : Int
  /// Project ID filter, or 0 for all.
  filter_project : Int
  /// Current view mode ("board", "list", or "timeline").
  view_mode : String
  /// Column used to sort the task list.
  sort_by : String
  /// Whether the sort order is ascending.
  sort_asc : Bool
  /// Whether dark mode is enabled.
  dark_mode : Bool
  /// Whether the add-task form is visible.
  adding_task : Bool
  /// Title input for the new task.
  new_title : String
  /// Description input for the new task.
  new_desc : String
  /// Priority selection for the new task.
  new_priority : String
  /// Assignee selection for the new task.
  new_assignee : Int
  /// Due date input for the new task.
  new_due_date : String
  /// ID of the task currently being edited, or 0 if none.
  editing_task : Int
  /// Title input for the task being edited.
  edit_title : String
  /// Description input for the task being edited.
  edit_desc : String
  /// Priority input for the task being edited.
  edit_priority : String
  /// Assignee input for the task being edited.
  edit_assignee : Int
  /// Due date input for the task being edited.
  edit_due_date : String
  /// ID of the task whose comments are open, or 0 if none.
  viewing_comments : Int
  /// Comments on the task being viewed.
  comments : Array[@shared.Comment]
  /// Text input for a new comment.
  new_comment : String
  /// Text input for a new subtask.
  new_subtask : String
  /// Minutes input for logging time.
  new_time_minutes : String
  /// Note input for the time entry.
  new_time_note : String
  /// ID of the task pending delete confirmation, or 0 if none.
  confirm_delete : Int
  /// Error message to display, or empty if none.
  error_msg : String
  /// Whether a network request is in progress.
  loading : Bool
  /// Current UI language.
  lang : @shared.Lang
  /// IDs of tasks selected for bulk actions.
  selected_tasks : Array[Int]
  /// ID of the task currently being dragged, or 0 if none.
  dragging_task_id : Int
  /// Status column the dragged task is hovering over.
  drag_over_status : String
  /// Message shown in the undo notification bar.
  undo_msg : String
  /// ID of the task that can be undone.
  undo_task_id : Int
  /// Previous status to restore on undo.
  undo_old_status : String
} derive(Debug)

///|
/// All possible user actions and server responses.
pub(all) enum Msg {
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
} derive(Debug)

///|
/// Theme colors based on dark/light mode.
pub(all) struct Theme {
  /// Main page background color.
  bg : String
  /// Card surface background color.
  card_bg : String
  /// Card border color.
  card_border : String
  /// Primary text color.
  text : String
  /// Secondary text color for less prominent content.
  text_secondary : String
  /// Muted text color for hints and placeholders.
  text_muted : String
  /// Background color for input fields.
  input_bg : String
  /// Border color for input fields.
  input_border : String
  /// Background color for filter bar elements.
  filter_bg : String
  /// Color for inactive filter options.
  filter_inactive : String
  /// Background color for board columns.
  column_bg : String
} derive(Debug)
