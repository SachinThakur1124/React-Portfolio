import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { contactDetails } from '../../data/experience';
import MobileMenu from './MobileMenu';
import './navbar.scss';

const NAV_LINKS = [
  { name: 'Home', href: '#Home' },
  { name: 'About', href: '#AboutMe' },
  { name: 'Skills', href: '#Skills' },
  { name: 'Experience', href: '#Experience' },
  { name: 'Projects', href: '#Portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-header--scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <motion.a
          href="#Home"
          className="navbar-brand"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="navbar-brand__text">Sachin Thakur</span>
          <span className="navbar-brand__dot" />
        </motion.a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav">
          {NAV_LINKS.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="navbar-nav__link"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 * idx }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Right Action Icons + Get in Touch CTA (Desktop) & Mobile Hamburger */}
        <div className="navbar-actions">
          <div className="navbar-icon-group" role="group" aria-label="Social and Resume Links">
            {/* 1. Resume Action */}
            <a
              href="/assets/Sachin-Thakur-Resume.pdf"
              download="Sachin-Thakur-Resume.pdf"
              className="nav-icon-btn"
              aria-label="Download Resume (PDF)"
              title="Download Resume (PDF)"
            >
              <FaFilePdf className="nav-icon-btn__icon" />
              <span className="nav-icon-tooltip font-mono">Resume (PDF)</span>
            </a>

            {/* 2. GitHub Action */}
            <a
              href="https://github.com/SachinThakur1124"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub: SachinThakur1124"
            >
              <FaGithub className="nav-icon-btn__icon" />
              <span className="nav-icon-tooltip font-mono">GitHub</span>
            </a>

            {/* 3. LinkedIn Action */}
            {contactDetails.linkedin && (
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn: Sachin Thakur"
              >
                <FaLinkedin className="nav-icon-btn__icon" />
                <span className="nav-icon-tooltip font-mono">LinkedIn</span>
              </a>
            )}
          </div>

          {/* 4. Desktop "Get in Touch" Primary CTA */}
          <a href="#contact" className="navbar-cta-btn">
            <span>Get in Touch</span>
            <FiArrowUpRight className="navbar-cta-btn__icon" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="navbar-toggle-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
    </header>
  );
}
