# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Ask `codex` CLI to review for each commit and adjust its feedback when it makes sense.

## Workspace

This is a `moon work` workspace (`moon.work.json`) containing multiple full-stack MoonBit apps. Dependencies are shared via a single root `.mooncakes/` and builds go to root `_build/`.

```bash
moon check           # Type-check all workspace members
moon build --target js      # Build all frontends
moon build --target native  # Build all backends
```

Per-app commands (run from app subdirectory, e.g. `cd todoapp`):

```bash
make serve          # Build frontend (js) + backend (native), then run server
make build          # Build both targets without running
make build-frontend # moon build --target js, copy JS to public/
make build-backend  # moon build --target native
make clean          # Remove public/frontend.js, *.db
```

Each app runs on a different port (todoapp: 4000, blogapp: 4001, pollapp: 4002, noteapp: 4003, contacts: 4004, kanban: 4005, taskflow: 4006, gallery: 4010).

## Architecture

Full-stack MoonBit apps with two separate compilation targets per module:

- **Frontend** (`frontend/main.mbt`, target: `js`) — Rabbita framework using Model-Update-View (Elm architecture). Compiles to JS, served by backend at `/frontend.js`.
- **Backend** (`backend/main.mbt`, target: `native`) — Mocket HTTP server with SQLite3 persistence. Serves HTML inline, the compiled frontend JS from `public/frontend.js`, and a REST API.

Frontend and backend communicate via JSON REST API:
- `GET /api/todos` — list all
- `POST /api/todos` — create (`{"text": "..."}`)
- `POST /api/todos/:id/toggle` — toggle done status
- `DELETE /api/todos/:id` — delete

## Key Dependencies

| Package | Version | Target | Purpose |
|---|---|---|---|
| `moonbit-community/rabbita` | 0.11.5 | js | MVU frontend framework + HTML DSL + HTTP client |
| `oboard/mocket` | 0.6.10 | native | HTTP server framework with CORS middleware |
| `myfreess/sqlite3` | 0.1.1 | native | SQLite3 bindings |
| `moonbitlang/x` | 0.4.40 | native | Filesystem (`@fs`) |

## MoonBit Patterns Used

- **SQLite text columns**: Use `bind_string_as_blob` / `column_blob_as_string` (not `bind_string` / `column`) for UTF-8 safety — the schema stores `text` as `BLOB`.
- **Mocket response bodies**: `HttpResponse::new(OK).json(data)` works reliably. For non-JSON responses, set `raw_body=@utf8.encode(str)` directly in the constructor — the `.body(&Responder)` method doesn't work for strings in native target.
- **Rabbita HTTP**: No `PUT`/`PATCH` — use `@http.post` / `@http.delete` / `@http.get`. Mocket's native server only reads request body for `POST`, so toggle uses `POST` instead of `PATCH`.
- **Rabbita dispatch**: Use `cell_with_dispatch` (not `simple_cell`) when the update function needs to issue HTTP commands.
