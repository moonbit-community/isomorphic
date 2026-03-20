///|
/// Base route for listing and creating graphs.
pub let api_graphs : String = "/api/graphs"

///|
/// Route for a single graph by id.
pub fn api_graph(id : Int) -> String {
  "/api/graphs/\{id}"
}

///|
/// Route for listing and creating nodes within a graph.
pub fn api_graph_nodes(id : Int) -> String {
  "/api/graphs/\{id}/nodes"
}

///|
/// Route for a single node within a graph.
pub fn api_graph_node(graph_id : Int, node_id : Int) -> String {
  "/api/graphs/\{graph_id}/nodes/\{node_id}"
}

///|
/// Route for listing and creating connections within a graph.
pub fn api_graph_connections(id : Int) -> String {
  "/api/graphs/\{id}/connections"
}

///|
/// Route for a single connection within a graph.
pub fn api_graph_connection(graph_id : Int, conn_id : Int) -> String {
  "/api/graphs/\{graph_id}/connections/\{conn_id}"
}

///|
/// Route for triggering evaluation of a graph.
pub fn api_graph_evaluate(id : Int) -> String {
  "/api/graphs/\{id}/evaluate"
}
