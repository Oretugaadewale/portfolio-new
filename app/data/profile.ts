// Single source of truth for the portfolio's text.
// Keep this in sync with your CV and LinkedIn.

export const profile = {
  name: "Adewale Oretuga",
  title: "Frontend Engineer",
  stack: "React, Next.js, TypeScript",
  location: "Lagos, Nigeria (WAT, UTC+1). Open to remote roles.",
  email: "oretugafolorunso@gmail.com",
  phoneDisplay: "+234 813 257 8261",
  phoneHref: "tel:+2348132578261",
  whatsappHref: "https://wa.me/message/GWHRIEN2T32UK1",
  linkedin: "https://www.linkedin.com/in/adewale-oretuga-278b213a1/",
  github: "https://github.com/Oretugaadewale",
  x: "https://twitter.com/AdewaleOretuga",
  // Export your CV as a PDF, save it as public/Adewale-Oretuga-CV.pdf,
  // then set this to "/Adewale-Oretuga-CV.pdf". Left empty, the button stays hidden.
  cvUrl: "",
};

export const summary: string[] = [
  "I'm a frontend engineer with nearly 5 years of experience building production web apps in React, Next.js and TypeScript, including remote contract work for a Netherlands-based company and fintech dashboards for Nigerian startups.",
  "I turn Figma designs into fast, responsive interfaces, build reusable component systems, integrate REST APIs, and ship the backend pieces a feature needs with Supabase and Paystack, using AI-assisted development to move faster.",
  "Before engineering I spent over 3 years running logistics operations, so I build with the business outcome in mind. I'm also a TEDx speaker.",
];

export interface Role {
  title: string;
  company: string;
  type: string;
  dates: string;
  points: string[];
}

export const experience: Role[] = [
  {
    title: "Software Developer",
    company: "eShopAfrica Limited",
    type: "Part-time, Remote",
    dates: "Jan 2022 - Present",
    points: [
      "Built the frontend for a virtual dollar card wallet so customers could pay overseas stores directly for import orders. The product was paused before launch after a change in government FX policy.",
      "Built a real-time Naira-to-Dollar conversion tool with async REST API integration, so customers could see import costs in naira instantly.",
      "Built internal tools the business runs on, including KPI dashboards across 6 cargo lines and a self-serve contraband checker for customers.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Finding The Spots, AtlasWD, Myafrimall, SmartTeller",
    type: "Contract, Remote",
    dates: "Sep 2023 - May 2026",
    points: [
      "Refactored Myafrimall's full frontend codebase into reusable React components, giving faster load times and fewer UI bugs.",
      "Built financial services web apps and dashboards for SmartTeller in React, TypeScript and Tailwind CSS from Figma designs, and took part in code reviews.",
      "Refactored the Finding The Spots (Netherlands) frontend to cut technical debt, making it easier to maintain and speeding up page loads.",
      "Turned Figma designs into responsive, high-performance interfaces for AtlasWD, with reusable components that sped up delivery.",
    ],
  },
  {
    title: "Software Developer",
    company: "Impacto Nigeria",
    type: "Full-time, On-site",
    dates: "Oct 2023 - Mar 2024",
    points: [
      "Built a user management interface in React with Redux state management, connected to REST APIs.",
      "Improved the company WordPress site's speed and SEO, set up Intercom support flows and supported deployments.",
    ],
  },
  {
    title: "Software Developer",
    company: "Fatherland Holdings Inc.",
    type: "Full-time, On-site",
    dates: "Apr 2023 - Oct 2023",
    points: [
      "Led frontend development of web apps and admin dashboards in React, TypeScript and Tailwind CSS, owning the codebase and release quality.",
      "Built reusable React components and UI patterns, led code reviews and mentored junior developers.",
    ],
  },
  {
    title: "Operations Manager",
    company: "Pickmeup Service",
    type: "Full-time",
    dates: "Jun 2018 - Dec 2021",
    points: [
      "Ran end-to-end logistics operations (transport, warehousing, delivery), led operations teams and managed carriers, vendors and KPIs.",
    ],
  },
];

export const education = [
  {
    title: "Full Stack Web Development",
    school: "Moat Academy for Developers",
    dates: "Jan 2022 - Apr 2022",
  },
  {
    title: "B.Sc. (Ed.) Health Science Education",
    school: "Tai Solarin University of Education (TASUED)",
    dates: "2011 - 2015",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Redux Toolkit",
      "HTML5",
      "CSS3 / SASS",
      "Responsive design",
    ],
  },
  {
    label: "Backend and data",
    items: ["Supabase (PostgreSQL, Auth, RLS)", "REST APIs", "Paystack", "PHP / Laravel", "MySQL"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Figma", "Claude Code", "Vite", "WordPress"],
  },
];

export interface Project {
  title: string;
  tag: string;
  summary: string;
  stack: string[];
  thumbnail?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "AFMweca Super Admin Dashboard",
    tag: "Fintech, private client project",
    summary:
      "A 9-module admin panel for a canteen and outlet digital wallet platform: users, roles and permissions, workflows, departments, outlets, wallets, reconciliation and audit logs. Built from Figma with no external UI library. During a security review I caught wallets being credited from client-side data and designed server-side Paystack verification with idempotency checks.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Paystack"],
  },
  {
    title: "Avalora Continents",
    tag: "Travel and immigration advisory",
    summary:
      "Company website with interactive tools that turn visitors into leads: a visa eligibility checker, a visa processing time tracker and a consultation outcome preview. I also audited Row Level Security across 10 Supabase tables and flagged an open policy on customer bookings.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    thumbnail: "/avalora.png",
    liveUrl: "https://avaloracontinent.com/",
  },
  {
    title: "eShopAfrica",
    tag: "International logistics",
    summary:
      "Web app for an international logistics company: customers buy from US and Chinese stores and have goods shipped to Nigeria or anywhere in the world. Includes the dollar card wallet frontend and live Naira-to-Dollar conversion tool.",
    stack: ["React", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
    thumbnail: "/eshopafrica.png",
    liveUrl: "https://eshopafrica.co/",
  },
  {
    title: "Myafrimall",
    tag: "Logistics, contract",
    summary:
      "Shipping platform that sends parcels from Nigeria to over 300 countries. I refactored the full frontend into reusable React components and integrated third-party and internal APIs, including authentication flows.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
    thumbnail: "/myafrimall.png",
    liveUrl: "https://myafrimall.com.ng/",
  },
  {
    title: "Logikeep",
    tag: "Bookkeeping SaaS",
    summary:
      "Bookkeeping web app that helps businesses record and track their transactions.",
    stack: ["React", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
    thumbnail: "/logikeep.png",
    liveUrl: "https://logikeep.africa/",
  },
  {
    title: "OguName",
    tag: "Culture and language archive",
    summary:
      "An archive of personal names in the Ogu (Gun) culture of the West African coast, documenting each name's meaning and roots in English.",
    stack: ["React", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
    thumbnail: "/oguname.png",
    liveUrl: "https://oguname.com/",
  },
  {
    title: "EattyFood",
    tag: "Early project",
    summary:
      "A one-page meal subscription landing page from my early learning days, built with plain JavaScript and CSS.",
    stack: ["JavaScript", "CSS"],
    thumbnail: "/eatty.png",
    liveUrl: "https://eattyfood.netlify.app/",
    githubUrl: "https://github.com/Oretugaadewale/eattyfood",
  },
];
