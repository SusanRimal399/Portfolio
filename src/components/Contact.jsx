import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Contact information configuration
const CONTACT_INFO = [
  {
    label: 'Email',
    value: 'susanrimal399@gmail.com',
    href: 'mailto:susanrimal399@gmail.com',
    type: 'email',
    icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/susan-rimal',
    href: 'https://www.linkedin.com/in/susan-rimal-3b33b3371/',
    type: 'external',
    icon: 'M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-2.7 15.3v-5.5c0-3-1.6-4.4-3.7-4.4-1.7 0-2.5 1-2.9 1.7v-1.5H7v9.7h3.3v-5.4c0-.3 0-.6.1-.9.3-.7.9-1.4 1.9-1.4 1.4 0 2 1 2 2.3v5.4h3zm-9.6-10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z',
  },
  {
    label: 'GitHub',
    value: 'github.com/SusanRimal399',
    href: 'https://github.com/SusanRimal399',
    type: 'external',
    icon: 'M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.49v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.564 9.564 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.67.94.67 1.9v2.81c0 .27.16.58.67.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z',
  },
  {
    label: 'Phone',
    value: '+977 9749337258',
    href: 'tel:+9779749337258',
    type: 'phone',
    icon: 'M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z',
  },
];

// Reusable ContactItem component
const ContactItem = ({ label, value, href, type, icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
      className="flex items-center gap-4 p-4 bg-blue-100/10 rounded-lg backdrop-blur-sm hover:bg-blue-100/20 transition-all duration-300 border border-blue-400/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="listitem"
    >
      <motion.svg
        className="w-6 h-6 text-black"
        fill="currentColor"
        viewBox="0 0 24 24"
        animate={{ scale: isHovered ? 1.2 : 1, rotate: isHovered ? 5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <path d={icon} />
      </motion.svg>
      <div className="flex-1">
        <span className="font-semibold text-lg text-white">{label}:</span>
        <motion.a
          href={href}
          className="ml-2 text-lg underline decoration-2 decoration-blue-400 hover:text-blue-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-600"
          {...(type === 'external' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          aria-label={`${label}: ${value}`}
          whileHover={{ x: 5, color: '#BFDBFE' }}
          transition={{ duration: 0.3 }}
        >
          {value}
        </motion.a>
      </div>
    </motion.div>
  );
};

ContactItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['email', 'external', 'phone']).isRequired,
  icon: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const Contact = () => (
  <motion.section
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="py-16 px-4 sm:px-8 max-w-3xl mx-auto bg-gradient-to-br from-blue-500 to-blue-500 rounded-xl shadow-2xl border border-blue-400/10 backdrop-blur-lg"
    aria-labelledby="contact-heading"
  >
    <motion.h1
      id="contact-heading"
      className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12 tracking-tight"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Contact
    </motion.h1>
    <div className="space-y-4" role="list">
      {CONTACT_INFO.map((item, index) => (
        <ContactItem key={item.label} {...item} index={index} />
      ))}
    </div>
  </motion.section>
);

export default Contact;