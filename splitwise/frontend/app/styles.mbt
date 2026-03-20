// ── Style Constants ──────────────────────────────────────────────────

///|
let container_style : Array[String] = [
  "max-width: 520px", "margin: 0 auto", "padding: 24px 16px", "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
]

///|
let header_style : Array[String] = [
  "text-align: center", "margin-bottom: 24px", "padding-top: 12px",
]

///|
let header_title_style : Array[String] = [
  "color: white", "font-size: 26px", "font-weight: 800", "margin-bottom: 4px", "letter-spacing: -0.5px",
]

///|
let header_subtitle_style : Array[String] = [
  "color: rgba(255,255,255,0.75)", "font-size: 13px",
]

///|
let total_banner_style : Array[String] = [
  "background: rgba(255,255,255,0.15)", "border-radius: 12px", "padding: 16px 20px",
  "margin-bottom: 16px", "text-align: center", "backdrop-filter: blur(10px)",
]

///|
let total_label_style : Array[String] = [
  "color: rgba(255,255,255,0.7)", "font-size: 12px", "margin-bottom: 4px", "text-transform: uppercase",
  "letter-spacing: 1px",
]

///|
let total_amount_style : Array[String] = [
  "color: white", "font-size: 32px", "font-weight: 800",
]

///|
let card_style : Array[String] = [
  "background: white", "border-radius: 14px", "padding: 18px 20px", "margin-bottom: 14px",
  "box-shadow: 0 1px 8px rgba(0,0,0,0.06)",
]

///|
let card_title_style : Array[String] = [
  "font-size: 13px", "font-weight: 700", "color: #999", "margin-bottom: 14px", "text-transform: uppercase",
  "letter-spacing: 0.5px",
]

///|
let people_form_style : Array[String] = [
  "display: flex", "gap: 8px", "margin-bottom: 12px",
]

///|
let text_input_style : Array[String] = [
  "flex: 1", "padding: 10px 14px", "border: 2px solid #eee", "border-radius: 10px",
  "font-size: 14px", "outline: none",
]

///|
let add_btn_style : Array[String] = [
  "padding: 10px 20px", "background: #667eea", "color: white", "border: none", "border-radius: 10px",
  "cursor: pointer", "font-size: 14px", "font-weight: 600",
]

///|
let people_chips_style : Array[String] = [
  "display: flex", "flex-wrap: wrap", "gap: 8px",
]

///|
let person_chip_style : Array[String] = [
  "display: inline-flex", "align-items: center", "gap: 8px", "padding: 6px 14px 6px 6px",
  "background: #f8f8ff", "border-radius: 24px", "font-size: 13px", "color: #333",
]

///|
let person_name_style : Array[String] = ["font-weight: 500"]

///|
let empty_people_style : Array[String] = [
  "color: #aaa", "font-size: 13px", "text-align: center", "padding: 12px 0",
]

///|
let expense_form_style : Array[String] = [
  "display: flex", "flex-direction: column", "gap: 10px",
]

///|
let input_style : Array[String] = [
  "padding: 10px 14px", "border: 2px solid #eee", "border-radius: 10px", "font-size: 14px",
  "outline: none",
]

///|
let amount_row_style : Array[String] = ["display: flex", "gap: 10px"]

///|
let amount_input_style : Array[String] = [
  "flex: 1", "padding: 10px 14px", "border: 2px solid #eee", "border-radius: 10px",
  "font-size: 14px", "outline: none",
]

///|
let select_style : Array[String] = [
  "flex: 1", "padding: 10px 14px", "border: 2px solid #eee", "border-radius: 10px",
  "font-size: 14px", "outline: none", "background: white", "color: #333",
]

///|
let split_hint_style : Array[String] = [
  "font-size: 12px", "color: #999", "padding: 0 2px",
]

///|
let submit_btn_style : Array[String] = [
  "padding: 12px", "background: linear-gradient(135deg, #667eea, #764ba2)", "color: white",
  "border: none", "border-radius: 10px", "cursor: pointer", "font-size: 15px", "font-weight: 600",
  "margin-top: 2px",
]

///|
let expense_row_style : Array[String] = [
  "display: flex", "align-items: center", "gap: 12px", "padding: 10px 0", "border-bottom: 1px solid #f5f5f5",
]

///|
let expense_info_style : Array[String] = ["flex: 1", "min-width: 0"]

///|
let expense_desc_style : Array[String] = [
  "font-weight: 600", "font-size: 14px", "margin-bottom: 1px",
]

///|
let expense_sub_style : Array[String] = ["font-size: 12px", "color: #999"]

///|
let expense_amount_style : Array[String] = [
  "font-weight: 700", "font-size: 15px", "color: #333", "white-space: nowrap",
]

///|
let delete_btn_style : Array[String] = [
  "width: 28px", "height: 28px", "background: #fee", "color: #e53935", "border: none",
  "border-radius: 8px", "cursor: pointer", "font-size: 13px", "font-weight: 700",
  "flex-shrink: 0", "display: flex", "align-items: center", "justify-content: center",
]

///|
let settlement_row_style : Array[String] = [
  "display: flex", "align-items: center", "gap: 10px", "padding: 12px 0", "border-bottom: 1px solid #f5f5f5",
]

///|
let settlement_person_style : Array[String] = [
  "display: flex", "align-items: center", "gap: 6px", "flex: 1",
]

///|
let settlement_name_style : Array[String] = [
  "font-weight: 600", "font-size: 14px",
]

///|
let settlement_arrow_style : Array[String] = [
  "color: #ccc", "font-size: 18px", "padding: 0 4px",
]

///|
let settlement_amount_style : Array[String] = [
  "font-weight: 700", "font-size: 15px", "color: #43a047", "background: #e8f5e9",
  "padding: 4px 10px", "border-radius: 8px",
]

///|
let settled_up_style : Array[String] = [
  "text-align: center", "color: #43a047", "padding: 20px 0", "font-weight: 600",
  "font-size: 15px",
]
