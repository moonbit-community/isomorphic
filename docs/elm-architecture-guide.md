# The Elm Architecture (MVU) — A Beginner's Guide

This guide explains the **Elm Architecture**, also called **Model-View-Update (MVU)**, using real code from this repository. No prior knowledge of Elm or functional programming is assumed.

## Table of Contents

- [What Problem Does It Solve?](#what-problem-does-it-solve)
- [The Big Picture](#the-big-picture)
- [The Three Building Blocks](#the-three-building-blocks)
  - [1. Model — Your App's State](#1-model--your-apps-state)
  - [2. Msg — Things That Can Happen](#2-msg--things-that-can-happen)
  - [3. Update — How State Changes](#3-update--how-state-changes)
  - [4. View — What the User Sees](#4-view--what-the-user-sees)
- [Walking Through a User Interaction](#walking-through-a-user-interaction)
- [Side Effects: Talking to the Server](#side-effects-talking-to-the-server)
- [Wiring It All Together](#wiring-it-all-together)
- [Testing — The Big Win](#testing--the-big-win)
- [Common Patterns](#common-patterns)
- [How This Repo Uses MVU](#how-this-repo-uses-mvu)
- [Comparison With Other Approaches](#comparison-with-other-approaches)
- [Next Steps](#next-steps)

## What Problem Does It Solve?

Imagine you're building a web app. You have buttons, text inputs, lists of data, loading spinners, error messages. A typical approach might look like this:

```
button.onClick → directly change the DOM
                 directly update some variable
                 directly send an HTTP request
                 on response → directly update more DOM
```

This works for small apps, but it quickly becomes a tangled mess:
- **Where is the state?** Spread across DOM elements, variables, and closures.
- **What caused this bug?** Hard to tell — any code can change anything at any time.
- **How do I test it?** You'd need a browser to run the code.

The Elm Architecture solves this by enforcing a simple rule: **all state lives in one place, and all changes go through one function.**

## The Big Picture

The entire architecture is a loop with four steps:

```
  ┌─────────────────────────────────────────────────────┐
  │                                                     │
  │   1. Something happens (user clicks, server responds)
  │      ↓                                              │
  │   2. A "message" describes what happened             │
  │      ↓                                              │
  │   3. The "update" function computes the new state    │
  │      ↓                                              │
  │   4. The "view" function renders the new screen      │
  │      ↓                                              │
  │   (back to step 1 — user sees new screen, interacts) │
  │                                                     │
  └─────────────────────────────────────────────────────┘
```

That's it. Every app in this repository follows this exact loop, from the simplest (todoapp, 3 fields) to the most complex (taskflow, 75 fields).

## The Three Building Blocks

Let's learn each piece using the **todoapp** — the simplest app in this repository.

### 1. Model — Your App's State

The Model is a single struct that holds **everything** your app needs to know. Think of it as a snapshot of your entire application at one moment in time.

Here's the todoapp's Model (from `todoapp/frontend/app/types.mbt`):

```moonbit
pub(all) struct Model {
  todos : Array[Todo]   // the list of todos
  input : String        // what the user is currently typing
  loading : Bool        // are we waiting for the server?
}
```

That's all the state in the entire app — just 3 fields. If you know these 3 values, you know exactly what the screen looks like.

**Key rule: the Model is the single source of truth.** There are no hidden variables, no state tucked away in DOM elements, no global flags. Everything is right here.

> **Analogy:** Think of the Model like a save file in a video game. If you save the game and load it later, you're in exactly the same state. The Model works the same way — it completely describes the current state of your app.

### 2. Msg — Things That Can Happen

A `Msg` (short for "message") is an enum that lists **every possible thing** that can happen in your app. Here's the todoapp's Msg (from `todoapp/frontend/app/types.mbt`):

```moonbit
pub(all) enum Msg {
  // App lifecycle
  Init                                       // the app just started

  // User actions
  InputChanged(String)                       // user typed in the text box
  AddTodo                                    // user clicked "Add"
  ToggleTodo(Int)                            // user clicked a checkbox (Int = todo id)
  DeleteTodo(Int)                            // user clicked "Delete" (Int = todo id)

  // Server responses
  GotTodos(Result[Array[Todo], String])      // server sent us all todos
  TodoAdded(Result[Todo, String])            // server confirmed a new todo
  TodoToggled(Result[Todo, String])          // server confirmed a toggle
  TodoDeleted(Result[Int, String])           // server confirmed a deletion
}
```

Notice two categories:
1. **User actions** — things the user does (type, click)
2. **Server responses** — data coming back from the backend

Every server response uses `Result[T, String]` — either `Ok(data)` if it succeeded, or `Err(error_message)` if it failed. This forces you to handle both cases.

**Key rule: nothing happens without a Msg.** If you want to add a new feature, you add a new Msg variant. The compiler will then force you to handle it.

### 3. Update — How State Changes

The `update` function is the brain of your app. It takes:
- The **current** model (state)
- A **message** (what happened)

And returns:
- The **new** model (next state)
- An optional **command** (side effect, like an HTTP request)

Here's the todoapp's update, simplified and annotated (from `todoapp/frontend/app/update.mbt`):

```moonbit
pub fn Model::update(
  self : Model,          // current state
  msg~ : Msg,            // what happened
  dispatch~ : Dispatch[Msg],  // how to send future messages (for HTTP callbacks)
) -> (Model, Cmd) {
  match msg {

    // ── App startup ──────────────────────────
    Init => {
      // Start loading, and fire an HTTP request to get all todos
      ({ ..self, loading: true }, fetch_todos(dispatch))
    }

    // ── Server sent us the todo list ─────────
    GotTodos(Ok(todos)) => {
      // Store the todos, stop loading
      ({ ..self, todos, loading: false }, none)
    }
    GotTodos(Err(_)) => {
      // Something went wrong, just stop loading
      ({ ..self, loading: false }, none)
    }

    // ── User typed in the input box ──────────
    InputChanged(value) => {
      // Just update the input field, nothing else
      ({ ..self, input: value }, none)
    }

    // ── User clicked "Add" ───────────────────
    AddTodo => {
      // Validate first
      if !validate_text(self.input) {
        return (self, none)    // invalid input → do nothing
      }
      // Clear the input and send HTTP POST to create the todo
      let cmd = http.post(api_todos, body=self.input, ...)
      ({ ..self, input: "" }, cmd)
    }

    // ── Server confirmed the new todo ────────
    TodoAdded(Ok(todo)) => {
      // Append to the list
      let todos = self.todos.copy()
      todos.push(todo)
      ({ ..self, todos }, none)
    }
    TodoAdded(Err(_)) => {
      // Creation failed, do nothing
      (self, none)
    }

    // ... similar patterns for Toggle, Delete
  }
}
```

**Three patterns you'll see over and over:**

| Pattern | Example | What It Does |
|---------|---------|--------------|
| Pure state update | `InputChanged(value)` | Changes state, no side effect. Returns `none` as command. |
| Fire and wait | `AddTodo` | Changes state AND sends HTTP request. The response will come back as a new Msg later. |
| Handle response | `TodoAdded(Ok(todo))` | Processes server data and updates state. |

**Key rule: update is the _only_ place state changes.** The view function never modifies state. Event handlers never modify state. They all just send messages, and update handles them one at a time.

> **Analogy:** Think of update like a receptionist at a desk. People (messages) come to the desk one at a time. The receptionist looks at the current state, looks at the message, and decides what the new state should be. There's no chaos — everything is handled in order.

### 4. View — What the User Sees

The `view` function takes the current Model and produces HTML. It also wires up event handlers that dispatch messages when the user interacts.

Here's the todoapp's view, annotated (from `todoapp/frontend/app/view.mbt`):

```moonbit
pub fn Model::view(
  self : Model,
  dispatch : Dispatch[Msg],
) -> Html {
  div(style=card_style, [
    h1("Todo List"),
    self.view_form(dispatch),
    self.view_todos(dispatch),
  ])
}
```

The form sends messages when the user types or submits:

```moonbit
fn Model::view_form(self : Model, dispatch : Dispatch[Msg]) -> Html {
  form(on_submit=dispatch(AddTodo), [
    //                    ↑ when form is submitted, send AddTodo message

    input(
      value=self.input,   // display current input text from Model
      on_input=(value) => dispatch(InputChanged(value)),
      //                   ↑ on every keystroke, send InputChanged message
    ),
    button("Add"),
  ])
}
```

The todo list shows different things based on the Model's state:

```moonbit
fn Model::view_todos(self : Model, dispatch : Dispatch[Msg]) -> Html {
  // If loading, show spinner
  if self.loading {
    return p("Loading...")
  }
  // If empty, show hint
  if self.todos is [] {
    return p("No todos yet. Add one above!")
  }
  // Otherwise, render each todo
  ul(self.todos.map(todo => todo.view_todo_item(dispatch)))
}
```

Each todo item has a checkbox and delete button:

```moonbit
fn Todo::view_todo_item(todo : Todo, dispatch : Dispatch[Msg]) -> Html {
  li([
    input(
      type_=Checkbox,
      checked=todo.done,
      on_change=fn(_) { dispatch(ToggleTodo(todo.id)) },
      //                ↑ checkbox toggled → send ToggleTodo message
    ),
    span(todo.text),
    button(
      on_click=dispatch(DeleteTodo(todo.id)),
      //       ↑ delete clicked → send DeleteTodo message
      "Delete",
    ),
  ])
}
```

**Key rule: the view never changes state directly.** It only does two things:
1. Read the Model to decide what to display
2. Set up event handlers that dispatch Messages

> **Analogy:** The view is like a TV screen. It shows you what's happening, and it has buttons (remote control) that send signals. But the screen itself doesn't decide what happens — it just displays and relays.

## Walking Through a User Interaction

Let's trace exactly what happens when a user adds a todo. This is the complete data flow:

```
Step 1: User types "Buy milk" in the input box
        ↓
        Each keystroke dispatches InputChanged("B"), InputChanged("Bu"), ...
        ↓
        update receives InputChanged("Buy milk")
        update returns { ..model, input: "Buy milk" }
        ↓
        view re-renders with "Buy milk" in the input box

Step 2: User clicks "Add"
        ↓
        Form submission dispatches AddTodo
        ↓
        update receives AddTodo
        update validates "Buy milk" — it's valid!
        update returns:
          new model = { ..model, input: "" }     ← clear the input
          command   = POST /api/todos             ← send to server
        ↓
        view re-renders with empty input box
        HTTP request fires in background

Step 3: Server responds with the new todo
        ↓
        Framework dispatches TodoAdded(Ok({ id: 1, text: "Buy milk", done: false }))
        ↓
        update receives TodoAdded(Ok(todo))
        update appends todo to the list
        update returns:
          new model = { ..model, todos: [..., new_todo] }
          command   = none
        ↓
        view re-renders with "Buy milk" in the todo list
```

Notice how everything flows through the same loop. There's no special case for "first render" vs. "user click" vs. "server response" — it's all just messages going through update.

## Side Effects: Talking to the Server

Pure state updates are simple, but real apps need to talk to servers. The MVU pattern handles this cleanly by separating "what to do" from "doing it."

When `update` needs to make an HTTP request, it returns a **command** (`Cmd`):

```moonbit
// update returns a tuple: (new model, command)
AddTodo => {
  let cmd = http.post(
    api_todos,                    // URL: "/api/todos"
    Json({ "text": self.input }), // request body
    expect=Json(fn(result) {
      dispatch(TodoAdded(result)) // when response arrives, send this Msg
    }, decoder),
  )
  ({ ..self, input: "" }, cmd)    // return new model + command
}
```

The key insight: **update doesn't execute the HTTP request itself.** It just describes what should happen (a `Cmd`) and returns it. The framework executes it later and feeds the response back as a new Msg.

This is why the flow is a loop:

```
AddTodo → update returns cmd (POST /api/todos)
                ↓
        framework executes the HTTP request
                ↓
        server responds with JSON
                ↓
TodoAdded(Ok(todo)) → update handles the response
```

**Why not just do the HTTP call directly?** Because separating "decide" from "execute" makes update a pure function that you can test without a server, a browser, or a network.

## Wiring It All Together

The `main` function connects the three pieces and starts the app (from `todoapp/frontend/main.mbt`):

```moonbit
fn main {
  // 1. Create the app with initial model, update, and view
  let (dispatch, app_cell) = @rabbita.cell_with_dispatch(
    model={ todos: [], input: "", loading: false },  // initial state
    update=fn(dispatch, msg, model) {
      model.update(msg~, dispatch~)                  // the update function
    },
    view=fn(dispatch, model) {
      model.view(dispatch)                           // the view function
    },
  )

  // 2. Tell the framework to send Init when the app starts
  let app = @rabbita.new(app_cell)
  app.with_init(dispatch(Init))

  // 3. Mount to the DOM — start rendering!
  app.mount("app")  // attaches to <div id="app"> in the HTML
}
```

After `mount("app")` is called:
1. The framework sends `Init`
2. `update` returns `{ loading: true }` + a command to fetch todos
3. `view` renders a loading spinner
4. The HTTP request completes, dispatching `GotTodos(Ok([...]))`
5. `update` stores the todos and sets `loading: false`
6. `view` renders the todo list

The loop continues as long as the page is open.

## Testing — The Big Win

Because `update` is a pure function (input → output, no side effects), testing is dead simple. You don't need a browser, a server, or a DOM. Just call the function and check the result.

Here's a real test from `todoapp/frontend/app/update_test.mbt`:

```moonbit
test "Init sets loading to true" {
  let (model, _) = empty_model().update(msg=Init, dispatch=noop_dispatch)
  // Assert the model matches this snapshot:
  debug_inspect(model, content=
    #|{ todos: [], input: "", loading: true }
  )
}
```

That's the whole test. Create a model, send a message, check the result. No mocking, no setup, no teardown.

More examples:

```moonbit
test "AddTodo with empty input does nothing" {
  let initial = { ..empty_model(), input: "" }
  let (model, _) = initial.update(msg=AddTodo, dispatch=noop_dispatch)
  // Model is unchanged — validation prevented the add
  debug_inspect(model, content=
    #|{ todos: [], input: "", loading: false }
  )
}

test "TodoAdded/Ok appends to list" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let new_todo = { id: 4, text: "New", done: false }
  let (model, _) = initial.update(msg=TodoAdded(Ok(new_todo)), dispatch=noop_dispatch)
  // New todo appears at the end
  debug_inspect(model, content=
    #|{ todos: [
    #|    { id: 1, text: "Buy milk", done: false },
    #|    { id: 2, text: "Write tests", done: true },
    #|    { id: 3, text: "Ship feature", done: false },
    #|    { id: 4, text: "New", done: false },
    #|  ], input: "", loading: false }
  )
}

test "TodoDeleted/Ok removes the todo" {
  let initial = { ..empty_model(), todos: sample_todos() }
  let (model, _) = initial.update(msg=TodoDeleted(Ok(1)), dispatch=noop_dispatch)
  // Todo with id=1 is gone
  debug_inspect(model, content=
    #|{ todos: [
    #|    { id: 2, text: "Write tests", done: true },
    #|    { id: 3, text: "Ship feature", done: false },
    #|  ], input: "", loading: false }
  )
}
```

The todoapp has **16 tests** covering every Msg variant, including error cases. You can run them with:

```bash
cd todoapp && moon test --target js
```

**Why this matters:** In traditional web apps, you'd need to spin up a browser, click buttons, and inspect the DOM. With MVU, you test the logic directly — fast, reliable, and no flaky browser tests.

## Common Patterns

As apps grow, you'll see these patterns repeated:

### Pattern 1: Request → Response Pairs

Every HTTP call follows this pattern:

```
User action Msg    → update fires HTTP request
Response Msg (Ok)  → update stores the data
Response Msg (Err) → update shows an error (or does nothing)
```

In the todoapp:
| Action Msg | Response Msg | On Ok | On Err |
|-----------|-------------|-------|--------|
| `Init` | `GotTodos(result)` | Store todos | Clear loading |
| `AddTodo` | `TodoAdded(result)` | Append to list | Do nothing |
| `ToggleTodo(id)` | `TodoToggled(result)` | Replace todo | Do nothing |
| `DeleteTodo(id)` | `TodoDeleted(result)` | Remove from list | Do nothing |

### Pattern 2: Form Input Binding

For every input field, you need:
1. A field in Model to hold the value
2. A Msg to update it when the user types
3. The view reads from Model and dispatches the Msg

```
Model: { input: String }
Msg:   InputChanged(String)
Update: InputChanged(value) => { ..self, input: value }
View:   input(value=self.input, on_input=fn(v) { dispatch(InputChanged(v)) })
```

### Pattern 3: Conditional Rendering

The view function uses regular `if/else` and pattern matching to show different UI based on state:

```moonbit
if self.loading {
  p("Loading...")          // show spinner
} else if self.todos is [] {
  p("No todos yet!")       // show empty state
} else {
  ul(self.todos.map(...))  // show the list
}
```

No special template syntax — it's just MoonBit code.

### Pattern 4: Spread Update

When you only need to change one field, use the spread syntax:

```moonbit
{ ..self, input: value }
//  ↑ copy all fields from self, but override `input`
```

This creates a new Model without mutating the original. It's the most common pattern in update functions.

## How This Repo Uses MVU

Every app in this repository follows the same structure. Here they are from simplest to most complex:

| App | Model | Msg | What You'll Learn |
|-----|-------|-----|-------------------|
| **todoapp** | 3 fields | 10 variants | The basics — start here |
| **noteapp** | ~10 fields | ~15 variants | Editing, markdown preview |
| **contacts** | ~15 fields | ~20 variants | CRUD with search and filters |
| **pollapp** | ~12 fields | ~18 variants | Nested data (polls → options → votes) |
| **splitwise** | ~20 fields | ~25 variants | Computed views (balances, settlements) |
| **blogapp** | ~15 fields | ~20 variants | Page navigation as state |
| **kanban** | ~20 fields | ~25 variants | Drag-and-drop, position ordering |
| **taskflow** | ~75 fields | ~50 variants | Auth, i18n, FSM, dependencies, labels |

Each app's frontend follows the same file layout:

```
frontend/
├── main.mbt              # Wires Model + update + view together
└── app/
    ├── types.mbt          # Model struct + Msg enum
    ├── update.mbt         # The update function
    ├── view.mbt           # The view function
    └── update_test.mbt    # Tests for update
```

**Suggested reading order:** Start with `todoapp/frontend/app/types.mbt` → `update.mbt` → `view.mbt` → `update_test.mbt`. Once you understand those four files, every other app is the same pattern with more fields and variants.

## Comparison With Other Approaches

| | Traditional (jQuery/vanilla) | React + useState | Elm Architecture (MVU) |
|---|---|---|---|
| **Where is state?** | Scattered (DOM, variables, closures) | Multiple useState hooks | One Model struct |
| **How does state change?** | Anything can change anything | setState in event handlers | Only through update function |
| **Data flow** | Anything goes | Mostly top-down, but hooks can go sideways | Strictly one-direction loop |
| **Side effects** | Mixed with UI code | useEffect, sometimes messy | Explicit Cmd, separate from state |
| **Testing** | Need a browser | Need React testing library | Just call update(), check output |
| **Adding features** | Hope you find all the places to change | Add hooks, wire up effects | Add Msg variant, compiler tells you what to handle |

## Next Steps

1. **Read the todoapp code** — All four files total ~250 lines. It's the complete, working implementation of everything in this guide.

2. **Run the tests** — `cd todoapp && moon test --target js` runs all 16 tests in under a second.

3. **Try modifying it** — Add a new Msg variant (e.g., `ClearCompleted`). The compiler will tell you exactly where to add handling.

4. **Move to a bigger app** — Once todoapp clicks, look at `noteapp` or `contacts` — same pattern, just more fields.

5. **Look at the shared package** — `todoapp/shared/` shows how types, routes, and validation are shared between frontend and backend. This is the "isomorphic" part.
