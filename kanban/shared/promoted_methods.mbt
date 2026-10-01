// Explicit forms of trait-method promotions (implicit_impl_as_method):
// keeps the same methods available as before.

///|
pub extend Board with @debug.Debug::{to_repr}

///|
pub extend Board with @json.FromJson::{from_json}

///|
pub extend Board with Eq::{not_equal, equal}

///|
pub extend Board with Show::{to_string, output}

///|
pub extend Board with ToJson::{to_json}

///|
pub extend Card with @debug.Debug::{to_repr}

///|
pub extend Card with @json.FromJson::{from_json}

///|
pub extend Card with Eq::{not_equal, equal}

///|
pub extend Card with Show::{to_string, output}

///|
pub extend Card with ToJson::{to_json}

///|
pub extend Column with @debug.Debug::{to_repr}

///|
pub extend Column with @json.FromJson::{from_json}

///|
pub extend Column with Eq::{not_equal, equal}

///|
pub extend Column with Show::{to_string, output}

///|
pub extend Column with ToJson::{to_json}

///|
pub extend MoveCardRequest with @debug.Debug::{to_repr}

///|
pub extend MoveCardRequest with @json.FromJson::{from_json}

///|
pub extend MoveCardRequest with Eq::{not_equal, equal}

///|
pub extend MoveCardRequest with ToJson::{to_json}
