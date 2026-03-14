///|
fn nd(_msg : Msg) -> @rabbita.Cmd {
  @rabbita.none
}

///|
fn im() -> Model {
  initial_model()
}

// ── Stopwatch ────────────────────────────────────────────────────────

///|
test "StopwatchToggle starts and stops" {
  let (m1, _) = im().update(msg=StopwatchToggle, dispatch=nd)
  inspect!(m1.stopwatch.running, content="true")
  let (m2, _) = m1.update(msg=StopwatchToggle, dispatch=nd)
  inspect!(m2.stopwatch.running, content="false")
}

///|
test "StopwatchReset clears elapsed" {
  let m0 = { ..im(), stopwatch: { elapsed_ms: 5000, running: true } }
  let (m1, _) = m0.update(msg=StopwatchReset, dispatch=nd)
  inspect!(m1.stopwatch.elapsed_ms, content="0")
  inspect!(m1.stopwatch.running, content="false")
}

///|
test "StopwatchTick increments when running" {
  let m0 = { ..im(), stopwatch: { elapsed_ms: 100, running: true } }
  let (m1, _) = m0.update(msg=StopwatchTick, dispatch=nd)
  inspect!(m1.stopwatch.elapsed_ms, content="200")
}

///|
test "StopwatchTick does nothing when stopped" {
  let m0 = { ..im(), stopwatch: { elapsed_ms: 100, running: false } }
  let (m1, _) = m0.update(msg=StopwatchTick, dispatch=nd)
  inspect!(m1.stopwatch.elapsed_ms, content="100")
}

// ── Countdown ────────────────────────────────────────────────────────

///|
test "CountdownSet clamps value" {
  let (m1, _) = im().update(msg=CountdownSet("45"), dispatch=nd)
  inspect!(m1.countdown.target_seconds, content="45")
  inspect!(m1.countdown.remaining, content="45")
  let (m2, _) = im().update(msg=CountdownSet("9999"), dispatch=nd)
  inspect!(m2.countdown.target_seconds, content="3600")
}

///|
test "CountdownTick decrements and finishes at zero" {
  let m0 = { ..im(), countdown: { target_seconds: 5, remaining: 1, running: true, finished: false } }
  let (m1, _) = m0.update(msg=CountdownTick, dispatch=nd)
  inspect!(m1.countdown.remaining, content="0")
  inspect!(m1.countdown.finished, content="true")
  inspect!(m1.countdown.running, content="false")
}

///|
test "CountdownReset restores target" {
  let m0 = { ..im(), countdown: { target_seconds: 30, remaining: 5, running: true, finished: false } }
  let (m1, _) = m0.update(msg=CountdownReset, dispatch=nd)
  inspect!(m1.countdown.remaining, content="30")
  inspect!(m1.countdown.running, content="false")
}

// ── Typewriter ───────────────────────────────────────────────────────

///|
test "TypewriterStart resets and starts" {
  let (m1, _) = im().update(msg=TypewriterStart, dispatch=nd)
  inspect!(m1.typewriter.visible_chars, content="0")
  inspect!(m1.typewriter.running, content="true")
}

///|
test "TypewriterTick advances characters" {
  let m0 = { ..im(), typewriter: { full_text: "Hello", visible_chars: 3, running: true } }
  let (m1, _) = m0.update(msg=TypewriterTick, dispatch=nd)
  inspect!(m1.typewriter.visible_chars, content="4")
}

///|
test "TypewriterTick stops at end" {
  // visible_chars=2, full_text="Hi" (len=2), next tick: next=3 > 2, stops
  let m0 = { ..im(), typewriter: { full_text: "Hi", visible_chars: 2, running: true } }
  let (m1, _) = m0.update(msg=TypewriterTick, dispatch=nd)
  inspect!(m1.typewriter.visible_chars, content="2")
  inspect!(m1.typewriter.running, content="false")
}

// ── Carousel ─────────────────────────────────────────────────────────

///|
test "CarouselNext wraps around" {
  let m0 = { ..im(), carousel: { items: ["A", "B", "C"], current: 2, auto_playing: false } }
  let (m1, _) = m0.update(msg=CarouselNext, dispatch=nd)
  inspect!(m1.carousel.current, content="0") // wraps
}

