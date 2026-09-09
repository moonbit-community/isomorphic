///|
/// An option within a poll that users can vote on.
#warnings("-unnecessary_annotation")
pub(all) struct PollOption {
  id : Int
  text : String
  votes : Int
} derive(ToJson, FromJson, Debug)

///|
/// A poll with a question and its options.
#warnings("-unnecessary_annotation")
pub(all) struct Poll {
  id : Int
  question : String
  options : Array[PollOption]
} derive(ToJson, FromJson, Debug)

///|
/// Poll results with computed totals and percentages.
#warnings("-unnecessary_annotation")
pub(all) struct PollResults {
  poll : Poll
  total_votes : Int
  percentages : Array[(String, Int)]
} derive(ToJson, FromJson, Debug)

///|
pub extend Poll with Debug::{to_repr}

///|
pub extend Poll with @json.FromJson::{from_json}

///|
pub extend Poll with ToJson::{to_json}

///|
pub extend PollOption with Debug::{to_repr}

///|
pub extend PollOption with @json.FromJson::{from_json}

///|
pub extend PollOption with ToJson::{to_json}

///|
pub extend PollResults with Debug::{to_repr}

///|
pub extend PollResults with @json.FromJson::{from_json}

///|
pub extend PollResults with ToJson::{to_json}
