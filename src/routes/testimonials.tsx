import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
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

function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Trusted by Homeowners & Businesses"
        subtitle="Nothing matters more to us than happy customers. Here's what they have to say about working with RR Painters."
      />
      <TestimonialsSection />
      <WhyChoose />
      <div className="bg-sage pt-1">
        <CtaBanner />
      </div>
    </>
  );
}
