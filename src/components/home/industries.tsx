import { Container, Section, SectionHeader } from "@/components/layout";
import { industries } from "./data";

export function Industries() {
  return (
    <Section variant="surface" spacing="default">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader eyebrow="Coverage" title="Industries We Serve" />
          <p className="type-body-sm text-muted-foreground max-w-md text-pretty font-mono">
            From state infrastructure tenders to private agribusiness — ASP Group equips the operators
            of Georgia.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {industries.map((i) => {
            const Icon = i.icon;
            return (
              <div
                key={i.label}
                className="rounded-2xl bg-background surface-card p-7 flex flex-col items-center text-center group cursor-default transition-surface"
              >
                <Icon
                  className="w-8 h-8 text-accent mb-4 transition-transform duration-150 group-hover:scale-105"
                  strokeWidth={1.5}
                />
                <div className="type-body-sm font-medium">{i.label}</div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
