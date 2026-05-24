import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ChevronRight,
  Ruler,
  Package,
  Zap,
  Compass,
  Users,
  RotateCw,
  Info,
  Layers,
  Sparkles,
  Settings2,
  ClipboardList,
  Briefcase,
  Clock,
  ShieldCheck,
  Mail,
  Phone,
} from "lucide-react";
import { getProductDetail, type ProductDetail } from "@/lib/products-data";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => {
    const p = getProductDetail(params.slug);
    const title = p
      ? `${p.productName} — ASP Group`
      : "Product — ASP Group";
    const description =
      p?.shortDescription ??
      "Explore ASP Group's premium industrial products across Auto, Construction, Agro and Hydraulic divisions.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  loader: ({ params }) => {
    const product = getProductDetail(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  notFoundComponent: () => (
    <main className="bg-[#f9f9fc] min-h-screen">
      <div className="mx-auto max-w-[1100px] px-6 py-24 text-center">
        <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-neutral-500">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-[#1c374a]">Product not found</h1>
        <p className="mt-3 text-[14px] text-neutral-600">
          The product you are looking for is not available. Browse our catalogue to find similar
          equipment.
        </p>
        <Link
          to="/auto"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[#1c374a] px-5 py-2.5 text-[13px] font-medium text-white hover:bg-[#2a4f6a] transition-colors"
        >
          Browse Auto catalogue <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </main>
  ),
  errorComponent: ({ error }) => (
    <main className="bg-[#f9f9fc] min-h-screen">
      <div className="mx-auto max-w-[1100px] px-6 py-24 text-center">
        <h1 className="text-2xl font-semibold text-[#1c374a]">Something went wrong</h1>
        <p className="mt-3 text-[13px] text-neutral-600">{error.message}</p>
      </div>
    </main>
  ),
  component: ProductPage,
});

const ICON_MAP: Record<string, typeof Ruler> = {
  height: Ruler,
  basket: Package,
  bolt: Zap,
  drive: Compass,
  crew: Users,
  rotate: RotateCw,
};

function ProductPage() {
  const { product } = Route.useLoaderData();
  return (
    <main className="bg-[#f9f9fc] min-h-screen">
      <Breadcrumb p={product} />
      <Hero p={product} />
      <Content p={product} />
      <BottomCTA p={product} />
    </main>
  );
}

function Breadcrumb({ p }: { p: ProductDetail }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-neutral-200/70 bg-white"
    >
      <ol className="mx-auto flex max-w-[1300px] flex-wrap items-center gap-1.5 px-5 lg:px-8 py-4 text-[12px] text-neutral-500">
        <li>
          <Link to="/" className="hover:text-[#1c374a] transition-colors">Home</Link>
        </li>
        <ChevronRight className="h-3 w-3 text-neutral-300" />
        <li>
          {p.divisionHref ? (
            <a href={p.divisionHref} className="hover:text-[#1c374a] transition-colors">
              {p.division}
            </a>
          ) : (
            <span>{p.division}</span>
          )}
        </li>
        <ChevronRight className="h-3 w-3 text-neutral-300" />
        <li>
          {p.subcategoryHref ? (
            <a href={p.subcategoryHref} className="hover:text-[#1c374a] transition-colors">
              {p.subcategory}
            </a>
          ) : (
            <span>{p.subcategory}</span>
          )}
        </li>
        <ChevronRight className="h-3 w-3 text-neutral-300" />
        <li className="text-[#1c374a] font-medium truncate max-w-[60vw]" aria-current="page">
          {p.productName}
        </li>
      </ol>
    </nav>
  );
}

