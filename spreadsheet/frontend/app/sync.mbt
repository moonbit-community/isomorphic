///|
/// API endpoints.
let api_load : String = "/api/load"

///|
let api_save : String = "/api/save"

///|
extern "js" fn js_log(msg : String) -> Unit =
  #|(msg) => { console.log('[spreadsheet]', msg); }

// ── Save (via Rabbita @http.post Cmd) ───────────────────────────────

///|
/// Save workbook data to the backend.
/// Returns a proper Rabbita Cmd — must be returned from the update function.
#warnings("-unresolved_type_variable")
fn save_cmd(
  dispatch : @rabbita.Dispatch[Msg],
  sheets : Array[@sheet.Sheet],
) -> @rabbita.Cmd {
  @http.post(
    api_save,
    Json(sheets.to_json()),
    expect=Text(fn(_result) { dispatch(SavedToBackend) }),
  )
}

// ── Load (via @rabbita.attempt for proper Rabbita enqueue) ──────────

///|
/// JS FFI: GET text from URL, resolve/reject for @js.suspend.
extern "js" fn js_fetch_get_promise(
  url : String,
  resolve : (String) -> Unit,
  reject : (@js.Error_) -> Unit,
) -> Unit =
  #|(url, resolve, reject) => {
  #|  fetch(url).then(r => r.text()).then(text => resolve(text))
  #|    .catch(e => reject(new Error(String(e))));
  #|}

///|
/// Fetch workbook via @rabbita.attempt (properly enqueues into Rabbita).
fn fetch_workbook_cmd(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @rabbita.attempt(
    fn(result) {
      match result {
        Ok(text) => {
          let text : String = text
          js_log("loaded \{text.length()} chars")
          if text == "{}" || text.is_empty() {
            dispatch(GotBackendData(Err("empty")))
          } else {
            try {
              let json : Json = @json.parse(text)
              let sheets : Array[@sheet.Sheet] = @json.from_json(json)
              js_log("parsed \{sheets.length()} sheets")
              dispatch(GotBackendData(Ok(sheets)))
            } catch {
              e => {
                js_log("parse error: \{e}")
                dispatch(GotBackendData(Err("parse")))
              }
            }
          }
        }
        Err(_) => dispatch(GotBackendData(Err("fetch failed")))
      }
    },
    async fn() {
      @js.suspend(fn(resolve, reject) {
        js_fetch_get_promise(api_load, resolve, reject)
      })
    },
  )
}

// ── WebSocket subscription (recursive @rabbita.attempt chain) ───────

///|
/// JS FFI: global WebSocket connection.
/// Maintains one persistent WS connection. When wait_for_ws_message is
/// called, it resolves the next time a message arrives.
extern "js" fn setup_ws_connection() -> Unit =
  #|(function() {
  #|  window._ws_pending = null;
  #|  window._ws = null;
  #|  function connect() {
  #|    try {
  #|      var protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  #|      var ws = new WebSocket(protocol + '//' + window.location.host + '/ws');
  #|      ws.onopen = function() { console.log('[ws] connected'); window._ws = ws; };
  #|      ws.onmessage = function(event) {
  #|        console.log('[ws] message:', event.data);
  #|        if (window._ws_pending) {
  #|          var resolve = window._ws_pending;
  #|          window._ws_pending = null;
  #|          resolve(event.data);
  #|        }
  #|      };
  #|      ws.onclose = function() {
  #|        console.log('[ws] closed, reconnecting...');
  #|        window._ws = null;
  #|        setTimeout(connect, 2000);
  #|      };
  #|      ws.onerror = function() { ws.close(); };
  #|    } catch(e) { setTimeout(connect, 2000); }
  #|  }
  #|  connect();
  #|})()

///|
/// JS FFI: wait for the next WebSocket message.
/// Resolves the @js.suspend when a message arrives.
extern "js" fn wait_for_ws_message(
  resolve : (String) -> Unit,
  _reject : (@js.Error_) -> Unit,
) -> Unit =
  #|(resolve, _reject) => {
  #|  window._ws_pending = resolve;
  #|}

///|
/// Create a Rabbita Cmd that waits for ONE WebSocket message,
/// then dispatches WsRefresh. The update handler for WsRefresh
/// returns another ws_listen_cmd, creating an infinite chain.
pub fn ws_listen_cmd(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @rabbita.attempt(
    fn(result) {
      match result {
        Ok(_) => {
          js_log("WS message -> dispatching WsRefresh")
          dispatch(WsRefresh)
        }
        Err(_) => {
          js_log("WS listen error -> dispatching WsRefresh anyway")
          dispatch(WsRefresh)
        }
      }
    },
    async fn() {
      @js.suspend(fn(resolve, reject) {
        wait_for_ws_message(resolve, reject)
      })
    },
  )
}

///|
/// Initialize: set up the global WebSocket connection.
pub fn init_sync(_dispatch : @rabbita.Dispatch[Msg]) -> Unit {
  setup_ws_connection()
}
