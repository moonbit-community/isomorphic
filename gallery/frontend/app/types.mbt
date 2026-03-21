// ── Gallery sections ─────────────────────────────────────────────────

///|
/// Categories used to group related UI components in the gallery sidebar.
pub(all) enum Section {
  /// Form input components such as text fields, checkboxes, and sliders.
  Inputs
  /// Read-only visual components like avatars, badges, and progress bars.
  Display
  /// Components for navigating between views, such as tabs and breadcrumbs.
  Navigation
  /// Components for presenting structured data like tables, calendars, and charts.
  Data
  /// Layered UI elements that appear above the main content, such as toasts and modals.
  Overlay
  /// Multi-part components composed of several simpler widgets working together.
  Composite
  /// Components with time-based behavior like stopwatches, countdowns, and carousels.
  Animated
  /// Specialized input components with enhanced interaction, such as star ratings and PIN entry.
  RichInputs
  /// Structural components that control how child elements are arranged on screen.
  Layout
  /// Components that communicate action outcomes to the user, such as confirmations and undo.
  Feedback
} derive(Debug, Eq, Show)

// ── Sub-model structs ────────────────────────────────────────────────

///|
/// State for a single-line text input with real-time validation.
pub(all) struct TextInputState {
  /// The current text entered by the user.
  value : String
  /// Validation error message, empty when input is valid.
  error : String
} derive(Debug)

///|
/// State for a multi-line text area with character count enforcement.
pub(all) struct TextAreaState {
  /// The current text content of the area.
  value : String
  /// Maximum number of characters allowed.
  max_chars : Int
} derive(Debug)

///|
/// State for a group of independently toggleable checkboxes.
pub(all) struct CheckboxState {
  /// Label and checked status for each checkbox option.
  items : Array[(String, Bool)]
} derive(Debug)

///|
/// State for a radio button group where exactly one option is selected.
pub(all) struct RadioState {
  /// Available choices presented as radio buttons.
  options : Array[String]
  /// The currently selected option value.
  selected : String
} derive(Debug)

///|
/// State for a dropdown select menu.
pub(all) struct SelectState {
  /// Available items in the dropdown list.
  options : Array[String]
  /// The currently chosen option, or empty if none selected.
  selected : String
} derive(Debug)

///|
/// State for a set of on/off toggle switches.
pub(all) struct ToggleState {
  /// Label and enabled status for each toggle switch.
  items : Array[(String, Bool)]
} derive(Debug)

///|
/// State for a range slider that selects a numeric value within bounds.
pub(all) struct SliderState {
  /// The current position of the slider thumb.
  value : Int
  /// The lowest selectable value.
  min : Int
  /// The highest selectable value.
  max : Int
} derive(Debug)

///|
/// State for a color picker with preset swatches and manual hex entry.
pub(all) struct ColorPickerState {
  /// The currently active color as a hex string (e.g. "#6366f1").
  selected : String
  /// The raw text in the hex input field, which may not yet be applied.
  hex_input : String
  /// Preset color swatches available for quick selection.
  swatches : Array[String]
} derive(Debug)

///|
/// State for displaying a row of user avatars with online status indicators.
pub(all) struct AvatarState {
  /// Each user represented as (name, background color, is online).
  users : Array[(String, String, Bool)]
} derive(Debug)

///|
/// State for notification badges that show numeric counts.
pub(all) struct BadgeState {
  /// Each badge as (label, count) where count is shown in a bubble.
  counts : Array[(String, Int)]
} derive(Debug)

///|
/// State for a progress bar showing completion percentage.
pub(all) struct ProgressState {
  /// Current progress as a percentage (0-100).
  value : Int
  /// Whether the progress bar is currently animating a transition.
  animating : Bool
} derive(Debug)

///|
/// State for hover-triggered tooltips showing supplementary information.
pub(all) struct TooltipState {
  /// Index of the currently visible tooltip, or -1 when none is shown.
  active_index : Int
} derive(Debug)

///|
/// State for a tag/chip list where tags can be added and removed.
pub(all) struct TagState {
  /// Currently applied tags.
  tags : Array[String]
  /// Text being typed for the next tag to add.
  input : String
} derive(Debug)

///|
/// State for collapsible accordion panels that show one section at a time.
pub(all) struct AccordionState {
  /// Each accordion section as (title, body content).
  items : Array[(String, String)]
  /// Index of the currently expanded section, or -1 when all are collapsed.
  open_index : Int
} derive(Debug)

