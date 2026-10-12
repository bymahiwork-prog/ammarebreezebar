import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Button, Container, Eyebrow, Photo, Title } from "@/components/ui";
import { ClosingCta } from "@/components/sections";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Franchise",
  description:
    "Bring Amaare Breeze Bar to your city. Explore franchise opportunities with a dining concept built around great food, refreshing drinks and memorable experiences.",
};

export default function FranchisePage() {
  return (
    <>
      <section>
        <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <Eyebrow className="mb-6">Franchise Opportunity</Eyebrow>
            <Title as="h1" plain="Bring Amaare to" accent="Your City" className="text-5xl sm:text-6xl lg:text-7xl" />
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted">
              Partner with a dining concept built around great food, refreshing drinks, and memorable experiences.
              Explore opportunities to grow with Amaare Breeze Bar and bring the brand to new destinations.
            </p>
            <div className="mt-8">
              <Button href="#enquire">Enquire About a Franchise →</Button>
            </div>
          </div>
          <Photo
            src="/images/franchise-arches.jpg"
            alt="Amaare's arched garden terrace lit up at night"
            shape="arch"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[1.1/1] w-full"
          />
        </Container>
      </section>

      <section id="enquire" className="scroll-mt-20 bg-forest text-paper">
        <Container className="grid items-start gap-12 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-peach">Let&apos;s Connect</p>
            <Title plain="Partner" accent="With Us" className="mt-4 text-5xl" accentClass="text-peach" />
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-paper/70">
              Interested in bringing Amaare to your city? Share your details with our team and explore potential
              franchise opportunities with Amaare.
            </p>
            <div className="mt-8 flex gap-3">
              <Button href={site.phoneHref} variant="outline-light" className="!px-5 !py-2.5">
                Call
              </Button>
              <Button href={site.whatsapp} variant="outline-light" className="!px-5 !py-2.5">
                WhatsApp
              </Button>
            </div>
          </div>
          <EnquiryForm
            title={<p className="eyebrow text-[0.62rem] text-clay">Franchise Enquiry</p>}
            submitLabel="Submit Enquiry"
            fields={[
              { name: "firstName", label: "First Name", required: true, half: true },
              { name: "lastName", label: "Last Name", required: true, half: true },
              { name: "email", label: "Email Address", type: "email", required: true },
              { name: "phone", label: "Phone Number", type: "tel", required: true, half: true },
              { name: "city", label: "City / Preferred Location", required: true, half: true },
              { name: "message", label: "Message", type: "textarea" },
            ]}
          />
        </Container>
      </section>

      <ClosingCta
        plain="Let's Build the"
        accent="Next Amaare"
        text="Your city could be home to the next Amaare experience."
        href="#enquire"
        cta="Start the Conversation"
      />
    </>
  );
}
