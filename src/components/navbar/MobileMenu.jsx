import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiArrowUpRight } from 'react-icons/fi';
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
              Menu
            </span>
            <button
              className="mobile-menu__close-btn"
              onClick={onClose}
              aria-label="Close menu"
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
            <a
              href="https://github.com/SachinThakur1124"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu__github-btn"
              onClick={onClose}
            >
              <FiGithub />
              <span>GitHub Profile</span>
              <FiArrowUpRight />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
