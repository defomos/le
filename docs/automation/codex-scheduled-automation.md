# Codex Scheduled Automations

Create two Codex app automations when running the workshop.

## Automation 1: Manager Loop

- Type: standalone project automation
- Project: this repository
- Environment: worktree
- Cadence for workshop: every 15 minutes
- Cadence for normal use: daily
- Status: active during the demo, paused afterward

Prompt file:

```text
.github/codex/prompts/manager-loop.md
```

Prompt:

```text
$backlog-manager

Run the manager loop for this repository.

Default to DRY-RUN unless the human explicitly says apply mode is approved. Inspect open GitHub Issues, classify risk and type, identify which issues are safe for the worker loop, and report the exact labels and Agent Assessment comments you would apply.
```

## Automation 2: Worker Loop

- Type: standalone project automation
- Project: this repository
- Environment: worktree
- Cadence for workshop: every 15 minutes
- Cadence for normal use: daily
- Status: active during the demo, paused afterward

Prompt file:

```text
.github/codex/prompts/loop-watcher.md
```

Prompt:

```text
$github-loop-runner

Run the worker loop for this repository.

Advance at most one eligible GitHub Issue. Only pick issues labelled both risk:low and agent:ready. Update docs/loop-state.md every run. Stop at human gates instead of guessing.
```

## Expected Manager Output

- proposed risk/type/routing labels
- proposed Agent Assessment comments
- specific questions for `needs:human` issues
- whether any issue is safe for the worker loop

## Expected Worker Output

- create the next missing loop artifact
- stop for plan approval
- implement an approved plan
- run tests and verifier review
- report a PR handoff
- report that no eligible issue exists

## First Demo Run

If live GitHub access is not configured, point the audience at:

```text
docs/examples/GH-001-check-markdown-links/issue.md
```

That file acts as the offline issue intake for the sample loop.
