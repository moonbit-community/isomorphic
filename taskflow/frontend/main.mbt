///|
/// Application state for the TaskFlow MVU architecture.
struct Model {
  tasks : Array[@shared.Task]
  members : Array[@shared.Member]
  today : String
  // Filters
  filter_status : String
  filter_assignee : Int
  filter_priority : String
  // Task creation
  adding_task : Bool
  new_title : String
  new_desc : String
  new_priority : String
  new_assignee : Int
  new_due_date : String
  // Task editing
  editing_task : Int
  edit_title : String
  edit_desc : String
  edit_priority : String
  edit_assignee : Int
  edit_due_date : String
  // Loading
  loading : Bool
}

///|
/// All possible user actions and server responses.
enum Msg {
  Init
  GotBoard(Result[@shared.Board, String])
  // Filters
  SetFilterStatus(String)
  SetFilterAssignee(Int)
  SetFilterPriority(String)
  // Task creation
  ShowAddTask
  HideAddTask
  NewTitleChanged(String)
  NewDescChanged(String)
  NewPriorityChanged(String)
  NewAssigneeChanged(Int)
  NewDueDateChanged(String)
  AddTask
  TaskAdded(Result[@shared.Task, String])
  // Task editing
  StartEditTask(@shared.Task)
  CancelEditTask
  EditTitleChanged(String)
  EditDescChanged(String)
  EditPriorityChanged(String)
  EditAssigneeChanged(Int)
  EditDueDateChanged(String)
  SaveEditTask
  TaskUpdated
  // Status change
  ChangeStatus(Int, String)
  StatusChanged
  // Delete
  DeleteTask(Int)
  TaskDeleted
}

///|
/// Issue GET /api/board and dispatch GotBoard on response.
fn fetch_board(dispatch : @rabbita.Dispatch[Msg]) -> @rabbita.Cmd {
  @http.get(
    @shared.api_board,
    expect=Json(fn(result) { dispatch(GotBoard(result)) }, fn(json) {
      Ok(@json.from_json(json)) catch {
        _ => Err("Failed to decode board")
      }
    }),
  )
}