///|
/// State for a tabbed navigation panel switching between content views.
pub(all) struct TabsState {
  /// Each tab as (label, content body text).
  tabs : Array[(String, String)]
  /// Index of the currently active tab.
  active : Int
} derive(Debug)

///|
/// State for breadcrumb navigation showing the user's location in a hierarchy.
pub(all) struct BreadcrumbState {
  /// Ordered segments from root to current location.
  path : Array[String]
} derive(Debug)

///|
/// A single row of data in the sortable, paginated data table.
pub(all) struct TableRow {
  /// Person's display name.
  name : String
  /// Contact email address.
  email : String
  /// Organizational role or job title.
  role : String
  /// Current status such as "Active" or "Inactive".
  status : String
} derive(Debug, Eq, Show)

///|
/// State for a data table with sorting, pagination, and row selection.
pub(all) struct DataTableState {
  /// All table rows in current sort order.
  rows : Array[TableRow]
  /// Column name currently used for sorting.
  sort_col : String
  /// Whether the sort direction is ascending.
  sort_asc : Bool
  /// Zero-based index of the current page.
  page : Int
  /// Maximum number of rows displayed per page.
  page_size : Int
  /// Indices of rows the user has selected via checkboxes.
  selected : Array[Int]
} derive(Debug)

///|
/// State for a month-view calendar with day selection and today highlighting.
pub(all) struct CalendarState {
  /// Year of the currently displayed month.
  year : Int
  /// Month being displayed (1-12).
  month : Int
  /// Day number the user has selected, or 0 if none.
  selected_day : Int
  /// Year component of today's date, used for highlighting.
  today_year : Int
  /// Month component of today's date.
  today_month : Int
  /// Day component of today's date.
  today_day : Int
} derive(Debug)

///|
/// A single event displayed on a vertical timeline.
pub(all) struct TimelineEvent {
  /// Short heading for this event.
  title : String
  /// Detailed explanation of what happened.
  description : String
  /// Display string for when the event occurred (e.g. "2 hours ago").
  time : String
  /// Accent color for the timeline marker dot.
  color : String
} derive(Debug, Eq, Show)

///|
/// State for a vertical timeline showing chronological events.
pub(all) struct TimelineState {
  /// Ordered list of events to display from top to bottom.
  events : Array[TimelineEvent]
} derive(Debug)

///|
/// A node in a hierarchical tree structure that may contain child nodes.
pub(all) struct TreeNode {
  /// Unique identifier used to track expansion state.
  id : Int
  /// Display text shown for this node.
  label : String
  /// Nested child nodes forming the tree hierarchy.
  children : Array[TreeNode]
} derive(Debug, Eq, Show)

///|
/// State for an expandable/collapsible tree view of hierarchical data.
pub(all) struct TreeViewState {
  /// Top-level nodes of the tree.
  roots : Array[TreeNode]
  /// IDs of nodes whose children are currently visible.
  expanded : Array[Int]
} derive(Debug)

///|
/// A card on the kanban board that can be moved between columns.
pub(all) struct KanbanCard {
  /// Unique identifier for this card.
  id : Int
  /// Short description displayed on the card face.
  title : String
  /// Left-border accent color indicating card category.
  color : String
} derive(Debug, Eq, Show)

///|
/// State for a kanban board with named columns containing movable cards.
pub(all) struct KanbanState {
  /// Each column as (column title, cards in that column).
  columns : Array[(String, Array[KanbanCard])]
} derive(Debug)

///|
/// A single bar in an SVG bar chart visualization.
pub(all) struct ChartBar {
  /// Category label displayed beneath the bar.
  label : String
  /// Numeric value determining the bar height.
  value : Int
  /// Fill color of the bar.
  color : String
} derive(Debug, Eq, Show)

///|
/// State for an SVG bar chart showing categorical data.
pub(all) struct ChartState {
  /// Data series rendered as vertical bars.
  bars : Array[ChartBar]
  /// Upper bound of the y-axis used to scale bar heights.
  max_value : Int
} derive(Debug)

///|
/// A single toast notification shown temporarily to the user.
pub(all) struct ToastItem {
  /// Unique identifier used when dismissing this toast.
  id : Int
  /// Bold heading of the notification.
  title : String
  /// Detailed notification body text.
  message : String
  /// Severity category such as "success", "error", or "info".
  kind : String
} derive(Debug, Eq, Show)

///|
/// State for the toast notification system managing active notifications.
pub(all) struct ToastState {
  /// Currently visible toast notifications.
  items : Array[ToastItem]
  /// Auto-incrementing counter for assigning unique toast IDs.
  next_id : Int
} derive(Debug)

