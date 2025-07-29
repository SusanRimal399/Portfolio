import React, { useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// Custom hook for intersection observer
const useFadeInAnimation = (threshold = 0.1) => {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });
  return { ref, inView };
};

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Error boundary component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-red-500 text-center p-4">Something went wrong.</div>;
    }
    return this.props.children;
  }
}

// Memoized About component
const About = memo(({ profileImage = '/Profile.jpeg', achievements = [] }) => {
  const { ref: bioRef, inView: bioInView } = useFadeInAnimation();
  const { ref: achievementsRef, inView: achievementsInView } = useFadeInAnimation();

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Susan Rimal',
    jobTitle: 'Frontend Developer | SEO Learner',
    worksFor: {
      '@type': 'Organization',
      name: 'Kritimmind Technology',
    },
    description: 'Frontend developer specializing in React and modern web technologies.',
  };

  // Fallback achievements
  const displayAchievements =
    achievements.length > 0
      ? achievements
      : [
        { id: 1, description: 'Assisted in building a React application with a focus on performance and accessibility, contributing to improved Lighthouse scores.' },
        { id: 2, description: 'Supported basic SEO tasks, such as meta tag structuring and keyword placement, to improve search visibility.' },
        { id: 3, description: 'Collaborated with team members to learn and apply modern JavaScript practices and basic testing workflows.' },
      ];

  return (
    <>
      <Helmet>
        <title>About Me - Senior Frontend Developer</title>
        <meta name="description" content="Learn about my expertise in frontend development, React, and SEO." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <ErrorBoundary>
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="py-12 px-4 sm:px-6 max-w-4xl mx-auto bg-gradient-to-br from-blue-800 to-blue-500 rounded-xl shadow-2xl border border-blue-400/10 backdrop-blur-lg"
          aria-labelledby="about-heading"
        >
          <motion.h1
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-8 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              ref={bioRef}
              variants={fadeInVariants}
              initial="hidden"
              animate={bioInView ? 'visible' : 'hidden'}
              className="p-4 bg-blue-100/10 rounded-lg backdrop-blur-sm border border-blue-400/20"
              role="region"
              aria-label="Professional Bio"
            >
              <p className="text-base sm:text-lg text-white leading-relaxed justify-text">
                As a Frontend Developer at Kritimmind Technology, I have over 1 year of experience building responsive, user-focused web applications using React, JavaScript, and modern CSS frameworks. I focus on creating accessible, high-performance interfaces.
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed mt-3">
                I am learning SEO and web performance optimization using structured data, lazy loading, server-side rendering and other key SEO principles. I'm currently exploring AI integration and Web3 technologies to expand the scope of modern web solutions.
              </p>
            </motion.div>
            <motion.div
              ref={achievementsRef}
              variants={fadeInVariants}
              initial="hidden"
              animate={achievementsInView ? 'visible' : 'hidden'}
              className="p-4 bg-blue-100/10 rounded-lg backdrop-blur-sm border border-blue-400/20"
              role="region"
              aria-label="Achievements and Profile"
            >
              <div className="relative bg-blue-200/10 rounded-lg overflow-hidden h-48 sm:h-56 mb-4">
                <img
                  src={profileImage}
                  alt="Profile picture"
                  className="object-cover w-full h-full rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Key Achievements</h3>
              <ul className="list-none space-y-2 text-base text-white" role="list">
                <AnimatePresence>
                  {displayAchievements.map((achievement, index) => (
                    <motion.li
                      key={achievement.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-2"
                      role="listitem"
                    >
                      <motion.svg
                        className="w-5 h-5 text-blue-300 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </motion.svg>
                      <span>{achievement.description}</span>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </motion.div>
          </div>
        </motion.section>
      </ErrorBoundary>
    </>
  );
});

// PropTypes for type safety
About.propTypes = {
  profileImage: PropTypes.string,
  achievements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

// Default props
About.defaultProps = {
  profileImage: '/Profile.jpeg',
  achievements: [
    { id: 1, description: 'Assisted in building a React application with a focus on performance and accessibility, contributing to improved Lighthouse scores.' },
    { id: 2, description: 'Supported basic SEO tasks, such as meta tag structuring and keyword placement, to improve search visibility.' },
    { id: 3, description: 'Collaborated with team members to learn and apply modern JavaScript practices and basic testing workflows.' },
  ],
};

export default About;