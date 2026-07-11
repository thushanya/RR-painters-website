import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaExpand, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { Reveal, SectionHeading } from "./Reveal";
import projectInterior from "@/assets/project-interior.jpg";
import projectExterior from "@/assets/project-exterior.jpg";
import projectRoof from "@/assets/project-roof.jpg";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectWaterblast from "@/assets/project-waterblast.jpg";
import int1 from "@/assets/int1.jpg";
import ext1 from "@/assets/ext1.jpg";
import roofpaint1 from "@/assets/roofpaint1.jpg";
import wall1 from "@/assets/wall1.jpg";


const PROJECTS = [
  {
    title: "Wall Exterior Repaint",
    category: "Exterior Painting",
    location: "Titahi Bay, Porirua",
    beforeAfter: true,
    image: projectExterior,
    tall: true,
  },
  {
    title: "Living Room Refresh",
    category: "Interior Painting",
    location: "Paraparaumu Beach, Kapiti Coast",
    beforeAfter: false,
    image: projectInterior,
    tall: false,
  },
  {
    title: "Roof Painting & Restoration",
    category: "Roof Painting",
    location: "Stokes Valley, Hutt Valley",
    beforeAfter: false,
    image: roofpaint1,
    tall: true,
  },
  
  {
    title: "Full External repaint",
    category: "Exterior Painting",
    location: "Ngaio, Wellington",
    beforeAfter: false,
    image: int1,
    tall: true, 
  },
  {
    title: "Living Room Feature Wall",
    category: "Interior Painting",
    location: "Ōtaki, Kapiti coast",
    beforeAfter: false,
    image: projectBedroom,
    tall: false,
  },
   {
    title: "Deck Water Blasting",
    category: "Water Blasting",
    location: "Cannons Creek, Porirua",
    beforeAfter: true,
    image: projectWaterblast,
    tall: false,
  },
  {
    title: "Roof Restoration",
    category: "Roof Painting",
    location: "Island Bay, Wellington",
    beforeAfter: true,
    image: projectRoof,
    tall: false,
  },
  {
    title: "Exterior repaint of a residential property",
    category: "Exterior Painting",
    location: "Waikanae, Kapiti Coast",
    beforeAfter: false,
    image: ext1,
    tall: true,
  },
  {
    title: "Wallpaper removal",
    category: "Wallpaper Removal",
    location: " Johnsonville, Wellington",
    beforeAfter: false,
    image: wall1,
    tall: true,
  },
  
  {
    title: "Commercial Office Fit-Out",
    category: "Commercial",
    location: "Wellington",
    beforeAfter: false,
    image: projectCommercial,
    tall: true,
  },
];

export function ProjectsGallery({ limit }: { limit?: number }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const projects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section className="bg-sage py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Recent Work We're Proud Of"
          subtitle="A selection of completed projects across residential and commercial properties."
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`View ${project.title}`}
                className="group relative block w-full overflow-hidden rounded-3xl text-left shadow-soft transition-shadow duration-300 hover:shadow-lift"
              >
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category} in ${project.location}`}
                  loading="lazy"
                  width={1024}
                  height={project.tall ? 1280 : 768}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/15 to-transparent opacity-90 transition-opacity duration-300" />
                {project.beforeAfter && (
                  <span className="absolute left-4 top-4 rounded-full bg-gradient-gold px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-gold-foreground shadow-gold">
                    Before & After
                  </span>
                )}
                <span className="glass absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-xs text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <FaExpand aria-hidden />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-primary-foreground">{project.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-primary-foreground/70">
                    <FaMapMarkerAlt aria-hidden /> {project.location}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {limit && (
          <Reveal delay={0.2} className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-900 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-black/90 hover:text-white hover:shadow-lift"
            >
              View All Projects <FaArrowRight aria-hidden className="transition-transform duration-300 group-hover:translate-x-1"/>
              
            </Link>
          </Reveal>
        )}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-deep/90 p-5 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={projects[lightbox].title}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close preview"
              className="glass absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-primary-foreground"
            >
              <FaTimes aria-hidden />
            </button>
            <motion.figure
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[lightbox].image}
                alt={projects[lightbox].title}
                className="max-h-[75vh] w-full rounded-3xl object-contain"
              />
              <figcaption className="mt-4 text-center text-primary-foreground">
                <span className="font-semibold">{projects[lightbox].title}</span>
                <span className="text-primary-foreground/60"> — {projects[lightbox].location}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
