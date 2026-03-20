///|
/// A note with a title, content, and pinned status.
pub(all) struct Note {
  id : Int
  title : String
  content : String
  pinned : Bool
} derive(ToJson, FromJson, Debug)

///|
/// Statistics about a note's content.
pub(all) struct NoteStats {
  word_count : Int
  char_count : Int
  reading_time_secs : Int
} derive(ToJson, FromJson, Debug)
