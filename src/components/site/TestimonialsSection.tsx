import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Reveal, SectionHeading } from "./Reveal";
import { TESTIMONIALS } from "@/lib/site-data";

export function TestimonialsSection({ limit }: { limit?: number }) {
  const testimonials = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  return (
    <section className="bg-sage py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Customers Say"
          subtitle="Real feedback from homeowners and businesses we've worked with across New Zealand."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.1}>
              <figure className="relative h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <FaQuoteLeft aria-hidden className="text-2xl text-secondary-foreground/25" />
                <div className="mt-4 flex gap-1 text-gold" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <FaStar key={s} aria-hidden className="text-sm" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  "{t.review}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
