// Reusable product detail data for ASP Group product pages.
// Keyed by slug (matches product `id` used in /auto product list).
// Any field can be omitted — the product page hides empty sections.

import pickupKlubb1 from "@/assets/products/pickup-klubb-kl21-1.png";
import pickupKlubb2 from "@/assets/products/pickup-klubb-kl21-2.png";



export type SpecRow = { label: string; value: string };

export type ProductDetail = {
  slug: string;
  division: string;
  divisionHref?: string;
  subcategory: string;
  subcategoryHref?: string;
  brand?: string;
  model?: string;
  productName: string;
  shortDescription?: string;
  mainImage?: string;
  imageGallery?: string[];
  keySpecs?: { label: string; icon?: string }[]; // icon = key from ICON_MAP
  overview?: string;
  applications?: { title: string; body: string }[];
  advantages?: string[];
  equipmentParameters?: SpecRow[];
  equipmentParametersTitle?: string;
  technicalSpecifications?: SpecRow[];
  technicalSpecificationsTitle?: string;
  commercialInfo?: SpecRow[];
  warranty?: string;
  deliveryTime?: string;
};

export const productDetails: Record<string, ProductDetail> = {
  "pickup-klubb-kl21": {
    slug: "pickup-klubb-kl21",
    division: "Auto",
    divisionHref: "/auto",
    subcategory: "Aerial Work Platform",
    subcategoryHref: "/auto?category=Aerial+Work+Platform",
    brand: "FOTON",
    model: "BJ 2037 / KLUBB KL21",
    productName: "FOTON 4x4 Double Cab Pickup with KLUBB KL21 Aerial Platform",
    mainImage: pickupKlubb1,
    imageGallery: [pickupKlubb1, pickupKlubb2],
    shortDescription:
      "A rare and highly versatile multifunctional utility vehicle for the Georgian market, combining the mobility of a double cab pickup with the engineering precision of the French KLUBB aerial platform.",
    keySpecs: [
      { label: "11.5 m Working Height", icon: "height" },
      { label: "200 kg Basket Capacity", icon: "basket" },
      { label: "1000 V Insulation", icon: "bolt" },
      { label: "4x4 Drive", icon: "drive" },
      { label: "Double Cab / Crew up to 5", icon: "crew" },
      { label: "360° Rotation", icon: "rotate" },
    ],
    overview:
      "Designed for high mobility, speed, and operator safety, this model is ideal for field service teams that need to transport both crew and technical equipment in one vehicle.",
    applications: [
      {
        title: "Telecom & Internet Providers",
        body: "Fast installation, optimization, and maintenance of fiber-optic and telecom networks.",
      },
      {
        title: "Energy & Utility Companies",
        body: "Safe and efficient rehabilitation of power lines, outdoor lighting, and overhead networks.",
      },
    ],
    advantages: [
      "Double cab capacity: carries up to 5 people plus technical equipment, reducing the need for two separate vehicles.",
      "1000 V electrical insulation: critical protection for teams working in the energy sector.",
      "4x4 mobility: full-wheel drive and a powerful AUCAN engine support operation on rough, off-road, and hard-to-reach terrain.",
      "French precision control: modern joystick operation with duplicated control panels on both the basket and vehicle platform.",
    ],
    equipmentParametersTitle: "KLUBB KL21 Aerial Platform Parameters",
    equipmentParameters: [
      { label: "Maximum Working Height", value: "11.5 m" },
      { label: "Basket Capacity", value: "200 kg" },
      { label: "Basket Rotation", value: "360°" },
      { label: "Platform Type", value: "Telescopic" },
      { label: "Electrical Insulation", value: "1000 Volts" },
      { label: "Origin", value: "France" },
    ],
    technicalSpecificationsTitle: "Vehicle Technical Specifications",
    technicalSpecifications: [
      { label: "Model / Year", value: "FOTON BJ 2037 / 2026" },
      { label: "Engine / Emission", value: "AUCAN 4F20 / EURO 5" },
      { label: "Power", value: "161 hp" },
      { label: "Transmission", value: "Manual, 6+1" },
      { label: "Drive System", value: "4x4 (All-Wheel Drive)" },
      { label: "Brake System", value: "ABS + EBD" },
      { label: "Comfort & Safety", value: "Power windows, A/C, rear-view camera" },
      { label: "Dimensions (L/W/H)", value: "6450 × 1950 × 2900 mm" },
    ],
    deliveryTime: "250–300 days",
    warranty: "3 years or 100,000 km",
  },
};

export function getProductDetail(slug: string): ProductDetail | undefined {
  return productDetails[slug];
}
