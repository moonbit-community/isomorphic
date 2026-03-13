///|
/// A registered user who can log in, be assigned tasks, and leave comments.
pub(all) struct User {
  id : Int
  username : String
  color : String
  role : String // "admin" | "member" | "viewer"
} derive(ToJson, FromJson, Show, Eq)

///|
/// A team member who can be assigned tasks.
/// Now derived from User for backward compatibility.
pub(all) struct Member {
  id : Int
  name : String
  color : String
} derive(ToJson, FromJson, Show, Eq)

///|
/// Server response for login/register.
pub(all) struct AuthResponse {
  user : User
  message : String
} derive(ToJson, FromJson, Show, Eq)

///|
/// A task in the task management system.
pub(all) struct Task {
  id : Int
  title : String
  description : String
  status : String
  priority : String
  assignee_id : Int
  due_date : String
  created_at : String
} derive(ToJson, FromJson, Show, Eq)

///|
/// A recorded status change for audit/history tracking.
pub(all) struct Activity {
  id : Int
  task_id : Int
  task_title : String
  from_status : String
  to_status : String
  timestamp : String
  user_name : String
} derive(ToJson, FromJson, Show, Eq)

///|
/// A comment on a task.
pub(all) struct Comment {
  id : Int
  task_id : Int
  author : String
  text : String
  created_at : String
} derive(ToJson, FromJson, Show, Eq)

///|
/// A dependency between tasks: `task_id` depends on `depends_on_id`.
pub(all) struct Dependency {
  task_id : Int
  depends_on_id : Int
} derive(ToJson, FromJson, Show, Eq)

///|
/// A label that can be attached to tasks.
pub(all) struct Label {
  id : Int
  name : String
  color : String
} derive(ToJson, FromJson, Show, Eq)

///|
/// Association between a task and a label.
pub(all) struct TaskLabel {
  task_id : Int
  label_id : Int
} derive(ToJson, FromJson, Show, Eq)

///|
/// A checklist item belonging to a task.
pub(all) struct Subtask {
  id : Int
  task_id : Int
  title : String
  done : Bool
} derive(ToJson, FromJson, Show, Eq)

///|
/// A recurrence rule for automatic task re-creation on completion.
/// Interval is one of: "daily", "weekly", "monthly".
pub(all) struct RecurrenceRule {
  task_id : Int
  interval : String
} derive(ToJson, FromJson, Show, Eq)

///|
/// A time tracking entry for a task.
pub(all) struct TimeEntry {
  id : Int
  task_id : Int
  minutes : Int
  note : String
  created_at : String
} derive(ToJson, FromJson, Show, Eq)

///|
/// A URL-based attachment on a task.
pub(all) struct Attachment {
  id : Int
  task_id : Int
  url : String
  label : String
} derive(ToJson, FromJson, Show, Eq)

///|
/// A project that groups related tasks.
pub(all) struct Project {
  id : Int
  name : String
  color : String
} derive(ToJson, FromJson, Show, Eq)

///|
/// Association between a task and a project.
pub(all) struct TaskProject {
  task_id : Int
  project_id : Int
} derive(ToJson, FromJson, Show, Eq)

///|
/// Full board state returned by `GET /api/board`.
pub(all) struct Board {
  tasks : Array[Task]
  members : Array[Member]
  activities : Array[Activity]
  dependencies : Array[Dependency]
  labels : Array[Label]
  task_labels : Array[TaskLabel]
  subtasks : Array[Subtask]
  time_entries : Array[TimeEntry]
  recurrence_rules : Array[RecurrenceRule]
  attachments : Array[Attachment]
  projects : Array[Project]
  task_projects : Array[TaskProject]
  today : String
} derive(ToJson, FromJson, Show, Eq)
