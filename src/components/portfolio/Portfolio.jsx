import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiGithub,
  FiExternalLink,
  FiBriefcase,
  FiCode,
  FiLayers,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';
import { allProjects, professionalProjects, personalProjects } from '../../data/projects';
import ProjectVisual from './ProjectVisual';
import CTAButton from '../ui/CTAButton';
import './portfolio.scss';

const FILTER_TABS = [
  { id: 'all', label: 'All Projects', count: allProjects.length, icon: FiLayers },
  { id: 'professional', label: 'Professional', count: professionalProjects.length, icon: FiBriefcase },
  { id: 'personal', label: 'Personal', count: personalProjects.length, icon: FiCode }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);

  // 1. Get filtered list based on active category
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'professional') return professionalProjects;
    if (activeFilter === 'personal') return personalProjects;
    return allProjects;
  }, [activeFilter]);

  // 2. Reset expanded state whenever category filter changes
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setIsExpanded(false);
  };

  // 3. Slice to first 6 initially; reveal all when expanded or when count <= 6
  const visibleProjects = useMemo(() => {
    if (isExpanded || filteredProjects.length <= 6) {
      return filteredProjects;
    }
    return filteredProjects.slice(0, 6);
  }, [filteredProjects, isExpanded]);

  // Expand/collapse button appears only when there are more than 6 matching projects
  const hasMoreProjects = filteredProjects.length > 6;

  // 4. Smooth Toggle Expand / Collapse Handler
  const handleToggleExpand = () => {
    if (isExpanded) {
      setIsExpanded(false);
      // Smoothly scroll back to top of Portfolio section so user isn't left far down the page
      const portfolioElement = document.getElementById('Portfolio');
      if (portfolioElement) {
        portfolioElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section className="portfolio-section" id="Portfolio" aria-label="Selected Engineering Work">
      <div className="portfolio-container">
        {/* ------------------------------------------------------------------ */}
        {/* 1. Main Header                                                      */}
        {/* ------------------------------------------------------------------ */}
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="portfolio-header__tag font-mono">
            <span>PORTFOLIO &amp; ARCHITECTURE</span>
          </div>
          <h2 className="portfolio-header__title">
            Selected <span className="portfolio-header__highlight">Work</span>.
          </h2>
          <p className="portfolio-header__description">
            A comprehensive showcase of production enterprise systems and open-source applications.
            Engineered with modern frontend frameworks, scalable backend microservices, and AI integrations.
          </p>
        </motion.div>

        {/* ------------------------------------------------------------------ */}
        {/* 2. Category Filter Tabs                                             */}
        {/* ------------------------------------------------------------------ */}
        <div className="portfolio-filter-wrapper">
          <div
            className="portfolio-filter-tabs"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {FILTER_TABS.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeFilter === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls="projects-grid"
                  className={`filter-tab font-mono ${isActive ? 'filter-tab--active' : ''}`}
                  onClick={() => handleFilterChange(tab.id)}
                >
                  <TabIcon className="filter-tab__icon" />
                  <span className="filter-tab__label">{tab.label}</span>
                  <span className="filter-tab__count font-mono">({tab.count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* 3. Responsive Projects Showcase Grid (Initially 6 Projects)         */}
        {/* ------------------------------------------------------------------ */}
        <motion.div
          className="projects-grid"
          id="projects-grid"
          role="tabpanel"
          aria-labelledby={`tab-${activeFilter}`}
          layout
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="showcase-card"
                aria-label={`${project.title} - ${project.subtitle}`}
              >
                {/* 1. Dedicated Metadata Row Above Preview (Normal Flow, No Absolute Overlap) */}
                <div className="showcase-card__meta-row">
                  <span className="badge badge--category font-mono">
                    {project.category}
                  </span>
                  <span
                    className={`badge font-mono ${
                      project.isPrivate ? 'badge--private' : 'badge--public'
                    }`}
                  >
                    {project.visibility || (project.isPrivate ? 'Private' : 'Open Source')}
                  </span>
                </div>

                {/* 2. Project Preview (16:9 Aspect Ratio, Clean Window, Image Zoom on Hover) */}
                <div className="showcase-card__visual">
                  {project.image ? (
                    <div className="showcase-card__image-wrap">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="showcase-card__image"
                        loading="lazy"
                      />
                      <div className="showcase-card__overlay" />
                    </div>
                  ) : (
                    <div className="showcase-card__mockup-wrap">
                      <ProjectVisual project={project} />
                    </div>
                  )}
                </div>

                {/* 3, 4, 5, 6. Content Body: Title, Subtitle, 2-Line Description, Tech Tags */}
                <div className="showcase-card__body">
                  <h3 className="showcase-card__title">{project.title}</h3>
                  <h4 className="showcase-card__subtitle font-mono">{project.subtitle}</h4>

                  <p className="showcase-card__desc">
                    {project.tagline || project.description}
                  </p>

                  <div className="showcase-card__tech">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-chip font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 7. Footer: Project Links or Private Client Notice */}
                <div className="showcase-card__footer">
                  {project.isPrivate ? (
                    <div className="confidential-notice font-mono">
                      <span>Private System · Proprietary Architecture</span>
                    </div>
                  ) : (
                    <div className="showcase-card__links">
                      {project.githubUrl && (
                        <CTAButton
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="ghost"
                          size="sm"
                          icon={FiGithub}
                          iconPosition="left"
                          className="showcase-card__btn"
                        >
                          GitHub
                        </CTAButton>
                      )}

                      {project.liveUrl && (
                        <CTAButton
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="primary"
                          size="sm"
                          icon={FiExternalLink}
                          iconPosition="right"
                          className="showcase-card__btn"
                        >
                          Live Demo
                        </CTAButton>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ------------------------------------------------------------------ */}
        {/* 4. Centered "View All Projects" / "Show Less" Button               */}
        {/* ------------------------------------------------------------------ */}
        {hasMoreProjects && (
          <div className="portfolio-toggle-wrapper">
            <button
              type="button"
              className="portfolio-toggle-btn font-mono"
              onClick={handleToggleExpand}
              aria-expanded={isExpanded}
              aria-controls="projects-grid"
            >
              <span>
                {isExpanded
                  ? 'Show Less'
                  : `View All Projects (${filteredProjects.length})`}
              </span>
              {isExpanded ? (
                <FiChevronUp className="portfolio-toggle-btn__icon" />
              ) : (
                <FiChevronDown className="portfolio-toggle-btn__icon" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
