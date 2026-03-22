///|
/// Import/Export Excel (.xlsx) files — thin adapter layer.
///
/// The core xlsx parsing/writing logic lives in `@xlsx_io`
/// (`spreadsheet/frontend/xlsx`). This file provides the browser-specific
/// glue: JS FFI for file picking / downloading, and the Rabbita command /
/// Model integration.

///|
/// JavaScript FFI: opens a native file picker dialog restricted to `.xlsx`/`.xls`
/// files, reads the selected file into memory as a `Uint8Array` (mapped to
/// MoonBit `Bytes` on the JS target), and invokes `on_success` with the bytes.
/// If no file is selected or reading fails, `on_error` is called with a message.
extern "js" fn pick_xlsx_file(
  on_success : (Bytes) -> Unit,
  on_error : (String) -> Unit,
) =
  #| (s, e) => {
  #|   const input = document.createElement('input');
  #|   input.type = 'file';
  #|   input.accept = '.xlsx,.xls';
  #|   input.onchange = (ev) => {
  #|     const file = ev.target.files[0];
  #|     if (!file) { e('No file selected'); return; }
  #|     const reader = new FileReader();
  #|     reader.onload = () => s(new Uint8Array(reader.result));
  #|     reader.onerror = () => e('Failed to read file');
  #|     reader.readAsArrayBuffer(file);
  #|   };
  #|   input.click();
  #| }

///|
/// Create a Rabbita side-effect command that opens a file picker dialog.
///
/// When the user selects a file and it is successfully read, the command
/// dispatches `ImportExcel(bytes)` back into the update loop. Errors from
/// the file picker are silently ignored (the model stays unchanged).
fn import_xlsx_cmd(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @rabbita.attempt(
    fn(result) {
      match result {
        Ok(bytes) => dispatch(ImportExcel(bytes))
        Err(_) => @rabbita.none
      }
    },
    async fn() {
      @js.suspend(fn(
        resolve : (Bytes) -> Unit,
        _reject : (@js.Error_) -> Unit,
      ) {
        pick_xlsx_file(resolve, fn(_err) {  })
      })
    },
  )
}

///|
/// Parse an XLSX file from raw bytes and replace the entire model with the
/// imported workbook.
///
/// Delegates to `@xlsx_io.load_sheets` for the actual parsing, then wraps
/// the result in a new Model. If parsing fails (empty result), the original
/// model is returned unchanged.
fn load_xlsx(model : Model, bytes : Bytes) -> Model {
  let sheets = @xlsx_io.load_sheets(bytes)
  if sheets.is_empty() {
    return model
  }
  {
    sheets,
    active_sheet: 0,
    sel_col: 0,
    sel_row: 0,
    editing: false,
    edit_value: "",
    show_chart: true,
    heat_map: false,
  }
}

// --- Export ---

///|
/// JavaScript FFI: trigger a file download in the browser by creating a
/// temporary Blob URL, programmatically clicking an `<a>` element, and
/// revoking the URL immediately after. The MIME type is set to the standard
/// OpenXML spreadsheet type.
extern "js" fn download_bytes(bytes : Bytes, filename : String) =
  #| (bytes, filename) => {
  #|   const blob = new Blob([bytes], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  #|   const url = URL.createObjectURL(blob);
  #|   const a = document.createElement('a');
  #|   a.href = url;
  #|   a.download = filename;
  #|   a.click();
  #|   URL.revokeObjectURL(url);
  #| }

///|
/// Export the current spreadsheet model as an `.xlsx` file download.
///
/// Delegates to `@xlsx_io.write_sheets` for building the workbook bytes,
/// then triggers a browser download named `"spreadsheet.xlsx"`.
fn export_xlsx(model : Model) -> Unit {
  match @xlsx_io.write_sheets(model.sheets, "spreadsheet.xlsx") {
    Some(bytes) => download_bytes(bytes, "spreadsheet.xlsx")
    None => ()
  }
}
