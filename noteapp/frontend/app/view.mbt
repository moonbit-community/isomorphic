///|
/// Format reading time as a human-readable string.
fn format_reading_time(secs : Int) -> String {
  if secs < 60 {
    "< 1 min read"
  } else {
    let mins = secs / 60
    "\{mins} min read"
  }
}

///|
/// Find a note by id.
fn find_note(notes : Array[@shared.Note], id : Int) -> @shared.Note? {
  notes.iter().find_first(fn(n) { n.id == id })
}

///|
/// Render a stat badge with colored text and background.
fn view_stat_badge(text : String, color : String, bg : String) -> @rabbita.Html {
  @html.span(style=[
    "font-size: 12px",
    "font-weight: 600",
    "color: \{color}",
    "background: \{bg}",
    "padding: 4px 10px",
    "border-radius: 10px",
  ]) <| text
}

///|
/// Render a white card with a section title.
fn view_card(title : String, children : Array[@rabbita.Html]) -> @rabbita.Html {
  @html.div(
    style=card_style,
    {
      let all : Array[@rabbita.Html] = [
        @html.h2(style=card_title_style) <| title,
      ]
      all.append(children[:])
      all
    },
  )
}

///|
/// Render the entire UI: header, new-note form or detail view, and notes list.
pub fn Model::view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(
    style=container_style,
    {
      let sections : Array[@rabbita.Html] = []
      // Header
      sections.push(
        @html.div(style=header_style) <| [
          @html.h1(style=header_title_style) <| "Notes",
          @html.p(style=header_subtitle_style) <| "Quick thoughts, organized",
        ],
      )
      // Note detail view (when a note is selected)
      if self.selected_note_id != 0 {
        match find_note(self.notes, self.selected_note_id) {
          Some(note) => {
            let stats = @shared.compute_stats(note.content)
            sections.push(
              view_card("Note Detail") <| [
                // Back button
                @html.button(
                  on_click=dispatch(DeselectNote),
                  style=back_btn_style,
                ) <| "Back",
                // Title
                @html.h1(style=detail_title_style) <| note.title,
                // Pinned badge
                if note.pinned {
                  @html.div(style=pinned_badge_style) <| "Pinned"
                } else {
                  @html.nothing
                },
                // Content
                @html.div(style=detail_content_style) <| note.content,
                // Stats bar
                @html.div(style=stats_bar_style) <| [
                  view_stat_badge(
                    "\{stats.word_count} words",
                    "#667eea",
                    "#f0f0ff",
                  ),
                  view_stat_badge(
                    "\{stats.char_count} chars",
                    "#9c27b0",
                    "#f5f0ff",
                  ),
                  view_stat_badge(
                    format_reading_time(stats.reading_time_secs),
                    "#43a047",
                    "#e8f5e9",
                  ),
                ],
              ],
            )
          }
          None => ()
        }
      } else {
        // New Note card
        sections.push(
          view_card("New Note") <| [
            @html.form(on_submit=dispatch(SaveNote), style=form_style) <| [
              @html.input(
                input_type=Text,
                placeholder="Note title...",
                value=self.title_input,
                on_input=fn(v) { dispatch(TitleInputChanged(v)) },
                style=input_style,
              ) <| "",
              @html.textarea(
                placeholder="Write your note...",
                value=self.content_input,
                on_input=fn(v) { dispatch(ContentInputChanged(v)) },
                rows=5,
                style=textarea_style,
              ) <| "",
              @html.button(type_="submit", style=submit_btn_style) <| "Save Note",
            ],
          ],
        )
        // Notes list
        if !self.notes.is_empty() {
          sections.push(
            view_card("All Notes") <| self.notes.map(fn(note) {
              let preview = @shared.truncate(note.content, 80)
              let stats = @shared.compute_stats(note.content)
              let bg = if note.pinned {
                "background: #fffdf5"
              } else {
                "background: white"
              }
              @html.div(style=note_item_style) <| [
                @html.div(style=note_row_style) <| [
                  // Main content area (clickable)
                  @html.div(style=[
                    "flex: 1", "min-width: 0", "cursor: pointer", "padding: 8px 12px",
                    "border-radius: 10px", bg,
                  ]) <| [
                    // Title row
                    @html.div(style=title_row_style) <| [
                      if note.pinned {
                        @html.span(style=pin_indicator_style) <| "* "
                      } else {
                        @html.nothing
                      },
                      @html.button(
                        on_click=dispatch(SelectNote(note.id)),
                        style=note_title_btn_style,
                      ) <| note.title,
                    ],
                    // Preview
                    @html.div(style=preview_style) <| preview,
                    // Word count badge
                    @html.span(style=word_badge_style) <| "\{stats.word_count} words",
                  ],
                  // Action buttons
                  @html.div(style=action_col_style) <| [
                    // Pin button
                    @html.button(
                      on_click=dispatch(TogglePin(note.id)),
                      style=if note.pinned {
                        pin_btn_active_style
                      } else {
                        pin_btn_inactive_style
                      },
                    ) <| (if note.pinned { "*" } else { "o" }),
                    // Delete button
                    @html.button(
                      on_click=dispatch(DeleteNote(note.id)),
                      style=delete_btn_style,
                    ) <| "X",
                  ],
                ],
              ]
            }),
          )
        }
      }
      sections
    },
  )
}
