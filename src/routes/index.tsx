import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Hero } from "@/components/site/Hero";

const TrustSection = lazy(() =>
  import("@/components/site/TrustSection").then((m) => ({
    default: m.TrustSection,
  }))
);

const HomeAboutTeaser = lazy(() =>
  import("@/components/site/HomeAboutTeaser").then((m) => ({
    default: m.HomeAboutTeaser,
  }))
);

const ServicesSection = lazy(() =>
  import("@/components/site/ServicesSection").then((m) => ({
    default: m.ServicesSection,
  }))
);

const ProjectsGallery = lazy(() =>
  import("@/components/site/ProjectsGallery").then((m) => ({
    default: m.ProjectsGallery,
  }))
);

const StatsStrip = lazy(() =>
  import("@/components/site/StatsStrip").then((m) => ({
    default: m.StatsStrip,
  }))
);

const ProcessTimeline = lazy(() =>
  import("@/components/site/ProcessTimeline").then((m) => ({
    default: m.ProcessTimeline,
  }))
);

const TestimonialsSection = lazy(() =>
  import("@/components/site/TestimonialsSection").then((m) => ({
    default: m.TestimonialsSection,
  }))
);

const CtaBanner = lazy(() =>
  import("@/components/site/CtaBanner").then((m) => ({
    default: m.CtaBanner,
  }))
);
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "RR Painters NZ | Professional House Painters",
      },
      {
        name: "description",
        content:
          "RR Painters provides professional interior and exterior painting services across New Zealand. Quality workmanship and free quotes.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <Suspense fallback={null}>
        <TrustSection />
        <HomeAboutTeaser />
        <ServicesSection limit={3} />
        <ProjectsGallery limit={3} />
        <StatsStrip />
        <ProcessTimeline />
        <TestimonialsSection limit={2} />
        <CtaBanner />
      </Suspense>
    </>
  );
}
