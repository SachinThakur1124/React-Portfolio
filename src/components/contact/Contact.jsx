import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiGithub, FiSend, FiCheckCircle, FiAlertCircle, FiClock } from 'react-icons/fi';
import CTAButton from '../ui/CTAButton';
import './contact.scss';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _honeypot: '' // Anti-spam honeypot
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmittedAt, setLastSubmittedAt] = useState(0);

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please specify a subject (minimum 3 characters).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please write a message with at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Anti-spam honeypot check
    if (formData._honeypot) {
      // Bot detected: fake immediate success without sending
      setStatus('success');
      return;
    }

    // 2. Client-side validation
    if (!validateForm()) {
      return;
    }

    // 3. Rate-limiting check (cooldown of 15 seconds)
    const now = Date.now();
    if (now - lastSubmittedAt < 15000) {
      setStatus('error');
      setErrorMessage('Please wait a few seconds before sending another message.');
      return;
    }

    // 4. Read EmailJS credentials strictly from environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMessage('Email service configuration is not set. Please contact directly via email.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('success');
      setLastSubmittedAt(Date.now());
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        _honeypot: ''
      });
      setErrors({});
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        'Unable to transmit message at this moment. Please email sachinthakur7814@gmail.com directly.'
      );
    }
  };

  return (
    <section className="contact-section" id="contact" aria-label="Contact Sachin Thakur">
      <div className="contact-container">
        {/* Section Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-header__tag font-mono">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="contact-header__title">
            Let's Build Something <span className="contact-header__highlight">Exceptional</span>.
          </h2>
          <p className="contact-header__description">
            I am currently open to full-stack engineering opportunities, distributed architecture collaboration,
            and ambitious software development. Reach out via the form below or through direct channels.
          </p>
        </motion.div>

        {/* 2-Column Contact Layout */}
        <div className="contact-layout">
          {/* Left: Contact Info & Channels */}
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Info Cards */}
            <motion.div className="info-card" variants={itemVariants}>
              <div className="info-card__icon-wrap">
                <FiMail />
              </div>
              <div className="info-card__content">
                <span className="info-card__label font-mono">DIRECT EMAIL</span>
                <a href="mailto:sachinthakur7814@gmail.com" className="info-card__value">
                  sachinthakur7814@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div className="info-card" variants={itemVariants}>
              <div className="info-card__icon-wrap">
                <FiMapPin />
              </div>
              <div className="info-card__content">
                <span className="info-card__label font-mono">LOCATION</span>
                <span className="info-card__value">Mohali, India</span>
              </div>
            </motion.div>

            <motion.div className="info-card" variants={itemVariants}>
              <div className="info-card__icon-wrap">
                <FiGithub />
              </div>
              <div className="info-card__content">
                <span className="info-card__label font-mono">GITHUB REPOSITORIES</span>
                <a
                  href="https://github.com/SachinThakur1124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-card__value"
                >
                  github.com/SachinThakur1124
                </a>
              </div>
            </motion.div>

            {/* Response Time Guarantee Pill */}
            <motion.div className="response-time-pill" variants={itemVariants}>
              <FiClock className="response-time-pill__icon" />
              <span className="font-mono">Typical response time: Within 24 business hours</span>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
              {/* Anti-spam honeypot (hidden from real users) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="_honeypot">Leave blank</label>
                <input
                  type="text"
                  id="_honeypot"
                  name="_honeypot"
                  value={formData._honeypot}
                  onChange={handleInputChange}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              {/* Success Notification */}
              {status === 'success' && (
                <div className="form-alert form-alert--success">
                  <FiCheckCircle className="form-alert__icon" />
                  <div>
                    <h4 className="form-alert__title font-mono">Message Sent Successfully!</h4>
                    <p className="form-alert__text">
                      Thank you for reaching out. Your message has been dispatched, and I will get back to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {status === 'error' && (
                <div className="form-alert form-alert--error">
                  <FiAlertCircle className="form-alert__icon" />
                  <div>
                    <h4 className="form-alert__title font-mono">Message Delivery Issue</h4>
                    <p className="form-alert__text">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label font-mono">
                    YOUR NAME <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Jane Doe"
                    disabled={status === 'submitting'}
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    required
                  />
                  {errors.name && <span className="field-error font-mono">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label font-mono">
                    EMAIL ADDRESS <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane@company.com"
                    disabled={status === 'submitting'}
                    className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                    required
                  />
                  {errors.email && <span className="field-error font-mono">{errors.email}</span>}
                </div>
              </div>

              {/* Subject Input */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label font-mono">
                  SUBJECT <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Software Engineering Inquiry / Project Scope"
                  disabled={status === 'submitting'}
                  className={`form-input ${errors.subject ? 'form-input--error' : ''}`}
                  required
                />
                {errors.subject && <span className="field-error font-mono">{errors.subject}</span>}
              </div>

              {/* Message Textarea */}
              <div className="form-group">
                <label htmlFor="message" className="form-label font-mono">
                  MESSAGE <span className="required-star">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share details regarding your project requirements, engineering role, or timeline..."
                  disabled={status === 'submitting'}
                  className={`form-textarea ${errors.message ? 'form-textarea--error' : ''}`}
                  required
                />
                {errors.message && <span className="field-error font-mono">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <div className="form-submit-row">
                <CTAButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === 'submitting'}
                  icon={status === 'submitting' ? null : FiSend}
                  iconPosition="right"
                >
                  {status === 'submitting' ? 'Transmitting Message...' : 'Send Message'}
                </CTAButton>
                <span className="privacy-hint font-mono">
                  Privacy guaranteed · No spam or data sharing
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
