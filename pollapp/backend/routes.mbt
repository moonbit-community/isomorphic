///|
async fn send_text(
  res : @moonback.Responder,
  body : String,
  status? : Int = 200,
) -> Unit {
  res
  .respond(status~, headers={ "Content-Type": "text/plain; charset=utf-8" })
  .write(body)
}

///|
async fn handle_get_polls(
  conn : @sqlite3.Connection,
  _req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("GET \{@shared.api_polls}")
  try {
    let polls = get_all_polls(conn)
    println("  -> 200")
    res.send_json(polls.to_json())
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_create_poll(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("POST \{@shared.api_polls}")
  try {
    let json : Json = req.body.json()
    let question = match json {
      { "question": String(q), .. } => q
      _ => {
        println("  -> 400 Missing question")
        send_text(res, "Missing question field", status=400)
        return
      }
    }
    if !@shared.validate_question(question) {
      println("  -> 400 Invalid question")
      send_text(
        res,
        "Question must be 1-\{@shared.max_question_length} characters",
        status=400,
      )
      return
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
        send_text(res, "Missing options array", status=400)
        return
      }
    }
    if option_texts.length() < @shared.min_options {
      println("  -> 400 Too few options")
      send_text(
        res,
        "Must have at least \{@shared.min_options} options",
        status=400,
      )
      return
    }
    if option_texts.length() > @shared.max_options {
      println("  -> 400 Too many options")
      send_text(
        res,
        "Must have at most \{@shared.max_options} options",
        status=400,
      )
      return
    }
    for text in option_texts {
      if !@shared.validate_option(text) {
        println("  -> 400 Invalid option text")
        send_text(
          res,
          "Each option must be 1-\{@shared.max_option_length} characters",
          status=400,
        )
        return
      }
    }
    let poll = create_poll(conn, question, option_texts)
    println("  -> 201 created poll: \{question}")
    res.send_json(poll.to_json(), status=201)
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_vote(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("POST /api/polls/\{id_str}/vote")
  try {
    let json : Json = req.body.json()
    let option_id = match json {
      { "option_id": Number(n, ..), .. } => n.to_int()
      _ => {
        println("  -> 400 Missing option_id")
        send_text(res, "Missing option_id field", status=400)
        return
      }
    }
    vote_on_option(conn, option_id)
    let poll_id = @string.parse_int(id_str)
    match get_poll_by_id(conn, poll_id) {
      Some(poll) => {
        println("  -> 200 voted on option \{option_id}")
        res.send_json(poll.to_json())
      }
      None => {
        println("  -> 404 Poll not found")
        send_text(res, "Poll not found", status=404)
      }
    }
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_delete_poll(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("DELETE /api/polls/\{id_str}")
  try {
    let id = @string.parse_int(id_str)
    delete_poll(conn, id)
    println("  -> 204 deleted poll \{id}")
    res.send_void(status=204)
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}
