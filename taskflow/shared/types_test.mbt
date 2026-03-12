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
      },
    ],
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
