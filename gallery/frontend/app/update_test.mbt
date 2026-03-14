///|
fn noop_dispatch(_msg : Msg) -> @rabbita.Cmd {
  @rabbita.none
}

///|
fn m() -> Model {
  initial_model()
}

// ── Navigation ───────────────────────────────────────────────────────

///|
test "ChangeSection updates section and resets component" {
  let (model, _) = m().update(msg=ChangeSection(Display), dispatch=noop_dispatch)
  inspect!(model.section, content="Display")
  inspect!(model.component, content="0")
}

///|
test "ChangeComponent updates component index" {
  let (model, _) = m().update(msg=ChangeComponent(3), dispatch=noop_dispatch)
  inspect!(model.component, content="3")
}

// ── TextInput ────────────────────────────────────────────────────────

///|
test "TextInputChanged updates value" {
  let (model, _) = m().update(msg=TextInputChanged("hello"), dispatch=noop_dispatch)
  inspect!(model.text_input.value, content="hello")
  inspect!(model.text_input.error, content="")
}

///|
test "TextInputChanged valid input clears error" {
  let (model, _) = m().update(msg=TextInputChanged("hello world"), dispatch=noop_dispatch)
  inspect!(model.text_input.value, content="hello world")
  inspect!(model.text_input.error, content="")
}

///|
test "TextInputChanged too short shows error" {
  let (model, _) = m().update(msg=TextInputChanged("ab"), dispatch=noop_dispatch)
  inspect!(model.text_input.error, content="Minimum 3 characters")
}

// ── TextArea ─────────────────────────────────────────────────────────

///|
test "TextAreaChanged updates value" {
  let (model, _) = m().update(msg=TextAreaChanged("some text"), dispatch=noop_dispatch)
  inspect!(model.text_area.value, content="some text")
}

// ── Checkbox ─────────────────────────────────────────────────────────

///|
test "CheckboxToggled flips the item" {
  let (model, _) = m().update(msg=CheckboxToggled(1), dispatch=noop_dispatch)
  // Item 1 ("Dark mode") was false, now true
  inspect!(model.checkbox.items[1].1, content="true")
}

///|
test "CheckboxToggled preserves other items" {
  let (model, _) = m().update(msg=CheckboxToggled(1), dispatch=noop_dispatch)
  inspect!(model.checkbox.items[0].1, content="true") // unchanged
  inspect!(model.checkbox.items[2].1, content="true") // unchanged
}

// ── Radio ────────────────────────────────────────────────────────────

///|
test "RadioSelected updates selected" {
  let (model, _) = m().update(msg=RadioSelected("Large"), dispatch=noop_dispatch)
  inspect!(model.radio.selected, content="Large")
}

// ── Select ───────────────────────────────────────────────────────────

///|
test "SelectChanged updates selected" {
  let (model, _) = m().update(msg=SelectChanged("Cherry"), dispatch=noop_dispatch)
  inspect!(model.select.selected, content="Cherry")
}

// ── Toggle ───────────────────────────────────────────────────────────

///|
test "ToggleSwitched flips the item" {
  let (model, _) = m().update(msg=ToggleSwitched(0), dispatch=noop_dispatch)
  // Wi-Fi was true, now false
  inspect!(model.toggle.items[0].1, content="false")
}

// ── Slider ───────────────────────────────────────────────────────────

///|
test "SliderChanged updates value" {
  let (model, _) = m().update(msg=SliderChanged("75"), dispatch=noop_dispatch)
  inspect!(model.slider.value, content="75")
}

///|
test "SliderChanged invalid input keeps old value" {
  let (model, _) = m().update(msg=SliderChanged("abc"), dispatch=noop_dispatch)
  inspect!(model.slider.value, content="50") // initial value
}

// ── ColorPicker ──────────────────────────────────────────────────────

///|
test "ColorSwatchClicked updates selected and hex_input" {
  let (model, _) = m().update(msg=ColorSwatchClicked("#ef4444"), dispatch=noop_dispatch)
  inspect!(model.color_picker.selected, content="#ef4444")
  inspect!(model.color_picker.hex_input, content="#ef4444")
}

