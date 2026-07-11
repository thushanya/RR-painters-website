import { FaUserTie, FaGem, FaClock, FaHeart } from "react-icons/fa";
import { Reveal, SectionHeading } from "./Reveal";

const REASONS = [
  {
    icon: FaUserTie,
    title: "Skilled Professionals",
    text: "Experienced, careful tradespeople who take genuine pride in every brushstroke.",
  },
  {
    icon: FaGem,
    title: "Premium Materials",
    text: "Only trusted, high-grade paints and coatings suited to New Zealand conditions.",
  },
  {
    icon: FaClock,
    title: "On-Time Completion",
    text: "Clear timelines agreed upfront — and we stick to them, every time.",
  },
  {
    icon: FaHeart,
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
                  <reason.icon aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
