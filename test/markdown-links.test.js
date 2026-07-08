import assert from "node:assert/strict";
import test from "node:test";

import {
  findMarkdownLinks,
  findUnsafeMarkdownLinks,
  summarizeMarkdownLinks,
} from "../src/markdown-links.js";

test("finds markdown links with text and targets", () => {
  assert.deepEqual(findMarkdownLinks("Read the [guide](docs/guide.md)."), [
    {
      text: "guide",
      target: "docs/guide.md",
    },
  ]);
});

test("handles empty markdown", () => {
  assert.deepEqual(findMarkdownLinks(""), []);
  assert.deepEqual(findMarkdownLinks(undefined), []);
});

test("detects unsafe javascript links", () => {
  const markdown = "Avoid [bad](javascript:bad) links.";

  assert.deepEqual(findUnsafeMarkdownLinks(markdown), [
    {
      text: "bad",
      target: "javascript:bad",
    },
  ]);
});

test("summarizes total and unsafe links", () => {
  const markdown = "[safe](docs/page.md) and [bad](javascript:bad)";

  assert.deepEqual(summarizeMarkdownLinks(markdown), {
    total: 2,
    unsafe: 1,
  });
});
