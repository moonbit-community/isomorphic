# TaskFlow Shared Package

Isomorphic types, status transitions, validation, and task logic shared between
the TaskFlow frontend (JS) and backend (native).

## Types

All domain types derive `ToJson`, `FromJson`, and `Eq` for seamless
serialization and comparison:

```mbt check
///|
test {
  let task : @shared.Task = {
    id: 1,
    title: "Implement login",
    description: "OAuth2 flow",
    status: "in_progress",
    priority: "high",
    assignee_id: 2,
    due_date: "2026-03-15",
    created_at: "2026-03-10",
  }
  let decoded : @shared.Task = @json.from_json(task.to_json())
  assert_eq(decoded, task)
}
```

## Status Transitions

The key isomorphic feature: status transition rules are defined once and
enforced on both frontend (valid buttons) and backend (request validation):

```mbt check
///|
test {
  // Valid transitions from each status
  inspect(
    @shared.allowed_transitions("todo"),
    content="[\"in_progress\", \"blocked\"]",
  )
  inspect(
    @shared.allowed_transitions("in_progress"),
    content="[\"review\", \"blocked\", \"todo\"]",
  )
  inspect(
    @shared.allowed_transitions("review"),
    content="[\"done\", \"in_progress\"]",
  )
  inspect(@shared.allowed_transitions("done"), content="[\"todo\"]")

  // Transition validation
  inspect(@shared.is_valid_transition("todo", "in_progress"), content="true")
  inspect(@shared.is_valid_transition("todo", "done"), content="false")

  // Human-readable transition labels
  inspect(@shared.transition_label("todo", "in_progress"), content="Start")
  inspect(@shared.transition_label("review", "done"), content="Approve")
}
```

## Priority & Sorting

Tasks sort by priority (urgent first), then due date (earliest first):

```mbt check
///|
test {
  inspect(@shared.priority_weight("urgent"), content="0")
  inspect(@shared.priority_weight("low"), content="3")
  inspect(@shared.priority_label("high"), content="High")
  inspect(@shared.priority_color("urgent"), content="#ef4444")
}
```

## Deadline Detection

Overdue and urgency labels computed from due date and today's date:

```mbt check
///|
test {
  inspect(@shared.is_overdue("2026-03-01", "2026-03-12"), content="true")
  inspect(@shared.is_overdue("2026-03-15", "2026-03-12"), content="false")
  inspect(@shared.urgency_label("2026-03-01", "2026-03-12"), content="Overdue")
  inspect(
    @shared.urgency_label("2026-03-12", "2026-03-12"),
    content="Due today",
  )
  inspect(@shared.urgency_label("2026-03-15", "2026-03-12"), content="Upcoming")
  inspect(@shared.urgency_label("", "2026-03-12"), content="No deadline")
}
```

## Progress Tracking

Completion percentage and status counts:

```mbt check
///|
test {
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
  inspect(@shared.count_by_status(tasks, "done"), content="1")
  inspect(@shared.count_by_status(tasks, "todo"), content="1")
}
```

## Validation

Shared rules enforced on both client and server:

```mbt check
///|
test {
  inspect(@shared.max_task_title, content="100")
  inspect(@shared.max_tasks, content="100")
  inspect(@shared.validate_task_title("Fix bug"), content="true")
  inspect(@shared.validate_task_title(""), content="false")
  inspect(@shared.validate_status("todo"), content="true")
  inspect(@shared.validate_status("invalid"), content="false")
  inspect(@shared.validate_priority("high"), content="true")
  inspect(@shared.validate_due_date("2026-03-12"), content="true")
  inspect(@shared.validate_due_date(""), content="true")
}
```

## Routes

API paths defined once, used by both HTTP client and server:

```mbt check
///|
test {
  inspect(@shared.api_board, content="/api/board")
  inspect(@shared.api_tasks, content="/api/tasks")
  inspect(@shared.api_task(42), content="/api/tasks/42")
  inspect(@shared.api_task_status(7), content="/api/tasks/7/status")
  inspect(@shared.api_members, content="/api/members")
}
```

## Member Helpers

```mbt check
///|
test {
  inspect(@shared.member_color("blue"), content="#3b82f6")
  inspect(@shared.member_initial("Alice"), content="A")
  let members : Array[@shared.Member] = [
    { id: 1, name: "Alice", color: "blue" },
  ]
  let found = @shared.find_member(members, 1)
  inspect(found.unwrap().name, content="Alice")
}
```
