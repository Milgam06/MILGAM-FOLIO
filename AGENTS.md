<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Dependency context

- Treat `package.json` as the source of truth; do not duplicate its contents in memory or a separate summary.
- For technology or implementation work, read it once per task turn and reuse that context. Read it again if dependencies change during the turn.
- Inspect only relevant lockfile entries when exact installed versions matter; declared ranges are not installed versions.
- Verify version-dependent claims against matching official documentation. Use community reports as supplementary evidence and distinguish them from documented behavior.
- Keep file output and research scoped to the question; do not reload unchanged files or entire lockfiles unnecessarily.
