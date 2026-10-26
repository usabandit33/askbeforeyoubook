## Project Purpose

This is the central website for AskBeforeYouBook.com, a free collection of practical checklists for homeowners.

Each checklist helps people ask the right questions before booking or hiring local service providers (plumbing, irrigation, appliances, etc.). The goal is to reduce surprises, clarify scope, and confirm who does the work.

Customer never pays the directory. All information is free, general guidance only — not a recommendation or endorsement of any provider.

## Research Sources

Individual checklists are researched and maintained in separate repositories (for example, head-or-line for Austin irrigation, salt-or-free for Charlotte water softeners, find-then-fix for Phoenix pool leaks). This site aggregates the published versions into content collections so homeowners can browse them in one place.

When updating content, respect the original research in those repos. Prefer linking back to the source repo for full context rather than duplicating long explanations.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Local operator data

Public checklist pages no longer list companies. The previous "Local companies to ask" blocks are archived (not rendered) at:

`src/data/local-operators-archive.json`

keyed by checklist slug. Keep this file for internal research only.

## Contractor submission form

Every checklist page includes a form (name, email, specific request) via `src/components/ContractorSubmitForm.astro`.

Submissions are sent **directly to an email inbox** via FormSubmit.co.

To set the inbox:

1. Open `src/components/ContractorSubmitForm.astro`
2. Change the constant near the top:
   ```
   const INBOX_EMAIL = "kaelnventures@gmail.com";
   ```
   to the real address that should receive contractor tips.
3. Redeploy.

The first time a form is submitted to a new address, FormSubmit sends a one-time confirmation email — click the link in that email to activate delivery. After that, every submission lands in the inbox as a normal email.

## Architecture, SEO & Deployment Standards

For complete documentation on site architecture, Cloudflare Pages deployment, Google SEO and indexing guidelines, affiliate link compliance (`rel="nofollow sponsored"`), and content depth requirements, see:

[`AUDIT_ARCHITECTURE_REFERENCE.md`](file:///c:/Users/User/askbeforeyoubook/AUDIT_ARCHITECTURE_REFERENCE.md)

Key rules summary:
1. **Cloudflare Deployment:** Node 22 pinned in `.node-version` and `.nvmrc`. `engines.node` `>=20.0.0`.
2. **Canonical URLs:** Always compute deterministically via `new URL(Astro.url.pathname, Astro.site).href`. Trailing slash is set to `always`.
3. **Robots & Sitemap:** `public/robots.txt` points directly to `sitemap-index.xml`.
4. **Affiliate Links:** Must include `rel="nofollow sponsored"`. Global footer must maintain the FTC/Amazon Associates disclosure.
5. **Content Quality:** Avoid thin content (<500 words). Every checklist must feature local municipal agency details, code citations, and verbatim questions to ask contractors.
6. **Internal Linking:** Checklist pages must preserve dynamic related checklists (same city, same trade) and breadcrumbs.
7. **AI Consulting:** Primary navigation maintains the `/ai-consulting/` link, with interest forms configured to `mailto:kaelnventures@gmail.com`.
