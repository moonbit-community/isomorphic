///|
/// Write text to clipboard. Returns true if the write likely succeeded
/// (clipboard API available), false otherwise. Note: writeText is async
/// but we optimistically assume success when the API is available.
extern "js" fn clipboard_write(text : String) -> Bool = "(t) => { try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(t); return true; } return false; } catch(e) { return false; } }"

///|
/// Focus the input element with the given id. Uses imperative DOM access
/// since virtual DOM `autofocus` only works on initial mount.
extern "js" fn focus_element(id : String) = "(id) => { const el = document.getElementById(id); if (el) el.focus(); }"
