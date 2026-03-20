///|
/// Pattern 1: Independent Cells
///
/// Each counter is its own `Cell` with its own TEA loop.
/// They share NO state — clicking one never affects the other.
///
/// This is the simplest composition: create multiple cells and
/// render them side by side with `.view()`.
///
/// ```
///   Cell A (Model, Msg, update, view)
///   Cell B (Model, Msg, update, view)
///         ↓           ↓
///   [  A.view()  |  B.view()  ]   ← just HTML side by side
/// ```
pub fn make() -> (@rabbita.Cell, @rabbita.Cell) {
  let cell_a = @rabbita.simple_cell(
    model=@counter.initial(),
    update=fn(msg, model) { @counter.update(msg, model) },
    view=fn(dispatch, model) {
      @counter.view(dispatch, model, label="Counter A")
    },
  )
  let cell_b = @rabbita.simple_cell(
    model=@counter.initial(),
    update=fn(msg, model) { @counter.update(msg, model) },
    view=fn(dispatch, model) {
      @counter.view(dispatch, model, label="Counter B")
    },
  )
  (cell_a, cell_b)
}
