///|
test "workflow: create tasks, filter, sort, check completion" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "Setup CI",
      description: "GitHub Actions",
      status: "done",
      priority: "high",
      assignee_id: 1,
      due_date: "2026-03-10",
      created_at: "2026-03-01",
    },
    {
      id: 2,
      title: "Fix login bug",
      description: "OAuth2 broken",
      status: "in_progress",
      priority: "urgent",
      assignee_id: 1,
      due_date: "2026-03-12",
      created_at: "2026-03-05",
    },
    {
      id: 3,
      title: "Write docs",
      description: "API documentation",
      status: "todo",
      priority: "low",
      assignee_id: 2,
      due_date: "",
      created_at: "2026-03-08",
    },
    {
      id: 4,
      title: "Deploy v2",
      description: "",
      status: "blocked",
      priority: "high",
      assignee_id: 1,
      due_date: "2026-03-15",
      created_at: "2026-03-10",
    },
  ]
  let today = "2026-03-13"
  // Completion: 1 of 4 done = 25%
  inspect(@shared.completion_percent(tasks), content="25")
  // Count by status
  inspect(@shared.count_by_status(tasks, "done"), content="1")
  inspect(@shared.count_by_status(tasks, "in_progress"), content="1")
  inspect(@shared.count_by_status(tasks, "blocked"), content="1")
  // Filter alice's tasks (assignee_id=1)
  let alice_tasks = @shared.tasks_for_member(tasks, 1)
  inspect(alice_tasks.length(), content="3")
  // Sort by priority then due date
  let sorted = @shared.sort_tasks(tasks)
  inspect(sorted[0].title, content="Fix login bug") // urgent
  inspect(sorted[1].title, content="Setup CI") // high, earlier date
  inspect(sorted[2].title, content="Deploy v2") // high, later date
  inspect(sorted[3].title, content="Write docs") // low, no date
  // Filter overdue tasks
  let overdue = @shared.filter_tasks(
    tasks,
    "",
    0,
    "",
    urgency="overdue",
    today~,
  )
  inspect(overdue.length(), content="2") // CI (done but date < today) and login bug
  // Search + status filter
  let search = @shared.filter_tasks(tasks, "todo", 0, "", query="doc")
  inspect(search.length(), content="1")
  inspect(search[0].title, content="Write docs")
}

///|
test "workflow: dependency chain blocks progress" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "Design API",
      description: "",
      status: "done",
      priority: "high",
      assignee_id: 1,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "Implement API",
      description: "",
      status: "in_progress",
      priority: "high",
      assignee_id: 1,
      due_date: "",
      created_at: "",
    },
    {
      id: 3,
      title: "Write tests",
      description: "",
      status: "todo",
      priority: "medium",
      assignee_id: 2,
      due_date: "",
      created_at: "",
    },
    {
      id: 4,
      title: "Deploy",
      description: "",
      status: "todo",
      priority: "urgent",
      assignee_id: 1,
      due_date: "",
      created_at: "",
    },
  ]
  let deps : Array[@shared.Dependency] = [
    { task_id: 2, depends_on_id: 1 }, // Implement depends on Design
    { task_id: 3, depends_on_id: 2 }, // Tests depend on Implement
    { task_id: 4, depends_on_id: 2 }, // Deploy depends on Implement
    { task_id: 4, depends_on_id: 3 }, // Deploy depends on Tests
  ]
  // Design is done -> Implement has no unresolved deps
  inspect(@shared.has_unresolved_deps(deps, tasks, 2), content="false")
  // Implement is in_progress -> Tests and Deploy are blocked
  inspect(@shared.has_unresolved_deps(deps, tasks, 3), content="true")
  inspect(@shared.has_unresolved_deps(deps, tasks, 4), content="true")
  // Check dependency lists
  inspect(@shared.get_dependencies(deps, 4), content="[2, 3]")
  inspect(@shared.get_dependencies(deps, 1), content="[]")
}

