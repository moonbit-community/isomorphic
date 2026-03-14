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
    #|<div style="padding: 16px 24px;min-height: 100vh"><div style="background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%);padding: 20px 32px;margin-bottom: 24px;border-radius: 12px;display: flex;justify-content: space-between;align-items: center"><h1 style="color: white;font-size: 22px;font-weight: 700;letter-spacing: -0.3px">Kanban Board</h1><div style="display: flex;gap: 8px"><button style="padding: 8px 16px;background: rgba(255,255,255,0.2);color: white;border: 1px solid rgba(255,255,255,0.3);border-radius: 6px;cursor: pointer;font-size: 13px">+ Column</button></div></div><div style="text-align: center;padding: 60px 0;color: #94a3b8;font-size: 15px">Loading...</div></div>
  ))
}

///|
test "view shows empty board" {
  inspect(render(empty_model().view(noop_dispatch)), content=(
    #|<div style="padding: 16px 24px;min-height: 100vh"><div style="background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%);padding: 20px 32px;margin-bottom: 24px;border-radius: 12px;display: flex;justify-content: space-between;align-items: center"><h1 style="color: white;font-size: 22px;font-weight: 700;letter-spacing: -0.3px">Kanban Board</h1><div style="display: flex;gap: 8px"><button style="padding: 8px 16px;background: rgba(255,255,255,0.2);color: white;border: 1px solid rgba(255,255,255,0.3);border-radius: 6px;cursor: pointer;font-size: 13px">+ Column</button></div></div><div style="display: flex;gap: 16px;overflow-x: auto;padding-bottom: 16px;align-items: flex-start"></div></div>
  ))
}

