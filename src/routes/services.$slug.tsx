import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { FaArrowRight } from "react-icons/fa";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { SERVICES, type Service } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) {
      return {
        meta: [
          { title: "Service Not Found — RR Painters" },
          { name: "description", content: "The requested service could not be found." },
        ],
      };
    }

    const title = `${service.title} — RR Painters | NZ`;
    const desc = service.description;

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: `${service.title} — RR Painters` },
        { property: "og:description", content: desc },
        { property: "og:image", content: service.detail.image },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: service.detail.image },
      ],
    };
  },
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-40 text-center">
      <h1 className="font-display text-4xl font-semibold">Service Not Found</h1>
      <p className="mt-4 text-muted-foreground">The service you're looking for doesn't exist.</p>
      <Link
        to="/services"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-forest px-6 py-3 text-sm font-bold text-primary-foreground"
      >
        View All Services <FaArrowRight aria-hidden />
      </Link>
    </div>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData() as { service: Service };
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return <ServicePageTemplate service={service} related={related} />;
}
