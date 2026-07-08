const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

export function findMarkdownLinks(markdown) {
  if (typeof markdown !== "string" || markdown.length === 0) {
    return [];
  }

  return [...markdown.matchAll(MARKDOWN_LINK_PATTERN)].map((match) => ({
    text: match[1],
    target: match[2].trim(),
  }));
}

export function findUnsafeMarkdownLinks(markdown) {
  return findMarkdownLinks(markdown).filter((link) => {
    const normalizedTarget = link.target.toLowerCase();
    return normalizedTarget.startsWith("javascript:") || normalizedTarget.length === 0;
  });
}

export function summarizeMarkdownLinks(markdown) {
  const links = findMarkdownLinks(markdown);
  const unsafeLinks = findUnsafeMarkdownLinks(markdown);

  return {
    total: links.length,
    unsafe: unsafeLinks.length,
  };
}
