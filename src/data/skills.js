/**
 * Technical Skills Data
 * Categorized technical skills with verified technologies only.
 * No arbitrary percentages or progress bars.
 */

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Modern component-driven UIs, state architecture, and responsive web/mobile platforms.',
    skills: [
      { name: 'React.js', iconKey: 'react' },
      { name: 'Next.js', iconKey: 'nextjs' },
      { name: 'React Native', iconKey: 'reactnative' },
      { name: 'JavaScript', iconKey: 'javascript' },
      { name: 'TypeScript', iconKey: 'typescript' },
      { name: 'HTML5', iconKey: 'html5' },
      { name: 'CSS3', iconKey: 'css3' },
      { name: 'Redux', iconKey: 'redux' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    description: 'Scalable service architectures, RESTful API design, and security enforcement.',
    skills: [
      { name: 'Node.js', iconKey: 'nodejs' },
      { name: 'Express.js', iconKey: 'express' },
      { name: 'REST APIs', iconKey: 'restapi' },
      { name: 'Authentication', iconKey: 'auth' },
      { name: 'Authorization', iconKey: 'rbac' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'Document and relational modeling, query optimization, indexing, and data persistence.',
    skills: [
      { name: 'MongoDB', iconKey: 'mongodb' },
      { name: 'PostgreSQL', iconKey: 'postgresql' },
      { name: 'MySQL', iconKey: 'mysql' }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Containerization, cloud infrastructure, version control, and production hosting.',
    skills: [
      { name: 'AWS', iconKey: 'aws' },
      { name: 'Docker', iconKey: 'docker' },
      { name: 'Git', iconKey: 'git' },
      { name: 'GitHub', iconKey: 'github' },
      { name: 'Vercel', iconKey: 'vercel' }
    ]
  },
  {
    id: 'ai-engineering',
    title: 'AI Engineering & Tooling',
    description: 'LLM endpoint orchestration, retrieval-augmented generation pipelines, and agentic workflows.',
    skills: [
      { name: 'LLM Integrations', iconKey: 'llm' },
      { name: 'RAG', iconKey: 'rag' },
      { name: 'Cursor', iconKey: 'cursor' },
      { name: 'Claude Code', iconKey: 'claudecode' },
      { name: 'Ollama', iconKey: 'ollama' }
    ]
  }
];

export default skillCategories;
