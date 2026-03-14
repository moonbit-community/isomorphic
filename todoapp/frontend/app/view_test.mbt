// TODO(upstream): Add `derive(Debug)` to `Html` / `VNode` in rabbita so view
// tests can use `debug_inspect` snapshots (like update tests) instead of
// rendering to HTML strings.
//
// TODO: Write an html beautify/pretty-print function so rendered snapshots are
// human-readable (indented, one-tag-per-line) instead of single-line blobs.
//
// TODO(upstream): `App::with_init` missing `#cfg(target="js")` blocks native
// SSR — see https://github.com/moonbit-community/rabbita/issues/110
// Once fixed, `render_to_string(static_cell(html))` works on native target,
// enabling server-side rendering from the backend. The Html DSL, Cell,
// static_cell, and render_to_string are all already target-agnostic.
// To do native SSR:
//   1. Patch or wait for rabbita fix (one-line `#cfg` guard)
//   2. Change frontend/app `supported_targets` from "js" to "all"
//   3. Guard `update.mbt` HTTP imports with `#cfg(target="js")`
//   4. Backend imports frontend/app, calls `model.view(noop_dispatch)`
//   5. Use `render_to_string(static_cell(html))` to produce the HTML string
//   6. Inject into the HTML shell instead of empty `<div id="app"></div>`

///|
/// Render an `Html` node to its HTML string representation for test assertions.
#warnings("-alert_unstable")
fn render(html : @rabbita.Html) -> String {
  @rabbita.render_to_string(@rabbita.static_cell(html))
}

// ── Full view ───────────────────────────────────────────────────────

///|
test "view shows loading indicator" {
  let model = { ..empty_model(), loading: true }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 500px;margin: 40px auto;padding: 20px;background: white;border-radius: 8px;box-shadow: 0 2px 8px rgba(0,0,0,0.1)"><h1 style="text-align: center;margin-bottom: 20px;color: #2c3e50">Todo List</h1><form style="display: flex;gap: 8px;margin-bottom: 20px"><input type="text" autocomplete="off" placeholder="What needs to be done?" style="flex: 1;padding: 8px 12px;border: 1px solid #ddd;border-radius: 4px;font-size: 14px;outline: none" value=""></input><button type="submit" style="padding: 8px 16px;background: #3498db;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 14px">Add</button></form><p style="text-align: center;color: #999">Loading...</p></div>
  ))
}

///|
test "view shows empty state" {
  inspect(render(empty_model().view(noop_dispatch)), content=(
    #|<div style="max-width: 500px;margin: 40px auto;padding: 20px;background: white;border-radius: 8px;box-shadow: 0 2px 8px rgba(0,0,0,0.1)"><h1 style="text-align: center;margin-bottom: 20px;color: #2c3e50">Todo List</h1><form style="display: flex;gap: 8px;margin-bottom: 20px"><input type="text" autocomplete="off" placeholder="What needs to be done?" style="flex: 1;padding: 8px 12px;border: 1px solid #ddd;border-radius: 4px;font-size: 14px;outline: none" value=""></input><button type="submit" style="padding: 8px 16px;background: #3498db;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 14px">Add</button></form><p style="text-align: center;color: #999;padding: 20px">No todos yet. Add one above!</p></div>
  ))
}

///|
test "view renders todo items" {
  let model = { ..empty_model(), todos: sample_todos() }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 500px;margin: 40px auto;padding: 20px;background: white;border-radius: 8px;box-shadow: 0 2px 8px rgba(0,0,0,0.1)"><h1 style="text-align: center;margin-bottom: 20px;color: #2c3e50">Todo List</h1><form style="display: flex;gap: 8px;margin-bottom: 20px"><input type="text" autocomplete="off" placeholder="What needs to be done?" style="flex: 1;padding: 8px 12px;border: 1px solid #ddd;border-radius: 4px;font-size: 14px;outline: none" value=""></input><button type="submit" style="padding: 8px 16px;background: #3498db;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 14px">Add</button></form><ul style="list-style: none"><li style="display: flex;align-items: center;padding: 10px 0;border-bottom: 1px solid #eee"><input type="checkbox" autocomplete="off" style="margin-right: 12px;cursor: pointer"></input><span style="flex: 1">Buy milk</span><button style="padding: 4px 8px;background: #e74c3c;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 12px">Delete</button></li><li style="display: flex;align-items: center;padding: 10px 0;border-bottom: 1px solid #eee"><input type="checkbox" autocomplete="off" style="margin-right: 12px;cursor: pointer" checked></input><span style="flex: 1;text-decoration: line-through;color: #999">Write tests</span><button style="padding: 4px 8px;background: #e74c3c;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 12px">Delete</button></li><li style="display: flex;align-items: center;padding: 10px 0;border-bottom: 1px solid #eee"><input type="checkbox" autocomplete="off" style="margin-right: 12px;cursor: pointer"></input><span style="flex: 1">Ship feature</span><button style="padding: 4px 8px;background: #e74c3c;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 12px">Delete</button></li></ul></div>
  ))
}

