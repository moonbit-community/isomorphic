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
fn Model::view_post_list(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div([
    view_header(dispatch),
    if self.loading {
      @html.div(
        style=[
          "text-align: center", "padding: 60px 0", "color: #94a3b8", "font-size: 15px",
        ],
        [@html.text("Loading...")],
      )
    } else if self.posts.length() == 0 {
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
        self.posts.map(fn(post) {
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
