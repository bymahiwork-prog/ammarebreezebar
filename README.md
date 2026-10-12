# Amaare Breeze Bar — website

Next.js site for Amaare Breeze Bar, Adchini, South Delhi. Six pages: Home, About, Gallery, Franchise, Journal (blog) and Contact.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where to change things

| What | File |
| --- | --- |
| Address, phone, email, hours, Instagram | `lib/site.ts` |
| Events on the homepage | `lib/site.ts` → `events` |
| Blog post titles and images | `lib/site.ts` → `posts` |
| FAQs | `lib/site.ts` → `faqs` |
| Colours and fonts | `app/globals.css` (sage from the logo, cream, deep olive) |
| Photos | `public/images/` |
| Logo (vector, recolourable) | `public/brand/` |

## Still to fill in

- `[Full Address]`, `[Email Address]`, `[Opening Hours]` and the three `[Event Name]` cards in `lib/site.ts`
- Hero day-to-night video (home page currently shows the statue photo)
- Birthday / group table photo on the Gallery page
- Blog article text (each post page says "coming soon")
- Photos are cut from the design PDFs; swap in full-resolution originals in `public/images/` (same file names)

## Forms

The Contact and Franchise forms have no backend. Submitting opens WhatsApp (+91 92898 95633) with the details filled in.
