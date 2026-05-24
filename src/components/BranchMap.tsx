import { useEffect, useMemo, useRef, useState } from "react";
import { Phone, MapPin, ExternalLink, Filter } from "lucide-react";
import {
  branches as ALL_BRANCHES,
  branchCategories,
  categoryColor,
  googleMapsLink,
  type Branch,
  type BranchCategory,
} from "@/lib/branches-data";

type FilterValue = "All" | BranchCategory;

type Props = {
  /** Compact mode = overlay/side panel layout for homepage. */
  compact?: boolean;
  className?: string;
};

/**
 * Reusable ASP Group branch map with category filter + branch list.
 * Uses Leaflet via dynamic import so it doesn't break SSR.
 */
export function BranchMap({ compact = false, className = "" }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [filter, setFilter] = useState<FilterValue>("All");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileListOpen, setMobileListOpen] = useState(false);

  const filtered = useMemo(
    () => (filter === "All" ? ALL_BRANCHES : ALL_BRANCHES.filter((b) => b.category === filter)),
    [filter],
  );

  // Refs to Leaflet instances (kept loose to avoid SSR import of types).
  const mapRef = useRef<any>(null);
  const markersRef = useRef<Record<string, any>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Init map once on client.
  useEffect(() => {
    if (!mounted || !containerRef.current) return;
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");
      if (cancelled || !containerRef.current) return;

      // Avoid re-init if already created (StrictMode double-effect).
      if (mapRef.current) return;

      const map = L.map(containerRef.current, {
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      }).setView([42.05, 43.5], 7);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19,
        },
      ).addTo(map);

      mapRef.current = { L, map };

      // Add initial markers
      renderMarkers();

      // Fit to filtered bounds
      fitToBounds();
    })();

    return () => {
      cancelled = true;
      if (mapRef.current?.map) {
        mapRef.current.map.remove();
        mapRef.current = null;
        markersRef.current = {};
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  // Re-render markers when filter changes.
  useEffect(() => {
    if (!mapRef.current) return;
    renderMarkers();
    fitToBounds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  // Highlight active marker.
  useEffect(() => {
    if (!mapRef.current || !activeId) return;
    const marker = markersRef.current[activeId];
    if (marker) {
      marker.openPopup();
      const { map } = mapRef.current;
      map.setView(marker.getLatLng(), Math.max(map.getZoom(), 11), { animate: true });
    }
  }, [activeId]);

  function renderMarkers() {
    if (!mapRef.current) return;
    const { L, map } = mapRef.current;

    // Remove existing
    Object.values(markersRef.current).forEach((m: any) => map.removeLayer(m));
    markersRef.current = {};

    filtered.forEach((b) => {
      const color = categoryColor[b.category];
      const icon = L.divIcon({
        className: "asp-pin",
        html: `
          <span style="
            display:inline-flex;align-items:center;justify-content:center;
            width:28px;height:28px;border-radius:9999px;
            background:${color};color:#fff;
            box-shadow:0 4px 10px -2px rgba(28,55,74,.35),0 0 0 3px rgba(255,255,255,.95);
            border:1px solid rgba(255,255,255,.6);
          ">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </span>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -14],
      });

      const marker = L.marker([b.lat, b.lng], { icon }).addTo(map);
      marker.bindPopup(popupHtml(b), { closeButton: true, minWidth: 240 });
      marker.on("click", () => setActiveId(b.id));
      markersRef.current[b.id] = marker;
    });
  }

  function fitToBounds() {
    if (!mapRef.current) return;
    const { L, map } = mapRef.current;
    if (!filtered.length) return;
    const bounds = L.latLngBounds(filtered.map((b) => [b.lat, b.lng]));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 11 });
  }

  const mapHeight = compact ? "h-[360px] lg:h-[420px]" : "h-[420px] lg:h-[560px]";
  const panelHeight = compact ? "h-[420px]" : "h-[560px]";

  // Shared compact (map + scrollable side list) layout — used on both Home and Contact pages.
  return (
    <div
      className={`relative isolate z-0 rounded-2xl border border-border/70 bg-background overflow-hidden surface-card ${className}`}
    >
      <div className="grid lg:grid-cols-[1fr_340px]">
        {/* Map */}
        <div className={`relative ${mapHeight} bg-surface isolate`}>
          <div ref={containerRef} className="absolute inset-0" />
          {/* Mobile filter button */}
          <button
            onClick={() => setMobileListOpen((v) => !v)}
            className="lg:hidden absolute top-3 right-3 z-[400] inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3.5 py-2 text-[12px] font-medium text-[#1c374a] border border-black/[0.06] shadow-sm"
          >
            <Filter className="w-3.5 h-3.5" />
            Branches ({filtered.length})
          </button>
        </div>

        {/* Side panel (desktop) */}
        <aside className={`hidden lg:flex flex-col border-l border-border/60 bg-background ${panelHeight}`}>
          <FilterTabs filter={filter} setFilter={setFilter} count={filtered.length} />
          <div className="flex-1 overflow-y-auto divide-y divide-border/50">
            {filtered.map((b) => (
              <CompactBranchItem
                key={b.id}
                b={b}
                active={activeId === b.id}
                onClick={() => setActiveId(b.id)}
              />
            ))}
          </div>
        </aside>
      </div>

      {/* Mobile drawer */}
      {mobileListOpen && (
        <div className="lg:hidden border-t border-border/60 bg-background max-h-[360px] overflow-y-auto">
          <FilterTabs filter={filter} setFilter={setFilter} count={filtered.length} />
          <div className="divide-y divide-border/50">
            {filtered.map((b) => (
              <CompactBranchItem
                key={b.id}
                b={b}
                active={activeId === b.id}
                onClick={() => {
                  setActiveId(b.id);
                  setMobileListOpen(false);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function popupHtml(b: Branch) {
  const phones = b.phones
    .map(
      (p) =>
        `<a href="tel:${p.replace(/[^+\d]/g, "")}" style="color:#1c374a;text-decoration:none;font-weight:600;">${p}</a>`,
    )
    .join("<br/>");
  return `
    <div style="font-family:Inter,system-ui,sans-serif;color:#1c374a;min-width:220px;">
      <div style="font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:${categoryColor[b.category]};font-weight:700;margin-bottom:4px;">${b.category}</div>
      <div style="font-size:14px;font-weight:700;line-height:1.2;margin-bottom:6px;">${b.name}</div>
      <div style="font-size:12px;color:#475569;line-height:1.4;margin-bottom:8px;">${b.address}</div>
      <div style="font-size:12px;margin-bottom:8px;">${phones}</div>
      <a href="${googleMapsLink(b)}" target="_blank" rel="noopener noreferrer"
        style="display:inline-flex;align-items:center;gap:4px;font-size:11px;font-weight:600;color:#1c374a;border-bottom:1px solid #1c374a;text-decoration:none;letter-spacing:.04em;text-transform:uppercase;">
        View on Google Maps →
      </a>
    </div>
  `;
}

function FilterTabs({
  filter,
  setFilter,
  count,
}: {
  filter: FilterValue;
  setFilter: (f: FilterValue) => void;
  count: number;
}) {
  const items: FilterValue[] = ["All", ...branchCategories];
  return (
    <div className="border-b border-border/60 px-4 py-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-foreground/55">
          Branches
        </span>
        <span className="text-[10px] font-mono text-foreground/40">{count} locations</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((it) => {
          const active = filter === it;
          return (
            <button
              key={it}
              onClick={() => setFilter(it)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide border transition-colors ${
                active
                  ? "bg-[#1c374a] text-white border-[#1c374a]"
                  : "bg-white text-neutral-700 border-neutral-300 hover:border-[#1c374a] hover:text-[#1c374a]"
              }`}
            >
              {it}
            </button>
          );
        })}
      </div>
    </div>
  );
}


function CompactBranchItem({
  b,
  active,
  onClick,
}: {
  b: Branch;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3.5 transition-colors ${
        active ? "bg-[#f4f8fb]" : "hover:bg-[#f9fafb]"
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <span
          className="text-[9px] font-mono uppercase tracking-[0.18em] font-bold"
          style={{ color: categoryColor[b.category] }}
        >
          {b.category}
        </span>
        <span className="text-[10px] font-mono text-foreground/45">{b.city}</span>
      </div>
      <div className="text-[13px] font-semibold text-[#1c374a] leading-tight mb-1.5">
        {b.name}
      </div>
      <div className="flex items-start gap-1.5 text-[11px] text-foreground/60 leading-snug mb-1">
        <MapPin className="w-3 h-3 mt-0.5 shrink-0" strokeWidth={2} />
        <span className="line-clamp-2">{b.address}</span>
      </div>
      <div className="flex items-center gap-1.5 text-[11px] text-foreground/75">
        <Phone className="w-3 h-3 shrink-0" strokeWidth={2} />
        <span className="font-medium">{b.phones[0]}</span>
      </div>
    </button>
  );
}

/** Full directory card used on Contact page below the map. */
export function BranchCard({ b }: { b: Branch }) {
  return (
    <article className="rounded-2xl border border-border/60 bg-background p-5 hover:border-border transition-colors flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span
          className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.18em] font-semibold"
          style={{
            color: categoryColor[b.category],
            background: `${categoryColor[b.category]}12`,
          }}
        >
          {b.category}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/45">
          {b.city}
        </span>
      </div>
      <h3 className="text-[15px] font-semibold text-[#1c374a] tracking-tight mb-2">
        {b.name}
      </h3>
      <div className="flex items-start gap-2 text-[13px] text-foreground/70 leading-snug mb-2.5">
        <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-foreground/50" strokeWidth={2} />
        <span>{b.address}</span>
      </div>
      <div className="space-y-1 mb-4">
        {b.phones.map((p) => (
          <a
            key={p}
            href={`tel:${p.replace(/[^+\d]/g, "")}`}
            className="flex items-center gap-2 text-[13px] font-medium text-[#1c374a] hover:text-accent transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-foreground/50" strokeWidth={2} />
            {p}
          </a>
        ))}
      </div>
      <a
        href={googleMapsLink(b)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1c374a] hover:text-accent transition-colors self-start border-b border-[#1c374a]/30 hover:border-accent pb-0.5"
      >
        View on Map <ExternalLink className="w-3 h-3" />
      </a>
    </article>
  );
}
