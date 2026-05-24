import { createFileRoute } from "@tanstack/react-router";
import { BranchMap } from "@/components/BranchMap";
import { Container, Section, SectionHeader } from "@/components/layout";
import { ContactForm, ContactInfo } from "@/components/contact";
import { branches } from "@/lib/branches-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ASP Group | Sales, Service, Spare Parts & Branches" },
      {
        name: "description",
        content:
          "Get in touch with ASP Group. Our team is ready to help you with sales, service, spare parts, and branch information across Georgia.",
      },
      { property: "og:title", content: "Contact Us — ASP Group" },
      {
        property: "og:description",
        content:
          "ASP Group nationwide branches: showrooms, service centers and Hydraulic Houses in Tbilisi, Kutaisi, Poti, Zugdidi and Chiatura.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ASP Group LLC",
          url: "https://www.asp.ge",
          email: "dk@asp.ge",
          telephone: "+995 32 2 10 22 01",
          address: {
            "@type": "PostalAddress",
            addressCountry: "GE",
            addressLocality: "Tbilisi",
            streetAddress: "Erekle II 5th Lane #3, Village Didi Lilo",
          },
          location: branches.map((b) => ({
            "@type": "Place",
            name: `${b.name} (${b.category})`,
            address: {
              "@type": "PostalAddress",
              streetAddress: b.address,
              addressLocality: b.city,
              addressCountry: "GE",
            },
            telephone: b.phones[0],
            geo: { "@type": "GeoCoordinates", latitude: b.lat, longitude: b.lng },
          })),
        }),
      },
    ],
  }),
  component: ContactPage,
});

const contactInfoItems = [
  { label: "Phone", value: "+995 32 2 10 22 01", href: "tel:+995322102201", icon: "phone" as const },
  { label: "Email", value: "dk@asp.ge", href: "mailto:dk@asp.ge", icon: "mail" as const },
  {
    label: "Working Hours",
    value: "Mon – Fri, 09:00 – 18:00 (GE)",
    icon: "clock" as const,
  },
  {
    label: "Headquarters",
    value: "Erekle II 5th Lane #3, Didi Lilo, Tbilisi",
    icon: "map" as const,
  },
];

function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-display">
      <Section spacing="default">
        <Container className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Get In Touch"
              title="Contact Us"
              description="Sales engineers respond within one business day with specifications, pricing and availability tailored to your project, fleet or tender."
            />
            <ContactInfo items={contactInfoItems} className="mt-8" />
          </div>
          <div className="lg:col-span-7">
            <ContactForm pageSource="/contact" />
          </div>
        </Container>
      </Section>
      <Section variant="surface" spacing="default" className="border-t border-border">
        <Container>
          <SectionHeader
            eyebrow="Branches"
            title="Our Branch Network Across Georgia"
            description="Find ASP Group showrooms, service centers, and Hydraulic House branches nationwide."
          />
          <div className="mt-10">
            <BranchMap />
          </div>
        </Container>
      </Section>
    </main>
  );
}
