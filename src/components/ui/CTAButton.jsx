import React from 'react';
import { motion } from 'framer-motion';
import './CTAButton.scss';

/**
 * Reusable CTA Button for Obsidian Design System
 * Supports button or link mode, primary / secondary / ghost variants.
 */
const CTAButton = ({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'accent-outline'
  size = 'md',        // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  target,
  rel,
  ...props
}) => {
  const combinedClassName = `cta-button cta-button--${variant} cta-button--${size} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="cta-button__icon cta-button__icon--left" />}
      <span className="cta-button__label">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="cta-button__icon cta-button__icon--right" />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http') || target === '_blank';
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        whileHover={{ y: -2, transition: { duration: 0.15 } }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      whileHover={disabled ? undefined : { y: -2, transition: { duration: 0.15 } }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default CTAButton;
