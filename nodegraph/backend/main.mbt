///|
/// Entry point for the nodegraph backend server.
///
/// Initializes SQLite (with foreign keys enabled), runs schema migrations,
/// seeds demo data on first launch, and registers all HTTP routes:
///
/// **Static assets:**
/// - `GET /`              -- serves the HTML shell (inline)
/// - `GET /frontend.js`   -- serves the compiled frontend JS from `public/`
///
/// **Graphs CRUD:**
/// - `GET  /api/graphs`       -- list all graphs (metadata only)
/// - `POST /api/graphs`       -- create a new graph `{"name": "..."}`
/// - `GET  /api/graphs/:id`   -- load full graph (nodes + connections)
/// - `DELETE /api/graphs/:id` -- delete graph and cascade all children
///
/// **Nodes:**
/// - `POST   /api/graphs/:id/nodes`          -- create a node in a graph
/// - `POST   /api/graphs/:gid/nodes/:nid`    -- update position or config
/// - `DELETE /api/graphs/:gid/nodes/:nid`     -- delete node and its edges
///
/// **Connections:**
/// - `POST   /api/graphs/:id/connections`         -- create (with validation)
/// - `DELETE /api/graphs/:gid/connections/:cid`   -- delete
///
/// **Evaluation:**
/// - `POST /api/graphs/:id/evaluate` -- evaluate the graph and return results
fn main raise {
  guard @argparse.parse(
      Command("nodegraph-server", about="Visual Dataflow Editor backend", options=[
        OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
          "4008",
        ]),
      ]),
    )
    is { values: { "port": [port], .. }, .. } else {
    println("Failed to parse arguments")
    return
  }
  let port = @strconv.parse_int(port)
  let conn = @sqlite3.Connection::open("nodegraph.db")
  let fk = conn.prepare("PRAGMA foreign_keys = ON")
  fk.step_once()
  fk.finalize()
  init_db(conn)
  seed_demo(conn)
  println("Database initialized")
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
      #|  <title>NodeGraph - Visual Dataflow Editor</title>
      #|  <style>
      #|    * { margin: 0; padding: 0; box-sizing: border-box; }
      #|    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f0e17; color: #eee; }
      #|    @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      #|    @keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 4px currentColor; } 50% { box-shadow: 0 0 12px currentColor; } }
      #|    @keyframes flowDash { to { stroke-dashoffset: -20; } }
      #|    @keyframes breathe { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
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
  // ── Graphs CRUD ─────────────────────────────────────────────────
  ..get(@shared.api_graphs, _ => {
    @mocket.HttpResponse::new(OK).json(get_all_graphs(conn)) catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  ..post(@shared.api_graphs, event => {
    try {
      let json : Json = event.req.body()
      let name = match json {
        { "name": String(n), .. } => n
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing name")
      }
      if !@shared.validate_graph_name(name) {
        return @mocket.HttpResponse::new(BadRequest).body("Invalid name")
      }
      @mocket.HttpResponse::new(Created).json(create_graph(conn, name))
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  ..get("\{@shared.api_graphs}/:id", fn(event) noraise {
    try {
      let id = @strconv.parse_int(event.params.get("id").unwrap().to_string())
      @mocket.HttpResponse::new(OK).json(get_graph(conn, id))
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  ..delete("\{@shared.api_graphs}/:id", fn(event) noraise {
    try {
      let id = @strconv.parse_int(event.params.get("id").unwrap().to_string())
      delete_graph(conn, id)
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  // ── Nodes ───────────────────────────────────────────────────────
  ..post("\{@shared.api_graphs}/:id/nodes", fn(event) noraise {
    try {
      let graph_id = @strconv.parse_int(
        event.params.get("id").unwrap().to_string(),
      )
      let json : Json = event.req.body()
      let (kind, label, config) = match json {
        { "kind": String(k), "label": String(l), "config": String(c), .. } =>
          (k, l, c)
        { "kind": String(k), .. } =>
          (k, @shared.node_label(@shared.kind_from_string(k)), "")
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing kind")
      }
      let node = create_node_in_graph(conn, graph_id, kind, label, config)
      @mocket.HttpResponse::new(Created).json(node)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  ..post("\{@shared.api_graphs}/:gid/nodes/:nid", fn(event) noraise {
    try {
      let _gid = @strconv.parse_int(
        event.params.get("gid").unwrap().to_string(),
      )
      let nid = @strconv.parse_int(event.params.get("nid").unwrap().to_string())
      let json : Json = event.req.body()
      // Handle position update
      match json {
        { "x": Number(x, ..), "y": Number(y, ..), .. } => {
          update_node_position(conn, nid, x.to_int(), y.to_int())
          return @mocket.HttpResponse::new(OK).json({ "ok": true })
        }
        _ => ()
      }
      let (config, label) = match json {
        { "config": String(c), "label": String(l), .. } => (c, l)
        { "config": String(c), .. } => (c, "")
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing config")
      }
      update_node_config(conn, nid, config, label)
      @mocket.HttpResponse::new(OK).json({ "ok": true })
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  ..delete("\{@shared.api_graphs}/:gid/nodes/:nid", fn(event) noraise {
    try {
      let _gid = @strconv.parse_int(
        event.params.get("gid").unwrap().to_string(),
      )
      let nid = @strconv.parse_int(event.params.get("nid").unwrap().to_string())
      delete_node(conn, nid)
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  // ── Connections ─────────────────────────────────────────────────
  ..post("\{@shared.api_graphs}/:id/connections", fn(event) noraise {
    try {
      let graph_id = @strconv.parse_int(
        event.params.get("id").unwrap().to_string(),
      )
      let json : Json = event.req.body()
      let (from_node, from_port, to_node, to_port) = match json {
        {
          "from_node_id": Number(fn_id, ..),
          "from_port": Number(fp, ..),
          "to_node_id": Number(tn_id, ..),
          "to_port": Number(tp, ..),
          ..
        } => (fn_id.to_int(), fp.to_int(), tn_id.to_int(), tp.to_int())
        _ => return @mocket.HttpResponse::new(BadRequest).body("Missing fields")
      }
      // Server-side validation using shared logic
      let graph = get_graph(conn, graph_id)
      if @shared.validate_connection(
          graph, from_node, from_port, to_node, to_port,
        )
        is Some(err) {
        return @mocket.HttpResponse::new(BadRequest).body(err)
      }
      let c = create_connection(
        conn, graph_id, from_node, from_port, to_node, to_port,
      )
      @mocket.HttpResponse::new(Created).json(c)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  ..delete("\{@shared.api_graphs}/:gid/connections/:cid", fn(event) noraise {
    try {
      let _gid = @strconv.parse_int(
        event.params.get("gid").unwrap().to_string(),
      )
      let cid = @strconv.parse_int(event.params.get("cid").unwrap().to_string())
      delete_connection(conn, cid)
      @mocket.HttpResponse::new(NoContent)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  // ── Evaluate ────────────────────────────────────────────────────
  .post("\{@shared.api_graphs}/:id/evaluate", fn(event) noraise {
    try {
      let id = @strconv.parse_int(event.params.get("id").unwrap().to_string())
      let graph = get_graph(conn, id)
      let result = @shared.evaluate_graph(graph.nodes, graph.connections)
      @mocket.HttpResponse::new(OK).json(result)
    } catch {
      e => @mocket.HttpResponse::new(InternalServerError).body("\{e}")
    }
  })
  println("Server running at http://localhost:\{port}")
  app.serve(port~)
}
