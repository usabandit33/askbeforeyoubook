# AskBeforeYouBook.com — System Architecture & SEO Audit Reference

> **Notice for Internal AI Agents & Developers:** This file documents the core system architecture, technical SEO configurations, content standards, and deployment rules for `AskBeforeYouBook.com`. Reference this document before adding or modifying pages, components, or content collections.

---

## 1. Project Purpose & High-Level Architecture

* **Primary Mission:** Free collection of practical, trade-specific checklists for homeowners to ask the right questions before hiring local service contractors (plumbing, foundation, HVAC, electrical, waste, roofing, etc.).
* **Core Philosophy:** *Customer never pays the directory.* All advice is free, unbiased, general guidance to prevent surprise contractor fees, clarify project scope, and confirm who actually does the work.
* **Framework:** [Astro](https://astro.build/) (Static Site Generation / SSG).
* **Target Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/) directly from the GitHub repository (`main` branch).

---

## 2. Cloudflare Pages Deployment Rules

To prevent CI/CD failures and ensure seamless static builds:

1. **Node.js Environment:**
   * Both `.node-version` and `.nvmrc` specify Node `22`.
   * `package.json` engines are set to `"node": ">=20.0.0"`.
   * In the Cloudflare Pages Dashboard, ensure environment variable `NODE_VERSION` is set to `22` (or uses the `.node-version` file).
2. **Build Settings:**
   * **Framework preset:** `Astro`
   * **Build command:** `npm run build`
   * **Build output directory:** `dist`
3. **Static Headers & Security (`public/_headers`):**
   * Configured for Cloudflare Pages edge delivery.
   * Caches static build assets (`/_astro/*`) with `max-age=31536000, immutable`.
   * Enforces security headers (`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`).

---

## 3. Technical SEO & Canonical Routing

1. **Canonical URLs:**
   * Canonicals are resolved deterministically in `src/layouts/BaseLayout.astro`:
     ```typescript
     const siteUrl = Astro.site ?? new URL('https://askbeforeyoubook.com');
     const canonical = new URL(Astro.url.pathname, siteUrl).href;
     ```
   * **Rule:** Never use `Astro.url.href` directly for canonical tags, as it retains query parameters (e.g., `?utm_source=...`), preview subdomains, and tracking hashes.
2. **Trailing Slashes:**
   * Configured in `astro.config.mjs` with `trailingSlash: 'always'`. All internal routes must consistently include the trailing slash (e.g., `/austin-dumpster/`).
3. **Robots Exclusion (`public/robots.txt`):**
   * Plain text file explicitly pointing to the sitemap index:
     ```txt
     User-agent: *
     Allow: /

     Sitemap: https://askbeforeyoubook.com/sitemap-index.xml
     ```
4. **Structured Data (JSON-LD):**
   * **Homepage (`src/pages/index.astro`):** Implements `WebSite` (with `SearchAction`) and `Organization` schemas.
   * **Checklist Pages (`src/pages/[...slug].astro`):** Implements `Article` and `BreadcrumbList` schemas.
5. **Social Metadata:**
   * Open Graph (`og:title`, `og:description`, `og:url`, `og:image`, `og:site_name`) and Twitter Card (`summary_large_image`, `twitter:image`, `twitter:title`, `twitter:description`) tags are rendered on all pages.

---

## 4. Affiliate Links & FTC Compliance

* **Google Search Spam Policy Compliance:** Every commercial or affiliate link (e.g., Amazon Associates links `amzn.to` or `link.amazon`) **must** include:
  ```html
  rel="nofollow sponsored"
  ```
  Failing to mark monetization links with `sponsored` or `nofollow` risks search index penalties for unnatural outbound link manipulation.
* **FTC & Amazon Associates Disclosures:** 
  * The global footer in `src/layouts/BaseLayout.astro` includes the required legal disclosure:
    *"Disclosure: As an Amazon Associate, Ask Before You Book earns from qualifying purchases through affiliate links at no extra cost to you. Customer never pays the directory."*
  * All markdown checklists with recommended tools must include a matching disclosure note.

---

## 5. Content Quality & Thin Content Standards

To prevent pages from being classified as low-value "doorway pages" or flagged under Google's Helpful Content System (*"Crawled - currently not indexed"*):

1. **Word Count & Depth:** Every checklist article in `src/content/checklists/` should aim for **500+ words** of substantive, actionable advice.
2. **City-Specific Context:** Checklists must not be generic programmatic templates with only a city name swapped in. They must reference:
   * Local municipal departments (e.g., Denver Community Planning & Development, Chicago Department of Water Management, Texas DPS, Mecklenburg County Health).
   * Applicable municipal codes or regional environmental factors (e.g., high altitude venting in Denver, Piedmont clay soils in the Carolinas, freeze-thaw frost lines in Columbus/Kansas City, Sonoran heat shock in Phoenix).
3. **Structured Questions:** Each article must provide specific, verbatim questions the homeowner should ask contractors before booking, accompanied by "Red Flag" warnings for common industry traps.
4. **Heading Hierarchy:** Use clean markdown structure (`##` for main points, `###` for sub-points). Do not place `# H1` headings inside markdown content; the `<h1>` is dynamically provided by `[...slug].astro`.

---

## 6. Internal Linking & Information Architecture

1. **Topic Clusters & Related Guides:**
   * Every checklist page generated via `src/pages/[...slug].astro` dynamically computes and displays:
     * **More Homeowner Guides for [City]:** Links to other checklists in the same metropolitan area.
     * **[Service] Checklists in Other Cities:** Cross-links to the same trade in other markets.
     * **Popular Checklists:** Fallback internal links to maintain sitewide crawl distribution.
2. **Breadcrumbs:**
   * Every checklist displays breadcrumbs: `Home / [City] / [Service]`.
   * Accompanied by machine-readable `BreadcrumbList` JSON-LD schema.
3. **Homepage Categorization:**
   * Checklists are indexed into trade-specific clusters (Plumbing & Water Systems; HVAC & Electrical; Foundation & Concrete; Exterior, Roofing & Waste; Specialty & Emergency Services).

---

## 7. Performance & Core Web Vitals (CWV)

1. **Cumulative Layout Shift (CLS):**
   * All images (`banner.jpg`, `ai-consulting-banner.jpg`) must have explicit `width` and `height` attributes to prevent layout reflow during page load.
2. **Largest Contentful Paint (LCP):**
   * On article pages, `hideBanner={true}` is set by default so the article `<h1>` and introductory text are immediately visible above the fold on mobile and desktop without a heavy 180px banner pushing content down.
   * `loading="eager"` is applied to above-the-fold banners.

---

## 8. Form Handling & External Endpoints

1. **Contractor Submission Form (`src/components/ContractorSubmitForm.astro`):**
   * Connects homeowners with operators for research.
   * Posts to `https://formsubmit.co/kaelnventures@gmail.com` with anti-spam honeypot fields.
   * Free and non-commercial for the homeowner.
2. **AI Consulting (`src/pages/ai-consulting.astro`):**
   * Kept in the primary header navigation as requested.
   * Interest forms post directly to `mailto:kaelnventures@gmail.com`.
