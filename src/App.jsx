import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ParticlesComponent from './components/Particles';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative h-screen bg-background">
      
      <ParticlesComponent className="absolute inset-0 -z-10 h-full w-full" />

      
      <NavBar  />
      <Hero  />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;
