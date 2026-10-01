// Explicit forms of trait-method promotions (implicit_impl_as_method):
// keeps the same methods available as before.

///|
pub extend Account with @debug.Debug::{to_repr}

///|
pub extend Account with @json.FromJson::{from_json}

///|
pub extend Account with ToJson::{to_json}

///|
pub extend AccountBalance with @debug.Debug::{to_repr}

///|
pub extend AccountBalance with @json.FromJson::{from_json}

///|
pub extend AccountBalance with ToJson::{to_json}

///|
pub extend AccountType with @debug.Debug::{to_repr}

///|
pub extend AccountType with @json.FromJson::{from_json}

///|
pub extend AccountType with Eq::{not_equal, equal}

///|
pub extend AccountType with ToJson::{to_json}

///|
pub extend Budget with @debug.Debug::{to_repr}

///|
pub extend Budget with @json.FromJson::{from_json}

///|
pub extend Budget with ToJson::{to_json}

///|
pub extend BudgetStatus with @debug.Debug::{to_repr}

///|
pub extend BudgetStatus with @json.FromJson::{from_json}

///|
pub extend BudgetStatus with ToJson::{to_json}

///|
pub extend Category with @debug.Debug::{to_repr}

///|
pub extend Category with @json.FromJson::{from_json}

///|
pub extend Category with ToJson::{to_json}

///|
pub extend DashboardData with @debug.Debug::{to_repr}

///|
pub extend DashboardData with @json.FromJson::{from_json}

///|
pub extend DashboardData with ToJson::{to_json}

///|
pub extend MonthSummary with @debug.Debug::{to_repr}

///|
pub extend MonthSummary with @json.FromJson::{from_json}

///|
pub extend MonthSummary with ToJson::{to_json}

///|
pub extend Transaction with @debug.Debug::{to_repr}

///|
pub extend Transaction with @json.FromJson::{from_json}

///|
pub extend Transaction with ToJson::{to_json}

///|
pub extend TransactionType with @debug.Debug::{to_repr}

///|
pub extend TransactionType with @json.FromJson::{from_json}

///|
pub extend TransactionType with Eq::{not_equal, equal}

///|
pub extend TransactionType with ToJson::{to_json}
