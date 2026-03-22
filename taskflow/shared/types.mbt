///|
/// A registered user who can log in, be assigned tasks, and leave comments.
#warnings("-unnecessary_annotation")
pub(all) struct User {
  id : Int
  username : String
  color : String
  role : String // "admin" | "member" | "viewer"
} derive(ToJson, FromJson, Eq, Debug)

///|
/// Display a User as `User(#id "username" role)`.
pub impl Show for User with output(self, logger) {
  logger.write_string("User(#\{self.id} \"\{self.username}\" \{self.role})")
}

///|
/// A team member who can be assigned tasks.
/// Now derived from User for backward compatibility.
#warnings("-unnecessary_annotation")
pub(all) struct Member {
  id : Int
  name : String
  color : String
} derive(ToJson, FromJson, Eq, Debug)

///|
/// Server response for login/register.
#warnings("-unnecessary_annotation")
pub(all) struct AuthResponse {
  user : User
  message : String
} derive(ToJson, FromJson, Eq, Debug)

///|
/// A task in the task management system.
#warnings("-unnecessary_annotation")
pub(all) struct Task {
  id : Int
  title : String
  description : String
  status : String
  priority : String
  assignee_id : Int
  due_date : String
  created_at : String
} derive(ToJson, FromJson, Eq, Debug)

///|
/// Display a Task as `Task(#id "title" status=... priority=...)`.
pub impl Show for Task with output(self, logger) {
  logger.write_string("Task(#\{self.id} \"\{self.title}\" status=\{self.status} priority=\{self.priority})")
}

///|
/// A recorded status change for audit/history tracking.
#warnings("-unnecessary_annotation")
pub(all) struct Activity {
  id : Int
  task_id : Int
  task_title : String
  from_status : String
  to_status : String
  timestamp : String
  user_name : String
} derive(ToJson, FromJson, Eq, Debug)

///|
/// A comment on a task.
#warnings("-unnecessary_annotation")
pub(all) struct Comment {
  id : Int
  task_id : Int
  author : String
  text : String
  created_at : String
} derive(ToJson, FromJson, Eq, Debug)

///|
/// A dependency between tasks: `task_id` depends on `depends_on_id`.
#warnings("-unnecessary_annotation")
pub(all) struct Dependency {
  task_id : Int
  depends_on_id : Int
} derive(ToJson, FromJson, Eq, Debug)

///|
/// A label that can be attached to tasks.
#warnings("-unnecessary_annotation")
pub(all) struct Label {
  id : Int
  name : String
  color : String
} derive(ToJson, FromJson, Eq, Debug)

///|
/// Association between a task and a label.
#warnings("-unnecessary_annotation")
pub(all) struct TaskLabel {
  task_id : Int
  label_id : Int
} derive(ToJson, FromJson, Eq, Debug)

///|
/// A checklist item belonging to a task.
#warnings("-unnecessary_annotation")
pub(all) struct Subtask {
  id : Int
  task_id : Int
  title : String
  done : Bool
} derive(ToJson, FromJson, Eq, Debug)

///|
/// A recurrence rule for automatic task re-creation on completion.
/// Interval is one of: "daily", "weekly", "monthly".
#warnings("-unnecessary_annotation")
pub(all) struct RecurrenceRule {
  task_id : Int
  interval : String
} derive(ToJson, FromJson, Eq, Debug)

///|
/// A time tracking entry for a task.
#warnings("-unnecessary_annotation")
pub(all) struct TimeEntry {
  id : Int
  task_id : Int
  minutes : Int
  note : String
  created_at : String
} derive(ToJson, FromJson, Eq, Debug)

///|
/// A URL-based attachment on a task.
#warnings("-unnecessary_annotation")
pub(all) struct Attachment {
  id : Int
  task_id : Int
  url : String
  label : String
} derive(ToJson, FromJson, Eq, Debug)

///|
/// A project that groups related tasks.
#warnings("-unnecessary_annotation")
pub(all) struct Project {
  id : Int
  name : String
  color : String
} derive(ToJson, FromJson, Eq, Debug)

///|
/// Association between a task and a project.
#warnings("-unnecessary_annotation")
pub(all) struct TaskProject {
  task_id : Int
  project_id : Int
} derive(ToJson, FromJson, Eq, Debug)

///|
/// Full board state returned by `GET /api/board`.
#warnings("-unnecessary_annotation")
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
} derive(ToJson, FromJson, Eq, Debug)
