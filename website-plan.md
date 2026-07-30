# NexBio Website Plan

This file tracks the website structure, navigation, components, and build order for the NexBio company website.

## Current Status

Completed homepage sections:

- [x] Hero
- [x] Challenges
- [x] Platform
- [x] About
- [x] Products Preview
- [x] Use Cases
- [x] Standards & Security
- [x] Home CTA
- [x] Footer

## Website Structure

### Home

Route: `/`

Purpose: Introduce NexBio, explain the market problem, present the platform, build trust, and guide visitors toward products or contact.

Sections:

- [x] Hero
- [x] Challenges
- [x] Platform
- [x] About
- [x] Products Preview
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

### Header

- [x] Platform -> `/#platform`
- [x] Products -> `/products`
- [x] NexABIS -> `/products/nexabis`
- [x] NexSAS -> `/products/nexsas`
- [x] NexSDK -> `/products/nexsdk`
- [x] Solutions -> `/solutions`
- [x] Technology -> `/technology`
- [x] Company -> `/company`
- [x] Contact / Request Demo -> `/contact`

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

- [x] `Header`
- [x] `Home`
- [x] `Hero`
- [x] `Challenges`
- [x] `Platform`
- [x] `About`

Homepage components to add:

- [x] `ProductsPreview`
- [x] `UseCases`
- [x] `SecurityStandards`
- [x] `HomeCTA`
- [x] `Footer`

Shared page components:

- [ ] `PageHero`
- [ ] `SectionHeader`
- [ ] `FeatureGrid`
- [ ] `ProductVisualPlaceholder`
- [ ] `CTASection`

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

Recommended next steps:

1. [x] Add `ProductsPreview` to the homepage.
2. [x] Add `UseCases` to the homepage.
3. [x] Add `SecurityStandards` to the homepage.
4. [x] Add `HomeCTA` to the homepage.
5. [x] Add `Footer`.
6. [ ] Add routing.
7. [ ] Create `/products` overview page.
8. [ ] Create `/products/nexabis`.
9. [ ] Create `/products/nexsas`.
10. [ ] Create `/products/nexsdk`.
11. [ ] Create `/solutions`.
12. [ ] Create `/technology`.
13. [ ] Create `/company`.
14. [ ] Create `/contact`.

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
