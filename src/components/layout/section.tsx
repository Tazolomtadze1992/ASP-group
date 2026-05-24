import { cn } from "@/lib/utils";

type SectionVariant = "default" | "surface" | "dark" | "white";

type SectionProps = React.ComponentProps<"section"> & {
  variant?: SectionVariant;
  spacing?: "default" | "compact" | "hero";
};

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-background",
  surface: "bg-surface/40 border-y border-border",
  dark: "bg-primary text-primary-foreground",
  white: "bg-card",
};

const spacingClasses: Record<NonNullable<SectionProps["spacing"]>, string> = {
  default: "py-[var(--section-y)] md:py-[var(--section-y-lg)]",
  compact: "py-12 md:py-16",
  hero: "pt-[calc(var(--header-height)+2rem)] pb-10 md:pb-16",
};

export function Section({
  variant = "default",
  spacing = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(variantClasses[variant], spacingClasses[spacing], className)}
      {...props}
    />
  );
}
