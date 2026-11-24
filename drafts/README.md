# Drafts directory for AskBeforeYouBook

**Critical rule for other agents:** Do **not** push checklist article `.md` files directly to `main`.

Cloudflare Pages deploys on every push to `main`. Putting unfinished articles on `main` (even under `drafts/`) triggers a production rebuild. Keep all unreviewed articles on a feature branch and in an unmerged draft pull request.

## Correct workflow for other agents

1. Create a clearly named feature branch, e.g. `drafts/denver-radon-2026-11-24`
2. Check existing published checklists and all files in `drafts/` to avoid duplicate or substantially overlapping topics.
3. Add exactly the intended publishable Markdown article files under `drafts/` on that branch only.
4. Update this README on the same branch if the article policy or format changes.
5. Open a **draft** pull request against `main`, with a title beginning `Draft: `.
6. State clearly in the PR body: **"Draft only — do not merge. Do not trigger the publishing automation."**
7. Wait for human review and approval before any promotion or publication.

A separate publishing automation consumes Markdown files in this folder. Do not trigger, operate, or modify that automation as part of research and drafting. Do not move drafts into `src/content/checklists/`, merge a publishing PR, deploy, or otherwise publish them. Only a human-approved workflow may promote content.

## What lives on main in this folder

- This `README.md` only (instructions)
- Optionally: empty placeholder files if needed for directory presence

**No article Markdown should sit on `main` until the publisher has validated and promoted it.**

## Required article format

Filename: kebab-case slug that describes the city/market and service → URL path.  
Example: `denver-radon-mitigation.md` → `/denver-radon-mitigation/`

Every publishable draft must use this frontmatter shape:

```yaml
---
title: "Clear, benefit-focused title that includes city or key distinction"
description: "1–2 sentence meta description that states the customer problem and local context."
city: "Specific City or Market"
service: "Specific Consumer Service"
lastReviewed: "YYYY-MM-DD"
---
```

### Hard requirements

- Include all five frontmatter fields: `title`, `description`, `city`, `service`, and `lastReviewed`.
- Write at least **500 words** of original, useful consumer guidance. Aim for clarity rather than padding.
- Do not put a body H1 (`#`) in the article. The page title comes from frontmatter.
- Choose a specific, defensible U.S. city or market. Explain the local context and cite relevant current local/state rules or conditions.
- Include actionable questions to ask before hiring, documents or proof to request, meaningful warning signs, and a concise **Before you book** checklist.
- Include a **Sources** section with direct source links. Prefer primary government, regulatory, licensing, consumer-protection, court/enforcement, and credible industry sources. Include publication/update dates and access dates where available. Distinguish local data from statewide or national data and never present anecdotes as market-wide statistics.
- For HTML links, use `target="_blank" rel="noopener noreferrer"`. For Markdown links, use ordinary Markdown link syntax. Do not add affiliate tracking or sponsored link attributes.
- Keep the site's consumer-first voice: practical, specific, transparent about uncertainty, and focused on helping customers compare providers. Customer never pays the directory.
- Articles are independent consumer education resources. **Do not add affiliate recommendations, affiliate links, product recommendations, affiliate disclosures, ASINs, monetized sections, or promotional product blocks.**
- Verify local licensing, insurance, permits, inspection, and warranty claims against current authoritative sources. Tell readers to confirm requirements for their exact address when jurisdictions differ.
- Do not create separate Markdown research reports in `drafts/`; the publishing automation may treat every Markdown file there as publishable. If supplementary research records are needed, place them in a clearly named research subfolder using a non-Markdown format such as JSON or CSV.

### Example article structure

```markdown
---
title: "..."
description: "..."
city: "..."
service: "..."
lastReviewed: "YYYY-MM-DD"
---

Local context and why the hiring decision matters.

## 1. First major question

- **Ask:** *"Exact question"*
- **Request:** The specific document or proof.
- Explain what a useful answer looks like and what a weak answer means.

## Warning signs

- Specific, actionable red flags.

## Before you book

- Short checklist of verification steps.

## Sources

- <a href="https://www.oregon.gov/deq/housing/pages/housing-asb.aspx" target="_blank" rel="noopener noreferrer">Official source title</a>. Published/updated date if available; accessed YYYY-MM-DD.
```

## Why this matters

Astro loads `src/content/checklists/` into the live content collection. Files under `drafts/` are not part of the live site, but Cloudflare rebuilds production on every push to `main`. The separate publishing automation also consumes Markdown files in `drafts/`. Keep unfinished work on feature branches and draft PRs, and do not operate that automation during research or review.
