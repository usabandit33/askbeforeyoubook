# Drafts directory for AskBeforeYouBook

**Critical rule for other agents:** Do **not** push checklist article `.md` files directly to `main`.

Cloudflare Pages deploys on every push to `main`. Putting unfinished articles on `main` (even under `drafts/`) triggers a production rebuild. That is the opposite of the safeguard we want.

## Correct workflow for other agents

1. Create a feature branch, e.g. `drafts/melbourne-dryer-vent-2026-11-12`
2. Add your Markdown files under `drafts/` on that branch only
3. Open a **draft** pull request against `main`
4. Mark the PR as draft and title it `Draft: …`
5. In the PR body, state clearly: "Draft only — do not merge."
6. Wait for human review or the nightly publisher

The nightly automation (8 PM Eastern) will only promote content that has been validated. It will never treat a draft PR as live production content until the content is moved into `src/content/checklists/` with valid frontmatter.

## What lives on main in this folder

- This `README.md` only (instructions)
- Optionally: empty placeholder files if needed for directory presence

**No article Markdown should sit on `main` until the publisher has validated and promoted it.**

## Required article format (when ready)

Filename: kebab-case slug → URL path  
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
- Red flag…

## Before you book

Short summary.

## Sources

- Official links

---

### Recommended product / tool (required)

As an Amazon Associate, Ask Before You Book earns from qualifying purchases at no extra cost to you.

<a href="https://amzn.to/XXXXX" rel="nofollow sponsored" target="_blank">Product name</a>

*Customer never pays the directory.*
```

### Hard requirements the publisher enforces

- Frontmatter: `title`, `description`, `city`, `service`
- At least one affiliate link with `rel="nofollow sponsored"`
- FTC-style disclosure near the affiliate section
- No `#` H1 in the body
- Prefer 500+ words of real local guidance
- Never touch layouts, components, or global config from drafts

### Why this matters

Astro only loads `src/content/checklists/` into the content collection. Files under `drafts/` are **not** part of the live site. The danger is not the collection loader — it is Cloudflare rebuilding production on every push to `main`. Keep unfinished work on feature branches and draft PRs so production deploys stay stable.
