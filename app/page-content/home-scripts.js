// Ordered next/script descriptors for home: Webflow-embedded body scripts
// (Mailchimp validation, page-specific embed blocks) followed by the
// fixed end-of-body library chain, in the exact order they appear in
// the original source HTML.
export const homeScripts = [
  {
    "id": "home-embed-0",
    "src": "https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js",
    "type": "text/javascript",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-embed-1",
    "type": "text/javascript",
    "content": "(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='MMERGE5';ftypes[5]='text';fnames[6]='MMERGE6';ftypes[6]='text';fnames[7]='MMERGE7';ftypes[7]='text';fnames[8]='MMERGE8';ftypes[8]='text';fnames[9]='MMERGE9';ftypes[9]='text';fnames[10]='MMERGE10';ftypes[10]='text';}(jQuery));var $mcj = jQuery.noConflict(true);",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-embed-2",
    "src": "https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js",
    "type": "text/javascript",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-embed-3",
    "type": "text/javascript",
    "content": "(function($) {window.fnames = new Array(); window.ftypes = new\nArray();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='MMERGE5';ftypes[5]='text';fnames[6]='MMERGE6';ftypes[6]='text';fnames[7]='MMERGE7';ftypes[7]='text';fnames[8]='MMERGE8';ftypes[8]='text';fnames[9]='MMERGE9';ftypes[9]='text';fnames[10]='MMERGE10';ftypes[10]='text';}(jQuery));var $mcj = jQuery.noConflict(true);",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-embed-4",
    "type": "text/javascript",
    "content": "(function() {\n  function run() {\nconst smsPhoneFields = document.querySelectorAll('[id^=\"country-select-\"]');\nsmsPhoneFields.forEach(function(dropdown) {\nconst fieldName = dropdown?.id.replace('country-select-', '');\ninitializeSmsPhoneDropdown(fieldName);\n});\n  }\n  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', run); } else { run(); }\n})();",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-embed-5",
    "content": "(function() {\n  function run() {\n    if (!window.gsap || !window.ScrollTrigger) return;\n    gsap.registerPlugin(ScrollTrigger);\n\n    const items = document.querySelectorAll('.st-26_item-cont');\n\n    // Iets getemperd t.o.v. vorige versie\n    const config = [\n      { base: -3, amplitude:  5 },  // item 1\n      { base:  6, amplitude: -4 },  // item 2 (tegengesteld)\n      { base: -3, amplitude:  4 },  // item 3\n      { base:  6, amplitude: -6 },  // item 4 (tegengesteld, iets forser)\n      { base: -3, amplitude:  7 }   // item 5 (meeste swing)\n    ];\n\n    ScrollTrigger.matchMedia({\n      // Tablet & desktop: scroll-rotatie aan\n      '(min-width: 768px)': function () {\n        items.forEach((el, i) => {\n          const cfg = config[i] || { base: (i % 2 === 0 ? -3 : 6), amplitude: 5 };\n\n          gsap.set(el, {\n            rotation: cfg.base - cfg.amplitude,\n            transformOrigin: '50% 50%'\n          });\n\n          gsap.to(el, {\n            rotation: cfg.base + cfg.amplitude,\n            ease: 'none',\n            scrollTrigger: {\n              trigger: el,\n              start: 'top bottom',\n              end: 'bottom top',\n              scrub: 1\n            }\n          });\n        });\n      },\n\n      // Mobiel: geen scroll-animatie, basis-rotatie uit Webflow blijft intact\n      '(max-width: 767px)': function () {\n        items.forEach((el) => {\n          gsap.set(el, { clearProps: 'rotation,transform' });\n        });\n      }\n    });\n\n    ScrollTrigger.refresh();\n  }\n  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', run); } else { run(); }\n})();",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-6",
    "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6405b63d5dbbf416845010e8",
    "type": "text/javascript",
    "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-7",
    "src": "https://cdn.prod.website-files.com/6405b63d5dbbf416845010e8/js/hometownfestival-dev.schunk.36b8fb49256177c8.js",
    "type": "text/javascript",
    "integrity": "sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-8",
    "src": "https://cdn.prod.website-files.com/6405b63d5dbbf416845010e8/js/hometownfestival-dev.schunk.6bd949924d1f42da.js",
    "type": "text/javascript",
    "integrity": "sha384-hckCjEgKNIblEAyKDYBUj/77C9DCdk3mR/xv3Kq2/7e2VusAA5x46BIRU9o8fucy",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-9",
    "src": "https://cdn.prod.website-files.com/6405b63d5dbbf416845010e8/js/hometownfestival-dev.schunk.7a5bf95df786b33a.js",
    "type": "text/javascript",
    "integrity": "sha384-ca89pRyy0+8edz5ZHnOFuQawGLQWSur2NQ/DoyUERc8BViMHwZE53/LYKMKWP04e",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-10",
    "src": "https://cdn.prod.website-files.com/6405b63d5dbbf416845010e8/js/hometownfestival-dev.schunk.f919141e3448519b.js",
    "type": "text/javascript",
    "integrity": "sha384-0dpL+rRIdWgp7t4mWakP0H+6RU4n3g9xP4SmJZle+xurEqe4cffHHB2MF1N5SqpQ",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-11",
    "src": "https://cdn.prod.website-files.com/6405b63d5dbbf416845010e8/js/hometownfestival-dev.2b84117e.faf0a80bdb5fd934.js",
    "type": "text/javascript",
    "integrity": "sha384-hMD06Iy3mBt9kp51NBPkmx5sqr1cMSjRJ72CgI1kqHD2AEuQ2lvS9Pg9MSwLxy0S",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-12",
    "content": "window.Userback = window.Userback || {};\n    Userback.access_token = '38306|79385|z0STPwlmqAf1rB51YZLG8Z2bb';\n    (function(d) {\n        var s = d.createElement('script');s.async = true;\n        s.src = 'https://static.userback.io/widget/v1.js';\n        (d.head || d.body).appendChild(s);\n    })(document);",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-13",
    "src": "https://unpkg.com/split-type",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-14",
    "src": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-15",
    "src": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-16",
    "content": "(function() {\n  function run(event) {\n  // Split text into spans\n  let typeSplit = new SplitType(\"[text-split]\", {\n    types: \"words, chars\",\n    tagName: \"span\"\n  });\n\n  // Link timelines to scroll position\n  function createScrollTrigger(triggerElement, timeline) {\n    // Reset tl when scroll out of view past bottom of screen\n    ScrollTrigger.create({\n      trigger: triggerElement,\n      start: \"top bottom\",\n      onLeaveBack: () => {\n        timeline.progress(0);\n        timeline.pause();\n      }\n    });\n    // Play tl when scrolled into view (60% from top of screen)\n    ScrollTrigger.create({\n      trigger: triggerElement,\n      start: \"top 60%\",\n      onEnter: () => timeline.play()\n    });\n  }\n\n  $(\"[letters-slide-up]\").each(function (index) {\n    let tl = gsap.timeline({ paused: true });\n    tl.from($(this).find(\".char\"), { yPercent: 100, duration: 0.5, ease: \"power1.out\", stagger: { amount: 0.6 } });\n    createScrollTrigger($(this), tl);\n  });\n\n  $(\"[letters-fade-in]\").each(function (index) {\n    let tl = gsap.timeline({ paused: true });\n    tl.from($(this).find(\".char\"), { opacity: 0, duration: 0.2, ease: \"power1.out\", stagger: { amount: 0.8 } });\n    createScrollTrigger($(this), tl);\n  });\n\n  // Avoid flash of unstyled content\n  gsap.set(\"[text-split]\", { opacity: 1 });\n  }\n  if (document.readyState === 'loading') { window.addEventListener('DOMContentLoaded', run); } else { run(); }\n})();",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-17",
    "src": "https://cdn.rawgit.com/hilios/jQuery.countdown/2.2.0/dist/jquery.countdown.min.js",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-18",
    "content": "// countdown\n  var startDate = $('.final-date').text();\n  $('#getting-started').countdown(startDate, function(event) {\n    $('#event_day').text(event.strftime('%D'));\n    $('#event_hours').text(event.strftime('%H'));\n    $('#event_minute').text(event.strftime('%M'));\n    $('#event_sec').text(event.strftime('%S'));\n  });",
    "strategy": "afterInteractive"
  },
  {
    "id": "hero-bg-video-lazy-load",
    "content": "(function() {\n  function loadBgVideo() {\n    var container = document.getElementById('hero-bg-video');\n    if (!container || container.querySelector('iframe')) return;\n    var iframe = document.createElement('iframe');\n    iframe.src = 'https://www.youtube.com/embed/ileqZkXqbAI?autoplay=1&mute=1&loop=1&playlist=ileqZkXqbAI&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1';\n    iframe.style.cssText = 'position:absolute;top:50%;left:50%;width:177.78vh;height:100vh;min-width:100%;min-height:56.25vw;transform:translate(-50%,-50%);pointer-events:none;z-index:-100;border:0';\n    iframe.setAttribute('allow', 'autoplay; encrypted-media');\n    iframe.setAttribute('title', 'HomeTown Festival background video');\n    container.appendChild(iframe);\n  }\n  if (document.readyState === 'loading') {\n    window.addEventListener('DOMContentLoaded', loadBgVideo);\n  } else {\n    loadBgVideo();\n  }\n})();",
    "strategy": "afterInteractive"
  }
];
