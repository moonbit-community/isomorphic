// Explicit forms of trait-method promotions (implicit_impl_as_method):
// keeps the same methods available as before.

///|
pub extend Comment with @debug.Debug::{to_repr}

///|
pub extend Comment with @json.FromJson::{from_json}

///|
pub extend Comment with ToJson::{to_json}

///|
pub extend Post with @debug.Debug::{to_repr}

///|
pub extend Post with @json.FromJson::{from_json}

///|
pub extend Post with ToJson::{to_json}