///|
/// MVU update: handle a message, return new model and optional command.
fn update(
  dispatch : @rabbita.Dispatch[Msg],
  msg : Msg,
  model : Model,
) -> (@rabbita.Cmd, Model) {
  match msg {
    Init => (fetch_board(dispatch), { ..model, loading: true })
    GotBoard(Ok(board)) =>
      (
        @rabbita.none,
        {
          ..model,
          tasks: board.tasks,
          members: board.members,
          today: board.today,
          loading: false,
        },
      )
    GotBoard(Err(_)) => (@rabbita.none, { ..model, loading: false })
    // ---- Filters ----
    SetFilterStatus(s) => (@rabbita.none, { ..model, filter_status: s })
    SetFilterAssignee(id) => (@rabbita.none, { ..model, filter_assignee: id })
    SetFilterPriority(p) => (@rabbita.none, { ..model, filter_priority: p })
    // ---- Task creation ----
    ShowAddTask =>
      (
        @rabbita.none,
        {
          ..model,
          adding_task: true,
          new_title: "",
          new_desc: "",
          new_priority: "medium",
          new_assignee: 0,
          new_due_date: "",
        },
      )
    HideAddTask => (@rabbita.none, { ..model, adding_task: false })
    NewTitleChanged(v) => (@rabbita.none, { ..model, new_title: v })
    NewDescChanged(v) => (@rabbita.none, { ..model, new_desc: v })
    NewPriorityChanged(v) => (@rabbita.none, { ..model, new_priority: v })
    NewAssigneeChanged(id) => (@rabbita.none, { ..model, new_assignee: id })
    NewDueDateChanged(v) => (@rabbita.none, { ..model, new_due_date: v })
    AddTask => {
      if not(@shared.validate_task_title(model.new_title)) {
        return (@rabbita.none, model)
      }
      let title = model.new_title
      let desc = model.new_desc
      let priority = model.new_priority
      let assignee = model.new_assignee
      let due = model.new_due_date
      let cmd = @http.post(
        @shared.api_tasks,
        Json(
          (
            {
              "title": title,
              "description": desc,
              "priority": priority,
              "assignee_id": assignee.to_double(),
              "due_date": due,
            } : Json),
        ),
        expect=Json(fn(result) { dispatch(TaskAdded(result)) }, fn(json) {
          Ok(@json.from_json(json)) catch {
            _ => Err("Failed to decode task")
          }
        }),
      )
      (cmd, { ..model, adding_task: false })
    }
    TaskAdded(Ok(task)) => {
      let tasks = model.tasks.copy()
      tasks.push(task)
      (@rabbita.none, { ..model, tasks, })
    }
    TaskAdded(Err(_)) => (@rabbita.none, model)
    // ---- Task editing ----
    StartEditTask(task) =>
      (
        @rabbita.none,
        {
          ..model,
          editing_task: task.id,
          edit_title: task.title,
          edit_desc: task.description,
          edit_priority: task.priority,
          edit_assignee: task.assignee_id,
          edit_due_date: task.due_date,
        },
      )
    CancelEditTask => (@rabbita.none, { ..model, editing_task: 0 })
    EditTitleChanged(v) => (@rabbita.none, { ..model, edit_title: v })
    EditDescChanged(v) => (@rabbita.none, { ..model, edit_desc: v })
    EditPriorityChanged(v) => (@rabbita.none, { ..model, edit_priority: v })
    EditAssigneeChanged(id) => (@rabbita.none, { ..model, edit_assignee: id })
    EditDueDateChanged(v) => (@rabbita.none, { ..model, edit_due_date: v })
    SaveEditTask => {
      let id = model.editing_task
      if id == 0 || not(@shared.validate_task_title(model.edit_title)) {
        return (@rabbita.none, model)
      }
      let title = model.edit_title
      let desc = model.edit_desc
      let priority = model.edit_priority
      let assignee = model.edit_assignee
      let due = model.edit_due_date
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(TaskUpdated)
      })
      let cmd = @http.post(
        @shared.api_task(id),
        Json(
          (
            {
              "title": title,
              "description": desc,
              "priority": priority,
              "assignee_id": assignee.to_double(),
              "due_date": due,
            } : Json),
        ),
        expect~,
      )
      // Optimistic update
      let tasks = model.tasks.map(fn(t) {
        if t.id == id {
          {
            ..t,
            title,
            description: desc,
            priority,
            assignee_id: assignee,
            due_date: due,
          }
        } else {
          t
        }
      })
      (cmd, { ..model, tasks, editing_task: 0 })
    }
    TaskUpdated => (fetch_board(dispatch), model)
    // ---- Status change ----
    ChangeStatus(id, new_status) => {
      let mut current_status = ""
      for t in model.tasks {
        if t.id == id {
          current_status = t.status
          break
        }
      }
      if not(@shared.is_valid_transition(current_status, new_status)) {
        return (@rabbita.none, model)
      }
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(StatusChanged)
      })
      let cmd = @http.post(
        @shared.api_task_status(id),
        Json(({ "status": new_status } : Json)),
        expect~,
      )
      // Optimistic update
      let tasks = model.tasks.map(fn(t) {
        if t.id == id {
          { ..t, status: new_status }
        } else {
          t
        }
      })
      (cmd, { ..model, tasks, })
    }
    StatusChanged => (fetch_board(dispatch), model)
    // ---- Delete ----
    DeleteTask(id) => {
      let expect : @http.Expecting[_, Unit] = Text(fn(_result) {
        dispatch(TaskDeleted)
      })
      let cmd = @http.delete(@shared.api_task(id), expect~)
      let tasks = model.tasks.filter(fn(t) { t.id != id })
      (cmd, { ..model, tasks, })
    }
    TaskDeleted => (fetch_board(dispatch), model)
  }
}

