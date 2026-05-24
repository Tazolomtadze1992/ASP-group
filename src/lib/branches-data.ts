// Shared ASP Group branch data — used by the homepage map section and the Contact page.

export type BranchCategory =
  | "Showroom & Sales"
  | "Service Center"
  | "Hydraulic House";

export type Branch = {
  id: string;
  name: string;
  category: BranchCategory;
  city: string;
  address: string;
  phones: string[];
  // Approximate coordinates (latitude, longitude) for map display.
  lat: number;
  lng: number;
};

export const branches: Branch[] = [
  // SHOWROOM & SALES — TBILISI
  {
    id: "ss-tbilisi-kakheti-69",
    name: "Showroom & Sales — Tbilisi",
    category: "Showroom & Sales",
    city: "Tbilisi",
    address: "Kakheti Highway #69",
    phones: ["+995 595 25 00 00"],
    lat: 41.6881233,
    lng: 44.9067559,
  },
  {
    id: "ss-tbilisi-kakheti-144a",
    name: "Showroom & Sales — Tbilisi",
    category: "Showroom & Sales",
    city: "Tbilisi",
    address: "Kakheti Highway #144a",
    phones: ["+995 595 88 22 28"],
    lat: 41.693081,
    lng: 44.966991,
  },
  {
    id: "ss-tbilisi-kakheti-203",
    name: "Showroom & Sales — Tbilisi",
    category: "Showroom & Sales",
    city: "Tbilisi",
    address: "Kakheti Highway #203",
    phones: ["+995 598 059 059", "+995 599 315 735"],
    lat: 41.6923894,
    lng: 44.9707411,
  },
  {
    id: "ss-tbilisi-dighomi",
    name: "Showroom & Sales — Tbilisi",
    category: "Showroom & Sales",
    city: "Tbilisi",
    address: "Dighomi, Beliashvili St. 138",
    phones: ["+995 591 581 581"],
    lat: 41.7790,
    lng: 44.7530,
  },

  // SERVICE CENTER
  {
    id: "sc-tbilisi-didi-lilo",
    name: "Service Center — Tbilisi",
    category: "Service Center",
    city: "Tbilisi",
    address: "Village Didi Lilo, Erekle II 5th Lane, N3",
    phones: ["+995 599 20 00 77"],
    lat: 41.7165836,
    lng: 44.9657325,
  },
  {
    id: "sc-poti",
    name: "Service Center — Poti",
    category: "Service Center",
    city: "Poti",
    address: "Patara Poti, Central Highway #60, 7km",
    phones: ["+995 551 123 467"],
    lat: 42.1902516,
    lng: 41.7089643,
  },

  // HYDRAULIC HOUSE
  {
    id: "hh-tbilisi-gakhokidze",
    name: "Hydraulic House — Tbilisi",
    category: "Hydraulic House",
    city: "Tbilisi",
    address: "Gakhokidze St. #4a",
    phones: ["+995 571 60 29 29"],
    lat: 41.6887096,
    lng: 44.8937229,
  },
  {
    id: "hh-tbilisi-kakheti-203",
    name: "Hydraulic House — Tbilisi",
    category: "Hydraulic House",
    city: "Tbilisi",
    address: "Kakheti Highway #203",
    phones: ["+995 598 05 90 59"],
    lat: 41.692400,
    lng: 44.970667,
  },
  {
    id: "hh-tbilisi-kakheti-144a",
    name: "Hydraulic House — Tbilisi",
    category: "Hydraulic House",
    city: "Tbilisi",
    address: "Kakheti Highway #144a",
    phones: ["+995 595 88 22 28"],
    lat: 41.693081,
    lng: 44.966991,
  },
  {
    id: "hh-kutaisi",
    name: "Hydraulic House — Kutaisi",
    category: "Hydraulic House",
    city: "Kutaisi",
    address: "Gugunava St. #10",
    phones: ["+995 595 10 60 80"],
    lat: 42.2512682,
    lng: 42.6787171,
  },
  {
    id: "hh-zugdidi",
    name: "Hydraulic House — Zugdidi",
    category: "Hydraulic House",
    city: "Zugdidi",
    address: "Khubulava St. #1",
    phones: ["+995 599 27 57 04"],
    lat: 42.4899646,
    lng: 41.8482756,
  },
  {
    id: "hh-poti",
    name: "Hydraulic House — Poti",
    category: "Hydraulic House",
    city: "Poti",
    address: "Patara Poti, Central Highway #60, 7km",
    phones: ["+995 595 84 14 14"],
    lat: 42.1902516,
    lng: 41.7089643,
  },
  {
    id: "hh-chiatura",
    name: "Hydraulic House — Chiatura",
    category: "Hydraulic House",
    city: "Chiatura",
    address: "Sachkhere Highway #35, next to the Emergency Medical Station",
    phones: ["+995 558 60 39 23"],
    lat: 42.3159139,
    lng: 43.3392315,
  },
];

export const branchCategories: BranchCategory[] = [
  "Showroom & Sales",
  "Service Center",
  "Hydraulic House",
];

export const categoryColor: Record<BranchCategory, string> = {
  "Showroom & Sales": "#1c374a",
  "Service Center": "#2c5878",
  "Hydraulic House": "#ed5126",
};

export function googleMapsLink(b: Branch) {
  return `https://www.google.com/maps/search/?api=1&query=${b.lat},${b.lng}`;
}