function Hero({ p }: { p: ProductDetail }) {
  return (
    <section className="bg-white border-b border-neutral-200/70">
      <div className="mx-auto max-w-[1300px] px-5 lg:px-8 py-10 lg:py-14 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left — Gallery */}
        <ProductGallery p={p} />

        {/* Right — Text */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Pill>{p.division}</Pill>
            <Pill tone="muted">{p.subcategory}</Pill>
            {p.brand && <Pill tone="muted">{p.brand}</Pill>}
            {p.model && <Pill tone="muted">{p.model}</Pill>}
          </div>
          <h1 className="mt-5 text-[26px] sm:text-[32px] lg:text-[40px] font-semibold leading-[1.1] text-[#1c374a] tracking-tight">
            {p.productName}
          </h1>
          {p.shortDescription && (
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600 max-w-xl">
              {p.shortDescription}
            </p>
          )}

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1c374a] px-5 py-2.5 text-[13px] font-medium text-white hover:bg-[#2a4f6a] transition-colors"
            >
              Request a Quote <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#1c374a]/20 bg-white px-5 py-2.5 text-[13px] font-medium text-[#1c374a] hover:border-[#1c374a]/40 transition-colors"
            >
              Contact Sales
            </a>
          </div>

          {p.keySpecs && p.keySpecs.length > 0 && (
            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {p.keySpecs.map((s, i) => {
                const Icon = (s.icon && ICON_MAP[s.icon]) || Sparkles;
                return (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 rounded-xl border border-neutral-200/70 bg-[#f9f9fc] px-3 py-2.5"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[#1c374a]">
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                    </span>
                    <span className="text-[12px] font-medium text-[#1c374a] leading-tight">
                      {s.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

function ProductGallery({ p }: { p: ProductDetail }) {
  const images = p.imageGallery && p.imageGallery.length > 0
    ? p.imageGallery
    : p.mainImage
    ? [p.mainImage]
    : [];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  if (images.length === 0) {
    return (
      <div className="aspect-[5/4] w-full overflow-hidden rounded-3xl border border-neutral-200/70 bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center">
        <span className="text-[140px] font-semibold text-white/70 leading-none select-none">
          {(p.brand || p.productName).charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-neutral-200/70 bg-gradient-to-br from-neutral-100 to-neutral-50">
        <div className="h-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {images.map((src, i) => (
              <div key={i} className="min-w-0 shrink-0 grow-0 basis-full h-full flex items-center justify-center p-6">
                <img
                  src={src}
                  alt={`${p.productName} — view ${i + 1}`}
                  className="max-h-full max-w-full object-contain img-premium"
                />
              </div>
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-[#1c374a] hover:bg-white transition-colors shadow-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-[#1c374a] hover:bg-white transition-colors shadow-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-xl border bg-white transition-all ${
                selected === i
                  ? "border-[#1c374a] ring-2 ring-[#1c374a]/15"
                  : "border-neutral-200 hover:border-neutral-300"
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-contain p-1.5" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Content({ p }: { p: ProductDetail }) {
  const sections: { node: React.ReactNode; show: boolean }[] = [
    {
      show: !!(p.technicalSpecifications && p.technicalSpecifications.length),
      node: (
        <Card
          title={p.technicalSpecificationsTitle ?? "Technical Specifications"}
          icon={ClipboardList}
        >
          <SpecTable rows={p.technicalSpecifications!} />
        </Card>
      ),
    },
    {
      show: !!(p.equipmentParameters && p.equipmentParameters.length),
      node: (
        <Card
          title={p.equipmentParametersTitle ?? "Equipment Parameters"}
          icon={Settings2}
        >
          <SpecTable rows={p.equipmentParameters!} />
        </Card>
      ),
    },
    {
      show: !!(p.advantages && p.advantages.length),
      node: (
        <Card title="Key Advantages" icon={Sparkles}>
          <ol className="space-y-2.5">
            {p.advantages?.map((a, i) => (
              <li key={i} className="flex gap-3 text-[13.5px] leading-relaxed text-neutral-700">
                <span className="shrink-0 text-[12px] font-mono font-medium text-[#5ac1e3] tabular-nums w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ol>
        </Card>
      ),
    },
    {
      show: !!p.overview,
      node: (
        <Card title="Product Overview" icon={Info}>
          <p className="text-[14px] leading-relaxed text-neutral-700">{p.overview}</p>
        </Card>
      ),
    },
    {
      show: !!(p.applications && p.applications.length),
      node: (
        <Card title="Applications" icon={Layers}>
          <ul className="space-y-3">
            {p.applications?.map((a, i) => (
              <li key={i} className="text-[13.5px] leading-relaxed text-neutral-700">
                <span className="font-medium text-[#1c374a]">{a.title}</span>
                <span className="text-neutral-500"> — </span>
                <span>{a.body}</span>
              </li>
            ))}
          </ul>
        </Card>
      ),
    },
    {
      show: !!(p.commercialInfo?.length || p.deliveryTime || p.warranty),
      node: (
        <Card title="Commercial Information" icon={Briefcase}>
          <div className="space-y-2.5">
            {p.deliveryTime && (
              <CommercialRow icon={Clock} label="Delivery Time" value={p.deliveryTime} />
            )}
            {p.warranty && (
              <CommercialRow icon={ShieldCheck} label="Official Warranty" value={p.warranty} />
            )}
            {p.commercialInfo?.map((c, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-3 rounded-xl border border-neutral-200/70 bg-[#f9f9fc] px-3.5 py-2.5"
              >
                <span className="text-[12px] uppercase tracking-wide text-neutral-500">
                  {c.label}
                </span>
                <span className="text-[13px] font-medium text-[#1c374a] text-right">{c.value}</span>
              </div>
            ))}
          </div>
        </Card>
      ),
    },
  ].filter((c) => c.show);

  if (sections.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1300px] px-5 lg:px-8 py-12 lg:py-16 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sections.map((c, i) => (
          <div key={i}>{c.node}</div>
        ))}
      </div>
    </section>
  );
}

function Card({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: typeof Info;
  children: React.ReactNode;
}) {
  return (
    <article className="h-full rounded-2xl border border-neutral-200/70 bg-white p-6">
      <header className="flex items-center gap-2.5 mb-4">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#1c374a]/[0.06] text-[#1c374a]">
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <h2 className="text-[14px] font-semibold text-[#1c374a] tracking-tight">{title}</h2>
      </header>
      {children}
    </article>
  );
}

function SpecTable({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="divide-y divide-neutral-100">
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-5 gap-3 py-2.5">
          <dt className="col-span-3 text-[12.5px] text-neutral-500 leading-snug">{r.label}</dt>
          <dd className="col-span-2 text-[12.5px] font-medium text-[#1c374a] text-right leading-snug">
            {r.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function CommercialRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-neutral-200/70 bg-[#f9f9fc] px-3.5 py-3">
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#1c374a]">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] uppercase tracking-wide text-neutral-500">{label}</div>
        <div className="text-[13.5px] font-medium text-[#1c374a] truncate">{value}</div>
      </div>
    </div>
  );
}

function Pill({
  children,
  tone = "primary",
}: {
  children: React.ReactNode;
  tone?: "primary" | "muted";
}) {
  if (tone === "muted") {
    return (
      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600">
        {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-[#1c374a] px-2.5 py-1 text-[11px] font-medium text-white">
      {children}
    </span>
  );
}

function BottomCTA({ p }: { p: ProductDetail }) {
  return (
    <section id="contact" className="px-5 lg:px-8 pb-16">
      <div className="mx-auto max-w-[1300px] rounded-3xl bg-[#1c374a] text-white p-8 md:p-12 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
          <div>
            <h2 className="text-[22px] md:text-[26px] font-semibold tracking-tight">
              Need a reliable solution for your team?
            </h2>
            <p className="mt-2 text-[14px] text-white/75 max-w-xl">
              Contact us for pricing, availability, and technical consultation
              {p.productName ? ` on the ${p.productName}.` : "."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:dk@asp.ge?subject=${encodeURIComponent("Quote request: " + p.productName)}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#5ac1e3] px-5 py-2.5 text-[13px] font-medium text-[#1c374a] hover:brightness-105 transition-all"
            >
              <Mail className="h-3.5 w-3.5" /> Request a Quote
            </a>
            <a
              href="tel:+995322102201"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-5 py-2.5 text-[13px] font-medium text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" /> +995 32 2 10 22 01
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
