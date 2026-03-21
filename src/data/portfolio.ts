import type { Skill, Tool, Education, Language, Experience, Project, ContactInfo } from '@/types';

export const skills: Skill[] = [
  { name: 'CSS / HTML / JS', years: '6 years', lastUsed: 'now', isCurrent: true },
  { name: 'ReactJs / Socket.io / RESTful', years: '5 years', lastUsed: 'now', isCurrent: true },
  { name: 'React Native / NextJs / GraphQL', years: '2 years', lastUsed: 'now', isCurrent: true },
];

export const tools: Tool[] = [
  { name: 'Cursor', icon: 'edit_square', color: 'text-primary' },
  { name: 'Figma', icon: 'draw', color: 'text-secondary' },
  { name: 'Slack', icon: 'chat', color: 'text-tertiary' },
  { name: 'Jira', icon: 'task_alt', color: 'text-error' },
];

export const education: Education[] = [
  {
    period: '03/2016 — 06/2018',
    school: 'SOFTECH APTECH DA NANG',
    degree: 'APTECH CERTIFIED COMPUTER PROFESSIONAL (ACCP) - International programmer.',
  },
];

export const languages: Language[] = [
  { name: 'English (Reading/Writing)', level: 'advanced' },
  { name: 'English (Communication)', level: 'basic' },
];

export const experiences: Experience[] = [
  {
    period: '08/2023 — Present',
    company: 'SELLERWIX (PRODUCTION)',
    type: 'Production',
    role: 'Developer',
    tasks: ['Web app development', 'Requirements analysis', 'Coding & Team management'],
    isCurrent: true,
  },
  {
    period: '04/2019 — 06/2023',
    company: 'BEELAZY (PRODUCTION)',
    type: 'Production',
    role: 'Developer',
    tasks: ['Web & App development', 'Coding & Requirements analysis', 'Team management'],
  },
  {
    period: '07/2017 — 03/2019',
    company: '3S INTERSOFT (OUTSOURCING)',
    type: 'Outsourcing',
    role: 'Developer',
    tasks: ['Web development', 'Coding & Requirements analysis'],
  },
];

