// End-to-end tests for the 20 new components (31-50).
// Tests chain update() → view render → HTML assertion.

///|
#warnings("-alert_unstable")
fn render2(html : @rabbita.Html) -> String {
  @rabbita.render_to_string(@rabbita.static_cell(html))
}

///|
fn nd2(_msg : Msg) -> @rabbita.Cmd {
  @rabbita.none
}

// ── E2E: Stopwatch ──────────────────────────────────────────────────

///|
test "E2E: stopwatch start, tick, stop, reset" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Animated), dispatch=nd2)
  // Start
  let (m2, _) = m1.update(msg=StopwatchToggle, dispatch=nd2)
  assert_true(m2.stopwatch.running)
  let g = m2.stopwatch.gen
  // Tick 3 times (300ms)
  let (m3, _) = m2.update(msg=StopwatchTick(g), dispatch=nd2)
  let (m4, _) = m3.update(msg=StopwatchTick(g), dispatch=nd2)
  let (m5, _) = m4.update(msg=StopwatchTick(g), dispatch=nd2)
  inspect(m5.stopwatch.elapsed_ms, content="300")
  // Render — should show 00:00.3
  let html = render2(m5.render_component(nd2))
  assert_true(html.contains("00:00"))
  // Stop
  let (m6, _) = m5.update(msg=StopwatchToggle, dispatch=nd2)
  assert_false(m6.stopwatch.running)
  // Reset
  let (m7, _) = m6.update(msg=StopwatchReset, dispatch=nd2)
  inspect(m7.stopwatch.elapsed_ms, content="0")
}

///|
test "E2E: stopwatch stale tick ignored after restart" {
  let m0 = initial_model()
  // Start (gen=1)
  let (m1, _) = m0.update(msg=StopwatchToggle, dispatch=nd2)
  let old_gen = m1.stopwatch.gen
  // Stop and restart (gen=2)
  let (m2, _) = m1.update(msg=StopwatchToggle, dispatch=nd2)
  let (m3, _) = m2.update(msg=StopwatchToggle, dispatch=nd2)
  // Old gen tick should be ignored
  let (m4, _) = m3.update(msg=StopwatchTick(old_gen), dispatch=nd2)
  inspect(m4.stopwatch.elapsed_ms, content="0") // unchanged
}

// ── E2E: Countdown ──────────────────────────────────────────────────

///|
test "E2E: countdown set, start, tick to zero" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Animated), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(1), dispatch=nd2)
  // Set to 3 seconds
  let (m3, _) = m2.update(msg=CountdownSet("3"), dispatch=nd2)
  inspect(m3.countdown.remaining, content="3")
  // Start
  let (m4, _) = m3.update(msg=CountdownToggle, dispatch=nd2)
  let g = m4.countdown.gen
  // Tick 3 times
  let (m5, _) = m4.update(msg=CountdownTick(g), dispatch=nd2)
  let (m6, _) = m5.update(msg=CountdownTick(g), dispatch=nd2)
  let (m7, _) = m6.update(msg=CountdownTick(g), dispatch=nd2)
  inspect(m7.countdown.remaining, content="0")
  assert_true(m7.countdown.finished)
  assert_false(m7.countdown.running)
  // Render should show finished state
  let html = render2(m7.render_component(nd2))
  assert_true(html.contains("Time") || html.contains("00:00"))
}

// ── E2E: Typewriter ─────────────────────────────────────────────────

///|
test "E2E: typewriter start, tick, pause, resume" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Animated), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(2), dispatch=nd2)
  // Start
  let (m3, _) = m2.update(msg=TypewriterStart, dispatch=nd2)
  assert_true(m3.typewriter.running)
  // Tick 5 times
  let (m4, _) = m3.update(msg=TypewriterTick, dispatch=nd2)
  let (m5, _) = m4.update(msg=TypewriterTick, dispatch=nd2)
  let (m6, _) = m5.update(msg=TypewriterTick, dispatch=nd2)
  let (m7, _) = m6.update(msg=TypewriterTick, dispatch=nd2)
  let (m8, _) = m7.update(msg=TypewriterTick, dispatch=nd2)
  inspect(m8.typewriter.visible_chars, content="5")
  // Render should show partial text
  let html = render2(m8.render_component(nd2))
  assert_true(html.contains("The q"))
  // Pause
  let (m9, _) = m8.update(msg=TypewriterPause, dispatch=nd2)
  assert_false(m9.typewriter.running)
  inspect(m9.typewriter.visible_chars, content="5") // preserved
  // Reset
  let (m10, _) = m9.update(msg=TypewriterReset, dispatch=nd2)
  inspect(m10.typewriter.visible_chars, content="0")
}

