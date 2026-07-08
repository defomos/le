# Issue: GH-001 Add a Markdown link checker

## Labels

- risk:low
- type:feature
- agent:ready
- loop:plan-approved

## Problem

The workshop needs a tiny repo-maintenance utility that is easy to explain while still showing tests, implementation, review, and CI.

## Desired Outcome

Add a dependency-free Markdown link checker that can find Markdown links and identify unsafe `javascript:` targets.

## Acceptance Criteria

- Markdown links are returned with text and target.
- Empty input returns no links.
- `javascript:` links are reported as unsafe.
- Summary output includes total link count and unsafe link count.
- `npm test` passes.

## Agent Assessment

Risk: low
Type: feature
Agent-ready: yes

Reason: Small isolated utility with clear acceptance criteria and `npm test` verification.
