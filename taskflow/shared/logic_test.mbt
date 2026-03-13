///|
test "priority_weight ordering" {
  inspect(@shared.priority_weight("urgent"), content="0")
  inspect(@shared.priority_weight("high"), content="1")
  inspect(@shared.priority_weight("medium"), content="2")
  inspect(@shared.priority_weight("low"), content="3")
  inspect(@shared.priority_weight("unknown"), content="4")
}

///|
test "priority_label" {
  inspect(@shared.priority_label("low"), content="Low")
  inspect(@shared.priority_label("medium"), content="Medium")
  inspect(@shared.priority_label("high"), content="High")
  inspect(@shared.priority_label("urgent"), content="Urgent")
}

///|
test "priority_color" {
  inspect(@shared.priority_color("low"), content="#94a3b8")
  inspect(@shared.priority_color("medium"), content="#3b82f6")
  inspect(@shared.priority_color("high"), content="#f97316")
  inspect(@shared.priority_color("urgent"), content="#ef4444")
}

///|
test "member_color" {
  inspect(@shared.member_color("blue"), content="#3b82f6")
  inspect(@shared.member_color("green"), content="#22c55e")
  inspect(@shared.member_color("red"), content="#ef4444")
  inspect(@shared.member_color("unknown"), content="#94a3b8")
}

///|
test "member_initial" {
  inspect(@shared.member_initial("Alice"), content="A")
  inspect(@shared.member_initial("Bob"), content="B")
  inspect(@shared.member_initial(""), content="?")
}

///|
test "is_overdue" {
  inspect(@shared.is_overdue("2026-03-01", "2026-03-12"), content="true")
  inspect(@shared.is_overdue("2026-03-12", "2026-03-12"), content="false")
  inspect(@shared.is_overdue("2026-03-15", "2026-03-12"), content="false")
  inspect(@shared.is_overdue("", "2026-03-12"), content="false")
}

///|
test "urgency_label" {
  inspect(@shared.urgency_label("2026-03-01", "2026-03-12"), content="Overdue")
  inspect(
    @shared.urgency_label("2026-03-12", "2026-03-12"),
    content="Due today",
  )
  inspect(@shared.urgency_label("2026-03-15", "2026-03-12"), content="Upcoming")
  inspect(@shared.urgency_label("", "2026-03-12"), content="No deadline")
}

///|
test "completion_percent" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "A",
      description: "",
      status: "done",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "B",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  inspect(@shared.completion_percent(tasks), content="50")
  inspect(@shared.completion_percent([]), content="0")
}

///|
test "completion_percent all done" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "A",
      description: "",
      status: "done",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "B",
      description: "",
      status: "done",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  inspect(@shared.completion_percent(tasks), content="100")
}

///|
test "count_by_status" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "A",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "B",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 3,
      title: "C",
      description: "",
      status: "done",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  inspect(@shared.count_by_status(tasks, "todo"), content="2")
  inspect(@shared.count_by_status(tasks, "done"), content="1")
  inspect(@shared.count_by_status(tasks, "review"), content="0")
}

///|
test "tasks_for_member" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "A",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 1,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "B",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 2,
      due_date: "",
      created_at: "",
    },
    {
      id: 3,
      title: "C",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 1,
      due_date: "",
      created_at: "",
    },
  ]
  let alice_tasks = @shared.tasks_for_member(tasks, 1)
  inspect(alice_tasks.length(), content="2")
  inspect(alice_tasks[0].title, content="A")
  inspect(alice_tasks[1].title, content="C")
  inspect(@shared.tasks_for_member(tasks, 99).length(), content="0")
}

///|
test "find_member" {
  let members : Array[@shared.Member] = [
    { id: 1, name: "Alice", color: "blue" },
    { id: 2, name: "Bob", color: "green" },
  ]
  let found = @shared.find_member(members, 1)
  inspect(found.unwrap().name, content="Alice")
  assert_true(@shared.find_member(members, 99) is None)
}

///|
test "sort_tasks by priority" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "Low",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "Urgent",
      description: "",
      status: "todo",
      priority: "urgent",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 3,
      title: "High",
      description: "",
      status: "todo",
      priority: "high",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  let sorted = @shared.sort_tasks(tasks)
  inspect(sorted[0].title, content="Urgent")
  inspect(sorted[1].title, content="High")
  inspect(sorted[2].title, content="Low")
}

