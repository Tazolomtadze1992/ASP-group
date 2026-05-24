import { Container, Section } from "@/components/layout";
import { certificates } from "./data";

export function Certificates() {
  return (
    <Section variant="default" spacing="compact" className="bg-background border-b border-border">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {certificates.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.code}
                className="group relative flex items-center gap-4 md:gap-5 rounded-xl surface-card px-5 py-5 md:px-7 md:py-6 transition-surface"
              >
                <div className="shrink-0 inline-flex items-center justify-center rounded-lg bg-primary/[0.04] w-12 h-12 md:w-14 md:h-14">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" strokeWidth={1.6} />
                </div>
                <div className="min-w-0">
                  <div className="type-body font-semibold text-primary">{cert.code}</div>
                  <div className="type-body-sm text-muted-foreground mt-0.5 text-pretty">{cert.name}</div>
                </div>
                <span
                  aria-hidden
                  className="absolute left-0 bottom-1 h-[2px] w-0 group-hover:w-full bg-primary transition-[width] duration-300 rounded-full"
                />
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
