// ── Gallery sections ─────────────────────────────────────────────────

///|
pub(all) enum Section {
  Inputs
  Display
  Navigation
  Data
  Overlay
  Composite
  Animated
  RichInputs
  Layout
  Feedback
} derive(Debug, Eq, Show)

// ── Sub-model structs ────────────────────────────────────────────────

///|
pub(all) struct TextInputState {
  value : String
  error : String
} derive(Debug)

///|
pub(all) struct TextAreaState {
  value : String
  max_chars : Int
} derive(Debug)

///|
pub(all) struct CheckboxState {
  items : Array[(String, Bool)]
} derive(Debug)

///|
pub(all) struct RadioState {
  options : Array[String]
  selected : String
} derive(Debug)

///|
pub(all) struct SelectState {
  options : Array[String]
  selected : String
} derive(Debug)

///|
pub(all) struct ToggleState {
  items : Array[(String, Bool)]
} derive(Debug)

///|
pub(all) struct SliderState {
  value : Int
  min : Int
  max : Int
} derive(Debug)

///|
pub(all) struct ColorPickerState {
  selected : String
  hex_input : String
  swatches : Array[String]
} derive(Debug)

///|
pub(all) struct AvatarState {
  users : Array[(String, String, Bool)]
} derive(Debug)

///|
pub(all) struct BadgeState {
  counts : Array[(String, Int)]
} derive(Debug)

///|
pub(all) struct ProgressState {
  value : Int
  animating : Bool
} derive(Debug)

///|
pub(all) struct TooltipState {
  active_index : Int
} derive(Debug)

///|
pub(all) struct TagState {
  tags : Array[String]
  input : String
} derive(Debug)

///|
pub(all) struct AccordionState {
  items : Array[(String, String)]
  open_index : Int
} derive(Debug)

///|
pub(all) struct TabsState {
  tabs : Array[(String, String)]
  active : Int
} derive(Debug)

///|
pub(all) struct BreadcrumbState {
  path : Array[String]
} derive(Debug)

///|
pub(all) struct TableRow {
  name : String
  email : String
  role : String
  status : String
} derive(Debug, Eq, Show)

///|
pub(all) struct DataTableState {
  rows : Array[TableRow]
  sort_col : String
  sort_asc : Bool
  page : Int
  page_size : Int
  selected : Array[Int]
} derive(Debug)

///|
pub(all) struct CalendarState {
  year : Int
  month : Int
  selected_day : Int
  today_year : Int
  today_month : Int
  today_day : Int
} derive(Debug)

///|
pub(all) struct TimelineEvent {
  title : String
  description : String
  time : String
  color : String
} derive(Debug, Eq, Show)

///|
pub(all) struct TimelineState {
  events : Array[TimelineEvent]
} derive(Debug)

///|
pub(all) struct TreeNode {
  id : Int
  label : String
  children : Array[TreeNode]
} derive(Debug, Eq, Show)

///|
pub(all) struct TreeViewState {
  roots : Array[TreeNode]
  expanded : Array[Int]
} derive(Debug)

///|
pub(all) struct KanbanCard {
  id : Int
  title : String
  color : String
} derive(Debug, Eq, Show)

///|
pub(all) struct KanbanState {
  columns : Array[(String, Array[KanbanCard])]
} derive(Debug)

///|
pub(all) struct ChartBar {
  label : String
  value : Int
  color : String
} derive(Debug, Eq, Show)

///|
pub(all) struct ChartState {
  bars : Array[ChartBar]
  max_value : Int
} derive(Debug)

///|
pub(all) struct ToastItem {
  id : Int
  title : String
  message : String
  kind : String
} derive(Debug, Eq, Show)

///|
pub(all) struct ToastState {
  items : Array[ToastItem]
  next_id : Int
} derive(Debug)

///|
pub(all) struct ModalState {
  open : Bool
  title : String
  message : String
  confirmed : Bool
} derive(Debug)

///|
pub(all) struct SkeletonState {
  loading : Bool
} derive(Debug)

///|
pub(all) struct EmptyStateState {
  has_data : Bool
} derive(Debug)

///|
pub(all) struct SelectOption {
  label : String
  value : String
} derive(Debug, Eq, Show)

///|
pub(all) struct SearchableSelectState {
  options : Array[SelectOption]
  query : String
  selected : String
  open : Bool
  focus_index : Int
} derive(Debug)

///|
pub(all) struct DateRangeState {
  start_year : Int
  start_month : Int
  start_day : Int
  end_year : Int
  end_month : Int
  end_day : Int
  picking : String
} derive(Debug)

///|
pub(all) struct CommandAction {
  id : Int
  label : String
  shortcut : String
  category : String
} derive(Debug, Eq, Show)

///|
pub(all) struct CommandPaletteState {
  open : Bool
  query : String
  actions : Array[CommandAction]
  focus_index : Int
} derive(Debug)

