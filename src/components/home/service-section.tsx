import { Container, Section, Eyebrow } from "@/components/layout";
import { serviceFeatures } from "./data";

export function ServiceSection() {
  return (
    <Section id="service" variant="dark" spacing="default">
      <Container className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <Eyebrow tone="accent">Service & Aftersales</Eyebrow>
          <h2 className="type-h2 text-primary-foreground mt-3 mb-8">
            Engineering without failure.
          </h2>
          <p className="type-body md:text-lg text-primary-foreground/80 max-w-lg mb-10 text-pretty">
            More than machinery — ASP Group runs Service Centers in Tbilisi and Poti, plus 7 Hydraulic
            House branches across the country, supplying genuine parts and lubricants from PARKER,
            BOSCH REXROTH, AVISTA and FLEETGUARD.
          </p>
        </div>
        <div className="space-y-px bg-primary-foreground/10">
          {serviceFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="flex gap-5 p-6 bg-primary border-t border-primary-foreground/10 first:border-t-0"
              >
                <div className="w-12 h-12 bg-primary-foreground flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-semibold uppercase tracking-tight text-primary-foreground">
                    {f.title}
                  </div>
                  <div className="type-body-sm text-primary-foreground/70 mt-1 text-pretty">
                    {f.body}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
