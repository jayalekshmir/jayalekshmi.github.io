import { FiGithub, FiInstagram, FiFacebook } from "react-icons/fi";
import { RiTwitterXFill, RiLinkedinFill } from "react-icons/ri";
import { PiDevToLogoFill, PiTrophy } from "react-icons/pi";

export const projects = [
  {
    id: 1,
    title: "OBI – Seller Onboarding Platform",
    description: "Built with Vue, React, VTEX and Tailwind",
    link: "#",
    image: "/OBI PROJECT.png",
    about: `The OBI Seller Onboarding platform streamlines the process of bringing new sellers onto the OBI marketplace (powered by VTEX). It features an admin-driven workflow where administrators receive seller account creation requests, review and approve them, initiating the onboarding journey for sellers.

        The project uses a micro-frontend architecture with a combination of Vue.js (for VTEX CMS-integrated flows) and React (for standalone UI components and custom onboarding steps). The responsive frontend is styled with Tailwind CSS, ensuring a modern and intuitive user experience. On the backend, the system is built with Node.js and PostgreSQL, enabling secure data handling and approval logic.

        Key features include multi-step onboarding, seller verification, product listing initiation, and seamless admin-seller coordination.`,
    technologiesUsed: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React",
      },

      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        name: "JavaScript",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        name: "HTML5",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        name: "CSS3",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        name: "Next.js",
      },

      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
        name: "Selenium",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg",
        name: " Cucumber",
      },
    ],
  },
  {
    id: 2,
    title: "Carrefour Financial Services Platform",
    description: "VueJs, Nuxt.js App Router + SEO, and Bloomreach",
    link: "#",
    image: "/C4FS PROJECT.png",
    about: `This project focused on developing a scalable and user-friendly platform to support Carrefour’s digital financial products—including credit cards, loans, and insurance services. The platform was designed with a microservices architecture, allowing different services (like authentication, eligibility checks, and application processing) to operate independently while maintaining seamless integration.

The frontend was built using Vue.js and Vuetify, ensuring a modern, accessible, and responsive UI that aligns with Carrefour’s brand standards. Storybook was leveraged for component-driven development, enabling consistent UI patterns and rapid iteration. Bloomreach (brX) powered dynamic content delivery and personalization across the site. On the backend, Java-based microservices handled business logic, data processing, and secure communication between modules.

This architecture enabled independent deployment, better maintainability, and scalability across Carrefour’s evolving financial service offerings.`,
    technologiesUsed: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        name: "VueJs",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg",
        name: "Vuetify",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        name: "Tailwind CSS",
      },

      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        name: "HTML5",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        name: "CSS3",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
        name: "Storybook",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg",
        name: "Vitest",
      },
    ],
  },
  {
    id: 3,
    title: "Grapnel – Dark Web Intelligence Project",
    description: "Built with Angular & Tailwind",
    link: "#",
    image: "/GRAPNEL PROJECT.png",
    about: `Grapnel is a state-level cyber intelligence initiative launched by the Kerala Police Cyberdome to proactively monitor and counter criminal activities on the dark web. The project focuses on identifying threats related to narcotics trafficking, arms sales, data breaches, child exploitation, and other illegal operations conducted through anonymous networks like Tor.
    By leveraging advanced tools for web scraping, dark web crawling, data analytics, and cyber forensics, Grapnel enables real-time tracking of suspicious marketplaces, forums, and encrypted communication channels. It integrates intelligence from multiple sources to support law enforcement in early threat detection and digital evidence gathering.

The project is a first-of-its-kind in India and represents a strategic move towards cyber threat prevention through deep web and dark web surveillance. Grapnel has enhanced Kerala Police’s ability to detect, investigate, and dismantle cybercrime networks operating in hidden layers of the internet.`,
    technologiesUsed: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
        name: "Angular",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        name: "Tailwind CSS",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        name: "HTML5",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        name: "CSS3",
      },
    ],
  },
];

export const navigation = [
  { name: "Work", href: "/work" },
  { name: "Journey", href: "/journey" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
  { name: "Beyond Bio", href: "/beyond-bio" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/jayalekshmir",
    component: FiGithub,
  },
  {
    name: "Twitter",
    url: "https://x.com/jayalekshmi1096",
    component: RiTwitterXFill,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jayalekshmir/",
    component: RiLinkedinFill,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/jay.rj96",
    component: FiInstagram,
  },
  {
    name: "Facebook",
    url: "https://instagram.com/jay.rj96",
    component: FiFacebook,
  },
  {
    name: "Dev.to",
    url: "https://dev.to/jayalekshmi_r",
    component: PiDevToLogoFill,
  },
  {
    name: "Topmate",
    url: "https://topmate.io/jayalekshmi_r/",
    component: PiTrophy,
  },
];