///|
pub(all) struct WizardField {
  label : String
  value : String
  error : String
} derive(Debug, Eq, Show)

///|
pub(all) struct WizardStep {
  title : String
  fields : Array[WizardField]
} derive(Debug, Eq, Show)

///|
pub(all) struct FormWizardState {
  steps : Array[WizardStep]
  current : Int
  completed : Bool
} derive(Debug)

// ── Animated component states ────────────────────────────────────────

///|
pub(all) struct StopwatchState {
  elapsed_ms : Int
  running : Bool
  gen : Int
} derive(Debug)

///|
pub(all) struct CountdownState {
  target_seconds : Int
  remaining : Int
  running : Bool
  finished : Bool
  gen : Int
} derive(Debug)

///|
pub(all) struct TypewriterState {
  full_text : String
  visible_chars : Int
  running : Bool
} derive(Debug)

///|
pub(all) struct CarouselState {
  items : Array[String]
  current : Int
  auto_playing : Bool
  gen : Int
} derive(Debug)

///|
pub(all) struct AnimatedCounterState {
  value : Int
  display_value : Int
} derive(Debug)

// ── Rich input component states ─────────────────────────────────────

///|
pub(all) struct StarRatingState {
  rating : Int
  hover : Int
} derive(Debug)

///|
pub(all) struct PinInputState {
  digits : Array[String]
  focus_index : Int
  verified : Bool
} derive(Debug)

///|
pub(all) struct PasswordStrengthState {
  password : String
  visible : Bool
} derive(Debug)

///|
pub(all) struct TagAutoState {
  tags : Array[String]
  input : String
  suggestions : Array[String]
  show_suggestions : Bool
  focus_index : Int
} derive(Debug)

///|
pub(all) struct InlineEditState {
  items : Array[(String, Bool)]
  edit_value : String
} derive(Debug)

// ── Layout component states ─────────────────────────────────────────

///|
pub(all) struct StepperState {
  value : Int
  min : Int
  max : Int
  step : Int
} derive(Debug)

///|
pub(all) struct SplitPaneState {
  left_percent : Int
} derive(Debug)

///|
pub(all) struct VirtualListState {
  total_items : Int
  scroll_top : Int
  item_height : Int
  visible_count : Int
} derive(Debug)

///|
pub(all) struct MasonryItem {
  id : Int
  title : String
  height : Int
  color : String
} derive(Debug, Eq, Show)

///|
pub(all) struct MasonryState {
  items : Array[MasonryItem]
  columns : Int
} derive(Debug)

// ── Feedback component states ───────────────────────────────────────

///|
pub(all) struct ConfirmButtonState {
  confirming : Bool
  executed : Bool
} derive(Debug)

///|
pub(all) struct CopyState {
  text : String
  copied : Bool
  gen : Int
} derive(Debug)

///|
pub(all) struct UndoSnackbarState {
  message : String
  visible : Bool
  items : Array[String]
  last_removed : String
  last_removed_index : Int
} derive(Debug)

// ── Additional composite states ─────────────────────────────────────

///|
pub(all) struct MarkdownState {
  source : String
} derive(Debug)

///|
pub(all) struct SpreadsheetCell {
  value : String
} derive(Debug, Eq, Show)

///|
pub(all) struct SpreadsheetState {
  cells : Array[Array[SpreadsheetCell]]
  selected_row : Int
  selected_col : Int
  editing : Bool
  edit_value : String
} derive(Debug)

///|
pub(all) struct DragSortState {
  items : Array[String]
} derive(Debug)

// ── Top-level Model ──────────────────────────────────────────────────

///|
pub(all) struct Model {
  section : Section
  component : Int
  // Input components
  text_input : TextInputState
  text_area : TextAreaState
  checkbox : CheckboxState
  radio : RadioState
  select : SelectState
  toggle : ToggleState
  slider : SliderState
  color_picker : ColorPickerState
  // Display components
  avatar : AvatarState
  badge : BadgeState
  progress : ProgressState
  tooltip : TooltipState
  tag : TagState
  skeleton : SkeletonState
  empty_state : EmptyStateState
  // Navigation components
  accordion : AccordionState
  tabs : TabsState
  breadcrumb : BreadcrumbState
  tree_view : TreeViewState
  // Data components
  data_table : DataTableState
  calendar : CalendarState
  timeline : TimelineState
  chart : ChartState
  // Overlay components
  toast : ToastState
  modal : ModalState
  command_palette : CommandPaletteState
  // Composite components
  kanban : KanbanState
  searchable_select : SearchableSelectState
  date_range : DateRangeState
  form_wizard : FormWizardState
  // Animated components
  stopwatch : StopwatchState
  countdown : CountdownState
  typewriter : TypewriterState
  carousel : CarouselState
  animated_counter : AnimatedCounterState
  // Rich input components
  star_rating : StarRatingState
  pin_input : PinInputState
  password_strength : PasswordStrengthState
  tag_auto : TagAutoState
  inline_edit : InlineEditState
  // Layout components
  stepper : StepperState
  split_pane : SplitPaneState
  virtual_list : VirtualListState
  masonry : MasonryState
  // Feedback components
  confirm_button : ConfirmButtonState
  copy_clipboard : CopyState
  undo_snackbar : UndoSnackbarState
  // Additional composites
  markdown : MarkdownState
  spreadsheet : SpreadsheetState
  drag_sort : DragSortState
} derive(Debug)

