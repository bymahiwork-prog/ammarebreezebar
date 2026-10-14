import type { Metadata } from "next";
import { site, directionsUrl, nearby } from "@/lib/site";
import { Brand } from "@/components/brand";
import { Container, Reveal } from "@/components/ui";
import { MapEmbed } from "@/components/sections";
import { FinalCta, Heading, Label, PhotoHero, Pill } from "@/components/kit";
import { EnquiryForm } from "@/components/enquiry-form";

// Copy from "Amaare Breeze Bar — SEO / AEO / GEO Strategy", Contact Us.
export const metadata: Metadata = {
  title: "Contact & Reservations | Restaurant in Adchini, South Delhi",
  description:
    "Reserve a table or plan a celebration at Amaare Breeze Bar, Adchini, South Delhi. Call +91 92898 95633 or send an enquiry.",
};

export default function ContactPage() {
  const details: [string, string, string?][] = [
    ["Call Us", site.phone, site.phoneHref],
    ["Email Us", site.email],
    ["Opening Hours", site.hours],
    ["Find Us", site.address, directionsUrl],
  ];

  return (
    <>
      <PhotoHero image="/images/menu/pink-cocktail.jpg" pos="center 60%" label="Contact" plain="Come Dine" accent="With Us">
        <p>Planning dinner, a celebration, or simply looking for your next favourite table? We&apos;d love to welcome you.</p>
        <div className="mt-8">
          <Pill href="#enquiry" tone="cream">
            Reserve Your Table
          </Pill>
        </div>
      </PhotoHero>

      <section id="enquiry" className="relative scroll-mt-20 overflow-hidden bg-olive py-16 text-cream">
        <Brand kind="mark" tone="cream" className="pointer-events-none absolute -left-24 -top-16 w-[360px] opacity-[0.035]" />
        <Container className="relative grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <Label dark mark>
              Let&apos;s Connect
            </Label>
            <Heading plain={site.name} dark className="mt-4 text-[2.4rem] sm:text-[3rem]" />
            <p className="mt-2 text-cream/70">{site.area}</p>

            <dl className="mt-8 divide-y divide-cream/10 border-y border-cream/10">
              {details.map(([k, v, href]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="kicker shrink-0 text-[0.62rem] tracking-[0.24em] text-sage-pale">{k}</dt>
                  <dd className="text-right text-[0.95rem]">
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-sage-pale">
                        {v}
                      </a>
                    ) : (
                      v
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <MapEmbed className="mt-8 h-64 rounded-2xl" />
            <div className="mt-6 flex flex-wrap gap-3">
              <Pill href={directionsUrl} tone="cream">
                Get Directions ↗
              </Pill>
              <Pill href={site.whatsapp} tone="outline">
                WhatsApp Us
              </Pill>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <EnquiryForm
              eyebrow="Reservations & Enquiries"
              title={
                <>
                  Make an <span className="accent text-sage">Enquiry</span>
                </>
              }
              submitLabel="Send Enquiry"
              showWhatsapp
              fields={[
                { name: "firstName", label: "First Name", required: true, half: true },
                { name: "lastName", label: "Last Name", required: true, half: true },
                { name: "email", label: "Email Address", type: "email", required: true, half: true },
                { name: "phone", label: "Phone Number", type: "tel", required: true, half: true },
                {
                  name: "type",
                  label: "Enquiry Type",
                  type: "select",
                  required: true,
                  options: ["Table Reservation", "Celebration / Private Event", "General Enquiry", "Event Enquiry"],
                },
                { name: "date", label: "Preferred Date", type: "date", half: true },
                { name: "time", label: "Preferred Time", type: "time", half: true },
                { name: "message", label: "Message", type: "textarea" },
              ]}
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-12">
        <Container className="flex flex-col items-center gap-5 text-center">
          <Label mark>Easy to Reach From</Label>
          <ul className="flex flex-wrap justify-center gap-2.5">
            {nearby.map((n) => (
              <li key={n} className="rounded-full border border-line bg-paper px-5 py-2 text-sm text-olive">
                {n}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCta
        image="/images/menu/amber-old-fashioned.jpg"
        plain="Your Table"
        accent="Awaits"
        lines={["Good food. Good drinks. Good company.", "See you at Amaare."]}
        primary={{ href: "#enquiry", label: "Reserve Your Table" }}
      />
    </>
  );
}
