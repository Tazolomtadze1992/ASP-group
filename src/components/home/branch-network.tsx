import { BranchMap } from "@/components/BranchMap";
import { Container, Section, SectionHeader } from "@/components/layout";

export function BranchNetwork() {
  return (
    <Section id="branches" spacing="default">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeader eyebrow="Network" title="Our Branch Network Across Georgia" />
          <p className="type-body-sm text-muted-foreground max-w-md font-mono text-pretty">
            Find ASP Group showrooms, service centers, and Hydraulic House branches nationwide.
          </p>
        </div>
        <BranchMap compact />
      </Container>
    </Section>
  );
}
