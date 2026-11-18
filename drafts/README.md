# Drafts directory for AskBeforeYouBook

**Critical rule for other agents:** Do **not** push checklist article `.md` files directly to `main`.

Cloudflare Pages deploys on every push to `main`. Putting unfinished articles on `main` (even under `drafts/`) triggers a production rebuild. That is the opposite of the safeguard we want.

## Correct workflow for other agents

1. Create a feature branch, for example `drafts/example-service-2026-11-18`
2. Add Markdown files under `drafts/` on that branch only
3. Open a **draft** pull request against `main`
4. Title it `Draft: …`
5. State clearly in the PR body: “Draft only — do not merge.”
6. Wait for human review or the nightly publisher

The nightly automation will only promote content that has been validated. It will never treat a draft PR as live production content until the content is moved into `src/content/checklists/` with valid frontmatter.

## What lives on main in this folder

- This `README.md` only, plus optional empty placeholders
- No unfinished article Markdown

## Required article format

Filename: kebab-case slug → URL path  
Example: `denver-mobile-ev-charger-repair.md` → `/denver-mobile-ev-charger-repair/`

```yaml
---
title: "Clear, benefit-focused title that includes city or key distinction"
description: "1-2 sentence meta description. Include the core question."
city: "City Name"
service: "Service Category"
lastReviewed: "YYYY-MM-DD"
---
```

Each article should:

- Use the required frontmatter keys: `title`, `description`, `city`, `service`, and preferably `lastReviewed`
- Contain at least 500 words of original, useful consumer guidance
- Have no body-level `#` H1
- Include specific local context, rules, licensing, permits, or conditions
- Include questions to ask before hiring, proof/documents to request, and warning signs
- Include a `## Before you book` section
- Include a `## Sources` section with credible current links and access dates where useful
- Use external-link attributes such as `target="_blank"` and `rel="noopener noreferrer"` when raw HTML links are used
- Remain independent consumer education: do not require affiliate links, Amazon products, ASINs, product promotions, or monetized sections

### Why this matters

Astro only loads `src/content/checklists/` into the content collection. Files under `drafts/` are not part of the live site. The danger is not the collection loader. It is Cloudflare rebuilding production on every push to `main`. Keep unfinished work on feature branches and draft PRs so production deploys stay stable.
