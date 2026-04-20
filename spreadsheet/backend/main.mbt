///|
/// Connected WebSocket clients for real-time broadcast.
let ws_clients : Array[@websocket.Conn] = []

///|
/// Broadcast a "refresh" message to all connected WebSocket clients.
/// Removes disconnected clients from the list.
async fn broadcast_refresh() -> Unit {
  let to_remove : Array[Int] = []
  for i, client in ws_clients {
    client.send_text("{\"type\":\"refresh\"}") catch {
      _ => to_remove.push(i)
    }
  }
  for j = to_remove.length() - 1; j >= 0; j = j - 1 {
    ignore(ws_clients.remove(to_remove[j]))
  }
}

///|
/// Entry point: open DB, start moonback server on port 4012.
async fn main {
  let conn = @sqlite3.Connection::open("spreadsheet.db")
  println("Database opened: spreadsheet.db")
  init_db(conn) catch {
    e => {
      println("Failed to initialize database: \{e}")
      return
    }
  }
  println("Database initialized")
  let app = @moonback.App(ctx => {
    ctx.add_middleware(@unstable_cors.new())
    ctx.add_middleware(
      @unstable_static.new(root="./public", rewrite_trailing_slash_index=true),
    )
    ctx.get("/api/load", (_req, res) => {
      println("GET /api/load")
      try {
        let data = load_workbook(conn)
        println("  -> 200 (\{data.length()} bytes)")
        res
        .respond(status=200, headers={
          "Content-Type": "application/json; charset=utf-8",
        })
        .write(data)
      } catch {
        e => {
          println("  -> 500 \{e}")
          res
          .respond(status=500, headers={
            "Content-Type": "text/plain; charset=utf-8",
          })
          .write("\{e}")
        }
      }
    })
    ctx.post("/api/save", (req, res) => {
      println("POST /api/save")
      try {
        let json : Json = req.body.json()
        let data = json.stringify()
        save_workbook(conn, data)
        println("  -> 200 saved (\{data.length()} bytes)")
        let num_clients = ws_clients.length()
        println("  -> broadcasting to \{num_clients} WS clients")
        broadcast_refresh()
        println("  -> broadcast done")
        res.send_json(({ "ok": true } : Json))
      } catch {
        e => {
          println("  -> 500 \{e}")
          res
          .respond(status=500, headers={
            "Content-Type": "text/plain; charset=utf-8",
          })
          .write("\{e}")
        }
      }
    })
    ctx.get("/ws", (req, res) => {
      let addr = match req.ip() {
        Some(ip) => ip.to_string()
        None => "unknown"
      }
      println("WS upgrade from \{addr}")
      let ws = res.upgrade(req)
      ws_clients.push(ws)
      let total = ws_clients.length()
      println("  -> WebSocket connected (total: \{total})")
      try {
        for ;; {
          let msg = ws.recv()
          ignore(msg.read_all())
        }
      } catch {
        @websocket.ConnectionClosed(_, reason) => {
          let r = reason.unwrap_or("normal")
          let remaining = ws_clients.length()
          println("  -> WebSocket disconnected: \{r} (remaining: \{remaining})")
        }
        _ => ()
      }
      ws.close()
      for i = ws_clients.length() - 1; i >= 0; i = i - 1 {
        if physical_equal(ws_clients[i], ws) {
          ignore(ws_clients.remove(i))
          break
        }
      }
      let remaining = ws_clients.length()
      println("  -> Cleaned up WS client (remaining: \{remaining})")
    })
  })
  println("Server running at http://localhost:4012")
  app.serve(@moonback.listen(port=4012))
}

///|
/// Create the `workbooks` table if it doesn't already exist.
///
/// Stores a single JSON blob representing the entire workbook state.
/// The `data` column is stored as `BLOB` for UTF-8 safety.
fn init_db(conn : @sqlite3.Connection) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS workbooks (
      #|  id INTEGER PRIMARY KEY,
      #|  data BLOB NOT NULL,
      #|  updated_at TEXT DEFAULT (datetime('now'))
      #|)
    ),
  )
  stmt.step_once()
  stmt.finalize()
}

///|
/// Load the workbook data from the database.
///
/// Returns the JSON string for the single workbook row (id=1),
/// or `"{}"` if no data has been saved yet.
fn load_workbook(
  conn : @sqlite3.Connection,
) -> String raise @sqlite3.SqliteError {
  let stmt = conn.prepare("SELECT data FROM workbooks WHERE id = 1")
  let result = if stmt.step() {
    let data : String = stmt.column_blob_as_string(index=0)
    data
  } else {
    "{}"
  }
  stmt.finalize()
  result
}

///|
/// Save (upsert) the workbook data to the database.
///
/// Uses INSERT OR REPLACE to create or update the single row (id=1).
/// Uses `bind_string_as_blob` for UTF-8 safety.
fn save_workbook(
  conn : @sqlite3.Connection,
  data : String,
) -> Unit raise @sqlite3.SqliteError {
  let stmt = conn.prepare(
    "INSERT OR REPLACE INTO workbooks (id, data, updated_at) VALUES (1, ?, datetime('now'))",
  )
  stmt.bind_string_as_blob(index=1, val=data)
  stmt.step_once()
  stmt.finalize()
}
