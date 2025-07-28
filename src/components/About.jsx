import React, { useEffect } from 'react';

function About() {
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
      <h1 className="text-5xl font-extrabold text-blue-500 mb-8">About Me</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="fade-in opacity-0 translate-y-10 transition-all duration-1000">
          <p className="text-xl leading-relaxed mb-4">
            As a Junior Frontend Developer at Kritimmind Technology, I bring over 1 year of experience in crafting user-friendly web applications. My expertise includes React, JavaScript, and CSS enabling me to deliver responsive and visually appealing designs.
          </p>
          <p className="text-xl leading-relaxed">
            I am currently exploring SEO fundamentals, including keyword research and content structuring, to enhance my skills in improving website visibility and performance.
          </p>
        </div>
        <div className="fade-in opacity-0 translate-y-10 transition-all duration-1000">
          <div className="bg-gray-200 p-6 rounded-lg h-64 flex items-center justify-center">
            {typeof window !== 'undefined' && (
              <img src="/Profile.jpeg" alt="Profile" className="h-full w-auto object-contain rounded" />
            )}
          </div>
          <h3 className="text-2xl font-semibold text-blue-500 mt-6">Key Achievements</h3>
          <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
            <li>Assisted in basic SEO tasks like keyword research and content updates.</li>
            <li>Contributed to building responsive UI components using React and Tailwind CSS.</li>
            <li>Collaborated with team members to debug and test frontend features.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;