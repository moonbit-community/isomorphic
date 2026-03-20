///|
/// Base URL for the backend server.
let base_url : String = "http://localhost:4006"

///|
/// Session cookie value, set after login/register.
let session_cookie : Ref[String] = Ref::new("")

///|
/// Test counter for pass/fail tracking.
let tests_passed : Ref[Int] = Ref::new(0)

///|
let tests_failed : Ref[Int] = Ref::new(0)

///|
/// Build headers with session cookie if available.
fn auth_headers() -> Map[String, String] {
  let headers : Map[String, String] = { "Content-Type": "application/json" }
  if session_cookie.val != "" {
    headers["Cookie"] = "session=\{session_cookie.val}"
  }
  headers
}

///|
/// Extract session cookie from response Set-Cookie header.
fn extract_session_cookie(resp : @mocket.HttpResponse) -> Unit {
  for k, v in resp.headers {
    if k.to_string().to_lower() == "set-cookie" {
      let cookie_str = v.to_string()
      // Parse "session=<value>; ..." format
      match cookie_str.strip_prefix("session=") {
        Some(rest) => {
          let rest_str = rest.to_string()
          let value = match rest_str.before(";") {
            Some(v) => v.to_string()
            None => rest_str
          }
          if value != "" {
            session_cookie.val = value
          }
        }
        None => ()
      }
    }
  }
}

///|
/// Assert a condition and print result.
fn assert_test(name : String, condition : Bool, detail? : String = "") -> Unit {
  if condition {
    tests_passed.val += 1
    println("  PASS: \{name}")
  } else {
    tests_failed.val += 1
    let msg = if detail != "" { " (\{detail})" } else { "" }
    println("  FAIL: \{name}\{msg}")
  }
}

///|
/// POST JSON and return response.
async fn post_json(path : String, body : Json) -> @mocket.HttpResponse {
  @fetch.post("\{base_url}\{path}", data=body, headers=auth_headers())
}

///|
/// GET and return response.
async fn get_json(path : String) -> @mocket.HttpResponse {
  @fetch.get("\{base_url}\{path}", headers=auth_headers())
}

///|
/// DELETE and return response.
async fn delete_req(path : String) -> @mocket.HttpResponse {
  @fetch.delete("\{base_url}\{path}", headers=auth_headers())
}

// ========== Test Suites ==========

///|
/// Test 1: Register a new user.
async fn test_register() -> Unit {
  println("\n--- Test: Register ---")
  let resp = post_json(@shared.api_register, {
    "username": "testuser",
    "password": "testpass",
  })
  let status = resp.status_code.to_int()
  assert_test("register status 201", status == 201, detail="\{status}")
  extract_session_cookie(resp)
  assert_test("session cookie set", session_cookie.val != "")
  let body : Json = resp.read_body()
  match body {
    { "user": { "username": String(u), .. }, "message": String(_), .. } =>
      assert_test("response has user", u == "testuser", detail=u)
    _ => assert_test("response has user", false, detail="unexpected JSON")
  }
}

///|
/// Test 2: Check /api/auth/me with session.
async fn test_me() -> Unit {
  println("\n--- Test: Get Current User ---")
  let resp = get_json(@shared.api_me)
  let status = resp.status_code.to_int()
  assert_test("me status 200", status == 200, detail="\{status}")
  let body : Json = resp.read_body()
  match body {
    { "username": String(u), .. } =>
      assert_test("me returns testuser", u == "testuser", detail=u)
    _ => assert_test("me returns testuser", false, detail="unexpected JSON")
  }
}

///|
/// Test 3: Register duplicate user should fail.
async fn test_register_duplicate() -> Unit {
  println("\n--- Test: Register Duplicate ---")
  let resp = post_json(@shared.api_register, {
    "username": "testuser",
    "password": "otherpass",
  })
  let status = resp.status_code.to_int()
  assert_test(
    "duplicate register status 409",
    status == 409,
    detail="\{status}",
  )
}

///|
/// Test 4: Login with wrong password.
async fn test_login_bad_password() -> Unit {
  println("\n--- Test: Login Bad Password ---")
  let resp = post_json(@shared.api_login, {
    "username": "testuser",
    "password": "wrongpass",
  })
  let status = resp.status_code.to_int()
  assert_test("bad login status 401", status == 401, detail="\{status}")
}