///|
test "ColorHexChanged with valid hex updates selected" {
  let (model, _) = m().update(msg=ColorHexChanged("#00ff00"), dispatch=noop_dispatch)
  inspect!(model.color_picker.selected, content="#00ff00")
  inspect!(model.color_picker.hex_input, content="#00ff00")
}

///|
test "ColorHexChanged with invalid hex keeps old selected" {
  let (model, _) = m().update(msg=ColorHexChanged("not"), dispatch=noop_dispatch)
  inspect!(model.color_picker.selected, content="#6366f1") // unchanged
  inspect!(model.color_picker.hex_input, content="not") // input still updated
}

// ── Progress ─────────────────────────────────────────────────────────

///|
test "ProgressChanged clamps to 0-100" {
  let (model, _) = m().update(msg=ProgressChanged("150"), dispatch=noop_dispatch)
  inspect!(model.progress.value, content="100")
  let (model2, _) = m().update(msg=ProgressChanged("-5"), dispatch=noop_dispatch)
  inspect!(model2.progress.value, content="0")
}

// ── Tag ──────────────────────────────────────────────────────────────

///|
test "TagAdd appends tag and clears input" {
  let model0 = { ..m(), tag: { tags: ["A"], input: "B" } }
  let (model, _) = model0.update(msg=TagAdd, dispatch=noop_dispatch)
  inspect!(model.tag.tags.length(), content="2")
  inspect!(model.tag.tags[1], content="B")
  inspect!(model.tag.input, content="")
}

///|
test "TagAdd with empty input does nothing" {
  let model0 = { ..m(), tag: { tags: ["A"], input: "" } }
  let (model, _) = model0.update(msg=TagAdd, dispatch=noop_dispatch)
  inspect!(model.tag.tags.length(), content="1")
}

///|
test "TagRemove removes at index" {
  let model0 = { ..m(), tag: { tags: ["A", "B", "C"], input: "" } }
  let (model, _) = model0.update(msg=TagRemove(1), dispatch=noop_dispatch)
  inspect!(model.tag.tags.length(), content="2")
  inspect!(model.tag.tags[1], content="C")
}

// ── Accordion ────────────────────────────────────────────────────────

///|
test "AccordionToggle opens section" {
  let (model, _) = m().update(msg=AccordionToggle(1), dispatch=noop_dispatch)
  inspect!(model.accordion.open_index, content="1")
}

///|
test "AccordionToggle closes same section" {
  let model0 = {
    ..m(),
    accordion: { ..m().accordion, open_index: 1 },
  }
  let (model, _) = model0.update(msg=AccordionToggle(1), dispatch=noop_dispatch)
  inspect!(model.accordion.open_index, content="-1")
}

// ── Tabs ─────────────────────────────────────────────────────────────

///|
test "TabSelected updates active tab" {
  let (model, _) = m().update(msg=TabSelected(2), dispatch=noop_dispatch)
  inspect!(model.tabs.active, content="2")
}

// ── Breadcrumb ───────────────────────────────────────────────────────

///|
test "BreadcrumbNavigate truncates path" {
  let (model, _) = m().update(msg=BreadcrumbNavigate(1), dispatch=noop_dispatch)
  inspect!(model.breadcrumb.path.length(), content="2")
  inspect!(model.breadcrumb.path[1], content="Components")
}

// ── TreeView ─────────────────────────────────────────────────────────

///|
test "TreeToggle expands node" {
  let (model, _) = m().update(msg=TreeToggle(4), dispatch=noop_dispatch)
  inspect!(model.tree_view.expanded.contains(4), content="true")
}

///|
test "TreeToggle collapses already expanded" {
  let (model, _) = m().update(msg=TreeToggle(1), dispatch=noop_dispatch)
  // 1 was in initial expanded list
  inspect!(model.tree_view.expanded.contains(1), content="false")
}

// ── DataTable ────────────────────────────────────────────────────────

