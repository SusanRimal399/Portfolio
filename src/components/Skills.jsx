import React, { useEffect } from 'react';

function Skills() {
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

  return (
    <section className="p-12 max-w-6xl mx-auto">
      <h1 className="text-5xl font-extrabold text-blue-500 mb-8">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="fade-in opacity-0 translate-y-10 transition-all duration-1000 bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold">Frontend</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-2">
              <img src="/react.png" alt="React Logo" className="h-6 w-6" />
              <span>React</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/html.jpeg" alt="HTML Logo" className="h-6 w-6" />
              <span>HTML</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/javascript.jpeg" alt="JavaScript Logo" className="h-6 w-6" />
              <span>JavaScript</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/tailwind.svg" alt="Tailwind CSS Logo" className="h-6 w-6" />
              <span>Tailwind CSS</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/css.png" alt="CSS Logo" className="h-6 w-6" />
              <span>CSS</span>
            </li>
          </ul>
        </div>
        <div className="fade-in opacity-0 translate-y-10 transition-all duration-1000 bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold">SEO & Optimization</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-2">
              <span>Technical SEO</span> {/* No logo available, text only */}
            </li>
            <li className="flex items-center space-x-2">
              <span>Performance Tuning</span> {/* No logo available, text only */}
            </li>
          </ul>
        </div>
        <div className="fade-in opacity-0 translate-y-10 transition-all duration-1000 bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold">Tools & DevOps</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-2">
              <img src="/git.png" alt="Git Logo" className="h-6 w-6" />
              <span>Git</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/vite.png" alt="Vite Logo" className="h-6 w-6" />
              <span>Vite</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/docker.png" alt="Docker Logo" className="h-6 w-6" />
              <span>Docker</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/vercel.png" alt="Vercel Logo" className="h-6 w-6" />
              <span>Vercel</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/github.png" alt="GitHub Logo" className="h-6 w-6" />
              <span>GitHub</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;