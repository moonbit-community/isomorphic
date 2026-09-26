///|
/// Entry point: parse args, open DB, register routes, start HTTP server.
async fn main {
  let matches = @argparse.parse(
    Command("taskflow-server", about="TaskFlow backend server", options=[
      OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
        "4006",
      ]),
    ]),
  )
  let port = @string.parse_int(matches.values["port"][0]) catch {
    _ => {
      println("Invalid port: \{matches.values["port"][0]}")
      return
    }
  }
  let conn = @sqlite3.Connection::open("taskflow.db") catch {
    e => {
      println("Failed to open taskflow.db: \{error_text(e)}")
      return
    }
  }
  println("Database opened: taskflow.db")
  try {
    init_db(conn)
    init_auth_db(conn)
  } catch {
    e => {
      println("Failed to initialize database: \{error_text(e)}")
      return
    }
  }
  println("Database initialized")
  let app = @mocket.App()
  app
  ..use_middleware(@cors.handle_cors())
  ..get("/", _ => {
    println("GET /")
    let html =
      #|<!DOCTYPE html>
      #|<html>
      #|<head>
      #|  <meta charset="UTF-8">
      #|  <meta name="viewport" content="width=device-width, initial-scale=1.0">
      #|  <title>TaskFlow</title>
      #|  <style>
      #|    * { margin: 0; padding: 0; box-sizing: border-box; }
      #|    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; background: #f8fafc; color: #1e293b; line-height: 1.6; -webkit-font-smoothing: antialiased; }
      #|    ::selection { background: #c7d2fe; }
      #|    @media (max-width: 768px) {
      #|      body { font-size: 14px; }
      #|      input, select, button { font-size: 16px !important; }
      #|    }
      #|  </style>
      #|</head>
      #|<body>
      #|  <div id="app"></div>
      #|  <script src="/frontend.js"></script>
      #|</body>
      #|</html>
    @mocket.HttpResponse(
      OK,
      headers={ "Content-Type": "text/html; charset=utf-8" },
      body=@utf8.encode(html),
    )
  })
  ..get("/frontend.js", _ => {
    println("GET /frontend.js")
    try {
      let bytes = @fs.read_file_to_bytes("./public/frontend.js")
      @mocket.HttpResponse(
        OK,
        headers={ "Content-Type": "application/javascript; charset=utf-8" },
        body=bytes,
      )
    } catch {
      _ => {
        println("  -> 404 Not Found")
        @mocket.HttpResponse(NotFound).body("Not Found")
      }
    }
  })
  // ---- Auth ----
  ..post(@shared.api_register, event => handle_register(conn, event))
  ..post(@shared.api_login, event => handle_login(conn, event))
  ..post(@shared.api_logout, event => handle_logout(conn, event))
  ..get(@shared.api_me, event => handle_me(conn, event))
  // ---- Board ----
  ..get(@shared.api_board, _ => handle_get_board(conn))
  // ---- Export ----
  ..get(@shared.api_export, event => handle_export(conn, event))
  // ---- Members ----
  ..get(@shared.api_members, _ => handle_get_members(conn))
  // ---- Tasks ----
  ..post(@shared.api_tasks, event => handle_create_task(conn, event))
  ..post("/api/tasks/:id", event => handle_update_task(conn, event))
  ..post("/api/tasks/:id/status", event => {
    handle_update_task_status(conn, event)
  })
  // ---- Dependencies ----
  ..get("/api/tasks/:id/deps", event => handle_get_deps(conn, event))
  ..post("/api/tasks/:id/deps", event => handle_add_dep(conn, event))
  ..post("/api/tasks/:id/deps/remove", event => handle_remove_dep(conn, event))
  // ---- Comments ----
  ..get("/api/tasks/:id/comments", event => handle_get_comments(conn, event))
  ..post("/api/tasks/:id/comments", event => handle_add_comment(conn, event))
  // ---- Labels ----
  ..get(@shared.api_labels, _ => handle_get_labels(conn))
  ..post(@shared.api_labels, event => handle_create_label(conn, event))
  ..get("/api/tasks/:id/labels", event => handle_get_task_labels(conn, event))
  ..post("/api/tasks/:id/labels", event => handle_add_task_label(conn, event))
  ..post("/api/tasks/:id/labels/remove", event => {
    handle_remove_task_label(conn, event)
  })
  // ---- Subtasks ----
  ..get("/api/tasks/:id/subtasks", event => handle_get_subtasks(conn, event))
  ..post("/api/tasks/:id/subtasks", event => handle_create_subtask(conn, event))
  ..post("/api/subtasks/:id/toggle", event => handle_toggle_subtask(conn, event))
  ..delete("/api/subtasks/:id", event => handle_delete_subtask(conn, event))
  // ---- Time tracking ----
  ..post("/api/tasks/:id/time", event => handle_log_time(conn, event))
  ..delete("/api/time/:id", event => handle_delete_time_entry(conn, event))
  // ---- Recurrence ----
  ..post("/api/tasks/:id/recurrence", event => {
    handle_set_recurrence(conn, event)
  })
  ..delete("/api/tasks/:id/recurrence", event => {
    handle_remove_recurrence(conn, event)
  })
  ..delete("/api/tasks/:id", event => handle_delete_task(conn, event))
  ..get("/api/tasks/:id", event => handle_get_task(conn, event))
  // ---- Attachments ----
  ..post("/api/tasks/:id/attachments", event => {
    handle_create_attachment(conn, event)
  })
  ..delete("/api/attachments/:id", event => {
    handle_delete_attachment(conn, event)
  })
  // ---- Projects ----
  ..get(@shared.api_projects, _ => handle_get_projects(conn))
  ..post(@shared.api_projects, event => handle_create_project(conn, event))
  ..delete("/api/projects/:id", event => handle_delete_project(conn, event))
  ..post("/api/tasks/:id/project", event => handle_set_task_project(conn, event))
  // ---- Role management (admin only) ----
  .post("/api/users/:id/role", event => handle_set_user_role(conn, event))
  println("Server running at http://localhost:\{port}")
  app.serve(port~)
}
