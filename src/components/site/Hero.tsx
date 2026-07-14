import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-painters.webp";
import heroImageMobile from "@/assets/hero-painters-mobile.webp";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <picture className="absolute inset-0 h-full w-full">
        <source media="(max-width: 767px)" srcSet={heroImageMobile} />
        <img
          src={heroImage}
          alt="Professional painters working on a modern New Zealand home"
          width={1920}
          height={1080}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </picture>

      <div aria-hidden className="absolute inset-0 bg-gradient-hero" />

      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute right-[12%] top-[22%] hidden h-24 w-24 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm lg:block" />
      <div className="pointer-events-none absolute bottom-[24%] right-[24%] hidden h-14 w-14 rounded-full border border-white/20 bg-emerald/20 backdrop-blur-sm lg:block" />
      <div className="pointer-events-none absolute left-[6%] top-[30%] hidden h-16 w-16 rounded-2xl border border-white/15 bg-gold/20 backdrop-blur-sm lg:block" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 lg:px-8">
        <div className="max-w-3xl">
          <div>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
              {/* Inline Star SVG instead of FaStar */}
              <svg 
                className="h-3.5 w-3.5 text-gold" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z"/>
              </svg>
              Trusted Since 2018
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
            Transforming Homes with Professional Painting Excellence
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/100">
            Trusted residential and commercial painting specialists across Hutt Valley, Kapiti Coast, Porirua & Wellington in New Zealand, delivering quality workmanship since 2018.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="hover-scale inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-gold"
            >
              Get a Free Quote 
              {/* Inline Arrow SVG instead of FaArrowRight */}
              <svg 
                className="h-4 w-4" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              to="/projects"
              className="glass hover-scale inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-primary-foreground"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </div>

      <div aria-hidden className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <div className="h-2 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}