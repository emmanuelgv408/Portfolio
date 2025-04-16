import React from "react";
import tailwindIcon from "../assets/tailwind-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import tsIcon from "../assets/ts-icon.svg";
import expressIcon from "../assets/expressjs-icon.svg";
import nodeIcon from "../assets/nodejs-icon.svg";
import mongodbIcon from "../assets/mongodb-icon.svg"
import portfolioSS from "../assets/myportfolio-screenshot.png";
import portfolioMobileSS from "../assets/myportfolio-mobile.png";
import techzoneSS from "../assets/TechZoneDesktop.png"
import techzoneMobileSS from "../assets/TechZoneMobile.png"

const projects = [
  {
    name: "Portfolio",
    description: "A sleek and responsive personal portfolio built with React and Tailwind CSS, showcasing my projects, skills, and experience.",
    image: portfolioSS,
    mobileImage: portfolioMobileSS,
    technologies: [reactIcon,tailwindIcon],
    link: "https://www.emmanuelguerrero.dev/",
    github: "https://github.com/emmanuelgv408/Portfolio",
  },
  {
    name: "TechZone",
    description: "A fully functional e-commerce website built with the MERN stack (MongoDB, Express.js, React, Node.js), featuring shopping cart functionality, authentication using JWT, password hashing with bcrypt, and checkout via Stripe. The project demonstrates secure authentication and dynamic interactions, built with TypeScript for type safety and improved developer experience. (PLEASE ALLOW UP TO A MINUTE WHEN LOGGING IN AS THE BACKEND IS HOSTED ON THE FREE TIER ON RENDER",
    image: techzoneSS,
    mobileImage: techzoneMobileSS,
    technologies: [mongodbIcon, expressIcon, nodeIcon, reactIcon,tsIcon, tailwindIcon], // No icons for bcrypt and jwt, just mention them in the description
    link: "https://techzone-eight.vercel.app/", // Replace with the actual link
    github: "https://github.com/emmanuelgv408/TechZone", // Replace with the actual GitHub repo
  },
  
];

function ProjectCard({ name, description, image, mobileImage, technologies, link, github }) {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-6">
      {/* Left */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-sm text-center md:text-left">{description}</p>
        <div className="flex gap-3">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="mt-3 border rounded-3xl py-2 px-3 text-primary-text  bg-gray-700 hover:bg-gray-600 hover:cursor-pointer">
              View Project
            </button>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="mt-3 border rounded-3xl py-2 px-3 text-primary-text bg-gray-700 hover:bg-gray-600 hover:cursor-pointer">
              GitHub Repo
            </button>
          </a>
        </div>
        <div>
          <p className="text-sm font-bold">Built with</p>
          <div className="flex gap-3">
            {technologies.map((tech, index) => (
              <img key={index} src={tech} alt="tech-icon" className="w-10" />
            ))}
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="w-full  md:flex-row md:w-1/2 flex flex-wrap justify-center items-center gap-4">
        <img 
          src={image} 
          alt={`${name} desktop`} 
          className="w-[250px] md:w-[300px] max-h-[300px] object-contain "
        />
        <img 
          src={mobileImage} 
          alt={`${name} mobile`} 
          className="w-[250px] md:w-[300px] max-h-[300px] object-contain "
        />
      </div>
    </section>
  );
}

function Projects() {
  return (
    <div id="Projects" className="min-w-full bg-background p-6 md:p-8 text-cyan flex flex-col gap-8">
      <h1 className="sm:text-2xl text-4xl font-bold flex justify-center underline">Projects</h1>

      <div className="w-full flex flex-col gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-custom-grey p-4 border rounded-lg">
            <ProjectCard {...project} />
          </div>
        ))}

        {/* Placeholder for future projects */}
        <div className="text-center text-sm text-gray-400">More projects coming soon...</div>
      </div>
    </div>
  );
}


export default Projects;