///|
test "sort_tasks by due date within same priority" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "Later",
      description: "",
      status: "todo",
      priority: "medium",
      assignee_id: 0,
      due_date: "2026-03-20",
      created_at: "",
    },
    {
      id: 2,
      title: "Sooner",
      description: "",
      status: "todo",
      priority: "medium",
      assignee_id: 0,
      due_date: "2026-03-10",
      created_at: "",
    },
    {
      id: 3,
      title: "No date",
      description: "",
      status: "todo",
      priority: "medium",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  let sorted = @shared.sort_tasks(tasks)
  inspect(sorted[0].title, content="Sooner")
  inspect(sorted[1].title, content="Later")
  inspect(sorted[2].title, content="No date")
}

///|
test "sort_tasks does not mutate original" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "Low",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "High",
      description: "",
      status: "todo",
      priority: "high",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  let _ = @shared.sort_tasks(tasks)
  inspect(tasks[0].title, content="Low")
}

///|
test "sort_label returns human-readable labels" {
  inspect(@shared.sort_label("priority"), content="Priority")
  inspect(@shared.sort_label("due_date"), content="Due Date")
  inspect(@shared.sort_label("title"), content="Title")
  inspect(@shared.sort_label("created_at"), content="Created")
  inspect(@shared.sort_label("unknown"), content="unknown")
}

///|
test "sort_tasks_by sorts ascending and descending" {
  let tasks : Array[@shared.Task] = [
    { id: 1, title: "Banana", description: "", status: "todo", priority: "low", assignee_id: 0, due_date: "2024-06-01", created_at: "2024-01-01" },
    { id: 2, title: "Apple", description: "", status: "todo", priority: "high", assignee_id: 0, due_date: "2024-03-01", created_at: "2024-02-01" },
    { id: 3, title: "Cherry", description: "", status: "todo", priority: "medium", assignee_id: 0, due_date: "", created_at: "2024-01-15" },
  ]
  // Sort by title ascending
  let by_title = @shared.sort_tasks_by(tasks, "title", true)
  inspect(by_title[0].title, content="Apple")
  inspect(by_title[2].title, content="Cherry")
  // Sort by title descending
  let by_title_desc = @shared.sort_tasks_by(tasks, "title", false)
  inspect(by_title_desc[0].title, content="Cherry")
  // Sort by priority ascending (urgent first)
  let by_prio = @shared.sort_tasks_by(tasks, "priority", true)
  inspect(by_prio[0].priority, content="high")
  // Sort by due_date ascending (empty dates last)
  let by_due = @shared.sort_tasks_by(tasks, "due_date", true)
  inspect(by_due[0].due_date, content="2024-03-01")
  // Sort by created_at descending
  let by_created = @shared.sort_tasks_by(tasks, "created_at", false)
  inspect(by_created[0].created_at, content="2024-02-01")
}

///|
test "filter_tasks by status" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "A",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "B",
      description: "",
      status: "done",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  let filtered = @shared.filter_tasks(tasks, "todo", 0, "")
  inspect(filtered.length(), content="1")
  inspect(filtered[0].title, content="A")
}

///|
test "filter_tasks by assignee" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "A",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 1,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "B",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 2,
      due_date: "",
      created_at: "",
    },
  ]
  let filtered = @shared.filter_tasks(tasks, "", 1, "")
  inspect(filtered.length(), content="1")
  inspect(filtered[0].title, content="A")
}

///|
test "filter_tasks by priority" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "A",
      description: "",
      status: "todo",
      priority: "urgent",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "B",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  let filtered = @shared.filter_tasks(tasks, "", 0, "urgent")
  inspect(filtered.length(), content="1")
  inspect(filtered[0].title, content="A")
}

///|
test "filter_tasks all filters" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "Match",
      description: "",
      status: "todo",
      priority: "high",
      assignee_id: 1,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "Wrong status",
      description: "",
      status: "done",
      priority: "high",
      assignee_id: 1,
      due_date: "",
      created_at: "",
    },
    {
      id: 3,
      title: "Wrong assignee",
      description: "",
      status: "todo",
      priority: "high",
      assignee_id: 2,
      due_date: "",
      created_at: "",
    },
    {
      id: 4,
      title: "Wrong priority",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 1,
      due_date: "",
      created_at: "",
    },
  ]
  let filtered = @shared.filter_tasks(tasks, "todo", 1, "high")
  inspect(filtered.length(), content="1")
  inspect(filtered[0].title, content="Match")
}

///|
test "search_matches title case-insensitive" {
  let task : @shared.Task = {
    id: 1,
    title: "Fix Login Bug",
    description: "OAuth2 flow broken",
    status: "todo",
    priority: "high",
    assignee_id: 1,
    due_date: "",
    created_at: "",
  }
  inspect(@shared.search_matches(task, ""), content="true")
  inspect(@shared.search_matches(task, "login"), content="true")
  inspect(@shared.search_matches(task, "LOGIN"), content="true")
  inspect(@shared.search_matches(task, "Fix"), content="true")
  inspect(@shared.search_matches(task, "oauth"), content="true")
  inspect(@shared.search_matches(task, "missing"), content="false")
}

