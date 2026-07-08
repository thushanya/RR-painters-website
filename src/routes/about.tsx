import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { AboutSection } from "@/components/site/AboutSection";
import { StatsStrip } from "@/components/site/StatsStrip";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { CtaBanner } from "@/components/site/CtaBanner";
import { TrustSection } from "@/components/site/TrustSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — RR Painters | NZ Painting Specialists" },
      {
        name: "description",
        content:
          "Learn about RR Painters — a registered New Zealand painting company delivering high-quality finishes and honest service since 2018.",
      },
      { property: "og:title", content: "About Us — RR Painters" },
      {
        property: "og:description",
        content: "A registered NZ painting company delivering quality workmanship since 2018.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A Painting Company Built on Trust"
        subtitle="RR Painters has been transforming New Zealand homes and businesses since 2018 — with honest service, premium materials and finishes that last."
      />
      <AboutSection full />
      <StatsStrip />
      <TrustSection />
      <ProcessTimeline />
      <div className="bg-sage pt-1">
        <CtaBanner />
      </div>
    </>
  );
}
