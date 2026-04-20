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
async fn main {
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
  let port = @string.parse_int(port)
  let conn = @sqlite3.Connection::open("finapp.db")
  println("Database opened: finapp.db")
  let fk = conn.prepare("PRAGMA foreign_keys = ON")
  fk.step_once()
  fk.finalize()
  init_db(conn)
  seed_categories(conn)
  println("Database initialized with seed categories")

  let app = @moonback.App(ctx => {
    ctx.add_middleware(@unstable_cors.new())
    ctx.add_middleware(@unstable_static.new(root="./public"))
    ctx.get("/", (_req, res) => {
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
      res.send_html(html)
    })
    ctx.get(@shared.api_accounts, (_req, res) => {
      try {
        let accounts = get_all_accounts(conn)
        res.send_json(accounts.to_json())
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.post(@shared.api_accounts, (req, res) => {
      try {
        let json : Json = req.body.json()
        let (name, acct_type) = match json {
          { "name": String(n), "account_type": String(t), .. } => (n, t)
          _ => {
            send_text(res, "Missing name or account_type", status=400)
            return
          }
        }
        if @shared.validate_account_name(name) is Some(err) {
          send_text(res, err, status=400)
          return
        }
        let account = create_account(conn, name, acct_type)
        res.send_json(account.to_json(), status=201)
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.add_route(Delete, "\{@shared.api_accounts}/:id", (req, res) => {
      try {
        let id = @string.parse_int(req.params["id"].to_string())
        delete_account(conn, id)
        res.send_void(status=204)
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.get(@shared.api_categories, (_req, res) => {
      try {
        let categories = get_all_categories(conn)
        res.send_json(categories.to_json())
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.get(@shared.api_transactions, (_req, res) => {
      try {
        let transactions = get_all_transactions(conn)
        res.send_json(transactions.to_json())
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.post(@shared.api_transactions, (req, res) => {
      try {
        let json : Json = req.body.json()
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
          _ => {
            send_text(res, "Missing fields", status=400)
            return
          }
        }
        if @shared.validate_transaction(amount, description, date) is Some(err) {
          send_text(res, err, status=400)
          return
        }
        let txn = create_transaction(
          conn, account_id, category_id, amount, txn_type, description, date,
        )
        res.send_json(txn.to_json(), status=201)
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.add_route(Delete, "\{@shared.api_transactions}/:id", (req, res) => {
      try {
        let id = @string.parse_int(req.params["id"].to_string())
        delete_transaction(conn, id)
        res.send_void(status=204)
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.get("\{@shared.api_budgets}/:month", (req, res) => {
      try {
        let month = req.params["month"].to_string()
        let budgets = get_budgets_for_month(conn, month)
        res.send_json(budgets.to_json())
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.post(@shared.api_budgets, (req, res) => {
      try {
        let json : Json = req.body.json()
        let (category_id, amount_limit, month) = match json {
          {
            "category_id": Number(c, ..),
            "amount_limit": Number(a, ..),
            "month": String(m),
            ..
          } => (c.to_int(), a.to_int(), m)
          _ => {
            send_text(res, "Missing fields", status=400)
            return
          }
        }
        let budget = upsert_budget(conn, category_id, amount_limit, month)
        res.send_json(budget.to_json(), status=201)
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.add_route(Delete, "\{@shared.api_budgets}/:id", (req, res) => {
      try {
        let id = @string.parse_int(req.params["id"].to_string())
        delete_budget(conn, id)
        res.send_void(status=204)
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.get("\{@shared.api_dashboard}/:month", (req, res) => {
      try {
        let month = req.params["month"].to_string()
        let data = get_dashboard(conn, month)
        res.send_json(data.to_json())
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
  })
  println("Server running at http://localhost:\{port}")
  app.serve(@moonback.listen(port=port.to_uint16()))
}
