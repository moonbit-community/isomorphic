// TODO(P2): clipboard_write is synchronous but navigator.clipboard.writeText
// returns a Promise. On browsers that expose the API but reject asynchronously
// (e.g. insecure origins, denied permissions), this returns true even though
// the write failed. To fix properly:
//   1. Use @rabbita.attempt to wrap an async JS call that awaits the Promise
//   2. Dispatch a CopyResult(Result[Unit, String]) Msg on resolve/reject
//   3. Only set copied=true on Ok, show error on Err
// This requires Rabbita's async effect system and a JS extern that returns
// a MoonBit-compatible Promise/async value.

///|
/// Write text to clipboard. Returns true if the API is available (optimistic).
/// Does NOT await the async writeText Promise — see TODO above.
extern "js" fn clipboard_write(text : String) -> Bool = "(t) => { try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(t); return true; } return false; } catch(e) { return false; } }"

///|
/// Focus the input element with the given id. Uses imperative DOM access
/// since virtual DOM `autofocus` only works on initial mount.
extern "js" fn focus_element(id : String) = "(id) => { const el = document.getElementById(id); if (el) el.focus(); }"
