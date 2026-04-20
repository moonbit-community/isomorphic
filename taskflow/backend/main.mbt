///|
async fn main {
  let matches = @argparse.parse(
    Command("taskflow-server", about="TaskFlow backend server", options=[
      OptionArg("port", short='p', long="port", about="Port to listen on", default_values=[
        "4006",
      ]),
    ]),
  )
  let port = @string.parse_int(matches.values["port"][0])
  let conn = @sqlite3.Connection::open("taskflow.db")
  println("Database opened: taskflow.db")
  init_db(conn)
  init_auth_db(conn)
  println("Database initialized")
  let app = @moonback.App(ctx => {
    ctx.add_middleware(@unstable_cors.new())
    ctx.add_middleware(@unstable_static.new(root="./public"))
    ctx.get("/", (_req, res) => {
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
      res.send_html(html)
    })
    ctx.post(@shared.api_register, (req, res) => handle_register(conn, req, res))
    ctx.post(@shared.api_login, (req, res) => handle_login(conn, req, res))
    ctx.post(@shared.api_logout, (req, res) => handle_logout(conn, req, res))
    ctx.get(@shared.api_me, (req, res) => handle_me(conn, req, res))
    ctx.get(@shared.api_board, (req, res) => handle_get_board(conn, req, res))
    ctx.get(@shared.api_export, (req, res) => handle_export(conn, req, res))
    ctx.get(@shared.api_members, (req, res) => {
      handle_get_members(conn, req, res)
    })
    ctx.post(@shared.api_tasks, (req, res) => handle_create_task(conn, req, res))
    ctx.post("/api/tasks/:id", (req, res) => handle_update_task(conn, req, res))
    ctx.post("/api/tasks/:id/status", (req, res) => {
      handle_update_task_status(conn, req, res)
    })
    ctx.get("/api/tasks/:id/deps", (req, res) => handle_get_deps(conn, req, res))
    ctx.post("/api/tasks/:id/deps", (req, res) => handle_add_dep(conn, req, res))
    ctx.post("/api/tasks/:id/deps/remove", (req, res) => {
      handle_remove_dep(conn, req, res)
    })
    ctx.get("/api/tasks/:id/comments", (req, res) => {
      handle_get_comments(conn, req, res)
    })
    ctx.post("/api/tasks/:id/comments", (req, res) => {
      handle_add_comment(conn, req, res)
    })
    ctx.get(@shared.api_labels, (req, res) => handle_get_labels(conn, req, res))
    ctx.post(@shared.api_labels, (req, res) => {
      handle_create_label(conn, req, res)
    })
    ctx.get("/api/tasks/:id/labels", (req, res) => {
      handle_get_task_labels(conn, req, res)
    })
    ctx.post("/api/tasks/:id/labels", (req, res) => {
      handle_add_task_label(conn, req, res)
    })
    ctx.post("/api/tasks/:id/labels/remove", (req, res) => {
      handle_remove_task_label(conn, req, res)
    })
    ctx.get("/api/tasks/:id/subtasks", (req, res) => {
      handle_get_subtasks(conn, req, res)
    })
    ctx.post("/api/tasks/:id/subtasks", (req, res) => {
      handle_create_subtask(conn, req, res)
    })
    ctx.post("/api/subtasks/:id/toggle", (req, res) => {
      handle_toggle_subtask(conn, req, res)
    })
    ctx.add_route(Delete, "/api/subtasks/:id", (req, res) => {
      handle_delete_subtask(conn, req, res)
    })
    ctx.post("/api/tasks/:id/time", (req, res) => {
      handle_log_time(conn, req, res)
    })
    ctx.add_route(Delete, "/api/time/:id", (req, res) => {
      handle_delete_time_entry(conn, req, res)
    })
    ctx.post("/api/tasks/:id/recurrence", (req, res) => {
      handle_set_recurrence(conn, req, res)
    })
    ctx.add_route(Delete, "/api/tasks/:id/recurrence", (req, res) => {
      handle_remove_recurrence(conn, req, res)
    })
    ctx.add_route(Delete, "/api/tasks/:id", (req, res) => {
      handle_delete_task(conn, req, res)
    })
    ctx.get("/api/tasks/:id", (req, res) => handle_get_task(conn, req, res))
    ctx.post("/api/tasks/:id/attachments", (req, res) => {
      handle_create_attachment(conn, req, res)
    })
    ctx.add_route(Delete, "/api/attachments/:id", (req, res) => {
      handle_delete_attachment(conn, req, res)
    })
    ctx.get(@shared.api_projects, (req, res) => {
      handle_get_projects(conn, req, res)
    })
    ctx.post(@shared.api_projects, (req, res) => {
      handle_create_project(conn, req, res)
    })
    ctx.add_route(Delete, "/api/projects/:id", (req, res) => {
      handle_delete_project(conn, req, res)
    })
    ctx.post("/api/tasks/:id/project", (req, res) => {
      handle_set_task_project(conn, req, res)
    })
    ctx.post("/api/users/:id/role", (req, res) => {
      handle_set_user_role(conn, req, res)
    })
  })
  println("Server running at http://localhost:\{port}")
  app.serve(@moonback.listen(port=port.to_uint16()))
}