// ========== View ==========

///|
/// Render the header with app title and stats.
fn view_header(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  let pct = @shared.completion_percent(model.tasks)
  let total = model.tasks.length()
  let done = @shared.count_by_status(model.tasks, "done")
  @html.div(
    style=[
      "background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)", "padding: 20px 32px",
      "margin-bottom: 16px", "border-radius: 12px", "display: flex", "justify-content: space-between",
      "align-items: center",
    ],
    [
      @html.div(style=[], [
        @html.h1(
          style=[
            "color: white", "font-size: 22px", "font-weight: 700", "letter-spacing: -0.3px",
            "margin-bottom: 4px",
          ],
          "TaskFlow",
        ),
        @html.div(style=["color: rgba(255,255,255,0.8)", "font-size: 13px"], [
          @html.text("\{pct}% complete"),
          @html.span(
            style=["margin-left: 12px", "color: rgba(255,255,255,0.6)"],
            "\{done}/\{total} tasks done",
          ),
        ]),
      ]),
      // Progress bar
      @html.div(style=["display: flex", "align-items: center", "gap: 12px"], [
        @html.div(
          style=[
            "width: 120px", "height: 6px", "background: rgba(255,255,255,0.2)", "border-radius: 3px",
            "overflow: hidden",
          ],
          [
            @html.div(
              style=[
                "width: \{pct}%",
                "height: 100%",
                "background: #a5f3fc",
                "border-radius: 3px",
                "transition: width 0.3s",
              ],
              [@html.text("")],
            ),
          ],
        ),
        if model.adding_task {
          @html.text("")
        } else {
          @html.button(
            on_click=dispatch(ShowAddTask),
            style=[
              "padding: 8px 16px", "background: rgba(255,255,255,0.2)", "color: white",
              "border: 1px solid rgba(255,255,255,0.3)", "border-radius: 6px", "cursor: pointer",
              "font-size: 13px",
            ],
            "+ New Task",
          )
        },
      ]),
    ],
  )
}

