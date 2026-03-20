///|
fn noop_dispatch(_msg : Msg) -> @rabbita.Cmd {
  @rabbita.none
}

///|
fn empty_model() -> Model {
  { notes: [], title_input: "", content_input: "", selected_note_id: 0 }
}

///|
fn sample_notes() -> Array[@shared.Note] {
  [
    { id: 1, title: "First Note", content: "Hello world", pinned: false },
    { id: 2, title: "Pinned Note", content: "Important stuff", pinned: true },
    { id: 3, title: "Third Note", content: "Some content here", pinned: false },
  ]
}

// ── Init ─────────────────────────────────────────────────────────────

///|
test "Init leaves model unchanged (side-effect fetches notes)" {
  let (model, _) = empty_model().update(msg=Init, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{ notes: [], title_input: "", content_input: "", selected_note_id: 0 }
    ),
  )
}

// ── GotNotes ─────────────────────────────────────────────────────────

///|
test "GotNotes/Ok populates notes sorted (pinned first)" {
  let notes = sample_notes()
  let (model, _) = empty_model().update(
    msg=GotNotes(Ok(notes)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  notes: [
      #|    {
      #|      id: 2,
      #|      title: "Pinned Note",
      #|      content: "Important stuff",
      #|      pinned: true,
      #|    },
      #|    {
      #|      id: 3,
      #|      title: "Third Note",
      #|      content: "Some content here",
      #|      pinned: false,
      #|    },
      #|    { id: 1, title: "First Note", content: "Hello world", pinned: false },
      #|  ],
      #|  title_input: "",
      #|  content_input: "",
      #|  selected_note_id: 0,
      #|}
    ),
  )
}

///|
test "GotNotes/Err leaves model unchanged" {
  let (model, _) = empty_model().update(
    msg=GotNotes(Err("network")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{ notes: [], title_input: "", content_input: "", selected_note_id: 0 }
    ),
  )
}

// ── TitleInputChanged ────────────────────────────────────────────────

///|
test "TitleInputChanged updates title_input" {
  let (model, _) = empty_model().update(
    msg=TitleInputChanged("My Title"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  notes: [],
      #|  title_input: "My Title",
      #|  content_input: "",
      #|  selected_note_id: 0,
      #|}
    ),
  )
}

///|
test "TitleInputChanged preserves notes" {
  let initial = { ..empty_model(), notes: sample_notes() }
  let (model, _) = initial.update(
    msg=TitleInputChanged("x"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.title_input,
    content=(
      #|"x"
    ),
  )
  debug_inspect(
    model.notes.length(),
    content=(
      #|3
    ),
  )
}

// ── ContentInputChanged ──────────────────────────────────────────────

///|
test "ContentInputChanged updates content_input" {
  let (model, _) = empty_model().update(
    msg=ContentInputChanged("Some content"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  notes: [],
      #|  title_input: "",
      #|  content_input: "Some content",
      #|  selected_note_id: 0,
      #|}
    ),
  )
}

// ── SaveNote ─────────────────────────────────────────────────────────

///|
test "SaveNote with empty title does nothing" {
  let initial = { ..empty_model(), title_input: "", content_input: "body" }
  let (model, _) = initial.update(msg=SaveNote, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  notes: [],
      #|  title_input: "",
      #|  content_input: "body",
      #|  selected_note_id: 0,
      #|}
    ),
  )
}

///|
test "SaveNote with empty content does nothing" {
  let initial = { ..empty_model(), title_input: "Title", content_input: "" }
  let (model, _) = initial.update(msg=SaveNote, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  notes: [],
      #|  title_input: "Title",
      #|  content_input: "",
      #|  selected_note_id: 0,
      #|}
    ),
  )
}

///|
test "SaveNote with valid inputs clears both fields" {
  let initial = {
    ..empty_model(),
    title_input: "New Note",
    content_input: "Note body",
  }
  let (model, _) = initial.update(msg=SaveNote, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{ notes: [], title_input: "", content_input: "", selected_note_id: 0 }
    ),
  )
}

///|
test "SaveNote with too-long title does nothing" {
  let long_title = "a".repeat(@shared.max_title_length + 1)
  let initial = {
    ..empty_model(),
    title_input: long_title,
    content_input: "body",
  }
  let (model, _) = initial.update(msg=SaveNote, dispatch=noop_dispatch)
  inspect(model.title_input, content=long_title)
}

///|
test "SaveNote with too-long content does nothing" {
  let long_content = "a".repeat(@shared.max_content_length + 1)
  let initial = {
    ..empty_model(),
    title_input: "Title",
    content_input: long_content,
  }
  let (model, _) = initial.update(msg=SaveNote, dispatch=noop_dispatch)
  inspect(model.content_input, content=long_content)
}

// ── NoteSaved ────────────────────────────────────────────────────────

