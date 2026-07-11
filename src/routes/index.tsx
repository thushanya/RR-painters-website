import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustSection } from "@/components/site/TrustSection";
import { HomeAboutTeaser } from "@/components/site/HomeAboutTeaser";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ProjectsGallery } from "@/components/site/ProjectsGallery";
import { StatsStrip } from "@/components/site/StatsStrip";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { CtaBanner } from "@/components/site/CtaBanner";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustSection />
      <HomeAboutTeaser />
      <ServicesSection limit={3} />
      <ProjectsGallery limit={3} />
      <StatsStrip />
      <ProcessTimeline />
      <TestimonialsSection limit={2} />
      <CtaBanner />
    </>
  );
}
