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
test "view shows empty state" {
  inspect(
    render(empty_model().view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Contacts</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Your address book</p></div><div style="margin-bottom: 14px"><input type="text" autocomplete="off" placeholder="Search contacts..." style="width: 100%;padding: 12px 16px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;background: white" value=""></input></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><div style="display: flex;justify-content: space-between;align-items: center"><span style="font-size: 14px;color: #666;font-weight: 500">0 contacts</span><button style="padding: 8px 18px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 13px;font-weight: 600">+ Add Contact</button></div><div></div></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Contacts</h2><p style="color: #aaa;font-size: 13px;text-align: center;padding: 12px 0">No contacts yet. Add your first contact!</p></div></div>
    ),
  )
}

///|
test "view renders contacts" {
  let model = { ..empty_model(), contacts: sample_contacts() }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Contacts</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Your address book</p></div><div style="margin-bottom: 14px"><input type="text" autocomplete="off" placeholder="Search contacts..." style="width: 100%;padding: 12px 16px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;background: white" value=""></input></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><div style="display: flex;justify-content: space-between;align-items: center"><span style="font-size: 14px;color: #666;font-weight: 500">3 contacts</span><button style="padding: 8px 18px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 13px;font-weight: 600">+ Add Contact</button></div><div></div></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Favorites</h2><div style="display: flex;align-items: center;gap: 12px;padding: 10px 0;border-bottom: 1px solid #f5f5f5"><div style="width: 42px;height: 42px;border-radius: 50%;flex-shrink: 0;background: #e91e63;color: white;font-size: 15px;font-weight: 700;display: flex;align-items: center;justify-content: center">BJ</div><div style="flex: 1;min-width: 0"><div style="font-weight: 600;font-size: 14px;margin-bottom: 2px">Bob Jones</div><div style="font-size: 12px;color: #999;margin-bottom: 1px">bob@example.com</div><div style="font-size: 12px;color: #999">555-5678</div></div><button style="width: 32px;height: 32px;background: none;border: none;cursor: pointer;font-size: 18px;flex-shrink: 0;display: flex;align-items: center;justify-content: center">★</button><button style="width: 28px;height: 28px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;flex-shrink: 0;display: flex;align-items: center;justify-content: center">X</button></div></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Other Contacts</h2><div style="display: flex;align-items: center;gap: 12px;padding: 10px 0;border-bottom: 1px solid #f5f5f5"><div style="width: 42px;height: 42px;border-radius: 50%;flex-shrink: 0;background: #00bcd4;color: white;font-size: 15px;font-weight: 700;display: flex;align-items: center;justify-content: center">CL</div><div style="flex: 1;min-width: 0"><div style="font-weight: 600;font-size: 14px;margin-bottom: 2px">Carol Lee</div><div style="font-size: 12px;color: #999;margin-bottom: 1px">carol@example.com</div><div style="font-size: 12px;color: #999">555-9012</div></div><button style="width: 32px;height: 32px;background: none;border: none;cursor: pointer;font-size: 18px;flex-shrink: 0;display: flex;align-items: center;justify-content: center">☆</button><button style="width: 28px;height: 28px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;flex-shrink: 0;display: flex;align-items: center;justify-content: center">X</button></div><div style="display: flex;align-items: center;gap: 12px;padding: 10px 0;border-bottom: 1px solid #f5f5f5"><div style="width: 42px;height: 42px;border-radius: 50%;flex-shrink: 0;background: #667eea;color: white;font-size: 15px;font-weight: 700;display: flex;align-items: center;justify-content: center">AS</div><div style="flex: 1;min-width: 0"><div style="font-weight: 600;font-size: 14px;margin-bottom: 2px">Alice Smith</div><div style="font-size: 12px;color: #999;margin-bottom: 1px">alice@example.com</div><div style="font-size: 12px;color: #999">555-1234</div></div><button style="width: 32px;height: 32px;background: none;border: none;cursor: pointer;font-size: 18px;flex-shrink: 0;display: flex;align-items: center;justify-content: center">☆</button><button style="width: 28px;height: 28px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;flex-shrink: 0;display: flex;align-items: center;justify-content: center">X</button></div></div></div>
    ),
  )
}

