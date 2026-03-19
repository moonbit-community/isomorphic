///|
test "allowed_transitions from todo" {
  inspect(
    @shared.allowed_transitions("todo"),
    content="[\"in_progress\", \"blocked\"]",
  )
}

///|
test "allowed_transitions from in_progress" {
  inspect(
    @shared.allowed_transitions("in_progress"),
    content="[\"review\", \"blocked\", \"todo\"]",
  )
}

///|
test "allowed_transitions from review" {
  inspect(
    @shared.allowed_transitions("review"),
    content="[\"done\", \"in_progress\"]",
  )
}

///|
test "allowed_transitions from blocked" {
  inspect(
    @shared.allowed_transitions("blocked"),
    content="[\"todo\", \"in_progress\"]",
  )
}

///|
test "allowed_transitions from done" {
  inspect(@shared.allowed_transitions("done"), content="[\"todo\"]")
}

///|
test "allowed_transitions from unknown" {
  inspect(@shared.allowed_transitions("invalid"), content="[]")
}

///|
test "is_valid_transition valid cases" {
  inspect(@shared.is_valid_transition("todo", "in_progress"), content="true")
  inspect(@shared.is_valid_transition("todo", "blocked"), content="true")
  inspect(@shared.is_valid_transition("in_progress", "review"), content="true")
  inspect(@shared.is_valid_transition("review", "done"), content="true")
  inspect(@shared.is_valid_transition("blocked", "todo"), content="true")
  inspect(@shared.is_valid_transition("done", "todo"), content="true")
}

///|
test "is_valid_transition invalid cases" {
  inspect(@shared.is_valid_transition("todo", "done"), content="false")
  inspect(@shared.is_valid_transition("todo", "review"), content="false")
  inspect(@shared.is_valid_transition("done", "in_progress"), content="false")
  inspect(@shared.is_valid_transition("done", "done"), content="false")
  inspect(@shared.is_valid_transition("review", "blocked"), content="false")
}

///|
test "is_terminal" {
  inspect(@shared.is_terminal("done"), content="true")
  inspect(@shared.is_terminal("todo"), content="false")
  inspect(@shared.is_terminal("in_progress"), content="false")
}

///|
test "status_label" {
  inspect(@shared.status_label("todo"), content="To Do")
  inspect(@shared.status_label("in_progress"), content="In Progress")
  inspect(@shared.status_label("review"), content="Review")
  inspect(@shared.status_label("done"), content="Done")
  inspect(@shared.status_label("blocked"), content="Blocked")
  inspect(@shared.status_label("unknown"), content="unknown")
}

///|
test "status_color" {
  inspect(@shared.status_color("todo"), content="#94a3b8")
  inspect(@shared.status_color("in_progress"), content="#3b82f6")
  inspect(@shared.status_color("done"), content="#22c55e")
  inspect(@shared.status_color("blocked"), content="#ef4444")
}

///|
test "transition_label" {
  inspect(@shared.transition_label("todo", "in_progress"), content="Start")
  inspect(@shared.transition_label("todo", "blocked"), content="Block")
  inspect(@shared.transition_label("in_progress", "review"), content="Review")
  inspect(@shared.transition_label("in_progress", "todo"), content="Pause")
  inspect(@shared.transition_label("review", "done"), content="Approve")
  inspect(@shared.transition_label("review", "in_progress"), content="Rework")
  inspect(@shared.transition_label("blocked", "todo"), content="Unblock")
  inspect(@shared.transition_label("blocked", "in_progress"), content="Resume")
  inspect(@shared.transition_label("done", "todo"), content="Reopen")
}

///|
test "transition completeness: every allowed transition has a label" {
  for s in @shared.valid_statuses {
    for t in @shared.allowed_transitions(s) {
      let label = @shared.transition_label(s, t)
      assert_true(label != "")
    }
  }
}

///|
test "status_color review" {
  inspect(@shared.status_color("review"), content="#eab308")
}

///|
test "status_color unknown fallback" {
  inspect(@shared.status_color("invalid"), content="#94a3b8")
  inspect(@shared.status_color(""), content="#94a3b8")
}

///|
test "transition_label unknown fallback uses status_label" {
  // Invalid transition falls back to status_label(to)
  inspect(@shared.transition_label("todo", "done"), content="Done")
  inspect(@shared.transition_label("", "todo"), content="To Do")
}

///|
test "is_valid_transition self-transition always invalid" {
  for s in @shared.valid_statuses {
    inspect(@shared.is_valid_transition(s, s), content="false")
  }
}

///|
test "is_terminal exhaustive" {
  inspect(@shared.is_terminal("todo"), content="false")
  inspect(@shared.is_terminal("in_progress"), content="false")
  inspect(@shared.is_terminal("review"), content="false")
  inspect(@shared.is_terminal("blocked"), content="false")
  inspect(@shared.is_terminal("done"), content="true")
  inspect(@shared.is_terminal("unknown"), content="false")
}

///|
test "allowed_transitions empty string" {
  inspect(@shared.allowed_transitions(""), content="[]")
}

///|
test "valid_statuses count" {
  inspect(@shared.valid_statuses.length(), content="5")
}

///|
test "transition graph: no status can reach itself in one step" {
  for s in @shared.valid_statuses {
    let targets = @shared.allowed_transitions(s)
    for t in targets {
      assert_true(t != s)
    }
  }
}

///|
test "transition graph: every non-terminal status has at least one forward transition" {
  for s in @shared.valid_statuses {
    if !(@shared.is_terminal(s)) {
      assert_true(@shared.allowed_transitions(s).length() > 0)
    }
  }
}

///|
test "transition_label in_progress to blocked" {
  inspect(@shared.transition_label("in_progress", "blocked"), content="Block")
}
