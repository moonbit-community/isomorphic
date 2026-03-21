///|
/// Navigation pages for the blog application.
pub(all) enum Page {
  PostList
  ViewPost(Int)
  NewPost
  EditPost(Int)
} derive(Debug)

///|
/// Frontend state for the blog app, including posts, comments, form inputs, and current page.
pub(all) struct Model {
  posts : Array[@shared.Post]
  current_post : @shared.Post?
  comments : Array[@shared.Comment]
  page : Page
  title_input : String
  content_input : String
  comment_author : String
  comment_content : String
  loading : Bool
} derive(Debug)

///|
/// Messages that drive blog app state transitions, covering navigation, CRUD operations, and form input.
pub(all) enum Msg {
  // Navigation
  GoToList
  GoToNewPost
  GoToViewPost(Int)
  GoToEditPost(Int)
  // Data fetching
  Init
  GotPosts(Result[Array[@shared.Post], String])
  GotPost(Result[@shared.Post, String])
  GotComments(Result[Array[@shared.Comment], String])
  // Form inputs
  TitleChanged(String)
  ContentChanged(String)
  CommentAuthorChanged(String)
  CommentContentChanged(String)
  // Post CRUD
  CreatePost
  PostCreated(Result[@shared.Post, String])
  UpdatePost(Int)
  PostUpdated(Result[@shared.Post, String])
  DeletePost(Int)
  PostDeleted(Result[Int, String])
  // Comment CRUD
  AddComment(Int)
  CommentAdded(Result[@shared.Comment, String])
  DeleteComment(Int, Int)
  CommentDeleted(Result[Int, String])
}
