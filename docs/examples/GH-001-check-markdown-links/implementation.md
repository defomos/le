# Implementation: Add a Markdown link checker

## Summary

Added a dependency-free Markdown link checker and Node tests for extraction, empty input, unsafe link detection, and summary output.

## Files Changed

- `src/markdown-links.js`: exports `findMarkdownLinks`, `findUnsafeMarkdownLinks`, and `summarizeMarkdownLinks`.
- `test/markdown-links.test.js`: covers the expected behavior.
- `package.json`: defines `npm test`.

## Plan Deviations

- None.

## Verification

- `npm test`: passing.
