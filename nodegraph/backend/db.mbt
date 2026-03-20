///|
fn init_db(conn : @sqlite3.Connection) -> Unit raise @sqlite3.SqliteError {
  let s1 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS graphs (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  name BLOB NOT NULL
      #|)
    ),
  )
  s1.step_once()
  s1.finalize()
  let s2 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS nodes (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  graph_id INTEGER NOT NULL REFERENCES graphs(id),
      #|  kind BLOB NOT NULL,
      #|  x INTEGER NOT NULL DEFAULT 0,
      #|  y INTEGER NOT NULL DEFAULT 0,
      #|  label BLOB NOT NULL DEFAULT '',
      #|  config BLOB NOT NULL DEFAULT ''
      #|)
    ),
  )
  s2.step_once()
  s2.finalize()
  let s3 = conn.prepare(
    (
      #|CREATE TABLE IF NOT EXISTS connections (
      #|  id INTEGER PRIMARY KEY AUTOINCREMENT,
      #|  graph_id INTEGER NOT NULL REFERENCES graphs(id),
      #|  from_node_id INTEGER NOT NULL REFERENCES nodes(id),
      #|  from_port INTEGER NOT NULL,
      #|  to_node_id INTEGER NOT NULL REFERENCES nodes(id),
      #|  to_port INTEGER NOT NULL,
      #|  UNIQUE(to_node_id, to_port)
      #|)
    ),
  )
  s3.step_once()
  s3.finalize()
}

///|
fn seed_demo(conn : @sqlite3.Connection) -> Unit raise @sqlite3.SqliteError {
  let check = conn.prepare("SELECT COUNT(*) FROM graphs")
  guard check.step()
  let count : Int = check.column(index=0)
  check.finalize()
  if count > 0 {
    return
  }
  // ── Graph 1: Color Mixer ─────────────────────────────────────
  seed_graph(conn, "Color Mixer")
  let gid = last_id(conn)
  insert_node(conn, gid, "ConstNumber", 0, 0, "255", "255")
  let r = last_id(conn)
  insert_node(conn, gid, "ConstNumber", 0, 1, "128", "128")
  let g_ = last_id(conn)
  insert_node(conn, gid, "ConstNumber", 0, 2, "0", "0")
  let b = last_id(conn)
  insert_node(conn, gid, "ColorRGB", 1, 0, "RGB", "")
  let rgb = last_id(conn)
  insert_node(conn, gid, "ConstColor", 0, 3, "#0066ff", "#0066ff")
  let c2 = last_id(conn)
  insert_node(conn, gid, "ColorMix", 2, 0, "Mix", "")
  let mix = last_id(conn)
  insert_node(conn, gid, "ColorBrightness", 3, 0, "Brightness", "")
  let bright = last_id(conn)
  insert_conn(conn, gid, r, 0, rgb, 0)
  insert_conn(conn, gid, g_, 0, rgb, 1)
  insert_conn(conn, gid, b, 0, rgb, 2)
  insert_conn(conn, gid, rgb, 0, mix, 0)
  insert_conn(conn, gid, c2, 0, mix, 1)
  insert_conn(conn, gid, mix, 0, bright, 0)
  // ── Graph 2: String Pipeline ────────────────────────────────
  seed_graph(conn, "String Pipeline")
  let gid2 = last_id(conn)
  insert_node(conn, gid2, "ConstString", 0, 0, "hello", "hello")
  let s1 = last_id(conn)
  insert_node(conn, gid2, "ConstString", 0, 1, " world", " world")
  let s2 = last_id(conn)
  insert_node(conn, gid2, "StringUpper", 1, 0, "Upper", "")
  let up = last_id(conn)
  insert_node(conn, gid2, "StringConcat", 2, 0, "Join", "")
  let cat = last_id(conn)
  insert_node(conn, gid2, "StringLength", 3, 0, "Length", "")
  let len = last_id(conn)
  insert_node(conn, gid2, "DisplayText", 3, 1, "Output", "")
  let dt = last_id(conn)
  insert_conn(conn, gid2, s1, 0, up, 0)
  insert_conn(conn, gid2, up, 0, cat, 0)
  insert_conn(conn, gid2, s2, 0, cat, 1)
  insert_conn(conn, gid2, cat, 0, len, 0)
  insert_conn(conn, gid2, cat, 0, dt, 0)
  // ── Graph 3: Math & Logic ──────────────────────────────────
  seed_graph(conn, "Math & Logic")
  let gid3 = last_id(conn)
  insert_node(conn, gid3, "ConstNumber", 0, 0, "10", "10")
  let a = last_id(conn)
  insert_node(conn, gid3, "ConstNumber", 0, 1, "3", "3")
  let b2 = last_id(conn)
  insert_node(conn, gid3, "MathMultiply", 1, 0, "Multiply", "")
  let mul = last_id(conn)
  insert_node(conn, gid3, "ConstNumber", 0, 2, "25", "25")
  let c25 = last_id(conn)
  insert_node(conn, gid3, "LogicGreaterThan", 2, 0, "30 > 25?", "")
  let gt = last_id(conn)
  insert_node(conn, gid3, "ConstNumber", 1, 1, "5", "5")
  let c5 = last_id(conn)
  insert_node(conn, gid3, "MathSubtract", 2, 1, "Subtract", "")
  let sub = last_id(conn)
  insert_node(conn, gid3, "LogicEquals", 3, 0, "25 = 25?", "")
  let eq = last_id(conn)
  insert_conn(conn, gid3, a, 0, mul, 0)
  insert_conn(conn, gid3, b2, 0, mul, 1)
  insert_conn(conn, gid3, mul, 0, gt, 0)
  insert_conn(conn, gid3, c25, 0, gt, 1)
  insert_conn(conn, gid3, mul, 0, sub, 0)
  insert_conn(conn, gid3, c5, 0, sub, 1)
  insert_conn(conn, gid3, sub, 0, eq, 0)
  insert_conn(conn, gid3, c25, 0, eq, 1)
}

