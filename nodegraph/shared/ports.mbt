///|
/// Return the input port definitions for a given node kind.
///
/// Each entry in the returned array describes one input port: its display name
/// and its expected `PortType`. The array index is the port index used in
/// `Connection.to_port`. Constant nodes return an empty array (they are source
/// nodes with no inputs). The match is exhaustive over `NodeKind`, so adding a
/// new variant forces this function to be updated at compile time.
pub fn input_ports(kind : NodeKind) -> Array[PortDef] {
  match kind {
    MathAdd =>
      [{ name: "A", port_type: TNumber }, { name: "B", port_type: TNumber }]
    MathSubtract =>
      [{ name: "A", port_type: TNumber }, { name: "B", port_type: TNumber }]
    MathMultiply =>
      [{ name: "A", port_type: TNumber }, { name: "B", port_type: TNumber }]
    MathDivide =>
      [{ name: "A", port_type: TNumber }, { name: "B", port_type: TNumber }]
    MathAbs => [{ name: "Value", port_type: TNumber }]
    StringConcat =>
      [{ name: "A", port_type: TString }, { name: "B", port_type: TString }]
    StringLength => [{ name: "Text", port_type: TString }]
    StringUpper => [{ name: "Text", port_type: TString }]
    StringLower => [{ name: "Text", port_type: TString }]
    LogicAnd =>
      [{ name: "A", port_type: TBool }, { name: "B", port_type: TBool }]
    LogicOr =>
      [{ name: "A", port_type: TBool }, { name: "B", port_type: TBool }]
    LogicNot => [{ name: "Value", port_type: TBool }]
    LogicGreaterThan =>
      [{ name: "A", port_type: TNumber }, { name: "B", port_type: TNumber }]
    LogicEquals =>
      [{ name: "A", port_type: TNumber }, { name: "B", port_type: TNumber }]
    ColorRGB =>
      [
        { name: "R", port_type: TNumber },
        { name: "G", port_type: TNumber },
        { name: "B", port_type: TNumber },
      ]
    ColorMix =>
      [{ name: "A", port_type: TColor }, { name: "B", port_type: TColor }]
    ColorBrightness => [{ name: "Color", port_type: TColor }]
    ConstNumber | ConstString | ConstBool | ConstColor => []
    DisplayNumber => [{ name: "Value", port_type: TNumber }]
    DisplayText => [{ name: "Text", port_type: TString }]
  }
}

///|
/// Return the output port definitions for a given node kind.
///
/// Each entry describes one output port: its display name and `PortType`. The
/// array index is the port index used in `Connection.from_port`. Display/sink
/// nodes return an empty array (they consume values but produce none). Like
/// `input_ports`, the match is exhaustive over `NodeKind`.
pub fn output_ports(kind : NodeKind) -> Array[PortDef] {
  match kind {
    MathAdd => [{ name: "Sum", port_type: TNumber }]
    MathSubtract => [{ name: "Diff", port_type: TNumber }]
    MathMultiply => [{ name: "Product", port_type: TNumber }]
    MathDivide => [{ name: "Quotient", port_type: TNumber }]
    MathAbs => [{ name: "Result", port_type: TNumber }]
    StringConcat => [{ name: "Result", port_type: TString }]
    StringLength => [{ name: "Length", port_type: TNumber }]
    StringUpper | StringLower => [{ name: "Result", port_type: TString }]
    LogicAnd | LogicOr => [{ name: "Result", port_type: TBool }]
    LogicNot => [{ name: "Result", port_type: TBool }]
    LogicGreaterThan | LogicEquals => [{ name: "Result", port_type: TBool }]
    ColorRGB => [{ name: "Color", port_type: TColor }]
    ColorMix => [{ name: "Result", port_type: TColor }]
    ColorBrightness => [{ name: "Brightness", port_type: TNumber }]
    ConstNumber => [{ name: "Value", port_type: TNumber }]
    ConstString => [{ name: "Value", port_type: TString }]
    ConstBool => [{ name: "Value", port_type: TBool }]
    ConstColor => [{ name: "Value", port_type: TColor }]
    DisplayNumber | DisplayText => []
  }
}

///|
/// Human-readable display label for a node kind.
pub fn node_label(kind : NodeKind) -> String {
  match kind {
    MathAdd => "Add"
    MathSubtract => "Subtract"
    MathMultiply => "Multiply"
    MathDivide => "Divide"
    MathAbs => "Abs"
    StringConcat => "Concat"
    StringLength => "Length"
    StringUpper => "Upper"
    StringLower => "Lower"
    LogicAnd => "AND"
    LogicOr => "OR"
    LogicNot => "NOT"
    LogicGreaterThan => "A > B"
    LogicEquals => "A = B"
    ColorRGB => "RGB"
    ColorMix => "Mix"
    ColorBrightness => "Brightness"
    ConstNumber => "Number"
    ConstString => "String"
    ConstBool => "Bool"
    ConstColor => "Color"
    DisplayNumber => "Display #"
    DisplayText => "Display T"
  }
}