///|
test "TableSort changes sort column" {
  let (model, _) = m().update(msg=TableSort("email"), dispatch=noop_dispatch)
  inspect!(model.data_table.sort_col, content="email")
  inspect!(model.data_table.sort_asc, content="true")
}

///|
test "TableSort same column toggles direction" {
  let (model, _) = m().update(msg=TableSort("name"), dispatch=noop_dispatch)
  // Initial sort is name asc, so toggling should be desc
  inspect!(model.data_table.sort_asc, content="false")
}

///|
test "TablePage updates page" {
  let (model, _) = m().update(msg=TablePage(2), dispatch=noop_dispatch)
  inspect!(model.data_table.page, content="2")
}

///|
test "TableToggleRow adds to selection" {
  let (model, _) = m().update(msg=TableToggleRow(3), dispatch=noop_dispatch)
  inspect!(model.data_table.selected.contains(3), content="true")
}

///|
test "TableSelectAll selects all rows" {
  let (model, _) = m().update(msg=TableSelectAll, dispatch=noop_dispatch)
  inspect!(model.data_table.selected.length(), content="8")
}

// ── Calendar ─────────────────────────────────────────────────────────

///|
test "CalendarPrevMonth wraps year" {
  let model0 = {
    ..m(),
    calendar: { ..m().calendar, year: 2026, month: 1 },
  }
  let (model, _) = model0.update(msg=CalendarPrevMonth, dispatch=noop_dispatch)
  inspect!(model.calendar.year, content="2025")
  inspect!(model.calendar.month, content="12")
}

///|
test "CalendarNextMonth wraps year" {
  let model0 = {
    ..m(),
    calendar: { ..m().calendar, year: 2026, month: 12 },
  }
  let (model, _) = model0.update(msg=CalendarNextMonth, dispatch=noop_dispatch)
  inspect!(model.calendar.year, content="2027")
  inspect!(model.calendar.month, content="1")
}

///|
test "CalendarSelectDay updates selected" {
  let (model, _) = m().update(msg=CalendarSelectDay(25), dispatch=noop_dispatch)
  inspect!(model.calendar.selected_day, content="25")
}

// ── Kanban ───────────────────────────────────────────────────────────

///|
test "KanbanMoveCard moves card between columns" {
  let (model, _) = m().update(msg=KanbanMoveCard(1, 0, 1), dispatch=noop_dispatch)
  // Card 1 moved from col 0 to col 1
  inspect!(model.kanban.columns[0].1.length(), content="1") // was 2, now 1
  inspect!(model.kanban.columns[1].1.length(), content="2") // was 1, now 2
}

// ── Toast ────────────────────────────────────────────────────────────

///|
test "ShowToast adds toast and increments id" {
  let (model, _) = m().update(
    msg=ShowToast("Title", "Message", "success"),
    dispatch=noop_dispatch,
  )
  inspect!(model.toast.items.length(), content="1")
  inspect!(model.toast.items[0].title, content="Title")
  inspect!(model.toast.next_id, content="2")
}

///|
test "DismissToast removes toast by id" {
  let model0 = {
    ..m(),
    toast: {
      items: [{ id: 1, title: "T", message: "M", kind: "info" }],
      next_id: 2,
    },
  }
  let (model, _) = model0.update(msg=DismissToast(1), dispatch=noop_dispatch)
  inspect!(model.toast.items.length(), content="0")
}

// ── Modal ────────────────────────────────────────────────────────────

///|
test "ModalOpen opens modal" {
  let (model, _) = m().update(msg=ModalOpen, dispatch=noop_dispatch)
  inspect!(model.modal.open, content="true")
}

///|
test "ModalClose closes modal" {
  let model0 = { ..m(), modal: { ..m().modal, open: true } }
  let (model, _) = model0.update(msg=ModalClose, dispatch=noop_dispatch)
  inspect!(model.modal.open, content="false")
}

///|
test "ModalConfirm closes and sets confirmed" {
  let model0 = { ..m(), modal: { ..m().modal, open: true } }
  let (model, _) = model0.update(msg=ModalConfirm, dispatch=noop_dispatch)
  inspect!(model.modal.open, content="false")
  inspect!(model.modal.confirmed, content="true")
}

