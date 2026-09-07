///|
/// A to-do item with completion status.
#warnings("-unnecessary_annotation")
pub(all) struct Todo {
  id : Int
  text : String
  done : Bool
} derive(ToJson, FromJson, Debug)

///|
pub extend Todo with ToJson::{to_json}

///|
pub extend Todo with @json.FromJson::{from_json}

///|
pub extend Todo with Debug::{to_repr}
