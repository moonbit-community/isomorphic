///|
/// Fetch all polls from the backend and dispatch `GotPolls` with the result.
fn fetch_polls(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    @shared.api_polls,
    expect=Json(result => dispatch(GotPolls(result)), json => {
      Ok(@json.from_json(json)) catch {
        _ => Err("Failed to decode polls")
      }
    }),
  )
}

///|
/// Handle each `Msg` by returning an updated model and an optional side-effect command.
// TODO (upstream): @http.Expecting is not well designed?
#warnings("-unresolved_type_variable")
pub fn Model::update(
  self : Model,
  msg~ : Msg,
  dispatch~ : @rabbita.Dispatch[Msg],
) -> (Model, @rabbita.Cmd) {
  match msg {
    Init => (self, fetch_polls(dispatch))
    GotPolls(Ok(polls)) => ({ ..self, polls, }, @rabbita.none)
    GotPolls(Err(_)) => (self, @rabbita.none)
    QuestionInputChanged(v) => ({ ..self, question_input: v }, @rabbita.none)
    OptionInputChanged(idx, v) => {
      let new_opts = self.option_inputs.copy()
      new_opts[idx] = v
      ({ ..self, option_inputs: new_opts }, @rabbita.none)
    }
    AddOptionInput => {
      if self.option_inputs.length() >= @shared.max_options {
        return (self, @rabbita.none)
      }
      let new_opts = self.option_inputs.copy()
      new_opts.push("")
      ({ ..self, option_inputs: new_opts }, @rabbita.none)
    }
    RemoveOptionInput(idx) => {
      if self.option_inputs.length() <= @shared.min_options {
        return (self, @rabbita.none)
      }
      let new_opts = self.option_inputs.copy()
      ignore(new_opts.remove(idx))
      ({ ..self, option_inputs: new_opts }, @rabbita.none)
    }
    CreatePoll => {
      if !@shared.validate_question(self.question_input) {
        return (self, @rabbita.none)
      }
      // Filter out empty options and validate
      let valid_options = self.option_inputs.filter(fn(text) {
        !text.is_empty()
      })
      if valid_options.length() < @shared.min_options {
        return (self, @rabbita.none)
      }
      for text in valid_options {
        if !@shared.validate_option(text) {
          return (self, @rabbita.none)
        }
      }
      let options_json = valid_options.map(fn(t) { t.to_json() })
      let body : Json = {
        "question": self.question_input,
        "options": options_json,
      }
      let cmd = @http.post(
        @shared.api_polls,
        Json(body),
        expect=Json(fn(r) { dispatch(PollCreated(r)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode poll")
          }
        }),
      )
      ({ ..self, question_input: "", option_inputs: ["", ""] }, cmd)
    }
    PollCreated(Ok(poll)) => {
      let polls = self.polls.copy()
      // Insert at the beginning (newest first, matching backend ORDER BY id DESC)
      let new_polls : Array[@shared.Poll] = [poll]
      for p in polls {
        new_polls.push(p)
      }
      ({ ..self, polls: new_polls }, @rabbita.none)
    }
    PollCreated(Err(_)) => (self, @rabbita.none)
    Vote(poll_id, option_id) => {
      // Check if already voted
      if self.voted.contains(poll_id) {
        return (self, @rabbita.none)
      }
      let body : Json = { "option_id": option_id.to_double() }
      let cmd = @http.post(
        @shared.api_poll_vote(poll_id),
        Json(body),
        expect=Json(fn(r) { dispatch(Voted(r)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode poll")
          }
        }),
      )
      let new_voted = self.voted.copy()
      new_voted.push(poll_id)
      ({ ..self, voted: new_voted }, cmd)
    }
    Voted(Ok(updated_poll)) => {
      let polls = self.polls.map(fn(p) {
        if p.id == updated_poll.id {
          updated_poll
        } else {
          p
        }
      })
      ({ ..self, polls, }, @rabbita.none)
    }
    Voted(Err(_)) => (self, @rabbita.none)
    DeletePoll(id) => {
      let cmd = @http.delete(
        @shared.api_poll(id),
        expect=Text(fn(result) {
          dispatch(
            PollDeleted(
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
    PollDeleted(Ok(id)) => {
      let polls = self.polls.filter(fn(p) { p.id != id })
      ({ ..self, polls, }, @rabbita.none)
    }
    PollDeleted(Err(_)) => (self, @rabbita.none)
  }
}
