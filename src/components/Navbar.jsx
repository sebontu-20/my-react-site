import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-gray-300 p-4 fixed w-full top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Sebontu A.</h1>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
          className="text-gray-300 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 absolute md:relative top-16 md:top-auto left-0 md:left-auto w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 ${
            isMenuOpen ? 'flex' : 'hidden md:flex'
          }`}
        >
          <li>
            <Link to="/" className="hover:text-cyan-400" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-cyan-400" onClick={() => setIsMenuOpen(false)}>
              A propos
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-cyan-400" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-cyan-400" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-cyan-400" onClick={() => setIsMenuOpen(false)}>
              Compétences
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
