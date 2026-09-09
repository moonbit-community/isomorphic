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
pub impl Show for User with fn output(self, logger) {
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
pub impl Show for Task with fn output(self, logger) {
  logger.write_string(
    "Task(#\{self.id} \"\{self.title}\" status=\{self.status} priority=\{self.priority})",
  )
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

///|
pub extend Activity with Debug::{to_repr}

///|
pub extend Activity with @json.FromJson::{from_json}

///|
pub extend Activity with Eq::{not_equal, equal}

///|
pub extend Activity with ToJson::{to_json}

///|
pub extend Attachment with Debug::{to_repr}

///|
pub extend Attachment with @json.FromJson::{from_json}

///|
pub extend Attachment with Eq::{not_equal, equal}

///|
pub extend Attachment with ToJson::{to_json}

///|
pub extend AuthResponse with Debug::{to_repr}

///|
pub extend AuthResponse with @json.FromJson::{from_json}

///|
pub extend AuthResponse with Eq::{not_equal, equal}

///|
pub extend AuthResponse with ToJson::{to_json}

///|
pub extend Board with Debug::{to_repr}

///|
pub extend Board with @json.FromJson::{from_json}

///|
pub extend Board with Eq::{not_equal, equal}

///|
pub extend Board with ToJson::{to_json}

///|
pub extend Comment with Debug::{to_repr}

///|
pub extend Comment with @json.FromJson::{from_json}

///|
pub extend Comment with Eq::{not_equal, equal}

///|
pub extend Comment with ToJson::{to_json}

///|
pub extend Dependency with Debug::{to_repr}

///|
pub extend Dependency with @json.FromJson::{from_json}

///|
pub extend Dependency with Eq::{not_equal, equal}

///|
pub extend Dependency with ToJson::{to_json}

///|
pub extend Label with Debug::{to_repr}

///|
pub extend Label with @json.FromJson::{from_json}

///|
pub extend Label with Eq::{not_equal, equal}

///|
pub extend Label with ToJson::{to_json}

///|
pub extend Member with Debug::{to_repr}

///|
pub extend Member with @json.FromJson::{from_json}

///|
pub extend Member with Eq::{not_equal, equal}

///|
pub extend Member with ToJson::{to_json}

///|
pub extend Project with Debug::{to_repr}

///|
pub extend Project with @json.FromJson::{from_json}

///|
pub extend Project with Eq::{not_equal, equal}

///|
pub extend Project with ToJson::{to_json}

///|
pub extend RecurrenceRule with Debug::{to_repr}

///|
pub extend RecurrenceRule with @json.FromJson::{from_json}

///|
pub extend RecurrenceRule with Eq::{not_equal, equal}

///|
pub extend RecurrenceRule with ToJson::{to_json}

///|
pub extend Subtask with Debug::{to_repr}

///|
pub extend Subtask with @json.FromJson::{from_json}

///|
pub extend Subtask with Eq::{not_equal, equal}

///|
pub extend Subtask with ToJson::{to_json}

///|
pub extend Task with Debug::{to_repr}

///|
pub extend Task with @json.FromJson::{from_json}

///|
pub extend Task with Eq::{not_equal, equal}

///|
pub extend Task with Show::{to_string, output}

///|
pub extend Task with ToJson::{to_json}

///|
pub extend TaskLabel with Debug::{to_repr}

///|
pub extend TaskLabel with @json.FromJson::{from_json}

///|
pub extend TaskLabel with Eq::{not_equal, equal}

///|
pub extend TaskLabel with ToJson::{to_json}

///|
pub extend TaskProject with Debug::{to_repr}

///|
pub extend TaskProject with @json.FromJson::{from_json}

///|
pub extend TaskProject with Eq::{not_equal, equal}

///|
pub extend TaskProject with ToJson::{to_json}

///|
pub extend TimeEntry with Debug::{to_repr}

///|
pub extend TimeEntry with @json.FromJson::{from_json}

///|
pub extend TimeEntry with Eq::{not_equal, equal}

///|
pub extend TimeEntry with ToJson::{to_json}

///|
pub extend User with Debug::{to_repr}

///|
pub extend User with @json.FromJson::{from_json}

///|
pub extend User with Eq::{not_equal, equal}

///|
pub extend User with Show::{to_string, output}

///|
pub extend User with ToJson::{to_json}
