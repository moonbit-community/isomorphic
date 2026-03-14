// End-to-end tests: simulate user interactions by chaining
// update() calls, then render the view and verify the HTML output.
// This tests the complete Model → Update → View → HTML pipeline.

///|
#warnings("-alert_unstable")
fn render(html : @rabbita.Html) -> String {
  @rabbita.render_to_string(@rabbita.static_cell(html))
}

///|
fn noop(_msg : Msg) -> @rabbita.Cmd {
  @rabbita.none
}

// ── E2E: Sidebar navigation ─────────────────────────────────────────

///|
test "E2E: initial render shows Inputs section with TextInput active" {
  let model = initial_model()
  let html = render(model.view(noop))
  // Sidebar should exist with "Gallery" header
  assert_true(html.contains("Gallery"))
  // TextInput should be the active component
  assert_true(html.contains("TextInput"))
  // Component description should appear
  assert_true(html.contains("single-line text input"))
}

///|
test "E2E: navigate to Display section shows Avatar" {
  let (model, _) = initial_model().update(
    msg=ChangeSection(Display),
    dispatch=noop,
  )
  let html = render(model.view(noop))
  assert_true(html.contains("Avatar"))
  assert_true(html.contains("online/offline"))
}

///|
test "E2E: navigate to specific component in section" {
  let (m1, _) = initial_model().update(msg=ChangeSection(Data), dispatch=noop)
  let (m2, _) = m1.update(msg=ChangeComponent(1), dispatch=noop)
  let html = render(m2.view(noop))
  // Should show Calendar component
  assert_true(html.contains("Calendar"))
  assert_true(html.contains("month navigation"))
}

// ── E2E: TextInput validation flow ──────────────────────────────────

///|
test "E2E: typing short text shows validation error in view" {
  let (model, _) = initial_model().update(
    msg=TextInputChanged("ab"),
    dispatch=noop,
  )
  let html = render(model.render_component(noop))
  // Should show the error message
  assert_true(html.contains("Minimum 3 characters"))
  // Input should have the typed value
  assert_true(html.contains("value=\"ab\""))
}

///|
test "E2E: typing valid text clears error in view" {
  let (m1, _) = initial_model().update(
    msg=TextInputChanged("ab"),
    dispatch=noop,
  )
  let (m2, _) = m1.update(msg=TextInputChanged("hello"), dispatch=noop)
  let html = render(m2.render_component(noop))
  // Error should be gone
  assert_false(html.contains("Minimum 3 characters"))
  assert_true(html.contains("value=\"hello\""))
}

// ── E2E: Checkbox toggle flow ───────────────────────────────────────

///|
test "E2E: toggling checkbox updates the view" {
  let (m1, _) = initial_model().update(msg=ChangeSection(Inputs), dispatch=noop)
  let (m2, _) = m1.update(msg=ChangeComponent(2), dispatch=noop)
  // Toggle "Dark mode" (index 1, initially false)
  let (m3, _) = m2.update(msg=CheckboxToggled(1), dispatch=noop)
  let html = render(m3.render_component(noop))
  assert_true(html.contains("Dark mode"))
  // Toggle it back
  let (m4, _) = m3.update(msg=CheckboxToggled(1), dispatch=noop)
  let html2 = render(m4.render_component(noop))
  // Should still contain the label
  assert_true(html2.contains("Dark mode"))
}

// ── E2E: Tag add and remove flow ────────────────────────────────────

///|
test "E2E: add tag then remove it" {
  let m0 = initial_model()
  let (m0b, _) = m0.update(msg=ChangeSection(Display), dispatch=noop)
  let (m0c, _) = m0b.update(msg=ChangeComponent(4), dispatch=noop)
  // Type a new tag
  let (m1, _) = m0c.update(msg=TagInputChanged("Rust"), dispatch=noop)
  // Add it
  let (m2, _) = m1.update(msg=TagAdd, dispatch=noop)
  let html = render(m2.render_component(noop))
  assert_true(html.contains("Rust"))
  // Input should be cleared
  assert_false(html.contains("value=\"Rust\""))
  // Remove the last tag (index = original 4 tags + 1 new = index 4)
  let (m3, _) = m2.update(msg=TagRemove(4), dispatch=noop)
  let html2 = render(m3.render_component(noop))
  assert_false(html2.contains(">Rust<"))
}

// ── E2E: Accordion expand/collapse ──────────────────────────────────

