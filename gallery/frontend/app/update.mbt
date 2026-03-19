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
        "#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#6366f1", "#a855f7", "#ec4899",
        "#14b8a6", "#f97316", "#64748b",
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
      counts: [
        ("Messages", 3),
        ("Notifications", 12),
        ("Tasks", 0),
        ("Alerts", 99),
      ],
    },
    progress: { value: 65, animating: false },
    tooltip: { active_index: -1 },
    tag: { tags: ["MoonBit", "Rabbita", "MVU", "Frontend"], input: "" },
    skeleton: { loading: true },
    empty_state: { has_data: false },
    accordion: {
      items: [
        (
          "What is MoonBit?", "MoonBit is a modern programming language designed for cloud and edge computing with a focus on performance and developer experience.",
        ),
        (
          "What is the Elm Architecture?", "The Elm Architecture (MVU) is a pattern for building web apps with three parts: Model (state), View (render), and Update (state transitions).",
        ),
        (
          "How does Rabbita work?", "Rabbita is a MoonBit framework that implements the Elm Architecture with virtual DOM diffing for efficient browser rendering.",
        ),
      ],
      open_index: -1,
    },
    tabs: {
      tabs: [
        (
          "Overview", "This component gallery showcases 30 UI components built with the Rabbita MVU framework in MoonBit.",
        ),
        (
          "Usage", "Each component demonstrates a specific MVU pattern: pure state updates, command side effects, or component composition.",
        ),
        (
          "API", "Components are functions that take (Model, Dispatch[Msg]) -> Html. State lives in the Model, events dispatch Msg values.",
        ),
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
        {
          name: "Alice Johnson",
          email: "alice@example.com",
          role: "Admin",
          status: "Active",
        },
        {
          name: "Bob Smith",
          email: "bob@example.com",
          role: "Editor",
          status: "Active",
        },
        {
          name: "Carol White",
          email: "carol@example.com",
          role: "Viewer",
          status: "Inactive",
        },
        {
          name: "Dave Brown",
          email: "dave@example.com",
          role: "Editor",
          status: "Active",
        },
        {
          name: "Eve Davis",
          email: "eve@example.com",
          role: "Admin",
          status: "Active",
        },
        {
          name: "Frank Miller",
          email: "frank@example.com",
          role: "Viewer",
          status: "Inactive",
        },
        {
          name: "Grace Lee",
          email: "grace@example.com",
          role: "Editor",
          status: "Active",
        },
        {
          name: "Hank Wilson",
          email: "hank@example.com",
          role: "Viewer",
          status: "Active",
        },
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
        {
          title: "Project Started",
          description: "Initial commit and project setup",
          time: "Jan 2026",
          color: "#6366f1",
        },
        {
          title: "MVP Released",
          description: "First working version with core features",
          time: "Feb 2026",
          color: "#22c55e",
        },
        {
          title: "Component Gallery",
          description: "30 UI components showcasing MVU patterns",
          time: "Mar 2026",
          color: "#f59e0b",
        },
        {
          title: "v1.0 Launch",
          description: "Production-ready release with full docs",
          time: "Apr 2026",
          color: "#ef4444",
        },
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
    modal: {
      open: false,
      title: "Confirm Action",
      message: "Are you sure you want to proceed? This action cannot be undone.",
      confirmed: false,
    },
    command_palette: {
      open: false,
      query: "",
      actions: [
        {
          id: 1,
          label: "Go to Inputs",
          shortcut: "G I",
          category: "Navigation",
        },
        {
          id: 2,
          label: "Go to Display",
          shortcut: "G D",
          category: "Navigation",
        },
        { id: 3, label: "Go to Data", shortcut: "G A", category: "Navigation" },
        {
          id: 4,
          label: "Toggle Dark Mode",
          shortcut: "Ctrl+D",
          category: "Settings",
        },
        { id: 5, label: "Show Toast", shortcut: "Ctrl+T", category: "Actions" },
        { id: 6, label: "Open Modal", shortcut: "Ctrl+M", category: "Actions" },
        { id: 7, label: "Reset All", shortcut: "Ctrl+R", category: "Actions" },
        {
          id: 8,
          label: "Go to Overlay",
          shortcut: "G O",
          category: "Navigation",
        },
      ],
      focus_index: 0,
    },
    kanban: {
      columns: [
        (
          "To Do",
          [
            { id: 1, title: "Design system tokens", color: "#6366f1" },
            { id: 2, title: "Write unit tests", color: "#22c55e" },
          ],
        ),
        (
          "In Progress",
          [{ id: 3, title: "Build gallery layout", color: "#f59e0b" }],
        ),
        (
          "Done",
          [
            { id: 4, title: "Set up project", color: "#94a3b8" },
            { id: 5, title: "Choose framework", color: "#94a3b8" },
          ],
        ),
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
    stopwatch: { elapsed_ms: 0, running: false, gen: 0 },
    countdown: { target_seconds: 30, remaining: 30, running: false, finished: false, gen: 0 },
    typewriter: { full_text: "The quick brown fox jumps over the lazy dog. MoonBit makes web development elegant and fun!", visible_chars: 0, running: false },
    carousel: { items: ["Welcome to Gallery", "30+ UI Components", "Built with MoonBit", "Elm Architecture (MVU)", "Pure Frontend"], current: 0, auto_playing: false, gen: 0 },
    animated_counter: { value: 42, display_value: 42 },
    star_rating: { rating: 0, hover: 0 },
    pin_input: { digits: ["", "", "", ""], focus_index: 0, verified: false },
    password_strength: { password: "", visible: false },
    tag_auto: { tags: ["MoonBit", "Rabbita"], input: "", suggestions: ["JavaScript", "TypeScript", "Rust", "Go", "Python", "MoonBit", "Elm", "Haskell", "OCaml", "Zig"], show_suggestions: false, focus_index: -1 },
    inline_edit: { items: [("Click to edit this text", false), ("Double-click me too", false), ("I am also editable", false)], edit_value: "" },
    stepper: { value: 1, min: 0, max: 20, step: 1 },
    split_pane: { left_percent: 50 },
    virtual_list: { total_items: 10000, scroll_top: 0, item_height: 40, visible_count: 10 },
    masonry: { items: [
      { id: 1, title: "Mountain View", height: 180, color: "#6366f1" },
      { id: 2, title: "Ocean Breeze", height: 120, color: "#22c55e" },
      { id: 3, title: "Sunset Glow", height: 200, color: "#f59e0b" },
      { id: 4, title: "Forest Path", height: 140, color: "#ef4444" },
      { id: 5, title: "City Lights", height: 160, color: "#a855f7" },
      { id: 6, title: "Desert Sand", height: 110, color: "#14b8a6" },
      { id: 7, title: "Snow Peak", height: 190, color: "#3b82f6" },
      { id: 8, title: "River Flow", height: 130, color: "#ec4899" },
    ], columns: 3 },
    confirm_button: { confirming: false, executed: false },
    copy_clipboard: { text: "Hello from MoonBit Gallery! 🌙", copied: false, gen: 0 },
    undo_snackbar: { message: "", visible: false, items: ["Item Alpha", "Item Beta", "Item Gamma", "Item Delta"], last_removed: "", last_removed_index: -1 },
    markdown: { source: "# Hello MoonBit\n\nThis is **bold** and *italic* text.\n\n- List item one\n- List item two\n\n`inline code` and a [link](https://moonbitlang.com)\n\n> A blockquote about MoonBit." },
    spreadsheet: { cells: [
      [{ value: "Name" }, { value: "Score" }, { value: "Grade" }],
      [{ value: "Alice" }, { value: "95" }, { value: "A" }],
      [{ value: "Bob" }, { value: "82" }, { value: "B" }],
      [{ value: "Carol" }, { value: "91" }, { value: "A" }],
    ], selected_row: -1, selected_col: -1, editing: false, edit_value: "" },
    drag_sort: { items: ["First item", "Second item", "Third item", "Fourth item", "Fifth item"] },
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
          (pair.0, !(pair.1))
        } else {
          pair
        }
      })
      ({ ..self, checkbox: { items, } }, @rabbita.none)
    }

    // ── Radio ────────────────────────────────
    RadioSelected(v) =>
      ({ ..self, radio: { ..self.radio, selected: v } }, @rabbita.none)

    // ── Select ───────────────────────────────
    SelectChanged(v) =>
      ({ ..self, select: { ..self.select, selected: v } }, @rabbita.none)

    // ── Toggle ───────────────────────────────
    ToggleSwitched(i) => {
      let items = self.toggle.items.mapi(fn(idx, pair) {
        if idx == i {
          (pair.0, !(pair.1))
        } else {
          pair
        }
      })
      ({ ..self, toggle: { items, } }, @rabbita.none)
    }

    // ── Slider ───────────────────────────────
    SliderChanged(v) => {
      let n = @strconv.parse_int(v) catch { _ => self.slider.value }
      ({ ..self, slider: { ..self.slider, value: n } }, @rabbita.none)
    }

    // ── ColorPicker ──────────────────────────
    ColorSwatchClicked(c) =>
      (
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
        {
          ..self,
          color_picker: { ..self.color_picker, hex_input: v, selected },
        },
        @rabbita.none,
      )
    }

    // ── Progress ─────────────────────────────
    ProgressChanged(v) => {
      let n = @strconv.parse_int(v) catch { _ => self.progress.value }
      let clamped = if n < 0 { 0 } else if n > 100 { 100 } else { n }
      ({ ..self, progress: { ..self.progress, value: clamped } }, @rabbita.none)
    }

    // ── Tooltip ──────────────────────────────
    TooltipShow(i) => ({ ..self, tooltip: { active_index: i } }, @rabbita.none)
    TooltipHide => ({ ..self, tooltip: { active_index: -1 } }, @rabbita.none)

    // ── Tag ──────────────────────────────────
    TagInputChanged(v) =>
      ({ ..self, tag: { ..self.tag, input: v } }, @rabbita.none)
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
      ({ ..self, tag: { ..self.tag, tags, } }, @rabbita.none)
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
    TabSelected(i) =>
      ({ ..self, tabs: { ..self.tabs, active: i } }, @rabbita.none)

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
      ({ ..self, tree_view: { ..self.tree_view, expanded, } }, @rabbita.none)
    }

    // ── DataTable ────────────────────────────
    TableSort(col) => {
      let asc = if self.data_table.sort_col == col {
        !(self.data_table.sort_asc)
      } else {
        true
      }
      (
        {
          ..self,
          data_table: {
            ..self.data_table,
            sort_col: col,
            sort_asc: asc,
            page: 0,
          },
        },
        @rabbita.none,
      )
    }
    TablePage(p) => {
      let total = self.data_table.rows.length()
      let max_page = if total == 0 {
        0
      } else {
        (total - 1) / self.data_table.page_size
      }
      let clamped = if p < 0 { 0 } else if p > max_page { max_page } else { p }
      (
        { ..self, data_table: { ..self.data_table, page: clamped } },
        @rabbita.none,
      )
    }
    TableToggleRow(i) => {
      let selected = if self.data_table.selected.contains(i) {
        self.data_table.selected.filter(fn(x) { x != i })
      } else {
        let s = self.data_table.selected.copy()
        s.push(i)
        s
      }
      ({ ..self, data_table: { ..self.data_table, selected, } }, @rabbita.none)
    }
    TableSelectAll => {
      let total = self.data_table.rows.length()
      let selected : Array[Int] = if self.data_table.selected.length() == total {
        []
      } else {
        Array::makei(total, fn(i) { i })
      }
      ({ ..self, data_table: { ..self.data_table, selected, } }, @rabbita.none)
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
    CalendarSelectDay(d) =>
      (
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
      ({ ..self, toast: { items, next_id: id + 1 } }, cmd)
    }
    DismissToast(id) => {
      let items = self.toast.items.filter(fn(t) { t.id != id })
      ({ ..self, toast: { ..self.toast, items, } }, @rabbita.none)
    }

    // ── Modal ────────────────────────────────
    ModalOpen =>
      (
        { ..self, modal: { ..self.modal, open: true, confirmed: false } },
        @rabbita.none,
      )
    ModalClose =>
      ({ ..self, modal: { ..self.modal, open: false } }, @rabbita.none)
    ModalConfirm =>
      (
        { ..self, modal: { ..self.modal, open: false, confirmed: true } },
        @rabbita.none,
      )

    // ── Skeleton ─────────────────────────────
    SkeletonToggle =>
      (
        { ..self, skeleton: { loading: !(self.skeleton.loading) } },
        @rabbita.none,
      )

    // ── EmptyState ───────────────────────────
    EmptyStateToggle =>
      (
        { ..self, empty_state: { has_data: !(self.empty_state.has_data) } },
        @rabbita.none,
      )

    // ── SearchableSelect ─────────────────────
    SearchableQueryChanged(v) =>
      (
        {
          ..self,
          searchable_select: {
            ..self.searchable_select,
            query: v,
            focus_index: 0,
          },
        },
        @rabbita.none,
      )
    SearchableSelect_(v) =>
      (
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
    SearchableToggleOpen =>
      (
        {
          ..self,
          searchable_select: {
            ..self.searchable_select,
            open: !(self.searchable_select.open),
            query: "",
          },
        },
        @rabbita.none,
      )
    SearchableFocus(i) =>
      (
        {
          ..self,
          searchable_select: { ..self.searchable_select, focus_index: i },
        },
        @rabbita.none,
      )

    // ── DateRange ────────────────────────────
    DateRangeSetPicking(which) =>
      (
        { ..self, date_range: { ..self.date_range, picking: which } },
        @rabbita.none,
      )
    DateRangeSelectDay(d) => {
      let dr = self.date_range
      if dr.picking == "start" {
        (
          { ..self, date_range: { ..dr, start_day: d, picking: "" } },
          @rabbita.none,
        )
      } else if dr.picking == "end" {
        (
          { ..self, date_range: { ..dr, end_day: d, picking: "" } },
          @rabbita.none,
        )
      } else {
        (self, @rabbita.none)
      }
    }
    DateRangePrevMonth => {
      let dr = self.date_range
      // Navigate the viewing month without touching start/end dates
      let mut m = dr.start_month - 1
      let mut y = dr.start_year
      if m < 1 {
        m = 12
        y = y - 1
      }
      (
        { ..self, date_range: { ..dr, start_year: y, start_month: m } },
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
        { ..self, date_range: { ..dr, start_year: y, start_month: m } },
        @rabbita.none,
      )
    }

    // ── CommandPalette ───────────────────────
    CommandPaletteToggle =>
      (
        {
          ..self,
          command_palette: {
            ..self.command_palette,
            open: !(self.command_palette.open),
            query: "",
            focus_index: 0,
          },
        },
        @rabbita.none,
      )
    CommandPaletteSearch(q) =>
      (
        {
          ..self,
          command_palette: { ..self.command_palette, query: q, focus_index: 0 },
        },
        @rabbita.none,
      )
    CommandPaletteFocus(i) =>
      (
        { ..self, command_palette: { ..self.command_palette, focus_index: i } },
        @rabbita.none,
      )
    CommandPaletteSelect(id) => {
      let closed = {
        ..self,
        command_palette: { ..self.command_palette, open: false, query: "" },
      }
      // Execute the selected action
      match id {
        1 => ({ ..closed, section: Inputs, component: 0 }, @rabbita.none)
        2 => ({ ..closed, section: Display, component: 0 }, @rabbita.none)
        3 => ({ ..closed, section: Data, component: 0 }, @rabbita.none)
        5 =>
          closed.update(
            msg=ShowToast("Command", "Triggered from palette", "info"),
            dispatch~,
          )
        6 =>
          (
            {
              ..closed,
              modal: { ..closed.modal, open: true, confirmed: false },
            },
            @rabbita.none,
          )
        8 => ({ ..closed, section: Overlay, component: 0 }, @rabbita.none)
        _ => (closed, @rabbita.none)
      }
    }

    // ── FormWizard ───────────────────────────
    WizardFieldChanged(field_idx, val) => {
      let steps = self.form_wizard.steps.copy()
      let step = steps[self.form_wizard.current]
      let fields = step.fields.copy()
      let f = fields[field_idx]
      fields[field_idx] = { ..f, value: val, error: "" }
      steps[self.form_wizard.current] = { ..step, fields, }
      ({ ..self, form_wizard: { ..self.form_wizard, steps, } }, @rabbita.none)
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
        steps[fw.current] = { ..step, fields, }
        return ({ ..self, form_wizard: { ..fw, steps, } }, @rabbita.none)
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

    // ── Stopwatch ────────────────────────────
    StopwatchToggle => {
      let sw = self.stopwatch
      if !sw.running {
        let g = sw.gen + 1
        let cmd = @rabbita.delay(dispatch(StopwatchTick(g)), 100)
        ({ ..self, stopwatch: { ..sw, running: true, gen: g } }, cmd)
      } else {
        ({ ..self, stopwatch: { ..sw, running: false } }, @rabbita.none)
      }
    }
    StopwatchReset => ({ ..self, stopwatch: { elapsed_ms: 0, running: false, gen: self.stopwatch.gen } }, @rabbita.none)
    StopwatchTick(g) => {
      if !self.stopwatch.running || g != self.stopwatch.gen { return (self, @rabbita.none) }
      let elapsed = self.stopwatch.elapsed_ms + 100
      let cmd = @rabbita.delay(dispatch(StopwatchTick(g)), 100)
      ({ ..self, stopwatch: { ..self.stopwatch, elapsed_ms: elapsed } }, cmd)
    }

    // ── Countdown ────────────────────────────
    CountdownSet(v) => {
      let n = @strconv.parse_int(v) catch { _ => self.countdown.target_seconds }
      let clamped = if n < 1 { 1 } else if n > 3600 { 3600 } else { n }
      ({ ..self, countdown: { target_seconds: clamped, remaining: clamped, running: false, finished: false, gen: self.countdown.gen } }, @rabbita.none)
    }
    CountdownToggle => {
      let cd = self.countdown
      if !cd.running && cd.remaining > 0 {
        let g = cd.gen + 1
        let cmd = @rabbita.delay(dispatch(CountdownTick(g)), 1000)
        ({ ..self, countdown: { ..cd, running: true, gen: g } }, cmd)
      } else {
        ({ ..self, countdown: { ..cd, running: false } }, @rabbita.none)
      }
    }
    CountdownReset => ({ ..self, countdown: { ..self.countdown, remaining: self.countdown.target_seconds, running: false, finished: false } }, @rabbita.none)
    CountdownTick(g) => {
      if !self.countdown.running || g != self.countdown.gen { return (self, @rabbita.none) }
      let r = self.countdown.remaining - 1
      if r <= 0 {
        ({ ..self, countdown: { ..self.countdown, remaining: 0, running: false, finished: true } }, @rabbita.none)
      } else {
        let cmd = @rabbita.delay(dispatch(CountdownTick(g)), 1000)
        ({ ..self, countdown: { ..self.countdown, remaining: r } }, cmd)
      }
    }

    // ── Typewriter ───────────────────────────
    TypewriterPause => ({ ..self, typewriter: { ..self.typewriter, running: false } }, @rabbita.none)
    TypewriterStart => {
      let cmd = @rabbita.delay(dispatch(TypewriterTick), 50)
      ({ ..self, typewriter: { ..self.typewriter, visible_chars: 0, running: true } }, cmd)
    }
    TypewriterTick => {
      let tw = self.typewriter
      if !tw.running { return (self, @rabbita.none) }
      let next = tw.visible_chars + 1
      if next > tw.full_text.char_length() {
        ({ ..self, typewriter: { ..tw, visible_chars: tw.full_text.char_length(), running: false } }, @rabbita.none)
      } else {
        let cmd = @rabbita.delay(dispatch(TypewriterTick), 50)
        ({ ..self, typewriter: { ..tw, visible_chars: next } }, cmd)
      }
    }
    TypewriterReset => ({ ..self, typewriter: { ..self.typewriter, visible_chars: 0, running: false } }, @rabbita.none)

    // ── Carousel ─────────────────────────────
    CarouselPrev => {
      let c = self.carousel
      let prev = if c.current <= 0 { c.items.length() - 1 } else { c.current - 1 }
      ({ ..self, carousel: { ..c, current: prev } }, @rabbita.none)
    }
    CarouselNext => {
      let c = self.carousel
      let next = if c.current >= c.items.length() - 1 { 0 } else { c.current + 1 }
      ({ ..self, carousel: { ..c, current: next } }, @rabbita.none)
    }
    CarouselAutoToggle => {
      let c = self.carousel
      if !c.auto_playing {
        let g = c.gen + 1
        let cmd = @rabbita.delay(dispatch(CarouselAutoTick(g)), 2000)
        ({ ..self, carousel: { ..c, auto_playing: true, gen: g } }, cmd)
      } else {
        ({ ..self, carousel: { ..c, auto_playing: false } }, @rabbita.none)
      }
    }
    CarouselAutoTick(g) => {
      if !self.carousel.auto_playing || g != self.carousel.gen { return (self, @rabbita.none) }
      let c = self.carousel
      let next = if c.current >= c.items.length() - 1 { 0 } else { c.current + 1 }
      let cmd = @rabbita.delay(dispatch(CarouselAutoTick(g)), 2000)
      ({ ..self, carousel: { ..c, current: next } }, cmd)
    }

    // ── AnimatedCounter ──────────────────────
    CounterIncrement => {
      let v = self.animated_counter.value + 1
      let cmd = @rabbita.delay(dispatch(CounterAnimTick), 30)
      ({ ..self, animated_counter: { ..self.animated_counter, value: v } }, cmd)
    }
    CounterDecrement => {
      let v = self.animated_counter.value - 1
      let cmd = @rabbita.delay(dispatch(CounterAnimTick), 30)
      ({ ..self, animated_counter: { ..self.animated_counter, value: v } }, cmd)
    }
    CounterAnimTick => {
      let ac = self.animated_counter
      if ac.display_value == ac.value { return (self, @rabbita.none) }
      let step = if ac.display_value < ac.value { 1 } else { -1 }
      let cmd = @rabbita.delay(dispatch(CounterAnimTick), 30)
      ({ ..self, animated_counter: { ..ac, display_value: ac.display_value + step } }, cmd)
    }

    // ── StarRating ───────────────────────────
    StarClick(n) => ({ ..self, star_rating: { ..self.star_rating, rating: n } }, @rabbita.none)
    StarHover(n) => ({ ..self, star_rating: { ..self.star_rating, hover: n } }, @rabbita.none)
    StarLeave => ({ ..self, star_rating: { ..self.star_rating, hover: 0 } }, @rabbita.none)

    // ── PinInput ─────────────────────────────
    PinDigitChanged(idx, val) => {
      let digits = self.pin_input.digits.copy()
      let d = if val.char_length() > 1 { val.substring(start=val.char_length() - 1) } else { val }
      digits[idx] = d
      let next_focus = if d != "" && idx < digits.length() - 1 { idx + 1 } else { idx }
      let all_filled = digits.iter().all(fn(s) { s != "" })
      let verified = if all_filled { digits.iter().fold(init="", fn(acc, s) { acc + s }) == "1234" } else { false }
      let focus_id = "pin-\{next_focus}"
      let cmd = @rabbita.effect(async fn() noraise { focus_element(focus_id) })
      ({ ..self, pin_input: { digits, focus_index: next_focus, verified } }, cmd)
    }
    PinClear => ({ ..self, pin_input: { digits: ["", "", "", ""], focus_index: 0, verified: false } }, @rabbita.none)

    // ── PasswordStrength ─────────────────────
    PasswordChanged(v) => ({ ..self, password_strength: { ..self.password_strength, password: v } }, @rabbita.none)
    PasswordToggleVisible => ({ ..self, password_strength: { ..self.password_strength, visible: !self.password_strength.visible } }, @rabbita.none)

    // ── TagAutocomplete ──────────────────────
    TagAutoInputChanged(v) => {
      let show = v != ""
      ({ ..self, tag_auto: { ..self.tag_auto, input: v, show_suggestions: show, focus_index: -1 } }, @rabbita.none)
    }
    TagAutoAdd(v) => {
      if v == "" { return (self, @rabbita.none) }
      let tags = self.tag_auto.tags.copy()
      if !tags.contains(v) { tags.push(v) }
      ({ ..self, tag_auto: { ..self.tag_auto, tags, input: "", show_suggestions: false } }, @rabbita.none)
    }
    TagAutoRemove(i) => {
      let tags = self.tag_auto.tags.copy()
      ignore(tags.remove(i))
      ({ ..self, tag_auto: { ..self.tag_auto, tags } }, @rabbita.none)
    }
    TagAutoFocus(i) => ({ ..self, tag_auto: { ..self.tag_auto, focus_index: i } }, @rabbita.none)

    // ── InlineEdit ───────────────────────────
    InlineStartEdit(i) => {
      let items = self.inline_edit.items.mapi(fn(idx, pair) { if idx == i { (pair.0, true) } else { (pair.0, false) } })
      ({ ..self, inline_edit: { items, edit_value: self.inline_edit.items[i].0 } }, @rabbita.none)
    }
    InlineEditChanged(v) => ({ ..self, inline_edit: { ..self.inline_edit, edit_value: v } }, @rabbita.none)
    InlineSaveEdit(i) => {
      let items = self.inline_edit.items.mapi(fn(idx, pair) { if idx == i { (self.inline_edit.edit_value, false) } else { pair } })
      ({ ..self, inline_edit: { items, edit_value: "" } }, @rabbita.none)
    }
    InlineCancelEdit(i) => {
      let items = self.inline_edit.items.mapi(fn(idx, pair) { if idx == i { (pair.0, false) } else { pair } })
      ({ ..self, inline_edit: { items, edit_value: "" } }, @rabbita.none)
    }

    // ── Stepper ──────────────────────────────
    StepperIncrement => {
      let v = self.stepper.value + self.stepper.step
      let clamped = if v > self.stepper.max { self.stepper.max } else { v }
      ({ ..self, stepper: { ..self.stepper, value: clamped } }, @rabbita.none)
    }
    StepperDecrement => {
      let v = self.stepper.value - self.stepper.step
      let clamped = if v < self.stepper.min { self.stepper.min } else { v }
      ({ ..self, stepper: { ..self.stepper, value: clamped } }, @rabbita.none)
    }

    // ── SplitPane ────────────────────────────
    SplitPaneResize(v) => {
      let n = @strconv.parse_int(v) catch { _ => self.split_pane.left_percent }
      let clamped = if n < 10 { 10 } else if n > 90 { 90 } else { n }
      ({ ..self, split_pane: { left_percent: clamped } }, @rabbita.none)
    }

    // ── VirtualList ──────────────────────────
    VirtualScroll(v) => {
      let n = @strconv.parse_int(v) catch { _ => self.virtual_list.scroll_top }
      ({ ..self, virtual_list: { ..self.virtual_list, scroll_top: n } }, @rabbita.none)
    }

    // ── ConfirmButton ────────────────────────
    ConfirmButtonClick => ({ ..self, confirm_button: { confirming: true, executed: false } }, @rabbita.none)
    ConfirmButtonConfirm => ({ ..self, confirm_button: { confirming: false, executed: true } }, @rabbita.none)
    ConfirmButtonCancel => ({ ..self, confirm_button: { confirming: false, executed: false } }, @rabbita.none)

    // ── CopyToClipboard ──────────────────────
    CopyClick => {
      let ok = clipboard_write(self.copy_clipboard.text)
      if !ok {
        return (self, @rabbita.none)
      }
      let g = self.copy_clipboard.gen + 1
      let cmd = @rabbita.delay(dispatch(CopyReset(g)), 2000)
      ({ ..self, copy_clipboard: { ..self.copy_clipboard, copied: true, gen: g } }, cmd)
    }
    CopyReset(g) => {
      if g != self.copy_clipboard.gen { return (self, @rabbita.none) }
      ({ ..self, copy_clipboard: { ..self.copy_clipboard, copied: false } }, @rabbita.none)
    }

    // ── UndoSnackbar ─────────────────────────
    UndoRemoveItem(i) => {
      let items = self.undo_snackbar.items.copy()
      let removed = items[i]
      ignore(items.remove(i))
      let cmd = @rabbita.delay(dispatch(UndoDismiss), 5000)
      ({ ..self, undo_snackbar: { ..self.undo_snackbar, items, last_removed: removed, last_removed_index: i, visible: true, message: "Removed \"\{removed}\"" } }, cmd)
    }
    UndoUndo => {
      let us = self.undo_snackbar
      if us.last_removed == "" { return (self, @rabbita.none) }
      let items = us.items.copy()
      let idx = if us.last_removed_index > items.length() { items.length() } else { us.last_removed_index }
      items.insert(idx, us.last_removed)
      ({ ..self, undo_snackbar: { ..us, items, visible: false, last_removed: "", last_removed_index: -1 } }, @rabbita.none)
    }
    UndoDismiss => ({ ..self, undo_snackbar: { ..self.undo_snackbar, visible: false } }, @rabbita.none)

    // ── Markdown ─────────────────────────────
    MarkdownChanged(v) => ({ ..self, markdown: { source: v } }, @rabbita.none)

    // ── Spreadsheet ──────────────────────────
    SpreadsheetSelectCell(r, c) => ({ ..self, spreadsheet: { ..self.spreadsheet, selected_row: r, selected_col: c, editing: false, edit_value: "" } }, @rabbita.none)
    SpreadsheetStartEdit => {
      let ss = self.spreadsheet
      if ss.selected_row < 0 || ss.selected_col < 0 { return (self, @rabbita.none) }
      let v = ss.cells[ss.selected_row][ss.selected_col].value
      ({ ..self, spreadsheet: { ..ss, editing: true, edit_value: v } }, @rabbita.none)
    }
    SpreadsheetEditChanged(v) => ({ ..self, spreadsheet: { ..self.spreadsheet, edit_value: v } }, @rabbita.none)
    SpreadsheetSaveEdit => {
      let ss = self.spreadsheet
      let cells = ss.cells.mapi(fn(ri, row) {
        if ri == ss.selected_row {
          row.mapi(fn(ci, cell) { if ci == ss.selected_col { { value: ss.edit_value } } else { cell } })
        } else {
          row
        }
      })
      ({ ..self, spreadsheet: { ..ss, cells, editing: false, edit_value: "" } }, @rabbita.none)
    }
    SpreadsheetCancelEdit => ({ ..self, spreadsheet: { ..self.spreadsheet, editing: false, edit_value: "" } }, @rabbita.none)

    // ── DragSort ─────────────────────────────
    DragSortMoveUp(i) => {
      if i <= 0 { return (self, @rabbita.none) }
      let items = self.drag_sort.items.copy()
      let tmp = items[i]
      items[i] = items[i - 1]
      items[i - 1] = tmp
      ({ ..self, drag_sort: { items } }, @rabbita.none)
    }
    DragSortMoveDown(i) => {
      if i >= self.drag_sort.items.length() - 1 { return (self, @rabbita.none) }
      let items = self.drag_sort.items.copy()
      let tmp = items[i]
      items[i] = items[i + 1]
      items[i + 1] = tmp
      ({ ..self, drag_sort: { items } }, @rabbita.none)
    }
  }
}
