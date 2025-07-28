import React, { useEffect, useState } from 'react';

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('opacity-100', 'translate-y-0');
      });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Kritimmind Technology Website",
      desc: "Designed and implemented the frontend for Kritimmind Technology's official website using React, JavaScript, and Tailwind CSS. Enhanced user experience with responsive design and optimized performance as a senior frontend developer.",
      img: "/kritim.png", 
    },
    {
      id: 2,
      title: "Marvel Website",
      desc: "Created a static website for Marvel using HTML and CSS, focusing on a clean layout and styling to showcase character information and media.",
      img: "/Marvel.jpeg",
    },
  ];

  const openImagePopup = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

  return (
    <section className="p-12 max-w-6xl mx-auto">
      <h1 className="text-5xl font-extrabold text-blue-500 mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <div key={project.id} className="fade-in opacity-0 translate-y-10 transition-all duration-1000 bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#B22222] mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.desc}</p>
            <div className="h-32 bg-gray-200 rounded">
              {project.img ? (
                <img 
                  src={project.img} 
                  alt={`${project.title} screenshot`} 
                  className="h-full w-full object-cover rounded cursor-pointer" 
                  onClick={() => openImagePopup(project.img)}
                />
              ) : (
                <p className="text-center text-gray-800">No image available</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImagePopup}
        >
          <div className="relative max-w-4xl w-full">
            <img 
              src={selectedImage} 
              alt="Project screenshot popup" 
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
            <button 
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold"
              onClick={closeImagePopup}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;