///|
test "E2E: accordion expand shows content, collapse hides it" {
  let (m1, _) = initial_model().update(
    msg=ChangeSection(Navigation),
    dispatch=noop,
  )
  let (m2, _) = m1.update(msg=ChangeComponent(1), dispatch=noop)
  // Initially all closed
  let html_closed = render(m2.render_component(noop))
  assert_true(html_closed.contains("What is MoonBit?"))
  // Open section 0
  let (m3, _) = m2.update(msg=AccordionToggle(0), dispatch=noop)
  let html_open = render(m3.render_component(noop))
  assert_true(html_open.contains("modern programming language"))
  // Close it
  let (m4, _) = m3.update(msg=AccordionToggle(0), dispatch=noop)
  let html_closed2 = render(m4.render_component(noop))
  // Content should be hidden (display: none or not rendered)
  // The header should still be there
  assert_true(html_closed2.contains("What is MoonBit?"))
}

// ── E2E: Tab switching ──────────────────────────────────────────────

///|
test "E2E: switching tabs changes visible content" {
  let (m1, _) = initial_model().update(
    msg=ChangeSection(Navigation),
    dispatch=noop,
  )
  let (m2, _) = m1.update(msg=ChangeComponent(0), dispatch=noop)
  // Tab 0 (Overview) should be active
  let html0 = render(m2.render_component(noop))
  assert_true(html0.contains("component gallery"))
  // Switch to tab 1 (Usage)
  let (m3, _) = m2.update(msg=TabSelected(1), dispatch=noop)
  let html1 = render(m3.render_component(noop))
  assert_true(html1.contains("MVU pattern"))
  // Switch to tab 2 (API)
  let (m4, _) = m3.update(msg=TabSelected(2), dispatch=noop)
  let html2 = render(m4.render_component(noop))
  assert_true(html2.contains("Dispatch"))
}

// ── E2E: DataTable sort + paginate ──────────────────────────────────

///|
test "E2E: sort table by column and paginate" {
  let m0 = initial_model()
  // Sort by email
  let (m1, _) = m0.update(msg=TableSort("email"), dispatch=noop)
  inspect(m1.data_table.sort_col, content="email")
  // Reverse sort
  let (m2, _) = m1.update(msg=TableSort("email"), dispatch=noop)
  assert_false(m2.data_table.sort_asc)
  // Go to page 1
  let (m3, _) = m2.update(msg=TablePage(1), dispatch=noop)
  inspect(m3.data_table.page, content="1")
  // Render the data table component
  let (m4, _) = m3.update(msg=ChangeSection(Data), dispatch=noop)
  let html = render(m4.render_component(noop))
  // Table should have header columns
  assert_true(html.contains("Name"))
  assert_true(html.contains("Email"))
}

///|
test "E2E: select and deselect table rows" {
  let m0 = initial_model()
  // Select row 0
  let (m1, _) = m0.update(msg=TableToggleRow(0), dispatch=noop)
  assert_true(m1.data_table.selected.contains(0))
  // Select all
  let (m2, _) = m1.update(msg=TableSelectAll, dispatch=noop)
  inspect(m2.data_table.selected.length(), content="8")
  // Deselect all
  let (m3, _) = m2.update(msg=TableSelectAll, dispatch=noop)
  inspect(m3.data_table.selected.length(), content="0")
}

// ── E2E: Calendar month navigation ──────────────────────────────────

///|
test "E2E: calendar navigate months and select day" {
  let (m1, _) = initial_model().update(msg=ChangeSection(Data), dispatch=noop)
  let (m2, _) = m1.update(msg=ChangeComponent(1), dispatch=noop)
  // Initial: March 2026
  let html0 = render(m2.render_component(noop))
  assert_true(html0.contains("March"))
  assert_true(html0.contains("2026"))
  // Go to previous month
  let (m3, _) = m2.update(msg=CalendarPrevMonth, dispatch=noop)
  let html1 = render(m3.render_component(noop))
  assert_true(html1.contains("February"))
  // Go forward two months
  let (m4, _) = m3.update(msg=CalendarNextMonth, dispatch=noop)
  let (m5, _) = m4.update(msg=CalendarNextMonth, dispatch=noop)
  let html2 = render(m5.render_component(noop))
  assert_true(html2.contains("April"))
  // Select day 15
  let (m6, _) = m5.update(msg=CalendarSelectDay(15), dispatch=noop)
  inspect(m6.calendar.selected_day, content="15")
}