///|
test "filter_tasks with search query" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "Fix Login",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "Add Dashboard",
      description: "analytics page",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  let filtered = @shared.filter_tasks(tasks, "", 0, "", query="login")
  inspect(filtered.length(), content="1")
  inspect(filtered[0].title, content="Fix Login")
  // Search in description
  let filtered2 = @shared.filter_tasks(tasks, "", 0, "", query="analytics")
  inspect(filtered2.length(), content="1")
  inspect(filtered2[0].title, content="Add Dashboard")
  // Empty query returns all
  let filtered3 = @shared.filter_tasks(tasks, "", 0, "", query="")
  inspect(filtered3.length(), content="2")
}

///|
test "filter_tasks combined search and status" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "Fix Login",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "Fix Signup",
      description: "",
      status: "done",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  // Search "fix" but only in "todo" status
  let filtered = @shared.filter_tasks(tasks, "todo", 0, "", query="fix")
  inspect(filtered.length(), content="1")
  inspect(filtered[0].title, content="Fix Login")
}

///|
test "filter_tasks empty filters returns all" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "A",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "B",
      description: "",
      status: "done",
      priority: "high",
      assignee_id: 1,
      due_date: "",
      created_at: "",
    },
  ]
  let filtered = @shared.filter_tasks(tasks, "", 0, "")
  inspect(filtered.length(), content="2")
}

///|
test "sort_tasks empty array" {
  let sorted = @shared.sort_tasks([])
  inspect(sorted.length(), content="0")
}

///|
test "completion_percent single done" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "A",
      description: "",
      status: "done",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  inspect(@shared.completion_percent(tasks), content="100")
}

///|
test "completion_percent none done" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "A",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "B",
      description: "",
      status: "in_progress",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  inspect(@shared.completion_percent(tasks), content="0")
}

///|
test "search_matches empty description" {
  let task : @shared.Task = {
    id: 1,
    title: "Test",
    description: "",
    status: "todo",
    priority: "low",
    assignee_id: 0,
    due_date: "",
    created_at: "",
  }
  inspect(@shared.search_matches(task, "test"), content="true")
  inspect(@shared.search_matches(task, "desc"), content="false")
}

///|
test "format_activity without user" {
  let act : @shared.Activity = {
    id: 1,
    task_id: 1,
    task_title: "Deploy v2",
    from_status: "review",
    to_status: "done",
    timestamp: "2026-03-12",
    user_name: "",
  }
  inspect(@shared.format_activity(act), content="Deploy v2: Review → Done")
}

///|
test "format_activity with user" {
  let act : @shared.Activity = {
    id: 1,
    task_id: 1,
    task_title: "Deploy v2",
    from_status: "review",
    to_status: "done",
    timestamp: "2026-03-12",
    user_name: "Alice",
  }
  inspect(
    @shared.format_activity(act),
    content="Alice: Deploy v2: Review → Done",
  )
}

///|
test "format_activity created without user" {
  let act : @shared.Activity = {
    id: 1,
    task_id: 1,
    task_title: "New task",
    from_status: "",
    to_status: "todo",
    timestamp: "2026-03-12",
    user_name: "",
  }
  inspect(@shared.format_activity(act), content="New task:  → To Do")
}

///|
test "format_activity created with user" {
  let act : @shared.Activity = {
    id: 1,
    task_id: 1,
    task_title: "New task",
    from_status: "",
    to_status: "todo",
    timestamp: "2026-03-12",
    user_name: "charlie",
  }
  inspect(@shared.format_activity(act), content="charlie: New task:  → To Do")
}

///|
test "recent_activities limit" {
  let acts : Array[@shared.Activity] = []
  for i in 0..<5 {
    acts.push({
      id: i + 1,
      task_id: 1,
      task_title: "Task",
      from_status: "todo",
      to_status: "in_progress",
      timestamp: "",
      user_name: "",
    })
  }
  let recent = @shared.recent_activities(acts, 3)
  inspect(recent.length(), content="3")
  inspect(recent[0].id, content="1")
  // Empty input
  inspect(@shared.recent_activities([], 5).length(), content="0")
}

