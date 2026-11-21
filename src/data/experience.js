/**
 * Professional Experience & Education Data
 * Reflects verified achievements without fabricating unconfirmed dates or roles.
 */

export const professionalExperience = [
  {
    id: 'appstechy',
    company: 'Appstechy',
    role: 'Full-Stack Engineer',
    period: 'Mar 2025 – Present', // Verified from resume
    location: 'Mohali, India',
    isCurrent: true,
    summary:
      'Architecting and shipping production-grade full-stack web and mobile applications end-to-end across React.js, Next.js, React Native, and Node.js with containerized cloud deployments.',
    achievements: [
      'Built and shipped 6+ production full-stack web and mobile applications end-to-end across React.js, Next.js, React Native, and Node.js.',
      'Integrated 10+ REST and GraphQL APIs and third-party services, cutting integration effort and reducing frontend load time by ~30% through code-splitting, caching, and query optimization.',
      'Built a RAG-based assistant integrating vector databases (Pinecone/Chroma) and LLM APIs (OpenAI, Anthropic, Groq) to deliver context-aware, retrieval-grounded responses over product data.',
      'Led legacy-to-modern framework migrations with zero regression in core user flows, improving maintainability and page performance.',
      'Accelerated delivery cycles by ~25% using AI-assisted development (Cursor, Claude, Antigravity) while maintaining rigorous code quality standards.'
    ],
    technologies: [
      'React.js',
      'Next.js',
      'React Native',
      'Node.js',
      'Express.js',
      'TypeScript',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'AWS'
    ]
  },
  {
    id: 'visual-media-academy',
    company: 'Visual Media Academy',
    role: 'Full-Stack Engineer',
    period: 'Jul 2024 – Feb 2025', // Verified from resume
    location: 'Chandigarh, India',
    isCurrent: false,
    summary:
      'Developed responsive, user-facing web features with React and modern JavaScript, integrating frontends with backend REST APIs.',
    achievements: [
      'Developed responsive, user-facing web features with React and modern JavaScript, integrating frontends with backend REST APIs.',
      'Built client-facing search, reusable UI component libraries, and data-driven features in an agile team, improving development speed and UI consistency.'
    ],
    technologies: ['React.js', 'JavaScript', 'Node.js', 'REST APIs', 'HTML5', 'CSS3', 'Git']
  }
];

export const educationHistory = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    shortDegree: 'MCA',
    degreeLevel: 'Postgraduate Degree',
    institution: 'Lovely Professional University',
    location: '',
    duration: 'Completed October 2026',
    completed: 'October 2026',
    status: 'Completed',
    description:
      'Advanced postgraduate curriculum in computer applications, distributed software architecture, systems programming, and database design.'
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    shortDegree: 'BCA',
    degreeLevel: 'Undergraduate Degree',
    institution: 'Sri Guru Gobind Singh College',
    location: 'Chandigarh',
    duration: 'August 2021 – April 2024',
    completed: 'April 2024',
    status: 'Completed',
    description:
      'Foundational undergraduate program covering core computer science principles, data structures, algorithms, relational databases, and software engineering.'
  }
];

// Preserved for backward compatibility
export const education = educationHistory[0];

export const contactDetails = {
  email: 'sachinthakur7814@gmail.com',
  location: 'Mohali, India',
  github: 'https://github.com/SachinThakur1124',
  linkedin: 'https://www.linkedin.com/in/sachin-thakur-0726902a0/',
  resumeUrl: '/assets/Sachin-Thakur-Resume.pdf'
};

export default professionalExperience;