///|
/// State for a confirmation modal dialog with accept/cancel actions.
pub(all) struct ModalState {
  /// Whether the modal overlay is currently visible.
  open : Bool
  /// Heading text displayed at the top of the dialog.
  title : String
  /// Body text explaining what the user is confirming.
  message : String
  /// Whether the user has clicked the confirm button.
  confirmed : Bool
} derive(Debug)

///|
/// State for skeleton loading placeholders with shimmer animation.
pub(all) struct SkeletonState {
  /// Whether the skeleton placeholders are shown instead of real content.
  loading : Bool
} derive(Debug)

///|
/// State for toggling between an empty-state placeholder and populated content.
pub(all) struct EmptyStateState {
  /// When false, the empty-state illustration and call-to-action are shown.
  has_data : Bool
} derive(Debug)

///|
/// A single option in a searchable select dropdown.
pub(all) struct SelectOption {
  /// Human-readable text displayed in the dropdown.
  label : String
  /// Programmatic identifier submitted when this option is chosen.
  value : String
} derive(Debug, Eq, Show)

///|
/// State for a select dropdown with type-ahead filtering and keyboard navigation.
pub(all) struct SearchableSelectState {
  /// All available options before filtering.
  options : Array[SelectOption]
  /// Current search text used to filter the option list.
  query : String
  /// Value of the currently selected option, or empty if none.
  selected : String
  /// Whether the dropdown list is expanded.
  open : Bool
  /// Index of the keyboard-focused option within filtered results.
  focus_index : Int
} derive(Debug)

///|
/// State for a date range picker allowing start and end date selection.
pub(all) struct DateRangeState {
  /// Year of the selected range start date.
  start_year : Int
  /// Month of the selected range start date (1-12).
  start_month : Int
  /// Day of the selected range start date.
  start_day : Int
  /// Year of the selected range end date.
  end_year : Int
  /// Month of the selected range end date (1-12).
  end_month : Int
  /// Day of the selected range end date.
  end_day : Int
  /// Which endpoint is being picked: "start" or "end".
  picking : String
} derive(Debug)

///|
/// An action available in the command palette search interface.
pub(all) struct CommandAction {
  /// Unique identifier for this action.
  id : Int
  /// Descriptive name shown in the palette list.
  label : String
  /// Keyboard shortcut hint (e.g. "Cmd+S") displayed alongside the label.
  shortcut : String
  /// Grouping category for organizing actions in the palette.
  category : String
} derive(Debug, Eq, Show)

///|
/// State for a keyboard-driven command palette (Cmd+K style).
pub(all) struct CommandPaletteState {
  /// Whether the command palette overlay is visible.
  open : Bool
  /// Current search text filtering available actions.
  query : String
  /// All registered actions that can be searched and invoked.
  actions : Array[CommandAction]
  /// Index of the keyboard-highlighted action in filtered results.
  focus_index : Int
} derive(Debug)

///|
/// A single form field within a wizard step.
pub(all) struct WizardField {
  /// Label text displayed above the input.
  label : String
  /// Current value entered by the user.
  value : String
  /// Validation error message, empty when the field is valid.
  error : String
} derive(Debug, Eq, Show)

///|
/// One step in a multi-step form wizard containing related fields.
pub(all) struct WizardStep {
  /// Heading for this step shown in the progress indicator.
  title : String
  /// Input fields the user must complete in this step.
  fields : Array[WizardField]
} derive(Debug, Eq, Show)

///|
/// State for a multi-step form wizard with per-step validation.
pub(all) struct FormWizardState {
  /// All steps in the wizard sequence.
  steps : Array[WizardStep]
  /// Zero-based index of the step currently being filled out.
  current : Int
  /// Whether the user has finished all steps successfully.
  completed : Bool
} derive(Debug)

// ── Animated component states ────────────────────────────────────────

///|
/// State for a stopwatch with start, stop, and reset controls.
pub(all) struct StopwatchState {
  /// Total elapsed time in milliseconds since the stopwatch started.
  elapsed_ms : Int
  /// Whether the stopwatch is currently counting.
  running : Bool
  /// Generation counter used to cancel stale tick callbacks.
  gen : Int
} derive(Debug)

///|
/// State for a countdown timer with configurable duration.
pub(all) struct CountdownState {
  /// Total duration of the countdown in seconds.
  target_seconds : Int
  /// Seconds still remaining before the countdown completes.
  remaining : Int
  /// Whether the countdown is actively decrementing.
  running : Bool
  /// Whether the timer has reached zero.
  finished : Bool
  /// Generation counter used to cancel stale tick callbacks.
  gen : Int
} derive(Debug)

