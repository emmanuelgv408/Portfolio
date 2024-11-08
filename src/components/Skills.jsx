import React from 'react';
import { motion } from 'framer-motion';
import cssIcon from '../assets/css-icon.svg';
import gitIcon from '../assets/git-icon.svg';
import htmlIcon from '../assets/html-icon.svg';
import jsIcon from '../assets/js-icon.svg';
import tailwindIcon from '../assets/tailwind-icon.svg';
import reactIcon from '../assets/react-icon.svg'
import tsIcon from '../assets/ts-icon.svg'

function Skills() {
  const icons = [
    { src: cssIcon, name: 'CSS' },
    { src: gitIcon, name: 'Git' },
    { src: htmlIcon, name: 'HTML' },
    { src: jsIcon, name: 'JavaScript' },
    { src: tailwindIcon, name: 'Tailwind' },
    
  ];

  return (
    <div className="h-screen bg-background text-cyan p-8 flex flex-col gap-3">
      <h1 className="text-3xl font-bold">Skills</h1>

      <div className="h-[30%] bg-custom-grey flex overflow-hidden whitespace-nowrap">
        {Array(2).fill().map((_, i) => (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0' }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
            key={i}
            className="flex items-center gap-6 py-2"
          >
            {icons.map((icon, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={icon.src} alt={`${icon.name} icon`} className="w-16 h-16 object-contain" />
                <p className="font-bold text-white">{icon.name}</p>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      <div className=" flex justify-end">
        <p className="text-3xl w-[70%] ">
          I am a university student actively honing my technical skills both
          through my academic coursework and personal projects. In addition to
          staying on track with my program, I dedicate time outside of my
          studies to explore and master new technologies and development tools.
          This self-driven approach helps me stay ahead in the fast-evolving
          field of software engineering and ensures that I can bring fresh ideas
          and innovative solutions to my work. I am always eager to learn and
          grow, continuously expanding my skill set to become a versatile
          developer.
        </p>
      </div>

    </div>
  );
}

export default Skills;
