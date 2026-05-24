import { cn } from "@/lib/utils";

type GridProps = React.ComponentProps<"div">;

export function Grid({ className, ...props }: GridProps) {
  return (
    <div className={cn("grid grid-cols-12 gap-x-4 lg:gap-x-6", className)} {...props} />
  );
}

const COL_SPAN: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
};

type ColProps = React.ComponentProps<"div"> & {
  span?: keyof typeof COL_SPAN;
};

export function Col({ span = 12, className, ...props }: ColProps) {
  return <div className={cn(COL_SPAN[span], className)} {...props} />;
}
