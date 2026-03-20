///|
/// Port types — the type system for connections.
#warnings("-unnecessary_annotation")
pub(all) enum PortType {
  TNumber
  TString
  TBool
  TColor
} derive(ToJson, FromJson, Debug, Eq)

///|
/// Node kinds — exhaustive enum of all node behaviors.
/// Adding a new kind forces handling in ports.mbt and graph.mbt (compiler-enforced).
#warnings("-unnecessary_annotation")
pub(all) enum NodeKind {
  // Math
  MathAdd
  MathSubtract
  MathMultiply
  MathDivide
  MathAbs
  // String
  StringConcat
  StringLength
  StringUpper
  StringLower
  // Logic
  LogicAnd
  LogicOr
  LogicNot
  LogicGreaterThan
  LogicEquals
  // Color
  ColorRGB
  ColorMix
  ColorBrightness
  // Constants (sources — no inputs)
  ConstNumber
  ConstString
  ConstBool
  ConstColor
  // Display (sinks — no outputs)
  DisplayNumber
  DisplayText
} derive(ToJson, FromJson, Debug, Eq)

///|
/// Definition of a single port on a node (name and type).
#warnings("-unnecessary_annotation")
pub(all) struct PortDef {
  name : String
  port_type : PortType
} derive(ToJson, FromJson, Debug, Eq)

///|
/// A node in the graph with position, kind, label, and configuration.
#warnings("-unnecessary_annotation")
pub(all) struct Node {
  id : Int
  kind : NodeKind
  x : Int
  y : Int
  label : String
  config : String
} derive(ToJson, FromJson, Debug, Eq)

///|
/// A directed edge connecting an output port of one node to an input port of another.
#warnings("-unnecessary_annotation")
pub(all) struct Connection {
  id : Int
  from_node_id : Int
  from_port : Int
  to_node_id : Int
  to_port : Int
} derive(ToJson, FromJson, Debug, Eq)

///|
/// A complete graph consisting of nodes and connections between them.
#warnings("-unnecessary_annotation")
pub(all) struct Graph {
  nodes : Array[Node]
  connections : Array[Connection]
} derive(ToJson, FromJson, Debug)

///|
/// Runtime value flowing through ports.
#warnings("-unnecessary_annotation")
pub(all) enum Value {
  VNumber(Int)
  VString(String)
  VBool(Bool)
  VColor(String)
  VError(String)
  VNone
} derive(ToJson, FromJson, Debug, Eq)

///|
/// Result of evaluating the graph: per-node outputs, errors, evaluation order, and cycle flag.
#warnings("-unnecessary_annotation")
pub(all) struct EvalResult {
  node_outputs : Array[(Int, Array[Value])]
  errors : Array[(Int, String)]
  eval_order : Array[Int]
  has_cycle : Bool
} derive(ToJson, FromJson, Debug)

///|
/// Metadata for a persisted graph (id and name, without full contents).
#warnings("-unnecessary_annotation")
pub(all) struct SavedGraph {
  id : Int
  name : String
} derive(ToJson, FromJson, Debug)
