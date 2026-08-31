import Script from 'next/script';

/**
 * Renders an ordered list of next/script descriptors. next/script preserves
 * declaration order for scripts sharing the same strategy, which is what
 * lets this reproduce the source site's synchronous top-to-bottom script
 * execution order after hydration.
 */
export default function ScriptChain({ scripts }) {
  return scripts.map((s) => {
    const props = {
      id: s.id,
      strategy: s.strategy,
    };
    if (s.src) props.src = s.src;
    if (s.type) props.type = s.type;
    if (s.integrity) props.integrity = s.integrity;
    if (s.crossOrigin) props.crossOrigin = s.crossOrigin;
    if (s.content) props.dangerouslySetInnerHTML = { __html: s.content };
    return <Script key={s.id} {...props} />;
  });
}
