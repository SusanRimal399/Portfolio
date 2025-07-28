import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

// Centralized skill data for maintainability
const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React', logo: '/react.png' },
      { name: 'HTML', logo: '/html.jpeg' },
      { name: 'JavaScript', logo: '/javascript.jpeg' },
      { name: 'Tailwind CSS', logo: '/tailwind.svg' },
      { name: 'CSS', logo: '/css.png' },
    ],
  },
  {
    id: 'seo',
    title: 'SEO & Optimization',
    skills: [
      { name: 'Technical SEO' },
      { name: 'Performance Tuning' },
    ],
  },
  {
    id: 'devops',
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', logo: '/git.png' },
      { name: 'Vite', logo: '/vite.png' },
      { name: 'Docker', logo: '/docker.png' },
      { name: 'Vercel', logo: '/vercel.png' },
      { name: 'GitHub', logo: '/github.png' },
    ],
  },
];

// Animation variants for Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Reusable SkillCard component
const SkillCard = ({ title, skills }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: '50px',
  });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <motion.h3 
        className="text-2xl font-bold text-gray-800 mb-5 tracking-tight"
        variants={skillItemVariants}
      >
        {title}
      </motion.h3>
      <ul className="space-y-4">
        <AnimatePresence>
          {skills.map((skill, index) => (
            <motion.li
              key={`${title}-${index}`}
              variants={skillItemVariants}
              className="flex items-center space-x-3 group"
            >
              {skill.logo && (
                <img
                  src={skill.logo}
                  alt={`${skill.name} Logo`}
                  className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              )}
              <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                {skill.name}
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
    })
  ).isRequired,
};

const Skills = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-gray-50 to-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-12 text-center tracking-tight"
      >
        Skills
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <SkillCard
            key={category.id}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
};

Skills.propTypes = {};

export default Skills;