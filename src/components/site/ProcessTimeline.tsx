import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";

const STEPS = [
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
        <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    ),
    title: "Consultation",
    text: "We listen to your vision, assess your property and recommend the right approach.",
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
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 8h10" />
        <path d="M7 12h6" />
        <path d="M7 16h4" />
      </svg>
    ),
    title: "Free Quote",
    text: "A detailed, transparent written quote — no hidden costs, no obligation.",
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
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3-3a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0z" />
        <path d="M5 19l9.5-9.5" />
        <path d="M3 21l3-1 1-3" />
      </svg>
    ),
    title: "Surface Preparation",
    text: "Thorough cleaning, sanding, repairs and priming — the foundation of a lasting finish.",
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
        <path d="M3 21h18" />
        <path d="M6 21V7l6-4 6 4v14" />
        <path d="M9 21v-6h6v6" />
        <path d="M12 3v4" />
      </svg>
    ),
    title: "Professional Painting",
    text: "Premium paints applied with precision by skilled, careful tradespeople.",
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
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Final Inspection",
    text: "A full walkthrough together, spotless cleanup, and your complete satisfaction confirmed.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="From First Call to Flawless Finish"
          subtitle="A proven five-step process that keeps every project smooth, tidy and on schedule."
        />

        <div className="relative mt-16">
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute left-6 top-0 h-full w-0.5 origin-top bg-gradient-to-b from-primary via-accent to-gold md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-10">
            {STEPS.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={step.title} delay={0.08 * i}>
                  <div
                    className={`relative flex items-start gap-6 pl-16 md:w-1/2 md:pl-0 ${
                      left ? "md:mr-auto md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-forest text-primary-foreground shadow-soft md:top-1 ${
                        left ? "md:left-auto md:-right-6" : "md:-left-6"
                      }`}
                    >
                      <span className="h-6 w-6">
  {step.icon}
</span>
                    </span>
                    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                        Step {i + 1}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
