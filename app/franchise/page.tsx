import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Brand } from "@/components/brand";
import { Container, Reveal } from "@/components/ui";
import { ArchPhoto, FinalCta, Heading, Label, Photo, PhotoHero, Pill } from "@/components/kit";
import { EnquiryForm } from "@/components/enquiry-form";

// Copy from "Amaare Breeze Bar — SEO / AEO / GEO Strategy", Franchise.
export const metadata: Metadata = {
  title: "Franchise | Bring Amaare to Your City",
  description:
    "Bring Amaare Breeze Bar to your city. Explore franchise opportunities with a dining concept built around great food, refreshing drinks and memorable experiences.",
};

export default function FranchisePage() {
  return (
    <>
      <PhotoHero image="/images/arches-night.jpg" label="Franchise Opportunity" plain="Bring Amaare to" accent="Your City">
        <p>Partner with a dining concept built around great food, refreshing drinks, and memorable experiences.</p>
        <p className="mt-3">Explore opportunities to grow with Amaare Breeze Bar and bring the brand to new destinations.</p>
        <div className="mt-8">
          <Pill href="#enquire" tone="cream">
            Enquire About a Franchise →
          </Pill>
        </div>
      </PhotoHero>

      {/* The concept, in pictures — cream */}
      <section className="bg-cream py-16">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <Label mark>The Concept</Label>
            <Heading plain="Great Food. Refreshing Drinks." accent="Memorable Experiences." breakAccent />
            <p className="mt-5 max-w-lg text-[1.05rem] leading-[1.8] text-ink/75">
              Amaare is a contemporary dining destination built around thoughtfully crafted food, refreshing drinks, music
              and an inviting atmosphere — made for easy, memorable evenings.
            </p>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
              {["sushi", "golden-coupe", "skewers"].map((n) => (
                <Photo key={n} src={`/images/menu/${n}.jpg`} alt="" className="aspect-[3/4] rounded-t-full" sizes="140px" />
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="mx-auto w-full max-w-[400px]">
            <ArchPhoto src="/images/menu/highball-garden.jpg" alt="A highball in Amaare's garden" className="aspect-[4/5]" sizes="400px" pos="center 40%" dark={false} />
          </Reveal>
        </Container>
      </section>

      {/* Enquiry — green */}
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
                Call {site.phone}
              </Pill>
              <Pill href={site.whatsapp} tone="outline">
                WhatsApp
              </Pill>
            </div>
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

      <FinalCta
        image="/images/menu/amber-old-fashioned.jpg"
        plain="Let's Build the"
        accent="Next Amaare"
        lines={["Your city could be home to the next Amaare experience."]}
        primary={{ href: "#enquire", label: "Enquire About a Franchise" }}
        secondary={{ href: site.whatsapp, label: "WhatsApp Us" }}
      />
    </>
  );
}