///|
/// State for a typewriter effect that reveals text one character at a time.
pub(all) struct TypewriterState {
  /// The complete text to be revealed progressively.
  full_text : String
  /// Number of characters currently visible on screen.
  visible_chars : Int
  /// Whether the typewriter animation is actively advancing.
  running : Bool
} derive(Debug)

///|
/// State for an image/card carousel with manual and automatic navigation.
pub(all) struct CarouselState {
  /// Content items (labels or URLs) cycled through in the carousel.
  items : Array[String]
  /// Index of the item currently displayed.
  current : Int
  /// Whether the carousel automatically advances on a timer.
  auto_playing : Bool
  /// Generation counter used to cancel stale auto-advance callbacks.
  gen : Int
} derive(Debug)

///|
/// State for a number counter that animates smoothly between values.
pub(all) struct AnimatedCounterState {
  /// The target value that the counter is animating toward.
  value : Int
  /// The value currently rendered, which gradually approaches the target.
  display_value : Int
} derive(Debug)

// ── Rich input component states ─────────────────────────────────────

///|
/// State for a clickable 1-5 star rating input.
pub(all) struct StarRatingState {
  /// The committed rating value (1-5), or 0 if unrated.
  rating : Int
  /// Star index currently under the cursor, used for hover preview.
  hover : Int
} derive(Debug)

///|
/// State for a PIN code entry that auto-advances focus between digit fields.
pub(all) struct PinInputState {
  /// Individual digit strings, one per input box.
  digits : Array[String]
  /// Index of the digit input currently focused.
  focus_index : Int
  /// Whether the entered PIN has been verified as correct.
  verified : Bool
} derive(Debug)

///|
/// State for a password input with a real-time strength meter.
pub(all) struct PasswordStrengthState {
  /// The current password text entered by the user.
  password : String
  /// Whether the password characters are shown in plain text.
  visible : Bool
} derive(Debug)

///|
/// State for a tag input with autocomplete suggestions as the user types.
pub(all) struct TagAutoState {
  /// Tags that have already been added.
  tags : Array[String]
  /// Text currently being typed in the input field.
  input : String
  /// Full list of possible tag suggestions to match against.
  suggestions : Array[String]
  /// Whether the suggestion dropdown is visible.
  show_suggestions : Bool
  /// Index of the keyboard-highlighted suggestion.
  focus_index : Int
} derive(Debug)

///|
/// State for click-to-edit inline text fields.
pub(all) struct InlineEditState {
  /// Each item as (display text, is currently being edited).
  items : Array[(String, Bool)]
  /// Temporary buffer holding the text while the user is editing.
  edit_value : String
} derive(Debug)

// ── Layout component states ─────────────────────────────────────────

///|
/// State for a numeric stepper with increment/decrement buttons.
pub(all) struct StepperState {
  /// Current numeric value displayed.
  value : Int
  /// Minimum allowed value.
  min : Int
  /// Maximum allowed value.
  max : Int
  /// Amount added or subtracted per button click.
  step : Int
} derive(Debug)

///|
/// State for a resizable split pane with a draggable divider.
pub(all) struct SplitPaneState {
  /// Width of the left panel as a percentage of the total width.
  left_percent : Int
} derive(Debug)

///|
/// State for a virtualized list that only renders items in the visible viewport.
pub(all) struct VirtualListState {
  /// Total number of items in the full data set.
  total_items : Int
  /// Current vertical scroll offset in pixels.
  scroll_top : Int
  /// Fixed height of each list item in pixels.
  item_height : Int
  /// Number of items that fit in the visible viewport at once.
  visible_count : Int
} derive(Debug)

///|
/// A single card in a masonry grid layout with variable height.
pub(all) struct MasonryItem {
  /// Unique identifier for this masonry card.
  id : Int
  /// Label displayed on the card.
  title : String
  /// Intrinsic height in pixels, creating the staggered layout.
  height : Int
  /// Background color of the card.
  color : String
} derive(Debug, Eq, Show)

///|
/// State for a masonry grid that distributes variable-height cards across columns.
pub(all) struct MasonryState {
  /// Cards to arrange in the masonry layout.
  items : Array[MasonryItem]
  /// Number of columns in the grid.
  columns : Int
} derive(Debug)

// ── Feedback component states ───────────────────────────────────────

