import Script from 'next/script';
import { aanmeldenVipsBodyHtml } from '../page-content/aanmelden-vips-body';
import { aanmeldenVipsScripts } from '../page-content/aanmelden-vips-scripts';
import { aanmeldenVipsMeta } from '../page-content/aanmelden-vips-meta';
import { SITE_URL, OG_IMAGE } from '../../lib/site';
import ScriptChain from '../ScriptChain';

export const metadata = {
  title: aanmeldenVipsMeta.title,
  description: aanmeldenVipsMeta.metaDescription,
  alternates: { canonical: `${SITE_URL}/aanmelden-vips` },
  openGraph: {
    title: aanmeldenVipsMeta.ogTitle,
    description: aanmeldenVipsMeta.ogDescription,
    images: [OG_IMAGE],
  },
  twitter: {
    title: aanmeldenVipsMeta.twitterTitle,
    description: aanmeldenVipsMeta.twitterDescription,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: false,
  },
};

export default function AanmeldenVipsPage() {
  return (
    <>
      <Script
        id="wf-page-attr"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.setAttribute('data-wf-page','${aanmeldenVipsMeta.wfPage}')`,
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: aanmeldenVipsBodyHtml }} suppressHydrationWarning />
      <ScriptChain scripts={aanmeldenVipsScripts} />
    </>
  );
}
