// Explicit forms of trait-method promotions (implicit_impl_as_method):
// keeps the same methods available as before.

///|
pub extend Todo with @debug.Debug::{to_repr}

///|
pub extend Todo with @json.FromJson::{from_json}

///|
pub extend Todo with ToJson::{to_json}
