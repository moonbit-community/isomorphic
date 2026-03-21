///|
fn api(path : String) -> String {
  path
}

///|
fn fetch_graphs(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    api(@shared.api_graphs),
    expect=Json(
      fn(r) { dispatch(GotGraphs(r)) },
      fn(json) { Ok(@json.from_json(json)) catch { _ => Err("decode error") } },
    ),
  )
}

///|
fn fetch_graph(dispatch : @rabbita.Dispatch[Msg], id : Int) -> @rabbita.Cmd {
  @http.get(
    api(@shared.api_graph(id)),
    expect=Json(
      fn(r) { dispatch(GotGraph(r)) },
      fn(json) { Ok(@json.from_json(json)) catch { _ => Err("decode error") } },
    ),
  )
}

///|
fn do_evaluate(
  dispatch : @rabbita.Dispatch[Msg],
  graph_id : Int,
) -> @rabbita.Cmd {
  @http.post(
    api(@shared.api_graph_evaluate(graph_id)),
    Json({}),
    expect=Json(fn(r) { dispatch(GotEvalResult(r)) }, fn(json) {
      Ok(@json.from_json(json)) catch {
        _ => Err("decode error")
      }
    }),
  )
}

///|
fn auto_eval_cmd(
  model : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Cmd {
  if model.auto_eval && model.current_graph_id > 0 {
    do_evaluate(dispatch, model.current_graph_id)
  } else {
    @rabbita.none
  }
}

///|
#warnings("-unresolved_type_variable")
pub fn Model::update(
  self : Model,
  msg~ : Msg,
  dispatch~ : @rabbita.Dispatch[Msg],
) -> (Model, @rabbita.Cmd) {
  match msg {
    Init => ({ ..self, loading: true }, fetch_graphs(dispatch))
    // ── Navigation ────────────────────────────────────────────────
    GoToList =>
      (
        { ..self, page: GraphList, connecting_from_node: 0, editing_node: 0 },
        fetch_graphs(dispatch),
      )
    GoToEditor(id) =>
      (
        {
          ..self,
          page: Editor,
          current_graph_id: id,
          loading: true,
          eval_result: None,
        },
        fetch_graph(dispatch, id),
      )
    // ── Graph list ────────────────────────────────────────────────
    GotGraphs(Ok(graphs)) =>
      if self.first_load && graphs.length() > 0 {
        // Auto-open first graph on initial load
        (
          {
            ..self,
            graphs,
            loading: true,
            first_load: false,
            page: Editor,
            current_graph_id: graphs[0].id,
          },
          fetch_graph(dispatch, graphs[0].id),
        )
      } else {
        ({ ..self, graphs, loading: false, first_load: false }, @rabbita.none)
      }
    GotGraphs(Err(e)) =>
      ({ ..self, error: e, loading: false }, @rabbita.none)
    SetGraphName(v) => ({ ..self, new_graph_name: v }, @rabbita.none)
    CreateGraph => {
      if !@shared.validate_graph_name(self.new_graph_name) {
        return ({ ..self, error: "Name required" }, @rabbita.none)
      }
      let cmd = @http.post(
        api(@shared.api_graphs),
        Json({ "name": self.new_graph_name.to_json() }),
        expect=Json(fn(r) { dispatch(GraphCreated(r)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("decode error")
          }
        }),
      )
      ({ ..self, error: "" }, cmd)
    }
    GraphCreated(Ok(g)) => {
      let graphs = self.graphs.copy()
      graphs.push(g)
      ({ ..self, graphs, new_graph_name: "" }, @rabbita.none)
    }
    GraphCreated(Err(e)) => ({ ..self, error: e }, @rabbita.none)
    DeleteGraph(id) => {
      let cmd = @http.delete(
        api(@shared.api_graph(id)),
        expect=Text(fn(r) { dispatch(GraphDeleted(r.map(fn(_) { id }))) }),
      )
      (self, cmd)
    }
    GraphDeleted(Ok(id)) => {
      let graphs = self.graphs.filter(fn(g) { g.id != id })
      ({ ..self, graphs, }, @rabbita.none)
    }
    GraphDeleted(Err(_)) => (self, @rabbita.none)
    // ── Graph loaded ──────────────────────────────────────────────
    GotGraph(Ok(graph)) => {
      let m = {
        ..self,
        nodes: graph.nodes,
        connections: graph.connections,
        loading: false,
      }
      (m, auto_eval_cmd(m, dispatch))
    }
    GotGraph(Err(e)) => ({ ..self, error: e, loading: false }, @rabbita.none)
    // ── Node ops ──────────────────────────────────────────────────
    TogglePalette =>
      ({ ..self, show_palette: !self.show_palette }, @rabbita.none)
    SetPaletteCat(c) => ({ ..self, palette_cat: c }, @rabbita.none)
    AddNode(kind) => {
      let label = @shared.node_label(kind)
      let config = match kind {
        ConstNumber => "0"
        ConstString => "hello"
        ConstBool => "true"
        ConstColor => "#ff0000"
        _ => ""
      }
      let cmd = @http.post(
        api(@shared.api_graph_nodes(self.current_graph_id)),
        Json(
          {
            "kind": @shared.kind_to_string(kind).to_json(),
            "label": label.to_json(),
            "config": config.to_json(),
          },
        ),
        expect=Json(
          fn(r) { dispatch(NodeAdded(r)) },
          fn(json) { Ok(@json.from_json(json)) catch { _ => Err("decode error") } },
        ),
      )
      ({ ..self, show_palette: false, error: "" }, cmd)
    }
    NodeAdded(Ok(node)) => {
      let nodes = self.nodes.copy()
      nodes.push(node)
      let m = { ..self, nodes, }
      (m, auto_eval_cmd(m, dispatch))
    }
    NodeAdded(Err(e)) => ({ ..self, error: e }, @rabbita.none)
    DeleteNode(id) => {
      let cmd = @http.delete(
        api(@shared.api_graph_node(self.current_graph_id, id)),
        expect=Text(fn(r) { dispatch(NodeDeleted(r.map(fn(_) { id }))) }),
      )
      (self, cmd)
    }
    NodeDeleted(Ok(id)) => {
      let nodes = self.nodes.filter(fn(n) { n.id != id })
      let connections = self.connections.filter(fn(c) {
        c.from_node_id != id && c.to_node_id != id
      })
      let m = { ..self, nodes, connections, connecting_from_node: 0 }
      (m, auto_eval_cmd(m, dispatch))
    }
    NodeDeleted(Err(_)) => (self, @rabbita.none)
    // ── Node dragging ────────────────────────────────────────────
    StartDrag(node_id, client_x, client_y) => {
      // Store offset = clientPos - nodePos (so nodePos = clientPos - offset)
      let mut nx = 0
      let mut ny = 0
      for n in self.nodes {
        if n.id == node_id {
          nx = n.x
          ny = n.y
        }
      }
      (
        {
          ..self,
          dragging_node: node_id,
          drag_offset_x: client_x - nx,
          drag_offset_y: client_y - ny,
        },
        @rabbita.none,
      )
    }
    Drag(client_x, client_y) => {
      if self.dragging_node == 0 {
        return (self, @rabbita.none)
      }
      // clientX/clientY never changes reference element → no flickering
      let new_x = client_x - self.drag_offset_x
      let new_y = client_y - self.drag_offset_y
      let nodes = self.nodes.map(fn(n) {
        if n.id == self.dragging_node {
          { ..n, x: new_x, y: new_y }
        } else {
          n
        }
      })
      ({ ..self, nodes }, @rabbita.none)
    }
    EndDrag => {
      if self.dragging_node == 0 {
        return ({ ..self, dragging_node: 0 }, @rabbita.none)
      }
      // Save position to backend
      let node_id = self.dragging_node
      let mut nx = 0
      let mut ny = 0
      for n in self.nodes {
        if n.id == node_id {
          nx = n.x
          ny = n.y
        }
      }
      let cmd = @http.post(
        api(@shared.api_graph_node(self.current_graph_id, node_id)),
        Json(
          {
            "config": "".to_json(),
            "label": "".to_json(),
            "x": nx.to_json(),
            "y": ny.to_json(),
          },
        ),
        expect=Json(
          fn(r) {
            dispatch(NodePositionSaved(r.map(fn(_j : Json) { () })))
          },
          fn(json) { Ok(json) },
        ),
      )
      ({ ..self, dragging_node: 0 }, cmd)
    }
    NodePositionSaved(_) => (self, @rabbita.none)
    // ── Config editing ────────────────────────────────────────────
    StartEditConfig(node_id, current) =>
      ({ ..self, editing_node: node_id, config_value: current }, @rabbita.none)
    SetConfigValue(v) => ({ ..self, config_value: v }, @rabbita.none)
    CancelEditConfig =>
      ({ ..self, editing_node: 0, config_value: "" }, @rabbita.none)
    SaveConfig => {
      if self.editing_node == 0 {
        return (self, @rabbita.none)
      }
      let cmd = @http.post(
        api(@shared.api_graph_node(self.current_graph_id, self.editing_node)),
        Json(
          {
            "config": self.config_value.to_json(),
            "label": self.config_value.to_json(),
          },
        ),
        expect=Json(
          fn(r) { dispatch(ConfigSaved(r.map(fn(_json : Json) { () }))) },
          fn(json) { Ok(json) },
        ),
      )
      // Optimistic update
      let nodes = self.nodes.map(fn(n) {
        if n.id == self.editing_node {
          { ..n, config: self.config_value, label: self.config_value }
        } else {
          n
        }
      })
      let m = { ..self, nodes, editing_node: 0, config_value: "" }
      (m, @rabbita.batch([cmd, auto_eval_cmd(m, dispatch)]))
    }
    ConfigSaved(_) => (self, @rabbita.none)
    // ── Connection ────────────────────────────────────────────────
    StartConnect(node_id, port) =>
      (
        {
          ..self,
          connecting_from_node: node_id,
          connecting_from_port: port,
          wire_mouse_x: 0,
          wire_mouse_y: 0,
          wire_start_cx: 0,
          wire_start_cy: 0,
          wire_origin_x: 0,
          wire_origin_y: 0,
        },
        @rabbita.none,
      )
    WireMove(client_x, client_y) => {
      // On first move, calibrate: record clientX and compute port canvas pos
      if self.wire_start_cx == 0 && self.wire_start_cy == 0 {
        // Compute the output port's canvas position
        let mut ox = 0
        let mut oy = 0
        for n in self.nodes {
          if n.id == self.connecting_from_node {
            ox = n.x + node_w
            let in_count = @shared.input_ports(n.kind).length()
            let has_cfg = match n.kind {
              ConstNumber | ConstString | ConstBool | ConstColor => true
              _ => false
            }
            let cfg_h = if has_cfg { 32 } else { 0 }
            let ins_h = if in_count > 0 { 16 + in_count * port_stride } else { 0 }
            oy = n.y + header_h + cfg_h + ins_h + 16 + self.connecting_from_port * port_stride + 8
          }
        }
        (
          {
            ..self,
            wire_start_cx: client_x,
            wire_start_cy: client_y,
            wire_origin_x: ox,
            wire_origin_y: oy,
            wire_mouse_x: ox,
            wire_mouse_y: oy,
          },
          @rabbita.none,
        )
      } else {
        // Delta from start client position → canvas position
        let wx = self.wire_origin_x + (client_x - self.wire_start_cx)
        let wy = self.wire_origin_y + (client_y - self.wire_start_cy)
        ({ ..self, wire_mouse_x: wx, wire_mouse_y: wy }, @rabbita.none)
      }
    }
    CancelConnect =>
      (
        {
          ..self,
          connecting_from_node: 0,
          connecting_from_port: 0,
          wire_mouse_x: 0,
          wire_mouse_y: 0,
        },
        @rabbita.none,
      )
    CompleteConnect(to_node, to_port) => {
      let from_node = self.connecting_from_node
      let from_port = self.connecting_from_port
      // Client-side validation using shared logic
      let graph : @shared.Graph = {
        nodes: self.nodes,
        connections: self.connections,
      }
      if @shared.validate_connection(
          graph, from_node, from_port, to_node, to_port,
        )
        is Some(err) {
        return (
          {
            ..self,
            error: err,
            connecting_from_node: 0,
            connecting_from_port: 0,
          },
          @rabbita.none,
        )
      }
      let cmd = @http.post(
        api(@shared.api_graph_connections(self.current_graph_id)),
        Json(
          {
            "from_node_id": from_node.to_json(),
            "from_port": from_port.to_json(),
            "to_node_id": to_node.to_json(),
            "to_port": to_port.to_json(),
          },
        ),
        expect=Json(
          fn(r) { dispatch(ConnectionAdded(r)) },
          fn(json) { Ok(@json.from_json(json)) catch { _ => Err("decode error") } },
        ),
      )
      (
        { ..self, connecting_from_node: 0, connecting_from_port: 0 },
        cmd,
      )
    }
    ConnectionAdded(Ok(c)) => {
      let connections = self.connections.copy()
      connections.push(c)
      let m = { ..self, connections, }
      (m, auto_eval_cmd(m, dispatch))
    }
    ConnectionAdded(Err(e)) => ({ ..self, error: e }, @rabbita.none)
    DeleteConnection(id) => {
      let cmd = @http.delete(
        api(@shared.api_graph_connection(self.current_graph_id, id)),
        expect=Text(fn(r) {
          dispatch(ConnectionDeleted(r.map(fn(_) { id })))
        }),
      )
      (self, cmd)
    }
    ConnectionDeleted(Ok(id)) => {
      let connections = self.connections.filter(fn(c) { c.id != id })
      let m = { ..self, connections, }
      (m, auto_eval_cmd(m, dispatch))
    }
    ConnectionDeleted(Err(_)) => (self, @rabbita.none)
    // ── Evaluation ────────────────────────────────────────────────
    Evaluate => (self, do_evaluate(dispatch, self.current_graph_id))
    GotEvalResult(Ok(result)) =>
      ({ ..self, eval_result: Some(result) }, @rabbita.none)
    GotEvalResult(Err(e)) => ({ ..self, error: e }, @rabbita.none)
    ToggleAutoEval => {
      let m = { ..self, auto_eval: !self.auto_eval }
      (m, if m.auto_eval { auto_eval_cmd(m, dispatch) } else { @rabbita.none })
    }
    ClearError => ({ ..self, error: "" }, @rabbita.none)
  }
}
