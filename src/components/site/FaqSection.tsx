import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";
import { FAQS } from "@/lib/site-data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before starting your painting project."
        />

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.06}>
                <div
                  className={`overflow-hidden rounded-3xl border transition-colors duration-300 ${
                    open ? "border-primary/30 bg-card shadow-soft" : "border-border bg-card"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
                  >
                    <span className="text-base font-semibold">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs ${
                        open ? "bg-gradient-forest text-primary-foreground" : "bg-secondary text-primary"
                      }`}
                    >
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <p className="px-7 pb-6 text-sm leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
