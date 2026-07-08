import { motion } from "framer-motion";
import { FaComments, FaFileInvoiceDollar, FaTools, FaPaintBrush, FaClipboardCheck } from "react-icons/fa";
import { Reveal, SectionHeading } from "./Reveal";

const STEPS = [
  {
    icon: FaComments,
    title: "Consultation",
    text: "We listen to your vision, assess your property and recommend the right approach.",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Free Quote",
    text: "A detailed, transparent written quote — no hidden costs, no obligation.",
  },
  {
    icon: FaTools,
    title: "Surface Preparation",
    text: "Thorough cleaning, sanding, repairs and priming — the foundation of a lasting finish.",
  },
  {
    icon: FaPaintBrush,
    title: "Professional Painting",
    text: "Premium paints applied with precision by skilled, careful tradespeople.",
  },
  {
    icon: FaClipboardCheck,
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
                      <step.icon aria-hidden />
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
