import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { professionalExperience } from '../../data/experience';
import './experience.scss';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
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

const Experience = () => {
  return (
    <section className="experience-section" id="Experience" aria-label="Professional Experience">
      <div className="experience-container">
        {/* Section Header */}
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="experience-header__tag font-mono">
            <span>CAREER &amp; TRACK RECORD</span>
          </div>
          <h2 className="experience-header__title">
            Professional <span className="experience-header__highlight">Experience</span>.
          </h2>
          <p className="experience-header__description">
            A chronological timeline of production engineering roles, verified deliverables, and commercial system ownership.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="experience-layout">
          <div className="experience-column">
            <h3 className="column-title font-mono">
              <FiBriefcase className="column-title__icon" />
              <span>Commercial Engineering Roles</span>
            </h3>

            <motion.div
              className="timeline-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {professionalExperience.map((exp) => (
                <motion.article
                  key={exp.id}
                  className={`timeline-card ${exp.isCurrent ? 'timeline-card--current' : ''}`}
                  variants={itemVariants}
                >
                  <div className="timeline-card__header">
                    <div>
                      <div className="role-company-row">
                        <h4 className="timeline-role">{exp.role}</h4>
                        <span className="role-at font-mono">@</span>
                        <span className="timeline-company">{exp.company}</span>
                      </div>
                      <div className="timeline-meta font-mono">
                        <span className="timeline-meta__item">
                          <FiCalendar /> {exp.period}
                        </span>
                        <span className="timeline-meta__item">
                          <FiMapPin /> {exp.location}
                        </span>
                      </div>
                    </div>

                    {exp.isCurrent && (
                      <span className="current-badge font-mono">
                        <span className="current-badge__dot" />
                        <span>Active Role</span>
                      </span>
                    )}
                  </div>

                  <p className="timeline-card__summary">{exp.summary}</p>

                  <div className="timeline-card__achievements">
                    <span className="achievements-heading font-mono">Verified Deliverables:</span>
                    <ul className="achievements-checklist">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="achievement-point">
                          <FiCheckCircle className="achievement-point__icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="timeline-card__tech">
                    {exp.technologies.map((t) => (
                      <span key={t} className="tech-chip font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Verification & Transparency Notice */}
            <motion.div
              className="transparency-notice"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="transparency-notice__header font-mono">
                <FiAlertCircle className="transparency-notice__icon" />
                <span>Experience Verification Notice</span>
              </div>
              <p className="transparency-notice__text font-mono">
                Employment dates for commercial roles reflect verified experience. Exact calendar start/end dates are maintained in employment verification documentation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
