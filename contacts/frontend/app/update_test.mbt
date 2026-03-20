///|
fn noop_dispatch(_msg : Msg) -> @rabbita.Cmd {
  @rabbita.none
}

///|
fn empty_model() -> Model {
  {
    contacts: [],
    search_query: "",
    name_input: "",
    email_input: "",
    phone_input: "",
    show_form: false,
  }
}

///|
fn sample_contacts() -> Array[@shared.Contact] {
  [
    {
      id: 1,
      name: "Alice Smith",
      email: "alice@example.com",
      phone: "555-1234",
      favorite: false,
    },
    {
      id: 2,
      name: "Bob Jones",
      email: "bob@example.com",
      phone: "555-5678",
      favorite: true,
    },
    {
      id: 3,
      name: "Carol Lee",
      email: "carol@example.com",
      phone: "555-9012",
      favorite: false,
    },
  ]
}

// ── Init ─────────────────────────────────────────────────────────────

///|
test "Init returns model unchanged (fetch is side-effect only)" {
  let (model, _) = empty_model().update(msg=Init, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  contacts: [],
      #|  search_query: "",
      #|  name_input: "",
      #|  email_input: "",
      #|  phone_input: "",
      #|  show_form: false,
      #|}
    ),
  )
}

// ── GotContacts ──────────────────────────────────────────────────────

///|
test "GotContacts/Ok populates contacts" {
  let contacts = sample_contacts()
  let (model, _) = empty_model().update(
    msg=GotContacts(Ok(contacts)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  contacts: [
      #|    {
      #|      id: 1,
      #|      name: "Alice Smith",
      #|      email: "alice@example.com",
      #|      phone: "555-1234",
      #|      favorite: false,
      #|    },
      #|    {
      #|      id: 2,
      #|      name: "Bob Jones",
      #|      email: "bob@example.com",
      #|      phone: "555-5678",
      #|      favorite: true,
      #|    },
      #|    {
      #|      id: 3,
      #|      name: "Carol Lee",
      #|      email: "carol@example.com",
      #|      phone: "555-9012",
      #|      favorite: false,
      #|    },
      #|  ],
      #|  search_query: "",
      #|  name_input: "",
      #|  email_input: "",
      #|  phone_input: "",
      #|  show_form: false,
      #|}
    ),
  )
}

///|
test "GotContacts/Err leaves model unchanged" {
  let (model, _) = empty_model().update(
    msg=GotContacts(Err("network")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  contacts: [],
      #|  search_query: "",
      #|  name_input: "",
      #|  email_input: "",
      #|  phone_input: "",
      #|  show_form: false,
      #|}
    ),
  )
}

// ── SearchChanged ────────────────────────────────────────────────────

///|
test "SearchChanged updates search_query" {
  let (model, _) = empty_model().update(
    msg=SearchChanged("alice"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  contacts: [],
      #|  search_query: "alice",
      #|  name_input: "",
      #|  email_input: "",
      #|  phone_input: "",
      #|  show_form: false,
      #|}
    ),
  )
}

///|
test "SearchChanged preserves contacts" {
  let initial = { ..empty_model(), contacts: sample_contacts() }
  let (model, _) = initial.update(
    msg=SearchChanged("bob"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  contacts: [
      #|    {
      #|      id: 1,
      #|      name: "Alice Smith",
      #|      email: "alice@example.com",
      #|      phone: "555-1234",
      #|      favorite: false,
      #|    },
      #|    {
      #|      id: 2,
      #|      name: "Bob Jones",
      #|      email: "bob@example.com",
      #|      phone: "555-5678",
      #|      favorite: true,
      #|    },
      #|    {
      #|      id: 3,
      #|      name: "Carol Lee",
      #|      email: "carol@example.com",
      #|      phone: "555-9012",
      #|      favorite: false,
      #|    },
      #|  ],
      #|  search_query: "bob",
      #|  name_input: "",
      #|  email_input: "",
      #|  phone_input: "",
      #|  show_form: false,
      #|}
    ),
  )
}

// ── ToggleForm ───────────────────────────────────────────────────────

///|
test "ToggleForm opens form" {
  let (model, _) = empty_model().update(msg=ToggleForm, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  contacts: [],
      #|  search_query: "",
      #|  name_input: "",
      #|  email_input: "",
      #|  phone_input: "",
      #|  show_form: true,
      #|}
    ),
  )
}

///|
test "ToggleForm closes form" {
  let initial = { ..empty_model(), show_form: true }
  let (model, _) = initial.update(msg=ToggleForm, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  contacts: [],
      #|  search_query: "",
      #|  name_input: "",
      #|  email_input: "",
      #|  phone_input: "",
      #|  show_form: false,
      #|}
    ),
  )
}

// ── NameInputChanged / EmailInputChanged / PhoneInputChanged ─────────

///|
test "NameInputChanged updates name_input" {
  let (model, _) = empty_model().update(
    msg=NameInputChanged("Jane"),
    dispatch=noop_dispatch,
  )
  inspect(model.name_input, content="Jane")
}

///|
test "EmailInputChanged updates email_input" {
  let (model, _) = empty_model().update(
    msg=EmailInputChanged("jane@test.com"),
    dispatch=noop_dispatch,
  )
  inspect(model.email_input, content="jane@test.com")
}

///|
test "PhoneInputChanged updates phone_input" {
  let (model, _) = empty_model().update(
    msg=PhoneInputChanged("555-0000"),
    dispatch=noop_dispatch,
  )
  inspect(model.phone_input, content="555-0000")
}