export const projects: Project[] = [
  {
    period: '08/2023 — Now',
    name: 'Sellerwix',
    tag: 'WEB',
    color: 'primary',
    description:
      'E-commerce SaaS platform allowing users to centrally manage stores across TikTok Shop, Amazon, eBay, Shopify, etc. Optimizes multi-channel sales and automation.',
    stack: 'React, Hook, Context, Apollo, GraphQL',
    team: '4 Members',
    tasks: 'Analysis, Design, Task division, Coding',
    link: 'https://app.sellerwix.com/',
    linkLabel: 'VIEW PROJECT',
    linkIcon: 'open_in_new',
  },
  {
    period: '07/2024 — Now',
    name: 'Supplier Hub',
    tag: 'WEB',
    color: 'primary',
    description:
      'Business Management System (BMS) for supply chain transparency. Optimizes order management, invoice design, and document processing.',
    stack: 'React, Hook, Context, Apollo, GraphQL',
    team: '4 Members',
    tasks: 'Analysis, Design, Task division, Coding',
    link: 'https://supplier.sellerwix.com/',
    linkLabel: 'VIEW PROJECT',
    linkIcon: 'open_in_new',
  },
  {
    period: '11/2024 — 2025',
    name: 'Sellerwix Scanner',
    tag: 'MOBILE',
    color: 'secondary',
    description:
      'QR code scanning app to track production status and orders. Convenient, fast, and accurate for warehouse operations and businesses.',
    stack: 'React Native, React Hook, Zustand, Apollo',
    team: '2 Members',
    tasks: 'Full lifecycle (Analysis to Maintenance)',
    link: 'https://play.google.com/store/apps/details?id=com.sellerwix.inspector',
    linkLabel: 'OPEN STORE',
    linkIcon: 'download',
  },
  {
    period: '03/2019 — 06/2023',
    name: 'PlayerDuo',
    tag: 'SOCIAL',
    color: 'primary',
    description:
      'Specialized social networking app for gamers and streamers. Connects the gaming community across titles like Arena of Valor, PUBG, LOL, etc.',
    stack: 'HTML, SCSS, ReactJs, Redux, Socket.io',
    team: '4 Members',
    tasks: 'Analysis, Design, Coding features',
    link: 'https://playerduo.net/',
    linkLabel: 'OPEN WEB',
    linkIcon: 'language',
  },
  {
    period: '11/2019 — 02/2023',
    name: 'PlayerChat',
    tag: 'MOBILE',
    color: 'secondary',
    description:
      'Social networking app where players can hire others to help with problems, play games together, talk, and chat.',
    stack: 'React Native, Redux, Firebase, Socket.io',
    team: '4 Members',
    tasks: 'Analysis, Design, Coding Features',
    status: 'APP STORE & PLAY STORE',
  },
  {
    period: '01/2023 — 06/2023',
    name: 'BeeBook',
    tag: 'MOBILE',
    color: 'secondary',
    description:
      'Online comic reading platform integrated with social networking, allowing users to easily follow, read, and discuss their favorite series.',
    stack: 'React Native, Redux, Context, Firebase',
    team: '3 Members',
    tasks: 'Analysis, Design, Coding',
    status: 'MOBILE PLATFORM ACTIVE',
  },
  {
    period: '10/2022 — 12/2022',
    name: 'SoccerbootsDB',
    tag: 'WEB',
    color: 'primary',
    description:
      'Web/app platform providing detailed information about professional football players, combined with a system for displaying related products through affiliate marketing.',
    stack: 'NextJs, Recoil, Socket.io, Node.js',
    team: '2 Members',
    tasks: 'Analysis, Design, Coding',
    status: 'PROJECT ARCHIVED',
  },
  {
    period: '01/2019 — 03/2019',
    name: 'System-Monitor',
    tag: 'IOT',
    color: 'primary',
    description:
      'Binding machine monitoring web application prototype for industrial real-time tracking.',
    stack: 'Vue.js, Nuxt.js, Node.js, Socket.io',
    team: '2 Members',
    tasks: 'Analysis, Design, Coding',
    status: 'PROTOTYPE COMPLETED',
  },
  {
    period: '10/2018 — 12/2018',
    name: 'ACS',
    tag: 'ERP',
    color: 'primary',
    description:
      'Product management solution integrated with QR code scanning for efficient inventory and lifecycle tracking.',
    stack: 'React.js, Redux Saga, HTML, SCSS',
    team: '3 Members',
    tasks: 'Analysis, Design, Coding',
    status: 'SYSTEM ACTIVE',
  },
  {
    period: '07/2018 — 09/2018',
    name: 'BMS (Real Estate)',
    tag: 'ERP',
    color: 'primary',
    description:
      'Management of real estate portfolio and customer relations. Streamlining internal processes for property tracking and sales analysis.',
    stack: 'HTML, SCSS, React.js, Redux Thunk',
    team: '4 Members',
    tasks: 'Analysis, Design, Coding',
    status: 'PROJECT ARCHIVED',
  },
  {
    period: '02/2018 — 06/2018',
    name: 'AIBOLIT',
    tag: 'HEALTH',
    color: 'primary',
    description:
      'Managing the health of the patient through sensors and real-time monitoring dashboard for medical professionals.',
    stack: 'HTML, SCSS, Angular.js 1, React, Redux',
    team: '4 Members',
    tasks: 'Analysis, Design, Coding',
    status: 'SYSTEM INTEGRATED',
  }
];

export const contact: ContactInfo[] = [
  {
    icon: 'mail',
    label: 'Email',
    value: 'nguyendangvinh.92dn@gmail.com',
    href: 'mailto:nguyendangvinh.92dn@gmail.com',
  },
  {
    icon: 'call',
    label: 'Phone',
    value: '+84 344.846.865',
    href: 'tel:+84344846865',
  },
];

export const siteConfig = {
  name: 'Nguyen Dang Vinh',
  title: 'Nguyen Dang Vinh | Frontend Developer Portfolio',
  description:
    'Building high-performance, immersive web and mobile experiences. Focused on scalable architectures and fluid user interfaces with React ecosystem.',
  role: 'Frontend Developer',
  location: 'Da Nang, Vietnam',
  github: 'https://github.com/boss225',
  email: 'nguyendangvinh.92dn@gmail.com',
  phone: '+84 344.846.865',
  resumePdf: '/VinhNguyen_FEDev.pdf',
  heroImage: '/images/icon-laptop.png',
};
