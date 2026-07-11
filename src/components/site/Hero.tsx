import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaArrowRight, FaStar } from "react-icons/fa";
import heroImage from "@/assets/hero-painters.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Professional painters working on a modern New Zealand home"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-hero" />

      {/* Floating decorative elements */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[12%] top-[22%] hidden h-24 w-24 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm lg:block"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute bottom-[24%] right-[24%] hidden h-14 w-14 rounded-full border border-white/20 bg-emerald/20 backdrop-blur-sm lg:block"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="pointer-events-none absolute left-[6%] top-[30%] hidden h-16 w-16 rounded-2xl border border-white/15 bg-gold/20 backdrop-blur-sm lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 lg:px-8">
        <div className="max-w-3xl">
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
              <FaStar aria-hidden className="text-gold" /> Trusted Since 2018
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 text-4xl font-semibold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl"
          >
            Transforming Homes with Professional Painting Excellence
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/100"
          >
            Trusted residential and commercial painting specialists across Hutt Valley, Kapiti Coast, Porirua & Wellington in New Zealand, delivering
            quality workmanship since 2018.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="hover-scale inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-gold"
            >
              Get a Free Quote <FaArrowRight aria-hidden />
            </Link>
            <Link
              to="/projects"
              className="glass hover-scale inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-primary-foreground"
            >
              View Our Projects
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        aria-hidden
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <div className="h-2 w-1 rounded-full bg-white/70" />
        </div>
      </motion.div>
    </section>
  );
}