///|
/// Render filter buttons for status, priority, and assignee.
fn view_filters(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  @html.div(
    style=[
      "display: flex", "gap: 16px", "margin-bottom: 16px", "flex-wrap: wrap", "align-items: center",
      "padding: 12px 16px", "background: white", "border-radius: 10px", "border: 1px solid #e2e8f0",
    ],
    [
      // Status filter
      @html.div(
        style=["display: flex", "gap: 4px", "align-items: center"],
        {
          let items : Array[@rabbita.Html] = [
            @html.span(
              style=["font-size: 12px", "color: #94a3b8", "margin-right: 4px"],
              "Status:",
            ),
            {
              let is_sel = model.filter_status == ""
              let bg = if is_sel { "#4f46e5" } else { "#f1f5f9" }
              let fg = if is_sel { "white" } else { "#64748b" }
              @html.button(
                on_click=dispatch(SetFilterStatus("")),
                style=[
                  "padding: 3px 10px",
                  "border-radius: 12px",
                  "border: none",
                  "cursor: pointer",
                  "font-size: 11px",
                  "background: \{bg}",
                  "color: \{fg}",
                ],
                "All",
              )
            },
          ]
          for s in @shared.valid_statuses {
            let is_sel = model.filter_status == s
            let bg = if is_sel { @shared.status_color(s) } else { "#f1f5f9" }
            let fg = if is_sel { "white" } else { "#64748b" }
            items.push(
              @html.button(
                on_click=dispatch(SetFilterStatus(s)),
                style=[
                  "padding: 3px 10px",
                  "border-radius: 12px",
                  "border: none",
                  "cursor: pointer",
                  "font-size: 11px",
                  "background: \{bg}",
                  "color: \{fg}",
                ],
                @shared.status_label(s),
              ),
            )
          }
          items
        },
      ),
      // Priority filter
      @html.div(
        style=["display: flex", "gap: 4px", "align-items: center"],
        {
          let items : Array[@rabbita.Html] = [
            @html.span(
              style=["font-size: 12px", "color: #94a3b8", "margin-right: 4px"],
              "Priority:",
            ),
            {
              let is_sel = model.filter_priority == ""
              let bg = if is_sel { "#4f46e5" } else { "#f1f5f9" }
              let fg = if is_sel { "white" } else { "#64748b" }
              @html.button(
                on_click=dispatch(SetFilterPriority("")),
                style=[
                  "padding: 3px 10px",
                  "border-radius: 12px",
                  "border: none",
                  "cursor: pointer",
                  "font-size: 11px",
                  "background: \{bg}",
                  "color: \{fg}",
                ],
                "All",
              )
            },
          ]
          for p in @shared.valid_priorities {
            let is_sel = model.filter_priority == p
            let bg = if is_sel { @shared.priority_color(p) } else { "#f1f5f9" }
            let fg = if is_sel { "white" } else { "#64748b" }
            items.push(
              @html.button(
                on_click=dispatch(SetFilterPriority(p)),
                style=[
                  "padding: 3px 10px",
                  "border-radius: 12px",
                  "border: none",
                  "cursor: pointer",
                  "font-size: 11px",
                  "background: \{bg}",
                  "color: \{fg}",
                ],
                @shared.priority_label(p),
              ),
            )
          }
          items
        },
      ),
      // Assignee filter
      @html.div(
        style=["display: flex", "gap: 4px", "align-items: center"],
        {
          let items : Array[@rabbita.Html] = [
            @html.span(
              style=["font-size: 12px", "color: #94a3b8", "margin-right: 4px"],
              "Assignee:",
            ),
            {
              let is_sel = model.filter_assignee == 0
              let border = if is_sel {
                "2px solid #4f46e5"
              } else {
                "2px solid transparent"
              }
              @html.div(
                on_click=dispatch(SetFilterAssignee(0)),
                style=[
                  "width: 26px",
                  "height: 26px",
                  "border-radius: 50%",
                  "background: #e2e8f0",
                  "cursor: pointer",
                  "display: flex",
                  "align-items: center",
                  "justify-content: center",
                  "font-size: 10px",
                  "color: #94a3b8",
                  "border: \{border}",
                ],
                [@html.text("All")],
              )
            },
          ]
          for m in model.members {
            let is_sel = model.filter_assignee == m.id
            let bg = @shared.member_color(m.color)
            let border = if is_sel {
              "2px solid #4f46e5"
            } else {
              "2px solid transparent"
            }
            let initial = @shared.member_initial(m.name)
            items.push(
              @html.div(
                on_click=dispatch(SetFilterAssignee(m.id)),
                style=[
                  "width: 26px",
                  "height: 26px",
                  "border-radius: 50%",
                  "cursor: pointer",
                  "display: flex",
                  "align-items: center",
                  "justify-content: center",
                  "font-size: 11px",
                  "color: white",
                  "font-weight: 600",
                  "background: \{bg}",
                  "border: \{border}",
                ],
                [@html.text(initial)],
              ),
            )
          }
          items
        },
      ),
    ],
  )
}

