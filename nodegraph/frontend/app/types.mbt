///|
/// Navigation pages for the node graph editor.
pub(all) enum Page {
  GraphList
  Editor
} derive(Debug)

///|
/// Frontend state for the node graph editor, including graph data, drag/wire state, and UI controls.
pub(all) struct Model {
  page : Page
  graphs : Array[@shared.SavedGraph]
  current_graph_id : Int
  nodes : Array[@shared.Node]
  connections : Array[@shared.Connection]
  eval_result : @shared.EvalResult?
  auto_eval : Bool
  // Node dragging (all coords in client/viewport space)
  dragging_node : Int
  drag_offset_x : Int
  drag_offset_y : Int
  // Connection wire dragging
  connecting_from_node : Int
  connecting_from_port : Int
  wire_mouse_x : Int
  wire_mouse_y : Int
  // Client coords at wire start for delta computation
  wire_start_cx : Int
  wire_start_cy : Int
  wire_origin_x : Int
  wire_origin_y : Int
  // Node config editing
  editing_node : Int
  config_value : String
  // Forms
  new_graph_name : String
  show_palette : Bool
  palette_cat : String
  // UI
  first_load : Bool
  loading : Bool
  error : String
} derive(Debug)

///|
/// Messages that drive node graph editor state transitions, covering navigation, node/connection CRUD, dragging, and evaluation.
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
  // Node dragging
  StartDrag(Int, Int, Int) // node_id, mouse_x, mouse_y
  Drag(Int, Int) // mouse_x, mouse_y
  EndDrag
  NodePositionSaved(Result[Unit, String])
  // Connection wire dragging
  StartConnect(Int, Int) // node_id, port_idx
  WireMove(Int, Int) // mouse_x, mouse_y
  CompleteConnect(Int, Int) // node_id, port_idx
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