// ── Form visibility ─────────────────────────────────────────────────

///|
test "view with form closed shows Add Contact button" {
  inspect(
    render(empty_model().view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Contacts</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Your address book</p></div><div style="margin-bottom: 14px"><input type="text" autocomplete="off" placeholder="Search contacts..." style="width: 100%;padding: 12px 16px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;background: white" value=""></input></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><div style="display: flex;justify-content: space-between;align-items: center"><span style="font-size: 14px;color: #666;font-weight: 500">0 contacts</span><button style="padding: 8px 18px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 13px;font-weight: 600">+ Add Contact</button></div><div></div></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Contacts</h2><p style="color: #aaa;font-size: 13px;text-align: center;padding: 12px 0">No contacts yet. Add your first contact!</p></div></div>
    ),
  )
}

///|
test "view with form open shows Cancel button and form fields" {
  let model = { ..empty_model(), show_form: true }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Contacts</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Your address book</p></div><div style="margin-bottom: 14px"><input type="text" autocomplete="off" placeholder="Search contacts..." style="width: 100%;padding: 12px 16px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;background: white" value=""></input></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><div style="display: flex;justify-content: space-between;align-items: center"><span style="font-size: 14px;color: #666;font-weight: 500">0 contacts</span><button style="padding: 8px 18px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 13px;font-weight: 600">Cancel</button></div><form style="display: flex;flex-direction: column;gap: 10px;margin-top: 16px;padding-top: 16px;border-top: 1px solid #f0f0f0"><input type="text" autocomplete="off" placeholder="Name" style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none" value=""></input><input type="text" autocomplete="off" placeholder="Email" style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none" value=""></input><input type="text" autocomplete="off" placeholder="Phone" style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none" value=""></input><button type="submit" style="padding: 12px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 15px;font-weight: 600;margin-top: 2px">Save Contact</button></form></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Contacts</h2><p style="color: #aaa;font-size: 13px;text-align: center;padding: 12px 0">No contacts yet. Add your first contact!</p></div></div>
    ),
  )
}

// ── Search ──────────────────────────────────────────────────────────

///|
test "view preserves search query in input" {
  let model = { ..empty_model(), search_query: "alice" }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Contacts</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Your address book</p></div><div style="margin-bottom: 14px"><input type="text" autocomplete="off" placeholder="Search contacts..." style="width: 100%;padding: 12px 16px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;background: white" value="alice"></input></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><div style="display: flex;justify-content: space-between;align-items: center"><span style="font-size: 14px;color: #666;font-weight: 500">0 contacts</span><button style="padding: 8px 18px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 13px;font-weight: 600">+ Add Contact</button></div><div></div></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Contacts</h2><p style="color: #aaa;font-size: 13px;text-align: center;padding: 12px 0">No contacts yet. Add your first contact!</p></div></div>
    ),
  )
}

///|
test "view shows no-match message when search has no results" {
  let model = {
    ..empty_model(),
    contacts: sample_contacts(),
    search_query: "zzzzz",
  }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Contacts</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Your address book</p></div><div style="margin-bottom: 14px"><input type="text" autocomplete="off" placeholder="Search contacts..." style="width: 100%;padding: 12px 16px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;background: white" value="zzzzz"></input></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><div style="display: flex;justify-content: space-between;align-items: center"><span style="font-size: 14px;color: #666;font-weight: 500">3 contacts</span><button style="padding: 8px 18px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 13px;font-weight: 600">+ Add Contact</button></div><div></div></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Contacts</h2><p style="color: #aaa;font-size: 13px;text-align: center;padding: 12px 0">No contacts match your search</p></div></div>
    ),
  )
}

// ── Favorites ───────────────────────────────────────────────────────

