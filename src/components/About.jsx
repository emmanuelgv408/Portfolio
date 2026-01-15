import React from "react";
import memoji from "../assets/memoji3.png";

function About() {
  return (
    <div className="bg-background px-8 py-10 " id="About">
      <h1 className="sm:text-2xl text-4xl font-bold text-cyan underline text-center mb-8">
        About
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-around gap-8">
        <div className="bg-custom-grey flex items-center justify-center rounded-full p-6 md:p-10">
          <img src={memoji} alt="Memoji" className="w-[150px] md:w-[200px]" />
        </div>

        <div className="w-full md:w-[50%]">
          <p className="text-cyan text-xl">
            I'm a{" "}
            <span className="text-white">full-stack software engineer</span>{" "}
            with hands-on experience building production-style applications
            using{" "}
            <span className="text-white">
              React, TypeScript, Node.js, and MongoDB
            </span>
            . I focus on writing clean, maintainable code and delivering
            responsive, high-performance user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