///|
test "matches_urgency" {
  let overdue : @shared.Task = {
    id: 1,
    title: "A",
    description: "",
    status: "todo",
    priority: "low",
    assignee_id: 0,
    due_date: "2026-03-01",
    created_at: "",
  }
  let today_task : @shared.Task = {
    id: 2,
    title: "B",
    description: "",
    status: "todo",
    priority: "low",
    assignee_id: 0,
    due_date: "2026-03-12",
    created_at: "",
  }
  let no_due : @shared.Task = {
    id: 3,
    title: "C",
    description: "",
    status: "todo",
    priority: "low",
    assignee_id: 0,
    due_date: "",
    created_at: "",
  }
  let today = "2026-03-12"
  // All
  inspect(@shared.matches_urgency(overdue, "", today), content="true")
  // Overdue
  inspect(@shared.matches_urgency(overdue, "overdue", today), content="true")
  inspect(
    @shared.matches_urgency(today_task, "overdue", today),
    content="false",
  )
  // Due today
  inspect(
    @shared.matches_urgency(today_task, "due_today", today),
    content="true",
  )
  inspect(@shared.matches_urgency(overdue, "due_today", today), content="false")
  // Has deadline
  inspect(
    @shared.matches_urgency(overdue, "has_deadline", today),
    content="true",
  )
  inspect(
    @shared.matches_urgency(no_due, "has_deadline", today),
    content="false",
  )
  // No deadline
  inspect(@shared.matches_urgency(no_due, "no_deadline", today), content="true")
  inspect(
    @shared.matches_urgency(overdue, "no_deadline", today),
    content="false",
  )
}

///|
test "filter_tasks with urgency" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "Overdue",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "2026-03-01",
      created_at: "",
    },
    {
      id: 2,
      title: "Today",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "2026-03-12",
      created_at: "",
    },
    {
      id: 3,
      title: "No due",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  let f = @shared.filter_tasks(
    tasks,
    "",
    0,
    "",
    urgency="overdue",
    today="2026-03-12",
  )
  inspect(f.length(), content="1")
  inspect(f[0].title, content="Overdue")
}

///|
test "is_overdue boundary" {
  // Same date is not overdue
  inspect(@shared.is_overdue("2026-03-12", "2026-03-12"), content="false")
  // One day before is overdue
  inspect(@shared.is_overdue("2026-03-11", "2026-03-12"), content="true")
  // One day after is not overdue
  inspect(@shared.is_overdue("2026-03-13", "2026-03-12"), content="false")
}

///|
test "get_dependencies" {
  let deps : Array[@shared.Dependency] = [
    { task_id: 1, depends_on_id: 2 },
    { task_id: 1, depends_on_id: 3 },
    { task_id: 2, depends_on_id: 3 },
  ]
  inspect(@shared.get_dependencies(deps, 1), content="[2, 3]")
  inspect(@shared.get_dependencies(deps, 2), content="[3]")
  inspect(@shared.get_dependencies(deps, 3), content="[]")
}

///|
test "priority_label unknown fallback" {
  inspect(@shared.priority_label("critical"), content="critical")
  inspect(@shared.priority_label(""), content="")
}

///|
test "priority_color unknown fallback" {
  inspect(@shared.priority_color("critical"), content="#94a3b8")
  inspect(@shared.priority_color(""), content="#94a3b8")
}

///|
test "member_color all named colors" {
  inspect(@shared.member_color("red"), content="#ef4444")
  inspect(@shared.member_color("orange"), content="#f97316")
  inspect(@shared.member_color("yellow"), content="#eab308")
  inspect(@shared.member_color("green"), content="#22c55e")
  inspect(@shared.member_color("blue"), content="#3b82f6")
  inspect(@shared.member_color("purple"), content="#a855f7")
}

///|
test "member_initial with unicode" {
  inspect(@shared.member_initial("中文"), content="中")
  inspect(@shared.member_initial("Ü"), content="Ü")
}

///|
test "sort_tasks stable by ID when all else equal" {
  let tasks : Array[@shared.Task] = [
    {
      id: 3,
      title: "Third",
      description: "",
      status: "todo",
      priority: "medium",
      assignee_id: 0,
      due_date: "2026-03-15",
      created_at: "",
    },
    {
      id: 1,
      title: "First",
      description: "",
      status: "todo",
      priority: "medium",
      assignee_id: 0,
      due_date: "2026-03-15",
      created_at: "",
    },
    {
      id: 2,
      title: "Second",
      description: "",
      status: "todo",
      priority: "medium",
      assignee_id: 0,
      due_date: "2026-03-15",
      created_at: "",
    },
  ]
  let sorted = @shared.sort_tasks(tasks)
  inspect(sorted[0].title, content="First")
  inspect(sorted[1].title, content="Second")
  inspect(sorted[2].title, content="Third")
}

