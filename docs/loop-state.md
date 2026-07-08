# Loop State

This file is durable memory for scheduled loop runs. In live mode, GitHub Issues are the primary control plane; this file mirrors local progress for demos and offline runs.

| Issue | Title | Manager Status | Worker Phase | Human Gate | Last Updated |
| ----- | ----- | -------------- | ------------ | ---------- | ------------ |
| GH-001 | Add a Markdown link checker | risk:low, type:feature, agent:ready | review | none | 2026-07-02 |

## Status Values

- `needs:triage`: manager loop should classify the issue
- `risk:low`: worker loop may consider the issue
- `risk:high`: human-led work
- `agent:ready`: permission for the worker loop
- `needs:human`: loop must stop and ask a question
- `planning`: plan artifact is in progress or awaiting approval
- `implementing`: code change is in progress
- `reviewing`: verifier review is in progress
- `loop:done`: loop is complete
