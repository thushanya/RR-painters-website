import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span
        className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] ${
          light ? "glass text-primary-foreground" : "bg-secondary text-secondary-foreground"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-5 text-3xl font-semibold leading-tight md:text-4xl lg:text-[2.75rem] ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-primary-foreground/75" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