///|
test "sort_tasks mixed priorities and dates" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "Low+soon",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "2026-03-01",
      created_at: "",
    },
    {
      id: 2,
      title: "High+late",
      description: "",
      status: "todo",
      priority: "high",
      assignee_id: 0,
      due_date: "2026-03-30",
      created_at: "",
    },
    {
      id: 3,
      title: "High+soon",
      description: "",
      status: "todo",
      priority: "high",
      assignee_id: 0,
      due_date: "2026-03-01",
      created_at: "",
    },
  ]
  let sorted = @shared.sort_tasks(tasks)
  // High priority first, sorted by date within
  inspect(sorted[0].title, content="High+soon")
  inspect(sorted[1].title, content="High+late")
  inspect(sorted[2].title, content="Low+soon")
}

///|
test "sort_tasks single task" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "Only",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  let sorted = @shared.sort_tasks(tasks)
  inspect(sorted.length(), content="1")
  inspect(sorted[0].title, content="Only")
}

///|
test "recent_activities limit exceeds count" {
  let acts : Array[@shared.Activity] = [
    {
      id: 1,
      task_id: 1,
      task_title: "A",
      from_status: "todo",
      to_status: "done",
      timestamp: "",
      user_name: "",
    },
    {
      id: 2,
      task_id: 2,
      task_title: "B",
      from_status: "todo",
      to_status: "done",
      timestamp: "",
      user_name: "",
    },
  ]
  // Requesting more than available returns all
  let recent = @shared.recent_activities(acts, 10)
  inspect(recent.length(), content="2")
}

///|
test "recent_activities limit zero" {
  let acts : Array[@shared.Activity] = [
    {
      id: 1,
      task_id: 1,
      task_title: "A",
      from_status: "todo",
      to_status: "done",
      timestamp: "",
      user_name: "",
    },
  ]
  inspect(@shared.recent_activities(acts, 0).length(), content="0")
}

///|
test "completion_percent rounding" {
  // 1 of 3 done = 33% (integer truncation)
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "A",
      description: "",
      status: "done",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "B",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 3,
      title: "C",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  inspect(@shared.completion_percent(tasks), content="33")
}

///|
test "tasks_for_member with zero assignee" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "Unassigned",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "Assigned",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 1,
      due_date: "",
      created_at: "",
    },
  ]
  let unassigned = @shared.tasks_for_member(tasks, 0)
  inspect(unassigned.length(), content="1")
  inspect(unassigned[0].title, content="Unassigned")
}

///|
test "find_member first and last" {
  let members : Array[@shared.Member] = [
    { id: 1, name: "First", color: "red" },
    { id: 2, name: "Middle", color: "green" },
    { id: 3, name: "Last", color: "blue" },
  ]
  inspect(@shared.find_member(members, 1).unwrap().name, content="First")
  inspect(@shared.find_member(members, 3).unwrap().name, content="Last")
  assert_true(@shared.find_member(members, 0) is None)
}

///|
test "matches_urgency unknown filter passes" {
  let task : @shared.Task = {
    id: 1,
    title: "A",
    description: "",
    status: "todo",
    priority: "low",
    assignee_id: 0,
    due_date: "2026-03-15",
    created_at: "",
  }
  // Unknown urgency filter matches everything
  inspect(@shared.matches_urgency(task, "custom", "2026-03-12"), content="true")
}

///|
test "filter_tasks combined urgency and search" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "Fix login",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "2026-03-01",
      created_at: "",
    },
    {
      id: 2,
      title: "Fix signup",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 3,
      title: "Add dashboard",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "2026-03-01",
      created_at: "",
    },
  ]
  // Overdue AND matches "fix"
  let f = @shared.filter_tasks(
    tasks,
    "",
    0,
    "",
    query="fix",
    urgency="overdue",
    today="2026-03-12",
  )
  inspect(f.length(), content="1")
  inspect(f[0].title, content="Fix login")
}

///|
test "has_unresolved_deps" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "A",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 2,
      title: "B",
      description: "",
      status: "done",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
    {
      id: 3,
      title: "C",
      description: "",
      status: "in_progress",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  let deps : Array[@shared.Dependency] = [
    { task_id: 1, depends_on_id: 2 },
    { task_id: 1, depends_on_id: 3 },
  ]
  // Task 1 depends on 2 (done) and 3 (in_progress) -> has unresolved
  inspect(@shared.has_unresolved_deps(deps, tasks, 1), content="true")
  // Task 2 has no deps
  inspect(@shared.has_unresolved_deps(deps, tasks, 2), content="false")
  // Task with only done deps
  let deps2 : Array[@shared.Dependency] = [{ task_id: 1, depends_on_id: 2 }]
  inspect(@shared.has_unresolved_deps(deps2, tasks, 1), content="false")
}

///|
test "has_unresolved_deps empty deps" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "A",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  inspect(@shared.has_unresolved_deps([], tasks, 1), content="false")
}

