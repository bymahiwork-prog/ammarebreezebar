import type { Metadata } from "next";
import { site, directionsUrl, nearby } from "@/lib/site";
import { Container, Eyebrow, Title } from "@/components/ui";
import { MapEmbed, TableAwaits } from "@/components/sections";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    "Reserve a table or plan a celebration at Amaare Breeze Bar, Adchini, South Delhi. Call +91 92898 95633 or send an enquiry.",
};

export default function ContactPage() {
  const details = [
    { k: "Call Us", v: site.phone, href: site.phoneHref },
    { k: "Email Us", v: site.email },
    { k: "Opening Hours", v: site.hours },
  ];

  return (
    <>
      <section>
        <Container className="pt-16 text-center sm:pt-20">
          <Eyebrow className="mb-5">Contact</Eyebrow>
          <Title as="h1" plain="Come Dine" accent="With Us" className="text-5xl sm:text-6xl lg:text-7xl" />
          <p className="mx-auto mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted">
            Planning dinner, a celebration, or simply looking for your next favourite table? We&apos;d love to welcome you.
          </p>
        </Container>
      </section>

      <section>
        <Container className="grid gap-6 py-14 lg:grid-cols-2">
          <div className="flex flex-col rounded-2xl bg-forest p-8 text-paper">
            <p className="eyebrow text-[0.6rem] text-peach">Let&apos;s Connect</p>
            <h2 className="mt-3 font-display text-3xl">{site.name}</h2>
            <p className="mt-1 text-sm text-paper/60">{site.address}</p>
            <dl className="mt-6 divide-y divide-paper/10 border-y border-paper/10 text-sm">
              {details.map((d) => (
                <div key={d.k} className="flex items-center justify-between gap-4 py-4">
                  <dt className="eyebrow text-[0.58rem] text-paper/50">{d.k}</dt>
                  <dd>
                    {d.href ? (
                      <a href={d.href} className="hover:text-peach">
                        {d.v}
                      </a>
                    ) : (
                      d.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <MapEmbed className="mt-6 flex-1" />
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow mt-4 self-start text-[0.6rem] text-peach hover:text-paper"
            >
              Get Directions →
            </a>
          </div>

          <EnquiryForm
              tone="sand"
              title={
                <>
                  Make an <em className="text-clay">Enquiry</em>
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
        </Container>

        <Container className="pb-20">
          <div className="border-b border-line pb-8">
            <Eyebrow className="mb-4">Easy to Reach From</Eyebrow>
            <ul className="flex flex-wrap gap-2">
              {nearby.map((n) => (
                <li key={n} className="rounded-full border border-line px-4 py-1.5 text-xs text-ink/80">
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <TableAwaits />
    </>
  );
}
