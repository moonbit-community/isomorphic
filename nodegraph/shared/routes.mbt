///|
pub let api_graphs : String = "/api/graphs"

///|
pub fn api_graph(id : Int) -> String {
  "/api/graphs/\{id}"
}

///|
pub fn api_graph_nodes(id : Int) -> String {
  "/api/graphs/\{id}/nodes"
}

///|
pub fn api_graph_node(graph_id : Int, node_id : Int) -> String {
  "/api/graphs/\{graph_id}/nodes/\{node_id}"
}

///|
pub fn api_graph_connections(id : Int) -> String {
  "/api/graphs/\{id}/connections"
}

///|
pub fn api_graph_connection(graph_id : Int, conn_id : Int) -> String {
  "/api/graphs/\{graph_id}/connections/\{conn_id}"
}

///|
pub fn api_graph_evaluate(id : Int) -> String {
  "/api/graphs/\{id}/evaluate"
}
