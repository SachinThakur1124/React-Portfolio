/**
 * Portfolio Projects Data
 * 
 * Synchronized directly with verified resume project records:
 * 1. OptiNetFlow (B2B Payment Interchange-Optimization Engine)
 * 2. DLC (React + Headless WordPress + Algolia Search)
 * 3. IT Riders (Python Automated Resume-Parsing Pipeline)
 * 4. Crikk (SvelteKit + Azure Speech AI Suite)
 * 5. Sukhi Wellness (React Native Health & Gamified Engagement App)
 * 6. School Management System (Educational Administration & Billing ERP)
 * 
 * Rules:
 * - Zero fabricated GitHub repositories, live demo URLs, screenshots, or metrics.
 * - Proprietary client/company projects carry clear professional badges.
 */

export const projects = [
  {
    id: 'optinetflow',
    title: 'OptiNetFlow',
    subtitle: 'B2B Payment Interchange-Optimization Engine',
    category: 'Enterprise FinTech Platform',
    isPrivate: true,
    privateLabel: 'Private Company Project',
    tagline: 'High-throughput interchange-optimization engine built for enterprise B2B payment transactions.',
    overview:
      'Engineered an interchange-optimization engine to minimize merchant processing overhead, enrich payment transactions with card-level metadata, and automate multi-party fee splits.',
    problemSolved:
      'Enterprise B2B platforms process high-volume card payments that incur unnecessary interchange fees and settlement delays without Level 2/3 data optimization and automated dispute auditing.',
    myContribution:
      'Architected event-driven ingestion pipelines, Level 2/3 data enrichment services, append-only PostgreSQL financial ledgers, and secure webhook verification workers.',
    features: [
      'Level 2/3 card data enrichment and Stripe Connect Direct Charges integration',
      'Event-driven Shopify and Stripe webhook pipeline orchestrated via AWS SQS FIFO queues',
      'Append-only PostgreSQL ledger architecture guaranteeing idempotent financial record processing',
      'Multi-party programmatic fee splitting and automated monthly merchant settlement pipelines',
      'AES-256-GCM field encryption and HMAC SHA-256 webhook signature verification'
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
    category: 'Commercial Web Application',
    isPrivate: true,
    privateLabel: 'Commercial Client Project',
    tagline: 'Fast, faceted search and discovery engine for catalog of 5,000+ items across headless architecture.',
    overview:
      'Integrated an ultra-fast, faceted search and discovery experience for an extensive catalog of 5,000+ items across a headless CMS architecture.',
    problemSolved:
      'Extensive e-commerce and media content catalogs suffered from slow keyword querying, high search bounce rates, and poor discoverability across complex product hierarchies.',
    myContribution:
      'Connected Algolia instant search indices with a custom React client, optimized query debounce pipelines, and established faceted filtering for sub-300ms discovery.',
    features: [
      'Integrated Algolia instant search engine with React frontend and Headless WordPress REST backend',
      'Built typo-tolerant real-time indexing pipeline with response latencies under 300 ms',
      'Implemented multi-attribute faceted filtering, sorting, and category hierarchies across 5,000+ items',
      'Optimized client-side cache and query debouncing to minimize redundant API payload transmissions'
    ],
    techStack: [
      'React.js',
      'Headless WordPress',
      'Algolia Search',
      'JavaScript',
      'REST APIs',
      'CSS3'
    ],
    architecture: 'Decoupled React Client + Headless WordPress CMS',
    githubUrl: null,
    liveUrl: null,
    image: null,
    visualType: 'dlc-search'
  },
  {
    id: 'it-riders',
    title: 'IT Riders',
    subtitle: 'Automated Resume Parsing & Talent Intelligence Pipeline',
    category: 'Enterprise HRTech System',
    isPrivate: true,
    privateLabel: 'Enterprise Client Project',
    tagline: 'Automated document parsing and entity-extraction pipeline for technical recruitment.',
    overview:
      'Designed an automated candidate ingestion and resume intelligence pipeline that parses technical CVs, extracts verified competencies, and scores experience depth.',
    problemSolved:
      'Technical recruitment teams spent hundreds of manual hours reviewing unstructured resumes across varying formats, creating hiring bottlenecks and inconsistent candidate assessments.',
    myContribution:
      'Engineered Python document parsing workers, entity recognition models for skills and job tenures, and clean REST APIs for applicant tracking integrations.',
    features: [
      'Designed and deployed an end-to-end resume extraction and parsing pipeline in Python',
      'Extracted structured candidate skill sets, experience hierarchies, and proficiency tiers from unstructured resumes',
      'Achieved approximately 40% reduction in recruiter candidate review and screening cycle time',
      'Exposed clean REST API endpoints for seamless ATS platform integration and automated candidate profiling'
    ],
    techStack: [
      'Python',
      'REST APIs',
      'NLP Parsing',
      'FastAPI',
      'JSON Schema'
    ],
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
    category: 'AI Speech Platform',
    isPrivate: true,
    privateLabel: 'Production Web Application',
    tagline: 'AI-powered voice generation suite delivering natural-sounding text-to-speech and precision speech-to-text.',
    overview:
      'Production AI speech synthesis application supporting realistic multi-language text-to-speech streaming, automated speech-to-text transcriptions, and audio workspace tools.',
    problemSolved:
      'Content creators and accessibility users required ultra-low-latency, multi-language speech generation without audio clipping or browser-side playback degradation.',
    myContribution:
      'Integrated Azure Cognitive Services Speech SDK with Python audio rendering microservices and migrated frontend architecture to SvelteKit with zero regression.',
    features: [
      'Integrated Azure Speech SDK and specialized Python audio processing workers for low-latency voice synthesis',
      'Implemented real-time text-to-speech (TTS) streaming and accurate multi-language speech-to-text (STT)',
      'Migrated production application to SvelteKit with 100% functional parity and zero regression in core workflows',
      'Engineered responsive audio waveform visualization and browser-native player playback controls'
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
    visualType: 'crikk-voice'
  },
  {
    id: 'sukhi-wellness',
    title: 'Sukhi Wellness',
    subtitle: 'Mobile Health & Gamified Engagement Application',
    category: 'Cross-Platform Mobile App',
    isPrivate: true,
    privateLabel: 'Mobile Application',
    tagline: 'Cross-platform mobile application modules encouraging mental wellness through habit gamification.',
    overview:
      'Cross-platform mental health and wellness mobile application designed to promote daily reflective routines, guided exercises, and milestone achievements.',
    problemSolved:
      'Mental health and wellness platforms face steep drop-offs without engaging milestone rewards, habit streaks, and reliable cross-session video progress persistence.',
    myContribution:
      'Built reusable badge progression components, streak tracking storage, and real-time video watch telemetry in React Native for iOS and Android.',
    features: [
      'Developed modular, reusable Badge components and celebration milestone micro-interactions',
      'Implemented a gamified achievement progression engine with persistent user streak tracking',
      'Integrated real-time video-watch progress telemetry and cross-session state synchronization',
      'Maintained 60 FPS UI fluid performance across both iOS and Android release builds'
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
    subtitle: 'Comprehensive Educational Administration & Billing ERP',
    category: 'Enterprise ERP Platform',
    isPrivate: true,
    privateLabel: 'Private Company Project',
    tagline: 'Comprehensive educational administration and institutional ERP platform.',
    overview:
      'A production-oriented educational management system designed to streamline institutional administration, multi-step student admissions, fee tracking, and departmental operations.',
    problemSolved:
      'Replaced manual paperwork and disparate spreadsheets with a unified system managing courses, fee schedules, installment tracking, and role-based staff access.',
    myContribution:
      'Developed core backend controllers and routes in Express, designed MongoDB schema models for student admissions, course fees, installment calculations, and receipts, and built modular admin interfaces in React with TypeScript.',
    features: [
      'Built dynamic, schema-driven custom-field form engines for flexible student enrollment records',
      'Engineered calendar-based automated reminder scheduling and alert dispatches for pending dues',
      'Developed structured monthly student data collection organized systematically by billing and fee cycles',
      'Implemented secure role-based access control (RBAC) across administrative, faculty, and accounting personnel'
    ],
    techStack: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'RBAC'
    ],
    architecture: 'MERN ERP Architecture',
    githubUrl: null,
    liveUrl: null,
    image: null,
    visualType: 'school-erp'
  }
];
