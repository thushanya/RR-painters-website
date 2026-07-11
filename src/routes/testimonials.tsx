import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { ReviewCtaSection } from "@/components/site/ReviewCtaSection"; 
import { WhyChoose } from "@/components/site/WhyChoose";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — RR Painters | Customer Reviews" },
      {
        name: "description",
        content:
          "Read what customers across New Zealand say about RR Painters — 5-star reviews for quality, reliability and service.",
      },
      { property: "og:title", content: "Testimonials — RR Painters" },
      {
        property: "og:description",
        content: "5-star reviews from homeowners and businesses across New Zealand.",
      },
    ],
  }),
  component: TestimonialsPage,
});

const BUILDERSCRACK_URL = "https://builderscrack.co.nz/tradies/21fnpwv0/rr-painting-services";

function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Trusted by Homeowners & Businesses"
        subtitle="Nothing matters more to us than happy customers. Here's what they have to say about working with RR Painters."
      />
      
      <TestimonialsSection />
      
      <ReviewCtaSection profileUrl={BUILDERSCRACK_URL} />
      
      {/* 1. Added a clean section element to separate it nicely */}
      <section className="bg-sage py-20 md:py-28">
        <WhyChoose />
      </section>
      
      {/* 2. Standardized CTA container with separate padding layout */}
      <section className="bg-background pb md:pb">
        <CtaBanner />
      </section>
    </>
  );
}