///|
/// Render a row of member avatars for assignee selection in forms.
fn view_assignee_picker(
  dispatch : @rabbita.Dispatch[Msg],
  members : Array[@shared.Member],
  current : Int,
  on_change : (Int) -> Msg,
) -> @rabbita.Html {
  @html.div(
    style=[
      "display: flex", "gap: 4px", "margin-bottom: 8px", "flex-wrap: wrap", "align-items: center",
    ],
    {
      let items : Array[@rabbita.Html] = [
        {
          let is_sel = current == 0
          let border = if is_sel {
            "2px solid #1e293b"
          } else {
            "2px solid transparent"
          }
          @html.div(
            on_click=dispatch(on_change(0)),
            style=[
              "width: 28px",
              "height: 28px",
              "border-radius: 50%",
              "background: #e2e8f0",
              "cursor: pointer",
              "display: flex",
              "align-items: center",
              "justify-content: center",
              "font-size: 11px",
              "color: #94a3b8",
              "border: \{border}",
            ],
            [@html.text("—")],
          )
        },
      ]
      for m in members {
        let bg = @shared.member_color(m.color)
        let is_sel = current == m.id
        let border = if is_sel {
          "2px solid #1e293b"
        } else {
          "2px solid transparent"
        }
        let initial = @shared.member_initial(m.name)
        items.push(
          @html.div(
            on_click=dispatch(on_change(m.id)),
            style=[
              "width: 28px",
              "height: 28px",
              "border-radius: 50%",
              "cursor: pointer",
              "display: flex",
              "align-items: center",
              "justify-content: center",
              "font-size: 11px",
              "color: white",
              "font-weight: 600",
              "background: \{bg}",
              "border: \{border}",
            ],
            [@html.text(initial)],
          ),
        )
      }
      items
    },
  )
}

///|
/// Render a row of priority buttons for selection in forms.
fn view_priority_picker(
  dispatch : @rabbita.Dispatch[Msg],
  current : String,
  on_change : (String) -> Msg,
) -> @rabbita.Html {
  @html.div(
    style=["display: flex", "gap: 4px", "margin-bottom: 8px"],
    @shared.valid_priorities.map(fn(p) {
      let is_sel = p == current
      let bg = if is_sel { @shared.priority_color(p) } else { "#f1f5f9" }
      let fg = if is_sel { "white" } else { "#64748b" }
      @html.button(
        on_click=dispatch(on_change(p)),
        style=[
          "padding: 4px 12px",
          "border-radius: 12px",
          "border: none",
          "cursor: pointer",
          "font-size: 12px",
          "background: \{bg}",
          "color: \{fg}",
        ],
        @shared.priority_label(p),
      )
    }),
  )
}

///|
/// Render the form for creating a new task.
fn view_add_task_form(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  @html.div(
    style=[
      "background: white", "border-radius: 10px", "padding: 16px", "border: 2px dashed #c7d2fe",
      "margin-bottom: 16px",
    ],
    [
      @html.div(
        style=[
          "font-size: 14px", "font-weight: 600", "color: #334155", "margin-bottom: 12px",
        ],
        [@html.text("New Task")],
      ),
      @html.input(
        input_type=Text,
        placeholder="Task title",
        value=model.new_title,
        on_input=fn(v) { dispatch(NewTitleChanged(v)) },
        style=[
          "width: 100%", "padding: 8px 10px", "border: 1px solid #e2e8f0", "border-radius: 6px",
          "font-size: 14px", "outline: none", "margin-bottom: 8px",
        ],
        "",
      ),
      @html.textarea(
        placeholder="Description (optional)",
        value=model.new_desc,
        on_input=fn(v) { dispatch(NewDescChanged(v)) },
        rows=2,
        style=[
          "width: 100%", "padding: 8px 10px", "border: 1px solid #e2e8f0", "border-radius: 6px",
          "font-size: 13px", "outline: none", "resize: vertical", "font-family: inherit",
          "margin-bottom: 8px",
        ],
        "",
      ),
      @html.div(
        style=[
          "display: flex", "gap: 16px", "margin-bottom: 8px", "flex-wrap: wrap",
        ],
        [
          @html.div(style=[], [
            @html.div(
              style=["font-size: 12px", "color: #94a3b8", "margin-bottom: 4px"],
              [@html.text("Priority")],
            ),
            view_priority_picker(dispatch, model.new_priority, fn(p) {
              NewPriorityChanged(p)
            }),
          ]),
          @html.div(style=[], [
            @html.div(
              style=["font-size: 12px", "color: #94a3b8", "margin-bottom: 4px"],
              [@html.text("Assignee")],
            ),
            view_assignee_picker(dispatch, model.members, model.new_assignee, fn(
              id,
            ) {
              NewAssigneeChanged(id)
            }),
          ]),
          @html.div(style=[], [
            @html.div(
              style=["font-size: 12px", "color: #94a3b8", "margin-bottom: 4px"],
              [@html.text("Due Date")],
            ),
            @html.input(
              input_type=Text,
              placeholder="YYYY-MM-DD",
              value=model.new_due_date,
              on_input=fn(v) { dispatch(NewDueDateChanged(v)) },
              style=[
                "padding: 6px 10px", "border: 1px solid #e2e8f0", "border-radius: 6px",
                "font-size: 13px", "outline: none", "width: 130px",
              ],
              "",
            ),
          ]),
        ],
      ),
      @html.div(style=["display: flex", "gap: 6px"], [
        @html.button(
          on_click=dispatch(AddTask),
          style=[
            "padding: 6px 14px", "background: #4f46e5", "color: white", "border: none",
            "border-radius: 6px", "cursor: pointer", "font-size: 13px",
          ],
          "Create Task",
        ),
        @html.button(
          on_click=dispatch(HideAddTask),
          style=[
            "padding: 6px 14px", "background: #f1f5f9", "color: #64748b", "border: none",
            "border-radius: 6px", "cursor: pointer", "font-size: 13px",
          ],
          "Cancel",
        ),
      ]),
    ],
  )
}