// ── AddContact ───────────────────────────────────────────────────────

///|
test "AddContact with valid inputs clears form fields and hides form" {
  let initial = {
    ..empty_model(),
    name_input: "Jane Doe",
    email_input: "jane@example.com",
    phone_input: "555-0000",
    show_form: true,
  }
  let (model, _) = initial.update(msg=AddContact, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  contacts: [],
      #|  search_query: "",
      #|  name_input: "",
      #|  email_input: "",
      #|  phone_input: "",
      #|  show_form: false,
      #|}
    ),
  )
}

///|
test "AddContact with empty name does nothing" {
  let initial = {
    ..empty_model(),
    name_input: "",
    email_input: "jane@example.com",
    phone_input: "555-0000",
    show_form: true,
  }
  let (model, _) = initial.update(msg=AddContact, dispatch=noop_dispatch)
  inspect(model.name_input, content="")
  inspect(model.email_input, content="jane@example.com")
  inspect(model.show_form, content="true")
}

///|
test "AddContact with invalid email does nothing" {
  let initial = {
    ..empty_model(),
    name_input: "Jane",
    email_input: "not-an-email",
    phone_input: "555-0000",
    show_form: true,
  }
  let (model, _) = initial.update(msg=AddContact, dispatch=noop_dispatch)
  inspect(model.name_input, content="Jane")
  inspect(model.email_input, content="not-an-email")
  inspect(model.show_form, content="true")
}

///|
test "AddContact with invalid phone does nothing" {
  let initial = {
    ..empty_model(),
    name_input: "Jane",
    email_input: "jane@example.com",
    phone_input: "abc",
    show_form: true,
  }
  let (model, _) = initial.update(msg=AddContact, dispatch=noop_dispatch)
  inspect(model.name_input, content="Jane")
  inspect(model.phone_input, content="abc")
  inspect(model.show_form, content="true")
}

///|
test "AddContact with too-long name does nothing" {
  let long_name = "a".repeat(@shared.max_name_length + 1)
  let initial = {
    ..empty_model(),
    name_input: long_name,
    email_input: "jane@example.com",
    phone_input: "555-0000",
    show_form: true,
  }
  let (model, _) = initial.update(msg=AddContact, dispatch=noop_dispatch)
  inspect(model.name_input, content=long_name)
}

// ── ContactAdded ─────────────────────────────────────────────────────

///|
test "ContactAdded/Ok appends to list" {
  let initial = { ..empty_model(), contacts: sample_contacts() }
  let new_contact : @shared.Contact = {
    id: 4,
    name: "Dave",
    email: "dave@example.com",
    phone: "555-3333",
    favorite: false,
  }
  let (model, _) = initial.update(
    msg=ContactAdded(Ok(new_contact)),
    dispatch=noop_dispatch,
  )
  inspect(model.contacts.length(), content="4")
  inspect(model.contacts[3].name, content="Dave")
}

///|
test "ContactAdded/Err leaves model unchanged" {
  let initial = { ..empty_model(), contacts: sample_contacts() }
  let (model, _) = initial.update(
    msg=ContactAdded(Err("fail")),
    dispatch=noop_dispatch,
  )
  inspect(model.contacts.length(), content="3")
}

// ── FavoriteToggled ──────────────────────────────────────────────────

///|
test "FavoriteToggled/Ok replaces matching contact" {
  let initial = { ..empty_model(), contacts: sample_contacts() }
  let updated : @shared.Contact = {
    id: 1,
    name: "Alice Smith",
    email: "alice@example.com",
    phone: "555-1234",
    favorite: true,
  }
  let (model, _) = initial.update(
    msg=FavoriteToggled(Ok(updated)),
    dispatch=noop_dispatch,
  )
  inspect(model.contacts[0].favorite, content="true")
  // Other contacts unchanged
  inspect(model.contacts[1].favorite, content="true")
  inspect(model.contacts[2].favorite, content="false")
}

///|
test "FavoriteToggled/Err leaves model unchanged" {
  let initial = { ..empty_model(), contacts: sample_contacts() }
  let (model, _) = initial.update(
    msg=FavoriteToggled(Err("fail")),
    dispatch=noop_dispatch,
  )
  inspect(model.contacts[0].favorite, content="false")
}

// ── ContactDeleted ───────────────────────────────────────────────────

///|
test "ContactDeleted/Ok removes the contact" {
  let initial = { ..empty_model(), contacts: sample_contacts() }
  let (model, _) = initial.update(
    msg=ContactDeleted(Ok(1)),
    dispatch=noop_dispatch,
  )
  inspect(model.contacts.length(), content="2")
  inspect(model.contacts[0].name, content="Bob Jones")
}

///|
test "ContactDeleted/Ok with nonexistent id is no-op" {
  let initial = { ..empty_model(), contacts: sample_contacts() }
  let (model, _) = initial.update(
    msg=ContactDeleted(Ok(999)),
    dispatch=noop_dispatch,
  )
  inspect(model.contacts.length(), content="3")
}

///|
test "ContactDeleted/Err leaves model unchanged" {
  let initial = { ..empty_model(), contacts: sample_contacts() }
  let (model, _) = initial.update(
    msg=ContactDeleted(Err("fail")),
    dispatch=noop_dispatch,
  )
  inspect(model.contacts.length(), content="3")
}
