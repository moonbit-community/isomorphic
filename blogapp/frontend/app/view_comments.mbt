///|
fn Model::view_comments_section(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
  post_id : Int,
) -> @rabbita.Html {
  @html.div(style=["margin-top: 40px"]) <| [
    @html.h3(style=[
      "font-size: 18px", "font-weight: 600", "color: #1a1a2e", "margin-bottom: 20px",
    ]) <| "Comments (\{self.comments.length()})",
    // Comment form
    @html.div(style=[
      "margin-bottom: 28px", "padding: 20px", "background: #f8f9fc", "border-radius: 12px",
    ]) <| [
      @html.div(style=["margin-bottom: 12px"]) <| [
        @html.input(
          input_type=Text,
          placeholder="Name (optional)",
          value=self.comment_author,
          on_input=fn(value) { dispatch(CommentAuthorChanged(value)) },
          style=[
            "width: 100%", "padding: 10px 14px", "border: 1px solid #e2e8f0", "border-radius: 8px",
            "font-size: 14px", "outline: none", "background: white",
          ],
        ) <| "",
      ],
      @html.div(style=["margin-bottom: 12px"]) <| [
        @html.textarea(
          placeholder="Write a comment...",
          value=self.comment_content,
          on_input=fn(value) { dispatch(CommentContentChanged(value)) },
          rows=3,
          style=[
            "width: 100%", "padding: 10px 14px", "border: 1px solid #e2e8f0", "border-radius: 8px",
            "font-size: 14px", "outline: none", "resize: vertical", "font-family: inherit",
            "background: white",
          ],
        ) <| "",
      ],
      @html.button(on_click=dispatch(AddComment(post_id)), style=[
        "padding: 10px 20px", "background: #1a1a2e", "color: white", "border: none",
        "border-radius: 8px", "cursor: pointer", "font-size: 14px", "font-weight: 500",
      ]) <| "Post Comment",
    ],
    // Comment list
    if self.comments.is_empty() {
      @html.p(style=["color: #94a3b8", "font-size: 14px", "padding: 8px 0"]) <| "No comments yet. Be the first!"
    } else {
      @html.div() <| self.comments.map(fn(comment) {
        @html.div(style=[
          "padding: 16px 20px", "margin-bottom: 8px", "background: white", "border-radius: 10px",
          "border: 1px solid #f0f0f5",
        ]) <| [
          @html.div(style=[
            "display: flex", "justify-content: space-between", "align-items: center",
            "margin-bottom: 8px",
          ]) <| [
            @html.div(style=[
              "display: flex", "align-items: center", "gap: 10px",
            ]) <| [
              @html.span(style=[
                "font-weight: 600", "color: #1a1a2e", "font-size: 14px",
              ]) <| comment.author,
              @html.span(style=["color: #94a3b8", "font-size: 12px"]) <| comment.created_at,
            ],
            @html.button(
              on_click=dispatch(DeleteComment(post_id, comment.id)),
              style=[
                "padding: 4px 10px", "background: transparent", "color: #94a3b8",
                "border: 1px solid #e2e8f0", "border-radius: 6px", "cursor: pointer",
                "font-size: 12px",
              ],
            ) <| "Delete",
          ],
          @html.p(style=[
            "color: #475569", "font-size: 14px", "line-height: 1.6",
          ]) <| comment.content,
        ]
      })
    },
  ]
}
