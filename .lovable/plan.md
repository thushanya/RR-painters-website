## Changes

### 1. Individual service detail pages (7 pages)

Add a dynamic route `src/routes/services.$slug.tsx` that renders a rich, per-service page based on the slug. Each of the 7 services (`interior-painting`, `exterior-painting`, `roof-painting`, `roof-cleaning`, `water-blasting`, `wallpaper-removal`, `plaster-repairs`) gets its own detailed content: hero image, long overview, "what's included" bullet list, benefits, ideal-for use cases, and a CTA to the contact page.

**Data model** — extend `SERVICES` in `src/lib/site-data.ts` with a `detail` object per service:
```
detail: {
  tagline: string,           // hero subtitle
  intro: string,             // 2–3 paragraph overview
  image: string,             // imported asset URL
  includes: string[],        // 5–7 "what we do" bullets
  benefits: { title, text }[], // 3–4 benefit cards
  idealFor: string[],        // 4–5 property/situation types
}
```

**Route file** — `src/routes/services.$slug.tsx`:
- `createFileRoute` with `head()` that derives title/description/og from the selected service (unique per service — no metadata reuse)
- Loader-free; resolves service via `SERVICES.find(s => s.slug === params.slug)`; renders `notFoundComponent` if missing
- Layout, top → bottom:
  1. `ServiceHero` — full-width forest-gradient banner with breadcrumb (Home / Services / Title), icon, title, tagline, CTA buttons ("Get a Free Quote", "Call Now")
  2. **Overview** — two-column: hero image (rounded, shadow-lift) + intro paragraphs
  3. **What's Included** — checklist grid on sage background
  4. **Benefits** — 3–4 card grid on background with icons
  5. **Ideal For** — pill row / tag list
  6. **Related Services** — small 3-card grid showing other services (excluding current), each linking to its own detail page
  7. `CtaBanner`

**Make service cards clickable** — update `src/components/site/ServicesSection.tsx`:
- Replace the "Learn More → /contact" link with `to="/services/$slug"` using `params={{ slug: service.slug }}`
- Wrap the whole card in the `Link` (or make the card a `Link`) so the entire tile is clickable, keeping the current hover-lift visual

**Images** — generate 4 new service images we don't already have (interior, exterior are covered by existing project images we can reuse; generate for: `roof-cleaning`, `wallpaper-removal`, `plaster-repairs`, and one clean `service-interior-hero`). Reuse existing `project-*.jpg` assets where they fit (e.g. `project-roof.jpg` for roof-painting, `project-waterblast.jpg` for water-blasting, `project-exterior.jpg` for exterior-painting, `project-interior.jpg` for interior-painting). Net new generations: 3 images.

### 2. Contact page — remove Google Map placeholder

In `src/components/site/ContactSection.tsx`, delete the `<Reveal delay={0.36}>` block (lines ~78–92) containing the "Google Maps — coming soon" placeholder card. Nothing replaces it — the contact info stack + CTA buttons remain.

### Technical notes
- Files created: `src/routes/services.$slug.tsx`, 3 new service images under `src/assets/`.
- Files edited: `src/lib/site-data.ts` (extend Service type + add detail per service), `src/components/site/ServicesSection.tsx` (link cards to detail pages), `src/components/site/ContactSection.tsx` (remove map block).
- No changes to backend, routing outside the new dynamic route, or shared layout.
- Uses existing design tokens (forest gradient, sage sections, card/shadow-soft) — no new colors.
