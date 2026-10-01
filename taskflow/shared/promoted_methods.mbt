// Explicit forms of trait-method promotions (implicit_impl_as_method):
// keeps the same methods available as before.

///|
pub extend Activity with @debug.Debug::{to_repr}

///|
pub extend Activity with @json.FromJson::{from_json}

///|
pub extend Activity with Eq::{not_equal, equal}

///|
pub extend Activity with ToJson::{to_json}

///|
pub extend Attachment with @debug.Debug::{to_repr}

///|
pub extend Attachment with @json.FromJson::{from_json}

///|
pub extend Attachment with Eq::{not_equal, equal}

///|
pub extend Attachment with ToJson::{to_json}

///|
pub extend AuthResponse with @debug.Debug::{to_repr}

///|
pub extend AuthResponse with @json.FromJson::{from_json}

///|
pub extend AuthResponse with Eq::{not_equal, equal}

///|
pub extend AuthResponse with ToJson::{to_json}

///|
pub extend Board with @debug.Debug::{to_repr}

///|
pub extend Board with @json.FromJson::{from_json}

///|
pub extend Board with Eq::{not_equal, equal}

///|
pub extend Board with ToJson::{to_json}

///|
pub extend Comment with @debug.Debug::{to_repr}

///|
pub extend Comment with @json.FromJson::{from_json}

///|
pub extend Comment with Eq::{not_equal, equal}

///|
pub extend Comment with ToJson::{to_json}

///|
pub extend Dependency with @debug.Debug::{to_repr}

///|
pub extend Dependency with @json.FromJson::{from_json}

///|
pub extend Dependency with Eq::{not_equal, equal}

///|
pub extend Dependency with ToJson::{to_json}

///|
pub extend Label with @debug.Debug::{to_repr}

///|
pub extend Label with @json.FromJson::{from_json}

///|
pub extend Label with Eq::{not_equal, equal}

///|
pub extend Label with ToJson::{to_json}

///|
pub extend Lang with @debug.Debug::{to_repr}

///|
pub extend Lang with @json.FromJson::{from_json}

///|
pub extend Lang with Eq::{not_equal, equal}

///|
pub extend Lang with Show::{to_string, output}

///|
pub extend Lang with ToJson::{to_json}

///|
pub extend Member with @debug.Debug::{to_repr}

///|
pub extend Member with @json.FromJson::{from_json}

///|
pub extend Member with Eq::{not_equal, equal}

///|
pub extend Member with ToJson::{to_json}

///|
pub extend Project with @debug.Debug::{to_repr}

///|
pub extend Project with @json.FromJson::{from_json}

///|
pub extend Project with Eq::{not_equal, equal}

///|
pub extend Project with ToJson::{to_json}

///|
pub extend RecurrenceRule with @debug.Debug::{to_repr}

///|
pub extend RecurrenceRule with @json.FromJson::{from_json}

///|
pub extend RecurrenceRule with Eq::{not_equal, equal}

///|
pub extend RecurrenceRule with ToJson::{to_json}

///|
pub extend Subtask with @debug.Debug::{to_repr}

///|
pub extend Subtask with @json.FromJson::{from_json}

///|
pub extend Subtask with Eq::{not_equal, equal}

///|
pub extend Subtask with ToJson::{to_json}

///|
pub extend Task with @debug.Debug::{to_repr}

///|
pub extend Task with @json.FromJson::{from_json}

///|
pub extend Task with Eq::{not_equal, equal}

///|
pub extend Task with Show::{to_string, output}

///|
pub extend Task with ToJson::{to_json}

///|
pub extend TaskLabel with @debug.Debug::{to_repr}

///|
pub extend TaskLabel with @json.FromJson::{from_json}

///|
pub extend TaskLabel with Eq::{not_equal, equal}

///|
pub extend TaskLabel with ToJson::{to_json}

///|
pub extend TaskProject with @debug.Debug::{to_repr}

///|
pub extend TaskProject with @json.FromJson::{from_json}

///|
pub extend TaskProject with Eq::{not_equal, equal}

///|
pub extend TaskProject with ToJson::{to_json}

///|
pub extend TimeEntry with @debug.Debug::{to_repr}

///|
pub extend TimeEntry with @json.FromJson::{from_json}

///|
pub extend TimeEntry with Eq::{not_equal, equal}

///|
pub extend TimeEntry with ToJson::{to_json}

///|
pub extend User with @debug.Debug::{to_repr}

///|
pub extend User with @json.FromJson::{from_json}

///|
pub extend User with Eq::{not_equal, equal}

///|
pub extend User with Show::{to_string, output}

///|
pub extend User with ToJson::{to_json}
