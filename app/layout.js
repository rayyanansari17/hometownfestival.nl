import Script from 'next/script';
import { sharedHead } from './page-content/shared-head';
import { textSplitStyle } from './page-content/shared-styles';
import NightSkyBackground from './NightSkyBackground';
import ChatWidget from './ChatWidget';
import BookStall from './BookStall';
import { SITE_URL, EVENT, OG_IMAGE, FB_PIXEL_ID, FB_PIXEL_INIT } from '../lib/site';
import './globals.css';

const defaultDescription =
  "FEEL 2026 is India's largest mental wellness event - a day of therapy, art, games, and community in Hyderabad. Saturday 10 October 2026.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${EVENT.name}`,
    default: `${EVENT.name} - ${EVENT.description}`,
  },
  description: defaultDescription,
  openGraph: {
    siteName: EVENT.name,
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    title: `${EVENT.name} - ${EVENT.description}`,
    description: defaultDescription,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${EVENT.name} - ${EVENT.description}`,
    description: defaultDescription,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-wf-domain={sharedHead.wfDomain}
      data-wf-site={sharedHead.wfSite}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          as="image"
          type="image/avif"
          href="https://cdn.prod.website-files.com/6405b63d5dbbf416845010e8/6800d40babbd178e6a8410ee_HTF_blauwelucht.avif"
        />
        <link href={sharedHead.sharedCss.href} rel="preconnect" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link
          href={sharedHead.sharedCss.href}
          rel="stylesheet"
          type="text/css"
          integrity={sharedHead.sharedCss.integrity}
          crossOrigin="anonymous"
        />
        <style dangerouslySetInnerHTML={{ __html: textSplitStyle }} />

        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />
        <Script
          id="webfont-load"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: sharedHead.webfontLoadCall }}
        />
        <Script
          id="wmod-js-touch"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: sharedHead.wmodIife }}
        />
      </head>
      <body suppressHydrationWarning>
        <div
          style={{ position: 'fixed', inset: 0, zIndex: -20, overflow: 'hidden' }}
          aria-hidden
        >
          <NightSkyBackground />
          <div className="bg-paper-texture" style={{ position: 'absolute', inset: 0 }} />
        </div>

        {children}
        <ChatWidget />
        <BookStall />

        <Script
          id="footer-chat-trigger-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function() {
  function bind() {
    var trigger = document.getElementById('footer-chat-trigger');
    if (!trigger || trigger.dataset.chatBound) return;
    trigger.dataset.chatBound = 'true';
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('feel-chat-toggle'));
    });
  }
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();`,
          }}
        />

        <Script
          id="fbq-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: FB_PIXEL_INIT }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <Script
          id="finsweet-linkblockedit"
          src={sharedHead.finsweetLinkblockedit}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