///|
fn seed_graph(
  conn : @sqlite3.Connection,
  name : String,
) -> Unit raise @sqlite3.SqliteError {
  let g = conn.prepare("INSERT INTO graphs (name) VALUES (?)")
  g.bind_string_as_blob(index=1, val=name)
  g.step_once()
  g.finalize()
}

///|
fn last_id(conn : @sqlite3.Connection) -> Int raise @sqlite3.SqliteError {
  let s = conn.prepare("SELECT last_insert_rowid()")
  guard s.step()
  let id : Int = s.column(index=0)
  s.finalize()
  id
}

///|
fn insert_node(
  conn : @sqlite3.Connection,
  graph_id : Int,
  kind : String,
  x : Int,
  y : Int,
  label : String,
  config : String,
) -> Unit raise @sqlite3.SqliteError {
  let s = conn.prepare(
    "INSERT INTO nodes (graph_id, kind, x, y, label, config) VALUES (?, ?, ?, ?, ?, ?)",
  )
  s.bind(index=1, val=graph_id)
  s.bind_string_as_blob(index=2, val=kind)
  s.bind(index=3, val=x)
  s.bind(index=4, val=y)
  s.bind_string_as_blob(index=5, val=label)
  s.bind_string_as_blob(index=6, val=config)
  s.step_once()
  s.finalize()
}

///|
fn insert_conn(
  conn : @sqlite3.Connection,
  graph_id : Int,
  from_node : Int,
  from_port : Int,
  to_node : Int,
  to_port : Int,
) -> Unit raise @sqlite3.SqliteError {
  let s = conn.prepare(
    "INSERT INTO connections (graph_id, from_node_id, from_port, to_node_id, to_port) VALUES (?, ?, ?, ?, ?)",
  )
  s.bind(index=1, val=graph_id)
  s.bind(index=2, val=from_node)
  s.bind(index=3, val=from_port)
  s.bind(index=4, val=to_node)
  s.bind(index=5, val=to_port)
  s.step_once()
  s.finalize()
}

// ── Reads ─────────────────────────────────────────────────────────

///|
fn read_node(stmt : @sqlite3.Statement) -> @shared.Node {
  let id : Int = stmt.column(index=0)
  let kind = @shared.kind_from_string(stmt.column_blob_as_string(index=1))
  let x : Int = stmt.column(index=2)
  let y : Int = stmt.column(index=3)
  let label : String = stmt.column_blob_as_string(index=4)
  let config : String = stmt.column_blob_as_string(index=5)
  { id, kind, x, y, label, config }
}

///|
fn read_connection(stmt : @sqlite3.Statement) -> @shared.Connection {
  let id : Int = stmt.column(index=0)
  let from_node_id : Int = stmt.column(index=1)
  let from_port : Int = stmt.column(index=2)
  let to_node_id : Int = stmt.column(index=3)
  let to_port : Int = stmt.column(index=4)
  { id, from_node_id, from_port, to_node_id, to_port }
}

///|
fn get_all_graphs(
  conn : @sqlite3.Connection,
) -> Array[@shared.SavedGraph] raise @sqlite3.SqliteError {
  let s = conn.prepare("SELECT id, name FROM graphs ORDER BY id")
  let result : Array[@shared.SavedGraph] = []
  while s.step() {
    let id : Int = s.column(index=0)
    let name : String = s.column_blob_as_string(index=1)
    result.push({ id, name })
  }
  s.finalize()
  result
}