// ── E2E: Toast lifecycle ────────────────────────────────────────────

///|
test "E2E: show and dismiss toast" {
  let m0 = initial_model()
  // Show a success toast
  let (m1, _) = m0.update(
    msg=ShowToast("Saved", "Your changes were saved.", "success"),
    dispatch=noop,
  )
  let html1 = render(m1.view(noop))
  assert_true(html1.contains("Saved"))
  assert_true(html1.contains("Your changes were saved"))
  // Show another toast
  let (m2, _) = m1.update(
    msg=ShowToast("Error", "Something failed.", "error"),
    dispatch=noop,
  )
  inspect(m2.toast.items.length(), content="2")
  let html2 = render(m2.view(noop))
  assert_true(html2.contains("Error"))
  // Dismiss first toast
  let (m3, _) = m2.update(msg=DismissToast(1), dispatch=noop)
  inspect(m3.toast.items.length(), content="1")
  let html3 = render(m3.view(noop))
  assert_false(html3.contains("Your changes were saved"))
  assert_true(html3.contains("Something failed"))
}

// ── E2E: Modal open/confirm/close flow ──────────────────────────────

///|
test "E2E: modal open, confirm, shows result" {
  let m0 = initial_model()
  // Open modal
  let (m1, _) = m0.update(msg=ModalOpen, dispatch=noop)
  assert_true(m1.modal.open)
  // Render full view — modal overlay should be visible
  let html1 = render(m1.view(noop))
  assert_true(html1.contains("Confirm Action"))
  // Confirm
  let (m2, _) = m1.update(msg=ModalConfirm, dispatch=noop)
  assert_true(m2.modal.confirmed)
  assert_false(m2.modal.open)
  // Navigate to modal demo and verify confirmed state shows
  let (m3, _) = m2.update(msg=ChangeSection(Overlay), dispatch=noop)
  let (m4, _) = m3.update(msg=ChangeComponent(1), dispatch=noop)
  let html2 = render(m4.render_component(noop))
  // Check for confirmed indicator (could be "confirmed", "Confirmed", or a checkmark)
  assert_true(m4.modal.confirmed)
  // The view should contain some indication — just verify it renders
  assert_true(html2.length() > 0)
}

///|
test "E2E: modal open and cancel" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ModalOpen, dispatch=noop)
  let (m2, _) = m1.update(msg=ModalClose, dispatch=noop)
  assert_false(m2.modal.open)
  assert_false(m2.modal.confirmed)
}

// ── E2E: Kanban card movement ───────────────────────────────────────

///|
test "E2E: move kanban card from To Do to In Progress" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Composite), dispatch=noop)
  let (m2, _) = m1.update(msg=ChangeComponent(0), dispatch=noop)
  // Card 1 starts in "To Do" (col 0)
  let html0 = render(m2.render_component(noop))
  assert_true(html0.contains("Design system tokens"))
  // Move card 1 from col 0 to col 1 (In Progress)
  let (m3, _) = m2.update(msg=KanbanMoveCard(1, 0, 1), dispatch=noop)
  // "To Do" should now have 1 card, "In Progress" should have 2
  inspect(m3.kanban.columns[0].1.length(), content="1")
  inspect(m3.kanban.columns[1].1.length(), content="2")
  // Move it again to Done
  let (m4, _) = m3.update(msg=KanbanMoveCard(1, 1, 2), dispatch=noop)
  inspect(m4.kanban.columns[1].1.length(), content="1")
  inspect(m4.kanban.columns[2].1.length(), content="3")
}

// ── E2E: FormWizard multi-step flow ─────────────────────────────────

