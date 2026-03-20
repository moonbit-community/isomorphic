///|
/// A blog post with title, content, and timestamps.
pub(all) struct Post {
  id : Int
  title : String
  content : String
  created_at : String
  updated_at : String
} derive(FromJson, ToJson, Show, Debug)

///|
/// A comment on a blog post, attributed to an author.
pub(all) struct Comment {
  id : Int
  post_id : Int
  author : String
  content : String
  created_at : String
} derive(FromJson, ToJson, Show, Debug)
