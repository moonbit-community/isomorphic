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
test "view shows empty state with new note form" {
  inspect(
    render(empty_model().view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Notes</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Quick thoughts, organized</p></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">New Note</h2><form style="display: flex;flex-direction: column;gap: 10px"><input type="text" autocomplete="off" placeholder="Note title..." style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none" value=""></input><textarea rows="5" placeholder="Write your note..." style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;resize: vertical;font-family: inherit" value=""></textarea><button type="submit" style="padding: 12px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 15px;font-weight: 600;margin-top: 2px">Save Note</button></form></div></div>
    ),
  )
}

///|
test "view renders notes list" {
  let model = { ..empty_model(), notes: sample_notes() }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Notes</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Quick thoughts, organized</p></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">New Note</h2><form style="display: flex;flex-direction: column;gap: 10px"><input type="text" autocomplete="off" placeholder="Note title..." style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none" value=""></input><textarea rows="5" placeholder="Write your note..." style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;resize: vertical;font-family: inherit" value=""></textarea><button type="submit" style="padding: 12px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 15px;font-weight: 600;margin-top: 2px">Save Note</button></form></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">All Notes</h2><div style="padding: 12px 0;border-bottom: 1px solid #f5f5f5"><div style="display: flex;align-items: flex-start;gap: 10px"><div style="flex: 1;min-width: 0;cursor: pointer;padding: 8px 12px;border-radius: 10px;background: white"><div style="display: flex;align-items: center;gap: 8px;margin-bottom: 4px"><button style="font-weight: 700;font-size: 15px;color: #333;background: none;border: none;cursor: pointer;text-align: left;padding: 0">First Note</button></div><div style="font-size: 13px;color: #888;margin-bottom: 6px;line-height: 1.4">Hello world</div><span style="font-size: 11px;color: #667eea;background: #f0f0ff;padding: 2px 8px;border-radius: 10px;font-weight: 600">2 words</span></div><div style="display: flex;flex-direction: column;gap: 6px;padding-top: 8px"><button style="width: 32px;height: 32px;background: #f5f5f5;color: #bbb;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 700;display: flex;align-items: center;justify-content: center">o</button><button style="width: 32px;height: 32px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;display: flex;align-items: center;justify-content: center">X</button></div></div></div><div style="padding: 12px 0;border-bottom: 1px solid #f5f5f5"><div style="display: flex;align-items: flex-start;gap: 10px"><div style="flex: 1;min-width: 0;cursor: pointer;padding: 8px 12px;border-radius: 10px;background: #fffdf5"><div style="display: flex;align-items: center;gap: 8px;margin-bottom: 4px"><span style="color: #f57c00;font-size: 14px">* </span><button style="font-weight: 700;font-size: 15px;color: #333;background: none;border: none;cursor: pointer;text-align: left;padding: 0">Pinned Note</button></div><div style="font-size: 13px;color: #888;margin-bottom: 6px;line-height: 1.4">Important stuff</div><span style="font-size: 11px;color: #667eea;background: #f0f0ff;padding: 2px 8px;border-radius: 10px;font-weight: 600">2 words</span></div><div style="display: flex;flex-direction: column;gap: 6px;padding-top: 8px"><button style="width: 32px;height: 32px;background: #fff3e0;color: #f57c00;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 700;display: flex;align-items: center;justify-content: center">*</button><button style="width: 32px;height: 32px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;display: flex;align-items: center;justify-content: center">X</button></div></div></div><div style="padding: 12px 0;border-bottom: 1px solid #f5f5f5"><div style="display: flex;align-items: flex-start;gap: 10px"><div style="flex: 1;min-width: 0;cursor: pointer;padding: 8px 12px;border-radius: 10px;background: white"><div style="display: flex;align-items: center;gap: 8px;margin-bottom: 4px"><button style="font-weight: 700;font-size: 15px;color: #333;background: none;border: none;cursor: pointer;text-align: left;padding: 0">Third Note</button></div><div style="font-size: 13px;color: #888;margin-bottom: 6px;line-height: 1.4">Some content here</div><span style="font-size: 11px;color: #667eea;background: #f0f0ff;padding: 2px 8px;border-radius: 10px;font-weight: 600">3 words</span></div><div style="display: flex;flex-direction: column;gap: 6px;padding-top: 8px"><button style="width: 32px;height: 32px;background: #f5f5f5;color: #bbb;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 700;display: flex;align-items: center;justify-content: center">o</button><button style="width: 32px;height: 32px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;display: flex;align-items: center;justify-content: center">X</button></div></div></div></div></div>
    ),
  )
}

