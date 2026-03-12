///|
enum Page {
  PostList
  ViewPost(Int)
  NewPost
  EditPost(Int)
}

///|
struct Model {
  posts : Array[@shared.Post]
  current_post : @shared.Post?
  comments : Array[@shared.Comment]
  page : Page
  title_input : String
  content_input : String
  comment_author : String
  comment_content : String
  loading : Bool
}

///|
enum Msg {
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
fn update(
  dispatch : @rabbita.Dispatch[Msg],
  msg : Msg,
  model : Model,
) -> (@rabbita.Cmd, Model) {
  match msg {
    Init => (fetch_posts(dispatch), { ..model, loading: true })
    GotPosts(Ok(posts)) => (@rabbita.none, { ..model, posts, loading: false })
    GotPosts(Err(_)) => (@rabbita.none, { ..model, loading: false })
    GotPost(Ok(post)) =>
      (
        fetch_comments(dispatch, post.id),
        {
          ..model,
          current_post: Some(post),
          loading: false,
          title_input: post.title,
          content_input: post.content,
        },
      )
    GotPost(Err(_)) => (@rabbita.none, { ..model, loading: false })
    GotComments(Ok(comments)) => (@rabbita.none, { ..model, comments, })
    GotComments(Err(_)) => (@rabbita.none, model)
    GoToList =>
      (fetch_posts(dispatch), { ..model, page: PostList, loading: true })
    GoToNewPost =>
      (
        @rabbita.none,
        { ..model, page: NewPost, title_input: "", content_input: "" },
      )
    GoToViewPost(id) =>
      (
        fetch_post(dispatch, id),
        {
          ..model,
          page: ViewPost(id),
          current_post: None,
          comments: [],
          comment_author: "",
          comment_content: "",
          loading: true,
        },
      )
    GoToEditPost(id) =>
      (
        fetch_post(dispatch, id),
        { ..model, page: EditPost(id), current_post: None, loading: true },
      )
    TitleChanged(value) => (@rabbita.none, { ..model, title_input: value })
    ContentChanged(value) => (@rabbita.none, { ..model, content_input: value })
    CommentAuthorChanged(value) =>
      (@rabbita.none, { ..model, comment_author: value })
    CommentContentChanged(value) =>
      (@rabbita.none, { ..model, comment_content: value })
    CreatePost => {
      if not(@shared.validate_title(model.title_input)) {
        return (@rabbita.none, model)
      }
      let title = model.title_input
      let content = model.content_input
      let cmd = @http.post(
        @shared.api_posts,
        Json(({ "title": title, "content": content } : Json)),
        expect=Json(fn(result) { dispatch(PostCreated(result)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode post")
          }
        }),
      )
      (cmd, { ..model, loading: true })
    }
    PostCreated(Ok(post)) =>
      (
        @rabbita.none,
        {
          ..model,
          page: ViewPost(post.id),
          current_post: Some(post),
          comments: [],
          title_input: "",
          content_input: "",
          loading: false,
        },
      )
    PostCreated(Err(_)) => (@rabbita.none, { ..model, loading: false })
    UpdatePost(id) => {
      if not(@shared.validate_title(model.title_input)) {
        return (@rabbita.none, model)
      }
      let title = model.title_input
      let content = model.content_input
      let cmd = @http.post(
        @shared.api_post(id),
        Json(({ "title": title, "content": content } : Json)),
        expect=Json(fn(result) { dispatch(PostUpdated(result)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode post")
          }
        }),
      )
      (cmd, { ..model, loading: true })
    }
    PostUpdated(Ok(post)) =>
      (
        fetch_comments(dispatch, post.id),
        {
          ..model,
          page: ViewPost(post.id),
          current_post: Some(post),
          loading: false,
        },
      )
    PostUpdated(Err(_)) => (@rabbita.none, { ..model, loading: false })
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
      (cmd, model)
    }
    PostDeleted(Ok(id)) => {
      let posts = model.posts.filter(fn(p) { p.id != id })
      (@rabbita.none, { ..model, posts, page: PostList })
    }
    PostDeleted(Err(_)) => (@rabbita.none, model)
    AddComment(post_id) => {
      if model.comment_content == "" {
        return (@rabbita.none, model)
      }
      let author = @shared.normalize_author(model.comment_author)
      let content = model.comment_content
      let cmd = @http.post(
        @shared.api_post_comments(post_id),
        Json(({ "author": author, "content": content } : Json)),
        expect=Json(fn(result) { dispatch(CommentAdded(result)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode comment")
          }
        }),
      )
      (cmd, model)
    }
    CommentAdded(Ok(comment)) => {
      let comments = model.comments.copy()
      comments.push(comment)
      (
        @rabbita.none,
        { ..model, comments, comment_author: "", comment_content: "" },
      )
    }
    CommentAdded(Err(_)) => (@rabbita.none, model)
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
      (cmd, model)
    }
    CommentDeleted(Ok(comment_id)) => {
      let comments = model.comments.filter(fn(c) { c.id != comment_id })
      (@rabbita.none, { ..model, comments, })
    }
    CommentDeleted(Err(_)) => (@rabbita.none, model)
  }
}

