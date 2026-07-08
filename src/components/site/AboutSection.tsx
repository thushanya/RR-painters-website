import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useInView } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Reveal, SectionHeading } from "./Reveal";
import { STATS } from "@/lib/site-data";
import aboutImage from "@/assets/about-painter.jpg";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-primary md:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

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
          <Reveal>
            <div className="relative">
              <img
                src={aboutImage}
                alt="RR Painters craftsman applying a premium finish to an interior wall"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full rounded-4xl object-cover shadow-lift"
              />
              <div className="glass-light absolute -bottom-6 left-6 rounded-3xl px-6 py-5 shadow-soft">
                <p className="font-display text-3xl font-semibold text-primary">Since 2018</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Serving New Zealand
                </p>
              </div>
            </div>
          </Reveal>

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
                    <FaCheckCircle aria-hidden className="shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            {!full && (
              <Reveal delay={0.2}>
                <Link
                  to="/about"
                  className="story-link mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  More About Us <FaArrowRight aria-hidden />
                </Link>
              </Reveal>
            )}
          </div>
        </div>

        <div className="mt-20 grid gap-6 rounded-4xl bg-card p-8 shadow-soft sm:grid-cols-2 md:p-12 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-semibold text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