///|
/// Test 5: Login with correct credentials.
async fn test_login() -> Unit {
  println("\n--- Test: Login ---")
  let resp = post_json(@shared.api_login, {
    "username": "testuser",
    "password": "testpass",
  })
  let status = resp.status_code.to_int()
  assert_test("login status 200", status == 200, detail="\{status}")
  extract_session_cookie(resp)
  assert_test("login sets session cookie", session_cookie.val != "")
}

///|
/// Test 6: Create a task.
async fn test_create_task() -> @shared.Task {
  println("\n--- Test: Create Task ---")
  let resp = post_json(@shared.api_tasks, {
    "title": "CLI Test Task",
    "description": "Created by CLI test client",
    "priority": "high",
    "due_date": "2026-04-01",
  })
  let status = resp.status_code.to_int()
  assert_test("create task status 201", status == 201, detail="\{status}")
  let body : Json = resp.read_body()
  let task : @shared.Task = @json.from_json(body)
  assert_test("task title", task.title == "CLI Test Task")
  assert_test("task priority", task.priority == "high")
  assert_test("task status is todo", task.status == "todo")
  assert_test("task due_date", task.due_date == "2026-04-01")
  task
}

///|
/// Test 7: Create task with validation errors.
async fn test_create_task_validation() -> Unit {
  println("\n--- Test: Create Task Validation ---")
  // Empty title
  let resp = post_json(@shared.api_tasks, { "title": "" })
  let status = resp.status_code.to_int()
  assert_test("empty title rejected", status == 400, detail="\{status}")
  // Invalid priority
  let resp2 = post_json(@shared.api_tasks, {
    "title": "Test",
    "priority": "invalid",
  })
  let status2 = resp2.status_code.to_int()
  assert_test("invalid priority rejected", status2 == 400, detail="\{status2}")
  // Invalid due date
  let resp3 = post_json(@shared.api_tasks, {
    "title": "Test",
    "due_date": "not-a-date",
  })
  let status3 = resp3.status_code.to_int()
  assert_test("invalid due date rejected", status3 == 400, detail="\{status3}")
}

///|
/// Test 8: Update task status with transition validation.
async fn test_status_transitions(task_id : Int) -> Unit {
  println("\n--- Test: Status Transitions ---")
  // Valid: todo -> in_progress
  let resp = post_json(@shared.api_task_status(task_id), {
    "status": "in_progress",
  })
  let status = resp.status_code.to_int()
  assert_test("todo -> in_progress (200)", status == 200, detail="\{status}")
  // Invalid: in_progress -> done (must go through review)
  let resp2 = post_json(@shared.api_task_status(task_id), { "status": "done" })
  let status2 = resp2.status_code.to_int()
  assert_test(
    "in_progress -> done rejected (400)",
    status2 == 400,
    detail="\{status2}",
  )
  // Valid: in_progress -> review
  let resp3 = post_json(@shared.api_task_status(task_id), { "status": "review" })
  let status3 = resp3.status_code.to_int()
  assert_test(
    "in_progress -> review (200)",
    status3 == 200,
    detail="\{status3}",
  )
  // Valid: review -> done
  let resp4 = post_json(@shared.api_task_status(task_id), { "status": "done" })
  let status4 = resp4.status_code.to_int()
  assert_test("review -> done (200)", status4 == 200, detail="\{status4}")
}

