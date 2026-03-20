// ── Design tokens ────────────────────────────────────────────────────

///|
let primary : String = "#6366f1"

///|
let _primary_hover : String = "#4f46e5"

///|
let primary_light : String = "#e0e7ff"

///|
let surface : String = "#ffffff"

///|
let surface_alt : String = "#f8fafc"

///|
let border : String = "#e2e8f0"

///|
let text_primary : String = "#1e293b"

///|
let text_secondary : String = "#64748b"

///|
let text_muted : String = "#94a3b8"

///|
let success : String = "#22c55e"

///|
let warning : String = "#f59e0b"

///|
let danger : String = "#ef4444"

///|
let radius : String = "8px"

///|
let radius_sm : String = "4px"

///|
let radius_full : String = "9999px"

// ── Layout styles ────────────────────────────────────────────────────

///|
let layout_style : Array[String] = ["display: flex", "min-height: 100vh"]

///|
let sidebar_style : Array[String] = [
  "width: 240px", "background: #1e293b", "color: white", "padding: 0", "position: fixed",
  "top: 0", "left: 0", "bottom: 0", "overflow-y: auto",
]

///|
let content_style : Array[String] = [
  "margin-left: 240px", "flex: 1", "padding: 32px", "max-width: 960px",
]

///|
let sidebar_header_style : Array[String] = [
  "padding: 20px 16px", "font-size: 18px", "font-weight: 700", "border-bottom: 1px solid #334155",
  "color: #e0e7ff",
]

///|
let sidebar_section_style : Array[String] = [
  "padding: 12px 16px 4px", "font-size: 11px", "font-weight: 600", "text-transform: uppercase",
  "letter-spacing: 1px", "color: #94a3b8",
]

// ── Component showcase styles ────────────────────────────────────────

///|
let card_style : Array[String] = [
  "background: white", "border-radius: 12px", "padding: 24px", "box-shadow: 0 1px 3px rgba(0,0,0,0.08)",
  "margin-bottom: 24px", "border: 1px solid #e2e8f0",
]

///|
let component_title_style : Array[String] = [
  "font-size: 24px", "font-weight: 700", "color: #1e293b", "margin-bottom: 8px",
]

///|
let component_desc_style : Array[String] = [
  "font-size: 14px", "color: #64748b", "margin-bottom: 20px", "line-height: 1.5",
]

///|
let demo_section_style : Array[String] = [
  "padding: 20px", "border: 1px solid #e2e8f0", "border-radius: 8px", "background: #f8fafc",
  "margin-bottom: 16px",
]

///|
let label_style : Array[String] = [
  "display: block", "font-size: 13px", "font-weight: 500", "color: #64748b", "margin-bottom: 6px",
]

///|
let input_style : Array[String] = [
  "width: 100%", "padding: 8px 12px", "border: 1px solid #e2e8f0", "border-radius: 8px",
  "font-size: 14px", "outline: none", "color: #1e293b", "background: white", "box-sizing: border-box",
]

///|
let btn_style : Array[String] = [
  "padding: 8px 16px", "border: none", "border-radius: 8px", "cursor: pointer", "font-size: 14px",
  "font-weight: 500", "color: white", "background: #6366f1",
]

///|
let btn_outline_style : Array[String] = [
  "padding: 8px 16px", "border: 1px solid #e2e8f0", "border-radius: 8px", "cursor: pointer",
  "font-size: 14px", "font-weight: 500", "color: #64748b", "background: white",
]

///|
let btn_danger_style : Array[String] = [
  "padding: 4px 8px", "border: none", "border-radius: 4px", "cursor: pointer", "font-size: 12px",
  "color: white", "background: #ef4444",
]

///|
let btn_sm_style : Array[String] = [
  "padding: 4px 10px", "border: none", "border-radius: 6px", "cursor: pointer", "font-size: 12px",
  "font-weight: 500", "color: white", "background: #6366f1",
]
