///|
#warnings("-alert_unstable")
fn main {
  // Pattern 1: Two independent cells — separate TEA loops, no shared state
  let (cell_a, cell_b) = @independent.make()

  // Pattern 2: Parent-child — parent holds dispatch handles to children
  let parent_child = @parent_child.make()

  // Pattern 3: Nested model — single cell, parent model embeds child models
  let nested = @nested.make()

  // Layout: a static cell that composes all three demos
  let layout = @rabbita.static_cell(
    @html.div(
      style=["max-width: 800px", "margin: 0 auto", "padding: 24px",
        "font-family: system-ui, sans-serif"],
      [
        @html.h1("TEA Composition Patterns"),
        // --- Pattern 1 ---
        @html.h2("1. Independent Cells"),
        @html.p(
          "Two separate Cells, each with its own Model/Msg/update/view loop. They share no state.",
        ),
        @html.p(
          "simple_cell(...) creates each one. The parent just calls .view() to render them.",
        ),
        @html.div(
          style=["display: flex", "gap: 16px", "margin-bottom: 32px"],
          [cell_a.view(), cell_b.view()],
        ),
        // --- Pattern 2 ---
        @html.h2("2. Parent-Child with Dispatch"),
        @html.p(
          "simple_cell_with_dispatch(...) returns a Dispatch handle. The parent stores these handles and sends messages to children.",
        ),
        @html.div(style=["margin-bottom: 32px"], parent_child.view()),
        // --- Pattern 3 ---
        @html.h2("3. Nested Model (Classic Elm)"),
        @html.p(
          "Single Cell. Parent Model contains child Models. Parent Msg wraps child Msgs. View maps dispatch: fn(msg) { dispatch(Left(msg)) }.",
        ),
        @html.div(style=["margin-bottom: 32px"], nested.view()),
      ],
    ),
  )
  @rabbita.new(layout).mount("app")
}