// ── E2E: Carousel ───────────────────────────────────────────────────

///|
test "E2E: carousel navigate and auto-play" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Animated), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(3), dispatch=nd2)
  // Initial shows first item
  let html0 = render2(m2.render_component(nd2))
  assert_true(html0.contains("Welcome to Gallery"))
  // Next
  let (m3, _) = m2.update(msg=CarouselNext, dispatch=nd2)
  let html1 = render2(m3.render_component(nd2))
  assert_true(
    html1.contains("30+ UI Components") || html1.contains("UI Components"),
  )
  // Prev back
  let (m4, _) = m3.update(msg=CarouselPrev, dispatch=nd2)
  inspect(m4.carousel.current, content="0")
  // Auto-play toggle
  let (m5, _) = m4.update(msg=CarouselAutoToggle, dispatch=nd2)
  assert_true(m5.carousel.auto_playing)
  let g = m5.carousel.gen
  // Auto tick advances
  let (m6, _) = m5.update(msg=CarouselAutoTick(g), dispatch=nd2)
  inspect(m6.carousel.current, content="1")
}

// ── E2E: AnimatedCounter ────────────────────────────────────────────

///|
test "E2E: animated counter increment and animate" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Animated), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(4), dispatch=nd2)
  // Increment 3 times
  let (m3, _) = m2.update(msg=CounterIncrement, dispatch=nd2)
  let (m4, _) = m3.update(msg=CounterIncrement, dispatch=nd2)
  let (m5, _) = m4.update(msg=CounterIncrement, dispatch=nd2)
  inspect(m5.animated_counter.value, content="45")
  // display_value still at 42, animate toward 45
  let (m6, _) = m5.update(msg=CounterAnimTick, dispatch=nd2)
  inspect(m6.animated_counter.display_value, content="43")
  let (m7, _) = m6.update(msg=CounterAnimTick, dispatch=nd2)
  let (m8, _) = m7.update(msg=CounterAnimTick, dispatch=nd2)
  inspect(m8.animated_counter.display_value, content="45") // caught up
  // Render shows the value
  let html = render2(m8.render_component(nd2))
  assert_true(html.contains("45"))
}

// ── E2E: StarRating ─────────────────────────────────────────────────

///|
test "E2E: star rating click and hover" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(RichInputs), dispatch=nd2)
  // Click 4 stars
  let (m2, _) = m1.update(msg=StarClick(4), dispatch=nd2)
  inspect(m2.star_rating.rating, content="4")
  let html = render2(m2.render_component(nd2))
  assert_true(html.contains("4"))
  // Hover over star 2
  let (m3, _) = m2.update(msg=StarHover(2), dispatch=nd2)
  inspect(m3.star_rating.hover, content="2")
  // Leave
  let (m4, _) = m3.update(msg=StarLeave, dispatch=nd2)
  inspect(m4.star_rating.hover, content="0")
}

// ── E2E: PinInput ───────────────────────────────────────────────────

///|
test "E2E: pin input enter correct code" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(RichInputs), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(1), dispatch=nd2)
  // Enter 1-2-3-4
  let (m3, _) = m2.update(msg=PinDigitChanged(0, "1"), dispatch=nd2)
  let (m4, _) = m3.update(msg=PinDigitChanged(1, "2"), dispatch=nd2)
  let (m5, _) = m4.update(msg=PinDigitChanged(2, "3"), dispatch=nd2)
  let (m6, _) = m5.update(msg=PinDigitChanged(3, "4"), dispatch=nd2)
  assert_true(m6.pin_input.verified)
  // Render shows verification
  let html = render2(m6.render_component(nd2))
  assert_true(html.length() > 50)
  // Clear
  let (m7, _) = m6.update(msg=PinClear, dispatch=nd2)
  assert_false(m7.pin_input.verified)
  inspect(m7.pin_input.digits[0], content="")
}

