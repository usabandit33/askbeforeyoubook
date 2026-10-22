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
