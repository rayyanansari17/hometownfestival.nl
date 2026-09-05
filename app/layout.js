import Script from 'next/script';
import { sharedHead } from './page-content/shared-head';
import { textSplitStyle } from './page-content/shared-styles';
import NightSkyBackground from './NightSkyBackground';
import ChatWidget from './ChatWidget';
import './globals.css';

export const metadata = {
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
          dangerouslySetInnerHTML={{ __html: sharedHead.fbqInit }}
        />
        <Script src={sharedHead.gtagSrc} strategy="afterInteractive" />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: sharedHead.gtagInline }}
        />
        <Script
          id="finsweet-linkblockedit"
          src={sharedHead.finsweetLinkblockedit}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