///|
/// Render the inline edit form for a task.
fn view_edit_task_form(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
) -> @rabbita.Html {
  @html.div(
    style=[
      "background: white", "border-radius: 8px", "padding: 14px", "border: 1px solid #4f46e5",
      "margin-bottom: 8px",
    ],
    [
      @html.input(
        input_type=Text,
        placeholder="Task title",
        value=model.edit_title,
        on_input=fn(v) { dispatch(EditTitleChanged(v)) },
        style=[
          "width: 100%", "padding: 6px 8px", "border: 1px solid #e2e8f0", "border-radius: 4px",
          "font-size: 13px", "outline: none", "margin-bottom: 6px",
        ],
        "",
      ),
      @html.textarea(
        placeholder="Description (optional)",
        value=model.edit_desc,
        on_input=fn(v) { dispatch(EditDescChanged(v)) },
        rows=2,
        style=[
          "width: 100%", "padding: 6px 8px", "border: 1px solid #e2e8f0", "border-radius: 4px",
          "font-size: 12px", "outline: none", "resize: vertical", "font-family: inherit",
          "margin-bottom: 6px",
        ],
        "",
      ),
      @html.div(
        style=[
          "display: flex", "gap: 12px", "margin-bottom: 6px", "flex-wrap: wrap",
        ],
        [
          @html.div(style=[], [
            @html.div(
              style=["font-size: 11px", "color: #94a3b8", "margin-bottom: 2px"],
              [@html.text("Priority")],
            ),
            view_priority_picker(dispatch, model.edit_priority, fn(p) {
              EditPriorityChanged(p)
            }),
          ]),
          @html.div(style=[], [
            @html.div(
              style=["font-size: 11px", "color: #94a3b8", "margin-bottom: 2px"],
              [@html.text("Assignee")],
            ),
            view_assignee_picker(dispatch, model.members, model.edit_assignee, fn(
              id,
            ) {
              EditAssigneeChanged(id)
            }),
          ]),
          @html.div(style=[], [
            @html.div(
              style=["font-size: 11px", "color: #94a3b8", "margin-bottom: 2px"],
              [@html.text("Due Date")],
            ),
            @html.input(
              input_type=Text,
              placeholder="YYYY-MM-DD",
              value=model.edit_due_date,
              on_input=fn(v) { dispatch(EditDueDateChanged(v)) },
              style=[
                "padding: 4px 8px", "border: 1px solid #e2e8f0", "border-radius: 4px",
                "font-size: 12px", "outline: none", "width: 120px",
              ],
              "",
            ),
          ]),
        ],
      ),
      @html.div(style=["display: flex", "gap: 6px"], [
        @html.button(
          on_click=dispatch(SaveEditTask),
          style=[
            "padding: 5px 12px", "background: #4f46e5", "color: white", "border: none",
            "border-radius: 4px", "cursor: pointer", "font-size: 12px",
          ],
          "Save",
        ),
        @html.button(
          on_click=dispatch(CancelEditTask),
          style=[
            "padding: 5px 12px", "background: #f1f5f9", "color: #64748b", "border: none",
            "border-radius: 4px", "cursor: pointer", "font-size: 12px",
          ],
          "Cancel",
        ),
      ]),
    ],
  )
}

