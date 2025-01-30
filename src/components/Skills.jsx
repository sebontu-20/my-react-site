import React from 'react';

function Skills() {
  return (
    <div id="skills" className="py-20 bg-gray-800">
      <h2 className="text-3xl text-center text-gray-300 mb-10">Mes Compétences</h2>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend Skills */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-300 mb-4">Frontend</h3>
          <ul className="text-gray-300">
            <li>-HTML5</li>
            <li>-CSS3 (Flexbox, Grid, TailwindCSS)</li>
            <li>-JavaScript (ES6+)</li>
            <li>-React.js</li>
            <li>-Maquetter une application</li> 
            <li>-Réaliser une interface utilisateur web statique et adaptable</li> 
            <li>Développer une interface utilisateur avec une solution de gestion de contenu e-commerce/WordPress/</li>
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-300 mb-4">Backend</h3>
          <ul className="text-gray-300">
            <li>-Node.js</li>
            <li>-MySQL</li>
            <li>-PHP/Symfony</li>
            <li>-Python/Flask</li>
            <li>-Développement d'API</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
