import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  phone: Phone,
  mail: Mail,
  map: MapPin,
  mobile: MessageCircle,
  clock: Clock,
} as const;

export type ContactInfoItem = {
  label: string;
  value: string;
  href?: string;
  icon: keyof typeof iconMap;
};

type ContactInfoProps = {
  items: readonly ContactInfoItem[];
  className?: string;
};

export function ContactInfo({ items, className }: ContactInfoProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => {
        const Icon = iconMap[item.icon];
        const inner = (
          <div className="flex gap-4 items-center">
            <div className="w-11 h-11 rounded-xl border border-border/70 bg-background flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
            </div>
            <div>
              <div className="type-eyebrow text-muted-foreground">{item.label}</div>
              <div className="type-body font-semibold text-primary">{item.value}</div>
            </div>
          </div>
        );
        return item.href ? (
          <a key={item.label} href={item.href} className="block hover:text-accent transition-colors">
            {inner}
          </a>
        ) : (
          <div key={item.label}>{inner}</div>
        );
      })}
    </div>
  );
}