///|
test "has_unresolved_deps dep on nonexistent task" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1,
      title: "A",
      description: "",
      status: "todo",
      priority: "low",
      assignee_id: 0,
      due_date: "",
      created_at: "",
    },
  ]
  // Depends on task 99 which doesn't exist in task list
  let deps : Array[@shared.Dependency] = [{ task_id: 1, depends_on_id: 99 }]
  // Nonexistent dep is not found in tasks, so loop never finds a match -> false
  inspect(@shared.has_unresolved_deps(deps, tasks, 1), content="false")
}

///|
test "get_dependencies empty" {
  inspect(@shared.get_dependencies([], 1), content="[]")
}

///|
test "count_by_status empty" {
  let tasks : Array[@shared.Task] = []
  inspect(@shared.count_by_status(tasks, "todo"), content="0")
}

///|
test "search_matches description only" {
  let task : @shared.Task = {
    id: 1,
    title: "Generic task",
    description: "OAuth2 flow is broken",
    status: "todo",
    priority: "low",
    assignee_id: 0,
    due_date: "",
    created_at: "",
  }
  // Matches description but not title
  inspect(@shared.search_matches(task, "oauth"), content="true")
  inspect(@shared.search_matches(task, "generic"), content="true")
  inspect(@shared.search_matches(task, "BROKEN"), content="true")
  inspect(@shared.search_matches(task, "xyz"), content="false")
}

///|
test "urgency_label boundary: day after today" {
  inspect(@shared.urgency_label("2026-03-13", "2026-03-12"), content="Upcoming")
}

///|
test "is_overdue empty string" {
  inspect(@shared.is_overdue("", ""), content="false")
}

///|
test "find_member empty list" {
  let members : Array[@shared.Member] = []
  assert_true(@shared.find_member(members, 1) is None)
}

///|
test "tasks_for_member empty list" {
  let tasks : Array[@shared.Task] = []
  inspect(@shared.tasks_for_member(tasks, 1).length(), content="0")
}

///|
test "tasks_to_csv basic output" {
  let tasks : Array[@shared.Task] = [
    {
      id: 1, title: "Fix bug", description: "Critical issue",
      status: "todo", priority: "high", assignee_id: 1,
      due_date: "2026-03-15", created_at: "2026-03-12",
    },
    {
      id: 2, title: "Add, feature", description: "Has \"quotes\"",
      status: "done", priority: "low", assignee_id: 0,
      due_date: "", created_at: "2026-03-13",
    },
  ]
  let members : Array[@shared.Member] = [
    { id: 1, name: "Alice", color: "blue" },
  ]
  let csv = @shared.tasks_to_csv(tasks, members)
  // Header
  assert_true(csv.contains("id,title,description,status,priority,assignee,due_date,created_at"))
  // First task with assignee
  assert_true(csv.contains("Fix bug"))
  assert_true(csv.contains("Alice"))
  // Second task: title with comma should be quoted
  assert_true(csv.contains("\"Add, feature\""))
  // Description with quotes should be escaped (double-quoted)
  assert_true(csv.contains("Has"))
}

///|
test "tasks_to_csv empty tasks" {
  let tasks : Array[@shared.Task] = []
  let members : Array[@shared.Member] = []
  let csv = @shared.tasks_to_csv(tasks, members)
  // Should only have header
  inspect(csv, content="id,title,description,status,priority,assignee,due_date,created_at")
}

///|
test "labels_for_task returns matching labels" {
  let labels : Array[@shared.Label] = [
    { id: 1, name: "bug", color: "#ef4444" },
    { id: 2, name: "feature", color: "#3b82f6" },
    { id: 3, name: "docs", color: "#22c55e" },
  ]
  let task_labels : Array[@shared.TaskLabel] = [
    { task_id: 10, label_id: 1 },
    { task_id: 10, label_id: 3 },
    { task_id: 20, label_id: 2 },
  ]
  let result = @shared.labels_for_task(labels, task_labels, 10)
  inspect(result.length(), content="2")
  inspect(result[0].name, content="bug")
  inspect(result[1].name, content="docs")
  // Task with no labels
  inspect(@shared.labels_for_task(labels, task_labels, 99).length(), content="0")
  // Empty inputs
  let empty_tl : Array[@shared.TaskLabel] = []
  inspect(@shared.labels_for_task(labels, empty_tl, 10).length(), content="0")
}

