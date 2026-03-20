///|
/// Count words by splitting on whitespace.
pub fn word_count(text : String) -> Int {
  if text == "" {
    return 0
  }
  let mut count = 0
  let mut in_word = false
  for ch in text {
    if ch == ' ' || ch == '\n' || ch == '\t' || ch == '\r' {
      if in_word {
        count += 1
        in_word = false
      }
    } else {
      in_word = true
    }
  }
  if in_word {
    count += 1
  }
  count
}

///|
/// Count the number of characters in the text.
pub fn char_count(text : String) -> Int {
  text.char_length()
}

///|
/// Estimate reading time in seconds (200 words per minute).
pub fn reading_time_secs(text : String) -> Int {
  let words = word_count(text)
  // words / 200 * 60 = words * 60 / 200 = words * 3 / 10
  let secs = words * 3 / 10
  if secs < 1 && words > 0 {
    1
  } else {
    secs
  }
}

///|
/// Compute all stats for a note's content.
pub fn compute_stats(content : String) -> NoteStats {
  {
    word_count: word_count(content),
    char_count: char_count(content),
    reading_time_secs: reading_time_secs(content),
  }
}

///|
/// Truncate text to max_len characters, appending "..." if truncated.
pub fn truncate(text : String, max_len : Int) -> String {
  if text.char_length() <= max_len {
    text
  } else {
    let chars : Array[Char] = []
    let mut i = 0
    for ch in text {
      if i >= max_len {
        break
      }
      chars.push(ch)
      i += 1
    }
    let buf = StringBuilder::new()
    for ch in chars {
      buf.write_char(ch)
    }
    buf.write_string("...")
    buf.to_string()
  }
}

///|
/// Sort notes: pinned first, then by id descending.
pub fn sort_notes(notes : Array[Note]) -> Array[Note] {
  let result = notes.copy()
  result.sort_by(fn(a, b) {
    // Pinned first
    if a.pinned && !b.pinned {
      return -1
    }
    if !a.pinned && b.pinned {
      return 1
    }
    // Then by id descending (newest first)
    if a.id > b.id {
      -1
    } else if a.id < b.id {
      1
    } else {
      0
    }
  })
  result
}
