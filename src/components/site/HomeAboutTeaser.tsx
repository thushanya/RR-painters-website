import { Link } from "@tanstack/react-router";
import { FaArrowRight } from "react-icons/fa";
import { Reveal } from "./Reveal";
import aboutImage from "@/assets/about-painter.jpg";

export function HomeAboutTeaser() {
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
                  Serving across parts of New Zealand
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="inline-block rounded-full bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-soft">
                Who We Are
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl lg:text-[2.75rem]">
                A Local Team Obsessed with a Perfect Finish
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                RR Painters is a small, hands-on New Zealand crew that treats every home and
                business like our own. Premium paints, tidy worksites and honest quotes — that's
                the whole promise.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <Link
                to="/about"
                className="story-link relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                More About Us{" "} <FaArrowRight aria-hidden className="transition-transform duration-300 group-hover:translate-x-1"/>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
