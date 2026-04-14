import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
// import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <>
      <ScrollProgress />

      {/* Background effects */}
      <div className="bg-grid"></div>
      <div className="bg-vignette"></div>
      <div className="bg-glow-top"></div>

      {/* Main content */}
      <div className="app-wrapper">
        <Navbar />
        <Hero />
        <About />
        <Education />
        {/* <Experience /> */}
        <Certifications />
        <Projects />
        <Skills />
        <Volunteer />
        <Contact />
      </div>
    </>
  );
}
