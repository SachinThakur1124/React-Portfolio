import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiMenu, FiX } from 'react-icons/fi';
import MobileMenu from './MobileMenu';
import CTAButton from '../ui/CTAButton';
import './navbar.scss';

const NAV_LINKS = [
  { name: 'Projects', href: '#Portfolio' },
  { name: 'About', href: '#AboutMe' },
  { name: 'Skills', href: '#Skills' },
  { name: 'Experience', href: '#Experience' },
  { name: 'Education', href: '#Education' },
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

        {/* Right CTA / GitHub Profile */}
        <div className="navbar-actions">
          <CTAButton
            href="https://github.com/SachinThakur1124"
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="sm"
            icon={FiGithub}
            iconPosition="left"
            className="navbar-actions__github"
          >
            GitHub
          </CTAButton>

          <CTAButton
            href="#contact"
            variant="primary"
            size="sm"
            className="navbar-actions__contact"
          >
            Get in Touch
          </CTAButton>

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
