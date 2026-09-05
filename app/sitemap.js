import { SITE_URL } from '../lib/site';

// /aanmelden-vips and /algemene-voorwaarden are both marked noindex (see
// their page.js metadata), so they're deliberately left out here - listing
// a noindex URL in the sitemap is a contradictory signal search engines
// flag. Add them back if that changes.
export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
