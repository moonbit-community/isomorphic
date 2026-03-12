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
    today: "2026-03-12",
  }
  let decoded : @shared.Board = @json.from_json(board.to_json())
  assert_eq(decoded, board)
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