// ── Skeleton & EmptyState ────────────────────────────────────────────

///|
test "SkeletonToggle flips loading" {
  let (model, _) = m().update(msg=SkeletonToggle, dispatch=noop_dispatch)
  inspect!(model.skeleton.loading, content="false")
}

///|
test "EmptyStateToggle flips has_data" {
  let (model, _) = m().update(msg=EmptyStateToggle, dispatch=noop_dispatch)
  inspect!(model.empty_state.has_data, content="true")
}

// ── SearchableSelect ─────────────────────────────────────────────────

///|
test "SearchableQueryChanged updates query" {
  let (model, _) = m().update(msg=SearchableQueryChanged("uni"), dispatch=noop_dispatch)
  inspect!(model.searchable_select.query, content="uni")
}

///|
test "SearchableSelect_ sets selected and closes" {
  let model0 = {
    ..m(),
    searchable_select: { ..m().searchable_select, open: true },
  }
  let (model, _) = model0.update(msg=SearchableSelect_("us"), dispatch=noop_dispatch)
  inspect!(model.searchable_select.selected, content="us")
  inspect!(model.searchable_select.open, content="false")
}

// ── DateRange ────────────────────────────────────────────────────────

///|
test "DateRangeSetPicking sets picking mode" {
  let (model, _) = m().update(msg=DateRangeSetPicking("start"), dispatch=noop_dispatch)
  inspect!(model.date_range.picking, content="start")
}

///|
test "DateRangeSelectDay sets start day when picking start" {
  let model0 = {
    ..m(),
    date_range: { ..m().date_range, picking: "start" },
  }
  let (model, _) = model0.update(msg=DateRangeSelectDay(5), dispatch=noop_dispatch)
  inspect!(model.date_range.start_day, content="5")
  inspect!(model.date_range.picking, content="")
}

// ── CommandPalette ───────────────────────────────────────────────────

///|
test "CommandPaletteToggle opens palette" {
  let (model, _) = m().update(msg=CommandPaletteToggle, dispatch=noop_dispatch)
  inspect!(model.command_palette.open, content="true")
}

///|
test "CommandPaletteSearch updates query" {
  let (model, _) = m().update(msg=CommandPaletteSearch("go"), dispatch=noop_dispatch)
  inspect!(model.command_palette.query, content="go")
}

// ── FormWizard ───────────────────────────────────────────────────────

///|
test "WizardFieldChanged updates field value" {
  let (model, _) = m().update(msg=WizardFieldChanged(0, "Alice"), dispatch=noop_dispatch)
  inspect!(model.form_wizard.steps[0].fields[0].value, content="Alice")
}

///|
test "WizardNext with empty fields shows errors" {
  let (model, _) = m().update(msg=WizardNext, dispatch=noop_dispatch)
  inspect!(model.form_wizard.current, content="0") // stays on step 0
  inspect!(
    model.form_wizard.steps[0].fields[0].error,
    content="Full Name is required",
  )
}

///|
test "WizardNext with filled fields advances" {
  let model0 = {
    ..m(),
    form_wizard: {
      ..m().form_wizard,
      steps: [
        {
          title: "Step 1",
          fields: [
            { label: "Name", value: "Alice", error: "" },
            { label: "Email", value: "a@b.c", error: "" },
          ],
        },
        m().form_wizard.steps[1],
        m().form_wizard.steps[2],
      ],
    },
  }
  let (model, _) = model0.update(msg=WizardNext, dispatch=noop_dispatch)
  inspect!(model.form_wizard.current, content="1")
}

///|
test "WizardPrev goes back" {
  let model0 = {
    ..m(),
    form_wizard: { ..m().form_wizard, current: 2 },
  }
  let (model, _) = model0.update(msg=WizardPrev, dispatch=noop_dispatch)
  inspect!(model.form_wizard.current, content="1")
}

///|
test "WizardPrev at step 0 stays" {
  let (model, _) = m().update(msg=WizardPrev, dispatch=noop_dispatch)
  inspect!(model.form_wizard.current, content="0")
}