///|
test "view shows favorites section when favorites exist" {
  let model = { ..empty_model(), contacts: sample_contacts() }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Contacts</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Your address book</p></div><div style="margin-bottom: 14px"><input type="text" autocomplete="off" placeholder="Search contacts..." style="width: 100%;padding: 12px 16px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;background: white" value=""></input></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><div style="display: flex;justify-content: space-between;align-items: center"><span style="font-size: 14px;color: #666;font-weight: 500">3 contacts</span><button style="padding: 8px 18px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 13px;font-weight: 600">+ Add Contact</button></div><div></div></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Favorites</h2><div style="display: flex;align-items: center;gap: 12px;padding: 10px 0;border-bottom: 1px solid #f5f5f5"><div style="width: 42px;height: 42px;border-radius: 50%;flex-shrink: 0;background: #e91e63;color: white;font-size: 15px;font-weight: 700;display: flex;align-items: center;justify-content: center">BJ</div><div style="flex: 1;min-width: 0"><div style="font-weight: 600;font-size: 14px;margin-bottom: 2px">Bob Jones</div><div style="font-size: 12px;color: #999;margin-bottom: 1px">bob@example.com</div><div style="font-size: 12px;color: #999">555-5678</div></div><button style="width: 32px;height: 32px;background: none;border: none;cursor: pointer;font-size: 18px;flex-shrink: 0;display: flex;align-items: center;justify-content: center">★</button><button style="width: 28px;height: 28px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;flex-shrink: 0;display: flex;align-items: center;justify-content: center">X</button></div></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Other Contacts</h2><div style="display: flex;align-items: center;gap: 12px;padding: 10px 0;border-bottom: 1px solid #f5f5f5"><div style="width: 42px;height: 42px;border-radius: 50%;flex-shrink: 0;background: #00bcd4;color: white;font-size: 15px;font-weight: 700;display: flex;align-items: center;justify-content: center">CL</div><div style="flex: 1;min-width: 0"><div style="font-weight: 600;font-size: 14px;margin-bottom: 2px">Carol Lee</div><div style="font-size: 12px;color: #999;margin-bottom: 1px">carol@example.com</div><div style="font-size: 12px;color: #999">555-9012</div></div><button style="width: 32px;height: 32px;background: none;border: none;cursor: pointer;font-size: 18px;flex-shrink: 0;display: flex;align-items: center;justify-content: center">☆</button><button style="width: 28px;height: 28px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;flex-shrink: 0;display: flex;align-items: center;justify-content: center">X</button></div><div style="display: flex;align-items: center;gap: 12px;padding: 10px 0;border-bottom: 1px solid #f5f5f5"><div style="width: 42px;height: 42px;border-radius: 50%;flex-shrink: 0;background: #667eea;color: white;font-size: 15px;font-weight: 700;display: flex;align-items: center;justify-content: center">AS</div><div style="flex: 1;min-width: 0"><div style="font-weight: 600;font-size: 14px;margin-bottom: 2px">Alice Smith</div><div style="font-size: 12px;color: #999;margin-bottom: 1px">alice@example.com</div><div style="font-size: 12px;color: #999">555-1234</div></div><button style="width: 32px;height: 32px;background: none;border: none;cursor: pointer;font-size: 18px;flex-shrink: 0;display: flex;align-items: center;justify-content: center">☆</button><button style="width: 28px;height: 28px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;flex-shrink: 0;display: flex;align-items: center;justify-content: center">X</button></div></div></div>
    ),
  )
}

///|
test "view with single favorite contact" {
  let model = {
    ..empty_model(),
    contacts: [
      {
        id: 1,
        name: "Fave User",
        email: "fave@example.com",
        phone: "555-1111",
        favorite: true,
      },
    ],
  }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Contacts</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Your address book</p></div><div style="margin-bottom: 14px"><input type="text" autocomplete="off" placeholder="Search contacts..." style="width: 100%;padding: 12px 16px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;background: white" value=""></input></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><div style="display: flex;justify-content: space-between;align-items: center"><span style="font-size: 14px;color: #666;font-weight: 500">1 contact</span><button style="padding: 8px 18px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 13px;font-weight: 600">+ Add Contact</button></div><div></div></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Favorites</h2><div style="display: flex;align-items: center;gap: 12px;padding: 10px 0;border-bottom: 1px solid #f5f5f5"><div style="width: 42px;height: 42px;border-radius: 50%;flex-shrink: 0;background: #667eea;color: white;font-size: 15px;font-weight: 700;display: flex;align-items: center;justify-content: center">FU</div><div style="flex: 1;min-width: 0"><div style="font-weight: 600;font-size: 14px;margin-bottom: 2px">Fave User</div><div style="font-size: 12px;color: #999;margin-bottom: 1px">fave@example.com</div><div style="font-size: 12px;color: #999">555-1111</div></div><button style="width: 32px;height: 32px;background: none;border: none;cursor: pointer;font-size: 18px;flex-shrink: 0;display: flex;align-items: center;justify-content: center">★</button><button style="width: 28px;height: 28px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;flex-shrink: 0;display: flex;align-items: center;justify-content: center">X</button></div></div></div>
    ),
  )
}

