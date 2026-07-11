import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicesSection } from "@/components/site/ServicesSection";
import { CtaBanner } from "@/components/site/CtaBanner";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";

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
        content: "Complete painting and property care services across parts of New Zealand.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const location = useLocation();
  const isIndexRoute = location.pathname === "/services";

  return (
    <>
      {isIndexRoute && (
        <>
          <PageHeader
            eyebrow="Our Services"
            title="Complete Painting & Property Care"
            subtitle="Seven specialist services, one trusted team. Every job starts with a free quote and ends with a finish we're proud to put our name on."
          />
          <ServicesSection />
          <ProcessTimeline />
          <div className="bg-sage pt-1">
            <CtaBanner />
          </div>
        </>
      )}
      <Outlet />
    </>
  );
}
