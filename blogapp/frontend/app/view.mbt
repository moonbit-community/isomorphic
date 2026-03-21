///|
/// Render the top-level blog view, delegating to the appropriate sub-view based on the current page.
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=["max-width: 720px", "margin: 0 auto", "padding: 24px 20px"]) <| [
    match self.page {
      PostList => self.view_post_list(dispatch)
      ViewPost(id) => self.view_post_detail(dispatch, id)
      NewPost => self.view_post_form(dispatch, None)
      EditPost(id) => self.view_post_form(dispatch, Some(id))
    },
  ]
}
