import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiLock, FiCheckCircle } from 'react-icons/fi';
import { projects } from '../../data/projects';
import ProjectVisual from './ProjectVisual';
import CTAButton from '../ui/CTAButton';
import './portfolio.scss';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Section Header with smooth entrance */}
      <motion.div
        className="portfolio-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="portfolio-header__tag font-mono">
          <span>SELECTED WORK</span>
        </div>
        <h2 className="portfolio-header__title">
          Featured Engineering <span className="portfolio-header__highlight">Projects &amp; Case Studies</span>.
        </h2>
        <p className="portfolio-header__description">
          A collection of production-grade systems, enterprise platforms, and full-stack applications.
          Company-owned proprietary projects are presented with architectural case studies.
        </p>
      </motion.div>

      {/* Projects List — Standard document flow with individual scroll reveal */}
      <div className="projects-list">
        {projects.map((project, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <motion.article
              key={project.id}
              className={`project-card ${isReversed ? 'project-card--reversed' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              aria-label={`Project: ${project.title}`}
            >
              {/* Content Column (Items 1 through 7) */}
              <div className="project-card__content">
                {/* Meta Header */}
                <div className="project-card__meta">
                  {project.isPrivate ? (
                    <span className="project-badge project-badge--private font-mono">
                      <FiLock className="project-badge__icon" />
                      <span>{project.privateLabel || 'Private Company Project'}</span>
                    </span>
                  ) : (
                    <span className="project-badge project-badge--public font-mono">
                      <span>{project.category || 'Independent Project'}</span>
                    </span>
                  )}
                  <span className="project-arch-tag font-mono">{project.architecture}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="project-card__title">{project.title}</h3>
                <h4 className="project-card__subtitle font-mono">{project.subtitle}</h4>

                {/* Problem & Overview */}
                <p className="project-card__desc">{project.problemSolved}</p>

                {/* Key Engineering Highlights / Contribution */}
                <div className="project-card__features">
                  <span className="features-label font-mono">Key Engineering Contribution:</span>
                  <ul className="features-list">
                    {project.features ? (
                      project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="feature-item">
                          <FiCheckCircle className="feature-item__icon" />
                          <span>{feat}</span>
                        </li>
                      ))
                    ) : (
                      <li className="feature-item">
                        <FiCheckCircle className="feature-item__icon" />
                        <span>{project.myContribution}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="project-card__tech">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="project-card__actions">
                  {project.liveUrl && (
                    <CTAButton
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                      icon={FiExternalLink}
                      iconPosition="right"
                    >
                      Live Demo
                    </CTAButton>
                  )}

                  {project.githubUrl && (
                    <CTAButton
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      icon={FiGithub}
                      iconPosition="left"
                    >
                      Source Code
                    </CTAButton>
                  )}

                  {project.isPrivate && (
                    <div className="private-confidential-notice font-mono">
                      <FiLock className="notice-icon" />
                      <span>{project.privateLabel} &middot; Proprietary Architecture</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Visual Preview Column (Item 8) with subtle smooth reveal */}
              <motion.div
                className="project-card__visual"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectVisual project={project} />
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
