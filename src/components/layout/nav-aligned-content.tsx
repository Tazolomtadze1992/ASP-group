import { cn } from "@/lib/utils";
import aspLogo from "@/assets/asp-logo.png";

/** Matches header row gap between logo and nav items (gap-8 / lg:gap-10). */
export const HEADER_NAV_CLUSTER_CLASS = "gap-8 lg:gap-10";

export const HEADER_LOGO_IMG_CLASS = "h-8 lg:h-10 w-auto object-contain";

export function HeaderLogo({ className, alt = "ASP Group" }: { className?: string; alt?: string }) {
  return <img src={aspLogo} alt={alt} className={cn(HEADER_LOGO_IMG_CLASS, className)} />;
}

/** Invisible logo duplicate — reserves the same width as the header logo on desktop. */
export function HeaderLogoSpacer({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none invisible hidden shrink-0 items-center lg:flex",
        className,
      )}
    >
      <HeaderLogo alt="" />
    </span>
  );
}

/**
 * Aligns children to the main nav item column (e.g. "Divisions", "Auto").
 * Uses the same logo spacer + gap pattern as site-header row 1 and row 2.
 * Below lg, children keep normal container padding only.
 */
export function NavAlignedContent({
  className,
  contentClassName,
  children,
  ...props
}: React.ComponentProps<"div"> & { contentClassName?: string }) {
  return (
    <div className={cn("nav-aligned-cluster flex min-w-0", HEADER_NAV_CLUSTER_CLASS, className)} {...props}>
      <HeaderLogoSpacer />
      <div className={cn("nav-aligned-content min-w-0 flex-1", contentClassName)}>{children}</div>
    </div>
  );
}
