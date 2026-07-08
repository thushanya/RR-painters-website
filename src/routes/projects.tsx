import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectsGallery } from "@/components/site/ProjectsGallery";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Featured Projects — RR Painters | Our Recent Work" },
      {
        name: "description",
        content:
          "Browse completed painting projects by RR Painters — interior, exterior, roof and commercial work across New Zealand.",
      },
      { property: "og:title", content: "Featured Projects — RR Painters" },
      {
        property: "og:description",
        content: "Completed painting projects across residential and commercial New Zealand properties.",
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
        subtitle="A gallery of recent projects — placeholder imagery for now, soon to be replaced with real photos from our completed jobs."
      />
      <ProjectsGallery />
      <TestimonialsSection limit={3} />
      <div className="bg-sage pt-1">
        <CtaBanner />
      </div>
    </>
  );
}
