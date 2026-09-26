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
  ticketUrl: 'https://rzp.io/rzp/Z9K0Gw0D',
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/hometownfestival/',
};

// Next.js's metadata merging replaces the whole `openGraph`/`twitter` object
// per route rather than deep-merging nested fields - so every page.js that
// defines its own openGraph/twitter must repeat `images` explicitly, or it
// silently loses the one set in layout.js.
export const OG_IMAGE = { url: '/images/feel-2026-02.jpeg', width: 1599, height: 899, alt: EVENT.name };

// Meta (Facebook) Pixel. One ID, used by both the <script> init and the
// <noscript> fallback in app/layout.js so the two can't drift apart.
export const FB_PIXEL_ID = '1126047696662150';

export const FB_PIXEL_INIT = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');`;

// Book Stall pop-up hands off to this WhatsApp number (country code, no +).
export const STALL_WHATSAPP = '917993796285';