// ── Contact count ───────────────────────────────────────────────────

///|
test "view shows singular contact count" {
  let model = {
    ..empty_model(),
    contacts: [
      {
        id: 1,
        name: "Solo",
        email: "solo@example.com",
        phone: "555-0001",
        favorite: false,
      },
    ],
  }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Contacts</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Your address book</p></div><div style="margin-bottom: 14px"><input type="text" autocomplete="off" placeholder="Search contacts..." style="width: 100%;padding: 12px 16px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;background: white" value=""></input></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><div style="display: flex;justify-content: space-between;align-items: center"><span style="font-size: 14px;color: #666;font-weight: 500">1 contact</span><button style="padding: 8px 18px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 13px;font-weight: 600">+ Add Contact</button></div><div></div></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">All Contacts</h2><div style="display: flex;align-items: center;gap: 12px;padding: 10px 0;border-bottom: 1px solid #f5f5f5"><div style="width: 42px;height: 42px;border-radius: 50%;flex-shrink: 0;background: #667eea;color: white;font-size: 15px;font-weight: 700;display: flex;align-items: center;justify-content: center">S</div><div style="flex: 1;min-width: 0"><div style="font-weight: 600;font-size: 14px;margin-bottom: 2px">Solo</div><div style="font-size: 12px;color: #999;margin-bottom: 1px">solo@example.com</div><div style="font-size: 12px;color: #999">555-0001</div></div><button style="width: 32px;height: 32px;background: none;border: none;cursor: pointer;font-size: 18px;flex-shrink: 0;display: flex;align-items: center;justify-content: center">☆</button><button style="width: 28px;height: 28px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;flex-shrink: 0;display: flex;align-items: center;justify-content: center">X</button></div></div></div>
    ),
  )
}

///|
test "view shows plural contact count" {
  let model = { ..empty_model(), contacts: sample_contacts() }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Contacts</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Your address book</p></div><div style="margin-bottom: 14px"><input type="text" autocomplete="off" placeholder="Search contacts..." style="width: 100%;padding: 12px 16px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;background: white" value=""></input></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><div style="display: flex;justify-content: space-between;align-items: center"><span style="font-size: 14px;color: #666;font-weight: 500">3 contacts</span><button style="padding: 8px 18px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 13px;font-weight: 600">+ Add Contact</button></div><div></div></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Favorites</h2><div style="display: flex;align-items: center;gap: 12px;padding: 10px 0;border-bottom: 1px solid #f5f5f5"><div style="width: 42px;height: 42px;border-radius: 50%;flex-shrink: 0;background: #e91e63;color: white;font-size: 15px;font-weight: 700;display: flex;align-items: center;justify-content: center">BJ</div><div style="flex: 1;min-width: 0"><div style="font-weight: 600;font-size: 14px;margin-bottom: 2px">Bob Jones</div><div style="font-size: 12px;color: #999;margin-bottom: 1px">bob@example.com</div><div style="font-size: 12px;color: #999">555-5678</div></div><button style="width: 32px;height: 32px;background: none;border: none;cursor: pointer;font-size: 18px;flex-shrink: 0;display: flex;align-items: center;justify-content: center">★</button><button style="width: 28px;height: 28px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;flex-shrink: 0;display: flex;align-items: center;justify-content: center">X</button></div></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Other Contacts</h2><div style="display: flex;align-items: center;gap: 12px;padding: 10px 0;border-bottom: 1px solid #f5f5f5"><div style="width: 42px;height: 42px;border-radius: 50%;flex-shrink: 0;background: #00bcd4;color: white;font-size: 15px;font-weight: 700;display: flex;align-items: center;justify-content: center">CL</div><div style="flex: 1;min-width: 0"><div style="font-weight: 600;font-size: 14px;margin-bottom: 2px">Carol Lee</div><div style="font-size: 12px;color: #999;margin-bottom: 1px">carol@example.com</div><div style="font-size: 12px;color: #999">555-9012</div></div><button style="width: 32px;height: 32px;background: none;border: none;cursor: pointer;font-size: 18px;flex-shrink: 0;display: flex;align-items: center;justify-content: center">☆</button><button style="width: 28px;height: 28px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;flex-shrink: 0;display: flex;align-items: center;justify-content: center">X</button></div><div style="display: flex;align-items: center;gap: 12px;padding: 10px 0;border-bottom: 1px solid #f5f5f5"><div style="width: 42px;height: 42px;border-radius: 50%;flex-shrink: 0;background: #667eea;color: white;font-size: 15px;font-weight: 700;display: flex;align-items: center;justify-content: center">AS</div><div style="flex: 1;min-width: 0"><div style="font-weight: 600;font-size: 14px;margin-bottom: 2px">Alice Smith</div><div style="font-size: 12px;color: #999;margin-bottom: 1px">alice@example.com</div><div style="font-size: 12px;color: #999">555-1234</div></div><button style="width: 32px;height: 32px;background: none;border: none;cursor: pointer;font-size: 18px;flex-shrink: 0;display: flex;align-items: center;justify-content: center">☆</button><button style="width: 28px;height: 28px;background: #fee;color: #e53935;border: none;border-radius: 8px;cursor: pointer;font-size: 13px;font-weight: 700;flex-shrink: 0;display: flex;align-items: center;justify-content: center">X</button></div></div></div>
    ),
  )
}

