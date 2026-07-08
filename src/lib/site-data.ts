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
  email: "R.R.Painters@yahoo.com",
  emailHref: "mailto:R.R.Painters@yahoo.com",
};

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: IconType;
}

export const SERVICES: Service[] = [
  {
    slug: "interior-painting",
    title: "Interior Painting",
    description:
      "Flawless walls, ceilings and trims with premium low-VOC paints — transforming living spaces with crisp, lasting finishes.",
    icon: FaPaintRoller,
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting",
    description:
      "Weather-resistant coatings built for New Zealand conditions, protecting and beautifying your home for years to come.",
    icon: FaHome,
  },
  {
    slug: "roof-painting",
    title: "Roof Painting",
    description:
      "Specialist roof coating systems that restore, seal and extend the life of metal, tile and concrete roofs.",
    icon: FaWarehouse,
  },
  {
    slug: "roof-cleaning",
    title: "Roof Cleaning",
    description:
      "Gentle yet thorough moss, mould and lichen treatment that revives your roof and prepares it for coating.",
    icon: FaBroom,
  },
  {
    slug: "water-blasting",
    title: "Water Blasting",
    description:
      "High-pressure cleaning for decks, driveways, fences and cladding — removing years of grime in a single visit.",
    icon: FaWater,
  },
  {
    slug: "wallpaper-removal",
    title: "Wallpaper Removal",
    description:
      "Careful stripping and surface restoration, leaving walls perfectly smooth and ready for a fresh new look.",
    icon: FaScroll,
  },
  {
    slug: "plaster-repairs",
    title: "Plaster Repairs",
    description:
      "Expert patching, skimming and crack repairs that create the flawless base every premium paint job deserves.",
    icon: FaHammer,
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
    name: "Sarah Mitchell",
    location: "Auckland",
    rating: 5,
    avatar: "https://i.pravatar.cc/160?img=47",
    review:
      "RR Painters completely transformed our villa. The attention to detail was incredible — crisp lines, spotless cleanup, and they finished right on schedule. Couldn't recommend them more highly.",
  },
  {
    name: "James Thompson",
    location: "Hamilton",
    rating: 5,
    avatar: "https://i.pravatar.cc/160?img=12",
    review:
      "Professional from the first quote to the final walkthrough. Our roof looks brand new and the team was courteous and tidy every single day. Outstanding value.",
  },
  {
    name: "Priya Sharma",
    location: "Auckland",
    rating: 5,
    avatar: "https://i.pravatar.cc/160?img=32",
    review:
      "We had the whole interior repainted before selling. The finish was flawless and our agent said it added real value. Honest pricing and genuinely lovely people to deal with.",
  },
  {
    name: "Mark Davidson",
    location: "Tauranga",
    rating: 5,
    avatar: "https://i.pravatar.cc/160?img=59",
    review:
      "The exterior repaint has made our 90s home look modern again. They water-blasted, repaired the plaster and painted — one team for everything. Superb workmanship.",
  },
  {
    name: "Emma Wilson",
    location: "Auckland",
    rating: 5,
    avatar: "https://i.pravatar.cc/160?img=25",
    review:
      "Fast, friendly and fastidious. The wallpaper removal and repaint of our lounge was done in three days with zero mess left behind. Will absolutely use RR Painters again.",
  },
  {
    name: "David Chen",
    location: "Wellington",
    rating: 5,
    avatar: "https://i.pravatar.cc/160?img=68",
    review:
      "Our office repaint was completed over a single weekend with no disruption to the business. Immaculate finish and great communication throughout the project.",
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
      "We service residential and commercial clients across New Zealand, with a focus on the greater Auckland region. Get in touch and we'll confirm availability for your location.",
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
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 450, suffix: "+", label: "Happy Customers" },
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
