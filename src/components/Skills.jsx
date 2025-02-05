import React from "react";
import cssIcon from "../assets/css-icon.svg";
import gitIcon from "../assets/git-icon.svg";
import htmlIcon from "../assets/html-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import tailwindIcon from "../assets/tailwind-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import tsIcon from "../assets/ts-icon.svg";
import expressIcon from "../assets/expressjs-icon.svg";
import nodeIcon from "../assets/nodejs-icon.svg";
import mongodbIcon from "../assets/mongodb-icon.svg"

const skills = [
  { name: "React", icon: reactIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Express.js", icon: expressIcon },
  { name: "Git", icon: gitIcon },
  {name: "MongoDb", icon: mongodbIcon}
];

function Skills() {
  return (
    <div className="bg-background text-cyan px-8 py-10" id="Skills">
      <h1 className="sm:text-2xl text-4xl font-extrabold underline text-center">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 mt-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-row gap-1 uppercase items-center justify-center text-white border-b-2 border-cyan font-semibold "
          >
            <img className="w-10 h-10 mb-2" src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