///|
test "workflow: status transitions through task lifecycle" {
  // Simulate a task going through the full lifecycle
  let statuses = ["todo", "in_progress", "review", "done"]
  for i in 0..<(statuses.length() - 1) {
    assert_true(@shared.is_valid_transition(statuses[i], statuses[i + 1]))
  }
  // Can reopen from done
  assert_true(@shared.is_valid_transition("done", "todo"))
  // Full cycle back
  assert_true(@shared.is_valid_transition("todo", "in_progress"))
  // Blocked detour
  assert_true(@shared.is_valid_transition("todo", "blocked"))
  assert_true(@shared.is_valid_transition("blocked", "todo"))
  assert_true(@shared.is_valid_transition("blocked", "in_progress"))
}

///|
test "workflow: activity tracking and formatting" {
  let activities : Array[@shared.Activity] = [
    {
      id: 5,
      task_id: 1,
      task_title: "Deploy v2",
      from_status: "review",
      to_status: "done",
      timestamp: "2026-03-13 14:00",
      user_name: "Alice",
    },
    {
      id: 4,
      task_id: 1,
      task_title: "Deploy v2",
      from_status: "in_progress",
      to_status: "review",
      timestamp: "2026-03-13 10:00",
      user_name: "Alice",
    },
    {
      id: 3,
      task_id: 2,
      task_title: "Fix bug",
      from_status: "todo",
      to_status: "in_progress",
      timestamp: "2026-03-12 16:00",
      user_name: "Bob",
    },
    {
      id: 2,
      task_id: 1,
      task_title: "Deploy v2",
      from_status: "todo",
      to_status: "in_progress",
      timestamp: "2026-03-12 09:00",
      user_name: "Alice",
    },
    {
      id: 1,
      task_id: 2,
      task_title: "Fix bug",
      from_status: "",
      to_status: "todo",
      timestamp: "2026-03-11 08:00",
      user_name: "",
    },
  ]
  // Recent 3 activities
  let recent = @shared.recent_activities(activities, 3)
  inspect(recent.length(), content="3")
  inspect(recent[0].id, content="5")
  inspect(recent[2].id, content="3")
  // Format each
  inspect(
    @shared.format_activity(recent[0]),
    content="Alice: Deploy v2: Review → Done",
  )
  inspect(
    @shared.format_activity(recent[1]),
    content="Alice: Deploy v2: In Progress → Review",
  )
  inspect(
    @shared.format_activity(recent[2]),
    content="Bob: Fix bug: To Do → In Progress",
  )
  // Anonymous activity
  inspect(@shared.format_activity(activities[4]), content="Fix bug:  → To Do")
}

///|
test "workflow: member lookup and display" {
  let members : Array[@shared.Member] = [
    { id: 1, name: "Alice", color: "blue" },
    { id: 2, name: "Bob", color: "red" },
    { id: 3, name: "中文名", color: "green" },
  ]
  // Lookup
  let alice = @shared.find_member(members, 1).unwrap()
  inspect(@shared.member_initial(alice.name), content="A")
  inspect(@shared.member_color(alice.color), content="#3b82f6")
  // Unicode member
  let cn = @shared.find_member(members, 3).unwrap()
  inspect(@shared.member_initial(cn.name), content="中")
  inspect(@shared.member_color(cn.color), content="#22c55e")
  // Missing member
  assert_true(@shared.find_member(members, 99) is None)
}

