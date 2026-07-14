import { Reveal, SectionHeading } from "./Reveal";

const REASONS = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M17 11l2 2 4-4" />
      </svg>
    ),
    title: "Skilled Professionals",
    text: "Experienced, careful tradespeople who take genuine pride in every brushstroke.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Premium Materials",
    text: "Only trusted, high-grade paints and coatings suited to New Zealand conditions.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "On-Time Completion",
    text: "Clear timelines agreed upfront — and we stick to them, every time.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Customer Satisfaction",
    text: "We're not finished until you're delighted. That's our promise on every job.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-gradient-forest py-20 text-primary-foreground md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-emerald/15 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          light
          eyebrow="Why Choose RR Painters"
          title="The Difference Is in the Detail"
          subtitle="Four reasons homeowners and businesses across Wellington and Kāpiti in New Zealand keep choosing us."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.1}>
              <div className="glass group h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/15">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-gold text-lg text-gold-foreground shadow-gold transition-transform duration-300 group-hover:scale-110">
                  <span className="h-6 w-6">
                    {reason.icon}
                  </span>
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                  {reason.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}