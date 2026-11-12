# Drafts directory for AskBeforeYouBook

Drop finished or near-finished checklist articles here as Markdown files.

The daily publishing automation (runs ~8 PM Eastern) will:

1. Read every `*.md` file in this folder
2. Validate required frontmatter + content structure + affiliate link compliance
3. Move the published version into `src/content/checklists/` (with `draft: false`)
4. Remove the original file from `drafts/` after successful publish
5. Open + auto-merge a PR so Cloudflare Pages deploys it

## Required file format

Filename: kebab-case slug that will become the URL path  
Example: `denver-mobile-ev-charger-repair.md` → live at `/denver-mobile-ev-charger-repair/`

```yaml
---
title: "Clear, benefit-focused title that includes city or key distinction"
description: "1-2 sentence meta description. Include the core question the homeowner should ask. Customer never pays the directory."
city: "City Name"          # e.g. Denver, Austin, Charlotte
service: "Service Category" # e.g. EV Charger, Grease Trap, Dumpster Rental
lastReviewed: "YYYY-MM-DD"  # optional; automation will set to today if missing
---

Opening paragraph that sets local context and the main risk/surprise homeowners face.

## 1. First major question / decision point

Explain why it matters. Give the exact wording the homeowner should ask.

- **Ask:** *"Exact question in quotes"*
- Red flag or consequence if the answer is wrong

## 2. Second major point

...

## 3. ...

Aim for 500+ words of substantive, city-specific guidance (municipal codes, local conditions, real questions).

## Before you book

One short summary of the key checks.

## Sources

- Official municipal or state links (preferred)
- Relevant code references

---

### Recommended product / tool (required affiliate section)

As an Amazon Associate, Ask Before You Book earns from qualifying purchases at no extra cost to you.

<a href="https://amzn.to/XXXXX" rel="nofollow sponsored" target="_blank">Product name that helps with this job</a>

*Customer never pays the directory.*
```

### Hard requirements the automation will enforce

- Frontmatter must contain `title`, `description`, `city`, `service`
- At least one affiliate product link using `rel="nofollow sponsored"`
- FTC-style disclosure present near the affiliate section
- No `#` H1 in the body (the page template supplies the H1)
- Content must feel local (city/municipal references preferred)
- Do not edit layouts, components, or global config files from drafts

### Tips for other agents

- Prefer real local ordinances, health department rules, or state agency guidance over generic advice.
- Every checklist should leave the homeowner with 3–5 concrete questions to ask before booking.
- Keep the tone neutral and practical. "Customer never pays the directory."
- If the draft is not ready, leave it here; the automation will skip incomplete files and report them.

After a successful publish the file is removed from `drafts/` so this folder stays clean for the next batch.
