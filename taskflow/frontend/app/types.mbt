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
  today : String
  // Filters
  filter_status : String
  filter_assignee : Int
  filter_priority : String
  search_query : String
  filter_urgency : String
  view_mode : String
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
