# NexBio Website Plan

This file tracks the website structure, navigation, components, and build order for the NexBio company website.

## Current Status

The site is now a **multi-page app** powered by `react-router-dom` (v7). Routing, a shared `Layout` (Header + `<Outlet/>` + Footer), a `ScrollManager`, a lean header, and a real hero + intro + CTA **scaffold for every page** are all in place — no route 404s. Homepage sections are complete; the other pages are scaffolded and ready to be built out page-by-page.

Completed homepage sections (`/`):

- [x] Hero
- [x] Challenges
- [x] Platform (includes the product cards — the former standalone *Products Preview* was merged here and deleted)
- [x] About (home section)
- [x] Use Cases
- [x] Standards & Security
- [x] Home CTA

> Header & Footer are now global chrome rendered by `Layout` (not per-page).

Pages scaffolded: `/`, `/products`, `/products/:slug` (nexabis / nexsas / nexsdk), `/about`, `/contact`, and `*` (NotFound).

## Website Structure

### Home

Route: `/`

Purpose: Introduce NexBio, explain the market problem, present the platform, build trust, and guide visitors toward products or contact.

Sections:

- [x] Hero
- [x] Challenges
- [x] Platform
- [x] About
- [x] Use Cases
- [x] Standards & Security
- [x] Home CTA

### Products Overview

Route: `/products`

Purpose: Present the full NexBio product ecosystem and guide users to individual product pages.

Sections:

- [ ] Products Hero
- [ ] Product Ecosystem Flow
- [ ] Product Comparison
- [ ] Product Integration CTA

Child pages:

- [ ] `/products/nexabis`
- [ ] `/products/nexsas`
- [ ] `/products/nexsdk`

### NexABIS

Route: `/products/nexabis`

Purpose: Detail the Automated Biometric Identification System.

Sections:

- [ ] Product Hero
- [ ] Supported Modalities
- [ ] Core Capabilities
- [ ] Deployment Use Cases
- [ ] Architecture / Product Image Space
- [ ] CTA

Core content:

- Fingerprint, face, and iris support
- Identification
- Verification
- Deduplication
- Watchlist search
- Enrollment quality assessment
- Identity management

### NexSAS

Route: `/products/nexsas`

Purpose: Detail the Smart Adjudication System.

Sections:

- [ ] Product Hero
- [ ] Case Management Workflow
- [ ] Operator Assignment
- [ ] Supervisor Review
- [ ] Evidence Comparison
- [ ] Audit Trails & Analytics
- [ ] Product UI Image Space
- [ ] CTA

Core content:

- Case management
- Adjudication workflow
- Operator assignment
- Supervisor review
- Evidence comparison
- Audit trails
- Decision history
- Analytics
- Performance monitoring

### NexSDK

Route: `/products/nexsdk`

Purpose: Detail the developer SDK for biometric capture and integration.

Sections:

- [ ] Product Hero
- [ ] SDK Modalities
- [ ] Capture & Verification Features
- [ ] API / Developer Integration
- [ ] Supported Platforms
- [ ] Code / API Preview
- [ ] CTA

Core content:

- Fingerprint SDK
- Face SDK
- Iris SDK
- Enrollment
- Verification
- Liveness
- Quality assessment
- Template extraction
- API integration

### Solutions

Route: `/solutions`

Purpose: Show where NexBio products are applied.

Sections:

- [ ] Solutions Hero
- [ ] Use Case Grid
- [ ] Workflow Examples
- [ ] CTA

Use cases:

- National ID
- Border control
- Immigration
- Civil registration
- Law enforcement
- Banking
- Enterprise identity
- Healthcare
- Access control

### Technology

Route: `/technology`

Purpose: Explain the platform architecture, security model, standards, and scalability.

Sections:

- [ ] Technology Hero
- [ ] Biometric Modalities
- [ ] Matching & Deduplication
- [ ] Workflow Orchestration
- [ ] Security Architecture
- [ ] Standards & Interoperability
- [ ] Scalability

### Company

Route: `/company`

Purpose: Explain NexBio's vision, mission, philosophy, and reason for existing.

Sections:

- [ ] Company Hero
- [ ] Vision
- [ ] Mission
- [ ] Why NexBio Exists
- [ ] Philosophy
- [ ] Operational Experience

### Contact

Route: `/contact`