///|
/// Test 9: Add and fetch comments.
async fn test_comments(task_id : Int) -> Unit {
  println("\n--- Test: Comments ---")
  // Add a comment
  let resp = post_json(@shared.api_task_comments(task_id), {
    "text": "This is a test comment",
  })
  let status = resp.status_code.to_int()
  assert_test("add comment status 201", status == 201, detail="\{status}")
  let body : Json = resp.read_body()
  let comment : @shared.Comment = @json.from_json(body)
  assert_test("comment text", comment.text == "This is a test comment")
  assert_test(
    "comment author is testuser",
    comment.author == "testuser",
    detail=comment.author,
  )
  // Fetch comments
  let resp2 = get_json(@shared.api_task_comments(task_id))
  let status2 = resp2.status_code.to_int()
  assert_test("get comments status 200", status2 == 200, detail="\{status2}")
  let body2 : Json = resp2.read_body()
  let comments : Array[@shared.Comment] = @json.from_json(body2)
  assert_test(
    "comments list has 1",
    comments.length() == 1,
    detail="\{comments.length()}",
  )
  // Invalid comment (empty text)
  let resp3 = post_json(@shared.api_task_comments(task_id), { "text": "" })
  let status3 = resp3.status_code.to_int()
  assert_test("empty comment rejected", status3 == 400, detail="\{status3}")
}

///|
/// Test 10: Dependencies.
async fn test_dependencies(task_id : Int) -> Unit {
  println("\n--- Test: Dependencies ---")
  // Create a second task to depend on
  let resp = post_json(@shared.api_tasks, { "title": "Dependency Target" })
  let body : Json = resp.read_body()
  let target : @shared.Task = @json.from_json(body)
  // Add dependency
  let resp2 = post_json(@shared.api_task_deps(task_id), {
    "depends_on_id": target.id.to_double(),
  })
  let status2 = resp2.status_code.to_int()
  assert_test("add dep status 201", status2 == 201, detail="\{status2}")
  // Fetch deps
  let resp3 = get_json(@shared.api_task_deps(task_id))
  let status3 = resp3.status_code.to_int()
  assert_test("get deps status 200", status3 == 200, detail="\{status3}")
  let body3 : Json = resp3.read_body()
  let deps : Array[@shared.Dependency] = @json.from_json(body3)
  assert_test("deps list has 1", deps.length() >= 1, detail="\{deps.length()}")
  // Self-dependency should fail
  let resp4 = post_json(@shared.api_task_deps(task_id), {
    "depends_on_id": task_id.to_double(),
  })
  let status4 = resp4.status_code.to_int()
  assert_test("self-dep rejected (400)", status4 == 400, detail="\{status4}")
  // Remove dependency
  let resp5 = post_json(@shared.api_task_deps_remove(task_id), {
    "depends_on_id": target.id.to_double(),
  })
  let status5 = resp5.status_code.to_int()
  assert_test("remove dep status 200", status5 == 200, detail="\{status5}")
  // Cleanup: delete target task
  let resp6 = delete_req(@shared.api_task(target.id))
  assert_test("cleanup dep target", resp6.status_code.to_int() == 204)
}

///|
/// Test 11: Get full board.
async fn test_board() -> Unit {
  println("\n--- Test: Board ---")
  let resp = get_json(@shared.api_board)
  let status = resp.status_code.to_int()
  assert_test("board status 200", status == 200, detail="\{status}")
  let body : Json = resp.read_body()
  let board : @shared.Board = @json.from_json(body)
  assert_test("board has tasks", board.tasks.length() > 0)
  assert_test("board has members", board.members.length() > 0)
  assert_test("board has today", board.today != "")
  // Check activities include user name
  let mut found_user_activity = false
  for act in board.activities {
    if act.user_name == "testuser" {
      found_user_activity = true
      break
    }
  }
  assert_test("activities have user_name", found_user_activity)
}

///|
/// Test 12: Members list includes registered user.
async fn test_members() -> Unit {
  println("\n--- Test: Members ---")
  let resp = get_json(@shared.api_members)
  let status = resp.status_code.to_int()
  assert_test("members status 200", status == 200, detail="\{status}")
  let body : Json = resp.read_body()
  let members : Array[@shared.Member] = @json.from_json(body)
  let mut found = false
  for m in members {
    if m.name == "testuser" {
      found = true
    }
  }
  assert_test("members includes testuser", found)
}