///|
test "view renders columns with cards" {
  let model = {
    ..empty_model(),
    columns: sample_columns(),
    cards: sample_cards(),
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="padding: 16px 24px;min-height: 100vh"><div style="background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%);padding: 20px 32px;margin-bottom: 24px;border-radius: 12px;display: flex;justify-content: space-between;align-items: center"><h1 style="color: white;font-size: 22px;font-weight: 700;letter-spacing: -0.3px">Kanban Board</h1><div style="display: flex;gap: 8px"><button style="padding: 8px 16px;background: rgba(255,255,255,0.2);color: white;border: 1px solid rgba(255,255,255,0.3);border-radius: 6px;cursor: pointer;font-size: 13px">+ Column</button></div></div><div style="display: flex;gap: 16px;overflow-x: auto;padding-bottom: 16px;align-items: flex-start"><div style="min-width: 272px;max-width: 272px;background: #f1f5f9;border-radius: 10px;padding: 12px;display: flex;flex-direction: column;max-height: calc(100vh - 140px)"><div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 10px;padding: 0 2px"><div style="font-size: 14px;font-weight: 600;color: #334155;cursor: pointer">To Do<span style="color: #94a3b8;font-weight: 400;margin-left: 6px">2</span></div><div style="display: flex;gap: 2px"><button style="padding: 2px 6px;background: transparent;color: #94a3b8;border: none;cursor: pointer;font-size: 12px">▶</button><button style="padding: 2px 6px;background: transparent;color: #dc2626;border: none;cursor: pointer;font-size: 12px">✕</button></div></div><div style="flex: 1;overflow-y: auto"><div style="background: white;border-radius: 8px;padding: 10px 12px;border-left: 3px solid #3b82f6;margin-bottom: 6px;border: 1px solid #f0f0f5;transition: all 0.15s"><div style="font-size: 14px;font-weight: 500;color: #1e293b;margin-bottom: 4px">Design UI</div><div style="font-size: 12px;color: #64748b;margin-bottom: 6px;line-height: 1.4">Create mockups</div><div style="display: flex;gap: 4px;justify-content: flex-end"><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #e2e8f0;background: #f8fafc;color: #64748b">Move</button><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #e2e8f0;background: #f8fafc;color: #64748b">Edit</button><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #fecaca;background: #fef2f2;color: #dc2626">Del</button></div></div><div style="background: white;border-radius: 8px;padding: 10px 12px;border-left: 3px solid #e2e8f0;margin-bottom: 6px;border: 1px solid #f0f0f5;transition: all 0.15s"><div style="font-size: 14px;font-weight: 500;color: #1e293b;margin-bottom: 4px">Write tests</div><div style="display: flex;gap: 4px;justify-content: flex-end"><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #e2e8f0;background: #f8fafc;color: #64748b">Move</button><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #e2e8f0;background: #f8fafc;color: #64748b">Edit</button><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #fecaca;background: #fef2f2;color: #dc2626">Del</button></div></div></div><button style="width: 100%;padding: 8px;background: transparent;color: #94a3b8;border: 1px dashed #cbd5e1;border-radius: 6px;cursor: pointer;font-size: 13px;margin-top: 6px">+ Add Card</button></div><div style="min-width: 272px;max-width: 272px;background: #f1f5f9;border-radius: 10px;padding: 12px;display: flex;flex-direction: column;max-height: calc(100vh - 140px)"><div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 10px;padding: 0 2px"><div style="font-size: 14px;font-weight: 600;color: #334155;cursor: pointer">In Progress<span style="color: #94a3b8;font-weight: 400;margin-left: 6px">1</span></div><div style="display: flex;gap: 2px"><button style="padding: 2px 6px;background: transparent;color: #94a3b8;border: none;cursor: pointer;font-size: 12px">◀</button><button style="padding: 2px 6px;background: transparent;color: #94a3b8;border: none;cursor: pointer;font-size: 12px">▶</button><button style="padding: 2px 6px;background: transparent;color: #dc2626;border: none;cursor: pointer;font-size: 12px">✕</button></div></div><div style="flex: 1;overflow-y: auto"><div style="background: white;border-radius: 8px;padding: 10px 12px;border-left: 3px solid #22c55e;margin-bottom: 6px;border: 1px solid #f0f0f5;transition: all 0.15s"><div style="font-size: 14px;font-weight: 500;color: #1e293b;margin-bottom: 4px">Implement API</div><div style="font-size: 12px;color: #64748b;margin-bottom: 6px;line-height: 1.4">REST endpoints</div><div style="display: flex;gap: 4px;justify-content: flex-end"><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #e2e8f0;background: #f8fafc;color: #64748b">Move</button><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #e2e8f0;background: #f8fafc;color: #64748b">Edit</button><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #fecaca;background: #fef2f2;color: #dc2626">Del</button></div></div></div><button style="width: 100%;padding: 8px;background: transparent;color: #94a3b8;border: 1px dashed #cbd5e1;border-radius: 6px;cursor: pointer;font-size: 13px;margin-top: 6px">+ Add Card</button></div><div style="min-width: 272px;max-width: 272px;background: #f1f5f9;border-radius: 10px;padding: 12px;display: flex;flex-direction: column;max-height: calc(100vh - 140px)"><div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 10px;padding: 0 2px"><div style="font-size: 14px;font-weight: 600;color: #334155;cursor: pointer">Done<span style="color: #94a3b8;font-weight: 400;margin-left: 6px">0</span></div><div style="display: flex;gap: 2px"><button style="padding: 2px 6px;background: transparent;color: #94a3b8;border: none;cursor: pointer;font-size: 12px">◀</button><button style="padding: 2px 6px;background: transparent;color: #dc2626;border: none;cursor: pointer;font-size: 12px">✕</button></div></div><div style="flex: 1;overflow-y: auto"></div><button style="width: 100%;padding: 8px;background: transparent;color: #94a3b8;border: 1px dashed #cbd5e1;border-radius: 6px;cursor: pointer;font-size: 13px;margin-top: 6px">+ Add Card</button></div></div></div>
  ))
}

// ── Column states ───────────────────────────────────────────────────

