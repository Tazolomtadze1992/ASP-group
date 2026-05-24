import { cn } from "@/lib/utils";

type HeroCtaButtonProps = React.ComponentProps<"a">;

function HeroCtaArrow() {
  return (
    <svg
      className="hero-cta-arrow"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path className="hero-cta-arrow-line" d="M0.5 5.5h7" />
      <path className="hero-cta-arrow-head" d="M1.5 1.5l4 4-4 4" />
    </svg>
  );
}

export function HeroCtaButton({ className, children, ...props }: HeroCtaButtonProps) {
  return (
    <a className={cn("hero-cta-button", className)} {...props}>
      <span>{children}</span>
      <HeroCtaArrow />
    </a>
  );
}
