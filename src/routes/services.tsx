import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — RR Painters | Interior, Exterior & Roof" },
      {
        name: "description",
        content:
          "Interior & exterior painting, roof painting & cleaning, water blasting, wallpaper removal and plaster repairs across New Zealand. Free quotes.",
      },
      { property: "og:title", content: "Our Services — RR Painters" },
      {
        property: "og:description",
        content: "Complete painting and property care services across New Zealand.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Complete Painting & Property Care"
        subtitle="Seven specialist services, one trusted team. Every job starts with a free quote and ends with a finish we're proud to put our name on."
      />
      <ServicesSection />
      <ProcessTimeline />
      <FaqSection />
      <div className="bg-sage pt-1">
        <CtaBanner />
      </div>
    </>
  );
}