///|
/// State for a two-click confirmation button (arm then execute).
pub(all) struct ConfirmButtonState {
  /// Whether the button is in the armed "are you sure?" state.
  confirming : Bool
  /// Whether the destructive action has been carried out.
  executed : Bool
} derive(Debug)

///|
/// State for a copy-to-clipboard button with visual feedback.
pub(all) struct CopyState {
  /// The text content that will be copied to the clipboard.
  text : String
  /// Whether the "copied" confirmation is currently shown.
  copied : Bool
  /// Generation counter used to reset the copied indicator after a delay.
  gen : Int
} derive(Debug)

///|
/// State for a snackbar that offers an undo action after item deletion.
pub(all) struct UndoSnackbarState {
  /// Text displayed in the snackbar notification.
  message : String
  /// Whether the snackbar is currently visible on screen.
  visible : Bool
  /// The live list of items that can be deleted.
  items : Array[String]
  /// Value of the most recently removed item, kept for undo restoration.
  last_removed : String
  /// Original index of the removed item, used to restore it in place.
  last_removed_index : Int
} derive(Debug)

// ── Additional composite states ─────────────────────────────────────

///|
/// State for a live markdown editor with rendered preview.
pub(all) struct MarkdownState {
  /// Raw markdown source text entered by the user.
  source : String
} derive(Debug)

///|
/// A single cell in the editable spreadsheet grid.
pub(all) struct SpreadsheetCell {
  /// Text content of the cell.
  value : String
} derive(Debug, Eq, Show)

///|
/// State for an editable spreadsheet grid with cell selection and inline editing.
pub(all) struct SpreadsheetState {
  /// Two-dimensional grid of cell data (rows x columns).
  cells : Array[Array[SpreadsheetCell]]
  /// Row index of the currently selected cell.
  selected_row : Int
  /// Column index of the currently selected cell.
  selected_col : Int
  /// Whether the selected cell is in edit mode.
  editing : Bool
  /// Temporary text buffer for the cell being edited.
  edit_value : String
} derive(Debug)

///|
/// State for a reorderable list where items are moved via up/down buttons.
pub(all) struct DragSortState {
  /// Items in their current display order.
  items : Array[String]
} derive(Debug)

// ── Top-level Model ──────────────────────────────────────────────────

/// Top-level application state holding the active section, selected component,

///|
/// and sub-states for every UI component in the gallery.
pub(all) struct Model {
  /// The gallery section currently displayed in the sidebar.
  section : Section
  /// Index of the selected component within the active section.
  component : Int
  // Input components
  /// Sub-state for the text input demo.
  text_input : TextInputState
  /// Sub-state for the text area demo.
  text_area : TextAreaState
  /// Sub-state for the checkbox group demo.
  checkbox : CheckboxState
  /// Sub-state for the radio button group demo.
  radio : RadioState
  /// Sub-state for the dropdown select demo.
  select : SelectState
  /// Sub-state for the toggle switches demo.
  toggle : ToggleState
  /// Sub-state for the range slider demo.
  slider : SliderState
  /// Sub-state for the color picker demo.
  color_picker : ColorPickerState
  // Display components
  /// Sub-state for the avatar display demo.
  avatar : AvatarState
  /// Sub-state for the notification badge demo.
  badge : BadgeState
  /// Sub-state for the progress bar demo.
  progress : ProgressState
  /// Sub-state for the tooltip demo.
  tooltip : TooltipState
  /// Sub-state for the tag/chip list demo.
  tag : TagState
  /// Sub-state for the skeleton loading demo.
  skeleton : SkeletonState
  /// Sub-state for the empty state placeholder demo.
  empty_state : EmptyStateState
  // Navigation components
  /// Sub-state for the accordion demo.
  accordion : AccordionState
  /// Sub-state for the tabs demo.
  tabs : TabsState
  /// Sub-state for the breadcrumb navigation demo.
  breadcrumb : BreadcrumbState
  /// Sub-state for the tree view demo.
  tree_view : TreeViewState
  // Data components
  /// Sub-state for the sortable, paginated data table demo.
  data_table : DataTableState
  /// Sub-state for the calendar demo.
  calendar : CalendarState
  /// Sub-state for the timeline demo.
  timeline : TimelineState
  /// Sub-state for the bar chart demo.
  chart : ChartState
  // Overlay components
  /// Sub-state for the toast notification demo.
  toast : ToastState
  /// Sub-state for the modal dialog demo.
  modal : ModalState
  /// Sub-state for the command palette demo.
  command_palette : CommandPaletteState
  // Composite components
  /// Sub-state for the kanban board demo.
  kanban : KanbanState
  /// Sub-state for the searchable select demo.
  searchable_select : SearchableSelectState
  /// Sub-state for the date range picker demo.
  date_range : DateRangeState
  /// Sub-state for the multi-step form wizard demo.
  form_wizard : FormWizardState
  // Animated components
  /// Sub-state for the stopwatch demo.
  stopwatch : StopwatchState
  /// Sub-state for the countdown timer demo.
  countdown : CountdownState
  /// Sub-state for the typewriter effect demo.
  typewriter : TypewriterState
  /// Sub-state for the carousel demo.
  carousel : CarouselState
  /// Sub-state for the animated counter demo.
  animated_counter : AnimatedCounterState
  // Rich input components
  /// Sub-state for the star rating demo.
  star_rating : StarRatingState
  /// Sub-state for the PIN input demo.
  pin_input : PinInputState
  /// Sub-state for the password strength meter demo.
  password_strength : PasswordStrengthState
  /// Sub-state for the tag autocomplete demo.
  tag_auto : TagAutoState
  /// Sub-state for the inline edit demo.
  inline_edit : InlineEditState
  // Layout components
  /// Sub-state for the numeric stepper demo.
  stepper : StepperState
  /// Sub-state for the resizable split pane demo.
  split_pane : SplitPaneState
  /// Sub-state for the virtualized list demo.
  virtual_list : VirtualListState
  /// Sub-state for the masonry grid demo.
  masonry : MasonryState
  // Feedback components
  /// Sub-state for the two-click confirm button demo.
  confirm_button : ConfirmButtonState
  /// Sub-state for the copy-to-clipboard demo.
  copy_clipboard : CopyState
  /// Sub-state for the undo snackbar demo.
  undo_snackbar : UndoSnackbarState
  // Additional composites
  /// Sub-state for the live markdown preview demo.
  markdown : MarkdownState
  /// Sub-state for the editable spreadsheet grid demo.
  spreadsheet : SpreadsheetState
  /// Sub-state for the drag-to-reorder list demo.
  drag_sort : DragSortState
} derive(Debug)

