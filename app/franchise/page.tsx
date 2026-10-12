import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Brand } from "@/components/brand";
import { Button, Container, Display, Img, Kicker, Reveal } from "@/components/ui";
import { Ornament, PageHero } from "@/components/sections";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Franchise",
  description:
    "Bring Amaare Breeze Bar to your city. Explore franchise opportunities with a dining concept built around great food, refreshing drinks and memorable experiences.",
};

export default function FranchisePage() {
  return (
    <>
      <PageHero image="/images/franchise-arches.jpg" kicker="Franchise Opportunity" plain="Bring Amaare to" accent="Your City">
        <p>
          Partner with a dining concept built around great food, refreshing drinks, and memorable experiences. Explore
          opportunities to grow with Amaare Breeze Bar and bring the brand to new destinations.
        </p>
        <div className="mt-10">
          <Button href="#enquire" variant="light">
            Enquire About a Franchise
          </Button>
        </div>
      </PageHero>

      <section>
        <Container className="grid items-center gap-16 py-28 sm:py-36 lg:grid-cols-2 lg:gap-24">
          <Reveal className="relative">
            <div aria-hidden className="absolute -right-5 -top-5 h-full w-full border border-sage/40" />
            <Img src="/images/girl-brown.jpg" alt="Amaare's garden dining room" className="aspect-[4/5]" />
          </Reveal>
          <Reveal delay={150}>
            <Kicker>The Concept</Kicker>
            <Display plain="A Room People" accent="Come Back To" breakAccent className="mt-7 text-5xl sm:text-6xl" />
            <p className="mt-8 max-w-md leading-[1.85] text-muted">
              Daytime glasshouse lunches, sunset cocktails and long dinners under the stars — Amaare is built around food,
              drinks and an atmosphere guests want to share. Partner with us to bring that experience to a new city.
            </p>
          </Reveal>
        </Container>
      </section>

      <section id="enquire" className="relative scroll-mt-20 overflow-hidden bg-olive text-cream">
        <Brand kind="mark" className="pointer-events-none absolute -left-24 bottom-0 w-[420px] text-cream/[0.04]" />
        <Container className="relative grid items-start gap-16 py-28 sm:py-36 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <Reveal>
            <Kicker light>Let&apos;s Connect</Kicker>
            <Display plain="Partner" accent="With Us" breakAccent className="mt-7 text-5xl sm:text-6xl" accentClass="text-sage-pale" />
            <p className="mt-8 max-w-sm leading-[1.85] text-cream/75">
              Interested in bringing Amaare to your city? Share your details with our team and explore potential franchise
              opportunities with Amaare.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={site.phoneHref} variant="line-light">
                Call
              </Button>
              <Button href={site.whatsapp} variant="line-light">
                WhatsApp
              </Button>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <EnquiryForm
              dark
              title={
                <>
                  Franchise <span className="accent text-sage-pale">Enquiry</span>
                </>
              }
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
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-28 text-center sm:py-36">
          <Reveal>
            <Ornament />
            <Display plain="Let's Build the" accent="Next Amaare" breakAccent className="mt-10 text-5xl sm:text-6xl" />
            <p className="mt-6 text-muted">Your city could be home to the next Amaare experience.</p>
            <div className="mt-10">
              <Button href="#enquire">Start the Conversation</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
