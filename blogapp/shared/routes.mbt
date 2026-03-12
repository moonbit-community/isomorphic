///|
pub let api_posts : String = "/api/posts"

///|
pub fn api_post(id : Int) -> String {
  "/api/posts/\{id}"
}

///|
pub fn api_post_comments(post_id : Int) -> String {
  "/api/posts/\{post_id}/comments"
}

///|
pub fn api_comment(id : Int) -> String {
  "/api/comments/\{id}"
}
