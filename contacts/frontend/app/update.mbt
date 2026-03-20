///|
/// Fetch all contacts from the backend via GET /api/contacts.
fn fetch_contacts(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    @shared.api_contacts,
    expect=Json(result => dispatch(GotContacts(result)), json => {
      Ok(@json.from_json(json)) catch {
        _ => Err("Failed to decode contacts")
      }
    }),
  )
}

///|
/// Central state machine for the contacts UI (Elm / MVU architecture).
///
/// Given the current model and an incoming message, returns the next model
/// together with a side-effect command (`@rabbita.Cmd`).
// TODO (upstream): @http.Expecting is not well designed?
#warnings("-unresolved_type_variable")
pub fn Model::update(
  self : Model,
  msg~ : Msg,
  dispatch~ : @rabbita.Dispatch[Msg],
) -> (Model, @rabbita.Cmd) {
  match msg {
    Init => (self, fetch_contacts(dispatch))
    GotContacts(Ok(contacts)) => ({ ..self, contacts, }, @rabbita.none)
    GotContacts(Err(_)) => (self, @rabbita.none)
    SearchChanged(v) => ({ ..self, search_query: v }, @rabbita.none)
    ToggleForm => ({ ..self, show_form: !self.show_form }, @rabbita.none)
    NameInputChanged(v) => ({ ..self, name_input: v }, @rabbita.none)
    EmailInputChanged(v) => ({ ..self, email_input: v }, @rabbita.none)
    PhoneInputChanged(v) => ({ ..self, phone_input: v }, @rabbita.none)
    AddContact => {
      if !@shared.validate_name(self.name_input) {
        return (self, @rabbita.none)
      }
      if !@shared.validate_email(self.email_input) {
        return (self, @rabbita.none)
      }
      if !@shared.validate_phone(self.phone_input) {
        return (self, @rabbita.none)
      }
      let body : Json = {
        "name": self.name_input,
        "email": self.email_input,
        "phone": self.phone_input,
      }
      let cmd = @http.post(
        @shared.api_contacts,
        Json(body),
        expect=Json(fn(r) { dispatch(ContactAdded(r)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode contact")
          }
        }),
      )
      (
        {
          ..self,
          name_input: "",
          email_input: "",
          phone_input: "",
          show_form: false,
        },
        cmd,
      )
    }
    ContactAdded(Ok(contact)) => {
      let contacts = self.contacts.copy()
      contacts.push(contact)
      ({ ..self, contacts, }, @rabbita.none)
    }
    ContactAdded(Err(_)) => (self, @rabbita.none)
    ToggleFavorite(id) => {
      let cmd = @http.post(
        @shared.api_contact_favorite(id),
        Json({}),
        expect=Json(fn(r) { dispatch(FavoriteToggled(r)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode contact")
          }
        }),
      )
      (self, cmd)
    }
    FavoriteToggled(Ok(updated)) => {
      let contacts = self.contacts.map(fn(c) {
        if c.id == updated.id {
          updated
        } else {
          c
        }
      })
      ({ ..self, contacts, }, @rabbita.none)
    }
    FavoriteToggled(Err(_)) => (self, @rabbita.none)
    DeleteContact(id) => {
      let cmd = @http.delete(
        @shared.api_contact(id),
        expect=Text(fn(result) {
          dispatch(
            ContactDeleted(
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
    ContactDeleted(Ok(id)) => {
      let contacts = self.contacts.filter(fn(c) { c.id != id })
      ({ ..self, contacts, }, @rabbita.none)
    }
    ContactDeleted(Err(_)) => (self, @rabbita.none)
  }
}