// ── Note detail view ────────────────────────────────────────────────

///|
test "view shows note detail when selected" {
  let model = { ..empty_model(), notes: sample_notes(), selected_note_id: 1 }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Notes</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Quick thoughts, organized</p></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Note Detail</h2><button style="padding: 6px 14px;background: #f0f0f5;color: #667eea;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 600;margin-bottom: 14px">Back</button><h1 style="font-size: 20px;font-weight: 700;color: #333;margin-bottom: 8px">First Note</h1><div style="font-size: 14px;line-height: 1.7;color: #555;margin-bottom: 16px;white-space: pre-wrap">Hello world</div><div style="display: flex;gap: 16px;padding: 12px 0;border-top: 1px solid #f0f0f0"><span style="font-size: 12px;font-weight: 600;color: #667eea;background: #f0f0ff;padding: 4px 10px;border-radius: 10px">2 words</span><span style="font-size: 12px;font-weight: 600;color: #9c27b0;background: #f5f0ff;padding: 4px 10px;border-radius: 10px">11 chars</span><span style="font-size: 12px;font-weight: 600;color: #43a047;background: #e8f5e9;padding: 4px 10px;border-radius: 10px">&lt; 1 min read</span></div></div></div>
    ),
  )
}

///|
test "view shows pinned badge in detail view" {
  let model = { ..empty_model(), notes: sample_notes(), selected_note_id: 2 }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Notes</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Quick thoughts, organized</p></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Note Detail</h2><button style="padding: 6px 14px;background: #f0f0f5;color: #667eea;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 600;margin-bottom: 14px">Back</button><h1 style="font-size: 20px;font-weight: 700;color: #333;margin-bottom: 8px">Pinned Note</h1><div style="display: inline-block;padding: 3px 10px;background: #fff3e0;color: #f57c00;border-radius: 12px;font-size: 11px;font-weight: 600;margin-bottom: 12px">Pinned</div><div style="font-size: 14px;line-height: 1.7;color: #555;margin-bottom: 16px;white-space: pre-wrap">Important stuff</div><div style="display: flex;gap: 16px;padding: 12px 0;border-top: 1px solid #f0f0f0"><span style="font-size: 12px;font-weight: 600;color: #667eea;background: #f0f0ff;padding: 4px 10px;border-radius: 10px">2 words</span><span style="font-size: 12px;font-weight: 600;color: #9c27b0;background: #f5f0ff;padding: 4px 10px;border-radius: 10px">15 chars</span><span style="font-size: 12px;font-weight: 600;color: #43a047;background: #e8f5e9;padding: 4px 10px;border-radius: 10px">&lt; 1 min read</span></div></div></div>
    ),
  )
}

// ── Form state ──────────────────────────────────────────────────────

///|
test "form preserves title and content input values" {
  let model = {
    ..empty_model(),
    title_input: "draft title",
    content_input: "draft body",
  }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Notes</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Quick thoughts, organized</p></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">New Note</h2><form style="display: flex;flex-direction: column;gap: 10px"><input type="text" autocomplete="off" placeholder="Note title..." style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none" value="draft title"></input><textarea rows="5" placeholder="Write your note..." style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;resize: vertical;font-family: inherit" value="draft body"></textarea><button type="submit" style="padding: 12px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 15px;font-weight: 600;margin-top: 2px">Save Note</button></form></div></div>
    ),
  )
}

