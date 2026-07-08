# Agent Guidance

## Always Apply

- This is a public-demo-safe loop engineering showcase.
- Use GitHub Issues, GitHub Pull Requests, GitHub Actions, Codex automations, repo-scoped Codex skills, and the local verifier agent.
- Keep changes small enough for a workshop audience to inspect in a few minutes.
- Keep all examples generic. Do not add private URLs, credentials, customer names, proprietary project names, or copied private code.
- Prefer durable files under `docs/loops/` or `docs/examples/` over relying on chat history.
- Run `npm test` before claiming code changes work.

## Loop Rules

- The manager loop classifies issues but never writes code.
- The worker loop implements code but never chooses its own work.
- The worker loop may only pick issues labelled `risk:low` and `agent:ready`.
- Advance at most one issue per worker automation run.
- Stop at human gates instead of guessing product decisions.
- Keep loop artifacts lightweight: `task.md`, `plan.md`, `implementation.md`, and `review.md` are enough for this showcase.
- Pull request creation requires human approval in workshop mode.
- Nothing merges without a human.

## Review Guidelines

- Prioritize correctness, missing tests, broken loop state, unclear human gates, and public-demo safety.
- Check that loop artifacts match the actual code diff.
- Check that labels are treated as permissions, not decoration.
