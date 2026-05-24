import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & {
  as?: "div" | "section" | "article" | "main";
};

export function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[var(--container-max)] px-[var(--section-x)] lg:px-[var(--section-x-lg)]",
        className,
      )}
      {...props}
    />
  );
}