///|
/// Test 13: Update a task.
async fn test_update_task(task_id : Int) -> Unit {
  println("\n--- Test: Update Task ---")
  // First reset to todo so we can test the update
  let _ = post_json(@shared.api_task_status(task_id), { "status": "todo" })
  let resp = post_json(@shared.api_task(task_id), {
    "title": "Updated Title",
    "description": "Updated description",
    "priority": "urgent",
    "due_date": "2026-05-01",
  })
  let status = resp.status_code.to_int()
  assert_test("update task status 200", status == 200, detail="\{status}")
  let body : Json = resp.read_body()
  let task : @shared.Task = @json.from_json(body)
  assert_test("updated title", task.title == "Updated Title")
  assert_test("updated priority", task.priority == "urgent")
  assert_test("updated due_date", task.due_date == "2026-05-01")
}

///|
/// Test 14: Delete a task.
async fn test_delete_task(task_id : Int) -> Unit {
  println("\n--- Test: Delete Task ---")
  let resp = delete_req(@shared.api_task(task_id))
  let status = resp.status_code.to_int()
  assert_test("delete task status 204", status == 204, detail="\{status}")
  // Verify it's gone
  let resp2 = get_json(@shared.api_task(task_id))
  let status2 = resp2.status_code.to_int()
  assert_test("deleted task returns 404", status2 == 404, detail="\{status2}")
}

///|
/// Test 15: Logout and verify session is cleared.
async fn test_logout() -> Unit {
  println("\n--- Test: Logout ---")
  let resp = post_json(@shared.api_logout, {})
  let status = resp.status_code.to_int()
  assert_test("logout status 200", status == 200, detail="\{status}")
  // /me should now fail
  let resp2 = get_json(@shared.api_me)
  let status2 = resp2.status_code.to_int()
  assert_test(
    "me after logout returns 401",
    status2 == 401,
    detail="\{status2}",
  )
}

///|
/// Test 16: Auth validation.
async fn test_auth_validation() -> Unit {
  println("\n--- Test: Auth Validation ---")
  // Username too short
  let resp = post_json(@shared.api_register, {
    "username": "ab",
    "password": "testpass",
  })
  assert_test(
    "short username rejected",
    resp.status_code.to_int() == 400,
    detail="\{resp.status_code.to_int()}",
  )
  // Password too short
  let resp2 = post_json(@shared.api_register, {
    "username": "validuser",
    "password": "abc",
  })
  assert_test(
    "short password rejected",
    resp2.status_code.to_int() == 400,
    detail="\{resp2.status_code.to_int()}",
  )
  // Missing fields
  let resp3 = post_json(@shared.api_login, { "username": "testuser" })
  assert_test(
    "missing password rejected",
    resp3.status_code.to_int() == 400,
    detail="\{resp3.status_code.to_int()}",
  )
}

///|
/// Test 17: Unauthenticated access still works for reading.
async fn test_unauthenticated_read() -> Unit {
  println("\n--- Test: Unauthenticated Read ---")
  // Clear session
  session_cookie.val = ""
  // Board should still be accessible
  let resp = get_json(@shared.api_board)
  let status = resp.status_code.to_int()
  assert_test("board without auth (200)", status == 200, detail="\{status}")
  // Members too
  let resp2 = get_json(@shared.api_members)
  let status2 = resp2.status_code.to_int()
  assert_test("members without auth (200)", status2 == 200, detail="\{status2}")
}

// ========== Main ==========

///|
async fn run_tests() -> Unit {
  println("=== TaskFlow CLI Test Client ===")
  println("Target: \{base_url}")
  // Auth tests
  test_register()
  test_me()
  test_register_duplicate()
  test_login_bad_password()
  test_login()
  test_auth_validation()
  // Task CRUD tests
  let task = test_create_task()
  test_create_task_validation()
  test_update_task(task.id)
  test_status_transitions(task.id)
  // Feature tests
  test_comments(task.id)
  test_dependencies(task.id)
  test_board()
  test_members()
  // Cleanup
  test_delete_task(task.id)
  test_logout()
  test_unauthenticated_read()
  // Summary
  let total = tests_passed.val + tests_failed.val
  println("\n=== Results: \{tests_passed.val}/\{total} passed ===")
  if tests_failed.val > 0 {
    println("FAILED: \{tests_failed.val} tests failed")
  } else {
    println("ALL TESTS PASSED")
  }
}

///|
async fn main {
  run_tests() catch {
    e => println("FATAL ERROR: \{e}")
  }
}
