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
  let port = @string.parse_int(port)
  let conn = @sqlite3.Connection::open("nodegraph.db")
  let fk = conn.prepare("PRAGMA foreign_keys = ON")
  fk.step_once()
  fk.finalize()
  init_db(conn)
  seed_demo(conn)
  println("Database initialized")

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
      res.send_html(html)
    })
    ctx.get(@shared.api_graphs, (_req, res) => {
      res.send_json(get_all_graphs(conn).to_json()) catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.post(@shared.api_graphs, (req, res) => {
      try {
        let json : Json = req.body.json()
        let name = match json {
          { "name": String(n), .. } => n
          _ => {
            send_text(res, "Missing name", status=400)
            return
          }
        }
        if !@shared.validate_graph_name(name) {
          send_text(res, "Invalid name", status=400)
          return
        }
        res.send_json(create_graph(conn, name).to_json(), status=201)
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.get("\{@shared.api_graphs}/:id", (req, res) => {
      try {
        let id = @string.parse_int(req.params["id"].to_string())
        res.send_json(get_graph(conn, id).to_json())
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.add_route(Delete, "\{@shared.api_graphs}/:id", (req, res) => {
      try {
        let id = @string.parse_int(req.params["id"].to_string())
        delete_graph(conn, id)
        res.send_void(status=204)
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.post("\{@shared.api_graphs}/:id/nodes", (req, res) => {
      try {
        let graph_id = @string.parse_int(req.params["id"].to_string())
        let json : Json = req.body.json()
        let (kind, label, config) = match json {
          { "kind": String(k), "label": String(l), "config": String(c), .. } =>
            (k, l, c)
          { "kind": String(k), .. } =>
            (k, @shared.node_label(@shared.kind_from_string(k)), "")
          _ => {
            send_text(res, "Missing kind", status=400)
            return
          }
        }
        let node = create_node_in_graph(conn, graph_id, kind, label, config)
        res.send_json(node.to_json(), status=201)
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.post("\{@shared.api_graphs}/:gid/nodes/:nid", (req, res) => {
      try {
        let _gid = @string.parse_int(req.params["gid"].to_string())
        let nid = @string.parse_int(req.params["nid"].to_string())
        let json : Json = req.body.json()
        match json {
          { "x": Number(x, ..), "y": Number(y, ..), .. } => {
            update_node_position(conn, nid, x.to_int(), y.to_int())
            res.send_json(({ "ok": true } : Json))
            return
          }
          _ => ()
        }
        let (config, label) = match json {
          { "config": String(c), "label": String(l), .. } => (c, l)
          { "config": String(c), .. } => (c, "")
          _ => {
            send_text(res, "Missing config", status=400)
            return
          }
        }
        update_node_config(conn, nid, config, label)
        res.send_json(({ "ok": true } : Json))
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.add_route(Delete, "\{@shared.api_graphs}/:gid/nodes/:nid", (req, res) => {
      try {
        let _gid = @string.parse_int(req.params["gid"].to_string())
        let nid = @string.parse_int(req.params["nid"].to_string())
        delete_node(conn, nid)
        res.send_void(status=204)
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.post("\{@shared.api_graphs}/:id/connections", (req, res) => {
      try {
        let graph_id = @string.parse_int(req.params["id"].to_string())
        let json : Json = req.body.json()
        let (from_node, from_port, to_node, to_port) = match json {
          {
            "from_node_id": Number(fn_id, ..),
            "from_port": Number(fp, ..),
            "to_node_id": Number(tn_id, ..),
            "to_port": Number(tp, ..),
            ..
          } => (fn_id.to_int(), fp.to_int(), tn_id.to_int(), tp.to_int())
          _ => {
            send_text(res, "Missing fields", status=400)
            return
          }
        }
        let graph = get_graph(conn, graph_id)
        if @shared.validate_connection(
            graph, from_node, from_port, to_node, to_port,
          )
          is Some(err) {
          send_text(res, err, status=400)
          return
        }
        let connection = create_connection(
          conn, graph_id, from_node, from_port, to_node, to_port,
        )
        res.send_json(connection.to_json(), status=201)
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.add_route(Delete, "\{@shared.api_graphs}/:gid/connections/:cid", (
      req,
      res,
    ) => {
      try {
        let _gid = @string.parse_int(req.params["gid"].to_string())
        let cid = @string.parse_int(req.params["cid"].to_string())
        delete_connection(conn, cid)
        res.send_void(status=204)
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
    ctx.post("\{@shared.api_graphs}/:id/evaluate", (req, res) => {
      try {
        let id = @string.parse_int(req.params["id"].to_string())
        let graph = get_graph(conn, id)
        let result = @shared.evaluate_graph(graph.nodes, graph.connections)
        res.send_json(result.to_json())
      } catch {
        e => send_text(res, "\{e}", status=500)
      }
    })
  })
  println("Server running at http://localhost:\{port}")
  app.serve(@moonback.listen(port=port.to_uint16()))
}
