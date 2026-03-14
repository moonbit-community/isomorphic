///|
/// Application state for the TaskFlow MVU architecture.
pub(all) struct Model {
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
  projects : Array[@shared.Project]
  task_projects : Array[@shared.TaskProject]
  today : String
  new_attach_url : String
  new_attach_label : String
  // Filters
  filter_status : String
  filter_assignee : Int
  filter_priority : String
  search_query : String
  filter_urgency : String
  filter_label : Int
  filter_project : Int
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
  new_subtask : String
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
  // Bulk actions
  selected_tasks : Array[Int]
  // Drag and drop
  dragging_task_id : Int
  drag_over_status : String
  // Undo
  undo_msg : String
  undo_task_id : Int
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
} derive(Debug)
