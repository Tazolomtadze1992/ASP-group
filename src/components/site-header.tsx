import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import aspLogo from "@/assets/asp-logo.png";
import { Container } from "@/components/layout";

type DropItem = { label: string; href: string; search?: Record<string, string> };
type NavItem = { label: string; href: string; items?: DropItem[] };

const MAIN_NAV: NavItem[] = [
  {
    label: "Auto",
    href: "/auto",
    items: [
      { label: "Tractor", href: "/auto", search: { category: "Tractor" } },
      { label: "Dumper Truck", href: "/auto", search: { category: "Dumper Truck" } },
      { label: "Concrete Mixer Truck", href: "/auto", search: { category: "Concrete Mixer Truck" } },
      { label: "Bus", href: "/auto", search: { category: "Bus" } },
      { label: "Passenger Van", href: "/auto", search: { category: "Passenger Van" } },
      { label: "Cargo Van", href: "/auto", search: { category: "Cargo Van" } },
      { label: "Distribution", href: "/auto", search: { category: "Distribution" } },
      { label: "Pickup Truck", href: "/auto", search: { category: "Pickup Truck" } },
      { label: "Aerial Work Platform", href: "/auto", search: { category: "Aerial Work Platform" } },
      { label: "Crane Truck", href: "/auto", search: { category: "Crane Truck" } },
      { label: "Knuckle Boom Crane", href: "/auto", search: { category: "Knuckle Boom Crane" } },
      { label: "Municipal Vehicles", href: "/auto", search: { category: "Municipal Vehicles" } },
      { label: "Off-road 4x4", href: "/auto", search: { category: "Off-road 4x4" } },
      { label: "Off-road 6x6", href: "/auto", search: { category: "Off-road 6x6" } },
      { label: "EV", href: "/auto", search: { category: "EV" } },
    ],
  },
  {
    label: "Construction",
    href: "/#directions",
    items: [
      { label: "Excavator", href: "/#directions" },
      { label: "Loader", href: "/#directions" },
      { label: "Backhoe Loader", href: "/#directions" },
      { label: "Mini Loader", href: "/#directions" },
      { label: "Loader with Pallet Forks", href: "/#directions" },
      { label: "Mini Concrete Mixer Truck", href: "/#directions" },
      { label: "Concrete Mixer Truck", href: "/#directions" },
      { label: "Dumper", href: "/#directions" },
      { label: "Crane Truck", href: "/#directions" },
      { label: "Knuckle Boom Crane", href: "/#directions" },
    ],
  },
  {
    label: "Agro",
    href: "/#directions",
    items: [
      { label: "Cabless Tractor", href: "/#directions" },
      { label: "Cab Tractor", href: "/#directions" },
      { label: "Trailer", href: "/#directions" },
      { label: "Combine Harvester", href: "/#directions" },
      { label: "Small-scale Mechanization", href: "/#directions" },
    ],
  },
  {
    label: "Hydraulic House",
    href: "/#branches",
    items: [
      { label: "Pumps and Motors", href: "/#branches" },
      { label: "Pipes and Fittings", href: "/#branches" },
      { label: "Seals and Gaskets", href: "/#branches" },
      { label: "Cylinders and rods", href: "/#branches" },
      { label: "Oils", href: "/#branches" },
      { label: "Filters", href: "/#branches" },
    ],
  },
  {
    label: "Body Manufacturing",
    href: "/about",
  },
];

const TOP_NAV = [
  { label: "Divisions", href: "/#directions" },
  { label: "About Us", href: "/about" },
  { label: "News & Vlogs", href: "/news" },
  { label: "Service & Support", href: "/#service" },
  { label: "Suppliers", href: "/suppliers" },
  { label: "Contact Us", href: "/contact" },
];

const LANGS = ["ENG", "GEO", "RUS"] as const;
type Lang = (typeof LANGS)[number];

const DIVISION_ACCENT: Record<string, string> = {
  Auto: "#5ac1e3",
  Construction: "#ffcc04",
  Agro: "#90ba3e",
  "Hydraulic House": "#ed5126",
  "Body Manufacturing": "#1c374a",
};

