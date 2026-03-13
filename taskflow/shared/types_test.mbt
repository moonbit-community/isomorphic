///|
test "Task JSON round-trip" {
  let task : @shared.Task = {
    id: 1,
    title: "Fix login",
    description: "OAuth2 flow broken",
    status: "in_progress",
    priority: "high",
    assignee_id: 2,
    due_date: "2026-03-15",
    created_at: "2026-03-10",
  }
  let decoded : @shared.Task = @json.from_json(task.to_json())
  assert_eq(decoded, task)
}

///|
test "Member JSON round-trip" {
  let m : @shared.Member = { id: 1, name: "Alice", color: "blue" }
  let decoded : @shared.Member = @json.from_json(m.to_json())
  assert_eq(decoded, m)
}

///|
test "Board JSON round-trip" {
  let board : @shared.Board = {
    tasks: [
      {
        id: 1,
        title: "Task 1",
        description: "",
        status: "todo",
        priority: "medium",
        assignee_id: 0,
        due_date: "",
        created_at: "2026-03-12",
      },
    ],
    members: [{ id: 1, name: "Alice", color: "blue" }],
    activities: [
      {
        id: 1,
        task_id: 1,
        task_title: "Task 1",
        from_status: "todo",
        to_status: "in_progress",
        timestamp: "2026-03-12 10:30",
        user_name: "Alice",
      },
    ],
    dependencies: [{ task_id: 1, depends_on_id: 2 }],
    labels: [],
    task_labels: [],
    subtasks: [],
    time_entries: [],
    recurrence_rules: [],
    attachments: [],
    projects: [],
    task_projects: [],
    today: "2026-03-12",
  }
  let decoded : @shared.Board = @json.from_json(board.to_json())
  assert_eq(decoded, board)
}

///|
test "Activity JSON round-trip" {
  let act : @shared.Activity = {
    id: 1,
    task_id: 2,
    task_title: "Fix bug",
    from_status: "todo",
    to_status: "in_progress",
    timestamp: "2026-03-12 14:30",
    user_name: "Bob",
  }
  let decoded : @shared.Activity = @json.from_json(act.to_json())
  assert_eq(decoded, act)
}

///|
test "Task JSON structure" {
  let task : @shared.Task = {
    id: 1,
    title: "Test",
    description: "",
    status: "todo",
    priority: "low",
    assignee_id: 0,
    due_date: "",
    created_at: "2026-03-12",
  }
  let json = task.to_json()
  json_inspect(json, content={
    "id": 1,
    "title": "Test",
    "description": "",
    "status": "todo",
    "priority": "low",
    "assignee_id": 0,
    "due_date": "",
    "created_at": "2026-03-12",
  })
}

///|
test "Member JSON structure" {
  let m : @shared.Member = { id: 1, name: "Alice", color: "blue" }
  json_inspect(m.to_json(), content={
    "id": 1,
    "name": "Alice",
    "color": "blue",
  })
}

///|
test "Dependency JSON round-trip" {
  let d : @shared.Dependency = { task_id: 1, depends_on_id: 2 }
  let decoded : @shared.Dependency = @json.from_json(d.to_json())
  assert_eq(decoded, d)
}

///|
test "User JSON round-trip" {
  let user : @shared.User = { id: 1, username: "alice", color: "blue", role: "member" }
  let decoded : @shared.User = @json.from_json(user.to_json())
  assert_eq(decoded, user)
}

///|
test "AuthResponse JSON round-trip" {
  let resp : @shared.AuthResponse = {
    user: { id: 1, username: "alice", color: "blue", role: "member" },
    message: "Login successful",
  }
  let decoded : @shared.AuthResponse = @json.from_json(resp.to_json())
  assert_eq(decoded, resp)
}

///|
test "User JSON structure" {
  let user : @shared.User = { id: 1, username: "alice", color: "blue", role: "member" }
  json_inspect(user.to_json(), content={
    "id": 1,
    "username": "alice",
    "color": "blue",
    "role": "member",
  })
}

