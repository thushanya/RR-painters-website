import {
  FaPaintRoller,
  FaHome,
  FaWater,
  FaBroom,
  FaHammer,
  FaScroll,
  FaWarehouse,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export const COMPANY = {
  name: "RR Painters",
  legalName: "R. R Painting Services Limited",
  companyNumber: "6889413",
  nzbn: "9429046840202",
  incorporation: "Incorporated under the Companies Act 1993 on 18 June 2018.",
  contactPerson: "R. Shri",
  phone: "022 586 3335",
  phoneHref: "tel:+64225863335",
  email: "r.rpainters@yahoo.com",
  emailHref: "mailto:r.rpainters@yahoo.com",
};

import projectInterior from "@/assets/project-interior.webp";
import projectExterior from "@/assets/project-exterior.webp";
import projectRoof from "@/assets/project-roof.webp";
import projectWaterblast from "@/assets/project-waterblast.webp";
import serviceRoofCleaning from "@/assets/service-roof-cleaning.webp";
import serviceWallpaper from "@/assets/service-wallpaper.webp";
import servicePlaster from "@/assets/service-plaster.webp";

export interface ServiceDetail {
  tagline: string;
  intro: string[];
  image: string;
  includes: string[];
  benefits: { title: string; text: string }[];
  idealFor: string[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: IconType;
  detail: ServiceDetail;
}

export const SERVICES: Service[] = [
  {
    slug: "interior-painting",
    title: "Interior Painting",
    description:
      "Flawless walls, ceilings and trims with premium low-VOC paints — transforming living spaces with crisp, lasting finishes.",
    icon: FaPaintRoller,
    detail: {
      tagline: "Refresh every room with a flawless, low-VOC finish.",
      image: projectInterior,
      intro: [
        "A fresh interior repaint is the single fastest way to transform how your home feels. Our team specialises in crisp lines, even coverage and a genuinely tidy worksite from day one to hand-over.",
        "We start with careful masking, protection of floors and furniture, and full surface preparation — filling, sanding and priming — so every top coat sits perfectly. Only premium, low-VOC paints go on your walls, safe for family and pets.",
      ],
      includes: [
        "Full protection of floors, furniture and fittings",
        "Filling, sanding and priming of all surfaces",
        "Two coats of premium low-VOC paint",
        "Cutting-in walls, ceilings, trims and doors",
        "Feature walls, ceilings and colour consultation",
        "Complete site cleanup and final walkthrough",
      ],
      benefits: [
        { title: "Healthier Rooms", text: "Low-VOC paints mean no lingering fumes — you can enjoy your space the same day." },
        { title: "Precision Finish", text: "Sharp cut-ins and roller-mark-free walls, checked under multiple light angles." },
        { title: "Tidy Every Day", text: "We tidy at the end of every shift so your home stays livable throughout the job." },
      ],
      idealFor: ["Whole-home repaints", "Single rooms and hallways", "Pre-sale property refresh", "New builds and renovations"],
    },
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting",
    description:
      "Weather-resistant coatings built for New Zealand conditions, protecting and beautifying your home for years to come.",
    icon: FaHome,
    detail: {
      tagline: "Durable exterior systems built for NZ sun, salt and rain.",
      image: projectExterior,
      intro: [
        "New Zealand's UV, coastal salt and driving rain are brutal on exterior paint. We use weather-tough coating systems and full preparation to give your home a finish that stays sharp for years.",
        "Every exterior job starts with a thorough water-blast, scrape and sand — followed by priming of bare and problem areas. Only then do we apply premium acrylic top coats, cut in cleanly around every window, corner and detail.",
      ],
      includes: [
        "Water-blasting and full surface wash",
        "Scraping, sanding and spot priming",
        "Timber and cladding repairs where needed",
        "Two coats of premium exterior acrylic",
        "Trim, joinery, soffits and downpipes",
        "Final inspection and cleanup",
      ],
      benefits: [
        { title: "Weatherproof", text: "Coating systems chosen for UV stability and coastal-grade durability." },
        { title: "Property Value", text: "A fresh exterior lifts kerb appeal and pre-sale valuation instantly." },
        { title: "Long-Life Finish", text: "Proper prep plus premium paint means 8–12 years between repaints." },
      ],
      idealFor: ["Weatherboard and plaster homes", "Coastal properties", "Pre-sale exterior refresh", "Rental portfolio maintenance"],
    },
  },
  {
    slug: "roof-painting",
    title: "Roof Painting",
    description:
      "Specialist roof coating systems that restore, seal and extend the life of metal, tile and concrete roofs.",
    icon: FaWarehouse,
    detail: {
      tagline: "Restore and protect metal, tile and concrete roofs.",
      image: projectRoof,
      intro: [
        "A tired roof drags down the whole look of a home — and a failing coating leads to rust, leaks and costly repairs. Our roof coating systems restore appearance and seal the surface for another decade of protection.",
        "We treat moss and lichen, water-blast the entire roof, spot-prime bare metal and rust, then apply purpose-built roof membrane in two coats. Sprayed or rolled — whichever suits your roof best.",
      ],
      includes: [
        "Moss, mould and lichen treatment",
        "Full roof water-blast and rinse",
        "Rust treatment and metal priming",
        "Two coats of specialist roof membrane",
        "Ridge caps, flashings and detail work",
        "Gutter cleanout on completion",
      ],
      benefits: [
        { title: "Extends Roof Life", text: "A proper recoat can add 10+ years before roof replacement is needed." },
        { title: "Stops Leaks Early", text: "Seals hairline cracks and reseats around fasteners as we go." },
        { title: "Kerb Appeal", text: "A crisp roof colour instantly modernises the whole property." },
      ],
      idealFor: ["Long-run steel roofs", "Decramastic and tile roofs", "Concrete tile roofs", "Homes 10+ years since last coat"],
    },
  },
  {
    slug: "roof-cleaning",
    title: "Roof Cleaning",
    description:
      "Gentle yet thorough moss, mould and lichen treatment that revives your roof and prepares it for coating.",
    icon: FaBroom,
    detail: {
      tagline: "Kill moss and lichen the safe, controlled way.",
      image: serviceRoofCleaning,
      intro: [
        "Moss and lichen don't just look bad — they hold moisture against your roof surface and shorten its life. Our soft-wash treatment kills the growth at the root without hammering your roof with high pressure.",
        "We apply a professional biocide, allow it to work through the growth, then rinse and clear the debris. This is also the essential first step before any roof recoat.",
      ],
      includes: [
        "Full roof safety assessment",
        "Soft-wash biocide application",
        "Controlled rinse and moss removal",
        "Gutter cleanout of runoff debris",
        "Downpipe flush check",
        "Post-treatment inspection report",
      ],
      benefits: [
        { title: "Kills at the Root", text: "Biocide continues working for weeks, preventing regrowth." },
        { title: "Roof-Safe", text: "No aggressive high-pressure blasting on delicate roof coatings." },
        { title: "Coat-Ready", text: "The perfect preparation step before a roof repaint." },
      ],
      idealFor: ["Shaded, damp roofs", "Coastal properties", "Pre-sale roof refresh", "Pre-recoat preparation"],
    },
  },
  {
    slug: "water-blasting",
    title: "Water Blasting",
    description:
      "High-pressure cleaning for decks, driveways, fences and cladding — removing years of grime in a single visit.",
    icon: FaWater,
    detail: {
      tagline: "Strip away years of grime in a single visit.",
      image: projectWaterblast,
      intro: [
        "Concrete, timber and cladding age quickly under NZ conditions — algae, oil, mould and general grime dull every surface. Professional water-blasting brings them back to life in hours.",
        "We match pressure, tip and technique to each surface so we lift the dirt without damaging the substrate. Great as a standalone clean or as the first step in a bigger repaint.",
      ],
      includes: [
        "Driveways, paths and concrete pads",
        "Decks, fences and outdoor timber",
        "House cladding and soffits",
        "Retaining walls and pool surrounds",
        "Pre-paint surface preparation",
        "Full site rinse and cleanup",
      ],
      benefits: [
        { title: "Instant Transformation", text: "Surfaces look years younger by the end of the same day." },
        { title: "Surface-Safe", text: "Pressure calibrated per surface — no gouged timber or damaged mortar." },
        { title: "Paint-Ready", text: "Leaves clean, sound substrates that hold coatings properly." },
      ],
      idealFor: ["Driveways and paths", "Decks and fences", "Pre-repaint prep", "Rental turnover cleanups"],
    },
  },
  {
    slug: "wallpaper-removal",
    title: "Wallpaper Removal",
    description:
      "Careful stripping and surface restoration, leaving walls perfectly smooth and ready for a fresh new look.",
    icon: FaScroll,
    detail: {
      tagline: "Strip old wallpaper cleanly — walls ready for a fresh look.",
      image: serviceWallpaper,
      intro: [
        "Removing wallpaper properly is fiddly, messy work — and the walls behind almost always need repair before they can be repainted. We handle both, so you get a smooth, paint-ready surface with no shortcuts.",
        "We steam and score, lift paper and backing, wash off residual adhesive, then fill and sand every ding and gouge. The result is a wall that looks brand new under paint.",
      ],
      includes: [
        "Full room protection and masking",
        "Steaming, scoring and paper removal",
        "Adhesive residue wash-down",
        "Filling of dents and imperfections",
        "Sanding to a smooth paint-ready surface",
        "Optional repaint in the same visit",
      ],
      benefits: [
        { title: "Mess-Free", text: "Contained work area — your floors and furniture stay clean." },
        { title: "Truly Paint-Ready", text: "No leftover paste, no ghosting through the new paint." },
        { title: "One Team, One Job", text: "We can remove and repaint in the same booking to save you time." },
      ],
      idealFor: ["Dated feature walls", "Full-room wallpaper strip-outs", "Rental refreshes", "Pre-sale modernisation"],
    },
  },
  {
    slug: "plaster-repairs",
    title: "Plaster Repairs",
    description:
      "Expert patching, skimming and crack repairs that create the flawless base every premium paint job deserves.",
    icon: FaHammer,
    detail: {
      tagline: "The flawless base every premium paint job deserves.",
      image: servicePlaster,
      intro: [
        "A great paint finish is only ever as good as the surface underneath. We repair cracks, holes, dents and damaged plaster so your walls are dead flat and blemish-free before any paint goes on.",
        "From small patches to full skim coats, our plasterers use quality compounds and multiple sand-and-check passes. When the light hits the wall, you'll see just the paint — never the repair.",
      ],
      includes: [
        "Crack and stress-line repair",
        "Hole patching and gib board fixes",
        "Full skim coats where required",
        "Multi-pass sanding to a flat finish",
        "Cornice and trim repairs",
        "Priming ready for topcoat",
      ],
      benefits: [
        { title: "Invisible Repairs", text: "Perfect blends that disappear under paint, even in raking light." },
        { title: "Structural-Grade", text: "We diagnose why cracks appear and fix them properly, not just cosmetically." },
        { title: "Paint-Ready", text: "Every repair is primed and ready for a topcoat straight away." },
      ],
      idealFor: ["Older villas with cracked plaster", "Post-earthquake or settlement damage", "Pre-repaint prep", "Insurance repair jobs"],
    },
  },
];

export interface Project {
  title: string;
  category: string;
  location: string;
  beforeAfter: boolean;
  image: string;
  width: number;
  height: number;
}

export const TESTIMONIALS = [
  {
    name: "Homeowner",
    location: "Silverstream, Hutt Valley",
    project: "Pergola Sand & Paint",
    text: "Excellent job, prompt service and happy with the outcome.",
    rating: 5,
  },
  {
    name: "Homeowner",
    location: "Whitby, Porirua",
    project: "Verandah Paint & Repair",
    text: "Sri and his team were awesome. Highly recommend. Thanks guys.",
    rating: 5,
  },
  {
    name: "Homeowner",
    location: "Paraparaumu Beach, Kāpiti Coast",
    project: "Hallway & Stairway Painting",
    text: "Very satisfied. Sri and his co-worker did a great job, worked non-stop, polite and friendly, and tidied up afterwards.",
    rating: 5,
  },
  {
    name: "Homeowner",
    location: "Karori, Wellington",
    project: "Front Door Strip & Sand",
    text: "Outstanding service. I can't fault the work.",
    rating: 5,
  },
  {
    name: "Homeowner",
    location: "Titahi Bay, Porirua",
    project: "Internal Re-paint and prep",
    text: "Sri was quick to respond and was able to quote us on the day requested. Great communication and speed.",
    rating: 5,
  },
  {
    name: "Homeowner",
    location: "Paraparaumu Beach, Kāpiti Coast",
    project: "Bathroom Ceiling Painting",
    text: "Sri is awesome. Very responsive to questions and queries.",
    rating: 5,
  },
  {
    name: "Homeowner",
    location: "Cannons Creek, Porirua",
    project: "Roof Wash & Gutters",
    text: "I enjoyed meeting Sri who was professional and friendly. He was always prompt at responding.",
    rating: 5,
  },
];

export const FAQS = [
  {
    question: "How long does a painting project take?",
    answer:
      "It depends on the size and scope. A standard interior room takes 1–2 days, a full house interior around 1–2 weeks, and exterior repaints typically 1–3 weeks depending on weather and preparation needed. We always give you a clear timeline in your free quote.",
  },
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes — every quote is completely free and no-obligation. We visit your property, assess the work required, and provide a detailed written quote covering preparation, materials and labour with no hidden costs.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We service residential and commercial clients across parts of New Zealand, with a focus on the greater Wellington region. Get in touch and we'll confirm availability for your location.",
  },
  {
    question: "What type of paint do you use?",
    answer:
      "We use premium paints from trusted brands, selected for each surface and environment. For interiors we favour low-VOC, washable finishes; for exteriors, durable weather-resistant systems designed for New Zealand's UV and coastal conditions.",
  },
  {
    question: "Do you clean up after finishing?",
    answer:
      "Absolutely. Tidiness is part of our quality guarantee — we protect your furniture and floors during the job, and leave every site clean and ready to enjoy the moment we're done.",
  },
];

export const STATS = [
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 150, suffix: "+", label: "Happy Customers" },
  { value: 100, suffix: "%", label: "Quality Guarantee" },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;
