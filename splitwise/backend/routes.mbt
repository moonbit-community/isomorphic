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
async fn handle_get_state(
  conn : @sqlite3.Connection,
  _req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("GET \{@shared.api_state}")
  try {
    let state = get_state(conn)
    println("  -> 200")
    res.send_json(state.to_json())
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_post_people(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("POST \{@shared.api_people}")
  try {
    let json : Json = req.body.json()
    let name = match json {
      { "name": String(n), .. } => n
      _ => {
        println("  -> 400 Missing name")
        send_text(res, "Missing name field", status=400)
        return
      }
    }
    if !@shared.validate_name(name) {
      println("  -> 400 Invalid name")
      send_text(
        res,
        "Name must be 1-\{@shared.max_name_length} characters",
        status=400,
      )
      return
    }
    let person = create_person(conn, name)
    println("  -> 201 created person: \{name}")
    res.send_json(person.to_json(), status=201)
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_post_expenses(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  println("POST \{@shared.api_expenses}")
  try {
    let json : Json = req.body.json()
    let description = match json {
      { "description": String(d), .. } => d
      _ => {
        println("  -> 400 Missing description")
        send_text(res, "Missing description", status=400)
        return
      }
    }
    let amount = match json {
      { "amount": Number(a, ..), .. } => a.to_int()
      _ => {
        println("  -> 400 Missing amount")
        send_text(res, "Missing amount", status=400)
        return
      }
    }
    let paid_by = match json {
      { "paid_by": Number(p, ..), .. } => p.to_int()
      _ => {
        println("  -> 400 Missing paid_by")
        send_text(res, "Missing paid_by", status=400)
        return
      }
    }
    let split_among : Array[Int] = match json {
      { "split_among": Array(arr), .. } => {
        let ids : Array[Int] = []
        for item in arr {
          match item {
            Number(n, ..) => ids.push(n.to_int())
            _ => ()
          }
        }
        ids
      }
      _ => {
        println("  -> 400 Missing split_among")
        send_text(res, "Missing split_among", status=400)
        return
      }
    }
    if !@shared.validate_description(description) {
      println("  -> 400 Invalid description")
      send_text(
        res,
        "Description must be 1-\{@shared.max_description_length} characters",
        status=400,
      )
      return
    }
    if !@shared.validate_amount(amount) {
      println("  -> 400 Invalid amount")
      send_text(res, "Amount must be positive", status=400)
      return
    }
    if split_among.is_empty() {
      println("  -> 400 No participants")
      send_text(res, "Must split among at least one person", status=400)
      return
    }
    let expense = create_expense(
      conn, description, amount, paid_by, split_among,
    )
    println("  -> 201 created expense: \{description}")
    res.send_json(expense.to_json(), status=201)
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}

///|
async fn handle_delete_expense(
  conn : @sqlite3.Connection,
  req : @moonback.Request,
  res : @moonback.Responder,
) -> Unit {
  let id_str = req.params["id"].to_string()
  println("DELETE /api/expenses/\{id_str}")
  try {
    let id = @string.parse_int(id_str)
    delete_expense(conn, id)
    println("  -> 204 deleted expense \{id}")
    res.send_void(status=204)
  } catch {
    e => {
      println("  -> 500 \{e}")
      send_text(res, "\{e}", status=500)
    }
  }
}