///|
test "activities_for_task filters by task_id" {
  let acts : Array[@shared.Activity] = [
    {
      id: 1, task_id: 10, task_title: "A", from_status: "todo",
      to_status: "in_progress", timestamp: "2026-03-12", user_name: "Alice",
    },
    {
      id: 2, task_id: 20, task_title: "B", from_status: "todo",
      to_status: "done", timestamp: "2026-03-12", user_name: "Bob",
    },
    {
      id: 3, task_id: 10, task_title: "A", from_status: "in_progress",
      to_status: "review", timestamp: "2026-03-13", user_name: "Alice",
    },
  ]
  let result = @shared.activities_for_task(acts, 10)
  inspect(result.length(), content="2")
  inspect(result[0].id, content="1")
  inspect(result[1].id, content="3")
  // Non-existent task returns empty
  inspect(@shared.activities_for_task(acts, 99).length(), content="0")
  // Empty input returns empty
  let empty : Array[@shared.Activity] = []
  inspect(@shared.activities_for_task(empty, 10).length(), content="0")
}

///|
test "subtasks_for_task filters by task_id" {
  let subs : Array[@shared.Subtask] = [
    { id: 1, task_id: 10, title: "Write tests", done: false },
    { id: 2, task_id: 20, title: "Deploy", done: true },
    { id: 3, task_id: 10, title: "Code review", done: true },
  ]
  let result = @shared.subtasks_for_task(subs, 10)
  inspect(result.length(), content="2")
  inspect(result[0].title, content="Write tests")
  inspect(result[1].title, content="Code review")
  // Non-existent task returns empty
  inspect(@shared.subtasks_for_task(subs, 99).length(), content="0")
}

///|
test "extract_mentions finds @usernames" {
  let m1 = @shared.extract_mentions("Hey @alice check this")
  inspect(m1.length(), content="1")
  inspect(m1[0], content="alice")
  // Multiple mentions, deduplication
  let m2 = @shared.extract_mentions("@bob @alice @bob")
  inspect(m2.length(), content="2")
  inspect(m2[0], content="bob")
  inspect(m2[1], content="alice")
  // No mentions
  inspect(@shared.extract_mentions("no mentions here").length(), content="0")
  // @ at start of text
  let m3 = @shared.extract_mentions("@admin please review")
  inspect(m3[0], content="admin")
  // Email-like patterns are not mentions (no space before @)
  inspect(@shared.extract_mentions("user@example.com").length(), content="0")
}

///|
test "get_recurrence returns interval or empty" {
  let rules : Array[@shared.RecurrenceRule] = [
    { task_id: 10, interval: "weekly" },
    { task_id: 20, interval: "daily" },
  ]
  inspect(@shared.get_recurrence(rules, 10), content="weekly")
  inspect(@shared.get_recurrence(rules, 20), content="daily")
  inspect(@shared.get_recurrence(rules, 99), content="")
  let empty : Array[@shared.RecurrenceRule] = []
  inspect(@shared.get_recurrence(empty, 10), content="")
}

///|
test "recurrence_label formats intervals" {
  inspect(@shared.recurrence_label("daily"), content="Daily")
  inspect(@shared.recurrence_label("weekly"), content="Weekly")
  inspect(@shared.recurrence_label("monthly"), content="Monthly")
}

///|
test "total_time sums minutes for task" {
  let entries : Array[@shared.TimeEntry] = [
    { id: 1, task_id: 10, minutes: 30, note: "coding", created_at: "" },
    { id: 2, task_id: 20, minutes: 15, note: "", created_at: "" },
    { id: 3, task_id: 10, minutes: 45, note: "review", created_at: "" },
  ]
  inspect(@shared.total_time(entries, 10), content="75")
  inspect(@shared.total_time(entries, 20), content="15")
  inspect(@shared.total_time(entries, 99), content="0")
}

///|
test "format_duration converts minutes to human string" {
  inspect(@shared.format_duration(0), content="0m")
  inspect(@shared.format_duration(45), content="45m")
  inspect(@shared.format_duration(90), content="1h 30m")
  inspect(@shared.format_duration(120), content="2h 0m")
}

///|
test "subtask_progress counts done vs total" {
  let subs : Array[@shared.Subtask] = [
    { id: 1, task_id: 10, title: "A", done: false },
    { id: 2, task_id: 10, title: "B", done: true },
    { id: 3, task_id: 10, title: "C", done: true },
    { id: 4, task_id: 20, title: "D", done: false },
  ]
  inspect(@shared.subtask_progress(subs, 10), content="(2, 3)")
  inspect(@shared.subtask_progress(subs, 20), content="(0, 1)")
  inspect(@shared.subtask_progress(subs, 99), content="(0, 0)")
}

///|
test "attachments_for_task filters by task_id" {
  let atts : Array[@shared.Attachment] = [
    { id: 1, task_id: 10, url: "https://example.com", label: "Docs" },
    { id: 2, task_id: 20, url: "https://other.com", label: "" },
    { id: 3, task_id: 10, url: "https://design.com", label: "Design" },
  ]
  let result = @shared.attachments_for_task(atts, 10)
  inspect(result.length(), content="2")
  inspect(result[0].label, content="Docs")
  inspect(@shared.attachment_count(atts, 10), content="2")
  inspect(@shared.attachment_count(atts, 99), content="0")
}

