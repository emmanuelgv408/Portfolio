import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ParticlesComponent from "./components/Particles";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIntroComplete(true);
    }, 2000);
  }, []);

  return (
    <div className="relative bg-background">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: introComplete ? "-100%" : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-screen bg-background flex items-center justify-center text-cyan text-4xl font-bold z-50"
      >
        Welcome
      </motion.div>

      <ParticlesComponent className="absolute inset-0 -z-10 h-full w-full" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavBar />
        <Hero />

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: "some", once: false }}
        >
          <About />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: "some", once: false }}
        >
          <Skills />
        </motion.div>

        {/* Group Projects and Contact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: "some", once: false }}
          className="space-y-12" // Space between grouped components
        >
          <Projects />
          <Contact />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