// ── Pinned note styling ─────────────────────────────────────────────

///|
test "pinned note shows pin indicator in list" {
  let model = {
    ..empty_model(),
    notes: [{ id: 1, title: "Pinned", content: "Content", pinned: true }],
  }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Notes</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Quick thoughts, organized</p></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">New Note</h2><form style="display: flex;flex-direction: column;gap: 10px"><input type="text" autocomplete="off" placeholder="Note title..." style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none" value=""></input><textarea rows="5" placeholder="Write your note..." style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;resize: vertical;font-family: inherit" value=""></textarea><button type="submit" style="padding: 12px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 15px;font-weight: 600;margin-top: 2px">Save Note</button></form></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">All Notes</h2><div style="padding: 12px 0;border-bottom: 1px solid #f5f5f5"><div style="display: flex;align-items: flex-start;gap: 10px"><div style="flex: 1;min-width: 0;cursor: pointer;padding: 8px 12px;border-radius: 10px;background: #fffdf5"><div style="display: flex;align-items: center;gap: 8px;margin-bottom: 4px"><span style="color: #f57c00;font-size: 14px">* </span><button style="font-weight: 700;font-size: 15px;color: #333;background: none;border: none;cursor: pointer;text-align: left;padding: 0">Pinned</button></div><div style="font-size: 13px;color: #888;margin-bottom: 6px;line-height: 1.4">Content</div><span style="font-size: 11px;color: #667eea;background: #f0f0ff;padding: 2px 8px;border-radius: 10px;font-weight: 600">1 words</span></div><div style="display: flex;flex-direction: column;gap: 6px;padding-top: 8px"><button style="width: 32px;height: 32px;background: #fff3e0;color: #f57c00;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 700;display: flex;align-items: center;justify-content: center">*</button><button style="width: 32px;height: 32px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;display: flex;align-items: center;justify-content: center">X</button></div></div></div></div></div>
    ),
  )
}

///|
test "unpinned note has no pin indicator" {
  let model = {
    ..empty_model(),
    notes: [{ id: 1, title: "Regular", content: "Content", pinned: false }],
  }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Notes</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Quick thoughts, organized</p></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">New Note</h2><form style="display: flex;flex-direction: column;gap: 10px"><input type="text" autocomplete="off" placeholder="Note title..." style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none" value=""></input><textarea rows="5" placeholder="Write your note..." style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;resize: vertical;font-family: inherit" value=""></textarea><button type="submit" style="padding: 12px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 15px;font-weight: 600;margin-top: 2px">Save Note</button></form></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">All Notes</h2><div style="padding: 12px 0;border-bottom: 1px solid #f5f5f5"><div style="display: flex;align-items: flex-start;gap: 10px"><div style="flex: 1;min-width: 0;cursor: pointer;padding: 8px 12px;border-radius: 10px;background: white"><div style="display: flex;align-items: center;gap: 8px;margin-bottom: 4px"><button style="font-weight: 700;font-size: 15px;color: #333;background: none;border: none;cursor: pointer;text-align: left;padding: 0">Regular</button></div><div style="font-size: 13px;color: #888;margin-bottom: 6px;line-height: 1.4">Content</div><span style="font-size: 11px;color: #667eea;background: #f0f0ff;padding: 2px 8px;border-radius: 10px;font-weight: 600">1 words</span></div><div style="display: flex;flex-direction: column;gap: 6px;padding-top: 8px"><button style="width: 32px;height: 32px;background: #f5f5f5;color: #bbb;border: none;border-radius: 8px;cursor: pointer;font-size: 14px;font-weight: 700;display: flex;align-items: center;justify-content: center">o</button><button style="width: 32px;height: 32px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;display: flex;align-items: center;justify-content: center">X</button></div></div></div></div></div>
    ),
  )
}
