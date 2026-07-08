import { Link } from "@tanstack/react-router";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, SectionHeading } from "./Reveal";
import { SERVICES } from "@/lib/site-data";

export function ServicesSection({ limit }: { limit?: number }) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete Painting & Property Care"
          subtitle="From fresh interiors to full exterior restorations, one expert team handles it all."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.1}>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sage opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-forest text-xl text-primary-foreground shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon aria-hidden />
                </span>
                <h3 className="relative mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="story-link relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold">
                  Learn More <FaArrowRight aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {limit && (
          <Reveal delay={0.2} className="mt-12 text-center">
            <Link
              to="/services"
              className="hover-scale inline-flex items-center gap-2 rounded-full bg-gradient-forest px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-soft"
            >
              View All Services <FaArrowRight aria-hidden />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