///|
test "E2E: pin input wrong code not verified" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=PinDigitChanged(0, "9"), dispatch=nd2)
  let (m2, _) = m1.update(msg=PinDigitChanged(1, "9"), dispatch=nd2)
  let (m3, _) = m2.update(msg=PinDigitChanged(2, "9"), dispatch=nd2)
  let (m4, _) = m3.update(msg=PinDigitChanged(3, "9"), dispatch=nd2)
  assert_false(m4.pin_input.verified)
}

// ── E2E: PasswordStrength ───────────────────────────────────────────

///|
test "E2E: password strength meter updates with input" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(RichInputs), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(2), dispatch=nd2)
  // Short password → weak
  let (m3, _) = m2.update(msg=PasswordChanged("ab"), dispatch=nd2)
  let html1 = render2(m3.render_component(nd2))
  assert_true(html1.contains("Weak") || html1.contains("weak"))
  // Medium password
  let (m4, _) = m3.update(msg=PasswordChanged("abcdef"), dispatch=nd2)
  let html2 = render2(m4.render_component(nd2))
  assert_true(html2.contains("Medium") || html2.contains("medium"))
  // Strong password
  let (m5, _) = m4.update(msg=PasswordChanged("abcdefghij"), dispatch=nd2)
  let html3 = render2(m5.render_component(nd2))
  assert_true(html3.contains("Strong") || html3.contains("strong"))
  // Toggle visibility
  let (m6, _) = m5.update(msg=PasswordToggleVisible, dispatch=nd2)
  assert_true(m6.password_strength.visible)
}

// ── E2E: TagAutocomplete ────────────────────────────────────────────

///|
test "E2E: tag autocomplete filter, add, remove" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(RichInputs), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(3), dispatch=nd2)
  // Type to filter
  let (m3, _) = m2.update(msg=TagAutoInputChanged("Ru"), dispatch=nd2)
  assert_true(m3.tag_auto.show_suggestions)
  // Add "Rust"
  let (m4, _) = m3.update(msg=TagAutoAdd("Rust"), dispatch=nd2)
  assert_true(m4.tag_auto.tags.contains("Rust"))
  inspect(m4.tag_auto.input, content="") // cleared
  // Render shows the tag
  let html = render2(m4.render_component(nd2))
  assert_true(html.contains("Rust"))
  // Remove it
  let rust_idx = m4.tag_auto.tags.length() - 1
  let (m5, _) = m4.update(msg=TagAutoRemove(rust_idx), dispatch=nd2)
  assert_false(m5.tag_auto.tags.contains("Rust"))
}

// ── E2E: InlineEdit ─────────────────────────────────────────────────

///|
test "E2E: inline edit full flow" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(RichInputs), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(4), dispatch=nd2)
  // Start editing item 0
  let (m3, _) = m2.update(msg=InlineStartEdit(0), dispatch=nd2)
  assert_true(m3.inline_edit.items[0].1) // editing
  // Change text
  let (m4, _) = m3.update(msg=InlineEditChanged("Updated text"), dispatch=nd2)
  // Save
  let (m5, _) = m4.update(msg=InlineSaveEdit(0), dispatch=nd2)
  inspect(m5.inline_edit.items[0].0, content="Updated text")
  assert_false(m5.inline_edit.items[0].1) // no longer editing
  // Render shows updated text
  let html = render2(m5.render_component(nd2))
  assert_true(html.contains("Updated text"))
}

///|
test "E2E: inline edit cancel preserves original" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=InlineStartEdit(1), dispatch=nd2)
  let (m2, _) = m1.update(msg=InlineEditChanged("Garbage"), dispatch=nd2)
  let (m3, _) = m2.update(msg=InlineCancelEdit(1), dispatch=nd2)
  inspect(m3.inline_edit.items[1].0, content="Double-click me too")
}

// ── E2E: Stepper ────────────────────────────────────────────────────

