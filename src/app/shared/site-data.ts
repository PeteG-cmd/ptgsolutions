/**
 * Central content for the site. Edit copy, services, clients and case studies
 * here — components render straight from these constants.
 *
 * NOTE: STATS and TESTIMONIAL are illustrative placeholders — replace them with
 * real metrics / quotes before relying on them. CASE_STUDIES are real projects;
 * no invented numbers are attributed to the named client brands.
 */

export const SITE = {
  name: 'PTG Solutions',
  legalName: 'PTG Solutions LTD',
  email: 'info@ptgsolutions.co.uk',
  domain: 'ptgsolutions.co.uk',
  tagline: 'We build, grow and secure great software.',
  positioning: 'Consulting, development & security — for startups and growing businesses.',
  address: {
    line1: '167–169 Great Portland St',
    line2: 'London W1W 5PF',
  },
  intro:
    'From founders launching a first product to established teams modernising how they work, we help you build the right software, get your data working for you, and keep both secure.',
  /** Optional calendar link for "book a call" — set to a real Calendly/Cal.com URL. */
  bookingUrl: '',
  social: {
    github: '',
    linkedin: '',
    twitter: '',
  },
} as const;

/** Hero / landing metrics — placeholders, edit to real numbers. */
export interface StatItem {
  value: string;
  label: string;
}
export const STATS: StatItem[] = [
  { value: 'Startups & SMEs', label: 'Who we partner with' },
  { value: 'Security-first', label: 'In everything we build' },
  { value: 'End to end', label: 'Consult · build · support' },
];

export interface Service {
  title: string;
  description: string;
  /** Lucide icon name (see app/shared/icon.ts). */
  icon: string;
}

export const SERVICES: Service[] = [
  {
    title: 'Consulting & strategy',
    description:
      'Shape the idea or the roadmap: scoping, technical strategy and a pragmatic plan — whether you are launching something new or improving how your business already runs.',
    icon: 'compass',
  },
  {
    title: 'Design & development',
    description:
      'Hands-on build of web and mobile apps, internal tools and integrations — clean, maintainable code, from a first MVP to a mature, business-critical platform.',
    icon: 'code',
  },
  {
    title: 'Data & integration',
    description:
      'Connect the systems you already use and improve the quality, flow and availability of your data — turning scattered information into something you can trust and act on.',
    icon: 'database',
  },
  {
    title: 'Cyber & data security',
    description:
      'Security built in, not bolted on: secure architecture, access control and data protection that reduce risk and protect your customers, your business and your reputation.',
    icon: 'shield-check',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We get to grips with your goals, your users and your existing systems — then map the most credible route forward, whether that is a new product or a better-run business.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'We design and develop the right solution — apps, integrations or internal tools — with clean, secure and maintainable code built to last.',
  },
  {
    number: '03',
    title: 'Grow',
    description:
      'We launch, measure and keep improving — strengthening data, reliability and security so early wins turn into lasting, resilient results.',
  },
];

export interface Audience {
  /** Lucide icon name (see app/shared/icon.ts). */
  icon: string;
  /** Short label, e.g. 'Startups & founders'. */
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
}

export const AUDIENCES: Audience[] = [
  {
    icon: 'sparkles',
    eyebrow: 'Startups & founders',
    title: 'Turn your idea into a product',
    description:
      'We help you go from concept to a real, launchable product — getting the direction right, building it properly, and giving it secure foundations from day one.',
    points: [
      'Discovery, scoping & technical strategy',
      'MVP design & full-stack build',
      'Launch, measure & iterate',
      'Security and good data habits from the start',
    ],
  },
  {
    icon: 'gauge',
    eyebrow: 'Small & medium businesses',
    title: 'Make your business run better',
    description:
      'We help established teams work smarter — automating manual processes, joining up the tools you already use, and getting your data flowing reliably, accurately and securely.',
    points: [
      'Streamline manual, repetitive processes',
      'Connect systems & improve data flow',
      'Reliable, available and accurate data',
      'Cyber & data security hardening',
    ],
  },
];

export interface Client {
  name: string;
  /** Path under public/assets/clients/ */
  logo: string;
  /** Logo ships as a baked dark tile — render it crisp (no grayscale/fade) and rounded. */
  tile?: boolean;
}

export const CLIENTS: Client[] = [
  { name: 'Pharmadoctor', logo: 'assets/clients/pharmadoctor.png' },
  { name: 'GAIA Technologies', logo: 'assets/clients/gaia.png' },
  { name: 'Innocent Drinks', logo: 'assets/clients/innocent.png' },
  { name: 'MOTH Drinks', logo: 'assets/clients/moth.png', tile: true },
  { name: 'Wild Eye Photography', logo: 'assets/clients/wildeye.png' },
  { name: 'Haringtons Hairdressing', logo: 'assets/clients/harringtons-ink.png' },
];

export interface CaseStudy {
  title: string;
  sector: string;
  /** Lifecycle stage badge: Idea · MVP · Scaling · Live. */
  stage: string;
  summary: string;
  tags: string[];
  /**
   * Optional thumbnail under public/assets/. A 'screenshot' fills the card
   * thumb; a 'logo' is centred on a light block. Omit to fall back to the
   * forest block + project initial.
   */
  image?: string;
  media?: 'screenshot' | 'logo';
  /** Optional link to the live project. */
  link?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Gaia — Carbon Accounting',
    sector: 'Climate / Carbon',
    stage: 'Live',
    summary:
      'Built a new carbon accounting product, opening a new market for Gaia — bringing on new clients and expanding their product offering.',
    tags: ['New product', 'SaaS', 'Carbon accounting'],
    image: 'assets/case-studies/gaia-carbon.png',
    media: 'screenshot',
    link: 'https://gaiacompany.io/carbon-accounting-software/',
  },
  {
    title: 'Pharmadoctor',
    sector: 'Healthcare / Pharmacy',
    stage: 'Live',
    summary:
      "Rebuilt 'Version 2' of their web application and underlying business processes. A full system redesign with built-in e-commerce and a new question engine.",
    tags: ['System redesign', 'E-commerce', 'Consultation engine'],
    image: 'assets/case-studies/pharmadoctor.png',
    media: 'screenshot',
    link: 'https://pharmadoctor.co.uk/',
  },
  {
    title: 'MOTH Drinks',
    sector: 'Drinks / FMCG',
    stage: 'Live',
    summary:
      'Developed a custom API and application to improve data collection and management across multiple systems and suppliers, improving system security and data flow.',
    tags: ['Custom API', 'Integrations', 'Data', 'Security'],
    image: 'assets/clients/moth.png',
    media: 'logo',
  },
  {
    title: 'Gaia — BNG Marketplace',
    sector: 'Environment / Biodiversity',
    stage: 'Scaling',
    summary:
      "Designed and built the marketplace for Biodiversity Net Gain credits. Partnering from the first designs through to launch and ongoing growth. Now the UK's largest BNG marketplace.",
    tags: ['Product design', 'Marketplace', 'Launch & growth'],
    image: 'assets/case-studies/gaia-marketplace.png',
    media: 'screenshot',
    link: 'https://gaiacompany.io/biodiversity-units/',
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

/** Placeholder — replace with a real, attributed quote. */
export const TESTIMONIAL: Testimonial = {
  quote:
    'They felt less like a contractor and more like a partner — honest about scope, fast to build, and genuinely invested in getting our product into people’s hands.',
  author: 'Founder',
  role: 'Early-stage startup',
};
