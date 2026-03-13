///|
/// Supported UI languages.
pub(all) enum Lang {
  En
  Zh
} derive(Eq, Show, ToJson, FromJson)

///|
/// Translate a UI string key to the current language.
pub fn t(lang : Lang, key : String) -> String {
  match (lang, key) {
    // App
    (Zh, "app_title") => "任务流"
    (_, "app_title") => "TaskFlow"
    // Auth
    (Zh, "sign_in") => "登录"
    (_, "sign_in") => "Sign In"
    (Zh, "create_account") => "创建账户"
    (_, "create_account") => "Create Account"
    (Zh, "register") => "注册"
    (_, "register") => "Register"
    (Zh, "username") => "用户名"
    (_, "username") => "Username"
    (Zh, "password") => "密码"
    (_, "password") => "Password"
    (Zh, "enter_username") => "请输入用户名"
    (_, "enter_username") => "Enter username"
    (Zh, "enter_password") => "请输入密码"
    (_, "enter_password") => "Enter password"
    (Zh, "need_account") => "没有账户？点此注册"
    (_, "need_account") => "Need an account? Register"
    (Zh, "have_account") => "已有账户？点此登录"
    (_, "have_account") => "Already have an account? Sign In"
    (Zh, "fill_all_fields") => "请填写所有字段"
    (_, "fill_all_fields") => "Please fill in all fields"
    (Zh, "invalid_credentials") => "用户名或密码错误"
    (_, "invalid_credentials") => "Invalid username or password"
    (Zh, "registration_failed") => "注册失败"
    (_, "registration_failed") => "Registration failed"
    (Zh, "username_hint") => "用户名：3-30个字母、数字或下划线"
    (_, "username_hint") => "Username: 3-30 alphanumeric or underscore characters"
    (Zh, "password_hint") => "密码：4-100个字符"
    (_, "password_hint") => "Password: 4-100 characters"
    (Zh, "logout") => "退出登录"
    (_, "logout") => "Logout"
    // Navigation
    (Zh, "list") => "列表"
    (_, "list") => "List"
    (Zh, "board") => "看板"
    (_, "board") => "Board"
    (Zh, "my_tasks") => "我的任务"
    (_, "my_tasks") => "My Tasks"
    (Zh, "light") => "日间"
    (_, "light") => "Light"
    (Zh, "dark") => "夜间"
    (_, "dark") => "Dark"
    (Zh, "new_task") => "+ 新建任务"
    (_, "new_task") => "+ New Task"
    // Filters
    (Zh, "sort") => "排序："
    (_, "sort") => "Sort:"
    (Zh, "sort_priority") => "优先级"
    (_, "sort_priority") => "Priority"
    (Zh, "sort_due_date") => "截止日期"
    (_, "sort_due_date") => "Due Date"
    (Zh, "sort_title") => "标题"
    (_, "sort_title") => "Title"
    (Zh, "sort_created_at") => "创建时间"
    (_, "sort_created_at") => "Created"
    (Zh, "search") => "搜索："
    (_, "search") => "Search:"
    (Zh, "search_placeholder") => "搜索任务..."
    (_, "search_placeholder") => "Filter tasks..."
    (Zh, "status") => "状态："
    (_, "status") => "Status:"
    (Zh, "priority_filter") => "优先级："
    (_, "priority_filter") => "Priority:"
    (Zh, "assignee_filter") => "负责人："
    (_, "assignee_filter") => "Assignee:"
    (Zh, "due_filter") => "截止："
    (_, "due_filter") => "Due:"
    (Zh, "all") => "全部"
    (_, "all") => "All"
    (Zh, "overdue") => "已逾期"
    (_, "overdue") => "Overdue"
    (Zh, "today") => "今天"
    (_, "today") => "Today"
    (Zh, "has_due") => "有截止"
    (_, "has_due") => "Has Due"
    (Zh, "no_due") => "无截止"
    (_, "no_due") => "No Due"
    // Task form
    (Zh, "new_task_title") => "新建任务"
    (_, "new_task_title") => "New Task"
    (Zh, "task_title_placeholder") => "任务标题"
    (_, "task_title_placeholder") => "Task title"
    (Zh, "desc_placeholder") => "描述（可选）"
    (_, "desc_placeholder") => "Description (optional)"
    (Zh, "priority") => "优先级"
    (_, "priority") => "Priority"
    (Zh, "assignee") => "负责人"
    (_, "assignee") => "Assignee"
    (Zh, "due_date") => "截止日期"
    (_, "due_date") => "Due Date"
    (Zh, "create_task") => "创建任务"
    (_, "create_task") => "Create Task"
    (Zh, "cancel") => "取消"
    (_, "cancel") => "Cancel"
    (Zh, "save") => "保存"
    (_, "save") => "Save"
    // Task actions
    (Zh, "notes") => "备注"
    (_, "notes") => "Notes"
    (Zh, "edit") => "编辑"
    (_, "edit") => "Edit"
    (Zh, "del") => "删除"
    (_, "del") => "Del"
    (Zh, "blocked_by") => "被阻塞"
    (_, "blocked_by") => "Blocked by"
    (Zh, "depends_done") => "依赖（已完成）"
    (_, "depends_done") => "Depends on (done)"
    (Zh, "no_tasks") => "暂无任务"
    (_, "no_tasks") => "No tasks"
    // Activity
    (Zh, "recent_activity") => "最近动态"
    (_, "recent_activity") => "Recent Activity"
    (Zh, "created") => "创建"
    (_, "created") => "Created"
    // Delete confirmation
    (Zh, "delete_task") => "确认删除任务？"
    (_, "delete_task") => "Delete Task?"
    (Zh, "delete") => "删除"
    (_, "delete") => "Delete"
    // Comments panel
    (Zh, "add_note_placeholder") => "添加备注..."
    (_, "add_note_placeholder") => "Add a note..."
    (Zh, "add") => "添加"
    (_, "add") => "Add"
    (Zh, "no_notes") => "暂无备注"
    (_, "no_notes") => "No notes yet"
    (Zh, "dependencies") => "依赖关系"
    (_, "dependencies") => "Dependencies"
    (Zh, "no_dependencies") => "暂无依赖"
    (_, "no_dependencies") => "No dependencies"
    (Zh, "add_dependency") => "添加依赖："
    (_, "add_dependency") => "Add dependency:"
    // Task history
    (Zh, "history") => "历史记录"
    (_, "history") => "History"
    (Zh, "no_history") => "暂无历史"
    (_, "no_history") => "No history"
    // Status
    (Zh, "loading") => "加载中..."
    (_, "loading") => "Loading..."
    (Zh, "no_matches") => "没有匹配的任务"
    (_, "no_matches") => "No tasks match your filters"
    (Zh, "not_logged_in") => "未登录"
    (_, "not_logged_in") => "Not logged in"
    // Keyboard hints
    (Zh, "keyboard_hints") => "n: 新建 | l: 列表 | b: 看板 | d: 主题 | Esc: 关闭"
    (_, "keyboard_hints") =>
      "n: new task | l: list | b: board | d: dark mode | Esc: close"
    // Fallback
    (_, k) => k
  }
}