///|
fn view_header(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Html {
  @html.div(
    style=[
      "display: flex", "justify-content: space-between", "align-items: center", "padding: 16px 0",
      "margin-bottom: 32px",
    ],
    [
      @html.div(style=["cursor: pointer"], on_click=dispatch(GoToList), [
        @html.h1(
          style=[
            "font-size: 24px", "font-weight: 700", "color: #1a1a2e", "letter-spacing: -0.5px",
          ],
          "Blog",
        ),
      ]),
      @html.button(
        on_click=dispatch(GoToNewPost),
        style=[
          "padding: 10px 24px", "background: #1a1a2e", "color: white", "border: none",
          "border-radius: 8px", "cursor: pointer", "font-size: 14px", "font-weight: 500",
          "letter-spacing: 0.3px", "transition: all 0.2s",
        ],
        "Write",
      ),
    ],
  )
}

///|
fn view_post_list(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  @html.div([
    view_header(dispatch),
    if model.loading {
      @html.div(
        style=[
          "text-align: center", "padding: 60px 0", "color: #94a3b8", "font-size: 15px",
        ],
        [@html.text("Loading...")],
      )
    } else if model.posts.length() == 0 {
      @html.div(
        style=["text-align: center", "padding: 80px 0", "color: #94a3b8"],
        [
          @html.p(
            style=["font-size: 18px", "margin-bottom: 8px"],
            "No posts yet",
          ),
          @html.p(style=["font-size: 14px"], "Write your first post!"),
        ],
      )
    } else {
      @html.div(
        model.posts.map(fn(post) {
          @html.div(
            style=[
              "padding: 24px 28px", "margin-bottom: 12px", "background: white", "border-radius: 12px",
              "border: 1px solid #f0f0f5", "cursor: pointer", "transition: all 0.2s",
            ],
            on_click=dispatch(GoToViewPost(post.id)),
            [
              @html.div(
                style=[
                  "display: flex", "align-items: center", "margin-bottom: 12px",
                ],
                [
                  @html.span(
                    style=[
                      "font-size: 12px", "color: #94a3b8", "text-transform: uppercase",
                      "letter-spacing: 0.5px",
                    ],
                    post.created_at,
                  ),
                ],
              ),
              @html.h2(
                style=[
                  "margin-bottom: 10px", "color: #1a1a2e", "font-size: 20px", "font-weight: 600",
                  "line-height: 1.4",
                ],
                post.title,
              ),
              @html.p(
                style=["color: #64748b", "font-size: 15px", "line-height: 1.6"],
                @shared.truncate(post.content, 120),
              ),
            ],
          )
        }),
      )
    },
  ])
}

///|
fn view_comments_section(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
  post_id : Int,
) -> @rabbita.Html {
  @html.div(style=["margin-top: 40px"], [
    @html.h3(
      style=[
        "font-size: 18px", "font-weight: 600", "color: #1a1a2e", "margin-bottom: 20px",
      ],
      "Comments (\{model.comments.length()})",
    ),
    // Comment form
    @html.div(
      style=[
        "margin-bottom: 28px", "padding: 20px", "background: #f8f9fc", "border-radius: 12px",
      ],
      [
        @html.div(style=["margin-bottom: 12px"], [
          @html.input(
            input_type=Text,
            placeholder="Name (optional)",
            value=model.comment_author,
            on_input=fn(value) { dispatch(CommentAuthorChanged(value)) },
            style=[
              "width: 100%", "padding: 10px 14px", "border: 1px solid #e2e8f0", "border-radius: 8px",
              "font-size: 14px", "outline: none", "background: white",
            ],
            "",
          ),
        ]),
        @html.div(style=["margin-bottom: 12px"], [
          @html.textarea(
            placeholder="Write a comment...",
            value=model.comment_content,
            on_input=fn(value) { dispatch(CommentContentChanged(value)) },
            rows=3,
            style=[
              "width: 100%", "padding: 10px 14px", "border: 1px solid #e2e8f0", "border-radius: 8px",
              "font-size: 14px", "outline: none", "resize: vertical", "font-family: inherit",
              "background: white",
            ],
            "",
          ),
        ]),
        @html.button(
          on_click=dispatch(AddComment(post_id)),
          style=[
            "padding: 10px 20px", "background: #1a1a2e", "color: white", "border: none",
            "border-radius: 8px", "cursor: pointer", "font-size: 14px", "font-weight: 500",
          ],
          "Post Comment",
        ),
      ],
    ),
    // Comment list
    if model.comments.length() == 0 {
      @html.p(
        style=["color: #94a3b8", "font-size: 14px", "padding: 8px 0"],
        "No comments yet. Be the first!",
      )
    } else {
      @html.div(
        model.comments.map(fn(comment) {
          @html.div(
            style=[
              "padding: 16px 20px", "margin-bottom: 8px", "background: white", "border-radius: 10px",
              "border: 1px solid #f0f0f5",
            ],
            [
              @html.div(
                style=[
                  "display: flex", "justify-content: space-between", "align-items: center",
                  "margin-bottom: 8px",
                ],
                [
                  @html.div(
                    style=["display: flex", "align-items: center", "gap: 10px"],
                    [
                      @html.span(
                        style=[
                          "font-weight: 600", "color: #1a1a2e", "font-size: 14px",
                        ],
                        comment.author,
                      ),
                      @html.span(
                        style=["color: #94a3b8", "font-size: 12px"],
                        comment.created_at,
                      ),
                    ],
                  ),
                  @html.button(
                    on_click=dispatch(DeleteComment(post_id, comment.id)),
                    style=[
                      "padding: 4px 10px", "background: transparent", "color: #94a3b8",
                      "border: 1px solid #e2e8f0", "border-radius: 6px", "cursor: pointer",
                      "font-size: 12px",
                    ],
                    "Delete",
                  ),
                ],
              ),
              @html.p(
                style=["color: #475569", "font-size: 14px", "line-height: 1.6"],
                comment.content,
              ),
            ],
          )
        }),
      )
    },
  ])
}

///|
fn view_post_detail(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
  id : Int,
) -> @rabbita.Html {
  @html.div([
    view_header(dispatch),
    if model.loading {
      @html.div(
        style=[
          "text-align: center", "padding: 60px 0", "color: #94a3b8", "font-size: 15px",
        ],
        [@html.text("Loading...")],
      )
    } else {
      match model.current_post {
        None =>
          @html.div(
            style=["text-align: center", "padding: 60px 0", "color: #94a3b8"],
            [@html.text("Post not found.")],
          )
        Some(post) =>
          @html.div([
            @html.div(
              style=[
                "background: white", "padding: 36px 40px", "border-radius: 12px",
                "border: 1px solid #f0f0f5",
              ],
              [
                @html.div(style=["margin-bottom: 24px"], [
                  @html.span(
                    style=[
                      "font-size: 12px", "color: #94a3b8", "text-transform: uppercase",
                      "letter-spacing: 0.5px",
                    ],
                    "Created \{post.created_at}  |  Updated \{post.updated_at}",
                  ),
                ]),
                @html.h1(
                  style=[
                    "margin-bottom: 28px", "color: #1a1a2e", "font-size: 32px", "font-weight: 700",
                    "line-height: 1.3", "letter-spacing: -0.5px",
                  ],
                  post.title,
                ),
                @html.div(
                  style=[
                    "white-space: pre-wrap", "line-height: 1.8", "font-size: 16px",
                    "color: #334155",
                  ],
                  [@html.text(post.content)],
                ),
                @html.div(
                  style=[
                    "margin-top: 36px", "padding-top: 20px", "border-top: 1px solid #f0f0f5",
                    "display: flex", "gap: 10px",
                  ],
                  [
                    @html.button(
                      on_click=dispatch(GoToEditPost(id)),
                      style=[
                        "padding: 10px 20px", "background: white", "color: #1a1a2e",
                        "border: 1px solid #e2e8f0", "border-radius: 8px", "cursor: pointer",
                        "font-size: 14px", "font-weight: 500",
                      ],
                      "Edit",
                    ),
                    @html.button(
                      on_click=dispatch(DeletePost(id)),
                      style=[
                        "padding: 10px 20px", "background: white", "color: #dc2626",
                        "border: 1px solid #fecaca", "border-radius: 8px", "cursor: pointer",
                        "font-size: 14px", "font-weight: 500",
                      ],
                      "Delete",
                    ),
                    @html.button(
                      on_click=dispatch(GoToList),
                      style=[
                        "padding: 10px 20px", "background: white", "color: #64748b",
                        "border: 1px solid #e2e8f0", "border-radius: 8px", "cursor: pointer",
                        "font-size: 14px", "font-weight: 500",
                      ],
                      "Back",
                    ),
                  ],
                ),
              ],
            ),
            view_comments_section(dispatch, model, id),
          ])
      }
    },
  ])
}

///|
fn view_post_form(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
  edit_id : Int?,
) -> @rabbita.Html {
  let is_edit = match edit_id {
    Some(_) => true
    None => false
  }
  let heading = if is_edit { "Edit Post" } else { "New Post" }
  let submit_label = if is_edit { "Update" } else { "Publish" }
  @html.div([
    view_header(dispatch),
    @html.div(
      style=[
        "background: white", "padding: 36px 40px", "border-radius: 12px", "border: 1px solid #f0f0f5",
      ],
      [
        @html.h2(
          style=[
            "margin-bottom: 28px", "color: #1a1a2e", "font-size: 24px", "font-weight: 700",
          ],
          heading,
        ),
        if model.loading && is_edit && model.current_post is None {
          @html.div(
            style=["text-align: center", "padding: 40px 0", "color: #94a3b8"],
            [@html.text("Loading...")],
          )
        } else {
          @html.div([
            @html.div(style=["margin-bottom: 20px"], [
              @html.label(
                style=[
                  "display: block", "margin-bottom: 6px", "font-weight: 500", "color: #475569",
                  "font-size: 14px",
                ],
                "Title",
              ),
              @html.input(
                input_type=Text,
                placeholder="Post title",
                value=model.title_input,
                on_input=fn(value) { dispatch(TitleChanged(value)) },
                style=[
                  "width: 100%", "padding: 12px 16px", "border: 1px solid #e2e8f0",
                  "border-radius: 8px", "font-size: 16px", "outline: none", "background: #f8f9fc",
                ],
                "",
              ),
            ]),
            @html.div(style=["margin-bottom: 24px"], [
              @html.label(
                style=[
                  "display: block", "margin-bottom: 6px", "font-weight: 500", "color: #475569",
                  "font-size: 14px",
                ],
                "Content",
              ),
              @html.textarea(
                placeholder="Write your post...",
                value=model.content_input,
                on_input=fn(value) { dispatch(ContentChanged(value)) },
                rows=14,
                style=[
                  "width: 100%", "padding: 14px 16px", "border: 1px solid #e2e8f0",
                  "border-radius: 8px", "font-size: 15px", "line-height: 1.7", "outline: none",
                  "resize: vertical", "font-family: inherit", "background: #f8f9fc",
                ],
                "",
              ),
            ]),
            @html.div(style=["display: flex", "gap: 10px"], [
              @html.button(
                on_click=match edit_id {
                  Some(id) => dispatch(UpdatePost(id))
                  None => dispatch(CreatePost)
                },
                style=[
                  "padding: 12px 28px", "background: #1a1a2e", "color: white", "border: none",
                  "border-radius: 8px", "cursor: pointer", "font-size: 15px", "font-weight: 500",
                ],
                submit_label,
              ),
              @html.button(
                on_click=dispatch(GoToList),
                style=[
                  "padding: 12px 28px", "background: white", "color: #64748b", "border: 1px solid #e2e8f0",
                  "border-radius: 8px", "cursor: pointer", "font-size: 15px", "font-weight: 500",
                ],
                "Cancel",
              ),
            ]),
          ])
        },
      ],
    ),
  ])
}

///|
fn view(dispatch : @rabbita.Dispatch[Msg], model : Model) -> @rabbita.Html {
  @html.div(
    style=["max-width: 720px", "margin: 0 auto", "padding: 24px 20px"],
    [
      match model.page {
        PostList => view_post_list(dispatch, model)
        ViewPost(id) => view_post_detail(dispatch, model, id)
        NewPost => view_post_form(dispatch, model, None)
        EditPost(id) => view_post_form(dispatch, model, Some(id))
      },
    ],
  )
}

///|
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model={
      posts: [],
      current_post: None,
      comments: [],
      page: PostList,
      title_input: "",
      content_input: "",
      comment_author: "",
      comment_content: "",
      loading: false,
    },
    update~,
    view~,
  )
  let app = @rabbita.new(app_cell)
  app.with_init(dispatch(Init))
  app.mount("app")
}
