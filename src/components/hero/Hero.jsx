import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowRight, FiGithub, FiCheckCircle } from 'react-icons/fi';
import CTAButton from '../ui/CTAButton';
import './hero.scss';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const illustrationVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  },
};

const Hero = () => {
  return (
    <section className="hero-section" id="Home">
      <div className="hero-ambient-glow" />

      <div className="hero-container">
        <motion.div
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Introduction & CTAs */}
          <div className="hero-content">
            {/* Status Badge */}
            <motion.div className="hero-badge" variants={itemVariants}>
              <span className="hero-badge__dot" />
              <span className="hero-badge__text">
                Full-Stack Software Engineer · MERN &amp; AI
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 className="hero-title" variants={itemVariants}>
              Architecting <span className="hero-title__highlight">Scalable Web Systems</span> &amp; Intelligent Applications.
            </motion.h1>

            {/* Supporting Pitch */}
            <motion.p className="hero-description" variants={itemVariants}>
              I'm <strong className="hero-description__name">Sachin Thakur</strong>, a Full-Stack Engineer with{' '}
              <strong className="hero-description__highlight">2.4+ years</strong> of professional experience delivering
              robust MERN stack architectures, high-performance REST APIs, and generative AI &amp; RAG workflows.
            </motion.p>

            {/* Key Verified Highlights Pills */}
            <motion.div className="hero-metrics-strip" variants={itemVariants}>
              <div className="hero-metric-item">
                <FiCheckCircle className="hero-metric-item__icon" />
                <span>6+ Apps Shipped</span>
              </div>
              <div className="hero-metric-item">
                <FiCheckCircle className="hero-metric-item__icon" />
                <span>10+ REST Integrations</span>
              </div>
              <div className="hero-metric-item">
                <FiCheckCircle className="hero-metric-item__icon" />
                <span>~30% Performance Boost</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div className="hero-actions" variants={itemVariants}>
              <CTAButton
                href="#Portfolio"
                variant="primary"
                size="lg"
                icon={FiArrowRight}
                iconPosition="right"
              >
                View Featured Work
              </CTAButton>

              <CTAButton
                href="#contact"
                variant="secondary"
                size="lg"
              >
                Get in Touch
              </CTAButton>

              <CTAButton
                href="https://github.com/SachinThakur1124"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="lg"
                icon={FiGithub}
                iconPosition="left"
              >
                GitHub
              </CTAButton>
            </motion.div>
          </div>

          {/* Right Column: Developer Vector Illustration */}
          <motion.div
            className="hero-visual"
            variants={illustrationVariants}
          >
            <motion.div
              className="hero-visual__wrapper"
              variants={floatingVariants}
              animate="animate"
            >
              <img
                src="/assets/developer-workspace.svg"
                alt="Developer workstation coding interface illustration"
                className="hero-visual__image"
                width="680"
                height="540"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#Portfolio"
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          aria-label="Scroll down to projects"
        >
          <span className="hero-scroll__text">EXPLORE</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowDown className="hero-scroll__icon" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
