///|
/// The base API route for listing and creating posts.
pub let api_posts : String = "/api/posts"

///|
/// Returns the API route for a single post by its ID.
pub fn api_post(id : Int) -> String {
  "/api/posts/\{id}"
}

///|
/// Returns the API route for the comments belonging to a given post.
pub fn api_post_comments(post_id : Int) -> String {
  "/api/posts/\{post_id}/comments"
}

///|
/// Returns the API route for a single comment by its ID.
pub fn api_comment(id : Int) -> String {
  "/api/comments/\{id}"
}
