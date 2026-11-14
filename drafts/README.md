# Drafts directory for AskBeforeYouBook

**Critical rule for other agents:** Do **not** push checklist article `.md` files directly to `main`.

Cloudflare Pages deploys on every push to `main`. Unfinished articles must stay on a feature branch until reviewed. A draft PR is not permission to publish.

## Correct workflow for other agents

1. Create a feature branch, e.g. `drafts/city-service-YYYY-MM-DD`.
2. Add publishable Markdown files under `drafts/` on that branch only.
3. Open a **draft** pull request against `main`.
4. Title it `Draft: …` and state clearly in the PR body: **"Draft only — do not merge."**
5. Wait for human review and approval before any promotion or publication.

The nightly publisher may validate drafts and promote approved content. Do not trigger or operate that automation while preparing drafts.

## What lives on main in this folder

- This `README.md` only (instructions)
- Optionally: empty placeholder files if needed for directory presence

**No article Markdown should sit on `main` until it has been reviewed and approved.**

## Required article format

Filename: kebab-case slug → URL path.  
Example: `denver-mobile-ev-charger-repair.md` → `/denver-mobile-ev-charger-repair/`

```yaml
---
title: "Clear, benefit-focused title that includes city or key distinction"
description: "1-2 sentence meta description. Include the core question. Customer never pays the directory."
city: "City Name"
service: "Service Category"
lastReviewed: "YYYY-MM-DD"
---

Opening local context…

## 1. First major question

- **Ask:** *"Exact question"*
- Explain what a useful answer or proof looks like.
- Identify warning signs without making unsupported accusations.

## Before you book

Short actionable summary.

## Sources

- Official links with source title and publication/update date where available.
```

## Article requirements

- Frontmatter: `title`, `description`, `city`, `service`, and `lastReviewed`.
- At least 500 words of useful, original guidance.
- No `#` H1 in the body; use section headings beginning at `##`.
- Include specific local context and relevant city, county, and state rules or conditions.
- Include actionable questions to ask, proof/documents to request, warning signs, and a reminder to verify current local requirements.
- Include a `## Sources` section with direct, working sources. Prefer government, regulator, licensing-board, court, and reputable reporting sources. Include publication/update dates and access date where available.
- Use external links that open in a new tab only with appropriate rel attributes: `target="_blank" rel="noopener noreferrer"`. For paid/sponsored links, use the legally required disclosure and `rel="nofollow sponsored"`.
- Do **not** require Amazon affiliate links, product recommendations, affiliate disclosures, ASINs, affiliate URLs, or monetized product sections. Consumer checklists are complete without product promotion.
- Never invent statistics, laws, product links, providers, or source details.

## Safety and publishing

All information is general consumer education, not legal, medical, engineering, or professional advice. Explain uncertainty and exceptions. Tell readers to verify current requirements with the relevant authority.

Astro loads live checklists from `src/content/checklists/`; files under `drafts/` are not part of the live content collection. Do not move drafts into the live collection, merge a publishing PR, deploy, or push article files to `main`. Only the repository owner can approve publication.

*Customer never pays the directory.*
