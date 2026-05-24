import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleAs?: "h1" | "h2" | "h3";
  className?: string;
  eyebrowTone?: React.ComponentProps<typeof Eyebrow>["tone"];
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  titleAs: TitleTag = "h2",
  className,
  eyebrowTone = "default",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center mx-auto max-w-3xl",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-primary/40 shrink-0" aria-hidden />
        <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
      </div>
      <TitleTag className="type-h2 mt-2.5 text-foreground">{title}</TitleTag>
      {description && (
        <p className="mt-3 type-body text-muted-foreground text-pretty max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