///|
/// Render a single task card.
fn view_task_item(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
  task : @shared.Task,
) -> @rabbita.Html {
  if model.editing_task == task.id {
    return view_edit_task_form(dispatch, model)
  }
  let border_color = @shared.priority_color(task.priority)
  let is_done = task.status == "done"
  let title_color = if is_done { "#94a3b8" } else { "#1e293b" }
  let title_decoration = if is_done { "line-through" } else { "none" }
  let status_bg = @shared.status_color(task.status)
  let transitions = @shared.allowed_transitions(task.status)
  // Assignee info
  let assignee_html = match
    @shared.find_member(model.members, task.assignee_id) {
    Some(m) => {
      let bg = @shared.member_color(m.color)
      let initial = @shared.member_initial(m.name)
      @html.div(
        style=[
          "width: 24px",
          "height: 24px",
          "border-radius: 50%",
          "display: flex",
          "align-items: center",
          "justify-content: center",
          "font-size: 10px",
          "color: white",
          "font-weight: 600",
          "background: \{bg}",
        ],
        [@html.text(initial)],
      )
    }
    None =>
      @html.div(
        style=[
          "width: 24px", "height: 24px", "border-radius: 50%", "background: #e2e8f0",
          "display: flex", "align-items: center", "justify-content: center", "font-size: 10px",
          "color: #94a3b8",
        ],
        [@html.text("—")],
      )
  }
  // Due date display
  let due_html = if task.due_date != "" {
    let urgency = @shared.urgency_label(task.due_date, model.today)
    let due_color = match urgency {
      "Overdue" => "#ef4444"
      "Due today" => "#f97316"
      _ => "#64748b"
    }
    @html.div(style=["font-size: 11px", "color: \{due_color}"], [
      @html.text(task.due_date),
    ])
  } else {
    @html.text("")
  }
  @html.div(
    style=[
      "background: white",
      "border-radius: 8px",
      "padding: 12px 16px",
      "margin-bottom: 8px",
      "border: 1px solid #f0f0f5",
      "border-left: 4px solid \{border_color}",
      "transition: all 0.15s",
    ],
    [
      // Top row: title + info
      @html.div(
        style=[
          "display: flex", "justify-content: space-between", "align-items: flex-start",
          "margin-bottom: 6px",
        ],
        [
          @html.div(style=["flex: 1"], [
            @html.div(
              style=[
                "font-size: 14px",
                "font-weight: 500",
                "color: \{title_color}",
                "text-decoration: \{title_decoration}",
              ],
              [@html.text(task.title)],
            ),
            if task.description != "" {
              @html.div(
                style=[
                  "font-size: 12px", "color: #64748b", "margin-top: 2px", "line-height: 1.4",
                ],
                [@html.text(task.description)],
              )
            } else {
              @html.text("")
            },
          ]),
          @html.div(
            style=[
              "display: flex", "gap: 8px", "align-items: center", "margin-left: 12px",
            ],
            [
              assignee_html,
              // Status badge
              @html.span(
                style=[
                  "padding: 2px 8px",
                  "border-radius: 10px",
                  "font-size: 11px",
                  "color: white",
                  "background: \{status_bg}",
                ],
                @shared.status_label(task.status),
              ),
              due_html,
            ],
          ),
        ],
      ),
      // Bottom row: transition buttons + actions
      @html.div(
        style=[
          "display: flex", "gap: 4px", "justify-content: space-between", "align-items: center",
        ],
        [
          // Status transition buttons
          @html.div(
            style=["display: flex", "gap: 3px"],
            transitions.map(fn(target) {
              let label = @shared.transition_label(task.status, target)
              let bg = @shared.status_color(target)
              @html.button(
                on_click=dispatch(ChangeStatus(task.id, target)),
                style=[
                  "padding: 2px 8px",
                  "border-radius: 4px",
                  "border: none",
                  "cursor: pointer",
                  "font-size: 10px",
                  "color: white",
                  "background: \{bg}",
                ],
                label,
              )
            }),
          ),
          // Edit / Delete
          @html.div(style=["display: flex", "gap: 3px"], [
            @html.button(
              on_click=dispatch(StartEditTask(task)),
              style=[
                "padding: 2px 8px", "font-size: 11px", "cursor: pointer", "border-radius: 4px",
                "border: 1px solid #e2e8f0", "background: #f8fafc", "color: #64748b",
              ],
              "Edit",
            ),
            @html.button(
              on_click=dispatch(DeleteTask(task.id)),
              style=[
                "padding: 2px 8px", "font-size: 11px", "cursor: pointer", "border-radius: 4px",
                "border: 1px solid #fecaca", "background: #fef2f2", "color: #dc2626",
              ],
              "Del",
            ),
          ]),
        ],
      ),
    ],
  )
}

