# Drafts directory for AskBeforeYouBook

**Critical rule:** Do not push unfinished checklist articles directly to `main`. Keep all unreviewed drafts on a feature branch and in an unmerged draft pull request.

## Workflow

1. Create a clearly named feature branch.
2. Check published checklists and current `drafts/` contents to avoid duplicate or substantially overlapping topics.
3. Add exactly the intended publishable Markdown article files under `drafts/`.
4. Open a **draft** pull request against `main` with a title beginning `Draft: `.
5. State clearly: **"Draft only — do not merge. Do not trigger or operate the publishing automation."**
6. Wait for human review before promotion or publication.

A separate publishing automation consumes Markdown files in this folder. Do not trigger, operate, or modify it during research and drafting. Do not move drafts into `src/content/checklists/`, merge a publishing PR, deploy, or otherwise publish them.

## Required article format

Filename: kebab-case slug describing the city/market and service.

Each article must include:

```yaml
---
title: "Clear, benefit-focused title"
description: "1–2 sentence meta description with the customer problem and local context."
city: "Specific City or Market"
service: "Specific Consumer Service"
lastReviewed: "YYYY-MM-DD"
---
```

### Hard requirements

- Include `title`, `description`, `city`, `service`, and `lastReviewed`.
- At least **500 words** of original consumer guidance.
- No body H1 (`#`).
- Explain the local context and cite current local/state rules or conditions.
- Include actionable questions, documents or proof to request, warning signs, and a **Before you book** checklist.
- Include a **Sources** section with direct links, dates, and access dates where available.
- HTML source links must use `target="_blank" rel="noopener noreferrer"`.
- Be transparent about uncertainty and distinguish local, statewide, and national data.
- **Do not add affiliate links, product recommendations, affiliate disclosures, ASINs, or monetized sections.**
- Verify licensing, insurance, permits, inspections, and warranty claims with authoritative sources.
- Do not create separate Markdown research reports in `drafts/`; use a non-Markdown format in a research subfolder if needed.

## Example

```markdown
---
title: "..."
description: "..."
city: "..."
service: "..."
lastReviewed: "YYYY-MM-DD"
---

Local context.

## 1. First major question

- **Ask:** *"Exact question"*
- **Request:** The proof or document.

## Warning signs

- Specific red flags.

## Before you book

- Verification steps.

## Sources

- <a href="https://example.gov/" target="_blank" rel="noopener noreferrer">Official source</a>. Accessed YYYY-MM-DD.
```

## Why this matters

Astro loads `src/content/checklists/` into the live collection. Files under `drafts/` are not live, but Cloudflare rebuilds production on every push to `main`. Keep unfinished work on feature branches and draft PRs.
