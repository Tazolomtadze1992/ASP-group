import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Search, X, ChevronDown, Filter, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout";

export const Route = createFileRoute("/auto")({
  head: () => ({
    meta: [
      { title: "Auto Division — Trucks, Vans, Cranes & EVs | ASP Group" },
      {
        name: "description",
        content:
          "Explore ASP Group's Auto division: 31 commercial vehicles across tractors, dumpers, mixers, cranes, aerial work platforms, vans, distribution, commercial and EV categories.",
      },
      { property: "og:title", content: "Auto Division | ASP Group" },
      {
        property: "og:description",
        content:
          "FOTON, DAEWOO and DONGFENG commercial vehicles — official dealer in Georgia.",
      },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  component: AutoPage,
});

type Product = {
  id: string;
  name: string;
  brand: "FOTON" | "DAEWOO" | "DONGFENG";
  categories: string[];
  spec?: string;
};

const CATEGORIES = [
  "Tractor",
  "Dumper Truck",
  "Concrete Mixer Truck",
  "Bus",
  "Passenger Van",
  "Cargo Van",
  "Distribution",
  "Pickup Truck",
  "Aerial Work Platform",
  "Crane Truck",
  "Knuckle Boom Crane",
  "Municipal Vehicles",
  "Off-road 4x4",
  "Off-road 6x6",
  "EV",
] as const;

const BRANDS = ["FOTON", "DAEWOO", "DONGFENG"] as const;

const PRODUCTS: Product[] = [
  // Tractor (3)
  { id: "auman-est-a-4x2", name: "FOTON AUMAN EST-A 4x2", brand: "FOTON", categories: ["Tractor"], spec: "490 hp" },
  { id: "auman-galaxy-4x2", name: "FOTON AUMAN Galaxy 4x2", brand: "FOTON", categories: ["Tractor"], spec: "560 hp" },
  { id: "auman-galaxy-6x4", name: "FOTON AUMAN Galaxy 6x4", brand: "FOTON", categories: ["Tractor"], spec: "560 hp" },
  // Dumper Truck (2)
  { id: "auman-est-6x4-dumper", name: "FOTON AUMAN EST 6x4", brand: "FOTON", categories: ["Dumper Truck"], spec: "20 m³" },
  { id: "auman-est-8x4-dumper", name: "FOTON AUMAN EST 8x4", brand: "FOTON", categories: ["Dumper Truck"], spec: "22 m³" },
  // Concrete Mixer Truck (2)
  { id: "loxa-auman-est-6x4", name: "FOTON LOXA AUMAN EST 6x4", brand: "FOTON", categories: ["Concrete Mixer Truck"], spec: "10 m³" },
  { id: "loxa-auman-est-8x4", name: "FOTON LOXA AUMAN EST LOXA 8x4", brand: "FOTON", categories: ["Concrete Mixer Truck"], spec: "12 m³" },
  // Passenger Van (1) — shared with Cargo Van
  { id: "toano-l3h2-3plus3", name: "FOTON TOANO L3H2 3+3", brand: "FOTON", categories: ["Passenger Van", "Cargo Van"] },
  // Cargo Van (3 unique)
  { id: "toano-l2h2", name: "FOTON TOANO L2H2", brand: "FOTON", categories: ["Cargo Van"], spec: "9.1 m³" },
  { id: "toano-l3h3", name: "FOTON TOANO L3H3", brand: "FOTON", categories: ["Cargo Van"], spec: "12.3 m³" },
  { id: "toano-cargo", name: "FOTON TOANO Cargo", brand: "FOTON", categories: ["Cargo Van"] },
  // Distribution (3)
  { id: "aumark-bj1065", name: "FOTON AUMARK BJ1065", brand: "FOTON", categories: ["Distribution"] },
  { id: "aumark-bj1088", name: "FOTON AUMARK BJ1088", brand: "FOTON", categories: ["Distribution"] },
  { id: "aumark-s", name: "FOTON AUMARK S", brand: "FOTON", categories: ["Distribution"] },
  // Aerial Work Platform (7) — some shared
  { id: "daewoo-maximus-comet", name: "DAEWOO Maximus COMET 4x4", brand: "DAEWOO", categories: ["Aerial Work Platform"], spec: "31 m" },
  { id: "aumark-s-gk20", name: "FOTON Aumark S BJ1088 GK20", brand: "FOTON", categories: ["Aerial Work Platform", "Crane Truck"], spec: "20 m + 4T Crane" },
  { id: "pickup-klubb-kl21", name: "FOTON Pickup KLUBB KL21", brand: "FOTON", categories: ["Aerial Work Platform"], spec: "11.5 m" },
  { id: "toano-3plus3-klubb-kl32", name: "FOTON TOANO 3+3 KLUBB KL32", brand: "FOTON", categories: ["Aerial Work Platform"], spec: "12.5 m" },
  { id: "toano-l2h2-klubb-kl21", name: "FOTON TOANO L2H2 KLUBB KL21", brand: "FOTON", categories: ["Aerial Work Platform"], spec: "11.5 m" },
  { id: "bj1031-ev-klubb-kl21", name: "FOTON BJ1031 EV KLUBB KL21", brand: "FOTON", categories: ["Aerial Work Platform", "EV"], spec: "11 m" },
  { id: "etunland-klubb-kl26", name: "FOTON e-Tunland KLUBB KL26", brand: "FOTON", categories: ["Aerial Work Platform", "EV"], spec: "11.5 m" },
  // Crane Truck (4 unique + 1 shared above)
  { id: "loxa-fk16t-4x2", name: "FOTON LOXA FK16T 4x2", brand: "FOTON", categories: ["Crane Truck"], spec: "16 t" },
  { id: "loxa-25t5-6x4", name: "FOTON LOXA 25T5 6x4", brand: "FOTON", categories: ["Crane Truck"], spec: "25 t" },
  { id: "loxa-ftc30-6x4", name: "FOTON LOXA FTC30 6x4", brand: "FOTON", categories: ["Crane Truck"], spec: "30 t" },
  { id: "loxa-ftc50t5-8x4", name: "FOTON LOXA FTC50T5 8x4", brand: "FOTON", categories: ["Crane Truck"], spec: "50 t" },
  // Off-road 4x4 (2)
  { id: "daewoo-maximus-4x4", name: "DAEWOO MAXIMUS 4x4", brand: "DAEWOO", categories: ["Off-road 4x4"] },
  { id: "dongfeng-v5-s04-dv5", name: "DONGFENG V5+S04 DV5", brand: "DONGFENG", categories: ["Off-road 4x4"] },
  // EV (4 unique + 2 shared above) = 6 total in EV
  { id: "egenie-e7", name: "FOTON e-Genie E7", brand: "FOTON", categories: ["EV"], spec: "7 m³" },
  { id: "eview-i9", name: "FOTON EVIEW i9", brand: "FOTON", categories: ["EV"], spec: "8 m³" },
  { id: "1031-ev-refrigerated", name: "FOTON 1031 EV Refrigerated", brand: "FOTON", categories: ["EV"], spec: "7.5 m³" },
  { id: "etunland-4x4", name: "FOTON e-TUNLAND 4x4", brand: "FOTON", categories: ["EV"] },
];
// Total unique: 31

function AutoPage() {
  const { category } = Route.useSearch();
  const [query, setQuery] = useState("");
  const [activeCats, setActiveCats] = useState<Set<string>>(
    () => new Set(category && (CATEGORIES as readonly string[]).includes(category) ? [category] : [])
  );
  const [activeBrands, setActiveBrands] = useState<Set<string>>(new Set());
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    if (category && (CATEGORIES as readonly string[]).includes(category)) {
      setActiveCats(new Set([category]));
    } else {
      setActiveCats(new Set());
    }
  }, [category]);

  const toggle = (set: Set<string>, val: string, setter: (s: Set<string>) => void) => {
    const next = new Set(set);
    next.has(val) ? next.delete(val) : next.add(val);
    setter(next);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (activeBrands.size && !activeBrands.has(p.brand)) return false;
      if (activeCats.size && !p.categories.some((c) => activeCats.has(c))) return false;
      if (q && !p.name.toLowerCase().includes(q) && !p.brand.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, activeCats, activeBrands]);

  const catCount = (c: string) => PRODUCTS.filter((p) => p.categories.includes(c)).length;
  const brandCount = (b: string) => PRODUCTS.filter((p) => p.brand === b).length;

  const hasFilters = activeCats.size + activeBrands.size > 0 || query.length > 0;

  return (
    <main className="bg-background min-h-screen">
      <Container className="py-10 lg:py-14">
        {/* Mobile filter toggle */}
        <div className="lg:hidden mb-4 flex items-center justify-between">
          <button
            onClick={() => setMobileFiltersOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-[#1c374a]"
          >
            <Filter className="h-4 w-4" /> Filters
            {hasFilters && <span className="ml-1 rounded-full bg-primary text-primary-foreground px-2 py-0.5 text-[10px] tabular-nums">{activeCats.size + activeBrands.size + (query ? 1 : 0)}</span>}
          </button>
          <span className="type-body-sm text-muted-foreground tabular-nums">{filtered.length} results</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <aside className={`${mobileFiltersOpen ? "block" : "hidden"} lg:block`}>
            <div className="lg:sticky lg:top-[calc(var(--header-height)+1rem)] lg:self-start lg:max-h-[calc(100vh-var(--header-height)-2rem)] lg:overflow-y-auto lg:overflow-x-hidden lg:pr-3 lg:pb-8 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products…"
                  className="w-full rounded-full border border-neutral-200 bg-white pl-9 pr-9 py-2.5 text-[13px] text-neutral-800 placeholder:text-neutral-400 focus:border-[#1c374a] focus:outline-none transition-colors"
                />
                {query && (
                  <button onClick={() => setQuery("")} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-700">
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              <FilterGroup
                title="Category"
                items={CATEGORIES.map((c) => ({ label: c, count: catCount(c), value: c }))}
                active={activeCats}
                onToggle={(v) => toggle(activeCats, v, setActiveCats)}
              />

              <FilterGroup
                title="Brand"
                items={BRANDS.map((b) => ({ label: b, count: brandCount(b), value: b }))}
                active={activeBrands}
                onToggle={(v) => toggle(activeBrands, v, setActiveBrands)}
              />

              {hasFilters && (
                <button
                  onClick={() => { setActiveCats(new Set()); setActiveBrands(new Set()); setQuery(""); }}
                  className="w-full rounded-full border border-[#1c374a] bg-[#1c374a] px-4 py-2.5 text-[13px] font-medium text-white hover:bg-[#2a4f6a] transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Grid */}
          <section>
            <div className="hidden lg:flex items-end justify-between mb-6">
              <h2 className="font-firago text-2xl font-semibold text-[#1c374a]">
                {filtered.length === PRODUCTS.length ? "All Products" : "Filtered Products"}
              </h2>
              <p className="type-body-sm text-muted-foreground">
                Showing <span className="font-medium text-primary tabular-nums">{filtered.length}</span>{" "}
                of <span className="tabular-nums">{PRODUCTS.length}</span>
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-12 text-center">
                <p className="text-[15px] font-semibold text-[#1c374a]">No products match your filters</p>
                <p className="mt-2 text-[13px] text-neutral-500">Try removing some filters or adjusting your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </section>
        </div>
      </Container>
    </main>
  );
}

function FilterGroup({
  title,
  items,
  active,
  onToggle,
}: {
  title: string;
  items: { label: string; count: number; value: string }[];
  active: Set<string>;
  onToggle: (v: string) => void;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="rounded-2xl border border-neutral-200/70 bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3.5 text-left"
      >
        <span className="text-[12px] font-medium tracking-wide text-[#1c374a]">{title}</span>
        <ChevronDown className={`h-4 w-4 text-neutral-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="px-2 pb-3 space-y-0.5">
          {items.map((it) => {
            const isActive = active.has(it.value);
            const disabled = it.count === 0;
            return (
              <li key={it.value}>
                <button
                  disabled={disabled}
                  onClick={() => onToggle(it.value)}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-[13px] transition-colors ${
                    disabled
                      ? "text-neutral-300 cursor-not-allowed"
                      : isActive
                      ? "bg-[#1c374a] text-white font-semibold"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`inline-block h-3.5 w-3.5 rounded border ${
                        isActive ? "border-white bg-white" : disabled ? "border-neutral-200" : "border-neutral-300"
                      }`}
                    >
                      {isActive && <span className="block h-full w-full rounded-[2px] bg-[#1c374a] scale-50" />}
                    </span>
                    {it.label}
                  </span>
                  <span className={`text-[11px] tabular-nums ${isActive ? "text-white/80" : "text-neutral-400"}`}>{it.count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const brandInitial = product.brand.charAt(0);
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl surface-card transition-surface hover:-translate-y-0.5">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 flex items-center justify-center">
        {/* Brand badge */}
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-medium tracking-[0.1em] text-[#1c374a]">
            {product.brand}
          </span>
        </div>
        {/* Large initial placeholder */}
        <span className="font-firago text-[88px] font-semibold text-white/90 select-none leading-none">
          {brandInitial}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-firago text-[15px] font-medium text-[#1c374a] leading-snug min-h-[40px]">
          {product.name}
        </h3>
        <p className="mt-1 text-[13px] text-neutral-500 min-h-[20px]">
          {product.spec ?? "\u00A0"}
        </p>

        <div className="mt-auto pt-5">
          <span className="inline-flex items-center rounded-full bg-neutral-100/80 px-2.5 py-1 text-[11px] font-normal text-neutral-600">
            {product.categories[0]}
          </span>
        </div>

        <div className="mt-5 pt-4 border-t border-neutral-100">
          <Link
            to="/products/$slug"
            params={{ slug: product.id }}
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#1c374a] hover:text-[#5ac1e3] transition-colors"
          >
            View details <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </article>
  );
}