///|
test "CarouselPrev wraps around" {
  let m0 = { ..im(), carousel: { items: ["A", "B", "C"], current: 0, auto_playing: false } }
  let (m1, _) = m0.update(msg=CarouselPrev, dispatch=nd)
  inspect!(m1.carousel.current, content="2") // wraps
}

// ── AnimatedCounter ──────────────────────────────────────────────────

///|
test "CounterIncrement increases value" {
  let (m1, _) = im().update(msg=CounterIncrement, dispatch=nd)
  inspect!(m1.animated_counter.value, content="43") // was 42
}

///|
test "CounterAnimTick moves display toward value" {
  let m0 = { ..im(), animated_counter: { value: 50, display_value: 45 } }
  let (m1, _) = m0.update(msg=CounterAnimTick, dispatch=nd)
  inspect!(m1.animated_counter.display_value, content="46")
}

///|
test "CounterAnimTick stops when equal" {
  let m0 = { ..im(), animated_counter: { value: 42, display_value: 42 } }
  let (m1, _) = m0.update(msg=CounterAnimTick, dispatch=nd)
  inspect!(m1.animated_counter.display_value, content="42")
}

// ── StarRating ───────────────────────────────────────────────────────

///|
test "StarClick sets rating" {
  let (m1, _) = im().update(msg=StarClick(4), dispatch=nd)
  inspect!(m1.star_rating.rating, content="4")
}

///|
test "StarHover and StarLeave" {
  let (m1, _) = im().update(msg=StarHover(3), dispatch=nd)
  inspect!(m1.star_rating.hover, content="3")
  let (m2, _) = m1.update(msg=StarLeave, dispatch=nd)
  inspect!(m2.star_rating.hover, content="0")
}

// ── PinInput ─────────────────────────────────────────────────────────

///|
test "PinDigitChanged updates digit and advances focus" {
  let (m1, _) = im().update(msg=PinDigitChanged(0, "1"), dispatch=nd)
  inspect!(m1.pin_input.digits[0], content="1")
  inspect!(m1.pin_input.focus_index, content="1")
}

///|
test "PinDigitChanged verifies correct PIN" {
  let m0 = { ..im(), pin_input: { digits: ["1", "2", "3", ""], focus_index: 3, verified: false } }
  let (m1, _) = m0.update(msg=PinDigitChanged(3, "4"), dispatch=nd)
  inspect!(m1.pin_input.verified, content="true")
}

///|
test "PinClear resets all digits" {
  let m0 = { ..im(), pin_input: { digits: ["1", "2", "3", "4"], focus_index: 3, verified: true } }
  let (m1, _) = m0.update(msg=PinClear, dispatch=nd)
  inspect!(m1.pin_input.digits[0], content="")
  inspect!(m1.pin_input.verified, content="false")
}

// ── PasswordStrength ─────────────────────────────────────────────────

///|
test "PasswordChanged updates password" {
  let (m1, _) = im().update(msg=PasswordChanged("secret"), dispatch=nd)
  inspect!(m1.password_strength.password, content="secret")
}

///|
test "PasswordToggleVisible flips visibility" {
  let (m1, _) = im().update(msg=PasswordToggleVisible, dispatch=nd)
  inspect!(m1.password_strength.visible, content="true")
  let (m2, _) = m1.update(msg=PasswordToggleVisible, dispatch=nd)
  inspect!(m2.password_strength.visible, content="false")
}

// ── TagAutocomplete ──────────────────────────────────────────────────

///|
test "TagAutoAdd adds tag if not duplicate" {
  let (m1, _) = im().update(msg=TagAutoAdd("Rust"), dispatch=nd)
  assert_true!(m1.tag_auto.tags.contains("Rust"))
  // Duplicate should not add
  let (m2, _) = m1.update(msg=TagAutoAdd("Rust"), dispatch=nd)
  let count = m2.tag_auto.tags.filter(fn(s) { s == "Rust" }).length()
  inspect!(count, content="1")
}

///|
test "TagAutoRemove removes tag at index" {
  let (m1, _) = im().update(msg=TagAutoRemove(0), dispatch=nd)
  assert_false!(m1.tag_auto.tags.contains("MoonBit"))
}

