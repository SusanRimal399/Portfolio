import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

// Centralized project data for maintainability
const PROJECTS = [
  {
    id: 1,
    title: 'Kritimmind Technology Website',
    description:
      "Built the frontend for Kritimmind Technology’s website using React, JavaScript, and Tailwind CSS, focusing on responsive design, performance, and SEO optimization.",
    image: '/kritim.png',
  },
  {
    id: 2,
    title: 'Marvel Website',
    description:
      "Created a Marvel website using HTML and CSS with a clean layout, optimized styling, and SEO-friendly structure to showcase character content."

    ,
    image: '/Marvel.jpeg',
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

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Reusable ProjectCard component
const ProjectCard = ({ title, description, image }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: '50px',
  });
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePopup = () => {
    if (image) setSelectedImage(image);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.h3
          variants={childVariants}
          className="text-2xl font-bold text-red-700 mb-3 tracking-tight"
        >
          {title}
        </motion.h3>
        <motion.p
          variants={childVariants}
          className="text-gray-600 mb-4 leading-relaxed"
        >
          {description}
        </motion.p>
        <motion.div
          variants={childVariants}
          className="h-32 bg-gray-100 rounded-lg overflow-hidden"
        >
          {image ? (
            <img
              src={image}
              alt={`${title} screenshot`}
              className={`h-full w-full object-cover transition-transform duration-300 ${isHovered ? 'scale-105' : ''
                } cursor-pointer`}
              loading="lazy"
              onClick={openImagePopup}
            />
          ) : (
            <p className="h-full flex items-center justify-center text-gray-500 font-medium">
              No image available
            </p>
          )}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={closeImagePopup}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Project screenshot popup"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold hover:bg-red-700 transition-colors duration-200"
                onClick={closeImagePopup}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

const Projects = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-gray-50 to-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-12 text-center tracking-tight"
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

Projects.propTypes = {};

export default Projects;