import { createFileRoute } from "@tanstack/react-router";
import heroExcavator from "@/assets/hero-excavator.jpg";
import {
  Hero,
  Certificates,
  Intro,
  Directions,
  Industries,
  WhyChoose,
  ServiceSection,
  BranchNetwork,
  LeadSection,
  FloatingContacts,
} from "@/components/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ASP Group — Trucks, Construction & Agricultural Machinery in Georgia" },
      {
        name: "description",
        content:
          "ASP Group — 24 years in Georgia. Official dealer of FOTON, DAEWOO Trucks, LOVOL, ZOOMLION, PARKER, BOSCH REXROTH. Trucks, construction & agricultural machinery, hydraulics, service & spare parts.",
      },
      { property: "og:title", content: "ASP Group — Innovative Technologies for a Green Future" },
      {
        property: "og:description",
        content:
          "24 years of industrial machinery and commercial vehicles in Georgia. 14 branches, 70+ suppliers, 90+ employees.",
      },
      { property: "og:image", content: heroExcavator },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ASP Group LLC",
          url: "https://www.asp.ge",
          areaServed: "GE",
          foundingDate: "2001",
          email: "dk@asp.ge",
          telephone: "+995 32 2 10 22 01",
          address: {
            "@type": "PostalAddress",
            addressCountry: "GE",
            addressLocality: "Tbilisi",
            streetAddress: "Erekle II, 5th Lane #3, Village Didi Lilo",
          },
          description:
            "ASP Group LLC — 24 years in the Georgian automotive market. Official dealer of FOTON, DAEWOO Trucks, LOVOL, ZOOMLION, PARKER, BOSCH REXROTH and more.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display pb-24 lg:pb-0">
      <Hero />
      <Certificates />
      <Intro />
      <Directions />
      <Industries />
      <WhyChoose />
      <ServiceSection />
      <BranchNetwork />
      <LeadSection />
      <FloatingContacts />
    </div>
  );
}