///|
test "count_overdue counts incomplete overdue tasks" {
  let tasks : Array[@shared.Task] = [
    { id: 1, title: "A", description: "", status: "todo", priority: "low", assignee_id: 0, due_date: "2024-01-01", created_at: "" },
    { id: 2, title: "B", description: "", status: "done", priority: "low", assignee_id: 0, due_date: "2024-01-01", created_at: "" },
    { id: 3, title: "C", description: "", status: "todo", priority: "low", assignee_id: 0, due_date: "2024-06-01", created_at: "" },
    { id: 4, title: "D", description: "", status: "in_progress", priority: "low", assignee_id: 0, due_date: "", created_at: "" },
  ]
  inspect(@shared.count_overdue(tasks, "2024-03-01"), content="1")
  inspect(@shared.count_overdue(tasks, "2020-01-01"), content="0")
}

///|
test "count_due_today counts today's incomplete tasks" {
  let tasks : Array[@shared.Task] = [
    { id: 1, title: "A", description: "", status: "todo", priority: "low", assignee_id: 0, due_date: "2024-03-01", created_at: "" },
    { id: 2, title: "B", description: "", status: "done", priority: "low", assignee_id: 0, due_date: "2024-03-01", created_at: "" },
    { id: 3, title: "C", description: "", status: "in_progress", priority: "low", assignee_id: 0, due_date: "2024-03-01", created_at: "" },
  ]
  inspect(@shared.count_due_today(tasks, "2024-03-01"), content="2")
  inspect(@shared.count_due_today(tasks, "2024-03-02"), content="0")
}

///|
test "can_edit checks role permissions" {
  assert_true(@shared.can_edit("admin"))
  assert_true(@shared.can_edit("member"))
  assert_false(@shared.can_edit("viewer"))
  assert_false(@shared.can_edit(""))
}

///|
test "is_admin checks admin role" {
  assert_true(@shared.is_admin("admin"))
  assert_false(@shared.is_admin("member"))
  assert_false(@shared.is_admin("viewer"))
}

///|
test "t_undo_status formats undo message" {
  inspect(
    @shared.t_undo_status(@shared.Lang::En, "todo", "in_progress"),
    content="To Do → In Progress. Click Undo to revert.",
  )
  inspect(
    @shared.t_undo_status(@shared.Lang::Zh, "todo", "done"),
    content="待办 → 完成，点击撤销",
  )
}

///|
test "project_for_task finds project ID" {
  let tps : Array[@shared.TaskProject] = [
    { task_id: 1, project_id: 10 },
    { task_id: 2, project_id: 20 },
  ]
  inspect(@shared.project_for_task(tps, 1), content="10")
  inspect(@shared.project_for_task(tps, 2), content="20")
  inspect(@shared.project_for_task(tps, 99), content="0")
}

///|
test "find_project by ID" {
  let projects : Array[@shared.Project] = [
    { id: 1, name: "Alpha", color: "#3b82f6" },
    { id: 2, name: "Beta", color: "#22c55e" },
  ]
  inspect(@shared.find_project(projects, 1).unwrap().name, content="Alpha")
  inspect(@shared.find_project(projects, 2).unwrap().name, content="Beta")
  assert_true(@shared.find_project(projects, 99) is None)
}

///|
test "tasks_in_project filters by project" {
  let tasks : Array[@shared.Task] = [
    { id: 1, title: "A", description: "", status: "todo", priority: "low", assignee_id: 0, due_date: "", created_at: "" },
    { id: 2, title: "B", description: "", status: "todo", priority: "low", assignee_id: 0, due_date: "", created_at: "" },
    { id: 3, title: "C", description: "", status: "todo", priority: "low", assignee_id: 0, due_date: "", created_at: "" },
  ]
  let tps : Array[@shared.TaskProject] = [
    { task_id: 1, project_id: 10 },
    { task_id: 3, project_id: 10 },
  ]
  // Filter by project 10 → tasks 1 and 3
  let filtered = @shared.tasks_in_project(tasks, tps, 10)
  inspect(filtered.length(), content="2")
  inspect(filtered[0].id, content="1")
  inspect(filtered[1].id, content="3")
  // project_id 0 returns all tasks
  inspect(@shared.tasks_in_project(tasks, tps, 0).length(), content="3")
  // Nonexistent project returns empty
  inspect(@shared.tasks_in_project(tasks, tps, 99).length(), content="0")
}
