/**
 * gallery-data.js
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for every portfolio gallery series.
 * Add or edit a series here; gallery.html picks it up automatically.
 * ─────────────────────────────────────────────────────────────
 */

const GALLERY_DATA = {

  portraiture: {
    /* ── Nav / page ── */
    pageTitle:  'UJPhotography — Portraiture',
    metaDesc:   'Portrait photography by UJPhotography — cinematic, intimate, and honest.',

    /* ── Hero section ── */
    eyebrow:    'Portfolio — People',
    heading:    'Portraiture',
    headingSub: '& the human moment',          // shown in italics on a second line (set '' to hide)
    body: `Faces carry entire worlds. In this ongoing portrait series, I look for the quiet seconds
between poses — the breath before a smile, the softness after a laugh — where a person's
story speaks in light. Each frame is built with simple direction, natural gestures,
and a palette that keeps attention where it belongs: on human presence.`,

    /* ── Notes cards ── */
    notes: [
      {
        title: 'Approach',
        text:  'Minimal setups, intentional light, and gentle prompts. I balance environment and expression to keep the photograph honest and cinematic at once.',
      },
      {
        title: 'Mood',
        text:  'Warm, textured, and calm. I favour skin-true tones and soft falloff to let eyes and micro-expressions carry the frame.',
      },
      {
        title: 'For Clients',
        text:  'Portrait sessions available for artists, brands, and private commissions. On-location or studio options, with personal guidance throughout.',
      },
    ],

    /* ── Image folder (trailing slash required) ── */
    imageDir:  '../images/portfolio/portraiture/',
    basename:  'slide',                         // files: slide1.jpg, slide2.jpg …
  },

  /* ──────────────────────────────────────────── */

  landscape: {
    pageTitle:  'UJPhotography — Landscape',
    metaDesc:   'Landscape photography by UJPhotography — vast skies, quiet earth, and the hour between.',

    eyebrow:    'Portfolio — Land & Sky',
    heading:    'Landscape',
    headingSub: '& the living earth',
    body: `Some frames require patience measured in seasons. My landscape work chases the light that
exists only for minutes — golden hour over still water, the blue silence before dawn, storms
that reshape a horizon in real time. I look for compositions where the land itself becomes
the subject, not merely a backdrop.`,

    notes: [
      {
        title: 'Approach',
        text:  'Long hikes, early starts, and a willingness to return to the same spot until the sky cooperates. Tripod, wide glass, and unhurried time.',
      },
      {
        title: 'Mood',
        text:  'Vast yet intimate. I favour a cool, film-like palette with restrained contrast to let atmosphere breathe.',
      },
      {
        title: 'For Clients',
        text:  'Fine-art prints available in limited editions. Commercial licensing for editorial and hospitality use — enquire by email.',
      },
    ],

    imageDir: '../images/portfolio/landscape/',
    basename: 'slide',
  },

  /* ──────────────────────────────────────────── */

  wedding: {
    pageTitle:  'UJPhotography — Wedding',
    metaDesc:   'Wedding photography by UJPhotography — documentary, warm, and timeless.',

    eyebrow:    'Portfolio — Love & Ceremony',
    heading:    'Wedding',
    headingSub: '& the day you remember',
    body: `A wedding is not a single moment but a thousand small ones — nervous hands, whispered
words, the look exchanged across a crowded room. I work quietly, moving through the day
like a guest who happens to have a camera, so that what you have afterwards feels real,
not performed.`,

    notes: [
      {
        title: 'Approach',
        text:  'Documentary at heart, with selective portrait sessions built in. I cover the full day from getting-ready to the first dance — no moments staged or missed.',
      },
      {
        title: 'Mood',
        text:  'Warm, natural, and timeless. I avoid heavy editing trends that date quickly, so your gallery looks as good in twenty years as it does today.',
      },
      {
        title: 'Packages',
        text:  'Full-day, half-day, and elopement options. Engagement sessions available. Second shooter can be arranged for larger events.',
      },
    ],

    imageDir: '../images/portfolio/wedding/',
    basename: 'slide',
  },

  /* ──────────────────────────────────────────── */

  street: {
    pageTitle:  'UJPhotography — Street',
    metaDesc:   'Street photography by UJPhotography — unposed, fleeting, and true.',

    eyebrow:    'Portfolio — The City',
    heading:    'Street',
    headingSub: '& the unposed city',
    body: `Cities are galleries that rearrange themselves by the second. I move through them with
one camera and one lens, waiting for geometry and humanity to briefly align — a shadow
that frames a stranger, light that cuts a street into two worlds, the split-second when
an ordinary corner becomes a photograph.`,

    notes: [
      {
        title: 'Approach',
        text:  'No direction, no setup. Everything here happened without intervention — I was simply present at the right moment.',
      },
      {
        title: 'Mood',
        text:  'High-contrast black and white alongside selective colour work. Grain is embraced, not erased.',
      },
      {
        title: 'Prints',
        text:  'Select street images are available as fine-art prints. Signed editions on request — contact for availability.',
      },
    ],

    imageDir: '../images/portfolio/street/',
    basename: 'slide',
  },

  /* ──────────────────────────────────────────── */

  automotive: {
    pageTitle:  'UJPhotography — Automotive',
    metaDesc:   'Automotive photography by UJPhotography — machines in their element.',

    eyebrow:    'Portfolio — Machines',
    heading:    'Automotive',
    headingSub: '& the art of motion',
    body: `A car is sculpture that moves. My automotive work balances technical precision with
a feel for drama — the right angle that reveals a body line, the correct light that
makes metal look molten, the long exposure that turns motion into poetry. Shot
on location and on track, never in sterile isolation.`,

    notes: [
      {
        title: 'Approach',
        text:  'Location scouting, golden-hour timing, and a mix of static detail shots with rolling and panning sequences — all in one shoot.',
      },
      {
        title: 'Mood',
        text:  'Cinematic and bold. Deep shadows, specular highlights, and environments that complement rather than compete with the subject.',
      },
      {
        title: 'For Brands & Owners',
        text:  'Commercial shoots for dealerships, manufacturers, and private collectors. Media-ready files delivered with full licensing.',
      },
    ],

    imageDir: '../images/portfolio/automotive/',
    basename: 'slide',
  },

  /* ──────────────────────────────────────────── */

  realestate: {
    pageTitle:  'UJPhotography — Real Estate',
    metaDesc:   'Real estate and interiors photography by UJPhotography — spaces that sell themselves.',

    eyebrow:    'Portfolio — Spaces',
    heading:    'Real Estate',
    headingSub: '& interiors',
    body: `A property photograph has one job: make someone want to walk through that door.
I shoot architectural and interior spaces with wide, corrected lenses and ambient-
balanced lighting that keeps rooms looking natural — not artificially bright or
eerily empty. The goal is always an honest, beautiful image that accelerates a sale.`,

    notes: [
      {
        title: 'Approach',
        text:  'Full-property shoots including exterior, living spaces, kitchen, and detail shots. Twilight exteriors available as an add-on.',
      },
      {
        title: 'Turnaround',
        text:  'Edited gallery delivered within 24 hours of the shoot. Rush turnaround (same day) available on request.',
      },
      {
        title: 'For Agents & Developers',
        text:  'Residential and commercial properties. Retainer packages for high-volume agents — enquire for pricing.',
      },
    ],

    imageDir: '../images/portfolio/realestate/',
    basename: 'slide',
  },

  /* ──────────────────────────────────────────── */

  localbusiness: {
    pageTitle:  'UJPhotography — Local Business',
    metaDesc:   'Business and brand photography by UJPhotography — images that build trust.',

    eyebrow:    'Portfolio — Brand & Business',
    heading:    'Local Business',
    headingSub: '& brand photography',
    body: `Every business has a story — the craft behind the counter, the team that shows
up every morning, the space that customers remember. I work with local businesses to
build a visual identity that feels authentic: product photography, team portraits,
in-situ lifestyle shots, and everything in between.`,

    notes: [
      {
        title: 'Approach',
        text:  'Half-day and full-day brand shoots tailored to what the business needs — from menus and storefronts to team headshots and process shots.',
      },
      {
        title: 'Deliverables',
        text:  'Web-optimised and print-ready files. Social-media crops and cover images included. All files fully licensed for commercial use.',
      },
      {
        title: 'For Small Businesses',
        text:  'Flexible packages designed for independent businesses. Bundle deals available when combining multiple services.',
      },
    ],

    imageDir: '../images/portfolio/localbusiness/',
    basename: 'slide',
  },

};

/* Export for use in gallery.html */
if (typeof module !== 'undefined') module.exports = GALLERY_DATA;
