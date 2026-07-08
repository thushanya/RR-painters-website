## Changes

### 1. Differentiate the Home page
Currently the home page reuses the same section components (About, Services, WhyChoose, ProcessTimeline, Testimonials, FAQ) that also appear on the sub-pages, so visitors see near-identical content everywhere. Make the home page a lighter "overview + teasers" experience that funnels users into the dedicated pages.

Home page (`src/routes/index.tsx`) new composition:
- Hero (unchanged)
- TrustSection (unchanged)
- A shorter **home-only About teaser** — new lightweight component `HomeAboutTeaser.tsx` with a condensed intro + "More about us" link (instead of full `AboutSection` with 4 stat counters + checklist that already lives on /about).
- ServicesSection (limit 3 instead of 6) — /services shows all.
- ProjectsGallery (limit 3) — unchanged.
- A new **home-only "By the Numbers" strip** (`StatsStrip.tsx`) — just the 4 animated stat counters as a standalone band (moves the counters off the About section so they don't duplicate on /about).
- TestimonialsSection (limit 2) — /testimonials shows all.
- CtaBanner (unchanged)

Removed from home: `WhyChoose`, `ProcessTimeline`, `FaqSection` (each lives on its dedicated page).

Also update `AboutSection` so it no longer renders the stats block (stats now live in the new `StatsStrip` on the home page, and `/about` gets `StatsStrip` inserted in its place so nothing is lost there).

### 2. Section removals
- `src/routes/services.tsx` — remove `<ProcessTimeline />`.
- `src/routes/projects.tsx` — remove `<TestimonialsSection limit={3} />`.
- `src/routes/about.tsx` — remove `<WhyChoose />`.

### 3. Warmer background
The current `--background` token is a very light off-white. Shift it to a soft beige so all "white" sections read as warm cream.

- In `src/styles.css`, change the `--background` OKLCH value to a light beige (roughly `oklch(0.965 0.018 85)` — warm cream/beige). This automatically warms every section that uses `bg-background` (Hero base, ServicesSection, ProcessTimeline, FaqSection, ContactSection, etc.) without touching individual components.
- Leave `--sage`, `--card`, and `--primary-foreground` alone so the alternating sage bands and card surfaces still provide contrast against the new beige.

### Technical notes
- New files: `src/components/site/HomeAboutTeaser.tsx`, `src/components/site/StatsStrip.tsx` (extracts the existing `Counter` + `STATS` grid from `AboutSection`).
- Edited files: `src/routes/index.tsx`, `src/routes/about.tsx`, `src/routes/services.tsx`, `src/routes/projects.tsx`, `src/components/site/AboutSection.tsx` (drop stats block), `src/styles.css` (background token).
- No routing, data, or backend changes.
