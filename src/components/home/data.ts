import {
  Truck,
  Construction,
  Sprout,
  Cog,
  HardHat,
  Radio,
  Zap,
  Building2,
  Award,
  ShieldCheck,
  MapPin,
  Package,
  Users,
  Leaf,
} from "lucide-react";
import dirTrucks from "@/assets/dir-trucks.jpg";
import dirAerial from "@/assets/dir-aerial.jpg";
import dirConstruction from "@/assets/dir-construction.jpg";
import dirAgri from "@/assets/dir-agri.jpg";
import dirHydraulic from "@/assets/dir-hydraulic.jpg";
import dirService from "@/assets/dir-service.jpg";
import whyEngineer from "@/assets/why-engineer.jpg";

export type Division = {
  n: string;
  tag: string;
  title: string;
  img: string;
  body: string;
  color: string;
  brands: string;
};

export const divisions: Division[] = [
  {
    n: "01",
    tag: "ASP Group Auto",
    title: "Commercial Vehicles",
    img: dirTrucks,
    body: "Pickups, buses, light commercial vehicles and heavy-duty trucks from FOTON and DAEWOO Trucks.",
    color: "var(--auto)",
    brands: "FOTON · DAEWOO TRUCKS · KLUBB · FASSI · ATLAS",
  },
  {
    n: "02",
    tag: "ASP Group Construction",
    title: "Construction Machinery",
    img: dirConstruction,
    body: "WEICHAI-LOVOL loaders and excavators, FOTON-LOXA dump trucks, cranes and concrete mixers.",
    color: "var(--construction)",
    brands: "FOTON-LOXA · WEICHAI-LOVOL · SHANYU",
  },
  {
    n: "03",
    tag: "ASP Group Agro",
    title: "Agricultural Machinery",
    img: dirAgri,
    body: "Authorized dealer in Georgia for AGT, CHANGFA and ZOOMLION Agriculture.",
    color: "var(--agro)",
    brands: "ZOOMLION · LOVOL · CHANGFA · AGT",
  },
  {
    n: "04",
    tag: "ASP Group Hydraulic House",
    title: "Hydraulic Systems",
    img: dirHydraulic,
    body: "7 branches across Georgia. Premium hydraulic spare parts, lubricants and filtration.",
    color: "var(--hydraulic)",
    brands: "PARKER · REXROTH · INTERPUMP · AVISTA · FLEETGUARD",
  },
  {
    n: "05",
    tag: "ASP Group Body Manufacturing",
    title: "Body Manufacturing",
    img: dirService,
    body: "Custom vehicle body solutions and industry-specific modifications.",
    color: "var(--accent)",
    brands: "ENGINEERED IN GEORGIA",
  },
  {
    n: "05",
    tag: "Specialized Equipment",
    title: "Aerial Work Platforms",
    img: dirAerial,
    body: "Official KLUBB dealer in Georgia. Truck-mounted aerial platforms and telescopic booms.",
    color: "var(--auto)",
    brands: "KLUBB · ATLAS · FASSI",
  },
  {
    n: "06",
    tag: "Aftersales",
    title: "Service & Spare Parts",
    img: dirService,
    body: "Certified service centers and a deep in-country inventory of genuine OEM parts.",
    color: "var(--accent)",
    brands: "ISO 9001 · ISO 14001 · ISO 45001",
  },
];

export const industries = [
  { icon: Construction, label: "Construction" },
  { icon: Truck, label: "Logistics" },
  { icon: Radio, label: "Telecom" },
  { icon: Zap, label: "Energy" },
  { icon: Sprout, label: "Agriculture" },
  { icon: Building2, label: "Government" },
];

export type PartnerLogo = {
  name: string;
  logo?: string;
  href?: string;
  weight?: "medium" | "semibold";
};

/** Placeholder logos for the homepage trust strip — replace with real ASP partner assets later. */
export const partnerLogos: PartnerLogo[] = [
  { name: "Amazon", weight: "medium" },
  { name: "Apple", weight: "semibold" },
  { name: "Figma", weight: "semibold" },
  { name: "Google", weight: "medium" },
  { name: "NVIDIA", weight: "semibold" },
  { name: "Ford", weight: "semibold" },
  { name: "Shopify", weight: "medium" },
  { name: "Coinbase", weight: "medium" },
  { name: "OpenAI", weight: "semibold" },
  { name: "Microsoft", weight: "semibold" },
];

/** Real ASP supplier/partner names — for future use outside the placeholder carousel. */
export const partners = [
  "FOTON",
  "DAEWOO TRUCKS",
  "LOVOL",
  "ZOOMLION",
  "PARKER",
  "BOSCH REXROTH",
  "KLUBB",
  "FASSI",
  "ATLAS",
  "CHANGFA",
  "AGT",
  "SHANYU",
  "INTERPUMP",
  "AVISTA OIL",
  "FLEETGUARD",
];

export const reasons = [
  {
    icon: Award,
    title: "24 Years in Georgia",
    body: "Operating in the Georgian automotive market since 2001, with deep regional expertise.",
  },
  {
    icon: ShieldCheck,
    title: "Official Dealerships",
    body: "Direct OEM contracts with FOTON, DAEWOO Trucks, LOVOL, ZOOMLION, PARKER, BOSCH REXROTH.",
  },
  {
    icon: MapPin,
    title: "14 Branches Nationwide",
    body: "Showrooms, service centers and Hydraulic Houses in Tbilisi, Kutaisi, Poti, Zugdidi, Tchiatura.",
  },
  {
    icon: Users,
    title: "90+ Employees",
    body: "Factory-trained sales engineers and certified mechanics across all divisions.",
  },
  {
    icon: Package,
    title: "70+ Suppliers",
    body: "Wide supplier network ensuring genuine OEM parts and accessories on the ground.",
  },
  {
    icon: Leaf,
    title: "ISO Certified & Green",
    body: "ISO 9001, 14001 and 45001 certified. 100 kW solar plant and electric fleet vehicles.",
  },
];

export { whyEngineer };

export const serviceFeatures = [
  {
    icon: Truck,
    title: "Mobile Service Units",
    body: "Field repair dispatched across East and West Georgia.",
  },
  {
    icon: Cog,
    title: "Hydraulic Specialization",
    body: "7 Hydraulic Houses — cylinders, pumps, valves, full retrofit.",
  },
  {
    icon: Package,
    title: "Genuine OEM Spare Parts",
    body: "Original FOTON, DAEWOO, LOVOL, ZOOMLION, PARKER, REXROTH inventory.",
  },
  {
    icon: HardHat,
    title: "Certified Workshops",
    body: "ISO 9001 / 14001 / 45001 certified — factory-trained engineers.",
  },
];

export const certificates = [
  { code: "ISO 9001:2015", name: "Quality Management System", icon: Award },
  { code: "ISO 14001:2015", name: "Environmental Management System", icon: Leaf },
  { code: "ISO 45001:2018", name: "Occupational Health & Safety", icon: ShieldCheck },
];