///|
test "TagAutoInputChanged shows suggestions" {
  let (m1, _) = im().update(msg=TagAutoInputChanged("py"), dispatch=nd)
  inspect!(m1.tag_auto.show_suggestions, content="true")
}

// ── InlineEdit ───────────────────────────────────────────────────────

///|
test "InlineStartEdit activates editing" {
  let (m1, _) = im().update(msg=InlineStartEdit(0), dispatch=nd)
  inspect!(m1.inline_edit.items[0].1, content="true")
  // Others should be false
  inspect!(m1.inline_edit.items[1].1, content="false")
}

///|
test "InlineSaveEdit saves new value" {
  let (m1, _) = im().update(msg=InlineStartEdit(0), dispatch=nd)
  let (m2, _) = m1.update(msg=InlineEditChanged("New text"), dispatch=nd)
  let (m3, _) = m2.update(msg=InlineSaveEdit(0), dispatch=nd)
  inspect!(m3.inline_edit.items[0].0, content="New text")
  inspect!(m3.inline_edit.items[0].1, content="false")
}

///|
test "InlineCancelEdit reverts" {
  let (m1, _) = im().update(msg=InlineStartEdit(0), dispatch=nd)
  let (m2, _) = m1.update(msg=InlineEditChanged("Changed"), dispatch=nd)
  let (m3, _) = m2.update(msg=InlineCancelEdit(0), dispatch=nd)
  // Original text preserved
  inspect!(m3.inline_edit.items[0].0, content="Click to edit this text")
  inspect!(m3.inline_edit.items[0].1, content="false")
}

// ── Stepper ──────────────────────────────────────────────────────────

///|
test "StepperIncrement respects max" {
  let m0 = { ..im(), stepper: { value: 19, min: 0, max: 20, step: 1 } }
  let (m1, _) = m0.update(msg=StepperIncrement, dispatch=nd)
  inspect!(m1.stepper.value, content="20")
  let (m2, _) = m1.update(msg=StepperIncrement, dispatch=nd)
  inspect!(m2.stepper.value, content="20") // clamped
}

///|
test "StepperDecrement respects min" {
  let m0 = { ..im(), stepper: { value: 1, min: 0, max: 20, step: 1 } }
  let (m1, _) = m0.update(msg=StepperDecrement, dispatch=nd)
  inspect!(m1.stepper.value, content="0")
  let (m2, _) = m1.update(msg=StepperDecrement, dispatch=nd)
  inspect!(m2.stepper.value, content="0") // clamped
}

// ── SplitPane ────────────────────────────────────────────────────────

///|
test "SplitPaneResize clamps to 10-90" {
  let (m1, _) = im().update(msg=SplitPaneResize("75"), dispatch=nd)
  inspect!(m1.split_pane.left_percent, content="75")
  let (m2, _) = im().update(msg=SplitPaneResize("5"), dispatch=nd)
  inspect!(m2.split_pane.left_percent, content="10")
  let (m3, _) = im().update(msg=SplitPaneResize("95"), dispatch=nd)
  inspect!(m3.split_pane.left_percent, content="90")
}

// ── VirtualList ──────────────────────────────────────────────────────

///|
test "VirtualScroll updates scroll position" {
  let (m1, _) = im().update(msg=VirtualScroll("500"), dispatch=nd)
  inspect!(m1.virtual_list.scroll_top, content="500")
}

// ── ConfirmButton ────────────────────────────────────────────────────

///|
test "ConfirmButton full flow" {
  let (m1, _) = im().update(msg=ConfirmButtonClick, dispatch=nd)
  inspect!(m1.confirm_button.confirming, content="true")
  // Confirm
  let (m2, _) = m1.update(msg=ConfirmButtonConfirm, dispatch=nd)
  inspect!(m2.confirm_button.executed, content="true")
  inspect!(m2.confirm_button.confirming, content="false")
}

///|
test "ConfirmButton cancel" {
  let (m1, _) = im().update(msg=ConfirmButtonClick, dispatch=nd)
  let (m2, _) = m1.update(msg=ConfirmButtonCancel, dispatch=nd)
  inspect!(m2.confirm_button.confirming, content="false")
  inspect!(m2.confirm_button.executed, content="false")
}

