import { Reveal } from "./Reveal";
import { COMPANY } from "@/lib/site-data";

const BADGES = [
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
        <path d="M12 15l-3.5 2 1-4-3-2.5 4-.3L12 6l1.5 4.2 4 .3-3 2.5 1 4z" />
        <path d="M5 21h14" />
      </svg>
    ),
    title: "Established in 2018",
    text: "Nearly a decade of trusted service across New Zealand.",
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
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 22V12h6v10" />
        <path d="M7 7h2M15 7h2M7 11h2M15 11h2" />
      </svg>
    ),
    title: "NZ Registered Company",
    text: `Company No. ${COMPANY.companyNumber} · NZBN ${COMPANY.nzbn}`,
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
        <path d="M17 20h5v-2a4 4 0 0 0-4-4h-1" />
        <path d="M9 20H4v-2a4 4 0 0 1 4-4h1" />
        <circle cx="12" cy="7" r="4" />
        <path d="M12 14v7" />
      </svg>
    ),
    title: "Residential & Commercial",
    text: "Specialists in homes, offices and commercial spaces.",
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
        <path d="M12 2l3 6 6.5 1-4.7 4.5 1.2 6.5L12 17l-6 3 1.2-6.5L2.5 9 9 8z" />
      </svg>
    ),
    title: "High Quality Workmanship",
    text: "Premium finishes backed by our quality guarantee.",
  },
];

export function TrustSection() {
  return (
    <section className="relative bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map((badge, i) => (
            <Reveal key={badge.title} delay={i * 0.1}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-secondary text-xl text-primary transition-colors duration-300 group-hover:bg-gradient-forest group-hover:text-primary-foreground">
                  <span className="h-6 w-6">
                    {badge.icon}
                  </span>
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {badge.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {badge.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <div className="rounded-3xl bg-sage px-7 py-6 text-center text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {COMPANY.legalName}
            </span>{" "}
            — {COMPANY.incorporation}
          </div>
        </Reveal>
      </div>
    </section>
  );
}