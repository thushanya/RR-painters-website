import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactSection } from "@/components/site/ContactSection";
import { FaqSection } from "@/components/site/FaqSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — RR Painters | Free Quotes NZ" },
      {
        name: "description",
        content:
          "Contact RR Painters for professional interior, exterior and residential painting services in New Zealand. Request a free quote from our experienced painting team.",
      },
      { property: "og:title", content: "Contact Us — RR Painters" },
      {
        property: "og:description",
        content: "Get your free, no-obligation painting quote today. Serving parts of New Zealand.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get Your Free Quote Today"
        subtitle="Speak with R. Shri and the RR Painters team — we respond to every enquiry within one business day."
      />
      <ContactSection />
      <FaqSection />
    </>
  );
}
