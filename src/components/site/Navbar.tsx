import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NAV_LINKS, COMPANY } from "@/lib/site-data";

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
          <span
  className={`flex h-10 w-10 items-center justify-center rounded-full overflow-hidden text-lg font-bold ${
    solid ? "bg-gradient-forest text-primary-foreground" : "glass text-primary-foreground"
  }`}
>
  <img 
    src="/favicon.png"
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

        {/* Desktop Navigation */}
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
            {/* Inline Phone SVG */}
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21.384 17.791l-3.75-3.214a1.25 1.25 0 00-1.616.033l-1.571 1.305c-2.938-1.545-5.327-3.935-6.872-6.872l1.305-1.57a1.25 1.25 0 00.033-1.616L5.698 1.107A1.25 1.25 0 004.05 1.02L1.082 3.22A2.5 2.5 0 000 5.23c0 10.364 8.407 18.77 18.77 18.77a2.5 2.5 0 002.01-1.082l2.2-2.969a1.25 1.25 0 00-.087-1.644l-.509-.514z"/>
            </svg>
            {COMPANY.phone}
          </a>
          <Link
            to="/contact"
            className="hover-scale rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-bold text-gold-foreground shadow-gold"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Hamburger Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`flex h-10 w-10 items-center justify-center rounded-xl lg:hidden ${
            solid ? "bg-secondary text-primary" : "glass text-primary-foreground"
          }`}
        >
          {open ? (
            /* Inline Close Icon */
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Inline Hamburger Icon */
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Panel - Accelerated CSS Animation */}
      <nav
        className={`grid transition-all duration-300 ease-out lg:hidden border-t border-border overflow-hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="min-h-0 space-y-1 px-5 py-4">
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
      </nav>
    </header>
  );
}