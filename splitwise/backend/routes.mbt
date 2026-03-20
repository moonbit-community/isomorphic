///|
/// Handle GET /api/state — return full application state as JSON.
fn handle_get_state(
  conn : @sqlite3.Connection,
  _event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  println("GET \{@shared.api_state}")
  try {
    let state = get_state(conn)
    println("  -> 200")
    @mocket.HttpResponse::new(OK).json(state)
  } catch {
    e => {
      println("  -> 500 \{e}")
      @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  }
}

///|
/// Handle POST /api/people — create a new person.
fn handle_post_people(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  println("POST \{@shared.api_people}")
  try {
    let json : Json = event.req.body()
    let name = match json {
      { "name": String(n), .. } => n
      _ => {
        println("  -> 400 Missing name")
        return @mocket.HttpResponse::new(BadRequest).body("Missing name field")
      }
    }
    if !@shared.validate_name(name) {
      println("  -> 400 Invalid name")
      return @mocket.HttpResponse::new(BadRequest).body(
        "Name must be 1-\{@shared.max_name_length} characters",
      )
    }
    let person = create_person(conn, name)
    println("  -> 201 created person: \{name}")
    @mocket.HttpResponse::new(Created).json(person)
  } catch {
    e => {
      println("  -> 500 \{e}")
      @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  }
}

///|
/// Handle POST /api/expenses — create a new expense with splits.
fn handle_post_expenses(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  println("POST \{@shared.api_expenses}")
  try {
    let json : Json = event.req.body()
    let description = match json {
      { "description": String(d), .. } => d
      _ => {
        println("  -> 400 Missing description")
        return @mocket.HttpResponse::new(BadRequest).body("Missing description")
      }
    }
    let amount = match json {
      { "amount": Number(a, ..), .. } => a.to_int()
      _ => {
        println("  -> 400 Missing amount")
        return @mocket.HttpResponse::new(BadRequest).body("Missing amount")
      }
    }
    let paid_by = match json {
      { "paid_by": Number(p, ..), .. } => p.to_int()
      _ => {
        println("  -> 400 Missing paid_by")
        return @mocket.HttpResponse::new(BadRequest).body("Missing paid_by")
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
        return @mocket.HttpResponse::new(BadRequest).body("Missing split_among")
      }
    }
    if !@shared.validate_description(description) {
      println("  -> 400 Invalid description")
      return @mocket.HttpResponse::new(BadRequest).body(
        "Description must be 1-\{@shared.max_description_length} characters",
      )
    }
    if !@shared.validate_amount(amount) {
      println("  -> 400 Invalid amount")
      return @mocket.HttpResponse::new(BadRequest).body(
        "Amount must be positive",
      )
    }
    if split_among.length() == 0 {
      println("  -> 400 No participants")
      return @mocket.HttpResponse::new(BadRequest).body(
        "Must split among at least one person",
      )
    }
    let expense = create_expense(
      conn, description, amount, paid_by, split_among,
    )
    println("  -> 201 created expense: \{description}")
    @mocket.HttpResponse::new(Created).json(expense)
  } catch {
    e => {
      println("  -> 500 \{e}")
      @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  }
}

///|
/// Handle DELETE /api/expenses/:id — delete an expense by id.
fn handle_delete_expense(
  conn : @sqlite3.Connection,
  event : @mocket.MocketEvent,
) -> @mocket.HttpResponse {
  let id_str = event.params.get("id").unwrap().to_string()
  println("DELETE /api/expenses/\{id_str}")
  try {
    let id = @strconv.parse_int(id_str)
    delete_expense(conn, id)
    println("  -> 204 deleted expense \{id}")
    @mocket.HttpResponse::new(NoContent)
  } catch {
    e => {
      println("  -> 500 \{e}")
      @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  }
}