// ── Form input values ───────────────────────────────────────────────

///|
test "view preserves form input values" {
  let model = {
    ..empty_model(),
    show_form: true,
    name_input: "Draft Name",
    email_input: "draft@example.com",
    phone_input: "555-9999",
  }
  inspect(
    render(model.view(noop_dispatch)),
    content=(
      #|<div style="max-width: 520px;margin: 0 auto;padding: 24px 16px;font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, sans-serif"><div style="text-align: center;margin-bottom: 24px;padding-top: 12px"><h1 style="color: white;font-size: 26px;font-weight: 800;margin-bottom: 4px;letter-spacing: -0.5px">Contacts</h1><p style="color: rgba(255,255,255,0.75);font-size: 13px">Your address book</p></div><div style="margin-bottom: 14px"><input type="text" autocomplete="off" placeholder="Search contacts..." style="width: 100%;padding: 12px 16px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none;background: white" value=""></input></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><div style="display: flex;justify-content: space-between;align-items: center"><span style="font-size: 14px;color: #666;font-weight: 500">0 contacts</span><button style="padding: 8px 18px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 13px;font-weight: 600">Cancel</button></div><form style="display: flex;flex-direction: column;gap: 10px;margin-top: 16px;padding-top: 16px;border-top: 1px solid #f0f0f0"><input type="text" autocomplete="off" placeholder="Name" style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none" value="Draft Name"></input><input type="text" autocomplete="off" placeholder="Email" style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none" value="draft@example.com"></input><input type="text" autocomplete="off" placeholder="Phone" style="padding: 10px 14px;border: 2px solid #eee;border-radius: 10px;font-size: 14px;outline: none" value="555-9999"></input><button type="submit" style="padding: 12px;background: linear-gradient(135deg, #667eea, #764ba2);color: white;border: none;border-radius: 10px;cursor: pointer;font-size: 15px;font-weight: 600;margin-top: 2px">Save Contact</button></form></div><div style="background: white;border-radius: 14px;padding: 18px 20px;margin-bottom: 14px;box-shadow: 0 1px 8px rgba(0,0,0,0.06)"><h2 style="font-size: 13px;font-weight: 700;color: #999;margin-bottom: 14px;text-transform: uppercase;letter-spacing: 0.5px">Contacts</h2><p style="color: #aaa;font-size: 13px;text-align: center;padding: 12px 0">No contacts yet. Add your first contact!</p></div></div>
    ),
  )
}
