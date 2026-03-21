///|
/// Entry point for the FinApp backend server. Opens the SQLite database, initializes
/// the schema and seed data, then registers route handlers for the REST API
/// (accounts, categories, transactions, budgets, dashboard) and starts serving
/// on the configured port (default 4007).
fn main raise {
  guard @argparse.parse(
      Command("finapp-server", about="Personal Finance Tracker backend", options=[
        OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
          "4007",
        ]),
      ]),
    )
    is { values: { "port": [port], .. }, .. } else {
    println("Failed to parse arguments")
    return
  }
  let port = @strconv.parse_int(port)
  let conn = @sqlite3.Connection::open("finapp.db")
  println("Database opened: finapp.db")
  // Enable foreign key enforcement
  let fk = conn.prepare("PRAGMA foreign_keys = ON")
  fk.step_once()
  fk.finalize()
  init_db(conn)
  seed_categories(conn)
  println("Database initialized with seed categories")
  let app = @mocket.new()
  app
  ..use_middleware(@cors.handle_cors())
  // ── HTML shell ──────────────────────────────────────────────────
  ..get("/", _ => {
    let html =
      #|<!DOCTYPE html>
      #|<html>
      #|<head>
      #|  <meta charset="UTF-8">
      #|  <meta name="viewport" content="width=device-width, initial-scale=1.0">
      #|  <title>FinApp - Personal Finance Tracker</title>
      #|  <style>
      #|    * { margin: 0; padding: 0; box-sizing: border-box; }
      #|    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f0f2f5; color: #333; }
      #|  </style>
      #|</head>
      #|<body>
      #|  <div id="app"></div>
      #|  <script src="/frontend.js"></script>
      #|</body>
      #|</html>
    @mocket.HttpResponse::new(
      OK,
      headers={ "Content-Type": "text/html; charset=utf-8" },
      raw_body=@utf8.encode(html),
    )
  })
  ..get("/frontend.js", _ => {
    try {
      let bytes = @fs.read_file_to_bytes("./public/frontend.js")
      @mocket.HttpResponse::new(
        OK,
        headers={ "Content-Type": "application/javascript; charset=utf-8" },
        raw_body=bytes,
      )
    } catch {
      _ => @mocket.HttpResponse::new(NotFound).body("Not Found")
    }
  })
  // ── Accounts ────────────────────────────────────────────────────
  ..get(@shared.api_accounts, _ => {
    try {
      let accounts = get_all_accounts(conn)
      @mocket.HttpResponse::new(OK).json(accounts)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  ..post(@shared.api_accounts, event => {
    try {
      let json : Json = event.req.body()
      let (name, acct_type) = match json {
        { "name": String(n), "account_type": String(t), .. } => (n, t)
        _ =>
          return @mocket.HttpResponse::new(BadRequest).body(
            "Missing name or account_type",
          )
      }
      if @shared.validate_account_name(name) is Some(err) {
        return @mocket.HttpResponse::new(BadRequest).body(err)
      }
      let account = create_account(conn, name, acct_type)
      @mocket.HttpResponse::new(Created).json(account)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  ..delete("\{@shared.api_accounts}/:id", fn(event) noraise {
    try {
      let id = @strconv.parse_int(event.params.get("id").unwrap().to_string())
      delete_account(conn, id)
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  // ── Categories ──────────────────────────────────────────────────
  ..get(@shared.api_categories, _ => {
    try {
      let categories = get_all_categories(conn)
      @mocket.HttpResponse::new(OK).json(categories)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  // ── Transactions ────────────────────────────────────────────────
  ..get(@shared.api_transactions, _ => {
    try {
      let transactions = get_all_transactions(conn)
      @mocket.HttpResponse::new(OK).json(transactions)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  ..post(@shared.api_transactions, event => {
    try {
      let json : Json = event.req.body()
      let (account_id, category_id, amount, txn_type, description, date) = match
        json {
        {
          "account_id": Number(a, ..),
          "category_id": Number(c, ..),
          "amount": Number(amt, ..),
          "txn_type": String(t),
          "description": String(d),
          "date": String(dt),
          ..
        } => (a.to_int(), c.to_int(), amt.to_int(), t, d, dt)
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing fields")
      }
      if @shared.validate_transaction(amount, description, date) is Some(err) {
        return @mocket.HttpResponse::new(BadRequest).body(err)
      }
      let txn = create_transaction(
        conn, account_id, category_id, amount, txn_type, description, date,
      )
      @mocket.HttpResponse::new(Created).json(txn)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  ..delete("\{@shared.api_transactions}/:id", fn(event) noraise {
    try {
      let id = @strconv.parse_int(event.params.get("id").unwrap().to_string())
      delete_transaction(conn, id)
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  // ── Budgets ─────────────────────────────────────────────────────
  ..get("\{@shared.api_budgets}/:month", fn(event) noraise {
    try {
      let month = event.params.get("month").unwrap().to_string()
      let budgets = get_budgets_for_month(conn, month)
      @mocket.HttpResponse::new(OK).json(budgets)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  ..post(@shared.api_budgets, event => {
    try {
      let json : Json = event.req.body()
      let (category_id, amount_limit, month) = match json {
        {
          "category_id": Number(c, ..),
          "amount_limit": Number(a, ..),
          "month": String(m),
          ..
        } => (c.to_int(), a.to_int(), m)
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing fields")
      }
      let budget = upsert_budget(conn, category_id, amount_limit, month)
      @mocket.HttpResponse::new(Created).json(budget)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  ..delete("\{@shared.api_budgets}/:id", fn(event) noraise {
    try {
      let id = @strconv.parse_int(event.params.get("id").unwrap().to_string())
      delete_budget(conn, id)
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  // ── Dashboard ───────────────────────────────────────────────────
  .get("\{@shared.api_dashboard}/:month", fn(event) noraise {
    try {
      let month = event.params.get("month").unwrap().to_string()
      let data = get_dashboard(conn, month)
      @mocket.HttpResponse::new(OK).json(data)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  println("Server running at http://localhost:\{port}")
  app.serve(port~)
}
