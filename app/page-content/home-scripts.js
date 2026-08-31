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
    "content": "(function($) {window.fnames = new Array(); window.ftypes = new\nArray();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]\n* Translated default messages for the $ validation plugin.\n* Locale: NL\n*/\n$.extend($.validator.messages, {\nrequired: \"Dit is een verplicht veld.\",\nremote: \"Controleer dit veld.\",\nemail: \"Vul hier een geldig e-mailadres in.\",\nurl: \"Vul hier een geldige URL in.\",\ndate: \"Vul hier een geldige datum in.\",\ndateISO: \"Vul hier een geldige datum in (ISO-formaat).\",\nnumber: \"Vul hier een geldig getal in.\",\ndigits: \"Vul hier alleen getallen in.\",\ncreditcard: \"Vul hier een geldig creditcardnummer in.\",\nequalTo: \"Vul hier dezelfde waarde in.\",\naccept: \"Vul hier een waarde in met een geldige extensie.\",\nmaxlength: $.validator.format(\"Vul hier maximaal {0} tekens in.\"),\nminlength: $.validator.format(\"Vul hier minimaal {0} tekens in.\"),\nrangelength: $.validator.format(\"Vul hier een waarde in van minimaal {0} en maximaal {1} tekens.\"),\nrange: $.validator.format(\"Vul hier een waarde in van minimaal {0} en maximaal {1}.\"),\nmax: $.validator.format(\"Vul hier een waarde in kleiner dan of gelijk aan {0}.\"),\nmin: $.validator.format(\"Vul hier een waarde in groter dan of gelijk aan {0}.\")\n});}(jQuery));var $mcj = jQuery.noConflict(true);\n// SMS Phone Multi-Country Functionality\nif(!window.MC) {\nwindow.MC = {};\n}\nwindow.MC.smsPhoneData = {\ndefaultCountryCode: 'NL',\nprograms: [],\nsmsProgramDataCountryNames: []\n};\nfunction getCountryUnicodeFlag(countryCode) {\nreturn countryCode.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))\n};\n// HTML sanitization function to prevent XSS\nfunction sanitizeHtml(str) {\nif (typeof str !== 'string') return '';\nreturn str\n.replace(/&/g, '&amp;')\n.replace(/</g, '&lt;')\n.replace(/>/g, '&gt;')\n.replace(/\"/g, '&quot;')\n.replace(/'/g, '&#x27;')\n.replace(/\\//g, '&#x2F;');\n}\n// URL sanitization function to prevent javascript: and data: URLs\nfunction sanitizeUrl(url) {\nif (typeof url !== 'string') return '';\nconst trimmedUrl = url.trim().toLowerCase();\nif (trimmedUrl.startsWith('javascript:') || trimmedUrl.startsWith('data:') || trimmedUrl.startsWith('vbscript:')) {\nreturn '#';\n}\n\nreturn url;\n}\nconst getBrowserLanguage = () => {\nif (!window?.navigator?.language?.split('-')[1]) {\nreturn window?.navigator?.language?.toUpperCase();\n}\nreturn window?.navigator?.language?.split('-')[1];\n};\nfunction getDefaultCountryProgram(defaultCountryCode, smsProgramData) {\nif (!smsProgramData || smsProgramData.length === 0) {\nreturn null;\n}\nconst browserLanguage = getBrowserLanguage();\nif (browserLanguage) {\nconst foundProgram = smsProgramData.find(\n(program) => program?.countryCode === browserLanguage,\n);\nif (foundProgram) {\nreturn foundProgram;\n}\n}\nif (defaultCountryCode) {\nconst foundProgram = smsProgramData.find(\n(program) => program?.countryCode === defaultCountryCode,\n);\nif (foundProgram) {\nreturn foundProgram;\n}\n}\nreturn smsProgramData[0];\n}\nfunction updateSmsLegalText(countryCode, fieldName) {\nif (!countryCode || !fieldName) {\nreturn;\n}\nconst programs = window?.MC?.smsPhoneData?.programs;\nif (!programs || !Array.isArray(programs)) {\nreturn;\n}\nconst program = programs.find(program => program?.countryCode === countryCode);\nif (!program || !program.requiredTemplate) {\nreturn;\n}\nconst legalTextElement = document.querySelector('#legal-text-' + fieldName);\nif (!legalTextElement) {\nreturn;\n}\n// Remove HTML tags and clean up the text\nconst divRegex = new RegExp('</?[div][^>]*>', 'gi');\nconst fullAnchorRegex = new RegExp('<a.*?</a>', 'g');\nconst anchorRegex = new RegExp('<a href=\"https://www.hometownfestival.nl/(.*?)\" target=\"(.*?)\">(.*?)</a>');\nconst requiredLegalText = program.requiredTemplate\n.replace(divRegex, '')\n.replace(fullAnchorRegex, '')\n.slice(0, -1);\nconst anchorMatches = program.requiredTemplate.match(anchorRegex);\nif (anchorMatches && anchorMatches.length >= 4) {\n// Create link element safely using DOM methods instead of innerHTML\nconst linkElement = document.createElement('a');\nlinkElement.href = sanitizeUrl(anchorMatches[1]);\nlinkElement.target = sanitizeHtml(anchorMatches[2]);\nlinkElement.textContent = sanitizeHtml(anchorMatches[3]);\nlegalTextElement.textContent = requiredLegalText + ' ';\nlegalTextElement.appendChild(linkElement);\nlegalTextElement.appendChild(document.createTextNode('.'));\n} else {\nlegalTextElement.textContent = requiredLegalText + '.';\n}\n}\n\nfunction generateDropdownOptions(smsProgramData) {\nif (!smsProgramData || smsProgramData.length === 0) {\nreturn '';\n}\nreturn smsProgramData.map(program => {\nconst flag = getCountryUnicodeFlag(program.countryCode);\nconst countryName = getCountryName(program.countryCode);\nconst callingCode = program.countryCallingCode || '';\n// Sanitize all values to prevent XSS\nconst sanitizedCountryCode = sanitizeHtml(program.countryCode || '');\nconst sanitizedCountryName = sanitizeHtml(countryName || '');\nconst sanitizedCallingCode = sanitizeHtml(callingCode || '');\nreturn '<option value=\"' + sanitizedCountryCode + '\">' + sanitizedCountryName + ' ' + sanitizedCallingCode + '</option>';\n}).join('');\n}\nfunction getCountryName(countryCode) {\nif (window.MC?.smsPhoneData?.smsProgramDataCountryNames &&\nArray.isArray(window.MC.smsPhoneData.smsProgramDataCountryNames)) {\nfor (let i = 0; i < window.MC.smsPhoneData.smsProgramDataCountryNames.length; i++) {\nif (window.MC.smsPhoneData.smsProgramDataCountryNames[i].code === countryCode) {\nreturn window.MC.smsPhoneData.smsProgramDataCountryNames[i].name;\n}\n}\n}\nreturn countryCode;\n}\nfunction getDefaultPlaceholder(countryCode) {\nif (!countryCode || typeof countryCode !== 'string') {\nreturn '+1 000 000 0000'; // Default US placeholder\n}\nconst mockPlaceholders = [\n{\ncountryCode: 'US',\nplaceholder: '+1 000 000 0000',\nhelpText: 'Include the US country code +1 before the phone number',\n},\n{\ncountryCode: 'GB',\nplaceholder: '+44 0000 000000',\nhelpText: 'Include the GB country code +44 before the phone number',\n},\n{\ncountryCode: 'CA',\nplaceholder: '+1 000 000 0000',\nhelpText: 'Include the CA country code +1 before the phone number',\n},\n{\ncountryCode: 'AU',\nplaceholder: '+61 000 000 000',\nhelpText: 'Include the AU country code +61 before the phone number',\n},\n{\ncountryCode: 'DE',\nplaceholder: '+49 000 0000000',\nhelpText: 'Fügen Sie vor der Telefonnummer die DE-Ländervorwahl +49 ein',\n},\n{\ncountryCode: 'FR',\nplaceholder: '+33 0 00 00 00 00',\nhelpText: 'Incluez le code pays FR +33 avant le numéro de téléphone',\n},\n{\ncountryCode: 'ES',\nplaceholder: '+34 000 000 000',\nhelpText: 'Incluya el código de país ES +34 antes del número de teléfono',\n},\n{\ncountryCode: 'NL',\nplaceholder: '+31 0 00000000',\nhelpText: 'Voeg de NL-landcode +31 toe vóór het telefoonnummer',\n},\n{\ncountryCode: 'BE',\nplaceholder: '+32 000 00 00 00',\nhelpText: 'Incluez le code pays BE +32 avant le numéro de téléphone',\n},\n{\ncountryCode: 'CH',\nplaceholder: '+41 00 000 00 00',\nhelpText: 'Fügen Sie vor der Telefonnummer die CH-Ländervorwahl +41 ein',\n},\n\n{\ncountryCode: 'AT',\nplaceholder: '+43 000 000 0000',\nhelpText: 'Fügen Sie vor der Telefonnummer die AT-Ländervorwahl +43 ein',\n},\n{\ncountryCode: 'IE',\nplaceholder: '+353 00 000 0000',\nhelpText: 'Include the IE country code +353 before the phone number',\n},\n{\ncountryCode: 'IT',\nplaceholder: '+39 000 000 0000',\nhelpText:\n'Includere il prefisso internazionale IT +39 prima del numero di telefono',\n},\n];\nconst selectedPlaceholder = mockPlaceholders.find(function(item) {\nreturn item && item.countryCode === countryCode;\n});\nreturn selectedPlaceholder ? selectedPlaceholder.placeholder : mockPlaceholders[0].placeholder;\n}\nfunction updatePlaceholder(countryCode, fieldName) {\nif (!countryCode || !fieldName) {\nreturn;\n}\nconst phoneInput = document.querySelector('#mce-' + fieldName);\nif (!phoneInput) {\nreturn;\n}\nconst placeholder = getDefaultPlaceholder(countryCode);\nif (placeholder) {\nphoneInput.placeholder = placeholder;\n}\n}\nfunction updateCountryCodeInstruction(countryCode, fieldName) {\nupdatePlaceholder(countryCode, fieldName);\n}\nfunction getDefaultHelpText(countryCode) {\nconst mockPlaceholders = [\n{\ncountryCode: 'US',\nplaceholder: '+1 000 000 0000',\nhelpText: 'Include the US country code +1 before the phone number',\n},\n{\ncountryCode: 'GB',\nplaceholder: '+44 0000 000000',\nhelpText: 'Include the GB country code +44 before the phone number',\n},\n{\ncountryCode: 'CA',\nplaceholder: '+1 000 000 0000',\nhelpText: 'Include the CA country code +1 before the phone number',\n},\n{\ncountryCode: 'AU',\nplaceholder: '+61 000 000 000',\nhelpText: 'Include the AU country code +61 before the phone number',\n},\n{\ncountryCode: 'DE',\nplaceholder: '+49 000 0000000',\nhelpText: 'Fügen Sie vor der Telefonnummer die DE-Ländervorwahl +49 ein',\n},\n{\ncountryCode: 'FR',\nplaceholder: '+33 0 00 00 00 00',\nhelpText: 'Incluez le code pays FR +33 avant le numéro de téléphone',\n},\n{\ncountryCode: 'ES',\nplaceholder: '+34 000 000 000',\nhelpText: 'Incluya el código de país ES +34 antes del número de teléfono',\n},\n{\ncountryCode: 'NL',\n\nplaceholder: '+31 0 00000000',\nhelpText: 'Voeg de NL-landcode +31 toe vóór het telefoonnummer',\n},\n{\ncountryCode: 'BE',\nplaceholder: '+32 000 00 00 00',\nhelpText: 'Incluez le code pays BE +32 avant le numéro de téléphone',\n},\n{\ncountryCode: 'CH',\nplaceholder: '+41 00 000 00 00',\nhelpText: 'Fügen Sie vor der Telefonnummer die CH-Ländervorwahl +41 ein',\n},\n{\ncountryCode: 'AT',\nplaceholder: '+43 000 000 0000',\nhelpText: 'Fügen Sie vor der Telefonnummer die AT-Ländervorwahl +43 ein',\n},\n{\ncountryCode: 'IE',\nplaceholder: '+353 00 000 0000',\nhelpText: 'Include the IE country code +353 before the phone number',\n},\n{\ncountryCode: 'IT',\nplaceholder: '+39 000 000 0000',\nhelpText: 'Includere il prefisso internazionale IT +39 prima del numero di telefono',\n},\n];\nif (!countryCode || typeof countryCode !== 'string') {\nreturn mockPlaceholders[0].helpText;\n}\nconst selectedHelpText = mockPlaceholders.find(function(item) {\nreturn item && item.countryCode === countryCode;\n});\nreturn selectedHelpText ? selectedHelpText.helpText : mockPlaceholders[0].helpText;\n}\nfunction setDefaultHelpText(countryCode) {\nconst helpTextSpan = document.querySelector('#help-text');\nif (!helpTextSpan) {\nreturn;\n}\n}\nfunction updateHelpTextCountryCode(countryCode, fieldName) {\nif (!countryCode || !fieldName) {\nreturn;\n}\nsetDefaultHelpText(countryCode);\n}\nfunction initializeSmsPhoneDropdown(fieldName) {\nif (!fieldName || typeof fieldName !== 'string') {\nreturn;\n}\nconst dropdown = document.querySelector('#country-select-' + fieldName);\nconst displayFlag = document.querySelector('#flag-display-' + fieldName);\nif (!dropdown || !displayFlag) {\nreturn;\n}\nconst smsPhoneData = window.MC?.smsPhoneData;\nif (smsPhoneData && smsPhoneData.programs && Array.isArray(smsPhoneData.programs)) {\ndropdown.innerHTML = generateDropdownOptions(smsPhoneData.programs);\n}\nconst defaultProgram = getDefaultCountryProgram(smsPhoneData?.defaultCountryCode, smsPhoneData?.programs);\nif (defaultProgram && defaultProgram.countryCode) {\ndropdown.value = defaultProgram.countryCode;\nconst flagSpan = displayFlag?.querySelector('#flag-emoji-' + fieldName);\nif (flagSpan) {\nflagSpan.textContent = getCountryUnicodeFlag(defaultProgram.countryCode);\nflagSpan.setAttribute('aria-label', sanitizeHtml(defaultProgram.countryCode) + ' flag');\n}\n\nupdateSmsLegalText(defaultProgram.countryCode, fieldName);\nupdatePlaceholder(defaultProgram.countryCode, fieldName);\nupdateCountryCodeInstruction(defaultProgram.countryCode, fieldName);\n}\nvar phoneInput = document.querySelector('#mce-' + fieldName);\nif (phoneInput && defaultProgram.countryCallingCode) {\nphoneInput.value = defaultProgram.countryCallingCode;\n}\n\ndisplayFlag?.addEventListener('click', function(e) {\ndropdown.focus();\n});\ndropdown?.addEventListener('change', function() {\nconst selectedCountry = this.value;\nif (!selectedCountry || typeof selectedCountry !== 'string') {\nreturn;\n}\nconst flagSpan = displayFlag?.querySelector('#flag-emoji-' + fieldName);\nif (flagSpan) {\nflagSpan.textContent = getCountryUnicodeFlag(selectedCountry);\nflagSpan.setAttribute('aria-label', sanitizeHtml(selectedCountry) + ' flag');\n}\nconst selectedProgram = window.MC?.smsPhoneData?.programs.find(function(program) {\nreturn program && program.countryCode === selectedCountry;\n});\nvar phoneInput = document.querySelector('#mce-' + fieldName);\nif (phoneInput && selectedProgram.countryCallingCode) {\nphoneInput.value = selectedProgram.countryCallingCode;\n}\nupdateSmsLegalText(selectedCountry, fieldName);\nupdatePlaceholder(selectedCountry, fieldName);\nupdateCountryCodeInstruction(selectedCountry, fieldName);\n});\n}\ndocument.addEventListener('DOMContentLoaded', function() {\nconst smsPhoneFields = document.querySelectorAll('[id^=\"country-select-\"]');\nsmsPhoneFields.forEach(function(dropdown) {\nconst fieldName = dropdown?.id.replace('country-select-', '');\ninitializeSmsPhoneDropdown(fieldName);\n});\n});",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-embed-4",
    "content": "document.addEventListener('DOMContentLoaded', () => {\n    if (!window.gsap || !window.ScrollTrigger) return;\n    gsap.registerPlugin(ScrollTrigger);\n\n    const items = document.querySelectorAll('.st-26_item-cont');\n\n    // Iets getemperd t.o.v. vorige versie\n    const config = [\n      { base: -3, amplitude:  5 },  // item 1\n      { base:  6, amplitude: -4 },  // item 2 (tegengesteld)\n      { base: -3, amplitude:  4 },  // item 3\n      { base:  6, amplitude: -6 },  // item 4 (tegengesteld, iets forser)\n      { base: -3, amplitude:  7 }   // item 5 (meeste swing)\n    ];\n\n    ScrollTrigger.matchMedia({\n      // Tablet & desktop: scroll-rotatie aan\n      '(min-width: 768px)': function () {\n        items.forEach((el, i) => {\n          const cfg = config[i] || { base: (i % 2 === 0 ? -3 : 6), amplitude: 5 };\n\n          gsap.set(el, {\n            rotation: cfg.base - cfg.amplitude,\n            transformOrigin: '50% 50%'\n          });\n\n          gsap.to(el, {\n            rotation: cfg.base + cfg.amplitude,\n            ease: 'none',\n            scrollTrigger: {\n              trigger: el,\n              start: 'top bottom',\n              end: 'bottom top',\n              scrub: 1\n            }\n          });\n        });\n      },\n\n      // Mobiel: geen scroll-animatie, basis-rotatie uit Webflow blijft intact\n      '(max-width: 767px)': function () {\n        items.forEach((el) => {\n          gsap.set(el, { clearProps: 'rotation,transform' });\n        });\n      }\n    });\n\n    ScrollTrigger.refresh();\n  });",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-5",
    "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6405b63d5dbbf416845010e8",
    "type": "text/javascript",
    "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-6",
    "src": "https://cdn.prod.website-files.com/6405b63d5dbbf416845010e8/js/hometownfestival-dev.schunk.36b8fb49256177c8.js",
    "type": "text/javascript",
    "integrity": "sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-7",
    "src": "https://cdn.prod.website-files.com/6405b63d5dbbf416845010e8/js/hometownfestival-dev.schunk.6bd949924d1f42da.js",
    "type": "text/javascript",
    "integrity": "sha384-hckCjEgKNIblEAyKDYBUj/77C9DCdk3mR/xv3Kq2/7e2VusAA5x46BIRU9o8fucy",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-8",
    "src": "https://cdn.prod.website-files.com/6405b63d5dbbf416845010e8/js/hometownfestival-dev.schunk.7a5bf95df786b33a.js",
    "type": "text/javascript",
    "integrity": "sha384-ca89pRyy0+8edz5ZHnOFuQawGLQWSur2NQ/DoyUERc8BViMHwZE53/LYKMKWP04e",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-9",
    "src": "https://cdn.prod.website-files.com/6405b63d5dbbf416845010e8/js/hometownfestival-dev.schunk.f919141e3448519b.js",
    "type": "text/javascript",
    "integrity": "sha384-0dpL+rRIdWgp7t4mWakP0H+6RU4n3g9xP4SmJZle+xurEqe4cffHHB2MF1N5SqpQ",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-10",
    "src": "https://cdn.prod.website-files.com/6405b63d5dbbf416845010e8/js/hometownfestival-dev.2b84117e.faf0a80bdb5fd934.js",
    "type": "text/javascript",
    "integrity": "sha384-hMD06Iy3mBt9kp51NBPkmx5sqr1cMSjRJ72CgI1kqHD2AEuQ2lvS9Pg9MSwLxy0S",
    "crossOrigin": "anonymous",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-11",
    "content": "window.Userback = window.Userback || {};\n    Userback.access_token = '38306|79385|z0STPwlmqAf1rB51YZLG8Z2bb';\n    (function(d) {\n        var s = d.createElement('script');s.async = true;\n        s.src = 'https://static.userback.io/widget/v1.js';\n        (d.head || d.body).appendChild(s);\n    })(document);",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-12",
    "src": "https://unpkg.com/split-type",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-13",
    "src": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-14",
    "src": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-15",
    "content": "window.addEventListener(\"DOMContentLoaded\", (event) => {\n  // Split text into spans\n  let typeSplit = new SplitType(\"[text-split]\", {\n    types: \"words, chars\",\n    tagName: \"span\"\n  });\n\n  // Link timelines to scroll position\n  function createScrollTrigger(triggerElement, timeline) {\n    // Reset tl when scroll out of view past bottom of screen\n    ScrollTrigger.create({\n      trigger: triggerElement,\n      start: \"top bottom\",\n      onLeaveBack: () => {\n        timeline.progress(0);\n        timeline.pause();\n      }\n    });\n    // Play tl when scrolled into view (60% from top of screen)\n    ScrollTrigger.create({\n      trigger: triggerElement,\n      start: \"top 60%\",\n      onEnter: () => timeline.play()\n    });\n  }\n\n  $(\"[letters-slide-up]\").each(function (index) {\n    let tl = gsap.timeline({ paused: true });\n    tl.from($(this).find(\".char\"), { yPercent: 100, duration: 0.5, ease: \"power1.out\", stagger: { amount: 0.6 } });\n    createScrollTrigger($(this), tl);\n  });\n\n  $(\"[letters-fade-in]\").each(function (index) {\n    let tl = gsap.timeline({ paused: true });\n    tl.from($(this).find(\".char\"), { opacity: 0, duration: 0.2, ease: \"power1.out\", stagger: { amount: 0.8 } });\n    createScrollTrigger($(this), tl);\n  });\n\n  // Avoid flash of unstyled content\n  gsap.set(\"[text-split]\", { opacity: 1 });\n});",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-16",
    "src": "https://cdn.rawgit.com/hilios/jQuery.countdown/2.2.0/dist/jquery.countdown.min.js",
    "strategy": "afterInteractive"
  },
  {
    "id": "home-chain-17",
    "content": "// countdown\n  var startDate = $('.final-date').text();\n  $('#getting-started').countdown(startDate, function(event) {\n    $('#event_day').text(event.strftime('%D'));\n    $('#event_hours').text(event.strftime('%H'));\n    $('#event_minute').text(event.strftime('%M'));\n    $('#event_sec').text(event.strftime('%S'));\n  });",
    "strategy": "afterInteractive"
  }
];
