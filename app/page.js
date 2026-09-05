import Script from 'next/script';
import { homeBodyHtml } from './page-content/home-body';
import { homeScripts } from './page-content/home-scripts';
import { homeMeta } from './page-content/home-meta';
import { homeIx2Style } from './page-content/home-ix2-style';
import { sharedHead } from './page-content/shared-head';
import { SITE_URL, OG_IMAGE } from '../lib/site';
import { getHomeStructuredData } from '../lib/structured-data';
import ScriptChain from './ScriptChain';

export const metadata = {
  title: homeMeta.title,
  description: homeMeta.metaDescription,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: homeMeta.ogTitle,
    description: homeMeta.ogDescription,
    type: homeMeta.ogType,
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: homeMeta.twitterCard,
    title: homeMeta.twitterTitle,
    description: homeMeta.twitterDescription,
    images: [OG_IMAGE.url],
  },
};

export default function HomePage() {
  const structuredData = getHomeStructuredData();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <style dangerouslySetInnerHTML={{ __html: homeIx2Style }} />
      <Script
        id="wf-page-attr"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.setAttribute('data-wf-page','${homeMeta.wfPage}')`,
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: homeBodyHtml }} suppressHydrationWarning />
      <Script
        id="finsweet-scrolldisable"
        src={sharedHead.finsweetScrolldisable}
        strategy="afterInteractive"
      />
      <ScriptChain scripts={homeScripts} />
    </>
  );
}
