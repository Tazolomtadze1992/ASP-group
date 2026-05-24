import { Container, Section, SectionHeader } from "@/components/layout";
import { divisions } from "./data";

export function Directions() {
  return (
    <Section id="directions" spacing="compact" className="pt-8 md:pt-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
          <SectionHeader eyebrow="Portfolio" title="Areas of Operation" />
          <p className="type-body-sm text-muted-foreground max-w-xs md:text-right font-mono uppercase tracking-tight text-pretty">
            Four core divisions. One integrated partner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {divisions.slice(0, 5).map((d) => (
            <article
              key={d.title}
              className="group relative overflow-hidden rounded-2xl bg-primary aspect-[4/5]"
            >
              <img
                src={d.img}
                alt={d.title}
                width={800}
                height={1000}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-300 ease-out group-hover:scale-[1.03] img-premium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <span
                  className="type-body-sm font-medium tracking-[0.14em] uppercase"
                  style={{ color: d.color }}
                >
                  {d.tag}
                </span>
                <h3 className="mt-2 type-h3 text-primary-foreground">{d.title}</h3>
              </div>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: d.color }}
              />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
