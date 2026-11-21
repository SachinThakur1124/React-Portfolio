/**
 * Portfolio Projects Data
 * 
 * Two distinct, coexisting categories across 11 total verified projects:
 * 
 * Category A: Professional Projects (All 6 Resume Projects)
 * 1. OptiNetFlow (B2B Payment Interchange-Optimization Engine)
 * 2. DLC (High-Performance E-Commerce & Content Search System)
 * 3. IT Riders (Automated Resume Parsing & Talent Intelligence Pipeline)
 * 4. Crikk (AI Voice Generation & Speech Processing Platform)
 * 5. Sukhi Wellness (Mobile Health & Gamified Engagement Application)
 * 6. School Management System (Educational Administration & Billing ERP)
 * 
 * Category B: Personal Projects (All 5 Recovered Personal Projects)
 * 1. Hotel Hub (Full-Stack MERN Hotel Booking Application)
 * 2. Modern AI Landing Page (Brainwave AI High-Fidelity Showcase)
 * 3. Nike Landing Page (Brand-Forward E-Commerce Experience)
 * 4. Weather App (OpenWeatherMap Meteorological Forecast Utility)
 * 5. Aura AI (Next.js Conversational AI Application)
 */

export const professionalProjects = [
  {
    id: 'optinetflow',
    title: 'OptiNetFlow',
    subtitle: 'B2B Payment Interchange-Optimization Engine',
    projectType: 'professional',
    category: 'Enterprise FinTech',
    visibility: 'Private',
    isPrivate: true,
    privateLabel: 'Private Company Project',
    tagline: 'High-throughput interchange-optimization engine built for enterprise B2B payment transactions.',
    description:
      'Engineered an interchange-optimization engine attaching Level 2/3 card data to payment intents, routing charges through Stripe Connect Direct Charges, and settling multi-party fees via append-only ledgers.',
    features: [
      'Level 2/3 card data enrichment and Stripe Connect Direct Charges integration',
      'Event-driven webhook pipeline orchestrated via AWS SQS FIFO queues',
      'Append-only PostgreSQL ledger architecture guaranteeing idempotent financial record processing',
      'AES-256-GCM field encryption and constant-time HMAC webhook verification'
    ],
    techStack: [
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Stripe Connect',
      'AWS SQS',
      'Cloudflare Workers',
      'Docker'
    ],
    architecture: 'Event-Driven Microservices & Cloudflare Workers',
    githubUrl: null,
    liveUrl: null,
    image: null,
    visualType: 'optinetflow'
  },
  {
    id: 'dlc',
    title: 'DLC',
    subtitle: 'High-Performance E-Commerce & Content Search System',
    projectType: 'professional',
    category: 'E-Commerce',
    visibility: 'Commercial Client',
    isPrivate: true,
    privateLabel: 'Commercial Client Project',
    tagline: 'Sub-300ms typo-tolerant search and multi-attribute product catalog indexing.',
    description:
      'Built a high-performance search experience integrating Algolia with a React frontend on a headless WordPress backend, delivering near-instant, typo-tolerant catalog discovery across 5k+ items.',
    features: [
      'Sub-300ms instant, typo-tolerant search powered by Algolia search engine integration',
      'Dynamic multi-attribute faceted filtering across 5k+ indexed catalog products',
      'Headless WordPress REST API integration with customized JSON payloads',
      'Modular React component architecture optimizing client-side catalog navigation'
    ],
    techStack: [
      'React.js',
      'Headless WordPress',
      'Algolia Search',
      'REST APIs',
      'JavaScript',
      'CSS3'
    ],
    architecture: 'Headless WordPress & Algolia Search Engine',
    githubUrl: null,
    liveUrl: null,
    image: null,
    visualType: 'dlc'
  },
  {
    id: 'it-riders',
    title: 'IT Riders',
    subtitle: 'Automated Resume Parsing & Talent Intelligence Pipeline',
    projectType: 'professional',
    category: 'AI Pipeline',
    visibility: 'Enterprise Client',
    isPrivate: true,
    privateLabel: 'Enterprise Client Project',
    tagline: 'Automated talent extraction pipeline eliminating manual resume data entry.',
    description:
      'Developed a Python resume-parsing pipeline that automatically extracts candidate skills, proficiency levels, and work experience from unstructured resumes, cutting recruiter review time by ~40%.',
    features: [
      'Automated candidate skill set and experience hierarchy extraction in Python',
      '~40% reduction in recruiter candidate review and screening cycle time',
      'Robust unstructured PDF and DOCX document normalization pipeline',
      'REST API endpoints for ATS platform integration and automated candidate profiling'
    ],
    techStack: ['Python', 'REST APIs', 'NLP Parsing', 'FastAPI', 'JSON Schema'],
    architecture: 'Python Document Ingestion & Extraction Microservice',
    githubUrl: null,
    liveUrl: null,
    image: null,
    visualType: 'it-riders'
  },
  {
    id: 'crikk',
    title: 'Crikk',
    subtitle: 'AI Voice Generation & Speech Processing Platform',
    projectType: 'professional',
    category: 'Speech Platform',
    visibility: 'Commercial Client',
    isPrivate: true,
    privateLabel: 'Commercial Client Project',
    tagline: 'Real-time text-to-speech voice pipeline utilizing Azure Cognitive Services.',
    description:
      'Built AI-voice features integrating Azure Cognitive Services (Speech SDK) with a Python voice pipeline for real-time text-to-speech, and led production migration to SvelteKit with zero regression.',
    features: [
      'Real-time text-to-speech and speech-to-text generation via Azure Cognitive Services',
      'Python voice processing pipeline delivering natural AI voice synthesis from text prompts',
      'Full application framework migration to SvelteKit with complete functional parity',
      'Responsive audio player interface with dynamic waveform synchronization'
    ],
    techStack: [
      'SvelteKit',
      'JavaScript',
      'Azure Cognitive Services',
      'Python',
      'Web Audio API'
    ],
    architecture: 'SvelteKit SSR + Azure Speech AI Workers',
    githubUrl: null,
    liveUrl: null,
    image: null,
    visualType: 'crikk'
  },
  {
    id: 'sukhi-wellness',
    title: 'Sukhi Wellness',
    subtitle: 'Mobile Health & Gamified Engagement Application',
    projectType: 'professional',
    category: 'Mobile Health',
    visibility: 'Commercial Client',
    isPrivate: true,
    privateLabel: 'Commercial Client Project',
    tagline: 'Cross-platform mobile wellness app with gamified progression and telemetry.',
    description:
      'Designed a reusable Badge component system and gamified achievement flow with multi-level progression tied to real-time video-watch tracking, integrating React Native with REST APIs.',
    features: [
      'Modular, reusable Badge component system and milestone celebration animations',
      'Gamified achievement progression engine with persistent user streak tracking',
      'Real-time video-watch progress telemetry and cross-session state synchronization',
      'Fluid 60 FPS mobile UI interactions across iOS and Android release builds'
    ],
    techStack: [
      'React Native',
      'JavaScript',
      'REST APIs',
      'Redux',
      'AsyncStorage',
      'iOS / Android'
    ],
    architecture: 'React Native Mobile Architecture',
    githubUrl: null,
    liveUrl: null,
    image: null,
    visualType: 'sukhi-wellness'
  },
  {
    id: 'school-management-system',
    title: 'School Management System',
    subtitle: 'Educational Administration & Billing ERP',
    projectType: 'professional',
    category: 'Institutional ERP',
    visibility: 'Private',
    isPrivate: true,
    privateLabel: 'Private Company Project',
    tagline: 'Comprehensive educational administration and institutional ERP platform.',
    description:
      'Production-oriented educational management system designed to streamline institutional administration, dynamic custom-field student admissions, fee tracking, and departmental operations.',
    features: [
      'Dynamic custom-field admissions and departmental course configuration',
      'Automated student billing schedule generator with installment calendar tracking',
      'Role-based access control (RBAC) separating administrative, registrar, and billing privileges',
      'Calendar-based payment notification and overdue ledger reconciliation workflows'
    ],
    techStack: [
      'React.js',
      'TypeScript',
      'Express.js',
      'Node.js',
      'MongoDB',
      'REST APIs',
      'RBAC'
    ],
    architecture: 'MERN Stack & Role-Based Access Control',
    githubUrl: null,
    liveUrl: null,
    image: null,
    visualType: 'school-erp'
  }
];

