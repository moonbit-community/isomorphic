# TaskFlow

A full-stack task management application written entirely in [MoonBit](https://www.moonbitlang.com/), demonstrating isomorphic code sharing between frontend and backend through dual compilation targets.

## Quick Start

```bash
make serve          # Build + run on http://localhost:4006
make build          # Build both targets without running
moon test           # Run all 166 unit tests
moon run cli --target native  # Run CLI integration tests (needs running server + clean DB)
```

## Architecture Overview

TaskFlow compiles from one MoonBit codebase into two targets:

- **Frontend** (target: `js`) — compiles to JavaScript, runs in the browser
- **Backend** (target: `native`) — compiles to native binary, runs as HTTP server

A **shared** package contains types, validation, business logic, and i18n that both targets use at compile time — the same struct definitions and derive macros produce matching JSON serialization on both sides automatically.

```mermaid
graph TB
    subgraph "MoonBit Source"
        shared["shared/<br/>types, validation, status FSM,<br/>i18n, routes, business logic"]
        frontend["frontend/<br/>Rabbita MVU app<br/>(target: js)"]
        backend["backend/<br/>Mocket HTTP server<br/>(target: native)"]
        cli["cli/<br/>Integration test client<br/>(target: native)"]
    end

    shared --> frontend
    shared --> backend
    shared --> cli

    subgraph "Compiled Output"
        js["frontend.js"]
        bin["taskflow server binary"]
        cli_bin["test client binary"]
    end

    frontend -->|"moon build &#45;&#45;target js"| js
    backend -->|"moon build &#45;&#45;target native"| bin
    cli -->|"moon build &#45;&#45;target native"| cli_bin

    subgraph "Runtime"
        browser["Browser"]
        server["HTTP Server :4006"]
        db["SQLite taskflow.db"]
    end

    bin --> server
    server -->|"serves"| js
    js --> browser
    browser <-->|"JSON REST API"| server
    server <--> db
    cli_bin -->|"HTTP requests"| server
```

## Request Lifecycle

```mermaid
sequenceDiagram
    participant B as Browser
    participant F as Frontend (JS)
    participant S as Backend (Native)
    participant D as SQLite

    B->>S: GET /
    S-->>B: HTML shell + script tag
    B->>S: GET /frontend.js
    S-->>B: Compiled JS bundle

    Note over F: Rabbita MVU app boots

    F->>S: GET /api/auth/me (session cookie)
    S->>D: Query sessions JOIN users
    D-->>S: User record
    S-->>F: User JSON

    F->>S: GET /api/board
    S->>D: Query tasks, members, activities, deps
    D-->>S: Full dataset
    S-->>F: Board JSON

    Note over F: Renders task list or kanban board

    F->>S: POST /api/tasks/:id/status
    Note over S: Validates transition via shared FSM
    S->>D: UPDATE + INSERT activity
    S-->>F: Updated task JSON
    F->>S: GET /api/board (refresh)
```

## Task State Machine

Status transitions are defined in `shared/status.mbt` and enforced on both sides: the frontend only renders valid transition buttons, and the backend rejects invalid transitions with 400.

```mermaid
stateDiagram
    [*] --> todo: Create
    todo --> in_progress: Start
    todo --> blocked: Block

    in_progress --> review: Review
    in_progress --> blocked: Block
    in_progress --> todo: Pause

    review --> done: Approve
    review --> in_progress: Rework

    blocked --> todo: Unblock
    blocked --> in_progress: Resume

    done --> todo: Reopen
    done --> [*]
```

## Project Structure

```
taskflow/
├── moon.mod.json              # Module: bobzhang/taskflow
├── Makefile                   # Build & serve (port 4006)
├── shared/                    # Isomorphic package (js + native)
│   ├── types.mbt              # Task, User, Member, Board, Activity, Comment, Dependency
│   ├── status.mbt             # Status FSM: transitions, labels, colors
│   ├── logic.mbt              # Sorting, filtering, progress, deadlines, search
│   ├── validation.mbt         # Username/password/title/date validation
│   ├── routes.mbt             # API route constants shared by frontend & backend
│   ├── i18n.mbt               # Internationalization (En/Zh) with 70+ keys
│   ├── *_test.mbt             # Unit tests for each module
│   └── integration_test.mbt   # Cross-module integration tests
├── backend/                   # Native target
│   ├── main.mbt               # HTTP server setup, starts Mocket on :4006
│   ├── db.mbt                 # SQLite schema init + CRUD queries (15 tables)
│   ├── routes.mbt             # REST API route handlers (30+ endpoints)
│   └── auth.mbt               # Password hashing, sessions, user management
├── frontend/                  # JS target
│   ├── main.mbt               # Rabbita bootstrap, JS externs (drag-drop, localStorage)
│   └── app/                   # MVU sub-package
│       ├── types.mbt          # Model, Msg (50+ variants), Theme
│       ├── update.mbt         # Model::update — state transitions + HTTP commands
│       ├── view.mbt           # Model::view — root view dispatcher
│       └── update_test.mbt    # Snapshot tests for update logic
├── cli/                       # Native target
│   └── main.mbt               # 17-suite integration test client
└── public/
    └── frontend.js            # Compiled frontend (generated)
```

## Shared Package

The shared package is the core of the isomorphic design. It compiles to both JS and native, guaranteeing frontend and backend always agree on types, rules, and validation.

| File | Exports |
|------|---------|
| `types.mbt` | `User`, `Task`, `Member`, `Activity`, `Comment`, `Dependency`, `Board`, `AuthResponse` — all with `derive(ToJson, FromJson)` |
| `status.mbt` | `allowed_transitions()`, `is_valid_transition()`, `is_terminal()`, `status_label()`, `status_color()`, `transition_label()` |
| `logic.mbt` | `filter_tasks()`, `sort_tasks()`, `completion_percent()`, `search_matches()`, `matches_urgency()`, `has_unresolved_deps()` |
| `validation.mbt` | `validate_username()`, `validate_password()`, `validate_task_title()`, `validate_due_date()`, `validate_status()`, `validate_priority()` |
| `routes.mbt` | `api_login`, `api_register`, `api_board`, `api_task(id)`, `api_task_status(id)`, `api_task_comments(id)`, `api_task_deps(id)` |
| `i18n.mbt` | `Lang { En; Zh }`, `t(lang, key)`, `t_status()`, `t_priority()`, `t_transition()`, `t_urgency()`, `t_activity()`, `t_server_error()` |

## Frontend MVU Architecture

The frontend uses the [Rabbita](https://github.com/moonbit-community/rabbita) framework (Elm architecture):

```mermaid
graph LR
    A["User Action<br/>(click, keypress)"] -->|"dispatch(Msg)"| B["update(msg, model)"]
    B -->|"new Model"| C["view(model)"]
    B -->|"Cmd (HTTP)"| D["Backend API"]
    D -->|"JSON response"| E["Response Msg"]
    E --> B
    C -->|"Virtual DOM diff"| F["Browser DOM"]
    F -->|"DOM events"| A
```

### Model

The `Model` struct holds all application state:

| Group | Fields |
|-------|--------|
| Auth | `current_user`, `auth_screen`, `auth_username`, `auth_password`, `auth_error`, `auth_loading` |
| Board data | `tasks`, `members`, `activities`, `dependencies`, `today` |
| Filters | `filter_status`, `filter_assignee`, `filter_priority`, `search_query`, `filter_urgency`, `view_mode`, `dark_mode` |
| Task forms | `adding_task`, `new_title`, `new_desc`, `new_priority`, `editing_task`, `edit_title`, ... |
| UI state | `viewing_comments`, `comments`, `confirm_delete`, `error_msg`, `loading`, `lang` |

### View Components

| Component | Description |
|-----------|-------------|
| `view_auth` | Login/register screen with language toggle |
| `view_header` | Top bar: user info, nav tabs (List/Board), dark mode, language, logout |
| `view_filters` | Filter bar: status, priority, assignee, urgency, text search |
| `view_task_item` | Task card in list view with transitions, deps, edit/delete actions |
| `view_kanban` | Board view with columns per status |
| `view_kanban_card` | Compact task card for kanban columns |
| `view_add_task_form` | Modal: title, description, priority, assignee, due date |
| `view_edit_task_form` | Inline task editor |
| `view_comments_panel` | Slide-in notes panel with comment list and input |
| `view_activity_feed` | Recent status changes with user attribution |
| `view_delete_confirm` | Confirmation modal |
| `view_error_toast` | Dismissible error notification |

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `n` | New task |
| `l` | List view |
| `b` | Board view |
| `d` | Toggle dark mode |
| `Esc` | Close modals |

## Backend

### HTTP Server

Built with [Mocket](https://github.com/oboard/mocket) framework. Serves the HTML shell at `/`, the compiled JS at `/frontend.js`, and the REST API under `/api/`.

### Authentication Flow

```mermaid
sequenceDiagram
    participant C as Client
    participant S as Server
    participant DB as SQLite

    Note over C,S: Registration
    C->>S: POST /api/auth/register { username, password }
    S->>S: Validate username (3-30 alphanum) & password (4-100 chars)
    S->>S: Generate salt, hash password with SHA256
    S->>DB: INSERT INTO users + INSERT INTO members
    S->>S: Generate session token (SHA256 of username + counter + random)
    S->>DB: INSERT INTO sessions
    S-->>C: 201 + Set-Cookie: session=<token>

    Note over C,S: Login
    C->>S: POST /api/auth/login { username, password }
    S->>DB: SELECT user by username
    S->>S: Hash provided password, compare with stored hash
    S->>DB: INSERT INTO sessions
    S-->>C: 200 + Set-Cookie: session=<token>

    Note over C,S: Session Check
    C->>S: GET /api/auth/me (Cookie: session=<token>)
    S->>DB: SELECT user JOIN sessions WHERE token = ?
    S-->>C: 200 { id, username, color }
```

### Database Schema

```mermaid
erDiagram
    users {
        INTEGER id PK
        BLOB username UK
        BLOB password_hash
        BLOB salt
        BLOB color
    }

    sessions {
        BLOB token PK
        INTEGER user_id FK
        BLOB created_at
    }

    members {
        INTEGER id PK
        BLOB name
        BLOB color
    }

    tasks {
        INTEGER id PK
        BLOB title
        BLOB description
        BLOB status
        BLOB priority
        INTEGER assignee_id
        BLOB due_date
        BLOB created_at
    }

    activities {
        INTEGER id PK
        INTEGER task_id
        BLOB task_title
        BLOB from_status
        BLOB to_status
        BLOB timestamp
        BLOB user_name
    }

    comments {
        INTEGER id PK
        INTEGER task_id FK
        BLOB author
        BLOB text
        BLOB created_at
    }

    task_dependencies {
        INTEGER task_id PK_FK
        INTEGER depends_on_id PK_FK
    }

    users ||--o{ sessions : "has"
    tasks ||--o{ comments : "has"
    tasks ||--o{ task_dependencies : "depends on"
    task_dependencies }o--|| tasks : "target"
```

All text columns use `BLOB` type with `bind_string_as_blob` / `column_blob_as_string` for correct UTF-8 handling — this prevents garbled non-ASCII characters (Chinese, emoji, etc.).

## REST API Reference

### Authentication

| Method | Endpoint | Body | Response |
|--------|----------|------|----------|
| `POST` | `/api/auth/register` | `{ username, password }` | `201 { user, message }` + Set-Cookie |
| `POST` | `/api/auth/login` | `{ username, password }` | `200 { user, message }` + Set-Cookie |
| `POST` | `/api/auth/logout` | — | `200` + Delete-Cookie |
| `GET` | `/api/auth/me` | — | `200 { id, username, color }` |

### Board & Members

| Method | Endpoint | Response |
|--------|----------|----------|
| `GET` | `/api/board` | `{ tasks, members, activities, dependencies, today }` |
| `GET` | `/api/members` | `[{ id, name, color }]` |

### Tasks

| Method | Endpoint | Body | Response |
|--------|----------|------|----------|
| `POST` | `/api/tasks` | `{ title, description?, priority?, assignee_id?, due_date? }` | `201 Task` |
| `GET` | `/api/tasks/:id` | — | `200 Task` |
| `POST` | `/api/tasks/:id` | `{ title, description?, priority?, assignee_id?, due_date? }` | `200 Task` |
| `DELETE` | `/api/tasks/:id` | — | `204` |
| `POST` | `/api/tasks/:id/status` | `{ status }` | `200 Task` (validates FSM) |

### Comments & Dependencies

| Method | Endpoint | Body | Response |
|--------|----------|------|----------|
| `GET` | `/api/tasks/:id/comments` | — | `[Comment]` |
| `POST` | `/api/tasks/:id/comments` | `{ text }` | `201 Comment` |
| `GET` | `/api/tasks/:id/deps` | — | `[Dependency]` |
| `POST` | `/api/tasks/:id/deps` | `{ depends_on_id }` | `201 Dependency` |
| `POST` | `/api/tasks/:id/deps/remove` | `{ depends_on_id }` | `200` |

## Internationalization

TaskFlow supports English and Chinese with a modular i18n system in the shared package:

```mermaid
graph TD
    subgraph "i18n System (shared/i18n.mbt)"
        Lang["enum Lang { En, Zh }"]
        t["t(lang, key) → String<br/>70+ UI string keys"]
        ts["t_status(lang, status)"]
        tp["t_priority(lang, priority)"]
        tt["t_transition(lang, from, to)"]
        tu["t_urgency(lang, due, today)"]
        ta["t_activity(lang, activity)"]
        te["t_server_error(lang, msg)"]
    end

    subgraph "Wraps existing shared functions"
        sl["status_label()"]
        pl["priority_label()"]
        tl["transition_label()"]
        ul["urgency_label()"]
    end

    ts --> sl
    tp --> pl
    tt --> tl
    tu --> ul
```

Adding a new language: add a variant to `Lang`, then add match arms in each `t_*` function. The `(_, key) => ...` fallback ensures English is always the default.

## Features

- **Task CRUD**: Create, edit, delete tasks with title, description, priority, assignee, due date
- **Status workflow**: Tasks follow a validated state machine (To Do, In Progress, Review, Done, Blocked)
- **Two views**: List view and Kanban board with drag-and-drop between status columns
- **Filtering**: By status, priority, assignee, urgency, and text search — all combinable
- **Task dependencies**: Link tasks with depends-on relationships; blocked indicators shown
- **Comments/notes**: Per-task comment threads
- **Activity tracking**: Status changes logged with user attribution
- **Progress tracking**: Completion percentage and per-status counts
- **Dark mode**: Full theme support with keyboard toggle
- **i18n**: English/Chinese with language toggle on both auth and main screens
- **Shared validation**: Username, password, title, description, date format — validated on both frontend and backend
- **Session auth**: SHA256 password hashing, HTTP-only session cookies

## Dependencies

| Package | Version | Target | Purpose |
|---|---|---|---|
| `moonbit-community/rabbita` | 0.11.5 | js | MVU framework + HTML DSL + HTTP client |
| `oboard/mocket` | 0.6.10 | native | HTTP server with CORS middleware |
| `myfreess/sqlite3` | 0.1.1 | native | SQLite3 bindings |
| `moonbitlang/x` | 0.4.40 | native | Filesystem (`@fs`) |
| `moonbitlang/async` | 0.16.8 | native | Async runtime for CLI tests |

## Architecture

### System Architecture

```mermaid
graph LR
    Browser["Browser"]

    subgraph "Frontend (target: js)"
        FE["Rabbita MVU App<br/>Model-Update-View<br/>Virtual DOM diffing"]
    end

    subgraph "Backend (target: native)"
        API["REST API<br/>30+ endpoints"]
        Auth["Auth Layer<br/>SHA256 hashing<br/>Session cookies"]
        Server["Mocket HTTP Server<br/>CORS middleware"]
    end

    subgraph "Shared (js + native)"
        Types["types.mbt<br/>14 structs + Board"]
        I18n["i18n.mbt<br/>En | Zh, 70+ keys"]
        Validation["validation.mbt<br/>Input validation"]
        Status["status.mbt<br/>FSM transitions"]
        Logic["logic.mbt<br/>Filter, sort, search"]
        Routes["routes.mbt<br/>API route constants"]
    end

    subgraph "Storage"
        DB["SQLite<br/>taskflow.db<br/>15 tables"]
    end

    Browser <-->|"DOM events /<br/>Virtual DOM"| FE
    FE <-->|"JSON REST API<br/>GET, POST, DELETE"| API
    API --> Auth
    API --> Server
    Server <--> DB

    Types -.->|"compile-time<br/>shared"| FE
    Types -.->|"compile-time<br/>shared"| API
    I18n -.-> FE
    Validation -.-> FE
    Validation -.-> API
    Status -.-> FE
    Status -.-> API
    Logic -.-> FE
    Routes -.-> FE
    Routes -.-> API
```

### Data Model

```mermaid
erDiagram
    User {
        Int id PK
        String username UK
        String password_hash
        String salt
        String color
        String role "admin | member | viewer"
    }

    Member {
        Int id PK
        String name
        String color
    }

    Task {
        Int id PK
        String title
        String description
        String status "todo | in_progress | review | done | blocked"
        String priority "low | medium | high | urgent"
        Int assignee_id FK
        String due_date
        String created_at
    }

    Activity {
        Int id PK
        Int task_id FK
        String task_title
        String from_status
        String to_status
        String timestamp
        String user_name
    }

    Comment {
        Int id PK
        Int task_id FK
        String author
        String text
        String created_at
    }

    Dependency {
        Int task_id PK_FK
        Int depends_on_id PK_FK
    }

    Label {
        Int id PK
        String name
        String color
    }

    TaskLabel {
        Int task_id PK_FK
        Int label_id PK_FK
    }

    Subtask {
        Int id PK
        Int task_id FK
        String title
        Bool done
    }

    TimeEntry {
        Int id PK
        Int task_id FK
        Int minutes
        String note
        String created_at
    }

    RecurrenceRule {
        Int task_id PK_FK
        String interval "daily | weekly | monthly"
    }

    Attachment {
        Int id PK
        Int task_id FK
        String url
        String label
    }

    Project {
        Int id PK
        String name
        String color
    }

    TaskProject {
        Int task_id PK_FK
        Int project_id PK_FK
    }

    Board {
        Array tasks
        Array members
        Array activities
        Array dependencies
        Array labels
        Array task_labels
        Array subtasks
        Array time_entries
        Array recurrence_rules
        Array attachments
        Array projects
        Array task_projects
        String today
    }

    User ||--o{ Task : "assigned via assignee_id"
    Task ||--o{ Comment : "has"
    Task ||--o{ Activity : "logs status changes"
    Task ||--o{ Dependency : "depends on"
    Dependency }o--|| Task : "target task"
    Task ||--o{ TaskLabel : "tagged with"
    TaskLabel }o--|| Label : "references"
    Task ||--o{ Subtask : "has checklist items"
    Task ||--o{ TimeEntry : "tracks time"
    Task ||--o{ Attachment : "has files"
    Task ||--o| RecurrenceRule : "recurs on"
    Task ||--o{ TaskProject : "belongs to"
    TaskProject }o--|| Project : "references"
    Member ||--o{ Task : "mirrors User for board"

    Board ||--|{ Task : "aggregates"
    Board ||--|{ Member : "aggregates"
    Board ||--|{ Activity : "aggregates"
    Board ||--|{ Dependency : "aggregates"
```

### Task Status State Machine

Valid transitions are defined in `shared/status.mbt` and enforced on both frontend (only valid buttons render) and backend (invalid transitions return 400). Five statuses with ten directed transitions:

```mermaid
stateDiagram-v2
    [*] --> todo: Create task

    todo --> in_progress: Start
    todo --> blocked: Block

    in_progress --> review: Review
    in_progress --> blocked: Block
    in_progress --> todo: Pause

    review --> done: Approve
    review --> in_progress: Rework

    blocked --> todo: Unblock
    blocked --> in_progress: Resume

    done --> todo: Reopen
    done --> [*]: Terminal

    state todo {
        [*] --> [*]
    }
    note right of todo: Default for new tasks

    state blocked {
        [*] --> [*]
    }
    note right of blocked
        Reachable from todo
        and in_progress
    end note

    state done {
        [*] --> [*]
    }
    note left of done
        Only terminal status.
        Can reopen back to todo.
    end note
```

### Auth Flow

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (JS)
    participant B as Backend (Native)
    participant DB as SQLite

    Note over U,DB: Registration
    U->>F: Fill username + password
    F->>B: POST /api/auth/register {username, password}
    B->>B: validate_username (3-30 alphanum)
    B->>B: validate_password (4-100 chars)
    B->>B: Generate salt, SHA256 hash
    B->>DB: INSERT INTO users
    B->>DB: INSERT INTO members (mirror)
    B->>B: Generate session token
    B->>DB: INSERT INTO sessions
    B-->>F: 201 {user, message} + Set-Cookie: session=token
    F->>F: Store current_user, show board

    Note over U,DB: Login
    U->>F: Enter credentials
    F->>B: POST /api/auth/login {username, password}
    B->>DB: SELECT user by username
    B->>B: Hash password, compare
    alt Credentials valid
        B->>DB: INSERT INTO sessions
        B-->>F: 200 {user, message} + Set-Cookie
        F->>F: Store current_user, fetch board
    else Invalid
        B-->>F: 401 {error: "Invalid credentials"}
        F->>F: Show auth_error
    end

    Note over U,DB: Session check on page load
    F->>B: GET /api/auth/me (Cookie: session=token)
    B->>DB: SELECT user JOIN sessions WHERE token=?
    alt Session valid
        B-->>F: 200 {id, username, color, role}
        F->>B: GET /api/board
        B->>DB: Query all 13 data tables
        B-->>F: Board JSON (tasks, members, activities, ...)
        F->>F: Render board
    else No session / expired
        B-->>F: 401
        F->>F: Show login screen
    end

    Note over U,DB: Logout
    U->>F: Click logout
    F->>B: POST /api/auth/logout
    B->>DB: DELETE FROM sessions WHERE token=?
    B-->>F: 200 + Clear cookie
    F->>F: Reset to login screen
```

### Frontend Module Map

```mermaid
graph TD
    Main["main.mbt<br/>cell_with_dispatch boot<br/>Init → GET /api/auth/me"]

    subgraph "app/ package"
        Types["types.mbt<br/>Model, Msg (50+ variants), Theme"]
        Update["update.mbt<br/>Model::update(msg, dispatch)<br/>State transitions + HTTP commands"]
        View["view.mbt<br/>Model::view(dispatch)<br/>Root dispatcher"]

        View --> ViewAuth["view_auth.mbt<br/>Login / register screen<br/>Language toggle"]
        View --> ViewHeader["view_header.mbt<br/>Top bar: user, nav tabs,<br/>dark mode, lang, logout"]
        View --> ViewFilters["view_filters.mbt<br/>Status, priority, assignee,<br/>urgency, text search"]
        View --> ViewBoard["view_board.mbt<br/>Kanban columns per status<br/>Drag-and-drop cards"]
        View --> ViewTaskItem["view_task_item.mbt<br/>Task card: transitions,<br/>deps, edit/delete"]
        View --> ViewTaskForm["view_task_form.mbt<br/>Add / edit task modal<br/>Priority, assignee, due date"]
        View --> ViewComments["view_comments.mbt<br/>Slide-in panel<br/>Comment thread + input"]
        View --> ViewActivity["view_activity.mbt<br/>Recent status changes<br/>User attribution"]
        View --> ViewDialogs["view_dialogs.mbt<br/>Delete confirmation,<br/>error toast, undo"]
        View --> ViewPickers["view_pickers.mbt<br/>Label picker, project picker,<br/>subtask list, time log"]
        View --> ViewTheme["view_theme.mbt<br/>get_theme(dark_mode)<br/>11 color tokens"]

        UpdateTest["update_test.mbt"]
        ViewTest["view_test.mbt"]
    end

    subgraph "shared/ package"
        Shared["types, status, logic,<br/>validation, routes, i18n"]
    end

    Main --> Types
    Main --> Update
    Main --> View
    Update --> Shared
    View --> Shared
```

## License

Apache-2.0
