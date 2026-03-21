///|
/// Render the login/register screen.
fn view_auth(
  dispatch : @rabbita.Dispatch[Msg],
  model : Model,
  theme : Theme,
) -> @rabbita.Html {
  let lang = model.lang
  let is_login = model.auth_screen == "login"
  let title = if is_login {
    @shared.t(lang, "sign_in")
  } else {
    @shared.t(lang, "create_account")
  }
  let submit_label = if is_login {
    @shared.t(lang, "sign_in")
  } else {
    @shared.t(lang, "register")
  }
  let switch_label = if is_login {
    @shared.t(lang, "need_account")
  } else {
    @shared.t(lang, "have_account")
  }
  let on_submit = if is_login {
    dispatch(SubmitLogin)
  } else {
    dispatch(SubmitRegister)
  }
  let on_switch = if is_login {
    dispatch(ShowRegister)
  } else {
    dispatch(ShowLogin)
  }
  @html.div(style=[
    "min-height: 100vh", "display: flex", "align-items: center", "justify-content: center",
    "background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
  ]) <| [
    @html.div(style=[
      "background: \{theme.card_bg}",
      "border-radius: 16px",
      "padding: 40px",
      "width: 380px",
      "box-shadow: 0 20px 60px rgba(0,0,0,0.3)",
    ]) <| [
      @html.h1(style=[
        "color: \{theme.text}",
        "font-size: 24px",
        "font-weight: 700",
        "text-align: center",
        "margin-bottom: 8px",
      ]) <| @shared.t(lang, "app_title"),
      @html.p(style=[
        "color: \{theme.text_secondary}",
        "font-size: 14px",
        "text-align: center",
        "margin-bottom: 24px",
      ]) <| [
        @html.text(title),
      ],
      // Error message
      if model.auth_error != "" {
        @html.div(style=[
          "background: #fef2f2", "color: #dc2626", "padding: 10px 14px", "border-radius: 8px",
          "font-size: 13px", "margin-bottom: 16px", "border: 1px solid #fecaca",
        ]) <| [
          @html.text(model.auth_error),
        ]
      } else {
        @html.text("")
      },
      // Username
      @html.div(style=["margin-bottom: 14px"]) <| [
        @html.label(style=[
          "display: block",
          "font-size: 13px",
          "font-weight: 500",
          "color: \{theme.text_secondary}",
          "margin-bottom: 4px",
        ]) <| [
          @html.text(@shared.t(lang, "username")),
        ],
        @html.input(
          input_type=Text,
          value=model.auth_username,
          placeholder=@shared.t(lang, "enter_username"),
          on_input=fn(v) { dispatch(AuthUsernameChanged(v)) },
          style=[
            "width: 100%",
            "padding: 10px 12px",
            "border-radius: 8px",
            "border: 1px solid \{theme.input_border}",
            "background: \{theme.input_bg}",
            "color: \{theme.text}",
            "font-size: 14px",
            "box-sizing: border-box",
            "outline: none",
          ],
        ) <| "",
      ],
      // Password
      @html.div(style=["margin-bottom: 20px"]) <| [
        @html.label(style=[
          "display: block",
          "font-size: 13px",
          "font-weight: 500",
          "color: \{theme.text_secondary}",
          "margin-bottom: 4px",
        ]) <| [
          @html.text(@shared.t(lang, "password")),
        ],
        @html.input(
          input_type=Password,
          value=model.auth_password,
          placeholder=@shared.t(lang, "enter_password"),
          on_input=fn(v) { dispatch(AuthPasswordChanged(v)) },
          style=[
            "width: 100%",
            "padding: 10px 12px",
            "border-radius: 8px",
            "border: 1px solid \{theme.input_border}",
            "background: \{theme.input_bg}",
            "color: \{theme.text}",
            "font-size: 14px",
            "box-sizing: border-box",
            "outline: none",
          ],
        ) <| "",
      ],
      // Submit button
      @html.button(on_click=on_submit, style=[
        "width: 100%",
        "padding: 12px",
        "border: none",
        "border-radius: 8px",
        "cursor: pointer",
        "font-size: 14px",
        "font-weight: 600",
        "color: white",
        "background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        "margin-bottom: 12px",
        if model.auth_loading {
          "opacity: 0.7"
        } else {
          "opacity: 1"
        },
      ]) <| (if model.auth_loading { "..." } else { submit_label }),
      // Switch link
      @html.div(style=["text-align: center"]) <| [
        @html.button(on_click=on_switch, style=[
          "background: none", "border: none", "color: #6366f1", "cursor: pointer",
          "font-size: 13px", "padding: 0",
        ]) <| switch_label,
      ],
      // Language toggle
      @html.div(style=["text-align: center", "margin-top: 16px"]) <| [
        @html.button(
          on_click=dispatch(SetLang(if lang == En { Zh } else { En })),
          style=[
            "background: none", "border: 1px solid #6366f1", "color: #6366f1", "cursor: pointer",
            "font-size: 12px", "padding: 4px 12px", "border-radius: 12px",
          ],
        ) <| (if lang == En { "中文" } else { "EN" }),
      ],
    ],
  ]
}
