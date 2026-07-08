# Plan: Add a Markdown link checker

## Goal

Add a tiny Markdown link checker and tests that make the loop visible during a workshop.

## Files

- Create: `src/markdown-links.js`
- Create: `test/markdown-links.test.js`
- Modify: `package.json`

## Steps

1. Add `findMarkdownLinks(markdown)` to extract Markdown link text and targets.
2. Add `findUnsafeMarkdownLinks(markdown)` to report `javascript:` links.
3. Add `summarizeMarkdownLinks(markdown)` with total and unsafe counts.
4. Add tests for extraction, empty input, unsafe links, and summary output.
5. Run `npm test`.
6. Write `implementation.md`.

## Verification

- `npm test`

## Human Gate

Implementation may start after label `loop:plan-approved` is present or the human explicitly approves this plan.
