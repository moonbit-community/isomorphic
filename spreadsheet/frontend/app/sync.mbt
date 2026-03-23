///|
/// API endpoint for loading workbook data from the backend.
let api_load : String = "/api/load"

///|
/// API endpoint for saving workbook data to the backend.
let api_save : String = "/api/save"

///|
/// Fetch workbook data from the backend.
fn fetch_workbook(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    api_load,
    expect=Json(fn(result) { dispatch(GotBackendData(result)) }, fn(json) {
      Ok(@json.from_json(json)) catch {
        _ => Err("Failed to decode workbook")
      }
    }),
  )
}

///|
extern "js" fn js_log(msg : String) -> Unit =
  #|(msg) => { console.log('[spreadsheet]', msg); }

///|
/// JS FFI: POST JSON data to a URL using fetch API directly.
/// This bypasses Rabbita's @http.post which may not execute the request.
extern "js" fn js_fetch_post(url : String, json_str : String, on_done : () -> Unit) -> Unit =
  #|(url, json, done) => {
  #|  fetch(url, {
  #|    method: 'POST',
  #|    headers: { 'Content-Type': 'application/json' },
  #|    body: json
  #|  }).then(() => done()).catch(e => { console.error('save failed:', e); done(); });
  #|}

///|
/// Save workbook data to the backend (fire-and-forget side effect).
/// Returns @rabbita.none — the actual HTTP request is made via JS fetch.
fn save_workbook(
  dispatch : @rabbita.Dispatch[Msg],
  sheets : Array[@sheet.Sheet],
) -> @rabbita.Cmd {
  let json_str = sheets.to_json().stringify()
  js_log("save_workbook: \{json_str.length()} chars")
  js_fetch_post(api_save, json_str, fn() {
    ignore(dispatch(SavedToBackend))
  })
  @rabbita.none
}

///|
/// Auto-save helper: call after any model change that should persist.
/// Since save is a side effect (not a Cmd), this can be called anywhere.
fn auto_save(dispatch : @rabbita.Dispatch[Msg], model : Model) -> Unit {
  ignore(save_workbook(dispatch, model.sheets))
}

///|
/// Connect a WebSocket to the backend for real-time refresh notifications.
/// Also sets up a polling fallback: every 3 seconds, check for changes
/// by comparing the saved data version.
extern "js" fn setup_realtime(on_refresh : () -> Unit) -> Unit =
  #|(function(on_refresh) {
  #|  // Track last known data hash to avoid unnecessary reloads
  #|  var lastHash = '';
  #|
  #|  // WebSocket connection with auto-reconnect
  #|  function connectWS() {
  #|    try {
  #|      var protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  #|      var ws = new WebSocket(protocol + '//' + window.location.host + '/ws');
  #|      ws.onopen = function() { console.log('[ws] connected'); };
  #|      ws.onmessage = function(event) {
  #|        console.log('[ws] received:', event.data);
  #|        on_refresh();
  #|      };
  #|      ws.onclose = function() {
  #|        console.log('[ws] disconnected, reconnecting in 2s');
  #|        setTimeout(connectWS, 2000);
  #|      };
  #|      ws.onerror = function() { ws.close(); };
  #|    } catch(e) {
  #|      console.log('[ws] error, retrying in 2s');
  #|      setTimeout(connectWS, 2000);
  #|    }
  #|  }
  #|  connectWS();
  #|
  #|  // Polling fallback: check every 3 seconds
  #|  setInterval(function() {
  #|    fetch('/api/load').then(function(r) { return r.text(); }).then(function(text) {
  #|      var hash = text.length + ':' + text.slice(0, 100);
  #|      if (lastHash && hash !== lastHash) {
  #|        console.log('[poll] data changed, refreshing');
  #|        on_refresh();
  #|      }
  #|      lastHash = hash;
  #|    }).catch(function() {});
  #|  }, 3000);
  #|})

///|
/// Initialize real-time sync: WebSocket + polling fallback.
/// Dispatches LoadFromBackend when a change is detected from another client.
pub fn init_ws(dispatch : @rabbita.Dispatch[Msg]) -> Unit {
  setup_realtime(fn() { ignore(dispatch(LoadFromBackend)) })
}
