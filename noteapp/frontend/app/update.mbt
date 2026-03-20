///|
/// Fetch all notes from the backend API and dispatch `GotNotes` with the result.
fn fetch_notes(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    @shared.api_notes,
    expect=Json(result => dispatch(GotNotes(result)), json => {
      Ok(@json.from_json(json)) catch {
        _ => Err("Failed to decode notes")
      }
    }),
  )
}

///|
/// Central state machine for the notes UI (Elm / MVU architecture).
///
/// Given the current model and an incoming message, returns the next model
/// together with a side-effect command (`@rabbita.Cmd`).
///
/// Parameters
///
/// - `self`     – the current application state.
/// - `msg`      – the message that triggers a state transition.
/// - `dispatch` – a callback provided by the Rabbita runtime that turns a
///   `Msg` into a `Cmd`.  It is the only way an asynchronous side-effect
///   (e.g. an HTTP response handler) can feed a new message back into the
///   update loop.
// TODO (upstream): @http.Expecting is not well designed?
#warnings("-unresolved_type_variable")
pub fn Model::update(
  self : Model,
  msg~ : Msg,
  dispatch~ : @rabbita.Dispatch[Msg],
) -> (Model, @rabbita.Cmd) {
  match msg {
    Init => (self, fetch_notes(dispatch))
    GotNotes(Ok(notes)) => {
      let sorted = @shared.sort_notes(notes)
      ({ ..self, notes: sorted }, @rabbita.none)
    }
    GotNotes(Err(_)) => (self, @rabbita.none)
    TitleInputChanged(v) => ({ ..self, title_input: v }, @rabbita.none)
    ContentInputChanged(v) => ({ ..self, content_input: v }, @rabbita.none)
    SaveNote => {
      if !@shared.validate_title(self.title_input) {
        return (self, @rabbita.none)
      }
      if !@shared.validate_content(self.content_input) {
        return (self, @rabbita.none)
      }
      let title = self.title_input
      let content = self.content_input
      let body : Json = { "title": title, "content": content }
      let cmd = @http.post(
        @shared.api_notes,
        Json(body),
        expect=Json(fn(r) { dispatch(NoteSaved(r)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode note")
          }
        }),
      )
      ({ ..self, title_input: "", content_input: "" }, cmd)
    }
    NoteSaved(Ok(note)) => {
      let notes = self.notes.copy()
      notes.push(note)
      let sorted = @shared.sort_notes(notes)
      ({ ..self, notes: sorted }, @rabbita.none)
    }
    NoteSaved(Err(_)) => (self, @rabbita.none)
    SelectNote(id) => ({ ..self, selected_note_id: id }, @rabbita.none)
    DeselectNote => ({ ..self, selected_note_id: 0 }, @rabbita.none)
    TogglePin(id) => {
      let cmd = @http.post(
        @shared.api_note_pin(id),
        Json({}),
        expect=Json(fn(r) { dispatch(NotePinToggled(r)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode note")
          }
        }),
      )
      (self, cmd)
    }
    NotePinToggled(Ok(updated)) => {
      let notes = self.notes.map(fn(n) {
        if n.id == updated.id {
          updated
        } else {
          n
        }
      })
      let sorted = @shared.sort_notes(notes)
      ({ ..self, notes: sorted }, @rabbita.none)
    }
    NotePinToggled(Err(_)) => (self, @rabbita.none)
    DeleteNote(id) => {
      let cmd = @http.delete(
        @shared.api_note(id),
        expect=Text(fn(result) {
          dispatch(
            NoteDeleted(
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
    NoteDeleted(Ok(id)) => {
      let notes = self.notes.filter(fn(n) { n.id != id })
      let selected = if self.selected_note_id == id {
        0
      } else {
        self.selected_note_id
      }
      ({ ..self, notes, selected_note_id: selected }, @rabbita.none)
    }
    NoteDeleted(Err(_)) => (self, @rabbita.none)
  }
}