///|
test "view shows add column form when adding_column is true" {
  let model = { ..empty_model(), adding_column: true }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="padding: 16px 24px;min-height: 100vh"><div style="background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%);padding: 20px 32px;margin-bottom: 24px;border-radius: 12px;display: flex;justify-content: space-between;align-items: center"><h1 style="color: white;font-size: 22px;font-weight: 700;letter-spacing: -0.3px">Kanban Board</h1><div style="display: flex;gap: 8px"></div></div><div style="display: flex;gap: 16px;overflow-x: auto;padding-bottom: 16px;align-items: flex-start"><div style="min-width: 272px;max-width: 272px;background: white;border-radius: 10px;padding: 16px;border: 2px dashed #cbd5e1"><input type="text" autocomplete="off" placeholder="Column title" style="width: 100%;padding: 8px 10px;border: 1px solid #e2e8f0;border-radius: 6px;font-size: 14px;outline: none;margin-bottom: 8px" value=""></input><div style="display: flex;gap: 6px"><button style="padding: 6px 14px;background: #0d9488;color: white;border: none;border-radius: 6px;cursor: pointer;font-size: 13px">Add</button><button style="padding: 6px 14px;background: #f1f5f9;color: #64748b;border: none;border-radius: 6px;cursor: pointer;font-size: 13px">Cancel</button></div></div></div></div>
  ))
}

///|
test "view shows rename form for renaming column" {
  let model = {
    ..empty_model(),
    columns: [{ id: 1, title: "To Do", position: 1000 }],
    renaming_column: 1,
    rename_column_title: "Backlog",
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="padding: 16px 24px;min-height: 100vh"><div style="background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%);padding: 20px 32px;margin-bottom: 24px;border-radius: 12px;display: flex;justify-content: space-between;align-items: center"><h1 style="color: white;font-size: 22px;font-weight: 700;letter-spacing: -0.3px">Kanban Board</h1><div style="display: flex;gap: 8px"><button style="padding: 8px 16px;background: rgba(255,255,255,0.2);color: white;border: 1px solid rgba(255,255,255,0.3);border-radius: 6px;cursor: pointer;font-size: 13px">+ Column</button></div></div><div style="display: flex;gap: 16px;overflow-x: auto;padding-bottom: 16px;align-items: flex-start"><div style="min-width: 272px;max-width: 272px;background: #f1f5f9;border-radius: 10px;padding: 12px;display: flex;flex-direction: column;max-height: calc(100vh - 140px)"><div style="margin-bottom: 10px"><input type="text" autocomplete="off" style="width: 100%;padding: 6px 8px;border: 1px solid #0d9488;border-radius: 4px;font-size: 14px;outline: none;font-weight: 600" value="Backlog"></input><div style="display: flex;gap: 4px;margin-top: 4px"><button style="padding: 3px 10px;background: #0d9488;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 11px">Save</button><button style="padding: 3px 10px;background: #e2e8f0;color: #64748b;border: none;border-radius: 4px;cursor: pointer;font-size: 11px">Cancel</button></div></div><div style="flex: 1;overflow-y: auto"></div><button style="width: 100%;padding: 8px;background: transparent;color: #94a3b8;border: 1px dashed #cbd5e1;border-radius: 6px;cursor: pointer;font-size: 13px;margin-top: 6px">+ Add Card</button></div></div></div>
  ))
}

// ── Card states ─────────────────────────────────────────────────────

