import { Container, Section, Eyebrow } from "@/components/layout";
import { reasons, whyEngineer } from "./data";

export function WhyChoose() {
  return (
    <Section id="why" variant="surface" spacing="default">
      <Container className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-primary" />
            <Eyebrow tone="default">Why ASP Group</Eyebrow>
          </div>
          <h2 className="type-h2 text-primary mt-2 mb-6 max-w-md">
            Built for operators who don't stop.
          </h2>
          <p className="type-body text-muted-foreground text-pretty mb-8 max-w-prose">
            Heavy equipment lives or dies by aftersales. ASP Group is structured around minimum
            downtime — official parts, certified people, and field service units that travel to the
            machine.
          </p>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
            <img
              src={whyEngineer}
              alt="ASP Group certified engineer servicing heavy machinery"
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full h-full object-cover img-premium"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
              <Eyebrow>Field Service</Eyebrow>
              <div className="type-body-sm font-semibold uppercase mt-1">
                On-site, anywhere in Georgia
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3 self-start">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="rounded-2xl bg-background surface-card p-6 md:p-7 transition-surface"
              >
                <div className="flex items-center justify-between mb-5">
                  <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  <span className="type-eyebrow text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="type-h3 mb-2">{r.title}</h3>
                <p className="type-body-sm text-muted-foreground text-pretty">{r.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
