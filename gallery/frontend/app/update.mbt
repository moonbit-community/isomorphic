///|
pub fn initial_model() -> Model {
  {
    section: Inputs,
    component: 0,
    text_input: { value: "", error: "" },
    text_area: { value: "", max_chars: 200 },
    checkbox: {
      items: [
        ("Enable notifications", true),
        ("Dark mode", false),
        ("Auto-save", true),
        ("Show line numbers", false),
      ],
    },
    radio: {
      options: ["Small", "Medium", "Large", "Extra Large"],
      selected: "Medium",
    },
    select: {
      options: ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig"],
      selected: "",
    },
    toggle: {
      items: [
        ("Wi-Fi", true),
        ("Bluetooth", false),
        ("Airplane Mode", false),
        ("Do Not Disturb", true),
      ],
    },
    slider: { value: 50, min: 0, max: 100 },
    color_picker: {
      selected: "#6366f1",
      hex_input: "#6366f1",
      swatches: [
        "#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#6366f1",
        "#a855f7", "#ec4899", "#14b8a6", "#f97316", "#64748b",
      ],
    },
    avatar: {
      users: [
        ("Alice", "#6366f1", true),
        ("Bob", "#22c55e", false),
        ("Carol", "#f59e0b", true),
        ("Dave", "#ef4444", false),
        ("Eve", "#a855f7", true),
      ],
    },
    badge: {
      counts: [("Messages", 3), ("Notifications", 12), ("Tasks", 0), ("Alerts", 99)],
    },
    progress: { value: 65, animating: false },
    tooltip: { active_index: -1 },
    tag: {
      tags: ["MoonBit", "Rabbita", "MVU", "Frontend"],
      input: "",
    },
    skeleton: { loading: true },
    empty_state: { has_data: false },
    accordion: {
      items: [
        ("What is MoonBit?", "MoonBit is a modern programming language designed for cloud and edge computing with a focus on performance and developer experience."),
        ("What is the Elm Architecture?", "The Elm Architecture (MVU) is a pattern for building web apps with three parts: Model (state), View (render), and Update (state transitions)."),
        ("How does Rabbita work?", "Rabbita is a MoonBit framework that implements the Elm Architecture with virtual DOM diffing for efficient browser rendering."),
      ],
      open_index: -1,
    },
    tabs: {
      tabs: [
        ("Overview", "This component gallery showcases 30 UI components built with the Rabbita MVU framework in MoonBit."),
        ("Usage", "Each component demonstrates a specific MVU pattern: pure state updates, command side effects, or component composition."),
        ("API", "Components are functions that take (Model, Dispatch[Msg]) -> Html. State lives in the Model, events dispatch Msg values."),
      ],
      active: 0,
    },
    breadcrumb: { path: ["Home", "Components", "Navigation", "Breadcrumb"] },
    tree_view: {
      roots: [
        {
          id: 1,
          label: "src",
          children: [
            {
              id: 2,
              label: "frontend",
              children: [
                { id: 3, label: "main.mbt", children: [] },
                {
                  id: 4,
                  label: "app",
                  children: [
                    { id: 5, label: "types.mbt", children: [] },
                    { id: 6, label: "update.mbt", children: [] },
                    { id: 7, label: "view.mbt", children: [] },
                  ],
                },
              ],
            },
            {
              id: 8,
              label: "shared",
              children: [{ id: 9, label: "types.mbt", children: [] }],
            },
          ],
        },
        {
          id: 10,
          label: "public",
          children: [
            { id: 11, label: "index.html", children: [] },
            { id: 12, label: "frontend.js", children: [] },
          ],
        },
      ],
      expanded: [1, 2],
    },
    data_table: {
      rows: [
        { name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
        { name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
        { name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
        { name: "Dave Brown", email: "dave@example.com", role: "Editor", status: "Active" },
        { name: "Eve Davis", email: "eve@example.com", role: "Admin", status: "Active" },
        { name: "Frank Miller", email: "frank@example.com", role: "Viewer", status: "Inactive" },
        { name: "Grace Lee", email: "grace@example.com", role: "Editor", status: "Active" },
        { name: "Hank Wilson", email: "hank@example.com", role: "Viewer", status: "Active" },
      ],
      sort_col: "name",
      sort_asc: true,
      page: 0,
      page_size: 5,
      selected: [],
    },
    calendar: {
      year: 2026,
      month: 3,
      selected_day: 14,
      today_year: 2026,
      today_month: 3,
      today_day: 14,
    },
    timeline: {
      events: [
        { title: "Project Started", description: "Initial commit and project setup", time: "Jan 2026", color: "#6366f1" },
        { title: "MVP Released", description: "First working version with core features", time: "Feb 2026", color: "#22c55e" },
        { title: "Component Gallery", description: "30 UI components showcasing MVU patterns", time: "Mar 2026", color: "#f59e0b" },
        { title: "v1.0 Launch", description: "Production-ready release with full docs", time: "Apr 2026", color: "#ef4444" },
      ],
    },
    chart: {
      bars: [
        { label: "Mon", value: 45, color: "#6366f1" },
        { label: "Tue", value: 72, color: "#6366f1" },
        { label: "Wed", value: 58, color: "#6366f1" },
        { label: "Thu", value: 90, color: "#6366f1" },
        { label: "Fri", value: 35, color: "#6366f1" },
        { label: "Sat", value: 20, color: "#94a3b8" },
        { label: "Sun", value: 15, color: "#94a3b8" },
      ],
      max_value: 100,
    },
    toast: { items: [], next_id: 1 },
    modal: { open: false, title: "Confirm Action", message: "Are you sure you want to proceed? This action cannot be undone.", confirmed: false },
    command_palette: {
      open: false,
      query: "",
      actions: [
        { id: 1, label: "Go to Inputs", shortcut: "G I", category: "Navigation" },
        { id: 2, label: "Go to Display", shortcut: "G D", category: "Navigation" },
        { id: 3, label: "Go to Data", shortcut: "G A", category: "Navigation" },
        { id: 4, label: "Toggle Dark Mode", shortcut: "Ctrl+D", category: "Settings" },
        { id: 5, label: "Show Toast", shortcut: "Ctrl+T", category: "Actions" },
        { id: 6, label: "Open Modal", shortcut: "Ctrl+M", category: "Actions" },
        { id: 7, label: "Reset All", shortcut: "Ctrl+R", category: "Actions" },
        { id: 8, label: "Go to Overlay", shortcut: "G O", category: "Navigation" },
      ],
      focus_index: 0,
    },
    kanban: {
      columns: [
        ("To Do", [
          { id: 1, title: "Design system tokens", color: "#6366f1" },
          { id: 2, title: "Write unit tests", color: "#22c55e" },
        ]),
        ("In Progress", [
          { id: 3, title: "Build gallery layout", color: "#f59e0b" },
        ]),
        ("Done", [
          { id: 4, title: "Set up project", color: "#94a3b8" },
          { id: 5, title: "Choose framework", color: "#94a3b8" },
        ]),
      ],
    },
    searchable_select: {
      options: [
        { label: "United States", value: "us" },
        { label: "United Kingdom", value: "uk" },
        { label: "Germany", value: "de" },
        { label: "France", value: "fr" },
        { label: "Japan", value: "jp" },
        { label: "Australia", value: "au" },
        { label: "Canada", value: "ca" },
        { label: "Brazil", value: "br" },
        { label: "India", value: "in" },
        { label: "South Korea", value: "kr" },
      ],
      query: "",
      selected: "",
      open: false,
      focus_index: 0,
    },
    date_range: {
      start_year: 2026,
      start_month: 3,
      start_day: 10,
      end_year: 2026,
      end_month: 3,
      end_day: 20,
      picking: "",
    },
    form_wizard: {
      steps: [
        {
          title: "Personal Info",
          fields: [
            { label: "Full Name", value: "", error: "" },
            { label: "Email", value: "", error: "" },
          ],
        },
        {
          title: "Account Setup",
          fields: [
            { label: "Username", value: "", error: "" },
            { label: "Password", value: "", error: "" },
          ],
        },
        {
          title: "Preferences",
          fields: [
            { label: "Language", value: "", error: "" },
            { label: "Timezone", value: "", error: "" },
          ],
        },
      ],
      current: 0,
      completed: false,
    },
  }
}

///|
pub fn Model::update(
  self : Model,
  msg~ : Msg,
  dispatch~ : @rabbita.Dispatch[Msg],
) -> (Model, @rabbita.Cmd) {
  match msg {
    // ── Navigation ───────────────────────────
    ChangeSection(s) => ({ ..self, section: s, component: 0 }, @rabbita.none)
    ChangeComponent(i) => ({ ..self, component: i }, @rabbita.none)

    // ── TextInput ────────────────────────────
    TextInputChanged(v) => {
      let error = if v.char_length() > 50 {
        "Maximum 50 characters"
      } else if v != "" && v.char_length() < 3 {
        "Minimum 3 characters"
      } else {
        ""
      }
      ({ ..self, text_input: { value: v, error } }, @rabbita.none)
    }

    // ── TextArea ─────────────────────────────
    TextAreaChanged(v) => {
      let trimmed = if v.char_length() > self.text_area.max_chars {
        v.substring(end=self.text_area.max_chars)
      } else {
        v
      }
      (
        { ..self, text_area: { ..self.text_area, value: trimmed } },
        @rabbita.none,
      )
    }

    // ── Checkbox ─────────────────────────────
    CheckboxToggled(i) => {
      let items = self.checkbox.items.mapi(fn(idx, pair) {
        if idx == i {
          (pair.0, not(pair.1))
        } else {
          pair
        }
      })
      ({ ..self, checkbox: { items, } }, @rabbita.none)
    }

    // ── Radio ────────────────────────────────
    RadioSelected(v) => (
      { ..self, radio: { ..self.radio, selected: v } },
      @rabbita.none,
    )

    // ── Select ───────────────────────────────
    SelectChanged(v) => (
      { ..self, select: { ..self.select, selected: v } },
      @rabbita.none,
    )

    // ── Toggle ───────────────────────────────
    ToggleSwitched(i) => {
      let items = self.toggle.items.mapi(fn(idx, pair) {
        if idx == i {
          (pair.0, not(pair.1))
        } else {
          pair
        }
      })
      ({ ..self, toggle: { items, } }, @rabbita.none)
    }

    // ── Slider ───────────────────────────────
    SliderChanged(v) => {
      let n = try {
        @strconv.parse_int(v)
      } catch {
        _ => self.slider.value
      }
      ({ ..self, slider: { ..self.slider, value: n } }, @rabbita.none)
    }

    // ── ColorPicker ──────────────────────────
    ColorSwatchClicked(c) => (
      {
        ..self,
        color_picker: { ..self.color_picker, selected: c, hex_input: c },
      },
      @rabbita.none,
    )
    ColorHexChanged(v) => {
      let selected = if v.has_prefix("#") && v.char_length() == 7 {
        v
      } else {
        self.color_picker.selected
      }
      (
        { ..self, color_picker: { ..self.color_picker, hex_input: v, selected } },
        @rabbita.none,
      )
    }

    // ── Progress ─────────────────────────────
    ProgressChanged(v) => {
      let n = try {
        @strconv.parse_int(v)
      } catch {
        _ => self.progress.value
      }
      let clamped = if n < 0 { 0 } else if n > 100 { 100 } else { n }
      (
        { ..self, progress: { ..self.progress, value: clamped } },
        @rabbita.none,
      )
    }

    // ── Tooltip ──────────────────────────────
    TooltipShow(i) => (
      { ..self, tooltip: { active_index: i } },
      @rabbita.none,
    )
    TooltipHide => ({ ..self, tooltip: { active_index: -1 } }, @rabbita.none)

    // ── Tag ──────────────────────────────────
    TagInputChanged(v) => (
      { ..self, tag: { ..self.tag, input: v } },
      @rabbita.none,
    )
    TagAdd => {
      let t = self.tag.input
      if t == "" {
        return (self, @rabbita.none)
      }
      let tags = self.tag.tags.copy()
      tags.push(t)
      ({ ..self, tag: { tags, input: "" } }, @rabbita.none)
    }
    TagRemove(i) => {
      let tags = self.tag.tags.copy()
      ignore(tags.remove(i))
      ({ ..self, tag: { ..self.tag, tags } }, @rabbita.none)
    }

    // ── Accordion ────────────────────────────
    AccordionToggle(i) => {
      let idx = if self.accordion.open_index == i { -1 } else { i }
      (
        { ..self, accordion: { ..self.accordion, open_index: idx } },
        @rabbita.none,
      )
    }

    // ── Tabs ─────────────────────────────────
    TabSelected(i) => (
      { ..self, tabs: { ..self.tabs, active: i } },
      @rabbita.none,
    )

    // ── Breadcrumb ───────────────────────────
    BreadcrumbNavigate(i) => {
      let path = self.breadcrumb.path.iter().take(i + 1).collect()
      ({ ..self, breadcrumb: { path, } }, @rabbita.none)
    }

    // ── TreeView ─────────────────────────────
    TreeToggle(id) => {
      let expanded = if self.tree_view.expanded.contains(id) {
        self.tree_view.expanded.filter(fn(x) { x != id })
      } else {
        let e = self.tree_view.expanded.copy()
        e.push(id)
        e
      }
      (
        { ..self, tree_view: { ..self.tree_view, expanded } },
        @rabbita.none,
      )
    }

    // ── DataTable ────────────────────────────
    TableSort(col) => {
      let asc = if self.data_table.sort_col == col {
        not(self.data_table.sort_asc)
      } else {
        true
      }
      (
        {
          ..self,
          data_table: { ..self.data_table, sort_col: col, sort_asc: asc, page: 0 },
        },
        @rabbita.none,
      )
    }
    TablePage(p) => (
      { ..self, data_table: { ..self.data_table, page: p } },
      @rabbita.none,
    )
    TableToggleRow(i) => {
      let selected = if self.data_table.selected.contains(i) {
        self.data_table.selected.filter(fn(x) { x != i })
      } else {
        let s = self.data_table.selected.copy()
        s.push(i)
        s
      }
      (
        { ..self, data_table: { ..self.data_table, selected } },
        @rabbita.none,
      )
    }
    TableSelectAll => {
      let total = self.data_table.rows.length()
      let selected : Array[Int] = if self.data_table.selected.length() == total {
        []
      } else {
        Array::makei(total, fn(i) { i })
      }
      (
        { ..self, data_table: { ..self.data_table, selected } },
        @rabbita.none,
      )
    }

    // ── Calendar ─────────────────────────────
    CalendarPrevMonth => {
      let mut m = self.calendar.month - 1
      let mut y = self.calendar.year
      if m < 1 {
        m = 12
        y = y - 1
      }
      (
        { ..self, calendar: { ..self.calendar, year: y, month: m } },
        @rabbita.none,
      )
    }
    CalendarNextMonth => {
      let mut m = self.calendar.month + 1
      let mut y = self.calendar.year
      if m > 12 {
        m = 1
        y = y + 1
      }
      (
        { ..self, calendar: { ..self.calendar, year: y, month: m } },
        @rabbita.none,
      )
    }
    CalendarSelectDay(d) => (
      { ..self, calendar: { ..self.calendar, selected_day: d } },
      @rabbita.none,
    )

    // ── Kanban ───────────────────────────────
    KanbanMoveCard(card_id, _from_col, to_col) => {
      let mut card : KanbanCard? = None
      let columns = self.kanban.columns.mapi(fn(_, col) {
        let filtered = col.1.filter(fn(c) {
          if c.id == card_id {
            card = Some(c)
            false
          } else {
            true
          }
        })
        (col.0, filtered)
      })
      match card {
        None => (self, @rabbita.none)
        Some(c) => {
          let columns2 = columns.mapi(fn(idx, col) {
            if idx == to_col {
              let cards = col.1.copy()
              cards.push(c)
              (col.0, cards)
            } else {
              col
            }
          })
          ({ ..self, kanban: { columns: columns2 } }, @rabbita.none)
        }
      }
    }

    // ── Toast ────────────────────────────────
    ShowToast(title, message, kind) => {
      let id = self.toast.next_id
      let item : ToastItem = { id, title, message, kind }
      let items = self.toast.items.copy()
      items.push(item)
      let cmd = @rabbita.delay(dispatch(DismissToast(id)), 3000)
      (
        { ..self, toast: { items, next_id: id + 1 } },
        cmd,
      )
    }
    DismissToast(id) => {
      let items = self.toast.items.filter(fn(t) { t.id != id })
      ({ ..self, toast: { ..self.toast, items } }, @rabbita.none)
    }

    // ── Modal ────────────────────────────────
    ModalOpen => (
      {
        ..self,
        modal: { ..self.modal, open: true, confirmed: false },
      },
      @rabbita.none,
    )
    ModalClose => (
      { ..self, modal: { ..self.modal, open: false } },
      @rabbita.none,
    )
    ModalConfirm => (
      {
        ..self,
        modal: { ..self.modal, open: false, confirmed: true },
      },
      @rabbita.none,
    )

    // ── Skeleton ─────────────────────────────
    SkeletonToggle => (
      {
        ..self,
        skeleton: { loading: not(self.skeleton.loading) },
      },
      @rabbita.none,
    )

    // ── EmptyState ───────────────────────────
    EmptyStateToggle => (
      {
        ..self,
        empty_state: { has_data: not(self.empty_state.has_data) },
      },
      @rabbita.none,
    )

    // ── SearchableSelect ─────────────────────
    SearchableQueryChanged(v) => (
      {
        ..self,
        searchable_select: { ..self.searchable_select, query: v, focus_index: 0 },
      },
      @rabbita.none,
    )
    SearchableSelect_(v) => (
      {
        ..self,
        searchable_select: {
          ..self.searchable_select,
          selected: v,
          open: false,
          query: "",
        },
      },
      @rabbita.none,
    )
    SearchableToggleOpen => (
      {
        ..self,
        searchable_select: {
          ..self.searchable_select,
          open: not(self.searchable_select.open),
          query: "",
        },
      },
      @rabbita.none,
    )
    SearchableFocus(i) => (
      {
        ..self,
        searchable_select: { ..self.searchable_select, focus_index: i },
      },
      @rabbita.none,
    )

    // ── DateRange ────────────────────────────
    DateRangeSetPicking(which) => (
      { ..self, date_range: { ..self.date_range, picking: which } },
      @rabbita.none,
    )
    DateRangeSelectDay(d) => {
      let dr = self.date_range
      if dr.picking == "start" {
        (
          {
            ..self,
            date_range: { ..dr, start_day: d, picking: "" },
          },
          @rabbita.none,
        )
      } else if dr.picking == "end" {
        (
          {
            ..self,
            date_range: { ..dr, end_day: d, picking: "" },
          },
          @rabbita.none,
        )
      } else {
        (self, @rabbita.none)
      }
    }
    DateRangePrevMonth => {
      let dr = self.date_range
      let mut m = dr.start_month - 1
      let mut y = dr.start_year
      if m < 1 {
        m = 12
        y = y - 1
      }
      (
        {
          ..self,
          date_range: {
            ..dr,
            start_year: y,
            start_month: m,
            end_year: y,
            end_month: m,
          },
        },
        @rabbita.none,
      )
    }
    DateRangeNextMonth => {
      let dr = self.date_range
      let mut m = dr.start_month + 1
      let mut y = dr.start_year
      if m > 12 {
        m = 1
        y = y + 1
      }
      (
        {
          ..self,
          date_range: {
            ..dr,
            start_year: y,
            start_month: m,
            end_year: y,
            end_month: m,
          },
        },
        @rabbita.none,
      )
    }

    // ── CommandPalette ───────────────────────
    CommandPaletteToggle => (
      {
        ..self,
        command_palette: {
          ..self.command_palette,
          open: not(self.command_palette.open),
          query: "",
          focus_index: 0,
        },
      },
      @rabbita.none,
    )
    CommandPaletteSearch(q) => (
      {
        ..self,
        command_palette: { ..self.command_palette, query: q, focus_index: 0 },
      },
      @rabbita.none,
    )
    CommandPaletteFocus(i) => (
      {
        ..self,
        command_palette: { ..self.command_palette, focus_index: i },
      },
      @rabbita.none,
    )
    CommandPaletteSelect(_) => (
      {
        ..self,
        command_palette: { ..self.command_palette, open: false, query: "" },
      },
      @rabbita.none,
    )

    // ── FormWizard ───────────────────────────
    WizardFieldChanged(field_idx, val) => {
      let steps = self.form_wizard.steps.copy()
      let step = steps[self.form_wizard.current]
      let fields = step.fields.copy()
      let f = fields[field_idx]
      fields[field_idx] = { ..f, value: val, error: "" }
      steps[self.form_wizard.current] = { ..step, fields }
      (
        { ..self, form_wizard: { ..self.form_wizard, steps } },
        @rabbita.none,
      )
    }
    WizardNext => {
      let fw = self.form_wizard
      let step = fw.steps[fw.current]
      // Validate current step
      let mut has_error = false
      let fields = step.fields.mapi(fn(_, f) {
        if f.value == "" {
          has_error = true
          { ..f, error: "\{f.label} is required" }
        } else {
          f
        }
      })
      if has_error {
        let steps = fw.steps.copy()
        steps[fw.current] = { ..step, fields }
        return (
          { ..self, form_wizard: { ..fw, steps } },
          @rabbita.none,
        )
      }
      if fw.current >= fw.steps.length() - 1 {
        return (
          { ..self, form_wizard: { ..fw, completed: true } },
          @rabbita.none,
        )
      }
      (
        { ..self, form_wizard: { ..fw, current: fw.current + 1 } },
        @rabbita.none,
      )
    }
    WizardPrev => {
      let c = self.form_wizard.current
      if c > 0 {
        (
          { ..self, form_wizard: { ..self.form_wizard, current: c - 1 } },
          @rabbita.none,
        )
      } else {
        (self, @rabbita.none)
      }
    }
  }
}
