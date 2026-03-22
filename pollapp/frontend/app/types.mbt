///|
/// Application state for the poll app frontend.
pub(all) struct Model {
  /// All polls fetched from the server.
  polls : Array[@shared.Poll]
  /// Text in the new-poll question input field.
  question_input : String
  /// Text inputs for each poll option (starts with 2 empty strings).
  option_inputs : Array[String]
  /// IDs of polls the user has already voted on (tracked client-side).
  voted : Array[Int]
} derive(Debug)

///|
/// Messages that drive state transitions in the Elm-architecture update loop.
pub(all) enum Msg {
  /// Fired once on app startup to fetch the initial poll list.
  Init
  /// Result of fetching all polls from the server.
  GotPolls(Result[Array[@shared.Poll], String])
  /// User edited the question text field.
  QuestionInputChanged(String)
  /// User edited a specific option input (index, new value).
  OptionInputChanged(Int, String)
  /// User clicked the "Add Option" button.
  AddOptionInput
  /// User clicked the remove button on an option (by index).
  RemoveOptionInput(Int)
  /// User submitted the create-poll form.
  CreatePoll
  /// Result of the POST request to create a new poll.
  PollCreated(Result[@shared.Poll, String])
  /// User clicked an option to cast a vote (poll_id, option_id).
  Vote(Int, Int)
  /// Result of the POST vote request, returns the updated poll.
  Voted(Result[@shared.Poll, String])
  /// User clicked the delete button on a poll.
  DeletePoll(Int)
  /// Result of the DELETE request, returns the deleted poll's ID.
  PollDeleted(Result[Int, String])
} derive(Debug)
