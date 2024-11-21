import React from "react";
import { motion } from "framer-motion";
import cssIcon from "../assets/css-icon.svg";
import gitIcon from "../assets/git-icon.svg";
import htmlIcon from "../assets/html-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import tailwindIcon from "../assets/tailwind-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import tsIcon from "../assets/ts-icon.svg";

function Skills() {
  const icons = [
    { src: cssIcon, name: "CSS" },
    { src: gitIcon, name: "Git" },
    { src: htmlIcon, name: "HTML" },
    { src: jsIcon, name: "JavaScript" },
    { src: tailwindIcon, name: "Tailwind" },
    { src: reactIcon, name: "React" },
    { src: tsIcon, name: "TypeScript" },
  ];

  return (
    <div
      id="Skills"
      className="h-[80%] bg-background text-cyan p-6 md:p-8 flex flex-col gap-5"
    >
      {/* Header */}
      <h1 className="text-3xl font-bold flex justify-end md:justify-start">
        Skills
      </h1>

      {/* Icon Carousel */}
      <div className="min-h-[25%] bg-custom-grey flex overflow-hidden whitespace-nowrap p-4">
        {Array(2)
          .fill()
          .map((_, i) => (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
              key={i}
              className="flex items-center gap-6 py-2"
            >
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-12 h-12 md:w-16 md:h-16"
                >
                  <img
                    src={icon.src}
                    alt={`${icon.name} icon`}
                    className="w-full h-full object-contain"
                  />
                  <p className="font-bold text-white text-sm md:text-base">
                    {icon.name}
                  </p>
                </div>
              ))}
            </motion.div>
          ))}
      </div>

      {/* Description */}
      <div className="flex justify-center md:justify-end px-4">
        <p className="text-2xl md:text-2xl w-full md:w-[100%] text-center md:text-right">
          I am a university student dedicated to honing technical skills through
          both academic coursework and personal projects. Outside of my program,
          I actively explore and master new technologies and development tools.
          This self-driven approach keeps me ahead in the fast-evolving field of
          software engineering and allows me to bring innovative solutions to my
          work. Always eager to learn and grow, I continuously expand my skill
          set to become a versatile developer.
        </p>
      </div>
    </div>
  );
}

export default Skills;
