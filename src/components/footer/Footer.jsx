import React from 'react';
import { FiGithub, FiMail, FiMapPin, FiDownload, FiLinkedin } from 'react-icons/fi';
import { contactDetails } from '../../data/experience';
import './Footer.scss';

const NAV_LINKS = [
  { name: 'Projects', href: '#Portfolio' },
  { name: 'About', href: '#AboutMe' },
  { name: 'Skills', href: '#Skills' },
  { name: 'Experience', href: '#Experience' },
  { name: 'Education', href: '#Education' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root" role="contentinfo">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand & Positioning */}
          <div className="footer-brand">
            <div className="footer-brand__header">
              <span className="footer-brand__name">Sachin Thakur</span>
              <span className="footer-brand__dot" aria-hidden="true" />
            </div>
            <p className="footer-brand__tagline">
              Full-Stack Software Engineer &middot; MERN Stack &amp; AI Engineering
            </p>
            <div className="footer-brand__meta">
              <span className="footer-meta-item">
                <FiMapPin className="footer-meta-icon" aria-hidden="true" />
                <span>Mohali, India</span>
              </span>
              <span className="footer-meta-badge">
                <span className="footer-status-dot" aria-hidden="true" />
                <span>Available for opportunities</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-nav-group">
            <h3 className="footer-group-title font-mono">NAVIGATION</h3>
            <ul className="footer-links-list">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="footer-nav-group">
            <h3 className="footer-group-title font-mono">CONNECT</h3>
            <ul className="footer-links-list">
              <li>
                <a
                  href="https://github.com/SachinThakur1124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-link--icon"
                >
                  <FiGithub aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="/assets/Sachin-Thakur-Resume.pdf"
                  download="Sachin-Thakur-Resume.pdf"
                  className="footer-link footer-link--icon"
                >
                  <FiDownload aria-hidden="true" />
                  <span>Resume PDF</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sachinthakur7814@gmail.com"
                  className="footer-link footer-link--icon"
                >
                  <FiMail aria-hidden="true" />
                  <span>sachinthakur7814@gmail.com</span>
                </a>
              </li>
              {contactDetails.linkedin && (
                <li>
                  <a
                    href={contactDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link footer-link--icon"
                  >
                    <FiLinkedin aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Bar: Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Sachin Thakur. All rights reserved. Designed &amp; developed with React &amp; Sass.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
