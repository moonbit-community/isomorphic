///|
/// Compute the total number of votes across all options in a poll.
pub fn compute_total_votes(options : Array[PollOption]) -> Int {
  let mut total = 0
  for opt in options {
    total += opt.votes
  }
  total
}

///|
/// Compute the percentage of votes for a given count out of total.
/// Returns an integer 0-100. Returns 0 if total is 0.
pub fn compute_percentage(votes : Int, total : Int) -> Int {
  if total == 0 {
    0
  } else {
    votes * 100 / total
  }
}
