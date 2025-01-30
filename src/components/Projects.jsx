import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images from the assets folder
import buImage from '../assets/bu.png';
import wpImage from '../assets/wp.png';
import captureauboisImage from '../assets/Captureaubois.PNG';
import lorImage from '../assets/lor.PNG';
import untitledImage from '../assets/Untitled image.jpeg';

function Projects() {
  const projects = [
   
    {
      title: 'Site de Location Gîte 2',
      img: captureauboisImage, 
      link: 'https://www.auboisdemars.com/',
    },
    {
      title: 'Site de Réseau Sociaux',
      img: buImage, 
      link: '/projects',
    },
    {
      title: 'Site de Location de Gîte',
      img: wpImage, 
      link: '/projects',
    },
   
    {
      title: 'Site Portfolio Personnel ',
      img: lorImage, 
      link: '/projects',
    },
    {
      title: 'BagBliss/shopping',
      img: untitledImage, 
      link: 'https://sebontu-20.github.io/bagbliss-commerce/',
    },
   
  ];

  // Slick Carousel settings
  const settings = {
    dots: false, // Hide dots for navigation
    infinite: true, // Infinite scroll
    speed: 300, // Transition speed
    slidesToShow: 1, // Shows 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, 
    arrows: true, // Enable left and right arrows
    className: "project-carousel",
    prevArrow: <button className="slick-prev text-white absolute left-0 z-10 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-900 rounded-full">{"<"}</button>, // Left arrow
    nextArrow: <button className="slick-next text-white absolute right-0 z-10 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-900 rounded-full">{">"}</button>, // Right arrow
  };

  return (
    <div id="projects" className="py-20 bg-gray-800">
      <h2 className="text-2xl text-center text-gray-300 mb-10">My Projects</h2>

      {/* Carousel for the projects */}
      <div className="max-w-3xl mx-auto px-4"> 
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-49 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 text-white py-2 px-6 rounded-full hover:bg-cyan-400 transition duration-300"
              >
                Découvrir
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