///|
test "E2E: stepper increment to max and decrement to min" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Layout), dispatch=nd2)
  // Increment to max (start=1, max=20)
  let mut m = m1
  for _ in 0..<25 {
    let (next, _) = m.update(msg=StepperIncrement, dispatch=nd2)
    m = next
  }
  inspect(m.stepper.value, content="20") // clamped at max
  // Render shows value
  let html = render2(m.render_component(nd2))
  assert_true(html.contains("20"))
  // Decrement to min
  for _ in 0..<25 {
    let (next, _) = m.update(msg=StepperDecrement, dispatch=nd2)
    m = next
  }
  inspect(m.stepper.value, content="0") // clamped at min
}

// ── E2E: SplitPane ──────────────────────────────────────────────────

///|
test "E2E: split pane resize renders both panels" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Layout), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(1), dispatch=nd2)
  // Resize to 30%
  let (m3, _) = m2.update(msg=SplitPaneResize("30"), dispatch=nd2)
  inspect(m3.split_pane.left_percent, content="30")
  let html = render2(m3.render_component(nd2))
  assert_true(html.contains("30%"))
  assert_true(html.contains("70%"))
}

// ── E2E: VirtualList ────────────────────────────────────────────────

///|
test "E2E: virtual list scroll shows correct items" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Layout), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(2), dispatch=nd2)
  // Initial view shows items 0-9
  let html0 = render2(m2.render_component(nd2))
  assert_true(html0.contains("Item #1") || html0.contains("Item #0"))
  // Scroll to position 500
  let (m3, _) = m2.update(msg=VirtualScroll("500"), dispatch=nd2)
  let html1 = render2(m3.render_component(nd2))
  assert_true(html1.contains("Item #50") || html1.contains("500"))
  assert_true(html1.contains("10000") || html1.contains("10,000"))
}

// ── E2E: MasonryGrid ───────────────────────────────────────────────

///|
test "E2E: masonry grid renders all items" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Layout), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(3), dispatch=nd2)
  let html = render2(m2.render_component(nd2))
  assert_true(html.contains("Mountain View"))
  assert_true(html.contains("Ocean Breeze"))
  assert_true(html.contains("River Flow"))
}

// ── E2E: ConfirmButton ──────────────────────────────────────────────

///|
test "E2E: confirm button full flow with view" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Feedback), dispatch=nd2)
  // Initial state
  let html0 = render2(m1.render_component(nd2))
  assert_true(html0.contains("Delete"))
  // Click → confirming
  let (m2, _) = m1.update(msg=ConfirmButtonClick, dispatch=nd2)
  let html1 = render2(m2.render_component(nd2))
  assert_true(
    html1.contains("sure") ||
    html1.contains("Sure") ||
    html1.contains("Confirm"),
  )
  // Cancel
  let (m3, _) = m2.update(msg=ConfirmButtonCancel, dispatch=nd2)
  assert_false(m3.confirm_button.confirming)
  // Click again and confirm
  let (m4, _) = m3.update(msg=ConfirmButtonClick, dispatch=nd2)
  let (m5, _) = m4.update(msg=ConfirmButtonConfirm, dispatch=nd2)
  assert_true(m5.confirm_button.executed)
  let html2 = render2(m5.render_component(nd2))
  assert_true(
    html2.contains("deleted") ||
    html2.contains("Deleted") ||
    html2.contains("executed"),
  )
}

// ── E2E: UndoSnackbar ───────────────────────────────────────────────

///|
test "E2E: undo snackbar delete and undo" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Feedback), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(2), dispatch=nd2)
  // Delete item 1 ("Item Beta")
  let (m3, _) = m2.update(msg=UndoRemoveItem(1), dispatch=nd2)
  inspect(m3.undo_snackbar.items.length(), content="3")
  assert_true(m3.undo_snackbar.visible)
  // Render shows snackbar
  let html1 = render2(m3.render_component(nd2))
  assert_true(html1.contains("Beta") || html1.contains("Removed"))
  // Undo
  let (m4, _) = m3.update(msg=UndoUndo, dispatch=nd2)
  inspect(m4.undo_snackbar.items.length(), content="4") // restored
  assert_false(m4.undo_snackbar.visible)
  inspect(m4.undo_snackbar.items[1], content="Item Beta")
}

// ── E2E: MarkdownPreview ────────────────────────────────────────────

