import React from "react"; 
import tailwindIcon from "../assets/tailwind-icon.svg"; 
import reactIcon from "../assets/react-icon.svg"; import tsIcon from "../assets/ts-icon.svg"; 
import expressIcon from "../assets/expressjs-icon.svg"; import nodeIcon from "../assets/nodejs-icon.svg"; 
import mongodbIcon from "../assets/mongodb-icon.svg" 
import portfolioSS from "../assets/myportfolio-screenshot.png"; 
import portfolioMobileSS from "../assets/myportfolio-mobile.png"; import techzoneSS from "../assets/TechZoneDesktop.png" 
import techzoneMobileSS from "../assets/TechZoneMobile.png"

const projects = [
  {
    name: "Portfolio",
    description:
      "A sleek and responsive personal portfolio built with React and Tailwind CSS, showcasing my projects, skills, and experience.",
    image: portfolioSS,
    mobileImage: portfolioMobileSS,
    technologies: [reactIcon, tailwindIcon],
    link: "https://www.emmanuelguerrero.dev/",
    github: "https://github.com/emmanuelgv408/Portfolio",
  },
  {
    name: "TechZone",
    description:
      "TechZone is a full-stack e-commerce platform built with the MERN stack and TypeScript. It features secure user authentication, dynamic shopping cart, and Stripe-powered checkout. I implemented JWT-based authentication for stateless sessions, bcrypt for password hashing, and a fully responsive design. This project demonstrates my ability to build scalable, secure, and user-friendly web applications.",
    image: techzoneSS,
    mobileImage: techzoneMobileSS,
    technologies: [mongodbIcon, expressIcon, nodeIcon, reactIcon, tsIcon, tailwindIcon],
    link: "https://techzone-eight.vercel.app/",
    github: "https://github.com/emmanuelgv408/TechZone",
    video: "https://youtube.com/embed/pH-YAgP-Fsk?si=J0JXC-GM_YSrI1jO"
  },
  {
    name: "DevMatch (In Progress)",
    description:
      "DevMatch is a social platform for developers to showcase projects, connect, and collaborate. Features currently implemented include follow/unfollow system and post creation. Planned features include:\n\n- Real-time chat and notifications using Socket.IO\n- JWT-based authentication and role-based access\n- Service/Controller/Route architecture for maintainable backend\n- Real-time events for likes, comments, and updates\n- Full-stack TypeScript with React, Node.js, Express, and MongoDB\n\nThis project demonstrates full-stack development, real-time interactions, and scalable architecture.",
    technologies: [mongodbIcon, expressIcon, nodeIcon, reactIcon, tsIcon, tailwindIcon],
    github: "https://github.com/emmanuelgv408/DevMatch",
    video: "https://www.youtube.com/embed/YOUR_DEVMATCH_VIDEO_ID",
  },
];

function ProjectCard({ name, description, image, mobileImage, technologies, link, github, video }) {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-6">
      {/* Left */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-sm text-center md:text-left">{description}</p>

        {/* Buttons */}
        <div className="flex gap-3">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="mt-3 border rounded-3xl py-2 px-3 text-primary-text bg-gray-700 hover:bg-gray-600 hover:cursor-pointer">
                View Project
              </button>
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <button className="mt-3 border rounded-3xl py-2 px-3 text-primary-text bg-gray-700 hover:bg-gray-600 hover:cursor-pointer">
                GitHub Repo
              </button>
            </a>
          )}
        </div>

        {/* Technologies */}
        <div>
          <p className="text-sm font-bold">Built with</p>
          <div className="flex gap-3 flex-wrap">
            {technologies.map((tech, index) => (
              <img key={index} src={tech} alt="tech-icon" className="w-10" />
            ))}
          </div>
        </div>
      </div>

      {/* Right: Screenshot or Video */}
      <div className="w-full md:w-1/2 flex flex-wrap justify-center items-center gap-4">
        {video ? (
          <iframe
            width="100%"
            height="300"
            src={video}
            title={`${name} Demo`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        ) : (
          <>
            <img
              src={image}
              alt={`${name} desktop`}
              className="w-[250px] md:w-[300px] max-h-[300px] object-contain"
            />
            <img
              src={mobileImage}
              alt={`${name} mobile`}
              className="w-[250px] md:w-[300px] max-h-[300px] object-contain"
            />
          </>
        )}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <div
      id="Projects"
      className="min-w-full bg-background p-6 md:p-8 text-cyan flex flex-col gap-8"
    >
      <h1 className="sm:text-2xl text-4xl font-bold flex justify-center underline">
        Projects
      </h1>

      <div className="w-full flex flex-col gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-custom-grey p-4 border rounded-lg">
            <ProjectCard {...project} />
          </div>
        ))}

        <div className="text-center text-sm text-gray-400">
          More projects coming soon...
        </div>
      </div>
    </div>
  );
}

export default Projects;