///|
test "view shows add card form for target column" {
  let model = {
    ..empty_model(),
    columns: [{ id: 1, title: "To Do", position: 1000 }],
    adding_to_column: 1,
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="padding: 16px 24px;min-height: 100vh"><div style="background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%);padding: 20px 32px;margin-bottom: 24px;border-radius: 12px;display: flex;justify-content: space-between;align-items: center"><h1 style="color: white;font-size: 22px;font-weight: 700;letter-spacing: -0.3px">Kanban Board</h1><div style="display: flex;gap: 8px"><button style="padding: 8px 16px;background: rgba(255,255,255,0.2);color: white;border: 1px solid rgba(255,255,255,0.3);border-radius: 6px;cursor: pointer;font-size: 13px">+ Column</button></div></div><div style="display: flex;gap: 16px;overflow-x: auto;padding-bottom: 16px;align-items: flex-start"><div style="min-width: 272px;max-width: 272px;background: #f1f5f9;border-radius: 10px;padding: 12px;display: flex;flex-direction: column;max-height: calc(100vh - 140px)"><div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 10px;padding: 0 2px"><div style="font-size: 14px;font-weight: 600;color: #334155;cursor: pointer">To Do<span style="color: #94a3b8;font-weight: 400;margin-left: 6px">0</span></div><div style="display: flex;gap: 2px"><button style="padding: 2px 6px;background: transparent;color: #dc2626;border: none;cursor: pointer;font-size: 12px">✕</button></div></div><div style="flex: 1;overflow-y: auto"></div><div style="padding: 10px;background: #f8fafc;border-radius: 8px;border: 1px solid #e2e8f0;margin-top: 6px"><input type="text" autocomplete="off" placeholder="Card title" style="width: 100%;padding: 6px 8px;border: 1px solid #e2e8f0;border-radius: 4px;font-size: 13px;outline: none;margin-bottom: 6px" value=""></input><textarea rows="2" placeholder="Description (optional)" style="width: 100%;padding: 6px 8px;border: 1px solid #e2e8f0;border-radius: 4px;font-size: 12px;outline: none;resize: vertical;font-family: inherit;margin-bottom: 6px" value=""></textarea><div style="display: flex;gap: 4px;margin-bottom: 8px;flex-wrap: wrap"><div style="width: 24px;height: 24px;border-radius: 50%;background: #f1f5f9;cursor: pointer;border: 2px solid #1a1a2e"></div><div style="width: 24px;height: 24px;border-radius: 50%;background: #ef4444;cursor: pointer;border: 2px solid transparent"></div><div style="width: 24px;height: 24px;border-radius: 50%;background: #f97316;cursor: pointer;border: 2px solid transparent"></div><div style="width: 24px;height: 24px;border-radius: 50%;background: #eab308;cursor: pointer;border: 2px solid transparent"></div><div style="width: 24px;height: 24px;border-radius: 50%;background: #22c55e;cursor: pointer;border: 2px solid transparent"></div><div style="width: 24px;height: 24px;border-radius: 50%;background: #3b82f6;cursor: pointer;border: 2px solid transparent"></div><div style="width: 24px;height: 24px;border-radius: 50%;background: #a855f7;cursor: pointer;border: 2px solid transparent"></div></div><div style="display: flex;gap: 6px"><button style="padding: 5px 12px;background: #0d9488;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 12px">Add Card</button><button style="padding: 5px 12px;background: #f1f5f9;color: #64748b;border: none;border-radius: 4px;cursor: pointer;font-size: 12px">Cancel</button></div></div></div></div></div>
  ))
}

