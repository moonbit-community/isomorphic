///|
/// Renders the full gallery layout including sidebar, content area, and overlay layers.
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(style=layout_style) <| [
    self.view_sidebar(dispatch),
    self.view_content(dispatch),
    self.view_toast_container(dispatch),
    if self.modal.open {
      self.view_modal_overlay(dispatch)
    } else {
      @html.nothing
    },
    if self.command_palette.open {
      self.view_command_palette_overlay(dispatch)
    } else {
      @html.nothing
    },
  ]
}

///|
fn Model::view_sidebar(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.nav(style=sidebar_style) <| ({
    let items : Array[@rabbita.Html] = [
      @html.div(style=sidebar_header_style) <| "Gallery",
    ]
    for section in all_sections() {
      let components = section_components(section)
      items.push(
        @html.div(style=sidebar_section_style) <| section_label(section),
      )
      for i, comp in components {
        let is_active = self.section == section && self.component == i
        let item_style : Array[String] = if is_active {
          [
            "display: block", "padding: 8px 16px", "cursor: pointer", "font-size: 13px",
            "color: white", "background: #6366f1", "border: none", "width: 100%",
            "text-align: left", "border-left: 3px solid #818cf8",
          ]
        } else {
          [
            "display: block", "padding: 8px 16px", "cursor: pointer", "font-size: 13px",
            "color: #cbd5e1", "background: transparent", "border: none", "width: 100%",
            "text-align: left", "border-left: 3px solid transparent",
          ]
        }
        items.push(
          @html.button(
            style=item_style,
            on_click=@rabbita.batch([
              dispatch(ChangeSection(section)),
              dispatch(ChangeComponent(i)),
            ]),
          ) <| comp,
        )
      }
    }
    items
  })
}

///|
fn Model::view_content(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  let components = section_components(self.section)
  let name = if self.component < components.length() {
    components[self.component]
  } else {
    "Unknown"
  }
  @html.main_(style=content_style) <| [
    @html.div(style=card_style) <| [
      @html.h1(style=component_title_style) <| name,
      @html.p(style=component_desc_style) <| component_description(
        self.section,
        self.component,
      ),
      @html.div(style=demo_section_style) <| [
        self.render_component(dispatch),
      ],
    ],
  ]
}

///|
fn component_description(section : Section, index : Int) -> String {
  match (section, index) {
    (Inputs, 0) =>
      "A single-line text input with real-time validation feedback."
    (Inputs, 1) => "A multi-line text area with character count and limit."
    (Inputs, 2) => "Checkboxes for toggling multiple independent options."
    (Inputs, 3) => "Radio buttons for selecting one option from a group."
    (Inputs, 4) => "A dropdown select for choosing from a list of options."
    (Inputs, 5) => "Toggle switches for binary on/off settings."
    (Inputs, 6) => "A range slider for selecting a numeric value."
    (Inputs, 7) => "A color picker with preset swatches and hex input."
    (Display, 0) =>
      "User avatars with initials and online/offline status indicators."
    (Display, 1) => "Notification badges showing count bubbles."
    (Display, 2) => "A progress bar showing completion percentage."
    (Display, 3) => "Tooltips that appear on hover with additional information."
    (Display, 4) => "Tags/chips that can be added and removed."
    (Display, 5) => "Skeleton loading placeholders with shimmer animation."
    (Display, 6) => "Empty state display with call-to-action."
    (Navigation, 0) => "Tabbed navigation for switching between content panels."
    (Navigation, 1) => "Collapsible accordion sections for organizing content."
    (Navigation, 2) => "Breadcrumb navigation showing the current path."
    (Navigation, 3) => "A tree view for hierarchical data with expand/collapse."
    (Data, 0) =>
      "A data table with sortable columns, pagination, and row selection."
    (Data, 1) => "A calendar with month navigation and day selection."
    (Data, 2) => "A vertical timeline showing events in chronological order."
    (Data, 3) => "A bar chart visualized with SVG."
    (Overlay, 0) => "Toast notifications that auto-dismiss after 3 seconds."
    (Overlay, 1) => "A modal dialog with confirm and cancel actions."
    (Overlay, 2) =>
      "A command palette for keyboard-driven navigation (Cmd+K style)."
    (Composite, 0) => "A kanban board with cards movable between columns."
    (Composite, 1) =>
      "A searchable select with filtering and keyboard navigation."
    (Composite, 2) => "A date range picker with start and end date selection."
    (Composite, 3) => "A multi-step form wizard with validation per step."
    (Composite, 4) =>
      "Live markdown preview with bold, italic, links and code rendering."
    (Composite, 5) =>
      "An editable spreadsheet grid with cell selection and inline editing."
    (Composite, 6) => "A reorderable list using up/down buttons."
    (Animated, 0) => "A stopwatch with start, stop, and reset controls."
    (Animated, 1) => "A countdown timer with configurable duration."
    (Animated, 2) =>
      "Text revealed character by character with typewriter effect."
    (Animated, 3) => "An image/card carousel with prev/next and auto-advance."
    (Animated, 4) => "A number that animates up and down on change."
    (RichInputs, 0) => "A clickable 1-5 star rating component."
    (RichInputs, 1) => "A PIN code entry with auto-focus between digits."
    (RichInputs, 2) => "Password input with real-time strength meter."
    (RichInputs, 3) => "Tag input with autocomplete suggestions."
    (RichInputs, 4) => "Click text to edit in-place with Enter to save."
    (Layout, 0) => "A numeric stepper with configurable step, min, and max."
    (Layout, 1) => "Two resizable panels with a draggable divider."
    (Layout, 2) =>
      "Renders only visible items from a large list (scroll windowing)."
    (Layout, 3) => "Cards of varying heights laid out in columns."
    (Feedback, 0) => "Click once to arm, click again to execute."
    (Feedback, 1) => "Copy text to clipboard with visual feedback."
    (Feedback, 2) => "Delete with undo that auto-expires."
    _ => ""
  }
}

