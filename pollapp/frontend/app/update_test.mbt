///|
fn noop_dispatch(_msg : Msg) -> @rabbita.Cmd {
  @rabbita.none
}

///|
fn empty_model() -> Model {
  { polls: [], question_input: "", option_inputs: ["", ""], voted: [] }
}

///|
fn sample_poll() -> @shared.Poll {
  {
    id: 1,
    question: "Favorite color?",
    options: [
      { id: 10, text: "Red", votes: 3 },
      { id: 11, text: "Blue", votes: 5 },
    ],
  }
}

///|
fn sample_polls() -> Array[@shared.Poll] {
  [
    sample_poll(),
    {
      id: 2,
      question: "Best language?",
      options: [
        { id: 20, text: "MoonBit", votes: 10 },
        { id: 21, text: "Rust", votes: 7 },
        { id: 22, text: "Go", votes: 4 },
      ],
    },
  ]
}

// ── Init ─────────────────────────────────────────────────────────────

///|
test "Init issues fetch command" {
  let (model, _) = empty_model().update(msg=Init, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{ polls: [], question_input: "", option_inputs: ["", ""], voted: [] }
    ),
  )
}

// ── GotPolls ─────────────────────────────────────────────────────────

///|
test "GotPolls/Ok populates polls" {
  let polls = sample_polls()
  let (model, _) = empty_model().update(
    msg=GotPolls(Ok(polls)),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  polls: [
      #|    {
      #|      id: 1,
      #|      question: "Favorite color?",
      #|      options: [
      #|        { id: 10, text: "Red", votes: 3 },
      #|        { id: 11, text: "Blue", votes: 5 },
      #|      ],
      #|    },
      #|    {
      #|      id: 2,
      #|      question: "Best language?",
      #|      options: [
      #|        { id: 20, text: "MoonBit", votes: 10 },
      #|        { id: 21, text: "Rust", votes: 7 },
      #|        { id: 22, text: "Go", votes: 4 },
      #|      ],
      #|    },
      #|  ],
      #|  question_input: "",
      #|  option_inputs: ["", ""],
      #|  voted: [],
      #|}
    ),
  )
}

///|
test "GotPolls/Err leaves model unchanged" {
  let (model, _) = empty_model().update(
    msg=GotPolls(Err("network")),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{ polls: [], question_input: "", option_inputs: ["", ""], voted: [] }
    ),
  )
}

// ── QuestionInputChanged ─────────────────────────────────────────────

///|
test "QuestionInputChanged updates question_input" {
  let (model, _) = empty_model().update(
    msg=QuestionInputChanged("What is your name?"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  polls: [],
      #|  question_input: "What is your name?",
      #|  option_inputs: ["", ""],
      #|  voted: [],
      #|}
    ),
  )
}

// ── OptionInputChanged ───────────────────────────────────────────────

///|
test "OptionInputChanged updates specific option" {
  let (model, _) = empty_model().update(
    msg=OptionInputChanged(0, "Option A"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  polls: [],
      #|  question_input: "",
      #|  option_inputs: ["Option A", ""],
      #|  voted: [],
      #|}
    ),
  )
}

///|
test "OptionInputChanged updates second option" {
  let (model, _) = empty_model().update(
    msg=OptionInputChanged(1, "Option B"),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  polls: [],
      #|  question_input: "",
      #|  option_inputs: ["", "Option B"],
      #|  voted: [],
      #|}
    ),
  )
}

// ── AddOptionInput ───────────────────────────────────────────────────

///|
test "AddOptionInput adds an empty option" {
  let (model, _) = empty_model().update(
    msg=AddOptionInput,
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  polls: [],
      #|  question_input: "",
      #|  option_inputs: ["", "", ""],
      #|  voted: [],
      #|}
    ),
  )
}

///|
test "AddOptionInput at max_options does nothing" {
  let initial = {
    ..empty_model(),
    option_inputs: Array::make(@shared.max_options, ""),
  }
  let (model, _) = initial.update(msg=AddOptionInput, dispatch=noop_dispatch)
  inspect(model.option_inputs.length(), content=@shared.max_options.to_string())
}

// ── RemoveOptionInput ────────────────────────────────────────────────

///|
test "RemoveOptionInput removes option at index" {
  let initial = {
    ..empty_model(),
    option_inputs: ["A", "B", "C"],
  }
  let (model, _) = initial.update(
    msg=RemoveOptionInput(1),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model,
    content=(
      #|{
      #|  polls: [],
      #|  question_input: "",
      #|  option_inputs: ["A", "C"],
      #|  voted: [],
      #|}
    ),
  )
}

///|
test "RemoveOptionInput at min_options does nothing" {
  let initial = empty_model() // already has 2 options (min_options)
  let (model, _) = initial.update(
    msg=RemoveOptionInput(0),
    dispatch=noop_dispatch,
  )
  inspect(model.option_inputs.length(), content="2")
}

// ── CreatePoll ───────────────────────────────────────────────────────

///|
test "CreatePoll with empty question does nothing" {
  let initial = {
    ..empty_model(),
    question_input: "",
    option_inputs: ["A", "B"],
  }
  let (model, _) = initial.update(msg=CreatePoll, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{
      #|  polls: [],
      #|  question_input: "",
      #|  option_inputs: ["A", "B"],
      #|  voted: [],
      #|}
    ),
  )
}