export const personalProjects = [
  {
    id: 'hotel-hub',
    title: 'Hotel Hub',
    subtitle: 'MERN-Based Hotel Booking Application',
    projectType: 'personal',
    category: 'Full-Stack MERN',
    visibility: 'Open Source',
    isPrivate: false,
    tagline: 'End-to-end hotel booking platform with room browsing, reservation workflows, and JWT authentication.',
    description:
      'Full-stack hotel reservation application utilizing React.js, Context API for state management, Node.js/Express REST APIs, and MongoDB for room inventory and user booking records.',
    features: [
      'Interactive room discovery with multi-parameter filter criteria',
      'Secure user authentication and registration workflows engineered with JWT',
      'Context API state store managing active reservations across navigation cycles',
      'Responsive interface styled with Tailwind CSS for multi-device parity'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    image: '/hh.png',
    visualType: null,
    githubUrl: 'https://github.com/SachinThakur1124/HOTEL-HUB',
    liveUrl: 'https://hotel-hub-xi.vercel.app'
  },
  {
    id: 'modern-ai',
    title: 'Modern AI Landing Page',
    subtitle: 'Brainwave AI Product Experience',
    projectType: 'personal',
    category: 'AI Platform',
    visibility: 'Open Source',
    isPrivate: false,
    tagline: 'Sleek, futuristic product landing page introducing Brainwave AI with Bento grids and fluid interactions.',
    description:
      'Responsive AI product landing page featuring clean visual hierarchy, Bento-grid feature cards, interactive UI controls, and tailored animations built with React and Tailwind CSS.',
    features: [
      'Futuristic UI aesthetic with glowing ambient backdrops and gradients',
      'Bento-grid feature highlights with tailored responsive layout adaptations',
      'Interactive hero and navigation elements built with fluid micro-transitions',
      'High-performance production bundle optimized via Vite tooling'
    ],
    techStack: ['React.js', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Responsive UI'],
    image: '/AI.png',
    visualType: null,
    githubUrl: 'https://github.com/SachinThakur1124/Modern-AI-Landing-Page',
    liveUrl: 'https://modern-ai-landing-page.netlify.app/'
  },
  {
    id: 'nike-landing-page',
    title: 'Nike Landing Page',
    subtitle: 'Brand-Forward E-Commerce Showcase',
    projectType: 'personal',
    category: 'E-Commerce',
    visibility: 'Open Source',
    isPrivate: false,
    tagline: 'Editorial footwear product showcase with responsive hero sections, product grids, and promotional highlights.',
    description:
      'Modern, mobile-responsive e-commerce landing page showcasing athletic footwear collections, promotional banners, and product feature carousels with polished responsive typography and Tailwind CSS.',
    features: [
      'High-impact visual hero section highlighting flagship footwear models',
      'Dynamic product thumbnail switcher previewing colorway variants',
      'Promotional editorial banners with responsive multi-column layouts',
      'Accessible, touch-friendly mobile design maintaining brand consistency'
    ],
    techStack: ['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    image: '/Nike.png',
    visualType: null,
    githubUrl: 'https://github.com/SachinThakur1124/NIKE-Landing-Page',
    liveUrl: 'https://nike-front-page.netlify.app/'
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    subtitle: 'Live Global Meteorological Forecasting',
    projectType: 'personal',
    category: 'Weather Utility',
    visibility: 'Open Source',
    isPrivate: false,
    tagline: 'Real-time global weather forecasting powered by the OpenWeatherMap REST API.',
    description:
      'Fast, interactive weather utility delivering live temperature readings, dynamic atmospheric icons, humidity metrics, and instantaneous city lookup using React, Vite, and OpenWeatherMap APIs.',
    features: [
      'Real-time weather data fetching via OpenWeatherMap REST API integration',
      'Instantaneous global city search with error-handling for unlisted queries',
      'Dynamic weather condition badges and atmospheric metric cards',
      'Lightweight, responsive interface optimized for ultra-fast mobile loading'
    ],
    techStack: ['React.js', 'Vite', 'Tailwind CSS', 'OpenWeather API', 'REST APIs'],
    image: '/Weather.png',
    visualType: null,
    githubUrl: 'https://github.com/SachinThakur1124/Weather-App',
    liveUrl: 'https://react-vite-weather-app.netlify.app/'
  },
  {
    id: 'aura-ai',
    title: 'Aura AI',
    subtitle: 'Next.js Conversational AI Application',
    projectType: 'personal',
    category: 'Conversational AI',
    visibility: 'Open Source',
    isPrivate: false,
    tagline: 'Full-stack conversational AI interface built with Next.js exploring dynamic chat and modern LLM interaction patterns.',
    description:
      'Modern Next.js web application implementing interactive AI chat interfaces, responsive dark-mode styling, dynamic state handling, and optimized Vercel edge deployment.',
    features: [
      'Modern conversational chat layout engineered with Next.js App Router',
      'Reactive message stream states with instant feedback indicators',
      'Dark-mode native Obsidian-aligned interface styling with Tailwind CSS',
      'Edge-deployed serverless architecture on Vercel infrastructure'
    ],
    techStack: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    image: null,
    visualType: 'aura-ai',
    githubUrl: 'https://github.com/SachinThakur1124/aura_ai',
    liveUrl: 'https://aura-ai-seven.vercel.app'
  }
];

// Aliases for compatibility
export const resumeProjects = professionalProjects;
export const companyProjects = professionalProjects;
export const allProjects = [...professionalProjects, ...personalProjects];
export const projects = allProjects;

export default allProjects;
