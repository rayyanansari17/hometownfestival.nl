import Script from 'next/script';
import { algemeneVoorwaardenBodyHtml } from '../page-content/algemene-voorwaarden-body';
import { algemeneVoorwaardenScripts } from '../page-content/algemene-voorwaarden-scripts';
import { algemeneVoorwaardenMeta } from '../page-content/algemene-voorwaarden-meta';
import { SITE_URL, OG_IMAGE } from '../../lib/site';
import ScriptChain from '../ScriptChain';

export const metadata = {
  title: algemeneVoorwaardenMeta.title,
  description: algemeneVoorwaardenMeta.metaDescription,
  alternates: { canonical: `${SITE_URL}/algemene-voorwaarden` },
  openGraph: {
    title: algemeneVoorwaardenMeta.ogTitle,
    description: algemeneVoorwaardenMeta.ogDescription,
    images: [OG_IMAGE],
  },
  twitter: {
    title: algemeneVoorwaardenMeta.twitterTitle,
    description: algemeneVoorwaardenMeta.twitterDescription,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: false,
  },
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <Script
        id="wf-page-attr"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.setAttribute('data-wf-page','${algemeneVoorwaardenMeta.wfPage}')`,
        }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: algemeneVoorwaardenBodyHtml }}
        suppressHydrationWarning
      />
      <ScriptChain scripts={algemeneVoorwaardenScripts} />
    </>
  );
}
