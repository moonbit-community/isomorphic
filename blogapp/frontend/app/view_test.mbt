// TODO(upstream): Add `derive(Debug)` to `Html` / `VNode` in rabbita so view
// tests can use `debug_inspect` snapshots (like update tests) instead of
// rendering to HTML strings.
//
// TODO: Write an html beautify/pretty-print function so rendered snapshots are
// human-readable (indented, one-tag-per-line) instead of single-line blobs.
//
// TODO(upstream): `App::with_init` missing `#cfg(target="js")` blocks native
// SSR — see https://github.com/moonbit-community/rabbita/issues/110
// Once fixed, `render_to_string(static_cell(html))` works on native target,
// enabling server-side rendering from the backend. The Html DSL, Cell,
// static_cell, and render_to_string are all already target-agnostic.
// To do native SSR:
//   1. Patch or wait for rabbita fix (one-line `#cfg` guard)
//   2. Change frontend/app `supported_targets` from "js" to "all"
//   3. Guard `update.mbt` HTTP imports with `#cfg(target="js")`
//   4. Backend imports frontend/app, calls `model.view(noop_dispatch)`
//   5. Use `render_to_string(static_cell(html))` to produce the HTML string
//   6. Inject into the HTML shell instead of empty `<div id="app"></div>`

///|
/// Render an `Html` node to its HTML string representation for test assertions.
#warnings("-alert_unstable")
fn render(html : @rabbita.Html) -> String {
  @rabbita.render_to_string(@rabbita.static_cell(html))
}

// ── Post list view ──────────────────────────────────────────────────

///|
test "view shows loading indicator on post list" {
  let model = { ..empty_model(), loading: true }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 720px;margin: 0 auto;padding: 24px 20px"><div><div style="display: flex;justify-content: space-between;align-items: center;padding: 16px 0;margin-bottom: 32px"><div style="cursor: pointer"><h1 style="font-size: 24px;font-weight: 700;color: #1a1a2e;letter-spacing: -0.5px">Blog</h1></div><button style="padding: 10px 24px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500;letter-spacing: 0.3px;transition: all 0.2s">Write</button></div><div style="text-align: center;padding: 60px 0;color: #94a3b8;font-size: 15px">Loading...</div></div></div>
  ))
}

///|
test "view shows empty state on post list" {
  inspect(render(empty_model().view(noop_dispatch)), content=(
    #|<div style="max-width: 720px;margin: 0 auto;padding: 24px 20px"><div><div style="display: flex;justify-content: space-between;align-items: center;padding: 16px 0;margin-bottom: 32px"><div style="cursor: pointer"><h1 style="font-size: 24px;font-weight: 700;color: #1a1a2e;letter-spacing: -0.5px">Blog</h1></div><button style="padding: 10px 24px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500;letter-spacing: 0.3px;transition: all 0.2s">Write</button></div><div style="text-align: center;padding: 80px 0;color: #94a3b8"><p style="font-size: 18px;margin-bottom: 8px">No posts yet</p><p style="font-size: 14px">Write your first post!</p></div></div></div>
  ))
}

///|
test "view renders post list items" {
  let model = { ..empty_model(), posts: sample_posts() }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 720px;margin: 0 auto;padding: 24px 20px"><div><div style="display: flex;justify-content: space-between;align-items: center;padding: 16px 0;margin-bottom: 32px"><div style="cursor: pointer"><h1 style="font-size: 24px;font-weight: 700;color: #1a1a2e;letter-spacing: -0.5px">Blog</h1></div><button style="padding: 10px 24px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500;letter-spacing: 0.3px;transition: all 0.2s">Write</button></div><div><div style="padding: 24px 28px;margin-bottom: 12px;background: white;border-radius: 12px;border: 1px solid #f0f0f5;cursor: pointer;transition: all 0.2s"><div style="display: flex;align-items: center;margin-bottom: 12px"><span style="font-size: 12px;color: #94a3b8;text-transform: uppercase;letter-spacing: 0.5px">2024-01-01</span></div><h2 style="margin-bottom: 10px;color: #1a1a2e;font-size: 20px;font-weight: 600;line-height: 1.4">First Post</h2><p style="color: #64748b;font-size: 15px;line-height: 1.6">Hello world</p></div><div style="padding: 24px 28px;margin-bottom: 12px;background: white;border-radius: 12px;border: 1px solid #f0f0f5;cursor: pointer;transition: all 0.2s"><div style="display: flex;align-items: center;margin-bottom: 12px"><span style="font-size: 12px;color: #94a3b8;text-transform: uppercase;letter-spacing: 0.5px">2024-01-02</span></div><h2 style="margin-bottom: 10px;color: #1a1a2e;font-size: 20px;font-weight: 600;line-height: 1.4">Second Post</h2><p style="color: #64748b;font-size: 15px;line-height: 1.6">Another post</p></div></div></div></div>
  ))
}

