import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { NAV_LINKS, COMPANY } from "@/lib/site-data";
// 1. Import your logo image here
import logoImg from "@/assets/favicon.png"; 

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "glass-light shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="RR Painters home">
          {/* 2. Changed rounded-xl to rounded-full and added overflow-hidden */}
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full overflow-hidden text-lg font-bold ${
              solid ? "bg-gradient-forest text-primary-foreground" : "glass text-primary-foreground"
            }`}
          >
            {/* 3. Replaced the "RR" text with the img element */}
            <img 
              src={logoImg} 
              alt="RR Painters Logo" 
              className="h-full w-full object-cover" 
            />
          </span>
          <span className="leading-tight">
            <span
              className={`font-display block text-lg font-semibold ${
                solid ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              RR Painters
            </span>
            <span
              className={`block text-[10px] font-semibold uppercase tracking-[0.22em] ${
                solid ? "text-primary" : "text-primary-foreground/70"
              }`}
            >
              Painting Excellence
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                solid
                  ? "text-foreground/80 hover:bg-secondary hover:text-primary"
                  : "text-primary-foreground/85 hover:bg-white/10 hover:text-primary-foreground"
              }`}
              activeProps={{
                className: `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  solid ? "bg-secondary text-primary" : "bg-white/15 text-primary-foreground"
                }`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={COMPANY.phoneHref}
            className={`flex items-center gap-2 text-sm font-bold ${
              solid ? "text-primary" : "text-primary-foreground"
            }`}
          >
            <FaPhoneAlt aria-hidden className="text-xs" />
            {COMPANY.phone}
          </a>
          <Link
            to="/contact"
            className="hover-scale rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-bold text-gold-foreground shadow-gold"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`flex h-10 w-10 items-center justify-center rounded-xl lg:hidden ${
            solid ? "bg-secondary text-primary" : "glass text-primary-foreground"
          }`}
        >
          {open ? <FaTimes aria-hidden /> : <FaBars aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80 hover:bg-secondary"
                  activeProps={{
                    className: "block rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-primary",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 block rounded-xl bg-gradient-gold px-4 py-3 text-center text-sm font-bold text-gold-foreground shadow-gold"
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}