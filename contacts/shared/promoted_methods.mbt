// Explicit forms of trait-method promotions (implicit_impl_as_method):
// keeps the same methods available as before.

///|
pub extend Contact with @debug.Debug::{to_repr}

///|
pub extend Contact with @json.FromJson::{from_json}

///|
pub extend Contact with ToJson::{to_json}
