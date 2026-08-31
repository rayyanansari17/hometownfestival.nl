import Script from 'next/script';
import { algemeneVoorwaardenBodyHtml } from '../page-content/algemene-voorwaarden-body';
import { algemeneVoorwaardenScripts } from '../page-content/algemene-voorwaarden-scripts';
import { algemeneVoorwaardenMeta } from '../page-content/algemene-voorwaarden-meta';
import ScriptChain from '../ScriptChain';

export const metadata = {
  title: algemeneVoorwaardenMeta.title,
  openGraph: {
    title: algemeneVoorwaardenMeta.ogTitle,
  },
  twitter: {
    title: algemeneVoorwaardenMeta.twitterTitle,
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
