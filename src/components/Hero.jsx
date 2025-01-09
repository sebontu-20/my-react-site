import React from 'react';
import { FaReact } from 'react-icons/fa';

function Hero() {
  return (
    <div 
      className="relative bg-cover bg-center text-gray-300 h-screen flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: 'url(https://your-image-url.com)' }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
      <div className="relative z-10">
        <div className="flex items-center space-x-2">
          <FaReact className="text-4xl text-cyan-500" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bonjour! Je m'appelle Sebontu,</h1>
        </div>
        <p className="text-lg mb-6 animate__animated animate__fadeIn">une développeuse web passionnée par tech...</p>
        <a 
          href="#projects" 
          className="bg-cyan-500 text-white py-2 px-6 rounded-full hover:bg-cyan-400 hover:scale-105 transition-all duration-300"
        >
          Découvrez Mes Projets
        </a>
      </div>
    </div>
  );
}

export default Hero;