// ── Messages ─────────────────────────────────────────────────────────

///|
/// All user-initiated and timer-driven messages processed by the gallery's update loop.
pub(all) enum Msg {
  // Navigation
  /// Switch the sidebar to a different component category.
  ChangeSection(Section)
  /// Select a component by its index within the current section.
  ChangeComponent(Int)
  // TextInput
  /// User typed in the text input field; carries the new value.
  TextInputChanged(String)
  // TextArea
  /// User typed in the text area; carries the new value.
  TextAreaChanged(String)
  // Checkbox
  /// Toggle the checkbox at the given index.
  CheckboxToggled(Int)
  // RadioGroup
  /// Select a radio option by its value string.
  RadioSelected(String)
  // Select
  /// Choose a new option in the dropdown select.
  SelectChanged(String)
  // Toggle
  /// Flip the toggle switch at the given index.
  ToggleSwitched(Int)
  // Slider
  /// Slider thumb moved; carries the new value as a string to parse.
  SliderChanged(String)
  // ColorPicker
  /// User clicked a preset color swatch; carries the hex color.
  ColorSwatchClicked(String)
  /// User typed in the hex color input field.
  ColorHexChanged(String)
  // Progress
  /// Progress value changed via the range input; carries the new value string.
  ProgressChanged(String)
  // Tooltip
  /// Show the tooltip at the given index on hover.
  TooltipShow(Int)
  /// Hide all tooltips when the cursor leaves.
  TooltipHide
  // Tag
  /// Commit the current input text as a new tag.
  TagAdd
  /// Remove the tag at the given index.
  TagRemove(Int)
  /// User typed in the tag input field.
  TagInputChanged(String)
  // Accordion
  /// Expand or collapse the accordion section at the given index.
  AccordionToggle(Int)
  // Tabs
  /// Switch to the tab at the given index.
  TabSelected(Int)
  // Breadcrumb
  /// Navigate to the breadcrumb segment at the given depth index.
  BreadcrumbNavigate(Int)
  // TreeView
  /// Toggle expand/collapse of the tree node with the given ID.
  TreeToggle(Int)
  // DataTable
  /// Sort the table by the named column, toggling direction if already active.
  TableSort(String)
  /// Navigate to the given page number in the table.
  TablePage(Int)
  /// Toggle selection of the table row at the given index.
  TableToggleRow(Int)
  /// Select or deselect all rows on the current page.
  TableSelectAll
  // Calendar
  /// Navigate the calendar one month backward.
  CalendarPrevMonth
  /// Navigate the calendar one month forward.
  CalendarNextMonth
  /// Select a specific day number in the current calendar month.
  CalendarSelectDay(Int)
  // Kanban
  /// Move a card: (card ID, source column index, destination column index).
  KanbanMoveCard(Int, Int, Int)
  // Toast
  /// Display a new toast notification: (title, message, severity kind).
  ShowToast(String, String, String)
  /// Remove the toast with the given ID.
  DismissToast(Int)
  // Modal
  /// Open the confirmation modal dialog.
  ModalOpen
  /// Close the modal without confirming.
  ModalClose
  /// Accept and close the modal dialog.
  ModalConfirm
  // Skeleton
  /// Toggle between skeleton loading placeholders and real content.
  SkeletonToggle
  // EmptyState
  /// Toggle between empty-state display and populated content.
  EmptyStateToggle
  // SearchableSelect
  /// User typed in the searchable select filter field.
  SearchableQueryChanged(String)
  /// User picked an option in the searchable select by its value.
  SearchableSelect_(String)
  /// Open or close the searchable select dropdown.
  SearchableToggleOpen
  /// Keyboard-highlight the filtered option at the given index.
  SearchableFocus(Int)
  // DateRange
  /// Switch between picking the start or end date; carries "start" or "end".
  DateRangeSetPicking(String)
  /// Select a day in the date range calendar.
  DateRangeSelectDay(Int)
  /// Navigate the date range calendar one month backward.
  DateRangePrevMonth
  /// Navigate the date range calendar one month forward.
  DateRangeNextMonth
  // CommandPalette
  /// Open or close the command palette overlay.
  CommandPaletteToggle
  /// User typed in the command palette search field.
  CommandPaletteSearch(String)
  /// Keyboard-highlight the action at the given index.
  CommandPaletteFocus(Int)
  /// Execute the action at the given index.
  CommandPaletteSelect(Int)
  // FormWizard
  /// Advance to the next wizard step after validating the current one.
  WizardNext
  /// Go back to the previous wizard step.
  WizardPrev
  /// Update a wizard field value: (field index, new value).
  WizardFieldChanged(Int, String)
  // Stopwatch
  /// Start or pause the stopwatch.
  StopwatchToggle
  /// Reset the stopwatch to zero.
  StopwatchReset
  /// Periodic tick advancing the stopwatch; carries the generation counter.
  StopwatchTick(Int)
  // Countdown
  /// Set the countdown duration from a string value in seconds.
  CountdownSet(String)
  /// Start or pause the countdown timer.
  CountdownToggle
  /// Reset the countdown to its configured duration.
  CountdownReset
  /// Periodic tick decrementing the countdown; carries the generation counter.
  CountdownTick(Int)
  // Typewriter
  /// Begin the typewriter text reveal animation.
  TypewriterStart
  /// Pause the typewriter animation at the current character.
  TypewriterPause
  /// Advance the typewriter by one character.
  TypewriterTick
  /// Reset the typewriter to the beginning of the text.
  TypewriterReset
  // Carousel
  /// Show the previous item in the carousel.
  CarouselPrev
  /// Show the next item in the carousel.
  CarouselNext
  /// Toggle automatic carousel advancement on or off.
  CarouselAutoToggle
  /// Auto-advance tick; carries the generation counter for cancellation.
  CarouselAutoTick(Int)
  // AnimatedCounter
  /// Increase the animated counter target value by one.
  CounterIncrement
  /// Decrease the animated counter target value by one.
  CounterDecrement
  /// Animation tick that moves the display value closer to the target.
  CounterAnimTick
  // StarRating
  /// Set the rating to the clicked star index.
  StarClick(Int)
  /// Preview the rating at the hovered star index.
  StarHover(Int)
  /// Clear the hover preview when the cursor exits the stars.
  StarLeave
  // PinInput
  /// Update a single PIN digit: (digit index, new character).
  PinDigitChanged(Int, String)
  /// Clear all entered PIN digits and reset focus.
  PinClear
  // PasswordStrength
  /// User typed in the password field; carries the new password text.
  PasswordChanged(String)
  /// Toggle password visibility between plain text and masked.
  PasswordToggleVisible
  // TagAutocomplete
  /// User typed in the tag autocomplete input field.
  TagAutoInputChanged(String)
  /// Add a tag from autocomplete suggestions by its value.
  TagAutoAdd(String)
  /// Remove the tag at the given index.
  TagAutoRemove(Int)
  /// Keyboard-highlight the suggestion at the given index.
  TagAutoFocus(Int)
  // InlineEdit
  /// Enter edit mode for the item at the given index.
  InlineStartEdit(Int)
  /// Update the temporary edit buffer with new text.
  InlineEditChanged(String)
  /// Save the edited value for the item at the given index.
  InlineSaveEdit(Int)
  /// Discard edits and exit edit mode for the item at the given index.
  InlineCancelEdit(Int)
  // Stepper
  /// Increase the stepper value by its configured step amount.
  StepperIncrement
  /// Decrease the stepper value by its configured step amount.
  StepperDecrement
  // SplitPane
  /// Resize the split pane; carries the new left panel percentage as a string.
  SplitPaneResize(String)
  // VirtualList
  /// Handle scroll events in the virtual list; carries the scroll offset string.
  VirtualScroll(String)
  // ConfirmButton
  /// First click: arm the confirm button for a follow-up confirmation.
  ConfirmButtonClick
  /// Second click: execute the confirmed action.
  ConfirmButtonConfirm
  /// Cancel the armed confirmation and return to the initial state.
  ConfirmButtonCancel
  // CopyToClipboard
  /// Copy the stored text to the clipboard and show feedback.
  CopyClick
  /// Reset the "copied" indicator after a delay; carries the generation counter.
  CopyReset(Int)
  // UndoSnackbar
  /// Remove the item at the given index and show the undo snackbar.
  UndoRemoveItem(Int)
  /// Restore the last removed item to its original position.
  UndoUndo
  /// Dismiss the undo snackbar without restoring.
  UndoDismiss
  // Markdown
  /// User edited the markdown source text.
  MarkdownChanged(String)
  // Spreadsheet
  /// Select the cell at (row, column) in the spreadsheet grid.
  SpreadsheetSelectCell(Int, Int)
  /// Enter edit mode for the currently selected spreadsheet cell.
  SpreadsheetStartEdit
  /// Update the cell edit buffer with new text.
  SpreadsheetEditChanged(String)
  /// Commit the edited cell value and exit edit mode.
  SpreadsheetSaveEdit
  /// Discard cell edits and exit edit mode.
  SpreadsheetCancelEdit
  // DragSort
  /// Move the item at the given index one position up in the list.
  DragSortMoveUp(Int)
  /// Move the item at the given index one position down in the list.
  DragSortMoveDown(Int)
} derive(Debug)