///|
test "view shows card edit form when editing" {
  let model = {
    ..empty_model(),
    columns: [{ id: 1, title: "To Do", position: 1000 }],
    cards: [
      {
        id: 1,
        column_id: 1,
        title: "Task",
        description: "Desc",
        color: "blue",
        position: 1000,
      },
    ],
    editing_card: 1,
    edit_title: "Task",
    edit_desc: "Desc",
    edit_color: "blue",
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="padding: 16px 24px;min-height: 100vh"><div style="background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%);padding: 20px 32px;margin-bottom: 24px;border-radius: 12px;display: flex;justify-content: space-between;align-items: center"><h1 style="color: white;font-size: 22px;font-weight: 700;letter-spacing: -0.3px">Kanban Board</h1><div style="display: flex;gap: 8px"><button style="padding: 8px 16px;background: rgba(255,255,255,0.2);color: white;border: 1px solid rgba(255,255,255,0.3);border-radius: 6px;cursor: pointer;font-size: 13px">+ Column</button></div></div><div style="display: flex;gap: 16px;overflow-x: auto;padding-bottom: 16px;align-items: flex-start"><div style="min-width: 272px;max-width: 272px;background: #f1f5f9;border-radius: 10px;padding: 12px;display: flex;flex-direction: column;max-height: calc(100vh - 140px)"><div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 10px;padding: 0 2px"><div style="font-size: 14px;font-weight: 600;color: #334155;cursor: pointer">To Do<span style="color: #94a3b8;font-weight: 400;margin-left: 6px">1</span></div><div style="display: flex;gap: 2px"><button style="padding: 2px 6px;background: transparent;color: #dc2626;border: none;cursor: pointer;font-size: 12px">✕</button></div></div><div style="flex: 1;overflow-y: auto"><div style="background: white;border-radius: 8px;padding: 12px;border: 1px solid #0d9488;margin-bottom: 6px"><input type="text" autocomplete="off" placeholder="Card title" style="width: 100%;padding: 6px 8px;border: 1px solid #e2e8f0;border-radius: 4px;font-size: 13px;outline: none;margin-bottom: 6px" value="Task"></input><textarea rows="2" placeholder="Description (optional)" style="width: 100%;padding: 6px 8px;border: 1px solid #e2e8f0;border-radius: 4px;font-size: 12px;outline: none;resize: vertical;font-family: inherit;margin-bottom: 6px" value="Desc"></textarea><div style="display: flex;gap: 4px;margin-bottom: 8px;flex-wrap: wrap"><div style="width: 24px;height: 24px;border-radius: 50%;background: #f1f5f9;cursor: pointer;border: 2px solid transparent"></div><div style="width: 24px;height: 24px;border-radius: 50%;background: #ef4444;cursor: pointer;border: 2px solid transparent"></div><div style="width: 24px;height: 24px;border-radius: 50%;background: #f97316;cursor: pointer;border: 2px solid transparent"></div><div style="width: 24px;height: 24px;border-radius: 50%;background: #eab308;cursor: pointer;border: 2px solid transparent"></div><div style="width: 24px;height: 24px;border-radius: 50%;background: #22c55e;cursor: pointer;border: 2px solid transparent"></div><div style="width: 24px;height: 24px;border-radius: 50%;background: #3b82f6;cursor: pointer;border: 2px solid #1a1a2e"></div><div style="width: 24px;height: 24px;border-radius: 50%;background: #a855f7;cursor: pointer;border: 2px solid transparent"></div></div><div style="display: flex;gap: 6px"><button style="padding: 5px 12px;background: #0d9488;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 12px">Save</button><button style="padding: 5px 12px;background: #f1f5f9;color: #64748b;border: none;border-radius: 4px;cursor: pointer;font-size: 12px">Cancel</button></div></div></div><button style="width: 100%;padding: 8px;background: transparent;color: #94a3b8;border: 1px dashed #cbd5e1;border-radius: 6px;cursor: pointer;font-size: 13px;margin-top: 6px">+ Add Card</button></div></div></div>
  ))
}

// ── Move mode ───────────────────────────────────────────────────────

///|
test "view shows move mode UI" {
  let model = {
    ..empty_model(),
    columns: [{ id: 1, title: "To Do", position: 1000 }],
    cards: [
      {
        id: 1,
        column_id: 1,
        title: "Task",
        description: "",
        color: "",
        position: 1000,
      },
    ],
    moving_card: 1,
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="padding: 16px 24px;min-height: 100vh"><div style="background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%);padding: 20px 32px;margin-bottom: 24px;border-radius: 12px;display: flex;justify-content: space-between;align-items: center"><h1 style="color: white;font-size: 22px;font-weight: 700;letter-spacing: -0.3px">Kanban Board</h1><div style="display: flex;gap: 8px"><button style="padding: 8px 16px;background: rgba(255,255,255,0.2);color: white;border: 1px solid rgba(255,255,255,0.3);border-radius: 6px;cursor: pointer;font-size: 13px">Cancel Move</button><button style="padding: 8px 16px;background: rgba(255,255,255,0.2);color: white;border: 1px solid rgba(255,255,255,0.3);border-radius: 6px;cursor: pointer;font-size: 13px">+ Column</button></div></div><div style="display: flex;gap: 16px;overflow-x: auto;padding-bottom: 16px;align-items: flex-start"><div style="min-width: 272px;max-width: 272px;background: #f1f5f9;border-radius: 10px;padding: 12px;display: flex;flex-direction: column;max-height: calc(100vh - 140px)"><div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 10px;padding: 0 2px"><div style="font-size: 14px;font-weight: 600;color: #334155;cursor: pointer">To Do<span style="color: #94a3b8;font-weight: 400;margin-left: 6px">1</span></div><div style="display: flex;gap: 2px"><button style="padding: 2px 6px;background: transparent;color: #dc2626;border: none;cursor: pointer;font-size: 12px">✕</button></div></div><div style="flex: 1;overflow-y: auto"><div style="height: 6px;margin: 4px 0;border-radius: 3px;background: #99f6e4;border: 2px dashed #14b8a6;cursor: pointer;transition: all 0.15s"></div><div style="background: #f0fdfa;border-radius: 8px;padding: 10px 12px;border-left: 3px solid #e2e8f0;margin-bottom: 6px;border: 1px solid #f0f0f5;transition: all 0.15s"><div style="font-size: 14px;font-weight: 500;color: #1e293b;margin-bottom: 4px">Task</div><div style="display: flex;gap: 4px;justify-content: flex-end"><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #e2e8f0;background: #0d9488;color: white">Moving...</button><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #e2e8f0;background: #f8fafc;color: #64748b">Edit</button><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #fecaca;background: #fef2f2;color: #dc2626">Del</button></div></div><div style="height: 6px;margin: 4px 0;border-radius: 3px;background: #99f6e4;border: 2px dashed #14b8a6;cursor: pointer;transition: all 0.15s"></div></div><button style="width: 100%;padding: 8px;background: transparent;color: #94a3b8;border: 1px dashed #cbd5e1;border-radius: 6px;cursor: pointer;font-size: 13px;margin-top: 6px">+ Add Card</button></div></div></div>
  ))
}

