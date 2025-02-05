import React from "react";
import reactIcon from "../assets/react-icon.svg";
import tailwindIcon from "../assets/tailwind-icon.svg";
import portfolioSS from "../assets/portfolio-screenshot.png";

function Projects() {
  return (
    <div
      id="Projects"
      className="min-w-full bg-background p-6 md:p-8 text-cyan flex flex-col gap-8"
    >
      {/* Header */}
      <h1 className="sm:text-2xl text-4xl font-bold flex justify-center underline ">Projects</h1>

      {/* Projects Container */}
      <div className="bg-custom-grey w-full flex flex-col gap-8 p-4">
        {/* Project 1 */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Left */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-3">
            <h1 className="text-xl font-bold">Portfolio</h1>
            <p className="text-sm text-center md:text-left">
              My personal portfolio that was created with React and Tailwind
            </p>
            <button className="mt-3 border rounded-3xl py-2 px-3 text-primary-text bg-cyan border-none hover:cursor-pointer">
              View Project
            </button>
            <div>
              <p className="text-sm font-bold">Built with</p>
              <div className="flex gap-3">
                <img src={reactIcon} alt="react-icon" className="w-10" />
                <img src={tailwindIcon} alt="tailwind-icon" className="w-10" />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={portfolioSS}
              alt="portfolio-ss"
              className="w-[250px] md:w-[300px] object-contain"
            />
          </div>
        </section>

        {/* Project 2 */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Left */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-3">
            <h1 className="text-xl font-bold">Coming Soon...</h1>
            <p className="text-sm text-center md:text-left">
              Description for the Website
            </p>
            <button className="mt-3 border rounded-3xl py-2 px-3 text-primary-text bg-cyan border-none hover:cursor-pointer">
              View Project
            </button>
            <div>
              <p className="text-sm font-bold">Built with</p>
              <div className="flex gap-3">
                <img src={reactIcon} alt="react-icon" className="w-10" />
                <img src={tailwindIcon} alt="tailwind-icon" className="w-10" />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={portfolioSS}
              alt="portfolio-ss"
              className="w-[250px] md:w-[300px] object-contain"
            />
          </div>
        </section>

        {/* Project 3 */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Left */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-3">
            <h1 className="text-xl font-bold">Coming Soon...</h1>
            <p className="text-sm text-center md:text-left">
              Description for the Website
            </p>
            <button className="mt-3 border rounded-3xl py-2 px-3 text-primary-text bg-cyan border-none hover:cursor-pointer">
              View Project
            </button>
            <div>
              <p className="text-sm font-bold">Built with</p>
              <div className="flex gap-3">
                <img src={reactIcon} alt="react-icon" className="w-10" />
                <img src={tailwindIcon} alt="tailwind-icon" className="w-10" />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={portfolioSS}
              alt="portfolio-ss"
              className="w-[250px] md:w-[300px] object-contain"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
