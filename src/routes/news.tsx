import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Play, ArrowRight, Tag } from "lucide-react";
import { Container, Section, SectionHeader, Eyebrow } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Vlogs — ASP Group" },
      {
        name: "description",
        content:
          "Latest news, vlogs, featured stories and media gallery from ASP Group — Georgia's industrial machinery & commercial vehicles leader.",
      },
      { property: "og:title", content: "News & Vlogs — ASP Group" },
      {
        property: "og:description",
        content:
          "Stay updated with ASP Group news, video reports, partnerships and behind-the-scenes coverage from our divisions.",
      },
    ],
  }),
  component: NewsPage,
});

type Category = "All" | "Auto" | "Construction" | "Agro" | "Hydraulic" | "Company";

type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: Exclude<Category, "All">;
  image: string;
  featured?: boolean;
};

type VlogItem = {
  id: number;
  title: string;
  duration: string;
  date: string;
  thumb: string;
};

const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "FOTON Delivers New Fleet of Heavy-Duty Trucks Across Georgia",
    excerpt:
      "ASP Group expands its commercial fleet capabilities with a new shipment of FOTON heavy-duty trucks, designed for demanding Caucasian terrain.",
    date: "May 14, 2026",
    category: "Auto",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "ZOOMLION Excavators Power New Tbilisi Infrastructure Project",
    excerpt:
      "Our construction division supplies a full lineup of ZOOMLION excavators and loaders for one of the largest infrastructure builds of the year.",
    date: "May 02, 2026",
    category: "Construction",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "LOVOL Cab Tractors Now Available in Kakheti Region",
    excerpt:
      "ASP Group brings the latest LOVOL cab tractors closer to Georgian farmers with an expanded service network in Kakheti.",
    date: "April 24, 2026",
    category: "Agro",
    image:
      "https://images.unsplash.com/photo-1605338803155-8b6cb6c1c5a3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "Hydraulic House Opens Expanded Spare Parts Warehouse",
    excerpt:
      "New 2,400 m² facility doubles our stock of pumps, motors, seals and hydraulic cylinders for faster nationwide delivery.",
    date: "April 10, 2026",
    category: "Hydraulic",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    title: "ASP Group Celebrates 15 Years of Engineering Excellence",
    excerpt:
      "From a single workshop to four full divisions — a look back at the milestones that shaped ASP Group.",
    date: "March 28, 2026",
    category: "Company",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 6,
    title: "New Aerial Work Platforms Join Our Commercial Lineup",
    excerpt:
      "Telescopic and articulating boom lifts now available for purchase and rental across our nationwide network.",
    date: "March 15, 2026",
    category: "Auto",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
  },
];

