import { FaExternalLinkAlt } from "react-icons/fa";
import { Reveal } from "./Reveal";
import qrImg from "@/assets/QR.jpg"; // Absolute path alias to your project image asset

function BuilderscrackLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H7v-2h10v2zm0-4H7V8h10v2z" />
    </svg>
  );
}

export function BuildersVerifyCard({ profileUrl }: { profileUrl: string }) {
  return (
    <section className="bg-gradient-to-b from-transparent to-neutral-50/60 py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          {/* Card Container: Added a elegant custom emerald tint border and background fill */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald/10 bg-emerald/5 p-8 shadow-soft md:p-14 lg:p-16">
            {/* Ambient glows enhanced for the green tint scheme */}
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-emerald/10 blur-3xl pointer-events-none" />
            <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              
              {/* Left Column: Styled Text Blocks */}
              <div className="max-w-xl space-y-5 text-left relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald shadow-sm">
                  <BuilderscrackLogo className="h-4 w-4" />
                  Verified Business Profile
                </div>
                
                <h3 className="font-display text-3xl font-bold tracking-tight text-neutral-800 md:text-4xl">
                  100% Transparency on Builderscrack
                </h3>
                
                <p className="text-[14.5px] leading-relaxed text-neutral-600 antialiased font-medium">
                  We believe in accountability. Our business credentials are fully authenticated, monitored, and active on New Zealand's premier trade platform. Homeowners can browse our full performance metrics, examine verified star ratings, and review detailed work histories safely.
                </p>

                <div className="pt-3">
                  <a
                    href={profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-900 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-black/90 hover:text-white hover:shadow-lift"
                  >
                    View Our Public Profile 
                    <FaExternalLinkAlt className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Premium Stylized Image Frame holding QR.jpg */}
              <div className="flex flex-col items-center justify-center shrink-0 lg:w-72 relative z-10">
                <div className="relative rounded-3xl border border-emerald/10 bg-white p-6 shadow-soft transition-all duration-300 hover:border-emerald/30">
                  <div className="relative overflow-hidden h-40 w-40 rounded-2xl bg-white p-1.5 shadow-sm border border-neutral-200/40 group">
                    <img 
                      src={qrImg} 
                      alt="Builderscrack Profile QR Code"
                      className="h-full w-full object-cover rounded-xl transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                  </div>
                </div>
                
                <span className="mt-4 text-[11px] font-bold uppercase tracking-widest text-emerald/70">
                  Scan to Verify Work
                </span>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}