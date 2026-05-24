import { Container, Section, SectionHeader } from "@/components/layout";
import { ContactForm, ContactInfo, CONTACT_DETAILS } from "@/components/contact";

const homeContactItems = CONTACT_DETAILS.map((item) => ({
  label: item.label,
  value: item.value,
  href: "href" in item ? item.href : undefined,
  icon:
    item.label === "Sales"
      ? ("phone" as const)
      : item.label === "Mobile"
        ? ("mobile" as const)
        : item.label === "Email"
          ? ("mail" as const)
          : ("map" as const),
}));

export function LeadSection() {
  return (
    <Section id="contact" variant="surface" spacing="default">
      <Container className="grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeader
            eyebrow="Get In Touch"
            title="Request a Consultation"
            description="Tell us about your fleet, project or tender. Our sales engineers reply within one business day with specifications, pricing and availability."
          />
          <ContactInfo items={homeContactItems} className="mt-10" />
        </div>
        <ContactForm pageSource="/" variant="consultation" />
      </Container>
    </Section>
  );
}
