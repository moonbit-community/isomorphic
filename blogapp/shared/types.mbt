///|
/// A blog post with title, content, and timestamps.
#warnings("-unnecessary_annotation")
pub(all) struct Post {
  id : Int
  title : String
  content : String
  created_at : String
  updated_at : String
} derive(FromJson, ToJson, Debug)

///|
/// A comment on a blog post, attributed to an author.
#warnings("-unnecessary_annotation")
pub(all) struct Comment {
  id : Int
  post_id : Int
  author : String
  content : String
  created_at : String
} derive(FromJson, ToJson, Debug)

///|
pub extend Comment with Debug::{to_repr}

///|
pub extend Comment with @json.FromJson::{from_json}

///|
pub extend Comment with ToJson::{to_json}

///|
pub extend Post with Debug::{to_repr}

///|
pub extend Post with @json.FromJson::{from_json}

///|
pub extend Post with ToJson::{to_json}
