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
  @http.post(
    api_save,
    Json({"sheets": sheets.to_json()}),
    expect=Text(fn(_result) { dispatch(SavedToBackend) }),
  )
}
