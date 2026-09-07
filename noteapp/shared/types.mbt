///|
/// A note with a title, content, and pinned status.
#warnings("-unnecessary_annotation")
pub(all) struct Note {
  id : Int
  title : String
  content : String
  pinned : Bool
} derive(ToJson, FromJson, Debug)

///|
/// Statistics about a note's content.
#warnings("-unnecessary_annotation")
pub(all) struct NoteStats {
  word_count : Int
  char_count : Int
  reading_time_secs : Int
} derive(ToJson, FromJson, Debug)

///|
pub extend Note with Debug::{to_repr}

///|
pub extend Note with @json.FromJson::{from_json}

///|
pub extend Note with ToJson::{to_json}

///|
pub extend NoteStats with Debug::{to_repr}

///|
pub extend NoteStats with @json.FromJson::{from_json}

///|
pub extend NoteStats with ToJson::{to_json}
