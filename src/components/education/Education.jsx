import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { educationHistory } from '../../data/experience';
import './education.scss';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Education = () => {
  return (
    <section className="education-section" id="Education" aria-label="Formal Education and Academic Credentials">
      {/* Lowercase anchor alias for seamless hash navigation */}
      <span id="education" className="education-anchor-alias" aria-hidden="true" />

      <div className="education-container">
        {/* Section Header */}
        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="education-header__tag font-mono">
            <span>ACADEMIC CREDENTIALS</span>
          </div>
          <h2 className="education-header__title">
            Formal Education &amp; <span className="education-header__highlight">Degrees</span>.
          </h2>
          <p className="education-header__description">
            A verified chronological record of formal university degrees and academic qualifications in Computer Applications.
          </p>
        </motion.div>

        {/* Academic Timeline / Education Cards */}
        <div className="education-layout">
          <motion.div
            className="education-timeline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {educationHistory.map((item, index) => (
              <motion.article
                key={item.id}
                className="education-timeline-item"
                variants={itemVariants}
              >
                {/* Timeline Axis Node */}
                <div className="timeline-axis">
                  <div className="timeline-axis__node" aria-hidden="true">
                    <FaGraduationCap className="timeline-axis__icon" />
                  </div>
                  {index < educationHistory.length - 1 && (
                    <div className="timeline-axis__line" aria-hidden="true" />
                  )}
                </div>

                {/* Degree Card */}
                <div className="education-card">
                  <div className="education-card__top">
                    <div className="badge-group">
                      <span className="degree-level-badge font-mono">
                        {item.degreeLevel}
                      </span>
                      <span className="status-pill font-mono">
                        <span className="status-pill__dot" />
                        <span>{item.status}</span>
                      </span>
                    </div>

                    <div className="completion-tag font-mono">
                      <FiCheckCircle className="completion-tag__icon" />
                      <span>{item.completed}</span>
                    </div>
                  </div>

                  <div className="education-card__main">
                    <h3 className="education-degree-title">{item.degree}</h3>
                    <p className="education-school-name font-mono">{item.institution}</p>
                  </div>

                  <div className="education-meta font-mono">
                    <span className="education-meta__item">
                      <FiCalendar className="education-meta__icon" />
                      <span>{item.duration}</span>
                    </span>
                    {item.location && (
                      <span className="education-meta__item">
                        <FiMapPin className="education-meta__icon" />
                        <span>{item.location}</span>
                      </span>
                    )}
                    <span className="education-meta__item">
                      <FiCheckCircle className="education-meta__icon education-meta__icon--success" />
                      <span>Status: {item.status}</span>
                    </span>
                  </div>

                  <p className="education-card__details">
                    {item.description}
                  </p>

                  <div className="education-card__footer font-mono">
                    <FiCheckCircle className="verified-icon" />
                    <span>Verified Academic Degree · Conferred by Accredited Institution</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Academic Transparency / Verification Notice */}
          <motion.div
            className="education-notice"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="education-notice__header font-mono">
              <FiAlertCircle className="education-notice__icon" />
              <span>Academic Credential Verification</span>
            </div>
            <p className="education-notice__text font-mono">
              Academic qualifications reflect completed, accredited degree programs in Computer Applications. All credentials are verified against institutional records with no unverified metrics or fabricated grades.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
