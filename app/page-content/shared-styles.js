// Shared 7-line FOUC-guard for the SplitType/GSAP letter animations,
// identical (verbatim) across all three pages.
export const textSplitStyle = "\n[text-split] {opacity: 0;}\nhtml.w-editor [text-split] {opacity: 1;}\n\n.word {\n\toverflow: hidden;\n  padding-bottom: 0.1em;\n  margin-bottom: -0.1em;\n  transform-origin: bottom;\n}\n";
