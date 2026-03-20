///|
fn noop_dispatch(_msg : Msg) -> @rabbita.Cmd {
  @rabbita.none
}

///|
fn empty_model() -> Model {
  {
    posts: [],
    current_post: None,
    comments: [],
    page: PostList,
    title_input: "",
    content_input: "",
    comment_author: "",
    comment_content: "",
    loading: false,
  }
}

///|
fn sample_posts() -> Array[@shared.Post] {
  [
    {
      id: 1,
      title: "First Post",
      content: "Hello world",
      created_at: "2024-01-01",
      updated_at: "2024-01-01",
    },
    {
      id: 2,
      title: "Second Post",
      content: "Another post",
      created_at: "2024-01-02",
      updated_at: "2024-01-02",
    },
  ]
}

///|
fn sample_comments() -> Array[@shared.Comment] {
  [
    {
      id: 1,
      post_id: 1,
      author: "Alice",
      content: "Great post!",
      created_at: "2024-01-01",
    },
    {
      id: 2,
      post_id: 1,
      author: "Bob",
      content: "Thanks for sharing",
      created_at: "2024-01-02",
    },
  ]
}

// ── Init ─────────────────────────────────────────────────────────────

///|
test "Init sets loading to true" {
  let (model, _) = empty_model().update(msg=Init, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: true,
      #|}
    ),
  )
}

// ── GotPosts ─────────────────────────────────────────────────────────

