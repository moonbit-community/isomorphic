// Explicit forms of trait-method promotions (implicit_impl_as_method):
// keeps the same methods available as before.

///|
pub extend Connection with @debug.Debug::{to_repr}

///|
pub extend Connection with @json.FromJson::{from_json}

///|
pub extend Connection with Eq::{not_equal, equal}

///|
pub extend Connection with ToJson::{to_json}

///|
pub extend EvalResult with @debug.Debug::{to_repr}

///|
pub extend EvalResult with @json.FromJson::{from_json}

///|
pub extend EvalResult with ToJson::{to_json}

///|
pub extend Graph with @debug.Debug::{to_repr}

///|
pub extend Graph with @json.FromJson::{from_json}

///|
pub extend Graph with ToJson::{to_json}

///|
pub extend Node with @debug.Debug::{to_repr}

///|
pub extend Node with @json.FromJson::{from_json}

///|
pub extend Node with Eq::{not_equal, equal}

///|
pub extend Node with ToJson::{to_json}

///|
pub extend NodeKind with @debug.Debug::{to_repr}

///|
pub extend NodeKind with @json.FromJson::{from_json}

///|
pub extend NodeKind with Eq::{not_equal, equal}

///|
pub extend NodeKind with ToJson::{to_json}

///|
pub extend PortDef with @debug.Debug::{to_repr}

///|
pub extend PortDef with @json.FromJson::{from_json}

///|
pub extend PortDef with Eq::{not_equal, equal}

///|
pub extend PortDef with ToJson::{to_json}

///|
pub extend PortType with @debug.Debug::{to_repr}

///|
pub extend PortType with @json.FromJson::{from_json}

///|
pub extend PortType with Eq::{not_equal, equal}

///|
pub extend PortType with ToJson::{to_json}

///|
pub extend SavedGraph with @debug.Debug::{to_repr}

///|
pub extend SavedGraph with @json.FromJson::{from_json}

///|
pub extend SavedGraph with ToJson::{to_json}

///|
pub extend Value with @debug.Debug::{to_repr}

///|
pub extend Value with @json.FromJson::{from_json}

///|
pub extend Value with Eq::{not_equal, equal}

///|
pub extend Value with ToJson::{to_json}
