import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Award,
  ShieldCheck,
  MapPin,
  Users,
  Package,
  Leaf,
  Building2,
  Construction,
  Truck,
  Radio,
  Zap,
  Sprout,
  Factory,
  Mountain,
  Wrench,
  Cog,
  HardHat,
  Phone,
  PhoneCall,
  Headphones,
  Sun,
  BatteryCharging,
  TreePine,
  ChevronDown,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import heroExcavator from "@/assets/hero-excavator.jpg";
import whyEngineer from "@/assets/why-engineer.jpg";
import dirTrucks from "@/assets/dir-trucks.jpg";
import dirConstruction from "@/assets/dir-construction.jpg";
import dirAgri from "@/assets/dir-agri.jpg";
import dirHydraulic from "@/assets/dir-hydraulic.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ASP Group — 25 Years of Industrial Leadership in Georgia" },
      {
        name: "description",
        content:
          "ASP Group — 25+ years in Georgia's industrial and commercial equipment market. 14 branches, 70+ international partners, 90+ specialists across Auto, Construction, Agro and Hydraulic divisions.",
      },
      { property: "og:title", content: "About ASP Group — A Leader in Industrial Equipment in Georgia" },
      {
        property: "og:description",
        content:
          "For more than 25 years, ASP Group has delivered reliable equipment, professional service and long-term technical support to Georgia's industry.",
      },
      { property: "og:image", content: heroExcavator },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const NAV_DARK = "#1c374a";

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display">
      <Hero />
      <Intro />
      <Industries />
      <Divisions />
      <Timeline />
      <Service />
      <WhyAsp />
      <Certifications />
      <Sustainability />
      <Faq />
      <Mission />
    </div>
  );
}

/* ───────────── shared ───────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] font-mono text-accent tracking-[0.32em] uppercase">
      {children}
    </span>
  );
}

function SectionHead({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-semibold tracking-tight mt-3 leading-[1.15] text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[15px] md:text-base text-foreground/65 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ───────────── HERO ───────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroExcavator}
          alt="ASP Group industrial operations across Georgia"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${NAV_DARK}F0 0%, ${NAV_DARK}E0 60%, ${NAV_DARK}F5 100%)`,
          }}
        />
      </div>
      <div className="relative z-10 px-6 pt-32 md:pt-40 pb-16 md:pb-20 max-w-7xl mx-auto w-full text-white">
        <nav className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.28em] text-white/55 mb-5">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <span className="text-accent">About ASP Group</span>
        </nav>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-accent" />
          <span className="text-[10px] font-mono tracking-[0.28em] uppercase text-accent">
            Since 2001 · Tbilisi, Georgia
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.05] text-balance max-w-4xl">
          ASP Group — A Leader in{" "}
          <span className="text-accent">Industrial & Commercial</span>{" "}
          Equipment in Georgia
        </h1>
        <p className="mt-6 text-[15px] md:text-base text-white/75 max-w-2xl leading-relaxed">
          For more than 25 years, ASP Group has been providing businesses and industries in Georgia with reliable equipment, professional service, and long-term technical support.
        </p>
      </div>
    </section>
  );
}

/* ───────────── INTRO + STATS ───────────── */
const STATS = [
  { v: "25+", l: "Years of Experience", icon: Award },
  { v: "14", l: "Branches Across Georgia", icon: MapPin },
  { v: "70+", l: "International Suppliers & Partners", icon: Package },
  { v: "90+", l: "Employees & Technical Specialists", icon: Users },
  { v: "Multi", l: "Profile Service Infrastructure", icon: Building2 },
  { v: "OEM", l: "Official Dealerships Worldwide", icon: ShieldCheck },
];