// ── New post form ───────────────────────────────────────────────────

///|
test "view shows new post form" {
  let model = { ..empty_model(), page: NewPost }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 720px;margin: 0 auto;padding: 24px 20px"><div><div style="display: flex;justify-content: space-between;align-items: center;padding: 16px 0;margin-bottom: 32px"><div style="cursor: pointer"><h1 style="font-size: 24px;font-weight: 700;color: #1a1a2e;letter-spacing: -0.5px">Blog</h1></div><button style="padding: 10px 24px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500;letter-spacing: 0.3px;transition: all 0.2s">Write</button></div><div style="background: white;padding: 36px 40px;border-radius: 12px;border: 1px solid #f0f0f5"><h2 style="margin-bottom: 28px;color: #1a1a2e;font-size: 24px;font-weight: 700">New Post</h2><div><div style="margin-bottom: 20px"><label style="display: block;margin-bottom: 6px;font-weight: 500;color: #475569;font-size: 14px">Title</label><input type="text" autocomplete="off" placeholder="Post title" style="width: 100%;padding: 12px 16px;border: 1px solid #e2e8f0;border-radius: 8px;font-size: 16px;outline: none;background: #f8f9fc" value=""></input></div><div style="margin-bottom: 24px"><label style="display: block;margin-bottom: 6px;font-weight: 500;color: #475569;font-size: 14px">Content</label><textarea rows="14" placeholder="Write your post..." style="width: 100%;padding: 14px 16px;border: 1px solid #e2e8f0;border-radius: 8px;font-size: 15px;line-height: 1.7;outline: none;resize: vertical;font-family: inherit;background: #f8f9fc" value=""></textarea></div><div style="display: flex;gap: 10px"><button style="padding: 12px 28px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 15px;font-weight: 500">Publish</button><button style="padding: 12px 28px;background: white;color: #64748b;border: 1px solid #e2e8f0;border-radius: 8px;cursor: pointer;font-size: 15px;font-weight: 500">Cancel</button></div></div></div></div></div>
  ))
}

///|
test "new post form preserves input values" {
  let model = {
    ..empty_model(),
    page: NewPost,
    title_input: "Draft Title",
    content_input: "Draft content",
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 720px;margin: 0 auto;padding: 24px 20px"><div><div style="display: flex;justify-content: space-between;align-items: center;padding: 16px 0;margin-bottom: 32px"><div style="cursor: pointer"><h1 style="font-size: 24px;font-weight: 700;color: #1a1a2e;letter-spacing: -0.5px">Blog</h1></div><button style="padding: 10px 24px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500;letter-spacing: 0.3px;transition: all 0.2s">Write</button></div><div style="background: white;padding: 36px 40px;border-radius: 12px;border: 1px solid #f0f0f5"><h2 style="margin-bottom: 28px;color: #1a1a2e;font-size: 24px;font-weight: 700">New Post</h2><div><div style="margin-bottom: 20px"><label style="display: block;margin-bottom: 6px;font-weight: 500;color: #475569;font-size: 14px">Title</label><input type="text" autocomplete="off" placeholder="Post title" style="width: 100%;padding: 12px 16px;border: 1px solid #e2e8f0;border-radius: 8px;font-size: 16px;outline: none;background: #f8f9fc" value="Draft Title"></input></div><div style="margin-bottom: 24px"><label style="display: block;margin-bottom: 6px;font-weight: 500;color: #475569;font-size: 14px">Content</label><textarea rows="14" placeholder="Write your post..." style="width: 100%;padding: 14px 16px;border: 1px solid #e2e8f0;border-radius: 8px;font-size: 15px;line-height: 1.7;outline: none;resize: vertical;font-family: inherit;background: #f8f9fc" value="Draft content"></textarea></div><div style="display: flex;gap: 10px"><button style="padding: 12px 28px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 15px;font-weight: 500">Publish</button><button style="padding: 12px 28px;background: white;color: #64748b;border: 1px solid #e2e8f0;border-radius: 8px;cursor: pointer;font-size: 15px;font-weight: 500">Cancel</button></div></div></div></div></div>
  ))
}

