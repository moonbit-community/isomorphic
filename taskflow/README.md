# TaskFlow

A full-stack team task management app built with MoonBit demonstrating isomorphic code sharing between frontend and backend. The shared package contains status transition rules, validation, priority sorting, deadline detection, and domain types used by both targets.

## Quick Start

```bash
make serve    # Build & run on http://localhost:4006
```

## Features

- **Tasks**: Create, edit, delete tasks with title, description, priority, assignee, and due date
- **Status workflow**: Tasks follow a defined state machine (To Do → In Progress → Review → Done), with blocking/unblocking support
- **Isomorphic status transitions**: Transition rules defined once in shared code, enforced on both client and server
- **Team members**: Pre-seeded team (Alice, Bob, Charlie, Diana, Eve) with colored avatars
- **Priority sorting**: Tasks sorted by priority (Urgent → High → Medium → Low), then by due date
- **Deadline tracking**: Overdue detection and urgency labels (Overdue, Due today, Upcoming)
- **Filters**: Filter by status, priority, and assignee
- **Progress tracking**: Completion percentage and per-status task counts
- **Validation**: Shared limits enforced on both client and server

## Isomorphic Design

The `shared/` package compiles to both JS and native targets, providing:

| Shared Code | Purpose |
|---|---|
| `types.mbt` | `Task`, `Member`, `Board` structs with JSON derive |
| `status.mbt` | Status transitions (`allowed_transitions`, `is_valid_transition`, `transition_label`) |
| `logic.mbt` | Priority sorting, deadline detection, progress tracking, filtering |
| `validation.mbt` | Input validation (`validate_task_title`, `validate_status`, limits) |
| `routes.mbt` | API path constants and builders |

The status transition state machine is the key isomorphic feature — the frontend renders only valid transition buttons, and the backend enforces the same rules:

```
todo ──→ in_progress ──→ review ──→ done
  ↕           ↕             ↓         ↓
blocked ←───────────       ←──      todo (reopen)
```

## API

| Method | Path | Description |
|---|---|---|
| GET | `/api/board` | Full board (tasks + members + today's date) |
| GET | `/api/members` | List all team members |
| POST | `/api/tasks` | Create task `{"title": "...", "priority": "...", "assignee_id": N, "due_date": "..."}` |
| GET | `/api/tasks/:id` | Get a single task |
| POST | `/api/tasks/:id` | Update task fields |
| POST | `/api/tasks/:id/status` | Change status `{"status": "..."}` (validates transition) |
| DELETE | `/api/tasks/:id` | Delete task |

## Project Structure

```
taskflow/
├── moon.mod.json          # Module: bobzhang/taskflow
├── Makefile               # Build & serve (port 4006)
├── shared/                # Isomorphic package (js + native)
│   ├── types.mbt          # Task, Member, Board
│   ├── status.mbt         # Status transitions & labels
│   ├── logic.mbt          # Priority, deadlines, sorting, filtering
│   ├── validation.mbt     # Input validation & limits
│   ├── routes.mbt         # API route constants
│   ├── status_test.mbt    # Status transition tests
│   ├── logic_test.mbt     # Logic tests
│   ├── validation_test.mbt # Validation tests
│   ├── routes_test.mbt    # Route tests
│   ├── types_test.mbt     # JSON round-trip tests
│   └── README.mbt.md      # Testable documentation
├── backend/               # Native target — Mocket + SQLite3
│   └── main.mbt
├── frontend/              # JS target — Rabbita MVU
│   └── main.mbt
└── public/
    └── frontend.js        # Compiled frontend (generated)
```

## Testing

```bash
moon test shared/          # Run shared package tests (55+ tests)
moon test shared/ -v       # Verbose with test names
```
