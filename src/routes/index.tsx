import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustSection } from "@/components/site/TrustSection";
import { AboutSection } from "@/components/site/AboutSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ProjectsGallery } from "@/components/site/ProjectsGallery";
import { WhyChoose } from "@/components/site/WhyChoose";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustSection />
      <AboutSection />
      <ServicesSection limit={6} />
      <ProjectsGallery limit={3} />
      <WhyChoose />
      <ProcessTimeline />
      <TestimonialsSection limit={3} />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
