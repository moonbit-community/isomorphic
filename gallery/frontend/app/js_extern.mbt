///|
extern "js" fn clipboard_write(text : String) = "(t) => { try { navigator.clipboard.writeText(t); } catch(e) {} }"