///|
test "AuthResponse JSON structure" {
  let resp : @shared.AuthResponse = {
    user: { id: 1, username: "alice", color: "blue", role: "member" },
    message: "Login successful",
  }
  json_inspect(resp.to_json(), content={
    "user": { "id": 1, "username": "alice", "color": "blue", "role": "member" },
    "message": "Login successful",
  })
}

///|
test "Activity JSON structure with user_name" {
  let act : @shared.Activity = {
    id: 1,
    task_id: 2,
    task_title: "Deploy",
    from_status: "review",
    to_status: "done",
    timestamp: "2026-03-12",
    user_name: "bob",
  }
  json_inspect(act.to_json(), content={
    "id": 1,
    "task_id": 2,
    "task_title": "Deploy",
    "from_status": "review",
    "to_status": "done",
    "timestamp": "2026-03-12",
    "user_name": "bob",
  })
}

///|
test "Comment JSON round-trip" {
  let c : @shared.Comment = {
    id: 1,
    task_id: 2,
    author: "Alice",
    text: "Looking good",
    created_at: "2026-03-12",
  }
  let decoded : @shared.Comment = @json.from_json(c.to_json())
  assert_eq(decoded, c)
}

///|
test "Comment JSON structure" {
  let c : @shared.Comment = {
    id: 1,
    task_id: 2,
    author: "Alice",
    text: "LGTM",
    created_at: "2026-03-12",
  }
  json_inspect(c.to_json(), content={
    "id": 1,
    "task_id": 2,
    "author": "Alice",
    "text": "LGTM",
    "created_at": "2026-03-12",
  })
}

///|
test "Dependency JSON structure" {
  let d : @shared.Dependency = { task_id: 3, depends_on_id: 7 }
  json_inspect(d.to_json(), content={ "task_id": 3, "depends_on_id": 7 })
}

///|
test "Board JSON round-trip with empty arrays" {
  let board : @shared.Board = {
    tasks: [],
    members: [],
    activities: [],
    dependencies: [],
    labels: [],
    task_labels: [],
    subtasks: [],
    time_entries: [],
    recurrence_rules: [],
    attachments: [],
    projects: [],
    task_projects: [],
    today: "2026-03-13",
  }
  let decoded : @shared.Board = @json.from_json(board.to_json())
  assert_eq(decoded, board)
}

///|
test "Task default values round-trip" {
  let task : @shared.Task = {
    id: 0,
    title: "x",
    description: "",
    status: "todo",
    priority: "low",
    assignee_id: 0,
    due_date: "",
    created_at: "",
  }
  let decoded : @shared.Task = @json.from_json(task.to_json())
  assert_eq(decoded, task)
}

///|
test "Board with multiple tasks and deps" {
  let board : @shared.Board = {
    tasks: [
      {
        id: 1,
        title: "A",
        description: "",
        status: "todo",
        priority: "high",
        assignee_id: 1,
        due_date: "2026-03-15",
        created_at: "2026-03-12",
      },
      {
        id: 2,
        title: "B",
        description: "depends on A",
        status: "blocked",
        priority: "medium",
        assignee_id: 2,
        due_date: "",
        created_at: "2026-03-12",
      },
    ],
    members: [
      { id: 1, name: "Alice", color: "blue" },
      { id: 2, name: "Bob", color: "green" },
    ],
    activities: [],
    dependencies: [{ task_id: 2, depends_on_id: 1 }],
    labels: [],
    task_labels: [],
    subtasks: [],
    time_entries: [],
    recurrence_rules: [],
    attachments: [],
    projects: [],
    task_projects: [],
    today: "2026-03-13",
  }
  let decoded : @shared.Board = @json.from_json(board.to_json())
  assert_eq(decoded, board)
  assert_eq(decoded.tasks.length(), 2)
  assert_eq(decoded.dependencies.length(), 1)
  assert_eq(decoded.dependencies[0].task_id, 2)
}
