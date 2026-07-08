import { Link } from "@tanstack/react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-gradient-forest text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="glass flex h-11 w-11 items-center justify-center rounded-xl">
                <span className="font-display text-lg font-bold">RR</span>
              </span>
              <span>
                <span className="font-display block text-xl font-semibold">RR Painters</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
                  Painting Excellence
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
              Trusted residential and commercial painting specialists across New Zealand, delivering
              quality workmanship since 2018.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: FaFacebookF, label: "Facebook" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaLinkedinIn, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="glass hover-scale flex h-10 w-10 items-center justify-center rounded-full text-sm"
                >
                  <Icon aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/60">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="story-link text-sm text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/60">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    className="story-link text-sm text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/60">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <FaPhoneAlt aria-hidden className="mt-1 shrink-0 text-emerald" />
                <a href={COMPANY.phoneHref} className="hover:text-primary-foreground">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope aria-hidden className="mt-1 shrink-0 text-emerald" />
                <a href={COMPANY.emailHref} className="break-all hover:text-primary-foreground">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt aria-hidden className="mt-1 shrink-0 text-emerald" />
                <span>Serving New Zealand</span>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-white/5 p-4 text-xs leading-relaxed text-primary-foreground/60">
              <p className="font-semibold text-primary-foreground/80">{COMPANY.legalName}</p>
              <p>Company Number: {COMPANY.companyNumber}</p>
              <p>NZBN: {COMPANY.nzbn}</p>
              <p className="mt-1 italic">{COMPANY.incorporation}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
