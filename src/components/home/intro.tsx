import { Container, Section, SectionHeader } from "@/components/layout";

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-semibold text-accent tabular-nums">{n}</div>
      <div className="type-eyebrow text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

export function Intro() {
  return (
    <Section spacing="compact" className="pt-[var(--section-y)] pb-8 md:pb-12">
      <Container className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHeader
            eyebrow="About"
            title="24 Years Engineering Georgian Industry"
            titleAs="h2"
          />
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-6 type-body md:text-lg text-muted-foreground">
          <p className="text-pretty">
            ASP Group LLC has been successfully operating in the Georgian automotive market for over
            24 years. Our core business covers sale and comprehensive after-sales service of trucks,
            special-purpose vehicles, buses, construction and agricultural machinery.
          </p>
          <p className="text-pretty">
            We are <span className="text-foreground font-medium">official dealers</span> of FOTON,
            DAEWOO Trucks, WEICHAI-LOVOL, ZOOMLION, PARKER, BOSCH REXROTH and others — backed by an
            in-country network of <span className="text-foreground font-medium">14 branches</span> and
            our own Hydraulic House service infrastructure.
          </p>
          <div className="pt-6 border-t border-border grid grid-cols-3 gap-6">
            <Stat n="14" l="Branches Nationwide" />
            <Stat n="70+" l="Active Suppliers" />
            <Stat n="90+" l="Employees" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
