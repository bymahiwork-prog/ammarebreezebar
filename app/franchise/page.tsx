import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Brand } from "@/components/brand";
import { Container, Reveal } from "@/components/ui";
import { Heading, Label, PhotoHero, Pill } from "@/components/kit";
import { EnquiryForm } from "@/components/enquiry-form";

// Three sections, same structure as the Zammaya franchise page: hero · enquiry · FAQs.
// Copy from "Amaare Breeze Bar — SEO / AEO / GEO Strategy", Franchise.
export const metadata: Metadata = {
  title: "Franchise | Bring Amaare to Your City",
  description:
    "Bring Amaare Breeze Bar to your city. Explore franchise opportunities with a dining concept built around great food, refreshing drinks and memorable experiences.",
};

// Adapted from the Zammaya franchise FAQs — confirm details with the brand before launch.
const faqs = [
  {
    q: "Does Amaare offer franchise opportunities?",
    a: "We are open to conversations with the right partners in new cities. Share your details and our team will get back to you.",
  },
  {
    q: "Who can apply for an Amaare franchise?",
    a: "Individuals or groups with hospitality or business experience, access to a suitable location, and the capacity to invest in a contemporary dining build.",
  },
  {
    q: "What support is offered to franchise partners?",
    a: "Details on design, menu, training and launch support are shared with shortlisted partners during our conversations.",
  },
  {
    q: "Which cities are being considered for expansion?",
    a: "We are evaluating opportunities across major Indian cities. Tell us your preferred location in the enquiry form.",
  },
  {
    q: "How can I submit a franchise enquiry?",
    a: `Fill in the enquiry form on this page, or call or WhatsApp our team on ${site.phone}.`,
  },
];

export default function FranchisePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      {/* 1 · Hero */}
      <PhotoHero image="/images/space/rooftop-aerial.jpg" pos="center 60%" label="Franchise Opportunity" plain="Bring Amaare to" accent="Your City">
        <p>Partner with a dining concept built around great food, refreshing drinks, and memorable experiences.</p>
        <p className="mt-3">Explore opportunities to grow with Amaare Breeze Bar and bring the brand to new destinations.</p>
        <div className="mt-8">
          <Pill href="#enquire" tone="cream">
            Enquire About a Franchise →
          </Pill>
        </div>
      </PhotoHero>

      {/* 2 · Enquiry */}
      <section id="enquire" className="relative scroll-mt-20 overflow-hidden bg-olive py-16 text-cream">
        <Brand kind="mark" tone="cream" className="pointer-events-none absolute -left-24 bottom-0 w-[380px] opacity-[0.035]" />
        <Container className="relative grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="lg:pt-6">
            <Label dark mark>
              Let&apos;s Connect
            </Label>
            <Heading plain="Partner" accent="With Us" dark />
            <p className="mt-5 max-w-sm leading-[1.8] text-cream/80">Interested in bringing Amaare to your city?</p>
            <p className="mt-3 max-w-sm leading-[1.8] text-cream/80">
              Share your details with our team and explore potential franchise opportunities with Amaare.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill href={site.phoneHref} tone="outline">
                Call Us
              </Pill>
              <Pill href={site.whatsapp} tone="outline">
                WhatsApp
              </Pill>
            </div>
            <p className="accent mt-10 text-[1.6rem] text-sage-pale">Let&apos;s build the next Amaare.</p>
            <p className="mt-1 text-sm text-cream/60">Your city could be home to the next Amaare experience.</p>
          </Reveal>
          <Reveal delay={120}>
            <EnquiryForm
              eyebrow="Franchise Enquiry"
              title={
                <>
                  Tell Us <span className="accent text-sage">About You</span>
                </>
              }
              submitLabel="Submit Enquiry"
              fields={[
                { name: "firstName", label: "First Name", required: true, half: true },
                { name: "lastName", label: "Last Name", required: true, half: true },
                { name: "email", label: "Email Address", type: "email", required: true, half: true },
                { name: "phone", label: "Phone Number", type: "tel", required: true, half: true },
                { name: "city", label: "City / Preferred Location", required: true },
                { name: "message", label: "Message", type: "textarea" },
              ]}
            />
          </Reveal>
        </Container>
      </section>

      {/* 3 · Franchise FAQs */}
      <section className="bg-cream py-16">
        <Container className="max-w-3xl">
          <Reveal className="text-center">
            <Label mark center>
              Good to Know
            </Label>
            <Heading plain="Franchise" accent="FAQs" center />
          </Reveal>
          <Reveal delay={100} className="mt-10 border-t border-ink/15">
            {faqs.map((f, i) => (
              <details key={f.q} className="group border-b border-ink/15" open={i === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-5">
                  <span className="display text-[1.3rem] leading-snug text-olive">{f.q}</span>
                  <span aria-hidden className="faq-icon text-2xl font-light text-sage transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="-mt-1 pb-5 leading-relaxed text-ink/70">{f.a}</p>
              </details>
            ))}
          </Reveal>
        </Container>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </section>
    </>
  );
}
