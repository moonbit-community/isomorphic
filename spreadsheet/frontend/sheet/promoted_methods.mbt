// Explicit forms of trait-method promotions (implicit_impl_as_method):
// keeps the same methods available as before.

///|
pub extend Sheet with @json.FromJson::{from_json}

///|
pub extend Sheet with ToJson::{to_json}
