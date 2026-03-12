///|
pub(all) struct Post {
  id : Int
  title : String
  content : String
  created_at : String
  updated_at : String
} derive(FromJson, ToJson, Show)

///|
pub(all) struct Comment {
  id : Int
  post_id : Int
  author : String
  content : String
  created_at : String
} derive(FromJson, ToJson, Show)
