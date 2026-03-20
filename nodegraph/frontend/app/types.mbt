///|
pub(all) enum Page {
  GraphList
  Editor
} derive(Debug)

///|
pub(all) struct Model {
  page : Page
  graphs : Array[@shared.SavedGraph]
  current_graph_id : Int
  nodes : Array[@shared.Node]
  connections : Array[@shared.Connection]
  eval_result : @shared.EvalResult?
  auto_eval : Bool
  // Connection creation mode
  connecting_from_node : Int
  connecting_from_port : Int
  // Node config editing
  editing_node : Int
  config_value : String
  // Forms
  new_graph_name : String
  show_palette : Bool
  palette_cat : String
  // UI
  loading : Bool
  error : String
} derive(Debug)

///|
pub(all) enum Msg {
  Init
  // Navigation
  GoToList
  GoToEditor(Int)
  // Graph list
  GotGraphs(Result[Array[@shared.SavedGraph], String])
  SetGraphName(String)
  CreateGraph
  GraphCreated(Result[@shared.SavedGraph, String])
  DeleteGraph(Int)
  GraphDeleted(Result[Int, String])
  // Graph loading
  GotGraph(Result[@shared.Graph, String])
  // Node ops
  TogglePalette
  SetPaletteCat(String)
  AddNode(@shared.NodeKind)
  NodeAdded(Result[@shared.Node, String])
  DeleteNode(Int)
  NodeDeleted(Result[Int, String])
  // Config editing
  StartEditConfig(Int, String)
  SetConfigValue(String)
  SaveConfig
  CancelEditConfig
  ConfigSaved(Result[Unit, String])
  // Connection
  StartConnect(Int, Int)
  CompleteConnect(Int, Int)
  CancelConnect
  ConnectionAdded(Result[@shared.Connection, String])
  DeleteConnection(Int)
  ConnectionDeleted(Result[Int, String])
  // Evaluation
  Evaluate
  GotEvalResult(Result[@shared.EvalResult, String])
  ToggleAutoEval
  // Error
  ClearError
} derive(Debug)
