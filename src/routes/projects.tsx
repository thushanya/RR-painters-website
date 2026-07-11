import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectsGallery } from "@/components/site/ProjectsGallery";

import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Featured Projects — RR Painters | Our Recent Work" },
      {
        name: "description",
        content:
          "Browse completed painting projects by RR Painters — interior, exterior and roof works across parts of New Zealand.",
      },
      { property: "og:title", content: "Featured Projects — RR Painters" },
      {
        property: "og:description",
        content: "Completed painting projects across residential properties in parts of New Zealand.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Featured Projects"
        title="Work That Speaks for Itself"
        subtitle="A gallery of recent projects completed by RR Painters across parts of New Zealand."
      />
      <ProjectsGallery />
      <div className="bg-sage pt-1">
        <CtaBanner />
      </div>
    </>
  );
}
