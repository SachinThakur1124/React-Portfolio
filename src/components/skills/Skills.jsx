import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel
} from 'react-icons/si';
import { FaAws, FaCss3Alt } from 'react-icons/fa';
import { TbBrandReactNative, TbSparkles, TbBrain, TbTerminal2, TbFlame } from 'react-icons/tb';
import { FiServer, FiLock, FiShield, FiCpu, FiCode } from 'react-icons/fi';
import { skillCategories } from '../../data/skills';
import './skills.scss';

// Map icon keys to actual React icon components
const ICON_MAP = {
  react: SiReact,
  nextjs: SiNextdotjs,
  reactnative: TbBrandReactNative,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html5: SiHtml5,
  css3: FaCss3Alt,
  redux: SiRedux,
  nodejs: SiNodedotjs,
  express: SiExpress,
  restapi: FiServer,
  auth: FiLock,
  rbac: FiShield,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  aws: FaAws,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  vercel: SiVercel,
  llm: TbSparkles,
  rag: FiCpu,
  cursor: TbTerminal2,
  claudecode: TbBrain,
  ollama: TbFlame,
  default: FiCode
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Skills = () => {
  return (
    <section className="skills-section" id="Skills" aria-label="Technical Skills">
      <div className="skills-container">
        {/* Section Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="skills-header__tag font-mono">
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="skills-header__title">
            Skills &amp; <span className="skills-header__highlight">Engineering Stack</span>.
          </h2>
          <p className="skills-header__description">
            A comprehensive, verified directory of my full-stack and AI engineering toolkit.
            Structured across frontend, backend, databases, cloud DevOps, and agentic developer tooling.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              className={`skill-category-card skill-category-card--${category.id}`}
              variants={cardVariants}
            >
              <div className="skill-category-header">
                <h3 className="skill-category-title">{category.title}</h3>
                <p className="skill-category-desc">{category.description}</p>
              </div>

              <div className="skill-pills-list">
                {category.skills.map((skill) => {
                  const IconComponent = ICON_MAP[skill.iconKey] || ICON_MAP.default;
                  return (
                    <div key={skill.name} className="skill-pill">
                      <IconComponent className="skill-pill__icon" />
                      <span className="skill-pill__name font-mono">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
