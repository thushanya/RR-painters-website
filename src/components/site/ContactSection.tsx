import { useState, type FormEvent } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUser, FaCheckCircle } from "react-icons/fa";
import { Reveal, SectionHeading } from "./Reveal";
import { COMPANY, SERVICES } from "@/lib/site-data";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Free Quote Request — ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nMessage:\n${data.get("message")}`,
    );
    window.location.href = `${COMPANY.emailHref}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Talk About Your Project"
          subtitle="Get in touch for a free, no-obligation quote. We'd love to hear from you."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {[
              { icon: FaUser, label: "Contact Person", value: COMPANY.contactPerson, href: undefined },
              { icon: FaPhoneAlt, label: "Phone", value: COMPANY.phone, href: COMPANY.phoneHref },
              { icon: FaEnvelope, label: "Email", value: COMPANY.email, href: COMPANY.emailHref },
              { icon: FaMapMarkerAlt, label: "Service Area", value: "New Zealand wide", href: undefined },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-forest text-primary-foreground">
                    <item.icon aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="break-all text-base font-semibold text-primary hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3">
                <a
                  href={COMPANY.phoneHref}
                  className="hover-scale inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-forest px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft"
                >
                  <FaPhoneAlt aria-hidden /> Call Now
                </a>
                <a
                  href={COMPANY.emailHref}
                  className="hover-scale inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-3.5 text-sm font-bold text-primary"
                >
                  <FaEnvelope aria-hidden /> Email Us
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <div
                className="flex h-56 items-center justify-center rounded-3xl border border-border bg-sage text-center shadow-soft"
                role="img"
                aria-label="Map placeholder showing our New Zealand service area"
              >
                <div>
                  <FaMapMarkerAlt aria-hidden className="mx-auto text-3xl text-primary" />
                  <p className="mt-3 text-sm font-semibold text-muted-foreground">
                    Google Maps — coming soon
                  </p>
                  <p className="text-xs text-muted-foreground">Serving homes & businesses across NZ</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-4xl border border-border bg-card p-8 shadow-soft md:p-10"
            >
              <h3 className="text-2xl font-semibold">Request a Free Quote</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the form and we'll get back to you within one business day.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-semibold">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Your phone number"
                    className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="text-sm font-semibold">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project — property type, rooms or areas, timing..."
                    className="mt-2 w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="hover-scale mt-8 w-full rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold text-gold-foreground shadow-gold"
              >
                Request a Free Quote
              </button>

              {submitted && (
                <p className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-primary">
                  <FaCheckCircle aria-hidden /> Your email app should open — we'll be in touch soon!
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