// ── CopyToClipboard ──────────────────────────────────────────────────

///|
test "CopyClick sets copied" {
  let (m1, _) = im().update(msg=CopyClick, dispatch=nd)
  inspect!(m1.copy_clipboard.copied, content="true")
}

///|
test "CopyReset clears copied" {
  let m0 = { ..im(), copy_clipboard: { text: "hi", copied: true } }
  let (m1, _) = m0.update(msg=CopyReset, dispatch=nd)
  inspect!(m1.copy_clipboard.copied, content="false")
}

// ── UndoSnackbar ─────────────────────────────────────────────────────

///|
test "UndoRemoveItem removes and shows snackbar" {
  let (m1, _) = im().update(msg=UndoRemoveItem(1), dispatch=nd)
  inspect!(m1.undo_snackbar.items.length(), content="3") // was 4
  inspect!(m1.undo_snackbar.last_removed, content="Item Beta")
  inspect!(m1.undo_snackbar.visible, content="true")
}

///|
test "UndoUndo restores item" {
  let (m1, _) = im().update(msg=UndoRemoveItem(1), dispatch=nd)
  let (m2, _) = m1.update(msg=UndoUndo, dispatch=nd)
  inspect!(m2.undo_snackbar.items.length(), content="4") // restored
  inspect!(m2.undo_snackbar.visible, content="false")
  inspect!(m2.undo_snackbar.items[1], content="Item Beta") // back at original position
}

// ── Markdown ─────────────────────────────────────────────────────────

///|
test "MarkdownChanged updates source" {
  let (m1, _) = im().update(msg=MarkdownChanged("# Title"), dispatch=nd)
  inspect!(m1.markdown.source, content="# Title")
}

// ── Spreadsheet ──────────────────────────────────────────────────────

///|
test "SpreadsheetSelectCell updates selection" {
  let (m1, _) = im().update(msg=SpreadsheetSelectCell(1, 2), dispatch=nd)
  inspect!(m1.spreadsheet.selected_row, content="1")
  inspect!(m1.spreadsheet.selected_col, content="2")
}

///|
test "SpreadsheetStartEdit enters edit mode" {
  let (m1, _) = im().update(msg=SpreadsheetSelectCell(1, 0), dispatch=nd)
  let (m2, _) = m1.update(msg=SpreadsheetStartEdit, dispatch=nd)
  inspect!(m2.spreadsheet.editing, content="true")
  inspect!(m2.spreadsheet.edit_value, content="Alice")
}

///|
test "SpreadsheetSaveEdit saves to cell" {
  let (m1, _) = im().update(msg=SpreadsheetSelectCell(1, 1), dispatch=nd)
  let (m2, _) = m1.update(msg=SpreadsheetStartEdit, dispatch=nd)
  let (m3, _) = m2.update(msg=SpreadsheetEditChanged("99"), dispatch=nd)
  let (m4, _) = m3.update(msg=SpreadsheetSaveEdit, dispatch=nd)
  inspect!(m4.spreadsheet.cells[1][1].value, content="99")
  inspect!(m4.spreadsheet.editing, content="false")
}

// ── DragSort ─────────────────────────────────────────────────────────

///|
test "DragSortMoveUp swaps with previous" {
  let (m1, _) = im().update(msg=DragSortMoveUp(2), dispatch=nd)
  inspect!(m1.drag_sort.items[1], content="Third item")
  inspect!(m1.drag_sort.items[2], content="Second item")
}

///|
test "DragSortMoveDown swaps with next" {
  let (m1, _) = im().update(msg=DragSortMoveDown(0), dispatch=nd)
  inspect!(m1.drag_sort.items[0], content="Second item")
  inspect!(m1.drag_sort.items[1], content="First item")
}

///|
test "DragSortMoveUp at 0 is no-op" {
  let (m1, _) = im().update(msg=DragSortMoveUp(0), dispatch=nd)
  inspect!(m1.drag_sort.items[0], content="First item")
}

///|
test "DragSortMoveDown at last is no-op" {
  let (m1, _) = im().update(msg=DragSortMoveDown(4), dispatch=nd)
  inspect!(m1.drag_sort.items[4], content="Fifth item")
}