///|
test "GotPosts/Ok populates posts and clears loading" {
  let initial = { ..empty_model(), loading: true }
  let posts = sample_posts()
  let (model, _) = initial.update(
    msg=GotPosts(Ok(posts)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [
      #|    {
      #|      id: 1,
      #|      title: "First Post",
      #|      content: "Hello world",
      #|      created_at: "2024-01-01",
      #|      updated_at: "2024-01-01",
      #|    },
      #|    {
      #|      id: 2,
      #|      title: "Second Post",
      #|      content: "Another post",
      #|      created_at: "2024-01-02",
      #|      updated_at: "2024-01-02",
      #|    },
      #|  ],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

///|
test "GotPosts/Err clears loading without changing posts" {
  let initial = { ..empty_model(), loading: true }
  let (model, _) = initial.update(
    msg=GotPosts(Err("network")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

// ── GotPost ──────────────────────────────────────────────────────────

///|
test "GotPost/Ok sets current_post and populates title/content inputs" {
  let initial = { ..empty_model(), loading: true }
  let post : @shared.Post = {
    id: 1,
    title: "My Post",
    content: "Post body",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  }
  let (model, _) = initial.update(msg=GotPost(Ok(post)), dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: Some(
      #|    {
      #|      id: 1,
      #|      title: "My Post",
      #|      content: "Post body",
      #|      created_at: "2024-01-01",
      #|      updated_at: "2024-01-01",
      #|    },
      #|  ),
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "My Post",
      #|  content_input: "Post body",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

///|
test "GotPost/Err clears loading" {
  let initial = { ..empty_model(), loading: true }
  let (model, _) = initial.update(
    msg=GotPost(Err("not found")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

// ── GotComments ──────────────────────────────────────────────────────

///|
test "GotComments/Ok populates comments" {
  let comments = sample_comments()
  let (model, _) = empty_model().update(
    msg=GotComments(Ok(comments)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [
      #|    {
      #|      id: 1,
      #|      post_id: 1,
      #|      author: "Alice",
      #|      content: "Great post!",
      #|      created_at: "2024-01-01",
      #|    },
      #|    {
      #|      id: 2,
      #|      post_id: 1,
      #|      author: "Bob",
      #|      content: "Thanks for sharing",
      #|      created_at: "2024-01-02",
      #|    },
      #|  ],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

///|
test "GotComments/Err leaves model unchanged" {
  let (model, _) = empty_model().update(
    msg=GotComments(Err("fail")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

// ── Navigation ───────────────────────────────────────────────────────

///|
test "GoToList sets page to PostList and loading to true" {
  let initial = { ..empty_model(), page: NewPost }
  let (model, _) = initial.update(msg=GoToList, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: true,
      #|}
    ),
  )
}

///|
test "GoToNewPost sets page to NewPost and clears form inputs" {
  let initial = {
    ..empty_model(),
    title_input: "old title",
    content_input: "old content",
  }
  let (model, _) = initial.update(msg=GoToNewPost, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: NewPost,
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

///|
test "GoToViewPost sets page, clears post state, and sets loading" {
  let (model, _) = empty_model().update(
    msg=GoToViewPost(42),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: ViewPost(42),
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: true,
      #|}
    ),
  )
}

///|
test "GoToEditPost sets page and loading" {
  let (model, _) = empty_model().update(
    msg=GoToEditPost(5),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: EditPost(5),
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: true,
      #|}
    ),
  )
}

// ── Form inputs ──────────────────────────────────────────────────────

///|
test "TitleChanged updates title_input" {
  let (model, _) = empty_model().update(
    msg=TitleChanged("New Title"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "New Title",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

///|
test "ContentChanged updates content_input" {
  let (model, _) = empty_model().update(
    msg=ContentChanged("Some content"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "Some content",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

///|
test "CommentAuthorChanged updates comment_author" {
  let (model, _) = empty_model().update(
    msg=CommentAuthorChanged("Alice"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "Alice",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

///|
test "CommentContentChanged updates comment_content" {
  let (model, _) = empty_model().update(
    msg=CommentContentChanged("Nice post!"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "Nice post!",
      #|  loading: false,
      #|}
    ),
  )
}

// ── CreatePost ───────────────────────────────────────────────────────

///|
test "CreatePost with empty title does nothing" {
  let initial = { ..empty_model(), title_input: "", content_input: "body" }
  let (model, _) = initial.update(msg=CreatePost, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "body",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

///|
test "CreatePost with valid title sets loading" {
  let initial = {
    ..empty_model(),
    title_input: "My Post",
    content_input: "Content",
  }
  let (model, _) = initial.update(msg=CreatePost, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "My Post",
      #|  content_input: "Content",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: true,
      #|}
    ),
  )
}

// ── PostCreated ──────────────────────────────────────────────────────

///|
test "PostCreated/Ok navigates to ViewPost and clears form" {
  let initial = {
    ..empty_model(),
    title_input: "Draft",
    content_input: "Draft body",
    loading: true,
  }
  let post : @shared.Post = {
    id: 10,
    title: "Draft",
    content: "Draft body",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  }
  let (model, _) = initial.update(
    msg=PostCreated(Ok(post)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: Some(
      #|    {
      #|      id: 10,
      #|      title: "Draft",
      #|      content: "Draft body",
      #|      created_at: "2024-01-01",
      #|      updated_at: "2024-01-01",
      #|    },
      #|  ),
      #|  comments: [],
      #|  page: ViewPost(10),
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

///|
test "PostCreated/Err clears loading" {
  let initial = { ..empty_model(), loading: true }
  let (model, _) = initial.update(
    msg=PostCreated(Err("fail")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

// ── UpdatePost ───────────────────────────────────────────────────────

///|
test "UpdatePost with empty title does nothing" {
  let initial = { ..empty_model(), title_input: "", content_input: "body" }
  let (model, _) = initial.update(msg=UpdatePost(1), dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "body",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

///|
test "UpdatePost with valid title sets loading" {
  let initial = {
    ..empty_model(),
    title_input: "Updated",
    content_input: "Updated body",
  }
  let (model, _) = initial.update(msg=UpdatePost(1), dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "Updated",
      #|  content_input: "Updated body",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: true,
      #|}
    ),
  )
}

// ── PostUpdated ──────────────────────────────────────────────────────

///|
test "PostUpdated/Ok navigates to ViewPost" {
  let initial = { ..empty_model(), loading: true }
  let post : @shared.Post = {
    id: 1,
    title: "Updated",
    content: "Updated body",
    created_at: "2024-01-01",
    updated_at: "2024-01-02",
  }
  let (model, _) = initial.update(
    msg=PostUpdated(Ok(post)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: Some(
      #|    {
      #|      id: 1,
      #|      title: "Updated",
      #|      content: "Updated body",
      #|      created_at: "2024-01-01",
      #|      updated_at: "2024-01-02",
      #|    },
      #|  ),
      #|  comments: [],
      #|  page: ViewPost(1),
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

///|
test "PostUpdated/Err clears loading" {
  let initial = { ..empty_model(), loading: true }
  let (model, _) = initial.update(
    msg=PostUpdated(Err("fail")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

// ── PostDeleted ──────────────────────────────────────────────────────

///|
test "PostDeleted/Ok removes post and navigates to PostList" {
  let initial = { ..empty_model(), posts: sample_posts() }
  let (model, _) = initial.update(
    msg=PostDeleted(Ok(1)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [
      #|    {
      #|      id: 2,
      #|      title: "Second Post",
      #|      content: "Another post",
      #|      created_at: "2024-01-02",
      #|      updated_at: "2024-01-02",
      #|    },
      #|  ],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

///|
test "PostDeleted/Ok with nonexistent id is no-op on posts" {
  let initial = { ..empty_model(), posts: sample_posts() }
  let (model, _) = initial.update(
    msg=PostDeleted(Ok(999)),
    dispatch=noop_dispatch,
  )
  inspect(
    model.posts.length(),
    content=(
      #|2
    ),
  )
  debug_inspect(model.page, content="PostList")
}

///|
test "PostDeleted/Err leaves model unchanged" {
  let initial = { ..empty_model(), posts: sample_posts() }
  let (model, _) = initial.update(
    msg=PostDeleted(Err("fail")),
    dispatch=noop_dispatch,
  )
  inspect(model.posts.length(), content="2")
}

// ── AddComment ───────────────────────────────────────────────────────

///|
test "AddComment with empty content does nothing" {
  let initial = {
    ..empty_model(),
    comment_author: "Alice",
    comment_content: "",
  }
  let (model, _) = initial.update(msg=AddComment(1), dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  posts: [],
      #|  current_post: None,
      #|  comments: [],
      #|  page: PostList,
      #|  title_input: "",
      #|  content_input: "",
      #|  comment_author: "Alice",
      #|  comment_content: "",
      #|  loading: false,
      #|}
    ),
  )
}

// ── CommentAdded ─────────────────────────────────────────────────────

///|
test "CommentAdded/Ok appends comment and clears form" {
  let initial = {
    ..empty_model(),
    comments: sample_comments(),
    comment_author: "Charlie",
    comment_content: "New comment",
  }
  let new_comment : @shared.Comment = {
    id: 3,
    post_id: 1,
    author: "Charlie",
    content: "New comment",
    created_at: "2024-01-03",
  }
  let (model, _) = initial.update(
    msg=CommentAdded(Ok(new_comment)),
    dispatch=noop_dispatch,
  )
  inspect(model.comments.length(), content="3")
  inspect(model.comment_author, content="")
  inspect(model.comment_content, content="")
}

///|
test "CommentAdded/Err leaves model unchanged" {
  let initial = { ..empty_model(), comments: sample_comments() }
  let (model, _) = initial.update(
    msg=CommentAdded(Err("fail")),
    dispatch=noop_dispatch,
  )
  inspect(model.comments.length(), content="2")
}

// ── CommentDeleted ───────────────────────────────────────────────────

///|
test "CommentDeleted/Ok removes the comment" {
  let initial = { ..empty_model(), comments: sample_comments() }
  let (model, _) = initial.update(
    msg=CommentDeleted(Ok(1)),
    dispatch=noop_dispatch,
  )
  inspect(model.comments.length(), content="1")
  inspect(model.comments[0].id, content="2")
}

///|
test "CommentDeleted/Err leaves model unchanged" {
  let initial = { ..empty_model(), comments: sample_comments() }
  let (model, _) = initial.update(
    msg=CommentDeleted(Err("fail")),
    dispatch=noop_dispatch,
  )
  inspect(model.comments.length(), content="2")
}