// ── Edit post form ──────────────────────────────────────────────────

///|
test "view shows edit post form loading state" {
  let model = {
    ..empty_model(),
    page: EditPost(1),
    loading: true,
    current_post: None,
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 720px;margin: 0 auto;padding: 24px 20px"><div><div style="display: flex;justify-content: space-between;align-items: center;padding: 16px 0;margin-bottom: 32px"><div style="cursor: pointer"><h1 style="font-size: 24px;font-weight: 700;color: #1a1a2e;letter-spacing: -0.5px">Blog</h1></div><button style="padding: 10px 24px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500;letter-spacing: 0.3px;transition: all 0.2s">Write</button></div><div style="background: white;padding: 36px 40px;border-radius: 12px;border: 1px solid #f0f0f5"><h2 style="margin-bottom: 28px;color: #1a1a2e;font-size: 24px;font-weight: 700">Edit Post</h2><div style="text-align: center;padding: 40px 0;color: #94a3b8">Loading...</div></div></div></div>
  ))
}

///|
test "view shows edit post form with data" {
  let model = {
    ..empty_model(),
    page: EditPost(1),
    current_post: Some(
      {
        id: 1,
        title: "Existing",
        content: "Body",
        created_at: "2024-01-01",
        updated_at: "2024-01-01",
      },
    ),
    title_input: "Existing",
    content_input: "Body",
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 720px;margin: 0 auto;padding: 24px 20px"><div><div style="display: flex;justify-content: space-between;align-items: center;padding: 16px 0;margin-bottom: 32px"><div style="cursor: pointer"><h1 style="font-size: 24px;font-weight: 700;color: #1a1a2e;letter-spacing: -0.5px">Blog</h1></div><button style="padding: 10px 24px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500;letter-spacing: 0.3px;transition: all 0.2s">Write</button></div><div style="background: white;padding: 36px 40px;border-radius: 12px;border: 1px solid #f0f0f5"><h2 style="margin-bottom: 28px;color: #1a1a2e;font-size: 24px;font-weight: 700">Edit Post</h2><div><div style="margin-bottom: 20px"><label style="display: block;margin-bottom: 6px;font-weight: 500;color: #475569;font-size: 14px">Title</label><input type="text" autocomplete="off" placeholder="Post title" style="width: 100%;padding: 12px 16px;border: 1px solid #e2e8f0;border-radius: 8px;font-size: 16px;outline: none;background: #f8f9fc" value="Existing"></input></div><div style="margin-bottom: 24px"><label style="display: block;margin-bottom: 6px;font-weight: 500;color: #475569;font-size: 14px">Content</label><textarea rows="14" placeholder="Write your post..." style="width: 100%;padding: 14px 16px;border: 1px solid #e2e8f0;border-radius: 8px;font-size: 15px;line-height: 1.7;outline: none;resize: vertical;font-family: inherit;background: #f8f9fc" value="Body"></textarea></div><div style="display: flex;gap: 10px"><button style="padding: 12px 28px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 15px;font-weight: 500">Update</button><button style="padding: 12px 28px;background: white;color: #64748b;border: 1px solid #e2e8f0;border-radius: 8px;cursor: pointer;font-size: 15px;font-weight: 500">Cancel</button></div></div></div></div></div>
  ))
}

// ── View post detail ────────────────────────────────────────────────

