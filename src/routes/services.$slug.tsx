import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { FaArrowRight, FaCheckCircle, FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { SERVICES, COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) {
      return {
        meta: [
          { title: "Service Not Found — RR Painters" },
          { name: "description", content: "The requested service could not be found." },
        ],
      };
    }
    const title = `${service.title} — RR Painters | NZ`;
    const desc = service.description;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: `${service.title} — RR Painters` },
        { property: "og:description", content: desc },
        { property: "og:image", content: service.detail.image },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: service.detail.image },
      ],
    };
  },
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-40 text-center">
      <h1 className="font-display text-4xl font-semibold">Service Not Found</h1>
      <p className="mt-4 text-muted-foreground">The service you're looking for doesn't exist.</p>
      <Link
        to="/services"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-forest px-6 py-3 text-sm font-bold text-primary-foreground"
      >
        View All Services <FaArrowRight aria-hidden />
      </Link>
    </div>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-forest pb-20 pt-36 text-primary-foreground md:pb-24 md:pt-44">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <FaChevronRight aria-hidden className="text-[0.6rem]" />
            <Link to="/services" className="hover:text-primary-foreground">Services</Link>
            <FaChevronRight aria-hidden className="text-[0.6rem]" />
            <span className="text-primary-foreground">{service.title}</span>
          </nav>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
            <span className="glass flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl">
              <Icon aria-hidden />
            </span>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{service.title}</h1>
              <p className="mt-3 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                {service.detail.tagline}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="hover-scale inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-gold"
            >
              Get a Free Quote <FaArrowRight aria-hidden />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="glass hover-scale inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold"
            >
              <FaPhoneAlt aria-hidden /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <img
                src={service.detail.image}
                alt={`${service.title} by RR Painters`}
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full rounded-4xl object-cover shadow-lift"
              />
            </Reveal>
            <div>
              <Reveal>
                <span className="inline-block rounded-full bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-soft">
                  Overview
                </span>
                <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                  What to expect from our {service.title.toLowerCase()}
                </h2>
              </Reveal>
              <div className="mt-5 space-y-4">
                {service.detail.intro.map((p, i) => (
                  <Reveal key={i} delay={0.05 * (i + 1)}>
                    <p className="leading-relaxed text-muted-foreground">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-sage py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What's Included"
            title="Everything in the scope, nothing hidden"
            subtitle="Every quote covers the full process — from prep to final walkthrough."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.detail.includes.map((item, i) => (
              <Reveal key={item} delay={(i % 3) * 0.08}>
                <li className="flex items-start gap-3 rounded-3xl border border-border bg-card p-5 shadow-soft">
                  <FaCheckCircle aria-hidden className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm font-semibold leading-relaxed">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Why It Matters"
            title="The difference proper workmanship makes"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {service.detail.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground shadow-gold">
                    <Icon aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="bg-sage py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <span className="inline-block rounded-full bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-soft">
            Ideal For
          </span>
          <h2 className="mt-5 text-3xl font-semibold md:text-4xl">Perfect for these situations</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {service.detail.idealFor.map((tag, i) => (
              <Reveal key={tag} delay={i * 0.06}>
                <span className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary shadow-soft">
                  {tag}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Other Services" title="You might also need" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-forest text-primary-foreground shadow-soft">
                    <s.icon aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold">
                    Learn More <FaArrowRight aria-hidden className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