///|
test "workflow: filter all parameters combined" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "Fix login",
      description: "auth bug",
      status: "in_progress",
      priority: "urgent",
      assignee_id: 1,
      due_date: "2026-03-10",
      created_at: "",
    },
    {
      id: 2,
      title: "Fix signup",
      description: "",
      status: "in_progress",
      priority: "urgent",
      assignee_id: 1,
      due_date: "2026-03-15",
      created_at: "",
    },
    {
      id: 3,
      title: "Fix dashboard",
      description: "",
      status: "in_progress",
      priority: "high",
      assignee_id: 1,
      due_date: "2026-03-10",
      created_at: "",
    },
    {
      id: 4,
      title: "Fix login CSS",
      description: "",
      status: "todo",
      priority: "urgent",
      assignee_id: 1,
      due_date: "2026-03-10",
      created_at: "",
    },
    {
      id: 5,
      title: "Fix login perf",
      description: "",
      status: "in_progress",
      priority: "urgent",
      assignee_id: 2,
      due_date: "2026-03-10",
      created_at: "",
    },
  ]
  // All 5 parameters: status=in_progress, assignee=1, priority=urgent, query=login, urgency=overdue
  let filtered = @shared.filter_tasks(
    tasks,
    "in_progress",
    1,
    "urgent",
    query="login",
    urgency="overdue",
    today="2026-03-12",
  )
  // Only task 1 matches all 5 criteria
  inspect(filtered.length(), content="1")
  inspect(filtered[0].title, content="Fix login")
}

///|
test "workflow: urgency labels for task board" {
  let today = "2026-03-13"
  // A realistic set of due dates
  inspect(@shared.urgency_label("2026-03-10", today), content="Overdue")
  inspect(@shared.urgency_label("2026-03-13", today), content="Due today")
  inspect(@shared.urgency_label("2026-03-14", today), content="Upcoming")
  inspect(@shared.urgency_label("2026-12-31", today), content="Upcoming")
  inspect(@shared.urgency_label("", today), content="No deadline")
  // Priority colors for display
  inspect(@shared.priority_color("urgent"), content="#ef4444")
  inspect(@shared.priority_color("high"), content="#f97316")
  inspect(@shared.priority_color("medium"), content="#3b82f6")
  inspect(@shared.priority_color("low"), content="#94a3b8")
  // Status colors for kanban columns
  inspect(@shared.status_color("todo"), content="#94a3b8")
  inspect(@shared.status_color("in_progress"), content="#3b82f6")
  inspect(@shared.status_color("review"), content="#eab308")
  inspect(@shared.status_color("done"), content="#22c55e")
  inspect(@shared.status_color("blocked"), content="#ef4444")
}

///|
test "workflow: board JSON round-trip preserves full state" {
  let board : @shared.Board = {
    tasks: [
      {
        id: 1,
        title: "Fix bug",
        description: "Critical auth issue",
        status: "in_progress",
        priority: "urgent",
        assignee_id: 1,
        due_date: "2026-03-15",
        created_at: "2026-03-12",
      },
      {
        id: 2,
        title: "Write tests",
        description: "",
        status: "todo",
        priority: "medium",
        assignee_id: 2,
        due_date: "",
        created_at: "2026-03-13",
      },
    ],
    members: [
      { id: 1, name: "Alice", color: "blue" },
      { id: 2, name: "Bob", color: "red" },
    ],
    activities: [
      {
        id: 1,
        task_id: 1,
        task_title: "Fix bug",
        from_status: "todo",
        to_status: "in_progress",
        timestamp: "2026-03-12 10:00",
        user_name: "Alice",
      },
    ],
    dependencies: [{ task_id: 2, depends_on_id: 1 }],
    today: "2026-03-13",
  }
  // Round-trip through JSON
  let json = board.to_json()
  let decoded : @shared.Board = @json.from_json(json)
  assert_eq(decoded, board)
  // Verify we can use the decoded board with logic functions
  inspect(@shared.completion_percent(decoded.tasks), content="0")
  inspect(
    @shared.has_unresolved_deps(decoded.dependencies, decoded.tasks, 2),
    content="true",
  )
  inspect(
    @shared.find_member(decoded.members, 1).unwrap().name,
    content="Alice",
  )
  let sorted = @shared.sort_tasks(decoded.tasks)
  inspect(sorted[0].title, content="Fix bug") // urgent first
}
