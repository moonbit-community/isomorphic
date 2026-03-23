///|
/// Connected WebSocket clients for real-time broadcast.
let ws_clients : Array[@websocket.Conn] = []

///|
/// Broadcast a "refresh" message to all connected WebSocket clients.
/// Removes disconnected clients from the list.
async fn broadcast_refresh() -> Unit {
  let to_remove : Array[Int] = []
  for i, client in ws_clients {
    try {
      client.send_text("{\"type\":\"refresh\"}")
    } catch {
      _ => to_remove.push(i)
    }
  }
  // Remove disconnected clients in reverse order to preserve indices
  for j = to_remove.length() - 1; j >= 0; j = j - 1 {
    ignore(ws_clients.remove(to_remove[j]))
  }
}

///|
/// CORS headers applied to every HTTP response.
let cors_headers : Map[String, String] = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
}

///|
/// Merge CORS headers with additional headers.
fn with_cors(extra : Map[String, String]) -> Map[String, String] {
  let merged : Map[String, String] = {}
  for k, v in cors_headers {
    merged[k] = v
  }
  for k, v in extra {
    merged[k] = v
  }
  merged
}

///|
/// Entry point: open DB, start async HTTP+WebSocket server on port 4012.
async fn main {
  let conn = @sqlite3.Connection::open("spreadsheet.db")
  println("Database opened: spreadsheet.db")
  try {
    init_db(conn)
  } catch {
    e => {
      println("Failed to initialize database: \{e}")
      return
    }
  }
  println("Database initialized")
  let server = @http.Server::new(@socket.Addr::parse("0.0.0.0:4012"), reuse_addr=true)
  println("Server running at http://localhost:4012")
  server.run_forever(async fn(request, body, sconn) {
    println(">>> \{request.meth} '\{request.path}'")
    match (request.meth, request.path) {
      (Options, _) => {
        // Handle CORS preflight
        sconn
        ..send_response(204, "No Content", extra_headers=cors_headers)
        .end_response()
      }
      (Get, "/") => {
        println("GET /")
        let html =
          #|<!DOCTYPE html>
          #|<html lang="en">
          #|<head>
          #|  <meta charset="UTF-8">
          #|  <meta name="viewport" content="width=device-width, initial-scale=1.0">
          #|  <title>MoonBit Spreadsheet</title>
          #|  <link rel="preconnect" href="https://fonts.googleapis.com">
          #|  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
          #|  <style>
          #|    * { margin: 0; padding: 0; box-sizing: border-box; }
          #|    body { overflow: hidden; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
          #|    input:focus { outline: 2px solid #1a73e8; outline-offset: -2px; }
          #|    ::-webkit-scrollbar { width: 10px; height: 10px; }
          #|    ::-webkit-scrollbar-track { background: #f1f3f4; }
          #|    ::-webkit-scrollbar-thumb { background: #bdc1c6; border-radius: 5px; }
          #|    ::-webkit-scrollbar-thumb:hover { background: #9aa0a6; }
          #|    ::-webkit-scrollbar-corner { background: #f1f3f4; }
          #|    ::selection { background: #d2e3fc; }
          #|    @keyframes barGrow { from { transform: scaleY(0); opacity: 0.3; } to { transform: scaleY(1); opacity: 1; } }
          #|    @keyframes chartSlideIn { from { transform: translateY(-12px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          #|    @keyframes cellPulse { 0%, 100% { box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2); } 50% { box-shadow: 0 0 0 4px rgba(26, 115, 232, 0.4); } }
          #|    @keyframes donutDraw { from { stroke-dashoffset: var(--circumference); } to { stroke-dashoffset: var(--dash-offset); } }
          #|  </style>
          #|</head>
          #|<body>
          #|  <div id="app"></div>
          #|  <script src="/frontend.js"></script>
          #|</body>
          #|</html>
        sconn
        ..send_response(
          200,
          "OK",
          extra_headers=with_cors({ "Content-Type": "text/html; charset=utf-8" }),
        )
        ..write(@utf8.encode(html))
        .end_response()
      }
      (Get, "/frontend.js") => {
        println("GET /frontend.js")
        try {
          let bytes = @fs.read_file_to_bytes("./public/frontend.js")
          sconn
          ..send_response(
            200,
            "OK",
            extra_headers=with_cors({
              "Content-Type": "application/javascript; charset=utf-8",
            }),
          )
          ..write(bytes)
          .end_response()
        } catch {
          _ => {
            println("  -> 404 Not Found")
            sconn
            ..send_response(404, "Not Found", extra_headers=cors_headers)
            ..write("Not Found")
            .end_response()
          }
        }
      }
      (Get, "/api/load") => {
        println("GET /api/load")
        try {
          let data = load_workbook(conn)
          println("  -> 200 (\{data.length()} bytes)")
          sconn
          ..send_response(
            200,
            "OK",
            extra_headers=with_cors({
              "Content-Type": "application/json; charset=utf-8",
            }),
          )
          ..write(@utf8.encode(data))
          .end_response()
        } catch {
          e => {
            println("  -> 500 \{e}")
            sconn
            ..send_response(
              500,
              "Internal Server Error",
              extra_headers=cors_headers,
            )
            ..write("\{e}")
            .end_response()
          }
        }
      }
      (Post, "/api/save") => {
        println("POST /api/save")
        try {
          let raw : &@io.Data = body.read_all()
          let text = raw.text()
          let json : Json = @json.parse(text)
          let data = json.stringify()
          save_workbook(conn, data)
          println("  -> 200 saved (\{data.length()} bytes)")
          // Broadcast refresh to all WebSocket clients
          let num_clients = ws_clients.length()
          println("  -> broadcasting to \{num_clients} WS clients")
          broadcast_refresh()
          println("  -> broadcast done")
          sconn
          ..send_response(
            200,
            "OK",
            extra_headers=with_cors({
              "Content-Type": "application/json; charset=utf-8",
            }),
          )
          ..write("{\"ok\":true}")
          .end_response()
        } catch {
          e => {
            println("  -> 500 \{e}")
            sconn
            ..send_response(
              500,
              "Internal Server Error",
              extra_headers=cors_headers,
            )
            ..write("\{e}")
            .end_response()
          }
        }
      }
      (Get, "/ws") => {
        let addr = sconn.client_addr()
        println("WS upgrade from \{addr}")
        let ws = @websocket.from_http_server(request, sconn)
        ws_clients.push(ws)
        let total = ws_clients.length()
        println("  -> WebSocket connected (total: \{total})")
        try {
          // Keep the connection alive by reading messages in a loop
          for ;; {
            let msg = ws.recv()
            // Read and discard the message content
            let _ = msg.read_all()

          }
        } catch {
          @websocket.ConnectionClosed(_, reason) => {
            let r = reason.unwrap_or("normal")
            let remaining = ws_clients.length()
            println(
              "  -> WebSocket disconnected: \{r} (remaining: \{remaining})",
            )
          }
          _ => ()
        }
        // Clean up: close and remove this client
        ws.close()
        // Use index tracking — we saved the index when we pushed
        let _my_idx = ws_clients.length() - 1 // approximate; rebuild is safer
        for i = ws_clients.length() - 1; i >= 0; i = i - 1 {
          if physical_equal(ws_clients[i], ws) {
            ignore(ws_clients.remove(i))
            break
          }
        }
        let remaining = ws_clients.length()
        println("  -> Cleaned up WS client (remaining: \{remaining})")
      }
      _ => {
        println("UNMATCHED: method=\{request.meth} path='\{request.path}' -> 404")
        sconn
        ..send_response(404, "Not Found", extra_headers=cors_headers)
        ..write("Not Found")
        .end_response()
      }
    }
  })
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
