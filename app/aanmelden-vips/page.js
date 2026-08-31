import Script from 'next/script';
import { aanmeldenVipsBodyHtml } from '../page-content/aanmelden-vips-body';
import { aanmeldenVipsScripts } from '../page-content/aanmelden-vips-scripts';
import { aanmeldenVipsMeta } from '../page-content/aanmelden-vips-meta';
import ScriptChain from '../ScriptChain';

export const metadata = {
  title: aanmeldenVipsMeta.title,
  openGraph: {
    title: aanmeldenVipsMeta.ogTitle,
  },
  twitter: {
    title: aanmeldenVipsMeta.twitterTitle,
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
