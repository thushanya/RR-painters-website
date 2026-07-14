import { Link } from "@tanstack/react-router";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-gradient-forest text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden text-lg font-bold glass text-primary-foreground">
                <img 
                  src="/favicon.webp"
                  alt="RR Painters Logo" 
                  className="h-full w-full object-cover" 
                />
              </span>
              <span>
                <span className="font-display block text-xl font-semibold">RR Painters</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
                  Painting Excellence
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
              Trusted residential and commercial painting specialists across Hutt Valley, Kapiti Coast, Porirua & Wellington in New Zealand delivering
              quality workmanship since 2018.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/60">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="story-link text-sm text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/60">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="story-link text-sm text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/60">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                {/* Inline Phone SVG */}
                <svg className="mt-1 h-4 w-4 shrink-0 text-emerald" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.384 17.791l-3.75-3.214a1.25 1.25 0 00-1.616.033l-1.571 1.305c-2.938-1.545-5.327-3.935-6.872-6.872l1.305-1.57a1.25 1.25 0 00.033-1.616L5.698 1.107A1.25 1.25 0 004.05 1.02L1.082 3.22A2.5 2.5 0 000 5.23c0 10.364 8.407 18.77 18.77 18.77a2.5 2.5 0 002.01-1.082l2.2-2.969a1.25 1.25 0 00-.087-1.644l-.509-.514z"/>
                </svg>
                <a href={COMPANY.phoneHref} className="hover:text-primary-foreground">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                {/* Inline Envelope SVG */}
                <svg className="mt-1 h-4 w-4 shrink-0 text-emerald" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href={COMPANY.emailHref} className="break-all hover:text-primary-foreground">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                {/* Inline Map Marker SVG */}
                <svg className="mt-1 h-4 w-4 shrink-0 text-emerald" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Serving Hutt Valley, Kapiti Coast, Porirua & Wellington in New Zealand</span>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-white/5 p-4 text-xs leading-relaxed text-primary-foreground/60">
              <p className="font-semibold text-primary-foreground/80">{COMPANY.legalName}</p>
              <p>Company Number: {COMPANY.companyNumber}</p>
              <p>NZBN: {COMPANY.nzbn}</p>
              <p className="mt-1 italic">{COMPANY.incorporation}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}