import { FaAward, FaBuilding, FaCertificate, FaHandshake } from "react-icons/fa";
import { Reveal } from "./Reveal";
import { COMPANY } from "@/lib/site-data";

const BADGES = [
  { icon: FaCertificate, title: "Established in 2018", text: "Nearly a decade of trusted service across New Zealand." },
  { icon: FaBuilding, title: "NZ Registered Company", text: `Company No. ${COMPANY.companyNumber} · NZBN ${COMPANY.nzbn}` },
  { icon: FaHandshake, title: "Residential & Commercial", text: "Specialists in homes, offices and commercial spaces." },
  { icon: FaAward, title: "High Quality Workmanship", text: "Premium finishes backed by our quality guarantee." },
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
                  <badge.icon aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{badge.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{badge.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <div className="rounded-3xl bg-sage px-7 py-6 text-center text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{COMPANY.legalName}</span> —{" "}
            {COMPANY.incorporation}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