///|
test "view shows post detail loading" {
  let model = {
    ..empty_model(),
    page: ViewPost(1),
    loading: true,
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 720px;margin: 0 auto;padding: 24px 20px"><div><div style="display: flex;justify-content: space-between;align-items: center;padding: 16px 0;margin-bottom: 32px"><div style="cursor: pointer"><h1 style="font-size: 24px;font-weight: 700;color: #1a1a2e;letter-spacing: -0.5px">Blog</h1></div><button style="padding: 10px 24px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500;letter-spacing: 0.3px;transition: all 0.2s">Write</button></div><div style="text-align: center;padding: 60px 0;color: #94a3b8;font-size: 15px">Loading...</div></div></div>
  ))
}

///|
test "view shows post detail with post and no comments" {
  let model = {
    ..empty_model(),
    page: ViewPost(1),
    current_post: Some(
      {
        id: 1,
        title: "My Post",
        content: "Hello world",
        created_at: "2024-01-01",
        updated_at: "2024-01-01",
      },
    ),
    comments: [],
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 720px;margin: 0 auto;padding: 24px 20px"><div><div style="display: flex;justify-content: space-between;align-items: center;padding: 16px 0;margin-bottom: 32px"><div style="cursor: pointer"><h1 style="font-size: 24px;font-weight: 700;color: #1a1a2e;letter-spacing: -0.5px">Blog</h1></div><button style="padding: 10px 24px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500;letter-spacing: 0.3px;transition: all 0.2s">Write</button></div><div><div style="background: white;padding: 36px 40px;border-radius: 12px;border: 1px solid #f0f0f5"><div style="margin-bottom: 24px"><span style="font-size: 12px;color: #94a3b8;text-transform: uppercase;letter-spacing: 0.5px">Created 2024-01-01  |  Updated 2024-01-01</span></div><h1 style="margin-bottom: 28px;color: #1a1a2e;font-size: 32px;font-weight: 700;line-height: 1.3;letter-spacing: -0.5px">My Post</h1><div style="white-space: pre-wrap;line-height: 1.8;font-size: 16px;color: #334155">Hello world</div><div style="margin-top: 36px;padding-top: 20px;border-top: 1px solid #f0f0f5;display: flex;gap: 10px"><button style="padding: 10px 20px;background: white;color: #1a1a2e;border: 1px solid #e2e8f0;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500">Edit</button><button style="padding: 10px 20px;background: white;color: #dc2626;border: 1px solid #fecaca;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500">Delete</button><button style="padding: 10px 20px;background: white;color: #64748b;border: 1px solid #e2e8f0;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500">Back</button></div></div><div style="margin-top: 40px"><h3 style="font-size: 18px;font-weight: 600;color: #1a1a2e;margin-bottom: 20px">Comments (0)</h3><div style="margin-bottom: 28px;padding: 20px;background: #f8f9fc;border-radius: 12px"><div style="margin-bottom: 12px"><input type="text" autocomplete="off" placeholder="Name (optional)" style="width: 100%;padding: 10px 14px;border: 1px solid #e2e8f0;border-radius: 8px;font-size: 14px;outline: none;background: white" value=""></input></div><div style="margin-bottom: 12px"><textarea rows="3" placeholder="Write a comment..." style="width: 100%;padding: 10px 14px;border: 1px solid #e2e8f0;border-radius: 8px;font-size: 14px;outline: none;resize: vertical;font-family: inherit;background: white" value=""></textarea></div><button style="padding: 10px 20px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500">Post Comment</button></div><p style="color: #94a3b8;font-size: 14px;padding: 8px 0">No comments yet. Be the first!</p></div></div></div></div>
  ))
}

