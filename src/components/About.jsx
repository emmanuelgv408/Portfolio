import React from "react";
import memoji from "../assets/memoji3.png";

function About() {
  return (
    <div
      id="About"
      className="min-w-full h-[70%] bg-background flex flex-col md:flex-row p-6 md:p-9 gap-8 md:gap-0"
    >
      {/* left */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 text-center md:text-left">
        <h1 className="text-cyan text-3xl font-bold">About</h1>
        <p className="text-cyan text-3xl">
          {" "}
          I'm a{" "}
          <span className="text-white">Software Engineering student</span> at{" "}
          <span className="text-white">Western Governors University</span> with
          future aspirations of becoming a full-stack developer. I'm a{" "}
          <span className="text-white">quick learner</span> and a{" "}
          <span className="text-white">highly adaptable</span> student that will
          exceed your expectations.
        </p>
      </div>

      {/* right */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="bg-custom-grey flex items-center justify-center rounded-full p-10">
          <img
            src={memoji}
            alt=""
            className="w-[150px] md:w-[200px]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