///|
test "CreatePoll with too-long question does nothing" {
  let long = "a".repeat(@shared.max_question_length + 1)
  let initial = {
    ..empty_model(),
    question_input: long,
    option_inputs: ["A", "B"],
  }
  let (model, _) = initial.update(msg=CreatePoll, dispatch=noop_dispatch)
  inspect(model.question_input, content=long)
}

///|
test "CreatePoll with fewer than min valid options does nothing" {
  let initial = {
    ..empty_model(),
    question_input: "Valid question?",
    option_inputs: ["Only one", ""],
  }
  let (model, _) = initial.update(msg=CreatePoll, dispatch=noop_dispatch)
  inspect(model.question_input, content="Valid question?")
}

///|
test "CreatePoll with valid inputs clears form" {
  let initial = {
    ..empty_model(),
    question_input: "Favorite fruit?",
    option_inputs: ["Apple", "Banana"],
  }
  let (model, _) = initial.update(msg=CreatePoll, dispatch=noop_dispatch)
  debug_inspect(
    model,
    content=(
      #|{ polls: [], question_input: "", option_inputs: ["", ""], voted: [] }
    ),
  )
}

///|
test "CreatePoll with option too long does nothing" {
  let long_opt = "a".repeat(@shared.max_option_length + 1)
  let initial = {
    ..empty_model(),
    question_input: "Question?",
    option_inputs: [long_opt, "Valid"],
  }
  let (model, _) = initial.update(msg=CreatePoll, dispatch=noop_dispatch)
  inspect(model.question_input, content="Question?")
}

// ── PollCreated ──────────────────────────────────────────────────────

///|
test "PollCreated/Ok prepends poll to list" {
  let initial = { ..empty_model(), polls: sample_polls() }
  let new_poll : @shared.Poll = {
    id: 3,
    question: "New poll?",
    options: [
      { id: 30, text: "Yes", votes: 0 },
      { id: 31, text: "No", votes: 0 },
    ],
  }
  let (model, _) = initial.update(
    msg=PollCreated(Ok(new_poll)),
    dispatch=noop_dispatch,
  )
  inspect(model.polls.length(), content="3")
  inspect(model.polls[0].id, content="3")
  inspect(model.polls[1].id, content="1")
  inspect(model.polls[2].id, content="2")
}

///|
test "PollCreated/Err leaves model unchanged" {
  let initial = { ..empty_model(), polls: sample_polls() }
  let (model, _) = initial.update(
    msg=PollCreated(Err("fail")),
    dispatch=noop_dispatch,
  )
  inspect(model.polls.length(), content="2")
}

// ── Vote ─────────────────────────────────────────────────────────────

///|
test "Vote adds poll_id to voted list" {
  let initial = { ..empty_model(), polls: [sample_poll()] }
  let (model, _) = initial.update(
    msg=Vote(1, 10),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.voted,
    content=(
      #|[1]
    ),
  )
}

///|
test "Vote on already-voted poll does nothing" {
  let initial = { ..empty_model(), polls: [sample_poll()], voted: [1] }
  let (model, _) = initial.update(
    msg=Vote(1, 10),
    dispatch=noop_dispatch,
  )
  debug_inspect(
    model.voted,
    content=(
      #|[1]
    ),
  )
}

// ── Voted ────────────────────────────────────────────────────────────

///|
test "Voted/Ok replaces matching poll" {
  let initial = { ..empty_model(), polls: [sample_poll()] }
  let updated : @shared.Poll = {
    id: 1,
    question: "Favorite color?",
    options: [
      { id: 10, text: "Red", votes: 4 },
      { id: 11, text: "Blue", votes: 5 },
    ],
  }
  let (model, _) = initial.update(
    msg=Voted(Ok(updated)),
    dispatch=noop_dispatch,
  )
  inspect(model.polls[0].options[0].votes, content="4")
}

///|
test "Voted/Err leaves model unchanged" {
  let initial = { ..empty_model(), polls: [sample_poll()] }
  let (model, _) = initial.update(
    msg=Voted(Err("fail")),
    dispatch=noop_dispatch,
  )
  inspect(model.polls[0].options[0].votes, content="3")
}

// ── DeletePoll ───────────────────────────────────────────────────────

///|
test "DeletePoll does not change model (only issues cmd)" {
  let initial = { ..empty_model(), polls: sample_polls() }
  let (model, _) = initial.update(
    msg=DeletePoll(1),
    dispatch=noop_dispatch,
  )
  inspect(model.polls.length(), content="2")
}

// ── PollDeleted ──────────────────────────────────────────────────────

///|
test "PollDeleted/Ok removes the poll" {
  let initial = { ..empty_model(), polls: sample_polls() }
  let (model, _) = initial.update(
    msg=PollDeleted(Ok(1)),
    dispatch=noop_dispatch,
  )
  inspect(model.polls.length(), content="1")
  inspect(model.polls[0].id, content="2")
}

///|
test "PollDeleted/Ok with nonexistent id is no-op" {
  let initial = { ..empty_model(), polls: sample_polls() }
  let (model, _) = initial.update(
    msg=PollDeleted(Ok(999)),
    dispatch=noop_dispatch,
  )
  inspect(model.polls.length(), content="2")
}

///|
test "PollDeleted/Err leaves model unchanged" {
  let initial = { ..empty_model(), polls: sample_polls() }
  let (model, _) = initial.update(
    msg=PollDeleted(Err("fail")),
    dispatch=noop_dispatch,
  )
  inspect(model.polls.length(), content="2")
}
