# TEA/MVU Architecture Analysis — Lessons from Building 50 Components

This analysis is based on hands-on experience building a 50-component UI gallery (8,300+ lines of MoonBit, 152 tests) using the Elm Architecture (TEA/MVU) with the Rabbita framework. It covers strengths, weaknesses, and a comparison with React — specifically through the lens of AI agent-assisted development.

## Part 1: TEA/MVU Strengths and Weaknesses

### What Works Well

#### 1. Testing Is Trivially Easy

The update function is pure: `(Model, Msg) -> (Model, Cmd)`. No DOM, no browser, no mocking.

```moonbit
test "AccordionToggle opens section" {
  let (model, _) = m().update(msg=AccordionToggle(1), dispatch=noop)
  inspect!(model.accordion.open_index, content="1")
}
```

We wrote 152 tests (53 unit + 53 E2E + 46 component tests) that run in under a second without a browser. The E2E tests simulate complete user flows by chaining `update()` calls then rendering to HTML string:

```moonbit
test "E2E: wizard validation, fill, advance, complete" {
  let (m1, _) = m0.update(msg=WizardNext, dispatch=noop)       // validate
  let (m2, _) = m1.update(msg=WizardFieldChanged(0, "Alice"), dispatch=noop) // fill
  let (m3, _) = m2.update(msg=WizardNext, dispatch=noop)       // advance
  // ... fill remaining steps ...
  assert_true!(m_final.form_wizard.completed)
  let html = render(m_final.render_component(noop))
  assert_true!(html.contains("Success"))
}
```

No Selenium, no Playwright, no flaky timeouts. This is the single biggest advantage of TEA.

#### 2. Exhaustive Pattern Matching Catches Mistakes at Compile Time

When we added 20 new components with ~80 new Msg variants, the MoonBit compiler immediately flagged every incomplete handler in `update()`. You cannot forget to handle a case. In practice, this means:

- Adding a new feature = adding a Msg variant
- The compiler tells you every file that needs updating
- Once it compiles, the state machine is complete

This is a form of specification enforcement that most other architectures lack.

#### 3. The Entire App State Is Inspectable

When a codex review found the "stale timer tick" bug (where stopping and restarting the stopwatch could produce duplicate tick loops), the fix was clear: add a `gen : Int` field to the Model. Everything that affects the app is visible in one struct — no hidden state in closures, refs, or DOM attributes.

```moonbit
pub(all) struct StopwatchState {
  elapsed_ms : Int
  running : Bool
  gen : Int        // generation token prevents stale delayed ticks
}
```

The stale tick fix was elegant: each `StopwatchTick(gen)` message carries the generation token from when the timer was started. If the generation doesn't match the current state, the tick is silently dropped.

#### 4. State Changes Are Auditable

Every state change goes through `update()`. You could log every `Msg` and replay the entire user session. This makes debugging deterministic — given the same sequence of messages, you always get the same final state.

#### 5. View Is a Pure Function of State

Given the same Model, you always get the same HTML. This property enabled our view snapshot tests:

```moonbit
test "E2E: initial render shows Inputs section" {
  let html = render(initial_model().view(noop))
  assert_true!(html.contains("Gallery"))
  assert_true!(html.contains("TextInput"))
}
```

There's no way for the DOM to get "out of sync" with the data — a class of bugs that simply cannot exist in TEA.

### What Doesn't Work Well

#### 1. The Model Becomes a God Object

Our gallery Model has 50+ fields — one sub-model for each component:

```moonbit
pub(all) struct Model {
  section : Section
  component : Int
  text_input : TextInputState
  text_area : TextAreaState
  checkbox : CheckboxState
  // ... 47 more fields
}
```

Every component's state is centralized. Changing one component's state type requires touching `Model`, `initial_model()`, and the exhaustive match in `update()`. In a real app with 100+ features, this coupling becomes a maintenance burden.

We mitigated this with nested sub-model structs (each component gets its own struct), but the top-level Model still grows linearly with the number of components.

#### 2. The Msg Enum Grows Unboundedly

We have ~80 Msg variants. Each new component adds 3-5 more:

```moonbit
pub(all) enum Msg {
  // 80+ variants across all components
  StopwatchToggle
  StopwatchReset
  StopwatchTick(Int)
  // ...
}
```

The `update()` function becomes a massive match expression. Elm solves this with nested Msg types and `Cmd.map` for routing, but Rabbita doesn't have this yet. Without it, the single match grows to hundreds of arms.

#### 3. No Component Encapsulation

Every "component" is just a function that reads from the global Model and dispatches global Msgs. There's no way to create a reusable `<DatePicker>` that manages its own state internally. If you want two date pickers on the same page, you need two sets of Model fields and two sets of Msg variants, plus manual routing.

React solved this with component-local state. Elm partially solved it with `Browser.element` and `Html.map`. TEA in Rabbita currently has no solution — every piece of state must be manually lifted to the top-level Model.

#### 4. Imperative DOM Operations Are Awkward

The PinInput component revealed this clearly. We wanted "auto-advance focus to the next digit box after typing." In React, this is `inputRef.current.focus()`. In TEA:

1. `autofocus` attribute doesn't work because the element is already mounted
2. We had to add a JS extern: `extern "js" fn focus_element(id : String)`
3. We had to use `@rabbita.effect(async fn() noraise { focus_element(id) })` to call it

Similar workarounds were needed for clipboard access, scroll position, and animations. The declarative model breaks down when you need imperative browser APIs.

#### 5. Boilerplate Scales Linearly

Each component requires:
- Sub-model struct definition
- Model field
- Initial state in `initial_model()`
- 3-5 Msg variants
- Match arms in `update()`
- View function
- Tests

For 50 components this is manageable. For 200 components, the boilerplate-to-logic ratio becomes painful. Without code generation or macros, every component has the same structural overhead regardless of complexity.

#### 6. No Lazy or Async Rendering

Every `view()` call renders the entire component tree. For our VirtualList (10,000 items), we faked scroll-based windowing with a range slider because the view function can't efficiently interact with DOM scroll events. React's `useDeferredValue`, Suspense, and concurrent mode address this; TEA has no equivalent.

## Part 2: TEA vs React for AI Agent Development

### Code Generation Reliability

| Aspect | TEA | React |
|--------|-----|-------|
| Pattern consistency | Every component follows the same 4-step pattern | Multiple valid patterns: useState, useReducer, useEffect, Context, Redux, Zustand |
| Compiler assistance | Exhaustive match catches missing handlers | TypeScript helps but doesn't enforce state machine completeness |
| Ambiguity | Low — there's one way to add a feature | High — agents must choose among patterns |

**TEA advantage: 9/10 vs React 5/10**

An agent generating TEA code follows a mechanical process: define types, add Msg variants, implement handlers, write view. The compiler verifies completeness. An agent generating React code must make architectural choices (which state management? which side-effect pattern?) that affect the entire component tree.

### Code Comprehension

| Aspect | TEA | React |
|--------|-----|-------|
| State location | One Model struct | Scattered across useState/useReducer/Context/stores |
| Side effects | Explicit Cmd values returned from update | Hidden in useEffect closures with dependency arrays |
| Control flow | Linear match on Msg | Hooks execute in order per render, effects run after commit |
| Execution model | Synchronous update, async effects separate | Mixed sync/async with concurrent mode |

**TEA advantage: 9/10 vs React 4/10**

To understand a TEA app, read `types.mbt` → `update.mbt` → `view.mbt`. To understand a React app, mentally simulate the reconciler, track closure captures, reason about effect cleanup timing, and consider re-render boundaries. An agent reading TEA code can extract the complete state machine; an agent reading React code must infer it from scattered hooks.

### Verification and Testing

| Aspect | TEA | React |
|--------|-----|-------|
| Unit tests | Pure function calls, no setup | Requires @testing-library/react, jsdom |
| E2E tests | Chain update() + render_to_string | Requires browser automation (Playwright/Cypress) |
| Test speed | 152 tests in <1 second | Similar test count takes 10-30 seconds |
| Flakiness | Zero — deterministic pure functions | Common — async effects, timers, race conditions |