///|
fn get_graph(
  conn : @sqlite3.Connection,
  graph_id : Int,
) -> @shared.Graph raise @sqlite3.SqliteError {
  let s1 = conn.prepare(
    "SELECT id, kind, x, y, label, config FROM nodes WHERE graph_id = ? ORDER BY id",
  )
  s1.bind(index=1, val=graph_id)
  let nodes : Array[@shared.Node] = []
  while s1.step() {
    nodes.push(read_node(s1))
  }
  s1.finalize()
  let s2 = conn.prepare(
    "SELECT id, from_node_id, from_port, to_node_id, to_port FROM connections WHERE graph_id = ? ORDER BY id",
  )
  s2.bind(index=1, val=graph_id)
  let connections : Array[@shared.Connection] = []
  while s2.step() {
    connections.push(read_connection(s2))
  }
  s2.finalize()
  { nodes, connections }
}

///|
fn create_graph(
  conn : @sqlite3.Connection,
  name : String,
) -> @shared.SavedGraph raise @sqlite3.SqliteError {
  let s = conn.prepare("INSERT INTO graphs (name) VALUES (?)")
  s.bind_string_as_blob(index=1, val=name)
  s.step_once()
  s.finalize()
  let id = last_id(conn)
  { id, name }
}

///|
fn delete_graph(
  conn : @sqlite3.Connection,
  id : Int,
) -> Unit raise @sqlite3.SqliteError {
  // Cascade: delete connections, nodes, then graph
  let s1 = conn.prepare(
    "DELETE FROM connections WHERE graph_id = ?",
  )
  s1.bind(index=1, val=id)
  s1.step_once()
  s1.finalize()
  let s2 = conn.prepare("DELETE FROM nodes WHERE graph_id = ?")
  s2.bind(index=1, val=id)
  s2.step_once()
  s2.finalize()
  let s3 = conn.prepare("DELETE FROM graphs WHERE id = ?")
  s3.bind(index=1, val=id)
  s3.step_once()
  s3.finalize()
}

///|
fn create_node_in_graph(
  conn : @sqlite3.Connection,
  graph_id : Int,
  kind : String,
  label : String,
  config : String,
) -> @shared.Node raise @sqlite3.SqliteError {
  insert_node(conn, graph_id, kind, 0, 0, label, config)
  let id = last_id(conn)
  {
    id,
    kind: @shared.kind_from_string(kind),
    x: 0,
    y: 0,
    label,
    config,
  }
}

///|
fn update_node_config(
  conn : @sqlite3.Connection,
  node_id : Int,
  config : String,
  label : String,
) -> Unit raise @sqlite3.SqliteError {
  let s = conn.prepare(
    "UPDATE nodes SET config = ?, label = ? WHERE id = ?",
  )
  s.bind_string_as_blob(index=1, val=config)
  s.bind_string_as_blob(index=2, val=label)
  s.bind(index=3, val=node_id)
  s.step_once()
  s.finalize()
}

///|
fn delete_node(
  conn : @sqlite3.Connection,
  node_id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let s1 = conn.prepare(
    "DELETE FROM connections WHERE from_node_id = ? OR to_node_id = ?",
  )
  s1.bind(index=1, val=node_id)
  s1.bind(index=2, val=node_id)
  s1.step_once()
  s1.finalize()
  let s2 = conn.prepare("DELETE FROM nodes WHERE id = ?")
  s2.bind(index=1, val=node_id)
  s2.step_once()
  s2.finalize()
}

///|
fn create_connection(
  conn : @sqlite3.Connection,
  graph_id : Int,
  from_node_id : Int,
  from_port : Int,
  to_node_id : Int,
  to_port : Int,
) -> @shared.Connection raise @sqlite3.SqliteError {
  let s = conn.prepare(
    "INSERT INTO connections (graph_id, from_node_id, from_port, to_node_id, to_port) VALUES (?, ?, ?, ?, ?)",
  )
  s.bind(index=1, val=graph_id)
  s.bind(index=2, val=from_node_id)
  s.bind(index=3, val=from_port)
  s.bind(index=4, val=to_node_id)
  s.bind(index=5, val=to_port)
  s.step_once()
  s.finalize()
  let id = last_id(conn)
  { id, from_node_id, from_port, to_node_id, to_port }
}

///|
fn delete_connection(
  conn : @sqlite3.Connection,
  conn_id : Int,
) -> Unit raise @sqlite3.SqliteError {
  let s = conn.prepare("DELETE FROM connections WHERE id = ?")
  s.bind(index=1, val=conn_id)
  s.step_once()
  s.finalize()
}
