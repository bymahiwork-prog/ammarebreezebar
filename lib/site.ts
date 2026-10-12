// Single place for Amaare's business details.
// Replace the [bracketed] values once the client confirms them.

export const site = {
  name: "Amaare Breeze Bar",
  shortName: "amaaré",
  tagline: "Breeze Bar",
  url: "https://amaarebreezebar.com",
  area: "Adchini, South Delhi",
  address: "[Full Address], Adchini, South Delhi",
  phone: "+91 92898 95633",
  phoneHref: "tel:+919289895633",
  whatsapp: "https://wa.me/919289895633",
  email: "[Email Address]",
  hours: "[Opening Hours]",
  instagram: "@amaarebreezebar_delhi",
  instagramUrl: "https://www.instagram.com/amaarebreezebar_delhi/",
  mapsQuery: "Amaare Breeze Bar, Adchini, New Delhi",
  description:
    "A contemporary dining destination in Adchini, South Delhi bringing together thoughtfully crafted food, refreshing drinks, and an inviting atmosphere.",
};

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=15&output=embed`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/franchise", label: "Franchise" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

// Dish captions describe what's in each photo — swap in the real menu names.
export const kitchen = [
  { image: "/images/menu/dimsum.jpg", name: "Dim Sum", note: "Steamed, served with three dips" },
  { image: "/images/menu/skewers.jpg", name: "Glazed Skewers", note: "Off the grill, sesame-finished" },
  { image: "/images/menu/chaat-plate.jpg", name: "Layered Chaat", note: "Crisp pastry, chickpeas, pomegranate" },
  { image: "/images/menu/sushi.jpg", name: "Avocado Roll", note: "Pickled ginger, wasabi, soy" },
  { image: "/images/menu/lace-dumpling.jpg", name: "Lace Dumplings", note: "Pan-crisped, golden lace" },
  { image: "/images/menu/ribs.jpg", name: "Sticky Ribs", note: "Glazed, charred, spiced" },
];

export const bar = [
  { image: "/images/menu/negroni.jpg", alt: "A ruby-red cocktail on an Amaare coaster" },
  { image: "/images/menu/golden-coupe.jpg", alt: "A golden cocktail in a coupe glass" },
  { image: "/images/menu/paprika-gin.jpg", alt: "A spiced-rim cocktail on an Amaare coaster" },
  { image: "/images/menu/matcha-sour.jpg", alt: "A green cocktail on a carved stone ledge" },
  { image: "/images/menu/amber-old-fashioned.jpg", alt: "An amber cocktail with a caramel garnish" },
  { image: "/images/menu/pink-cocktail.jpg", alt: "A pink cocktail beside a sculpture in the garden" },
];

export const nearby =["Hauz Khas", "Green Park", "Malviya Nagar", "Saket", "Mehrauli", "Aurobindo Marg"];

export const events = [
  { when: "[DATE] · [TIME]", name: "[Event Name]", text: "[One-line event description]", image: "/images/event-bar.jpg" },
  { when: "[DATE] · [TIME]", name: "[Event Name]", text: "[One-line event description]", image: "/images/event-arches.jpg" },
  { when: "[DATE] · [TIME]", name: "[Event Name]", text: "[One-line event description]", image: "/images/event-glass.jpg" },
];

export type Post = { slug: string; tag: string; title: string; excerpt: string; image: string };

export const posts: Post[] = [
  {
    slug: "best-restaurants-in-south-delhi-for-dinner",
    tag: "Dining",
    title: "Best Restaurants in South Delhi for Dinner",
    excerpt: "Where to book when you want good food, a great room and an evening that doesn't rush.",
    image: "/images/menu/sushi.jpg",
  },
  {
    slug: "best-date-night-restaurants-in-south-delhi",
    tag: "Date Night",
    title: "Best Date Night Restaurants in South Delhi",
    excerpt: "Candlelight, cocktails and tables made for two.",
    image: "/images/menu/pink-cocktail.jpg",
  },
  {
    slug: "where-to-celebrate-a-birthday-in-south-delhi",
    tag: "Celebrations",
    title: "Where to Celebrate a Birthday in South Delhi",
    excerpt: "Big group or a quiet toast — places that make the day feel like an occasion.",
    image: "/images/menu/golden-coupe.jpg",
  },
  {
    slug: "best-restaurants-near-hauz-khas",
    tag: "Neighbourhood",
    title: "Best Restaurants Near Hauz Khas",
    excerpt: "Just minutes from the village, a few tables worth the short drive.",
    image: "/images/arches-night.jpg",
  },
  {
    slug: "dining-experiences-to-try-in-south-delhi",
    tag: "Food",
    title: "Dining Experiences to Try in South Delhi",
    excerpt: "Plates, pours and rooms that turn dinner into an experience.",
    image: "/images/menu/chaat-plate.jpg",
  },
  {
    slug: "best-places-for-dinner-with-friends-in-south-delhi",
    tag: "Friends",
    title: "Best Places for a Dinner With Friends in South Delhi",
    excerpt: "Sharing plates, long tables and music that keeps the conversation going.",
    image: "/images/menu/dimsum.jpg",
  },
];

export const faqs = [
  { q: "Where is Amaare Breeze Bar located?", a: "Amaare Breeze Bar is located in Adchini, South Delhi." },
  {
    q: "What kind of dining experience does Amaare offer?",
    a: "Amaare offers a contemporary dining experience with thoughtfully crafted food, drinks and an inviting atmosphere.",
  },
  { q: "Does Amaare serve cocktails?", a: "Yes, Amaare offers a selection of cocktails and drinks to complement the dining experience." },
  { q: "Is Amaare suitable for celebrations?", a: "Amaare can be a setting for birthdays, gatherings and other special occasions." },
  { q: "Can I reserve a table at Amaare?", a: "Yes. Guests can reserve a table through the available booking options." },
];