///|
test "view shows post detail with comments" {
  let model = {
    ..empty_model(),
    page: ViewPost(1),
    current_post: Some(
      {
        id: 1,
        title: "My Post",
        content: "Hello world",
        created_at: "2024-01-01",
        updated_at: "2024-01-01",
      },
    ),
    comments: sample_comments(),
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 720px;margin: 0 auto;padding: 24px 20px"><div><div style="display: flex;justify-content: space-between;align-items: center;padding: 16px 0;margin-bottom: 32px"><div style="cursor: pointer"><h1 style="font-size: 24px;font-weight: 700;color: #1a1a2e;letter-spacing: -0.5px">Blog</h1></div><button style="padding: 10px 24px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500;letter-spacing: 0.3px;transition: all 0.2s">Write</button></div><div><div style="background: white;padding: 36px 40px;border-radius: 12px;border: 1px solid #f0f0f5"><div style="margin-bottom: 24px"><span style="font-size: 12px;color: #94a3b8;text-transform: uppercase;letter-spacing: 0.5px">Created 2024-01-01  |  Updated 2024-01-01</span></div><h1 style="margin-bottom: 28px;color: #1a1a2e;font-size: 32px;font-weight: 700;line-height: 1.3;letter-spacing: -0.5px">My Post</h1><div style="white-space: pre-wrap;line-height: 1.8;font-size: 16px;color: #334155">Hello world</div><div style="margin-top: 36px;padding-top: 20px;border-top: 1px solid #f0f0f5;display: flex;gap: 10px"><button style="padding: 10px 20px;background: white;color: #1a1a2e;border: 1px solid #e2e8f0;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500">Edit</button><button style="padding: 10px 20px;background: white;color: #dc2626;border: 1px solid #fecaca;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500">Delete</button><button style="padding: 10px 20px;background: white;color: #64748b;border: 1px solid #e2e8f0;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500">Back</button></div></div><div style="margin-top: 40px"><h3 style="font-size: 18px;font-weight: 600;color: #1a1a2e;margin-bottom: 20px">Comments (2)</h3><div style="margin-bottom: 28px;padding: 20px;background: #f8f9fc;border-radius: 12px"><div style="margin-bottom: 12px"><input type="text" autocomplete="off" placeholder="Name (optional)" style="width: 100%;padding: 10px 14px;border: 1px solid #e2e8f0;border-radius: 8px;font-size: 14px;outline: none;background: white" value=""></input></div><div style="margin-bottom: 12px"><textarea rows="3" placeholder="Write a comment..." style="width: 100%;padding: 10px 14px;border: 1px solid #e2e8f0;border-radius: 8px;font-size: 14px;outline: none;resize: vertical;font-family: inherit;background: white" value=""></textarea></div><button style="padding: 10px 20px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500">Post Comment</button></div><div><div style="padding: 16px 20px;margin-bottom: 8px;background: white;border-radius: 10px;border: 1px solid #f0f0f5"><div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 8px"><div style="display: flex;align-items: center;gap: 10px"><span style="font-weight: 600;color: #1a1a2e;font-size: 14px">Alice</span><span style="color: #94a3b8;font-size: 12px">2024-01-01</span></div><button style="padding: 4px 10px;background: transparent;color: #94a3b8;border: 1px solid #e2e8f0;border-radius: 6px;cursor: pointer;font-size: 12px">Delete</button></div><p style="color: #475569;font-size: 14px;line-height: 1.6">Great post!</p></div><div style="padding: 16px 20px;margin-bottom: 8px;background: white;border-radius: 10px;border: 1px solid #f0f0f5"><div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 8px"><div style="display: flex;align-items: center;gap: 10px"><span style="font-weight: 600;color: #1a1a2e;font-size: 14px">Bob</span><span style="color: #94a3b8;font-size: 12px">2024-01-02</span></div><button style="padding: 4px 10px;background: transparent;color: #94a3b8;border: 1px solid #e2e8f0;border-radius: 6px;cursor: pointer;font-size: 12px">Delete</button></div><p style="color: #475569;font-size: 14px;line-height: 1.6">Thanks for sharing</p></div></div></div></div></div></div>
  ))
}

///|
test "view shows post not found when no current_post" {
  let model = {
    ..empty_model(),
    page: ViewPost(999),
    loading: false,
    current_post: None,
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 720px;margin: 0 auto;padding: 24px 20px"><div><div style="display: flex;justify-content: space-between;align-items: center;padding: 16px 0;margin-bottom: 32px"><div style="cursor: pointer"><h1 style="font-size: 24px;font-weight: 700;color: #1a1a2e;letter-spacing: -0.5px">Blog</h1></div><button style="padding: 10px 24px;background: #1a1a2e;color: white;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 500;letter-spacing: 0.3px;transition: all 0.2s">Write</button></div><div style="text-align: center;padding: 60px 0;color: #94a3b8">Post not found.</div></div></div>
  ))
}
