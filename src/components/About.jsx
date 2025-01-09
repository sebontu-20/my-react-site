import React from 'react';
import profilePic from '../assets/logo-seb.png'; 
import cvFile from '../assets/sebontu-cv.pdf'; 

function About() {
  return (
    <div className="flex flex-col items-center py-20 px-4 bg-gray-800 text-gray-300">
      {/* Responsive Profile Picture */}
      <img
        src={profilePic}
        alt="Profile"
        className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mb-6 border-4 border-cyan-500 shadow-lg"
      />

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">About Me</h1>

      {/* Paragraph */}
      <p className="text-base sm:text-lg text-center max-w-xl leading-relaxed">
        Bonjour ! Je suis <strong>Sebontu</strong>, une développeuse web passionnée par tech. 
        Ayant suivi une formation certifiante de développeur web et web mobile chez Simplon, 
        j'ai affiné mes compétences en HTML, CSS, JavaScript, PHP, SQL et divers frameworks de développement web. 
        Grâce à ces compétences, je crée des sites web dynamiques et responsives, 
        offrant une expérience utilisateur optimale sur tous les appareils.
        <br />
        Mon parcours dans le développement web a commencé par une curiosité à comprendre le fonctionnement 
        des sites web et des applications, et s'est transformé en une véritable passion pour le codage et le design. 
        J'aime apprendre de nouvelles technologies et améliorer continuellement mes compétences. 
        Chaque projet est pour moi une opportunité de créer quelque chose d'unique et d'innovant, 
        en mettant l'accent sur l'expérience utilisateur et l'esthétique.
      </p>

      {/* Download CV Button */}
      <a
        href={cvFile}
        download="Sebontu_CV"
        className="mt-6 bg-cyan-500 text-white py-2 px-6 rounded-full hover:bg-cyan-400 transition duration-300 text-sm sm:text-base"
      >
        Télécharger CV
      </a>
    </div>
  );
}

export default About;
