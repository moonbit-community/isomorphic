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
      Command("contacts", about="Contact Manager backend", options=[
        OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
          "4004",
        ]),
      ]),
    )
    is { values: { "port": [port], .. }, .. } else {
    println("Failed to parse arguments")
    return
  }
  let port = @string.parse_int(port)

  let conn = @sqlite3.Connection::open("contacts.db")
  println("Database opened: contacts.db")

  init_db(conn)
  println("Database initialized")

  let app = @moonback.App(ctx => {
    ctx.add_middleware(@unstable_cors.new())
    ctx.add_middleware(@unstable_static.new(root="./public"))
    ctx.get("/", (_req, res) => {
      println("GET /")
      let html =
        #|<!DOCTYPE html>
        #|<html>
        #|<head>
        #|  <meta charset="UTF-8">
        #|  <meta name="viewport" content="width=device-width, initial-scale=1.0">
        #|  <title>Contacts</title>
        #|  <style>
        #|    * { margin: 0; padding: 0; box-sizing: border-box; }
        #|    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); background-attachment: fixed; min-height: 100vh; color: #333; }
        #|  </style>
        #|</head>
        #|<body>
        #|  <div id="app"></div>
        #|  <script src="/frontend.js"></script>
        #|</body>
        #|</html>
      res.send_html(html)
    })
    ctx.get(@shared.api_contacts, (_req, res) => {
      println("GET \{@shared.api_contacts}")
      try {
        let contacts = get_all_contacts(conn)
        println("  -> 200 (\{contacts.length()} contacts)")
        res.send_json(contacts.to_json())
      } catch {
        e => {
          println("  -> 500 \{e}")
          send_text(res, "\{e}", status=500)
        }
      }
    })
    ctx.post(@shared.api_contacts, (req, res) => {
      println("POST \{@shared.api_contacts}")
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
        let email = match json {
          { "email": String(e), .. } => e
          _ => {
            println("  -> 400 Missing email")
            send_text(res, "Missing email field", status=400)
            return
          }
        }
        let phone = match json {
          { "phone": String(p), .. } => p
          _ => {
            println("  -> 400 Missing phone")
            send_text(res, "Missing phone field", status=400)
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
        if !@shared.validate_email(email) {
          println("  -> 400 Invalid email")
          send_text(
            res,
            "Email must be valid (contain @ and . after @)",
            status=400,
          )
          return
        }
        if !@shared.validate_phone(phone) {
          println("  -> 400 Invalid phone")
          send_text(
            res,
            "Phone must contain only digits, spaces, hyphens, parens, and +",
            status=400,
          )
          return
        }
        let contact = create_contact(conn, name, email, phone)
        println("  -> 201 created contact: \{name}")
        res.send_json(contact.to_json(), status=201)
      } catch {
        e => {
          println("  -> 500 \{e}")
          send_text(res, "\{e}", status=500)
        }
      }
    })
    ctx.post("\{@shared.api_contacts}/:id/favorite", (req, res) => {
      let id_str = req.params["id"].to_string()
      println("POST /api/contacts/\{id_str}/favorite")
      try {
        let id = @string.parse_int(id_str)
        let contact = toggle_favorite(conn, id)
        println("  -> 200 toggled favorite for contact \{id}")
        res.send_json(contact.to_json())
      } catch {
        e => {
          println("  -> 500 \{e}")
          send_text(res, "\{e}", status=500)
        }
      }
    })
    ctx.add_route(Delete, "\{@shared.api_contacts}/:id", (req, res) => {
      let id_str = req.params["id"].to_string()
      println("DELETE /api/contacts/\{id_str}")
      try {
        let id = @string.parse_int(id_str)
        delete_contact(conn, id)
        println("  -> 204 deleted contact \{id}")
        res.send_void(status=204)
      } catch {
        e => {
          println("  -> 500 \{e}")
          send_text(res, "\{e}", status=500)
        }
      }
    })
  })
  println("Server running at http://localhost:\{port}")
  app.serve(@moonback.listen(port=port.to_uint16()))
}
