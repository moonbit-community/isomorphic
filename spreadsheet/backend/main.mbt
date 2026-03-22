///|
/// Entry point: parse args, open DB, register routes, start HTTP server.
///
/// Routes:
/// - `GET /`              — serves the HTML shell that loads the frontend
/// - `GET /frontend.js`   — serves the compiled frontend bundle from `public/`
/// - `GET /api/load`      — load the saved workbook data (JSON)
/// - `POST /api/save`     — save workbook data (JSON) to SQLite
fn main raise {
  guard @argparse.parse(
      Command("spreadsheet-server", about="Spreadsheet backend server", options=[
        OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
          "4012",
        ]),
      ]),
    )
    is { values: { "port": [port], .. }, .. } else {
    println("Failed to parse arguments")
    return
  }
  let port = @strconv.parse_int(port)

  let conn = @sqlite3.Connection::open("spreadsheet.db")
  println("Database opened: spreadsheet.db")

  init_db(conn)
  println("Database initialized")

  let app = @mocket.new()
  app
  ..use_middleware(@cors.handle_cors())
  ..get("/", fn(_event) noraise {
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
    @mocket.HttpResponse::new(
      OK,
      headers={ "Content-Type": "text/html; charset=utf-8" },
      raw_body=@utf8.encode(html),
    )
  })
  ..get("/frontend.js", fn(_event) noraise {
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
  ..get("/api/load", fn(_event) noraise {
    println("GET /api/load")
    try {
      let data = load_workbook(conn)
      println("  -> 200 (\{data.length()} bytes)")
      @mocket.HttpResponse::new(
        OK,
        headers={ "Content-Type": "application/json; charset=utf-8" },
        raw_body=@utf8.encode(data),
      )
    } catch {
      e => {
        println("  -> 500 \{e}")
        @mocket.HttpResponse::new(InternalServerError).body("\{e}")
      }
    }
  })
  .post("/api/save", fn(event) noraise {
    println("POST /api/save")
    try {
      let json : Json = event.req.body()
      let data = json.stringify()
      save_workbook(conn, data)
      println("  -> 200 saved (\{data.length()} bytes)")
      @mocket.HttpResponse::new(OK).json({ "ok": true })
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