///|
test "view shows card with color border" {
  let model = {
    ..empty_model(),
    columns: [{ id: 1, title: "To Do", position: 1000 }],
    cards: [
      {
        id: 1,
        column_id: 1,
        title: "Colored task",
        description: "Has a color",
        color: "red",
        position: 1000,
      },
    ],
  }
  inspect(render(model.view(noop_dispatch)), content=(
    #|<div style="padding: 16px 24px;min-height: 100vh"><div style="background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%);padding: 20px 32px;margin-bottom: 24px;border-radius: 12px;display: flex;justify-content: space-between;align-items: center"><h1 style="color: white;font-size: 22px;font-weight: 700;letter-spacing: -0.3px">Kanban Board</h1><div style="display: flex;gap: 8px"><button style="padding: 8px 16px;background: rgba(255,255,255,0.2);color: white;border: 1px solid rgba(255,255,255,0.3);border-radius: 6px;cursor: pointer;font-size: 13px">+ Column</button></div></div><div style="display: flex;gap: 16px;overflow-x: auto;padding-bottom: 16px;align-items: flex-start"><div style="min-width: 272px;max-width: 272px;background: #f1f5f9;border-radius: 10px;padding: 12px;display: flex;flex-direction: column;max-height: calc(100vh - 140px)"><div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 10px;padding: 0 2px"><div style="font-size: 14px;font-weight: 600;color: #334155;cursor: pointer">To Do<span style="color: #94a3b8;font-weight: 400;margin-left: 6px">1</span></div><div style="display: flex;gap: 2px"><button style="padding: 2px 6px;background: transparent;color: #dc2626;border: none;cursor: pointer;font-size: 12px">✕</button></div></div><div style="flex: 1;overflow-y: auto"><div style="background: white;border-radius: 8px;padding: 10px 12px;border-left: 3px solid #ef4444;margin-bottom: 6px;border: 1px solid #f0f0f5;transition: all 0.15s"><div style="font-size: 14px;font-weight: 500;color: #1e293b;margin-bottom: 4px">Colored task</div><div style="font-size: 12px;color: #64748b;margin-bottom: 6px;line-height: 1.4">Has a color</div><div style="display: flex;gap: 4px;justify-content: flex-end"><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #e2e8f0;background: #f8fafc;color: #64748b">Move</button><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #e2e8f0;background: #f8fafc;color: #64748b">Edit</button><button style="padding: 3px 8px;font-size: 11px;cursor: pointer;border-radius: 4px;border: 1px solid #fecaca;background: #fef2f2;color: #dc2626">Del</button></div></div></div><button style="width: 100%;padding: 8px;background: transparent;color: #94a3b8;border: 1px dashed #cbd5e1;border-radius: 6px;cursor: pointer;font-size: 13px;margin-top: 6px">+ Add Card</button></div></div></div>
  ))
}
