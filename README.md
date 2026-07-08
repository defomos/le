# Codex Loop Engineering Showcase

This repository is a small, public-demo-safe workshop project for showing loop engineering with Codex, GitHub Issues, GitHub Actions, repo-scoped skills, a verifier agent, and durable state.

The showcase uses two bounded loops:

```text
Manager loop
  -> scheduled automation
  -> backlog-manager skill
  -> classifies GitHub Issues
  -> writes Agent Assessment
  -> grants or withholds agent:ready

Worker loop
  -> scheduled automation
  -> github-loop-runner skill
  -> picks one risk:low + agent:ready issue
  -> creates loop artifacts
  -> implements one tiny repo utility
  -> tests, verifies, and prepares pull request handoff
```

## What This Demonstrates

- **Automations:** scheduled Codex runs act as the heartbeat for the manager and worker loops.
- **Worktrees:** automations should run in background worktrees so loop changes stay isolated.
- **Skills:** the demo uses two core skills: `backlog-manager` and `github-loop-runner`.
- **Plugins/connectors:** live mode can use a GitHub connector or the GitHub CLI; offline mode uses sample issue files.
- **Subagents:** `.codex/agents/verifier.toml` defines a read-only maker/checker review role.
- **State:** GitHub Issues and `docs/loop-state.md` hold durable state outside any single chat.

## Run Locally

```bash
npm test
```

This project has no runtime dependencies. The example utility is intentionally tiny so workshop attention stays on the loop.

## Demo Script

1. Open `docs/loop-engineering.md` and explain the manager/worker split.
2. Show `docs/loop-cards.md` and the explicit job boundaries.
3. Show `.codex/skills/backlog-manager/SKILL.md`.
4. Show `.codex/skills/github-loop-runner/SKILL.md`.
5. Show `docs/automation/codex-scheduled-automation.md`.
6. Show the completed example in `docs/examples/GH-001-check-markdown-links/`.
7. Run `npm test`.
8. Explain where the human approves routing, plans, PR handoff, and merge.

## Label Protocol

Use labels as permissions:

- `needs:triage` means the manager loop should classify the issue.
- `risk:low` means the issue is small and reversible.
- `risk:high` means the issue needs human-led work.
- `type:feature`, `type:bug`, `type:docs`, `type:test`, `type:refactor`, or `type:chore` describe the work.
- `agent:ready` means the worker loop may pick up the issue.
- `needs:human` means the loop must stop and ask a specific question.
- `loop:plan-approved` means implementation may start.
- `loop:done` means no more automation work is needed.

## Project Layout

```text
.codex/agents/                 Verifier agent definition
.codex/skills/                 Repo-scoped manager and worker skills
.github/                       GitHub issue, PR, and Actions setup
docs/automation/               Codex automation setup and prompts
docs/examples/                 Completed demo loop artifacts
docs/loop-cards.md             Manager and worker job boundaries
docs/loop-engineering.md       Workshop guide
docs/loop-state.md             Durable loop memory
src/                           Tiny Markdown link checker
test/                          Node test runner tests
```

## Public Demo Safety

Keep this repository generic. Do not add private URLs, credentials, customer names, proprietary project names, or copied private code.
