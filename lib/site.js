// Single source of truth for the site's public URL and the event's core
// facts, so SEO metadata (canonicals, sitemap, robots, JSON-LD) can't drift
// out of sync with each other.
//
// To point the whole site at a real domain once one exists, set
// NEXT_PUBLIC_SITE_URL in Vercel's project settings - no code change needed.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://wwwhometownfestivalnl.vercel.app'
).replace(/\/$/, '');

export const EVENT = {
  name: 'FEEL 2026',
  description: "India's largest mental wellness event",
  startDate: '2026-10-10T11:00:00+05:30',
  endDate: '2026-10-10T21:00:00+05:30',
  venueName: 'Gachibowli Stadium',
  city: 'Hyderabad',
  region: 'Telangana',
  country: 'IN',
  ticketUrl: 'https://shop.simpleticket.eu/event/GP41MdAO',
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/hometownfestival/',
};

// Next.js's metadata merging replaces the whole `openGraph`/`twitter` object
// per route rather than deep-merging nested fields - so every page.js that
// defines its own openGraph/twitter must repeat `images` explicitly, or it
// silently loses the one set in layout.js.
export const OG_IMAGE = { url: '/images/feel-2026-02.jpeg', width: 1599, height: 899, alt: EVENT.name };
