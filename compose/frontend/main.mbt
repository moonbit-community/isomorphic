///|
#warnings("-alert_unstable")
fn main {
  // Pattern 1: Two independent cells — separate TEA loops, no shared state
  let (cell_a, cell_b) = @independent.make()

  // Pattern 2: Parent-child — parent holds dispatch handles to children
  let parent_child = @parent_child.make()

  // Pattern 3: Nested model — single cell, parent model embeds child models
  let nested = @nested.make()

  // Pattern 5: Stress test — 6-level deep nesting, ~78 state values, music studio dashboard
  let studio = @stress_test.make()

  // Pattern 4: Reusable complex component — two calendars as date range picker
  let date_range = @date_range.make()

  // Layout: a static cell that composes all demos
  let layout = @rabbita.static_cell(
    @html.div(
      style=[
        "max-width: 800px", "margin: 0 auto", "padding: 24px", "font-family: system-ui, sans-serif",
      ],
      [
        @html.h1("TEA Composition Patterns"),
        // --- Pattern 1 ---
        @html.h2("1. Independent Cells"),
        @html.p(
          "Two separate Cells, each with its own Model/Msg/update/view loop. They share no state.",
        ),
        @html.div(style=["display: flex", "gap: 16px", "margin-bottom: 32px"], [
          cell_a.view(),
          cell_b.view(),
        ]),
        // --- Pattern 2 ---
        @html.h2("2. Parent-Child with Dispatch"),
        @html.p(
          "Parent holds Dispatch handles to children. Clicking \"Reset Both\" sends Reset to both child cells.",
        ),
        @html.div(style=["margin-bottom: 32px"], parent_child.view()),
        // --- Pattern 3 ---
        @html.h2("3. Nested Model (Classic Elm)"),
        @html.p(
          "Single Cell. Parent Model wraps child Models. Parent Msg wraps child Msgs. Toggle sync to link both counters.",
        ),
        @html.div(style=["margin-bottom: 32px"], nested.view()),
        // --- Pattern 5 ---
        @html.h2("5. Stress Test: Studio Control"),
        @html.p(
          "6 nesting levels, ~78 state values, 7 message wrapping layers. Dashboard \u{2192} Mixer \u{2192} Channel \u{2192} EffectRack \u{2192} Effect \u{2192} Knob.",
        ),
        @html.div(style=["margin-bottom: 32px"], studio.view()),
        // --- Pattern 4 ---
        @html.h2("4. Reusable Complex Component"),
        @html.p(
          "A calendar component reused twice to build a date-range picker. Same Model/Msg/update/view, two instances, routed via Start(...) / End(...).",
        ),
        @html.div(style=["margin-bottom: 32px"], date_range.view()),
      ],
    ),
  )
  @rabbita.new(layout).mount("app")
}