///|
/// MVU view: render the full task management interface.
fn view(dispatch : @rabbita.Dispatch[Msg], model : Model) -> @rabbita.Html {
  let filtered = @shared.filter_tasks(
    model.tasks,
    model.filter_status,
    model.filter_assignee,
    model.filter_priority,
  )
  let sorted = @shared.sort_tasks(filtered)
  @html.div(
    style=[
      "padding: 16px 24px", "min-height: 100vh", "max-width: 900px", "margin: 0 auto",
    ],
    [
      view_header(dispatch, model),
      if model.loading {
        @html.div(
          style=[
            "text-align: center", "padding: 60px 0", "color: #94a3b8", "font-size: 15px",
          ],
          [@html.text("Loading...")],
        )
      } else {
        @html.div(style=[], [
          view_filters(dispatch, model),
          if model.adding_task {
            view_add_task_form(dispatch, model)
          } else {
            @html.text("")
          },
          if sorted.length() == 0 {
            @html.div(
              style=[
                "text-align: center", "padding: 40px 0", "color: #94a3b8", "font-size: 14px",
              ],
              [@html.text("No tasks match your filters")],
            )
          } else {
            @html.div(
              style=["display: flex", "flex-direction: column"],
              sorted.map(fn(task) { view_task_item(dispatch, model, task) }),
            )
          },
        ])
      },
    ],
  )
}

///|
fn main {
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model={
      tasks: [],
      members: [],
      today: "",
      filter_status: "",
      filter_assignee: 0,
      filter_priority: "",
      adding_task: false,
      new_title: "",
      new_desc: "",
      new_priority: "medium",
      new_assignee: 0,
      new_due_date: "",
      editing_task: 0,
      edit_title: "",
      edit_desc: "",
      edit_priority: "",
      edit_assignee: 0,
      edit_due_date: "",
      loading: false,
    },
    update~,
    view~,
  )
  let app = @rabbita.new(app_cell)
  app.with_init(dispatch(Init))
  app.mount("app")
}
