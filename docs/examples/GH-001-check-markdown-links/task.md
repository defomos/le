# Task: GH-001 Add a Markdown link checker

## Source

- Issue: `docs/examples/GH-001-check-markdown-links/issue.md`

## Summary

Create a tiny dependency-free Markdown link checker for the workshop demo and cover it with Node tests.

## Scope

- Add a source module for Markdown link parsing.
- Add tests for link extraction, empty input, unsafe link detection, and summary output.
- Keep the implementation dependency-free.

## Acceptance Criteria

- Markdown links are returned with text and target.
- Empty input returns no links.
- `javascript:` links are reported as unsafe.
- Summary output includes total link count and unsafe link count.
- `npm test` passes.

## Agent Assessment

- Risk: low
- Type: feature
- Agent-ready: yes

## Human Gates

- Plan approval is represented by the sample `loop:plan-approved` label.