export function SiteHeader() {
  const [lang, setLang] = useState<Lang>("GEO");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Row 1 — Light corporate bar */}
      <div className="bg-[#f9f9fc]/95 backdrop-blur-md border-b border-black/[0.06]">
        <Container className="flex h-14 lg:h-16 items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-10">
            <a href="/" aria-label="ASP Group home" className="flex items-center shrink-0">
              <img
                src={aspLogo}
                alt="ASP Group"
                className="h-8 lg:h-10 w-auto object-contain"
              />
            </a>

            <nav className="hidden lg:flex h-full items-center gap-6">
              {TOP_NAV.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  className="relative text-sm font-normal leading-tight text-neutral-800 transition-colors hover:text-[#1c374a] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-[#1c374a] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {it.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-0.5 text-xs font-normal leading-none">
              {LANGS.map((l, i) => (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className="mx-1.5 h-3 w-px bg-neutral-300" />}
                  <button
                    type="button"
                    onClick={() => setLang(l)}
                    className={`hit-area px-2 transition-colors ${
                      lang === l
                        ? "text-[#1c374a]"
                        : "text-neutral-400 hover:text-neutral-600"
                    }`}
                  >
                    {l}
                  </button>
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="lg:hidden hit-area inline-flex h-10 w-10 items-center justify-center text-neutral-900"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </div>

      {/* Row 2 — Industrial dark main nav */}
      <div className="hidden lg:block bg-[#1c374a] shadow-[0_4px_18px_-8px_rgba(26,51,69,0.45)]">
        <Container className="flex h-12 items-stretch">
          <nav className="flex h-full items-stretch">
            {MAIN_NAV.map((item, idx) => {
              const accent = DIVISION_ACCENT[item.label] ?? "#ffffff";
              return (
                <div key={item.label} className="group relative flex items-stretch">
                  <a
                    href={item.href}
                    className={`relative flex items-center gap-1.5 ${idx === 0 ? "pl-0 pr-4" : "px-4"} text-[13px] font-medium tracking-wide text-white/95 transition-colors hover:bg-white/[0.06]`}
                  >
                    {item.label}
                    {item.items && (
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-3 bottom-0 h-[2px] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                      style={{ backgroundColor: accent }}
                    />
                  </a>

                  {item.items && (
                    <div
                      className={`invisible absolute left-0 top-full z-50 max-w-[min(820px,calc(100vw-2rem))] translate-y-1 opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${item.label === "Auto" ? "min-w-[min(820px,calc(100vw-2rem))]" : "min-w-[260px]"}`}
                    >
                      <div className="mt-0 overflow-hidden rounded-b-md border border-black/5 bg-white shadow-[0_24px_50px_-16px_rgba(28,55,74,0.28)]">
                        <ul
                          className={
                            item.label === "Auto"
                              ? "grid grid-flow-col grid-rows-3 grid-cols-5 gap-x-2 p-2"
                              : "py-2"
                          }
                        >
                          {item.items.map((sub) => (
                            <li key={sub.label}>
                              {sub.search ? (
                                <Link
                                  to={sub.href}
                                  search={sub.search}
                                  className="group/sub flex items-center justify-between px-5 py-3 text-[13px] font-medium tracking-wide text-neutral-800 transition-colors hover:bg-[#f4f4f4] hover:text-[#1c374a]"
                                >
                                  <span>{sub.label}</span>
                                  <span className="h-px w-4 bg-neutral-300 transition-all duration-300 group-hover/sub:w-8 group-hover/sub:bg-[#1c374a]" />
                                </Link>
                              ) : (
                                <a
                                  href={sub.href}
                                  className="group/sub flex items-center justify-between px-5 py-3 text-[13px] font-medium tracking-wide text-neutral-800 transition-colors hover:bg-[#f4f4f4] hover:text-[#1c374a]"
                                >
                                  <span>{sub.label}</span>
                                  <span className="h-px w-4 bg-neutral-300 transition-all duration-300 group-hover/sub:w-8 group-hover/sub:bg-[#1c374a]" />
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </Container>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-black/5 bg-white max-h-[calc(100vh-var(--header-height))] overflow-y-auto">
          <nav className="px-5 py-4">
            <div className="mb-3 space-y-1">
              {TOP_NAV.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  className="block py-2.5 text-[14px] font-medium text-neutral-800 hover:text-[#1c374a]"
                  onClick={() => setMobileOpen(false)}
                >
                  {it.label}
                </a>
              ))}
            </div>

            <div className="my-3 h-px bg-neutral-200" />

            <div className="space-y-1">
              {MAIN_NAV.map((item) => {
                const isOpen = openSub === item.label;
                return (
                  <div key={item.label} className="border-b border-neutral-100 last:border-0">
                    <div className="flex items-stretch">
                      <a
                        href={item.href}
                        onClick={() => !item.items && setMobileOpen(false)}
                        className="flex-1 py-3 text-[13px] font-semibold uppercase tracking-wide text-neutral-900"
                      >
                        {item.label}
                      </a>
                      {item.items && (
                        <button
                          type="button"
                          onClick={() => setOpenSub(isOpen ? null : item.label)}
                          aria-label="Toggle submenu"
                          className="px-3 text-neutral-500"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {item.items && isOpen && (
                      <ul className="pb-3 pl-3">
                        {item.items.map((sub) => (
                          <li key={sub.label}>
                            {sub.search ? (
                              <Link
                                to={sub.href}
                                search={sub.search}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-[13px] text-neutral-700 hover:text-[#1c374a]"
                              >
                                {sub.label}
                              </Link>
                            ) : (
                              <a
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-[13px] text-neutral-700 hover:text-[#1c374a]"
                              >
                                {sub.label}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-center gap-2">
              {LANGS.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`rounded border px-3 py-1.5 text-[11px] font-semibold tracking-wider transition-colors ${
                    lang === l
                      ? "border-[#1c374a] bg-[#1c374a] text-white"
                      : "border-neutral-300 text-neutral-700"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
