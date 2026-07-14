import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import aboutImage from "@/assets/painter.webp";

const POINTS = [
  "High-quality finishes on every surface",
  "Honest, transparent pricing",
  "Meticulous attention to detail",
  "Customer satisfaction guaranteed",
];

export function AboutSection({ full = false }: { full?: boolean }) {
  return (
    <section className="bg-sage py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <img
                src={aboutImage}
                alt="RR Painters craftsman applying a premium finish to an interior wall"
                width={1024}
                height={1280}
                className="w-full rounded-4xl object-cover shadow-lift"
              />
              <div className="glass-light absolute -bottom-6 left-6 rounded-3xl px-6 py-5 shadow-soft">
                <p className="font-display text-3xl font-semibold text-primary">Since 2018</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Serving Hutt Valley, Kapiti Coast, Porirua & Wellington in New Zealand
                </p>
              </div>
            </div>

          <div>
            <Reveal>
              <span className="inline-block rounded-full bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-soft">
                About RR Painters
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl lg:text-[2.75rem]">
                Craftsmanship You Can Trust, Finishes You'll Love
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                RR Painters is a reliable New Zealand painting company committed to delivering
                high-quality finishes, honest service and genuine attention to detail. From single
                rooms to full commercial fit-outs, we treat every project like it's our own home —
                because your satisfaction is how we measure success.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm font-semibold">
                    <svg 
                      className="h-5 w-5 shrink-0 text-accent" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24" 
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            {!full && (
              <Reveal delay={0.2}>
                <Link
                  to="/about"
                  className="story-link relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold"
                > 
                  More About Us <svg 
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
              </Reveal>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
