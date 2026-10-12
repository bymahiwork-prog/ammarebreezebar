import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RevealOnScroll } from "@/components/reveal";
import { site } from "@/lib/site";
import "./globals.css";

// Fonts are self-hosted from app/fonts (Bodoni Moda for headings, Manrope for text — both OFL).
const bodoni = localFont({
  variable: "--font-bodoni",
  display: "swap",
  src: [
    { path: "./fonts/bodoni-moda-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/bodoni-moda-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/bodoni-moda-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/bodoni-moda-latin-500-italic.woff2", weight: "500", style: "italic" },
  ],
});

const manrope = localFont({
  variable: "--font-manrope",
  display: "swap",
  src: [
    { path: "./fonts/manrope-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./fonts/manrope-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/manrope-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Amaare Breeze Bar | Contemporary Dining Restaurant in Adchini, South Delhi",
    template: "%s | Amaare Breeze Bar",
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: ["/images/arches-night.jpg"],
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  image: `${site.url}/images/arches-night.jpg`,
  servesCuisine: "Contemporary",
  acceptsReservations: true,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Adchini, New Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  sameAs: [site.instagramUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodoni.variable} ${manrope.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <RevealOnScroll />
      </body>
    </html>
  );
}
