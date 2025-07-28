import React, { useEffect } from 'react';

function Contact() {
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
    <section className="py-16 px-8 max-w-6xl mx-auto bg-blue-500 text-white rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold mb-12 text-center">Contact</h1>
      <div className="space-y-8 max-w-2xl mx-auto">
        <p className="fade-in opacity-0 translate-y-10 transition-all duration-1000 text-xl flex items-center gap-4">
          <span className="font-semibold">Email:</span>
          <a href="mailto:susanrimal399@gmail.com" className="underline hover:text-gray-200 transition-colors duration-300">
            susanrimal399@gmail.com
          </a>
        </p>
        <p className="fade-in opacity-0 translate-y-10 transition-all duration-1000 delay-100 text-xl flex items-center gap-4">
          <span className="font-semibold">LinkedIn:</span>
          <a 
            href="https://www.linkedin.com/in/susan-rimal-3b33b3371/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-gray-200 transition-colors duration-300"
          >
            linkedin.com/in/susan-rimal
          </a>
        </p>
        <p className="fade-in opacity-0 translate-y-10 transition-all duration-1000 delay-200 text-xl flex items-center gap-4">
          <span className="font-semibold">GitHub:</span>
          <a 
            href="https://github.com/SusanRimal399" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-gray-200 transition-colors duration-300"
          >
            github.com/SusanRimal399
          </a>
        </p>
        <p className="fade-in opacity-0 translate-y-10 transition-all duration-1000 delay-300 text-xl flex items-center gap-4">
          <span className="font-semibold">Phone:</span>
          <a href="tel:+9779749337258" className="underline hover:text-gray-200 transition-colors duration-300">
            +977 9749337258
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;