const VLOGS: VlogItem[] = [
  {
    id: 1,
    title: "Inside the ASP Body Manufacturing Facility",
    duration: "06:24",
    date: "May 10, 2026",
    thumb:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "FOTON Truck Field Test — Mountain Roads of Georgia",
    duration: "08:51",
    date: "April 30, 2026",
    thumb:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "ZOOMLION Excavator Walkaround & Operator Tips",
    duration: "05:13",
    date: "April 18, 2026",
    thumb:
      "https://images.unsplash.com/photo-1572584642822-6f8de0243c93?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "How Our Service Team Keeps Fleets Running",
    duration: "04:42",
    date: "April 05, 2026",
    thumb:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=80",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1597007030739-6d2e7172ee7c?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1605338803155-8b6cb6c1c5a3?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1572584642822-6f8de0243c93?auto=format&fit=crop&w=1000&q=80",
];

const CATEGORIES: Category[] = ["All", "Auto", "Construction", "Agro", "Hydraulic", "Company"];

function NewsPage() {
  const [active, setActive] = useState<Category>("All");

  const featured = NEWS.find((n) => n.featured)!;
  const filtered = NEWS.filter((n) => !n.featured).filter(
    (n) => active === "All" || n.category === active,
  );

  return (
    <main className="bg-background">
      <Section variant="dark" spacing="compact" className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(45deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <Container className="relative">
          <Eyebrow tone="on-dark">ASP Group · Newsroom</Eyebrow>
          <h1 className="type-h1 mt-3 text-primary-foreground max-w-3xl">News &amp; Vlogs</h1>
          <p className="mt-4 max-w-2xl type-body text-primary-foreground/70 text-pretty">
            The latest from our divisions — Auto, Construction, Agro and Hydraulic House. Field
            reports, vlogs, partnerships and stories from the people behind the machines.
          </p>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container>
          <SectionHeader eyebrow="Featured" title="Editor's Pick" />
          <article className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-10 items-stretch overflow-hidden rounded-2xl surface-card">
            <div className="lg:col-span-3 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover img-premium transition-transform duration-300 ease-out hover:scale-[1.02]"
              />
              <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 type-body-sm font-medium tracking-wide text-primary-foreground">
                <Tag className="h-3 w-3" /> {featured.category}
              </span>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center p-7 lg:p-10">
              <div className="flex items-center gap-2 type-body-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {featured.date}
              </div>
              <h3 className="mt-3 type-h3 text-foreground">{featured.title}</h3>
              <p className="mt-4 type-body text-muted-foreground text-pretty">{featured.excerpt}</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 type-body-sm font-medium text-primary group hover:text-accent transition-colors"
              >
                Read full story
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </a>
            </div>
          </article>
        </Container>
      </Section>

      <Section variant="white" spacing="compact">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <SectionHeader eyebrow="Latest" title="News & Updates" />
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <Button
                  key={c}
                  type="button"
                  size="sm"
                  variant={active === c ? "asp" : "asp-outline"}
                  onClick={() => setActive(c)}
                  className={cn(
                    active !== c && "rounded-full border-border text-muted-foreground",
                  )}
                >
                  {c}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-2xl surface-card transition-surface hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover img-premium transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-primary px-2.5 py-1 type-eyebrow text-primary-foreground tracking-wide">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 type-body-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </div>
                  <h3 className="mt-2.5 type-h3 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 type-body-sm text-muted-foreground text-pretty line-clamp-3">
                    {item.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-1.5 type-body-sm font-medium text-primary hover:text-accent transition-colors group/link"
                  >
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center type-body-sm text-muted-foreground">
              No posts in this category yet.
            </p>
          )}
        </Container>
      </Section>

      <Section spacing="compact">
        <Container>
          <SectionHeader eyebrow="Watch" title="Video & Vlog Posts" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VLOGS.map((v) => (
              <button key={v.id} type="button" className="group text-left">
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
                  <img
                    src={v.thumb}
                    alt={v.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover img-premium transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                  <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-150 group-hover:scale-[1.04]">
                      <Play className="h-4 w-4 fill-current ml-0.5" />
                    </span>
                  </span>
                  <span className="absolute right-3 bottom-3 rounded-full bg-black/60 px-2 py-0.5 type-body-sm font-medium text-white tabular-nums">
                    {v.duration}
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 type-body-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {v.date}
                  </div>
                  <h3 className="mt-1.5 type-h3 text-foreground group-hover:text-primary transition-colors">
                    {v.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="white" spacing="compact">
        <Container>
          <SectionHeader eyebrow="Gallery" title="Media Highlights" />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {GALLERY.map((src, i) => (
              <a
                key={i}
                href={src}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-muted",
                  (i === 0 || i === 5) && "row-span-2 aspect-square sm:aspect-auto",
                  i !== 0 && i !== 5 && "aspect-square",
                )}
              >
                <img
                  src={src}
                  alt={`ASP Group media ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover img-premium transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="dark" spacing="compact">
        <Container className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="type-h3 text-primary-foreground">Stay informed. Subscribe to ASP Group updates.</h3>
            <p className="mt-2 text-primary-foreground/70 max-w-xl text-pretty">
              Monthly digest of new arrivals, field reports and division news — straight to your
              inbox.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full lg:w-auto items-stretch gap-2"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full lg:w-80 rounded-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-colors"
            />
            <Button type="submit" variant="on-dark-solid" size="xl">
              Subscribe
            </Button>
          </form>
        </Container>
      </Section>
    </main>
  );
}
