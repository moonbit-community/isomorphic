///|
fn fetch_posts(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    @shared.api_posts,
    expect=Json(fn(result) { dispatch(GotPosts(result)) }, fn(json) {
      Ok(@json.from_json(json)) catch {
        _ => Err("Failed to decode posts")
      }
    }),
  )
}

///|
fn fetch_post(dispatch : @rabbita.Dispatch[Msg], id : Int) -> @rabbita.Cmd {
  @http.get(
    @shared.api_post(id),
    expect=Json(fn(result) { dispatch(GotPost(result)) }, fn(json) {
      Ok(@json.from_json(json)) catch {
        _ => Err("Failed to decode post")
      }
    }),
  )
}

///|
fn fetch_comments(
  dispatch : @rabbita.Dispatch[Msg],
  post_id : Int,
) -> @rabbita.Cmd {
  @http.get(
    @shared.api_post_comments(post_id),
    expect=Json(fn(result) { dispatch(GotComments(result)) }, fn(json) {
      Ok(@json.from_json(json)) catch {
        _ => Err("Failed to decode comments")
      }
    }),
  )
}

///|
/// Central state machine for the blog UI (Elm / MVU architecture).
///
/// Given the current model and an incoming message, returns the next model
/// together with a side-effect command (`@rabbita.Cmd`).
///
/// Parameters
///
/// - `self`     – the current application state.
/// - `msg`      – the message that triggers a state transition.
/// - `dispatch` – a callback provided by the Rabbita runtime that turns a
///   `Msg` into a `Cmd`.  It is the only way an asynchronous side-effect
///   (e.g. an HTTP response handler) can feed a new message back into the
///   update loop.
// TODO (upstream): @http.Expecting is not well designed?
#warnings("-unresolved_type_variable")
pub fn Model::update(
  self : Model,
  msg~ : Msg,
  dispatch~ : @rabbita.Dispatch[Msg],
) -> (Model, @rabbita.Cmd) {
  match msg {
    Init => ({ ..self, loading: true }, fetch_posts(dispatch))
    GotPosts(Ok(posts)) => ({ ..self, posts, loading: false }, @rabbita.none)
    GotPosts(Err(_)) => ({ ..self, loading: false }, @rabbita.none)
    GotPost(Ok(post)) =>
      (
        {
          ..self,
          current_post: Some(post),
          loading: false,
          title_input: post.title,
          content_input: post.content,
        },
        fetch_comments(dispatch, post.id),
      )
    GotPost(Err(_)) => ({ ..self, loading: false }, @rabbita.none)
    GotComments(Ok(comments)) => ({ ..self, comments, }, @rabbita.none)
    GotComments(Err(_)) => (self, @rabbita.none)
    GoToList =>
      ({ ..self, page: PostList, loading: true }, fetch_posts(dispatch))
    GoToNewPost =>
      (
        { ..self, page: NewPost, title_input: "", content_input: "" },
        @rabbita.none,
      )
    GoToViewPost(id) =>
      (
        {
          ..self,
          page: ViewPost(id),
          current_post: None,
          comments: [],
          comment_author: "",
          comment_content: "",
          loading: true,
        },
        fetch_post(dispatch, id),
      )
    GoToEditPost(id) =>
      (
        { ..self, page: EditPost(id), current_post: None, loading: true },
        fetch_post(dispatch, id),
      )
    TitleChanged(value) => ({ ..self, title_input: value }, @rabbita.none)
    ContentChanged(value) => ({ ..self, content_input: value }, @rabbita.none)
    CommentAuthorChanged(value) =>
      ({ ..self, comment_author: value }, @rabbita.none)
    CommentContentChanged(value) =>
      ({ ..self, comment_content: value }, @rabbita.none)
    CreatePost => {
      if !@shared.validate_title(self.title_input) {
        return (self, @rabbita.none)
      }
      let title = self.title_input
      let content = self.content_input
      let cmd = @http.post(
        @shared.api_posts,
        Json({ "title": title, "content": content }),
        expect=Json(fn(result) { dispatch(PostCreated(result)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode post")
          }
        }),
      )
      ({ ..self, loading: true }, cmd)
    }
    PostCreated(Ok(post)) =>
      (
        {
          ..self,
          page: ViewPost(post.id),
          current_post: Some(post),
          comments: [],
          title_input: "",
          content_input: "",
          loading: false,
        },
        @rabbita.none,
      )
    PostCreated(Err(_)) => ({ ..self, loading: false }, @rabbita.none)
    UpdatePost(id) => {
      if !@shared.validate_title(self.title_input) {
        return (self, @rabbita.none)
      }
      let title = self.title_input
      let content = self.content_input
      let cmd = @http.post(
        @shared.api_post(id),
        Json({ "title": title, "content": content }),
        expect=Json(fn(result) { dispatch(PostUpdated(result)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode post")
          }
        }),
      )
      ({ ..self, loading: true }, cmd)
    }
    PostUpdated(Ok(post)) =>
      (
        {
          ..self,
          page: ViewPost(post.id),
          current_post: Some(post),
          loading: false,
        },
        fetch_comments(dispatch, post.id),
      )
    PostUpdated(Err(_)) => ({ ..self, loading: false }, @rabbita.none)
    DeletePost(id) => {
      let cmd = @http.delete(
        @shared.api_post(id),
        expect=Text(fn(result) {
          dispatch(
            PostDeleted(
              match result {
                Ok(_) => Ok(id)
                Err(e) => Err(e)
              },
            ),
          )
        }),
      )
      (self, cmd)
    }
    PostDeleted(Ok(id)) => {
      let posts = self.posts.filter(fn(p) { p.id != id })
      ({ ..self, posts, page: PostList }, @rabbita.none)
    }
    PostDeleted(Err(_)) => (self, @rabbita.none)
    AddComment(post_id) => {
      if self.comment_content.is_empty() {
        return (self, @rabbita.none)
      }
      let author = @shared.normalize_author(self.comment_author)
      let content = self.comment_content
      let cmd = @http.post(
        @shared.api_post_comments(post_id),
        Json({ "author": author, "content": content }),
        expect=Json(fn(result) { dispatch(CommentAdded(result)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode comment")
          }
        }),
      )
      (self, cmd)
    }
    CommentAdded(Ok(comment)) => {
      let comments = self.comments.copy()
      comments.push(comment)
      (
        { ..self, comments, comment_author: "", comment_content: "" },
        @rabbita.none,
      )
    }
    CommentAdded(Err(_)) => (self, @rabbita.none)
    DeleteComment(_post_id, comment_id) => {
      let cmd = @http.delete(
        @shared.api_comment(comment_id),
        expect=Text(fn(result) {
          dispatch(
            CommentDeleted(
              match result {
                Ok(_) => Ok(comment_id)
                Err(e) => Err(e)
              },
            ),
          )
        }),
      )
      (self, cmd)
    }
    CommentDeleted(Ok(comment_id)) => {
      let comments = self.comments.filter(fn(c) { c.id != comment_id })
      ({ ..self, comments, }, @rabbita.none)
    }
    CommentDeleted(Err(_)) => (self, @rabbita.none)
  }
}
