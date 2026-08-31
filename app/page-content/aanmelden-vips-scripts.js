// Ordered next/script descriptors for aanmelden-vips: Webflow-embedded body scripts
// (Mailchimp validation, page-specific embed blocks) followed by the
// fixed end-of-body library chain, in the exact order they appear in
// the original source HTML.
export const aanmeldenVipsScripts = [
  {
    "id": "aanmelden-vips-embed-0",
    "src": "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js",
    "type": "text/javascript",
    "strategy": "afterInteractive"
  },
  {
    "id": "aanmelden-vips-embed-1",
    "type": "text/javascript",
    "content": "(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='MMERGE5';ftypes[5]='text';fnames[6]='MMERGE6';ftypes[6]='text';fnames[7]='MMERGE7';ftypes[7]='text';fnames[8]='MMERGE8';ftypes[8]='text';fnames[9]='MMERGE9';ftypes[9]='text';fnames[10]='MMERGE10';ftypes[10]='text';}(jQuery));var $mcj = jQuery.noConflict(true);",
    "strategy": "afterInteractive"
  },
  {
    "id": "aanmelden-vips-chain-2",
    "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6405b63d5dbbf416845010e8",
    "type": "text/javascript",
    "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "aanmelden-vips-chain-3",
    "src": "https://cdn.prod.website-files.com/6405b63d5dbbf416845010e8/js/hometownfestival-dev.schunk.36b8fb49256177c8.js",
    "type": "text/javascript",
    "integrity": "sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "aanmelden-vips-chain-4",
    "src": "https://cdn.prod.website-files.com/6405b63d5dbbf416845010e8/js/hometownfestival-dev.schunk.6bd949924d1f42da.js",
    "type": "text/javascript",
    "integrity": "sha384-hckCjEgKNIblEAyKDYBUj/77C9DCdk3mR/xv3Kq2/7e2VusAA5x46BIRU9o8fucy",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "aanmelden-vips-chain-5",
    "src": "https://cdn.prod.website-files.com/6405b63d5dbbf416845010e8/js/hometownfestival-dev.c842a149.6457d980a7aa1278.js",
    "type": "text/javascript",
    "integrity": "sha384-rWv3jck3fLikE6SmESO1BHrl8SoC/BwZWe6EWVx1jqF4uLsvGVaZCBtDoIfL7yAV",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "aanmelden-vips-chain-6",
    "content": "window.Userback = window.Userback || {};\n    Userback.access_token = '38306|79385|z0STPwlmqAf1rB51YZLG8Z2bb';\n    (function(d) {\n        var s = d.createElement('script');s.async = true;\n        s.src = 'https://static.userback.io/widget/v1.js';\n        (d.head || d.body).appendChild(s);\n    })(document);",
    "strategy": "afterInteractive"
  },
  {
    "id": "aanmelden-vips-chain-7",
    "src": "https://unpkg.com/split-type",
    "strategy": "afterInteractive"
  },
  {
    "id": "aanmelden-vips-chain-8",
    "src": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js",
    "strategy": "afterInteractive"
  },
  {
    "id": "aanmelden-vips-chain-9",
    "src": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js",
    "strategy": "afterInteractive"
  },
  {
    "id": "aanmelden-vips-chain-10",
    "content": "(function() {\n  function run(event) {\n  // Split text into spans\n  let typeSplit = new SplitType(\"[text-split]\", {\n    types: \"words, chars\",\n    tagName: \"span\"\n  });\n\n  // Link timelines to scroll position\n  function createScrollTrigger(triggerElement, timeline) {\n    // Reset tl when scroll out of view past bottom of screen\n    ScrollTrigger.create({\n      trigger: triggerElement,\n      start: \"top bottom\",\n      onLeaveBack: () => {\n        timeline.progress(0);\n        timeline.pause();\n      }\n    });\n    // Play tl when scrolled into view (60% from top of screen)\n    ScrollTrigger.create({\n      trigger: triggerElement,\n      start: \"top 60%\",\n      onEnter: () => timeline.play()\n    });\n  }\n\n  $(\"[letters-slide-up]\").each(function (index) {\n    let tl = gsap.timeline({ paused: true });\n    tl.from($(this).find(\".char\"), { yPercent: 100, duration: 0.5, ease: \"power1.out\", stagger: { amount: 0.6 } });\n    createScrollTrigger($(this), tl);\n  });\n\n  $(\"[letters-fade-in]\").each(function (index) {\n    let tl = gsap.timeline({ paused: true });\n    tl.from($(this).find(\".char\"), { opacity: 0, duration: 0.2, ease: \"power1.out\", stagger: { amount: 0.8 } });\n    createScrollTrigger($(this), tl);\n  });\n\n  // Avoid flash of unstyled content\n  gsap.set(\"[text-split]\", { opacity: 1 });\n  }\n  if (document.readyState === 'loading') { window.addEventListener('DOMContentLoaded', run); } else { run(); }\n})();",
    "strategy": "afterInteractive"
  },
  {
    "id": "aanmelden-vips-chain-11",
    "src": "//cdn.rawgit.com/hilios/jQuery.countdown/2.2.0/dist/jquery.countdown.min.js",
    "strategy": "afterInteractive"
  },
  {
    "id": "aanmelden-vips-chain-12",
    "content": "// countdown\n  var startDate = $('.final-date').text();\n  $('#getting-started').countdown(startDate, function(event) {\n    $('#event_day').text(event.strftime('%D'));\n    $('#event_hours').text(event.strftime('%H'));\n    $('#event_minute').text(event.strftime('%M'));\n    $('#event_sec').text(event.strftime('%S'));\n  });",
    "strategy": "afterInteractive"
  }
];
