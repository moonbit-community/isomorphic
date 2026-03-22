///|
/// Navigation pages for the node graph editor.
pub(all) enum Page {
  GraphList
  Editor
} derive(Debug)

///|
/// Frontend state for the node graph editor, including graph data, drag/wire state, and UI controls.
pub(all) struct Model {
  /// The active navigation page (graph list or editor).
  page : Page
  /// All saved graphs available in the list view.
  graphs : Array[@shared.SavedGraph]
  /// ID of the graph currently open in the editor, or 0 if none.
  current_graph_id : Int
  /// Nodes in the currently loaded graph.
  nodes : Array[@shared.Node]
  /// Connections (edges) between node ports in the current graph.
  connections : Array[@shared.Connection]
  /// Result of the last graph evaluation, if any.
  eval_result : @shared.EvalResult?
  /// Whether the graph auto-evaluates after each change.
  auto_eval : Bool
  /// ID of the node currently being dragged, or 0 if none.
  dragging_node : Int
  /// Horizontal offset from mouse to node origin during drag.
  drag_offset_x : Int
  /// Vertical offset from mouse to node origin during drag.
  drag_offset_y : Int
  /// Source node ID for the connection wire being drawn.
  connecting_from_node : Int
  /// Source port index for the connection wire being drawn.
  connecting_from_port : Int
  /// Current mouse X position while dragging a wire.
  wire_mouse_x : Int
  /// Current mouse Y position while dragging a wire.
  wire_mouse_y : Int
  /// Client X coordinate when the wire drag started.
  wire_start_cx : Int
  /// Client Y coordinate when the wire drag started.
  wire_start_cy : Int
  /// X origin of the wire's starting port in graph coordinates.
  wire_origin_x : Int
  /// Y origin of the wire's starting port in graph coordinates.
  wire_origin_y : Int
  /// ID of the node whose config is being edited, or 0 if none.
  editing_node : Int
  /// Text input for the node config value being edited.
  config_value : String
  /// Name input for creating a new graph.
  new_graph_name : String
  /// Whether the add-node palette is visible.
  show_palette : Bool
  /// Currently selected category in the node palette.
  palette_cat : String
  /// Whether this is the first load (suppresses certain transitions).
  first_load : Bool
  /// Whether a network request is in progress.
  loading : Bool
  /// Error message to display, or empty if none.
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
