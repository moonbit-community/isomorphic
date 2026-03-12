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
