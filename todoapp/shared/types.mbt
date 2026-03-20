///|
/// A to-do item with completion status.
#warnings("-unnecessary_annotation")
pub(all) struct Todo {
  id : Int
  text : String
  done : Bool
} derive(ToJson, FromJson, Debug)
