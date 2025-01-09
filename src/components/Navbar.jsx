import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-gray-300 p-4 fixed w-full top-0 left-0 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Sebontu A.</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-cyan-400">Accueil</Link></li>
          <li><Link to="/about" className="hover:text-cyan-400">A propos</Link></li>
          <li><Link to="/projects" className="hover:text-cyan-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
          <li><Link to="/skills" className="hover:text-cyan-400">Compétences</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


