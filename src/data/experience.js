/**
 * Professional Experience & Education Data
 * Reflects verified achievements without fabricating unconfirmed dates or roles.
 */

export const professionalExperience = [
  {
    id: 'appstechy',
    company: 'Appstechy',
    role: 'Full-Stack Engineer',
    period: 'Professional Experience', // Dates to be confirmed by user
    location: 'Mohali, India',
    isCurrent: true,
    summary:
      'Developed and maintained production-grade web and mobile applications, engineering robust full-stack features from conception to deployment.',
    achievements: [
      'Developed and maintained production web and mobile applications across client engagements.',
      'Delivered 6+ applications end-to-end with full-cycle technical ownership.',
      'Designed and integrated 10+ scalable RESTful and third-party APIs.',
      'Improved frontend load performance by approximately 30% through render optimization and asset pipeline tuning.'
    ],
    technologies: [
      'React.js',
      'Next.js',
      'React Native',
      'Node.js',
      'Express.js',
      'TypeScript',
      'MongoDB',
      'PostgreSQL'
    ]
  },
  {
    id: 'visual-media-academy',
    company: 'Visual Media Academy',
    role: 'Full-Stack Developer',
    period: 'Previous Experience', // Dates to be confirmed by user
    location: 'India',
    isCurrent: false,
    summary:
      'Contributed to web application development initiatives, implementing responsive client features and backend services.',
    achievements: [
      'Built modular user interface components and responsive client-side pages.',
      'Assisted in data modeling, API integration, and client feedback implementation.'
    ],
    technologies: ['React.js', 'JavaScript', 'Node.js', 'HTML5', 'CSS3', 'Git']
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
  linkedin: 'https://www.linkedin.com/in/sachin-thakur-471249265/'
};

export default professionalExperience;
