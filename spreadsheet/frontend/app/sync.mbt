///|
/// API endpoint for loading workbook data from the backend.
let api_load : String = "/api/load"

///|
/// API endpoint for saving workbook data to the backend.
let api_save : String = "/api/save"

///|
extern "js" fn js_log(msg : String) -> Unit =
  #|(msg) => { console.log('[spreadsheet]', msg); }

///|
/// JS FFI: GET text from a URL as a JS Promise (for use with @js.suspend).
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
/// JS FFI: POST JSON data to a URL.
extern "js" fn js_fetch_post(url : String, json_str : String, on_done : () -> Unit) -> Unit =
  #|(url, json, done) => {
  #|  fetch(url, {
  #|    method: 'POST',
  #|    headers: { 'Content-Type': 'application/json' },
  #|    body: json
  #|  }).then(() => done()).catch(e => { console.error('save failed:', e); done(); });
  #|}

///|
/// Fetch workbook from backend using @rabbita.attempt + @js.suspend.
/// This properly enqueues the result back into Rabbita's event loop.
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
                js_log("PARSE ERROR: \{e}")
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

///|
/// Save workbook data to the backend (fire-and-forget side effect).
fn save_workbook(
  dispatch : @rabbita.Dispatch[Msg],
  sheets : Array[@sheet.Sheet],
) -> @rabbita.Cmd {
  let json_str = sheets.to_json().stringify()
  js_log("save: \{json_str.length()} chars")
  js_fetch_post(api_save, json_str, fn() {
    ignore(dispatch(SavedToBackend))
  })
  @rabbita.none
}

///|
/// Auto-save helper: call after any model change that should persist.
fn auto_save(dispatch : @rabbita.Dispatch[Msg], model : Model) -> Unit {
  ignore(save_workbook(dispatch, model.sheets))
}

///|
/// Set up real-time sync: WebSocket + polling fallback.
/// Both channels call fetch_workbook_direct to reload data.
extern "js" fn setup_realtime(on_refresh : () -> Unit) -> Unit =
  #|(function(on_refresh) {
  #|  var lastHash = '';
  #|
  #|  // WebSocket
  #|  function connectWS() {
  #|    try {
  #|      var protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  #|      var ws = new WebSocket(protocol + '//' + window.location.host + '/ws');
  #|      ws.onopen = function() { console.log('[ws] connected'); };
  #|      ws.onmessage = function(event) {
  #|        console.log('[ws] refresh');
  #|        on_refresh();
  #|      };
  #|      ws.onclose = function() { setTimeout(connectWS, 2000); };
  #|      ws.onerror = function() { ws.close(); };
  #|    } catch(e) { setTimeout(connectWS, 2000); }
  #|  }
  #|  connectWS();
  #|
  #|  // Polling fallback every 3s
  #|  setInterval(function() {
  #|    fetch('/api/load').then(r => r.text()).then(function(text) {
  #|      var hash = text.length + ':' + text.slice(0, 100);
  #|      if (lastHash && hash !== lastHash) {
  #|        console.log('[poll] changed');
  #|        on_refresh();
  #|      }
  #|      lastHash = hash;
  #|    }).catch(function() {});
  #|  }, 3000);
  #|})

///|
/// Initialize real-time sync.
/// WS and polling trigger LoadFromBackend which uses @rabbita.attempt
/// to properly enqueue the fetch result back into Rabbita's event loop.
pub fn init_sync(dispatch : @rabbita.Dispatch[Msg]) -> Unit {
  setup_realtime(fn() {
    js_log("realtime trigger -> LoadFromBackend")
    ignore(dispatch(LoadFromBackend))
  })
}
