# Todo List

A full-stack todo list application written entirely in [MoonBit](https://www.moonbitlang.com/).

- **Frontend**: [Rabbita](https://github.com/moonbit-community/rabbita) (Elm-architecture UI framework, compiles to JS)
- **Backend**: [Mocket](https://github.com/oboard/mocket) (HTTP server, compiles to native) + [SQLite3](https://github.com/myfreess/sqlite3) (persistence)

## Quick Start

```bash
moon install
make serve
```

Open http://localhost:4000.

## Features

- Add, toggle, and delete todos
- Data persists in SQLite (`todos.db`)
- Single codebase, two compilation targets (`js` for frontend, `native` for backend)
- REST API with JSON communication between frontend and backend

## API

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/todos` | List all todos |
| `POST` | `/api/todos` | Create a todo (`{"text": "..."}`) |
| `POST` | `/api/todos/:id/toggle` | Toggle done status |
| `DELETE` | `/api/todos/:id` | Delete a todo |

## Project Structure

```
backend/main.mbt    # Mocket HTTP server + SQLite3 CRUD
frontend/main.mbt   # Rabbita MVU app (model, update, view)
public/             # Build output for frontend JS
moon.mod.json       # Module config and dependencies
Makefile            # Build and run commands
```
