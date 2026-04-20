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
      Command("noteapp", about="Note Taking App backend", options=[
        OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
          "4003",
        ]),
      ]),
    )
    is { values: { "port": [port], .. }, .. } else {
    println("Failed to parse arguments")
    return
  }
  let port = @string.parse_int(port)

  let conn = @sqlite3.Connection::open("notes.db")
  println("Database opened: notes.db")

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
        #|  <title>Notes</title>
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
    ctx.get(@shared.api_notes, (_req, res) => {
      println("GET \{@shared.api_notes}")
      try {
        let notes = get_all_notes(conn)
        println("  -> 200 (\{notes.length()} notes)")
        res.send_json(notes.to_json())
      } catch {
        e => {
          println("  -> 500 \{e}")
          send_text(res, "\{e}", status=500)
        }
      }
    })
    ctx.post(@shared.api_notes, (req, res) => {
      println("POST \{@shared.api_notes}")
      try {
        let json : Json = req.body.json()
        let title = match json {
          { "title": String(t), .. } => t
          _ => {
            println("  -> 400 Missing title")
            send_text(res, "Missing title field", status=400)
            return
          }
        }
        let content = match json {
          { "content": String(c), .. } => c
          _ => {
            println("  -> 400 Missing content")
            send_text(res, "Missing content field", status=400)
            return
          }
        }
        if !@shared.validate_title(title) {
          println("  -> 400 Invalid title")
          send_text(
            res,
            "Title must be 1-\{@shared.max_title_length} characters",
            status=400,
          )
          return
        }
        if !@shared.validate_content(content) {
          println("  -> 400 Invalid content")
          send_text(
            res,
            "Content must be 1-\{@shared.max_content_length} characters",
            status=400,
          )
          return
        }
        let note = create_note(conn, title, content)
        println("  -> 201 created note: \{title}")
        res.send_json(note.to_json(), status=201)
      } catch {
        e => {
          println("  -> 500 \{e}")
          send_text(res, "\{e}", status=500)
        }
      }
    })
    ctx.post("\{@shared.api_notes}/:id/pin", (req, res) => {
      let id_str = req.params["id"].to_string()
      println("POST /api/notes/\{id_str}/pin")
      try {
        let id = @string.parse_int(id_str)
        let note = toggle_pin(conn, id)
        println("  -> 200 toggled pin for note \{id} (pinned=\{note.pinned})")
        res.send_json(note.to_json())
      } catch {
        e => {
          println("  -> 500 \{e}")
          send_text(res, "\{e}", status=500)
        }
      }
    })
    ctx.add_route(Delete, "\{@shared.api_notes}/:id", (req, res) => {
      let id_str = req.params["id"].to_string()
      println("DELETE /api/notes/\{id_str}")
      try {
        let id = @string.parse_int(id_str)
        delete_note(conn, id)
        println("  -> 204 deleted note \{id}")
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
