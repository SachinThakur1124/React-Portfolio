import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiLayers, FiTrendingUp, FiCpu, FiCheckCircle } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { TbSparkles } from 'react-icons/tb';
import './about.scss';

// Animation variants
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const About = () => {
  return (
    <section className="about-section" id="AboutMe" aria-label="About Sachin Thakur">
      <div className="about-container">
        {/* Section Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-header__tag font-mono">
            <span>ABOUT THE ENGINEER</span>
          </div>
          <h2 className="about-header__title">
            Engineering with Purpose, <span className="about-header__highlight">Built for Scale</span>.
          </h2>
          <p className="about-header__description">
            A comprehensive look at my background, technical focus areas, and verified engineering track record.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Card 1: Core Professional Bio (Spans 8 cols on desktop) */}
          <motion.div className="bento-card bento-card--bio" variants={cardVariants}>
            <div className="bento-card__header">
              <span className="bento-card__badge font-mono">
                <FiLayers className="bento-card__badge-icon" />
                <span>Full-Stack Software Engineer</span>
              </span>
              <div className="bento-card__location font-mono">
                <FiMapPin className="bento-card__location-icon" />
                <span>Mohali, India</span>
              </div>
            </div>

            <div className="bento-card__body">
              <h3 className="bento-card__headline">
                Crafting dependable digital systems from database schemas to reactive interfaces.
              </h3>
              <p className="bento-card__text">
                I am a <strong>Full-Stack Software Engineer</strong> with <strong>2.4+ years of professional experience</strong> architecting 
                and delivering production web and mobile applications. My expertise spans the complete <strong>MERN stack</strong>, 
                high-throughput RESTful backend APIs, and modern <strong>AI Engineering &amp; RAG</strong> integrations.
              </p>
              <p className="bento-card__text">
                I take full-cycle ownership of software solutions — from designing normalized document schemas in MongoDB and PostgreSQL, 
                to enforcing robust JWT/RBAC security pipelines in Node.js, down to fine-tuning component render cycles in React and Next.js.
              </p>
            </div>

            <div className="bento-card__footer">
              <div className="status-indicator">
                <span className="status-indicator__dot" />
                <span className="status-indicator__text font-mono">Available for software engineering roles</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Profile Portrait (Spans 4 cols on desktop) */}
          <motion.div className="bento-card bento-card--portrait" variants={cardVariants}>
            <div className="portrait-wrapper">
              <img
                src="/sachin.jpeg"
                alt="Sachin Thakur - Full-Stack Software Engineer"
                className="portrait-image"
                loading="lazy"
              />
              <div className="portrait-overlay" />
              <div className="portrait-info">
                <h4 className="portrait-name">Sachin Thakur</h4>
                <p className="portrait-role font-mono">MERN Stack · AI Engineering</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Experience Highlight (Spans 4 cols) */}
          <motion.div className="bento-card bento-card--experience" variants={cardVariants}>
            <div className="metric-display">
              <span className="metric-display__number font-mono">2.4+</span>
              <span className="metric-display__label">Years Professional Experience</span>
            </div>
            <p className="bento-card__text bento-card__text--subtle">
              Delivering verified commercial applications, scalable backend micro-modules, and production frontend codebases.
            </p>
            <div className="experience-tags font-mono">
              <span className="experience-tag">Production Ready</span>
              <span className="experience-tag">Full-Cycle</span>
            </div>
          </motion.div>

          {/* Card 4: Technical Focus Areas (Spans 8 cols) */}
          <motion.div className="bento-card bento-card--focus" variants={cardVariants}>
            <div className="bento-card__header">
              <span className="bento-card__badge font-mono">
                <FiCpu className="bento-card__badge-icon" />
                <span>Technical Specializations</span>
              </span>
            </div>

            <div className="specializations-grid">
              <div className="specialization-item">
                <div className="specialization-item__icon-wrapper">
                  <FiLayers />
                </div>
                <div className="specialization-item__content">
                  <h4 className="specialization-item__title">MERN Stack Architecture</h4>
                  <p className="specialization-item__desc">
                    Modular React &amp; Next.js components, TypeScript, Redux state management, and optimized responsive layouts.
                  </p>
                </div>
              </div>

              <div className="specialization-item">
                <div className="specialization-item__icon-wrapper">
                  <FiTrendingUp />
                </div>
                <div className="specialization-item__content">
                  <h4 className="specialization-item__title">Scalable Backends &amp; APIs</h4>
                  <p className="specialization-item__desc">
                    Node.js &amp; Express RESTful services, JWT authentication, RBAC authorization, MongoDB, and PostgreSQL modeling.
                  </p>
                </div>
              </div>

              <div className="specialization-item">
                <div className="specialization-item__icon-wrapper specialization-item__icon-wrapper--accent">
                  <TbSparkles />
                </div>
                <div className="specialization-item__content">
                  <h4 className="specialization-item__title">AI &amp; RAG Systems</h4>
                  <p className="specialization-item__desc">
                    LLM integrations, retrieval-augmented generation pipelines, and modern agentic development with Cursor and Claude Code.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Education (Spans 6 cols) */}
          <motion.div className="bento-card bento-card--education" variants={cardVariants}>
            <div className="education-card-header">
              <div className="education-icon-wrapper">
                <FaGraduationCap />
              </div>
              <div>
                <span className="education-card-tag font-mono">ACADEMIC CREDENTIAL</span>
                <h4 className="education-degree">Master of Computer Applications (MCA)</h4>
              </div>
            </div>

            <div className="education-institution">
              <p className="education-university">Lovely Professional University</p>
              <div className="education-badge font-mono">
                <FiCheckCircle className="education-badge__icon" />
                <span>Completed October 2026</span>
              </div>
            </div>

            <p className="education-note">
              Comprehensive computer science curriculum with intensive focus on advanced software development, database engineering, and distributed systems.
            </p>
          </motion.div>

          {/* Card 6: Verified Achievements (Spans 6 cols) */}
          <motion.div className="bento-card bento-card--achievements" variants={cardVariants}>
            <div className="bento-card__header">
              <span className="bento-card__badge font-mono">
                <FiCheckCircle className="bento-card__badge-icon" />
                <span>Verified Engineering Metrics</span>
              </span>
            </div>

            <div className="achievements-columns">
              <div className="achievement-stat">
                <span className="achievement-stat__value font-mono">6+</span>
                <span className="achievement-stat__label">Apps Delivered End-to-End</span>
              </div>
              <div className="achievement-divider" />
              <div className="achievement-stat">
                <span className="achievement-stat__value font-mono">10+</span>
                <span className="achievement-stat__label">REST &amp; API Integrations</span>
              </div>
              <div className="achievement-divider" />
              <div className="achievement-stat">
                <span className="achievement-stat__value font-mono">~30%</span>
                <span className="achievement-stat__label">Frontend Speed Boost</span>
              </div>
            </div>

            <p className="achievements-note font-mono">
              Rigorous code quality, modular component design, and zero unverified metrics.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
