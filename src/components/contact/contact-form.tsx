import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PRODUCT_INTEREST_OPTIONS } from "./contact-data";

type ContactFormProps = {
  pageSource: string;
  variant?: "consultation" | "contact";
  className?: string;
};

export function ContactForm({
  pageSource,
  variant = "contact",
  className,
}: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    if (typeof window !== "undefined") {
      console.log("[ASP Contact] submission", payload);
    }
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setDone(true);
    e.currentTarget.reset();
  };

  const isConsultation = variant === "consultation";

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Contact ASP Group"
      className={cn(
        "rounded-3xl border border-border/60 bg-background p-7 md:p-10 surface-card space-y-5",
        className,
      )}
    >
      <input type="hidden" name="page_source" value={pageSource} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          id={`${pageSource}-name`}
          name={isConsultation ? "name" : "fullName"}
          label="Full Name"
          required
          autoComplete="name"
        />
        <Field
          id={`${pageSource}-company`}
          name="company"
          label="Company"
          autoComplete="organization"
        />
        <Field
          id={`${pageSource}-phone`}
          name="phone"
          label="Phone Number"
          type="tel"
          required
          autoComplete="tel"
        />
        <Field
          id={`${pageSource}-email`}
          name="email"
          label="Email Address"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      {!isConsultation && (
        <Field id={`${pageSource}-subject`} name="subject" label="Subject" required />
      )}

      {isConsultation && (
        <div className="space-y-1.5">
          <label
            htmlFor={`${pageSource}-interest`}
            className="type-eyebrow text-muted-foreground"
          >
            Product Interest <span className="text-accent">*</span>
          </label>
          <select
            id={`${pageSource}-interest`}
            name="product_interest"
            required
            className="w-full rounded-xl border border-border/70 bg-surface px-3.5 py-3 type-body-sm text-foreground focus:outline-none focus:border-primary focus:bg-background transition-colors"
          >
            {PRODUCT_INTEREST_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      )}

      <div className="space-y-1.5">
        <label htmlFor={`${pageSource}-message`} className="type-eyebrow text-muted-foreground">
          Message {!isConsultation && <span className="text-accent">*</span>}
        </label>
        <textarea
          id={`${pageSource}-message`}
          name="message"
          required={!isConsultation}
          rows={isConsultation ? 4 : 5}
          minLength={isConsultation ? undefined : 5}
          maxLength={2000}
          placeholder={
            isConsultation
              ? "Project, fleet size, tender requirements..."
              : "Project details, fleet size, tender requirements…"
          }
          className="w-full rounded-xl border border-border/70 bg-surface px-3.5 py-3 type-body-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:bg-background transition-colors resize-none"
        />
      </div>

      {!isConsultation && (
        <label className="flex items-start gap-3 type-body-sm text-muted-foreground text-pretty cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 h-4 w-4 rounded border-border accent-primary cursor-pointer"
          />
          <span>I agree to the processing of my personal data.</span>
        </label>
      )}

      <Button
        type="submit"
        variant="asp"
        size="xl"
        disabled={submitting}
        className="w-full sm:w-auto"
      >
        {submitting ? "Sending…" : isConsultation ? "Request Consultation" : "Send Message"}
        <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
      </Button>

      {done && (
        <p
          role="status"
          className="type-body-sm font-medium text-primary bg-surface border border-border rounded-xl px-4 py-3"
        >
          Thank you. Our team will get back to you within one business day.
        </p>
      )}

      {isConsultation && (
        <p className="type-eyebrow text-muted-foreground text-center tracking-widest">
          By submitting, you agree to be contacted by ASP Group regarding your inquiry.
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="type-eyebrow text-muted-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={200}
        className="w-full rounded-xl border border-border/70 bg-surface px-3.5 py-3 type-body-sm text-foreground focus:outline-none focus:border-primary focus:bg-background transition-colors"
      />
    </div>
  );
}
