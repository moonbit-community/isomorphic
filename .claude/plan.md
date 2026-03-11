# Todo List App: Rabbita + Mocket + SQLite3

## Context

Build a full-stack todo list application in MoonBit:
- **Frontend**: Rabbita (Elm architecture UI framework, target: js)
- **Backend**: Mocket (HTTP server framework, target: native) + SQLite3 (database bindings)
- Frontend communicates with backend via REST API over JSON

## Project Structure

```
/ (project root - moon.mod.json here)
├── moon.mod.json
├── backend/
│   ├── moon.pkg
│   └── main.mbt
├── frontend/
│   ├── moon.pkg
│   └── main.mbt
└── public/
    └── index.html
```

## Step 1: `moon.mod.json` (root)

```json
{
  "name": "haoxiang/todo-list",
  "version": "0.1.0",
  "deps": {
    "moonbit-community/rabbita": "0.11.5",
    "oboard/mocket": "0.6.10",
    "myfreess/sqlite3": "0.1.1"
  }
}
```

## Step 2: Backend (`backend/`)

### `backend/moon.pkg`

```
import {
  "oboard/mocket",
  "oboard/mocket/cors",
  "oboard/mocket/static_file",
  "myfreess/sqlite3",
  "moonbitlang/core/json",
}

options(
  "is-main": true,
  "supported-targets": ["native"],
)
```

### `backend/main.mbt`

**Database layer:**
- Open SQLite3 DB: `@sqlite3.Connection::open("todos.db")`
- Create table: `CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, text BLOB NOT NULL, done INTEGER NOT NULL DEFAULT 0)`
- CRUD functions using prepared statements with `bind`/`bind_string_as_blob`/`column`/`column_blob_as_string`

**API Endpoints:**
- `GET /api/todos` - Query all todos, return JSON array
- `POST /api/todos` - Parse JSON body `{"text":"..."}`, insert, return created todo as JSON
- `PUT /api/todos/:id` - Parse JSON body `{"done":true/false}`, update, return updated todo
- `DELETE /api/todos/:id` - Delete by id, return 204

**JSON format:** `{"id": 1, "text": "Buy milk", "done": false}`

**Static file serving:**
- `app.static_assets("/", @static_file.new("./public"))` to serve frontend

**Key API patterns (from exploration):**
```moonbit
// Route registration with method chaining
let app = @mocket.new()
app..use_middleware(@cors.handle_cors())
  ..get("/api/todos", handler)
  ..post("/api/todos", handler)
  ..put("/api/todos/:id", handler)
  ..delete("/api/todos/:id", handler)

// JSON response
({ "id": 1, "text": "foo", "done": false } : Json)

// Read request body as JSON
let json : Json = event.req.body()

// Route params
event.params.get("id")

// Status codes
@mocket.HttpResponse::new(Created).json(todo.to_json())
@mocket.HttpResponse::new(NoContent)

// Start server
app.serve(port=4000)
```

**Key SQLite3 patterns (from exploration):**
```moonbit
// Open
let conn = @sqlite3.Connection::open("todos.db")

// Execute DDL
let stmt = conn.prepare("CREATE TABLE IF NOT EXISTS ...")
stmt.step_once()
stmt.finalize()

// Insert with params
let stmt = conn.prepare("INSERT INTO todos (text, done) VALUES (?, ?)")
stmt.bind_string_as_blob(index=1, val=text)
stmt.bind(index=2, val=0)
stmt.step_once()
stmt.finalize()

// Select with iteration
let stmt = conn.prepare("SELECT id, text, done FROM todos")
while stmt.step() {
  let id : Int = stmt.column(index=0)
  let text : String = stmt.column_blob_as_string(index=1)
  let done : Int = stmt.column(index=2)
}
stmt.finalize()
```

## Step 3: Frontend (`frontend/`)

### `frontend/moon.pkg`

```
import {
  "moonbit-community/rabbita",
  "moonbit-community/rabbita/html",
  "moonbit-community/rabbita/http",
  "moonbitlang/core/json",
}

options(
  "is-main": true,
  "supported-targets": ["js"],
)
```

### `frontend/main.mbt`

**Model:**
```moonbit
struct Todo { id: Int; text: String; done: Bool } derive(FromJson)
struct Model { todos: Array[Todo]; input: String; loading: Bool }
```

