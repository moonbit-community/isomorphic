///|
/// A contact in the address book.
pub(all) struct Contact {
  id : Int
  name : String
  email : String
  phone : String
  favorite : Bool
} derive(ToJson, FromJson, Debug)
