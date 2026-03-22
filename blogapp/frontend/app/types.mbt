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
  /// All blog posts fetched from the server.
  posts : Array[@shared.Post]
  /// The post currently being viewed in detail, if any.
  current_post : @shared.Post?
  /// Comments on the currently viewed post.
  comments : Array[@shared.Comment]
  /// The active navigation page.
  page : Page
  /// Text in the post title input field.
  title_input : String
  /// Text in the post body content field.
  content_input : String
  /// Author name for a new comment.
  comment_author : String
  /// Body text for a new comment.
  comment_content : String
  /// Whether a network request is in progress.
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
