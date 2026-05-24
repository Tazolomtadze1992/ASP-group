import { Clock } from "lucide-react";
import { Container } from "@/components/layout";

const footerLinks = {
  Divisions: [
    { label: "ASP Auto", href: "/auto" },
    { label: "ASP Construction", href: "/#directions" },
    { label: "ASP Agro", href: "/#directions" },
    { label: "Hydraulic House", href: "/#branches" },
  ],
  Support: [
    { label: "Spare Parts", href: "/#service" },
    { label: "Service Centers", href: "/#service" },
    { label: "Mobile Service", href: "/#service" },
    { label: "Hydraulics", href: "/#branches" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Brands", href: "/#partners" },
    { label: "Branches", href: "/#branches" },
    { label: "Certificates", href: "/about" },
  ],
} as const;

function FooterCol({ title, items }: { title: string; items: readonly { label: string; href: string }[] }) {
  return (
    <div className="space-y-4">
      <div className="type-eyebrow text-primary-foreground/45">{title}</div>
      <ul className="text-xs space-y-2.5 uppercase font-semibold tracking-wide">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              className="text-primary-foreground/85 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 group"
            >
              <span className="h-px w-0 bg-primary-foreground transition-[width] duration-150 group-hover:w-3" />
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative bg-[var(--footer-bg)] text-primary-foreground">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col lg:flex-row justify-between gap-14">
          <div className="space-y-6 max-w-sm">
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-semibold tracking-tight uppercase">ASP GROUP</span>
              <span className="h-0.5 w-16 mt-3 bg-accent" />
            </div>
            <p className="type-body-sm text-primary-foreground/65 text-pretty leading-relaxed">
              ASP Group LLC — 24 years in the Georgian automotive market. Official dealer of FOTON,
              DAEWOO Trucks, LOVOL, ZOOMLION, PARKER, BOSCH REXROTH and more.
            </p>
            <div className="flex gap-3 type-eyebrow">
              <a
                href="https://wa.me/995577557799"
                className="px-4 py-2.5 border border-primary-foreground/15 hover:border-primary-foreground hover:bg-primary-foreground hover:text-[var(--footer-bg)] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="tel:+995322102201"
                className="px-4 py-2.5 border border-primary-foreground/15 hover:border-primary-foreground hover:bg-primary-foreground hover:text-[var(--footer-bg)] transition-colors"
              >
                Call Sales
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
            <FooterCol title="Divisions" items={footerLinks.Divisions} />
            <FooterCol title="Support" items={footerLinks.Support} />
            <FooterCol title="Company" items={footerLinks.Company} />
            <div className="space-y-4">
              <div className="type-eyebrow text-primary-foreground/45">Hours</div>
              <ul className="text-xs space-y-2.5 text-primary-foreground/70 font-mono">
                <li>Mon–Fri · 09:00–19:00</li>
                <li>Sat · 10:00–16:00</li>
                <li>Sun · Closed</li>
                <li className="flex items-center gap-2 text-accent">
                  <Clock className="w-3 h-3" />
                  Service · 24/7
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 type-eyebrow text-primary-foreground/45">
          <div>© {new Date().getFullYear()} ASP Group LLC · www.asp.ge · All Rights Reserved</div>
          <div className="flex gap-6">
            <span className="text-primary-foreground">EN</span>
            <button type="button" className="opacity-50 hover:opacity-100 transition-opacity hit-area">
              KA
            </button>
            <button type="button" className="opacity-50 hover:opacity-100 transition-opacity hit-area">
              RU
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
