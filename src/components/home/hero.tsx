import heroExcavator from "@/assets/hero-excavator.jpg";
import { Container, Grid, Col } from "@/components/layout";
import { HeroCtaButton } from "./hero-cta-button";
import { PartnersStrip } from "./partners-strip";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-var(--header-height))] flex-col overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <img
          src={heroExcavator}
          alt="Heavy construction excavator at sunset on a Georgian site"
          width={1920}
          height={1080}
          loading="eager"
          className="hero-media absolute inset-0 h-full w-full object-cover object-[center_45%] sm:object-[center_42%] lg:object-[52%_center] img-premium"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/25 to-transparent" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-[min(55%,32rem)] bg-gradient-to-r from-primary/50 to-transparent"
        />
      </div>

      <div className="relative z-10 flex min-h-[inherit] flex-1 flex-col">
        <Container className="flex min-h-0 flex-1 flex-col justify-end pt-8 pb-20 sm:pt-10 sm:pb-24 lg:pt-14 lg:pb-28">
          <Grid>
            <Col span={12} className="lg:col-span-8">
              <p className="type-eyebrow text-primary-foreground/55 tracking-[0.22em] mb-4">
                Serving Georgia Since 2001
              </p>
              <h1 className="type-hero-title text-primary-foreground text-pretty">
                Vehicles, machinery, and hydraulic systems - supplied, serviced, and supported
                nationwide.
              </h1>
              <HeroCtaButton href="/#directions" className="mt-6">
                Explore our divisions
              </HeroCtaButton>
            </Col>
          </Grid>
        </Container>

        <PartnersStrip />
      </div>
    </section>
  );
}
