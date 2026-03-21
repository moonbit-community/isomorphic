///|
fn Model::view_post_detail(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
  id : Int,
) -> @rabbita.Html {
  @html.div() <| [
    view_header(dispatch),
    if self.loading {
      @html.div(style=[
        "text-align: center", "padding: 60px 0", "color: #94a3b8", "font-size: 15px",
      ]) <| [
        @html.text("Loading..."),
      ]
    } else {
      match self.current_post {
        None =>
          @html.div(style=[
            "text-align: center", "padding: 60px 0", "color: #94a3b8",
          ]) <| [
            @html.text("Post not found."),
          ]
        Some(post) =>
          @html.div() <| [
            @html.div(style=[
              "background: white", "padding: 36px 40px", "border-radius: 12px", "border: 1px solid #f0f0f5",
            ]) <| [
              @html.div(style=["margin-bottom: 24px"]) <| [
                @html.span(style=[
                  "font-size: 12px", "color: #94a3b8", "text-transform: uppercase",
                  "letter-spacing: 0.5px",
                ]) <| "Created \{post.created_at}  |  Updated \{post.updated_at}",
              ],
              @html.h1(style=[
                "margin-bottom: 28px", "color: #1a1a2e", "font-size: 32px", "font-weight: 700",
                "line-height: 1.3", "letter-spacing: -0.5px",
              ]) <| post.title,
              @html.div(style=[
                "white-space: pre-wrap", "line-height: 1.8", "font-size: 16px", "color: #334155",
              ]) <| [
                @html.text(post.content),
              ],
              @html.div(style=[
                "margin-top: 36px", "padding-top: 20px", "border-top: 1px solid #f0f0f5",
                "display: flex", "gap: 10px",
              ]) <| [
                @html.button(on_click=dispatch(GoToEditPost(id)), style=[
                  "padding: 10px 20px", "background: white", "color: #1a1a2e", "border: 1px solid #e2e8f0",
                  "border-radius: 8px", "cursor: pointer", "font-size: 14px", "font-weight: 500",
                ]) <| "Edit",
                @html.button(on_click=dispatch(DeletePost(id)), style=[
                  "padding: 10px 20px", "background: white", "color: #dc2626", "border: 1px solid #fecaca",
                  "border-radius: 8px", "cursor: pointer", "font-size: 14px", "font-weight: 500",
                ]) <| "Delete",
                @html.button(on_click=dispatch(GoToList), style=[
                  "padding: 10px 20px", "background: white", "color: #64748b", "border: 1px solid #e2e8f0",
                  "border-radius: 8px", "cursor: pointer", "font-size: 14px", "font-weight: 500",
                ]) <| "Back",
              ],
            ],
            self.view_comments_section(dispatch, id),
          ]
      }
    },
  ]
}
