// Explicit forms of trait-method promotions (implicit_impl_as_method):
// keeps the same methods available as before.

///|
pub extend Align with @json.FromJson::{from_json}

///|
pub extend Align with ToJson::{to_json}

///|
pub extend Cell with @json.FromJson::{from_json}

///|
pub extend Cell with ToJson::{to_json}

///|
pub extend NumFormat with @json.FromJson::{from_json}

///|
pub extend NumFormat with ToJson::{to_json}

///|
pub extend Value with @debug.Debug::{to_repr}

///|
pub extend Value with @json.FromJson::{from_json}

///|
pub extend Value with Eq::{not_equal, equal}

///|
pub extend Value with Show::{to_string, output}

///|
pub extend Value with ToJson::{to_json}