function Intro() {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <Eyebrow>Company</Eyebrow>
          <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-semibold tracking-tight mt-3 mb-6 leading-[1.15]">
            A Complete Industrial Ecosystem for Georgia
          </h2>
          <div className="space-y-4 text-[15px] md:text-base text-foreground/70 leading-relaxed">
            <p>
              ASP Group LLC has been successfully operating in Georgia's automotive and industrial equipment market for more than 25 years. Today, the company is one of the leading players in commercial vehicles, special-purpose machinery, construction and agricultural equipment, hydraulic systems, and industrial services.
            </p>
            <p>
              ASP Group offers customers not only equipment sales, but a complete industrial ecosystem — technical support, after-sales service, hydraulic services, spare parts, specialized engineering solutions, and long-term operational support.
            </p>
            <p>
              Today, ASP Group is a multi-profile industrial organization that actively cooperates with international brands and serves the construction, municipal, energy, logistics, agricultural, and infrastructure sectors throughout Georgia.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3 md:gap-4">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.l}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 grid place-content-center">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-mono text-foreground/35 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-1">
                  {s.v}
                </div>
                <div className="text-[12px] text-foreground/60 leading-snug">
                  {s.l}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────── INDUSTRIES ───────────── */
const INDUSTRIES = [
  { icon: Construction, label: "Construction" },
  { icon: Building2, label: "Municipal Services" },
  { icon: HardHat, label: "Infrastructure" },
  { icon: Zap, label: "Energy" },
  { icon: Radio, label: "Telecommunications" },
  { icon: Truck, label: "Logistics & Transport" },
  { icon: Sprout, label: "Agriculture" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Mountain, label: "Mining Sector" },
];

function Industries() {
  return (
    <section className="py-16 md:py-20 px-6 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHead eyebrow="Coverage" title="Industries We Serve" />
          <p className="text-sm text-foreground/60 max-w-md">
            ASP Group provides equipment, service, and industrial solutions for a wide range of sectors across Georgia.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
          {INDUSTRIES.map((i) => {
            const Icon = i.icon;
            return (
              <div
                key={i.label}
                className="rounded-2xl border border-border bg-card p-5 md:p-6 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-accent/30 transition-surface"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 grid place-content-center shrink-0">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <div className="text-sm md:text-[15px] font-medium text-foreground">{i.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────── DIVISIONS ───────────── */
const DIVISIONS = [
  {
    n: "01",
    tag: "ASP Group Auto",
    img: dirTrucks,
    color: "var(--auto)",
    body: "ASP Group's automotive division offers a full range of commercial vehicles, including pickup trucks, light and heavy-duty trucks, buses, and special-purpose machinery. The company represents FOTON MOTOR in Georgia, a global manufacturer of modern commercial vehicles. ASP Group also installs specialized equipment from leading manufacturers on FOTON chassis, including KLUBB, ATLAS, FASSI, CNR, GUVENC, PAKSAN, MUAMMER, and DLP.",
    href: "/auto",
  },
  {
    n: "02",
    tag: "ASP Group Construction",
    img: dirConstruction,
    color: "var(--construction)",
    body: "ASP Group's construction division provides modern construction and special-purpose machinery through international brands such as FOTON-LOXA, WEICHAI-LOVOL, and SHANYU. The product range includes excavators, loaders, cranes, dump trucks, concrete mixer trucks, municipal vehicles, and specialized equipment.",
    href: "/",
  },
  {
    n: "03",
    tag: "ASP Group Agro",
    img: dirAgri,
    color: "var(--agro)",
    body: "ASP Group's agricultural division represents international brands such as AGT, CHANGFA, and ZOOMLION. The company offers tractors, combine harvesters, agricultural machinery, trailers, and additional equipment for farmers and agribusinesses.",
    href: "/",
  },
  {
    n: "04",
    tag: "ASP Group Hydraulic House",
    img: dirHydraulic,
    color: "var(--hydraulic)",
    body: "Hydraulic House is ASP Group's hydraulic division, offering high-quality hydraulic systems, spare parts, oils, and industrial services. The division represents global brands such as Parker, Rexroth, Interpump, Hardox, Fleetguard, Uniflex, and SF Filter.",
    href: "/",
  },
  {
    n: "05",
    tag: "ASP Group Body Manufacturing",
    img: dirHydraulic,
    color: "var(--accent)",
    body: "Custom vehicle body solutions, specialized superstructures, and industry-specific modifications for commercial and special-purpose vehicles.",
    href: "/body-manufacturing",
  },
];

function Divisions() {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10">
          <SectionHead eyebrow="Portfolio" title="Our Divisions" />
          <div className="text-sm text-foreground/55 max-w-xs md:text-right">
            Five core divisions. One integrated partner.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          {DIVISIONS.map((d) => (
            <article
              key={d.tag}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-surface"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.tag}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-white/90 backdrop-blur-sm"
                  style={{ color: d.color }}
                >
                  {d.n} / Division
                </span>
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] md:text-base font-semibold tracking-tight mb-2 text-foreground">{d.tag}</h3>
                <p className="text-[13px] text-foreground/65 leading-relaxed mb-4 flex-1">{d.body}</p>
                <Link
                  to={d.href}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-accent hover:gap-2 transition-surface w-fit"
                >
                  Explore Division <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── TIMELINE ───────────── */
const MILESTONES = [
  { year: "2001", title: "The Beginning", body: "ASP Group started with the sale of automotive spare parts.", badge: "ASP" },
  { year: "2009", title: "Paksan Partnership", body: "ASP Group became a dealer of Paksan, expanding into specialized industrial and commercial solutions.", badge: "PAKSAN" },
  { year: "2013", title: "FOTON Partnership", body: "ASP Group became a dealer of FOTON, strengthening its position in the commercial vehicle market.", badge: "FOTON" },
  { year: "2015", title: "ISO 9001:2015", body: "Received ISO 9001:2015 certification, confirming its commitment to quality management.", badge: "ISO" },
  { year: "2019", title: "LOVOL Partnership", body: "Became a dealer of LOVOL Construction, expanding its construction machinery portfolio.", badge: "LOVOL" },
  { year: "2020", title: "Rexroth / Bosch", body: "Became a dealer of Rexroth, a Bosch Company, strengthening hydraulic & industrial systems.", badge: "REXROTH" },
  { year: "2021", title: "SHANYU Partnership", body: "Became a dealer of SHANYU, further developing its construction equipment offering.", badge: "SHANYU" },
  { year: "2022", title: "ATLAS & FASSI", body: "Became a dealer of ATLAS Cranes & Excavators and FASSI, expanding lifting and crane solutions.", badge: "ATLAS · FASSI" },
  { year: "2023", title: "CHANGFA Partnership", body: "Became a dealer of CHANGFA, supporting growth of the agricultural equipment direction.", badge: "CHANGFA" },
  { year: "2024", title: "ZOOMLION Partnership", body: "Became a dealer of ZOOMLION, adding another major international brand to its portfolio.", badge: "ZOOMLION" },
  { year: "2024", title: "KLUBB Partnership", body: "Became a dealer of KLUBB Group, strengthening aerial work platform and specialized vehicle solutions.", badge: "KLUBB" },
  { year: "2025", title: "ISO 14001 & 45001", body: "Received ISO 14001:2015 and ISO 45001:2018 — environment, health and safety.", badge: "ISO" },
];

function Timeline() {
  // Group milestones by year for a compact, scannable layout
  const grouped = MILESTONES.reduce<Record<string, typeof MILESTONES>>((acc, m) => {
    (acc[m.year] ||= []).push(m);
    return acc;
  }, {});
  const years = Object.keys(grouped).sort();

  return (
    <section className="py-12 md:py-16 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <SectionHead
          eyebrow="Heritage"
          title={<>History of <span className="text-accent">Development</span></>}
          subtitle="From auto spare parts to a multi-profile industrial group, ASP Group has grown through long-term partnerships, international dealerships, service infrastructure, and continuous development."
          className="mb-8 md:mb-10"
        />

        <ol className="relative space-y-5 md:space-y-6 before:absolute before:left-[58px] md:before:left-[72px] before:top-2 before:bottom-2 before:w-px before:bg-border">
          {years.map((year) => (
            <li key={year} className="relative grid grid-cols-[68px_1fr] md:grid-cols-[84px_1fr] gap-3 md:gap-5 items-start">
              <div className="pt-1 text-right">
                <span className="text-lg md:text-xl font-semibold text-accent tracking-tight tabular-nums">{year}</span>
              </div>
              <div className="relative">
                <span className="absolute -left-[14px] md:-left-[18px] top-2.5 w-2 h-2 rounded-full bg-accent ring-4 ring-surface" aria-hidden />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3">
                  {grouped[year].map((m) => (
                    <div
                      key={m.title}
                      className="group rounded-xl bg-card border border-border px-4 py-3 shadow-sm hover:border-accent/40 hover:shadow-md transition-surface"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-[13px] font-semibold tracking-tight text-foreground leading-snug">{m.title}</h3>
                        <span className="text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded border border-border text-foreground/50 shrink-0">
                          {m.badge}
                        </span>
                      </div>
                      <p className="text-[12px] text-foreground/60 leading-relaxed line-clamp-3">{m.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


/* ───────────── SERVICE ───────────── */
const SERVICE_CARDS = [
  { icon: Wrench, title: "Technical Diagnostics" },
  { icon: Cog, title: "Hydraulic Service" },
  { icon: Package, title: "Spare Parts" },
  { icon: Truck, title: "Mobile Service Teams" },
  { icon: ShieldCheck, title: "Warranty & After-Sales" },
  { icon: Headphones, title: "Technical Consultation" },
  { icon: MapPin, title: "Industrial Support Across Georgia" },
];

function Service() {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <Eyebrow>Support</Eyebrow>
          <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-semibold tracking-tight mt-3 mb-4 leading-[1.15]">
            Technical Service & After-Sales Support
          </h2>
          <p className="text-[15px] text-foreground/65 leading-relaxed">
            ASP Group provides customers with technical diagnostics, hydraulic services, spare parts, mobile service teams, warranty and after-sales service, technical consultation, and industrial support throughout Georgia. The company's technical infrastructure and service centers ensure fast, reliable, and efficient support.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3 md:gap-4">
          {SERVICE_CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className={`rounded-2xl bg-card border border-border p-5 shadow-sm hover:shadow-md hover:border-accent/30 transition-surface flex items-center gap-4 ${
                  i === SERVICE_CARDS.length - 1 && SERVICE_CARDS.length % 2 === 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 grid place-content-center shrink-0">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm md:text-[15px] font-medium text-foreground">{c.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────── WHY ASP ───────────── */
const WHY = [
  "25+ years of experience",
  "Official international partners",
  "Multi-profile industrial expertise",
  "Technical and engineering know-how",
  "Spare parts network",
  "Mobile service teams",
  "Strong hydraulic infrastructure",
  "Long-term partnerships with customers",
];

function WhyAsp() {
  return (
    <section className="py-16 md:py-20 px-6 bg-surface/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <Eyebrow>Trust</Eyebrow>
          <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-semibold tracking-tight mt-3 mb-4 leading-[1.15]">
            Why <span className="text-accent">ASP Group</span>
          </h2>
          <p className="text-[15px] text-foreground/65 leading-relaxed mb-6">
            Heavy industry runs on reliability. ASP Group is built around long-term partnership, certified service, and a nationwide infrastructure that keeps your operation moving.
          </p>
          <div className="relative aspect-[4/3] max-w-md rounded-2xl overflow-hidden border border-border shadow-sm">
            <img src={whyEngineer} alt="ASP Group certified engineer" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3 md:gap-4 self-start">
          {WHY.map((w) => (
            <div
              key={w}
              className="rounded-2xl bg-card border border-border p-5 shadow-sm hover:shadow-md hover:border-accent/30 transition-surface flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={2} />
              <div className="text-sm md:text-[15px] font-medium text-foreground leading-snug">{w}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── CERTIFICATIONS ───────────── */
const CERTS = [
  { code: "ISO 9001:2015", title: "Quality Management System" },
  { code: "ISO 14001:2015", title: "Environmental Management System" },
  { code: "ISO 45001:2018", title: "Occupational Health & Safety" },
];

function Certifications() {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          eyebrow="Standards"
          title="Quality, Safety & International Standards"
          subtitle="ASP Group holds certificates in accordance with international standards, confirming the company's continuous commitment to quality, safety, environmental protection, customer satisfaction, and long-term partnerships."
          className="mb-10"
        />
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {CERTS.map((c) => (
            <div
              key={c.code}
              className="rounded-2xl bg-card border border-border p-7 shadow-sm hover:shadow-md hover:border-accent/30 transition-surface"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 grid place-content-center mb-5">
                <Award className="w-6 h-6 text-accent" strokeWidth={1.75} />
              </div>
              <div className="text-lg md:text-xl font-semibold tracking-tight mb-1 text-foreground">{c.code}</div>
              <div className="text-[13px] text-foreground/60">{c.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── SUSTAINABILITY ───────────── */
function Sustainability() {
  const items = [
    { icon: Sun, title: "100 kW Solar Plant", body: "Installed in 2024 to power our operations cleanly." },
    { icon: BatteryCharging, title: "Electric Fleet", body: "Renewing our vehicle fleet with EV alternatives." },
    { icon: Leaf, title: "Energy Efficiency", body: "Reducing harmful emissions across our infrastructure." },
    { icon: TreePine, title: "Environmental Protection", body: "Aligned with global sustainable development goals." },
  ];
  return (
    <section className="py-16 md:py-20 px-6 bg-surface/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <Eyebrow>Sustainability</Eyebrow>
          <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-semibold tracking-tight mt-3 mb-4 leading-[1.15]">
            Sustainable Development & Modern Approaches
          </h2>
          <p className="text-[15px] text-foreground/65 leading-relaxed">
            ASP Group actively implements modern and environmentally oriented technologies. Since 2024, the company has installed a 100 kW solar power plant and renewed part of its vehicle fleet with electric vehicles. These initiatives support the reduction of harmful emissions, increased energy efficiency, environmental protection, and sustainable development goals.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3 md:gap-4 self-start">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="rounded-2xl bg-card border border-border p-5 md:p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-surface"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 grid place-content-center mb-4">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-[15px] font-semibold tracking-tight mb-1.5 text-foreground">{it.title}</h3>
                <p className="text-[13px] text-foreground/60 leading-relaxed">{it.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────── FAQ ───────────── */
const FAQ = [
  {
    q: "Does ASP Group operate throughout Georgia?",
    a: "Yes, the company has multi-branch infrastructure and a technical support system across Georgia.",
  },
  {
    q: "Do you provide technical service and spare parts?",
    a: "Yes, ASP Group provides customers with technical service, diagnostics, and spare parts.",
  },
  {
    q: "Which industries is your equipment designed for?",
    a: "Our solutions are used in the construction, municipal, energy, logistics, agricultural, and infrastructure sectors.",
  },
  {
    q: "Do you cooperate with international brands?",
    a: "Yes, ASP Group is the official partner and dealer of many international brands in Georgia.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHead
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          align="center"
          className="mb-10"
        />
        <div className="rounded-2xl border border-border bg-card divide-y divide-border shadow-sm overflow-hidden">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left p-5 md:p-6 hover:bg-surface/60 transition-colors"
                >
                  <span className="text-sm md:text-[15px] font-medium text-foreground pr-4">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-accent shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={2}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-[14px] text-foreground/70 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────── MISSION CTA ───────────── */
function Mission() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div
        className="max-w-6xl mx-auto rounded-3xl px-8 md:px-14 py-14 md:py-20 text-white text-center shadow-md"
        style={{ backgroundColor: NAV_DARK }}
      >
        <span className="text-[10px] font-mono text-accent tracking-[0.32em] uppercase">Mission</span>
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mt-3 mb-6 leading-[1.1]">
          ASP Group's <span className="text-accent">Mission</span>
        </h2>
        <p className="text-[15px] md:text-base text-white/80 leading-relaxed max-w-3xl mx-auto mb-5">
          ASP Group's mission is to offer businesses and industrial sectors in Georgia reliable equipment, professional technical support, modern industrial solutions, long-term partnership, and high-quality service.
        </p>
        <p className="text-[15px] md:text-base text-white/75 leading-relaxed max-w-3xl mx-auto mb-10">
          The company continues to grow and, together with its international partners, works to create a modern, reliable, and high-standard industrial ecosystem in Georgia.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="accent" size="lg">
            <a href="/contact">
              <PhoneCall className="w-4 h-4" strokeWidth={2} /> Contact Us
            </a>
          </Button>
          <Button asChild variant="on-dark" size="lg">
            <Link to="/auto">
              Explore Our Divisions <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

void Phone;