**Messages:**
```moonbit
enum Msg {
  Init
  GotTodos(Result[Array[Todo], String])
  InputChanged(String)
  AddTodo
  TodoAdded(Result[Todo, String])
  ToggleTodo(Int, Bool)
  TodoToggled(Result[Todo, String])
  DeleteTodo(Int)
  TodoDeleted(Result[Int, String])
}
```

**Update:** Uses `@rabbita.cell()` (not simple_cell) for side effects via Cmd.
- `Init` → fires GET /api/todos
- `AddTodo` → fires POST /api/todos with input text
- `ToggleTodo(id, done)` → fires PUT /api/todos/:id
- `DeleteTodo(id)` → fires DELETE /api/todos/:id
- `Got*` / `*Added` / `*Toggled` / `*Deleted` → update model with response data

**Key rabbita HTTP patterns (from exploration):**
```moonbit
// GET request
@http.get(
  "/api/todos",
  expect=Json(
    result => dispatch(GotTodos(result)),
    json => try { Ok(@json.from_json!(json)) } catch { _ => Err("decode error") }
  )
)

// POST request with JSON body
@http.post(
  "/api/todos",
  Json({"text": text}.to_json()),
  expect=Json(
    result => dispatch(TodoAdded(result)),
    json => try { Ok(@json.from_json!(json)) } catch { _ => Err("decode error") }
  )
)

// DELETE request
@http.delete(
  "/api/todos/\{id}",
  expect=Text(result => dispatch(TodoDeleted(match result { Ok(_) => Ok(id); Err(e) => Err(e) })))
)
```

**View:** Uses rabbita HTML elements (div, h1, input, button, ul, li, etc.)
- Header with title
- Input field + Add button
- Todo list with checkboxes and delete buttons
- Inline styles for basic layout

**Mounting:**
```moonbit
let (dispatch, app_cell) = @rabbita.cell_with_dispatch(model~, update~, view~)
let app = @rabbita.new(app_cell)
app.with_init(dispatch(Init))
app.mount("app")
```

## Step 4: `public/index.html`

Minimal HTML shell:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Todo List</title>
  <style>/* basic styles */</style>
</head>
<body>
  <div id="app"></div>
  <script src="/frontend/frontend.js"></script>
</body>
</html>
```

Note: The exact JS path depends on `moon build` output. We'll verify after building.

## Build & Run

```bash
# Install dependencies
moon install

# Build frontend (JS)
moon build --target js

# Copy built JS to public/ (path TBD based on build output)
cp _build/js/release/build/frontend/frontend.js public/frontend.js

# Build and run backend (native)
moon run backend --target native
```

Server starts at http://localhost:4000. The backend serves both the API and the static frontend files.

## Verification

1. `moon check` - verify both packages compile
2. `moon build --target js` - verify frontend builds
3. `moon build --target native` - verify backend builds
4. `moon run backend --target native` - start server
5. Open http://localhost:4000 in browser
6. Test: add todos, toggle completion, delete todos
7. Verify data persists (SQLite file `todos.db` created)

## Key Source Files Referenced

- Rabbita API: `.repos/moonbit-community/rabbita/0.11.5/tea.mbt` (cell, simple_cell)
- Rabbita mount: `.repos/moonbit-community/rabbita/0.11.5/top.mbt` (new, mount, with_init)
- Rabbita HTML: `.repos/moonbit-community/rabbita/0.11.5/html/html.mbt` (div, button, input, etc.)
- Rabbita HTTP: `.repos/moonbit-community/rabbita/0.11.5/http/http.mbt` (get, post, delete, patch)
- Mocket server: `.repos/oboard/mocket/0.6.10/pkg.generated.mbti` (full API)
- Mocket examples: `.repos/oboard/mocket/0.6.10/examples/route/main.mbt`, `examples/responder/main.mbt`
- Mocket CORS: `.repos/oboard/mocket/0.6.10/cors/cors.mbt`
- Mocket static: `.repos/oboard/mocket/0.6.10/static_file/static_file.mbt`
- SQLite3 API: `.repos/myfreess/sqlite3/0.1.1/src/connection.mbt`, `stmt.mbt`, `bind.mbt`, `column.mbt`
- SQLite3 test: `.repos/myfreess/sqlite3/0.1.1/test/runsql.mbt` (usage examples)
