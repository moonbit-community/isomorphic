///|
/// Entry point. Parses CLI args, opens the SQLite database, registers
/// REST API routes and static file handlers, then starts the Mocket server.
fn main raise {
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
  let port = @strconv.parse_int(port)

  let conn = @sqlite3.Connection::open("contacts.db")
  println("Database opened: contacts.db")

  init_db(conn)
  println("Database initialized")

  let app = @mocket.new()
  app
  ..use_middleware(@cors.handle_cors())
  ..get("/", _ => {
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
    @mocket.HttpResponse::new(
      OK,
      headers={ "Content-Type": "text/html; charset=utf-8" },
      raw_body=@utf8.encode(html),
    )
  })
  ..get("/frontend.js", _ => {
    println("GET /frontend.js")
    try {
      let bytes = @fs.read_file_to_bytes("./public/frontend.js")
      @mocket.HttpResponse::new(
        OK,
        headers={ "Content-Type": "application/javascript; charset=utf-8" },
        raw_body=bytes,
      )
    } catch {
      _ => {
        println("  -> 404 Not Found")
        @mocket.HttpResponse::new(NotFound).body("Not Found")
      }
    }
  })
  ..get(@shared.api_contacts, _ => {
    println("GET \{@shared.api_contacts}")
    try {
      let contacts = get_all_contacts(conn)
      println("  -> 200 (\{contacts.length()} contacts)")
      @mocket.HttpResponse::new(OK).json(contacts)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post(@shared.api_contacts, event => {
    println("POST \{@shared.api_contacts}")
    try {
      let json : Json = event.req.body()
      let name = match json {
        { "name": String(n), .. } => n
        _ => {
          println("  -> 400 Missing name")
          return @mocket.HttpResponse::new(BadRequest).body(
            "Missing name field",
          )
        }
      }
      let email = match json {
        { "email": String(e), .. } => e
        _ => {
          println("  -> 400 Missing email")
          return @mocket.HttpResponse::new(BadRequest).body(
            "Missing email field",
          )
        }
      }
      let phone = match json {
        { "phone": String(p), .. } => p
        _ => {
          println("  -> 400 Missing phone")
          return @mocket.HttpResponse::new(BadRequest).body(
            "Missing phone field",
          )
        }
      }
      if !@shared.validate_name(name) {
        println("  -> 400 Invalid name")
        return @mocket.HttpResponse::new(BadRequest).body(
          "Name must be 1-\{@shared.max_name_length} characters",
        )
      }
      if !@shared.validate_email(email) {
        println("  -> 400 Invalid email")
        return @mocket.HttpResponse::new(BadRequest).body(
          "Email must be valid (contain @ and . after @)",
        )
      }
      if !@shared.validate_phone(phone) {
        println("  -> 400 Invalid phone")
        return @mocket.HttpResponse::new(BadRequest).body(
          "Phone must contain only digits, spaces, hyphens, parens, and +",
        )
      }
      let contact = create_contact(conn, name, email, phone)
      println("  -> 201 created contact: \{name}")
      @mocket.HttpResponse::new(Created).json(contact)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  ..post("\{@shared.api_contacts}/:id/favorite", event => {
    let id_str = event.params.get("id").unwrap().to_string()
    println("POST /api/contacts/\{id_str}/favorite")
    try {
      let id = @strconv.parse_int(id_str)
      let contact = toggle_favorite(conn, id)
      println("  -> 200 toggled favorite for contact \{id}")
      @mocket.HttpResponse::new(OK).json(contact)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  .delete("\{@shared.api_contacts}/:id", fn(event) noraise {
    let id_str = event.params.get("id").unwrap().to_string()
    println("DELETE /api/contacts/\{id_str}")
    try {
      let id = @strconv.parse_int(id_str)
      delete_contact(conn, id)
      println("  -> 204 deleted contact \{id}")
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  println("Server running at http://localhost:\{port}")
  app.serve(port~)
}
