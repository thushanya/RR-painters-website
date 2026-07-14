
export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-forest pb-20 pt-36 text-primary-foreground md:pb-24 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className="max-w-2xl"
        >
          <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/75 md:text-lg">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
