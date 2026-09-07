///|
/// A contact in the address book.
#warnings("-unnecessary_annotation")
pub(all) struct Contact {
  id : Int
  name : String
  email : String
  phone : String
  favorite : Bool
} derive(ToJson, FromJson, Debug)

///|
pub extend Contact with Debug::{to_repr}

///|
pub extend Contact with @json.FromJson::{from_json}

///|
pub extend Contact with ToJson::{to_json}
