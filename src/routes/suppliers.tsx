import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/suppliers")({
  head: () => ({
    meta: [
      { title: "Our Suppliers — ASP Group | Trusted Global Partners" },
      {
        name: "description",
        content:
          "ASP Group cooperates with trusted international manufacturers — FOTON, DAEWOO Trucks, KLUBB, ATLAS, FASSI, FOTON-LOXA, WEICHAI-LOVOL, SHANYU — to deliver reliable commercial vehicles, construction machinery and specialized solutions.",
      },
      { property: "og:title", content: "Our Suppliers — ASP Group" },
      {
        property: "og:description",
        content: "Trusted global brands powering ASP Group's divisions.",
      },
    ],
  }),
  component: SuppliersPage,
});

type Supplier = {
  name: string;
  wordmark: string;
  website: string;
  description: string;
};

const suppliers: Supplier[] = [
  {
    name: "FOTON",
    wordmark: "FOTON",
    website: "https://fotonmotor.com.ge/",
    description:
      "Commercial vehicles, trucks, vans, buses, electric mobility, and transport solutions.",
  },
  {
    name: "DAEWOO Trucks",
    wordmark: "DAEWOO",
    website: "https://www.daewootruck.com/",
    description:
      "Heavy-duty and medium-duty commercial trucks designed for demanding business operations.",
  },
  {
    name: "KLUBB",
    wordmark: "KLUBB",
    website: "https://www.klubb.com/",
    description:
      "Vehicle-mounted aerial platforms and lifting solutions for professional work at height.",
  },
  {
    name: "ATLAS",
    wordmark: "ATLAS",
    website: "https://atlasgmbh.com/",
    description:
      "Loader cranes and heavy-duty lifting equipment for industrial and commercial applications.",
  },
  {
    name: "FASSI",
    wordmark: "FASSI",
    website: "https://www.fassi.com/en/",
    description:
      "Italian loader cranes and lifting solutions for trucks and specialized vehicles.",
  },
  {
    name: "FOTON-LOXA",
    wordmark: "FOTON-LOXA",
    website: "https://foton-global.com.ge/",
    description:
      "Construction machinery and heavy equipment solutions for demanding worksites.",
  },
  {
    name: "WEICHAI-LOVOL",
    wordmark: "LOVOL",
    website: "https://en.lovol.com/",
    description:
      "Construction machinery, agricultural equipment, vehicles, and power technology.",
  },
  {
    name: "SHANYU",
    wordmark: "SHANYU",
    website: "https://foton-global.com.ge/",
    description:
      "Construction machinery and industrial equipment solutions for professional operations.",
  },
];

function SuppliersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-display">
      <Section variant="surface" spacing="default" className="border-b border-border">
        <Container>
          <SectionHeader
            eyebrow="Partners"
            title="Our Suppliers"
            titleAs="h1"
            description="Trusted global brands powering ASP Group's divisions. We cooperate with leading international manufacturers to deliver reliable commercial vehicles, construction machinery, lifting equipment, and specialized solutions."
          />
        </Container>
      </Section>

      <Section spacing="default">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {suppliers.map((s) => (
              <SupplierCard key={s.name} s={s} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}

function SupplierCard({ s }: { s: Supplier }) {
  return (
    <article className="group rounded-2xl surface-card overflow-hidden flex flex-col transition-surface hover:-translate-y-0.5">
      <div className="aspect-[5/3] flex items-center justify-center bg-[#f7f8fa] border-b border-border/50 px-6">
        <span
          aria-label={`${s.name} logo`}
          className="text-2xl md:text-3xl font-black tracking-[-0.02em] text-[#1c374a] text-center select-none"
        >
          {s.wordmark}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-[15px] font-semibold tracking-tight text-[#1c374a] mb-2">
          {s.name}
        </h2>
        <p className="text-[13px] text-foreground/65 leading-relaxed mb-6 flex-1">
          {s.description}
        </p>
        <Button asChild variant="asp" size="sm" className="self-start">
          <a href={s.website} target="_blank" rel="noopener noreferrer">
            Visit Website
            <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.25} />
          </a>
        </Button>
      </div>
    </article>
  );
}
