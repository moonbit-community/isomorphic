///|
/// Check if the user has voted on a specific poll.
fn Model::has_voted(self : Model, poll_id : Int) -> Bool {
  self.voted.contains(poll_id)
}

///|
/// Top-level view: renders the header, create-poll form, and all poll cards.
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=container_style) <| ({
    let sections : Array[@rabbita.Html] = []
    // Header
    sections.push(
      @html.div(style=header_style) <| [
        @html.h1(style=header_title_style) <| "Poll App",
        @html.p(style=header_subtitle_style) <| "Create polls and vote",
      ],
    )
    // Create Poll card
    sections.push(self.view_create_poll(dispatch))
    // Poll cards
    for poll in self.polls {
      sections.push(self.view_poll_card(dispatch, poll))
    }
    // Empty state
    if self.polls.length() == 0 {
      sections.push(
        view_card("Polls") <| [
          @html.p(style=empty_polls_style) <| "No polls yet. Create one above!",
        ],
      )
    }
    sections
  })
}

///|
/// Render the "Create Poll" form card.
fn Model::view_create_poll(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let option_fields : Array[@rabbita.Html] = []
  for i in 0..<self.option_inputs.length() {
    let idx = i
    option_fields.push(
      @html.div(style=option_row_style) <| [
        @html.input(
          input_type=Text,
          placeholder="Option \{idx + 1}",
          value=self.option_inputs[idx],
          on_input=fn(v) { dispatch(OptionInputChanged(idx, v)) },
          style=option_input_style,
        ) <| "",
        if self.option_inputs.length() > @shared.min_options {
          @html.button(
            on_click=dispatch(RemoveOptionInput(idx)),
            type_="button",
            style=remove_option_btn_style,
          ) <| "-"
        } else {
          @html.span(style=[]) <| ""
        },
      ],
    )
  }
  view_card("Create Poll") <| [
    @html.form(on_submit=dispatch(CreatePoll), style=form_style) <| ({
      let children : Array[@rabbita.Html] = []
      children.push(
        @html.input(
          input_type=Text,
          placeholder="What's your question?",
          value=self.question_input,
          on_input=fn(v) { dispatch(QuestionInputChanged(v)) },
          style=input_style,
        ) <| "",
      )
      children.push(@html.div(style=options_label_style) <| "Options")
      for field in option_fields {
        children.push(field)
      }
      if self.option_inputs.length() < @shared.max_options {
        children.push(
          @html.button(
            on_click=dispatch(AddOptionInput),
            type_="button",
            style=add_option_btn_style,
          ) <| "+ Add Option",
        )
      }
      children.push(
        @html.button(type_="submit", style=submit_btn_style) <| "Create Poll",
      )
      children
    }),
  ]
}

///|
/// Render a single poll card with voting bars.
fn Model::view_poll_card(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
  poll : @shared.Poll,
) -> @rabbita.Html {
  let total = @shared.compute_total_votes(poll.options)
  let voted = self.has_voted(poll.id)
  let option_bars : Array[@rabbita.Html] = []
  for opt in poll.options {
    let pct = @shared.compute_percentage(opt.votes, total)
    let poll_id = poll.id
    let option_id = opt.id
    if voted {
      // Show results bar (non-clickable)
      option_bars.push(
        @html.div(style=result_bar_style) <| [
          // Fill bar
          @html.div(style=[
            "position: absolute",
            "top: 0",
            "left: 0",
            "bottom: 0",
            "width: \{pct}%",
            "background: linear-gradient(135deg, rgba(102,126,234,0.2), rgba(118,75,162,0.2))",
            "border-radius: 10px",
            "transition: width 0.3s ease",
          ]) <| "",
          // Text content
          @html.div(style=result_content_style) <| [
            @html.span(style=option_text_style) <| opt.text,
            @html.span(style=vote_count_style) <| "\{opt.votes} votes (\{pct}%)",
          ],
        ],
      )
    } else {
      // Clickable vote bar
      option_bars.push(
        @html.div(
          on_click=dispatch(Vote(poll_id, option_id)),
          style=vote_bar_style,
        ) <| [
          @html.span(style=option_text_style) <| opt.text,
        ],
      )
    }
  }
  view_card("") <| ({
    let children : Array[@rabbita.Html] = []
    // Poll question as title
    children.push(
      @html.div(style=poll_header_style) <| [
        @html.h3(style=poll_question_style) <| poll.question,
        @html.button(
          on_click=dispatch(DeletePoll(poll.id)),
          style=delete_btn_style,
        ) <| "X",
      ],
    )
    for bar in option_bars {
      children.push(bar)
    }
    // Total votes footer
    if total > 0 {
      children.push(
        @html.div(style=total_votes_style) <| "\{total} total votes",
      )
    }
    if !voted && total == 0 {
      children.push(
        @html.div(style=vote_hint_style) <| "Click an option to vote",
      )
    }
    children
  })
}

///|
/// Render a white card with a section title.
fn view_card(title : String, children : Array[@rabbita.Html]) -> @rabbita.Html {
  @html.div(style=card_style) <| ({
    let all : Array[@rabbita.Html] = []
    if title != "" {
      all.push(@html.h2(style=card_title_style) <| title)
    }
    for child in children {
      all.push(child)
    }
    all
  })
}