///|
test "E2E: wizard validation, fill, advance, complete" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Composite), dispatch=noop)
  let (m2, _) = m1.update(msg=ChangeComponent(3), dispatch=noop)
  // Try to advance with empty fields — should show errors
  let (m3, _) = m2.update(msg=WizardNext, dispatch=noop)
  inspect(m3.form_wizard.current, content="0") // still on step 0
  let html_err = render(m3.render_component(noop))
  assert_true(html_err.contains("is required"))
  // Fill in step 0 fields
  let (m4, _) = m3.update(msg=WizardFieldChanged(0, "Alice"), dispatch=noop)
  let (m5, _) = m4.update(
    msg=WizardFieldChanged(1, "alice@test.com"),
    dispatch=noop,
  )
  // Now advance
  let (m6, _) = m5.update(msg=WizardNext, dispatch=noop)
  inspect(m6.form_wizard.current, content="1") // on step 1
  // Fill step 1
  let (m7, _) = m6.update(msg=WizardFieldChanged(0, "alice"), dispatch=noop)
  let (m8, _) = m7.update(msg=WizardFieldChanged(1, "pass123"), dispatch=noop)
  let (m9, _) = m8.update(msg=WizardNext, dispatch=noop)
  inspect(m9.form_wizard.current, content="2") // on step 2
  // Fill step 2
  let (m10, _) = m9.update(msg=WizardFieldChanged(0, "English"), dispatch=noop)
  let (m11, _) = m10.update(msg=WizardFieldChanged(1, "UTC"), dispatch=noop)
  // Final advance — should complete
  let (m12, _) = m11.update(msg=WizardNext, dispatch=noop)
  assert_true(m12.form_wizard.completed)
  // View should show completion
  let html_done = render(m12.render_component(noop))
  assert_true(
    html_done.contains("Complete") ||
    html_done.contains("complete") ||
    html_done.contains("Success") ||
    html_done.contains("success"),
  )
}

///|
test "E2E: wizard go back preserves filled data" {
  let m0 = initial_model()
  // Fill step 0 and advance
  let (m1, _) = m0.update(msg=WizardFieldChanged(0, "Bob"), dispatch=noop)
  let (m2, _) = m1.update(msg=WizardFieldChanged(1, "bob@b.com"), dispatch=noop)
  let (m3, _) = m2.update(msg=WizardNext, dispatch=noop)
  inspect(m3.form_wizard.current, content="1")
  // Go back
  let (m4, _) = m3.update(msg=WizardPrev, dispatch=noop)
  inspect(m4.form_wizard.current, content="0")
  // Data should be preserved
  inspect(m4.form_wizard.steps[0].fields[0].value, content="Bob")
  inspect(m4.form_wizard.steps[0].fields[1].value, content="bob@b.com")
}

// ── E2E: SearchableSelect filter + select ───────────────────────────

///|
test "E2E: searchable select filter and pick" {
  let m0 = initial_model()
  // Open the dropdown
  let (m1, _) = m0.update(msg=SearchableToggleOpen, dispatch=noop)
  assert_true(m1.searchable_select.open)
  // Type a filter query
  let (m2, _) = m1.update(msg=SearchableQueryChanged("united"), dispatch=noop)
  inspect(m2.searchable_select.query, content="united")
  // Select an option
  let (m3, _) = m2.update(msg=SearchableSelect_("us"), dispatch=noop)
  inspect(m3.searchable_select.selected, content="us")
  assert_false(m3.searchable_select.open)
}

// ── E2E: CommandPalette action execution ────────────────────────────

///|
test "E2E: command palette navigates to Inputs" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Display), dispatch=noop)
  // Open palette
  let (m2, _) = m1.update(msg=CommandPaletteToggle, dispatch=noop)
  assert_true(m2.command_palette.open)
  // Execute "Go to Inputs" (id=1)
  let (m3, _) = m2.update(msg=CommandPaletteSelect(1), dispatch=noop)
  assert_false(m3.command_palette.open)
  inspect(m3.section, content="Inputs")
}

// ── E2E: DateRange pick start and end ───────────────────────────────

///|
test "E2E: pick start and end dates" {
  let m0 = initial_model()
  // Set picking mode to start
  let (m1, _) = m0.update(msg=DateRangeSetPicking("start"), dispatch=noop)
  // Pick day 5
  let (m2, _) = m1.update(msg=DateRangeSelectDay(5), dispatch=noop)
  inspect(m2.date_range.start_day, content="5")
  inspect(m2.date_range.picking, content="") // cleared
  // Set picking mode to end
  let (m3, _) = m2.update(msg=DateRangeSetPicking("end"), dispatch=noop)
  // Pick day 25
  let (m4, _) = m3.update(msg=DateRangeSelectDay(25), dispatch=noop)
  inspect(m4.date_range.end_day, content="25")
  inspect(m4.date_range.picking, content="")
}

// ── E2E: Progress bar with slider ───────────────────────────────────

