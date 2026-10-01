// Explicit forms of trait-method promotions (implicit_impl_as_method):
// keeps the same methods available as before.

///|
pub extend AppState with @debug.Debug::{to_repr}

///|
pub extend AppState with @json.FromJson::{from_json}

///|
pub extend AppState with ToJson::{to_json}

///|
pub extend Expense with @debug.Debug::{to_repr}

///|
pub extend Expense with @json.FromJson::{from_json}

///|
pub extend Expense with ToJson::{to_json}

///|
pub extend Person with @debug.Debug::{to_repr}

///|
pub extend Person with @json.FromJson::{from_json}

///|
pub extend Person with ToJson::{to_json}

///|
pub extend Settlement with @debug.Debug::{to_repr}

///|
pub extend Settlement with @json.FromJson::{from_json}

///|
pub extend Settlement with ToJson::{to_json}
