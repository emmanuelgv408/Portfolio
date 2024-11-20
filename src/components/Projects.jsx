import React from "react";
import reactIcon from "../assets/react-icon.svg";
import tailwindIcon from "../assets/tailwind-icon.svg";
import portfolioSS from'../assets/portfolio-screenshot.png'

function Projects() {
  return (
    <div id = 'Projects'className="h-full min-w-full bg-background p-8 text-cyan flex flex-col gap-3">
      <h1 className="text-3xl font-bold flex justify-center">
        Latest Projects
      </h1>
      {/* projects container */}
      <div className="bg-custom-grey min-w-full h-[90%] flex flex-col  gap-5 p-3">
        {/*project 1*/}
        <section className=" h-1/3 flex">
          {/*left*/}
          <div className="w-1/2 flex items-center py-4 flex-col justify-around">
            <h1 className="text-xl font-bold">Portfolio</h1>
            <p className="text-sm">My personal portfolio that was created with React and Tailwind</p>
            <button className="  mt-3 border rounded-3xl py-2 px-3 text-primary-text bg-cyan border-none hover:cursor-pointer">
              View Project
            </button>
            <div className="mt-3">
              <p className="text-sm font-bold">Built with</p>
              {/* tech container*/}
              <div className="flex">
                <img src={reactIcon} alt="react-icon" className="w-10" />
                <img src={tailwindIcon} alt="tailwind-icon" className="w-10" />
              </div>
            </div>
          </div>
          {/*right*/}
          <div className="w-1/2  flex justify-center">
            <img src={portfolioSS} alt="portfolio-ss" className="w-[300px]"/>
          </div>
        </section>

        {/*project 2*/}
        <section className=" h-1/3 flex">
          {/*left*/}
          <div className="w-1/2 flex items-center py-4 flex-col justify-around">
            <h1 className="text-xl font-bold">Comming Soon..</h1>
            <p className="text-sm">Description for the Website</p>
            <button className="  mt-3 border rounded-3xl py-2 px-3 text-primary-text bg-cyan border-none hover:cursor-pointer">
              View Project
            </button>
            <div className="mt-3">
              <p className="text-sm font-bold">Built with</p>
              {/* tech container*/}
              <div className="flex">
                <img src={reactIcon} alt="react-icon" className="w-10" />
                <img src={tailwindIcon} alt="tailwind-icon" className="w-10" />
              </div>
            </div>
          </div>
          {/*right*/}
          <div className="w-1/2  flex justify-center">
            <img src={portfolioSS} alt="portfolio-ss" className="w-[300px]"/>
          </div>
        </section>

        {/*project 3*/}
        <section className=" h-1/3 flex">
          {/*left*/}
          <div className="w-1/2 flex items-center py-4 flex-col justify-around">
            <h1 className="text-xl font-bold">Comming Sooon..</h1>
            <p className="text-sm">Description for the Website</p>
            <button className="  mt-3 border rounded-3xl py-2 px-3 text-primary-text bg-cyan border-none hover:cursor-pointer">
              View Project
            </button>
            <div className="mt-3">
              <p className="text-sm font-bold">Built with</p>
              {/* tech container*/}
              <div className="flex">
                <img src={reactIcon} alt="react-icon" className="w-10" />
                <img src={tailwindIcon} alt="tailwind-icon" className="w-10" />
              </div>
            </div>
          </div>
          {/*right*/}
          <div className="w-1/2  flex justify-center">
            <img src={portfolioSS} alt="portfolio-ss" className="w-[300px]"/>
          </div>
        </section>


      </div>
    </div>
  );
}

export default Projects;
