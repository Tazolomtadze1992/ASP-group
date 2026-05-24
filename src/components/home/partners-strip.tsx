import { cn } from "@/lib/utils";
import { partnerLogos, type PartnerLogo } from "./data";

const WEIGHT_CLASS = {
  medium: "font-medium",
  semibold: "font-semibold",
} as const;

function PartnerLogoItem({
  partner,
  className,
}: {
  partner: PartnerLogo;
  className?: string;
}) {
  const content = partner.logo ? (
    <img
      src={partner.logo}
      alt={partner.name}
      width={120}
      height={28}
      className="h-5 w-auto max-h-6 max-w-[7rem] object-contain opacity-75 sm:h-6 sm:max-h-7 sm:max-w-[7.5rem]"
    />
  ) : (
    <span
      className={cn(
        "block text-sm leading-none tracking-tight text-primary-foreground/75 whitespace-nowrap sm:text-[0.9375rem]",
        WEIGHT_CLASS[partner.weight ?? "medium"],
        className,
      )}
    >
      {partner.name}
    </span>
  );

  if (partner.href) {
    return (
      <a
        href={partner.href}
        aria-label={partner.name}
        className="inline-flex shrink-0 items-center opacity-75 transition-opacity duration-150 ease-out hover:opacity-100"
      >
        {content}
      </a>
    );
  }

  return (
    <span
      className="inline-flex shrink-0 items-center opacity-75 transition-opacity duration-150 ease-out hover:opacity-100"
      role="listitem"
    >
      {content}
    </span>
  );
}

function LogoRow({
  items,
  duplicate = false,
}: {
  items: PartnerLogo[];
  duplicate?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-x-8 sm:gap-x-10 lg:gap-x-14",
        duplicate && "partner-marquee-duplicate",
      )}
      aria-hidden={duplicate ? true : undefined}
    >
      {items.map((partner) => (
        <PartnerLogoItem key={`${partner.name}${duplicate ? "-dup" : ""}`} partner={partner} />
      ))}
    </div>
  );
}

export function PartnersStrip() {
  return (
    <div
      id="partners"
      role="region"
      aria-label="Partner logos"
      className="relative mt-auto hidden w-full border-t border-white/10 sm:block"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/35 to-transparent"
      />

      <div className="partner-marquee-viewport relative overflow-hidden px-[var(--section-x)] pb-6 pt-3 sm:px-[var(--section-x-lg)] sm:pb-7 sm:pt-3.5 lg:pb-8" role="list">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-primary to-transparent sm:w-12"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-primary to-transparent sm:w-12"
        />

        <div className="partner-marquee-track flex w-max items-center">
          <LogoRow items={partnerLogos} />
          <LogoRow items={partnerLogos} duplicate />
        </div>
      </div>
    </div>
  );
}