// ── Component metadata ───────────────────────────────────────────────

///|
/// Returns the ordered list of component names belonging to the given section.
pub fn section_components(section : Section) -> Array[String] {
  match section {
    Inputs =>
      [
        "TextInput", "TextArea", "Checkbox", "RadioGroup", "Select", "Toggle", "Slider",
        "ColorPicker",
      ]
    Display =>
      [
        "Avatar", "Badge", "ProgressBar", "Tooltip", "Tag", "Skeleton", "EmptyState",
      ]
    Navigation => ["Tabs", "Accordion", "Breadcrumb", "TreeView"]
    Data => ["DataTable", "Calendar", "Timeline", "Chart"]
    Overlay => ["Toast", "Modal", "CommandPalette"]
    Composite =>
      [
        "KanbanBoard", "SearchableSelect", "DateRangePicker", "FormWizard", "MarkdownPreview",
        "SpreadsheetGrid", "DragSortList",
      ]
    Animated =>
      ["Stopwatch", "Countdown", "Typewriter", "Carousel", "AnimatedCounter"]
    RichInputs =>
      [
        "StarRating", "PinInput", "PasswordStrength", "TagAutocomplete", "InlineEdit",
      ]
    Layout => ["Stepper", "SplitPane", "VirtualList", "MasonryGrid"]
    Feedback => ["ConfirmButton", "CopyToClipboard", "UndoSnackbar"]
  }
}

///|
/// Returns all gallery sections in their display order for the sidebar.
pub fn all_sections() -> Array[Section] {
  [
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
}

///|
/// Returns the human-readable display label for a gallery section.
pub fn section_label(section : Section) -> String {
  match section {
    Inputs => "Inputs"
    Display => "Display"
    Navigation => "Navigation"
    Data => "Data"
    Overlay => "Overlay"
    Composite => "Composite"
    Animated => "Animated"
    RichInputs => "Rich Inputs"
    Layout => "Layout"
    Feedback => "Feedback"
  }
}