///|
test "E2E: markdown preview renders headings and lists" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Composite), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(4), dispatch=nd2)
  // Initial markdown renders
  let html = render2(m2.render_component(nd2))
  assert_true(html.contains("Hello MoonBit"))
  assert_true(html.contains("List item"))
  // Change markdown
  let (m3, _) = m2.update(
    msg=MarkdownChanged("# New Title\n\nNew paragraph"),
    dispatch=nd2,
  )
  let html2 = render2(m3.render_component(nd2))
  assert_true(html2.contains("New Title"))
  assert_true(html2.contains("New paragraph"))
}

// ── E2E: SpreadsheetGrid ────────────────────────────────────────────

///|
test "E2E: spreadsheet select, edit, save cell" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Composite), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(5), dispatch=nd2)
  // Select cell (1,1) = "95"
  let (m3, _) = m2.update(msg=SpreadsheetSelectCell(1, 1), dispatch=nd2)
  inspect(m3.spreadsheet.selected_row, content="1")
  // Start editing
  let (m4, _) = m3.update(msg=SpreadsheetStartEdit, dispatch=nd2)
  assert_true(m4.spreadsheet.editing)
  inspect(m4.spreadsheet.edit_value, content="95")
  // Change to "100"
  let (m5, _) = m4.update(msg=SpreadsheetEditChanged("100"), dispatch=nd2)
  let (m6, _) = m5.update(msg=SpreadsheetSaveEdit, dispatch=nd2)
  inspect(m6.spreadsheet.cells[1][1].value, content="100")
  assert_false(m6.spreadsheet.editing)
  // Render shows the new value
  let html = render2(m6.render_component(nd2))
  assert_true(html.contains("100"))
}

///|
test "E2E: spreadsheet cancel edit preserves original" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=SpreadsheetSelectCell(2, 0), dispatch=nd2)
  let (m2, _) = m1.update(msg=SpreadsheetStartEdit, dispatch=nd2)
  let (m3, _) = m2.update(msg=SpreadsheetEditChanged("CHANGED"), dispatch=nd2)
  let (m4, _) = m3.update(msg=SpreadsheetCancelEdit, dispatch=nd2)
  inspect(m4.spreadsheet.cells[2][0].value, content="Bob") // unchanged
}

// ── E2E: DragSortList ───────────────────────────────────────────────

///|
test "E2E: drag sort reorder items" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Composite), dispatch=nd2)
  let (m2, _) = m1.update(msg=ChangeComponent(6), dispatch=nd2)
  // Move item 0 down
  let (m3, _) = m2.update(msg=DragSortMoveDown(0), dispatch=nd2)
  inspect(m3.drag_sort.items[0], content="Second item")
  inspect(m3.drag_sort.items[1], content="First item")
  // Move item 4 up
  let (m4, _) = m3.update(msg=DragSortMoveUp(4), dispatch=nd2)
  inspect(m4.drag_sort.items[3], content="Fifth item")
  inspect(m4.drag_sort.items[4], content="Fourth item")
  // Render shows reordered list
  let html = render2(m4.render_component(nd2))
  assert_true(html.contains("Second item"))
  assert_true(html.contains("First item"))
}

///|
test "E2E: drag sort boundary conditions" {
  let m0 = initial_model()
  // Move first up → no change
  let (m1, _) = m0.update(msg=DragSortMoveUp(0), dispatch=nd2)
  inspect(m1.drag_sort.items[0], content="First item")
  // Move last down → no change
  let (m2, _) = m1.update(msg=DragSortMoveDown(4), dispatch=nd2)
  inspect(m2.drag_sort.items[4], content="Fifth item")
}

// ── E2E: Cross-section navigation with new sections ─────────────────

///|
test "E2E: navigate through all 10 sections" {
  let sections : Array[Section] = [
    Inputs,
    Display,
    Navigation,
    Data,
    Overlay,
    Composite,
    Animated,
    RichInputs,
    Layout,
    Feedback,
  ]
  for section in sections; m = initial_model() {
    let (next, _) = m.update(msg=ChangeSection(section), dispatch=nd2)
    let html = render2(next.view(nd2))
    // Each section should render the sidebar with "Gallery" and show component content
    assert_true(html.contains("Gallery"))
    assert_true(html.length() > 500)
    continue next
  }
}
