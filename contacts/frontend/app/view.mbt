///|
/// Render the full contacts UI: header, search bar, add-contact form,
/// favorites section, and all-contacts section.
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let sorted = @shared.sort_contacts(self.contacts)
  let filtered = @shared.filter_contacts(sorted, self.search_query)
  let favorites = filtered.filter(fn(c) { c.favorite })
  let non_favorites = filtered.filter(fn(c) { !c.favorite })
  @html.div(
    style=container_style,
    {
      let sections : Array[@rabbita.Html] = []
      // Header
      sections.push(
        @html.div(style=header_style) <| [
          @html.h1(style=header_title_style) <| "Contacts",
          @html.p(style=header_subtitle_style) <| "Your address book",
        ],
      )
      // Search bar
      sections.push(
        @html.div(style=search_wrapper_style) <| [
          @html.input(
            input_type=Text,
            placeholder="Search contacts...",
            value=self.search_query,
            on_input=fn(v) { dispatch(SearchChanged(v)) },
            style=search_input_style,
          ) <| "",
        ],
      )
      // Contact count + Add button
      sections.push(
        view_card("") <| [
          @html.div(style=toolbar_style) <| [
            @html.span(style=contact_count_style) <| ({
              let count = self.contacts.length()
              let suffix = if count != 1 { "s" } else { "" }
              "\{count} contact\{suffix}"
            }),
            @html.button(
              on_click=dispatch(ToggleForm),
              style=add_contact_btn_style,
            ) <| (if self.show_form { "Cancel" } else { "+ Add Contact" }),
          ],
          // Add contact form (toggled)
          if self.show_form {
            @html.form(on_submit=dispatch(AddContact), style=form_style) <| [
              @html.input(
                input_type=Text,
                placeholder="Name",
                value=self.name_input,
                on_input=fn(v) { dispatch(NameInputChanged(v)) },
                style=input_style,
              ) <| "",
              @html.input(
                input_type=Text,
                placeholder="Email",
                value=self.email_input,
                on_input=fn(v) { dispatch(EmailInputChanged(v)) },
                style=input_style,
              ) <| "",
              @html.input(
                input_type=Text,
                placeholder="Phone",
                value=self.phone_input,
                on_input=fn(v) { dispatch(PhoneInputChanged(v)) },
                style=input_style,
              ) <| "",
              @html.button(type_="submit", style=submit_btn_style) <| "Save Contact",
            ]
          } else {
            @html.div(style=[]) <| ""
          },
        ],
      )
      // Favorites section
      if favorites.length() > 0 {
        sections.push(
          view_card("Favorites") <| favorites.map(fn(c) {
            view_contact_row(dispatch, c)
          }),
        )
      }
      // All contacts section
      if non_favorites.length() > 0 {
        sections.push(
          view_card(
            if favorites.length() > 0 {
              "Other Contacts"
            } else {
              "All Contacts"
            },
          ) <| non_favorites.map(fn(c) { view_contact_row(dispatch, c) }),
        )
      } else if favorites.length() == 0 &&
        self.contacts.length() > 0 &&
        self.search_query != "" {
        sections.push(
          view_card("Contacts") <| [
            @html.p(style=empty_msg_style) <| "No contacts match your search",
          ],
        )
      } else if self.contacts.length() == 0 {
        sections.push(
          view_card("Contacts") <| [
            @html.p(style=empty_msg_style) <| "No contacts yet. Add your first contact!",
          ],
        )
      }
      sections
    },
  )
}

///|
/// Render a single contact row.
fn view_contact_row(
  dispatch : @rabbita.Dispatch[Msg],
  contact : @shared.Contact,
) -> @rabbita.Html {
  let color = person_color(contact.id)
  let initials = @shared.get_initials(contact.name)
  @html.div(style=contact_row_style) <| [
    // Avatar circle with initials
    @html.div(style=[
      "width: 42px",
      "height: 42px",
      "border-radius: 50%",
      "flex-shrink: 0",
      "background: \{color}",
      "color: white",
      "font-size: 15px",
      "font-weight: 700",
      "display: flex",
      "align-items: center",
      "justify-content: center",
    ]) <| initials,
    // Name, email, phone
    @html.div(style=contact_info_style) <| [
      @html.div(style=contact_name_style) <| contact.name,
      @html.div(style=contact_email_style) <| contact.email,
      @html.div(style=contact_phone_style) <| @shared.format_phone(
        contact.phone,
      ),
    ],
    // Favorite star button
    @html.button(
      on_click=dispatch(ToggleFavorite(contact.id)),
      style=fav_btn_style,
    ) <| (if contact.favorite { "\u{2605}" } else { "\u{2606}" }),
    // Delete button
    @html.button(
      on_click=dispatch(DeleteContact(contact.id)),
      style=delete_btn_style,
    ) <| "X",
  ]
}

///|
/// Render a white card with a section title.
fn view_card(title : String, children : Array[@rabbita.Html]) -> @rabbita.Html {
  @html.div(
    style=card_style,
    {
      let all : Array[@rabbita.Html] = []
      if title != "" {
        all.push(@html.h2(style=card_title_style) <| title)
      }
      for child in children {
        all.push(child)
      }
      all
    },
  )
}

///|
/// Pick a consistent color for a contact based on their id.
fn person_color(id : Int) -> String {
  let colors = [
    "#667eea", "#e91e63", "#00bcd4", "#ff9800", "#8bc34a", "#9c27b0", "#009688",
    "#f44336", "#3f51b5", "#795548",
  ]
  colors[(id - 1) % colors.length()]
}