///|
/// Category name for grouping node kinds in the UI palette.
pub fn node_category(kind : NodeKind) -> String {
  match kind {
    MathAdd | MathSubtract | MathMultiply | MathDivide | MathAbs => "math"
    StringConcat | StringLength | StringUpper | StringLower => "string"
    LogicAnd | LogicOr | LogicNot | LogicGreaterThan | LogicEquals => "logic"
    ColorRGB | ColorMix | ColorBrightness => "color"
    ConstNumber | ConstString | ConstBool | ConstColor => "constant"
    DisplayNumber | DisplayText => "display"
  }
}

///|
/// Short label for a port type (e.g. "Num", "Str").
pub fn port_type_label(pt : PortType) -> String {
  match pt {
    TNumber => "Num"
    TString => "Str"
    TBool => "Bool"
    TColor => "Color"
  }
}

///|
/// CSS hex color associated with a port type for rendering.
pub fn port_type_color(pt : PortType) -> String {
  match pt {
    TNumber => "#4CAF50"
    TString => "#FF9800"
    TBool => "#2196F3"
    TColor => "#E91E63"
  }
}

///|
/// Serialize a `NodeKind` enum variant to its canonical string identifier
/// (e.g. `MathAdd` -> `"MathAdd"`). Used for database storage and JSON
/// serialization. The mapping is the inverse of `kind_from_string`.
pub fn kind_to_string(kind : NodeKind) -> String {
  match kind {
    MathAdd => "MathAdd"
    MathSubtract => "MathSubtract"
    MathMultiply => "MathMultiply"
    MathDivide => "MathDivide"
    MathAbs => "MathAbs"
    StringConcat => "StringConcat"
    StringLength => "StringLength"
    StringUpper => "StringUpper"
    StringLower => "StringLower"
    LogicAnd => "LogicAnd"
    LogicOr => "LogicOr"
    LogicNot => "LogicNot"
    LogicGreaterThan => "LogicGreaterThan"
    LogicEquals => "LogicEquals"
    ColorRGB => "ColorRGB"
    ColorMix => "ColorMix"
    ColorBrightness => "ColorBrightness"
    ConstNumber => "ConstNumber"
    ConstString => "ConstString"
    ConstBool => "ConstBool"
    ConstColor => "ConstColor"
    DisplayNumber => "DisplayNumber"
    DisplayText => "DisplayText"
  }
}

///|
/// Deserialize a `NodeKind` from its canonical string identifier.
/// Returns `ConstNumber` as a safe fallback for any unrecognized string,
/// ensuring that corrupted or legacy data does not crash the application.
/// This is the inverse of `kind_to_string`.
pub fn kind_from_string(s : String) -> NodeKind {
  match s {
    "MathAdd" => MathAdd
    "MathSubtract" => MathSubtract
    "MathMultiply" => MathMultiply
    "MathDivide" => MathDivide
    "MathAbs" => MathAbs
    "StringConcat" => StringConcat
    "StringLength" => StringLength
    "StringUpper" => StringUpper
    "StringLower" => StringLower
    "LogicAnd" => LogicAnd
    "LogicOr" => LogicOr
    "LogicNot" => LogicNot
    "LogicGreaterThan" => LogicGreaterThan
    "LogicEquals" => LogicEquals
    "ColorRGB" => ColorRGB
    "ColorMix" => ColorMix
    "ColorBrightness" => ColorBrightness
    "ConstNumber" => ConstNumber
    "ConstString" => ConstString
    "ConstBool" => ConstBool
    "ConstColor" => ConstColor
    "DisplayNumber" => DisplayNumber
    "DisplayText" => DisplayText
    _ => ConstNumber
  }
}

///|
/// All available node kinds for iteration and palette display.
pub let all_kinds : Array[NodeKind] = [
  MathAdd,
  MathSubtract,
  MathMultiply,
  MathDivide,
  MathAbs,
  StringConcat,
  StringLength,
  StringUpper,
  StringLower,
  LogicAnd,
  LogicOr,
  LogicNot,
  LogicGreaterThan,
  LogicEquals,
  ColorRGB,
  ColorMix,
  ColorBrightness,
  ConstNumber,
  ConstString,
  ConstBool,
  ConstColor,
  DisplayNumber,
  DisplayText,
]