///|
/// Format completion percentage string.
pub fn t_complete(lang : Lang, pct : Int) -> String {
  match lang {
    Zh => "\{pct}% 已完成"
    En => "\{pct}% complete"
  }
}

///|
/// Format tasks done count string.
pub fn t_tasks_done(lang : Lang, done : Int, total : Int) -> String {
  match lang {
    Zh => "\{done}/\{total} 已完成"
    En => "\{done}/\{total} tasks done"
  }
}

///|
/// Translate status labels.
pub fn t_status(lang : Lang, status : String) -> String {
  match (lang, status) {
    (Zh, "todo") => "待办"
    (Zh, "in_progress") => "进行中"
    (Zh, "review") => "审核"
    (Zh, "done") => "完成"
    (Zh, "blocked") => "阻塞"
    (En, _) => status_label(status)
    (_, _) => status_label(status)
  }
}

///|
/// Translate priority labels.
pub fn t_priority(lang : Lang, priority : String) -> String {
  match (lang, priority) {
    (Zh, "low") => "低"
    (Zh, "medium") => "中"
    (Zh, "high") => "高"
    (Zh, "urgent") => "紧急"
    (En, _) => priority_label(priority)
    (_, _) => priority_label(priority)
  }
}

///|
/// Translate transition button labels.
pub fn t_transition(lang : Lang, from : String, to : String) -> String {
  match (lang, from, to) {
    (Zh, "todo", "in_progress") => "开始"
    (Zh, "todo", "blocked") => "阻塞"
    (Zh, "in_progress", "review") => "提交审核"
    (Zh, "in_progress", "blocked") => "阻塞"
    (Zh, "in_progress", "todo") => "暂停"
    (Zh, "review", "done") => "通过"
    (Zh, "review", "in_progress") => "返工"
    (Zh, "blocked", "todo") => "解除阻塞"
    (Zh, "blocked", "in_progress") => "恢复"
    (Zh, "done", "todo") => "重新打开"
    (En, _, _) => transition_label(from, to)
    (_, _, _) => transition_label(from, to)
  }
}

///|
/// Translate urgency labels.
pub fn t_urgency(lang : Lang, due_date : String, today : String) -> String {
  match lang {
    Zh =>
      if due_date == "" {
        "无截止日期"
      } else if due_date < today {
        "已逾期"
      } else if due_date == today {
        "今日到期"
      } else {
        "即将到期"
      }
    En => urgency_label(due_date, today)
  }
}

///|
/// Format an activity entry with translation.
pub fn t_activity(lang : Lang, act : Activity) -> String {
  let from = t_status(lang, act.from_status)
  let to = t_status(lang, act.to_status)
  if act.user_name != "" {
    "\{act.user_name}: \{act.task_title}: \{from} → \{to}"
  } else {
    "\{act.task_title}: \{from} → \{to}"
  }
}

///|
/// Translate known backend error messages to the current language.
pub fn t_server_error(lang : Lang, msg : String) -> String {
  match (lang, msg) {
    (Zh, "Missing username") => "缺少用户名"
    (Zh, "Missing password") => "缺少密码"
    (Zh, "Username must be 3-30 alphanumeric characters or underscores") =>
      "用户名：3-30个字母、数字或下划线"
    (Zh, "Password must be 4-100 characters") => "密码：4-100个字符"
    (Zh, "Username already taken") => "用户名已被使用"
    (Zh, "Invalid username or password") => "用户名或密码错误"
    (_, _) => t(lang, msg)
  }
}
