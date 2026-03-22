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
/// Save workbook data to the backend (fire-and-forget).
#warnings("-unresolved_type_variable")
fn save_workbook(
  dispatch : @rabbita.Dispatch[Msg],
  sheets : Array[@sheet.Sheet],
) -> @rabbita.Cmd {
  // Save sheets as a plain JSON array (no wrapper object)
  @http.post(
    api_save,
    Json(sheets.to_json()),
    expect=Text(fn(_result) { dispatch(SavedToBackend) }),
  )
}

///|
/// Connect a WebSocket to the backend for real-time refresh notifications.
/// When a "refresh" message is received, dispatches LoadFromBackend.
extern "js" fn connect_ws(on_message : (String) -> Unit) -> Unit =
  #|(function(on_message) {
  #|  function doConnect() {
  #|    try {
  #|      var protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  #|      var ws = new WebSocket(protocol + '//' + window.location.host + '/ws');
  #|      ws.onmessage = function(event) { on_message(event.data); };
  #|      ws.onclose = function() {
  #|        setTimeout(doConnect, 2000);
  #|      };
  #|      ws.onerror = function() { ws.close(); };
  #|    } catch(e) {
  #|      setTimeout(doConnect, 2000);
  #|    }
  #|  }
  #|  doConnect();
  #|})

///|
/// Initialize WebSocket connection for real-time collaboration.
/// Dispatches LoadFromBackend when a refresh notification arrives.
pub fn init_ws(dispatch : @rabbita.Dispatch[Msg]) -> Unit {
  connect_ws(fn(data) {
    // Parse the message — if it contains "refresh", reload data
    if data.contains("refresh") {
      ignore(dispatch(LoadFromBackend))
    }
  })
}
