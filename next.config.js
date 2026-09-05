/** @type {import('next').NextConfig} */
const nextConfig = {
  // No Content-Security-Policy here on purpose: this site loads Webflow's
  // own runtime, GSAP, jQuery, Mailchimp, YouTube embeds, GA4, and the FB
  // pixel from several third-party origins. A strict CSP would break all of
  // that and needs to be scoped deliberately, not bolted on as a checkbox.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