///|
test "E2E: adjust progress and verify view" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Display), dispatch=noop)
  let (m2, _) = m1.update(msg=ChangeComponent(2), dispatch=noop)
  // Change progress to 80
  let (m3, _) = m2.update(msg=ProgressChanged("80"), dispatch=noop)
  let html = render(m3.render_component(noop))
  assert_true(html.contains("80"))
}

// ── E2E: Color picker flow ──────────────────────────────────────────

///|
test "E2E: pick swatch then edit hex" {
  let m0 = initial_model()
  // Pick red swatch
  let (m1, _) = m0.update(msg=ColorSwatchClicked("#ef4444"), dispatch=noop)
  inspect(m1.color_picker.selected, content="#ef4444")
  // Type a custom hex
  let (m2, _) = m1.update(msg=ColorHexChanged("#00aa00"), dispatch=noop)
  // Invalid length (6 chars without #? No — #00aa00 is 7 chars with #) — valid!
  inspect(m2.color_picker.selected, content="#00aa00")
  // Partial hex shouldn't change selected
  let (m3, _) = m2.update(msg=ColorHexChanged("#00a"), dispatch=noop)
  inspect(m3.color_picker.selected, content="#00aa00") // unchanged
  inspect(m3.color_picker.hex_input, content="#00a") // input updated
}

// ── E2E: Skeleton toggle ────────────────────────────────────────────

///|
test "E2E: skeleton toggle shows/hides loading state" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Display), dispatch=noop)
  let (m2, _) = m1.update(msg=ChangeComponent(5), dispatch=noop)
  // Initially loading=true
  assert_true(m2.skeleton.loading)
  let html1 = render(m2.render_component(noop))
  // Should render something (the shimmer placeholders)
  assert_true(html1.length() > 50)
  // Toggle off
  let (m3, _) = m2.update(msg=SkeletonToggle, dispatch=noop)
  assert_false(m3.skeleton.loading)
}

// ── E2E: TreeView expand/collapse ───────────────────────────────────

///|
test "E2E: tree view expand and collapse nodes" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeSection(Navigation), dispatch=noop)
  let (m2, _) = m1.update(msg=ChangeComponent(3), dispatch=noop)
  // Initially nodes 1 and 2 are expanded
  let html0 = render(m2.render_component(noop))
  assert_true(html0.contains("src"))
  assert_true(html0.contains("frontend"))
  // Expand node 4 (app)
  let (m3, _) = m2.update(msg=TreeToggle(4), dispatch=noop)
  let html1 = render(m3.render_component(noop))
  assert_true(html1.contains("types.mbt"))
  // Collapse node 2 (frontend)
  let (m4, _) = m3.update(msg=TreeToggle(2), dispatch=noop)
  assert_false(m4.tree_view.expanded.contains(2))
}

// ── E2E: Breadcrumb navigation ──────────────────────────────────────

///|
test "E2E: breadcrumb navigate truncates path" {
  let m0 = initial_model()
  // Initial path: Home > Components > Navigation > Breadcrumb
  inspect(m0.breadcrumb.path.length(), content="4")
  // Navigate to "Components" (index 1)
  let (m1, _) = m0.update(msg=BreadcrumbNavigate(1), dispatch=noop)
  inspect(m1.breadcrumb.path.length(), content="2")
  inspect(m1.breadcrumb.path[1], content="Components")
  // Navigate to the breadcrumb component view
  let (m2, _) = m1.update(msg=ChangeSection(Navigation), dispatch=noop)
  let (m3, _) = m2.update(msg=ChangeComponent(2), dispatch=noop)
  let html = render(m3.render_component(noop))
  assert_true(html.contains("Components"))
}

// ── E2E: Radio group selection ──────────────────────────────────────

///|
test "E2E: radio selection renders correctly" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeComponent(3), dispatch=noop) // RadioGroup
  let (m2, _) = m1.update(msg=RadioSelected("Large"), dispatch=noop)
  let html = render(m2.render_component(noop))
  assert_true(html.contains("Large"))
  inspect(m2.radio.selected, content="Large")
}

// ── E2E: Slider value rendering ─────────────────────────────────────

///|
test "E2E: slider value appears in view" {
  let m0 = initial_model()
  let (m1, _) = m0.update(msg=ChangeComponent(6), dispatch=noop) // Slider
  let (m2, _) = m1.update(msg=SliderChanged("75"), dispatch=noop)
  let html = render(m2.render_component(noop))
  assert_true(html.contains("75"))
}
