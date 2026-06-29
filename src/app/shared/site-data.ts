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
  tagline: 'We grow ideas into living products.',
  positioning: 'Consulting & development for startups.',
  address: {
    line1: '167–169 Great Portland St',
    line2: 'London W1W 5PF',
  },
  intro:
    'We partner with startups and small businesses to consult on, build and grow their early apps, websites and products — turning promising ideas into ventures that ship and scale.',
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
  { value: '6 wks', label: 'Idea to MVP' },
  { value: 'End to end', label: 'Consult · build · grow' },
  { value: 'Startups', label: 'Our focus' },
];

export interface Service {
  title: string;
  description: string;
  /** Lucide icon name (see app/shared/icon.ts). */
  icon: string;
}

export const SERVICES: Service[] = [
  {
    title: 'Product consulting',
    description:
      'Shape the idea: scoping, technical strategy, architecture and a pragmatic roadmap that gets you to a launchable product fast.',
    icon: 'compass',
  },
  {
    title: 'Design & development',
    description:
      'Hands-on build of web and mobile apps — from MVP to polished release — with clean, maintainable code you can grow on.',
    icon: 'code',
  },
  {
    title: 'Growth & iteration',
    description:
      'Once you are live, we help you measure, refine and evolve the product so early traction turns into sustained success.',
    icon: 'trending-up',
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
      'We get to grips with your idea, your users and your goals — then map the fastest credible route to a real product.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'We design and develop a focused first version, keeping the code clean so it is ready to grow rather than be rewritten.',
  },
  {
    number: '03',
    title: 'Grow',
    description:
      'We launch, learn from real usage and iterate — helping early traction turn into a sustainable, successful product.',
  },
];

export interface Client {
  name: string;
  /** Path under public/assets/clients/ */
  logo: string;
}

export const CLIENTS: Client[] = [
  { name: 'Pharmadoctor', logo: 'assets/clients/pharmadoctor.png' },
  { name: 'GAIA Technologies', logo: 'assets/clients/gaia.png' },
  { name: 'Innocent Drinks', logo: 'assets/clients/innocent.png' },
  { name: 'MOTH Drinks', logo: 'assets/clients/moth.svg' },
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
    title: 'Gaia — BNG Marketplace',
    sector: 'Environment / Biodiversity',
    stage: 'Scaling',
    summary:
      "Designed and built the marketplace for Biodiversity Net Gain credits — partnering from the first designs through to launch and ongoing growth. Now the UK's largest BNG marketplace.",
    tags: ['Product design', 'Marketplace', 'Launch & growth'],
    image: 'assets/case-studies/gaia-marketplace.png',
    media: 'screenshot',
    link: 'https://gaiacompany.io/biodiversity-units/',
  },
  {
    title: 'Pharmadoctor',
    sector: 'Healthcare / Pharmacy',
    stage: 'Live',
    summary:
      "Rebuilt 'Version 2' of their web application and underlying business processes — a full system redesign with built-in e-commerce and a new question engine.",
    tags: ['System redesign', 'E-commerce', 'Question engine'],
    image: 'assets/case-studies/pharmadoctor.png',
    media: 'screenshot',
  },
  {
    title: 'MOTH Drinks',
    sector: 'Drinks / FMCG',
    stage: 'Live',
    summary:
      'Developed a custom API and application to improve data collection and management across multiple systems and suppliers.',
    tags: ['Custom API', 'Integrations', 'Data'],
    image: 'assets/clients/moth.svg',
    media: 'logo',
  },
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
