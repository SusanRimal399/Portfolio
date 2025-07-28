import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 p-6 fixed w-full top-0 z-10 shadow-lg transition-all duration-300 hover:shadow-xl">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-white hover:text-gray-200">Susan Rimal</Link>
        <ul className="flex space-x-8">
          <li><Link to="/about" className="text-white hover:text-gray-200">About</Link></li>
          <li><Link to="/skills" className="text-white hover:text-gray-200">Skills</Link></li>
          <li><Link to="/projects" className="text-white hover:text-gray-200">Projects</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-200">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;