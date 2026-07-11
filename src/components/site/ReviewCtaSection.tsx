import { Reveal } from "./Reveal";

function BuilderscrackIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H7v-2h10v2zm0-4H7V8h10v2z" />
    </svg>
  );
}

export function ReviewCtaSection({ profileUrl }: { profileUrl: string }) {
  return (
    <section className="bg-neutral-50/60 py-16 text-center border-t border-b border-neutral-100">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-800 md:text-3xl">
            Had a Great Experience?
          </h3>
          <p className="mt-3 text-sm text-neutral-500 leading-relaxed max-w-md mx-auto">
            Share your feedback on Builderscrack and help other homeowners find a team they can trust.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-900 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-black/90 hover:text-white hover:shadow-lift"
            >
              <BuilderscrackIcon className="h-4 w-4 text-emerald" />
              Leave a Review on Builderscrack
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}