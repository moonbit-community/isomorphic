///|
/// A to-do item with completion status.
pub(all) struct Todo {
  id : Int
  text : String
  done : Bool
} derive(ToJson, FromJson, Debug)