// ── Messages ─────────────────────────────────────────────────────────

///|
pub(all) enum Msg {
  // Navigation
  ChangeSection(Section)
  ChangeComponent(Int)
  // TextInput
  TextInputChanged(String)
  // TextArea
  TextAreaChanged(String)
  // Checkbox
  CheckboxToggled(Int)
  // RadioGroup
  RadioSelected(String)
  // Select
  SelectChanged(String)
  // Toggle
  ToggleSwitched(Int)
  // Slider
  SliderChanged(String)
  // ColorPicker
  ColorSwatchClicked(String)
  ColorHexChanged(String)
  // Progress
  ProgressChanged(String)
  // Tooltip
  TooltipShow(Int)
  TooltipHide
  // Tag
  TagAdd
  TagRemove(Int)
  TagInputChanged(String)
  // Accordion
  AccordionToggle(Int)
  // Tabs
  TabSelected(Int)
  // Breadcrumb
  BreadcrumbNavigate(Int)
  // TreeView
  TreeToggle(Int)
  // DataTable
  TableSort(String)
  TablePage(Int)
  TableToggleRow(Int)
  TableSelectAll
  // Calendar
  CalendarPrevMonth
  CalendarNextMonth
  CalendarSelectDay(Int)
  // Kanban
  KanbanMoveCard(Int, Int, Int)
  // Toast
  ShowToast(String, String, String)
  DismissToast(Int)
  // Modal
  ModalOpen
  ModalClose
  ModalConfirm
  // Skeleton
  SkeletonToggle
  // EmptyState
  EmptyStateToggle
  // SearchableSelect
  SearchableQueryChanged(String)
  SearchableSelect_(String)
  SearchableToggleOpen
  SearchableFocus(Int)
  // DateRange
  DateRangeSetPicking(String)
  DateRangeSelectDay(Int)
  DateRangePrevMonth
  DateRangeNextMonth
  // CommandPalette
  CommandPaletteToggle
  CommandPaletteSearch(String)
  CommandPaletteFocus(Int)
  CommandPaletteSelect(Int)
  // FormWizard
  WizardNext
  WizardPrev
  WizardFieldChanged(Int, String)
  // Stopwatch
  StopwatchToggle
  StopwatchReset
  StopwatchTick(Int)
  // Countdown
  CountdownSet(String)
  CountdownToggle
  CountdownReset
  CountdownTick(Int)
  // Typewriter
  TypewriterStart
  TypewriterPause
  TypewriterTick
  TypewriterReset
  // Carousel
  CarouselPrev
  CarouselNext
  CarouselAutoToggle
  CarouselAutoTick(Int)
  // AnimatedCounter
  CounterIncrement
  CounterDecrement
  CounterAnimTick
  // StarRating
  StarClick(Int)
  StarHover(Int)
  StarLeave
  // PinInput
  PinDigitChanged(Int, String)
  PinClear
  // PasswordStrength
  PasswordChanged(String)
  PasswordToggleVisible
  // TagAutocomplete
  TagAutoInputChanged(String)
  TagAutoAdd(String)
  TagAutoRemove(Int)
  TagAutoFocus(Int)
  // InlineEdit
  InlineStartEdit(Int)
  InlineEditChanged(String)
  InlineSaveEdit(Int)
  InlineCancelEdit(Int)
  // Stepper
  StepperIncrement
  StepperDecrement
  // SplitPane
  SplitPaneResize(String)
  // VirtualList
  VirtualScroll(String)
  // ConfirmButton
  ConfirmButtonClick
  ConfirmButtonConfirm
  ConfirmButtonCancel
  // CopyToClipboard
  CopyClick
  CopyReset(Int)
  // UndoSnackbar
  UndoRemoveItem(Int)
  UndoUndo
  UndoDismiss
  // Markdown
  MarkdownChanged(String)
  // Spreadsheet
  SpreadsheetSelectCell(Int, Int)
  SpreadsheetStartEdit
  SpreadsheetEditChanged(String)
  SpreadsheetSaveEdit
  SpreadsheetCancelEdit
  // DragSort
  DragSortMoveUp(Int)
  DragSortMoveDown(Int)
} derive(Debug)

// ── Component metadata ───────────────────────────────────────────────

///|
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
