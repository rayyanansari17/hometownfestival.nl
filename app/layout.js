import Script from 'next/script';
import { sharedHead } from './page-content/shared-head';
import { textSplitStyle } from './page-content/shared-styles';
import PersistentTicket from './PersistentTicket';
import GardenFooter from './GardenFooter';
import './globals.css';

export const metadata = {
  icons: {
    icon: sharedHead.favicon,
    apple: sharedHead.appleTouch,
  },
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
        <PersistentTicket />
        {children}
        <GardenFooter />

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
