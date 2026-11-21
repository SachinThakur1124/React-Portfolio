import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowUpRight } from 'react-icons/fi';
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactDetails } from '../../data/experience';
import './MobileMenu.scss';

const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

const linkVariants = {
  closed: { opacity: 0, x: -10 },
  open: { opacity: 1, x: 0 }
};

const MobileMenu = ({ isOpen, onClose, navLinks }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div className="mobile-menu__header">
            <span className="mobile-menu__title">
              Navigation
            </span>
            <button
              className="mobile-menu__close-btn"
              onClick={onClose}
              aria-label="Close navigation menu"
            >
              <FiX />
            </button>
          </div>

          <nav className="mobile-menu__nav">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="mobile-menu__link"
                variants={linkVariants}
                onClick={onClose}
              >
                <span>{link.name}</span>
                <span className="mobile-menu__link-arrow">→</span>
              </motion.a>
            ))}
          </nav>

          <div className="mobile-menu__footer">
            {/* 1. Get in Touch Primary Action */}
            <a
              href="#contact"
              className="mobile-menu__action-btn mobile-menu__action-btn--primary"
              onClick={onClose}
              aria-label="Get in Touch"
            >
              <span>Get in Touch</span>
              <FiArrowUpRight className="mobile-action-icon" />
            </a>

            {/* 2. Resume Download Action */}
            <a
              href="/assets/Sachin-Thakur-Resume.pdf"
              download="Sachin-Thakur-Resume.pdf"
              className="mobile-menu__action-btn mobile-menu__action-btn--secondary"
              onClick={onClose}
              aria-label="Download Resume (PDF)"
            >
              <FaFilePdf className="mobile-action-icon" />
              <span>Download Resume (PDF)</span>
            </a>

            {/* 3. Compact Icon + Text Social Links */}
            <div className="mobile-menu__socials">
              <a
                href="https://github.com/SachinThakur1124"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-menu__social-link"
                onClick={onClose}
                aria-label="GitHub Profile"
              >
                <FaGithub className="mobile-social-icon" />
                <span>GitHub</span>
                <FiArrowUpRight className="mobile-social-arrow" />
              </a>

              {contactDetails.linkedin && (
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-menu__social-link"
                  onClick={onClose}
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="mobile-social-icon" />
                  <span>LinkedIn</span>
                  <FiArrowUpRight className="mobile-social-arrow" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
