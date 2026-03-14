///|
/// Handle GET /api/polls — return all polls with their options.
fn handle_get_polls(
  conn : @sqlite3.Connection,
  _req : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
  println("GET \{@shared.api_polls}")
  try {
    let polls = get_all_polls(conn)
    println("  -> 200")
    @mocket.HttpResponse::new(OK).json(polls)
  } catch {
    e => {
      println("  -> 500 \{e}")
      @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  }
}

///|
/// Handle POST /api/polls — create a new poll with question and options.
fn handle_create_poll(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
  println("POST \{@shared.api_polls}")
  try {
    let json : Json = event.req.body()
    let question = match json {
      { "question": String(q), .. } => q
      _ => {
        println("  -> 400 Missing question")
        return @mocket.HttpResponse::new(BadRequest).body(
          "Missing question field",
        )
      }
    }
    if !@shared.validate_question(question) {
      println("  -> 400 Invalid question")
      return @mocket.HttpResponse::new(BadRequest).body(
        "Question must be 1-\{@shared.max_question_length} characters",
      )
    }
    let option_texts : Array[String] = match json {
      { "options": Array(arr), .. } => {
        let texts : Array[String] = []
        for item in arr {
          match item {
            String(s) => texts.push(s)
            _ => ()
          }
        }
        texts
      }
      _ => {
        println("  -> 400 Missing options")
        return @mocket.HttpResponse::new(BadRequest).body(
          "Missing options array",
        )
      }
    }
    if option_texts.length() < @shared.min_options {
      println("  -> 400 Too few options")
      return @mocket.HttpResponse::new(BadRequest).body(
        "Must have at least \{@shared.min_options} options",
      )
    }
    if option_texts.length() > @shared.max_options {
      println("  -> 400 Too many options")
      return @mocket.HttpResponse::new(BadRequest).body(
        "Must have at most \{@shared.max_options} options",
      )
    }
    for text in option_texts {
      if !@shared.validate_option(text) {
        println("  -> 400 Invalid option text")
        return @mocket.HttpResponse::new(BadRequest).body(
          "Each option must be 1-\{@shared.max_option_length} characters",
        )
      }
    }
    let poll = create_poll(conn, question, option_texts)
    println("  -> 201 created poll: \{question}")
    @mocket.HttpResponse::new(Created).json(poll)
  } catch {
    e => {
      println("  -> 500 \{e}")
      @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  }
}

///|
/// Handle POST /api/polls/:id/vote — vote on a poll option.
fn handle_vote(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
  let id_str = event.params.get("id").unwrap().to_string()
  println("POST /api/polls/\{id_str}/vote")
  try {
    let json : Json = event.req.body()
    let option_id = match json {
      { "option_id": Number(n, ..), .. } => n.to_int()
      _ => {
        println("  -> 400 Missing option_id")
        return @mocket.HttpResponse::new(BadRequest).body(
          "Missing option_id field",
        )
      }
    }
    vote_on_option(conn, option_id)
    let poll_id = @strconv.parse_int(id_str)
    match get_poll_by_id(conn, poll_id) {
      Some(poll) => {
        println("  -> 200 voted on option \{option_id}")
        @mocket.HttpResponse::new(OK).json(poll)
      }
      None => {
        println("  -> 404 Poll not found")
        @mocket.HttpResponse::new(NotFound).body("Poll not found")
      }
    }
  } catch {
    e => {
      println("  -> 500 \{e}")
      @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  }
}

///|
/// Handle DELETE /api/polls/:id — delete a poll and its options.
fn handle_delete_poll(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse noraise {
  let id_str = event.params.get("id").unwrap().to_string()
  println("DELETE /api/polls/\{id_str}")
  try {
    let id = @strconv.parse_int(id_str)
    delete_poll(conn, id)
    println("  -> 204 deleted poll \{id}")
    @mocket.HttpResponse::new(NoContent)
  } catch {
    e => {
      println("  -> 500 \{e}")
      @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  }
}
