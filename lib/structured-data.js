import { SITE_URL, EVENT, SOCIAL } from './site';

// Kept as plain text here (not parsed from the Webflow body HTML) so the
// FAQPage schema can't silently break if that markup's structure changes -
// keep this in sync with the FAQ answers in app/page-content/home-body.js.
const FAQ_ITEMS = [
  [
    'Where can I park my car?',
    'Parking is available on site. Follow the signage as you approach the venue, and volunteers will guide you to the nearest parking area.',
  ],
  [
    'What do you arrange if it rains?',
    'FEEL has covered zones for the key activities. In case of heavy rain, sessions will be moved indoors or rescheduled, and updates will be shared on our social pages.',
  ],
  [
    'Is this the last FEEL?',
    'Not at all. FEEL has run every year since 2021, and this edition marks another step forward for the movement. We plan to keep it going.',
  ],
  [
    'What do the tickets cost?',
    'FEEL tickets are priced at 99, keeping the event accessible for everyone. Some workshops or one on one sessions may need prior registration.',
  ],
  [
    'What is the Art and Games corner?',
    'It is our space for finger painting, creative expression, and light hearted games, designed to help you relax and unwind through play.',
  ],
  [
    'Is FEEL open to all ages?',
    'Yes, FEEL welcomes students, professionals, and families alike. Some counselling sessions may be recommended for specific age groups.',
  ],
  [
    'Can I volunteer at FEEL?',
    'Yes, we welcome volunteers each year. Reach out through our contact page or social channels to sign up.',
  ],
  [
    'How do I book a counselling slot?',
    'Anonymous counselling booths are available on a walk in basis, though early registration online is recommended to avoid waiting.',
  ],
  [
    'Where and when is FEEL held?',
    `FEEL 2026 will be held on Saturday 10 October, 11am to 9pm, at Grand Food Festival, ${EVENT.venueName}, ${EVENT.city}. Check our website or social pages for updates closer to the date.`,
  ],
  [
    'Are there food stalls?',
    'Yes, in partnership with Grand Food Fest, you can grab a bite and refuel between sessions.',
  ],
  [
    'An unanswered question?',
    'Reach out to us directly through our contact page, and our team will get back to you.',
  ],
];

export function getHomeStructuredData() {
  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: EVENT.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo/feel-logo.webp`,
    sameAs: [SOCIAL.instagram],
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: EVENT.name,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };

  const event = {
    '@type': 'Event',
    '@id': `${SITE_URL}/#event`,
    name: EVENT.name,
    description: `${EVENT.name} - ${EVENT.description}`,
    startDate: EVENT.startDate,
    endDate: EVENT.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: EVENT.venueName,
      address: {
        '@type': 'PostalAddress',
        addressLocality: EVENT.city,
        addressRegion: EVENT.region,
        addressCountry: EVENT.country,
      },
    },
    image: [`${SITE_URL}/images/feel-2026-02.jpeg`],
    organizer: { '@id': `${SITE_URL}/#organization` },
    offers: {
      '@type': 'Offer',
      url: EVENT.ticketUrl,
      availability: 'https://schema.org/InStock',
    },
  };

  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, event, faqPage],
  };
}
