///|
fn Model::view_post_form(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
  edit_id : Int?,
) -> @rabbita.Html {
  let is_edit = match edit_id {
    Some(_) => true
    None => false
  }
  let heading = if is_edit { "Edit Post" } else { "New Post" }
  let submit_label = if is_edit { "Update" } else { "Publish" }
  @html.div() <| [
    view_header(dispatch),
    @html.div(style=[
      "background: white", "padding: 36px 40px", "border-radius: 12px", "border: 1px solid #f0f0f5",
    ]) <| [
      @html.h2(style=[
        "margin-bottom: 28px", "color: #1a1a2e", "font-size: 24px", "font-weight: 700",
      ]) <| heading,
      if self.loading && is_edit && self.current_post is None {
        @html.div(style=[
          "text-align: center", "padding: 40px 0", "color: #94a3b8",
        ]) <| [
          @html.text("Loading..."),
        ]
      } else {
        @html.div() <| [
          @html.div(style=["margin-bottom: 20px"]) <| [
            @html.label(style=[
              "display: block", "margin-bottom: 6px", "font-weight: 500", "color: #475569",
              "font-size: 14px",
            ]) <| "Title",
            @html.input(
              input_type=Text,
              placeholder="Post title",
              value=self.title_input,
              on_input=fn(value) { dispatch(TitleChanged(value)) },
              style=[
                "width: 100%", "padding: 12px 16px", "border: 1px solid #e2e8f0",
                "border-radius: 8px", "font-size: 16px", "outline: none", "background: #f8f9fc",
              ],
            ) <| "",
          ],
          @html.div(style=["margin-bottom: 24px"]) <| [
            @html.label(style=[
              "display: block", "margin-bottom: 6px", "font-weight: 500", "color: #475569",
              "font-size: 14px",
            ]) <| "Content",
            @html.textarea(
              placeholder="Write your post...",
              value=self.content_input,
              on_input=fn(value) { dispatch(ContentChanged(value)) },
              rows=14,
              style=[
                "width: 100%", "padding: 14px 16px", "border: 1px solid #e2e8f0",
                "border-radius: 8px", "font-size: 15px", "line-height: 1.7", "outline: none",
                "resize: vertical", "font-family: inherit", "background: #f8f9fc",
              ],
            ) <| "",
          ],
          @html.div(style=["display: flex", "gap: 10px"]) <| [
            @html.button(
              on_click=match edit_id {
                Some(id) => dispatch(UpdatePost(id))
                None => dispatch(CreatePost)
              },
              style=[
                "padding: 12px 28px", "background: #1a1a2e", "color: white", "border: none",
                "border-radius: 8px", "cursor: pointer", "font-size: 15px", "font-weight: 500",
              ],
            ) <| submit_label,
            @html.button(on_click=dispatch(GoToList), style=[
              "padding: 12px 28px", "background: white", "color: #64748b", "border: 1px solid #e2e8f0",
              "border-radius: 8px", "cursor: pointer", "font-size: 15px", "font-weight: 500",
            ]) <| "Cancel",
          ],
        ]
      },
    ],
  ]
}
