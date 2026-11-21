import React from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiGithub,
  FiCheckCircle,
  FiDownload
} from 'react-icons/fi';
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
                href="/assets/Sachin-Thakur-Resume.pdf"
                download="Sachin-Thakur-Resume.pdf"
                variant="secondary"
                size="lg"
                icon={FiDownload}
                iconPosition="left"
              >
                Download Resume
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
                alt="Developer workstation coding interface"
                className="hero-illustration"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