///|
test "NoteSaved/Ok appends note and sorts" {
  let initial = { ..empty_model(), notes: sample_notes() }
  let new_note : @shared.Note = {
    id: 4,
    title: "Brand New",
    content: "Fresh content",
    pinned: false,
  }
  let (model, _) = initial.update(
    msg=NoteSaved(Ok(new_note)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  notes: [
      #|    {
      #|      id: 2,
      #|      title: "Pinned Note",
      #|      content: "Important stuff",
      #|      pinned: true,
      #|    },
      #|    { id: 4, title: "Brand New", content: "Fresh content", pinned: false },
      #|    {
      #|      id: 3,
      #|      title: "Third Note",
      #|      content: "Some content here",
      #|      pinned: false,
      #|    },
      #|    { id: 1, title: "First Note", content: "Hello world", pinned: false },
      #|  ],
      #|  title_input: "",
      #|  content_input: "",
      #|  selected_note_id: 0,
      #|}
    ),
  )
}

///|
test "NoteSaved/Err leaves model unchanged" {
  let initial = { ..empty_model(), notes: sample_notes() }
  let (model, _) = initial.update(
    msg=NoteSaved(Err("fail")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.notes.length(),
    content=(
      #|3
    ),
  )
}

// ── SelectNote / DeselectNote ────────────────────────────────────────

///|
test "SelectNote sets selected_note_id" {
  let (model, _) = empty_model().update(
    msg=SelectNote(42),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  notes: [],
      #|  title_input: "",
      #|  content_input: "",
      #|  selected_note_id: 42,
      #|}
    ),
  )
}

///|
test "DeselectNote clears selected_note_id" {
  let initial = { ..empty_model(), selected_note_id: 5 }
  let (model, _) = initial.update(msg=DeselectNote, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{ notes: [], title_input: "", content_input: "", selected_note_id: 0 }
    ),
  )
}

// ── TogglePin ────────────────────────────────────────────────────────

///|
test "TogglePin does not change model (side-effect only)" {
  let initial = { ..empty_model(), notes: sample_notes() }
  let (model, _) = initial.update(msg=TogglePin(1), dispatch=noop_dispatch)
  debug_inspect(
    model.notes.length(),
    content=(
      #|3
    ),
  )
}

// ── NotePinToggled ───────────────────────────────────────────────────

///|
test "NotePinToggled/Ok replaces matching note and re-sorts" {
  let initial = { ..empty_model(), notes: sample_notes() }
  let toggled : @shared.Note = {
    id: 1,
    title: "First Note",
    content: "Hello world",
    pinned: true,
  }
  let (model, _) = initial.update(
    msg=NotePinToggled(Ok(toggled)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  notes: [
      #|    {
      #|      id: 2,
      #|      title: "Pinned Note",
      #|      content: "Important stuff",
      #|      pinned: true,
      #|    },
      #|    { id: 1, title: "First Note", content: "Hello world", pinned: true },
      #|    {
      #|      id: 3,
      #|      title: "Third Note",
      #|      content: "Some content here",
      #|      pinned: false,
      #|    },
      #|  ],
      #|  title_input: "",
      #|  content_input: "",
      #|  selected_note_id: 0,
      #|}
    ),
  )
}

///|
test "NotePinToggled/Err leaves model unchanged" {
  let initial = { ..empty_model(), notes: sample_notes() }
  let (model, _) = initial.update(
    msg=NotePinToggled(Err("fail")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.notes.length(),
    content=(
      #|3
    ),
  )
}

// ── DeleteNote ───────────────────────────────────────────────────────

///|
test "DeleteNote does not change model (side-effect only)" {
  let initial = { ..empty_model(), notes: sample_notes() }
  let (model, _) = initial.update(msg=DeleteNote(1), dispatch=noop_dispatch)
  debug_inspect(
    model.notes.length(),
    content=(
      #|3
    ),
  )
}

// ── NoteDeleted ──────────────────────────────────────────────────────

///|
test "NoteDeleted/Ok removes the note" {
  let initial = { ..empty_model(), notes: sample_notes() }
  let (model, _) = initial.update(
    msg=NoteDeleted(Ok(1)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.notes.length(),
    content=(
      #|2
    ),
  )
  // Note with id=1 should be gone
  debug_inspect(
    model.notes.iter().any(fn(n) { n.id == 1 }),
    content=(
      #|false
    ),
  )
}

///|
test "NoteDeleted/Ok with nonexistent id is no-op" {
  let initial = { ..empty_model(), notes: sample_notes() }
  let (model, _) = initial.update(
    msg=NoteDeleted(Ok(999)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.notes.length(),
    content=(
      #|3
    ),
  )
}

///|
test "NoteDeleted/Ok clears selected_note_id if deleted note was selected" {
  let initial = { ..empty_model(), notes: sample_notes(), selected_note_id: 1 }
  let (model, _) = initial.update(
    msg=NoteDeleted(Ok(1)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.selected_note_id,
    content=(
      #|0
    ),
  )
}

///|
test "NoteDeleted/Ok preserves selected_note_id if different note deleted" {
  let initial = { ..empty_model(), notes: sample_notes(), selected_note_id: 2 }
  let (model, _) = initial.update(
    msg=NoteDeleted(Ok(1)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.selected_note_id,
    content=(
      #|2
    ),
  )
}

///|
test "NoteDeleted/Err leaves model unchanged" {
  let initial = { ..empty_model(), notes: sample_notes() }
  let (model, _) = initial.update(
    msg=NoteDeleted(Err("fail")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.notes.length(),
    content=(
      #|3
    ),
  )
}
