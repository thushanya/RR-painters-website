import { Link } from "@tanstack/react-router";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { Reveal } from "./Reveal";
import { COMPANY } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="bg-sage px-5 pb-20 md:pb-28 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-forest px-8 py-14 text-center text-primary-foreground shadow-lift md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
          />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
            Ready to Transform Your Property?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/75">
            Get your free, no-obligation quote today and see why New Zealanders trust RR Painters.
          </p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="hover-scale inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-gold"
            >
              Get a Free Quote <FaArrowRight aria-hidden />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="glass hover-scale inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-primary-foreground"
            >
              <FaPhoneAlt aria-hidden /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
