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
test "format_activity" {
  let act : @shared.Activity = {
    id: 1,
    task_id: 1,
    task_title: "Deploy v2",
    from_status: "review",
    to_status: "done",
    timestamp: "2026-03-12",
  }
  inspect(@shared.format_activity(act), content="Deploy v2: Review → Done")
}

///|
test "format_activity created" {
  let act : @shared.Activity = {
    id: 1,
    task_id: 1,
    task_title: "New task",
    from_status: "",
    to_status: "todo",
    timestamp: "2026-03-12",
  }
  inspect(@shared.format_activity(act), content="New task:  → To Do")
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
