// Explicit forms of trait-method promotions (implicit_impl_as_method):
// keeps the same methods available as before.

///|
pub extend Poll with @debug.Debug::{to_repr}

///|
pub extend Poll with @json.FromJson::{from_json}

///|
pub extend Poll with ToJson::{to_json}

///|
pub extend PollOption with @debug.Debug::{to_repr}

///|
pub extend PollOption with @json.FromJson::{from_json}

///|
pub extend PollOption with ToJson::{to_json}

///|
pub extend PollResults with @debug.Debug::{to_repr}

///|
pub extend PollResults with @json.FromJson::{from_json}

///|
pub extend PollResults with ToJson::{to_json}
