import { cn } from "@/lib/utils";

type EyebrowProps = React.ComponentProps<"span"> & {
  tone?: "default" | "accent" | "on-dark";
};

const toneClasses: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  default: "text-primary/70",
  accent: "text-accent",
  "on-dark": "text-white/70",
};

export function Eyebrow({ tone = "accent", className, children, ...props }: EyebrowProps) {
  return (
    <span className={cn("type-eyebrow", toneClasses[tone], className)} {...props}>
      {children}
    </span>
  );
}
