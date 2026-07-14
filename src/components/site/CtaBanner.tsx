import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { COMPANY } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="bg-sage px-5 pb-20 md:pb-28 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-forest px-8 py-14 text-center text-primary-foreground shadow-lift md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
          />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
            Ready to Transform Your Property?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/75">
            Get your free, no-obligation quote today and see why New Zealanders trust RR Painters.
          </p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="hover-scale inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-gold"
            >
              Get a Free Quote <svg 
                className="h-4 w-4" 
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="glass hover-scale inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-primary-foreground"
            >
              <svg 
                className="h-4 w-4" 
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
