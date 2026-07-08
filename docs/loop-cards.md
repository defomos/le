# Loop Job Cards

Use these cards before changing automation prompts or skill behavior.

## Manager Loop

```text
JOB:        classify and route GitHub Issues
INPUTS:     open issues, labels, linked PRs, existing Agent Assessment comments
ALLOWED:    in apply mode only, labels and comments
FORBIDDEN:  code changes, branches, pull requests, merges, closing issues without merged-PR evidence
OUTPUT:     labelled queue with inspectable Agent Assessment comments
EVALUATION: low-risk clear work is marked agent:ready; risky or ambiguous work gets needs:human with a specific question
```

## Worker Loop

```text
JOB:        implement one safe issue and prepare PR handoff
INPUTS:     one risk:low + agent:ready issue, Agent Assessment, repo code, tests, loop state
ALLOWED:    task artifacts, implementation branch/worktree, code changes, tests, PR draft after human approval
FORBIDDEN:  choosing untriaged work, widening scope, fixing unrelated findings inline, merging code
OUTPUT:     reviewed implementation with passing tests and PR handoff
EVALUATION: implementation matches the issue and plan, tests pass, verifier approves, human can inspect the PR
```

## Verifier Agent

```text
JOB:        review the worker output
INPUTS:     issue, task, plan, implementation, diff, test output
ALLOWED:    read files and report findings
FORBIDDEN:  editing files, staging changes, pushing, creating PRs
OUTPUT:     APPROVED or NEEDS_WORK with concise reasons
EVALUATION: serious mismatches and missing tests are caught before PR handoff
```
