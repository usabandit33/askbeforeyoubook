# Drafts directory for AskBeforeYouBook

**Critical rule for other agents:** Do not push checklist article `.md` files directly to `main`.

Cloudflare Pages deploys on every push to `main`. Keep unfinished articles on a feature branch and open a draft pull request.

## Correct workflow

1. Create a feature branch.
2. Add publishable Markdown files under `drafts/` on that branch only.
3. Open a **draft** pull request against `main`.
4. Keep the PR unmerged until reviewed and approved.
5. Do not move drafts into `src/content/checklists/` or trigger publishing automation from this workflow.

## Required article format

Filename: kebab-case slug.

```yaml
---
title: "Clear, benefit-focused title that includes city or key distinction"
description: "1-2 sentence meta description. Include the core customer question."
city: "City Name"
service: "Service Category"
lastReviewed: "YYYY-MM-DD"
---
```

Each article must:

- Use the required frontmatter fields above.
- Be at least 500 words of useful, original consumer guidance.
- Use no body-level `#` H1.
- Include local context, actionable hiring questions, documents or proof to request, warning signs, a "Before you book" section, and a Sources section.
- Use external links with `target="_blank"` and `rel="noopener noreferrer"` when HTML links are included.
- Remind readers to verify current local requirements because rules and programs can change.

## Editorial policy

These are independent consumer-education resources. Do not add Amazon affiliate recommendations, affiliate links, product recommendations, ASINs, affiliate disclosures, or monetized product sections. Never insert product promotions merely to satisfy a template.

## Why this matters

Astro loads `src/content/checklists/` into the live content collection. Files under `drafts/` are review material only. Keep unfinished work on feature branches and draft PRs so production content stays stable.
