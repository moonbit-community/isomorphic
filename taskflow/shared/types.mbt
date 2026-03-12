///|
/// A team member who can be assigned tasks.
pub(all) struct Member {
  id : Int
  name : String
  color : String
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
} derive(ToJson, FromJson, Show, Eq)

///|
/// Full board state returned by `GET /api/board`.
pub(all) struct Board {
  tasks : Array[Task]
  members : Array[Member]
  activities : Array[Activity]
  today : String
} derive(ToJson, FromJson, Show, Eq)
