import type { Metadata } from "next";
import { site, directionsUrl, nearby } from "@/lib/site";
import { Brand } from "@/components/brand";
import { Container, Kicker, Reveal } from "@/components/ui";
import { MapEmbed, PageHero, VisitList } from "@/components/sections";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    "Reserve a table or plan a celebration at Amaare Breeze Bar, Adchini, South Delhi. Call +91 92898 95633 or send an enquiry.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero image="/images/menu/pink-cocktail.jpg" position="center 55%" kicker="Contact" plain="Come Dine" accent="With Us">
        <p>Planning dinner, a celebration, or simply looking for your next favourite table? We&apos;d love to welcome you.</p>
      </PageHero>

      <section>
        <Container className="grid gap-16 py-24 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <div className="relative overflow-hidden bg-olive p-8 text-cream sm:p-12">
              <Brand kind="mark" tone="cream" className="pointer-events-none absolute -right-12 -top-12 w-56 opacity-[0.05]" />
              <Kicker light>Let&apos;s Connect</Kicker>
              <h2 className="display mt-6 text-4xl">{site.name}</h2>
              <div className="mt-10">
                <VisitList light />
              </div>
              <div className="mt-4 flex items-baseline gap-4 text-[0.95rem]">
                <span className="kicker shrink-0 text-sage-pale">Email</span>
                <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-cream/25" />
                <span>{site.email}</span>
              </div>
              <MapEmbed className="mt-10 h-64" />
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="kicker mt-6 inline-block border-b border-cream/40 pb-1 text-cream hover:text-sage-pale"
              >
                Get Directions →
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <EnquiryForm
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
                  options: ["Table Reservation", "Celebration / Private Event", "Group Booking", "General Enquiry"],
                },
                { name: "date", label: "Preferred Date", type: "date", half: true },
                { name: "time", label: "Preferred Time", type: "time", half: true },
                { name: "message", label: "Message", type: "textarea" },
              ]}
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-linen">
        <Container className="flex flex-wrap items-center gap-x-10 gap-y-5 py-12">
          <Kicker>Easy to reach from</Kicker>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {nearby.map((n, i) => (
              <li key={n} className="flex items-center gap-6">
                {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-sage" />}
                <span className="display text-xl">{n}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