**TEA advantage: 10/10 vs React 5/10**

This is TEA's strongest advantage for agents. An agent can write a test, run it, see the result, and iterate — all in under a second. React's testing infrastructure adds layers of abstraction (virtual DOM, act(), waitFor()) that agents frequently get wrong.

### Refactoring Safety

| Aspect | TEA | React |
|--------|-----|-------|
| Rename field | Compiler catches all uses | TypeScript catches most, but `...rest` spreading hides some |
| Add feature | Add Msg variant → compiler shows all incomplete matches | No compiler enforcement of handler completeness |
| Remove feature | Remove Msg variant → compiler catches dangling references | Dead code often goes undetected |
| Move state | Restructure Model fields → compiler-driven | Prop drilling changes, context restructuring |

**TEA advantage: 9/10 vs React 6/10**

### Ecosystem and Real-World Applicability

| Aspect | TEA (MoonBit/Rabbita) | React |
|--------|----------------------|-------|
| Package ecosystem | ~10 packages | 2M+ npm packages |
| UI component libraries | None (we built 50 from scratch) | MUI, Ant Design, shadcn/ui, etc. |
| Routing | Manual | React Router, Next.js, Remix |
| Data fetching | Manual HTTP | React Query, SWR, tRPC |
| Documentation/tutorials | Minimal | Extensive |

**React advantage: TEA 2/10 vs React 9/10**

This is the elephant in the room. An agent working in React can `npm install` solutions for most problems. An agent working in TEA/Rabbita must build everything from scratch. This gap is temporary (ecosystems grow) but currently massive.

### Error Recovery

| Aspect | TEA | React |
|--------|-----|-------|
| Bug categories | Wrong state, wrong handler, wrong view | Stale closures, effect timing, memo bugs, hydration, key props, concurrent mode |
| Diagnosis | Read Model + Msg log → find the wrong transition | Trace through render cycles, effect chains, ref mutations |
| Fix approach | Change one match arm | May require restructuring hooks, effects, or component tree |

**TEA advantage: 9/10 vs React 4/10**

When a TEA app breaks, the bug is always in one of three places: Model definition, update handler, or view function. An agent can systematically check each. React bugs can emerge from the interaction between hooks, the reconciler, and the browser — making them harder for agents to isolate.

### Summary Scorecard

| Dimension | TEA/MVU | React | Notes |
|-----------|---------|-------|-------|
| Code generation reliability | 9 | 5 | TEA's single pattern vs React's many patterns |
| Code comprehension | 9 | 4 | Explicit state machine vs scattered hooks |
| Verification/testing | 10 | 5 | Pure functions vs DOM-dependent tests |
| Refactoring safety | 9 | 6 | Exhaustive matching vs partial TypeScript checks |
| Ecosystem | 2 | 9 | Tiny vs massive |
| Scalability (< 100 components) | 8 | 7 | Simple Model vs component isolation |
| Scalability (> 100 components) | 5 | 7 | God Model problem vs component encapsulation |
| Error recovery | 9 | 4 | Deterministic vs emergent bugs |
| **Agent-weighted average** | **7.6** | **5.9** | |

### Conclusion

**TEA/MVU is architecturally superior for AI agents.** Its constraints — single Model, explicit Msg, exhaustive matching, pure update function — are exactly the properties that make code easier for agents to generate, verify, and modify. The architecture eliminates entire categories of bugs (stale closures, effect timing, state desync) that agents struggle with in React.

**React wins on ecosystem**, which matters for shipping products today. But for agent-driven development specifically, the ecosystem advantage is less important because agents can generate boilerplate that humans wouldn't want to write.

**The ideal future architecture** would combine TEA's verifiable state machine with React's component encapsulation:
- Nested sub-models with type-safe routing (like Elm's `Html.map`)
- Reusable component modules that manage their own state slice
- Compiler-enforced exhaustiveness on all state transitions
- A growing package ecosystem for common UI patterns

MoonBit's type system (algebraic data types, pattern matching, traits) is well-positioned to achieve this. The missing pieces are framework-level composition primitives in Rabbita, not language limitations.
