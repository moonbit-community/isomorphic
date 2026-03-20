///|
pub let api_base : String = "http://localhost:4009"

///|
pub let api_graphs : String = "http://localhost:4009/api/graphs"

///|
pub fn api_graph(id : Int) -> String {
  "\{api_base}/api/graphs/\{id}"
}

///|
pub fn api_graph_nodes(id : Int) -> String {
  "\{api_base}/api/graphs/\{id}/nodes"
}

///|
pub fn api_graph_node(graph_id : Int, node_id : Int) -> String {
  "\{api_base}/api/graphs/\{graph_id}/nodes/\{node_id}"
}

///|
pub fn api_graph_connections(id : Int) -> String {
  "\{api_base}/api/graphs/\{id}/connections"
}

///|
pub fn api_graph_connection(graph_id : Int, conn_id : Int) -> String {
  "\{api_base}/api/graphs/\{graph_id}/connections/\{conn_id}"
}

///|
pub fn api_graph_evaluate(id : Int) -> String {
  "\{api_base}/api/graphs/\{id}/evaluate"
}
