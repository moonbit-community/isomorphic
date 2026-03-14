///|
fn Model::view_tabs(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(
    style=[
      "border: 1px solid \{border}",
      "border-radius: \{radius}",
      "overflow: hidden",
    ],
    [
      @html.div(
        style=[
          "display: flex",
          "border-bottom: 1px solid \{border}",
          "background: \{surface}",
        ],
        {
          let headers : Array[@rabbita.Html] = []
          for i, tab in self.tabs.tabs {
            let is_active = i == self.tabs.active
            let bb = if is_active { primary } else { "transparent" }
            let fg = if is_active { primary } else { text_secondary }
            let fw = if is_active { "600" } else { "400" }
            headers.push(
              @html.button(
                style=[
                  "padding: 10px 20px",
                  "cursor: pointer",
                  "border: none",
                  "border-bottom: 3px solid \{bb}",
                  "background: \{surface}",
                  "color: \{fg}",
                  "font-weight: \{fw}",
                  "font-size: 14px",
                ],
                on_click=dispatch(TabSelected(i)),
                tab.0,
              ),
            )
          }
          headers
        },
      ),
      @html.div(
        style=[
          "padding: 20px",
          "background: \{surface}",
          "font-size: 14px",
          "color: \{text_primary}",
          "line-height: 1.6",
        ],
        {
          let content = if self.tabs.active < self.tabs.tabs.length() {
            self.tabs.tabs[self.tabs.active].1
          } else {
            ""
          }
          content
        },
      ),
    ],
  )
}

///|
fn Model::view_accordion(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(
    style=[
      "border: 1px solid \{border}",
      "border-radius: \{radius}",
      "overflow: hidden",
    ],
    {
      let acc_items : Array[@rabbita.Html] = []
      for i, item in self.accordion.items {
        let is_open = i == self.accordion.open_index
        if i > 0 {
          acc_items.push(
            @html.div(style=["border-top: 1px solid \{border}"], ""),
          )
        }
        let hdr_bg = if is_open { primary_light } else { surface }
        let hdr_color = if is_open { primary } else { text_primary }
        let hdr_fw = if is_open { "600" } else { "400" }
        acc_items.push(
          @html.div(style=[], [
            @html.button(
              style=[
                "display: flex",
                "justify-content: space-between",
                "align-items: center",
                "width: 100%",
                "padding: 14px 18px",
                "cursor: pointer",
                "background: \{hdr_bg}",
                "color: \{hdr_color}",
                "font-weight: \{hdr_fw}",
                "font-size: 14px",
                "border: none",
                "text-align: left",
              ],
              on_click=dispatch(AccordionToggle(i)),
              item.0,
            ),
            if is_open {
              @html.div(
                style=[
                  "padding: 14px 18px",
                  "background: \{surface}",
                  "color: \{text_secondary}",
                  "font-size: 14px",
                  "line-height: 1.6",
                  "border-top: 1px solid \{border}",
                ],
                item.1,
              )
            } else {
              @html.nothing
            },
          ]),
        )
      }
      acc_items
    },
  )
}

///|
fn Model::view_breadcrumb(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.nav(
    style=[
      "padding: 12px 16px",
      "background: \{surface}",
      "border: 1px solid \{border}",
      "border-radius: \{radius}",
    ],
    [
      @html.div(
        style=[
          "display: flex", "align-items: center", "gap: 4px", "flex-wrap: wrap",
        ],
        {
          let crumbs : Array[@rabbita.Html] = []
          let path = self.breadcrumb.path
          for i, segment in path {
            let is_last = i == path.length() - 1
            if i > 0 {
              crumbs.push(
                @html.span(
                  style=["color: \{text_muted}", "font-size: 14px"],
                  "/",
                ),
              )
            }
            if is_last {
              crumbs.push(
                @html.span(
                  style=[
                    "font-size: 14px",
                    "font-weight: 600",
                    "color: \{text_primary}",
                  ],
                  segment,
                ),
              )
            } else {
              crumbs.push(
                @html.button(
                  style=[
                    "background: none",
                    "border: none",
                    "padding: 0",
                    "font-size: 14px",
                    "color: \{primary}",
                    "cursor: pointer",
                    "text-decoration: underline",
                  ],
                  on_click=dispatch(BreadcrumbNavigate(i)),
                  segment,
                ),
              )
            }
          }
          crumbs
        },
      ),
    ],
  )
}

///|
fn view_tree_node(
  node : TreeNode,
  expanded : Array[Int],
  dispatch : @rabbita.Dispatch[Msg],
  depth : Int,
) -> @rabbita.Html {
  let is_expanded = expanded.contains(node.id)
  let has_children = node.children.length() > 0
  let indent = depth * 20
  let icon = if !has_children { "." } else if is_expanded { "v" } else { ">" }
  @html.div(style=["padding-left: \{indent}px"], [
    if has_children {
      @html.button(
        style=[
          "display: flex",
          "align-items: center",
          "gap: 6px",
          "background: none",
          "border: none",
          "padding: 4px 8px",
          "cursor: pointer",
          "font-size: 14px",
          "color: \{text_primary}",
          "width: 100%",
          "text-align: left",
        ],
        on_click=dispatch(TreeToggle(node.id)),
        "\{icon} \{node.label}",
      )
    } else {
      @html.div(
        style=[
          "display: flex",
          "align-items: center",
          "gap: 6px",
          "padding: 4px 8px",
          "font-size: 14px",
          "color: \{text_secondary}",
        ],
        "\{icon} \{node.label}",
      )
    },
    if has_children && is_expanded {
      @html.div(
        style=[],
        {
          let child_els : Array[@rabbita.Html] = []
          for child in node.children {
            child_els.push(view_tree_node(child, expanded, dispatch, depth + 1))
          }
          child_els
        },
      )
    } else {
      @html.nothing
    },
  ])
}

///|
fn Model::view_tree_view(
  self : Model,
  dispatch : @rabbita.Dispatch[Msg],
) -> @rabbita.Html {
  @html.div(
    style=[
      "border: 1px solid \{border}",
      "border-radius: \{radius}",
      "padding: 8px",
      "background: \{surface}",
    ],
    {
      let roots : Array[@rabbita.Html] = []
      for root in self.tree_view.roots {
        roots.push(view_tree_node(root, self.tree_view.expanded, dispatch, 0))
      }
      roots
    },
  )
}
