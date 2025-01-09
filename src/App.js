import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-300 bg-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop /> {/* Scroll to top on route change */}

        {/* to display Hero only on the Home page */}
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Hero only on Home page */}
        </Routes>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
