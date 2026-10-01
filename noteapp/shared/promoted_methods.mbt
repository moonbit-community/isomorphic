// Explicit forms of trait-method promotions (implicit_impl_as_method):
// keeps the same methods available as before.

///|
pub extend Note with @debug.Debug::{to_repr}

///|
pub extend Note with @json.FromJson::{from_json}

///|
pub extend Note with ToJson::{to_json}

///|
pub extend NoteStats with @debug.Debug::{to_repr}

///|
pub extend NoteStats with @json.FromJson::{from_json}

///|
pub extend NoteStats with ToJson::{to_json}
