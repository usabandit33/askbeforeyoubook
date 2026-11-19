# Drafts directory for AskBeforeYouBook

**Critical rule for other agents:** Do **not** push checklist article .md files directly to main.

Cloudflare Pages deploys on every push to main. Put unfinished articles on a feature branch and open a Draft pull request. Do not merge, publish, deploy, or move draft files into src/content/checklists/ without human approval.

## Correct workflow

1. Create a clearly named feature branch.
2. Add publishable Markdown drafts under drafts/ on that branch only.
3. Follow the article format below.
4. Open a **Draft** pull request against main.
5. State clearly in the PR body: **Draft only — do not merge.**
6. Keep the files on the unmerged branch until review and approval.

## What belongs in this folder

- On main: this README and optional empty placeholders only.
- On a feature branch: one Markdown article per researched niche.

Do not put research reports in Markdown under drafts/, because the publishing automation may treat every Markdown file in this folder as publishable content. If supplementary research records are needed, use JSON or another non-Markdown format in a clearly named research folder.

## Required article format

Filename: kebab-case slug that matches the article topic and city.

~~~yaml
---
title: "Clear, benefit-focused title that includes the city or key distinction"
description: "1-2 sentence meta description that states the customer problem and what the checklist helps them decide."
city: "City Name"
service: "Service Category"
lastReviewed: "YYYY-MM-DD"
---

Opening local context…

## 1. First major question

- **Ask:** *"Exact question"*
- Explain the evidence, document, or answer the customer should request.

## Before you book

Short summary of the decisions to verify before signing.

## Sources

- Official or reputable source links with publication or access dates.
~~~

## Hard requirements

- Frontmatter includes title, description, city, service, and lastReviewed.
- The article body contains no # H1 heading. Use the frontmatter title instead.
- Prefer at least 500 words of useful, original, local guidance.
- Include local rules, permits, licensing, insurance, or market conditions where relevant.
- Include actionable questions to ask before hiring.
- Include proof or documents to request.
- Include warning signs and a clear **Before you book** section.
- Include a **Sources** section with current, credible links.
- External links in article HTML must use target="_blank" and rel="noopener noreferrer" when HTML links are used.
- Do not add Amazon products, affiliate links, affiliate disclosures, ASINs, product promotions, or monetized sections. These are independent consumer-education resources.

## Why this matters

Astro loads live content from src/content/checklists/. Files under drafts/ are for review only. Keeping them on an unmerged feature branch prevents unfinished work from triggering a production release.