Purpose: Let prospects request a demo or contact NexBio.

Sections:

- [ ] Contact Hero
- [ ] Demo Request Form
- [ ] Enterprise / Government Inquiry
- [ ] Contact Details

## Navigation Map

### Header (lean — `Link`-based, router-aware)

- [x] Logo -> `/`
- [x] Products -> `/products` (dropdown: NexABIS `/products/nexabis`, NexSAS `/products/nexsas`, NexSDK `/products/nexsdk`, All Products `/products`)
- [x] About -> `/about`
- [x] Contact -> `/contact`
- [x] Request Demo (button) -> `/contact`

> Solutions & Technology are **not** in the header — they remain homepage sections, reachable from the footer via `/#use-cases` and `/#security-standards` (handled by `ScrollManager`).

### Footer

- [x] Products
- [x] Solutions
- [x] Technology
- [x] Company
- [x] Contact
- [x] Privacy Policy
- [x] Terms
- [x] Security

## Component Checklist

Existing components:

- [x] `Header` (lean nav, `Link`-based)
- [x] `Footer` (global, route links)
- [x] `Layout` (Header + `<Outlet/>` + Footer)
- [x] `ScrollManager` (scroll-to-top + hash on route change)
- [x] `Hero`, `Challenges`, `Platform`, `About` (home section), `UseCases`, `SecurityStandards`, `HomeCTA`

Homepage components to add:

- [x] `UseCases`
- [x] `SecurityStandards`
- [x] `HomeCTA`
- [x] `Footer`
- [~] `ProductsPreview` — removed; product cards now live in `Platform`

Shared page components:

- [x] `PageHero`
- [x] `SectionHeader`
- [x] `CTASection`
- [ ] `FeatureGrid` (add when building out product detail)
- [ ] `ProductVisualPlaceholder` (add when product imagery is ready)

Shared data:

- [x] `src/data/products.ts` (NexABIS, NexSAS, NexSDK — name, slug, overview, badges, stats, capabilities)

Pages (`src/pages/`):

- [x] `Home`, `Products`, `ProductDetail`, `About`, `Contact`, `NotFound`

Product page components:

- [ ] `ProductHero`
- [ ] `ProductFeatureGrid`
- [ ] `ProductWorkflow`
- [ ] `ProductCapabilities`
- [ ] `ProductUseCases`

Other page components:

- [ ] `SolutionsGrid`
- [ ] `TechnologyOverview`
- [ ] `ContactForm`

## Implementation Order

Done in this structural pass:

1. [x] Homepage sections complete (Hero, Challenges, Platform, About, UseCases, SecurityStandards, HomeCTA).
2. [x] Install `react-router-dom` v7 + `BrowserRouter` routes in `App.tsx`.
3. [x] Shared `Layout` (Header + `<Outlet/>` + Footer) and `ScrollManager` (scroll-to-top + hash).
4. [x] Rewrite `Header` to lean nav (Products dropdown, About, Contact) using `Link`.
5. [x] Repoint `Footer` links to real routes; keep home-section hash links.
6. [x] Shared components: `PageHero`, `SectionHeader`, `CTASection`.
7. [x] Shared data: `src/data/products.ts` (single source for the 3 products).
8. [x] Page scaffolds: `Home`, `Products`, `ProductDetail` (`/products/:slug`), `About`, `Contact`, `NotFound`.

Next — build out full content, page by page (priority order):

9. [ ] **About** — full company story, team, timeline, badges (readme §1, §2, §11).
10. [ ] **Products overview** — comparison table, integration detail, deployment options.
11. [ ] **NexABIS / NexSAS / NexSDK detail** — full readme §12 content (capabilities, metrics, use cases, deployment, compliance) per product.
12. [ ] **Contact** — wire the demo form (backend or mailto), add map/office detail.
13. [ ] *(Optional)* Dedicated `/solutions` and `/technology` pages; Blogs.

## Content Source

Primary company and product content should be taken from:

- `readme.md`

## Design Direction

- Modern, premium, technical B2B identity infrastructure website.
- Dark sections for platform/product/technology content.
- Clean white or light sections for explanation-heavy areas.
- Use structured product visuals and reserved product image placeholders.
- Use subtle reveal animations and hover states.
- Avoid marketing fluff; prioritize operational clarity, trust, security, scale, and interoperability.