// ── Todo item (tested via full view) ────────────────────────────────

///|
test "done todo has strikethrough" {
  let model = {
    ..empty_model(),
    todos: [{ id: 1, text: "Done task", done: true }],
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 500px;margin: 40px auto;padding: 20px;background: white;border-radius: 8px;box-shadow: 0 2px 8px rgba(0,0,0,0.1)"><h1 style="text-align: center;margin-bottom: 20px;color: #2c3e50">Todo List</h1><form style="display: flex;gap: 8px;margin-bottom: 20px"><input type="text" autocomplete="off" placeholder="What needs to be done?" style="flex: 1;padding: 8px 12px;border: 1px solid #ddd;border-radius: 4px;font-size: 14px;outline: none" value=""></input><button type="submit" style="padding: 8px 16px;background: #3498db;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 14px">Add</button></form><ul style="list-style: none"><li style="display: flex;align-items: center;padding: 10px 0;border-bottom: 1px solid #eee"><input type="checkbox" autocomplete="off" style="margin-right: 12px;cursor: pointer" checked></input><span style="flex: 1;text-decoration: line-through;color: #999">Done task</span><button style="padding: 4px 8px;background: #e74c3c;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 12px">Delete</button></li></ul></div>
  ))
}

///|
test "undone todo has no strikethrough" {
  let model = {
    ..empty_model(),
    todos: [{ id: 1, text: "Open task", done: false }],
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 500px;margin: 40px auto;padding: 20px;background: white;border-radius: 8px;box-shadow: 0 2px 8px rgba(0,0,0,0.1)"><h1 style="text-align: center;margin-bottom: 20px;color: #2c3e50">Todo List</h1><form style="display: flex;gap: 8px;margin-bottom: 20px"><input type="text" autocomplete="off" placeholder="What needs to be done?" style="flex: 1;padding: 8px 12px;border: 1px solid #ddd;border-radius: 4px;font-size: 14px;outline: none" value=""></input><button type="submit" style="padding: 8px 16px;background: #3498db;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 14px">Add</button></form><ul style="list-style: none"><li style="display: flex;align-items: center;padding: 10px 0;border-bottom: 1px solid #eee"><input type="checkbox" autocomplete="off" style="margin-right: 12px;cursor: pointer"></input><span style="flex: 1">Open task</span><button style="padding: 4px 8px;background: #e74c3c;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 12px">Delete</button></li></ul></div>
  ))
}

// ── Form ────────────────────────────────────────────────────────────

///|
test "form preserves input value" {
  let model = { ..empty_model(), input: "draft text" }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="max-width: 500px;margin: 40px auto;padding: 20px;background: white;border-radius: 8px;box-shadow: 0 2px 8px rgba(0,0,0,0.1)"><h1 style="text-align: center;margin-bottom: 20px;color: #2c3e50">Todo List</h1><form style="display: flex;gap: 8px;margin-bottom: 20px"><input type="text" autocomplete="off" placeholder="What needs to be done?" style="flex: 1;padding: 8px 12px;border: 1px solid #ddd;border-radius: 4px;font-size: 14px;outline: none" value="draft text"></input><button type="submit" style="padding: 8px 16px;background: #3498db;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 14px">Add</button></form><p style="text-align: center;color: #999;padding: 20px">No todos yet. Add one above!</p></div>
  ))
}