///|
/// Dispatches rendering to the appropriate component view based on the active section and index.
pub fn Model::render_component(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  match (self.section, self.component) {
    (Inputs, 0) => self.view_text_input(dispatch)
    (Inputs, 1) => self.view_text_area(dispatch)
    (Inputs, 2) => self.view_checkbox(dispatch)
    (Inputs, 3) => self.view_radio(dispatch)
    (Inputs, 4) => self.view_select(dispatch)
    (Inputs, 5) => self.view_toggle(dispatch)
    (Inputs, 6) => self.view_slider(dispatch)
    (Inputs, 7) => self.view_color_picker(dispatch)
    (Display, 0) => self.view_avatar(dispatch)
    (Display, 1) => self.view_badge(dispatch)
    (Display, 2) => self.view_progress(dispatch)
    (Display, 3) => self.view_tooltip(dispatch)
    (Display, 4) => self.view_tag(dispatch)
    (Display, 5) => self.view_skeleton(dispatch)
    (Display, 6) => self.view_empty_state(dispatch)
    (Navigation, 0) => self.view_tabs(dispatch)
    (Navigation, 1) => self.view_accordion(dispatch)
    (Navigation, 2) => self.view_breadcrumb(dispatch)
    (Navigation, 3) => self.view_tree_view(dispatch)
    (Data, 0) => self.view_data_table(dispatch)
    (Data, 1) => self.view_calendar(dispatch)
    (Data, 2) => self.view_timeline(dispatch)
    (Data, 3) => self.view_chart(dispatch)
    (Overlay, 0) => self.view_toast(dispatch)
    (Overlay, 1) => self.view_modal(dispatch)
    (Overlay, 2) => self.view_command_palette(dispatch)
    (Composite, 0) => self.view_kanban(dispatch)
    (Composite, 1) => self.view_searchable_select(dispatch)
    (Composite, 2) => self.view_date_range(dispatch)
    (Composite, 3) => self.view_form_wizard(dispatch)
    (Composite, 4) => self.view_markdown(dispatch)
    (Composite, 5) => self.view_spreadsheet(dispatch)
    (Composite, 6) => self.view_drag_sort(dispatch)
    (Animated, 0) => self.view_stopwatch(dispatch)
    (Animated, 1) => self.view_countdown(dispatch)
    (Animated, 2) => self.view_typewriter(dispatch)
    (Animated, 3) => self.view_carousel(dispatch)
    (Animated, 4) => self.view_animated_counter(dispatch)
    (RichInputs, 0) => self.view_star_rating(dispatch)
    (RichInputs, 1) => self.view_pin_input(dispatch)
    (RichInputs, 2) => self.view_password_strength(dispatch)
    (RichInputs, 3) => self.view_tag_auto(dispatch)
    (RichInputs, 4) => self.view_inline_edit(dispatch)
    (Layout, 0) => self.view_stepper(dispatch)
    (Layout, 1) => self.view_split_pane(dispatch)
    (Layout, 2) => self.view_virtual_list(dispatch)
    (Layout, 3) => self.view_masonry(dispatch)
    (Feedback, 0) => self.view_confirm_button(dispatch)
    (Feedback, 1) => self.view_copy_clipboard(dispatch)
    (Feedback, 2) => self.view_undo_snackbar(dispatch)
    _ => @html.p() <| "Component not found"
  }
}
