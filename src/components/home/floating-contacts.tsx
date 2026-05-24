import { MessageCircle, Phone } from "lucide-react";

export function FloatingContacts() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40 pb-[env(safe-area-inset-bottom)]">
      <a
        href="https://wa.me/995577557799"
        aria-label="WhatsApp"
        className="w-12 h-12 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center active:scale-[0.96] transition-transform duration-150"
      >
        <MessageCircle className="w-5 h-5 text-white" strokeWidth={2} />
      </a>
      <a
        href="tel:+995322102201"
        aria-label="Call sales"
        className="w-12 h-12 bg-accent text-accent-foreground rounded-full shadow-lg flex items-center justify-center active:scale-[0.96] transition-transform duration-150"
      >
        <Phone className="w-5 h-5" strokeWidth={2} />
      </a>
    </div>
  );
}
