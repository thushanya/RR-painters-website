import { Reveal, SectionHeading } from "./Reveal";
import { TESTIMONIALS } from "@/lib/site-data";

const AVATAR_COLORS = [
  "bg-indigo-600",
  "bg-emerald-600",
  "bg-amber-600",
  "bg-rose-600",
  "bg-sky-600",
  "bg-violet-600",
  "bg-teal-600",
];

function BuilderscrackLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H7v-2h10v2zm0-4H7V8h10v2z" />
    </svg>
  );
}

// 1. Add the { limit } prop type definition here
export function TestimonialsSection({ limit }: { limit?: number }) {
  
  // 2. Slice the array if a limit prop is passed
  const testimonials = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  return (
    <section className="bg-gradient-to-b from-transparent to-sage/5 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Verified Work"
          title="Stories of Excellence"
          subtitle="Real feedback from homeowners across Wellington, Porirua, and the Kāpiti Coast."
        />

        {/* 3. Change grid columns to switch layout dynamically based on the limit */}
        <div className={`mt-16 grid gap-8 sm:grid-cols-2 ${limit === 2 ? "lg:grid-cols-2 max-w-4xl mx-auto" : "lg:grid-cols-3"}`}>
          {/* 4. Map over the sliced 'testimonials' array instead of 'TESTIMONIALS' */}
          {testimonials.map((review, i) => {
            const cityName = review.location.split(",")[0];
            const regionName = review.location.split(",")[1] || "Wellington";
            const initial = cityName.charAt(0);
            const avatarBg = AVATAR_COLORS[i % AVATAR_COLORS.length];
            const profileTitle = `${cityName} Client`;

            return (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <div className="group flex h-full flex-col justify-between rounded-3xl border border-neutral-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift">
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-sm ${avatarBg}`}>
                          {initial}
                        </div>
                        <div>
                          <h4 className="text-[14px] font-bold text-neutral-800 tracking-tight transition-colors duration-300 group-hover:text-primary">
                            {profileTitle}
                          </h4>
                          <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-neutral-400">
                           <svg
                              className="h-3 w-3 text-neutral-400"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {cityName},{regionName}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-0.5 text-amber-400 pt-1">
                        {[...Array(review.rating)].map((_, idx) => (
                          <svg
                            key={idx}
                            className="h-4 w-4 text-amber-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.15L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <p className="mt-6 text-[14px] leading-relaxed tracking-wide text-neutral-600 transition-colors duration-300 group-hover:text-neutral-900">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-neutral-50 pt-4">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                      <BuilderscrackLogo className="h-4 w-4 text-emerald" />
                      <span>Builderscrack</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gold">
                      {review.project}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}